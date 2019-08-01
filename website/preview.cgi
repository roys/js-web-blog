#!/usr/bin/python
""" Renderes a post with OGP and Twitter card """
# TODO: Support more than one image for og:image?
import sys
import json
import re
import os
from string import Template

sys.stderr = sys.stdout

print('Content-type: text/html\r\n')

BASE_URL = 'https://blog.roysolberg.com'
PATTERN = re.compile(
    r'(?:SpaBlog\.posts=)(.*)(.*}\(window\.SpaBlog\))', re.DOTALL)

PAGE = os.environ.get('REQUEST_URI', '')
with open('./contents_json.js') as contents_file:
    JS_CONTENTS = contents_file.read()
with open('templates/preview.html') as filein:
    PREVIEW_TEMPLATE = Template(filein.read())

MATCH_OBJECT = PATTERN.search(JS_CONTENTS)
if MATCH_OBJECT is not None:
    POSTS = json.loads(MATCH_OBJECT.group(1))
    for post in reversed(POSTS):
        if post['niceUrl'] in PAGE:
            # TODO: redirectUrls
            url = post['niceUrl']
            title = post['title'].encode('utf-8')
            summary = post['summary'].encode('utf-8')
            text = post['text'].encode('utf-8')
            author = None
            if 'author' in post:
                author = post['author'].encode('utf-8')
            if not author:
                author = 'Roy Solberg'
            category = post['category']['title'].encode('utf-8')

            escapedTitle = title.replace("\"", "&quot;")
            escapedSummary = summary.replace("\"", "&quot;")

            imageUrl = ''
            if len(post.get('images', [])):
                imageUrl = BASE_URL + post['images'][0]

            print(PREVIEW_TEMPLATE.safe_substitute(escapedTitle=escapedTitle.decode('utf-8'), imageUrl=imageUrl, escapedSummary=escapedSummary.decode('utf-8'), author=author.decode('utf-8'), category=category.decode('utf-8'), url=url, title=title, summary=summary.decode('utf-8'), text=text.decode('utf-8')).encode('utf-8'))
            break
