#!/usr/bin/python
import sys
import cgi
import urlparse
import os.path
import json
from pprint import pprint
import re

print 'Content-type: text/html\r\n\r\n'

BASE_URL = 'http://blog.roysolberg.com'

sys.stderr = sys.stdout
# TODO: Clean up this script
# TODO: Use a string template or something for the markup
# TODO: Support more than one image for og:image?
# 'REDIRECT_QUERY_STRING': 'page=X'

page = os.environ['REQUEST_URI']
# print page

with open('./contents_json.js') as contents_file:
    js_contents = contents_file.read()
    # print js_contents

p = re.compile('(?:SpaBlog\.posts =)(.*)(?:;.*}\(window\.SpaBlog\))', re.DOTALL)

matchObject = p.search(js_contents)
if matchObject is not None:
    # print matchObject.group(1)
    jsonStr = matchObject.group(1)
    #jsonStr = jsonStr.replace("\n","").strip()
    # print '[' + jsonStr + ']'
    posts = json.loads(jsonStr)
    # pprint(posts)
    for post in posts:
        # print post['niceUrl']
        if post['niceUrl'] in page:
            url = post['niceUrl']
            title = post['title'].encode('utf-8')
            summary = post['summary'].encode('utf-8')
            text = post['text'].encode('utf-8')

            escapedTitle = title.replace("\"", "&quot;")
            escapedSummary = summary.replace("\"", "&quot;")

            imageUrl = None
            if len(post.get('images', [])):
                imageUrl = post['images'][0]

            print '<!DOCTYPE html>'
            print '<html>'
            print '<head>'
            print '<meta charset="utf-8" />'

            print '<meta property="og:title" content="' + escapedTitle + '"/>'
            if imageUrl is not None:
                print '<meta property="og:image" content="' + BASE_URL + imageUrl + '"/>'
            print '<meta property="og:description" content="' + escapedSummary + '"/>'
            print '<meta property="og:url" content="' + url + '" />'
            print '<meta property="og:type" content="website" />'

            print '<meta name="twitter:card" content="summary_large_image" />'
            print '<meta name="twitter:site" content="@roysolberg" />'
            print '<meta name="twitter:title" content="' + escapedTitle + '" />'
            print '<meta name="twitter:description" content="' + escapedSummary + '" />'
            if imageUrl is not None:
                print '<meta name="twitter:image" content="' + BASE_URL + imageUrl + '" />'

            print '<title>' + title + '</title>'

            print '</head>'
            print '<body>'
            print '<article>'
            print '<h1>' + title + '</h1>'
            print '<p>' + summary + '</p>'
            print '<p>' + text + '</p>'
            print '</article>'
            print '</body>'
            print '</html>'
            break
