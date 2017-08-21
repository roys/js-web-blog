window.SpaBlog = window.SpaBlog || {}; // Our namespace

(function (SpaBlog) {
    SpaBlog.posts =
        [
            {
                title: 'Building a real SPA blog',
                published: true,
                publishDate: '2017-08-08T06:00:00.000Z',
                summary: 'This blog is a real single-page application with no server code or database. It\'s refreshingly easy to work with.',
                niceUrl: '/2017/08/building-a-real-spa-blog',
                text: `<h4>tldr;</h4>This blog is created with <i>Knockout</i> and <i>Materialize</i>, and have all blog posts in a single <i>JavaScript array</i>. All static.
                
<h4>Medium</h4>I wanted a blog. A plain and simple blog. More often than not I read blog posts hosted by <a href="https://medium.com/">medium.com</a>. It seems like they are really dominating these days (at least for tech blogs). And I understand why; the layout is so simple yet attractive and easy to read.
                
I expected to settle with a medium.com blog. However, it isn't possible to have ads in the blog posts. And I wanted that.

<h4>Wordpress</h4>Wordpress has ruled the world for quite a long time. <a href="https://wordpress.com">wordpress.com</a> of course costs money if you want to make any money using ads. I don't expect many dollars in income, so I'd like to avoid any fixed costs. Then there is <a href="https://wordpress.org">wordpress.org</a>, but I don't really want to host it myself and stay up to date with <a href="https://www.cvedetails.com/product/4096/Wordpress-Wordpress.html">security issues</a> and all.

<h4>Blogger</h4>I looked at Google's <a href="https://blogger.com">blogger.com</a>. Customizing the layout and templates I thought I was getting there. They have some really nice features. But I couldn't make it look and feel exactly right. And it felt cumbersome to do all the adjustments to get where I wanted.

<h4>Good old days</h4>I knew I didn't want to reinvent the wheel. If this had been somewhere from 2000 to 2007 I probably would have mashed something together using PHP and MySQL. But the thought of doing that in 2017 repelled me. I didn't want any database setup, SQLs or stuff that takes time from creating the actual product.

<h4>Cloud hosting</h4>Further on I didn't want some hosting at one of the big companies offering "free" (they tend to end up costing a few bucks) backend hosting with all the hassle of setting up a new environment and installing some SDKs that needs to be constantly updated or suddenly removes support for some version of whatever you use.

<h4>Requirements</h4>Basically I had the following requirements.
<ul><li> - High readability and ok design</li><li> - Ad support</li><li> - Simple hosting</li><li> - Easy, but advanced customization</li><li> - Quick to set up with no hassle (no database setup, easy development, no unecessary heavy build systems)</li><li> - SEO friendly</li></ul>
<h4>Solution</h4>I was wondering about using just static HTML files. That would indeed answer most of my requirements. But then I thought about having a simple JavaScript SPA.

<h5>JavaScript framework</h5>I suppose <a href="https://angular.io/">Angular 2</a> or <a href="https://facebook.github.io/react/">React</a> would be among the most logical choices of JavaScript frameworks in 2017. But I wanted productivity and not use a lot of time to learn yet another framework when all I want is a quick and simple blog, so I went for good old <a href="http://knockoutjs.com/">Knockout</a> which I have used quite a lot as earlier on as an IT consultant.

<img class="materialboxed responsive-img" title="Knockout js dead? Not the Google auto completion you want." data-caption="Knockout js dead? Not the Google auto completion you want." alt="Is Knockout JS dead?" src="https://rawgit.com/roys/js-web-blog/master/images/knockout-js_dead.png">

While one might argue that Knockout is beyond its prime time, it sure works great and it is mature. And no matter which newer JavaScript framework I would go for it would soon be considered "old". If you haven't read the article <a href="https://hackernoon.com/how-it-feels-to-learn-javascript-in-2016-d3a717dd577f">How it feels to learn JavaScript in 2016</a> by Jose Aguinaga, you really should. It's painful to read, but so true.

<h5>Design</h5>I'm no designer. So I like to use UI frameworks that ensures that I can't get it completely wrong. I really like Google's <a href="https://material.io/guidelines/">Material Design</a> and is used to using it on Android. I quickly found <a href="http://materializecss.com">Materialize</a> and haven't looked back. It has great features and is a joy to use. I just wish it didn't depend on jQuery.

<h4>GitHub project</h4>If you're interested you can have a look at the source code for this blog at <a href="https://github.com/roys/js-web-blog">https://github.com/roys/js-web-blog</a>. The project itself is licenced under the MIT License, but for the contents (posts and images) I reserve all rights.
`,
                category:
                {
                    title: 'Software development',
                    url: '/software-development'
                },
                tags: [
                    {
                        title: 'JavaScript',
                        url: '/javascript'
                    },
                    {
                        title: 'SPA',
                        url: '/spa'
                    }
                ]
            },
            {
                title: 'Security vulnerability disclosures',
                published: true,
                publishDate: '2017-08-09T21:00:00.000Z',
                summary: 'I\'m preparing a series of posts where I\'m disclosing several security vulnerabilities that I discovered the spring and summer of 2017.',
                niceUrl: '/2017/08/security-vulnerability-disclosures',
                text: `<h4>tldr;</h4>Over the years I've discovered so many security holes and information leaks on the Internet. Earlier I've only notified the involved parties, but I think it's time to go public doing "responsible disclosure".
                
<h4>The purpose</h4>Working with preparing these posts I've asked myself repeatedly if I should go public with my findings or not.

I'm still not entirely sure what the right answer is. What I do know is that <b>I want increased focus on web security</b> and that I feel a <a href="https://en.wikipedia.org/wiki/Social_responsibility">social responsibility</a> to do so.

The purpose of posting these vulnerabilities is fivefold:
 - Make people aware that close to all their personal information is already in the hands of anyone who wants it.
 - I want computer security to be a (bigger) part of the IT education and training.
 - I want computer security to be a natural part of any developer's mindset.
 - I want businesses to know that there might be consequences of being sloppy with people's data.
 - Make your and my own data more safe.

<b>Hopefully the issues presented on this site can be a small part of getting some kind of discussion on how to deal with computer security and personal data.</b>

<h4>What I have done</h4>While looking for security vulnerabilities I have followed a few simple rules.

<h5>What I have done:</h5> - Only looked at webapps (frontends and APIs) and mobile apps
 - Only looked at Norwegian services (though some are internationally available)
 - Immediately reported any security concerns and given reasonably time to fix any problems
 - Only spent minutes until I found some security hole or information leak

<h5>What I have not done:</h5> - Not hid my identity:
   - I have worked from my home IP
   - When logged in I have used my own personal account
   - I have not tried to fly under the radar in regards of staying out of logs etc.
 - Not looked for or used security holes in operating systems, app servers, networking equipment, etc.
 - Not interferred with the operation of the webapps or companies
 - Not altered or deleted any data
 - Not stored any personal data or even tried accessing anything beyond proving the weakness

<h4>Information sensitivity</h4>The levels of the sensitivity in the information leaks I found vary. They go all the way from <i>"Nah, I dont really care"</i> to <i>"0hly shit, this is not cool"</i>. But I think they all represent some unique points in respect of vulnerabilities and in respect of type of personal information.

<h4>Reponsible disclosure</h4>I'm all for <a href="https://en.wikipedia.org/wiki/Responsible_disclosure">responsible disclosure</a> and have immediately reported my findings. Generally I'm not publishing any details the problem has been confirmed fixed. However, sadly, in some cases there's just no interest or response from the other party.

If you want more thoughts about responsible disclosure I would recommand reading <a href="https://www.troyhunt.com/kids-pass-just-reminded-us-how-hard-responsible-disclosure-is/">Troy Hunt's site</a> (and maybe especially the video in that link).
`,
                category:
                {
                    title: 'Security',
                    url: '/security'
                },
                tags: [
                    {
                        title: 'Background article',
                        url: '/background'
                    }
                ]
            },
            {
                title: 'Case #1: Get your Social Security numbers here!',
                published: true,
                publishDate: '2017-08-14T05:30:00.000Z',
                updateDate: '2017-08-17T16:50:00.000Z',
                summary: 'Using only the plate number of a Norwegian car you can find the name, address, Social Security number, etc. of the owners.',
                niceUrl: '/2017/08/get-your-ssn-here',
                text: `<h4>tldr;</h4>While <a href="https://en.wikipedia.org/wiki/National_identification_number#Norway">Norway's version of the Social Security number (SSN)</a> isn't considered sensitive personal information, it can still be used for ID theft and is sometimes treated as an authenticator and not only used for indentification. Knowing (or systematically picking) a car's number plate you can get quite a bit of personal information about the owners. Also, services hosted alongside the one in question seem to have dubious security.

<h4>Summary</h4><table class="summary">
    <tr>
        <td style="width:30%">Who:</td>
        <td>Tryg's mobile app and Infotorg's web services</td>
    </tr>
    <tr>
        <td style="width:30%">Severity level:</td>
        <td><span class="green-text">Low</span> to <span class="orange-text">medium</span></td>
    </tr>
    <tr>
        <td style="widoffth:30%">Reported:</td>
        <td>February 2017</td>
    </tr>
    <tr>
        <td style="width:30%">Reception and handling:</td>
        <td><span class="red-text">Very poor</span></td>
    </tr>
    <tr>
        <td style="width:30%">Status:</td>
        <td><span class="red-text"><strike>Not fixed</strike></span> <span class="green-text">Fixed after this post was published</span></td>
    </tr>
    <tr>
        <td style="width:30%">Issue:</td>
        <td>A lot of personal info available for anyone who wants it</td>
    </tr>
</table>
<div style="padding-top:80px;" class="col s12 m5 l5 xl4 right"><div class="card-panel light-blue darken-1"><span style="text-decoration:underline;" class="white-text"><a class="white-text" href="/2017/08/security-vulnerability-disclosures">Background: The purpose of these posts</a></span></div></div>
<h4>Background</h4><img style="float:left;width:240px;margin-right:20px;" class="materialboxed responsive-img" title="Screenshot from Tryg's app Trygg på reise." data-caption="Screenshot from Tryg's app Trygg på reise." src="/images/tryg-trygg_paa_reise.png"/>The way to get the name (typically to look up the phone number to make contact) of a car owner in Norway has typically been to just send an SMS that costs some cents. A friend and former colleague told me about the insurance company Tryg's app <a href="https://play.google.com/store/apps/details?id=com.no.tryg&hl=en">Trygg på reise (Safe travel)</a> where you can look up this information for free (plus Google broke their SMS app Hangouts making it impossible to send SMSes to 4 digit phone numbers). I had used it for quite a long time when one day I was curious about where it got its data from, if it maybe was possible to create some services on top of that data.

<h4>Approach (technical stuff)</h4><h5>HTTP proxy</h5>If you want to intercept traffic between a server and a mobile app (even SSL), the HTTP proxy <a href="https://www.charlesproxy.com/">Charles</a> (and Android 6 or below for SSL) is the <b>the</b> way to go. It's very easy to use and gives a very good overview of the data going back and forth. And it let's you easily copy the HTTP requests as <a href="https://curl.haxx.se/">Curl</a> commands.

Within a couple of minutes you have a pretty decent control of the HTTP calls for that app.

<h5>Web Service endpoint</h5>The first surprise I got was that the app and server actually use the procotol <a href="https://en.wikipedia.org/wiki/SOAP">SOAP</a> which is just terrible to work with. (I suspect people having to use, develop and debug SOAP services live in a fog of <a href="http://www.urbandictionary.com/define.php?term=FML#1256378">#FML</a>.)
<!--img style="width:300px;float:left;margin-right:20px;" class="materialboxed responsive-img" title="We can finally get all the details about the real-life replica of Il Tempo Gigante. Picture by Curt (https://www.flickr.com/photos/curt-dk/ / CC BY-NC 2.0)" data-caption="We can finally get all the details about the real-life replica of Il Tempo Gigante. Picture by Curt (https://www.flickr.com/photos/curt-dk/ / CC BY-NC 2.0)" src="http://blog.roysolberg.com/images/il_tempo_gigante.jpg"/-->
<img style="width:300px;float:left;margin-right:20px;" class="materialboxed responsive-img" title="Some of the data about the real-life replica of Il Tempo Gigante returned by the web service." data-caption="Some of the data about the real-life replica of Il Tempo Gigante returned by the web service." src="/images/il_tempo_gigante_ws.png"/>The second surprise was that the web service actually sent back much more info than what it display in the user interface in the app, and not only the municipality that you also get with the amentioned SMS service. I've summarized all the details further down after all the technical details here. <b>But seeing both the owner and co-owner's SSNs and addresses surprised me the most.</b>

I noticed that the web service call always included the username and password instead of the returned session id. No biggie, but a bit strange. <b>The strings for usernames and password were all upper case and only 6-7 characters long. The password was almost the same as the username and all of them containing the name of the customer and the abbreviation of the service name. I hope that isn't the standard, that it gives me a clue on how the logins for the other services are.</b>

<img class="materialboxed responsive-img" title="Curl version of the HTTP request from the Tryg app." data-caption="Curl version of the HTTP request from the Tryg app." src="/images/curl_infotorg.png"/>
<h4>Security issue?</h4>The data returned is returned as intended, so there's so information leak in itself. The web service works as it should. However, <b>it's more questionable if it's okay that a service like to be facing a public client</b>.

The data returned from the service is as follows:
 - The owner's first, middle and last name (alt. company name)
 - The owner's full address
 - The owner's Social Security number (org.no. if company)
 - The owner's birthday (as it's part of the SSN in Norway)
 - Any co-owner's first, middle and last name
 - Any co-owner's full address
 - Any co-owner's Social Security number
 - The co-owner's birthday (as it's part of the SSN in Norway)
 - A lot of technical data about the vehicle
 - The insurance company and date of the vehicle insurance
 - The insurance company and dates of the previous vehicle insurance
 - The name of the previous owner
 - Info if and when the vehicle was stolen

<b>Is this okay?</b> All the app does is show the name of the owner and details about the vehicle itself.

Apparently the name of the co-owner and previous owner is public information according to the law called <a href="https://lovdata.no/dokument/NL/lov/2006-05-19-16">Offentlighetsloven (Freedom of information act)</a> (Norwegian link only).

<h4>But wait, could there be more?</h4><a href="https://www.infotorg.no/alle-tjenester">Infotorg provides quite a few services.</a> (Norwegian link only, sorry.) Having the URL for the web service I of course checked out what else was on the server. I was a bit surprised to see that the root site had a seemingly complete list of all the services available at Infotorg. There were links to the documentation and WSDLs (Web Services Description Language) telling about all these services available and how to connect to them and use them. And these services do indeed contain much more sensitive information. There is a national population register, financial information, credit assement, employee register, lay judge register, etc. etc. <b>It's important to note that I never had (or tried to get) access to these other services. My point is that the openess is a bit too much, and seemingly the user credentials policy isn't very strict. But this is just speculation.</b>

To add to the eerie feeling about these services there are links to some test site and test CMS and information about a test client. Google has of course indexed all these other sites and sub domains. Also there are pages giving errors that gives more information about infrastructure and services running.

<h4>Reception and handling</h4><h5>Day zero</h5>I sent an e-mail to the contact e-mail address provided by Tryg at the app's Play Store page. <b>I never got an answer.</b>

I also used a web form to get in touch with Infotorg.

<h5>Day 1 - X</h5>I got an answer from Infotorg in less than 24 hours. That's prompt, that's good. And they wanted more details.

When I provided more details with an example Curl command for them to try I got an automatic e-mail back telling that the person handling this was unavailable. <b>I never heard back after that</b>, so I tried again one month later and this time including a e-mail address from the automatic e-mail that was supposed to be used for urgent cases. <b>I never heard back.</b> So I tried again writing both e-mails again five days before publishing this. <b>I never heard back.</b>

<h5>Day 186</h5>I'm publishing this post. So is this responsible disclosure? Yes, I tried hard to get an answer. But on the other hand, it seems to me that the involved parties don't think that this is a disclosure to begin with, and that it isn't a problem.

<div style="background-color:#ffecb3;padding:10px 10px 15px 10px;" class=""><h4 id="udpate">Update</h4><h5>Day 187 - Tuesday - post publish day 1</h5>Tryg's user at Infotorg's service got closed (as far as I understand, after Tryg contacted Infotorg).

<h5>Day 188 - Wednesday - post publish day 2</h5>Tryg reached out to me. They thanked for the help finding the issue, said they were sorry for it being there in the first place, and told me it had been resolved.

<h5>Day 189 - Thursday - post publish day 3</h5>digi.no published the article <i><a href="https://www.digi.no/artikler/norsk-mobilapp-apnet-for-tapping-av-masse-informasjon-om-norske-bileiere/400386">Norsk mobilapp åpnet for tapping av masse informasjon om norske bileiere</a></i>.

Tryg <a href="#comment-3472389318">commented on this post</a> here themselves.

<b>I think Tryg has - when the information finally reached them - has handled the case very well. They reacted promptly, fixed the problem, and has been very open and honest about everything. I'm really happy with that.</b>
</div>

<h4>Some fun facts</h4><h5>Fun fact #1: The previous King of Norway had his cars registered on him personally</h5><a href="https://no.wikipedia.org/wiki/Kongelige_biler_i_Norge">His Majesty The King has got a few cars</a>. Looking up e.g. the one with licence plate <i>A-1</i> you'll see that now the car is registered with <i>The Royal Court</i>, but it used to be registered directly on our previous King - <a href="https://en.wikipedia.org/wiki/Olav_V_of_Norway">Olav V</a>. They have also trusted the insurance company <a href="https://if.no">If</a> since 1995.

<h5>Fun fact #2: The service also works for Norway's new personal licence plates</h5>The summer 2017 Norwegian Public Roads Administration opened for paying to get your own personal licence plate. It's been quite a few news articles about people getting different funny and fascinating plates. The web service in question works for those as well. Maybe something to think about before sticking your head out there.

<h5>Fun fact #3: Exposed by one single post</h5>Reporting this issue I got a question back for more details. There's no better way to understand a security issue than seeing your own data. The person who responded had got this fully closed private Facebook profile. Or, did he? Well, he had <b>one single public post; a check-in</b>. The check-in was from when he got a free car wash from a big radio show in Norway. In that post there was a picture of the car in the car wash. So he got a pretty low profile on the Internet, but still one could look up the name, address, SSN, etc. Doesn't that hurt just a little bit?

<h4>Conclusion</h4><b>We should probably not fear for our SSN. But I'm still not sure if I like the idea that just based on a licence plate anyone should get your full address or know any details about your insurances.

Further I hope all of Infotorg's more sensitive services are much more secure than first impression I got; that they are alerted if anyone tries any brute force attacks or systematic information gathering, and that the logins don't consist of only a few capital letters.

Also, I wish that it wasn't so hard to get the attention when trying to report a security concern...</b>

<h4>At last some - hopefully - far fetched ideas</h4>I call this "far fetched", because it's hard to believe it would happen, but I can't help thinking it.

We know from media the later years that governments from different countries do collect quite a bit of intelligence and information about people. Wouldn't be interesting for some states to get a catalogue of a big part of Norway's population? I mean, they get a real one-to-one identifier and full names and quite a bit of meta information. Combining this information over time with information from other sources? Observering a dataset like discussed here over time, one can get a sense of family relations, split-ups, address changes, income changes, etc. Is that okay? What if you at some point shared an address with a person that has got an entry ban in a country you want to travel to? Should they stop you too just to be sure?

What about insurance companies? They could in theory use the dataset to target potential customers. If they know that they beat the prices of one other particular insurance company they could make contact and try to sell their product instead. But then again, they have probably always had full access to these data.

If you use your imagination I'm sure you can come up with other ways to (ab)use the data.
`,
                links: [
                    {
                        title: `Background: Purpose of these posts`,
                        url: '/2017/08/security-vulnerability-disclosures'
                    }
                ],
                category:
                {
                    title: 'Security',
                    url: '/security'
                },
                tags: [
                    {
                        title: 'Security Monday',
                        url: '/security-monday'
                    },
                    {
                        title: 'Information leak',
                        url: '/information-leak'
                    },
                    {
                        title: 'Social Security numbers',
                        url: '/ssn'
                    },
                    {
                        title: 'OWASP 2013 A2',
                        url: '/owasp-2013-a2'
                    },
                    {
                        title: 'OWASP 2013 A6',
                        url: '/owasp-2013-a6'
                    }
                ]
            },
            {
                title: `Case #2: Good authentication, but lacking authorization`,
                published: true,
                publishDate: '2017-08-21T07:00:00.000Z',
                summary: `That a service is heavily gated doesn't mean that your information is safe. I'm taking it down a notch this week; this is not a severe case, but an OK reminder for us developers on how we protect our resources and to never trust the client.`,
                niceUrl: '/2017/08/auth-auth',
                text: `<h4>tldr;</h4>The service uses the industry de facto standard for high security in Norway - <a href="https://bankid.no">BankID</a> - for authentication, but still missed authorization check on a HTTP PUT call. A classical weakness to be found in web apps of today.
                
<h4>Summary</h4><table class="summary">
<tr>
    <td style="width:30%">Who:</td>
    <td>Anonymous, let's call them <a href="https://en.wikipedia.org/wiki/Fictional_company">Acme</a></td>
</tr>
<tr>
    <td style="width:30%">Severity level:</td>
    <td><span class="green-text">Very low</span></td>
</tr>
<tr>
    <td style="width:30%">Reported:</td>
    <td>March 2017</td>
</tr>
<tr>
    <td style="width:30%">Reception and handling:</td>
    <td><span class="green-text">Very good</span></td>
</tr>
<tr>
    <td style="width:30%">Status:</td>
    <td><span class="green-text">Fixed</span></td>
</tr>
<tr>
    <td style="width:30%">Reward:</td>
    <td>1 x <a href="https://www.norsk-tipping.no/flax">Flax scratch ticket</a> (≈3 USD (1:600,000 chance to win 125,000.- USD (but no, I didn't win anything)))</td>
</tr>
<tr>
    <td style="width:30%">Issue:</td>
    <td>Missing authorization on REST endpoint + still authenticated after browser timing out session</td>
</tr>
</table>
<div style="padding-top:80px;" class="col s12 m5 l5 xl4 right"><div class="card-panel light-blue darken-1"><span style="text-decoration:underline;" class="white-text"><a class="white-text" href="/2017/08/security-vulnerability-disclosures">Background: The purpose of these posts</a></span></div></div>
<h4>Background</h4>Acme is a "service booklet" for your home. It's a place to store all of the documentation about who's done what and your proof that all is ok if you were to sell your home. Everything about my house is stored at their servers.

I got a "snap" of 5 scratch tickets from a friend that he got from Acme for reporting some problem with him getting the wrong house number. I thought maybe there could be an easy way for me to get some scratch tickets as well.

<h4>Approach (technical stuff)</h4>This was a quick one I did while grabbing some lunch one Saturday.

<h5>Browser developer tools</h5>I logged in to Acme using BankID and having <a href="https://developers.google.com/web/tools/chrome-devtools/">Chrome DevTools</a> open. I surfed back and forth and got an impression of the webapp and got a list of URLs that was being called + headers and cookies and whatnot.

As with most webapps today there were a lot of Ajax calls going on, transfering JSON. I then tried replacing some IDs in URLs. In general stuff seemed pretty good. The security seemed to be in place.

Then I saw this sort of "task list" where you have these set tasks - and can create new ones - for stuff you need to do with your home. You can also share them with third parties so they can do them for your and sign of on the work done. Once finished can set the task to status <i>Done</i>.

<h5>Curl</h5>Most developer tools for browsers let you copy any HTTP request as a <a href="https://curl.haxx.se/">Curl</a> command. <b>I got an ID of one of the tasks of my friend and his approval to change the status of it.</b>

I've changed URLs and IDs, but otherwise it was this command used:<pre class="prettyprint">
curl 'https://example.com/UpdateTask' \\
    -H 'Cookie: &lt;some cookies for BankID, session and Google Analytics&gt;' \\
    -H 'Origin: https://example.com' \\
    -H 'Accept-Encoding: gzip, deflate, br' \\
    -H 'Accept-Language: nb-NO,nb;q=0.8,no;q=0.6,nn;q=0.4,en-US;q=0.2,en;q=0.2' \\
    -H 'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/57.0.2987.98 Safari/537.36' \\
    -H 'Content-Type: application/json;charset=UTF-8' \\
    -H 'Accept: application/json, text/plain, */*' \\
    -H 'Referer: https://example.com/app/index.html' \\
    -H 'X-Requested-With: XMLHttpRequest' \\
    -H 'Connection: keep-alive'  \\
    --data-binary '{"taskId":&lt;some other person\’s task ID&gt;,"status":true}' \\
    --compressed</pre>
<b>And bingo, the server returned HTTP 200 and the task was changed.</b>

<h5>Session management</h5>Returning to my computer some time after doing this, the browser told me I got logged out because of the session being timed out. I tried one of the Curl commands one more time and saw that the HTTP request went through and returned HTTP 200. <b>Appearantly I was still logged in and had a valid session even though my browser told me otherwise.</b>

<h4>Classical issue</h4><b>I think this is one of the more common issues in web apps today. When authorization of GETting data is in place, one have a tendency not to check if the client is allowed to do what he's telling the server when PUTting data back.</b>

<h4>Reception and handling</h4><h5>Day zero</h5>I sent an e-mail telling about the two minor issues.

<h5>Day 2 - before noon</h5>I got a long and well-written reply thanking me for finding the issue and telling that the developers were looking at it. They also went on telling that they were growing and there was a new employee coming in who would have the service's security as its responsiblity.

<h5>Day 2 - night</h5>I got an update. <b>They had found the authorization issue and were in the process of fixing it.</b> In regards of the session still being valid they said it was just that the sever had one hour session timeout while the JavaScript app had it set to 20 minutes.

<h4>Anonymous you say?</h4><b>I contacted Acme telling them that I was posting this. Until then they were very professional and open, but suddenly they became a bit defensive.</b> And they wanted to "inform me" that I had broken their terms the moment I had checked if they had any security holes. They did not want me to mention their company name or brand. They were afraid of the media. I can fully understand that. Who doesn't want to protect their brand?

<b>I think they have handled the situation so well, and the issue was so minor, that I want to encourage them to come forward.</b>

<h4>Conclusion</h4>This was a minor issue, but an issue I see quite a bit. The reception and handling was good, at least until I told I was publishing this. Developers: Go and check those POST and PUT requests and double check that you verify if the client is allowed to do what it wants to.
`,
                links: [
                    {
                        title: `Background: Purpose of these posts`,
                        url: '/2017/08/security-vulnerability-disclosures'
                    }
                ],
                category:
                {
                    title: 'Security',
                    url: '/security'
                },
                tags: [
                    {
                        title: 'Security Monday',
                        url: '/security-monday'
                    },
                    {
                        title: 'Authorization',
                        url: '/authorization'
                    },
                    {
                        title: 'Session handling',
                        url: '/session-handling'
                    },
                    {
                        title: 'OWASP 2013 A2',
                        url: '/owasp-2013-a2'
                    },
                    {
                        title: 'OWASP 2013 A7',
                        url: '/owasp-2013-a7'
                    }
                ]
            },
            {
                title: 'Case #3: Are you excited? :)',               
                published: false,
                publishDate: '2017-08-28T06:30:00.000Z',
                summary: ``,
                niceUrl: '/2017/08/case-3',
                text: `
`
            }

        ];
}(window.SpaBlog));
