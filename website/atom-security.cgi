#!/usr/bin/python
""" Renderes the posts as a web feed """
import sys
import json
import re
from string import Template

#sys.stderr = sys.stdout

print 'Content-type: application/atom+xml\r\n'

BASE_URL = 'https://blog.roysolberg.com'
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
        category = post['category']['title'].encode('utf-8')
        if category == 'Security':
            url = post['niceUrl']
            title = post['title'].encode('utf-8')
            summary = post['summary'].encode('utf-8')
            text = post['text'].encode('utf-8')
            published = post['publishDate']
            updated = post.get('updateDate', published)

            entries += ENTRY_TEMPLATE.safe_substitute(id=BASE_URL + url, title=title, url=BASE_URL + url, category=category, summary=summary,
                                                    published=published, updated=updated, author='Roy Solberg', contents=text.decode('utf-8')).encode('utf-8')

print FEED_TEMPLATE.safe_substitute(entries=entries, feedId=BASE_URL, baseUrl=BASE_URL)