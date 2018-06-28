#!/usr/bin/python
""" Renderes the posts as a web feed """
import sys
import json
import re
from string import Template

#sys.stderr = sys.stdout

print 'Content-type: application/atom+xml; charset=utf-8\r\n'

BASE_URL = 'https://blog.roysolberg.com'
FEED_URL = BASE_URL + '/'
PATTERN = re.compile(
    r'(?:SpaBlog\.posts=)(.*)(.*}\(window\.SpaBlog\))', re.DOTALL)

with open('./contents_json.js') as contents_file:
    js_contents = contents_file.read()
with open('templates/atom.xml') as filein:
    FEED_TEMPLATE = Template(filein.read())
with open('templates/atom-entry.xml') as filein:
    ENTRY_TEMPLATE = Template(filein.read())

entries = ''

# Have to get the base URL in there for the newsletter e-mails:
js_contents = js_contents.replace('href=\\"/', 'href=\\"' + BASE_URL + '/')
js_contents = js_contents.replace('src=\\"/', 'src=\\"' + BASE_URL + '/')

MATCH_OBJECT = PATTERN.search(js_contents)
if MATCH_OBJECT is not None:
    POSTS = json.loads(MATCH_OBJECT.group(1))
    for post in reversed(POSTS):
        if 'published' in post and post['published']:
            # TODO: redirectUrls - avoid sending new e-mail
            url = post['niceUrl']
            title = post['title'].encode('utf-8')
            summary = post['summary'].encode('utf-8')
            text = post['text'].encode('utf-8')
            category = post['category']['title'].encode('utf-8')
            published = post['publishDate']
            updated = post.get('updateDate', published)
            author = 'Roy Solberg'
            if 'author' in post:
                author = post['author']

            entries += ENTRY_TEMPLATE.safe_substitute(id=BASE_URL + url, title=title, url=BASE_URL + url, category=category, summary=summary.decode('utf-8'),
                                                      published=published, updated=updated, author=author, contents=text.decode('utf-8')).encode('utf-8')

print FEED_TEMPLATE.safe_substitute(entries=entries, feedId=FEED_URL, baseUrl=BASE_URL)
