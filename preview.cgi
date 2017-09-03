#!/usr/bin/python
import sys
import cgi
import urlparse
import os.path
import json
from pprint import pprint
import re

print 'Content-type: text/html\r\n\r\n'

sys.stderr = sys.stdout
# TODO: Clean up this script
# TODO: Use a string template or something for the markup
# TODO: Add preview image
# 'REDIRECT_QUERY_STRING': 'page=X'

page = os.environ['REQUEST_URI']
# print page

with open('./contents_es2015.js') as contents_file:
    js_contents = contents_file.read()
    # print js_contents

p = re.compile(
    '(?:SpaBlog\.posts =)(.*)(?:;.*}\(window\.SpaBlog\))', re.DOTALL)

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
            print '<!DOCTYPE html>'
            print '<html>'
            print '<head>'
            print '<meta charset="utf-8" />'

            print '<meta property="og:title" content="' + post['title'] + '"/>'
            print '<meta property="og:image" content=""/>'
            print '<meta property="og:description" content="' + post['summary'] + '"/>'
            print '<meta property="og:url" content="' + post['niceUrl'] + '" />'
            
            print '<meta name="twitter:card" content="summary" />'
            print '<meta name="twitter:site" content="@roysolberg" />'
            print '<meta name="twitter:title" content="' + post['title'] + '" />'
            print '<meta name="twitter:description" content="' + post['summary'] + '" />'
            print '<meta name="twitter:image" content="" />'

            print '<title>' + post['title'] + '</title>'

            print '</head>'
            print '<body>'
            print '<article>'
            print '<h1>' + post['title'] + '</h1>'
            print '<p>' + post['summary'] + '</p>'
            print '<p>' + post['text'] + '</p>'
            print '</article>'
            print '</body>'
            print '</html>'
            break
