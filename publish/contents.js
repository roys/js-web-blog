var window = window || {}; // Not defined when run on command-line

window.SpaBlog = window.SpaBlog || {}; // Our namespace

(function (SpaBlog) {
    SpaBlog.pages =
        [
            {
                "title": "About Roy",
                "summary": null,
                "niceUrl": "/about",
                "text": `I'm Roy Solberg, a Norwegian system developer working as Android Tech Lead for <a href="http://fotmob.com">FotMob</a> - one of the world's biggest football ⚽ apps.

Before I started working with FotMob I worked 10 years as an IT consultant. I'm a full stack developer, but have an extra passion when it comes to mobile apps, smart homes, virtual assistants and other new tech.

I mainly started this blog as <a href="/2017/08/security-vulnerability-disclosures">I grew tired of seeing all these security vulnerabilities</a> in web and mobile apps. 

<h5>Speaking</h5>I always give a few talks every year - lately especially on IT security and related to findings I have presented on my blog. Other topics include smart homes and mobile app development. If you're interested in me giving a talk just <a href="https://spamty.eu/mail/v4/796/sx477Orkbc77ae0788/" onclick="window.open('https://spamty.eu/mail/v4/796/sx477Orkbc77ae0788/', '', 'toolbar=0,scrollbars=0,location=0,statusbar=0,menubar=0,resizable=0,width=750,height=720'); return false;" title="Click to reveal my e-mail address">send me an e-mail</a> or give me a word on <a href="https://twitter.com/roysolberg">Twitter</a> or <a href="https://linkedin.com/in/roysolberg">LinkedIn</a>. 🙂

I give both talks that are on a higher level (not technical) and on as a low level as desired. I also do workshops.

<h5>Find me</h5><a class="deep-purple-text text-lighten-2 no-ext" href="https://twitter.com/roysolberg" title="Twitter"><i class="icon-twitter"></i></a> <a class="deep-purple-text text-lighten-2 no-ext" href="https://stackoverflow.com/users/467650/roy-solberg" title="Stack Overflow"><i class="icon-stackoverflow"></i></a> <a class="deep-purple-text text-lighten-2 no-ext" href="https://github.com/roys" title="GitHub"><i class="icon-github-circled"></i></a> <a class="deep-purple-text text-lighten-2 no-ext" href="https://linkedin.com/in/roysolberg" title="LinkedIn"><i class="icon-linkedin"></i></a> <a class="deep-purple-text text-lighten-2 no-ext" href="https://spamty.eu/mail/v4/796/sx477Orkbc77ae0788/" onclick="window.open('https://spamty.eu/mail/v4/796/sx477Orkbc77ae0788/', '', 'toolbar=0,scrollbars=0,location=0,statusbar=0,menubar=0,resizable=0,width=750,height=720'); return false;" title="Click to reveal my e-mail address"><i class="icon-mail-alt"></i></a>

<h5>Stay up to date</h5>The best way to stay up to date is to either <a href="https://twitter.com/roysolberg">follow me on Twitter</a>, <a href="/atom">subscribe to my Atom (RSS) feed</a> or sign up for my mailing list in the form below:`
            },
            {
                "title": "Screen capture service",
                "summary": null,
                "niceUrl": "/screen-capture-service",
                "text": `Do you want to submit <a href="https://developers.facebook.com/docs/games/instant-games/guides/lightweight/">lightweight Facebook Instant Games</a>, but don't have a device to record a screen capture? Well, I can help you out.

I offer up to 3 screencasts of gameplay of your game on a Samsung J1 Ace (SM-J110H) for a 100 USD. If you need more recordings to get your game approved I can give you up to 3 more screencasts for 50 USD.

If you are interested <a href="https://spamty.eu/mail/v4/796/sx477Orkbc77ae0788/" onclick="window.open('https://spamty.eu/mail/v4/796/sx477Orkbc77ae0788/', '', 'toolbar=0,scrollbars=0,location=0,statusbar=0,menubar=0,resizable=0,width=750,height=720'); return false;" title="Click to reveal my e-mail address">send me an e-mail</a> or give me a word on <a href="https://twitter.com/roysolberg">Twitter</a>. :)

These are the reference devices listed by Facebook:
 - Samsung Grand Neo Plus (GT-I9060I)
 - <em>Samsung J1 Ace (SM-J110H)</em>
 - Samsung Galaxy S3 Neo (I9301I)
 - Motorola Moto G (XT1033)
 - Motorola Droid RazrM (XT907)
 - Asus ZenFone C (Z007)
 - Huawei Honor Holly (Hol-U19)
 - HTC Desire
 - Sony Xperia E4 (E2115)
`
            }
        ];
    SpaBlog.posts =
        [
            {
                "title": "Building a real SPA blog",
                "published": true,
                "publishDate": "2017-08-08T06:00:00.000Z",
                "summary": `This blog is a real single-page application with no server code or database. It\'s refreshingly easy to work with.`,
                "niceUrl": "/2017/08/building-a-real-spa-blog",
                "text": `<h4>tl;dr</h4>This blog is created with <i>Knockout</i> and <i>Materialize</i>, and have all blog posts in a single <i>JavaScript array</i>. All static.
                
<h4>Medium</h4>I wanted a blog. A plain and simple blog. More often than not I read blog posts hosted by <a href="https://medium.com/">medium.com</a>. It seems like they are really dominating these days (at least for tech blogs). And I understand why; the layout is so simple yet attractive and easy to read.
                
I expected to settle with a medium.com blog. However, it isn't possible to have ads in the blog posts. And I wanted that.

<h4>Wordpress</h4>Wordpress has ruled the world for quite a long time. <a href="https://wordpress.com">wordpress.com</a> of course costs money if you want to make any money using ads. I don't expect many dollars in income, so I'd like to avoid any fixed costs. Then there is <a href="https://wordpress.org">wordpress.org</a>, but I don't really want to host it myself and stay up to date with <a href="https://www.cvedetails.com/product/4096/Wordpress-Wordpress.html">security issues</a> and all.

<h4>Blogger</h4>I looked at Google's <a href="https://blogger.com">blogger.com</a>. Customizing the layout and templates I thought I was getting there. They have some really nice features. But I couldn't make it look and feel exactly right. And it felt cumbersome to do all the adjustments to get where I wanted.

<h4>Good old days</h4>I knew I didn't want to reinvent the wheel. If this had been somewhere from 2000 to 2007 I probably would have mashed something together using PHP and MySQL. But the thought of doing that in 2017 repelled me. I didn't want any database setup, SQL or stuff that takes time from creating the actual product.

<h4>Cloud hosting</h4>Further on I didn't want some hosting at one of the big companies offering "free" (they tend to end up costing a few bucks) backend hosting with all the hassle of setting up a new environment and installing some SDKs that needs to be constantly updated or suddenly removes support for some version of whatever you use.

<h4>Requirements</h4>Basically I had the following requirements.
<ul><li> - High readability and ok design</li><li> - Ad support</li><li> - Simple hosting</li><li> - Easy, but advanced customization</li><li> - Quick to set up with no hassle (no database setup, easy development, no unecessary heavy build systems)</li><li> - SEO friendly</li></ul>
<h4>Solution</h4>I was wondering about using just static HTML files. That would indeed answer most of my requirements. But then I thought about having a simple JavaScript SPA.

<h5>JavaScript framework</h5>I suppose <a href="https://angular.io/">Angular 2</a> or <a href="https://facebook.github.io/react/">React</a> would be among the most logical choices of JavaScript frameworks in 2017. But I wanted productivity and not use a lot of time to learn yet another framework when all I want is a quick and simple blog, so I went for good old <a href="http://knockoutjs.com/">Knockout</a> which I have used quite a lot as earlier on as an IT consultant.

<img class="materialboxed responsive-img" title="Knockout js dead? Not the Google auto completion you want." data-caption="Knockout js dead? Not the Google auto completion you want." alt="Is Knockout JS dead?" src="/images/knockout-js_dead.png">

While one might argue that Knockout is beyond its prime time, it sure works great and it is mature. And no matter which newer JavaScript framework I would go for it would soon be considered "old". If you haven't read the article <a href="https://hackernoon.com/how-it-feels-to-learn-javascript-in-2016-d3a717dd577f">How it feels to learn JavaScript in 2016</a> by Jose Aguinaga, you really should. It's painful to read, but so true.

<h5>Design</h5>I'm no designer. So I like to use UI frameworks that ensures that I can't get it completely wrong. I really like Google's <a href="https://material.io/guidelines/">Material Design</a> and is used to using it on Android. I quickly found <a href="http://materializecss.com">Materialize</a> and haven't looked back. It has great features and is a joy to use. I just wish it didn't depend on jQuery.

<h4>GitHub project</h4>If you're interested you can have a look at the source code for this blog at <a href="https://github.com/roys/js-web-blog">https://github.com/roys/js-web-blog</a>. The project itself is licenced under the MIT License, but for the contents (posts and images) I reserve all rights.
`,
                "images": ["/images/knockout-js_dead.png"],
                "category":
                {
                    "title": "Software development",
                    "url": "/software-development"
                },
                "tags": [
                    {
                        "title": "JavaScript",
                        "url": "/javascript"
                    },
                    {
                        "title": "SPA",
                        "url": "/spa"
                    }
                ],
                "commentsIdentifier": "http://blog.roysolberg.com/2017/08/get-your-ssn-here"
            },
            {
                "title": "Security vulnerability disclosures",
                "published": true,
                "publishDate": "2017-08-09T21:00:00.000Z",
                "summary": `I\'m preparing a series of posts where I\'m disclosing several security vulnerabilities that I discovered the spring and summer of 2017.`,
                "niceUrl": "/2017/08/security-vulnerability-disclosures",
                "text": `<h4>tl;dr</h4>Over the years I've discovered so many security holes and information leaks on the Internet. Earlier I've only notified the involved parties, but I think it's time to go public doing "responsible disclosure".
                
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
 - Not interfered with the operation of the web apps or companies
 - Not altered or deleted any data
 - Not stored any personal data or even tried accessing anything beyond proving the weakness

<h4>Information sensitivity</h4>The levels of the sensitivity in the information leaks I found vary. They go all the way from <i>"Nah, I don't really care"</i> to <i>"0hly shit, this is not cool"</i>. But I think they all represent some unique points in respect of vulnerabilities and in respect of type of personal information.

<h4>Responsible disclosure</h4>I'm all for <a href="https://en.wikipedia.org/wiki/Responsible_disclosure">responsible disclosure</a> and have immediately reported my findings. Generally I'm not publishing any details the problem has been confirmed fixed. However, sadly, in some cases there's just no interest or response from the other party.

If you want more thoughts about responsible disclosure I would recommend reading <a href="https://www.troyhunt.com/kids-pass-just-reminded-us-how-hard-responsible-disclosure-is/">Troy Hunt's site</a> (and maybe especially the video in that link).
`,
                "category":
                {
                    "title": "Security",
                    "url": "/security"
                },
                "tags": [
                    {
                        "title": "Background article",
                        "url": "/background"
                    }
                ]
            },
            {
                "title": `Case #1: Get your Social Security numbers here!`,
                "published": true,
                "hot": false,
                "publishDate": "2017-08-14T05:30:00.000Z",
                "updateDate": "2017-08-17T16:50:00.000Z",
                "summary": `Using only the plate number of a Norwegian car you can find the name, address, Social Security number, etc. of the owners.`,
                "niceUrl": "/2017/08/get-your-ssn-here",
                "text": `<h4>tl;dr</h4>While <a href="https://en.wikipedia.org/wiki/National_identification_number#Norway">Norway's version of the Social Security number (SSN)</a> isn't considered sensitive personal information, it can still be used for ID theft and is sometimes treated as an authenticator and not only used for identification. Knowing (or systematically picking) a car's number plate you can get quite a bit of personal information about the owners. Also, services hosted alongside the one in question seem to have dubious security.

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
        <td style="width:30%">Reported:</td>
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
<!--img style="width:300px;float:left;margin-right:20px;" class="materialboxed responsive-img" title="We can finally get all the details about the real-life replica of Il Tempo Gigante. Picture by Curt (https://www.flickr.com/photos/curt-dk/ / CC BY-NC 2.0)" data-caption="We can finally get all the details about the real-life replica of Il Tempo Gigante. Picture by Curt (https://www.flickr.com/photos/curt-dk/ / CC BY-NC 2.0)" src="/images/il_tempo_gigante.jpg"/-->
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

<div style="background-color:#ffecb3;padding:10px 10px 15px 10px;" class=""><h4 id="update">Update</h4><h5>Day 187 - Tuesday - post publish day 1</h5>Tryg's user at Infotorg's service got closed (as far as I understand, after Tryg contacted Infotorg).

<h5>Day 188 - Wednesday - post publish day 2</h5>Tryg reached out to me. They thanked for the help finding the issue, said they were sorry for it being there in the first place, and told me it had been resolved.

<h5>Day 189 - Thursday - post publish day 3</h5>digi.no published the article <i><a href="https://www.digi.no/artikler/norsk-mobilapp-apnet-for-tapping-av-masse-informasjon-om-norske-bileiere/400386">Norsk mobilapp åpnet for tapping av masse informasjon om norske bileiere</a></i>.

Tryg <a href="#comment-3472389318">commented on this post</a> here themselves.

<b>I think Tryg - when the information finally reached them - has handled the case very well. They reacted promptly, fixed the problem, and has been very open and honest about everything. I'm really happy with that.</b>
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
                "images": ["/images/il_tempo_gigante_ws.png", "/images/tryg-trygg_paa_reise.png", "/images/curl_infotorg.png"],
                "links": [
                    {
                        "title": "Background: Purpose of these posts",
                        "url": "/2017/08/security-vulnerability-disclosures"
                    }
                ],
                "category":
                {
                    "title": "Security",
                    "url": "/security"
                },
                "tags": [
                    {
                        "title": "Security Monday",
                        "url": "/security-monday"
                    },
                    {
                        "title": "Information leak",
                        "url": "/information-leak"
                    },
                    {
                        "title": "Social Security numbers",
                        "url": "/ssn"
                    },
                    {
                        "title": "OWASP 2013 A2",
                        "url": "/owasp-2013-a2"
                    },
                    {
                        "title": "OWASP 2013 A6",
                        "url": "/owasp-2013-a6"
                    }
                ],
                "commentsIdentifier": "http://blog.roysolberg.com/2017/08/get-your-ssn-here"
            },
            {
                "title": `Case #2: Good authentication, but lacking authorization`,
                "published": true,
                "publishDate": "2017-08-21T07:00:00.000Z",
                "summary": `That a service is heavily gated doesn't mean that your information is safe. I'm taking it down a notch this week; this is not a severe case, but an OK reminder for us developers on how we protect our resources and to never trust the client.`,
                "niceUrl": "/2017/08/auth-auth",
                "text": `<h4>tl;dr</h4>The service uses the industry de facto standard for high security in Norway - <a href="https://bankid.no">BankID</a> - for authentication, but still missed authorization check on a HTTP PUT call. A classical weakness to be found in web apps of today.
                
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

<h5>Browser developer tools</h5>I logged in to Acme using BankID and having <a href="https://developers.google.com/web/tools/chrome-devtools/">Chrome DevTools</a> open. I surfed back and forth and got an impression of the web app and got a list of URLs that was being called + headers and cookies and whatnot.

As with most web apps today there were a lot of Ajax calls going on, transferring JSON. I then tried replacing some IDs in URLs. In general stuff seemed pretty good. The security seemed to be in place.

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

<h5>Session management</h5>Returning to my computer some time after doing this, the browser told me I got logged out because of the session being timed out. I tried one of the Curl commands one more time and saw that the HTTP request went through and returned HTTP 200. <b>Apparently I was still logged in and had a valid session even though my browser told me otherwise.</b>

<h4>Classical issue</h4><b>I think this is one of the more common issues in web apps today. When authorization of GETting data is in place, one have a tendency not to check if the client is allowed to do what he's telling the server when PUTting data back.</b>

<h4>Reception and handling</h4><h5>Day zero</h5>I sent an e-mail telling about the two minor issues.

<h5>Day 2 - before noon</h5>I got a long and well-written reply thanking me for finding the issue and telling that the developers were looking at it. They also went on telling that they were growing and there was a new employee coming in who would have the service's security as its responsiblity.

<h5>Day 2 - night</h5>I got an update. <b>They had found the authorization issue and were in the process of fixing it.</b> In regards of the session still being valid they said it was just that the sever had one hour session timeout while the JavaScript app had it set to 20 minutes.

<h4>Anonymous you say?</h4><b>I contacted Acme telling them that I was posting this. Until then they were very professional and open, but suddenly they became a bit defensive.</b> And they wanted to "inform me" that I had broken their terms the moment I had checked if they had any security holes. They did not want me to mention their company name or brand. They were afraid of the media. I can fully understand that. Who doesn't want to protect their brand?

<b>I think they have handled the situation so well, and the issue was so minor, that I want to encourage them to come forward.</b>

<h4>Conclusion</h4>This was a minor issue, but an issue I see quite a bit. The reception and handling was good, at least until I told I was publishing this. Developers: Go and check those POST and PUT requests and double check that you verify if the client is allowed to do what it wants to.
`,
                "links": [
                    {
                        "title": "Background: Purpose of these posts",
                        "url": "/2017/08/security-vulnerability-disclosures"
                    }
                ],
                "category":
                {
                    "title": "Security",
                    "url": "/security"
                },
                "tags": [
                    {
                        "title": "Security Monday",
                        "url": "/security-monday"
                    },
                    {
                        "title": "Authorization",
                        "url": "/authorization"
                    },
                    {
                        "title": "Session handling",
                        "url": "/session-handling"
                    },
                    {
                        "title": "OWASP 2013 A2",
                        "url": "/owasp-2013-a2"
                    },
                    {
                        "title": "OWASP 2013 A7",
                        "url": "/owasp-2013-a7"
                    }
                ],
                "commentsIdentifier": "http://blog.roysolberg.com/2017/08/auth-auth"
            },
            {
                "title": `Case #3: Who's got your IP address today?`,
                "published": true,
                "publishDate": "2017-08-28T04:45:00.000Z",
                "summary": `One of the "digital mailbox" services used by more than 400 central and local Norwegian government agencies to send mail, was leaking IP addresses and full names.`,
                "niceUrl": "/2017/08/digipost-leak",
                "text": `<h4>tl;dr</h4><i>Digipost</i> - one of two "digital mailboxes" in Norway where you can get mail from public authorities - leaked users' full real name, IP addresses and login timestamps.
                
<h4>Summary</h4><table class="summary">
<tr>
    <td style="width:30%">Who:</td>
    <td><a href="https://www.posten.no/en/">Norwegian postal service's</a> <a href="https://www.digipost.no/">Digipost</a></td>
</tr>
<tr>
    <td style="width:30%">Severity level:</td>
    <td><span class="orange-text">Medium</span></td>
</tr>
<tr>
    <td style="width:30%">Reported:</td>
    <td>May 2017</td>
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
    <td>125 USD worth of gift certificates</td>
</tr>
<tr>
    <td style="width:30%">Issue:</td>
    <td>Information leak with users' name and IP address</td>
</tr>
</table>
<div style="padding-top:80px;" class="col s12 m5 l5 xl4 right"><div class="card-panel light-blue darken-1"><span style="text-decoration:underline;" class="white-text"><a class="white-text" href="/2017/08/security-vulnerability-disclosures">Background: The purpose of these posts</a></span></div></div>
<h4>Background</h4>In Norway we have two official suppliers for a "digital mailbox" where Norwegian public agencies can send you letters and documents. It's considered a more secure way than regular mail for delivering important letters and documents. The mailboxes have been pushed pretty hard the last couple of years, ensuring that as many as possible will sign up for it.

I've personally used Digipost for quite a few years now. I think it's a great service for receiving important documents. One day I was wondering if my information and documents were safe with them.

<h4>Approach (technical stuff)</h4><h5>HATEOAS</h5>Earlier on I used to attend the very good Java conference <a href="https://javazone.no/">JavaZone</a> every year. Five years ago I was at a talk from a couple of consultants working with Digipost, called <a href="https://vimeo.com/49392437">Hypermediadrevet API i praksis</a> (Hypermedia driven API in practice). It was an inspiring talk which made me make at least the next REST API hypermedia driven.

Little did I know that I would use this "Hypermedia as the Engine of Application State" (HATEOAS) to an advantage when looking for security issues at the same site years later. Simply explained, the HATEOAS makes REST APIs more self-documenting and easier to browse through using the links provided.

<h5>Browser developer tools</h5><img style="width:500px;float:left;margin-right:20px;" class="materialboxed responsive-img" title="Wait a minute, those aren't my logins? Screenshot from Chrome containing JSON with login history." data-caption="Wait a minute, those aren't my logins? Screenshot from Chrome containing JSON with login history." src="/images/digipost_eventlogs.png"/>I logged in to Digipost having <a href="https://developers.google.com/web/tools/chrome-devtools/">Chrome DevTools</a> open to see what was going on. I opened one or more of the REST URLs in a different tab. Having a JSON viewer browser extension like <a href="https://chrome.google.com/webstore/detail/json-formatter/bcjindcccaagfpapjjmafapmmgkkhgoa">JSON Formatter</a> (that hopefully doesn't ship everything it sees to a third party server) makes looking at JSON a pleasure. The API being hypermedia driven meant that you get instant linkification and can browse through the data quickly.

Digipost seemingly uses an auto increment integer as ID for the user, making it easy to check if your data is secured against the access of others. (Remind me to write a post about the pros and cons against IDs like that (and no, security by obscurity does not make your data safe)). I changed a few IDs here and there and mostly got different kinds of error messages thrown back at me. <b>However, I quickly found two URLs that didn't seem to have a proper authorization check.</b>

<h4>Security issue</h4>Two URLs without proper authorization checks was found.

The first URL apparently returned the number of unpaid invoices you have. Not something you would care about if someone accessed.

<b>The second one was the alarming one for me. It returned the account activities for the past 30 days.</b> The data had the following elements:
- Date of activity
- <b>Full name</b> of the person performing the activity
- Type of activity (e.g. level of authorization and authentication method)
- <b>IP address</b> of client
- The role of the person

<h4>What's the big deal about this?</h4>The information exposed isn't sensitive, so why should you care? Well, I think there are two important points here.

<b>The first point is that a service like this - promoted and pushed by the government - should have zero tolerance on any kind of information leak.</b> As system developers we make mistakes all the time. Every week we go to work and create new bugs. Hopefully they aren't security related, but sometimes they are. When working with services like this it's so incredibly important to have proper methods and routines to minimize the chance that this can't happen.

<b>The second point is that I think the combination of a full real name and a fresh IP address is unfortunate.</b> It doesn't really matter for me, and probably not for you, but what about public figures or persons with unlisted addresses?

<h4>Reception and handling</h4><h5>Day zero</h5>At night I sent an e-mail to the customer service.

<h5>Day 2</h5>Less than 48 hours afterwards I got an e-mail apologizing that I didn't receive an answer before and telling that they had fixed the issue and were going to deploy it the same day.

<h5>Day X</h5>I received a reward of some gift cards which I appreciated, but what might've impressed me the most was that the chief of security actually took the time to add hand written thank you note.

<b>I think the issue in question was handled very well. Digipost responded quickly, fixed it quickly, and communicated in a clear and professional way. Even when reaching out telling about this post they responded in the same manner.</b>

<h4>Conclusion</h4><b>It's important to underline that I never got access to any documents, communication or any information regarded as sensitive.</b> But for me this is a type of service that should have the same level of security as a bank. There just shouldn't be any information leaks. I truly believe that the information leaked could've be used for bad purposes.
`,
                "images": ["/images/digipost_eventlogs.png"],
                "links": [
                    {
                        "title": "Background: Purpose of these posts",
                        "url": "/2017/08/security-vulnerability-disclosures"
                    }
                ],
                "category":
                {
                    "title": "Security",
                    "url": "/security"
                },
                "tags": [
                    {
                        "title": "Security Monday",
                        "url": "/security-monday"
                    },
                    {
                        "title": "Information leak",
                        "url": "/information-leak"
                    },
                    {
                        "title": "Authorization",
                        "url": "/authorization"
                    },
                    {
                        "title": "OWASP 2013 A7",
                        "url": "/owasp-2013-a7"
                    }
                ],
                "commentsIdentifier": "http://blog.roysolberg.com/2017/08/digipost-leak"
            },
            {
                "title": `My dumb smart home`,
                "published": true,
                "publishDate": "2017-08-31T05:15:00.000Z",
                "summary": `My smart home isn't all smart. When it comes to security it's pretty dumb.`,
                "niceUrl": "/2017/08/my-dumb-smart-home",
                "text": `<div style="background-color:#ffecb3;padding:10px 10px 10px 10px;">This post was originally <a href="https://plus.google.com/+RoySolberg/posts/gNt4paU7KEZ">published on Google+</a> September 2015.</div>
<h4>tl;dr</h4>It isn't that the home automation system <a href="http://www.hdlautomation.com/">HDL-BUS Pro</a> has any security holes; it doesn't have any security. If your house, the hotel you're staying on or your business uses HDL you should definitely read on.
                
<h4>Intro</h4>This spring I moved into my new house. When building a house in 2014/2015 you kind of feel obligated to make it a bit smart. Being a programmer it makes it a must. I looked into quite a few systems and protocols for home automation. Since this is a new building I preferred a cabled system instead of a wireless one. The electrical contractor for the house wasn't much updated on smart homes, but luckily they had a few electricians which knew and installs HDL-BUS Pro systems. So a bit coincidentally I ended up with HDL.

Long before the actual installation I went to a training for "programming" (configuring really) the system. I was very curious about the underlying protocol and how stuff worked under the hood. Luckily HDL is open about its buspro protocol - and that's a healthy sign - and I learned about and was given the specification for the internal communication between the components. This was when I first was a bit surprised about the lack of security. <b>It's a straight forward simple protocol - and that's a good thing - but it completely lacks encryption, authentication and authorization.</b>

HDL has a component called IP gateway which is a gateway between ethernet and the wired HDL components. The IP gateway is necessary to configure the components through the Windows application called HDL-BUS Pro Setup Tool. It also supports remote configuration from anywhere on the Internet.

<h4>Security precaution #1</h4>If you have an IP gateway connected to your ethernet you want to make that a network that isn't reachable for unauthorized parties - meaning that both wired and wireless network shouldn't be available for anyone you don't trust. My neighbour was over the other day and casually asked "What's the password for the Wi-Fi?" Of course, I run the guest Wi-Fi in my house on a separate network so I could give him access. However, I suspect that most people (or businesses) with HDL don't realize the dangers and let anyone access the same network. If you want your IP gateway to be available via your Wi-Fi you want to make sure that the encryption, password and security in general is at a high level.

<h4>Security precaution #2</h4>Very much like the precaution #1 regarding Wi-Fi and cabled ethernet, you should think twice if you have your ethernet available over your powerlines. What about that power outlet you have outside your house or just inside the garage?

<h4>Security precaution #3</h4>With so many "trusted" devices connected to your Wi-Fi chances are that the security in or more of them have been comprimised. A typical home Wi-Fi for a family have several phones, tablets, laptops, TVs, and a video game console connected. Also with Internet of Things on the rise more and more units are allowed on your local network. If only one of those are compromised, someone could theoretically get access to your smart home. Considering precaution #1-3 you probably shouldn't have the IP gateway connected to the ethernet at all.

<h4>Security precaution #4</h4>Do you have any outdoor sensors for e.g. temperature or motion connected to your system? Well, I don't think you should. What happens if someone hooks up an IP gateway and a computer on that unit or the unit's wires? Correct, they have full access to your system.

<h4>Security precaution #5</h4>Being on a ethernet with a HDL system and recent version of the IP gateway's firmware lets you enable remote access. So, have you possibly had any unwelcome guests connected to your local network at some point? Have you checked if someone has enabled remote access to your system? Or maybe they just fetched the IP address, username and password from the IP gateway. Either way someone could access your system from remote at any desired time later on. My advice is to have the remote connection disabled.

<h4>Security precaution #6</h4>If you have ever accessed your HDL system from remote through the IP gateway you should consider changing the login info and/or disable the remote access. As mentioned, HDL doesn't have any encryption, meaning that nearly anyone could possibly have picked up your login info when connecting through the Internet.

<h4>Security precaution #7</h4>HDL has an SMS gateway that lets you text commands to the HDL system. Typically a set of phone numbers are whitelisted for sending commands. Commands can be something like "VACATION", "ALARM OFF", "OPEN GARAGE". It is very easy to spoof a phone number when sending a text. If someone knows - or guesses - the phone number you send commands from, so can they. If someone has/had access to the SMS gateway that someone could know the commands and even set up other commands.

<h4>Hacking scenario #1</h4>So, what's the problem with having anyone connected to your HDL system either remotely or locally? Well, what if someone reads the status of the motion sensors? Then it could be possible to know if there's anybody home, maybe they could even make educated guesses about who's home depending on which areas that are in use. You don't post a sign outside your home telling potenial burglars that you aren't home, so you shouldn't let your smart home do that either.

<h4>Hacking scenario #2</h4>Okay, somebody knows that noone's home, but you're protected by your smart home aren't you? Motion detectors, alarm sound, blinking lights, SMS warnings on intrusion. If someone has access to your HDL system they can easily turn this off. They could even turn it off, break in, turn the alarm system back on after leaving, and you wouldn't have a clue what happened.

<h4>Hacking scenario #3</h4>If you have smoke detectors connected to the system any communication with the HDL system can be disabled.

<h4>Hacking scenario #4</h4>Got your garage door connected to the system? Or even your front door? Well, you've probably figured it out by now. The doors can be opened (after disabling any alarms).

<h4>Hacking scenario #5</h4>Someone could connect to your system and do vandalism like turning the heat on for full or control the blinds. Some things might be considered just a prank, but what if someone pushes the dimmers, relays and heating to the edge by either turning them on and off quickly or turning them to a 100%? Would it do damage to the components? Cause a fire?

<h4>Hacking scenario #6</h4>Those previous five scenarios were the ones on top of my head. I'm sure you can think of a sixth and endless more yourself.

<h4>Conclusion</h4>This isn't some zero-day vulnerability disclosure of HDL-BUS pro. The system is working as intended. These are just my observations, worries and security tips when dealing with HDL. Make your local network secure, consider not having an IP gateway connected, make sure wires and components aren't accessible for anyone who shouldn't have access. <b>I wish they taught this on the HDL training.</b>

For the ones of you trusting on your local network security I want to quote a great book I'm reading now - <a href="http://shop.oreilly.com/product/0636920033547.do">Abusing the Internet of Things" by Nitesh Dhanjani</a>: <i>"As we add additional IoT devices to our homes, the reliance on WiFi security becomes a hard sell. Given the impact to our physical privacy and safety, it's difficult to stand by the argument that all bets are off once a single device (computer or IoT device) is compromised. Homes in developed countries are bound to have dozens of remotely controllable IoT devices. The single point of failure can't be the WiFi password. What's more, a compromised computer or device will already have access to the network, so a remote attacker does not need the WiFi password."</i>
`,
                "links": [
                    {
                        "title": "Background: Purpose of these posts",
                        "url": "/2017/08/security-vulnerability-disclosures"
                    }
                ],
                "category":
                {
                    "title": "Smart home",
                    "url": "/smart-home"
                },
                "tags": [
                    {
                        "title": "HDL Buspro",
                        "url": "/hdl-buspro"
                    },
                    {
                        "title": "Internet of Things",
                        "url": "/iot"
                    }
                ]
            },
            {
                "title": `Case #4: Blast from the past`,
                "published": true,
                "publishDate": "2017-09-04T05:25:00.000Z",
                "summary": `In 2017 you don't see that many sites running PHP, but recently I stumbled on this site of classical PHP vulnerabilities.`,
                "niceUrl": "/2017/09/php-hack",
                "text": `<h4>tl;dr</h4>A small Norwegian company is using a completely broken and open amateur PHP CMS. The site is open for (at least) local file inclusion and it's possible to completely take over the CMS.
                
<h4>Summary</h4><table class="summary">
<tr>
    <td style="width:30%">Who:</td>
    <td>Anonymous, let's call them <a href="https://en.wikipedia.org/wiki/Fictional_company">Acme2</a></td>
</tr>
<tr>
    <td style="width:30%">Severity level:</td>
    <td><span class="red-text">Critical</span></td>
</tr>
<tr>
    <td style="width:30%">Reported:</td>
    <td>August 2017</td>
</tr>
<tr>
    <td style="width:30%">Reception and handling:</td>
    <td><span class="red-text">Poor</span></td>
</tr>
<tr>
    <td style="width:30%">Status:</td>
    <td><span class="red-text">Not fixed</span></td>
</tr>
<tr>
    <td style="width:30%">Reward:</td>
    <td>Not even a thank you</td>
</tr>
<tr>
    <td style="width:30%">Issue:</td>
    <td>Completely broken PHP web site</td>
</tr>
</table>
<div style="padding-top:80px;" class="col s12 m5 l5 xl4 right"><div class="card-panel light-blue darken-1"><span style="text-decoration:underline;" class="white-text"><a class="white-text" href="/2017/08/security-vulnerability-disclosures">Background: The purpose of these posts</a></span></div></div><h4>Background</h4>I actually can't remember why I landed on the web site. Someone asked me to read something on this or a linking web site. Having seen a lot of bad sites over the years you can sometimes tell just from looking at the front page that you'll find some issues there.

The site is for a very small Norwegian company doing some kind of training programs for other companies. It has some public facing login for editing the content inline and is written in the server-side scripting language <a href="https://en.wikipedia.org/wiki/PHP">PHP</a>. <a href="https://trends.google.com/trends/explore?date=all&q=%2Fm%2F060kv">There was a time when PHP was very popular</a>, but I guess those days over.

<h4>Approach (technical stuff)</h4>Once in a while I take a quick peek at web sites' source code. I was expecting to find something on this particular one, but I didn't expect to find it that quickly:
<pre class="prettyprint">
&lt;!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"&gt;
&lt;html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en"&gt;
&lt;head&gt;
&lt;title>[name of company]&lt;/title&gt;
...
&lt;link rel="stylesheet" type="text/css"
    href="merge.php?css[]=%2Fcss%2Fstandard.css&amp;css[]=%2Fcss%2Fcustom.css" /&gt;
...
&lt;/head&gt;
...
&lt;/html&gt;
</pre>
Can you spot the opening? <b>Obviously the CSS was produced by some PHP script combining separate CSS files into one. Could it be that it would work for other files and directories?</b>

Well, first I had to find the name of some other PHP files. I didn't see any, so I logically guessed on <span class="code">index.php</span>: <pre class="prettyprint">http://example.com/merge.php?css[]=index.php</pre>
But then it responed something like <pre class="prettyprint lang-php">/* File is not a CSS or JavaScript file. */</pre>
Good, maybe there was some sort of security in place after all?

As you might know, PHP is built mainly using the programming language C. And C uses <a href="https://en.wikipedia.org/wiki/Null_character">null bytes</a> to terminate strings. So the next natural step is to try a URL like <pre class="prettyprint">http://example.com/merge.php?css[]=index.php%00.css</pre> where the script will still check for the <span class="code">.css</span> file ending, but when using the input string to include a underlying file it'll only use the part up to the null byte (URL encoded as <span class="code">%00</span>).

<b>This was bulls eye. I got the source of the <span class="code">index.php</span> file back. At this point you know that you are golden.</b>

Normally I would just provide a URL like <pre class="prettyprint">http://example.com/merge.php?css[]=../../../../../etc/passwd%00.css</pre> just to prove the point to the site owner. Not that <span class="code"><a href="https://en.wikipedia.org/wiki/Passwd">/etc/passwd</a></span> contains any passwords any longer, but it will typically reveal usernames and shows that one can retrieve almost any file from the file system. However, this was a Windows machine and the <span class="code">index.php</span> was not containing anything fun in itself.

<span class="code">index.php</span> did however point me towards other scripts files and moments later <b>I got hold of this PHP file that actually defined the username and <a href="https://en.wikipedia.org/wiki/Cryptographic_hash_function">hashed</a> version of the password of the admin user.</b> Given the state of the site I'd be surprised if there even was some random <a href="https://en.wikipedia.org/wiki/Salt_(cryptography)">salt</a> per user. So what you do you do when you have a hash? Well, you search for a online <a href="https://en.wikipedia.org/wiki/Rainbow_table">rainbow table</a> site.

<b>I got an immediate hit for the hash.</b> Not surprisingly the hash function used was the no longer recommended <a href="https://en.wikipedia.org/wiki/SHA-1">SHA-1</a> and the password itself was so short and simple that you probably won't find it on <a href="https://en.wikipedia.org/wiki/List_of_the_most_common_passwords">lists of the most common passwords</a>. Using the username and password you'd get full access to the content management system for the site.

At this point I stopped looking any further. I had enough info to report the issue and give a sense of the severity of what I saw.

<h5>What I overlooked</h5>In my eagerness to find the security holes in the web app (and due to lacking branding) I didn't notice that this was actually not a homemade PHP site like I first thought. I didn't see it until writing this post, but there was a very interesting HTML meta tag: <pre class="prettyprint">&lt;meta name="generator" content="gpEasy CMS" /&gt;</pre>
While I couldn't easily find the full history, it seems like gpEasy CMS is an old version of <a href="http://www.typesettercms.com/">Typesetter CMS</a>. I couldn't find the file inclusion among <a href="https://www.cvedetails.com/product/19479/Gpeasy-Gpeasy-Cms.html?vendor_id=10881">the issues on CVE details</a>, though there was <a href="https://packetstormsecurity.com/search/?q=gpeasy">another site with quite a few issues listed</a>.

<h4>Security issue</h4>This is a completely broken PHP CMS. It's possible to retrieve about any file on the server, and you can change any contents of the site.

This is only speculation as I didn't look further after finding the file inclusion issue, but when you find a site like this you most probably also will find other types of holes like remote code injection.

<h4>Reception and handling</h4><h5>Day zero</h5>I sent an e-mail to the contact address. <b>8 minutes later I got a response. That's a new record.</b> But the answer wasn't that uplifting. Apparently the site hadn't been of much in use the last years (though I would definitely guessed otherwise looking at the public accounting and taxation figures..). It didn't seem to be of any interest doing anything with the site or server. So hopefully there isn't anything of value there and hopefully no one makes the server into some kind of <a href="https://en.wikipedia.org/wiki/Zombie_(computer_science)">zombie</a>.

<h4>Anonymous you say?</h4>This is a small company, possibly not in any real operation. They haven't fixed - and probably won't fix - the issue. I don't think it's right naming them. Let's just hope no one else finds the site and that they don't have any important or customer data on the server.

<h4>Conclusion</h4>This was a blast from the past for me. It's been quite some time since I last saw an amateur PHP site like this. PHP once was very hot as the scripting language, partly because it is very easy to get started with, but it had a lot of pitfalls and it was so easy to make a site insecure. As the language matured the usage has gone down. Today most issues I see are HTTP service endpoints with lacking authorization checks.
`,
                "links": [
                    {
                        "title": "Background: Purpose of these posts",
                        "url": "/2017/08/security-vulnerability-disclosures"
                    }
                ],
                "category":
                {
                    "title": "Security",
                    "url": "/security"
                },
                "tags": [
                    {
                        "title": "Security Monday",
                        "url": "/security-monday"
                    },
                    {
                        "title": "PHP",
                        "url": "/php"
                    },
                    {
                        "title": "File inclusion",
                        "url": "/file-inclusion"
                    },
                    {
                        "title": "OWASP 2013 A1",
                        "url": "/owasp-2013-a1"
                    }
                ]
            },
            {
                "title": "Building an almost real SPA blog",
                "published": true,
                "publishDate": "2017-09-07T14:50:00.000Z",
                "summary": "I thought I could have this blog as a real single-page application with no server code. That sort of worked. If it only hadn't been for the previews.",
                "niceUrl": "/2017/09/an-almost-real-spa-blog",
                "text": `<h4>tl;dr</h4>My first post on this blog was <a href="/2017/08/building-a-real-spa-blog">Building almost a real SPA blog</a>. While the title mostly is still true, I ended up having a bit more <span class="code">.htaccess</span> config and a small Python script for previews of posts in social media and add support for web feed.
                
<h4>Single-page application</h4>I was able to build this blog as a <a href="https://en.wikipedia.org/wiki/Single-page_application">single-page application</a>. I had - and still have - all contents in <a href="https://github.com/roys/js-web-blog/blob/master/contents.js">one single static JavaScript array</a> and use the JavaScript framework <i>Knockout</i> and the front-end framework <i>Materialize</i>. So far so good.
                
<h4>Search engine optimization</h4>Google has since 2014 been able to <a href="https://webmasters.googleblog.com/2015/10/deprecating-our-ajax-crawling-scheme.html">render and understand JavaScript web applications</a>. <b>Using the Search Console's <a href="https://www.google.com/webmasters/tools/googlebot-fetch">Fetch as Google</a> I have been able to verify that Google understands my site just perfect.</b> Doing a <a href="https://www.google.no/search?q=site:blog.roysolberg.com">site: search</a> also confirms that.

I have to admit that I don't care too much about other search engines like Bing, Yahoo, etc. Google is in its own class when it comes to searching. However, because of the mentioned Python script I now have a tool for that as well. More about that in a second.

<h4>Article preview</h4><img style="width:450px;float:left;margin-right:20px;" class="materialboxed responsive-img" title="Typical article preview using Open Graph Protocol tags." data-caption="Typical article preview using Open Graph Protocol tags." src="/images/linkedin_preview.png"/>I sometimes post my articles to <a href="https://twitter.com/roysolberg">Twitter</a>, Facebook and <a href="https://www.linkedin.com/in/roysolberg/">LinkedIn</a>. <b>When creating a preview of the links those sites certainly does not try to parse any of the contents as a modern browser. They just look for <a href="https://dev.twitter.com/cards/overview">Twitter Cards</a> or <a href="http://ogp.me/">Open Graph Protocol</a> (OGP) meta tags.</b> If they don't find anything they typically default to the <span class="code">&lt;title/&gt;</span> tag.

My <span class="code">index.html</span> only has a standard <span class="code">&lt;title/&gt;</span> tag which makes no sense in the context of my articles. That makes the previews pretty bad, so I mostly skipped them in the start. However, I think the content is so much better with a good preview of the contents. I'm sure it also makes more people click the links.

<h4>Web feed</h4>Naturally one doesn't get any web feed like <a href="https://en.wikipedia.org/wiki/Atom_(standard)">Atom</a> or <a href="https://en.wikipedia.org/wiki/RSS">RSS</a> out of the box when building a single-page application. And that's also one of the things I wanted to have for my site.

So far I've added support for Atom which you can acess at <a href="https://blog.roysolberg.com/atom">https://blog.roysolberg.com/atom</a>.

<h4>The easy way out</h4>I couldn't find a way to solve the preview challenge without resorting to some backend code. I really like <a href="https://en.wikipedia.org/wiki/Python_(programming_language)">the programming language Python</a>. Writing just a few lines of code I was able to create a script that read the contents in the JavaScript array and produced the necessary OGP tags. You can <a href="https://github.com/roys/js-web-blog/blob/master/preview.cgi">see the source code of the script on GitHub</a>.

Now that I had the script for generating the preview I needed a way to route the bots to it. For that I used the already existing <span class="code">.htaccess</span> configuration file and look for the <a href="https://en.wikipedia.org/wiki/User_agent">User-Agent header</a> belonging to the different sites' bots. You can <a href="https://github.com/roys/js-web-blog/blob/master/.htaccess">see the source code for .htaccess on GitHub</a>.

Because of the preview setup I got support for other non-Google search engines for free. They access the same code as generated by the Python script. Google is still served the same site as you are.

Having the preview script it didn't take long to make support for the Atom feed. You can <a href="https://github.com/roys/js-web-blog/blob/master/atom.cgi">see the source code of the script on GitHub</a>.

<h4>Wishes for the future</h4><b>I don't think the Open Graph Protocol is very flexible or ready for single-page applications and thicker clients.</b>

<b>The first thing that hit me when creating the script was that I couldn't just inject the meta data as HTTP headers.</b> I had to create HTML markup for it. I can't understand why one shouldn't be able to choose between headers and tags.

Secondly the different social media sites need to start doing what Google has been doing since 2014; render the pages with some kind of <a href="https://en.wikipedia.org/wiki/Headless_browser">headless browser</a> to be able to understand the contents and get dynamically injected OGP meta tags. It's not that much magic or resource demanding in 2017.

<h4>GitHub project</h4>If you're interested you can have a look at the source code for this blog at <a href="https://github.com/roys/js-web-blog">https://github.com/roys/js-web-blog</a>. The project itself is licenced under the MIT License, but for the contents (posts and images) I reserve all rights.
`,
                "images": ["/images/linkedin_preview.png"],
                "category":
                {
                    "title": "Software development",
                    "url": "/software-development"
                },
                "tags": [
                    {
                        "title": "JavaScript",
                        "url": "/javascript"
                    },
                    {
                        "title": "SPA",
                        "url": "/spa"
                    }
                ]
            },
            {
                "title": "Case #5: Tell me your bank account no. and I'll tell you how rich you are",
                "published": true,
                "hot": false,
                "publishDate": "2017-09-11T05:00:00.000Z",
                "summary": "I'm sure you expect your bank accounts to be safe from prying eyes. For a while other customers knowing my bank account number could check my account balance.",
                "niceUrl": "/2017/09/skandiabanken-leak",
                "text": `<h4>tl;dr</h4>The Norwegian bank Skandiabanken leaked the balance of other customers' bank accounts. I also question parts of their session handling.
                
<h4>Summary</h4><table class="summary">
<tr>
    <td style="width:30%">Who:</td>
    <td><a href="https://skandiabanken.no">Skandiabanken</a></td>
</tr>
<tr>
    <td style="width:30%">Severity level:</td>
    <td><span class="red-text">High</span></td>
</tr>
<tr>
    <td style="width:30%">Reported:</td>
    <td>September 2017</td>
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
    <td>A big thank you</td>
</tr>
<tr>
    <td style="width:30%">Issue:</td>
    <td>Information leak with other customers' bank account balances and account names</td>
</tr>
</table>
<div style="padding-top:80px;" class="col s12 m5 l5 xl4 right"><div class="card-panel light-blue darken-1"><span style="text-decoration:underline;" class="white-text"><a class="white-text" href="/2017/08/security-vulnerability-disclosures">Background: The purpose of these posts</a></span></div></div>
<h4>Background</h4>Skandiabanken - soon to be called Sbanken - is a fairly large bank in Norway with its more than 400,000 customers. It was Norway's first pure online bank when it started in 2000. I have been a customer since that first time and all along from the start it's been my favourite bank.

This summer a regulation for personal savings accounts for shares was approved. From September 1st 2017 it was possible to move shares and funds into this new type of account. The timing meant that all banks in Norway suddenly were in a hurry for getting the product ready.

The morning of the opening of the new account type I was logged in to create one for myself. I noticed that there was a few missing text translations and some places where it said <i>undefined</i> in the user interface. This new part of the bank wasn't all bug free yet.

<h4>Approach (technical stuff)</h4><img style="width:500px;float:left;margin-right:20px;" class="materialboxed responsive-img" title="Screenshot from Vivaldi containing JSON with back account details." data-caption="Screenshot from Vivaldi containing JSON with back account details." src="/images/skandiabanken_accountdetails.png"/>I opened <a href="https://help.vivaldi.com/article/developer-tools/">Vivaldi developer tools</a> when logged in, to see what was going on in regards of network calls. I was surprised to see that one of the presumably new <a href="https://en.wikipedia.org/wiki/Ajax_(programming)">Ajax</a> calls contained one of my bank account numbers. I could be wrong, but I think it's atypical for them to use that ID when asking for data from the backend. That of course doesn't mean anything, but I got curious and wondered if my data was properly secured.

The Ajax call returned <a href="https://en.wikipedia.org/wiki/JSON">JSON</a> with the balance and some other data about the bank account in question. <b>I asked a friend for a bank account number and permission to check if I could get any of his data returned. And indeed I got his data.</b>

<h4>Security issue</h4><b>Knowing just the bank account number of another customer one would get these data:</b>
- Some UUID of the bank account
- Customer's own name of the account
- <b>The account's bank balance</b>
- <b>The account's book balance</b>

<h4>Reception and handling</h4><h5>Day zero</h5>I notified the bank and they immediately responded and started checking out the issue.

<b>Just hours later they had rolled out a fix for the problem.</b> This must be the quickest fix I have ever seen for a security issue.

Later the same I day I was phoned up by one of the chiefs who thanked me and told me they were grateful for that I found and reported the issue.

<h5>Day 4 - incorrectly reporting a second issue...</h5>I had left my browser logged into this new part of the bank called "Min sparing" ("My savings"). When I returned to the computer quite a bit later I noticed that I was still logged in. And I noticed that I could close and open my browser and still be logged in to this part of the bank. Going to other parts of the bank would log me out from everything.

I reported this by e-mail, but just after that I learned that <a href="https://skandiabanken.no/sporsmal-og-svar/min-sparing/hvor-lenge-kan-jeg-vare-inaktiv-i-min-sparing-appen-for-jeg-blir-logget-ut/">this part of the bank has 9 hours session time</a> and not 20 minutes as most parts of the bank. I felt a bit embarrassed for reporting a non-issue and wasting their time.

<h5>Day 5 - ...or was I into something?</h5>The next morning I realized something. Though this "My savings" session time was intentionally high, Skandiabanken offers simultaneous logins, and logging out from one session doesn't invalidate any others. <b>This means that if you are able to get access to a computer where the user forgot to log out after accessing "My savings" in the last hours you can get hold of the cookies and keep the session alive by only calling the server once in a while.</b>

<b>What's more is that you can do this call from any location. You don't have to use the same computer or IP address.</b> The "My savings" page gives a pretty good glance into your economy (like shares, funds and some transactions), and using the mentioned Ajax call you <s>can</s> could also use the same cookie to access the balance of other known account numbers for that logged in user. <b>Hopefully the session can't be kept alive forever without signing in again.</b> While testing I had this one session alive for more than 36 hours (while changing locations and having other devices logged in and out).

<b>Skandiabanken replied and told me that this session handling is a feature and not a bug.</b> They want a long session time, and they don't want to restrict the session to IP addresses because of mobile clients.

<h5>Day 5 - new webapp deployed</h5>Skandiabanken seems to have removed the bank account number from the Ajax call, making it always return the balance of the payment account for funds and making the "My savings" page only getting savings related data. I would say that's a step in right direction. The 9 hours session time seems to stay the same.

<h4>Conclusion</h4><b>As far as I know the security hole with balance access was introduced that morning and was only in the wild less than a day.</b> I have worked with online banking as an IT consultant and know how seriously security is taken in that industry. I was pleased - but not surprised - to see how seriously and professionally Skandiabanken handled everything.

I feel confident that this issue would've been discovered relatively quickly by the bank itself hadn't I reported it. However, for me online banking is one of those services that just need to always be secure and never leak information like this.

<b>What makes me a bit uneasy is the session handling feature/issue where someone could be watching my economy with a logged in session that I'm unaware of.</b>

<b>Please remember to always hit that <i>Log out</i> button.</b>
`,
                "images": ["/images/skandiabanken_accountdetails.png"],
                "links": [
                    {
                        "title": "Background: Purpose of these posts",
                        "url": "/2017/08/security-vulnerability-disclosures"
                    }
                ],
                "category":
                {
                    "title": "Security",
                    "url": "/security"
                },
                "tags": [
                    {
                        "title": "Security Monday",
                        "url": "/security-monday"
                    },
                    {
                        "title": "Information leak",
                        "url": "/information-leak"
                    },
                    {
                        "title": "Authorization",
                        "url": "/authorization"
                    },
                    {
                        "title": "Bank account",
                        "url": "/bank-account"
                    },
                    {
                        "title": "OWASP 2013 A7",
                        "url": "/owasp-2013-a7"
                    }
                ],
                "commentsIdentifier": "https://blog.roysolberg.com/2017/09/skandiabanken-leak"
            },
            {
                "title": "1995: When you could get a demo of the Internet on a floppy disk",
                "published": true,
                "publishDate": "2017-09-13T21:00:00.000Z",
                "updateDate": "2017-09-16T06:10:00.000Z",
                "summary": "This one is for you who actually know what that save icon in Word is.",
                "niceUrl": "/2017/09/internet-demo",
                "text": `<h4>tl;dr</h4>I've uploaded all the HTML files from a Norwegian Internet Service Provider's Internet demo diskette so you can (almost) surf like it's 1995.

<h4>Background</h4><img style="float:left;width:400px;margin-right:20px;" class="materialboxed responsive-img" title="The diskette containing the browser and demo pages." data-caption="The diskette containing the browser and demo pages." src="/images/floppy02.jpg">
Back in 1995 - one year before I tried the Internet for the first time, and two years before I got Internet access at home - my mother brought me this floppy disk from work. She thought I might be interested in checking it out. <b>It was a demo of the Internet!</b>

I didn't really know what the <a href="https://en.wikipedia.org/wiki/World_Wide_Web">World Wide Web</a> was about. The diskette contained the web browser <a href="https://en.wikipedia.org/wiki/Mosaic_(web_browser)">Mosaic</a>, and it actually gave a feel of what the Internet was like.

<h4>Demo</h4>Below is the demo itself. It's nice to see the HTML pages still working the same 22 years later. You can also <a href="https://blog.roysolberg.com/stuff/sol/initial.htm">open demo in full screen</a>.
<input type="button" value=" < " onclick="window.parent.frames[1].history.back()"/> <input type="button" value=" > " onclick="window.parent.frames[1].history.forward()"/>
<iframe style="margin: none;padding: none;border:1px solid #000;line-height: 0;" src="https://blog.roysolberg.com/stuff/sol/initial.htm" width="600" height="600" />

<h4>First lines of HTML</h4>When I tried the demo disk I remember being curious about how those pages worked. I found the source code and from there I wrote my first lines of HTML. It was pretty cool to see how the markup was rendered in the browser from the floppy disk. Little did I know I would code web pages for a living 10 years later. :)

<h4>References</h4>- <a href="https://www.nrk.no/trondelag/hun-lanserte-internett-i-norge-1.11078996">– Folk syntes internett var for raringer</a>
- <a href="http://www.oslo.net/historie/CW/utg/9510/cw951033.html">"Scandinavia online" på lufta</a>
`,
                "images": ["/images/floppy01.jpg", "/images/floppy02.jpg"],
                "category":
                {
                    "title": "Internet archive",
                    "url": "/internet-archive"
                },
                "tags": [
                    {
                        "title": "1990s",
                        "url": "/security-monday"
                    }
                ]
            },
            {
                "title": "Case #6: Who's looking at your pictures?",
                "published": true,
                "publishDate": "2017-09-18T05:25:00.000Z",
                "summary": "A campaign where you can upload your pictures is making a small version of them publicly available at a \"impossible to guess\" URL. It was possible to systematically retrieve all the images.",
                "niceUrl": "/2017/09/picture-leak",
                "text": `<h4>tl;dr</h4>A campaign web site from Norway's leading supplier of branded goods, where one could upload images - typically of your kid, and typically including their first name and year of birth - was, and still is, making a small 90 x 90 pixels image publicly available. It was possible to systematically retrieve the data.
                
<h4>Summary</h4><table class="summary">
<tr>
    <td style="width:30%">Who:</td>
    <td><a href="http://www.orklafoods.no/">Orkla Food</a>'s <a href="http://kampanje.stabburetleverpostei.no">campaign</a> by <a href="https://www.japanphoto.no/">Japan Photo</a></td>
</tr>
<tr>
    <td style="width:30%">Severity level:</td>
    <td><span class="green-text">Low</span></td>
</tr>
<tr>
    <td style="width:30%">Reported:</td>
    <td>August 2017</td>
</tr>
<tr>
    <td style="width:30%">Reception and handling:</td>
    <td><span class="green-text">Good</span></td>
</tr>
<tr>
    <td style="width:30%">Status:</td>
    <td><span class="orange-text">Partially fixed</span></td>
</tr>
<tr>
    <td style="width:30%">Reward:</td>
    <td>A thank you</td>
</tr>
<tr>
    <td style="width:30%">Issue:</td>
    <td>A small version of the uploaded picture and often the given name and year of birth of the person in the picture is available publicly available</td>
</tr>
</table>
<div style="padding-top:80px;" class="col s12 m5 l5 xl4 right"><div class="card-panel light-blue darken-1"><span style="text-decoration:underline;" class="white-text"><a class="white-text" href="/2017/08/security-vulnerability-disclosures">Background: The purpose of these posts</a></span></div></div><h4>Background</h4><img style="width:300px;float:left;margin-right:20px;" title="Example of the image type that is publicly available." src="/images/leverpostei02.jpg"/><i>Stabburet Leverpostei</i> is a kind of <a href="https://en.wikipedia.org/wiki/Liver_pâté">liver pâté</a> that has been part of the diet for many Norwegians for generations. They have had a pretty iconic can with a picture of a kid on the front. At first they had the same kid from 1955 to 1970, but in more recent times they have been using the front as more of a marketing opportunity with competitions, campaigns and more a frequent change and use of several different faces.

In August 2017 I saw a TV commercial telling that <b>if you bought 3 cans of Stabburet Leverpostei you could upload your own picture and receive your own cover that you can use at home.</b>

Of course this made me wonder if the images were securly stored.

<h4>Approach (technical stuff)</h4><img style="width:439px;float:left;margin-right:20px;" class="materialboxed responsive-img" title="Image created by the campaign website." data-caption="Image created by the campaign website." src="/images/leverpostei01.png"/>I went through the wizard for uploading images, getting the lid and buying other products at the same time as having <a href="https://developers.google.com/web/tools/chrome-devtools/">Chrome DevTools</a> open. I looked for anything out of the ordinary and of course tried out different URLs with different IDs and input.

What I saw was that every image uploaded got a <a href="https://en.wikipedia.org/wiki/Universally_unique_identifier">UUID</a> which was used when refering to the image in the different web pages.

They also had this share function where you share the lid that you had created to different social media. What this did was just refer to this UUID at some URL.

The sensible thing would be to make the image publicly available at some URL the moment the customer chose to share the image. As long as it is public, one should expect the image to be accessible to anyone knowing or guessing the URL.

<b>The first problem was - and still is - that all images - shared or not - are publicly available if you just know the URL. For me this looks like quite a trend. Developers often assume that because a URL is hard to guess it should be considered private.</b> This spring we had some media coverage in Norway on how <a href="https://www.digi.no/artikler/16-mai-ble-det-full-kriseberedskap-i-evry-etter-datalekkasje-rotarsaken-kan-pavirke-alle-norske-selskaper/383149">a change in the browser Microsoft Edge made Bing index a lot of URLs like these</a> (Norwegian text). Yes, the URLs might be hard to guess, but the problem is that the URL will always be valid, it will always be public, and you don't know who's accessing it.

Going through the checkout process I noticed that the URL for the final receipt - <a href="http://www.stabburetleverpostei.no/takk-for-din-lokkbestilling/">http://www.stabburetleverpostei.no/takk-for-din-lokkbestilling/</a> - included the mentioned UUID. And, what's more, <b>the URL redirecting to that URL had the format <span class="code">http://kampanje.stabburetleverpostei.no/checkout/finished/&lt;some auto incremental ID&gt;</span>. Iterating the ID made it possible to collect the UUIDs from seemingly all the orders (I only tried a few).</b>

E.g., going to
<a style="font-size:smaller;" class="code" href="http://kampanje.stabburetleverpostei.no/checkout/finished/2095270">http://kampanje.stabburetleverpostei.no/checkout/finished/<b>2095270</b></a>
would redirect to 
<a style="font-size:smaller;" class="code" href="http://www.stabburetleverpostei.no/takk-for-din-lokkbestilling/?lokkid=0498600376a123f1530f1fed7083b350">/takk-for-din-lokkbestilling/?lokkid=<b>0498600376a123f1530f1fed7083b350</b></a>
which meant that the image could be seen at
<a style="font-size:smaller;" class="code" href="http://kampanje.stabburetleverpostei.no/bestill/streamthumb/0498600376a123f1530f1fed7083b350">/bestill/streamthumb/<b>0498600376a123f1530f1fed7083b350</b></a>.

<h4>Security issues</h4>I found two issues in the campaign web site. One is now fixed, but the other persists:
- <b>Fixed: One could iterate through the completed orders and get the URL of all images</b>
- <b>Not fixed: Seemingly all images from the orders - even the ones not completed - are public (often including given name and year of birth)</b>

The fact that all images are publicly available is not mentioned in the terms of this campaign.

<h4>Reception and handling</h4><h5>Day zero</h5>At night I sent an e-mail to the contact address (for Eurofoto (owned by Japan Photo)) telling them about by my findings.

<h5>Day 1</h5>Just before midnight I received an e-mail telling me that they have stopped adding the image UUID to the URL of the "thank you" page. That's a very impressive response time. It does, however, seem like all images still are publicly available.

<h4>Why the low severity level?</h4>On one hand one could blow this up really big; a lot of pictures of kids with what's probably often their real given name and their year of birth. But, let's be real; in this case we are talking about <b>small</b> images; about 90 x 90 pixels are of the person itself (and then the rest is the rest of the can with the name, year and stuff).

Now, this is <b>speculation</b>, but I wouldn't be surprised if the full size images are available on some other public URL. However, I did not find that. And looking at the image data being uploaded we're looking at a image size (of the person) as small as about 220 x 220 pixels. That is still a pretty low resolution.

Also, there is no connection between the images and data like full name or location.

<h4>Conclusion</h4><b>You - as a consumer - should always assume that whatever kind of images or information that you are uploading or sending to some third party can end up in either the wrong hands or be publicly available.

All you developers: Please don't think that UUIDs makes data private. You still need authentication and authorization; and you still need to check that it's actually working.

If companies choose to store images like in this case, they should indeed mention that in the terms of the site. That is not the case here.</b> I also wish they would mention for how long they are storing the images.
`,
                "images": ["/images/leverpostei01.png", "/images/leverpostei02.jpg"],
                "links": [
                    {
                        "title": "Background: Purpose of these posts",
                        "url": "/2017/08/security-vulnerability-disclosures"
                    }
                ],
                "category":
                {
                    "title": "Security",
                    "url": "/security"
                },
                "tags": [
                    {
                        "title": "Security Monday",
                        "url": "/security-monday"
                    },
                    {
                        "title": "Information leak",
                        "url": "/information-leak"
                    },
                    {
                        "title": "UUID",
                        "url": "/uuid"
                    },
                    {
                        "title": "Images",
                        "url": "/images"
                    },
                    {
                        "title": "OWASP 2013 A4",
                        "url": "/owasp-2013-a4"
                    }
                ]
            },
            {
                "title": "Case #7: Fitness center chain was leaking personal info",
                "published": true,
                "publishDate": "2017-09-25T05:15:00.000Z",
                "summary": "Is your gym telling on you? It sure was telling on me and my fellow members. Everything from contact info to pictures to bank account numbers to the time people enter the gym was leaking for a long, long time.",
                "niceUrl": "/2017/09/gym-leak",
                "text": `<h4>tl;dr</h4>A fitness center chain consisting of three centers was leaking the members' names, e-mail addresses, phone numbers, pictures, bank account numbers, logs of all visits, etc. They are still running vulnerable server software.
                
<h4>Summary</h4><table class="summary">
<tr>
    <td style="width:30%">Who:</td>
    <td><a href="http://energi-trening.no">Energi Treningssenter</a></td>
</tr>
<tr>
    <td style="width:30%">Severity level:</td>
    <td><span class="red-text">High</span></td>
</tr>
<tr>
    <td style="width:30%">Reported:</td>
    <td>April 2017</td>
</tr>
<tr>
    <td style="width:30%">Reception and handling:</td>
    <td><span class="green-text">Good</span></td>
</tr>
<tr>
    <td style="width:30%">Status:</td>
    <td><span class="orange-text">Partially fixed</span></td>
</tr>
<tr>
    <td style="width:30%">Reward:</td>
    <td>A thank you</td>
</tr>
<tr>
    <td style="width:30%">Issue:</td>
    <td>All kinds of personal info was leaked</td>
</tr>
</table>
<div style="padding-top:80px;" class="col s12 m5 l5 xl4 right"><div class="card-panel light-blue darken-1"><span style="text-decoration:underline;" class="white-text"><a class="white-text" href="/2017/08/security-vulnerability-disclosures">Background: The purpose of these posts</a></span></div></div><h4>Background</h4>Energi Treningssenter at Askøy is an excellent fitness center. It's modern, big and has all the equipment you want. I used to train there for a while, so I had - and still have - access to the member site where you see your personal details, payment history and full log of your visits.

<b>Some years ago I noticed that the picture taken for the key card to the gym was publicly available. Just knowing the URL you could iterate through the images of all the members without having to be logged in.</b> I never bothered to report it back then. When I started considering this article series I remembered the issue with the pictures and wondered if my personal data was safe. The whole site had much of the feel as <a href="https://blog.roysolberg.com/2017/09/php-hack">the completely vulnerable PHP site</a> I wrote about earlier on.

<h4>Approach (technical stuff)</h4>I logged in to the gym's site while having <a href="https://en.wikipedia.org/wiki/Web_development_tools">the browser development tools</a> open. I looked for anything out of the ordinary in the HTTP calls and in the source code.

<h5>No encryption</h5>The first thing that hit me is that all URLs are <span class="code">http</span> and not <span class="code">https</span>. Even when submitting the form with username and password there is no encryption.

<h5>The secrets of the source</h5><img style="width:480px;float:left;margin-right:20px;" class="materialboxed responsive-img" title="Source code from membership page" data-caption="Source code from membership page" src="/images/energi02.png"/>I spotted three links to an <a href="https://en.wikipedia.org/wiki/Active_Server_Pages">ASP</a> that was hidden with CSS: <span class="code">display: none;</span>

The ASP looked like it let you change database fields for any user, but from failing to even change my own data I'm not sure what the deal was. However, this page was vulnerable for <a href="https://en.wikipedia.org/wiki/Cross-site_scripting">XSS</a>. A good opportunity to steal the session cookie which seems to work perfectly fine across IP addresses. Or one could just let the user send his or her personal data directly.

The source also revealed the use of some kind of "add on" used for file upload. Is it possible to upload code that can be executed? I hope not. I wasn't able to make tell for sure, but there was indeed web forms for uploading all kinds of files.

<h5>Known vulnerabilities</h5>There seems to be three different servers involved serving the site. Looking at the headers and the default error pages reveals outdated server software that have known vulnerabilities. However, <a href="/2017/08/security-vulnerability-disclosures">as I've stated in the background for these posts</a>, that is out of scope for now.

<h5>Plain text passwords</h5>When you log in you will be told if the username you entered exists or not. If you use the "Forgot password" function you're told if you're entering a known e-mail address or not. And the e-mail you receive is not for resetting the password, it just contains both the username and the password. Fail x 3.

<h5>The lucky guess</h5><img style="width:480px;float:left;margin-right:20px;" class="materialboxed responsive-img" title="Full list of all visits of other members was available" data-caption="Full list of all visits of other members was available" src="/images/energi03.png"/>The page with all the personal details doesn't have any IDs or anything, but that doesn't mean that I couldn't try adding it. I tried <span class="code">account.asp?id=&lt;some ID&gt;</span>, and voilà, I got access to other users' personal details. The ID was an incremental integer. <b>Iterating the ID one could seemingly get everyone's name, e-mail address, phone number, bank account number, payment history and full visit log.</b>

<h4>Security issues</h4><img style="width:480px;float:left;margin-right:20px;" class="materialboxed responsive-img" title="Membership page with another member's data" data-caption="Membership page with another member's data" src="/images/energi01.png"/>A lot of personal data of previous and current members was leaked:
- Customer number (also used as username)
- <b>Full name</b>
- <b>E-mail address</b>
- <b>Phone number</b>
- <b>Bank account number</b>
- <b>Picture</b>
- Not fixed: <b>Log of all visits</b>
- Full payment history

In addition there are quite a few issues that's probably still making the customer data vulnerable:
 - Not fixed: There's no encryption - not even when logging in
 - Not fixed: Passwords are stored in plain text
 - Not fixed: "Forgot password" e-mail contains both username and password
 - Not fixed: Cross Site Scripting
 - Not fixed: Old application server with known vulnerabilities
 - Not fixed: Old ASP.NET version with known vulnerabilities

I believe that these issues have been around for many years.

<h4>Reception and handling</h4><h5>Day zero</h5>At night I sent an e-mail telling about the information leak and general concerns about the solution.

Just 1,5 hour later I got a reply telling that the issue was forwarded to the right body.

<h5>Day 22</h5>I received an e-mail telling that the vendor of the system had fixed the issue. <b>I see that they have removed the issue with the information leak, but everything else still is the same.</b>

<h4>Conclusion</h4>This is yet another example of our personal data in the wild. There are countless security vulnerabilities out there. You should assume that anyone who wants to, knows everything about you and everything you do. <b>And companies that have these types of vulnerabilities won't tell you when they become aware of them.</b>

And to start connecting the dots between the cases I'm representing; <b>do you remember two weeks ago where you could <a href="/2017/09/skandiabanken-leak">see the bank account balance using just the bank account number</a>? Well, wasn't it nice that this case gave you that bank account number?</b>

<b>Looking at the old versions of the software running on these sites I would definitely guess that the data is still vulnerable.</b>
`,
                "images": ["/images/energi01.png", "/images/energi02.png", "/images/energi03.png"],
                "links": [
                    {
                        "title": "Background: Purpose of these posts",
                        "url": "/2017/08/security-vulnerability-disclosures"
                    }
                ],
                "category":
                {
                    "title": "Security",
                    "url": "/security"
                },
                "tags": [
                    {
                        "title": "Security Monday",
                        "url": "/security-monday"
                    },
                    {
                        "title": "Information leak",
                        "url": "/information-leak"
                    },
                    {
                        "title": "XSS",
                        "url": "/xss"
                    },
                    {
                        "title": "ASP.NET",
                        "url": "/asp-net"
                    },
                    {
                        "title": "Images",
                        "url": "/images"
                    },
                    {
                        "title": "OWASP 2013 A3",
                        "url": "/owasp-2013-a3"
                    },
                    {
                        "title": "OWASP 2013 A7",
                        "url": "/owasp-2013-a7"
                    }
                ]
            },
            {
                "title": "Case #8: SQL injection vulnerable for 10 years",
                "published": true,
                "publishDate": "2017-10-02T04:55:00.000Z",
                "updateDate": "2017-10-02T07:05:00.000Z",
                "summary": "A company offering an online project and customer relationship management system had a very easy-to-spot SQL injection vulnerability for 10 years or more.",
                "niceUrl": "/2017/10/10-years-of-injection",
                "text": `<h4>tl;dr</h4>A Norwegian company with a centralized online project management tool had an SQL injection vulnerability for at least 10 years.
                
<h4>Summary</h4><table class="summary">
<tr>
    <td style="width:30%">Who:</td>
    <td>Anonymous, let's call them <a href="https://en.wikipedia.org/wiki/Fictional_company">Acme3</a></td>
</tr>
<tr>
    <td style="width:30%">Severity level:</td>
    <td><span class="red-text">Critical</span></td>
</tr>
<tr>
    <td style="width:30%">Reported:</td>
    <td>Summer 2017 (and possibly 2007)</td>
</tr>
<tr>
    <td style="width:30%">Reception and handling:</td>
    <td><span class="red-text">Poor</span></td>
</tr>
<tr>
    <td style="width:30%">Status:</td>
    <td><span class="orange-text">Who knows..</span></td>
</tr>
<tr>
    <td style="width:30%">Reward:</td>
    <td>A thank you</td>
</tr>
<tr>
    <td style="width:30%">Issue:</td>
    <td>SQL injection affecting all customers</td>
</tr>
</table>
<div style="padding-top:80px;" class="col s12 m5 l5 xl4 right"><div class="card-panel light-blue darken-1"><span style="text-decoration:underline;" class="white-text"><a class="white-text" href="/2017/08/security-vulnerability-disclosures">Background: The purpose of these posts</a></span></div></div><h4>Background</h4>In 2007 I was working for a company that started using a <a href="https://en.wikipedia.org/wiki/Software_as_a_service">SaaS</a> project tool and, more or less, a complete CRM. As a software developer I personally used it for time-tracking for the projects and customers I was working with.

<b>It was a very poor tool for time-tracking (as most time-tracking tools are even today), but that was soon to be overshadowed when I noticed that the URLs contained <a href="https://en.wikipedia.org/wiki/SQL">SQL</a>. Not only did the service leak data, it was possible to alter data. Not only was this possible within our own company, but this was across all of the service's customers.</b>

I of course told about this to my boss. <b>To emphasize the problem I changed my boss' name to be surrounded by the infamous <a href="https://en.wikipedia.org/wiki/Blink_element">&lt;blink/&gt; tag</a> to make it constantly blink while he was logged in.</b>

I also prepared an article for the great "software engineering disaster blog" <a href="https://thedailywtf.com/">The Daily WTF</a> which I read daily back then. However, I changed jobs in 2007 and soon forgot all about the article, the security hole and Acme3.

Preparing my blog I looked back at some old issues I had screenshot and made notes from and of course found this one. <b>Checking out their online demo I saw that they still had the SQL injection issue. 10 years later.</b> Seeing the old screenshots that says "Copyright 2000" one can wonder how many their customers who have been affected by this.

<h4>Approach (technical stuff)</h4>You don't need very heavy measures to find any issues when you find out that the URLs of a site actually uses SQL. The URLs were "concealed" because of the site using <a href="https://en.wikipedia.org/wiki/Framing_(World_Wide_Web)">frames</a>. I had a look at their JavaScript and noticed that it built SQL queries which was used as URL parameters.

The URLs looked like this: <pre class="prettyprint lang-html">http://example.com/lookup.asp
?title=Employees&list=0&headers=Employee+Id;First+name;Last+name
&select=SELECT+EMPLOYEE_ID,FIRST_NAME,LAST_NAME+FROM+EMPLOYEES
&goURL=someother.asp&key=EmployeeID&projID=&where=&order=3&records=all</pre>
It can't really get much worse than this.

<b>So from here one could change the query to e.g. include the password.</b> It's hard to believe, but it does actually look like they have some <a href="https://en.wikipedia.org/wiki/Salt_(cryptography)">salt</a> in the password hashes. <b>But that doesn't matter much as it was possible to run <span class="code">UPDATE</span> statements using the URL.</b>

My favorite changes I did was in the line of these:
<pre class="prettyprint lang-html">http://example.com/lookup.asp?headers=version
&select=<b>UPDATE+EMPLOYEES+SET+FIRST_NAME='&lt;blink&gt;<blink>John+Boss</blink>&lt;/blink&gt;'</b>
+WHERE+USER_ID='myboss';SELECT+@@VERSION,@@VERSION+AS+ver&order=ver</pre><pre class="prettyprint lang-html">http://example.com/lookup.asp?headers=version
&select=<b>UPDATE+EMPLOYEES+SET+FIRST_NAME='John+&quot;I+better+report+these+security+issues+to+Acme3+soon&quot;+Boss'</b>
+WHERE+USER_ID='myboss';SELECT+@@VERSION,@@VERSION+AS+ver&order=ver</pre>
<b>But what was even more worrying was that each company had a different database in the same database server, and it was possible to do queries across databases.</b> I never tried altering data for other companies, but gaining read access is bad enough. The database user seemed to have access to all kinds of databases and system tables.

<h4>Security issues</h4>Depending on how a company was using the service it was possible for anyone to get access to the following information:
- <b>Employees' names, usernames, position, password hashes, addresses, phone numbers, e-mail addresses, pictures, payrolls</b>
- <b>All kinds of info about companies' projects</b>
- <b>Customers of the company</b>
- <b>Outoing invoices</b>
- <b>Budgets</b>
- <b>Accounting</b>
- Timesheets
- And everything else you would expect from a borderline project tool/CRM

From the look of it was possible to alter any data as well.

<h4>Reception and handling</h4><h5>Day zero 2017</h5>The company was non-existing in social media etc. I never managed to find any e-mail addresses. But <b>they had a contact form on their website which I used to tell them about this.</b> The only problem was that the form doesn't work at all in some browsers and doesn't give any feedback if it's been successfully submitted in the rest of the browsers.

<b>I got no response.</b>

<h5>Day 14ish</h5><b>I tried the contact form once again just asking if the form was working at all. I never got an answer.</b>

<h5>Day 21ish</h5><b>Suddenly one night there was someone online on a chat on their site.</b> I filled in my name and asked if the contact form on their site worked. The guy just replied <i>"We saw your "security" report"</i>. What? Why haven't they contacted me? He went on telling that the issue is fixed now. They <i>"had a round of security this summer"</i>. Then he told me to say if I saw anything else, gave me a short "thank you" and finished <i>"night"</i>.

I'm not sure if the conversation was directly unfriendly, but it sure wasn't friendly. And it makes me think that this isn't serious people. Though, at least now I knew the issue was reported and they claimed to have fixed it. I don't want to check.

<h4>Anonymous you say?</h4>This is a bit of a special case going back so many years. Did they receive any reports 10 years ago at all? It would be easier to name them if I was able to communicate with them. The not-so-friendly support chat gave me some bad vibes, and I haven't been able to find out much about the company or the people behind it.

From public financial information I see that they have had 1-2 million USD in annual revenue the last 10 years. As far as I can understand they don't have any other products, so they should have quite a few customers using this service.

<h4>Conclusion</h4>From time to time there are news articles about <a href="https://en.wikipedia.org/wiki/Industrial_espionage">industrial espionage</a>. Companies like Acme3 sure makes it easy to those looking for data.

<b>Are you working in one of the companies using this system? Maybe you should use an expert to take a quick look at the systems where your company stores information you don't want to be leaked or even altered.</b>

<b>Is it possible that an issue like this was existing for ten years without no one taking advantage of it? That's hard to believe.</b>
`,
                "images": [],
                "links": [
                    {
                        "title": "Background: Purpose of these posts",
                        "url": "/2017/08/security-vulnerability-disclosures"
                    }
                ],
                "category":
                {
                    "title": "Security",
                    "url": "/security"
                },
                "tags": [
                    {
                        "title": "Security Monday",
                        "url": "/security-monday"
                    },
                    {
                        "title": "Information leak",
                        "url": "/information-leak"
                    },
                    {
                        "title": "XSS",
                        "url": "/xss"
                    },
                    {
                        "title": "ASP.NET",
                        "url": "/asp-net"
                    },
                    {
                        "title": "Microsoft SQL Server",
                        "url": "/mssql"
                    },
                    {
                        "title": "Data alteration",
                        "url": "/data-alteration"
                    },
                    {
                        "title": "OWASP 2013 A1",
                        "url": "/owasp-2013-a1"
                    },
                    {
                        "title": "OWASP 2013 A3",
                        "url": "/owasp-2013-a3"
                    }
                ]
            },
            {
                "title": "DOM II: JavaScript Hell",
                "published": true,
                "publishDate": "2017-10-05T19:30:00.000Z",
                "summary": "Have some fun destroying websites using my bookmarklet.",
                "niceUrl": "/2017/10/dom2-bookmarklet",
                "text": `<h4>Bookmarklet</h4><p style="text-align:center;"><a onclick="ga('send','event','game','play','dom2',2);return true;" href="javascript:var%20s=document.createElement('script');s.type='text/javascript';s.onerror=function(e){alert('Failed%20to%20load%20the%20script.%20The%20site\\'s%20Content%20Security%20Policy%20might%20be%20blocking%20it.%20Feel%20free%20to%20try%20again.');};document.body.appendChild(s);s.src='https://blog.roysolberg.com/js/dom2.min.js';void(0);" class="waves-effect waves-light btn-large">DOM II: JavaScript Hell</a></p>
<b>Just click the button to play the game on this page.</b>

<b>To try it on other pages, just drag the button to your bookmark row in your browser.</b> After that you can just click the bookmark when visiting other sites.

<h4>What's a bookmarklet?</h4>A <a href="https://en.wikipedia.org/wiki/Bookmarklet">bookmarklet</a> is a bookmark stored in a web browser that contains JavaScript commands that add new features to the browser. Bookmarklets can be useful tools, e.g. for increasing the readability of web pages, do searches, create short urls, etc.

<a onclick="ga('send','event','game','play','dom2',3);return true;" href="javascript:var%20s=document.createElement('script');s.type='text/javascript';s.onerror=function(e){alert('Failed%20to%20load%20the%20script.%20The%20site\\'s%20Content%20Security%20Policy%20might%20be%20blocking%20it.%20Feel%20free%20to%20try%20again.');};document.body.appendChild(s);s.src='https://blog.roysolberg.com/js/dom2.min.js';void(0);">DOM II: JavaScript Hell</a> might not be very useful, but hopefully it's an enjoyable small game if you're bored or if you're disliking a web site. :)

<h4>Inspiration</h4>I never forgot about the similar <a href="https://github.com/erkie/erkie.github.com">bookmarklet created by Erik Rothoff Andersson</a> in 2010. I wanted to create something like that, but with my own code and my own twists and also have mobile support.

Oh, and the name? Since this game is all about <a href="https://en.wikipedia.org/wiki/Document_Object_Model">DOM</a> manipulation I figured that the name would be a nice play-on-words and tribute to Doom and more specifically <a href="https://en.wikipedia.org/wiki/Doom_II:_Hell_on_Earth">Doom II: Hell on Earth</a>.

<h4>Security</h4>As <a href="/category/security">I write a bit about security</a> I think it's natural to give you a word of warning when it comes to bookmarklets. My bookmarklet is safe to use, but you shouldn't take my word for it. You should never run bookmarklets on pages that have private information stored on it. Luckily, today online banks etc. uses a <a href="https://en.wikipedia.org/wiki/Content_Security_Policy">Content Security Policy</a> that will stop bookmarklets to be run on their page. Otherwise one would risk e.g. financial or private information getting in the wrong hands.

<h4>Feedback</h4>Please leave a comment or send me an e-mail if you see any bugs or have have any suggestions for the game. My guess is that there will be quite a few mobile devices having the some odd values reported from the gyroscope.
`,
                "images": [],
                "links": [],
                "category":
                {
                    "title": "Software development",
                    "url": "/software-development"
                },
                "tags": [
                    {
                        "title": "JavaScript",
                        "url": "/javascript"
                    },
                    {
                        "title": "Bookmarklet",
                        "url": "/bookmarklet"
                    },
                    {
                        "title": "Game",
                        "url": "/game"
                    }
                ]
            },
            {
                "title": "Case #9: IKEA is telling your name to everyone on the Internet",
                "published": true,
                "publishDate": "2017-10-09T05:35:00.000Z",
                "summary": "Ever been logged in at ikea.com? Then there's a chance you don't surf very anonymously.",
                "niceUrl": "/2017/10/ikea-name-leak",
                "text": `<h4>tl;dr</h4>ikea.com stores logged-in users' names in a cookie that is sent unencrypted over http. They also had an XSS vulnerability that made it easy to get hold of the name.
                
<h4>Summary</h4><table class="summary">
<tr>
    <td style="width:30%">Who:</td>
    <td><a href="http://ikea.com">IKEA</a></td>
</tr>
<tr>
    <td style="width:30%">Severity level:</td>
    <td><span class="green-text">Low</span> to <span class="orange-text">medium</span></td>
</tr>
<tr>
    <td style="width:30%">Reported:</td>
    <td>August 2017</td>
</tr>
<tr>
    <td style="width:30%">Reception and handling:</td>
    <td><span class="red-text">Poor</span></td>
</tr>
<tr>
    <td style="width:30%">Status:</td>
    <td><span class="orange-text">Partially fixed</span></td>
</tr>
<tr>
    <td style="width:30%">Reward:</td>
    <td>A thank you</td>
</tr>
<tr>
    <td style="width:30%">Issue:</td>
    <td>Cookie with full name sent over HTTP and XSS to get hold of it.</td>
</tr>
</table>
<div style="padding-top:80px;" class="col s12 m5 l5 xl4 right"><div class="card-panel light-blue darken-1"><span style="text-decoration:underline;" class="white-text"><a class="white-text" href="/2017/08/security-vulnerability-disclosures">Background: The purpose of these posts</a></span></div></div><h4>Background</h4>I have both ordered stuff online at ikea.com and also designed kitchen and walk-in warderobe using their planners. That means that I have an online account there.

I have always liked IKEA. Lots of cheap furnitures and other products, and mostly good value for the money. Even though they figured out warehouses a long time ago I have bad experiences with their online store. They didn't deliver the products on the estimated dates, they didn't deliver the right amount of stuff and they were unable to deliver the whole order, making me stuck with stuff I had to store and couldn't start to assemble.

<h4>Approach (technical stuff)</h4>I browsed ikea.com while having the <a href="https://en.wikipedia.org/wiki/Web_development_tools">browser development tools</a> open.

<h5>Cookie with name and location</h5>Looking at the site's cookies I noticed that some of the values clearly was <a href="https://en.wikipedia.org/wiki/Base64">Base64 encoded</a>. They store so many cookies that there might be some more hidden treasures, but I decoded a few and found that my full name and selected IKEA warehouse was stored in one of them. Also there was one without any encoding with my postal code and place.

Using a script like the following is a quick and dirty way of getting the cookie names and values (though some have parts of the values as BASE64 encoded):
<pre class="prettyprint lang-js">document.cookie.split(';').forEach(
    function(cookie){
        var parts = cookie.split('=',2);
        console.log(
            parts[0] + ' = '
             + decodeURIComponent(
                 function(parts){
                    try{
                        return parts[1] + ' / '
                        + atob(parts[1]);
                    }catch(e){
                        return parts[1];
                    }
                }(parts)));
    }
);</pre>
<a class="code" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/decodeURIComponent">decodeURIComponent()</a> is used for decoding the URL encoded values.
<a class="code" href="https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/atob">atob()</a> is used for decoding the Base64 encoded values.

<img style="float:left;width:450px;margin-right:20px;" class="materialboxed responsive-img" title="Some of the many cookies on ikea.com. The one called 'user_info_16' contains the user's name and is not flagged as HttpOnly or Secure." data-caption="Some of the many cookies on ikea.com. The one called 'user_info_16' contains the user's name and is not flagged as HttpOnly or Secure." src="/images/ikea01.png">ikea.com is served both with and without SSL. The cookies containing name and location is not flagged with either <a class="code" href="https://en.wikipedia.org/wiki/HTTP_cookie#HttpOnly_cookie">HttpOnly</a> or <a class="code" href="https://en.wikipedia.org/wiki/HTTP_cookie#Secure_cookie">Secure</a>. That means two things; your name is sent unencrypted over the Internet if you type in <span class="code">ikea.com</span> in your browser, and the cookie can be stolen via <a href="https://en.wikipedia.org/wiki/Cross-site_scripting">XSS</a>.

<h5>XSS</h5>I didn't find any XSS vulnerabilities, but a quick Google search led me to <a href="https://www.openbugbounty.org/search/?search=ikea.com&type=host">https://www.openbugbounty.org/search/?search=ikea.com&type=host</a> telling about several possibilities for XSS.

There's nothing like a proper "proof of concept" when reporting a bug or security issue, so I created a small JavaScript for fetching a user's name:
<pre class="prettyprint lang-js">var index;
var key = 'user_info_16=';
index = document.cookie.indexOf(key);
if (index === -1) {
    alert('You have not visited ikea.com, have you?');
} else {
    var temp = document.cookie.substring(index + key.length);
    temp = temp.substring(0, temp.indexOf(';'));
    if (temp === 'notloggedin') {
        alert('You are not logged in, are you?');
    } else {
        temp = atob(temp);
        temp = decodeURIComponent(temp);
        temp = temp.split(';');
        alert('Is your name ' + temp[0] + ' ' + temp[1] + '?');
    }
}</pre>
The script searches for the <span class="code">user_info_16</span> cookie, decodes the Base64 encoding and extracts the user's name and presents it in a dialog.

Removing the line breaks, URL encoding and appending it to the URL with the XSS vulnerability left me with the URL <a href="http://www.ikea.com/no/no/catalog/categories/departments/bedroom/tools/cobe/roomset/20161_cosl01a/%252Fpl%252Fpl%252Fcatalog%252Fcategories%252Fdepartments%252Fbedroom%252Ftools%252Fcobe%252Froomset%252F20161_cosl01a%253Fcid%253Dpl%25253Eot%25253Egoogle_plus%25253Eikea_share/u0026gsrc/u003d3p/u0026ic/u003d1/u0026jsh/u003dm;/_/scs/apps-static/_/js/k%3Doz.gapi.da.V3wBH64AFtA.O/m%3D__features__/am%3DAQ/rt%3Dj/d%3D1/rs%3DAGLTcCPcFVjcjQUijyKE8VUwPY2wbCZTVAp76e5%2522%253e%253cimg%2520src%253Da%2520onerror%253D%2522var%2520index%253Bvar%2520key%253D%2527user_info_16%253D%2527%253Bindex%253Ddocument.cookie.indexOf(key)%253Bif(index%253D%253D%253D-1)%257Balert(%2527You%2520have%2520not%2520visited%2520ikea.com%252C%2520have%2520you%253F%2527)%253B%257Delse%257Bvar%2520temp%253Ddocument.cookie.substring(index%252Bkey.length)%253Btemp%253Dtemp.substring(0%252Ctemp.indexOf(%2527%253B%2527))%253Bif(temp%253D%253D%253D%2527notloggedin%2527)%257Balert(%2527You%2520are%2520not%2520logged%2520in%252C%2520are%2520you%253F%2527)%253B%257Delse%257Btemp%253Datob(temp)%253Btemp%253DdecodeURIComponent%2520(temp)%253Btemp%253Dtemp.split(%2527%253B%2527)%253Balert(%2527Is%2520your%2520name%2520%2527%252Btemp%255B0%255D%252B%2527%2520%2527%252Btemp%255B1%255D%252B%2527%253F%2527)%253B%257D%257D%2522%253E%252F">http://www.ikea.com/no/no/catalog/categories/departments/bedroom/tools/cobe/roomset/20161_cosl01a/%252Fpl%252Fpl%252Fcatalog%252Fcategories%252Fdepartments%252Fbedroom%252Ftools%252Fcobe%252Froomset%252F20161_cosl01a%253Fcid%253Dpl%25253Eot%25253Egoogle_plus%25253Eikea_share/u0026gsrc/u003d3p/u0026ic/u003d1/u0026jsh/u003dm;/_/scs/apps-static/_/js/k%3Doz.gapi.da.V3wBH64AFtA.O/m%3D__features__/am%3DAQ/rt%3Dj/d%3D1/rs%3DAGLTcCPcFVjcjQUijyKE8VUwPY2wbCZTVAp76e5%2522%253e%253cimg%2520src%253Da%2520onerror%253D%2522var%2520index%253Bvar%2520key%253D%2527user_info_16%253D%2527%253Bindex%253Ddocument.cookie.indexOf(key)%253Bif(index%253D%253D%253D-1)%257Balert(%2527You%2520have%2520not%2520visited%2520ikea.com%252C%2520have%2520you%253F%2527)%253B%257Delse%257Bvar%2520temp%253Ddocument.cookie.substring(index%252Bkey.length)%253Btemp%253Dtemp.substring(0%252Ctemp.indexOf(%2527%253B%2527))%253Bif(temp%253D%253D%253D%2527notloggedin%2527)%257Balert(%2527You%2520are%2520not%2520logged%2520in%252C%2520are%2520you%253F%2527)%253B%257Delse%257Btemp%253Datob(temp)%253Btemp%253DdecodeURIComponent%2520(temp)%253Btemp%253Dtemp.split(%2527%253B%2527)%253Balert(%2527Is%2520your%2520name%2520%2527%252Btemp%255B0%255D%252B%2527%2520%2527%252Btemp%255B1%255D%252B%2527%253F%2527)%253B%257D%257D%2522%253E%252F</a>.

Now, browsers today often have often implemented some sort of XSS auditor to protect the user, so the above script didn't work out of the box with browsers built on later versions of <a href="https://en.wikipedia.org/wiki/Chromium_(web_browser)">Chromium</a>. So to use this in an attack one would probably have to some browser-depended adjustments. Using an <a href="https://www.owasp.org/index.php/XSS_Filter_Evasion_Cheat_Sheet">XSS Filter Evasion Cheat Sheet</a> will probably always find a vulnerability for any browser brand and version.

<img style="float:left;width:450px;margin-right:20px;" class="materialboxed responsive-img" title="The cross-site scripting and cookie vulnerability in action." data-caption="The cross-site scripting and cookie vulnerability in action." src="/images/ikea02.png">The URL worked just fine in the latest version of Firefox, as seen in the screenshot.

<h4>Security issues</h4>The three issues in question were these:
- <b>Logged-in users' full name is sent unencrypted over the Internet</b> (not fixed)
- <b>User's location used for calculating postage is sent unencrypted over the Internet</b> (not fixed)
- <b>It was possible for any website to retrieve your name</b> (fixed (at least for the URL reported))

<h4>Reception and handling</h4><h5>Day zero 2017</h5><b>I searched and searched to find some sort of contact point that wasn't the regular customer service phone. I failed. But I found a list of press contacts and tried the first one. I never got an answer.</b>

<h5>Day 5</h5><b>I sent an e-mail to the second press contact with the first one on copy. I never got an answer.</b>

<h5>Day 18</h5><b>I sent an e-mail to the third press contact with the two first ones on copy. I also mentioned that I was now going to give up.</b>

<h5>Day 19</h5>I didn't hear back from any of the press contacts directly, but I did receive an e-mail from an "mCommerce Specialist" asking for details. I wrote back with the technical details. <b>It took me 19 days to be able to give details about the issues.</b>

I got a reply the same day saying that they were going to look into this. <b>They also said that reports like this should go through their press center. It would be nice if they would write this somewhere on their website, and that the press contacts actually responded.</b>

<h5>Day 59</h5>I asked if they were actually going to do something about this, if I should wait to write about these issues.

<h5>Day 61</h5><b>I got a longer good answer explaining more about the challenges and timeline. They are working on it, but it probably won't be fixed anytime soon.</b>

<h4>Conclusion</h4>As mentioned before, you should assume that anyone who wants to, knows everything about you and everything you do. Even when you think you are anonymous you might not be just that.

If you are concerned about privacy you want to both log out of sites and delete the cache.

I also hope that we'll soon see most websites switch to secure communications only and leave http behind.
`,
                "images": ["/images/ikea01.png", "/images/ikea02.png"],
                "links": [
                    {
                        "title": "Background: Purpose of these posts",
                        "url": "/2017/08/security-vulnerability-disclosures"
                    }
                ],
                "category":
                {
                    "title": "Security",
                    "url": "/security"
                },
                "tags": [
                    {
                        "title": "Security Monday",
                        "url": "/security-monday"
                    },
                    {
                        "title": "Information leak",
                        "url": "/information-leak"
                    },
                    {
                        "title": "XSS",
                        "url": "/xss"
                    },
                    {
                        "title": "OWASP 2013 A3",
                        "url": "/owasp-2013-a3"
                    }
                ]
            },
            {
                "title": "Case #10: Your memories aren't safe",
                "published": true,
                "publishDate": "2017-10-16T05:30:00.000Z",
                "summary": "A digital memory book and social platform for people with special needs was found to be open for anyone to read, change and delete its users' content.",
                "niceUrl": "/2017/10/hackable-digital-memory-book",
                "text": `<h4>tl;dr</h4><i>Memoria</i> - a digital memory book and social platform for persons in care - had a webapp with vulnerabilities for reading, changing and deleting others' messages and pictures.
                
<h4>Summary</h4><table class="summary">
<tr>
    <td style="width:30%">Who:</td>
    <td><a href="http://minmemoria.no/">Memoria</a></td>
</tr>
<tr>
    <td style="width:30%">Severity level:</td>
    <td><span class="red-text">High</span></td>
</tr>
<tr>
    <td style="width:30%">Reported:</td>
    <td>August 2017</td>
</tr>
<tr>
    <td style="width:30%">Reception and handling:</td>
    <td><span class="green-text">Good</span></td>
</tr>
<tr>
    <td style="width:30%">Status:</td>
    <td><span class="green-text">Fixed</span></td>
</tr>
<tr>
    <td style="width:30%">Reward:</td>
    <td>A thank you</td>
</tr>
<tr>
    <td style="width:30%">Issue:</td>
    <td>Users could read, alter and delete other users contents.</td>
</tr>
</table>
<div style="padding-top:80px;" class="col s12 m5 l5 xl4 right"><div class="card-panel light-blue darken-1"><span style="text-decoration:underline;" class="white-text"><a class="white-text" href="/2017/08/security-vulnerability-disclosures">Background: The purpose of these posts</a></span></div></div><h4>Background</h4>Watching the TV one night in August there was this <a href="http://minmemoria.no/wp-content/uploads/2017/05/Memoria-TV2-nyhetene.mp4">news story on TV 2</a> about a digitial memory book and social platform for communication between families, healthcare professionals and users of care services. A great idea and it seemed like a pretty good product. Of course, I wondered if their security was in order. I mean, this is a site with a lot of personal stuff, like messages, pictures and personal stories.

<h4>Approach (technical stuff)</h4>I created a profile and surfed around the site while having my <a href="https://en.wikipedia.org/wiki/Web_development_tools">browser development tools</a> open. The site is running the good old <a href="https://angularjs.org/">Angular 1.X</a> with a lot of Ajax calls transfering JSON with data.

The pages would be of the style <span class="code">https://app.minmemoria.no/#/patients/&lt;some patient ID&gt;/albums</span>. So what would be the URL be for some kind of administrator page?

I guessed <span class="code">https://app.minmemoria.no/#/<b>admin</b></span> and was right. While there was some kind of authorization check I got partial access. I could e.g. see all the institutions in the system, and <b>was able to create my own new institution</b>. I did not try to delete any, but I wouldn't be surprised if that was possible..

Many of the URLs had some kind of ID, so I of course tried changing them seeing if I could get hold of other people's data. But the ID wasn't your regular incremental integer, so I had to create another account and see what kind of IDs that got. Now I was logged in with one user in Chrome and one user in Vivaldi. I'm still not sure what the system for the IDs is, but it is a big number that changes quite a bit from one entry to another. It doesn't seem to be a timestamp with milliseconds or seconds, but it doesn't change more than you would be able to guess or brute force other peoples IDs.

In general there seemed to be proper authorization checks when the URL contained one ID - just like the first one mentioned. However, there were quite a few URL of the format <span class="code">https://app.minmemoria.no/#/patients/&lt;some patient ID&gt;/&lt;some entity type&gt;/&lt;some entity ID&gt;</span>, and at least in some cases <b>there was no check if the logged in user was allowed to access that entity ID</b>.

For example <b>I could read other persons' stories</b> using the URL <span class="code">https://app.minmemoria.no/#/patients/&lt;a patient I had access to&gt;/stories/&lt;some other patient's story ID&gt;</span>.

<img style="float:left;width:450px;margin-right:20px;" class="materialboxed responsive-img" title="It was possible to read and change other persons' stories." data-caption="It was possible to read and change other persons' stories." src="/images/memoria01.png">This type of failing authentication check was the same for <span class="code">PUT</span> and <span class="code">DELETE</span> calls. So <b>I was able to change other persons' stories and delete other persons' pictures</b>. (As mentioned, I created several users and patients so I only accessed and altered contents between these accounts.)

The <a href="https://curl.haxx.se/">Curl</a> command copied from Chrome for changing others' messages looked like this:<pre class="prettyprint">
curl 'https://app.minmemoria.no/api/personas/&lt;a patient I had access to&gt;/events/&lt;message ID&gt;' \\
    -X PUT \\
    -H 'Origin: https://app.minmemoria.no' \\
    -H 'Accept-Encoding: gzip, deflate, br' \\
    -H 'x-request-id: &lt;some UUID&gt;' \\
    -H 'Accept-Language: nb-NO,nb;q=0.8,no;q=0.6,nn;q=0.4,en-US;q=0.2,en;q=0.2' \\
    -H 'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.90 Safari/537.36' \\
    -H 'Content-Type: application/json;charset=UTF-8' \\
    -H 'Accept: application/json, text/plain, */*' \\
    -H 'Referer: https://app.minmemoria.no/' \\
    -H 'Cookie: &lt;session cookie++&gt;' \\
    -H 'Connection: keep-alive' \\
    -H 'x-service-version: 1.0' \\
    --data-binary '{"articleBody":"My altered message"}' \\
    --compressed</pre>
The Curl command for deleting others' pictures looked like this:<pre class="prettyprint">
curl 'https://app.minmemoria.no/api/personas/&lt;a patient I had access to&gt;/folders/&lt;folder ID&gt;/assets/&lt;picture ID&gt;' \\
    -X DELETE \\
    -H 'Origin: https://app.minmemoria.no' \\
    -H 'Accept-Encoding: gzip, deflate, br' \\
    -H 'x-request-id: &lt;some UUID&gt;' \\
    -H 'Accept-Language: nb-NO,nb;q=0.8,no;q=0.6,nn;q=0.4,en-US;q=0.2,en;q=0.2' \\
    -H 'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.90 Safari/537.36' \\
    -H 'Accept: application/json, text/plain, */*' \\
    -H 'Referer: https://app.minmemoria.no/' \\
    -H 'Cookie: &lt;session cookie++&gt;' \\
    -H 'Connection: keep-alive' \\
    -H 'x-service-version: 1.0' \\
    --compressed</pre>
I feel pretty sure there was more problems than these, but I had found more than enough to report.

<h4>Security issues</h4>The issues I saw while doing a quick test of the site:
- <b>Any user could create an institution via the admin pages</b>
- <b>Any user could read any patients' stories</b>
- <b>Any user could change any patients' messages</b>
- <b>Any user could delete any patients' pictures</b>

Surely there were other issues here as well. I stopped checking for more when I found these.

<h4>Reception and handling</h4><h5>Day zero</h5>At night, I sent an e-mail to their contact e-mail address.

<h5>Day 1</h5>Just after lunch I received an e-mail thanking for the discovery and telling that they've reported it to the developers.

<b>I never received any more replies, so I don't know when they fixed it.</b>

<h5>Day 49</h5>I sent a new e-mail asking what the status was.

<h5>Day 50</h5>I got an answer telling that they had fixed the issues.

<h4>Conclusion</h4>Privacy of any social media platform is so important. It's so easy to create web sites today, but it's still hard to make them properly secure.

However, in this case there seems to be a big lack of understanding how to - and/or desire to - secure web apps. Memoria doesn't appear very concerned about security when they had issues like these. I wish they would show more respect for the care service users and their families. I hope they'll use some third party for security audits in the future.
`,
                "images": ["/images/memoria01.png"],
                "links": [
                    {
                        "title": "Background: Purpose of these posts",
                        "url": "/2017/08/security-vulnerability-disclosures"
                    }
                ],
                "category":
                {
                    "title": "Security",
                    "url": "/security"
                },
                "tags": [
                    {
                        "title": "Security Monday",
                        "url": "/security-monday"
                    },
                    {
                        "title": "Information leak",
                        "url": "/information-leak"
                    },
                    {
                        "title": "Data alteration",
                        "url": "/data-alteration"
                    },
                    {
                        "title": "Authorization",
                        "url": "/authorization"
                    },
                    {
                        "title": "OWASP 2013 A7",
                        "url": "/owasp-2013-a7"
                    }
                ]
            },
            {
                "title": "Case #11: Tracking tens of thousands of kids worldwide",
                "published": true,
                "hot": true,
                "publishDate": "2017-10-18T12:55:00.000Z",
                "updateDate": "2018-03-30T07:30:00.000Z",
                "summary": "Tens of thousands - possibly several hundred thousands - of kids can be tracked via their Gator and Caref watches.",
                "niceUrl": "/2017/10/tracking-kids",
                "text": `<h4>tl;dr</h4><i>Gator Watch</i> - a GPS watch for kids - is leaking data in all ends and anyone on the Internet can live track your kid. We're not talking about a security vulnerability, we're talking about non-existing security.
                
<h4>Summary</h4><table class="summary">
<tr>
    <td style="width:30%">Who:</td>
    <td><a href="http://gatorwatch.com/">Gator Watch</a></td>
</tr>
<tr>
    <td style="width:30%">Severity level:</td>
    <td><span class="red-text">Critical</span></td>
</tr>
<tr>
    <td style="width:30%">Reported:</td>
    <td>August 2017</td>
</tr>
<tr>
    <td style="width:30%">Reception and handling:</td>
    <td><span class="red-text">Poor</span></td>
</tr>
<tr>
    <td style="width:30%">Status:</td>
    <td><span class="red-text">Not fixed</span></td>
</tr>
<tr>
    <td style="width:30%">Reward:</td>
    <td>A thank you</td>
</tr>
<tr>
    <td style="width:30%">Issue:</td>
    <td>Anyone can track any watch, listen to voice messages, fake location, etc. etc.</td>
</tr>
</table>
<div style="padding-top:80px;" class="col s12 m5 l5 xl4 right"><div class="card-panel light-blue darken-1"><span style="text-decoration:underline;" class="white-text"><a class="white-text" href="/2017/08/security-vulnerability-disclosures">Background: The purpose of these posts</a></span></div></div><h4>Background</h4><img style="float:left;width:400px;margin-right:20px;" class="materialboxed responsive-img" title="gatorwatch.com claimed to have sold 300,000 watches before releasing their more secure Gator 3." data-caption="gatorwatch.com claimed to have sold 300,000 watches before releasing their more secure Gator 3." src="/images/gator01.png"/>I bought a Gator 2 smartwatch for my kid after reading some reviews about different watches. The concept was pretty good, but how good was the security?

<b>The company behind Gator Watch claims to have sold more than 300,000 watches. As far as I can understand they are all trackable for anyone on the Internet.</b>

I reported the issue in the start of August and was giving the vendor 90 days to fix the issues, so I was planning to publish this post in the start of November, but suddenly this case was all over the news.

The Gator watch is some places branded as Caref GPS Phone Watch. I'm not entirely sure if this is the same as the Gator 1 watch or if it's also Gator 2.

<h4>Approach (technical stuff)</h4>Looking back at this issue I really started in the wrong end. The biggest issues was so easy to spot without being very technical.

<h5>Watch to server communication</h5>Playing with the watch and the config I saw that <a href="http://gatorwatch.com/support/">it's possible to set up which server the watch connects to.</a>.

First I tried connecting to the Gator Watch server via <span class="code">telnet</span> trying to send HTTP commands. That failed, and I tried a couple of other commands, but the remote server just closed the connection on me.

Then I set it up to my own router's IP address, added a port forwarding to my machine where I was running a very simple Python script printing whatever came my way. <b>I configured the watch to use my IP, and surely it started sending simple strings with stuff like IMEI, positions, battery level, etc. It kept the connection open. The connection was not encrypted and there was no type of session ID or token or anything. It always used the IMEI as the identifier. This was pretty shocking.</b>

The quick-and-dirty Python script I hacked together to listen to the watch:
<pre class="prettyprint lang-python">#!/usr/bin/env python
import socket

TCP_IP = '0.0.0.0'
TCP_PORT = 17015
BUFFER_SIZE = 20

s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
s.bind((TCP_IP, TCP_PORT))
s.listen(1)

conn = None
try:
    conn, addr = s.accept()
    print 'Connection address:', addr
    while 1:
        data = conn.recv(BUFFER_SIZE)
        if not data: break
        print "received data:", data
        #conn.send(data)  # echo
except KeyboardInterrupt:
    print '\\nBye bye :)'
finally:
    if conn is not None:
        conn.close()
    if s is not None:
        s.close()</pre>
I sent some of the commands I got to the Gator Watch server via <span class="code">telnet</span>, and now it kept the connection open. <b>This way one can easily spoof the position of anyone as long as you have the IMEI.</b>

Here's some of the data received from our watch to my fake server (I've randomized the data and removed some newlines):
<pre class="prettyprint lang-python">received data: (45353IMEIHERE416P02,GT03.V10.20170303,7,23201)

received data: (45353IMEIHERE416P02,G,160805A6027.0330N00512.3931E000.41058310.00,6)

received data: (45353IMEIHERE416P02,G,160805A6027.0352N00512.3879E001.411000074.23,6)

received data: (45353IMEIHERE416P02,0,1,160805,220200,5)

received data: (45353IMEIHERE416P02,0,1,160805,220200,5)</pre>
<b>The data contains the software version, IMEI, time, location method (GPS vs Wi-Fi), location coordinates, battery left.</b>

<b>Sending the data to thet server you can get back who is allowed to call the watch. Like <span class="code">#555-2368#Dad</span>. So that makes it pretty easy to identify the family of the child.</b>

<h5>HTTP proxy</h5><img style="float:left;width:400px;margin-right:20px;" class="materialboxed responsive-img" title="Using Charles to intercept the communication between Gator Android app and server." data-caption="Using Charles to intercept the communication between Gator Android app and server." src="/images/gator02.png"/><a href="/2017/08/get-your-ssn-here">Just as in my first case</a> I set up Charles as HTTP+HTTPS proxy to listen to the communication between the Gator Watch server and Gator Watch app. <b>I was shocked to see that there is no encryption between the server and the app.</b>

What's more is that the app and server used an incremental integer as ID for the watch. <b>I could - and still can - just change the ID and get the posisition of any other watch. And it didn't stop there. I could - and still can - easily download the voice messages left by any child or their parent.</b> I changed the ID and got the position of a kid in Sweden. I only downloaded one other voice message, and it was appearantly from a Swedish parent sending some sort of first test message to his kid.

<h5>Decompiling the app</h5>I downloaded the APK for the <a href="https://play.google.com/store/apps/details?id=com.gatorgroup.carefwatch">Android app</a> and decompiled it. It was an hybrid <a href="https://angularjs.org/">Angular</a> app. Again, there was no signs of the app using https for anything. <b>The JavaScript source code gave away addresses to other servers and I found a URL with a what looks like an admin interface.</b>

<h5>Android system log</h5>Being an Android developer I work most days with the phone's system log on the screen. What I didn't see until after I found out of everything, is that <b>the Gator app actually constantly logs the URL which you can just open in your browser and change the integer ID in and get the position of any child wearing the watch</b>.

<img class="materialboxed responsive-img" title="The Gator app constantly prints out one of the vulnerable URLs to the Android system log." data-caption="The Gator app constantly prints out one of the vulnerable URLs to the Android system log." src="/images/gator04.png"/>
<h4>Security issues</h4><img style="float:right;width:400px;margin-right:20px;" class="materialboxed responsive-img" title="I got the location and voice messages of a random watch in Sweden. (Screenshot from gps-coordinates.net.)" data-caption="I got the location and voice messages of a random watch in Sweden. (Screenshot from gps-coordinates.net.)" src="/images/gator03.png"/>The issues I saw were these:
- <b>Anyone can easily track all Gator watches using a web browser</b>
- <b>Anyone can download any voice message left by child or grown-up</b>
- <b>Anyone can spoof the location of a watch</b>
- <b>Anyone can get hold of phone numbers and names that is allowed to call a watch</b>
- <b>There is no encryption between the app and the server</b>
- <b>There is no encryption between the watch and the server</b>

<h4>Reception and handling</h4><h5>Day zero</h5>Saturday evening I sent an e-mail to customer support of Gator Norway explaining the issues.

<h5>Day 3</h5>Tuesday morning I got a reply thanking me for sending them the information. They would check this out as soon as possible. And <i>"We want our watch to be safe for both children and parents!"</i>

<h5>Day 16</h5>Without my knowledge <a href="https://www.forbrukerradet.no/">The Norwegian Consumer Council</a> and security company <a href="https://www.mnemonic.no">mnemonic</a> started their own testing of different smartwatch brands sold in Norway - among them the Gator 2 watch.

<h5>Day 18</h5>I asked for a status on the issue.

<h5>Day 39</h5><b>They used 3 weeks to get back to me, and told that it "would take some time" to fix this.</b> I can understand that adding security on a completely broken system isn't done very easily. They also said that the Gator 3 Watch and Gator 3 app is already secured.

<h5>Day 76</h5><a href="https://www.forbrukerradet.no/siste-nytt/elendig-sikkerhet-i-smartklokker-for-barn">The Norwegian Consumer Council suddenly broke the news about security issues in smartwatches for children</a> (Norwegian article) - among them Gator Watch. <a href="http://www.bbc.com/news/technology-41652742">BBC also brought the news.</a> (English article) <b>This is when I decided to write this post with the technical details and all.</b> There was no reason to wait the normal 90 days when this is out. It's important that as many people as possible is told about this.

<h4>Conclusion</h4><b>If you ask me this is as bad as it can get. As a parent you want your kid to be nothing but safe. And when you buy a product like this you expect to make them more safe. But what happens is that you put your child at risk. Any predator can track your kid, and even start see patterns in when a child usually goes to e.g. school or after-school activities. It would even be possible to fake the position of the child, tricking parents to believe everything is fine or that their child is somewhere else than they are looking for him/her.

As a developer I just cannot understand how a product like this can end up on the market. Any developer involved in the project on any level would know that this is a really bad product. It's not like anyone mistakenly has screwed up. No one has cared to add any layer of security.

If your child is using Gator Watch I would recommend you stop him or her from doing that. Now.</b>

For those of you wanting to go even deeper I would recommend the solid <a href="https://fil.forbrukerradet.no/wp-content/uploads/2017/10/watchout-rapport-october-2017.pdf">report by Norwegian Consumer Council and mnemonic</a> (PDF, English, 49 pages). They also cover some other brands, go into more privacy issues and show how they did the technical tests.

<div style="background-color:#ffecb3;padding:10px 10px 15px 10px;" class=""><h4 id="update">Update</h4><a href="/2018/03/gator-watch-revisited">Read my follow-up on the Gator Watch</a> almost half a year later.</div>
`,
                "images": ["/images/gator01.png", "/images/gator02.png", "/images/gator03.png", "/images/gator04.png"],
                "links": [
                    {
                        "title": "Background: Purpose of these posts",
                        "url": "/2017/08/security-vulnerability-disclosures"
                    }
                ],
                "category":
                {
                    "title": "Security",
                    "url": "/security"
                },
                "tags": [
                    {
                        "title": "Security Monday",
                        "url": "/security-monday"
                    },
                    {
                        "title": "Information leak",
                        "url": "/information-leak"
                    },
                    {
                        "title": "Internet of Things",
                        "url": "/iot"
                    },
                    {
                        "title": "#WatchOut",
                        "url": "/watchout"
                    }
                ]
            },
            {
                "title": "Case #12: Insurance company leaking personal data",
                "published": true,
                "publishDate": "2017-10-23T08:50:00.000Z",
                "summary": "One of the biggest insurance companies in Norway leaked personal data and used 4.5 months to fix the issue.",
                "niceUrl": "/2017/10/gjensidige-leak",
                "text": `<h4>tl;dr</h4><i>Gjensidige Forsikring</i> - one of Norway's biggest insurance companies - was leaking information about customers' cancelled insurances to other customers. First they used 3.5 months to falsely conclude there was no issue, and then one additional month to fix it. Also, their web site can be abused for sending e-mails.
                
<h4>Summary</h4><table class="summary">
<tr>
    <td style="width:30%">Who:</td>
    <td><a href="https://gjensidige.no/group/about-us">Gjensidige Forsikring</a></td>
</tr>
<tr>
    <td style="width:30%">Severity level:</td>
    <td><span class="orange-text">Medium</span></td>
</tr>
<tr>
    <td style="width:30%">Reported:</td>
    <td>May 2017</td>
</tr>
<tr>
    <td style="width:30%">Reception and handling:</td>
    <td><span class="red-text">Poor</span></td>
</tr>
<tr>
    <td style="width:30%">Status:</td>
    <td><span class="orange-text">Partially fixed</span></td>
</tr>
<tr>
    <td style="width:30%">Reward:</td>
    <td>375 USD worth of gift certificates</td>
</tr>
<tr>
    <td style="width:30%">Issue:</td>
    <td>Personal data leak + possibility to spoof e-mails</td>
</tr>
</table>
<div style="padding-top:80px;" class="col s12 m5 l5 xl4 right"><div class="card-panel light-blue darken-1"><span style="text-decoration:underline;" class="white-text"><a class="white-text" href="/2017/08/security-vulnerability-disclosures">Background: The purpose of these posts</a></span></div></div><h4>Background</h4>I have had some insurances with Gjensidige for quite some time. Luckily I haven't had much use for them, but from the little contact I have had I must say I'm a happy customer.

As my insurance company I'm logged in at their site from time to time. Back in May I also took a quick peek at their web site in regards of data security.

<h4>Approach (technical stuff)</h4>When I was logged in I opened <a href="https://help.vivaldi.com/article/developer-tools/">Vivaldi developer tools</a> to inspect the pages and network traffic. There were quite a few <a href="https://en.wikipedia.org/wiki/Ajax_(programming)">Ajax</a> calls in the different pages asking for data to display.

<h5>The missing authorization check</h5><img style="float:left;width:400px;margin-right:20px;" class="materialboxed responsive-img" title="Some of the data returned for a cancelled insurance." data-caption="Some of the data returned for a cancelled insurance." src="/images/gjensidige01.png"/>As should be,for most calls the browser didn't specify any customer ID or anything like that. Those calls were safe. They do, however, have some calls that include some sort of ID, which is specified on the client side. Most of them seemed to do a proper authorization check, but as shown in the cases presented on this blog, there sometimes are exceptions to this.

<b>The REST endpoint giving back a list of cancelled insurances did not check if the ID sent in by the client. This ID seems to be an auto increment integer and I could just step one number to get another customer's cancelled insurances.</b>

The Curl command copied from the browser looked like this: <pre class="prettyprint">curl 'https://www.gjensidige.no/ip-web/forsikringer/annullerte/&lt;customer ID&gt;' \\
    -H 'x-klient-lokasjon: Meldingsboks' \\
    -H 'Applikasjon: INTERNETT' \\
    -H 'Accept-Language: nb-NO,nb;q=0.8,no;q=0.6,nn;q=0.4,en-US;q=0.2,en;q=0.2' \\
    -H 'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.97 Safari/537.36 Vivaldi/1.9.818.49' \\
    -H 'Accept: application/json' \\
    -H 'Referer: https://www.gjensidige.no/no/1/Din+side/forsikring/administrer-forsikringer/forsikringsdokumenter-new' \\
    -H 'Accept-Encoding: gzip, deflate, sdch, br' \\
    -H 'Cookie: JSESSIONID=&lt;session cookie&gt;; &lt;a bunch of more cookies&gt;;' \\
    -H 'Connection: keep-alive' --compressed \\
    | python -m json.tool</pre>
I added <span class="code">| python -m json.tool</span> just to get a "pretty print" of the JSON returned to the command line.

<h5>Faking e-mails</h5>I reported the authorization issue using an online form on their site. <b>When I submitted I noticed that the POST request in fact included the name and e-mail address from the sender, and also the e-mail address to whom it should be sent to.</b>

This, of course, got my attention. I saw that you could craft your own e-mails, choosing your own contents, topic, sender and receiver. I copied the <a href="https://curl.haxx.se/">Curl</a> command from the browser and easily changed it to send a "fake" e-mail.

<a href="https://en.wikipedia.org/wiki/Email_spoofing">E-mail spoofing</a> is nothing new, but there are a few interesting points here. There should be no reason why you would need the send and receiver addresses sent from the client. That's what makes it possible to forge e-mails in this case. Gjensidige uses <a href="https://en.wikipedia.org/wiki/Sender_Policy_Framework">Sender Policy Framework</a> (SPF) for their domain, but that wouldn't help in this case as the server sending the e-mails should be whitelisted. However, the server used in this case is not whitelisted, and Gjensidige has the rule <span class="code">~all</span> set. That rule allows for any servers to send e-mails (with <span class="code">SOFTFAIL</span>) from this domain. So, this again means that you don't really need Gjensidige's server to send spoofed e-mails from Gjensidige. So, maybe this is a feature and not a bug? I hope that they don't think this is all right.

Having this issue opens up for nice opportunities for <a href="https://en.wikipedia.org/wiki/Phishing">phishing</a>, or just abuse their server to send spam.

<img class="materialboxed responsive-img" title="The form that can be abused for spoofing e-mails." data-caption="The form that can be abused for spoofing e-mails." src="/images/gjensidige02.png"/>

<h4>Security issues</h4>The information leaked that I saw for cancelled insurances was this:
- Customer ID
- Insurance type
- Insurance number
- Price
- Start date
- Cancellation date
- Reason for cancellation:
  - Missing payments
  - Missing self-declaration
  - Need ceased
  - Insurance converted to other type
- Depending on insurance type there some extra information:
  - Full name and year of birth of customer
  - Full name and year of birth of child
  - Street address
  - Car type and plate number
  - Labour union membership

<b>Some customers, if not most, have several types of insurances which would open for combining information about them.</b> Now, I always minimize the amount of data I access to ensure no one can question my intentions, so I have to <b>make an educated guess that there might even be other types of information on some customers</b>.

Further more - and this is not fixed, so I'm not sure if they consider it a security issue - <b>it's possible to use their own server to send fake e-mails from their own e-mail addresses</b>.

<h4>Reception and handling</h4><h5>Day zero</h5>It wasn't very easy to find the correct contact point, but the closest I got was a general contact form originally to be used for <a href="https://en.wikipedia.org/wiki/Whistleblower">whistle-blowers</a>. I submitted the form Friday night.

It was when submitting this form the first time that I noticed that - as described in more details in the "Approach" part - it was actually possible to use this form as a way to send e-mails from anyone to anyone through their site. So I submitted the form one more time telling them about that as well.

<h5>Day 3</h5>Early Monday morning I got a confirmation that they had received information about the two issues and would inform the right persons. They also asked for me for a phone number where I could be reached.

I wrote back and told them my phone number. I don't think they ever tried to call me.

<h5>Day 80</h5><b>Having not heard anything back and not seeing any fixes I asked them for a status.</b>

<h5>Day 83</h5>In the morning I got a reply telling me that they had "taken care of it" and named another guy who would contact me when he would be back from vacation.

At night I got copied in on an e-mail from that guy where he asked a third guy about giving me feedback.

A couple of minutes later the second guy told me that he knew they had taken this seriously and worked on the issue. I would be contacted by a third guy when he was back from vacation.

<h5>Day 111</h5>I got a response from the Director of Group Security. He thanked me and quoted a security technician saying that the service in question would return an empty list if the logged in user wasn't authorized to get the list from the customer id it used for the request. The director also said that the reason it had taken me so long to get a reply was that they had gone thoroughly through all aspects of this issue.

<b>Gjensidige used more than 3.5 months to "thoroughly" go through "all aspects" of the issue and falsely concluded that the issue was not an issue.</b>

I wrote back and asked if I had misunderstood something and gave concrete examples of customer ids that actually would give data back.

<h5>Day 112</h5>I got a reply back telling me that they had forwarded this information to the person responsibly for the security of gjensidige.no.

<h5>Day 125</h5>I got more feedback telling me that they had confirmed that there was an issue and re-opened the case.

<h5>Day 148</h5>I got a new e-mail telling me that they had fixed and closed the issue in production 9 days earlier.

<h5>Day 163</h5>Writing this post I was surprised to see that the issue with e-mail spoofing remained. I had assumed they closed it earlier on. I sent a new e-mail asking about this.

<h5>Day 164</h5>I got a reply telling that the second report with the e-mail spoofing was stopped before it reached Group Security and the IT department.

<b>It actually Gjensidige 4.5 months to fix an information leak of this severity.</b>

<h4>Conclusion</h4>Gjensidige has been very polite and nice in their communication, and also grateful for getting the reports. <b>I would have said their reception and handling was great, had it not been for my own and other customers' data were accessible for all of 4.5 months after the initial report.</b>

While I understand that not everybody has the flexible server environments like <a href="/2017/08/digipost-leak">Digipost</a> or <a href="/2017/09/skandiabanken-leak">Skandiabanken</a>, even <b>using 4 weeks from the second report before fixing it in production isn't very impressive. This is an insurance company. They need to ensure that their customers' data is safe with them.</b>
`,
                "images": ["/images/gjensidige01.png", "/images/gjensidige02.png"],
                "links": [
                    {
                        "title": "Background: Purpose of these posts",
                        "url": "/2017/08/security-vulnerability-disclosures"
                    }
                ],
                "category":
                {
                    "title": "Security",
                    "url": "/security"
                },
                "tags": [
                    {
                        "title": "Security Monday",
                        "url": "/security-monday"
                    },
                    {
                        "title": "Information leak",
                        "url": "/information-leak"
                    },
                    {
                        "title": "Authorization",
                        "url": "/authorization"
                    },
                    {
                        "title": "E-mail spoofing",
                        "url": "/email-spoofing"
                    },
                    {
                        "title": "OWASP 2013 A7",
                        "url": "/owasp-2013-a7"
                    }
                ]
            },
            {
                "title": "Add security.txt to your site",
                "published": true,
                "publishDate": "2017-11-04T14:35:00.000Z",
                "updateDate": "2017-11-05T19:15:00.000Z",
                "summary": "Sometimes it's really difficult and time consuming to find a way to report a security vulnerability. But there is a very simple solution for that.",
                "niceUrl": "/2017/11/security-txt",
                "text": `<h4>tl;dr</h4><a href="https://twitter.com/edoverflow">Ed Foudil</a> has proposed <span class="code">security.txt</span> as a standard method for making it easier to report security issues. It's a plain text file with contact info that should be located in the <span class="code">.well-known</span> directory of a web site (or root of a file system). Currently it's a "Internet draft" that has been submitted for <a href="https://en.wikipedia.org/wiki/Request_for_Comments">RFC</a> review.
                
<h4>Why we need security.txt</h4>Over the last three months I have <a href="/category/security">published 12 fresh security issues</a> on my blog. While finding the issues has typically only taken a few minutes, finding somewhere to report the issue sometimes have be a real pain and very time consuming.

In most cases I have had to contact first-line customer support and try to write in a way that will ensure that they understand that they need to report this to the right party. Often this can work ok, but <b>I have even experienced to be turned down by the customer support because they have not understood what I was trying to tell them.</b>

<h5>IKEA</h5>In <a href="/2017/10/ikea-name-leak">the case with IKEA</a> I spent so much time trying to find the correct contact point. They had no general e-mail addresses or anything anywhere. <b>I ended up e-mailing three press contacts with the issues, and it took three weeks before I got their attention and got to tell them what the issue actually was. And according to IKEA this is actually the way any security issue should be reported.</b> <span class="code">security.txt</span> would have been a much better solution.

<h5>Gjensidige</h5>In <a href="/2017/10/gjensidige-leak">the case with the insurance company Gjensidige</a> <b>they managed to lose one of two reports before it reached the IT department</b>. <span class="code">security.txt</span> would have solved this nicely.

<h5>Tryg and Infotorg</h5>In <a href="/2017/08/get-your-ssn-here">the case with 1 million+ Norwegian Social Security numbers etc. exposed</a>, <b>the insurance company Tryg did not read the e-mails sent to the specified contact e-mail address, and Infotorg - who was responsible for the delivering the data - just stopped responding.</b> It was probably a lost case for Infotorg, but at least Tryg would have been notified with a <span class="code">security.txt</span>.

<h5>Project site with SQL injection</h5>In <a href="/2017/10/10-years-of-injection">the case with the company vulnerable for for SQL injection for 10 years</a> I did not know if their customer support form worked at all as I never got a reply. Writing to an e-mail address specified in <span class="code">security.txt</span> would've helped here.

<h5>In general</h5>In most cases the info would have been delivered directly to the correct persons instead of being delayed in some kind of first-line of customer support. You want it to make it easy to report a security issue, and you want the report to get to the right destination asap.

<h4>How to write security.txt</h4>It's a really simple standard. And simple is indeed beautiful. <span class="code">security.txt</span> should be a plain text file located in the <span class="code">.well-known</span> directory of the site, just like <a href="https://www.iana.org/assignments/well-known-uris/well-known-uris.xhtml">a bunch of others</a> as per <a href="https://tools.ietf.org/html/rfc5785">RFC 5785</a>.

<h5>Contact directive</h5>The only directive that must be present in <span class="code">security.txt</span> is <span class="code">Contact</span>, which lets you specify either an e-mail address (maybe not very smart considering spam) or a phone number or a URI that provides contact info. The order defines the preferred method of contact.

For my own <a class="code" href="/.well-known/security.txt">security.txt</a> I have used Google's <a href="https://www.google.com/recaptcha/admin#mailhide">reCAPTCHA Mailhide</a> and a link to <a href="https://twitter.com/roysolberg">my own Twitter account</a>.

<h5>Signature directive</h5>In order to ensure the authenticty of the <span class="code">security.txt</span> one should use the <span class="code">Signature</span> directive to sign it using either an external or internal signature.

<h5>Encryption directive</h5>The <span class="code">Encryption</span> lets you add your key for encrypted communication, like your <a href="https://en.wikipedia.org/wiki/Pretty_Good_Privacy">PGP</a> key or similar.

<h5>Acknowledgement directive</h5>The <span class="code">Acknowledgement</span> allows you to link to a page where security researchers are recognized for their reports.

<h5>It's a proposal</h5>It's a proposal, so be sure to check out <a href="https://securitytxt.org">securitytxt.org</a> for the latest update of the specification. Also, at the time of writing, you should take a look at <a href="https://github.com/securitytxt/security-txt/tree/draft">the draft branch at https://github.com/securitytxt/</a> for the latest development. There's also some interesting discussions on the <a href="https://github.com/securitytxt/security-txt/issues?q=">issue tracker of the same project</a>.

<h4>Example security.txt</h4><pre class="prettyprint">Contact: https://example.com/security-contact-form/
Contact: https://example.com/mailhide/security
Contact: 555-2368

Signature: https://example.com/.well-known/security.txt.sig
Encryption: https://example.com/pgp-key.txt
Acknowledgement: https://example.com/security-hall-of-fame.html</pre>
<h4>Conclusion</h4>This is one is easy. Please add support for <span class="code">security.txt</span> - as soon as you can - to make the web a safer and more secure place for us all.
`,
                "images": ["/images/security.png"],
                "links": [],
                "category":
                {
                    "title": "Security",
                    "url": "/security"
                },
                "tags": [
                    {
                        "title": "security.txt",
                        "url": "/security-txt"
                    }
                ]
            },
            {
                "title": "Case #13: Leaking shopping data",
                "published": true,
                "publishDate": "2017-11-13T19:40:00.000Z",
                "niceUrl": "/2017/11/goshopping-leak",
                "summary": "No one can see what you are shopping online, right?",
                "text": `<h4>tl;dr</h4><i>GoShopping</i> - a company owning several online stores - let anyone see all your previous orders and order lines using just your e-mail address.
                
<h4>Summary</h4><table class="summary">
<tr>
    <td style="width:30%">Who:</td>
    <td><a href="https://goshopping.no/">GoShopping</a></td>
</tr>
<tr>
    <td style="width:30%">Severity level:</td>
    <td><span class="green-text">Low</span> to <span class="orange-text">medium</span></td>
</tr>
<tr>
    <td style="width:30%">Reported:</td>
    <td>July 2017</td>
</tr>
<tr>
    <td style="width:30%">Reception and handling:</td>
    <td><span class="red-text">Poor</span></td>
</tr>
<tr>
    <td style="width:30%">Status:</td>
    <td><span class="green-text">Fixed</span></td>
</tr>
<tr>
    <td style="width:30%">Reward:</td>
    <td>A thank you</td>
</tr>
<tr>
    <td style="width:30%">Issue:</td>
    <td>Leak with all order details</td>
</tr>
</table>
<div style="padding-top:80px;" class="col s12 m5 l5 xl4 right"><div class="card-panel light-blue darken-1"><span style="text-decoration:underline;" class="white-text"><a class="white-text" href="/2017/08/security-vulnerability-disclosures">Background: The purpose of these posts</a></span></div></div><h4>Background</h4>I recently returned to <a href="https://www.kitchenone.no/">KitchenOne</a> to buy some accessories to my coffee machine. I didn't have any account (I don't think you can have), but was a bit relieved and surprised when I during checkout could just enter my e-mail address and it would fill out my name, address and phone number.

That made me think. <b>Is it OK that anyone can enter my e-mail address to a service and get back my full name, address and phone number? And maybe there could be more than meets the eye?</b>

<h4>Approach (technical stuff)</h4><img style="float:left;width:400px;margin-right:20px;" class="materialboxed responsive-img" title="The service was leaking all data about my previous order - including order lines and payment information." data-caption="The service was leaking all data about my previous order - including order lines and payment information." src="/images/goshopping01.png"/>When I was at the checkout step I opened <a href="https://help.vivaldi.com/article/developer-tools/">Vivaldi developer tools</a> to inspect the network traffic. There was a <a href="https://en.wikipedia.org/wiki/Ajax_(programming)">Ajax</a> call to the mother site GoShopping's CMS (they're using <a href="https://umbraco.com/">the open source ASP.NET CMS Umbraco</a>) returning some JSON with the name, address and phone number. <b>But the JSON contained more. It contained my previous order in full details including all items that I bought. And even my payment information was included.</b>
<br style="clear:left;"/>
<h4>Security issues</h4><img style="float:right;width:400px;margin-right:20px;" class="materialboxed responsive-img" title="The service was leaking all data about my previous order - including order lines and payment information." data-caption="The service was leaking all data about my previous order - including order lines and payment information." src="/images/goshopping02.png"/>The service for looking up the address from the e-mail address leaked the following information:
 - Seemingly all orders
 - For an order there was this information:
   - The date of the purchase
   - <b>Each and all products ordered</b>
   - Any discount
   - <b>Name and address used for payment</b> (in addition to the one used for delivery)
   - <b>Credit card number with <a href="https://en.wikipedia.org/wiki/PAN_truncation">PAN truncation</a></b>

<b>And then there's the question if the user wants it to be possible to look up his or her name, address and phone number using their e-mail address. What if you have some kind of unlisted address? This part has not been fixed, but is assumingly working as intended.</b>

<h4>Reception and handling</h4><h5>Day zero</h5>Monday night I sent an e-mail telling about the leak.

<h5>Day 3</h5>I got an e-mail back telling that they would look into the issue.

<h5>Day 79</h5><b>Having not heard anything back and not seeing any fixes I asked them for a status. I did not receive any reply on this e-mail.</b>

<h5>Day 91</h5><b>I told them I would write about the case here on my blog that very same day.</b>

<b>10 minutes(!) later I got a reply telling that the issue would be fixed some time the week after. As a believer in <a href="https://en.wikipedia.org/wiki/Responsible_disclosure">responsible disclosure</a> I decided to wait for them to release the fix.</b>

<h5>Day 10X</h5>I tested the leaking endpoint and found that it was fixed.

<b>Would they have relased any fix if I didn't tell them I was going to do a write-up? I'm not so sure about that.</b>

<h4>Similar case</h4>I discovered a similar less severe case with <a href="https://power.no">Power</a> in September. Power is a chain selling consumer electronics. When you check out you can specify your phone number. If you have been shopping there sometime before they can fill out the check out form with name, and address. Seems okay, right?

There's a couple of problems here. The first one is that <b>they also returned the customer's e-mail address</b>. And this was what I complained about in <a href="https://twitter.com/roysolberg/status/913690656257773568">my tweet to Power</a>. They have recently fixed this and removed the e-mail address for the data returned.

<img style="float:right;width:400px;margin-left:20px;" class="materialboxed responsive-img" title="My tweet to the consumer electronics chain Power." data-caption="My tweet to the consumer electronics chain Power." src="/images/goshopping03-power.png"/>The second problem is like in this case. <b>Okay, so the company removes the biggest issue, but have you agreed to that it should be possible to look up your name and address using your e-mail address or phone number? What if you have an unlisted phone number? What if you have an unlisted address?</b>

<h4>Conclusion</h4>This case is a classic example of server endpoints returning more data than what is shown to the user - and this time the data really shouldn't be there.

I don't like when it takes more than 3 months to fix something that seemingly is so easy to fix. And I'm not sure they would have fixed this at all if I hadn't been following them up and if I hadn't had this blog. At least now the users' data is more secure.
`,
                "images": ["/images/goshopping02.png", "/images/goshopping01.png", "/images/goshopping03-power.png"],
                "links": [
                    {
                        "title": "Background: Purpose of these posts",
                        "url": "/2017/08/security-vulnerability-disclosures"
                    }
                ],
                "category":
                {
                    "title": "Security",
                    "url": "/security"
                },
                "tags": [
                    {
                        "title": "Security Monday",
                        "url": "/security-monday"
                    },
                    {
                        "title": "Information leak",
                        "url": "/information-leak"
                    }
                ]
            },
            {
                "title": "Summarizing 13 security vulnerabilities",
                "published": true,
                "publishDate": "2017-11-20T05:55:00.000Z",
                "niceUrl": "/2017/11/summary-13-cases",
                "summary": "Let me spell out why you should care that I recently so easily found 13 security vulnerabilities.",
                "text": `<h4>tl;dr</h4>I'm summarizing <a href="/category/security">the 13 security issues I've presented on the blog</a> over the last three months.
                
<h4>Crime types</h4><b>In the table below I've tried to show how different types of criminals can directly use the information from the different cases.</b> Of course, combining sources would make you even more vulnerable, so I'll get more into that further down in this post.

<table class="checkmarks striped">
<thead>
<tr>
    <th></th>
    <th></th>
    <th style="text-align:center;padding-bottom:0px;" colspan="6">Directly applicable for</th>
</tr>
<tr>
    <th style="width:28%">Case</th>
    <th style="width:12%">Jealous partner</th>
    <th style="width:12%">Stalker</th>
    <th style="width:12%">Kid&#8203;napper</th>
    <th style="width:12%">White-collar crimi&#8203;nal</th>
    <th style="width:12%">Political hacker</th>
    <th style="width:12%">Foreign intell&#8203;igence</th>
</tr>
</thead>
<tbody>
<tr>
    <td><a href="/2017/08/get-your-ssn-here">#1 - Tryg + Infotorg</a></td>
    <td style="text-align:center;">-</td>
    <td style="text-align:center;background-color:#4CAF50;">&#x2714;</td>
    <td style="text-align:center;">-</td>
    <td style="text-align:center;background-color:#4CAF50;">&#x2714;</td>
    <td style="text-align:center;">-</td>
    <td style="text-align:center;background-color:#4CAF50;">&#x2714;</td>
</tr>
<tr>
    <td><a href="/2017/08/auth-auth">#2 - Acme</a></td>
    <td style="text-align:center;">-</td>
    <td style="text-align:center;">-</td>
    <td style="text-align:center;">-</td>
    <td style="text-align:center;">-</td>
    <td style="text-align:center;">-</td>
    <td style="text-align:center;">-</td>
</tr>
<tr>
    <td><a href="/2017/08/digipost-leak">#3 - Digipost</a></td>
    <td style="text-align:center;">-</td>
    <td style="text-align:center;background-color:#4CAF50;">&#x2714;</td>
    <td style="text-align:center;">-</td>
    <td style="text-align:center;">-</td>
    <td style="text-align:center;background-color:#4CAF50;">&#x2714;</td>
    <td style="text-align:center;background-color:#4CAF50;">&#x2714;</td>
</tr>
<tr>
    <td><a href="/2017/09/php-hack">#4 - Acme2</a></td>
    <td style="text-align:center;">-</td>
    <td style="text-align:center;">-</td>
    <td style="text-align:center;">-</td>
    <td style="text-align:center;background-color:#4CAF50;">&#x2714;</td>
    <td style="text-align:center;">-</td>
    <td style="text-align:center;">-</td>
</tr>
<tr>
    <td><a href="/2017/09/skandiabanken-leak">#5 - Sbanken</a></td>
    <td style="text-align:center;background-color:#4CAF50;">&#x2714;</td>
    <td style="text-align:center;">-</td>
    <td style="text-align:center;">-</td>
    <td style="text-align:center;">-</td>
    <td style="text-align:center;">-</td>
    <td style="text-align:center;">-</td>
</tr>
<tr>
    <td><a href="/2017/09/picture-leak">#6 - Orkla + Japan Photo</a></td>
    <td style="text-align:center;">-</td>
    <td style="text-align:center;">-</td>
    <td style="text-align:center;">-</td>
    <td style="text-align:center;">-</td>
    <td style="text-align:center;">-</td>
    <td style="text-align:center;">-</td>
</tr>
<tr>
    <td><a href="/2017/09/gym-leak">#7 - Energi Treningssenter</a></td>
    <td style="text-align:center;background-color:#4CAF50;">&#x2714;</td>
    <td style="text-align:center;background-color:#4CAF50;">&#x2714;</td>
    <td style="text-align:center;">-</td>
    <td style="text-align:center;">-</td>
    <td style="text-align:center;">-</td>
    <td style="text-align:center;">-</td>
</tr>
<tr>
    <td><a href="/2017/10/10-years-of-injection">#8 - Acme3</a></td>
    <td style="text-align:center;">-</td>
    <td style="text-align:center;">-</td>
    <td style="text-align:center;">-</td>
    <td style="text-align:center;background-color:#4CAF50;">&#x2714;</td>
    <td style="text-align:center;">-</td>
    <td style="text-align:center;">-</td>
</tr>
<tr>
    <td><a href="/2017/10/ikea-name-leak">#9 - IKEA</a></td>
    <td style="text-align:center;">-</td>
    <td style="text-align:center;">-</td>
    <td style="text-align:center;">-</td>
    <td style="text-align:center;">-</td>
    <td style="text-align:center;">-</td>
    <td style="text-align:center;">-</td>
</tr>
<tr>
    <td><a href="/2017/10/hackable-digital-memory-book">#10 - Memoria</a></td>
    <td style="text-align:center;">-</td>
    <td style="text-align:center;">-</td>
    <td style="text-align:center;">-</td>
    <td style="text-align:center;">-</td>
    <td style="text-align:center;">-</td>
    <td style="text-align:center;">-</td>
</tr>
<tr>
    <td><a href="/2017/10/tracking-kids">#11 - Gator Watch</a></td>
    <td style="text-align:center;">-</td>
    <td style="text-align:center;">-</td>
    <td style="text-align:center;background-color:#4CAF50;">&#x2714;</td>
    <td style="text-align:center;">-</td>
    <td style="text-align:center;">-</td>
    <td style="text-align:center;">-</td>
</tr>
<tr>
    <td><a href="/2017/10/gjensidige-leak">#12 - Gjensidige</a></td>
    <td style="text-align:center;">-</td>
    <td style="text-align:center;background-color:#4CAF50;">&#x2714;</td>
    <td style="text-align:center;">-</td>
    <td style="text-align:center;">-</td>
    <td style="text-align:center;">-</td>
    <td style="text-align:center;">-</td>
</tr>
<tr>
    <td><a href="/2017/11/goshopping-leak">#13 - GoShopping</a></td>
    <td style="text-align:center;">-</td>
    <td style="text-align:center;background-color:#4CAF50;">&#x2714;</td>
    <td style="text-align:center;">-</td>
    <td style="text-align:center;">-</td>
    <td style="text-align:center;">-</td>
    <td style="text-align:center;">-</td>
</tr>
</tbody>
</table>

<h5>Jealous partner</h5>With <i>jealous partner</i> I'm considering persons who have some kind of <a href="https://en.wikipedia.org/wiki/Abusive_power_and_control">abusive power and control</a> or <a href="https://en.wikipedia.org/wiki/Pathological_jealousy">jealousy</a>. They could make use of usage data like the time the partner entered the door at the gym or what he or she bought at the store at what time.

<h5>Stalker</h5>A <a href="https://en.wikipedia.org/wiki/Stalking">stalker</a> is a person with unwanted or obsessive attention towards another person. Using information leaks a stalker would be able to get more personal information (i.e. address, phone number, e-mail address) about the victim. And getting something like the victim's IP address would open for attacks on computer equipment which again can lead to more leaks of personal data (think your mobile phone with all your images, your e-mail, etc.).

<h5>Kidnapper</h5><a href="https://en.wikipedia.org/wiki/Kidnapping">Kidnappers</a> would be able to use location data and other usage information to understand patterns and when it's a fitting time to commit the crime.

<h5>White-collar crimi​nal</h5>In <a href="https://en.wikipedia.org/wiki/White-collar_crime">while-collar crime</a> I include identity theft and other types of finacially motivated crimes. Useful information could be Social Security Numbers (SSN), names, addresses, phone numbers, etc.

<h5>Political hacker</h5>With <i>political hacker</i> I mean individuals or groups that have some kind of political motivation to get access to data about politicians. A list of people's names and IP addresses would be great news for trying to break into a politician's computer network.

<h5>Foreign intelligence</h5>I suppose some foreign intelligence organizations wouldn't mind getting an up to date high quality list of names, Social Security Numbers and addresses for most of the grown population in a nation. And for more targeted operations full names and IP addresses sure helps.

<h4>Information leaks</h4>More often than not the security issues I have found have included some sort of personal information leak. In the table below I'm summarizing the severity and the leaks.

<table class="checkmarks striped">
<thead>
<tr>
    <th style="width:28%">Case</th>
    <th style="width:18%">Severity</th>
    <th style="width:30%">Data leaked</th>
    <th style="width:12%">Enum&#8203;eration vulvner&#8203;ability</th>
    <th style="width:12%">Privacy threat</th>
</tr>
</thead>
<tbody>
<tr>
    <td><a href="/2017/08/get-your-ssn-here">#1 - Tryg + Infotorg</a></td>
    <td><span class="green-text">Low</span> to <span class="orange-text">medium</span></td>
    <td>SSN, names, addresses, birthdays, etc.</td>
    <td style="text-align:center;background-color:#4CAF50;">&#x2714;</td>
    <td style="text-align:center;background-color:#4CAF50;">&#x2714;</td>
</tr>
<tr>
    <td><a href="/2017/08/auth-auth">#2 - Acme</a></td>
    <td><span class="green-text">Very low</span></td>
    <td>-</td>
    <td style="text-align:center;background-color:#4CAF50;">&#x2714;</td>
    <td style="text-align:center;">-</td>
</tr>
<tr>
    <td><a href="/2017/08/digipost-leak">#3 - Digipost</a></td>
    <td><span class="orange-text">Medium</span></td>
    <td>Names and IP addresses</td>
    <td style="text-align:center;background-color:#4CAF50;">&#x2714;</td>
    <td style="text-align:center;background-color:#4CAF50;">&#x2714;</td>
</tr>
<tr>
    <td><a href="/2017/09/php-hack">#4 - Acme2</a></td>
    <td><span class="red-text">Critical</span></td>
    <td>-</td>
    <td style="text-align:center;background-color:#4CAF50;">&#x2714;</td>
    <td style="text-align:center;background-color:#4CAF50;">&#x2714;</td>
</tr>
<tr>
    <td><a href="/2017/09/skandiabanken-leak">#5 - Sbanken</a></td>
    <td><span class="red-text">High</span></td>
    <td>Bank account balances</td>
    <td style="text-align:center;">-</td>
    <td style="text-align:center;background-color:#4CAF50;">&#x2714;</td>
</tr>
<tr>
    <td><a href="/2017/09/picture-leak">#6 - Orkla + Japan Photo</a></td>
    <td><span class="green-text">Low</span></td>
    <td>Pictures and first names</td>
    <td style="text-align:center;background-color:#4CAF50;">&#x2714;</td>
    <td style="text-align:center;background-color:#4CAF50;">&#x2714;</td>
</tr>
<tr>
    <td><a href="/2017/09/gym-leak">#7 - Energi Treningssenter</a></td>
    <td><span class="red-text">High</span></td>
    <td>Names, visit logs, e-mail addresses, phone numbers, bank account numbers, pictures</td>
    <td style="text-align:center;background-color:#4CAF50;">&#x2714;</td>
    <td style="text-align:center;background-color:#4CAF50;">&#x2714;</td>
</tr>
<tr>
    <td><a href="/2017/10/10-years-of-injection">#8 - Acme3</a></td>
    <td><span class="red-text">Critical</span></td>
    <td>A lot of different company data</td>
    <td style="text-align:center;background-color:#4CAF50;">&#x2714;</td>
    <td style="text-align:center;background-color:#4CAF50;">&#x2714;</td>
</tr>
<tr>
    <td><a href="/2017/10/ikea-name-leak">#9 - IKEA</a></td>
    <td><span class="green-text">Low</span> to <span class="orange-text">medium</span></td>
    <td>Names and locations</td>
    <td style="text-align:center;">-</td>
    <td style="text-align:center;background-color:#4CAF50;">&#x2714;</td>
</tr>
<tr>
    <td><a href="/2017/10/hackable-digital-memory-book">#10 - Memoria</a></td>
    <td><span class="red-text">High</span></td>
    <td>Private messages</td>
    <td style="text-align:center;background-color:#4CAF50;">&#x2714;</td>
    <td style="text-align:center;background-color:#4CAF50;">&#x2714;</td>
</tr>
<tr>
    <td><a href="/2017/10/tracking-kids">#11 - Gator Watch</a></td>
    <td><span class="red-text">Critical</span></td>
    <td>Kids' location, voice messages, phone numbers</td>
    <td style="text-align:center;background-color:#4CAF50;">&#x2714;</td>
    <td style="text-align:center;background-color:#4CAF50;">&#x2714;</td>
</tr>
<tr>
    <td><a href="/2017/10/gjensidige-leak">#12 - Gjensidige</a></td>
    <td><span class="orange-text">Medium</span></td>
    <td>Names, addresses, insurance details</td>
    <td style="text-align:center;background-color:#4CAF50;">&#x2714;</td>
    <td style="text-align:center;background-color:#4CAF50;">&#x2714;</td>
</tr>
<tr>
    <td><a href="/2017/11/goshopping-leak">#13 - GoShopping</a></td>
    <td><span class="green-text">Low</span> to <span class="orange-text">medium</span></td>
    <td>Names, addresses, order details</td>
    <td style="text-align:center;">-</td>
    <td style="text-align:center;background-color:#4CAF50;">&#x2714;</td>
</tr>
</tbody>
</table>

<h5>Data leaked</h5><b>A lot</b> of different personal data has been leaked. And looking at the cases you'll see that you can use data from one source to look up data in another.

<h5>Enum​eration vulvner​ability</h5>The checkmark for <i>enum​eration vulvner​ability</i> indicates if it was possible to access all the data systematically or not. Only a few of them needed knowledge like a bank account number or e-mail address, so this is bad news for you as an end user.

<h5>Privacy threat</h5>While not all cases are directly applicable for criminals, almost every single one of them poses a threat to your privacy. This threat goes from you not surfing anonymously on the Internet to your home network being vulnerable for further attacks to your kids being tracked to your online shopping being exposed etc.

<h4>Combining sources</h4>While the vulnerabilities alone are bad, combining them may make them more severe. So which of the 13 could have been used together?

In the table below I've marked the the cases in which there are some overlapping data that will make it possible to get retrieve more data or increase the <a href="https://en.wikipedia.org/wiki/Attack_surface">attack surface</a>.
<table class="checkmarks striped">
<thead>
<tr>
    <th style="width:28%">Case</th>
    <td style="width:5%;text-align:center;">#1</td>
    <td style="width:5%;text-align:center;">#2</td>
    <td style="width:5%;text-align:center;">#3</td>
    <td style="width:5%;text-align:center;">#4</td>
    <td style="width:5%;text-align:center;">#5</td>
    <td style="width:5%;text-align:center;">#6</td>
    <td style="width:5%;text-align:center;">#7</td>
    <td style="width:5%;text-align:center;">#8</td>
    <td style="width:5%;text-align:center;">#9</td>
    <td style="width:5%;text-align:center;">#10</td>
    <td style="width:5%;text-align:center;">#11</td>
    <td style="width:5%;text-align:center;">#12</td>
    <td style="width:5%;text-align:center;">#13</td>
</tr>
</thead>
<tbody>
<tr>
    <td><a href="/2017/08/get-your-ssn-here">#1 - Tryg + Infotorg</a></td>
    <td style="text-align:center;">-</td>
    <td style="text-align:center;">-</td>
    <td style="text-align:center;">-</td>
    <td style="text-align:center;">-</td>
    <td style="text-align:center;">-</td>
    <td style="text-align:center;">-</td>
    <td style="text-align:center;">-</td>
    <td style="text-align:center;">-</td>
    <td style="text-align:center;">-</td>
    <td style="text-align:center;">-</td>
    <td style="text-align:center;">-</td>
    <td style="text-align:center;">-</td>
    <td style="text-align:center;">-</td>
</tr>
<tr>
    <td><a href="/2017/08/auth-auth">#2 - Acme</a></td>
    <td></td>
    <td style="text-align:center;">-</td>
    <td style="text-align:center;">-</td>
    <td style="text-align:center;">-</td>
    <td style="text-align:center;">-</td>
    <td style="text-align:center;">-</td>
    <td style="text-align:center;">-</td>
    <td style="text-align:center;">-</td>
    <td style="text-align:center;">-</td>
    <td style="text-align:center;">-</td>
    <td style="text-align:center;">-</td>
    <td style="text-align:center;">-</td>
    <td style="text-align:center;">-</td>
</tr>
<tr>
    <td><a href="/2017/08/digipost-leak">#3 - Digipost</a></td>
    <td style="text-align:center;background-color:#4CAF50;">&#x2714;</td>
    <td></td>
    <td style="text-align:center;">-</td>
    <td style="text-align:center;">-</td>
    <td style="text-align:center;">-</td>
    <td style="text-align:center;">-</td>
    <td style="text-align:center;">-</td>
    <td style="text-align:center;">-</td>
    <td style="text-align:center;">-</td>
    <td style="text-align:center;">-</td>
    <td style="text-align:center;">-</td>
    <td style="text-align:center;">-</td>
    <td style="text-align:center;">-</td>
</tr>
<tr>
    <td><a href="/2017/09/php-hack">#4 - Acme2</a></td>
    <td></td>
    <td></td>
    <td></td>
    <td style="text-align:center;">-</td>
    <td style="text-align:center;">-</td>
    <td style="text-align:center;">-</td>
    <td style="text-align:center;">-</td>
    <td style="text-align:center;">-</td>
    <td style="text-align:center;">-</td>
    <td style="text-align:center;">-</td>
    <td style="text-align:center;">-</td>
    <td style="text-align:center;">-</td>
    <td style="text-align:center;">-</td>
</tr>
<tr>
    <td><a href="/2017/09/skandiabanken-leak">#5 - Sbanken</a></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td style="text-align:center;">-</td>
    <td style="text-align:center;">-</td>
    <td style="text-align:center;">-</td>
    <td style="text-align:center;">-</td>
    <td style="text-align:center;">-</td>
    <td style="text-align:center;">-</td>
    <td style="text-align:center;">-</td>
    <td style="text-align:center;">-</td>
    <td style="text-align:center;">-</td>
</tr>
<tr>
    <td><a href="/2017/09/picture-leak">#6 - Orkla + Japan Photo</a></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td style="text-align:center;">-</td>
    <td style="text-align:center;">-</td>
    <td style="text-align:center;">-</td>
    <td style="text-align:center;">-</td>
    <td style="text-align:center;">-</td>
    <td style="text-align:center;">-</td>
    <td style="text-align:center;">-</td>
    <td style="text-align:center;">-</td>
</tr>
<tr>
    <td><a href="/2017/09/gym-leak">#7 - Energi Treningssenter</a></td>
    <td style="text-align:center;background-color:#4CAF50;">&#x2714;</td>
    <td></td>
    <td style="text-align:center;background-color:#4CAF50;">&#x2714;</td>
    <td></td>
    <td style="text-align:center;background-color:#4CAF50;">&#x2714;</td>
    <td></td>
    <td style="text-align:center;">-</td>
    <td style="text-align:center;">-</td>
    <td style="text-align:center;">-</td>
    <td style="text-align:center;">-</td>
    <td style="text-align:center;">-</td>
    <td style="text-align:center;">-</td>
    <td style="text-align:center;">-</td>
</tr>
<tr>
    <td><a href="/2017/10/10-years-of-injection">#8 - Acme3</a></td>
    <td style="text-align:center;background-color:#4CAF50;">&#x2714;</td>
    <td></td>
    <td style="text-align:center;background-color:#4CAF50;">&#x2714;</td>
    <td></td>
    <td style="text-align:center;background-color:#4CAF50;">&#x2714;</td>
    <td></td>
    <td style="text-align:center;background-color:#4CAF50;">&#x2714;</td>
    <td style="text-align:center;">-</td>
    <td style="text-align:center;">-</td>
    <td style="text-align:center;">-</td>
    <td style="text-align:center;">-</td>
    <td style="text-align:center;">-</td>
    <td style="text-align:center;">-</td>
</tr>
<tr>
    <td><a href="/2017/10/ikea-name-leak">#9 - IKEA</a></td>
    <td style="text-align:center;background-color:#4CAF50;">&#x2714;</td>
    <td></td>
    <td style="text-align:center;background-color:#4CAF50;">&#x2714;</td>
    <td></td>
    <td></td>
    <td></td>
    <td style="text-align:center;background-color:#4CAF50;">&#x2714;</td>
    <td style="text-align:center;background-color:#4CAF50;">&#x2714;</td>
    <td style="text-align:center;">-</td>
    <td style="text-align:center;">-</td>
    <td style="text-align:center;">-</td>
    <td style="text-align:center;">-</td>
    <td style="text-align:center;">-</td>
</tr>
<tr>
    <td><a href="/2017/10/hackable-digital-memory-book">#10 - Memoria</a></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td style="text-align:center;">-</td>
    <td style="text-align:center;">-</td>
    <td style="text-align:center;">-</td>
    <td style="text-align:center;">-</td>
</tr>
<tr>
    <td><a href="/2017/10/tracking-kids">#11 - Gator Watch</a></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td style="text-align:center;background-color:#4CAF50;">&#x2714;</td>
    <td></td>
    <td></td>
    <td></td>
    <td style="text-align:center;">-</td>
    <td style="text-align:center;">-</td>
    <td style="text-align:center;">-</td>
</tr>
<tr>
    <td><a href="/2017/10/gjensidige-leak">#12 - Gjensidige</a></td>
    <td style="text-align:center;background-color:#4CAF50;">&#x2714;</td>
    <td></td>
    <td style="text-align:center;background-color:#4CAF50;">&#x2714;</td>
    <td></td>
    <td></td>
    <td></td>
    <td style="text-align:center;background-color:#4CAF50;">&#x2714;</td>
    <td style="text-align:center;background-color:#4CAF50;">&#x2714;</td>
    <td style="text-align:center;background-color:#4CAF50;">&#x2714;</td>
    <td></td>
    <td></td>
    <td style="text-align:center;">-</td>
    <td style="text-align:center;">-</td>
</tr>
<tr>
    <td><a href="/2017/11/goshopping-leak">#13 - GoShopping</a></td>
    <td style="text-align:center;background-color:#4CAF50;">&#x2714;</td>
    <td></td>
    <td style="text-align:center;background-color:#4CAF50;">&#x2714;</td>
    <td></td>
    <td></td>
    <td></td>
    <td style="text-align:center;background-color:#4CAF50;">&#x2714;</td>
    <td style="text-align:center;background-color:#4CAF50;">&#x2714;</td>
    <td style="text-align:center;background-color:#4CAF50;">&#x2714;</td>
    <td></td>
    <td style="text-align:center;background-color:#4CAF50;">&#x2714;</td>
    <td></td>
    <td style="text-align:center;">-</td>
</tr>
</tbody>
</table>

<h4>Conclusion</h4><b>I wanted to write this post to try to make it clear on why you should care about these issues. When I can find all this data with very little time and effort then this sure must be the tip of a very small iceberg in an ocean with a lot of very big icebergs.</b>
`,
                "images": ["/images/summary01.png"],
                "links": [
                    {
                        "title": "Background: Purpose of these posts",
                        "url": "/2017/08/security-vulnerability-disclosures"
                    }
                ],
                "category":
                {
                    "title": "Security",
                    "url": "/security"
                },
                "tags": [
                    {
                        "title": "Security Monday",
                        "url": "/security-monday"
                    },
                    {
                        "title": "Information leak",
                        "url": "/information-leak"
                    }
                ]
            },
            {
                "title": "From the archive #1: Kindergarten leaking data",
                "published": true,
                "publishDate": "2017-11-27T06:45:00.000Z",
                "summary": "This one my of my regrets. This is one of those cases I should have told the world about. But now it's such a long time ago that naming anyone won't do any good.",
                "niceUrl": "/2017/11/kindergarten-leak",
                "text": `<h4>tl;dr</h4>An online kindergarten service used by a lot of kindergartens was leaking a lot of data about all of the kids and their parents.
                
<h4>Summary</h4><table class="summary">
<tr>
    <td style="width:30%">Who:</td>
    <td><i>It's too long ago, so I won't tell</i></td>
</tr>
<tr>
    <td style="width:30%">Severity level:</td>
    <td><span class="red-text">High</span></td>
</tr>
<tr>
    <td style="width:30%">Reported:</td>
    <td>2013</td>
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
    <td>iPad mini with engraved thank you</td>
</tr>
<tr>
    <td style="width:30%">Issue:</td>
    <td>Information leak with data about kids and parents</td>
</tr>
</table>
<h4>Background</h4>Early 2013 they started using an online system in my kid's kindergarten. The system contained personal info about kids as well as parents and was used for pictures and messages.

I really liked the system. It was very easy to do stuff like notifying if your kid was home sick, to see pictures of everyday life or to see if the sleep schedule was followed as it should. It also seemed pretty user friendly for the staff who had an iPad where they could easily click and register when a child was delivered in the morning and do all other communication with the parents. It was supposed to replace all post-it notes and paperwork.

<b>When we were told about the system and got logins for it we also got a brochure telling <i>"All data in &lt;the system&gt; is handled with a very high degree of security"</i>. Of course, a statement like that works pretty much as a cue for me to look into the security of the system.</b>

<h4>Approach (technical stuff)</h4>It's hard to recall all the details years afterwards and this was before I kept any notes about my findings, so the technical description isn't very long or deep. I started out as I normally do; I was using the site while having <a href="https://en.wikipedia.org/wiki/Web_development_tools">the browser development tools</a> open. In general stuff looked pretty good. There seemed to be proper encryption, authentication and authorization all over the place. But one of the challenges with web application security is that authorization is off by default and you have to actively add it and implement it correctly.

Even if the authorization seems okay, there is almost always this one place or function where it's forgotten about. Often it's that one functionality that was added later or that one that no one uses that much. <b>The kindergarten system had a function for exporting all the data they had stored about your child. It was some sort of background job that ran asynchronously and was kickstarted by some URL. The URL contained an incremental integer ID named <span class="code">childId</span>. The scope of the ID was the entire kindergarten (though the online system was running many, many kindergartens).</b>

<b>As you might have guessed, one could just change the ID and you started the background job for another child in the same kindergarten. When the job was done you got a downloadable ZIP file will all of the contents.</b>

<h4>Security issue</h4><img style="float:left;width:350px;margin-right:20px;" class="materialboxed responsive-img" title="Screenshot from the front page of the generated downloadable pages." data-caption="Screenshot from the front page of the generated downloadable pages." alt="Screenshot from security issue." src="/images/kindergarten01.png"><img style="clear:left;float:left;width:350px;margin-right:20px;margin-top:20px;" class="materialboxed responsive-img" title="Screenshot from some of the personal data of the generated downloadable pages." data-caption="Screenshot from some of the personal data of the generated downloadable pages." alt="Screenshot from security issue." src="/images/kindergarten02.png">The URL for creating a downloadable archive with all of the contents belonging to the child didn't have an authorization check. <b>It was possible to systematically download all contents for all children within the same kindergarten.</b>

<b>This is the data that was available:
- Full name of the child
- Birthday of the child
- Address of the child
- Full name of the parents
- Phone numbers of the parents
- E-mail address of the parents
- General practitioner (GP) of the child
- Info about the child following the govnerment vaccination program or not
- Potenial other health information like allergies
- The child's sleep needs
- Pictures of the child
- Pictures of other children in the same kindergarten department
- Messages sent between parents and kindergarten</b>

<h4>Reception and handling</h4><h5>Day zero</h5>Pretty late at night I sent an e-mail to both the manager of our kindergarten and the CEO of the whole kindergarten system.

<b>Just 30 minutes later that night I got a reply from the CEO thanking for the report and saying that they would look into it immediately.</b>

<h5>Day 1</h5>Early at night I got a new longer reply from the CEO. <b>They had already closed the issue for all customers.</b> While this was a classical programming error, the description of the system structure, storage and access control was pretty satisfying. And <b>supposedly the kindergartens are not allowed to store any information that is regarded as sensitive (as defined by law), though I assume all parents feel that all that data about their child is pretty sensitive.</b>

A couple of hours later <b>I also got a reply from the manager of the kindergarten. It was a bit more "light" than what I would have wished for, with no critical voicing towards the vendor of the system, but he thanked me and said he was sorry for the incident.</b>

<h5>Day 15</h5>Out of the blue the CEO sent me an e-mail asking if he had found the correct address on me as they wanted to send me a little something.

<b>I have to admit that receiving an iPad mini and their general tone through the process probably was enough to hold me back from telling the media back then.</b>

<h4>Another kindergarten system with vulnerabilities</h4>After I started this blog I noticed <a href="https://twitter.com/FixInTheWild/status/882853395203330049">a tweet about a talk about vulnerabilities in an online kindergarten system</a>. It's a great talk given by Halvor Sakshaug at <a href="https://ndcoslo.com/">NDC Oslo</a> earlier this year.

<b>From the screenshots I could see that this is a completely different kindergarten service than the one I used. So this means even more kids' security and information was vulnerable.</b>

<h4>Conclusion</h4><b>This issue has always been bothering me a bit. It was pretty serious, but I didn't disclose it publicly. It's one of many examples of serious issues that has absolutely no consequences for the company doing the harm and the users jeopardized are never informed about it.</b>

<b>With this issue as a backdrop it was one of the reasons I decided to start disclose security issues on my blog. People need to know that all their personal data is in the hands of anyone who wants it.</b>

And with the mentioned other kindergarten system with vulnerabilities, and <a href="/2017/10/tracking-kids">the security issues in the smart watch for kids that I discovered</a> late this summer, I really feel even more that we need more disclosure and give more attention to IT security.
`,
                "images": ["/images/kindergarten02.png", "/images/kindergarten01.png"],
                "links": [
                    {
                        "title": "Background: Purpose of these posts",
                        "url": "/2017/08/security-vulnerability-disclosures"
                    }
                ],
                "category":
                {
                    "title": "Security",
                    "url": "/security"
                },
                "tags": [
                    {
                        "title": "Security Monday",
                        "url": "/security-monday"
                    },
                    {
                        "title": "Information leak",
                        "url": "/information-leak"
                    },
                    {
                        "title": "Authorization",
                        "url": "/authorization"
                    },
                    {
                        "title": "OWASP 2013 A7",
                        "url": "/owasp-2013-a7"
                    }
                ]
            },
            {
                "title": "Hack my hackable website [no longer available]",
                "published": true,
                "publishDate": "2017-12-19T22:10:00.000Z",
                "updateDate": "2020-04-13T09:00:00.000Z",
                "summary": "I created a \"hackable\" web app for a presentation I gave about web app security. Now you can try it out yourself.",
                "niceUrl": "/2017/12/hack-my-site",
                "text": `<div style="background-color:#ffecb3;padding:10px 10px 15px 10px;" class=""><h5 id="update">Site no longer available</h5><b>April 2020:</b> It was a fun experiment, but I have for now removed the site hosting the hacking challenge. 🙂</div><h4>tl;dr</h4>Try to "hack" <a>https://ra.gl/ [link broken]</a> . You can see the rules and goal on that site.

<h4>Hack my site</h4>I give a few talks every year. The last years I've mostly talked about different mobile development topics, but because of this blog I have recently had the opportunity to talk about web application security.

Last week I gave a talk at <a href="http://gdgbergen.no">Google Developer Group Bergen, Norway</a>. The talk was about <a href="https://www.meetup.com/GDGBergen/events/245558721/">hacking web apps</a>.

After the talk itself we had a session with some hands-on "hacking" of a web app. For this I had created a web site that had intentional "security vulnerabilities".

<h4>The goal</h4><b>The goal of the assignment is simple: Just log in on the administrator page at <a>ra.gl [link broken]</a> and get hold of your unique keyword that proves your accomplishment.</b>

<h4>The rules</h4>I have some rules so that the site isn't ruined completely. It is after all hosted in a shared hosting environment and I don't want anyone else harmed.

<h5>Please stay away from doing this:</h5>- DOS attacks
- Port scanning
- Attacks on any other sites or domains hosted on the same server
- Attacks on network infrastructure
- Attacks on server software (OS, app server, programming frameworks)
- Any interference or attacks on the web host company
- Anything you think might not be okay

<h5>Please do this:</h5>- Try to find any logical errors and/or information leaks in the web pages within this domains

<h4>The tools</h4><b>You don't really need anything else then your <a href="https://en.wikipedia.org/wiki/Web_development_tools">browser's development tools</a>.</b> Personally I like to frequently use its <i>"Copy as <a href="https://curl.haxx.se/">cURL</a>"</i> menu option and tweak the HTTP requests in a simple text editor.

<h4>The vulnerabilities</h4>The security vulnerabilities are the typical ones that <a href="http://blog.roysolberg.com/tag/security-monday">I have found and presented on my blog</a>. I you have read some of those posts you might have some clues on what it could be.

It's isn't a very hard task to break in. But that is actually part of the point. There are some many weaknesses with so many web apps today. With some knowledge and open eyes you can get far. If you are able to hit gold all the way you can solve it within some minutes, but most people seem to need more time.

<h4>Happy hacking!</h4>I hope you enjoy this small assignment! Don't hesitate to give me feedback or if you have any ideas for improvements or other cool stuff that should be included. :-)

<a>Start hacking! [link broken]</a>

<div style="background-color:#ffecb3;padding:10px 10px 15px 10px;" class=""><h5 id="update">Site no longer available</h5><b>April 2020:</b> It was a fun experiment, but I have for now removed the site hosting the hacking challenge. 🙂</div>
`,
                "images": ["/images/ra.gl.png"],
                "category":
                {
                    "title": "Security",
                    "url": "/security"
                },
                "tags": [
                    {
                        "title": "Challenge",
                        "url": "/challenge"
                    }
                ]
            },
            {
                "title": "Guide: How to crack Android apps",
                "published": true,
                "hot": true,
                "publishDate": "2018-02-09T21:40:00.000Z",
                "updateDate": "2019-01-29T14:30:00.000Z",
                "summary": "Learn how to reverse engineer Android apps, alter them, and put them back together. No root needed.",
                "niceUrl": "/2018/02/crack-android-apps",
                "text": `<div style="white-space: normal;" class="col s12 m6 right">
                <div id="mc_embed_signup" class="">
                    <form action="https://roysolberg.us17.list-manage.com/subscribe/post?u=914df4966855c5c9ff1a2b5cb&amp;id=65ad1b4962" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
                        <div id="mc_embed_signup_scroll">
                            <h6>I'm writing an e-book about cracking android apps. Sign up now and be notified when it's done and get 30% discount!</h6>
                            <div class="mc-field-group">
                                <label for="mce-EMAIL">E-mail address</label>
                                <input type="email" value="" name="EMAIL" class="required email" id="mce-EMAIL" placeholder="you@example.com">
                            </div>
                            <div id="mce-responses" class="clear">
                                <div class="response" id="mce-error-response" style="display:none"></div>
                                <div class="response" id="mce-success-response" style="display:none"></div>
                            </div>
                            <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
                            <div style="position: absolute; left: -5000px;" aria-hidden="true">
                                <input type="text" name="b_914df4966855c5c9ff1a2b5cb_65ad1b4962" tabindex="-1" value="">
                            </div>
                            <div class="clear">
                                <input style="margin-top: 10px;" type="submit" value="Get notified" name="subscribe" id="mc-embedded-subscribe" class="btn waves-effect waves-light">
                            </div>
                        </div>
                    </form>
                </div>
            </div><h4>tl;dr</h4>This tutorial for how to crack Android apps is one of my more technical posts. If you aren't a developer you might want to skip this one. :) I'm assuming some basic knowledge of UN*X, Java and Android.
             
<h4>Why crack an app?</h4>Sometimes I like to check if online services I use really are secure. <a href="/category/security">I've presented quite a few cases to prove that they very often are not.</a> Mostly I can use very simple techniques to check the security as there are so many basic security vulnerabilities out there. When it comes to apps I often use a HTTP proxy like <a href="https://www.charlesproxy.com/">Charles</a> to take a look at the HTTP and HTTPS traffic. However, <b>once in a while there are apps that use e.g. <a href="https://en.wikipedia.org/wiki/HTTP_tunnel">HTTP tunneling</a> or <a href="https://en.wikipedia.org/wiki/HTTP_Public_Key_Pinning">certificate pinning</a>. In those cases you need to go one step further to be able to listen to the network traffic.</b>

Other reasons to decompile apps could be to recover lost source code, to inject language translations or even fix a bug. But hey, remember, don't do anything you are not allowed to. Don't break the law. This guide is just for educational purposes when you have legitimate reasons to do what you do.

<h4>Contents</h4>These are the topics that I'll cover.

- Online alternatives
- Getting the tools
- Getting the APK
- Decompiling the app
- Altering the app
- Getting the app back together

<h4>Online alternatives</h4><b>Very often you don't have to get your hands too dirty getting the hands of a decompiled app. There are some good services out there that can provide you with most Android APKs, and then even some to decompile them.</b>

<h5>Online APK archives</h5>To get hold of an APK you can typically just google the package name. There are quite a few sites where to download them from. Some are more frequently updated than others. Note that you can get hold of different versions and the APK for different architectual platforms.

A word of wisdom: <b>Don't download and run some random APK out there (at least do it in a sandboxed and/or emulated environment). There are quite a few sites that serves bogus or altered APKs. The app might look allright, but still have some malware injected. Don't blindly trust the ones that I recommend either.</b> If the APK is signed with the same key as an APK that you got from Play Store you should be able to trust its origin (though there have been cases of private keys in the wild (even repackaged APKs uploaded to the vendor's own web site)).

Here's a few you might want to try out:
 - <a href="https://apkmirror.com">APKMirror</a>
 - <a href="https://apkpure.com/">APKPure</a>
 - <a href="https://www.apkmonk.com/">APKMonk</a>

<h5>Online decompiler</h5>The quickest and easiest way to decompile an APK is to just use an online service. You just upload the APK and get an archive with all the resources and decompiled files. <b><a href="http://www.javadecompilers.com/apk">javadecompilers.com</a> is the one I have used, and I have been pretty happy with it.</b>

As you might know, the <a href="https://en.wikipedia.org/wiki/Android_application_package">APK file is really just a ZIP file</a>, so you can typically just rename it to <span class="code">.zip</span> and double click it or run <span class="code">unzip</span> and you can start investigating the app. If it's a <a href="https://en.wikipedia.org/wiki/Web_application#Definition_and_similar_terms">hybrid app</a> you might not have to decompile it at all to get access to everything. Actually, the <a href="/2017/10/tracking-kids">Gator Watch app</a> was a hybrid app and gave away everything with little effort.

<h4>Getting the tools</h4><h5>Android - SDK, tools and emulators</h5>You need to have at least the Android tools and SDK, but <b>for most people I would recommend <a href="https://developer.android.com/studio/index.html">to just install Android Studio</a></b> and follow the instructions to set it up as normal (but skip stuff like the SDK for Android TV and other stuff that will slow down your download).

<h5>Apktool - disassembling and reassembling APKs</h5><a href="https://ibotpeaches.github.io/Apktool/install/">Apktool can be installed manually</a>, or if it's available via your package manager you can just install it using a command like <span class="code">apt-get install apktool</span>.

<h4>Getting the APK</h4>The first step of the reverse engineering is to get hold of the APK. I'll use my own Android app <a href="https://play.google.com/store/apps/details?id=com.roysolberg.android.developertools">Developer Tools</a> as an example app. It's open source and if you want you can <a href="https://github.com/roys/java-android-developertools">get the source code and APKs from GitHub</a>.

The command-line tool <a href="https://developer.android.com/studio/command-line/adb.html">adb (Android Debug Bridge)</a> is used for all communication with the device or emulator. You can find the tool in the Android's installation folder <span class="code">platform-tools</span>.

<pre class="prettyprint lang-bsh"> $ # Lists all packages:
 $ adb shell pm list packages
 &lt;loong list of apps /&gt;

 $ # Simple way of searching for packages:
 $ adb shell pm list packages |grep roysolberg
 package:com.roysolberg.android.smarthome
 package:com.roysolberg.android.datacounter
 package:com.roysolberg.android.developertools

 $ # Get the path of a package:
 $ adb shell pm path com.roysolberg.android.developertools
 package:/data/app/com.roysolberg.android.developertools-1/base.apk

 $ # Get hold of the APK actual APK file:
 $ adb pull /data/app/com.roysolberg.android.developertools-1/base.apk
 /data/app/com.roysolberg.android.developertools-...file pulled. 25.2 MB/s (2035934 bytes in 0.077s)</pre>
<h4>Decoding the APK</h4>The next step is to unzip and decompile the APK. Apktool does this for us.
 <pre class="prettyprint lang-bsh"> $ # Decode the pulled APK into a directory named base:
 $ apktool decode base.apk
 
 $ # d works as an alias for decode:
 $ apktool d base.apk
</pre>
<h4>Altering the app</h4>This is where the hard work starts. <b>The resource files are now fully readable, but the code is now in the <a href="https://github.com/JesusFreke/smali">smali format</a>.</b> You can think of smali as a sort of assembly language.

As an example we'll first change the language string <span class="code">app_name</span> to <span class="code">Hacker Tools</span>.
<pre class="prettyprint lang-bsh"> $ # Edit the main language file:
 $ vi base/res/values/strings.xml
</pre>
Then we'll change some hard coded text so that we have changed both resources and actual code.
<pre class="prettyprint lang-bsh"> $ # Search for file we want to change:
 $ grep -nr 'originally' base/smali
 base/smali/com/roysolberg/android/developertools/ui/activity/MainActivity.smali:651:    const-string v4, "This app was originally just created for myself to make some developement tasks a bit easier. I\'ve released it to Play Store hoping that someone else might find it useful.\\n\\nIf you want to get in touch me, please send me a mail at dev-null@example.com.\\n\\nPlease note that I take no credit for the third party apps."

 $ # Edit the smali file and change the string value:
 $ vi base/smali/com/roysolberg/android/developertools/ui/activity/MainActivity.smali
</pre>
<h4>Getting the app back together</h4>There are quite a few steps getting everything together. <b>We need to rebuild the app, sign it, zipalign it, and then install it.</b> If the properly signed app is still installed it needs to first be uninstalled as our signature violates the existing one.

The command-line tool <a href="https://developer.android.com/studio/command-line/zipalign.html">zipalign</a> is needed to align the contents of the APK for Android to be able to run it. You can find the tool in the Android's installation folder <span class="code">build-tools/&lt;some version number&gt;</span>.
<pre class="prettyprint lang-bsh"> $ # First build a new APK with the changes:
 $ apktool build base -o base.unaligned.apk

 $ # Sign the app using the Android debug certificate generated from Android Studio installation:
 $ jarsigner -verbose -sigalg MD5withRSA -digestalg SHA1 -keystore ~/.android/debug.keystore -storepass android base.unaligned.apk androiddebugkey
 
 $ # Align APK:
 $ zipalign -v 4 base.unaligned.apk base.aligned.apk

 $ # If original app (with different signature) is installed it must be uninstalled:
 $ adb uninstall com.roysolberg.android.developertools
 Success

 $ # Final step is to install the newly altered app (-r for reinstall (keeping the app's data)):
 $ adb install -r base.aligned.apk
 Success

 $ # To keep an eye on the log and what's going on you can use logcat:
 $ adb logcat
</pre>
<b>That's it! :-)</b>

<h4>A few addtional tips</h4><h5>Reading smali</h5>It might take a little bit of getting used to, but reading smali isn't all too bad. If you have any concrete problems you'll find the answer with some googling. But <b>a good tip is to create some small very simple Java classes yourself and check out what they look like in the smali format.</b>

If you are having trouble navigating the smali code and understand the flow of an app you can use the following smali code. It will call <a href="https://developer.android.com/reference/java/lang/Thread.html#dumpStack()"><span class="code">Thread.dumpStack()</span></a> which logs the current thread's call stack.
<pre class="prettyprint lang-bsh"> invoke-static {}, Ljava/lang/Thread;->dumpStack()V</pre>
If you need to know the value of a string - e.g. a parameter - you can use <a href="https://developer.android.com/reference/android/util/Log.html#d(java.lang.String,%20java.lang.String)"><span class="code">Log.d(String tag, String message)</span></a> to log it to the system log.
<pre class="prettyprint lang-bsh"> const-string/jumbo v0, "YourTag"
 invoke-static {v0, p1}, Landroid/util/Log;->d(Ljava/lang/String;Ljava/lang/String;)I</pre>
<h5>jadx - Dex to Java decompiler</h5><b><a href="https://github.com/skylot/jadx">jadx</a> is a command-line and GUI tool for converting <a href="https://source.android.com/devices/tech/dalvik/dex-format">dex</a> to Java.</b> Reading Java is after all easier than reading the smali format.

<h5>Proguard</h5>Very often - but not in the case of my Developer Tools app - the code will be shrinked and obfuscated using <a href="https://developer.android.com/studio/build/shrink-code.html">ProGuard</a>. This makes the code a lot harder do read and understand. There aren't really any good ways around it, but doing the thread dump trick and taking your time to follow the code will eventually get you where you want to be.

<div style="white-space: normal;margin-bottom:20px;" class="col s12">
    <div id="mc_embed_signup" class="">
        <form action="https://roysolberg.us17.list-manage.com/subscribe/post?u=914df4966855c5c9ff1a2b5cb&amp;id=65ad1b4962" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
            <div id="mc_embed_signup_scroll">
                I'm writing an <em>e-book about cracking android apps</em>. Sign up now and be notified when it's done and <em>get 30% discount</em>!
                <div class="mc-field-group">
                    <label for="mce-EMAIL">E-mail address</label>
                    <input type="email" value="" name="EMAIL" class="required email" id="mce-EMAIL" placeholder="you@example.com">
                </div>
                <div id="mce-responses" class="clear">
                    <div class="response" id="mce-error-response" style="display:none"></div>
                    <div class="response" id="mce-success-response" style="display:none"></div>
                </div>
                <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
                <div style="position: absolute; left: -5000px;" aria-hidden="true">
                    <input type="text" name="b_914df4966855c5c9ff1a2b5cb_65ad1b4962" tabindex="-1" value="">
                </div>
                <div class="clear">
                    <input style="margin-top: 10px;" type="submit" value="Get notified" name="subscribe" id="mc-embedded-subscribe" class="btn waves-effect waves-light">
                </div>
            </div>
        </form>
    </div>
</div>
<h4>Wrapping it up</h4><img style="float:left;width:550px;margin-right:20px;" class="materialboxed responsive-img" title="The regular Developer Tools app on the left and the cracked one on the right." data-caption="The regular Developer Tools app on the left and the cracked one on the right." alt="The regular Developer Tools app on the left and the cracked one on the right." src="/images/cracked_app.jpg"/>If you have followed along the guide you would see the app change from the version on the left to something like the one on the right. One of the reasons I wrote this guide was for my own sake to have something to easily copy and paste from when doing some reverse engineering myself, but I thought this might be useful one for others as well. :)`,
                "images": ["/images/cracked_app.jpg"],
                "category":
                {
                    "title": "Software development",
                    "url": "/software-development"
                },
                "tags": [
                    {
                        "title": "Reverse engineering",
                        "url": "/reverse-engineering"
                    },
                    {
                        "title": "Cracking",
                        "url": "/cracking"
                    },
                    {
                        "title": "Android",
                        "url": "/android"
                    },
                    {
                        "title": "Guide",
                        "url": "/guide"
                    }
                ]
            },
            {
                "title": "Gator Watch revisited",
                "published": true,
                "publishDate": "2018-03-30T07:30:00.000Z",
                "updateDate": "2018-04-05T14:30:00.000Z",
                "summary": "Gator Watch had a complete lack of security which made it possible to track kids all over the world and listen to private voice messages. This is supposedly fixed, at least in Norway. But is it really?",
                "niceUrl": "/2018/03/gator-watch-revisited",
                "text": `<h4>tl;dr</h4><i>Gator Watch</i> had the worst security I've seen in an online service in a long time. Now, at least the company selling Gator Watch in Norway, has released new watch firmware and new mobile apps to tackle all the issues. And what they have done is actually really impressive.

<div style="padding-top:80px;" class="col s12 m5 l5 xl4 right"><div class="card-panel light-blue darken-1"><span style="text-decoration:underline;" class="white-text"><a class="white-text" href="/2017/08/security-vulnerability-disclosures">Background: The purpose of these posts</a></span></div></div><h4>Background</h4>Early August 2017 <a href="/2017/10/tracking-kids">I found out that the Gator watches could be tracked, locations could be spoofed, and private voice messages was openly available on the Internet</a>.

Shortly after, <a href="https://www.forbrukerradet.no/side/significant-security-flaws-in-smartwatches-for-children/">the Norwegian Consumer Council (NCC) also did a check on Gator Watch and a few other brands</a> and found the same issues + illegal or non-existent terms and conditions.

The whole so-called <i>#WatchOut</i> campaign led to a hectic and probably stressful few months for the companies Gator Norge, GPS for barn, Tinitell and PepCall (Xplora). <a href="https://www.datatilsynet.no/aktuelt/2017/palegger-stans-i-behandlingen-av-personopplysninger-i-smartklokker/">The Norwegian Data Protection Authority (Datatilsynet) even forced Gator, PepCall and GPS for barn to stop all processing of personal information</a> (Norwegian link) until they had fixed issues regarding their information security.

The Norwegian company sellling Gator Watch - <b>Gator Norge - has since <a href="https://www.gatornorge.no/blog/2017/12/22/denne-gang-har-vi-gjort-alt-selv/">released new watch firmware and created completely new client apps</a>. I wanted to know if the security was in order before using the watch for my own family.</b>

<h4>Approach (technical stuff)</h4><h5>New firmware</h5>The old firmware for the Gator Watch was pretty bad. The communication between the watch and the server was in clear text with out any encryption at any level. Also, there was no authentication or verification of the user. There was no session identifier, only the always fixed IMEI number. You can't really make it much worse than that.

<img style="float:left;width:480px;margin-right:20px;margin-bottom:20px;" class="materialboxed responsive-img" title="Screenshot from the firmware flashing process." data-caption="Screenshot from the firmware flashing process." src="/images/gator-revisited03.png"/><a href="https://www.gatornorge.no/encryption-of-gator-clocks-2/">Gator Norge has released new watch firmware and a description on how to do the upgrade</a> (Norwegian link only, sorry). <b>The process for upgrading the firmware for Gator 2 and Gator 3 is pretty complex. It's 34 long steps that could scare most people.</b> Even me with some tech background met one issue due to me misunderstanding one of the steps. Also, the upgrade must be done using Windows. But one has do to do what one has to do, so I did the upgrade twice - once for a Gator 2 watch and once for a Gator 3 watch.

Using the old firmware I could just change the server the watch used to learn how the watch communicated. Then I could use that knowledge to try the communication with the server pretending to be a watch. With the new firmware I don't know how to do that. Also, reading or reverse engineer the firmware is out of my expertise. <b>This means I haven't been able to look at the communication between the server and watch. I have to trust Gator Norge when they say it now is encrypted. I also hope that it isn't possible to easily spoof other watches. Hopefully someone will take the time to analyze <a href="https://gatornorge.no/KrypteringGatorNorge.zip">the new firmware that can be downloaded from Gator Norge</a>.</b>

<h5>New apps</h5>The old apps and server APIs for the Gator Watch was some of the worst product I've seen in a long while - security wise.

Gator Norge trashed the old apps and server and replaced it with brand new software. I did an analysis of <a href="https://play.google.com/store/apps/details?id=com.teleg.iotapp">the Android app</a> and also took a look at the server.

What is interesting is that this new Gator watch app - called TeleGAPP -  isn't a new concept from Gator Norge. <b>They actually released this app in September 2017, but as a app-to-app-only way of tracking friends and family. I took a brief look at the security later that fall, and I found multiple security holes. However, I never got around finishing my work or even reporting them. Shortly after I learnt that this app would soon become the new Gator watch app. So I postponed the rest of the testing - and reporting - awaiting this new version of the app. In retrospect I see that I should have reported my findings - even though it was unfinished work - I had back then because of the delays of the new app. I will probably write another post on that matter as it does have some interesting points. They have now seem to have taken down the server used back then.</b>

<b>TeleGAPP - utilizes a custom-made <a href="https://en.wikipedia.org/wiki/HTTP_Public_Key_Pinning">certificate pinning</a>. This meant that I couldn't just use a regular HTTP proxy out of the box.</b> While I see the upside of having such pinning it sure makes it much harder to simply check if an app or service is secure. The chances that a good guy will skip testing is very high, while a bad guy would go ahead anyways. In total this typically leads makes Internet less secure.

I recently posted a <a href="/2018/02/crack-android-apps">guide on how to crack Android apps</a> which explains exactly what is needed for cases like this. A simple <a href="https://www.quora.com/What-is-smali-in-Android">smali</a> one-liner like <span class="code">return-void</span> was all that was needed to get around the pinning.

After rebuilding the app I could use the HTTP proxy <a href="https://www.charlesproxy.com/">Charles</a> to see what the encryption, authentication and data looked like. And I have to say; <b>this new app is a whole different ball game. This app has exactly the security measures I would've expected to find in the first place.</b>

I could try to go through all security features and what makes the app less vulnerable, but I suppose I wouldn't be able to make a complete list. All HTTP calls are of course encrypted. The authentication ends up with a bearer authorization token. The token is short lived (though even as short lived as it makes the app a bit buggy with HTTP calls failing and without proper automatic re-authentication (which in ends up as a bad user experience with error messages popping up too often (though I actually think they now have fixed in a later version))). The authorization seems to be in order. I wasn't able to access to resources or data that I wasn't supposed to have. In general the API seemed clean, secure and made by people that know what they are doing.

<b>What I did not test, was making <span class="code">PUT</span> that I should not be authorized to do. Too often I see that developers properly secure getting data, but not checking if others are allowed to update it.</b> I typically do this if it's real quick and easy to create another user for me to test on or if I know someone else with an account that I'm allowed to test with. So I'll just assume that they have that in order as well. At least they have a good base here.

<h4>The user experience</h4><img style="float:left;width:240px;margin-right:20px;" class="materialboxed responsive-img" title="Screenshot from Gator Norge's new watch app - TeleGAPP." data-caption="Screenshot from Gator Norge's new watch app - TeleGAPP." src="/images/gator-revisited01.png"/>If we look past the bad user experience it was to manually upgrade the firmware (which is not needed for people buying new watches today of course), the new app is pretty different from the old one. Since they started from scratch they haven't added all the features back in, but my understanding is that they are working on it.

One of the features that isn't in the new app is the mode where you could listen in on the watch without anyone knowing it. This made the old watch in to a listenting device. I really doubt that we will see that feature coming back.

Another one of the features not available is the one to - from parent to kid or the other way around - leave a voice message if you are unable to get hold of the other.

<img style="float:left;width:240px;margin-right:20px;margin-bottom:20px;" class="materialboxed responsive-img" title="Screenshot from the old Gator watch app that had geo-fencing." data-caption="Screenshot from the old Gator watch app that had geo-fencing." src="/images/gator-revisited02.png"/>A third feature now missing is the one where you could set up <a href="https://en.wikipedia.org/wiki/Geo-fence">geo-fences</a> for areas like home, school, football field.

Personally it annoys me that the map where you can see the watch now doesn't have a satellite mode.

The latter two features I hope to see back in a coming version of the app.

<h4 style="clear:left;">My verdict</h4>I will never understand how a company can buy a product like this from China and not offer data security one single thought before releasing it into the market. That being said, <b>from what I can see, Gator Norge now has put a lot of effort to make the watch, apps and server properly secure. I'm impressed by how they have handled the criticism, pressure and technical challenges.</b> This has not been cheap and have also cost a lot of time and effort.

Judging from what Gator Norge has said they have had third party companies developing the app and doing security testing of it. As I understand it they will keep having regular audits of the products - and that is really the only serious way of handling security in such a product.

<h4>Conclusion</h4>In Norway we are very fortunate to have watch dogs like the Norwegian Consumer Council (NCC) and Norwegian Data Protection Authority (Datatilsynet). I think they do a great job. It's so good to see them put the focus on IT security and to force through changes. It makes us all more safe and secure.

And I'm also happy to see - at least the Norwegian version of - Gator taking this seriously, being humble and saying sorry, and to return with a much more secure product. I for one, will let my kids wear this watch now.
`,
                "images": ["/images/gator-revisited01.png", "/images/gator-revisited02.png", "/images/gator-revisited03.png"],
                "category":
                {
                    "title": "Security",
                    "url": "/security"
                },
                "tags": [
                    {
                        "title": "#WatchOut",
                        "url": "/watchout"
                    },
                    {
                        "title": "Follow-up",
                        "url": "/follow-up"
                    }
                ]
            },
            {
                "title": "Case #14: Power company leaking personal info and usage data",
                "published": true,
                "publishDate": "2018-04-10T06:25:00.000Z",
                "summary": `Information about thousands - theoretically maybe hundreds of thousands - of customers could be stolen.`,
                "niceUrl": "/2018/04/power-company-leak",
                "text": `<h4>tl;dr</h4>The electric power company <i>Norgesnett</i> had a security vulnerability that made it possible to get access to thousands of customers' personal info + their usage data. This was probably also the case for quite a few of the hundreds of customers of the company <i>Enoro</i> - the creators behind the vulnerable software.

<h4>Summary</h4><table class="summary">
<tr>
    <td style="width:30%">Who:</td>
    <td><a href="https://norgesnett.no/">Norgesnett</a> and <a href="http://enoro.no/">Enoro</a></td>
</tr>
<tr>
    <td style="width:30%">Severity level:</td>
    <td><span class="orange-text">Medium</span></td>
</tr>
<tr>
    <td style="width:30%">Reported:</td>
    <td>February 2018</td>
</tr>
<tr>
    <td style="width:30%">Reception and handling:</td>
    <td><span class="green-text">Good</span></td>
</tr>
<tr>
    <td style="width:30%">Status:</td>
    <td><span class="green-text">Fixed</span></td>
</tr>
<tr>
    <td style="width:30%">Reward:</td>
    <td>A thank you</td>
</tr>
<tr>
    <td style="width:30%">Issue:</td>
    <td>Information leak with personal information, power usage data, audit reports, meter number</td>
</tr>
</table>
<div style="padding-top:80px;" class="col s12 m5 l5 xl4 right"><div class="card-panel light-blue darken-1"><span style="text-decoration:underline;" class="white-text"><a class="white-text" href="/2017/08/security-vulnerability-disclosures">Background: The purpose of these posts</a></span></div></div><h4>Background</h4>All electricity consumers in Norway will receive smart meters by January 1st 2019. There has been a little bit of controversy in regards of the meters. The most extreme skeptics are afraid of the radiation from the new meters as they typically communicate back to the so-called distribution system operators (DSO) via radio or the mobile network. Then you have the ones that are afraid that the electricity will become more expensive - at least for families that don't have that much flexibility in regards of when they need to use electricity. And then thirdly, <b>you have those concerned about data security and privacy because of the frequent readings done by the power companies.</b>

<b><a href="https://www.datatilsynet.no/rettigheter-og-plikter/overvaking-og-sporing/strommaling/">The Norwegian Data Protection Authority (Datatilsynet) has written a bit about the new smart meters</a> (Norwegian only) and how they can in theory be used to track individuals and both reveal and predict if people are and will be home at a certain point in time.</b>

I also think the <a href="https://www.tu.no/artikler/norske-nettselskap-er-enige-ams-utgjor-en-risiko-for-datasikkerheten/275560">article from tu.no about smart meter security</a> (Norwegian only) is pretty interesting in this context.

The new smart meters come with a <a href="https://en.wikipedia.org/wiki/Home_network">Home Area Network</a> (HAN) interface where you can get more details about your power usage. <a href="https://blog.roysolberg.com/2017/08/my-dumb-smart-home">My house is a smart home</a> and I want to integrate and use the data available through the HAN interface (which sends <a href="https://en.wikipedia.org/wiki/IEC_62056">OBIS</a> messages via <a href="https://en.wikipedia.org/wiki/Meter-Bus">M-Bus</a>). So, around the time I got the new meter I logged into Norgesnett's site to get more information and see what kind of meter data that was available. <b>I used this opportunity to check if Norgesnett protects my data..</b>
                           
<h4>Approach (technical stuff)</h4><img style="float:left;width:450px;margin-right:20px;" class="materialboxed responsive-img" title="Profile form at Norgesnett. For some reason the customer ID is posted as part of the data." data-caption="Profile form at Norgesnett. For some reason the customer ID is posted as part of the data." src="/images/norgesnett01.png"/>When logged in to Norgesnett's site I had the <a href="https://help.vivaldi.com/article/developer-tools/">Vivaldi developer tools</a> open and took the regular look at source code, network calls etc. Most of it looked pretty good.

<b>Norgesnett has this feature where you can add other "customer relationships" to your main account.</b> Using that feature you can easily switch between your different accounts. <b>To add another customer you need their customer ID and 4 digit PIN. The customer IDs seem to be just an incremental integer.</b> Maybe one could get hold of other users' PIN?

They have also have this online form where one can change one's own personal data. For some reason the customer ID is posted as part of the form. I asked for a friend's customer ID and quickly found out that <b>I could post with his customer ID and an e-mail address of mine.</b>

<img style="float:left;width:450px;margin-right:20px;" class="materialboxed responsive-img" title="The automatic e-mail sent when changing the e-mail address - including the customer ID and PIN code." data-caption="The automatic e-mail sent when changing the e-mail address - including the customer ID and PIN code." src="/images/norgesnett02.png"/><b>After that was done an e-mail was automatically sent with both my friend's PIN and a direct link to finish the connection between the e-mail address and customer ID. The link didn't work for some reason, but with the PIN I could add the account as a "customer relationship" to my own account.</b>

If the other user had specified the e-mail address for getting alerts, one could even change back the e-mail address and no one would ever notice that the account was accessed. Of course, one can hope there is some kind of logging in place that potentially could catch up on this.

<b>Using some of the wordings and URLs used for the login page it's easy to find other of Enoro's customers who have the same customer system in place. And there's a quite a few.</b>

<img style="float:left;width:450px;margin-right:20px;margin-bottom:20px;" class="materialboxed responsive-img" title="Overview and forms for customer relationships at Norgesnett." data-caption="Overview and forms for customer relationships at Norgesnett." src="/images/norgesnett03.png"/>
                           
<h4 style="clear:left;">Security issues</h4><b>One could systematically go through all customers and retrieve the following information:
- Customer ID
- Customer PIN
- Meter number ("målernummer")
- Meter ID ("målepunkt-ID")
- Full name
- Full address
- Date of birth
- Phone numbers
- E-mail address
- Historical power usage
- Invoices
- Audit reports</b>

I hope they don't have unlisted and secret addresses available.

The power usage is not reported at near realtime on Norgesnett's customer faced website, but rather weekly + start of month. Hopefully they would have noticed that something was going on if this was to be taken advantage of in a large scale.

<b>This is speculation as I have not tried to confirm the vulnerability for other Enoro customers than Norgesnett (and not more than one other customer), but a quick Google search makes me believe at least the following 14 power companies have the vulnerability:
 - Norgesnett (96,000 customers)
 - Agder Energi Nett? (195,000 customers)
 - Eidsiva Nett? (159,000 customers)
 - Los? (150,000 customers?)
 - Gudbrandsdal Energi? (&gt;100,000 customers)
 - Glitre Energi? (90,000 customers?)
 - Oppdal Everk?
 - Orkdal Energi?
 - Smart Energi?
 - Polar Kraft?
 - Akraft?
 - Hålogaland Kraft?
 - Agder Energi Nett?
 - Hjemkraft?</b>

There could absolutely be more companies than these as well.

In Norway we can have separate companies for electricity distribution ("nettselskap") and electricity retailing ("kraftselskap") which makes <b>some persons appear multiple times in those numbers</b>.

<h4>Reception and handling</h4><h5>Day zero</h5>I wrote an e-mail to Norgesnett's customer support in the evening telling about the issue. I immediately got an automatic response.

<h5>Day 1</h5>Around noon I got a reply back thanking me and telling me they had relayed the message to their system vendor (Enoro) and that it should be fixed shortly.

<b>I never heard back after that, not even when I told them I was going to post this, but I got a confirmation from a journalist that Enoro said the issue was fixed.</b>

<h4>Conclusion</h4><b>I don't really want this to be a discussion about smart meter security. Unless someone hacks the firmware on your meter no one should externally be able to track individuals.</b> In the case of Norgesnett it also would be hard to track if someone in a house is on vacation.

<b>I think of this as yet another case showing that your personal data is not safe; it's long gone. Close to all your personal information is already in the hands of anyone who wants it. But I do hope that power companies in general have their security in order.</b>
`,
                "images": ["/images/norgesnett01.png", "/images/norgesnett02.png", "/images/norgesnett03.png"],
                "category":
                {
                    "title": "Security",
                    "url": "/security"
                },
                "tags": [
                    {
                        "title": "Security Monday",
                        "url": "/security-monday"
                    },
                    {
                        "title": "Information leak",
                        "url": "/information-leak"
                    },
                    {
                        "title": "Smart meter",
                        "url": "/smart-meter"
                    },
                    {
                        "title": "Account takeover",
                        "url": "/account-takeover"
                    },
                    {
                        "title": "OWASP 2017 A5",
                        "url": "/owasp-2017-a5"
                    }
                ]
            },
            {
                "title": "Case #15: Leaked hotel reservations",
                "published": true,
                "publishDate": "2018-04-23T21:55:00.000Z",
                "summary": `Information about as many as maybe 1.5 million past, current and future hotel stays were openly accessible on the Internet.`,
                "niceUrl": "/2018/04/hotel-leak",
                "text": `<h4>tl;dr</h4>The company <i>Ariane</i> had a leak in one of their newsletter software installations causing an exposure of something like 1.5 million hotel reservations with hotel name, reservation number, dates of stay, customer name, customer e-mail address and possibly room number. A number of hotels were affected and the data went for like two years back in time and also included future stays.

<h4>Summary</h4><table class="summary">
<tr>
    <td style="width:30%">Who:</td>
    <td><a href="https://ariane.com">Ariane</a> (and therefore some of their customers)</td>
</tr>
<tr>
    <td style="width:30%">Severity level:</td>
    <td><span class="orange-text">Medium</span></td>
</tr>
<tr>
    <td style="width:30%">Reported:</td>
    <td>April 2018</td>
</tr>
<tr>
    <td style="width:30%">Reception and handling:</td>
    <td><span class="green-text">Good</span></td>
</tr>
<tr>
    <td style="width:30%">Status:</td>
    <td><span class="green-text">Fixed</span></td>
</tr>
<tr>
    <td style="width:30%">Reward:</td>
    <td>A gift card for 1 night for 2 persons at a Thon hotel (provided by Thon which was the hotel chain I reported the leak to)</td>
</tr>
<tr>
    <td style="width:30%">Issue:</td>
    <td>Information leak with personal information related to hotel reservations</td>
</tr>
</table>
<div style="padding-top:80px;" class="col s12 m5 l5 xl4 right"><div class="card-panel light-blue darken-1"><span style="text-decoration:underline;" class="white-text"><a class="white-text" href="/2017/08/security-vulnerability-disclosures">Background: The purpose of these posts</a></span></div></div><h4>Background</h4>I had a talk at <a href="https://www.meetup.com/OWASP-Norway/events/248655998/">OWASP Norway's meetup</a> in Oslo and therefore stayed the night at <a href="https://www.thonhotels.no/hoteller/norge/oslo/thon-hotel-rosenkrantz-oslo/">Thon Hotel Rosenkrantz Oslo</a>. 

I did the reservation online directly with the hotel as it was cheaper than via <a href="https://hotels.com/">hotels.com</a>. And because of the direct booking the hotel started sending me different e-mails regarding my stay. Some of those e-mails led me to an unprotected website.

<h4>Approach (technical stuff)</h4>All the e-mails from the hotel had links named <i>"View in browser"</i>. The e-mails directly regarding my stay linked to a <a href="https://azure.microsoft.com">Microsoft Azure</a> application at some "random" <span class="code">cloudapp.net</span> subdomain.

What hit me first was that <b>the links were served over http and not https</b>. And instead of a nice shorter URL pointing to Thon, it was a long one with a path signaling that site was used for more than my hotel chain. <b>The query parameters contained a big integer as an ID and my e-mail address. So the natural thing to try was to remove the e-mail address from the query parameters. To my surprise I still got my details back.</b>

<b>Then I tried my ID - 1 and got another person's booking.</b> I never download a lot of data as I don't want anyone to question my motives, but I do like to get an idea of the scope of a data leak, so I did a few tests to see if I could see how many bookings this was. My ID was past 2.37 million and the lowest that I saw working was around 865 thousand, so <b>I estimate that more than 1.5 million records were available.</b>

<b>It was possible to traverse the URL path and get to a generator/preview function of a lot of different types of e-mail templates (for check-in details, receipts, room number reminder, etc.) for a long list of hotels.</b>

<b>By changing the templates it was possible to retrieve different information about a booking.</b> E.g. one template would include the room number, while another would include dates and the customer's name and e-mail address. Judging from the e-mails I received it would in some cases be possible to check some people in or out.

Just by doing a google search with the subdomain I got a page that looked like a login page for the whole system. That page was also served over http.

<h4 style="clear:left;">Security issues</h4><b>One could very easily iterate over - what I estimate to be - 1.5 million bookings and get some or all of the following information:
- Customer's full name
- Customer's e-mail address
- Reservation number
- Date of arrival
- Date of departure
- Hotel name
- Room number</b>

<b>The bookings seem to range back from 2016 and also include future stays.</b>

Also everything was served over an unencrypted connection so someone could potentially listen in and get the information.

The list of hotels affected by this security vulnerability in Ariane's system is longer, but as I only did a few tests so I only observed these:
- <a href="https://www.radissonblu.com/en">Radisson Blu</a> in England
- <a href="https://www.lindner.de/en.html">Lindner Hotels & Resorts</a> in Germany
- <a href="https://www.mcdreamshotels.de/home-en.html">McDreams</a> in Germany
- <a href="https://www.nordicchoicehotels.com/">Nordic Choice Hotels</a> in Norway
- <a href="https://www.thonhotels.com/">Thon Hotels</a> in Norway
- <a href="https://www.radissonred.com/">Radisson RED</a> in South Africa
 
Ariane has stated that <a href="https://nrkbeta.no/2018/04/19/gjester-ved-to-norske-hotellkjeder-kan-ha-fatt-sine-bookingdetaljer-eksponert/">most affected hotels are in Germany and France</a> (Norwegian link). In the same article they are quoted saying that they cannot be sure that this issue has already been taken advantage of.

<img style="float:left;width:450px;margin-right:20px;margin-bottom:20px;" class="materialboxed responsive-img" title="Screenshot from one of the bookings." data-caption="Screenshot from one of the bookings." src="/images/hotel01.png"/>

<h4 style="clear:left;">Reception and handling</h4><h5>Day zero</h5>I couldn't immediately see who was responsible for the whole system so in the afternoon I sent an e-mail to Thon Hotels' customer service. I got an automatic response giving me a hint that they would not read that e-mail until the day after, so I also sent them a direct message on Twitter saying that they probably wanted to check out the issue right away.

<b>Just two hours later I got a reply thanking me and saying that the information was past on to the web development department.</b>

<h5>Day 5ish</h5><b>I tested the URL in question and saw that they had fixed the issue where one could access anyone's booking without also knowing the e-mail address.</b>

<h5>Day 7</h5>I got an e-mail from the chief of security in the group owning the Thon Hotels where he thanked me and asked for my details to send a reward - a gift card which I received just a few days after that.

<h4>Media coverage</h4>For once I did things a bit differently and worked with the media before I published the case here myself. <a href="https://nrkbeta.no/2018/04/19/gjester-ved-to-norske-hotellkjeder-kan-ha-fatt-sine-bookingdetaljer-eksponert/">NRKbeta covered the story less than a week ago</a> (Norwegian link only, sorry). NRK is the Norwegian government-owned radio and television public broadcasting company, and the largest media organisation in Norway. They also featured it as as the top story on <a href="https://nrk.no">nrk.no</a> of their front page for some time. I'm happy to see that big media companies like NRK cares about online security and our personal data.

<h4>Conclusion</h4>Is this leak so bad? Most people can handle having their name, e-mail address and reservation stolen or being open on the Internet forever. This is still a pretty bad leak. The number of reservations was pretty big. Maybe someone was already taking advantage of it? It would be possible to regularly check the bookings for public persons or other individuals. It could also be circumstantial evidence for some person being at a certain place at a certain time.

Also, with information like this it would be pretty easy to do some kind of <a href="https://en.wikipedia.org/wiki/Phishing#Spear_phishing">spear phishing</a> - to use the information to target and deceive a hotel customer.

I think we all expect our hotel to keep our personal details safe and secured.
`,
                "images": ["/images/hotel01.png", "/images/hotel02.png"],
                "category":
                {
                    "title": "Security",
                    "url": "/security"
                },
                "tags": [
                    {
                        "title": "Security Monday",
                        "url": "/security-monday"
                    },
                    {
                        "title": "Information leak",
                        "url": "/information-leak"
                    },
                    {
                        "title": "OWASP 2017 A3",
                        "url": "/owasp-2017-a3"
                    },
                    {
                        "title": "OWASP 2017 A5",
                        "url": "/owasp-2017-a5"
                    },
                    {
                        "title": "OWASP 2017 A10",
                        "url": "/owasp-2017-a10"
                    }
                ]
            },
            {
                "title": "Millions of customer records exposed through unused API fields",
                "published": true,
                "publishDate": "2018-05-25T21:55:00.000Z",
                "updateDate": "2018-05-27T20:30:00.000Z",
                "author": "Hallvard Nygård",
                "summary": `<i>Guest blog post by <a href="https://twitter.com/hallny">Hallvard Nygård</a></i>`,
                "niceUrl": "/2018/05/postnord-api-leak",
                "text": `<h4>tl;dr</h4>Possibly millions of customer records (name, address, e-mail and phone number) from PostNord was exposed through unused API fields in a parcel tracking page used in Norway. The API has been online at least since 2013. The security issue was discovered after a parcel delivery from Komplett.no (Komplett Group AS, Norway) and the issue was also reported and handled through Komplett.no.

<h4>Summary</h4><table class="summary">
<tr>
    <td style="width:30%">Who:</td>
    <td><a href="https://www.postnord.no/en">PostNord</a>. Confirmed, but maybe not limited to, PostNord Norway. Reported to <a href="https://www.komplett.no/">Komplett.no</a>.</td>
</tr>
<tr>
    <td style="width:30%">Severity level:</td>
    <td><span class="orange-text">Medium</span></td>
</tr>
<tr>
    <td style="width:30%">Reported:</td>
    <td>May 2018</td>
</tr>
<tr>
    <td style="width:30%">Reception and handling:</td>
    <td><span class="green-text">Good</span></td>
</tr>
<tr>
    <td style="width:30%">Status:</td>
    <td><span class="green-text">Fixed</span></td>
</tr>
<tr>
    <td style="width:30%">Reward:</td>
    <td>Thanks and a gift card at Komplett.no for 500 NOK (60 USD). Issue was reported to and handled by Komplett.no.</td>
</tr>
<tr>
    <td style="width:30%">Issue:</td>
    <td>Page showing tracking information about parcels was leaking name, full address, phone number and e-mail. Parcel tracking code was guessable. At least Norwegian parcels affected.</td>
</tr>
</table>

<h4>Background</h4><img style="float:left;width:450px;margin-right:20px;" class="materialboxed responsive-img" title="Screenshot from PostNord's website for tracking parcels." data-caption="Screenshot from PostNord's website for tracking parcels." src="/images/postnord02.png"/>I had just bought a new phone from Komplett.no. The phone was sent with PostNord to my local store. When Komplett.no sent the package, I was e-mailed a link to a page with tracking information (minside.postnord.no, "min side" = "my page"). When it arrived at the local store, I was sent an SMS from PostNord with the pickup code and the same link to the tracking page. 

The tracking page contained more information in the backend call to get parcel and tracking information than what was displayed on the page.

PostNord delivers, among other postal and shipping services, parcels in the Nordics. Norway was affected. It is possible that the parcel service in Sweden, Denmark, Finland and Germany also was affected. Norwegian tracking number can be checked on other PostNord tracking pages (e.g. international and Swedish page) so I find it likely but unconfirmed.

According to privacy policy of Komplett.no the client data is stored up to 36 months in PostNord's databases.

PostNord AB had according to <a href="https://www.postnord.com/globalassets/global/sverige/dokument/rapporter/arsredovisningar/2017/postnord-2017-eng.pdf">2017 numbers</a>, 17.2 million parcels delivered in Norway, 97.7 millions in Sweden, 47.2 millions in Denmark, 8.3 millions in Finland, 15.5 millions in Germany. 154 million parcels in 2017 and 142 million parcels in <a href="https://www.postnord.com/contentassets/28039a622d0c4dd0872fc57c7778ecd2/postnord-annual-report.pdf">2016</a>. At least 450 millions parcels over 36 months. It's unknown to me how many of these have tracking numbers that can be viewed on the tracking page. At least Norwegian tracking numbers can. A good guess for number of parcels in Norway is around 50 million parcels within 36 months. Number of affected customers should be in the millions.

Komplett.no is part of The Komplett Group and is the largest e-commerce player in the Nordic countries. Head quarters in Sandefjord, Norway. Reporting revenue was MNOK 8,100 in 2017. 1,600,000 active customers with one or more orders the last year. Numbers <a href="http://canica.no/investment/komplett/">according to Canica</a> (owner). They pick and send packages 24/7 with a average of 3 per second i 2017. Should be around 95,000,000 (95 mill) packages per year. Komplett.no sends package with Posten Norge (state-owner company, owned by Norway) and the Norwegian parcel service of PostNord AB (state-owned company, owned Sweden and Denmark).

<i>Small curiosity: No more information than Komplett.no have declared in their <a href="https://www.komplett.no/kundeservice/om-komplett/personvern/">privacy policy</a> (Norwegian text) was exposed. I am confident that the privacy policy is telling the truth in the chapter about sharing information with PostNord. Thumbs up!</i>

<h4>Approach (technical stuff)</h4><img style="float:left;width:450px;margin-right:20px;" class="materialboxed responsive-img" title="Screenshot from Chrome Developer Tools showing the excess data returned by the API." data-caption="Screenshot from Chrome Developer Tools showing the excess data returned by the API." src="/images/postnord03.png"/>The page had a <b>URL like https://minside.postnord.no/public-services/tracking/7070205547XXXXXXX</b> (where X was all digits in the tracking code). The tracking codes are GSIN tracking numbers. They have a prefix and a checksum as last digit. They are not far from auto increment. See update below for details. The tracking number is displayed on labels that are printed and put on the packages. They are also sent to the client by the shipping company or the e-commerce company.

The GUI on the tracking page contained information like city of origin, city of destination, opening hours of pick up point, weight, tracking information. It does not show name og the full address of origin or destination.

Inspecting this page in Chrome Developer Tools I found that the REST response contained more information than in GUI. In addition to more detailed information about the package, it contained name, full address, phone number and e-mail for the recipient. It also contained the name and address of origin.

I looked at 3 IDs around the tracking ID I got from my Komplett.no package. They where all Komplett.no packages containing 6 identifiable names (e-mail/phone contained one name and name on package was a different one). On my phone I had an SMS for a package from the company Forbruksimport.no AS back in 2016. The link was still active and my full name, address, company e-mail and phone number was present in REST service. Changing tracking codes around this number I found another package from two other parties (a school and a printing company). <b>This confirmed that both old tracking codes was active</b> and that <b>other PostNord customers was affected</b> (not Komplett.no). I did not confirm any foreign tracking numbers (don't have any).

All checking of tracking numbers was done manually in the GUI in Chrome. Unless PostNord had mass download protection, I think <b>scripting a download of the whole database would be trivial.</b>

<b>26th of May - Update regarding tracking number (Thanks, Jonas!):</b>

The tracking numbers are <a href="https://en.wikipedia.org/wiki/GS1">G1</a> numbers and are detected as <a href="https://www.gs1.org/standards/id-keys/gsin">Global Shipment Identification Number</a> [<a href="http://www.gs1.no/sites/gs1/files/user/Dokumenter/Brukerveiledninger/transportguiden.pdf">Norway specific info</a>, in Norwegian] by <a href="https://www.gs1.org/services/check-digit-calculator">GS1's check digit calculator</a>. They have a "company" prefix and shipper reference starting at variable positions and have variable length [<a href="https://www.gs1.org/docs/idkeys/GS1_GSIN_Executive_Summary.pdf">ref executive summary</a>]. The last digit is a check sum.

These are some of my GSIN tracking numbers:
- 70702055479245968, PostNord - Komplett.no (2018)
- 70713750137378380, PostNord - Forbrukerimport.no (2016)
- 70722150148854589, Posten Norge - Verktøy4u.no (2018)

The 707 prefix is Norway according to <a href="https://en.wikipedia.org/wiki/List_of_GS1_country_codes">List of GS1 country codes on Wikipedia</a> (700-709 = Norway). Both my PostNord tracking codes and the one from Posten Norge have the same 707 prefix. Other tracking codes I have in e-mails from Posten Norge seems to have 707 prefix. I had one with 704 and Roy found one with 705 prefix.

I have not been able to identify what prefixes PostNord uses, if large e-commerce companies like Komplett have their own prefix or what prefix Posten Norge have. I still believe the tracking number are largely auto increments.

<b>27th of May - Update regarding time frame:</b>

After a bit of searching on Google for keywords in the JSON output of the service, I was able to find <b>two paste bins from 2013 and 2014</b>. Both outputs had tracking information plus name and full address. They did not have e-mail and phone number. Both were packages from Komplett.no.

The URL was present in the one from 2013. It is still active on tollpost.no and I could check my on tracking numbers there:
- http://www.tollpost.no/XMLServer/rest/trackandtrace?q=70702055479245968

The tollpost.no domain redirects to postnord.no, but not for this service. Tollpost Global AS was accuired by PostNord AB some years back. Testing the same thing on postnord.no, the same API service returned
- http://www.postnord.no/XMLServer/rest/trackandtrace?q=70702055479245968

I think it's fair to say that the <b>service has been online for above 5 years</b>.

<h4>Security issues</h4><img style="float:left;width:450px;margin-right:20px;" class="materialboxed responsive-img" title="Screenshot from Chrome showing the excess data returned by the API." data-caption="Screenshot from Chrome showing the excess data returned by the API." src="/images/postnord01.png"/>- <b>Personal data secured by predictable tracking number (ID)</b>

The combination is a leak of estimated millions of customers name, full address, phone number and e-mail address.

The solution with guessable tracking numbers have both advantages and disadvantages. A number with a checksum is easier to write than something in the length and complexity of UUID. The guessable/predictable part of the number (autoincrement + checksum) makes it insecure. Everybody can find valid numbers.

Given that they don't switch to something more secure, they can't give out personal data based on this tracking number. PostNord seems to be aware of this, as they have texts like "Due to security reasons we cannot show the recipient's full name and address. This is the postal code and city to where we will deliver the parcel." on <a href="https://tracking.postnord.com/">another tracking solution</a> they provide.

<h4>Reception and handling</h4>The handling was fast, so I'll give the numbers in hours instead of days. Komplett did exactly what they should when notified. They gave a preliminary reply within a short time frame and responding in more detail the morning after. The issue was fixed faster than I expected. The reception was also good as it seemed that they were happy to get the notification.

<h5>Hour 0 (20:16) - Notification</h5><b>Notification was sent to PostNord</b> (Data Protection Officer), <b>Komplett.no</b> (CEO, Data Protection Officer and a contact e-mail regarding personal data) and a copy to The Norwegian Data Protection Authority. The notification contain details about me plus 3 identified Komplett.no customers as example. The 3 customer profiles identified 6 persons (name identified one, e-mail identified another). I also included my 2016 parcel and example which identified a school sending a package to a printing company. I felt that this was enough to get the attention of somebody at top management level to get it fixed in a rush.

I did not think I had found good addresses to contact in PostNord, but I had a better feeling about addresses in Komplett. Smaller company, usually responsive to customers. I also asked the Komplett Chat for an address to notify about security issues. They had none. I did manage to find the name of and get the e-mail confirmed for the security chief, but the e-mail bounced.

Neither PostNord or Komplett had <a href="https://securitytxt.org/">security.txt</a> on the domains I looked at.

<h5>Hour 1.5 (21:40) - Confirmation</h5><b>Komplett thanks for the notification and confirmed that the message was received. This is a good sign that the message was sharp enough that people read it in the evening and sent to the right people.</b> Really important to answer quickly, like Komplett did, if you get a message about security issues. Often the problem is that nobody answers.

<h5>Hour 13 (09:49) - 2nd confirmation</h5>The next morning, I got a friendly call from Komplett. They thanked me again and <b>confirmed that they were in contact with PostNord and that they were on the case.</b>

GDPR is launch in Europe on this day (25th of May 2018). Not active in Norway until 1st of July, but active for all EU citizens in our databases. A lot of privacy policies have already been updated i Norway. <b>Happy GDPR Day!</b>

<h5>Hour 19 (15:03) - Fixed</h5>Phone call from Komplett again. Again thanking me for the notification. I was told that the <b>issue is fixed</b>. I quickly verify it after the conversation.

Just a few minutes later, the Data Protection Officer from Komplett confirms <b>the mandatory incident report to The Norwegian Data Protection Authority was sent</b>. In Norway any unauthorized disclosure of personal data (e.g. data leak or client report sent to the wrong address) must be reported. The reports will be public (a few details might be withheld).

<h4>Conclusion</h4>This is quite a large number of affected customers with their name, e-mail, phone number and full address neatly displayed along with their last parcel delivery. The leak is bad.

PostNord know about the issue of displaying names and other information based on tracking number.`,
                "images": ["/images/postnord02.png", "/images/postnord01.png", "/images/postnord03.png"],
                "category":
                {
                    "title": "Security",
                    "url": "/security"
                },
                "tags": [
                    {
                        "title": "Information leak",
                        "url": "/information-leak"
                    }
                ]
            },
            {
                "title": "Linkifying robots.txt",
                "published": true,
                "publishDate": "2018-06-03T19:50:00.000Z",
                "updateDate": "2018-06-04T16:26:00.000Z",
                "summary": `Here's a simple bookmarklet to linkify <span class="code">robots.txt</span>.`,
                "niceUrl": "/2018/06/robots-txt-linkifier",
                "text": `<h4>tl;dr</h4><a href="https://en.wikipedia.org/wiki/Robots_exclusion_standard"><span class="code">robots.txt</span></a> is a unfortunately often a source for finding links to parts of websites that should not be publicly known (or even be on the Internet in the first place). I've written a few lines of JavaScript to make it quicker to visit all the links in this file.

<h4>Bookmarklet</h4><p style="text-align:center;"><a onclick="alert('No need to click this. :-) Just drag the link to your bookmark row or copy it and paste it into a new bookmark.');return false;" href="javascript:(function()%7Bconsole.log(%27robots.txt%20linkifier%20v1.1%3B%20https%3A%2F%2Fblog.roysolberg.com%27)%3Bif(location.pathname!%3D%27%2Frobots.txt%27)%7Bif(confirm(%27Do%20you%20want%20to%20navigate%20to%20%2Frobots.txt%3F%20You%20need%20to%20run%20the%20bookmarklet%20again%20to%20linkify%20it.%27))%7Blocation.href%3D%27%2Frobots.txt%27%7D%3Breturn%7D%3Bfunction%20openLinks()%7Bvar%20links%3Ddocument.links%3Bif(links.length%3E20)%7Bif(!confirm(%27There%20are%20%27%2Blinks.length%2B%27%20links.%20Are%20you%20sure%20you%20want%20to%20open%20them%20all%20at%20once%3F%27))%7Breturn%7D%7D%3Bconsole.log(%27Some%20browsers%20will%20block%20opening%20links%20this%20way.%27)%3Bfor(var%20i%3D0%3Bi%3Clinks.length%3Bi%2B%2B)%7Bwindow.open(links%5Bi%5D.href%2C%27_blank%27)%7D%7D%3Bvar%20base%3Dlocation.protocol%2B%22%2F%2F%22%2Blocation.hostname%2B(location.port%26%26%22%3A%22%2Blocation.port)%3Bvar%20html%3D%27%3Cbody%20style%3D%22font-size%3A120%25%3B%22%3E%3Cscript%3E%27%2BopenLinks.toString()%2B%27%3C%2Fscript%3E%3Cbutton%20type%3D%22button%22%20style%3D%22width%3A200px%3Bheight%3A40px%3Bfont-size%3A120%25%3B%22%20onclick%3D%22openLinks()%3B%22%3EOpen%20all%20links%3C%2Fbutton%3E%3Cdiv%20style%3D%22font-family%3A%20monospace%3B%22%3E%27%3Bhtml%2B%3Ddocument.body.textContent.replace(%2F(Allow%7CDisallow)%3A%20(%5C%2F%5CS*)%2Fg%2C%27%241%3A%20%3Ca%20href%3D%22%27%2Bbase%2B%27%242%22%20target%3D%22_blank%22%3E%242%3C%2Fa%3E%27).replace(%2F%5Cn%2Fg%2C%27%3Cbr%2F%3E%27)%3Bvar%20win%3Dwindow.open()%3Bwin.document.write(html)%3Bwin.document.close()%7D)()%3B" class="waves-effect waves-light btn-large">robots.txt linkifier</a></p><b>Just drag the button to your bookmark row in your browser.</b> (In some browsers you might need to copy and paste the link of the button into a new bookmark.)

<b>After that you can just click the bookmark when visiting websites' <a href="/robots.txt"><span class="code">robots.txt</span> (like my)</a> to get them linkified and even all their links opened with just one click of a button.</b>

<h4>What's a bookmarklet?</h4>A <a href="https://en.wikipedia.org/wiki/Bookmarklet">bookmarklet</a> is a bookmark stored in a web browser that contains JavaScript commands that add new features to the browser. Bookmarklets can be useful tools, e.g. for increasing the readability of web pages, do searches, create short urls, etc.

<h4>Source code</h4>Here's the few lines of source code without <a href="https://en.wikipedia.org/wiki/Minification_(programming)">minification</a> and without <a href="https://en.wikipedia.org/wiki/Percent-encoding">URL encoding</a>.<pre class="prettyprint lang-js">/*
* ----------------------------------------------------------------------------
* "THE BEER-WARE LICENSE" (Revision 42):
* http://github.com/roys wrote this file.  As long as you retain this notice
* you can do whatever you want with this stuff. If we meet some day, and you
* think this stuff is worth it, you can buy me a beer in return.   Roy Solberg
* ----------------------------------------------------------------------------
*/
javascript: (function () {
    console.log('robots.txt linkifier v1.1; https://blog.roysolberg.com');
    if(location.pathname != '/robots.txt'){
        if(confirm('Do you want to navigate to /robots.txt? You need to run the bookmarklet again to linkify it.')){
            location.href= '/robots.txt';
        }
        return;
    }
    function openLinks() {
        var links = document.links;
        if (links.length > 20) {
            if (!confirm('There are ' + links.length + ' links. Are you sure you want to open them all at once?')) {
                return;
            }
        }
        console.log('Some browsers will block opening links this way.');
        for (var i = 0; i < links.length; i++) {
            window.open(links[i].href, '_blank');
        };
    }
    var base = location.protocol + "//" + location.hostname + (location.port && ":" + location.port);
    var html = '&lt;body style="font-size:120%;">&lt;script>' + openLinks.toString() + '&lt;/script>&lt;button type="button" style="width:200px;height:40px;font-size:120%;" onclick="openLinks();">Open all links&lt;/button>&lt;div style="font-family: monospace;">';
    html += document.body.textContent.replace(/(Allow|Disallow): (\\/\\S*)/g, '$1: &lt;a href="' + base + '$2" target="_blank">$2&lt;/a>').replace(/\\n/g, '&lt;br/>');
    var win = window.open();
    win.document.write(html);
    win.document.close();
})();</pre>
The software and source code is released under the <a href="https://en.wikipedia.org/wiki/Beerware">beer-ware licence</a> 🍻💻.

<a href="https://github.com/roys/js-bookmarklet-robots">The source code is also available at GitHub</a>.

<h4>Want more bookmarklet fun?</h4>Why don't you try out my bookmarklet game <a href="/2017/10/dom2-bookmarklet">DOM II: JavaScript Hell</a>? 😎
`,
                "images": [],
                "category":
                {
                    "title": "Security",
                    "url": "/security"
                },
                "tags": [
                    {
                        "title": "JavaScript",
                        "url": "/javascript"
                    },
                    {
                        "title": "Bookmarklet",
                        "url": "/bookmarklet"
                    }
                ]
            },
            {
                "title": "Case #16: Free parking and personal data",
                "published": true,
                "publishDate": "2018-06-11T04:40:00.000Z",
                "summary": `It was possible to do systematic account takeover for one of Norway's biggest parking companies.`,
                "niceUrl": "/2018/06/free-parking",
                "text": `<h4>tl;dr</h4>The parking company <i>OnePark</i> had a security issue that made it possible to systematically iterate through and change the username and password for all of their customers. By logging in afterwards one could collect personal data and even register your car's licence plate to be paid by that account.

<h4>Summary</h4><table class="summary">
<tr>
    <td style="width:30%">Who:</td>
    <td><a href="https://onepark.no/">OnePark</a></td>
</tr>
<tr>
    <td style="width:30%">Severity level:</td>
    <td><span class="orange-text">Medium</span></td>
</tr>
<tr>
    <td style="width:30%">Reported:</td>
    <td>November 2017</td>
</tr>
<tr>
    <td style="width:30%">Reception and handling:</td>
    <td><span class="orange-text">Fair</span></td>
</tr>
<tr>
    <td style="width:30%">Status:</td>
    <td><span class="green-text">Fixed</span></td>
</tr>
<tr>
    <td style="width:30%">Reward:</td>
    <td>A thank you</td>
</tr>
<tr>
    <td style="width:30%">Issue:</td>
    <td>Information leak with personal information</td>
</tr>
</table>
<div style="padding-top:80px;" class="col s12 m5 l5 xl4 right"><div class="card-panel light-blue darken-1"><span style="text-decoration:underline;" class="white-text"><a class="white-text" href="/2017/08/security-vulnerability-disclosures">Background: The purpose of these posts</a></span></div></div>
<h4>Background</h4>OnePark is one of Norway's biggest parking companies. They have many parking lots where they use <a href="https://en.wikipedia.org/wiki/Automatic_number-plate_recognition">automatic number-plate recognition (ANPR)</a>. You can just park your car, and then after picking it up you have 48 hours to go online to pay your bill. You don't even have to do any registration up front.

<b>I got a tip that OnePark sends out the passwords for their accounts in clear text - and that is just never a good sign.</b> So I decided to take a quick peek at their site.

<h4>Approach (technical stuff)</h4><!--a class="skip-link" href="#security-issue">Skip</a--><img style="width:500px;float:left;margin-right:20px;" class="materialboxed responsive-img" title="Screenshot from source code of Onepark's profile page." data-caption="Screenshot from source code of Onepark's profile page." src="/images/onepark03.png"/>I took a look at OnePark's site with <a href="https://help.vivaldi.com/article/developer-tools/">Vivaldi developer tools</a> running. I created an account (you can create as many as you'd like using just an e-mail address) and looked at the communication with the server.

Most stuff looked good, but <b>I hesitated when I saw that the web form for updating the user profile actually sent the user's ID back. The user ID was that classic integer that we so often see and therefore - when there's a vulnerability - opens up for an enumeration attack.</b>

I didn't want to destroy anyone else's data so <b>I created myself a another new account and tested by passing that user ID in when doing a profile update with a third e-mail address and a new password. The site didn't complain, and voilà - I was able to log in to the other account with that e-mail address and password.</b> <span title="Hacker cat">🐱‍💻</span>

But of course, now the data was all replaced by mine. So <b>I removed all other form fields than the username (e-mail address) and password from the profile update request. This worked just fine.</b>

Inside the other person's profile it was now possible to get hold of all the personal data, including any licence plate numbers and see if there was payment information added to the profile. The payment information was securely stored at a third-party site.

Since the user ID was an integer one could easily have set up a script to steal all the data. And not only that, one could also of course do vandalism by updating/removing the data. What's more - if one's a bit bold - <b>one could register the licence plate of the car and remove it after the parking was paid for. I did not check if this would be easily spotted and trackable for either the customer or OnePark.</b>

<h4 id="security-issues">Security issues</h4><img style="width:500px;float:right;margin-left:20px;margin-bottom:20px;" class="materialboxed responsive-img" title="Screenshot of Onepark's profile page." data-caption="Screenshot of Onepark's profile page." src="/images/onepark02.png"/><img style="width:500px;float:right;margin-left:20px;" class="materialboxed responsive-img" title="Screenshot of Onepark's profile page." data-caption="Screenshot of Onepark's profile page." src="/images/onepark01.png"/><b>One could systematically go through all customers and retrieve the following information:
 - Full name
 - Full address
 - Phone number
 - Licence plate numbers
</b>
It was also possible to register any car's licence plate to be paid for with any account. In addition initial and reset passwords were sent in clear text by e-mail.

<h4>Reception and handling</h4><h5>Day zero</h5>I found a contact form where I described the issue with the account takeover.

I got an automatic reply that they had received the e-mail.

<h5>Day 10</h5>I got a phone call (even though I didn't give them my phone number) from one of the chiefs of the company that apparently was responsible for OnePark's web solution.

<b>He thanked me a lot and clearly was proud that they had fixed the issue in just three hours. Three hours? Well, my message took 9.5 days to reach the people that could actually fix the issue.</b>

While the handling of this company was good, OnePark seems to have quite a way to go on how to receive and handle issues around their online security.

Just after the phone call I also received an e-mail from the same chief - again thanking me and telling how they dealt with the issue.

<h4>Conclusion</h4>Just like <a href="/2018/04/power-company-leak">the security issue with the power company Norgesnett</a> this is a case where the authorization check for updating the profile fails. And because of the usage of an integer as user ID it was possibly to systematically exploit the issue.

It is quite common for software developers to trust the authentication, but then forgetting the authorization check and user input sanitization.

And yet again we can see our personal data open for anyone to steal…
`,
                "images": ["/images/onepark01.png", "/images/onepark02.png", "/images/onepark03.png"],
                "category":
                {
                    "title": "Security",
                    "url": "/security"
                },
                "tags": [
                    {
                        "title": "Security Monday",
                        "url": "/security-monday"
                    },
                    {
                        "title": "Information leak",
                        "url": "/information-leak"
                    },
                    {
                        "title": "Account takeover",
                        "url": "/account-takeover"
                    },
                    {
                        "title": "OWASP 2017 A5",
                        "url": "/owasp-2017-a5"
                    }
                ]
            },
            {
                "title": "Case #17: Tracking dog owners",
                "published": true,
                "publishDate": "2018-06-25T04:57:00.000Z",
                "summary": `The tool for the owner to track its pet became a tool for tracking all the pet owners themselves. The hunters became the hunted.`,
                "niceUrl": "/2018/07/tracking-dog-owners",
                "redirectUrls": ["/2018/07/tracking-dog-owners"],
                "text": `<h4>tl;dr</h4>A tracking system was leaking information about all the users, pictures, and information and location data from all the trackers.

<h4>Summary</h4><table class="summary">
<tr>
    <td style="width:30%">Who:</td>
    <td>Anonymous, let's call them <a href="https://en.wikipedia.org/wiki/Fictional_company">Acme4</a></td>
</tr>
<tr>
    <td style="width:30%">Severity level:</td>
    <td><span class="orange-text">Medium</span></td>
</tr>
<tr>
    <td style="width:30%">Reported:</td>
    <td>May 2018</td>
</tr>
<tr>
    <td style="width:30%">Reception and handling:</td>
    <td><span class="green-text">Good</span></td>
</tr>
<tr>
    <td style="width:30%">Status:</td>
    <td><span class="green-text">Fixed</span></td>
</tr>
<tr>
    <td style="width:30%">Reward:</td>
    <td>A thank you</td>
</tr>
<tr>
    <td style="width:30%">Issue:</td>
    <td>Information leak with pictures, personal information and location data</td>
</tr>
</table>
<div style="padding-top:80px;" class="col s12 m5 l5 xl4 right"><div class="card-panel light-blue darken-1"><span style="text-decoration:underline;" class="white-text"><a class="white-text" href="/2017/08/security-vulnerability-disclosures">Background: The purpose of these posts</a></span></div></div>
<h4>Background</h4>Acme4 sells a tracking chip intended to be used for dogs. There's a companion mobile app which is used to see the tracker on the map and send commands to it. It was a bit of a coincident that I noticed this system and took a closer look at it.

<h4>Approach (technical stuff)</h4><a class="skip-link" href="#security-issues"><u>Skip this part</u> 🙈</a><h5>The app</h5>I never had physical access to a tracker, so the only entry point for me was the app itself.

I have <a href="/2018/02/crack-android-apps">my guide on how to crack Android apps</a> which I take a quick glance at when doing this stuff. This was easy enough though. I downloaded the APK from <a href="https://apkmonk.com">apkmonk.com</a> and decompiled it with <a href="http://www.javadecompilers.com/apk">javadecompilers.com</a>. The end result was a an full access to the source code and resources.

<span class="markup">Normally I would probably just have used a HTTP proxy to intercept the traffic, but in this case where I didn't have the necessary hardware (the tracker) I wouldn't be able to use all functions, so I needed the source code to discover all possible HTTP calls. Also the source code sometimes include hidden gems like unused endpoints, test servers and more.</span>

I was a bit surprised by the how clean the code was and how it used modern patterns and libraries. The UI isn't that nice and often I find there to be a correlation..

<h5>The server API</h5>With the app's source code I could try out the server communication. <span class="markup">This wasn't exactly your regular REST API. While the data returned from the server was JSON, all of the calls were GET calls for all kinds of actions with the data in query string parameters  - even the authentication.</span> Of course this just make it much easier to play around using a desktop browser.

<em>The search for adding friends had the classic "return everything" when searching for <code>___</code>.</em> There's nothing inherently wrong with that, but it isn't ideal, and also <em>the search returned the ID, username, a display name, first name, last name and e-mail address of the users.</em>

<h5>That open Amazon S3 bucket</h5><img style="width:400px;float:left;margin:0 20px 20px 0;" class="materialboxed responsive-img" title="Location data from one of the GPS trackers." data-caption="Location data from one of the GPS trackers." src="/images/acme402.png"/><span class="markup">I found all the pictures of the users in an open <a href="https://en.wikipedia.org/wiki/Amazon_S3#Design">Amazon S3 bucket</a>. Luckily most of the users are dogs. 😅</span> But still, some owners might upload pictures of themselves with their pet. Surely the owners don't expect the pictures to be lying around on the Internet.

<h5 style="clear:left;">The web site</h5><img style="width:400px;float:left;margin-right:20px;" class="materialboxed responsive-img" title="Location data from one of the GPS trackers." data-caption="Location data from one of the GPS trackers." src="/images/acme401.png"/>In addition to the app I found a "my page" at the service's website, and this is where I struck gold. Most of the site's PHP scripts were available when logged in, but the scripts were located in a directory with open directory listing.

<em>Using the PHP scripts it was possible to iterate through all of the registered trackers as the ID was based on an incremental integer. The combined tracker information I got from the scripts was ID, phone number (to the tracker SIM card), <a href="https://en.wikipedia.org/wiki/International_Mobile_Equipment_Identity">IMEI</a>, display name and historical location data (latitude, longitude, address, direction).</em>

<em>The good news is that I didn't find any direct way of seeing which tracker belonged to which user. However, about 5% could be connected because of the display name of the tracker. Additionally, because of the incremental IDs, it was possible to pretty accurately estimate which tracker belonged to which user.</em>

<h4 id="security-issues">Security issues</h4><em>One could systematically go through all users and all trackers and retrieve the following information:
 - Users:
   - Full name
   - E-mail address
   - Username
   - Display name
 - Trackers:
   - Display name
   - Location (latitude, longitude, direction, address)
   - IMEI
   - Phone number
</em>
It was only possible to either estimate the owner of the tracker (based on incremental IDs) or - for 5% av of the trackers - assume a match based on display names. <em>All pictures of the pets were available for download.</em>.

<h4>Reception and handling</h4><h5>Day zero</h5>Night time Friday I sent an e-mail to the support address. I like to keep it short, but this was probably the longest description I've had to write in such an e-mail.

<h5>Day 3</h5>Before lunch on Monday I got an e-mail thanking me for the report.

<h5>Day 4</h5>Again before lunch, I got an e-mail telling me that everything should be fixed. So this was all pretty quickly taken care of.

<h5>Day X</h5>While doing this write-up I saw - and reported - that the search for adding friends within the app still also returns e-mail addresses and still returns all users if searching for a special character. I hope that'll be fixed. Imagine Facebook giving away all users and their e-mail addresses that easily.

<h4>Anonymous you say?</h4>I looked into the financial and other public information of this company. I also checked out social media and did a little general due diligence. Though the person behind the company might not do all coding and support personally, it appeared to be a one-man show. <em>I don't want to use my blog to afflict individuals.</em> <a href="/2017/08/security-vulnerability-disclosures">As stated before</a>, I want people to know that none of their data is secure, I want us developers to improve our data security skills, and I want companies to take more responsibility around data security and their customer data.

<h4>Conclusion</h4>Maybe we as consumers should think twice when buying devices connected to the Internet. Think about what information you hand over to the vendor and what could be the worst case if everything's leaked. Would someone be able to live track you? Would someone be able to know when you're not at home? Would you be ok with anyone having the usage data for this system? Would you be fooled if anyone used this information in a clever way in a <a href="https://en.wikipedia.org/wiki/Phishing">phising e-mail</a>?

<em>I wish that there was some sort of certification to know that an IoT vendor at least fulfils some minimum standards in regards of computer security and have regularly third party audits.</em>
`,
                "images": ["/images/acme401.png", "/images/acme402.png"],
                "category":
                {
                    "title": "Security",
                    "url": "/security"
                },
                "tags": [
                    {
                        "title": "Security Monday",
                        "url": "/security-monday"
                    },
                    {
                        "title": "Information leak",
                        "url": "/information-leak"
                    },
                    {
                        "title": "Internet of Things",
                        "url": "/iot"
                    },
                    {
                        "title": "OWASP 2017 A5",
                        "url": "/owasp-2017-a5"
                    }
                ]
            },
            {
                "title": "Case #18: I know what you did last summer - and also what you will be doing this one",
                "published": true,
                "publishDate": "2018-07-09T04:50:00.000Z",
                "summary": `Thomas Cook Airlines was leaking passenger information about future og past flights. Information about tens of thousands - or maybe hundreds of thousands - of travels could be systematically downloaded.`,
                "niceUrl": "/2018/07/airline-flights-leak",
                "text": `<h4>tl;dr</h4>It was possible to - partially very systematically - retrieve passenger information for travelers with Thomas Cook Airlines. Data as old as from 2013 and all the way to 2019 was available.

<h4>Summary</h4><table class="summary">
<tr>
    <td style="width:30%">Who:</td>
    <td><a href="http://www.thomascookairlines.no/">Thomas Cook Airlines</a> (and especially travelers booking via <a href="https://www.ving.no/">Ving</a>)</td>
</tr>
<tr>
    <td style="width:30%">Severity level:</td>
    <td><span class="orange-text">Medium</span> to <span class="red-text">high</span></td>
</tr>
<tr>
    <td style="width:30%">Reported:</td>
    <td>June 2018</td>
</tr>
<tr>
    <td style="width:30%">Reception and handling:</td>
    <td><span class="orange-text">Fair</span></td>
</tr>
<tr>
    <td style="width:30%">Status:</td>
    <td><span class="green-text">Fixed</span></td>
</tr>
<tr>
    <td style="width:30%">Reward:</td>
    <td>A thank you from Thomas Cook Airlines, a "thank you, but there are no issues" from Ving</td>
</tr>
<tr>
    <td style="width:30%">Issue:</td>
    <td>Information leak with personal and travel information from at least 2013 including future travels</td>
</tr>
</table>
<div style="padding-top:80px;" class="col s12 m5 l5 xl4 right"><div class="card-panel light-blue darken-1"><span style="text-decoration:underline;" class="white-text"><a class="white-text" href="/2017/08/security-vulnerability-disclosures">Background: The purpose of these posts</a></span></div></div>
<h4>Background</h4><img style="float:left;width:400px;margin-right:20px;" class="materialboxed responsive-img" title="Screenshot from Thomas Cook Airlines' site Airshoppen." data-caption="Screenshot from Thomas Cook Airlines' site Airshoppen." src="/images/airshoppen02.png"/>I had just paid for my vacation with Ving when I got an e-mail from Thomas Cook Airlines with a link to <a href="https://airshoppen.com">airshoppen.com</a> where you can upgrade your flight (i.e. meals, seating, etc), buy duty free and do the online check-in. I got a bit curious when I saw that the links from the e-mail did an auto login of my user based on only very little data.

<h4>Approach (technical stuff)</h4><a class="skip-link" href="#affected"><u>Skip this part</u> 🙈</a>
The links from all the e-mails from Thomas Cook Airlines to their domain airshoppen.com were click registration URLs also containing a redirect URL. The redirect URL was of the format
<code style="font-size:smaller;">https://no.airshoppen.com/autologin?ReturnUrl=/oppgrader-flyreisen-din&<em>bookingNo=&lt;integer booking number&gt;&tourOperatorTag=&lt;short name tour operator&gt;&depDate=&lt;departure date&gt;</em>&&lt;some <a href="https://en.wikipedia.org/wiki/UTM_parameters">UTM parameters</a>&gt;</code>

That link did another redirect which made you end up as logged in and you could see some of your personal info. Of course, the only natural thing to do was to play with the parameters; change the dates, change the booking number and remove one or more parameters.

<em>The first thing I discovered was that I could log in to my own booking using +-1 day in the URL. I'm sure this is done to avoid problems with timezones when people log in and pick their travel date manually. However, this means that guessing on a close by booking number one only needs 120 guesses to cover a full year of travel dates. To me this is not very assuring.</em>

When you are logged in you are presented with a list of the names of everyone travelling on the same booking. You can then select who any orders will be registered on. Copying that call to <a href="https://curl.haxx.se/">curl</a> would make it look something like this:<pre class="prettyprint">
curl 'https://no.airshoppen.com/Account/SelectPassenger?locale=nb-NO' \\
    -H 'Cookie: ASP.NET_SessionId=&lt;session ID&gt;; &lt;lotsa cookies 🍪&gt;; .AIRSHOPPENAUTH=&lt;some auth token&gt;' \\
    -H 'Origin: https://no.airshoppen.com' \\
    -H 'Accept-Encoding: gzip, deflate, br' \\
    -H 'Accept-Language: nb-NO,nb;q=0.9,no;q=0.8,nn;q=0.7,en-US;q=0.6,en;q=0.5' \\
    -H 'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3325.183 Safari/537.36 Vivaldi/1.96.1147.42' \\
    -H 'Content-Type: application/x-www-form-urlencoded; charset=UTF-8' \\
    -H 'Accept: */*' \\
    -H 'Referer: https://no.airshoppen.com/autologin?ReturnUrl=/oppgrader-flyreisen-din&bookingNo=&lt;integer booking number&gt;&tourOperatorTag=&lt;short name tour operator&gt;&depDate=&lt;departure date&gt;&&lt;some UTM parameters&gt;' \\
    -H 'X-Requested-With: XMLHttpRequest' \\
    -H 'Connection: keep-alive' \\
    --data 'TravelDocumentsRequired=False
        &Email=&lt;e-mail address&gt;
        &ShowCanContact=False
        &IsPersistant=false
        &SignInModel.SelectedTourOperatorTag=&lt;short name tour operator&gt;
        &SignInModel.DepartureDate.Day=&lt;departure day&gt;
        &SignInModel.DepartureDate.Month=&lt;departure month&gt;
        &SignInModel.DepartureDate.Year=&lt;departure year&gt;
        &SignInModel.SigninMethodType=
        &SignInModel.BookingNo=&lt;booking number&gt;
        &SignInModel.ReturnUrl=%2F
        &SignInModel.HashValue=' \\
    --compressed</pre>
That call returned markup with personal and flight information. However, I quickly saw that this call could be shortened to this:<pre class="prettyprint">
curl 'https://no.airshoppen.com/Account/SelectPassenger' \\
    --data 'SignInModel.SelectedTourOperatorTag=&lt;short name tour operator&gt;
        &SignInModel.BookingNo=&lt;booking number&gt;'</pre>

<em>Now, this was an issue. Using only the three letter short name for Ving and booking information the server would return the same data about the booking.</em>

As this was a POST call I would guess there are no logs that really can tell if this vulnerability has been misused by anyone.

<img style="float:left;width:450px;margin:0 20px 20px 0;" class="materialboxed responsive-img" title="Screenshot showing security vulnerability." data-caption="Screenshot showing security vulnerability." src="/images/airshoppen03.png"/>

<h4 id="affected" style="clear:left;">Which travel companies were affected?</h4>I never download a lot of data as I don't want anyone to question my motives, but I do like to get an idea of the scope of a data leak, so I did a few tests to see if I could see how many bookings this was affecting.

<em>For Ving this was pretty serious as they use a booking number that is seemingly an incremental integer, which makes it possible to iterate through all bookings.</em> It's worth noting that not all Ving travels are using Thomas Cook Airlines, but quite a few of their 400,000 yearly travelers do.

<em>For Ving the oldest bookings I saw were from 2013, and the most recent one from 2019. I suppose this means that data was leaking about <b>at least</b> tens of thousands of travels.</em>

I asked friends and family for booking numbers to test with, and even found some more on Google. <em>It was possible - using only the booking number - to get the data for the travels from the travel companies <a href="https://ving.no">Ving Norway</a>, <a href="https://www.ving.se/">Ving Sweden</a>, <a href="https://spies.dk/">Spies Denmark</a> and <a href="https://apollo.no/">Apollo Norway</a>.</em>

Luckily Apollo doesn't have that easily guessable booking numbers, so I couldn't find any other bookings from the one number I had. I never got any data from the travel company <a href="https://tui.no/">TUI</a> (ex Star Tour), but I didn't have any recent or future booking numbers. (TUI do however seem like the company most concerned and in control in regards of <a href="https://en.wikipedia.org/wiki/General_Data_Protection_Regulation">GDPR</a>, so maybe they don't have any old data available in Thomas Cook Airlines' systems?)

Other than that it's only speculations, but <em>airshoppen.com do handle many, many travel companies from Norway, Sweden, Denmark, Finland, United Kingdom and Germany. I would expect at least some of them to be vulnerable through this leak.</em> airshoppen.com also serves travelers travelling with <a href="https://condor.com/">Condor</a>, <a href="https://atlantic.fo/en/">Atlantic Airways</a> and <a href="https://www.smallplanet.aero/en/">Small Planet Airlines</a>, but please note that I never saw any actual data for these three airlines.

<h4 id="security-issues">Security issues</h4><em>It was possible to retrieve the following information from Thomas Cook Airlines using only a booking number:
 - Full name of all travelers on that booking
 - E-mail address of person registering the booking
 - Departure:
   - Date
   - Airport
   - Flight number
 - Return:
   - Date
   - Airport
   - Flight number

It was seemingly possible to iterate Ving's bookings with Thomas Cook Airlines from 2013 to 2019. At least data from Ving Norway, Ving Sweden, Spies Denmark and Apollo Norway was affected by this vulnerability.</em>

<h4>Reception and handling</h4><h5>Day zero</h5>I really struggled to find a proper contact point for airshoppen.com, but I submitted a web form with the closest possible topic telling them about the issue. I got an automatic reply by e-mail.

<h5>Day 1</h5>The morning after, not having heard back, I felt that this leak was too big to just slide. I asked Ving on their chat for an e-mail address where I wrote them and gave the issue ticket number from Thomas Cook Airlines.

<em>Ving replied back in just a few hours. They thanked me, told me they would pass it on internally and contact Thomas Cook Airlines. They also told me that I would hear back from Thomas Cook and not Ving.</em>

<h5>Day 8</h5><em>This was the first time Thomas Cook Airlines replied to my inquiry. And guess what? They just said that they needed my booking number to help me. What the ...</em> I tried to clarify that I was reporting a security hole and they probably wouldn't need my booking number for that.

<h5>Day 11</h5><em>Ving actually wrote me back and told me Thomas Cook Airlines had looked at the issue. They told me that I couldn't log in without having both the booking number and the departure date. What the ...</em>

I replied that this really was an issue and that data back as far as to 2013 was available.

<em>Ving replied and told me I needed the date and it wasn't as easy as I said. I asked them to give me a booking number so I could prove it. I never heard back from them after that.</em>

<em>Annoyed by their ignorance and unwillingness to fix the issue I contacted a journalist.</em>

<h5>Day 14</h5><em>Like most days I checked if the issue was still there. It was suddenly fixed.</em> Though I hadn't heard a word back from them.

<h5>Day 15</h5><em>I got an e-mail from a legal counsel in Thomas Cook Airlines verifying that they had identified and closed the vulnerability.</em> It wasn't the most grateful e-mail I've ever got, but they could tell me that they'll keep working to improve the security and that they take their customers' security very seriously.

<h5>Day 19</h5><em>I got a phone call from the same legal counsel in Thomas Cook Airlines.</em> She wanted to thank me for informing them about the issue and apologized that it took so long before I heard back from them. They were going to follow GDPR in regards of handling of the incident, but <em>from my understanding they don't think it's worth reporting to the <a href="https://en.wikipedia.org/wiki/National_data_protection_authority">data protection authority</a></em>.

<h4>Is this leak a problem?</h4>Well, <em>you can try calling an airline or someone working at an airport and ask them for passenger information. You won't get it. You are not supposed to know that person X is currently or probably will be onboard on flight Y.</em>

Also, some people might not like that you can see who they travelled with on vacation maybe 5 years ago. (<i>"Didn't you say you were going to that job conference in Stockholm? And who is this you were travelling with?"</i>)

Another problem with this is how this opens up for <a href="https://en.wikipedia.org/wiki/Phishing#Spear_phishing">spear phishing</a> - to use the information to target and deceive a traveler.

<em>Who really knows how long someone can have taken advantage of this leak..?</em>

<h4>Media coverage</h4>As in <a href="/2018/04/hotel-leak">the case with the leaked hotel reservations</a> I decided to publish this through media first. <a href="https://svenska.yle.fi/artikel/2018/07/06/konstantins-resa-till-jamaica-inte-sa-privat-som-han-trodde-avslojades-via-stort">Yle covered the story a few days ago</a> (Swedish link only, sorry). Yle is is Finland's national public broadcasting company. I'm glad to see that big media companies like Yle cares about online security and our personal data.

<h4>Conclusion</h4>Another week, another leak. It's disappointing that so much of my personal information and usage data is available for anyone on the Internet. What I can find in just a couple of minutes on a website is surely just the tip of the iceberg.

While we will continue to see leaks like this I hope that companies will get better at handling and dealing with information about security vulnerabilities. For me the whole process reporting this issue wasn't very pleasant. It could be a coincidence, but shortly after I contacted media the issue was fixed and I finally received a proper response. Only <em>after the phone call with Thomas Cook Airlines on day 19 I was more satisfied with how the whole incident in total was handled. The conversation made it clear to me that they really did take this seriously.</em>
`,
                "images": ["/images/airshoppen01.png", "/images/airshoppen02.png", "/images/airshoppen03.png"],
                "category":
                {
                    "title": "Security",
                    "url": "/security"
                },
                "tags": [
                    {
                        "title": "Security Monday",
                        "url": "/security-monday"
                    },
                    {
                        "title": "Information leak",
                        "url": "/information-leak"
                    },
                    {
                        "title": "OWASP 2017 A5",
                        "url": "/owasp-2017-a5"
                    }
                ]
            },
            {
                "title": "Behind the news: Unresponsible disclosure",
                "published": true,
                "publishDate": "2018-08-03T09:40:00.000Z",
                "updateDate": "2018-08-04T08:40:00.000Z",
                "summary": `A newspaper published details about a newly discovered serious security vulnerability. Here are the details that the newspaper article did not give.`,
                "niceUrl": "/2018/08/unresponsible-disclosure",
                "text": `<h4>Background</h4>Just hours after I warned Thomas Cook Airlines about <a href="/2018/07/airline-flights-leak">a massive leak of flight data</a>, <em>the Norwegian newspaper VG <a href="https://www.vg.no/nyheter/innenriks/i/yvMvxJ/fikk-logget-seg-paa-reiseselskaps-bookingsystem">reported about a person who accidentally got logged in as a booking agent on a travel agency's web site</a>. What surprised me was that the travel agency wasn't notified first and that the newspaper published the article without giving any chance to fix the issue.</em>

<h4>Who was this?</h4>The travel agency with the affected system was the Norwegian <a href="https://amisol.no">Amisol</a> (ex Pyramidene Reiser). They were using a booking system called <a href="https://www.adbutveckling.se/travelbook">TravelBook</a> from a Swedish company called <a href="https://www.adbutveckling.se/">adb utveckling</a>.

<h4>Security issue</h4><img style="float:right;width:400px;margin-right:20px;" class="materialboxed responsive-img" title="List of bookings found through a simple Google search." data-caption="List of bookings found through a simple Google search." src="/images/amisol01.png"/><img style="float:right;width:400px;margin-right:20px;margin-top:20px;clear:right;" class="materialboxed responsive-img" title="Booking details found via a simple Google search." data-caption="Booking details found via a simple Google search." src="/images/amisol02.png"/>The security issue here was <em>anyone on the Internet could log in as the booking agent</em> for the travel agency:
- The <em>username and password for the booking agent was visible</em>
- The following information about <em>travels from at least 2013 to 2018</em> was available:
<em>  - Booking number
  - Password for checking booking
  - Info about all travelers on that booking:
    - Full name
    - Birthday
    - Gender
  - Additional info about person registering the booking:
    - Customer number
    - E-mail address 
    - Phone number(s)</em>
  - Order date
<em>  - Departure:
    - Date
    - Flight number</em>
    - Airport
    - Meal
<em>  - Return:
    - Date
    - Flight number</em>
    - Airport
    - Meal
  - Info about hotel:
<em>    - Hotel name</em>
    - Room type
    - Meals
  - Excursions
  - Price
  - Amount left to pay
<em>- It seemed to be possible to change the above information and even cancel the trip
- All personal information was sent unencrypted over the Internet
- Agent username and password was sent unencrypted over the Internet
- End user username and password was sent unencrypted over the Internet</em>

<h4>Unethical disclosure</h4>The person discovering the security vulnerability was no IT person and I can kind of see how he decided to notify the newspaper after doing such a random discovery through Google. However, I cannot understand how the journalist or editor would publish the article the same day as they got the tip about the issue. The newspaper interviewed the CEO of Amisol, but they did not give them or the system vendor any time to actually look at the issue or left alone fix it.

Why is this bad? Well, <em>I read the news article shortly after it was published and I just googled for the term <i>"amisol booking"</i> and found the link with the agent login.</em> I could log in and see all the details about all the travels from at least 2013 to future ones. It would take minutes to make a script that could download all the personal data I listed and anyone could go in and do their best to ruin a future vacation.

In Norway the press have to follow the <a href="http://presse.no/pfu/etiske-regler/vaer-varsom-plakaten/vvpl-engelsk/">Ethical Code of Practice for the Press</a>. I don't know if this is a breach of the publication rule 4.3 that says <i>"Always respect a person’s character and identity, privacy, etnicity, nationality and belief."</i> But none the less, VG did indeed risk thousands of people's privacy when giving anyone the description on how to find all these personal data. I don't think that was the right thing to do.

<h4>Technical details</h4><a class="skip-link" href="#conclusion"><u>Skip this part</u> 🙈</a>
I wanted to add the technical details of this issue and what should have been in place to avoid it.

<h5>1. Enforce SSL</h5>In 2018 you cannot create a system like this that does not use https. If your old legacy system is still using http you need to upgrade. And remember to check two things:
 - <em>Ensure that if you change a <code>https</code> link to <code>http</code> it does a redirect to <code>https</code> instead of returning any content over <code>http</code>.</em>
 - <em>Check that the cookie flag <a class="code" href="https://en.wikipedia.org/wiki/HTTP_cookie#Secure_cookie">Secure</a> is used</em> (or else the browser may send things like the session cookie over http (even if you do the mentioned redirect)).

If you are in doubt if you site needs <code>https</code> or why it's a good idea in general, please check out <a href="https://www.troyhunt.com/heres-why-your-static-website-needs-https/">Troy Hunt's great article and video</a> on the subject. Also, <a href="https://www.wired.com/story/google-chrome-https-not-secure-label/">from Chrome 68 Google now labels http sites as "not secure"</a>.

It's also a good idea to use <a href="https://en.wikipedia.org/wiki/HTTP_Strict_Transport_Security">HTTP Strict Transport Security (HSTS)</a> to protect against protocol downgrade attacks.

<h5>2. Don't accept login information as query parameters</h5>This is what gave away the Amisol security vulnerabilities. <em>Because the username and password was sent as <code>GET</code> (and with no redirects) instead of <code>POST</code> - and Google somehow got hold of the URL - it was indexed and available through search.</em> Just in case it's worth testing that even though your login form is using <code>POST</code> that it does not accept the credentials in a <code>GET</code> request.

<h5>3. Avoid XSS</h5>I suppose some think of <a href="https://en.wikipedia.org/wiki/Cross-site_scripting">XSS</a> as harmless fun, but I think that's a harmful view. <em>For this site it was - and still is - possible to endanger both administrators and customers. A successful attack would make it possible to steal usernames, passwords, session cookies, personal data, and also to alter and delete data.</em>

<h5>4. Use robots.txt</h5>While some might argue that hiding stuff is <a href="https://en.wikipedia.org/wiki/Security_through_obscurity">security by obscurity</a>, it's a good practice to not let your administrator pages show up in search. It's not what anyone (except for bad guys) want to find when searching for something related to your service. <em>Just remember to not specify direct URLs to your admin stuff in <code>robots.txt</code> or else it just makes it easier to try to find any ways into your system.</em>

<h5>5. Keep your software up to date</h5>Looking at the server's response header it responded with <em><code>Server: Microsoft-IIS/6.0</code></em>. If that's right <em>that's pretty crazy. That is software from 2003 - 15 years ago.</em> <a href="https://www.cvedetails.com/vulnerability-list.php?vendor_id=26&product_id=3436&version_id=13492&order=3">The list of bugs in the CVE security vulnerability database</a> is pretty long, and I would expect that the belonging Operating System, frameworks and libraries to be of the same age.

<h5>6. Have a third party external audit</h5>The challenge with IT security is that the good guys need to find all vulnerabilities, while the bad guys only need to find one. Security is not easy, or everybody would get it right. Instead, we all get it wrong at some point to some degree. <em>IT security is not a <i>state</i>, it's a <i>process</i>.</em> Any sort of audit would surely discover the flaws in this case.

<h5>7. Bonus: Use security.txt</h5><a href="/2017/11/security-txt">I've written about <code>security.txt</code> before</a>. I would recommend everybody to include that file on their site. It can be so hard to find the right (or any) contact point at a web site. Often you have to really push through to get a customer support to deliver the right message to the right persons.

<h4 id="conclusion">Wrapping it up</h4>This security vulnerability and leak was really bad. Who knows who can have misused it for how long. I think the news article in VG qualifies as unresponsible disclosure as it gave anyone the opportunity to misuse the vulnerability. Though with no consequences for anyone we can just sit back and wait for this to happen again.
`,
                "images": ["/images/amisol01.png", "/images/amisol02.png"],
                "category":
                {
                    "title": "Security",
                    "url": "/security"
                },
                "tags": [
                    {
                        "title": "Information leak",
                        "url": "/information-leak"
                    },
                    {
                        "title": "Behind the news",
                        "url": "/behind-the-news"
                    },
                    {
                        "title": "OWASP 2017 A2",
                        "url": "/owasp-2017-a2"
                    },
                    {
                        "title": "OWASP 2017 A3",
                        "url": "/owasp-2017-a3"
                    },
                    {
                        "title": "OWASP 2017 A7",
                        "url": "/owasp-2017-a7"
                    },
                    {
                        "title": "OWASP 2017 A9",
                        "url": "/owasp-2017-a9"
                    },
                    {
                        "title": "OWASP 2017 A10",
                        "url": "/owasp-2017-a10"
                    }
                ]
            },
            {
                "title": "Case #19: Leak affecting half a million Norwegians",
                "published": true,
                "publishDate": "2018-09-03T21:40:00.000Z",
                "summary": `Looking for an easy way to find out when the garbage was being picked up ended up in discovering a data leak affecting half a million people.`,
                "niceUrl": "/2018/08/norconsult-soap-leak",
                "text": `<h4>tl;dr</h4>An app that was supposed to contain only addresses and a garbage collection calendar was actually using services that was leaking personal information like names and Social Security numbers for many, many persons.

<h4>Summary</h4><table class="summary">
<tr>
    <td style="width:30%">Who:</td>
    <td><a href="https://nois.no/">Norconsult Informasjonssystemer</a> (Nois)</td>
</tr>
<tr>
    <td style="width:30%">Severity level:</td>
    <td><span class="green-text">Low</span> to <span class="orange-text">medium</span></td>
</tr>
<tr>
    <td style="width:30%">Reported:</td>
    <td>April 2018</td>
</tr>
<tr>
    <td style="width:30%">Reception and handling:</td>
    <td>Response time good, but slow on fixing. Notification to clients was faulty.</td>
</tr>
<tr>
    <td style="width:30%">Status:</td>
    <td><span class="green-text">Fixed</span></td>
</tr>
<tr>
    <td style="width:30%">Reward:</td>
    <td>A thank you</td>
</tr>
<tr>
    <td style="width:30%">Issue:</td>
    <td>Information leak with personal data and usage data for up to 625,000 people. Data also contained waste disposal routes, sewage monitoring, and more. Likely that modification of some data was possible.</td>
</tr>
</table>
                
<h4>Background</h4><img style="float:right;width:240px;margin-left:20px;" class="materialboxed responsive-img" title="Screenshot from BIR's app." data-caption="Screenshot from BIR's app." src="/images/norconsult01-app.png"/>A friend came up with an idea of having an Alexa skill/Google Assistant app where one could ask for <i>"when will the paper garbage be picked up"</i>? He saw that the website for BIR - our local waste management company - did not provide an easy way to fetch that data. He said there also was an app with the same data. <em>Taking a look at the communication between the app and the server it quickly became clear that something was very wrong in regards of security.</em>

<h4>Approach (technical stuff)</h4><h5>The app</h5><img style="float:left;width:350px;margin-right:20px;" class="materialboxed responsive-img" title="" data-caption="." src="/images/norconsult02-charles.png"/>Using the HTTP proxy application Charles it was easy to look at the traffic between the app and server. Surprisingly the app and server actually used SOAP for communication. SOAP is pretty painful to work with and not commonly observed in the world of apps (though it was used for <a href="/2017/08/get-your-ssn-here">the case with Tryg and Infotorg</a>).
                
<em>All the SOAP calls used the same simple username and password and all data was transferred unencrypted over HTTP.</em>

Surprisingly, doing a search for a street name actually returned a list of properties including the full name of the owner.

Then, when selecting a property in the app there was a call getting more details about it. Even though the app did not show the data, the server response returned <em>full name, address and Social Security number of the property owner</em>.

<h5>SOAP service with the full access</h5><table><tr style="border: 1px solid;"><td>SOAP and related concepts</td></tr><tr style="border: 1px solid;"><td>SOAP is a XML based messaging protocol. It can be used over HTTP, as in this case, or other protocols like JMS and SMTP. A SOAP server contains a lot over SOAP services. These are described in a WSDL file. With the WSDL (and corresponding XSDs) one can generate strongly typed classes for all endpoints that are easy to use. The WSDL/XSD files can contain comments that describe the parameters and possible values. This was not the case here. Using SoapUI or similar tool, one can easily execute different parameters for each service. SoapUI is like Swagger or Postman for REST.</td></tr></table>
The WSDL file for the service was accessible without any authentication or IP check. This means that all services that was available was listed with their parameters/definitions. Bringing up SoapUI from back in the days, we were able to create requests to services we did not know about from the app.

Using the username and password that was found in the app, we could do queries to the SOAP service. As we did not know the input values, some services was hard to use. 

<h5>The system overview page</h5><img style="float:left;width:400px;margin-right:20px;" class="materialboxed responsive-img" title="" data-caption="." src="/images/norconsult03-status_page.png"/><a href="https://play.google.com/store/apps/developer?id=Norconsult+Informasjonssystemer+AS">Nois has published quite a few apps</a>, and one of the calls that the app made was one to get the configuration of these apps. <em>Looking at the root of this URL revealed a public facing status page with URLs to many of Nois' web services. This page was even indexed by Google. The URLs gave out WSDL files for all services available.</em>

Based on the copyright statements on the page and source code it looked like the system overview page was last maintained in 2012.
<br style="clear:left;"/>
<h5>Many more SOAP services</h5>After dedusting SoapUI, we explored some of the "<code>GetXYZ</code>" services. We were able to get successful response on a subset of the once we tried. Main reason for failed requests was lack of examples of the input parameters. We did not try any write operations.

<h6>Example - <code>GetRecycleStations</code> (BIR AS)</h6>
<img  class="materialboxed responsive-img" title="" data-caption="." src="/images/norconsult07.png"/>
A SOAP service that might be called by a web page or app. Data we should have access to, in some way.
  
<h6>Example - <code>GetKommune</code> (<code>GetMunicipalities</code>) - Envina</h6>
<img  class="materialboxed responsive-img" title="" data-caption="." src="/images/norconsult06.png"/>
This service told which municipalities was available on the given server. We used it to create the below table of affected municipalities.
  
<h6>Example - <code>GetWaterGaugePoints</code> - Sandnes kommune</h6>
<img  class="materialboxed responsive-img" title="" data-caption="." src="/images/norconsult09.png"/>
Some municipalities like Sandnes are billing water based on usage. This endpoint returns information about where a water gauge is located and what the last measurements were.
  
<h6>Example - <code>SearchPropertiesWithPrincipalsAndZipCodes</code> - BIR AS</h6>
<img  class="materialboxed responsive-img" title="" data-caption="." src="/images/norconsult08.png"/>
Some services provided a search for customers. It should make it easy to get hold of all the customers.

<h4>Data available</h4>Based on the list of SOAP services available, we figure the following data is available within the systems (given that they use that part of the system):

 - <em>Register of persons including Social Security number (used as customer id), name, address, e-mail, phone number, fax number, notes</em>, created time, last changed, etc.
 - Register of companies with the same data. Customer id is organization number.
 - Who owns a property. Who is paying for waste disposal/water/etc.
 - <em>Who made changes (e.g. municipal employee, customer via Internet) and their IP address.</em>
 - <em>Invoices including the contents of the invoice.</em>
 - <em>Invoices not paid in time.</em>
 - Pick up spots for waste. Driving routes, work orders, etc.
 - <em>Water gauge usage data</em> including description on where you can find it, history (timestamps, amount of water, measurement type, who did the reading).
 - Register of both internal users and external users.

<h4>Verification</h4>We created a list of servers we found on the system overview page. We also manage to find some using search engine (Googling for phrases from the application). From the overview page we identified some of the owners and it was also clear that some servers were offline.

To exclude those that were not affected by this huge security flaw, <em>we verified each and every server</em>. Mainly <em>two SOAP services were called</em>, one that returned all municipalities on that server and one with the <em>latest changes in customer data</em>. The service with customer data revealed that our user (<code>nois/nois</code>) had <em>access to customer data</em> on that particular server AND that the server was currently being used (somebody edited some customer in the past week/month or so).

The servers were verified manually using SoapUI and we took screenshots as proof. The screenshots were edited to censor any personal data (we don't want to have that saved).

A few servers on the overview page did not work even if they showed status “green". One example of this is Gjesdal kommune. According to the overview page, the service was running but we could not reach it. This could be that they had firewalls that blocked our HTTP requests.

The owners were either a municipality or a cooperation of municipalities (Norwegian: IKS - interkommunalt selskap). 

<table style="font-size:75%;" class="striped"><tr>
<th style="width:25%;">Municipality / company</th>
<th style="width:25%;">Municipalities</th>
<th style="width:25%;">Inhabitants</th>
<th style="width:25%;">Screenshot</th>
</tr>
<tr>
<td>Avfall Sør AS</td>
<td>Kristiansand, Songdalen, Søgne, Vennesla</td>
<td>120,403
Customer estimate: 45-65,000</td>
<td><img class="materialboxed responsive-img" title="" data-caption="" src="/images/norconsult-verification-GetPAContractsChangedDate-AvfallSor.png"/></td>
</tr>
<tr>
<td>Remiks</td>
<td>Tromsø, Karlsøy</td>
<td>76,814
Customer estimate: 30-40,000</td>
<td><img class="materialboxed responsive-img" title="" data-caption="" src="/images/norconsult-verification-GetPAContractsChangedDate-Remiks.png"/></td>
</tr>
<tr>
<td>Regiondata</td>
<td>Dovre, Lesja, Sel, Vågå</td>
<td>14,820
Customer estimate: 5-8,000</td>
<td><img class="materialboxed responsive-img" title="" data-caption="" src="/images/norconsult-verification-GetPAContractsChangedDate-Regiondata.png"/></td>
</tr>
<tr>
<td>Haugaland Interkommunale Miljøverk (HIM)</td>
<td>Haugesund, Bokn, Tysvær, Vindafjord, Etne</td>
<td>62,026
Customers: <a href="https://2017.him.as/">33,052</a></td>
<td><img class="materialboxed responsive-img" title="" data-caption="" src="/images/norconsult-verification-GetPAContractsChangedDate-HaugesundIM.png"/></td>
</tr>
<tr>
<td>Shmil</td>
<td>Hemnes

* Server is responding with "Hemnes kommune", Shmil also responsible for Alstahaug, Brønnøy, Dønna, Grane, Hattfjelldal, Herøy, Leirfjord, Sømna, Vefsn, Vega, Vevelstad. Only Hemnes counted.</td>
<td>4,524
Customer estimate: 2,000</td>
<td><img class="materialboxed responsive-img" title="" data-caption="" src="/images/norconsult-verification-GetPAContractsChangedDate-Shmil.png"/></td>
</tr>
<tr>
<td>Retura Val-Hall AS / Hallingdal renovasjon / Valdres Kommunale renovasjon</td>
<td>Hol, Ål, Gol, Hemsedal, Nesbyen, Flå, Krødsherad, Nord-Aurdal, Sør-Aurdal, Øystre Slidre, Vestre Slidre, Etnedal, Vang

* Server is also responding with Gjøvik, Søndre Land and Sigdal. These are not counted.</td>
<td>40,915
Customer estimate: 15-22,000</td>
<td><img class="materialboxed responsive-img" title="" data-caption="" src="/images/norconsult-verification-GetPAContractsChangedDate-HallingdalValdres.png"/></td>
</tr>
<tr> 
<td>BIR AS</td>
<td>Askøy, Bergen, Fusa, Kvam, Os, Osterøy, Samnanger, Sund, Vaksdal</td>
<td>359,364
Customer estimate: 140-190,000</td>
<td><img class="materialboxed responsive-img" title="" data-caption="" src="/images/norconsult-verification-GetPACustomers-Bir.png"/></td>
</tr>
<tr>
<td>Innherred Renovasjon</td>
<td>Selbu, Malvik, Meråker, Stjørdal, Frosta, Levanger, Verdal, Inderøy, Leksvik

* Server is also responding with Moss, Oslo, Tolga, Bergen, Sula, Trondheim, Rissa, Bjugn, Orkdal, Melhus, Tydal, Steinkjer, Verran, Høylandet, Overhalla, Flatanger, Nærøy, Vefsn, Tydal, Indre Fosen, Innherred. These are not counted in the number of inhabitants.</td>
<td>92,563
Customers: 35,671</td>
<td><img class="materialboxed responsive-img" title="" data-caption="" src="/images/norconsult-verification-GetPAContractsChangedDate-Innherred.png"/></td>
</tr>
<tr>
<td>Hamos Forvaltning IKS</td>
<td>Hemne, Agdenes, Meldal, Orkdal, Snillfjord, Skaun, Rindal, Hitra, Frøya, Rennebu, Surnadal</td>
<td>50,967
Customer estimate: 20-27,000</td>
<td><img class="materialboxed responsive-img" title="" data-caption="" src="/images/norconsult-verification-GetPAContractsChangedDate-Hamos.png"/></td>
</tr>
<tr>
<td>Stavanger kommune (own server)</td>
<td>Stavanger

* Server also responded with Sandnes, Hå, Klepp, Time, Gjesdal, Sola, Randaberg, Finnøy after we notified Nois about the issue. Not counted.</td>
<td>132,729
Customer estimate: 50-70,000</td>
<td><img class="materialboxed responsive-img" title="" data-caption="" src="/images/norconsult-verification-GetPAContractsChangedDate-Stavanger.png"/></td>
</tr>
<tr>
<td>Sandnes kommune (own server)</td>
<td>Sandnes</td>
<td>76,328
Customer estimate: 30-40,000</td>
<td><img class="materialboxed responsive-img" title="" data-caption="" src="/images/norconsult-verification-GetPAContractsChangedDate-Sandnes.png"/></td>
</tr>
<tr>
<td>Nordfjord Miljøverk IKS (NoMil)</td>
<td>Bremanger, Vågsøy, Selje, Eid, Hornindal, Gloppen, Stryn</td>
<td>32,932
Customer estimate: 12-18,000</td>
<td><img class="materialboxed responsive-img" title="" data-caption="" src="/images/norconsult-verification-GetPAContractsChangedDate-Nomil.png"/></td>
</tr>
<tr>
<td>Envina IKS</td>
<td>Klæbu, Melhus, Midtre Gauldal

* Server also responded with Meldal, Holtålen, Soknedal, Skaun. Not counted.</td>
<td>28,582
Customer estimate: 10-15,000</td>
<td><img class="materialboxed responsive-img" title="" data-caption="" src="/images/norconsult-verification-GetPAContractsChangedDate-Envina.png"/></td>
</tr>
<tr>
<td>Movar (Mosseregionen Vann, Avløp og Renovasjon)</td>
<td>Moss, Rygge, Råde, Vestby, Våler</td>
<td>76,391
Customer estimate: 30-40,000</td>
<td><img class="materialboxed responsive-img" title="" data-caption="" src="/images/norconsult-verification-GetPAContractsChangedDate-Movar.png"/></td>
</tr>
</table>    
<em>Total number of inhabitants in the municipalities: 1,169,358</em>

It was hard to find good numbers of the amount of customers that are in the databases of the different municipalities. Innherred Renovasjon and Haugaland Interkommunale Miljøverk did have numbers on customers (Innherred)/waste disposal customers (HIM). They were respectively 2.6 inhabitants per customer and 1.87 inhabitant per customer. Based on those numbers <em>we estimate 450,000 to 625,000 private persons possibly exposed with full name, address, Social Security number, contact information, etc.</em>

<h4>Data from one municipal spans the whole country and more</h5>Since people owns properties across the country, we checked one of the response (Regiondata) to check if that was true. An example is owning a cabin in Dovre kommune and paying the municipal a fee for waste disposal. This is mandatory and not possible to opt out of.

<b>Some ZIP codes from a <code>GetEiendom</code> request to the server <code>Regiondata</code>:</b>
 - 0274 Oslo
 - 0378 Oslo
 - 0382 Oslo
 - 0465 Oslo
 - 0594 Oslo
 - 0775 Oslo
 - 1348 Rykkinn, Bærum kommune
 - 1363 Høvik, Bærum kommune
 - 1407 Vinterbro, Ås kommune
 - 1555 Son, Vestby kommune
 - 1816 Skiptvet
 - 2013 Skjetten, Skedsmo kommune
 - 2056 Algarheim, Ullensaker kommune
 - 2319 Hamar
 - 2322 Ridabu, Hamar kommune
 - 2615 Lillehammer
 - 2624 Lillehammer
 - 2663 Dovreskogen, Dovre kommune
 - 2670 Otta, Sel kommune
 - 2672 Sel
 - 2675 Otta, Sel kommune
 - 2676 Heidal, Sel kommune
 - 2677 Nedre Heidal, Sel kommune
 - 2682 Lalm, Vågå kommune
 - 2816 Gjøvik
 - 6040 Vigra, Giske kommune (Møre og Romsdal)
 - Danmark
 - Sweden

This is not a complete list. We manually picked out some from the response in SoapUI to get a feeling for the data set.

<h5>ISY ProActive servers with no/minor issues found</h5>
<b>Municipalities listed, but with a different service exposed:</b>
 - Dalane Miljøverk IKS, DIM (Eigersund, Sokndal, Bjerkreim)
 - Ryfylke Miljøverk IKS, Rymi (Forsand, Finnøy, Strand, Hjelmeland, Suldal)
 - Hadeland og Ringerike Avfallsselskap AS, HRA (Gran, Lunner og Jevnaker)
 - Indre Hordaland Miljøverk, IHM (Eidfjord, Granvin, Jondal, Ullensvang, Ulvik, Voss)
 - Iris Salten

We did not have a username/password that worked for this service. It doesn't seem wise to have these on the Internet. They should all add a firewall blocking access.

<b>Municipalities listed, where our requests did not work:</b>
 - Agder Renovasjon IKS (Arendal, Froland og Grimstad)
 - Hå kommune
 - Steinkjær kommune
 - Sykkylven Energi
 - Ålesund kommune

We believe we shouldn't have been able to reach the servers of these municipalities. It doesn't seem wise to have these on the Internet. They probably should all add a firewall blocking access.

<b>Municipalities listed where firewall blocked our request:</b>
 - Gjesdal kommune
 - Fet kommune
 - Skaun kommune
 - Mandal kommune
 - Kristiansund kommune

We consider all these secure.

<h4>Reception and handling</h4><h5>Day zero</h5>Sunday night we sent an e-mail to the director of Nois and the head of department of the department responsible for the software in question.

A few hours later we got a pretty cold <i>"We confirm that the e-mail has been received."</i> back.

<h5>Day 1</h5>Just before midnight we sent an e-mail with some questions and information about another 7 municipalities affected by the issue.

<h5>Day 5</h5>Not having heard back we sent a new e-mail asking for a status.

We soon got a response telling that they had established a working group for the issue. They had fixed a couple of the issues and they had informed the The Norwegian Data Protection Authority (Datatilsynet) and the municipalities in question.

We used the freedom of information law to get a hold of the alerts and communication with the municipalities. The alert was a letter sent on day 5.

<img style="float:right;width:300px;margin-left:20px;" class="materialboxed responsive-img" title="" data-caption="" src="/images/norconsult10.png"/>In addition to general information, this is was what the letter told:
<i>"It has been discovered that it is technically possible for 3rd party to extract information from this service if you have the deep technical insight required. </i><em><i>It is important to emphasize that this has not happened, but that we have implemented preventive measures.</i></em><i>"</i>
They also said a new version would be rolled out during the next days.

 - BIR: Alerted by letter. ISY ProAktiv Mobil Tømmeplan affected.
   - No further follow up by BIR. They thougth the letter was clear and that no data was leaked.
   - Server was accessible about 2 months after the letter was sent.
 - Stavanger kommune: Alerted by letter. Same as BIR but with ISY ProAktiv WebPortal also affected. Was also told to add firewall in front of the service.

<h5>Day 55</h5>We saw that the issue still was open for many of the municipalities and asked for an ETA of a fix.

<h5>Day 58</h5>Tuesday morning Nois said they expected everything to be OK by the end of the week.

<h5>Day 61</h5>Friday night we asked if really was the case that everything was fixed.

We got a reply that they would work through the weekend to get it fixed.

<h5>Day 65</h5>We informed that not everything was fixed yet. We sent an example query that returned a <em>list of 1208 customers that had changed the last couple of months. The details returned from server included full name, social security number, property identifier and lots of other fields.</em>

Nois told they were working on getting access to the necessary serves to fix it.

<em>In the afternoon we got another response telling us that everything should be OK and they thanked us for informing them about it.

We replied that we still were getting personal data from one of their services.

They looked into the issue and they thought it could have been a service being restarted by an automatic scheduled job...</em>

<h5>Day 66</h5><em>We got another e-mail telling us that they had even more services automatically restarting during the night.</em>

<h5>Day 112</h5><em>We noticed that a service was back up running, and it returned information about more than 6,000 persons.</em>

<h5>Day 113</h5>The day after, a Sunday, we got a response that they would contact the customer the day after to make sure it was fixed.

<h5>Day 114</h5>We got another response that the service in question now was removed.

<h4>Inaccurate report to the Data Protection Authority</h4>We reported the incident to The Norwegian Data Protection Authority (DPA). After Nois gave their version of it, the DPA closed the case and said they were satisfied by the countermeasures implemented by Nois. <em>We believe the report sent from Nois to the DPA to be inaccurate.</em>

<em>Nois claimed that it was not possible to get lists (supposedly one would have to ask for one at the time) of Social Security numbers or of properties that had not made their payments.</em> Several services returned lists of SSN/customers/properties. (Property addresses are anyways public knowledge and one could easily just as for each property, one by one.)

<em>Nois claimed that the issue was caused by a "technical failure".</em> Not using encryption on any of their services, using both username and password "<code>nois</code>" and returning Social Security numbers when asking for which days the garbage is picked up is not a technical failure. The cause is ignorance by developers and lack of knowledge by any managers above them. Quite a few people must have been aware of this.

<em>Nois claimed that the "deviation" was open from January 31st 2018 until April 16th 2018.</em> The issue was not closed until the later part of June 2018 and start of August 2018 - and not at all when the report to the DPA was sent. While we discovered this mid April, Nois published BIR's "garbage collection calendar" app in August 2017. Looking at that exact version of the app reveals that the same services without encryption, with the same login and the fields for Social Security numbers, names and addresses were being used. <em>Looking at Innherred Renovasjon's app we found the same to be true in a version released in October 2015.</em> We don't understand why they would specify January 31st 2018 as the start date. If they will want to claim this, they should provide some evidence for the date being January 31st.

<em>Nois claims that no personal information was leaked when looking at the logs.</em> This claim is a bit hard to understand as Nois did not have operational responsibility of many of the servers and they have had a hard time getting access to the servers to do updates. At the time of the report they had not closed the issue on all servers. Also, as mentioned, the issue was seemingly open for much longer than they claim. And finally, <em>the services were indeed leaking personal information for every request being made.</em> It's impossible to know if a request came from the "garbage collection calendar" apps or from someone faking it and looking up a person's Social Security number. And for how long do they have logs for?

<h4>Timeline of fixed services</h4>During the period from we notified the vendor to the time it was fixed, we monitored the servers from time to time using a small script. The monitoring was done by calling one of the SOAP services. We choose the <code>GetMunicipalities</code> (Norwegian: <code>GetKommune</code>) as this did not contain the personal information, required authentication and returned some data.

The smilies and colors below indicate if the service responded or not. There are two versions of this data set, one with just the days we tested and one with empty cells for days we did not test.

<img class="materialboxed responsive-img" title="" data-caption="." src="/images/norconsult05.png"/>
<img class="materialboxed responsive-img" title="" data-caption="." src="/images/norconsult04.png"/>
  
<h4>Media</h4>We sent this security issue out to the local media since there was 14 different corporations/municipalities involved. The main take away from it is that information security is higher on the agenda for a lot of these. We also got to know that the corporations (customers of Nois) did not view this as a security issue/breach of personal data. Norwegian headlines translated below.
 - Remiks:
   - iTromsø - <a href="https://www.itromso.no/pluss/2018/08/28/Avsl%C3%B8rte-sikkerhetshull-30,000-40,000-Remiks-kunders-personnummer-l%C3%A5-tilgjengelig-p%C3%A5-nettet-17415170.ece">"Disclosed security hole: 30,000-40,000 Remiks customers social security numbers available online"</a>
 - Haugaland Interkommunale Miljøverk (HIM):
   - Haugesunds Avis - <a href="https://www.h-avis.no/nyheter/haugaland-interkommunale-miljoverk-him/soppel/oppdaget-lekkasje-i-informasjonssikkerheten-hos-him/s/5-62-675393">"Discovered leakage in information security at HIM"</a>
 - Hallingdal renovasjon / Retura Val-Hall AS / Valdres Kommunale renovasjon:
   - Hallingdølen
     - <a href="http://www.hallingdolen.no/nyheiter/svikt-i-datatryggleiken-personnummer-lag-opne-1.2477740">"Data security failure: Social security number in the open"</a>
     - <a href="http://www.hallingdolen.no/nyheiter/norconsult-avviser-at-data-har-kome-pa-avvege-1.2478350 ">"Norconsult denies data being in the wrong hands."</a>
     - <a href="http://www.hallingdolen.no/nyheiter/fullt-mogleg-a-prove-a-narre-datatilsynet-1.2480118">"-Possible to fool the DPA"</a>
   - Avisa Valdres - <a href="https://www.avisa-valdres.no/teknologi/datasikkerhet/it/avdekket-svakhet-i-systemene-til-interkommunale-renovasjonsselskap/s/5-54-250962">"Detected weakness in the systems of renovation company"</a>
- BIR:
  - Bergens Tidende - <a href="https://www.bt.no/nyheter/lokalt/i/zLjq5w/Avslorte-sikkerhetshull-Personnummer-til-bosskunder-la-tilgjengelig-pa-nett-i-maneder">"Disclosed security hole - Social security number of waste customers available online for months"</a>
- Innherred Renovasjon:
   - Innherred - <a href="https://www.innherred.no/nyheter/2018/08/27/Kundenes-personnummer-l%C3%A5-tilgjengelig-17407631.ece">"Customers social security number available"</a> 
- Sandnes kommune, Stavanger kommune:
   - Stavanger Aftenblad - <a href="https://www.aftenbladet.no/lokalt/i/Qlkvr8/Avslorte-datasvikt-i-Sandnes-og-Stavanger">"Disclosed security issue in Sandnes and Stavanger"</a>

digi.no wrote a summary on a national level: <a href="https://www.digi.no/artikler/renovasjonsforetak-i-mange-norske-kommuner-lekket-personopplysninger/444627">"Renovation companies in many Norwegian municipalities leak personal data"</a>

No media reported on these:
- Avfall Sør AS
- Movar
- Regiondata
- Shmil
- Hamos Forvaltning IKS
- Nordfjord Miljøverk IKS (Nomil)
- Envina IKS

<h4>Questions we still have</h4>What is clear is that the municipality is responsible for the protection of the personal data they have. They are responsible for their database. It seems like Nois have full access to the system for upgrades and checking logs. <em>We still wonder about who is responsible for the running of the systems.</em> Who is responsible for not changing default configuration (default username and password with full access)? Who is responsible for not configuring the firewalls? Who is responsible for building apps on top of SOAP and using a user with full access for the communications?
 
After the media asked the municipalities responsible for the personal data and after we got to see the letter from Nois notifying their customer about the security issue, most of them did not react to this as a system leaking information. <em>Why did Nois send such a vague letter to the customers and DPA (Datatilsynet)?</em>

Nois claimed they checked the logs and that no data was actually leaked. They also claim the security issue was just present for 4 months. <em>How was the access logs checked? Did they check back in time to at least 2015? Where is the report to their customers about this?</em>

<h4>Conclusion</h4>Who checks the security of an app that doesn't contain a login or any personal data at all? No one, because it just doesn't make sense to do that. It was just a coincidence that we discovered this one.

What sticks out in the end for us is that the reception and handling of the issue wasn't very good. Usually IT companies responds more quickly and are more open about the issue and handling of it. Here the customers got a vague description not telling much about what was going on.

It would be interesting to know if anyone really digged into how long the data was available for, because it seems like they have been there for quite a few years.

Finally, if you as a developer are told to use a service that returns much more data than what's intended to be used, <b>you should speak up</b>. Quite a few people have known about these personal data being transferred unencrypted over the wire.
`,
                "hot": false,
                "author": "Hallvard Nygård & Roy Solberg",
                "images": ["/images/norconsult00-preview.png"],
                "category":
                {
                    "title": "Security",
                    "url": "/security"
                },
                "tags": [
                    {
                        "title": "Security Monday",
                        "url": "/security-monday"
                    },
                    {
                        "title": "Information leak",
                        "url": "/information-leak"
                    },
                    {
                        "title": "Social Security numbers",
                        "url": "/ssn"
                    },
                    {
                        "title": "OWASP 2013 A2",
                        "url": "/owasp-2013-a2"
                    },
                    {
                        "title": "OWASP 2013 A3",
                        "url": "/owasp-2013-a3"
                    },
                    {
                        "title": "OWASP 2013 A6",
                        "url": "/owasp-2013-a6"
                    },
                    {
                        "title": "OWASP 2013 A10",
                        "url": "/owasp-2013-a10"
                    }
                ]
            },
            {
                "title": "Behind the news: Authentication gone wrong",
                "published": true,
                "publishDate": "2018-09-10T04:55:00.000Z",
                "summary": `Personal - and in some cases sensitive - information about 63,000 students could be accessed. Here are the details that the newspaper article did not give.`,
                "niceUrl": "/2018/09/osloskolen-leak",
                "text": `<h4>Background</h4><img style="float:left;width:180px;margin-right:20px;" class="materialboxed responsive-img" title="Screenshot of the app from Play Store." data-caption="Screenshot of the app from Play Store." src="/images/skolemelding03.png"/>I got in contact with a parent concerned about the security in a <a href="https://aktuelt.osloskolen.no/larerik-bruk-av-laringsteknologi/digital-skolehverdag/skolemelding/">new messaging app used for communication between pupils, teachers and parents</a> (Norwegian link) in the schools of <a href="https://www.oslo.kommune.no/">Oslo</a>. The app - which is called <i>Skolemelding</i> - was released this summer and is developed by <a href="https://www.cginorge.no/">CGI Norge</a>. Unfortunately the concerns turned out to be justified. <em>Please note that I was not the one to discover any of these issues.</em>

The Norwegian newspaper Aftenposten <a href="https://www.aftenposten.no/osloby/i/G1L3oQ/Alvorlig-sikkerhetshull-Private-meldinger-om-elevene-i-Oslo-skolen-la-tilgjengelige-pa-nettet">broke the news about the vulnerabilities September 6th</a> (<a href="https://www.aftenposten.no/norge/politikk/i/jPElAw/Private-meldinger-om-elever-var-pa-avveie-i-Oslo-skolen---Tenker-det-er-trygt-med-MinID">follow-up article</a>) and the system was temporarily shut down.
<br style="clear:left;"/><h4>Security issues</h4>The security vulnerabilities were really bad. The system is designed for sending messages between school and home, including messages related to student absence. According to Norwegian law health information is regarded as sensitive personal information, and therefore I would assume that the system should be designed with the appropriate security level to prevent unauthorized access.

<em>Anyone with either a valid login or anyone who got hold of a guardian's <a href="https://en.wikipedia.org/wiki/National_identification_number#Norway">Social Security number</a> could access any and all messages across all 63,000 pupils + guardians and teachers.</em> This includes not only communication between guardians and school, but also communication between teachers was accessible through these vulnerabilities.

<em>Anyone who got hold of a guardian's Social Security number could access details about a pupil's family (full names, Social Security Numbers, usernames, e-mail addresses, phone numbers) (in addition to the guardian's messages).</em> I have published <a href="/tag/ssn">a couple of cases</a> where one easily could get a specific person's Social Security number.

<h4>Technical details</h4><a class="skip-link" href="#responsible_disclosure"><u>Skip this part</u> 🙈</a>
<h5>The apps</h5>There are two apps - one for parents and one for teachers + students. Looking at <a href="https://play.google.com/store/apps/developer?id=Osloskolen">the Android apps</a> they are pretty much the same app with just <a href="https://developer.android.com/studio/build/build-variants#product-flavors">different build variant (flavors)</a>. Parents use a different login than the teachers and students.

The apps are built using <a href="https://en.wikipedia.org/wiki/React_(JavaScript_library)#React_Native">React Native</a> with all the functionality bundled in a JavaScript file. Seemingly you get the same functionality by logging in on the web as in the apps.

<h5>Reading anyone's messages</h5>To fetch a message the app calls <code>/api/message/GetMessageWithId?messageId=[ID1]&threadId=[ID2]&isReplyAllowed=[true|false]&onBehalfOf=[pupil's username]</code>.

<em>This is where we find the first failure. The server did not do an authorization check on the <code>messageId</code> and therefore let one read any other message in the system. And to make this a huge problem; the IDs were a sequential number that let one go through all messages available.</em>

<h5>Log in as someone else</h5><img style="float:left;width:400px;margin-right:20px;" class="materialboxed responsive-img" title="&quot;I promise, authentication is done and I'm the user with this SSN!&quot;" data-caption="&quot;I promise, authentication is done and I'm the user with this SSN!&quot;" src="/images/skolemelding01.png"/>The parent/guardian version of the app uses a common log-in solution by the Agency for Public Management and eGovernment (Difi) called <a href="https://eid.difi.no/en/id-porten">ID-porten</a>. The teacher + student version of the app uses a log-in solution called <a href="https://www.feide.no/introducing-feide">Feide</a> - a pretty common solution among schools. <em>It's important to emphasize that there were no weaknesses in these two solutions in this case. However, the usage and implementation in the apps was horrible.</em>

In the parent version of the app, when pressing the <i>Log in</i> button, the user is taken through the log-in flow of ID-porten as expected. However, <em>there was a big flaw in the logic of the authentication server (called midporten) used by this system. The "token" returned from that server was just the user ID - the parent's Social Security number. One could intercept the call at this stage and replace the user ID/SSN with another one and get full access.</em>

<h5>Log in by just skipping the authentication system</h5>Reading the last sentence you might ask what the client really did with the user ID. Well, <em>the client sent the user's SSN to the school portal (the app's API) to generate an access token. This means that it was possible to just skip the whole flow of midporten and ID-porten and just ask the app's backend to get an access token for any valid user ID. Wow.</em>

So the flow was like this (with optional faking of user ID in either step 5 or 6):<pre class="prettyprint lang-html">
1. Tell midporten you want to log in 
2. Tell ID-porten which electronic id you want to use
3. Do the log-in process with ID-porten
4. Get authentication response from ID-porten and forward to midporten
5. Tell midporten which user ID/SSN just logged in
6. Tell app's API which user ID/SSN you want to log in as and get an access token for</pre>
<h5>LDAP to the people</h5><img style="float:left;width:400px;margin-right:20px;" class="materialboxed responsive-img" title="LDAP test data bundled in the app." data-caption="LDAP test data bundled in the app." src="/images/skolemelding02.png"/>While not a direct flaw, it is interesting to look at the structure of the data from the server. There's a call going to <code>/api/settings</code> which returns information about the logged in user and the belonging student(s). <em>The JSON returned is actually <a href="https://en.wikipedia.org/wiki/Lightweight_Directory_Access_Protocol">LDAP</a> data. And it contains full names, usernames, e-mails, Social Security numbers, possibly phone numbers of guardians and belonging student(s). It looks like a dump of the LDAP. Why would one need this information in the app? And why are Social Security numbers stored in a way like this in a directory where an app has access?</em> We're talking about hundreds - maybe thousands - of lines of LDAP data.
<br style="clear:left;"/><h5>Is that a good fix?</h5><img style="float:left;width:400px;margin-right:20px;" class="materialboxed responsive-img" title="Screenshot showing the log-in flow and how the JWT is sent back with lower case." data-caption="Screenshot showing the log-in flow and how the JWT is sent back with lower case." src="/images/skolemelding04.png"/>The fix for the login vulnerability was - instead of sending the user ID to generate the access token - to send a <a href="https://en.wikipedia.org/wiki/JSON_Web_Token">JSON Web Token</a> (JWT). The JWT does not contain any user information, meaning that it has be checked on the server side to see which user is asking for an access token.

<em>What is surprising is that the JWT does not contain some internal user ID (like a <a href="https://en.wikipedia.org/wiki/Universally_unique_identifier">UUID</a>), but rather a timestamp. And the JWT cannot actually be verified on the backend (other than string comparison) as it is sent back as lower-case.</em>

What happens if two users log in at the exact same time? Is it possible that the timestamps (and therefore JWT) can end up being the same? Would one user get access to the other?

<h5>Could there be more?</h5>With these vulnerabilities you can start to wonder if there are other problems here. I have not tested any of these things, but it is something for the vendor to look into.

<h6>Injection?</h6>It looks like the messages in the app support HTML markup. Does the server and clients handle data escaping properly?

<h6>File storage</h6>It's interesting to take a look at the file names and directory structure of the server. It really makes you wonder if there could be weaknesses and vulnerabilities related to naming of files.

<h6>Logs with SSN?</h6>Some of the requests contained Social Security numbers in the query parameters. This means that there probably are logs with many SSN. Is this okay?

<h4 id="responsible_disclosure">Responsible disclosure?</h4>I understand how Aftenposten wanted to get out the news about this as fast as they could. And they did indeed warn the City of Oslo before publishing it to give them a heads-up and chance to shut down the system. They only right thing to do here was to shut down the system immediately as someone might soon find the issues or maybe already was abusing them. So this wasn't too bad, but I would have liked to see CGI Norge and the City of Oslo get some more time to look at the issues and confirm that they had fixed them before publishing the article.

<h4>Conclusion</h4>It's easy to make mistakes when programming, and not all programmers will have a good enough understanding of security (though I think we should try to improve this!). <em>What really sticks out here is how both CGI Norge and the City of Oslo could release a product like this without testing the security.</em> I do not believe this is a case where a <a href="https://en.wikipedia.org/wiki/Penetration_test">pen tester</a> overlooked something. This must be a case where there has been no external testing of the system. And that's a shame.
`,
                "images": ["/images/skolemelding04.png"],
                "category":
                {
                    "title": "Security",
                    "url": "/security"
                },
                "tags": [
                    {
                        "title": "Information leak",
                        "url": "/information-leak"
                    },
                    {
                        "title": "Social Security numbers",
                        "url": "/ssn"
                    },
                    {
                        "title": "Behind the news",
                        "url": "/behind-the-news"
                    },
                    {
                        "title": "OWASP 2013 A2",
                        "url": "/owasp-2013-a2"
                    },
                    {
                        "title": "OWASP 2013 A3",
                        "url": "/owasp-2013-a3"
                    },
                    {
                        "title": "OWASP 2013 A5",
                        "url": "/owasp-2013-a5"
                    }
                ]
            },
            {
                "title": "885,086 customer records exposed in search engine",
                "published": true,
                "publishDate": "2018-09-24T19:20:00.000Z",
                "author": "Hallvard Nygård",
                "summary": `<i>Guest blog post by <a href="https://twitter.com/hallny">Hallvard Nygård (@hallny)</a></i>`,
                "niceUrl": "/2018/09/postnord-leak-2",
                "text": `<h4>tl;dr</h4>PostNord put all customers (name, phone and address) into a search database that was publicly available (known API key and referer). The database was used for easy selection of name and address when returning items. It was possible to opt out (mark address as secret). The customers had to register on the PostNord site, but was not told that the address would be publicly available. Previously PostNord had a dark UX pattern that tricked users into registering when they really wanted to track their package.
                
<table class="summary">
<tbody><tr>
    <td style="width:30%">Who:</td>
    <td><a href="https://www.postnord.no/en">PostNord</a>. Also reported to <a href="https://www.netonnet.no/">NetOnNet</a>.</td>
</tr>
<tr>
    <td style="width:30%">Severity level:</td>
    <td><span class="green-text">Low</span></td>
</tr>
<tr>
    <td style="width:30%">Reported:</td>
    <td>September 2018</td>
</tr>
<tr>
    <td style="width:30%">Reception and handling:</td>
    <td><span class="green-text">Good</span></td>
</tr>
<tr>
    <td style="width:30%">Status:</td>
    <td><span class="green-text">Fixed</span></td>
</tr>
<tr>
    <td style="width:30%">Reward:</td>
    <td>No reward. Thanks for the feedback.</td>
</tr>
<tr>
    <td style="width:30%">Issue:</td>
    <td>The return package to web shop had a inline search field where you could search for name, address and phone for registered PostNord customers. Easy to download the whole database.</td>
</tr>
</tbody></table>
<h4>Background</h4><img style="float:left;width:50%;margin-right:20px;margin-bottom:20px;" class="materialboxed responsive-img" title="" data-caption="" src="/images/postnord12-return_page.png"/><img style="float:left;width:50%;margin-right:20px;margin-bottom:20px;" class="materialboxed responsive-img" title="" data-caption="" src="/images/postnord10-fuzzy_search.png"/>A friend of mine - <a href="https://tkalve.no/">Thomas Kalve</a> -  sent me a tip about a interesting fuzzy search when trying to return a package to the online shop NetOnNet. When entering a phone number it was searching for a match and was also showing close matches. Not knowing that he had signed up for this search service, he sent me a tip.

The "return to web shop" page was backed by a search <b>database containing 885,086 customer records</b>. It used the search service Algolia which is a "search as a service" (SaaS) that is mainly branded towards product search. PostNord had added all customers to this search engine and made them searchable. It was possible opt out of this use of personal data.

PostNord told me they had 1.1 million users. I found 885,086 customers in the database. So around 200,000 had opted out.

The main issue with this database was that it was open and that <b>PostNord did not declare this use and exposure of personal data.</b> According to <a href="https://en.wikipedia.org/wiki/General_Data_Protection_Regulation">GDPR</a> one should declare all uses of personal data. One should also make sure that the customer understands what he or she is accepting.

The form where you could say that an address is secret ("hemmelig adresse"), meaning opt out of the search database:
<img style="float:left;width:500px;margin-right:20px;" class="materialboxed responsive-img" title="" data-caption="" src="/images/postnord11-opt_out.png"/><br style="clear:left;"/>

<h4>Approach (technical stuff)</h4>The easiest way to use this leakage was to search for people in the form. One would need a return code (e.g. "netonnet") and knowledge where to find this page. Search could then be done in Chrome or another browser. If you had ha partial name or partial phone number, the search engine would help with the rest.

<b>If you wanted a copy of the database, you could download the data over time.</b> According to PostNord the service was protected by the following <a href="https://www.algolia.com/doc/guides/security/api-keys/">Algolia security features</a>: HTTP referer restriction, rate limit and number of records retrieved limit. The first is, of course, super easy to spoof. The settings they used for the IP rate limit and number of records retrieved per result is not known to me. So how long this would take is also unknown. I did not test any limits on this system. Using my browser and <a href="https://curl.haxx.se/">Curl</a> I would guess I saw around 100-200 customer records.

After doing a <i>"copy to curl"</i> in Chrome, I got a working and reproducible Curl command that I could run from a terminal. Stripping away unneeded headers I saw that the <code>Referer</code> header was required. I did not strip the query or change the JSON data.
<pre class="prettyprint">curl 'https://swstrzr7ig-3.algolianet.com/1/indexes/address_books/query?x-algolia-agent=Algolia%20for%20vanilla%20JavaScript%203.28.0&x-algolia-application-id=SWSTRZR7IG&x-algolia-api-key=35b1d443b661ed9e65aa4e6c439030f1' \\
    -H 'Referer: https://my.postnord.no/return/show' \\
    --data '{"params":"query=45442095&hitsPerPage=5"}'</pre>
The request the following data (personal information has been changed):
<pre class="prettyprint lang-js">{
    "hits":[
        {
            "id":775007,
            "name":"John Johnsen",
            "mobile":"45445095",
            "street_name":"John street 3",
            "additional_street_name":null,
            "city_name":"John town",
            "postal_zone":"4000",
            "country":"NO",
            "external_id":"808007",
            "source":"contacts",
            "user_id":1378007,
            "created_at":"2018-07-20 10:03:39",
            "updated_at":"2018-07-20 10:03:39",
            "objectID":"775007",
            "_highlightResult":{
            "name":{
                "value":"John Johnsen",
                "matchLevel":"none",
                "matchedWords":[

                ]
            },
            "mobile":{
                "value":"<em>45445095</em>",
                "matchLevel":"full",
                "fullyHighlighted":true,
                "matchedWords":[
                    "45442095"
                ]
            },
            "street_name":{
                "value":"John street 3",
                "matchLevel":"none",
                "matchedWords":[

                ]
            },
            // (.... More highlights without match ....)
            }
        },
        {...},
        {...},
        {...},
        {...}
    ],
    "nbHits":270,
    "page":0,
    "nbPages":54,
    "hitsPerPage":5,
    "processingTimeMS":8,
    "exhaustiveNbHits":true,
    "query":"45442095",
    "params":"query=45442095&hitsPerPage=5"
}</pre>
The documentation for the Algolia API is <a href="https://www.algolia.com/doc/rest-api/search/">available online</a>. By using the API I could see a other indices and tried a query without parameters. The query returned 30 results. The first results were created <code>2018-04-13 14:35:54</code>. The <code>nbHits</code> was <code>885086</code>, meaning there were 885,086 customer records in the database. Querying for indices I got the same number of records but a different created date. <b>I'm guessing this system was set up between November 2017 and April 2018.</b>

<pre class="prettyprint lang-js">{
    "items":[
        {
            "name":"address_books",
            "createdAt":"2017-11-16T08:23:33.157Z",
            "updatedAt":"2018-09-19T19:23:17.094Z",
            "entries":885093,
            "dataSize":225565146,
            "fileSize":691313817,
            "lastBuildTimeS":87,
            "numberOfPendingTasks":1,
            "pendingTask":true
        },
        {"name":"biggest_decline",   "createdAt":"2017-12-15T10:32:32.897Z", "updatedAt":"2018-09-19T19:23:35.868Z", (...)},
        {"name":"biggest_incline",   "createdAt":"2017-12-15T10:32:32.897Z", "updatedAt":"2018-09-19T19:23:35.868Z", (...)},
        {"name":"popular",           "createdAt":"2017-12-15T10:32:32.897Z", "updatedAt":"2018-09-19T19:23:35.868Z", (...)},
        {"name":"price_amount_asc",  "createdAt":"2017-12-15T10:32:32.897Z", "updatedAt":"2018-09-19T19:25:15.172Z", (...)},
        {"name":"price_amount_desc", "createdAt":"2017-12-15T10:32:32.897Z", "updatedAt":"2018-09-19T19:25:15.172Z", (...)},
        {"name":"products",          "createdAt":"2017-12-15T10:32:32.897Z", "updatedAt":"2018-09-19T19:23:35.868Z", (...)},
        {"name":"rating_desc",       "createdAt":"2017-12-15T10:32:32.897Z", "updatedAt":"2018-09-19T19:23:35.868Z", (...)},
        {"name":"review_score_desc", "createdAt":"2017-12-15T10:32:32.897Z", "updatedAt":"2018-09-19T19:23:35.868Z", (...)}
    ],
    "nbPages":1
}</pre>
<h5>Dark UX pattern</h5>I do not have screenshot proof of this, but a previous version of the "track package" page (which was <a href="/2018/05/postnord-api-leak">leaking personal data back in May 2018</a>) applied a <a href="https://en.wikipedia.org/wiki/Dark_pattern">dark UX pattern</a> where the user was shown a registration form instead before the tracking information. A link to this page was sent in an SMS to the recipient of a package. There was a small skip registration link or button (E.g. <i>"No thanks, I just want to see where my package is"</i>).

<b>A user would typically do like this:</b>
1. Click on "track package link" in SMS.
2. Get PostNord registration form.
3. <b>Register user profile.</b>
4. See package status / pick up code.

When I saw this last, I did the following:
1. Click on "track package link" in SMS.
2. Get PostNord registration form.
3. <b>Skip registration by clicking a link.</b>
4. See package status / pick up code.

<h4>Security issues</h4>This is was not a security issue the way Roy and I normally find and write about. The issue here was mainly that the customers did not accept this. PostNord did not have consent to make the customer records available for download. Customers did accept some terms and conditions and PostNord did have a privacy policy. None of them said anything about putting the records online.

The use of the search API was intentionally as part of their solution. It did not have any security issues in the normal sense, but this usage with personal data constitutes a leak of personal information. 

<h4>Reception and handling</h4>As <a href="/2018/05/postnord-api-leak">last time</a> the issue was quickly resolved. 

<h5>Day 0</h5>I reported the issue to NetOnNet and PostNord. A copy was also sent to The Norwegian Data Protection Authority (DPA, Datatilsynet). It was reported to NetOnNet since the return code used to access the page was from them. The report e-mail was title as "Whole NetOnNet customer database available" as that was the first assumption and that it was something that would get attention. It later showed that it was not their customer database, but a separate PostNord database.

<h5>Day 1</h5>I talked to PostNord on the phone and got an e-mail summarizing the handling during following day. According to PostNord, the service was temporality taken down at 08:50. Taking the service down was the right response. My friend confirmed that the service was offline at 10:13.

<b>PostNord will give the Data Protection Authority their version of the leak as part of the mandatory deviation notification.</b>`,
                "images": ["/images/postnord12-return_page.png"],
                "category":
                {
                    "title": "Security",
                    "url": "/security"
                },
                "tags": [
                    {
                        "title": "Information leak",
                        "url": "/information-leak"
                    }
                ]
            },
            {
                "title": "Advent calendars debugged",
                "published": true,
                "publishDate": "2018-12-31T09:00:00.000Z",
                "summary": `A Christmas story on how to cheat in advent calendars and of course some personal information leaks.`,
                "niceUrl": "/2018/12/advent-calendars-debugged",
                "text": `<h4>Background 📅</h4>At least here in Norway we have long traditions with <a href="https://en.wikipedia.org/wiki/Advent_calendar">advent calendars</a> - both as gift calendars for kids and TV shows with one new episode from December 1st until Christmas Eve. In the last couple of decades this tradition has also extended online with businesses having gift calendars where you can typically give away some personal information with a chance to win some prize.

I usually end up answering a few calendars hoping to win something cool, but this year I signed up on quite a few calendars to see if I could find anything interesting security wise. <em>Most of the stuff presented in this post is no big deal. Companies just want as many people as possible to sign up and don't really care about if it's possible to get an advantage. Still I think it's interesting to see how the calendars are built. And then there are the big leaks of personal information.</em>

<h4>Circle K - cheat in pre-Christmas competition ☕</h4><a href="https://en.wikipedia.org/wiki/Circle_K">Circle K</a> Norge runs quite a few gas stations in Norway. They had a "pre-Christmas game" in the second half of November where you could win a <a href="https://koppen2019.no/">"coffee deal"</a> worth 34 USD (299 NOK). With that deal you get a cup that you can refill with any hot liquids on any of their stations throughout 2019.

The game was easy enough; you had to catch as many as possible of the falling Christmas themed items. You had three chances to play every day and there was a top score list where the top 10 single game scores would win the prize.

So, how could one cheat in this game? Well, that seemed pretty easy. <em>The whole game was run in the user's browser and when the game was over the browser posted back the score to the server.</em>

<img style="width:300px;float:left;margin-right:20px;" class="materialboxed responsive-img" title="The game's JavaScript is paused just before sending the request to the server." data-caption="The game's JavaScript is paused just before sending the request to the server." src="/images/calendar01.png">Technically it wasn't all bad news. I mean, the JavaScript was <a href="https://en.wikipedia.org/wiki/Minification_(programming)">minified</a>, you had to be identified with your phone number and the requests containing the score was signed by the mentioned minified JavaScript. Of course, the concept of a client telling the score kind of breaks all other efforts. The easiest way to cheat here would be to play one round with the web developer tools open, watch the request and then search for related parameters in the source code. Then one could just set a <a href="https://en.wikipedia.org/wiki/Breakpoint">breakpoint</a> before the request was signed, play another round and then when the game was paused, change what was obviously the points, before letting the script run on.

<img style="width:300px;float:left;margin-right:20px;" class="materialboxed responsive-img" title="They have even made a dedicated chatbot just for the coffee deal!" data-caption="They have even made a dedicated chatbot just for the coffee deal!" src="/images/calendar03.png">But is it a big deal? Circle K just wants as many as possible to play and as many as possible to know about their coffee deal. Any cups sold/given away will most probably end up in sales that'll give more profit than cost. Just me writing this post gives them some more free advertisement. <em>But I think it's pretty unfair to the hundreds of people who really tried to play their best day after day for a chance to win this cup. They are the ones that are cheated.</em>

<h4>Circle K - cheat in advent calendar ⛽</h4>December came and the pre-Christmas game closed. The next competition in line for Circle K was a pretty cool "name that tune" type of game where you got more points the quicker you were able to identify and pick the song playing.

<img style="width:300px;float:left;margin-right:20px;" class="materialboxed responsive-img" title="Name the tune game with JavaScript paused just before sending points back to the server." data-caption="Name the tune game with JavaScript paused just before sending points back to the server." src="/images/calendar02.png">The concepts surrounding this game were pretty much the same as the previous one. The game was run in the contestant's browser and then the score was reported back to the server. The way to cheat would be the same as described in the previous game.

There's some mismatch between the invitations to the games, the terms and the in-game text in regards of the actual prizes, but from my understanding the awards were like this: The daily top 10 scores of the game would be awarded the coffee deals (so 240 thermo cups were given away in total), the next 10 best daily scores would get a gift card for a coffee and bun. There's also some talk about a main prize, and my understanding is that that's usually 113 USD (1000 NOK) worth of gas. It's unclear to me if there's a draw and/or if it's related to the total points across all days.

<em>Is it acceptable to cheat in competitions like this? Terms and conditions most often doesn't allow for any kind of fraud, but on the other hand they don't take any precautions trying to stop cheating and let anyone just tell them their score.</em>

<h4>Leaking all e-mail addresses 📧</h4>There was this web site with another smaller advent calendar with a daily challenge. I happened to surf by their front page early in December when they <b>just</b> had published an article telling about the new leaderboard that they had made. <em>The leaderboard was loaded in an iframe. And going to the root of that website revealed the usernames and e-mails of all 1000+ contestants.</em>

I quickly wrote an e-mail to them and they responded within minutes and took down the whole webapp in question. They told me that the article telling about the leaderboard was published too early by a mistake. Probably the leak didn't last for many minutes. Because of the short duration of the leak and the small amount of e-mail addresses I don't feel very comfortable naming them. (But it's probably a good idea to not expose webapps with personal information to the Internet even during development.)

<h4>The biggest leaks 💧</h4><em>There were some advent calendars that used a third party system that I have reported several security issues to. We're talking about millions of names, e-mail addresses, phone numbers, and in some cases addresses, names and birthdays of kids, purchase history, national identity numbers and passwords. I will wait until they have fixed everything before doing a write-up or two about them.</em>

<h4>Fjordkraft - exposing their admin UI 🖥️</h4>The power company <a href="https://en.wikipedia.org/wiki/Fjordkraft">Fjordkraft</a> and their subsidiary TrøndelagKraft had their own advent calendar with a daily prize of 568 USD (5000 NOK) in cash.

<img style="width:300px;float:left;margin-right:20px;" class="materialboxed responsive-img" title="Now, that's some interesting names on those services." data-caption="Now, that's some interesting names on those services." src="/images/calendar05.png">What they also had was a good old <a href="https://en.wikipedia.org/wiki/AngularJS">AngularJS</a> app which had a "flaw" often seen on the web: The JavaScript revealed the path to other parts of the application. And <em>what it revealed was the path to the admin interface used for getting statistics and draw a winner. There was even a frightful function that was called <i>Reset database</i>.</em> The admin UI was so in the open that I have a small hope that it could be a <a href="https://en.wikipedia.org/wiki/Honeypot_(computing)">honeypot</a>, but I doubt it.

<img style="width:300px;float:left;margin-right:20px;" class="materialboxed responsive-img" title="Calendar's admin user interface." data-caption="Calendar's admin user interface." src="/images/calendar04.png">Luckily there was some sort of code needed to use any of the functionality. And that's really why I didn't bother to report it to them. I just hope they didn't use a simple code word like <i>"santa"</i> or <i>"xmas2018"</i>.

<h4 style="clear:left;">Others - giving advantage to web developers 👩‍💻</h4>Most of the online advent calendars have a daily question with a few alternatives. Many of the calendars are so nice as giving the correct solution of a question - either in the JSON or markup alongside the question. Of course the companies with the calendars don't care too much about this as they just want people to join in. 

For me this is different from the Circle K competitions where you were guaranteed to get a physical prize if you just give a high enough score back. In these other cases you are at max given an advantage when there's a draw in the daily or final lottery.

<h5>Mester Grønn</h5><img style="width:300px;float:left;margin-right:20px;" class="materialboxed responsive-img" title="Very practical with the answers alongside the questions. 🌹" data-caption="Very practical with the answers alongside the questions. 🌹" src="/images/calendar06.png">The florist <a href="https://mestergronn.no/">Mester Grønn</a> had one of the calendars giving a little advantage to a web developer. <em>The JSON clearly stated which answer was the correct one</em>, and in many cases that would be a quicker way of finding the answer than googling, or looking at their web site. Of course, it's no big deal.

<h5>Kiwi</h5><img style="width:300px;float:left;margin-right:20px;" class="materialboxed responsive-img" title="&quot;Hey server, I answered all your questions correctly.&quot;" data-caption="&quot;Hey server, I answered all your questions correctly.&quot;" src="/images/calendar07.png">The supermarket chain <a href="https://en.wikipedia.org/wiki/Kiwi_(store)">Kiwi</a> had an interesting twist technology wise. <em>Also in this case the JSON clearly stated which answer was the correct one. But what's more, it gave the opportunity to just return <code>true</code> for the answer for a given day so you didn't really have to look at what was the correct answer. And - while I haven't got it confirmed - it looked like you could just fill in the answer for all weeks at once.</em>

<h5>kode24</h5>The news site for coders <a href="https://kode24.no">kode24.no</a> had an <a href="https://www.kode24.no/nedetid/bli-med-pa-kode24-sin-kodekalender/70504275">entertaining calendar</a>. Every day it gave a new small puzzle - typically involving some use of the browser's developer tools. <em>While this didn't directly give a big advantage, it let you stay ahead of the game by letting you solve the puzzles for the following days by directly requesting the contents of the puzzle "file"</em> (which was practical if you were short on time some days). A simple <a href="https://curl.haxx.se/">Curl</a> command made it all very easy to use:<pre class="prettyprint lang-js">
for i in {20..24}; do
  echo '\\n'$i:
  curl 'https://kode24-jul2018.herokuapp.com/api/files' \\
  -H 'Content-Type: application/json' \\
  -H 'Cookie: id=[valid user id hash]' \\
  --data-binary '{"path":"\\'$i'-DES","fileName":"HINT.TXT"}'
  sleep 1
done

20:
{"content":["To legender, fra Porsgrunn den ene.","Slår etternavnene sine sammen,","og skaper en kode av glede."],"type":"txt","name":"hint.txt","size":256}
21:
{"content":["Når jeg dobler dette tallet,","og plotter det inn der artiklene deres bor,","finner jeg en spillmaskin,","som er dagens kodeord:","35262282,5"],"type":"txt","name":"hint.txt","size":8}
22:
{"type":"error","content":"Fant ikke fila di."}
23:
{"content":["mine to favorittfolk,","fra min favorittserie.","slå dem sammen,","så løser du kodens mysterie."],"type":"txt","name":"hint.txt","size":256}
24:
{"content":["Siste innspurt, du har vært flittig som bien.","Denne her blir ekstra vrien.","Reisens start, er per e-brev.","Send meg et pling, få tilbake et stev."],"type":"txt","name":"hint.txt","size":256}</pre>
And even though you couldn't actually answer the puzzle for a future day, it was possible to verify that you had the right solution:<pre class="prettyprint lang-js">
curl 'https://kode24-jul2018.herokuapp.com/api/code' \\
-H 'Content-Type: application/json' \\
-H 'Cookie: id=[valid user id hash]' \\
--data-binary '{"path":"\\24-DES","code":"julekos"}'

{"type":"txt","content":
  ["** Passord korrekt: Server er allerede autorisert. **",
   "Trekningen for denne dagen er over. Gå til dagens konkurransemappe, 22. desember",
   "** OBS! Du får kun poeng for å svare på dagens konkurranse."]
}</pre>

<h4>Privacy 🔏</h4>It's interesting to see the different information the different calendars ask for. What is really needed to draw a winner and/or send any desired information to the end user? E-mail or phone number should be sufficient I suppose. Maybe a (first) name is ok?

The different types of information the calendars asked for were these:
 - First name
 - Last name
 - E-mail address
 - Phone number
 - <em>Postal code</em>
 - Membership number
 - Favourite store
 - <em>Gender</em>
 - <em>Full address</em>

<em>Why on Earth would you ask for the gender and address to be part of a draw?</em> Even worse - user experience wise - was that you in some calendars had to fill in all the information every single day.

<em>A few calendars even forced you to sign up for a newsletter to able to participate in the competition.</em> I must say I liked <a href="https://en.wikipedia.org/wiki/Vipps">Vipps'</a> Messenger calendar where they used Microsoft Forms to collect names and e-mail addresses and clearly stated in one line that the information would only be used to contact the winners and that all information would be deleted when the contest is done. It doesn't have to be harder than that.

<h4>Some observations and user experiences 🔭</h4>I did some more observations I wanted to add at the end here.

<h5>Dark pattern</h5>The alarm company <a href="https://www.sectoralarm.no/">Sector Alarm</a> had a very interesting feature which can't be described as anything but a <a href="https://en.wikipedia.org/wiki/Dark_pattern">dark pattern</a>. From Wikipedia: <i>'A dark pattern is "a user interface that has been carefully crafted to trick users into doing things, such as buying insurance with their purchase or signing up for recurring bills."'</i>

Of all the calendars that I tried out this year Sector Alarm was the only one who had a checkbox with inverted logic. <em>One of the checkboxes you had to take a stand on every day said <i>"I don't want to receive a security alarm offer"</i>. While this seems to be formulated to trick people to sign up for something they don't want, they made it worse by suddenly one day rephrase the checkbox to <i>"I want to receive a security alarm offer"</i>.</em> So if you were used to tick the box you suddenly had to re-read it and take a new stand on whether to check it or not. I wonder what they do if you in the middle of December say you want to be contacted, but the rest of the month say no.

<h5>E-mail to Facebook post to Facebook app to iframe</h5><a href="https://en.wikipedia.org/wiki/Intersport">Intersport's</a> reminder e-mail for the calendar linked to a URL that redirected to a Facebook post which was just a link and post telling that the calendar for that day was opened. Then you had to click that and have a new browser tab opened and go to a Facebook app which again was an iframe to a Fanbooster application which was the actual calendar. Were they trying to make the user experience worse on purpose?

<h5>Dropdown from hell</h5><img style="width:300px;float:left;margin-right:20px;margin-bottom:20px;" class="materialboxed responsive-img" title="Not very fun to use this drop down 24 times." data-caption="Not very fun to use this drop down 24 times." src="/images/calendar08.png">Intersport's not-so-good user experience went from a little annoying to bad when they <i>a)</i> forced you to fill out a lot of fields every day (while most calendars would use a cookie to remember the little info they wanted you to fill in), and <i>b)</i> every single day make you search for and select your favourite store from the 100+ elements drop down.

<h5 style="clear:left;">"no reply"</h5>I got like 20 calendar reminder e-mails every day (😱), and the e-mail subjects and sender names made sense - except for one. <a href="https://kitchn.no/">Kitch'n</a> used a <i>"no reply"</i> sender, so it was the only e-mail you wouldn't know who was from.

(Gotta love their name btw. Using an apostrophe in their name (<a href="https://en.wikipedia.org/wiki/Apostrophe">'</a>) means that most people will spell/type their name incorrectly. And guess what, they even do it themselves. In their e-mails they use acute accent (<a href="https://en.wikipedia.org/wiki/Acute_accent">´</a>).)

<h5>Leaving the user with that bad feeling</h5><img style="width:300px;float:left;margin-right:20px;" class="materialboxed responsive-img" title="&quot;Nice! Unfortunately, one cannot win every time.&quot; 🤔" data-caption="&quot;Nice! Unfortunately, one cannot win every time.&quot; 🤔" src="/images/calendar09.png">Skoringen had a special twist on their calendar. They had a scratch calendar where you got X tickets for the lottery, and then they typically had a simple game you could try. <em>When you finally managed to win the game you got this message with <i>"Unfortunately, one cannot win every time"</i>. I don't know what it was, but you had this feeling for 2 seconds where you were satisfied and happy for winning the game, but then they just finished you off by saying you didn't win.</em>

<h5>Session expired</h5><img style="width:300px;float:left;margin-right:20px;margin-bottom:20px;" class="materialboxed responsive-img" title="Session expired, try again." data-caption="Session expired, try again." src="/images/calendar10.png">I had this case with Mester Grønn's calendar where it suddenly said <i>"Your session expired. For your own security you need to refresh the browser window."</i> Really? For a calendar? If you can just refresh the browser to continue, I'm sure you could've have solved this in a better way. 😀

<h5 style="clear:left;">julekalender.no won Christmas</h5>Most calendars I tried out was using <a href="https://julekalender.no/">julekalender.no</a>'s platform for their calendar. They really seem to serve more advent calendars than all other platforms combined. And it looks like a good platform - at least from an end user's standpoint. It's easy to use with no fuzz and they remember your personal details from one day to another. Also they don't - at least out of the box - ask for too much of personal information.

<h5>410 Gone</h5>The developer in me was fascinated by Fjordkraft's API endpoint <code>/api/calendar/<b>isbeforedecember</b></code> which returned the HTTP status code <code>200 OK</code> before December and then <code><a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/410">410 Gone</a></code> in December. 😃

<h4>Wrapping it up 🎁</h4>These were my observations of testing out quite a few online advent calendars. It was pretty much as expected; mostly ok, and then a few ways to cheat your way to prizes and some small and big leaks of personal information. Stay tuned for details on the biggest leak of them all.
`,
                "images": ["/images/calendar02.png"],
                "category":
                {
                    "title": "Security",
                    "url": "/security"
                },
                "tags": [
                    {
                        "title": "Information leak",
                        "url": "/information-leak"
                    }
                ]
            },
            {
                "title": "How to get a job interview with the Norwegian Police Security Service",
                "published": true,
                "hot": true,
                "publishDate": "2019-01-14T05:45:00.000Z",
                "summary": `The Norwegian Police Security Service had a job posting with a "digital riddle" to find the right candidates for a job. Here's (hopefully) the solution.`,
                "niceUrl": "/2019/01/pst-challenge",
                "text": `<h4>Background</h4>The <a href="https://en.wikipedia.org/wiki/Norwegian_Police_Security_Service">Norwegian Police Security Service</a> (with the Norwegian abbreviation <a href="https://www.pst.no/">PST</a> which I'll use for this write-up) is the police <a href="https://en.wikipedia.org/wiki/Security_agency">security agency</a> of Norway. In December 2018 they <a href="https://1005007.webcruiter.no/Main/Recruit/Public/4001069401">posted a job listing</a> seeking a "curious solution-oriented digital forensics specialist".
                
In the job listing they included a <a href="https://en.wikipedia.org/wiki/Limerick_(poetry)">limerick</a> which was a riddle that they wanted people to solve. I didn't hear of the job posting until it suddenly in January was on the front page of most Norwegian newspapers. The titles were typically something like <i>"if you solve this puzzle the job could be yours"</i>.

<h4>The shark theme 🦈</h4>Almost every part of the whole mystery had a shark theme. The background for that was a bit embarrassing episode from October 2018 where suddenly <em>PST tweeted a picture of a shark. It was the 7-year-old child of one of the PST employees that had accidentally clicked the share button while playing the game <a href="https://en.wikipedia.org/wiki/Hungry_Shark#Hungry_Shark_Evolution_(2014)">Hungry Shark Evolution</a> on his father's iPad. This of course sparked speculations of their Twitter account being hacked.</em> (It was not an iPad with any classified information, but an iPad used for updating Twitter from home. (Their Twitter account is also closed for direct messages.))

Oh, and <i>"hai"</i> is the Norwegian word for <i>"shark"</i>.

<h4>Step 1 - the limerick</h4>The limerick in the job posting was as follows:
<i>    En oktobermorgen fikk vi pulsen til å øke 
    var det en hackeR som hadde lykkes med forsøkeT 
    men en HAI I en TWeeT 
    er ikke særlig 1337. 
    løser du gåtEn bør dU vurdere å søke</i>

The direct meaning of it the limerick doesn't matter itself, but there's a pattern in it:
<i>    <em>E</em>n oktobermorgen fikk vi pulsen til å øke
    var det en hacke<em>R</em> som hadde lykkes med forsøke<em>T</em>
    men en <em>HAI</em> <em>I</em> en <em>TW</em>ee<em>T</em>
    er ikke særlig 1337.
    løser du gåt<em>E</em>n bør d<em>U</em> vurdere å søke</i>

The upper case letters are <code>ERTHAIITWTEU</code>. As you might know, <a href="https://en.wikipedia.org/wiki/.eu">.eu</a> is a top-level domain, and you might've noticed there's also one single period in the limerick. This makes it <code>ERTHAIITWT.EU</code>. If you're quicker than me (and Norwegian) you might already see that the first part can be re-ordered to <code>TWITTERHAI</code> (Twitter shark).

<h5>Detour 1</h5>I didn't see the re-ordering opportunity, so I visited <code><a href="http://erthaiitwt.eu">http://erthaiitwt.eu</a></code>. That site shows a <a href="https://en.wikipedia.org/wiki/Hangman_(game)">hangman</a> saying that the order is incorrect.

<h5>Solution 1</h5><em>The right solution for the first step was to visit <code><a href="http://twitterhai.eu">http://twitterhai.eu</a></code>.</em>

<h4>Step 2 - the HTML page</h4><code><a href="http://twitterhai.eu">http://twitterhai.eu</a></code> shows an image of a shark and gives another poem telling you to look around. Now, I would always look at the source code, but I saw that there was this strange spacing in the middle of the word <i>være</i>. This is a sign that there's something going on with the HTML source code.
<img style="width:300px;float:right;margin:20px" class="materialboxed responsive-img" title="Shark.html" data-caption="Shark.html" src="/images/pst01.png">
Do you see the odd line breaks and what the first column says? <code>Shark.html</code>

<h5>Detour 2a</h5>I tend do look closer at <code>robots.txt</code> and have even made <a href="/2018/06/robots-txt-linkifier">a nice robots.txt linkifier bookmarklet</a> to easily visit and open links from exactly that file. Visiting <code><a href="http://twitterhai.eu/robots.txt">http://twitterhai.eu/robots.txt</a></code> you get a helpful hint saying <i>Use the source, Luke!</i>.

<h5>Detour 2b</h5>I'm used to files being lower case so I went straight to <code><a href="http://twitterhai.eu/shark.html">http://twitterhai.eu/shark.html</a></code>. There you get the helpful hint that <i>Case matters. Watch your characters.</i>

<h5>Solution 2</h5><em>The solution for the second step was to visit <code><a href="http://twitterhai.eu/Shark.html">http://twitterhai.eu/Shark.html</a></code>.</em>

<h4>Step 3 - the image</h4>While I suppose some people stopped looking when they found <code><a href="http://twitterhai.eu/Shark.html">http://twitterhai.eu/Shark.html</a></code> which gives a tip about taking the time to write a good job application. <em>However, there's a HTML comment telling that they have more puzzles if you look more closely</em>.

I couldn't see any other clues or directions to go other than <a href="http://twitterhai.eu/">the image from step 2</a>. What made this one hard for me was that the tools I used to look for <a href="https://en.wikipedia.org/wiki/Exif">Exif metadata</a> didn't reveal anything. As I understand it the solution wasn't hiding in Exif at all, but rather a (JPEG) file comment. There are online tools out there that gives much more than just Exif, and if you're on a Unix-like system you could use a variant of the <a href="https://en.wikipedia.org/wiki/File_(command)"><code>file</code> command</a> to get the info needed:

<code>file 1337_shrk.jpg

1337_shrk.jpg: JPEG image data, JFIF standard 1.01, aspect ratio, density 72x72, segment length 16, 
Exif Standard: [TIFF image data, big-endian, direntries=3, PhotometricIntepretation=RGB, orientation=upper-left], 
<em>comment: "/haitech_secure.html"</em>, baseline, precision 8, 851x514, frames 3</code>

<h5>Solution 3</h5><em>The solution for the second step was to visit <code><a href="http://twitterhai.eu/haitech_secure.html">http://twitterhai.eu/haitech_secure.html</a></code>.</em>

<h4>Step 4 - the JavaScript</h4><code><a href="http://twitterhai.eu/haitech_secure.html">http://twitterhai.eu/haitech_secure.html</a></code> contained some general text with some "tips" for when applying for a job. More importantly it contained a password field and a login button.

The source code revealed a client side validation of the password by first verifying the password and then using the password as a key to decipher a <a href="https://en.wikipedia.org/wiki/Ciphertext">ciphertext</a>.

The JavaScript doing the actual verification of the key was as follows:<pre class="prettyprint lang-js">password.charCodeAt(0) == 8 * 8 + 8 && 
password.charCodeAt(1) == Math.pow(9, 2) - 29 && 
password.charCodeAt(2) == Math.pow(10, 2) + Math.pow(3, 2) && 
password.charCodeAt(3) == password.charCodeAt(2) && 
password.substring(4, 5) == 3 && 
password.charCodeAt(5) == 7 * 17 - 5 && 
password.charCodeAt(6) == password.charCodeAt(0) && 
password.charCodeAt(7) == password.charCodeAt(1) && 
password.charCodeAt(8) == 0x69</pre>
Obviously the password was 9 characters long and it was just a matter of calculating each char. I just copied and pasted a bit and used the following quick and dirty JavaScript in the console to print out the password and run the login function which gave an alert box with the next clue.<pre class="prettyprint lang-js">var password = [];
password[password.length] = 8 * 8 + 8;
password[password.length] = Math.pow(9, 2) - 29;
password[password.length] = Math.pow(10, 2) + Math.pow(3, 2);
password[password.length] = password[password.length - 1];
password[password.length] = '3'.charCodeAt(0);
password[password.length] = 7 * 17 - 5;
password[password.length] = password[0];
password[password.length] = password[1];
password[password.length] = 0x69
for (var i = 0; i < password.length; i++) {
    password[i] = String.fromCharCode(password[i]);
}
password = password.join('');
document.getElementById("password").value = password;
console.log(password);
login();</pre>
<h5>Solution 4</h5><em>The password needed to proceed was <code>H4mm3rH4i</code></em> (hammerhead shark).

<h4>Step 5 - the Caesar cipher</h4>The alert box outputted the text <i>Caesar synes at du skal ta turen hit: uggc://gjvggreunv.grpu/unv_gurer.ugzy</i> meaning <i>Caesar thinks you should go here: uggc://gjvggreunv.grpu/unv_gurer.ugzy</i>.

Just by looking at the last part itself it seemed pretty obvious that this was a <a href="https://en.wikipedia.org/wiki/Caesar_cipher">Caesar cipher</a>. This had to be <code>http://somethingsomething.html</code>. There are plenty of places to solve these kinds of code, but a quick JavaScript also does the trick: <pre class="prettyprint lang-js">var cipher = 'uggc://gjvggreunv.grpu/unv_gurer.ugzy';
var shift = cipher.charCodeAt(0) - 'h'.charCodeAt(); // Char we suspect to know
var charDistance = 'a'.charCodeAt();
var cleartext = '';
for (var i = 0; i < cipher.length; i++) {
    var charCode = cipher.charCodeAt(i) - charDistance;
    if (charCode >= 0 && charCode <= 25) { // a-z
        cleartext += String.fromCharCode((((charCode + shift) % 26) + charDistance));
    } else {
        cleartext += cipher[i];
    }
}
console.log(shift, charDistance, cleartext);</pre>
<h5>Solution 5</h5><em>The plaintext for this one was <code><a href="http://twitterhai.tech/hai_there.html">http://twitterhai.tech/hai_there.html</a></code>.</em>

<h4>Step 6 - the ASCII art and secret folder</h4><code><a href="http://twitterhai.tech/hai_there.html">http://twitterhai.tech/hai_there.html</a></code> just told that you should follow <a href="https://twitter.com/twitt3rhai">the Twitter user <code>twitt3rhai</code></a> (Twitter shark).

The latest tweet was the text <i>"#justdoit, or make your ROBOTS do it. Transfer teXt to an ediTor"</i>. I suppose this was a double hint; another trip to <code>robots.txt</code> and transferring the rest of the tweets to a text editor.

<a href="http://twitterhai.tech/robots.txt">The <code>robots.txt</code></a> pointed to the path <code>/min_hemmelige_mappe/</code> ("my secret folder").

There were 65 other tweets containing shark and fish related words. It looked like some kind of cipher. The best thing to do was to just copy all the tweets into a text editor:<pre class="prettyprint lang-html">Tigerhai HvithaiHammerhaiHvalhai Oksehai Domenehai Brugde
Brugde DomenehaiTigerhaiHvithai Hvalhai Hammerhai Oksehai
HammerhaiJaws   Fish   Hvalhai Oksehai Domenehai Tigerhai
HvithaiHaiene   Tail   Tigerhai DomenehaiBrugde Hammerhai
HåbrannBrugde   Fins   HammerhaiBrugde HvithaiHvalhaiJaws
HvithaiHammer          Domenehai Tigerhai Oksehai Hvalhai
DomenehaiJaws   Mako   HåbrannHvithai HvalhaiTigerhaiMako
BrugdeOksehai   Apex   Tigerhai HvalhaiDomenehaiHammerhai
HvithaiBrugde   Jaws   HammerhaiOksehai BrugdeTigerhaiHai
Brugde HvalhaiHvithaiDomenehai Oksehai Tigerhai Hammerhai
TigerhaiHvithaiOksehai BrugdeHammerhaiHvalhaiDomenehaiHai
HvithaiHvalhai   BrugdeOksehaiDomenehai HammerhaiTigerhai
HvithaiSjøen   H   TigerhaiOksehai DomenehaiHvalhaiBrugde
Hammerhaien   Hai   Domenehai HvalhaiBrugdeHvithaiOksehai
HvithaiHai           DomenehaiHvalhai Hammerhai Oksehaien
HvithaiHai   Havet   Oksehai TigerhaiHvalhaiDomenehaiApex
OksehaiHai   Sjøen   HvalhaiBrugde HvithaiHammerhaiBrugde
BrugdeJaws   Finne   Brugde HvithaiHvalhaiTigerhai Haiene
HammerhaiDomenehaiBrugdeOksehaiTigerhai HvalhaiHvithaiHai
HvalhaiBrugdeTigerhaiHammerhaiHvithai Oksehai Domenehaien
Domenehaier           OksehaiHvithai HammerhaiHvalhai Hai
OksehaiTigerhai   HvalhaiDomenehaiHammerhai BrugdeHvithai
DomenehaiBrugde   TigerhaiHammerhai HvithaiHvalhaiOksehai
BrugdeHvithaien   HammerhaiDomenehaiHvalhai Tigerhai Mako
TigerhaiHvalhai   BrugdeDomenehaiHvithai OksehaiHammerhai
BrugdeOksehaien   HammerhaiHvalhaiDomenehai HvithaiBrugde
HvithaiJaws           HaiHvalhaiHammerhai BrugdeDomenehai
DomenehaiTigerhaiHammerhaiHvithaiBrugdeOksehai HvalhaiHai
TigerhaiHvithaiBrugdeHvalhaiOksehai Domenehai Hammerhaien
BrugdeTigerhaiHammerhai   DomenehaiHvalhai OksehaiHvithai
DomenehaiOksehaiSjøen     HammerhaiHvalhaiTigerhaiHåbrann
Hammerhai HvithaiBrugde   OksehaiHvalhai BrugdeTigerhaien
HvithaiBrugdeOksehaiHai   TigerhaiDomenehai HvalhaiBrugde
HvalhaiOksehaiDomenehai   TigerhaiBrugde HammerhaiHvithai
Tigerhai HvithaiOksehai   HammerhaiDomenehaiBrugdeHvalhai
HvithaiOksehaiBrugde         Hammerhai Tigerhai Domenehai
HvalhaiHammerhaiHvithaiBrugdeTigerhai OksehaiDomenehaiHai
DomenehaiHvithaiBrugdeTigerhaiHammerhai Hvalhai Oksehaien
OksehaiBrugdeBrugde         Hvithai DomenehaiTigerhaiApex
HvalhaiHvithaiJaws   Haier   DomenehaiHammerhaiTigerhaien
TigerhaiBrugdeOksehaiSjøen   Domenehai HvalhaiHammerhaien
DomenehaiHammerhaiHavet     BrugdeOksehai HvithaiTigerhai
HvalhaiHammerhaiHvithaiHai   Brugde Oksehaien Domenehaien
DomenehaiBrugdeHai   Havet   Hammerhai Hvalhai Tigerhaien
HvalhaiOksehaiBrugde        BrugdeDomenehaiTigerhaiBrugde
Hvithai DomenehaiBrugdeHammerhaiTigerhaiHvalhai Oksehaien
HvalhaiBrugdeHvithaiDomenehaiOksehai Tigerhai Hammerhaien
BrugdeHvithaiBrugde         HammerhaiTigerhaiHvalhaiSjøen
Domenehai Tigerhai   Sjøen   HvithaiHammerhai Brugde Jaws
OksehaiBrugdeHvalhaiHvitha   Domenehai Tigerhai Hammerhai
TigerhaiHammerhaiHavet     HvalhaiHvithai BrugdeDomenehai
TigerhaiDomenehaiHammerhai   Hvalhai HvithaiOksehaiBrugde
HvithaiDomenehaien   Finne   HammerhaiHvalhaiBrugdeBrugde
BrugdeOksehaiBrugden        Hammerhai Hvithai Domenehaien
HvithaiBrugde TigerhaiOksehaiDomenehaiHammerhai Hvalhaien
DomenehaiHammerhaiOksehaiHvithaiHvalhai Brugde Tigerhaien
HammerhaiTigerhai           DomenehaiHvithaiBrugdeHvalhai
HvalhaiBrugdeHvit   Haier   OksehaiTigerhai Domenehai Hai
OksehaiBrugdeHvithaiJaws   HavetDomenehai TigerhaiHvalhai
DomenehaiHvithaiHåbrann   Hammerhai Brugde OksehaiHvalhai
DomenehaiHvalhaiBrugde   OksehaiBrugdeHammerhai Hvithaien
DomenehaiTigerhaiApex   Hammerhai Hvithai Hvalhai Oksehai
OksehaiHammerhaiJaws   DomenehaiTigerhaiBrugdeHvalhaiJaws
Hvalhai HvithaiTigerhaiDomenehaiBrugdeHammerhai Oksehaien
Håbrann TigerhaiOksehaiHvithaiBrugdeHvalhaiHammerhaiHavet</pre>
<h5>Solution 6</h6>There were two things to draw from this step. <em>The first was the URL to <code><a href="http://twitterhai.tech/min_hemmelige_mappe/">http://twitterhai.tech/min_hemmelige_mappe/</a></code>, and the second was the word <code>HAI1337</code> (shark 1337) hiding in all the tweets.</em>

<h4>Step 7 - the Wireshark dump</h4><img style="width:400px;float:left;margin:20px" class="materialboxed responsive-img" title="Screenshot from Wireshark." data-caption="Screenshot from Wireshark." src="/images/pst03.png"/>The mentioned URL <code style="word-break:break-all;"><a href="http://twitterhai.tech/min_hemmelige_mappe/">http://twitterhai.tech/min_hemmelige_mappe/</a></code> was the URL to a directory containing a file called just <code>haimat</code> (shark food), and it was indeed shark food. Again the <a href="https://en.wikipedia.org/wiki/File_(command)"><code>file</code> command</a> proved a quick and simple way of determining the file type:
<code>file haimat
haimat: <em>pcap-ng capture file</em> - version 1.0</code>

A pcap-ng capture file is a file with a packet capture format that contains a "dump" of data packets captured over a network - a file typically seen from the good old packet analyzer <a href="https://en.wikipedia.org/wiki/Wireshark">Wireshark</a>.

Now, I'm no expert in Wireshark, but I have used it now and then to listen in on network traffic. I used it extensively while building the app for my HDL Buspro smart home - to see how the different components were talking together. Luckily this dump only contained 400+ packets.

I might very well have missed stuff in the dump, but I did find two things. The first was a web browser visiting the root of a server and getting back the following HTML:<pre class="prettyprint lang-html">&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;Sharky Secret Distributor&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
    Her er dataene dine. Passordet har du allerede... &lt;a href="/secret_data.zip"&gt;secret_data.zip&lt;/a&gt;
&lt;/body&gt;
&lt;/html&gt;</pre>
The page said <i>Here's your data. You already have the password...</i> and linked to ZIP file.

The second thing of interest was the response to the the request for the actual ZIP file. Wireshark lets you easily save files that been transferred over the wire.

<h5>Solution 7</h5><em>The solution was to extract the ZIP file from the packet capture file.</em>

<h4>Step 8 - the ZIP file</h4>Trying to unzip the ZIP file it asks for the password for the file <code>insignificant_shark.png</code>.

<h5>Solution 8</h5>As hinted, you were already supposed to have the password. Yes, <em>the password was <code>HAI1337</code></em>.

<h4>Step 9 - runes and steganography</h4>Of course the image was of a shark. The shark had what looked like <a href="https://en.wikipedia.org/wiki/Runes">runes</a> on its side. Looking at a <a href="https://snl.no/runer">table of a runic alphabet</a> <em>the three runes can be transliterated to <code>l s b</code></em>.

What could the letters <code>LSB</code> mean in context of an image? <a href="https://en.wikipedia.org/wiki/Bit_numbering#Least_significant_bit">Least significant bit</a>. That matches the file name of <code>insignificant_shark.png</code>. <a href="https://en.wikipedia.org/wiki/Steganography">Steganography</a> is the practice of concealing a file, message, image, or video within another file, message, image, or video.

There are many online tools for looking for secret messages in images.

<h5>Detour 9</h5><img style="width:300px;float:left;margin:20px" class="materialboxed responsive-img" title="Decoding the image incorrectly the image would reveal a QR code." data-caption="Decoding the image incorrectly the image would reveal a QR code." src="/images/pst02.png"/>If you decoded the image incorrectly the image would reveal a QR code which was encoded with the helpful text <i>You thought we would hide anything of SIGNIFICANCE? Not the LEAST...</i>.

<h5 style="clear:left;">Solution 9</h5><em>Decoding the image looking at the LSB reveals the URL <code><a href="http://twitterhai.tech/u_are_th3_winrar.jpg">http://twitterhai.tech/u_are_th3_winrar.jpg</a></code>.</em>

<h4>Step 10 - Winrar</h4>The image at <code><a href="http://twitterhai.tech/u_are_th3_winrar.jpg">http://twitterhai.tech/u_are_th3_winrar.jpg</a></code> has the text <i>"Do we we have a winner?"</i>.

The puzzle can't end with a question. What should we be looking for here? The URL says <i>"winrar"</i> and not <i>"winner"</i>. The simple image is a stunning 9 MB. It is possible to hide files at the end of images. <a href="https://en.wikipedia.org/wiki/WinRAR">WinRAR</a> is a file archiver utility for ZIP files and <a href="https://en.wikipedia.org/wiki/RAR_(file_format)">RAR files</a>.

<h5>Solution 10</h5><em>The solution was to e.g. use WinRAR to extract the files <code>gratulerer.txt</code> and <code>gratulerer.gif</code> from the "image".</em>

<h4>We have a winner</h4>I wouldn't be very surprised if there was another level of puzzles and solutions hidden here somewhere, but who knows. The file <code>gratulerer.txt</code> (congratulations.txt) contained a greeting telling that all the puzzles have been solved and included a (shark related, of course) code word that could be used as a proof of challenge completion. <code>gratulerer.gif</code> is GIF from the movie <a href="https://en.wikipedia.org/wiki/The_Great_Gatsby">The Great Gatsby</a>.

<em>So does all this prove that you are ready for working as a digital forensics specialist for a national security agency?</em> Of course not in itself. But I suppose <em>it's a good starting baseline for applicants. Solving all the pieces shows a basic understanding of a wide area of topics like knowing a little bit of code, some basic cryptography, a bit networking and have some general smartness.</em> Of course, if you applied on January 8th or later you might expect some extra questions in regards of the solution as <em><a href="https://www.reddit.com/r/norge/comments/advuc7/la_oss_løse_gåten_sammen/">someone solved the challenge on Reddit</a></em> and there's also <a href="https://gist.github.com/BobuSumisu/501dafd4d7166d2a295a68c20bc3eb41">a write-up on GitHub</a>. 😀 I wanted to wait to publish this until after the application deadline.

Giving a challenge like this also helps spread the word about the job opening, especially when it ends up on so many news paper front pages. I hope PST got some good candidates. :)
`,
                "images": ["/images/pst03.png", "/images/pst01.png", "/images/pst02.png"],
                "category":
                {
                    "title": "Security",
                    "url": "/security"
                },
                "tags": [
                    {
                        "title": "Behind the news",
                        "url": "/behind-the-news"
                    },
                    {
                        "title": "Challenge",
                        "url": "/challenge"
                    }
                ]
            },
            {
                "title": "Case #20: It's getting hot in here",
                "published": true,
                "publishDate": "2019-01-16T14:00:00.000Z",
                "summary": `It was possible to control Internet connected Mill heaters worldwide.`,
                "niceUrl": "/2019/01/mill-heat",
                "text": `<h4>tl;dr</h4>It was possible to control what seems to be all Internet connected Mill heaters worldwide.

<h4>Summary</h4><table class="summary">
<tr>
    <td style="width:30%">Who:</td>
    <td><a href="https://www.millheat.com/">Mill</a></td>
</tr>
<tr>
    <td style="width:30%">Severity level:</td>
    <td><span class="orange-text">Medium</span></td>
</tr>
<tr>
    <td style="width:30%">Reported:</td>
    <td>October 2018</td>
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
    <td>A thank you</td>
</tr>
<tr>
    <td style="width:30%">Issue:</td>
    <td>It was possible to control all Internet connected heaters</td>
</tr>
</table>
<div style="padding-top:80px;" class="col s12 m5 l5 xl4 right"><div class="card-panel light-blue darken-1"><span style="text-decoration:underline;" class="white-text"><a class="white-text" href="/2017/08/security-vulnerability-disclosures">Background: The purpose of these posts</a></span></div></div>
<h4>Background</h4><img style="float:left;width:350px;margin-right:20px;margin-bottom:20px;" class="materialboxed responsive-img" title="" data-caption="" src="/images/mill02.png"/>Mill is a company selling different heaters. If you've ever seen a heater that actually looks good it was probably a Mill heater. <em>Some of the heaters can be controlled with their app via the Internet. They also have Wi-Fi socket product that can be connected to good old "dumb" heaters.</em>

Please note that this was originally not my finding. A friend of mine have a few Mill heaters and let me access what was needed to check out this issue.

<h4 style="clear:left;">Approach (technical stuff)</h4><a class="skip-link" href="#security-issues"><u>Skip this part</u> 🙈</a>
<img style="float:left;width:400px;margin-right:20px;margin-bottom:20px;" class="materialboxed responsive-img" title="" data-caption="" src="/images/mill04.png"/>I downloaded <a href="https://play.google.com/store/apps/details?id=com.millheat.heater">Mill's Android app</a> and used the HTTP proxy <a href="https://www.charlesproxy.com/">Charles</a> to listen in on the traffic.

The first thing that surprised me was that the app connected to a hostname that belongs to a Chinese "IoT platform" (Mill is Norwegian). The IP seems to belong to a machine running <a href="https://aws.amazon.com/ec2/">Amazon Elastic Compute Cloud (EC2)</a> in Germany.

<em>The first thing that scared me was that they only used https for the authentication. All other communication was unencrypted.</em>

During authentication the server gave the client an access token. The token seemed to be valid for a 24+ hours.

When receiving information and sending commands the app sent some headers to prove the authenticity. There was a signature based on a nonce, a timestamp, the user id and the authentication token. The timestamp and nonce was also sent in the request. <em>There was one problem with the request headers. The exact same headers could be used again and again for both <a href="https://en.wikipedia.org/wiki/Replay_attack">replay attacks</a> and for any other different command or information retrieval. This was not the app you wanted to use from your sunbed on vacation while connected to the nearest open Wi-Fi network.</em>

But then there was the real issue. I got an ID of an oven from my friend, with his blessing to try to adjust the temperature of it. And guess what, it was possible to do just that. <em>First one could get the status of the oven and check if the oven was online, then one could change the status it - including setting the temperature.</em>

<em>The ovens were assigned an ID that seemed to be an incremental number. So once this issue was present it became a large scale one. It seemed like one could set the temperature of any and all online Mill ovens worldwide.</em>
<pre class="prettyprint">curl -H 'Content-Type: application/x-zc-object' \\
-H 'X-Zc-Content-Length: 85' \\
-H 'X-Zc-Major-Domain: seanywell' \\
-H 'X-Zc-Sub-Domain: milltype' \\
-H 'X-Zc-Timestamp: 1939713271' \\
-H 'X-Zc-Timeout: 300' \\
-H 'X-Zc-Nonce: [some nounce]' \\
-H 'X-Zc-User-Id: [your own user id]' \\
-H 'X-Zc-User-Signature: [sha1 of time params, nounce and auth token]' \\
-H 'Host: [Mill server]' \\
--data-binary '{"homeType":0,"timeZoneNum":"+02:00","deviceId":[some oven id],"value":28,"key":"holidayTemp"}' \\
'http://[Mill server]/millService/v1/changeDeviceInfo'</pre>
<h4 id="security-issues">Security issues</h4>It was possible to get the status of up to 50,000 Internet connected Mill ovens and get data like the following:
 - Online/offline status
 - Current and target temperature
 - User selected device name (could they reveal addresses/people?)
 - Other status information

It was possible to change the status - aka set the temperature - of the ovens. <em>What if someone had turned off the oven because they were e.g. temporarily storing something close to the oven, and then someone turned the oven to full via the Internet? Could that potentially cause a fire? Their user manuals specify minimum distances for the ovens and that they need to be kept away from flammable materials.</em>

<h4>Reception and handling</h4><h5>Day zero</h5>At night I sent an e-mail to both their specified contact and Play Store e-mail address.

<h5>Day 1</h5>The morning after, they responded thanking me for telling them about the issue and that they had started working on fixing it.

At night - after business hours - I got a response that they had a solution that they were running some final tests on. They also asked for my opinion on some of the changes they were going to do.

Not everything was fixed overnight at once, but <em>they showed they were on the ball, taking it serious and fixed the worst parts first</em>.

<h4>Conclusion</h4>I live in a smart home, and I like the ease of being able to see the temperature of every room and control the heating from anywhere. I can understand why people use Mill's and other's solutions. And imagine having a cabin in the cold snowy mountains where you can adjust the heat so that it's pre-heated just before you arrive. It's perfect. On the other hand, I have so much respect for those not wanting to connect their lives or homes to the Internet, because it will fail at one or another point. It doesn't have to be a specific case like this, but we're also talking about privacy issues in regards of big companies and governments, and we're talking about surveillance from anything from burglars to jealous partners to governments.

This was yet another one of many, many incidents of IoT security failing. <em>We must come up with up with some kind of labelling of IoT devices that can work as a statement that the vendors can use to say they have at least gone through some minimum efforts checklist and that they actively uses third-party companies to check their security. If some big companies in the industry get together and work out a simple framework for this we could start going down the right path.</em> I don't think we have time to wait for laws and regulations around the world.
`,
                "images": ["/images/mill02.png", "/images/mill01.png", "/images/mill03.png", "/images/mill04.png"],
                "category":
                {
                    "title": "Security",
                    "url": "/security"
                },
                "tags": [
                    {
                        "title": "Security Monday",
                        "url": "/security-monday"
                    },
                    {
                        "title": "Internet of Things",
                        "url": "/iot"
                    },
                    {
                        "title": "OWASP 2017 A5",
                        "url": "/owasp-2017-a5"
                    }
                ]
            },
            {
                "title": "Game *inside* browser developer tools",
                "published": true,
                "publishDate": "2019-03-07T20:20:00.000Z",
                "summary": `This one is for you developers out there: Play a game inside local storage!`,
                "niceUrl": "/2019/03/devtools-game",
                "text": `<h4>tl;dr</h4><img style="float:left;width:400px;margin-right:20px;margin-bottom:20px;" class="materialboxed responsive-img" title="Screenshot from playing Cookie Defender inside Developer Tools of Vivaldi (Image: CC BY 4.0)" data-caption="Screenshot from playing Cookie Defender inside Developer Tools of Vivaldi (Image: CC BY 4.0)" src="/images/cookiedefender01.png"/>I created a simple JavaScript space invaders like game using the browser's <a href="https://en.wikipedia.org/wiki/Web_storage#Local_and_session_storage">local storage</a> as "canvas". You need to open your <a href="https://en.wikipedia.org/wiki/Web_development_tools">developer tools</a> to be able to play it.

<h4 style="clear:left;">Try it yourself...</h4><em>Open your developer tools, go to the local storage tab, click the button below</em>, position your windows and follow the instructions. :) <b>If you are on your mobile you will have to come back here once you are on your desktop computer.</b>

<script src="/stuff/cookiedefender/cookiedefender.js"></script>
<script>
function updateSoundAndMusicSettings(){
    if(window.cookieDefenderGame){
        cookieDefenderGame.setPlaySounds(document.getElementById('cookiedefender-sound').checked);
        //cookieDefenderGame.setPlayMusic(document.getElementById('cookiedefender-music').checked);
    }
}
function startGame(){
    try{
        console.log('Launching game...');
        window.cookieDefenderGame = new CookieDefenderGame();
        cookieDefenderGame.start();
        //cookieDefenderGame.setPlayerName('ROY 🇳🇴');
        Materialize.toast('Launched! Now open that local storage of yours.<br/>(Typically by pressing F12 or CMD + OPT + I.)', 7000);
        updateSoundAndMusicSettings();
        console.log('Launched. Find that local storage of yours. :)');
    }catch(error){
        console.error('Got error trying to launch game:');
        console.error(error.stack);
    }
}
</script>
<a onclick="ga('send','event','game','play','cookiedefender',1);return true;" href="javascript:startGame%28%29%3B;" class="waves-effect waves-light btn-large">Launch Cookie defender</a>
<input type="checkbox" id="cookiedefender-sound" onchange="updateSoundAndMusicSettings();"/><label for="cookiedefender-sound">Sound</label>
<!--input type="checkbox" id="cookiedefender-music" onchange="updateSoundAndMusicSettings();" /><label for="cookiedefender-music">Music</label-->

<h5>Controls</h5>Control your player with your arrow keys or WASD.

<h5>Browser support</h5>I've run the game <em>successfully on Chrome</em> 72 @ Mac + Windows 10, <em>Firefox</em> 65 @ Mac + Linux Mint, Firefox X @ Windows 7, <em>Vivaldi</em> 2.3 @ Mac and <em>Opera</em> 58 on Mac + Windows 10.

It <em>does <b>not</b> work on Microsoft Edge 42</em> @ Windows 10 as their DevTools doesn't auto-refresh any of their web storages. Internet Explorer 11 (at least on Windows 7) doesn't have a proper <code>localStorage</code> viewer.

<h4>...or just watch the video</h4><iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/qjb7ABrlHow" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

<h4>Fake Asked Questions (FAQ)</h4><h5>Why would anyone make this?</h5>Are you kidding me? Because it could be done, because it's something I haven't seen before, and because programming is tons of fun. When I got the idea I had to finish it.

It is a bit annoying to play the game in Firefox's devtools as they have a (probably normally useful) feature of blinking every time the <code>localStorage</code> is updated.

<h5>Where did you get the inspiration from?</h5>From somewhere completely elsewhere. I recently saw a <a href="https://news.ycombinator.com/item?id=19262529">Hacker News post</a> about an 11 year old <a href="https://en.wikipedia.org/wiki/Favicon">favicon</a> game called <a href="http://www.p01.org/defender_of_the_favicon/">Defender of the favicon</a>. I was a bit annoyed that I didn't come up with that idea (either before 2008 or any of the 11 following years..), so I wanted to create something nerdy and fun I hadn't seen before. Pretty quickly I came up with the idea of using the browser developer tools as the game "screen". First I thought about running the game in the cookies, but the JavaScript API for handling cookies is almost non-existing. Using the <code>localStorage</code> is so much simpler, and to my surprise all the browsers I first tested immediately updated the developer tools to show the contents of the local storage.

<h5>Is the game open source?</h5>Yes! Just head over to <a href="https://github.com/roys/js-devtools-cookiedefender">my GitHub repository for the game</a>. Please note that while my game code is licensed under MIT License, the sound and music assets have their own licenses.

<h5>Do you have any other fun stuff to try out?</h5>Why don't you try out my bookmarklet game <a href="/2017/10/dom2-bookmarklet">DOM II: JavaScript Hell</a>? 😎

<h5>What's next?</h5>I hope that you will make Tetris or a car game for the browser devtools. That would be so cool. 😀

<h4>Today I Learned (TIL)</h4>1. None of the developer tools I tried used a <a href="https://en.wikipedia.org/wiki/Monospaced_font">monospaced font</a> for the <code>localStorage</code>, making it really hard to make the game at all.

2. Emojis might not be of the same width, but they are *almost* of the same width, making it easier to make the game.

3. There's a <a href="https://en.wikipedia.org/wiki/Whitespace_character">whitespace character</a> called <a href="https://en.wiktionary.org/wiki/ideographic_space">ideographic space</a> that are about the same width as many emojis. Without that I don't think I could have made this game.

4. Mozilla has a really nice <a href="https://hacks.mozilla.org/2017/03/internationalize-your-keyboard-controls/">description on how internationalize your keyboard controls</a> so that <a href="https://en.wikipedia.org/wiki/Arrow_keys#WASD_keys"><code>WASD</code></a> magically becomes <code>ZQSD</code> for people with <a href="https://en.wikipedia.org/wiki/AZERTY"><code>AZERTY</code></a> keyboards. (Hello 🇫🇷.)

5. The world isn't ready for <a href="https://en.wikipedia.org/wiki/ECMAScript#6th_Edition_-_ECMAScript_2015">ES6</a>. This is no surprise I suppose. I started out going all classes, fields (ok, that's <a href="https://github.com/tc39/proposal-class-fields">TC39</a>), arrow functions, computed property names, various String functions, etc., but had to go back to good old days to make the code run everywhere.

`,
                "images": ["/images/cookiedefender01.png"],
                "category":
                {
                    "title": "Software development",
                    "url": "/software-development"
                },
                "tags": [
                    {
                        "title": "JavaScript",
                        "url": "/javascript"
                    },
                    {
                        "title": "Game",
                        "url": "/game"
                    }
                ]
            },
            {
                "title": "Case #21: Leaving backup in the public",
                "published": true,
                "publishDate": "2019-03-11T05:40:00.000Z",
                "summary": `A web shop left their backup of all shopping data and their site in a publicly available directory - indexed by Google.`,
                "niceUrl": "/2019/03/decentralized-backup",
                "text": `<h4>tl;dr</h4>An e-commerce site had misconfigured their site which led to their backup of their entire site + database with all shopping and personal data to be available on the Internet. And you could find it with a simple Google search.

<h4>Summary</h4><table class="summary">
<tr>
    <td style="width:30%">Who:</td>
    <td>Anonymous, let's call them <a href="https://en.wikipedia.org/wiki/Fictional_company">Acme5</a></td>
</tr>
<tr>
    <td style="width:30%">Severity level:</td>
    <td><span class="red-text">High</span></td>
</tr>
<tr>
    <td style="width:30%">Reported:</td>
    <td>September 2018</td>
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
    <td>A thank you</td>
</tr>
<tr>
    <td style="width:30%">Issue:</td>
    <td>Website backup and database backup accessible by a simple Google search</td>
</tr>
</table>
<div style="padding-top:80px;" class="col s12 m5 l5 xl4 right"><div class="card-panel light-blue darken-1"><span style="text-decoration:underline;" class="white-text"><a class="white-text" href="/2017/08/security-vulnerability-disclosures">Background: The purpose of these posts</a></span></div></div>
<h4>Background</h4>Acme5 is a Norwegian physical specialist store that also have an online web store.

I briefly mentioned this case in the presentation I gave in October 2018 at <a href="https://event.dnd.no/siksymp/program-18-oktober-18/">the security conference <i>Sikkerhetssymposiet</i></a>, but I never got around to writing about it. I have been wanting to do one or more write-ups on <a href="https://en.wikipedia.org/wiki/Google_hacking">Google dorking</a>, that is, how to use Google to find security vulnerabilities. A good starting point for checking your own security is googling yourself. There are just endless and endless of vulnerabilities and secret stuff indexed by Google available for anyone using a simple Google search. While doing research for this kind of write-up I found the issue presented here.

<h4 style="clear:left;">Approach</h4><em>I searched for something along the lines of <code>intitle:"index of" intext:backup</code>.</em> <i>"Index of"</i> in the title is used by at least the <a href="https://httpd.apache.org/">Apache web server</a> when a displaying directory listing. <i>"backup"</i> is an interesting name to see in a directory listing.

Especially one of the search results caught my attention. I clicked it and was a bit like <i>"can this really be what it looks like?"</i> Could it be a <a href="https://en.wikipedia.org/wiki/Honeypot_(computing)">honeypot</a>? If I were to leave some fake data on the Internet I would leave it just like that.

I clicked the files and took a quick peek. This was the real deal.

<h4 id="security-issues">Security issues</h4>The database backup of the web shop contained among other things <em>the following information about all their customers - approximately 1,000 persons:
 - Full name
 - Full address
 - E-mail address
 - Phone number
 - Hashed password
 - Password salt
 - Browser version
 - Full purchase history</em>

The website backup contained the <em>source code and configuration of the full site</em>. I don't think Acme5 could have much more to leak. At least the passwords were <a href="https://en.wikipedia.org/wiki/Cryptographic_hash_function">hashed</a> with individual <a href="https://en.wikipedia.org/wiki/Salt_(cryptography)">salt</a> defending against pre-computed <a href="https://en.wikipedia.org/wiki/Rainbow_table">rainbow table attacks</a>, but having the database the hashes would still be open against <a href="https://en.wikipedia.org/wiki/Dictionary_attack">dictionary attacks</a> and making it easier to <a href="https://en.wikipedia.org/wiki/Brute-force_attack">brute force</a> them.

<h4>Reception and handling</h4><h5>Day zero</h5>I was a bit amazed with this finding and considered a second if this was a case for <a href="https://en.wikipedia.org/wiki/Troy_Hunt">Troy Hunt</a> and his service <a href="https://haveibeenpwned.com/">Have I Been Pwned</a>. However, I ended up at just contacting the web shop by e-mail.

1.5 hour later I received a reply from the IT company Acme5 was using, thanking me for alerting them and asking for confirmation that I had deleted the files. <em>They claimed to have web server access logs pre-dating the 3 months old backups and that the files were only downloaded once.</em> I confirmed that I no longer had the files. They said they would "take the appropriate action in accordance Acme5's GDPR routines". And that was it.

Now, I have no idea if they did follow up the incident, if they reported anything to the Data Protection Authority or not. Maybe they felt like they didn't have to since they claimed that no one else had accessed the files.

<h4>Anonymous you say?</h4>I have been in doubt if this is a case where the company should be named. I suppose this is the biggest leak where I haven't named the company. The reasons for not doing so are that Acme5 isn't that big, their IT vendor is a small company, and supposedly they can tell for sure that no one previously had accessed the data.

<h4>Conclusion</h4>Technically it's incredible simple for a system administrator to do a mistake like this, but you just can't do it. (Sometimes you have to wonder if some leaks are intentional.)

As an IT company; please Google yourself. And please hire an external company to do penetration tests and regular security audits. And stay tuned for that blog post about Google hacking.
`,
                "images": ["/images/acme501.png"],
                "category":
                {
                    "title": "Security",
                    "url": "/security"
                },
                "tags": [
                    {
                        "title": "Security Monday",
                        "url": "/security-monday"
                    },
                    {
                        "title": "Information leak",
                        "url": "/information-leak"
                    },
                    {
                        "title": "OWASP 2017 A3",
                        "url": "/owasp-2017-a3"
                    },
                    {
                        "title": "OWASP 2017 A6",
                        "url": "/owasp-2017-a6"
                    }
                ]
            },
            {
                "title": "Case #22: Another booking leak",
                "published": true,
                "publishDate": "2019-03-18T05:45:00.000Z",
                "summary": `Personal info like Social Security numbers and personal documents were available. While I mostly hail the City of Bergen's handling of this issue, here are also the details they didn't tell you.`,
                "niceUrl": "/2019/03/aktiv-kommune-booking",
                "text": `<h4>tl;dr</h4>Personal information and documents from thousands of individuals were leaked in a government booking system.

<h4>Summary</h4><table class="summary">
<tr>
    <td style="width:30%">Who:</td>
    <td><a href="https://www.aktiv-kommune.no/">Aktiv kommune</a> (<a href="https://www.bergen.kommune.no/english">City of Bergen</a>, <a href="https://www.stavanger.kommune.no/en/">City of Stavanger</a>, <a href="https://www.alesund.kommune.no/english">City of Ålesund</a>, <a href="https://www.fjell.kommune.no/">Fjell municipality</a>)</td>
</tr>
<tr>
    <td style="width:30%">Severity level:</td>
    <td><span class="orange-text">Medium</span> to <span class="red-text">High</span></td>
</tr>
<tr>
    <td style="width:30%">Reported:</td>
    <td>March 2019</td>
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
    <td>A thank you</td>
</tr>
<tr>
    <td style="width:30%">Issue:</td>
    <td>Leak of personal information</td>
</tr>
</table>
<div style="padding-top:80px;" class="col s12 m5 l5 xl4 right"><div class="card-panel light-blue darken-1"><span style="text-decoration:underline;" class="white-text"><a class="white-text" href="/2017/08/security-vulnerability-disclosures">Background: The purpose of these posts</a></span></div></div>
<h4>Background</h4><a href="https://www.youtube.com/watch?v=hxSCyOeW0Gc&t=31">Bergen is one the most beautiful cities in Norway.</a> And the City of Bergen offers this <a href="https://www.bergen.kommune.no/portico/bookingfrontend/?menuaction=bookingfrontend.uiresource.show&id=452">really cool "cabin" with a great view on its mount Fløyen</a> where families can spend a night for free. I was asked if we should try to book a night there. But when I saw the URL of the site the curious developer in me immediately got sidetracked...

<img style="float:right;width:400px;margin-left:20px;margin-bottom:20px;" class="materialboxed responsive-img" title="" data-caption="" src="/images/aktivkommune05.png"/>The booking site is run by a system shared between the municipalities Bergen, Stavanger, Ålesund and Fjell. <a href="https://www.aktiv-kommune.no/">Aktiv kommune</a> is some sort of collective site for this cooperation. <em>The booking system is used by organizations and individuals to book all kinds of facilities and equipment like sport courts, venues, meeting rooms, music instruments, etc. There are thousands of such "resources" that can be booked.</em>

<h4 style="clear:left;">Approach (technical stuff)</h4><a class="skip-link" href="#security-issues"><u>Skip this part</u> 🙈</a>
<h5>Problem 1</h5><img style="float:left;width:400px;margin-right:20px;margin-bottom:20px;" class="materialboxed responsive-img" title="" data-caption="" src="/images/aktivkommune01.png"/>I opened <a href="https://help.vivaldi.com/article/developer-tools/">Vivaldi developer tools</a> while browsing the site. There's a calendar on the site showing the availability of all a selected resource. The calendar data is loaded as JSON via <a href="https://en.wikipedia.org/wiki/Ajax_(programming)">Ajax</a>. <em>I took me like 30 seconds to see that the server returned way too much data - including names, phone numbers, e-mail addresses, Social Security numbers etc.</em>

This just so common - the server returns some kind of serialized data structure that contains much more information than what is used for the user interface. This reminded me of <a href="/2018/08/norconsult-soap-leak">the case where the garbage collection calendar app leaked personal data</a>.

<h5>Problem 2 + 3</h5><img style="float:left;width:400px;margin-right:20px;margin-bottom:20px;" class="materialboxed responsive-img" title="" data-caption="" src="/images/aktivkommune02.png"/>Days after I reported the issue I was still curious of the site would be safe to use when that issue was fixed. I filled out the application form and uploaded an attachment. The URL to the finished application contained a "secret" so that no one should be able to guess the URL to your application. Other than that the ID seemed to be an incremental integer. But did the URL to the attached document in the application contain some kind of secret? Guess what, it didn't. <em>The URL to all documents uploaded by users was based on an incremental integer ID. One could systematically go through and download all the documents.</em>

I just checked a few, but <em>to my surprise and horror the documents included photos of ID cards, passports, family photos and e-mails</em>. Now this was not the kind of data I wanted stored on my computer even though it was available openly on the Internet. Luckily I found <em>another unprotected URL which "just" listed the file names of all the uploaded documents</em>. This made it easier to document the vulnerability without actually downloading stuff. <em>The file list contained "interesting names" like full names, images with identifiers clearly pointing back to Facebook, words like <i>"passport"</i>, <i>"visa"</i>, <i>"e-mail"</i>, <i>"rental agreement"</i>, <i>"ticket"</i> etc.</em>

<h4 id="security-issues">Security issues</h4>For years (City of Bergen estimates <em>8+ years</em>) it was possible to retrieve a variation of the following information about persons booking resources:
<em> - Full name
 - Phone number
 - E-mail address
 - Full address
 - <a href="https://en.wikipedia.org/wiki/National_identification_number#Norway">Social Security number</a></em>
 - Comment
 <em> - Attached documents</em>
 - Gender and age groups (0-12, 13-19, 20+) of attendees</em>

Among the available documents there were a few <em>ID cards, passports, tickets, visa, family photos, contracts and e-mails.</em>

For the mentioned cabin you could see who were to stay there a given night - including age group and gender of each family member.

According to the municipalities themselves there were leaked information about <em>3,142 individuals in City of Bergen, 628 in Fjell municipality and 16 in City of Ålesund. City of Stavanger seems to have "forgotten" to tell the number of persons of affected.</em> I suppose that in addition there were documents and other information about organizations available.

<h4>Reception and handling</h4><h5>Day zero</h5>As the booking system was used by several municipalities on different URLs I wasn't sure what would be the best contact point. I sent an e-mail to Norwegian National Security Authority's (NSM) <a href="https://www.nsm.stat.no/norcert">NorCERT</a> (<a href="https://en.wikipedia.org/wiki/Computer_emergency_response_team">Computer Emergency Response Team</a>) and they said they could contact the right persons. The few times I have talked with NorCERT they have always been very helpful, responsive and effective.

<h5>Day 2</h5>Two days later I got responses from NorCERT, Aktiv kommune (City of Stavanger) and City of Bergen. A project manager from Aktiv kommune thanked me and told me that they had fixed the issue and reported it to The Norwegian Data Protection Authority (DPA) - <a href="https://www.datatilsynet.no/en/">Datatilsynet</a>.

<h5>Day 5</h5><em>I noticed the other issue</em> with documents being downloadable and at night reported that to Aktiv kommune and City of Bergen.

<h5>Day 6</h5>Some e-mailing back and forth and the issue was fixed. Then <a href="https://www.bergen.kommune.no/hvaskjer/sistenytt/article-160810">City of Bergen</a>, <a href="https://www.stavanger.kommune.no/nyheter/sikkerhetshull-i-bestillingslosning/">City of Stavanger</a>, <a href="https://www.alesund.kommune.no/aktuelt/nyhetsarkiv/9956-sikkerhetshull-funnet-i-bookinglosning">City of Ålesund</a> and <a href="https://www.fjell.kommune.no/aktuelt/tryggleiksbrot-funne-i-bookingloysning/">Fjell municipality</a> posted each own news article describing the issue.

<h5>What they didn't tell</h5>The problem with the news articles posted by the municipalities was that they seemed geared towards the issue reported initially. <em>They don't mention any of the leaked documents. No passports, no ID cards, no e-mails, no contracts, no nothing. I asked the City of Bergen about this, and that is actually the only e-mail they have not responded to.</em>

The report from City of Bergen to the DPA is one of the most honest and best ones I have read. They mention 5 passports, but I believe that number to be incorrect. Yes, if you look quickly at the filenames (and assume equal filenames in a row are duplicates) you will see 5 files containing the word <i>"pass"</i>. But the ID cards and passport I saw had other types of filenames. They also say the quality on the images were low. Well, that cannot be said about the ones I saw. <em>In addition there were filenames with <i>"pasaporte"</i>, <i>"visa"</i>, <i>"flights"</i>, <i>"itinerary"</i> ,<i>"paszport"</i>, <i>"ticket"</i> and quite a few full names and what seems to be e-mails and contracts</em>. I hope they will report that as well.

The report also doesn't say that someone externally reported the issue with the documents. And it doesn't say that this happened days after. The report starts out so honest, but then it becomes the questionable text that the DPA usually receives.

<h5>Handling summary</h5> ✅ The issues were fixed quickly
 ✅ The DPA was alerted
 ✅ The individuals affected were informed by e-mail
 ☑️ Mostly open about number of persons affected
 ❌ City of Bergen's report to DPA seems lacking
 ❌ Not mentioning document leak in news articles or e-mails
 ❌ Not mentioning anywhere that one could also see the gender and age groups of the people accommodated

<h4>Conclusion</h4>As we all know by now, leaks like this happen constantly. This is why I started publishing the issues that I trip over when I'm online. We need more focus on IT security in IT education, in IT projects and in IT companies. And people should be cautious about what information is left where.

On a positive note, the handling of this issue on City of Bergen's hand was quite a few steps up from the last time they where in the media in regards of security issues.
`,
                "images": ["/images/aktivkommune01.png", "/images/aktivkommune02.png", "/images/aktivkommune03.png", "/images/aktivkommune04.png", "/images/aktivkommune05.png", "/images/aktivkommune06.png"],
                "category":
                {
                    "title": "Security",
                    "url": "/security"
                },
                "tags": [
                    {
                        "title": "Security Monday",
                        "url": "/security-monday"
                    },
                    {
                        "title": "Information leak",
                        "url": "/information-leak"
                    },
                    {
                        "title": "PHP",
                        "url": "/php"
                    },
                    {
                        "title": "Social Security numbers",
                        "url": "/ssn"
                    },
                    {
                        "title": "OWASP 2017 A3",
                        "url": "/owasp-2017-a3"
                    },
                    {
                        "title": "OWASP 2017 A5",
                        "url": "/owasp-2017-a5"
                    }
                ]
            },
            {
                "title": "Smart meter part 1: Getting the meter data",
                "published": true,
                "publishDate": "2019-07-22T08:30:00.000Z",
                "summary": `Tag along while I show you how I got access to my realtime electricity usage connecting to my smart meter's HAN port.`,
                "niceUrl": "/2019/07/smart-meter-1",
                "text": `By now <a href="https://www.nve.no/energy-market-and-regulation/retail-market/smart-metering-ams">all electricity consumers in Norway are supposed to have got their electricity meters replaced</a> with new <a href="https://en.wikipedia.org/wiki/Smart_meter">smart meters</a>. (The smart meters are often referred to as AMS (Advanced Metering System)). The new smart meters register electricity consumption at least every hour and automatically sends it to the power company. There's no more use for manually reporting the usage.

What's interesting is that <em>the new smart meters all come with a so-called HAN port (short for <a href="https://en.wikipedia.org/wiki/Home_network">Home Area Network</a>). Using that port it's possible to get full access to your own electricity usage realtime</em>. While I'm sure great services (and APIs) for using this data will be provided by both my energy company and third party vendors I didn't want to sit back and wait. (You can today get access to a bit of delayed hourly usage if you log in to <a href="https://plugin.elhub.no/">https://plugin.elhub.no/</a>. They also have some nice Ajax calls which are easy to understand and tweak.)

<h4>Step 1 - opening the HAN port</h4><img style="float:left;width:400px;margin-right:20px;margin-bottom:20px;" class="materialboxed responsive-img" title="Smart meter with RJ-45 HAN port." data-caption="Smart meter with RJ-45 HAN port." src="/images/ams01.jpg"/>By default the physical HAN ports of the smart meters are closed off and not sending any data. <em>All you need to do is to contact customer support at your power company and they'll quickly open it remotely.</em>

My power company - Norgesnett - used almost a month to open it up as they said the newly installed meter had to first be registered in some computer system. Of course <a href="https://blog.roysolberg.com/2018/04/power-company-leak">I also noticed a pretty bad security vulnerability</a> while at it.

<h4>Step 2 - getting the hardware</h4>The smart meters use the <a href="https://en.wikipedia.org/wiki/Meter-Bus">M-Bus</a> standard for the physical data transfer. So to read the data stream you need to get some kind of M-Bus converter. The smart meters act as a so-called <i>master</i> and the receiver must be a <i>slave</i>. The master gives enough power to run a slave.

<h5>Hardware - first try</h5>From what I read from the forums a lot of people are using - successfully - <a href="https://www.aliexpress.com/item/32814808312.html">this (or similar) M-Bus to USB master/slave found on AliExpress</a>, but for me and others it didn't work. I received shorter packages than expected and only the first part of it was readable for me.

Not being an electrical engineer and not knowing how to debug or resolve this I just threw money at the problem and bought another converter.

<h5>Hardware - second try</h5><img style="float:left;width:400px;margin-right:20px;margin-bottom:20px;" class="materialboxed responsive-img" title="Raspberry Pi with M-Bus to USB converter connected to HAN port." data-caption="Raspberry Pi with M-Bus to USB converter connected to HAN port." src="/images/ams02.jpg"/>Another commonly used <a href="https://www.ebay.com/sch/i.html?_nkw=USB+MBUS+Slave+Module">M-Bus to USB master/slave from eBay</a>  (the exact same product from the same seller no longer exists, but it looks like <a href="https://i.ebayimg.com/00/s/ODAwWDgwMA==/z/ywgAAOSwfTlcHF5u/$_12.JPG">this</a> and can be found doing a <a href="https://www.ebay.com/sch/i.html?_nkw=USB+MBUS+Slave+Module">search</a>) did the trick for me. I connected it to my good old <a href="https://www.komplett.no/product/774016">Raspberry Pi (Model B Rev 2)</a>. <em>The HAN port in the smart meters has a <a href="https://en.wikipedia.org/wiki/Modular_connector#8P8C">RJ-45</a> connector with the signal being transmitted on pin 1 + 2.</em> So I just used an old network cable to connect the smart meter and converter.

<h4>Step 3 - reading raw data</h4><a href="https://en.wikipedia.org/wiki/Python_(programming_language)">Python</a> is not my mother tongue, but it's a language I really like and enjoy writing. It's almost always available on whatever system you're on, and the standard library is pretty extensive. Do a simple <code><a href="https://packaging.python.org/guides/tool-recommendations/#installation-tool-recommendations">pip</a> install <a href="https://pythonhosted.org/pyserial/">pyserial</a></code> and you're ready to read data from the USB port.

The <a href="https://en.wikipedia.org/wiki/Serial_port#Settings">serial port settings</a> for the data stream for me was 2400 baud, parity bit none and byte size 8 bits.

So doing something similar to this I got the raw data stream (code works in both Python version 2.7 and 3.4):
<pre class="prettyprint lang-py">import serial
import codecs
import sys

ser = serial.Serial(
    port='/dev/ttyUSB0',
    baudrate=2400,
    parity=serial.PARITY_NONE,
    stopbits=serial.STOPBITS_ONE,
    bytesize=serial.EIGHTBITS,
    timeout=4)
print("Connected to: " + ser.portstr)

while True:
    bytes = ser.read(1024)
    if bytes:
        print('Got %d bytes:' % len(bytes))
        bytes = ('%02x' % int(codecs.encode(bytes, 'hex'), 16)).upper()
        bytes = ' '.join(bytes[i:i+2] for i in range(0, len(bytes), 2))
        print(bytes)
    else:
        print('Got nothing')</pre>
It would output something similar to this (I have anonymized the data a bit):
<pre class="prettyprint lang-html">Connected to: /dev/ttyUSB0
Got 228 bytes:
7E A0 E2 2B 21 13 23 9A E6 E7 00 0F 00 00 00 00 0C 07 E3 06 12 02 14
2F 32 FF 80 00 80 02 19 0A 0E 4B 61 6D 73 74 72 75 70 5F 56 30 30 30
31 09 06 01 01 00 00 05 FF 0A 10 32 32 30 30 35 36 37 32 32 33 31 39
37 37 31 34 09 06 01 01 60 01 01 FF 0A 12 36 38 34 31 31 33 31 42 4E
32 34 33 31 30 31 30 34 30 09 06 01 01 01 07 00 FF 06 00 00 06 A7 09
06 01 01 02 07 00 FF 06 00 00 00 00 09 06 01 01 03 07 00 FF 06 00 00
00 00 09 06 01 01 04 07 00 FF 06 00 00 01 E0 09 06 01 01 1F 07 00 FF
06 00 00 00 88 09 06 01 01 33 07 00 FF 06 00 00 02 36 09 06 01 01 47
07 00 FF 06 00 00 00 6D 09 06 01 01 20 07 00 FF 12 00 EB 09 06 01 01
34 07 00 FF 12 00 EB 09 06 01 01 48 07 00 FF 12 00 EB 83 77 7E</pre>
<h4>Step 4 - understanding OBIS</h4>So what are those bytes coming from the HAN port? They are following the DLMS (Device Language Message Specification) protocol and are sent inside HDLC frames and contains OBIS (Object Identification System) codes that describes the electricity usage. Everything is part of <a href="https://en.wikipedia.org/wiki/IEC_62056">IEC 62056</a> which is a set of standards for electricity metering data exchange.

How often the messages arrives varies from one meter vendor to another. The same goes for the actual format of the messages. I don't know if there are any other vendors, but at least Aidon, Kaifa and Kamstrup have made smart meters for the Norwegian market, and they all provide documentation for their own OBIS messages.

<em>On my Kamstrup meter I get the current power used every 10 second + the total kWh usage every hour.</em>

To really understand the HDLC and OBIS codes you need dig into different sources around the Internet, but the Norwegian forums at <a href="https://www.hjemmeautomasjon.no/forums/forum/12-strømsparing-og-strøm-overvåkning/">hjemmeautomasjon.no</a> is a great source of information. There are so many knowledgeable people sharing their work and helping each other out.

<h5>Realtime usage - every 10 second</h5>I assume I haven't got everything figured out and there are likely some errors, but this is my interpretation of the message:
<pre class="prettyprint lang-html">
Header:
7E                                                        <-- Frame start flag
A                                                         <-- 4 bits, A = 0b1010 = frame format type 3
0E2                                                       <-- 1 bit, segmentation bit + 11 bits, frame length sub-field, 0xE2 = 226 bytes (excluding opening and closing frame flags)
2B                                                        <-- Destination address, 1 bit, 0b1 = unicast + 6 bit, node address, 0b010101 = 21 + 1 bit, address size, 0b1 = 1 byte
21                                                        <-- Source address, 1 bit, 0b1 = unicast + 6bit, node address, 0b010000 = 16 + 1 bit, address size, 0b1 = 1 byte
13                                                        <-- Control field
23 9A                                                     <-- Header check sequence (HCS) field, CRC-16/X-25


Information:

E6                                                        <-- Destination LSAP
E7                                                        <-- Source LSAP, LSB = 0b1 = command
00                                                        <-- LLC Quality
0F                                                        <-- LLC Service Data Unit
00 00 00 00                                               <-- "Long-Invoke-Id-And-Priority"?
0C                                                        <-- string length?, 0C = 12
   07 E3                                                  <-- Full year, 0x07E3 = 2019
   06                                                     <-- Month, June
   12                                                     <-- Day of month, 0x12 = 18
   02                                                     <-- Day of week, Tuesday
   14                                                     <-- Hour of day, 0x14 = 20
   2F                                                     <-- Minute of hour, 0x2F = 47
   32                                                     <-- Second of minute, 0x32 = 50
   FF                                                     <-- Hundredths of second, 0xFF = not specified
   80 00                                                  <-- Deviation (offset from UTC), 0x8000 = not specified
   80                                                     <-- Clock status, 0x80 = 0b10000000, <a href="https://en.wikipedia.org/wiki/Bit_numbering#Most_significant_bit">MSB</a> 1 = <a href="https://en.wikipedia.org/wiki/Daylight_saving_time">summer time</a>
   
02                                                        <-- struct
   19                                                     <-- 0x19 = 25 elements

0A                                                        <-- visible-string
   0E                                                     <-- string length 0x0E = 14 bytes
       4B 61 6D 73 74 72 75 70 5F 56 30 30 30 31          <-- OBIS List Version Identifier, Kamstrup_V0001

09                                                        <-- octet-string
   06                                                     <-- string length, 0x06 = 6 bytes
      01 01 00 00 05 FF                                   <-- OBIS for Meter ID, 1.1.0.0.5.255
0A                                                        <-- visible-string
   10                                                     <-- string length, 10 = 16 bytes  
       32 32 30 30 35 36 37 32 32 33 31 39 37 37 31 34    <-- Meter ID, altered

09                                                        <-- octet-string
   06                                                     <-- string length, 0x06 = 6 bytes
      01 01 60 01 01 FF                                   <-- OBIS for meter type, 1.1.96.1.1.255
0A                                                        <-- visible-string
   12                                                     <-- string lenth, 0x12 = 18 bytes
   36 38 34 31 31 33 31 42 4E 32 34 33 31 30 31 30 34 30  <-- Meter type, 6841131BN243101040)

09                                                        <-- octet-string
   06                                                     <-- string length, 0x06 = 6 bytes
      01 01 01 07 00 FF                                   <-- OBIS for Active Power +, 1.1.1.7.0.255
06                                                        <-- unsigned, 4 bytes
   00 00 06 A7                                            <-- 0x06A7 = 1703 Watt

09                                                        <-- octet-string
   06                                                     <-- string length, 0x06 = 6 bytes
      01 01 02 07 00 FF                                   <-- OBIS for Active Power -, 1.1.2.7.0.255
06                                                        <-- unsigned, 4 bytes
    00 00 00 00                                           <-- 0 Watt
    
09                                                        <-- octet-string
   06                                                     <-- string length, 0x06 = 6 bytes
      01 01 03 07 00 FF                                   <-- OBIS for Reactive Power +, 1.1.3.7.0.255
06                                                        <-- unsigned, 4 bytes
    00 00 00 00                                           <-- 0 Watt

09                                                        <-- octet-string
   06                                                     <-- string length, 0x06 = 6 bytes
      01 01 04 07 00 FF                                   <-- OBIS for Reactive Power -, 1.1.4.7.0.255
06                                                        <-- unsigned, 4 bytes
   00 00 01 E0                                            <-- 0x01E0 = 480 Watt

09                                                        <-- octet-string
   06                                                     <-- string length, 0x06 = 6 bytes
      01 01 1F 07 00 FF                                   <-- OBIS for L1 Current, 1.1.31.7.0.255
06                                                        <-- unsigned, 4 bytes
   00 00 00 88                                            <-- 1.36 Ampere

09                                                        <-- octet-string
   06                                                     <-- string length, 0x06 = 6 bytes
      01 01 33 07 00 FF                                   <-- OBIS for L2 Current, 1.1.51.7.0.255
06                                                        <-- unsigned, 4 bytes
   00 00 02 36                                            <-- 5.66 Ampere

09                                                        <-- octet-string
   06                                                     <-- string length, 0x06 = 6 bytes
      01 01 47 07 00 FF                                   <-- OBIS for L3 Current, 1.1.71.7.0.255
06                                                        <-- unsigned, 4 bytes
   00 00 00 6D                                            <-- 1.09 Ampere
   
09                                                        <-- octet-string
   06                                                     <-- string length, 0x06 = 6 bytes
      01 01 20 07 00 FF                                   <-- OBIS for L1 Voltage, 1.1.32.7.0.255
12                                                        <-- unsigned, 2 bytes
   00 EB                                                  <-- 235 Volt

09                                                        <-- octet-string
   06                                                     <-- string length, 0x06 = 6 bytes
      01 01 34 07 00 FF                                   <-- OBIS for L2 Voltage, 1.1.52.7.0.255
12                                                        <-- unsigned, 2 bytes
   00 EB                                                  <-- 235 Volt

09                                                        <-- octet-string
   06                                                     <-- string length, 0x06 = 6 bytes
      01 01 48 07 00 FF                                   <-- OBIS for L3 Voltage, 1.1.72.7.0.255
12                                                        <-- unsigned, 2 bytes
   00 EB                                                  <-- 235 Volt


End:

83 77                                                     <-- Frame check sequence (FCS) field, CRC-16/X-25, altered
7E                                                        <-- Frame end flag
</pre>

<em>For me the most interesting part of this message is the OBIS for <i>Active Power +</i> (1.1.1.7.0.255) which tells how much power - in Watt - that is currently being used. If you have a house that produces electricity and exports it to the grid (e.g. if you have solar cells) the exported power would appear as the OBIS for <i>Active Power -</i> (1.1.2.7.0.255).</em>

<h5>Total usage - every hour</h5>The message appearing hourly is similar to the one that comes every 10 second, but contains a bit more information:
<pre class="prettyprint lang-html">Connected to: /dev/ttyUSB0
Got 302 bytes:
7E A1 2C 2B 21 13 FC 04 E6 E7 00 0F 00 00 00 00 0C 07 E3 07 09 02 14
00 05 FF 80 00 80 02 23 0A 0E 4B 61 6D 73 74 72 75 70 5F 56 30 30 30
31 09 06 01 01 00 00 05 FF 0A 10 32 32 30 30 35 36 37 32 32 33 31 39
37 37 31 34 09 06 01 01 60 01 01 FF 0A 12 36 38 34 31 31 33 31 42 4E
32 34 33 31 30 31 30 34 30 09 06 01 01 01 07 00 FF 06 00 00 01 6C 09
06 01 01 02 07 00 FF 06 00 00 00 00 09 06 01 01 03 07 00 FF 06 00 00
00 00 09 06 01 01 04 07 00 FF 06 00 00 01 42 09 06 01 01 1F 07 00 FF
06 00 00 00 85 09 06 01 01 33 07 00 FF 06 00 00 00 5C 09 06 01 01 47
07 00 FF 06 00 00 00 3F 09 06 01 01 20 07 00 FF 12 00 EB 09 06 01 01
34 07 00 FF 12 00 EB 09 06 01 01 48 07 00 FF 12 00 EB 09 06 00 01 01
00 00 FF 09 0C 07 E3 07 09 02 14 00 05 FF 80 00 80 09 06 01 01 01 08
00 FF 06 00 38 DE 2A 09 06 01 01 02 08 00 FF 06 00 00 00 00 09 06 01
01 03 08 00 FF 06 00 00 00 1F 09 06 01 01 04 08 00 FF 06 00 09 00 85
83 77 7E</pre>
I've left out the identical parts of the message:
<pre class="prettyprint lang-html">
Header:
[...same as first message...]

Information:
[...same as first message...]
02                                                        <-- struct
   23                                                     <-- 0x23 = 35 elements
[...]
      4B 61 6D 73 74 72 75 70 5F 56 30 30 30 31           <-- OBIS List Version Identifier, Kamstrup_V0001
[...]
      01 01 00 00 05 FF                                   <-- OBIS for Meter ID, 1.1.0.0.5.255
[...]
      01 01 60 01 01 FF                                   <-- OBIS for meter type, 1.1.96.1.1.255
[...]
      01 01 01 07 00 FF                                   <-- OBIS for Active Power +, 1.1.1.7.0.255
[...]
      01 01 02 07 00 FF                                   <-- OBIS for Active Power -, 1.1.2.7.0.255
[...]
      01 01 03 07 00 FF                                   <-- OBIS for Reactive Power +, 1.1.3.7.0.255
[...]
      01 01 04 07 00 FF                                   <-- OBIS for Reactive Power -, 1.1.4.7.0.255
[...]
      01 01 1F 07 00 FF                                   <-- OBIS for L1 Current, 1.1.31.7.0.255
[...]
      01 01 33 07 00 FF                                   <-- OBIS for L2 Current, 1.1.51.7.0.255
[...]
      01 01 47 07 00 FF                                   <-- OBIS for L3 Current, 1.1.71.7.0.255
[...]
      01 01 20 07 00 FF                                   <-- OBIS for L1 Voltage, 1.1.32.7.0.255
[...]
      01 01 34 07 00 FF                                   <-- OBIS for L2 Voltage, 1.1.52.7.0.255
[...]
      01 01 48 07 00 FF                                   <-- OBIS for L3 Voltage, 1.1.72.7.0.255
[...]
09                                                        <-- octet-string
  06                                                      <-- string length, 0x06 = 6 bytes
    00 01 01 00 00 FF                                     <-- OBIS for Real Time Clock (RTC), 0.1.1.0.0.255
09                                                        <-- octet-string
  0C                                                      <-- string length, 0x0C = 12 bytes
    07 E3                                                 <-- Full year, 0x07E3 = 2019
    07                                                    <-- Month, July
    09                                                    <-- Day of month, 9
    02                                                    <-- Day of week, Tuesday
    14                                                    <-- Hour of day, 0x14 = 20
    00                                                    <-- Minute of hour, 0
    05                                                    <-- Second of minute, 5
    FF                                                    <-- Hundredths of second, 0xFF = not specified
    80 00                                                 <-- Deviation (offset from UTC), 0x8000 = not specified
    80                                                    <-- Clock status, 0x80 = 0b10000000, <a href="https://en.wikipedia.org/wiki/Bit_numbering#Most_significant_bit">MSB</a> 1 = <a href="https://en.wikipedia.org/wiki/Daylight_saving_time">summer time</a>

09                                                        <-- octet-string
  06                                                      <-- string length, 0x06 = 6 bytes
    01 01 01 08 00 FF                                     <-- OBIS for Active energy A+, 1.1.1.8.0.255
06                                                        <-- unsigned, 4 bytes
  00 38 DE 2A                                             <-- 0x38DE2A = 3,726,890 = 37,268.90 kWh

09                                                        <-- octet-string
  06                                                      <-- string length, 0x06 = 6 bytes
    01 01 02 08 00 FF                                     <-- OBIS for Active energy A-, 1.1.2.8.0.255
06                                                        <-- unsigned, 4 bytes
  00 00 00 00                                             <-- 0 kWh

09                                                        <-- octet-string
  06                                                      <-- string length, 0x06 = 6 bytes
    01 01 03 08 00 FF                                     <-- OBIS for Reactive energy R+, 1.1.3.8.0.255
06                                                        <-- unsigned, 4 bytes
  00 00 00 1F                                             <-- 0x1F = 31 = 0.31 kWh?

09                                                        <-- octet-string
  06                                                      <-- string length, 0x06 = 6 bytes
    01 01 04 08 00 FF                                     <-- OBIS for Reactive energy R-, 1.1.4.8.0.255
06                                                        <-- unsigned, 4 bytes
  00 09 00 85                                             <-- 0x090085 = 589957 = 5,899.57 kWh?

End:
[...same as first message...]
</pre>
<em>The only part that I really care about is the <i>Active energy A+</i> (OBIS code 1.1.1.8.0.255), which is total power usage - in kilowatt hour (kWh) - since the installation of the smart meter. Keeping track of this value one knows the hourly power consumption.</em> This is the value you have to pay for. If you produce and exports power it would appear as <i>Active energy A-</i> (1.1.2.8.0.255).

<h5>Error detection</h5>Error detection is supported through <a href="https://en.wikipedia.org/wiki/Cyclic_redundancy_check">cyclic redundancy check (CRC)</a> in both the header and footer of the frame. In the start there is a <a href="https://en.wikipedia.org/wiki/Header_check_sequence">header check sequence (HCS)</a>, and in the end there is a <a href="https://en.wikipedia.org/wiki/Frame_check_sequence">frame check sequence (FCS)</a>. <em>The checksum algorithm used is the CRC-16/X-25.</em> There are libraries for all kinds of programming languages implementing all sorts of checksum calculations. I have used the Python library <a href="https://pypi.org/project/crccheck">crccheck</a> which provides the class <code>CrcX25</code> which takes care of this.

<h5>Links to more information</h5>Here are some of the sources of information I've used for deciphering the messages. I'll leave them here for anyone wanting to dive deeper:
- <a href="https://www.dlms.com/files/Green-Book-Ed-83-Excerpt.pdf">https://www.dlms.com/files/Green-Book-Ed-83-Excerpt.pdf</a>
- <a href="https://www.dlms.com/files/Blue-Book-Ed-122-Excerpt.pdf">https://www.dlms.com/files/Blue-Book-Ed-122-Excerpt.pdf</a>
- <a href="https://github.com/roarfred/AmsToMqttBridge/blob/master/Samples/Kaifa/readme.md">https://github.com/roarfred/AmsToMqttBridge/blob/master/Samples/Kaifa/readme.md</a>
- <a href="https://github.com/roarfred/AmsToMqttBridge/blob/master/Samples/Kamstrup/obisdata.md">https://github.com/roarfred/AmsToMqttBridge/blob/master/Samples/Kamstrup/obisdata.md</a>
- <a href="http://www.interfacebus.com/HDLC_Protocol_Description.html">http://www.interfacebus.com/HDLC_Protocol_Description.html</a>
- <a href="https://www.hjemmeautomasjon.no/forums/topic/390-ny-strømmåler-med-han-interface/?page=4">https://www.hjemmeautomasjon.no/forums/topic/390-ny-strømmåler-med-han-interface/?page=4</a>
- <a href="https://www.nek.no/wp-content/uploads/2018/10/Kamstrup-HAN-NVE-interface-description_rev_3_1.pdf">https://www.nek.no/wp-content/uploads/2018/10/Kamstrup-HAN-NVE-interface-description_rev_3_1.pdf</a>
- <a href="https://byggebolig.no/imageoriginals/88b3d1774ecb41e6a3fe067ae9e6a893.pdf">https://byggebolig.no/imageoriginals/88b3d1774ecb41e6a3fe067ae9e6a893.pdf</a>

<h4>Rounding it up</h4>That's it. In this post I've shown how I connected to the HAN port of my smart meter, how I read the data and how to transform the byte arrays into meaningful information. <em>In the next post I'll discuss how I store the data and calculate the price of the electricity usage.</em>`,
                "images": ["/images/ams02.jpg", "/images/ams01.jpg"],
                "category":
                {
                    "title": "Software development",
                    "url": "/software-development"
                },
                "tags": [
                    {
                        "title": "Smart meter",
                        "url": "/smart-meter"
                    }
                ]
            },
            {
                "title": "Smart meter part 2: Data storage and price info",
                "published": true,
                "publishDate": "2019-07-29T06:55:00.000Z",
                "summary": `To present the electricity usage in a nice way we first need store the data somewhere and get hold of the price information.`,
                "niceUrl": "/2019/07/smart-meter-2",
                "text":
                    `In the <a href="/2019/07/smart-meter-1">previous post</a> I showed how I fetch and decode the power usage from my smart meter. Before the grand final I'll go through the middle step where I upload the data and make it available for querying. Also, usage in itself doesn't paint the whole picture, so the price information is also fetched and stored.

<h4>Electricity price</h4><h5>Price structure</h5>In Norway we have to pay for both the electricity usage itself and a network tariff. The latter has two components; a fixed price and a cost per kWh. The price is different from power company to power company.

At the time of writing the price for me was as follows:

<table class="summary">
<tr><td style="width:30%"><b>Tariff (🇳🇴: Nettleie)</b></td></tr>
<tr>
<td style="width:30%"> - Fixed component (Fastledd)</td>
<td>NOK 2,615 per year</t>
</tr>
<tr>
<td style="width:30%"> - Energy component (Energiledd)</td>
<td>NOK 0.4202 per kWh</td>
</tr>
<tr>
<td style="width:30%"><b>Electricity price</b></td>
<td>NOK 0.4663 per kWh</td>
</tr>
<tr>
</table>
Most of the time I'm paying some variant of <a href="https://en.wikipedia.org/wiki/Spot_contract">spot price</a> for the electricity. It varies from day to day. The tariff is set yearly with its energy component being a bit cheaper in the summer than in the winter.

<h5>Fetching the price info</h5>I didn't find a publicly available free API for the electricity spot price, so I used some power company website's <a href="https://en.wikipedia.org/wiki/Ajax_(programming)">Ajax</a> call to get the updated price.

Using <a href="https://pypi.org/project/requests/"><code>requests</code></a>, the Python script I have that uploads the usage also checks for the current price with a call to this <a href="https://en.wikipedia.org/wiki/Representational_state_transfer">REST</a> endpoint every hour.

I haven't looked that hard, but I haven't seen any APIs at all for the tariff at all. But being set once a year it doesn't take much time or energy to set it manually.

<h4>Storing the data</h4>As I'm pretty familiar with <a href="https://firebase.google.com/products">Google's Firebase tech stack</a> I landed on using the NoSQL <a href="https://firebase.google.com/products/firestore/">Cloud Firestore</a> for storing the usage data.

To my surprise I would have to recompile Python on my Raspberry Pi to be able to use the <a href="https://github.com/firebase/firebase-admin-python"><code>firebase-admin</code> client library</a> directly in my code. I didn't want to do that, so I decided to use <a href="https://firebase.google.com/products/functions/">Cloud Functions</a> for an endpoint that could receive the data from my Raspberry Pi.

<h5>Function for storing data</h5>I've tweaked the code a bit here, but generally this is what the function does. Remember to add some level of authentication to not leave it wide open.
<pre class="prettyprint lang-js">const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

exports.registerReading = functions.https.onRequest((request, response) => {
    try {
        let incomingReadings = request.body;
        let db = admin.firestore();
        let dbReadings = [];
        for (const incomingReading of incomingReadings) {
            if (isValid(incomingReading)) {
                let dbReading = {
                    "meterId": incomingReading["meterId"],
                    "parseTimeUtc": incomingReading["parseTimeUtc"],
                    "dataTimeLocal": incomingReading["dataTimeLocal"],
                    "meterType": incomingReading["meterType"],
                    "activePower+": incomingReading["activePower+"],
                    "activePower-": incomingReading["activePower-"],
                    "l1Voltage": incomingReading["l1Voltage"],
                    "l2Voltage": incomingReading["l2Voltage"],
                    "l3Voltage": incomingReading["l3Voltage"],
                    "price": incomingReading["price"],
                    "priceTimeUtc": incomingReading["priceTimeUtc"],
                    "raw": incomingReading["raw"] // The raw bytes coming from the meter
                }
                var collectionId = incomingReading.meterId; // We use the meter id as the collection ID
                if (incomingReading["activeEnergy+"] || incomingReading["activeEnergy-"]) { // Hourly reading
                    dbReading["activeEnergy+"] = incomingReading["activeEnergy+"];
                    dbReading["activeEnergy-"] = incomingReading["activeEnergy-"];
                    collectionId += '-energy'; // We use a different collection for when having the hourly energy readings
                }
                let docRef = db.collection(collectionId).doc();
                docRef.set(dbReading);
                dbReadings.push(dbReading);
            } else {
                // [...error handling...]
            }
        }
    } catch (e) {
        // [...error handling...]
    }
    // [...]
});
</pre>
I soon discovered that uploading the usage every 10 second blew the daily free <a href="https://cloud.google.com/functions/quotas">Functions quota</a> of 5,000 function invocations. So I changed to uploading two readings in one go - ending up on ~4,300 invocations a day.

<h4>Querying the data</h4>Now that the data is safely stored in Firestore it's ready to be queried and presented in any way desired. For me it was easiest to Cloud Functions for reading the data back out as well.

<h5>Function for querying data</h5>Here's a very basic quick and dirty example of doing some querying of the data.
<pre class="prettyprint lang-js">
const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp(functions.config().firebase);

exports.getReadings = functions.https.onRequest((request, response) => {
    try {
        let db = admin.firestore();
        var meterRef = db.collection('2200567223197714-energy');
        var responseStr = "Today's first reading: \\n";
        var queryRef = meterRef.where('dataTimeLocal', '>=', '2019-07-29T00:00:00')
            .where('dataTimeLocal', '<', '2019-07-30T00:00:00')
            .orderBy('dataTimeLocal')
            .limit(1);
        queryRef.get().then(snapshot => {
            if (snapshot.empty) {
                responseStr += 'No matches\\n';
            } else {
                snapshot.forEach(doc => {
                    responseStr += JSON.stringify(doc.data(), null, 4) + '\\n';
                });
            }
            return true;
        }).then(() => {
            responseStr += "Today's latest reading: \\n";
            queryRef = meterRef.where('dataTimeLocal', '>=', '2019-07-29T00:00:00')
                .where('dataTimeLocal', '<', '2019-07-30T00:00:00')
                .orderBy('dataTimeLocal', 'desc')
                .limit(1);
            queryRef.get()
                .then(snapshot => {
                    if (snapshot.empty) {
                        responseStr += 'No matches\\n';
                    } else {
                        snapshot.forEach(doc => {
                            responseStr += JSON.stringify(doc.data(), null, 4) + '\\n';
                        });
                    }
                    response.send(responseStr);
                    return true;
                })
                .catch(err => {
                    responseStr += 'Error: ' + err + '\\n';
                    response.send(responseStr);
                    console.error(err.stack);
                });
            return true;
        }).catch(err => {
            responseStr += 'Error: ' + err + '\\n';
            response.send(responseStr);
            console.error(err.stack);
        });
    } catch (e) {
        responseStr += 'Error: ' + err + '\\n';
        response.send(responseStr);
        console.error(err.stack);
    }
});</pre>
<h4>The final part</h4>So now we have of reading, decoding, storing and querying the power usage data. That's all nice and well, but it doesn't give much value in itself. <em>In the next post I'll show the end product - how I chose to present the data in what I felt was a meaningful and valuable way. For me that is the most interesting and fun part.</em>
`,
                "images": ["/images/ams03.png"],
                "category":
                {
                    "title": "Software development",
                    "url": "/software-development"
                },
                "tags": [
                    {
                        "title": "Smart meter",
                        "url": "/smart-meter"
                    }
                ]
            },
            {
                "title": "Smart meter part 3: Hey Google, how much electricity am I using?",
                "published": true,
                "publishDate": "2019-08-05T21:10:00.000Z",
                "updateDate": "2019-08-06T05:40:00.000Z",
                "summary": `I can ask Google about my power consumption and what my next electricity bill will be.`,
                "niceUrl": "/2019/08/smart-meter-3",
                "text": `In the two previous posts I showed how I <a href="/2019/07/smart-meter-1">read and decode the power usage from my smart meter</a> and also <a href="/2019/07/smart-meter-1">fetch the price info and upload it all to the cloud</a>.
<div style="padding-top:98px;font-size:smaller;" class="col s12 pull-m3 m9 pull-l6 l6 xl4 right"><div class="card-panel light-blue darken-1 white-text">Smart meter series:
- <span style="text-decoration:underline;" class=""><a class="white-text" href="/2019/07/smart-meter-1">Part 1: Getting the meter data</a></span>
- <span style="text-decoration:underline;" class=""><a class="white-text" href="/2019/07/smart-meter-2">Part 2: Storage and price info</a></span>
- <span style="text-decoration:underline;" class=""><a class="white-text" href="/2019/08/smart-meter-3">Part 3: Google Home integration</a></span></div></div>
<h4 title="Too long; didn't read">tl;dr</h4><iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/bjRufJndgsg" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
I have published a <a href="https://www.youtube.com/watch?v=bjRufJndgsg">YouTube demo (in Norwegian) showing off the Google Assistant integration</a> on my 10" <a href="https://www.lenovo.com/us/en/smart-display">Lenovo Smart Display</a> and on my phone. There are also some screenshots in the end of this post.

<h4>Turning data into information</h4>Many - maybe most - of the smart meter integrations I've seen have been focusing on showing a lot of data in some kind of dashboard. While that's powerful and often useful I want to have all the data transformed into meaningful information.

I think <a href="https://assistant.google.com/">Google Assistant</a> on <a href="https://assistant.google.com/intl/no_no/platforms/speakers/">Google Home</a> and <a href="https://assistant.google.com/intl/no_no/platforms/phones/">phones</a> can be a great platform for that. You can get the important information extracted and query the data with human language.

<h4>Learning the Google Assistant platform</h4>It's not very straight forward to make "actions" (apps) for the Google Assistant, but <a href="https://developers.google.com/actions/">the documentation</a> is pretty good so it isn't hard to at least get started. It's impossible for me to describe the whole process here, but I'll give an overview.

I have made a few actions so far; a simple way of <a href="https://assistant.google.com/services/a/uid/0000006c18c886e8?hl=en">getting the latest Premier League team news from FotMob</a>, <a href="https://assistant.google.com/services/a/uid/000000d00fb80fe8?hl=no">the game hangman</a>, and a <a href="https://sbanken.no/aktuelt/info/lanserer-talestyrt-bank/">voice-controlled bank</a> (to be published in September). This experience means that it's relatively quick for me to create an action for this purpose.

<h4>Step 0 - getting an overview</h4>If you want to create something for yourself and you haven't done anything with the Google Assistant platform before you really should <a href="https://developers.google.com/actions/overview">get an overview</a> and in this case especially of the <a href="https://developers.google.com/actions/conversational/overview">custom conversational actions</a>. Also knowing a bit of <a href="https://designguidelines.withgoogle.com/conversation/">conversation design</a> will help you make better user experiences.

<h4>Step 1 - creating the action</h4><img style="float:left;width:250px;margin-right:20px;margin-bottom:20px;" class="materialboxed responsive-img" title="Actions on Google console" data-caption="Actions on Google console" src="/images/ams05.png"/>The first step is to create a new project at the <a href="https://console.actions.google.com/">Actions on Google console</a>. The project type you want is <i>conversional</i>. Then you only have to add some basic information about the action, like the name you want to use.

<h4 style="clear:left;">Step 2 - creating the Dialogflow agent</h4><img style="float:left;width:250px;margin-right:20px;margin-bottom:20px;" class="materialboxed responsive-img" title="Actions on Google console" data-caption="Actions on Google console" src="/images/ams06.png"/>Just following the flow you'll be asked to create your first action; a <i>custom intent</i>. That'll send you to Dialogflow. That is where the fun part starts.

<a href="https://dialogflow.com/">Dialogflow</a> is a Google-owned platform for <a href="https://en.wikipedia.org/wiki/Natural-language_understanding">Natural-language understanding (NLU)</a> and it provides great tools creating the <a href="https://en.wikipedia.org/wiki/Conversational_user_interfaces">conversational user interfaces</a> for the action.

<h5>Intents</h5><img style="float:left;width:400px;margin-right:20px;margin-bottom:20px;" class="materialboxed responsive-img" title="Much of the work in Dialogflow is done within the 'Intents' menu." data-caption="Much of the work in Dialogflow is done within the 'Intents' menu." src="/images/ams08.png"/>Most of the Dialogflow part is about <i>intents</i>. Intents can be seen as commands that the user can give to the action. <i>"How much power am I consuming now?"</i> and <i>"What is the electricity price?"</i> would be routed to two different intents.

You'll be able to train the Dialog agent by giving it some example phrases it should recognize. With the combination of NLU and machine learning it'll magically understand the intention of the user.

<img style="float:right;width:400px;margin-left:20px;margin-bottom:20px;clear:left;" class="materialboxed responsive-img" title="Adding training data to the 'Usage' intent." data-caption="Adding training data to the 'Usage' intent." src="/images/ams09.png"/>The intents I started out with were these:
 - Current usage
 - Usage/cost (at a give time or period)
 - Price (at a give time or period)
 - Estimate (of the next electricity bill)
 - Records (lowest/highest usages/costs)
 
<h4 style="clear:left;">Step 3 - coding the backend webhook</h4>You can't do much advanced functionality for the responses back to the user inside Dialogflow. For that you want to use a so-called <i>fulfillment</i>, i.e. a HTTP endpoint.

It wasn't a coincidence that I <a href="/2019/07/smart-meter-2">in the previous post</a> showed how to query the data using <a href="https://firebase.google.com/products/functions/">Cloud Functions</a>. That function can now be tweaked to handle the Dialogflow intents and return a response to the user.

Here's how I route the different intents Dialogflow have figured out that the user meant:
<pre class="prettyprint lang-js">const functions = require('firebase-functions');
const admin = require('firebase-admin');
const { dialogflow } = require('actions-on-google');

admin.initializeApp(functions.config().firebase);

const app = dialogflow({ debug: false });

app.intent('Default Welcome Intent', (conv) => require('./intent_welcome')(conv));
app.intent('Current usage', (conv) => require('./intent_current_usage')(conv));
app.intent('Usage', (conv, { time }) => require('./intent_usage')(conv, time));
app.intent('Estimate', (conv) => require('./intent_estimate')(conv));
app.intent('Price', (conv, { time }) => require('./intent_price')(conv, time));

exports.dialogflowFulfillment = functions.https.onRequest(app);</pre>
Also notice how Dialogflow have parsed the <code>time</code> parameter. The time can be unspecified, a specific timestamp or a time period. For for example the <code>Usage</code> intent, I take the parameter and query the database for the usage for the specified time.

<img style="float:right;width:400px;margin-left:20px;margin-bottom:20px;" class="materialboxed responsive-img" title="'How much will my next electricity bill be?'" data-caption="'How much will my next electricity bill be?'" src="/images/ams12.png"/>I utilize different <a href="https://developers.google.com/actions/assistant/responses">response types</a> depending on the intent. I use a little bit of <a href="https://developers.google.com/actions/reference/ssml">SSML</a> (Speech Synthesis Markup Language) and if the user has a screen available I often show graphs for details. I landed on using the <a href="https://www.image-charts.com/">imagecharts</a> service for creating the charts I wanted to display.

<b>And that's really it.</b> That's how I've made my Google Assistant app.

<h4 style="clear:left;">Next steps</h4>As more data become available it'll be easier to tell if the usage in a given period is high/expensive and it'll be possible to give a heads up if the usage/price is estimated to be higher than desired or expected.

Actions can <a href="https://developers.google.com/actions/assistant/updates/notifications">push notifications to users</a>. I would like to be notified by Google Assistant whenever the power consumption is a bit too high or if the electricity becomes expensive.

<a href="/2017/08/my-dumb-smart-home">Living in a smart home</a> I have the current temperature for both outside and every room in my house. I also have a few <a href="https://en.wikipedia.org/wiki/Lux">lux</a> sensors which will tell if the sun is shining or not. It would be interesting to add some of that data when uploading the power usage and price information.

<h4>Final reflection</h4><img style="float:left;width:200px;margin-right:20px;margin-bottom:20px;" class="materialboxed responsive-img" title="" data-caption="" src="/images/ams14.jpg"/>Earlier when I lived in a house built in 1981 I had a mechanical power meter in the kitchen that was connected to the power cabinet. It showed the current power consumption. With just a glance you always knew if you were consuming too much energy. There was no need for the Internet, Ebay parts, Raspberry Pi, Python, Firebase, Google Home, etc. It sure was simpler times...
<div class="carousel"><a class="carousel-item" href="#1" onclick="return false;"><img src="https://blog.roysolberg.com/images/ams10.png"></a><a class="carousel-item" href="#2" onclick="return false;"><img src="https://blog.roysolberg.com/images/ams11.png"></a><a class="carousel-item" href="#3" onclick="return false;"><img src="https://blog.roysolberg.com/images/ams12.png"></a><a class="carousel-item" href="#4" onclick="return false;"><img src="https://blog.roysolberg.com/images/ams13.png"></a></div><script>
$(document).ready(function(){
    $('.carousel').carousel({indicators:true,noWrap:true});
});
</script>
`,
                "images": ["/images/ams10.png"],
                "category":
                {
                    "title": "Software development",
                    "url": "/software-development"
                },
                "tags": [
                    {
                        "title": "Smart meter",
                        "url": "/smart-meter"
                    },
                    {
                        "title": "Internet of Things",
                        "url": "/iot"
                    }
                ]
            },
            {
                "title": "Another job opportunity at the Police Security Service",
                "published": true,
                "publishDate": "2019-10-14T04:25:00.000Z",
                "summary": `Here's a walk-through of the Norwegian Police Security Service's latest job ad riddle. Were you able to crack the code?`,
                "niceUrl": "/2019/10/pst-challenge-2",
                "text": `
<h4>Background 👮</h4>The <a href="https://en.wikipedia.org/wiki/Norwegian_Police_Security_Service">Norwegian Police Security Service</a> (with the Norwegian abbreviation <a href="https://www.pst.no/">PST</a> which I'll use for this write-up) is the police <a href="https://en.wikipedia.org/wiki/Security_agency">security agency</a> of Norway. Once in a while they have job ads with some more or less hidden challenges - almost <a href="https://en.wikipedia.org/wiki/Capture_the_flag#Computer_security">Capture the Flag</a> style.

<h5>Previous shark sighting 🦈</h5>In December 2018 they posted a job listing were they included a riddle that they wanted people to solve. I didn't hear of the job posting until it suddenly in January was on the front page of most Norwegian newspapers. <a href="/2019/01/pst-challenge">I published my version of the solution</a> just after the application deadline. The solution was also translated to Norwegian and <a href="https://www.kode24.no/kodenytt/losningen-pa-pst-sin-jobbannonse-gate/70660113">published at kode24.no</a> - a site for Norwegian developers.

PST themselves approved the walk-through:
<blockquote class="twitter-tweet" data-lang="en" data-dnt="true"><p lang="en" dir="ltr">The solution to PSTs shark riddle advert perfectly explained by <a href="https://twitter.com/roysolberg?ref_src=twsrc%5Etfw">@roysolberg</a> <a href="https://t.co/Fsejj3NWgi">https://t.co/Fsejj3NWgi</a> <a href="https://twitter.com/LeoDiCaprio?ref_src=twsrc%5Etfw">@LeoDiCaprio</a> <a href="https://twitter.com/hashtag/hungryshark?src=hash&amp;ref_src=twsrc%5Etfw">#hungryshark</a> <a href="https://t.co/1qNImmhQms">pic.twitter.com/1qNImmhQms</a></p>&mdash; PST (@PSTnorge) <a href="https://twitter.com/PSTnorge/status/1085138559722536960?ref_src=twsrc%5Etfw">January 15, 2019</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
To my surprise and amusement, screenshots from that <a href="https://kode24.no">kode24.no</a> post was shown for some seconds on a show on the Norwegian TV channel <a href="https://en.wikipedia.org/wiki/NRK">NRK</a>:
<blockquote class="twitter-tweet" data-lang="en" data-dnt="true"><p lang="en" dir="ltr">Things I did not expect: Seeing my own JavaScript code live on the TV channel <a href="https://twitter.com/NRKno?ref_src=twsrc%5Etfw">@NRKno</a> a Saturday night. Achievement unlocked. 😂 CC: <a href="https://twitter.com/kode24no?ref_src=twsrc%5Etfw">@kode24no</a> <a href="https://twitter.com/PSTnorge?ref_src=twsrc%5Etfw">@PSTnorge</a> <a href="https://t.co/FIN0afWgYW">pic.twitter.com/FIN0afWgYW</a></p>&mdash; Roy Solberg (@roysolberg) <a href="https://twitter.com/roysolberg/status/1091807598951706624?ref_src=twsrc%5Etfw">February 2, 2019</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
Now, I didn't expect to do another one of these walk-throughs this soon, but all of the sudden the interesting Twitter handle <a href="https://twitter.com/twitt3rhai"><code>twitt3rhai</code></a> (=Twitter shark) tweeted what might appear as random characters. <code>Twitt3rhai</code> was part of <a href="/2019/01/pst-challenge">the challenge in December</a>. Of course I had to try to figure what the tweet was all about..

Luckily this turned out to be less of a challenge than the previous one.

<h4>The job ad</h4>It all starts with PST's <a href="https://1005007.webcruiter.no/Main/Recruit/Public/4134047982">job ad where they want both digital forensics specialists and a system developer</a>. The text in the job advertisement doesn't hint about any challenges as I could see, but there is an interesting header image:
<img class="materialboxed responsive-img" title="The header image from the job ad containing the challenge. (Source: webcruiter.no)" data-caption="The header image from the job ad containing the challenge. (Source: webcruiter.no)" alt="Screenshot with challenge" src="/images/pst201.jpg">
It's got all the nerdy details you'd want: A <a href="https://en.wikipedia.org/wiki/pcap">pcap</a> (packet capture) hat, lotsa computer screens, some file dump or something, some code, and more.

<h4>Step 1 - understanding the code</h4>While the image doesn't have the world's highest resolution you can see that the person in the image (possibly nicknamed <i><a href="https://knowyourmeme.com/memes/hackerman">HackerMan</a></i>) has got the following <a href="https://en.wikipedia.org/wiki/Python_(programming_language)">Python</a> 3 code file named <code>encrypt.py</code> open:
<pre class="prettyprint lang-py">#!/usr/bin/python3
from base64 import b64encode
from Crypto.Cipher import AES
from Crypto.Util.Padding import pad, unpad

def get_primes(count):
    primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61]
    return(primes[0:count])

with open('plain.txt', 'rb') as f:
    plaintext = f.read()

iv = ""
for i in get_primes(16):
    iv += chr(plaintext[i + 16])

key = b'\\xba\\xda\\x55 HackerMan \\x13\\x37'  # <----- DESTROY AFTER USE

cipher = AES.new(key, AES.MODE_CBC, IV=iv)
ciphertext_b64 = b64encode(cipher.encrypt(pad(plaintext, AES.block_size))).decode('utf-8')
print(ciphertext_b64)

#TODO: automate posting of ciphertext to twitter.com/twitt3rhai</pre>
Now, this is some interesting code. Let's follow the flow of it:
1. It reads the contents of the file <code>plain.txt</code> (aka <a href="https://en.wikipedia.org/wiki/Plaintext">unencrypted information</a>) into a variable <code>plaintext</code>.
2. It creates a variable <code>iv</code> by using 16 characters from <code>plaintext</code> offset by 16 + a <a href="https://en.wikipedia.org/wiki/Prime_number">prime number</a>.
3. It defines a variable <code>key</code> (nerd bonus for using the hex numbers <a href="https://en.wiktionary.org/wiki/badass">BA, DA, 55</a>, <a href="https://en.wikipedia.org/wiki/Leet">13, 37</a>) which is indicated that should be deleted later on.
4. It creates an <a href="https://en.wikipedia.org/wiki/Advanced_Encryption_Standard">AES</a> <a href="https://en.wikipedia.org/wiki/Cipher">cipher</a> with <a href="https://en.wikipedia.org/wiki/Block_cipher_mode_of_operation#Cipher_Block_Chaining_(CBC)">CBC</a> mode using the <code>key</code> variable as key and the <code>iv</code> variable as <a href="https://en.wikipedia.org/wiki/Initialization_vector">initialization vector</a>.
5. The cipher is then used to encrypt the <a href="https://en.wikipedia.org/wiki/Padding_(cryptography)">padded</a> plaintext before the <a href="https://en.wikipedia.org/wiki/Ciphertext">ciphertext</a> is <a href="https://en.wikipedia.org/wiki/Base64">Base64</a> encoded.
6. Notingly there is a <a href="https://en.wikipedia.org/wiki/Time_management#Implementation_of_goals">TODO</a> about posting the ciphertext to <a href="https://twitter.com/twitt3rhai"><code>twitt3rhai</code></a>. (And what do you know, the same Twitter handle is also in that header image.)

<h4>Step 2 - getting the ciphertext</h4>Our ultimate goal seems to be to get the plaintext to see what it says. So lets start by heading over to Twitter:
<blockquote class="twitter-tweet" data-dnt="true"><p lang="pl" dir="ltr">/lb0WZDpaIDJVJwy+Q04LCqERqVj7AUItWGREJuXJeWtZN77yP6grehn1gRif31hjTEjLNFyxESweea81/QluWUyhZV9vmabm8NYkkSc6JJWuylGJKQJzA/wC2cM2ScrQQ8gV7GcnVyBCh7eq/N0jUm/L4xrX6IUIDi5CAkVZ9xSS5Tb4o01onOTbGWLd1EZwzZOMlq88wsTPZ6zY7dqj+LKq3Pj6SKlZfaR9eo6PXrRUOARCe9sQVtWVKc5DJfI</p>&mdash; twitt3rhai (@twitt3rhai) <a href="https://twitter.com/twitt3rhai/status/1175023446696386560?ref_src=twsrc%5Etfw">September 20, 2019</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
This does indeed seem like it could be some Base64 encoded text and can be assumed to be the ciphertext. Now we've got quite a few pieces of the puzzle.

<h4>Step 3 - decrypting the ciphertext</h4>So, how can we decrypt the ciphertext in the tweet? Let's just tweak the <code>encrypt.py</code> to make our own <code>decrypt.py</code>:
<pre class="prettyprint lang-py">#!/usr/bin/python3
from base64 import b64encode, b64decode
from Crypto.Cipher import AES
from Crypto.Util.Padding import pad, unpad

def get_primes(count):
    primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61]
    return(primes[0:count])

# TODO: automate reading of ciphertext from twitter.com/twitt3rhai ;)
ciphertext_b64 = '/lb0WZDpaIDJVJwy+Q04LCqERqVj7AUItWGREJuXJeWtZN77yP6grehn1gRif31hjTEjLNFyxESweea81/QluWUyhZV9vmabm8NYkkSc6JJWuylGJKQJzA/wC2cM2ScrQQ8gV7GcnVyBCh7eq/N0jUm/L4xrX6IUIDi5CAkVZ9xSS5Tb4o01onOTbGWLd1EZwzZOMlq88wsTPZ6zY7dqj+LKq3Pj6SKlZfaR9eo6PXrRUOARCe9sQVtWVKc5DJfI'
ciphertext = b64decode(ciphertext_b64.encode('utf-8'))

iv = " " * 16  # Must be 16 bytes

key = b'\\xba\\xda\\x55 HackerMan \\x13\\x37'

cipher = AES.new(key, AES.MODE_CBC, IV=bytes(iv, 'utf-8'))
plaintext = unpad(cipher.decrypt(ciphertext), AES.block_size)

print(plaintext)  # Output: b'\\x15\\x01Tx)5,d%,*<&:u%erer! Du klarte det! Beklager, men denne gangen har vi ikke laget flere oppgaver. H\\xc3\\xa5per du vil s\\xc3\\xb8ke jobben. Hvis du blir ansatt kan vi love deg mange utfordrende oppgaver.'</pre>
Here's what the script does:
1. Decodes the Base64 encoded cipertext.
2. Creates just an empty initialization vector as we don't have the plaintext to create it.
3. Decrypts the ciphertext and unpads the output again.
4. Prints the plaintext.

The output is the following:<blockquote><code>b'\\x15\\x01Tx)5,d%,*<&:u%erer! Du klarte det! Beklager, men denne gangen har vi ikke laget flere oppgaver. H\\xc3\\xa5per du vil s\\xc3\\xb8ke jobben. Hvis du blir ansatt kan vi love deg mange utfordrende oppgaver.'</code></blockquote>
Success, right? Well, almost!

<h5>Creating the initialization vector</h5>When I did the challenge I was at first happy with getting most of the plaintext. And I was thinking that the first part missing probably was the start of the word <i>"Gratulerer"</i> (=congratulations).

But what is an "initialization vector" and why is it used here? AES (Advanced Encryption Standard) is a <a href="https://en.wikipedia.org/wiki/Block_cipher">block cipher</a>, meaning that the algorithm is operating on a fixed-length groups of bits (blocks). To avoid equal plaintext blocks to become equal ciphertext blocks many of the "modes of operation" of the encryption algrithms use some part of the previous block part of the input to the following one. The mode used here is <a href="https://en.wikipedia.org/wiki/Block_cipher_mode_of_operation#CBC">Cipher Block Chaining (CBC)</a>. In this mode each block of plaintext is <a href="https://en.wikipedia.org/wiki/Exclusive_or">XORed</a> with the previous ciphertext block before being encrypted. To produce distinct ciphertexts even if the same plaintext is encrypted multiple times - and to protect the first block - there must be some be some unique input to the first block; an initialization vector.

Looking at the output there are actually 16 bytes that are "garbage" (the AES' block size). That means that the first word can't just be <i>"Gratulerer"</i>.

But how can we get hold of that initialization vector? The answer lies in the code. It is generated from the plaintext - and luckily for us it only uses plaintext above character number 16, meaning that we have everyhting we need. So let's tweak the script:
<pre class="prettyprint lang-py">#!/usr/bin/python3
from base64 import b64encode, b64decode
from Crypto.Cipher import AES
from Crypto.Util.Padding import pad, unpad

def get_primes(count):
    primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61]
    return(primes[0:count])

# TODO: automate reading of ciphertext from twitter.com/twitt3rhai ;)
ciphertext_b64 = '/lb0WZDpaIDJVJwy+Q04LCqERqVj7AUItWGREJuXJeWtZN77yP6grehn1gRif31hjTEjLNFyxESweea81/QluWUyhZV9vmabm8NYkkSc6JJWuylGJKQJzA/wC2cM2ScrQQ8gV7GcnVyBCh7eq/N0jUm/L4xrX6IUIDi5CAkVZ9xSS5Tb4o01onOTbGWLd1EZwzZOMlq88wsTPZ6zY7dqj+LKq3Pj6SKlZfaR9eo6PXrRUOARCe9sQVtWVKc5DJfI'
ciphertext = b64decode(ciphertext_b64.encode('utf-8'))

iv = " " * 16  # Must be 16 bytes

key = b'\\xba\\xda\\x55 HackerMan \\x13\\x37'

cipher = AES.new(key, AES.MODE_CBC, IV=bytes(iv, 'utf-8'))
plaintext = unpad(cipher.decrypt(ciphertext), AES.block_size)

iv = ""
for i in get_primes(16):
    iv += chr(plaintext[i + 16])

cipher = AES.new(key, AES.MODE_CBC, IV=bytes(iv, 'utf-8'))
plaintext = unpad(cipher.decrypt(ciphertext), AES.block_size).decode('utf-8')

print(iv)  # Output: er uate!k,mngn i
print(plaintext)  # Output: PST-haien gratulerer! Du klarte det! Beklager, men denne gangen har vi ikke laget flere oppgaver. Håper du vil søke jobben. Hvis du blir ansatt kan vi love deg mange utfordrende oppgaver.</pre>
The script now does the decryption in two rounds; first without knowing the init vector, and then again with it correctly initialized.

Success!

<h4>The solution</h4>The solution to the challenge is this:<blockquote>PST-haien gratulerer! Du klarte det! Beklager, men denne gangen har vi ikke laget flere oppgaver. Håper du vil søke jobben. Hvis du blir ansatt kan vi love deg mange utfordrende oppgaver.</blockquote>
English:<blockquote>The PST shark congratulates you! You made it! Sorry, but this time we haven't created any more challenges. Hope you will apply for the job. If you get hired we can promise you many challenging assignments.</blockquote>
So that's it. Not as much work to do as <a href="/2019/01/pst-challenge">the previous challenge</a>, but still a fun challenge I personally enjoyed a lot. 🙂 I hope PST got the candidates they need. 🕵️‍
                `,
                "images": ["/images/pst202.png", "/images/pst201.jpg"],
                "category":
                {
                    "title": "Security",
                    "url": "/security"
                },
                "tags": [
                    {
                        "title": "Behind the news",
                        "url": "/behind-the-news"
                    },
                    {
                        "title": "Challenge",
                        "url": "/challenge"
                    }
                ]
            },
            {
                "title": "Capture the flag with the Norwegian Police Security Service",
                "published": true,
                "publishDate": "2020-01-02T15:10:00.000Z",
                "updateDate": "2020-01-02T16:45:00.000Z",
                "summary": `Here's a write-up showing how to solve the challenges of the Norwegian Police Security Service's CTF advent calendar.`,
                "niceUrl": "/2020/01/pst-challenge-3",
                "text": `
<h4>Background 👮</h4>The <a href="https://en.wikipedia.org/wiki/Norwegian_Police_Security_Service">Norwegian Police Security Service</a> (with the Norwegian abbreviation <a href="https://www.pst.no/">PST</a> which I'll use for this write-up) is the police <a href="https://en.wikipedia.org/wiki/Security_agency">security agency</a> of Norway. Once in a while they have job ads with some more or less hidden challenges - almost <a href="https://en.wikipedia.org/wiki/Capture_the_flag#Computer_security">Capture the Flag (CTF)</a> style. I've done posts on them back <a href="/2019/01/pst-challenge">in January</a> and <a href="/2019/01/pst-challenge-2">in October</a> 2019. This time they went all in with a CTF advent calendar.

<h4>The theme 🎅</h4>PST added an N in front of their name and created the imaginary <i>Northern Polar Security Service</i> (Nordpolar sikkerhetstjeneste = NPST). NPST's role is supposedly to protect Santa Claus, his elfs and Christmas itself. PST posted a <a href="https://finn.no/163738125">fake job ad</a> where they said to be looking for elf officers (="alvebetjent") for a temporary position to help out NPST. Of course big and small media sites took notice and published stories on this (<a href="https://www.nrk.no/troms/pst-la-ut-annonse-pa-finn.no-om-ledig-jobb-som-snikende-alvebetjent-1.14794574">NRK</a>, <a href="https://www.tv2.no/a/11017666/">TV 2</a>, <a href="https://www.vg.no/nyheter/innenriks/i/JowQQb/pst-soeker-snikende-alvebetjent-paa-svalbard">VG</a>, <a href="https://www.politiforum.no/artikler/pst-med-ny-kreativ-stillingsannonse-soker-snikende-alvebetjent-br/479744">Politiforum</a>). Everything went down on <a href="https://npst.no/">npst.no</a> from December 1st to December 24th.

<h4>Challenges and solutions</h4>Let's jump straight in. Click on a challenge to expand it.
<a class="skip-link" href="#" aria-hidden="true" onclick="var c=$('.collapsible');var shouldOpen=c.children('.active').length === 0;for(var i=0;i<c.children().length;i++){c.collapsible(shouldOpen ? 'open' : 'close', i);}return false;"><u>Expand/collapse all</u></a><ul class="collapsible expandable" data-collapsible="expandable"><li><div class="collapsible-header">December 1st - Welcome to NPST - 10 points</div><div class="collapsible-body"><span><h6>Challenge</h6>The first challenge was not much of a challenge. It just lets you get started by telling you to log in at the system running at <a href="https://login.npst.no">https://login.npst.no</a> using username <code>bruker</code> and password <code>Advent2019</code>.

<h6>Solution</h6>There was not much to do here other than entering the login information. The flag you'd get back was <code>PST{a7966bf58e23583c9a5a4059383ff850}</code>. I'd script it, but it would mostly have been about extracting the returned token with the step information and posting it back. Fun fact: <code>a7966bf58e23583c9a5a4059383ff850</code> is the <a href="https://en.wikipedia.org/wiki/MD5">MD5</a> hash of <code><a href="https://en.wikipedia.org/wiki/%22Hello,_World!%22_program">Hello, world</a></code>.</span>
</div></li><li><div class="collapsible-header">December 1st - Change password - 15 points</div><div class="collapsible-body"><span><h6>Challenge</h6>The first real challenge is to change the password from the previous task. The new password needs to have at least one character from each of the following groups:
 - <code>[a-z]</code>
 - <code>[A-Z]</code>
 - <code>[0-9]</code>
 - <code>[*@!#%&()^~{}]</code>
The characters must be sorted by its ASCII values, and the sum of ASCII values <a href="https://en.wikipedia.org/wiki/Modular_arithmetic">modulo</a> 128 must equal 24.

<h6>Solution</h6>If you take a look at the <a href="https://en.wikipedia.org/wiki/ASCII#Character_set">ASCII table</a> you'll notice that the character groups themselves are not in incremental order and the last group's characters are not in order and also actually split into values before and after the other groups.

To generate a valid password you could do something like this: <pre class="prettyprint lang-py">#!/usr/bin/python3
import string

# The char groups we have to use:
group1 = string.ascii_lowercase
group2 = string.ascii_uppercase
group3 = string.digits
group4 = '*@!#%&()^~{}'

for a1 in group1:
    for a2 in group2:
        for a3 in group3:
            for a4 in group4:
                sum = ord(a1) + ord(a2) + ord(a3) + ord(a4) # Sum of integer values of code points
                if sum % 128 == 24:
                    password = a1 + a2 + a3 + a4
                    password = ''.join(sorted(password)) # Sorts the string
                    print(password) # Prints '6@Aa'
                    exit(0)
</pre>
One of the valid passwords is <code>6@Aa</code>. The flag returned was <code>PST{6a0f0731d84afa4082031e3a72354991}</code> (MD5 hash of <code><a href="https://knowyourmeme.com/memes/hunter2">hunter2</a></code>).
</span></div></li><li><div class="collapsible-header">December 1st - Password recovery - 20 points</div><div class="collapsible-body"><span><h6>Challenge</h6>The challenge is to log in at <a href="https://login.npst.no">https://login.npst.no</a> with a user we have this information about:
Username: <code>admin</code>
???: <code>42f82ae6e57626768c5f525f03085decfdc5c6fe</code>

<h6>Solution</h6>The unknown part above looks a lot like output from a <a href="https://en.wikipedia.org/wiki/Hash_function">hash function</a>. What kind of cryptographic hash function produces 40 hex characters (20 bytes) output? The good old no-longer-considerd-secure <a href="https://en.wikipedia.org/wiki/SHA-1">SHA-1</a>. You could find this hash value's input from a <a href="https://en.wikipedia.org/wiki/Rainbow_table">rainbow table</a> or a tool like <a href="https://en.wikipedia.org/wiki/Hashcat">hashcat</a>. Luckily we don't face any <a href="https://en.wikipedia.org/wiki/Salt_(cryptography)">salt</a> in this case.

Since the password is on a system where we know the current password rules we can take advantage of that and try <a href="https://en.wikipedia.org/wiki/Brute-force_attack">brute force</a> to find the password. If we are luky the password is as short as the one in the previous challenge and we can tweak the script we just used: <pre class="prettyprint lang-py">#!/usr/bin/python3
import string
from hashlib import sha1
from time import time

# The char groups we have to use:
group1 = string.ascii_lowercase
group2 = string.ascii_uppercase
group3 = string.digits
group4 = '*@!#%&()^~{}'

hash_to_find = '42f82ae6e57626768c5f525f03085decfdc5c6fe'

counter = 0
time_start = time()
for a1 in group1:
    for a2 in group2:
        for a3 in group3:
            for a4 in group4:
                sum = ord(a1) + ord(a2) + ord(a3) + ord(a4)
                if sum % 128 == 24:
                    counter += 1
                    password = (a1 + a2 + a3 + a4)
                    password = ''.join(sorted(password))
                    hash = sha1(password.encode('utf-8')).hexdigest()
                    if(hash == hash_to_find):
                        time_spent = round(1000 * (time() - time_start))
                        # Prints something like 'Found password )9Fp in 42 millis after 856 trials.':
                        print('Found password %s in %s millis after %d trials.' % (password, time_spent, counter))
                        exit(0)
</pre>
The password for the admin account is <code>)9Fp</code>. The flag returned was <code>PST{36044221cd3e991ffc56eb2f1e368ca0}</code> (MD5 hash of <code>CastleKeys</code> (<a href="https://www.mariowiki.com/Castle_Key">Mario reference?</a>)).
</span></div></li><li><div class="collapsible-header">December 3rd - Pen and paper encryption - 0 points</div><div class="collapsible-body"><span><h6>Challenge</h6>The challenge is to crack the code <code>KNO fmwggkymyioån 30å6ø8432æå54710a9æ09a305å7z9829 fmwggkymyioån ngpoo</code>.

<h6>Solution</h6>This is a 0 points challenge saying that the encryption is meant for pen and paper and there's no entering of data at <code>login.npst.no</code>. This means that we should get the flag directly and that it should be a fairly simple task.

Knowing that the flag should usually start with <code>PST</code> and the <a href="https://en.wikipedia.org/wiki/Ciphertext">ciphertext</a> starts with <code>KNO</code> it's easy to see that this is a some <a href="https://en.wikipedia.org/wiki/Substitution_cipher">substitution cipher</a> variant of <a href="https://en.wikipedia.org/wiki/Caesar_cipher">Caesar cipher</a>. What's interesting is the usage of Norwegian letters and repeated letters.

Again we can solve this easily using an online tool, but it's much more fun to use code: <pre class="prettyprint lang-py">#!/usr/bin/python3
import string

lowercase_alphabet = string.ascii_lowercase + 'æøå'  # Norwegian alphabet
ciphertext = 'KNO fmwggkymyioån 30å6ø8432æå54710a9æ09a305å7z9829 fmwggkymyioån ngpoo'
shift = ord('P') - ord('K')  # ASCII shift between K and P as we assume KNO=PST
plaintext = ''

for c in ciphertext:
    index = lowercase_alphabet.find(c.lower())
    if index != -1:
        isupper = c.isupper()
        c = lowercase_alphabet[(shift + index) % len(lowercase_alphabet)]
        if isupper:
            c = c.upper()
    plaintext += c

plaintext = plaintext.replace('krøllparantes slutt', '}').replace('krøllparantes', '{').replace(' ', '')
print(plaintext)  # Prints 'PST{30e6d8432ce54710f9c09f305e7b9829}'
</pre>
The flag printed is <code>PST{30e6d8432ce54710f9c09f305e7b9829}</code> (MD5 hash of <code>Julius</code> (as in Caesar)).
</span></div></li><li><div class="collapsible-header">December 5th - Emoji API - 5 points</div><div class="collapsible-body"><span><h6>Challenge</h6>The challenge is to send commands to a crazy emoji API to get out the flag. The available emojis/commands are <code>✨, ⚡, 🔑, 🤷</code> and you can send in a combination of those.

<h6>Solution</h6>This one annoyed me quite a bit, because I never fully understood the pattern here or what the rules are. But here's what I did figure out:
🤷 = Lists out available commands. Not intended to be used in combination with other commands.
🔑 = Should be used at the end of commands. Makes the <code>message</code> field return the current active <code>state</code>.
⚡✨ = These two are the main switches/commands that determines the <code>state</code>.

This is how I interpret the JSON fields returned from the API:
<code>error</code> = <code>boolean</code> telling if there's an error (like if you send more than 20 emojis or several 🔑 emojis).
<code>state</code> = <code>String</code> list with some kind of selector telling the current state. I have no idea why the order changes. The emojis used are 🐴, 🚩, 🍉, 🐟, 🚀 and 🍕.
<code>message</code> = <code>String</code> with extra info. Returns the current state.

Our goal is to make the active <code>state</code> be the flag (🚩). Then the <code>message</code> will be the flag (as in <code>PST{...}</code>).

I didn't find any other sensible way to do this other than brute forcing the commands. What I didn't look at was if e.g. the API really does some kind of bitwise operation or something on the emojis. There are several combinations of ⚡ and ✨ that returns the flag.

Here's some code that can be used to get the flag. Remember to always be careful not flooding the server with requests when doing this sort of thing.<pre class="prettyprint lang-py">import requests
import itertools
import re
import time

li = ['✨', '⚡']
pattern = re.compile("PST{.*}") # Regex for our flag
for i in range(1, 20):
    combs = [''.join(comb) for comb in itertools.product(li, repeat=i)]  # Gives us all combinations of the emojis
    for command in combs:
        response = requests.get('https://npst.no/api/🙃.js?commands=' + command + '🔑')
        json = response.json()
        print(command + ': ' + str(json)) # Prints out stuff like ⚡⚡⚡⚡✨: {'error': False, 'state': '[🐟, 🚀, 🍉, 🐴, >🚩<, 🍕]', 'message': 'PST{ba323c3f5b3f1b536461d41cc7f1ba60}'}
        if pattern.match(json['message']):
            exit(0)
        time.sleep(.300)
</pre>
It seems like every combination of 4 ⚡ and that the command ends with ⚡✨ gives out the flag. Anyways, the flag printed is <code>PST{ba323c3f5b3f1b536461d41cc7f1ba60}</code> (MD5 hash of <code>emoji</code>).
</span></div></li><li><div class="collapsible-header">December 6th - Pen and paper encryption version 2 - 5 points</div><div class="collapsible-body"><span><h6>Challenge</h6>We're back for another round of Caesar cipher, but this time it's worth 5 and not 0 points, and there are strong hints that <a href="https://en.wikipedia.org/wiki/Leet">leetspeak</a> is involved.

The challenge is to crack the "version 2" of the pen an paper encryption, represented by the ciphertext <code>KNO fmw55k8m7i179 z98øyåz8æy67aåy0å6æ7aø1å1438åa5a fmw55k8m7i179 95p11</code>.

<h6>Solution</h6>Here we have the to keep in mind that we have already solved a similar challenge. Again we know that the flag usually starts with <code>PST</code> and the <a href="https://en.wikipedia.org/wiki/Ciphertext">ciphertext</a> starts with <code>KNO</code>. It should be also be some <a href="https://en.wikipedia.org/wiki/Substitution_cipher">substitution cipher</a> variant of <a href="https://en.wikipedia.org/wiki/Caesar_cipher">Caesar cipher</a>. Again there is the usage of Norwegian letters and repeated letters.

(It's worth mentioning that for this challenge there was a time frame of maybe 18 hours where the cipertext was slightly incorrect, and also that they misspelt the word <i>parentes</i> (=parenthesis) in the previous Caesar cipher challenge's ciphertext.)

What's new in this challenge is that what earlier became the output <code>krøllparentes</code> (=curly bracket) and <code>krøllparentes slutt</code> (=curly bracket end) now contains some numbers: <code>fmw55k8m7i179 95p11</code> vs <code>fmwggkymyioån ngpoo</code>. If we mix both letters and numbers in the alphabet things don't add up. So it's best to split it into two rounds of decryption.

For me it was a good help to use <a href="https://cryptii.com/pipes/caesar-cipher">Caesar cipher tool at Cryptii</a>. It makes things so visual and easier to grasp and to play around with the encryption.

We can reuse the code we had earlier to get the flag for this one: <pre class="prettyprint lang-py">#!/usr/bin/python3
import string

lowercase_alphabet = string.ascii_lowercase + 'æøå'  # Norwegian alphabet
ciphertext = 'KNO fmw55k8m7i179 z98øyåz8æy67aåy0å6æ7aø1å1038åa5a fmw55k8m7i179 95p11'
shift = ord('P') - ord('K')  # ASCII shift between K and P as we assume KNO=PST
ciphertext2 = ''

for c in ciphertext:
    index = lowercase_alphabet.find(c.lower())
    if index != -1:
        isupper = c.isupper()
        c = lowercase_alphabet[(shift + index) % len(lowercase_alphabet)]
        if isupper:
            c = c.upper()
    ciphertext2 += c
print(ciphertext2)  # Prints 'PST krø55p8r7n179 b98daeb8ca67fea0e6c7fd1e1038ef5f krø55p8r7n179 95u11'

digits = string.digits  # It's time for a round of digits
shift = ord('1') - ord('5')  # ASCII shift between 5 and 1 as we assume krø55p8r7n179 = leet krø11p4r3n735
plaintext = ''

for c in ciphertext2:
    index = digits.find(c.lower())
    if index != -1:
        isupper = c.isupper()
        c = digits[(shift + index) % len(digits)]
        if isupper:
            c = c.upper()
    plaintext += c
print(plaintext)  # Prints 'PST krø11p4r3n735 b54daeb4ca23fea6e2c3fd7e7694ef1f krø11p4r3n735 51u77'

plaintext = plaintext.replace('krø11p4r3n735 51u77', '}').replace('krø11p4r3n735', '{').replace(' ', '')
print(plaintext)  # Prints 'PST{b54daeb4ca23fea6e2c3fd7e7694ef1f}'
</pre>
The flag printed is <code>PST{b54daeb4ca23fea6e2c3fd7e7094ef1f}</code> (MD5 hash of <code>jul1u5</code> (as in Julius (Caesar))).
</span></div></li><li><div class="collapsible-header">December 7th - Santa's workshop - 2 points</div><div class="collapsible-body"><span><h6>Challenge</h6>Santa's workshop has become digital - represented by the webpage <a href="https://verksted.npst.no">https://verksted.npst.no</a>. The goal here is to spot the flag among many, many images. Every image has it's own MD5 hash filename which is the flag, so we just need to find the right image.

<h6>Solution</h6>This challenge can be solved by scrolling through 12,202 images and spotting the image of the flag. Of course, it's more fun to make the computer do the job for us. There's a <a href="https://verksted.npst.no/verksted.npst.no.2c3ecc69.js">JavaScript file with an array of all the image filenames</a>. Many images - even though they have different filenames - are of the same item. And luckily they have the same <a href="https://en.wikipedia.org/wiki/Checksum">file checksum</a>.

Knowing that we can easily just run this script to get the flag: <pre class="prettyprint lang-py">#!/usr/bin/python3
import requests
import os
from time import sleep
import hashlib

prefix = 'https://verksted.npst.no/images/'
postfix = '.png'
images = [
    "ad4702626c8a8ce8386a2f59d9b45f0e",
    "3f6cfe9ad6220c32868d931d70f0cd7d",
    "88fd8baf0e91d6d109ea6559e684ff43",
    "09fa082d154fbcc8132d9758d625a6b1",
    # ...
    # The array has been shortened a bit as it originally contains 12,202 images
    # ...
    "b30b4add25b97721ebf0e7ad2eb26eb9",
    "e5b5c486f20f06798a94a6b16aef5f2f",
    "8798e1f0a271b09750a6531686fc621b",
    "7254408c81470abdbabd40e850b5274d"
]


def get_hash(url):
    ''' Requests URL and returns MD5 hash of data downloaded. '''
    m = hashlib.md5()
    try:
        r = requests.get(url)
    except Exception as e:
        # It's handy to just swallow the error here so we can just retry the URL manually instead of stopping the script in case of temp. network issues.
        print('Unexpected error while trying to load image %s. Returning empty hash. Error: %s' % (url, e))
        return ''
    for data in r.iter_content(8192):
        m.update(data)
    return m.hexdigest()


hashes = {}

for image in images:
    url = prefix + image + postfix
    hash = get_hash(url)
    if hash not in hashes:
        # Prints something like 'Found new checksum 4aacc09b8f52fd1b6f2bfbe18d4f17b6 for url https://verksted.npst.no/images/b30b4add25b97721ebf0e7ad2eb26eb9.png':
        print('Found new checksum %s for url %s' % (hash, url)) 
        # Not necessary, but nice to keep an eye on while the script is running:
        os.system('open ' + url)  # Opens the image (command will differ depending on OS)
        flag = 'PST{%s}' % image
        hashes[hash] = {
            'url': url,
            'flag': flag,
            'seen': 1
        }
    else:
        hashes[hash]['seen'] = hashes[hash]['seen'] + 1
    sleep(0.3)

# Prints something like 'Found 63 different checksums among 12202 images.':
print('Found %d different checksums among %d images.' % (len(hashes), len(images)))
print('Following images were only seen once:')
for hash in hashes:
    if hashes[hash]['seen'] == 1:
        # Prints something like 'PST{8798e1f0a271b09750a6531686fc621b} - https://verksted.npst.no/images/8798e1f0a271b09750a6531686fc621b.png'
        print('%s - %s' % (hashes[hash]['flag'], hashes[hash]['url']))
</pre>
The flag that has been <code>PST{8798e1f0a271b09750a6531686fc621b}</code>.
</span></div></li><li><div class="collapsible-header">December 7th - Industrial espionage - 2 points</div><div class="collapsible-body"><span><h6>Challenge</h6>The only info we get for this challenge is that there's suspicion of ongoing espionage in Santa's workshop that we should take a look at.

<h6>Solution</h6>Again we're looking at the images at <a href="https://verksted.npst.no">https://verksted.npst.no</a>. Is there something that doesn't belong at the North Pole?

Well, luckily for us - if we let the script in the previous solution finish - we already have the answer. It's the penguin that doesn't belong. The flag for that image is <code>PST{b30b4add25b97721ebf0e7ad2eb26eb9}</code>.
</span></div></li><li><div class="collapsible-header">December 8th - Polar bear sighting - 5 points</div><div class="collapsible-body"><span><h6>Challenge</h6>We're told that <a href="https://en.wikipedia.org/wiki/Rudolph_the_Red-Nosed_Reindeer">Rudolph the Red-Nosed Reindeer</a> observed a suspicious polar bear when he took a detour while out jogging with Santa. The challenge is to report the location of this sighting.

<h6>Solution</h6>The text doesn't leave much clue as to where to look, but the image above the text shows Santa's smart phone with the app <a href="https://strava.com">Strava</a> open. Strava is a social fitness network, primarily used to track cycling and running exercises. It doesn't take long to find both <a href="https://www.strava.com/athletes/48179976">Santa's profile</a> and <a href="https://www.strava.com/athletes/48180031">Rudolph's profile</a>.

They have been out running and it's possible to do a <a href="https://labs.strava.com/flyby/viewer/#2910407508,nDN5rQ==">"flyby" of their workout</a>. If you follow their track you can see that Rudolph did take a detour. And cross checking Strava's map with e.g. Google Maps you can see that the place he is closest by is the <a href="http://www.northpolemuseum.com/">North Pole Expedition Museum</a> (and the museum actually has got a figure of a polar bear outside). That is also the flag and solution we need: <code>PST{NORTH POLE EXPEDITION MUSEUM}</code>
</span></div></li><li><div class="collapsible-header">December 8th - Spy activity - 15 points</div><div class="collapsible-body"><span><h6>Challenge</h6>There's information about possible spy activity from <a href="https://spst.no">Southern Polar Security Service</a> (Sydpolar sikkerhetstjeneste = SPST) agents on Svalbard in same time period as Santa and Rudolph's run. The challenge is identify one of the agents.

<h6>Solution</h6>Going back to the <a href="https://labs.strava.com/flyby/viewer/#2910407508,nDN5rQ==">"flyby" of the workout</a> in the previous challenge you can see that there's another person in the area. Someone is out on a <a href="https://www.strava.com/activities/2910413144">afternoon stalk</a>, and that person is someone named Pen Gwyn. <a href="https://www.strava.com/athletes/48201643">His profile</a> is pretty open about his affiliation and it also shows the flag we're after: <code>PST{69d26031ea5dbbeb56f22d9647f7c98e}</code>
</span></div></li><li><div class="collapsible-header">December 8th - Mysterious profiles - 20 points</div><div class="collapsible-body"><span><h6>Challenge</h6>NPST's analysts suspect that Pen Gwyn has reported home to his contacts at the South Pole. The challenge is to decode some of that communication.

<h6>Solution</h6>We're still on Pen Gwyn's Strava profile. He's got <a href="https://www.strava.com/activities/2910553320">one activity that contains an image</a>. This image contains data that we want to decode. I looked long and hard at the bars as binary ASCII data and then <a href="https://en.wikipedia.org/wiki/Barcode#Types_of_barcodes">all sorts of barcodes</a>, but this is actually <a href="https://en.wikipedia.org/wiki/Morse_code">morse code</a>.

While I did initially decode the image with pen and paper it's cooler to do so with code. It's a bit challenging because of the <a href="https://en.wikipedia.org/wiki/Compression_artifact">compression artifcats</a> in the image, but at the same time, binary's strength is that it can handle quite a bit of noise:<pre class="prettyprint lang-py">#!/usr/bin/python3
from PIL import Image  # pip3 install pillow

MORSE_CODE = {'▄ ▄▄▄': 'A', '▄▄▄ ▄ ▄ ▄': 'B', '▄▄▄ ▄ ▄▄▄ ▄': 'C', '▄▄▄ ▄ ▄': 'D',
              '▄': 'E', '▄ ▄ ▄▄▄ ▄': 'F', '▄▄▄ ▄▄▄ ▄': 'G', '▄ ▄ ▄ ▄': 'H',
              '▄ ▄': 'I', '▄ ▄▄▄ ▄▄▄ ▄▄▄': 'J', '▄▄▄ ▄ ▄▄▄': 'K', '▄ ▄▄▄ ▄ ▄': 'L',
              '▄▄▄ ▄▄▄': 'M', '▄▄▄ ▄': 'N', '▄▄▄ ▄▄▄ ▄▄▄': 'O', '▄ ▄▄▄ ▄▄▄ ▄': 'P',
              '▄▄▄ ▄▄▄ ▄ ▄▄▄': 'Q', '▄ ▄▄▄ ▄': 'R', '▄ ▄ ▄': 'S', '▄▄▄': 'T',
              '▄ ▄ ▄▄▄': 'U', '▄ ▄ ▄ ▄▄▄': 'V', '▄ ▄▄▄ ▄▄▄': 'W', '▄▄▄ ▄ ▄ ▄▄▄': 'X',
              '▄▄▄ ▄ ▄▄▄ ▄▄▄': 'Y', '▄▄▄ ▄▄▄ ▄ ▄': 'Z', '▄ ▄▄▄ ▄▄▄ ▄▄▄ ▄▄▄': '1',
              '▄ ▄ ▄▄▄ ▄▄▄ ▄▄▄': '2', '▄ ▄ ▄ ▄▄▄ ▄▄▄': '3', '▄ ▄ ▄ ▄ ▄▄▄': '4',
              '▄ ▄ ▄ ▄ ▄': '5', '▄▄▄ ▄ ▄ ▄ ▄': '6', '▄▄▄ ▄▄▄ ▄ ▄ ▄': '7',
              '▄▄▄ ▄▄▄ ▄▄▄ ▄ ▄': '8', '▄▄▄ ▄▄▄ ▄▄▄ ▄▄▄ ▄': '9', '▄▄▄ ▄▄▄ ▄▄▄ ▄▄▄ ▄▄▄': '0',
              '▄▄▄ ▄▄▄ ▄ ▄ ▄▄▄ ▄▄▄, ': ',', '▄ ▄▄▄ ▄ ▄▄▄ ▄ ▄▄▄': '.',
              '▄ ▄ ▄▄▄ ▄▄▄ ▄ ▄': '?', '▄▄▄ ▄ ▄ ▄▄▄ ▄': '/', '▄▄▄ ▄ ▄ ▄ ▄ ▄▄▄': '-',
              '▄▄▄ ▄ ▄▄▄ ▄▄▄ ▄': '(', '▄▄▄ ▄ ▄▄▄ ▄▄▄ ▄ ▄▄▄': ')'}

im = Image.open('report.jpg')
pix = im.load()

binary_string = ''
for i in range(0, im.size[0]):  # Runs through all pixels on top row
    t = pix[i, 0]  # Colour tuple
    if t[0] < 200 and t[1] < 200 and t[2] < 200:  # Relatively dark colour
        binary_string += '1'
    else:  # Relatively white colour
        binary_string += '0'
print(binary_string, '\\n')


def replace(input, old, new, count_from, count_to):
    for i in reversed(range(count_from, count_to + 1)):
        input = input.replace(old * i, new)
    return input


morse_string = binary_string

morse_string = replace(morse_string, '1', '▄▄▄', 5, 10)  # Replace wide bars with dash
morse_string = replace(morse_string, '1', '▄', 1, 4)  # Replace narrow bars with dot
morse_string = replace(morse_string, '0', '       ', 15, 30)  # Replace very wide whitespaces with word separator
morse_string = replace(morse_string, '0', '   ', 5, 15)  # Replace medium wide whitespaces with letter separator
morse_string = replace(morse_string, '0', ' ', 1, 4)  # Replace narrow whitespaces with in-letter separator

print(morse_string, '\\n')

plaintext = ''
for morse_word in morse_string.split('       '):
    for morse_letter in morse_word.split('   '):
        try:
            plaintext += MORSE_CODE[morse_letter.strip()]  # Stripping in case of leading or trailing spaces
        except KeyError:
            print('Unknown morse code [%s]' % morse_letter)
    plaintext += ' '

print(plaintext, '\\n')

plaintext = plaintext.replace('KROLLPARENTES SLUTT', '}').replace('KROLLPARENTES', '{').replace(' ', '')

print(plaintext, '\\n')  # Prints PST{E06531D19FF020A479520EF28C8D1E2C}
</pre>
The flag printed is <code>PST{E06531D19FF020A479520EF28C8D1E2C}</code> (MD5 hash of <code>christmasrun</code>).
</span></div></li><li><div class="collapsible-header">December 10th - Vige vs. Nere - 5 points</div><div class="collapsible-body"><span><h6>Challenge</h6>There's a polar chess championship going on at the North Pole. We're given the following <a href="https://en.wikipedia.org/wiki/Portable_Game_Notation">PGN (Portable Game Notation)</a> for a chess game between two South Pole players called Vige and Nere:
<pre class="prettyprint">1. a3 e6 2. b3 Ke7 3. Ra2 d5 4. h3 h6 5. f4 Qd6 6. Nc3 Qa6 7. Nf3 g5 8. Nb1 b5
9. d4 Qa5+ 10. Bd2 Kd6 11. g4 Bg7 12. Bc3 f5 13. Nh2 Ba6 14. Qd2 Bc8 15. Qc1 Qb6 16. Ba1 b4
17. Nd2 Ke7 18. Ndf3 Nd7 19. axb4 Ngf6 20. gxf5 Ne5 21. Ng4 c5 22. Nh4 Qd6 23. Nf2 Ng8 24. Bg2 a5
25. Ra4 Qd8 26. Be4 Qe8 27. Ra3 Kf7 28. b5 Qe7 29. O-O exf5 30. Nxf5 Ba6 31. Ng3 Qf6 32. Nd1 Ra7
33. Kg2 Nc4 34. bxa6 Qb6 35. Nb2 Nxa3 36. Nh5 Qxb3 37. Nxg7 Nb5 38. Nd1 Qe3 39. Rh1 Qa3 40. Re1 Rc7
41. Ne8 Kxe8 42. Qb1 Rhh7 43. dxc5 Rce7 44. Rg1 Re5 45. fxg5 Nf6 46. gxh6 Kf8 47. a7 Ng4 48. Kh1 Nc7
49. Bxd5 Qb4 50. Kg2 Qa3 51. c6 Qc5 52. Qb8+ Re8 53. Be5 Ne6 54. Nc3 Rf7 55. Qxe8+ Kxe8 56. Bf4 Rf6
57. Bg3 Kf7 58. Be1 1-0</pre>
We're also given the link to <a href="https://lichess.org/yDDc9bR0">https://lichess.org/yDDc9bR0</a> where the same game is set up.

<h6>Solution</h6>Because we got a square and the players were called Vige and Nere I was so sure this was just a step up from the Caesar cipher with a relatively simple <a href="https://en.wikipedia.org/wiki/Vigenère_cipher">Vigenère cipher</a> challenge. That cost me a lot time.

<a href="https://incoherency.co.uk/blog/stories/chess-steg.html">Hiding messages in a chess game</a> is actually a thing. You can take a message and encode it into a valid chess game and get valid PGN out on the other end. As James Stanley says in that blog post he's got a  <a href="https://incoherency.co.uk/chess-steg/">nice online tool for this</a>. Decoding the PGN actually gives a relatively meaningful output: <code>HHL DJDWEDESKWCLXK u02s104y2s665t5v3w2619v6184su50t CGGXDAHTJTFMWH KEMIL</code>

The output is pretty close to the format of the flags from previous challenges. And remembering the players' names, this is where the Vigenère cipher comes in. Knowing that we want the flag to start with <code>PST</code> it isn't very hard to crack the code.

Conveniently Jonas Enge has made a <a href="https://github.com/Alheimsins/chess-steg-cli">command-line implementation</a> which we can use in combination with e.g. <a href="https://blog.npmjs.org/post/162869356040/introducing-npx-an-npm-package-runner">npx</a> and a small Python script:
<pre class="prettyprint lang-py">#!/usr/bin/python3
import string
import subprocess

pgn = """1. a3 e6 2. b3 Ke7 3. Ra2 d5 4. h3 h6 5. f4 Qd6 6. Nc3 Qa6 7. Nf3 g5 8. Nb1 b5 \\
9. d4 Qa5+ 10. Bd2 Kd6 11. g4 Bg7 12. Bc3 f5 13. Nh2 Ba6 14. Qd2 Bc8 15. Qc1 Qb6 16. Ba1 b4 \\
17. Nd2 Ke7 18. Ndf3 Nd7 19. axb4 Ngf6 20. gxf5 Ne5 21. Ng4 c5 22. Nh4 Qd6 23. Nf2 Ng8 24. Bg2 a5 \\
25. Ra4 Qd8 26. Be4 Qe8 27. Ra3 Kf7 28. b5 Qe7 29. O-O exf5 30. Nxf5 Ba6 31. Ng3 Qf6 32. Nd1 Ra7 \\
33. Kg2 Nc4 34. bxa6 Qb6 35. Nb2 Nxa3 36. Nh5 Qxb3 37. Nxg7 Nb5 38. Nd1 Qe3 39. Rh1 Qa3 40. Re1 Rc7 \\
41. Ne8 Kxe8 42. Qb1 Rhh7 43. dxc5 Rce7 44. Rg1 Re5 45. fxg5 Nf6 46. gxh6 Kf8 47. a7 Ng4 48. Kh1 Nc7 \\
49. Bxd5 Qb4 50. Kg2 Qa3 51. c6 Qc5 52. Qb8+ Re8 53. Be5 Ne6 54. Nc3 Rf7 55. Qxe8+ Kxe8 56. Bf4 Rf6 \\
57. Bg3 Kf7 58. Be1 1-0"""

ciphertext = subprocess.check_output('npx --quiet chess-steg-cli --unsteg "%s"' % pgn, encoding='UTF-8', shell=True).strip()

print('Ciphertext:', ciphertext)  # Prints 'Ciphertext: HHL DJDWEDESKWCLXK u02s104y2s665t5v3w2619v6184su50t CGGXDAHTJTFMWH KEMIL'

suspected_plaintext = 'PST KROELLPARENTES'
plaintext = ''
key = ''

for i, s in enumerate(suspected_plaintext):
    index = string.ascii_lowercase.find(s.lower())
    if index != -1:  # Char in alphabet
        key += chr(((ord(ciphertext[i]) - ord(s)) % len(string.ascii_lowercase)) + ord('A'))
        if len(key) % 2 == 0 and key[:len(key)//2] == key[len(key)//2:]:  # Key is probably repeating itself
            key = key[:len(key)//2]
            break
print('Key:', key)  # Prints 'Key: SPST'

i = 0
for c in ciphertext:
    index = string.ascii_lowercase.find(c.lower())
    if index != -1:
        islower = c.islower()
        c = chr(((ord(c.upper()) - ord(key[i % len(key)])) % len(string.ascii_lowercase)) + ord('A'))
        if islower:
            c = c.lower()
        i += 1
    plaintext += c
print('Plaintext:', plaintext)  # Prints 'Plaintext: PST KROELLPARENTES f02a104f2a665e5d3d2619d6184dc50a KROELLPARENTES SLUTT'
print('Flag:', plaintext.replace('KROELLPARENTES SLUTT', '}').replace('KROELLPARENTES', '{').replace(' ', ''))  # Prints 'Flag: PST{f02a104f2a665e5d3d2619d6184dc50a}'
</pre>
The key is <code><a href="https://spst.no/">SPST</a></code>. The flag is <code>PST{f02a104f2a665e5d3d2619d6184dc50a}</code>.
</span></div></li><li><div class="collapsible-header">December 11th - 1337 - 5 points</div><div class="collapsible-body"><span><h6>Challenge</h6>The challenge is to decode <a href="https://kalender.npst.no/melding.txt">a message sent to a spy</a>.

<h6>Solution</h6>The title and text of the challenge hints a lot about <a href="https://en.wikipedia.org/wiki/Prime_number">prime numbers</a> and <a href="https://en.wikipedia.org/wiki/Factorization">factorization</a>. The message has 1337 bits (just like the title). <code>1337</code> is a prime number and can be factorized by the prime numbers <code>7</code> and <code>191</code>. Because of that the bits can't be divided into bytes of 8 bits. But that's fine as e.g. <a href="https://en.wikipedia.org/wiki/ASCII">ASCII</a> used to originally only have 7 bits per character.

This is where I dug in the wrong direction. I spent quite a bit of time thinking that the prime number and factorization hints meant that this text was <a href="https://en.wikipedia.org/wiki/RSA_(cryptosystem)">RSA encrypted</a> (<code>n=1337, p=7, r=191</code>).

But the text is supposed to be divided into 191 columns and 7 lines. Then a pattern emerges. 🤦 I have changed the zeros to spaces to make it more readable:<pre class="prettyprint lang-py">111   11  11111    1  1     111 1   1 11111 1111  1111  11111   1   1   1       1 11111       11111 1 1     1           1   1  111  1   1       1   1   1   1   1 11111       1 11111 1  1    
1  1 1  1   1     1   1      1  11  1 1     1   1 1   1 1      1 1  1  1        1   1           1   1 1     1           1   1 1   1 1   1       11 11  1 1  1  1  1           1   1   1   1   
1  1 1      1     1   1      1  1 1 1 1     1   1 1   1 1     1   1 1 1         1   1           1   1 1     1            1 1  1   1 1   1       1 1 1 1   1 1 1   1           1   1   1   1   
111   11    1    1    1      1  1 1 1 1111  1111  1111  1111  1   1 11          1   1           1   1 1     1             1   1   1 1   1       1   1 1   1 11    1111        1   1   1    1  
1       1   1     1   1      1  1  11 1     1   1 1 1   1     11111 1 1         1   1           1   1 1     1             1   1   1 1   1       1   1 11111 1 1   1           1   1   1   1   
1    1  1   1     1   1      1  1   1 1     1   1 1  1  1     1   1 1  1        1   1           1   1 1     1             1   1   1 1   1       1   1 1   1 1  1  1           1   1       1   
1     11    1      1  11111 111 1   1 11111 1111  1   1 11111 1   1 1   1 11111 1   1   11111   1   1 11111 11111 11111   1    111   111  11111 1   1 1   1 1   1 11111 11111 1   1   1  1    
</pre>
I have to admit this was not my favourite challenge. It's hard to relate this to anything IT security really.

The flag was <code>PST{LINEBREAK_IT_TILL_YOU_MAKE_IT!}</code>.
</span></div></li><li><div class="collapsible-header">December 12th - Arbitrary code - 5 points</div><div class="collapsible-body"><span><h6>Challenge</h6>We're told there's <a href="https://api.spst.no/eval?eval=%60%3Cpre%3E%24%7BgetFlag()%7D%3C%2Fpre%3E%60">public available API endpoint at SPST's site</a> that seems to be vulnerable to <a href="https://en.wikipedia.org/wiki/Arbitrary_code_execution">arbitrary code execution</a>. We're asked to look at it and report back any flags.

<h6>Links</h6> - <a href="https://intranett.npst.no/challenges#Arbitrær kode">Challenge</a>
 - <a href="https://kalender.npst.no/12/">Daily brief</a>
 - <a href="https://api.spst.no/eval?eval=%60%3Cpre%3E%24%7BgetFlag()%7D%3C%2Fpre%3E%60">API endpoint</a>

<h6>Solution</h6>I found this challenge quite entertaining. The &lt;pre&gt; tag in the given URL isn't a coincident as it makes the output more readable in the browser as we progress. It's possible to solve this either by just using the API endpoint all the time or by running the code locally.

The first step is to find the source code of the <code>getFlag()</code> method. As this turns out to be plain JavaScript we are able to get the source code of the functions when they are printed. A clue to solve this challenge is to take note of the comments in the code.

If we start out with <a href="https://api.spst.no/eval?eval=%60%3Cpre%3E%24%7BgetFlag%7D%3C%2Fpre%3E%60">https://api.spst.no/eval?eval=&#96;&lt;pre&gt;&#36;{getFlag}&lt;/pre&gt;&#96;</a>:<pre class="prettyprint lang-js">function getFlag() {
    // Det er sikkert smartere å kryptere flagget først, og bare skrive inn det
    // krypterte resultatet her, enn å kryptere på serveren hver gang.
    // 11.12.19: Kryptert flagget nå. Vi kan sikkert slette encrypt-funksjonen?
    return "e5a8aadb885cd0db6c98140745daa3acf2d06edc17b08f1aff6daaca93017db9dc8d7ce7579214a92ca103129d0efcdd";
  }
</pre>
We can see that the flag returned is encrypted and is the ciphertext <code style="overflow-wrap: break-word;">e5a8aadb885cd0db6c98140745daa3acf2d06edc17b08f1aff6daaca93017db9dc8d7ce7579214a92ca103129d0efcdd</code>.

The comments refer to <a href="https://api.spst.no/eval?eval=%60%3Cpre%3E%24%7Bencrypt%7D%3C%2Fpre%3E%60">https://api.spst.no/eval?eval=&#96;&lt;pre&gt;&#36;{encrypt}&lt;/pre&gt;&#96;</a>:<pre class="prettyprint lang-js">function encrypt(input) {
    // Bruk &#96decrypt&#96 for å dekryptere
  
    const algorithm = "aes-192-cbc";
    // 06.12.19: husk å oppdatere denne hver dag!!!
    // 09.12.19: dette var sykt slitsomt. kan vi finne en bedre løsning?
    // 11.12.19: Krypteres permanent med dagens passord nå.
    // Denne funksjonen trengs vel ikke lenger?
    const password = getPassword("10.12.19");
  
    // 09.12.19: pepper er ikke et salt. Når vi på sikt krypterer utenfor serveren
    // burde vi oppdatere dette til noe mer vitenskapelig korrekt.
    // Natriumhydrogensulfat?
    // 11.12.19: Oppdatert med den kjemiske formelen ;)
    const key = crypto.scryptSync(password, formatSalt("pepper"), 24);
  
    const iv = Buffer.alloc(16, 0);
    const cipher = crypto.createCipheriv(algorithm, key, iv);
    
    let encrypted = cipher.update(input, "utf8", "hex");
    encrypted += cipher.final("hex");
  
    return encrypted;
}
</pre>
Reading the comments we see that the salt used for the encryption of the flag is <code><a href="https://en.wikipedia.org/wiki/Sodium_bisulfate">NaHSO4</a></code>.

The comments also refer to <a href="https://api.spst.no/eval?eval=%60%3Cpre%3E%24%7BgetPassword%7D%3C%2Fpre%3E%60">https://api.spst.no/eval?eval=&#96;&lt;pre&gt;&#36;{getPassword}&lt;/pre&gt;&#96;</a>:<pre class="prettyprint lang-js">function getPassword(date) {
    const passwords = {
      "06.12.19": "passord-" + getSecretPasswordNumber(3),
      "07.12.19": "passord-" + getSecretPasswordNumber(5),
      "08.12.19": "passord-" + getSecretPasswordNumber(8),
      "09.12.19": "passord-" + getSecretPasswordNumber(13),
      "10.12.19": "passord-" + getSecretPasswordNumber(21)
    };
    // 06.12.19: vi har ikke flere passord etter 10. Burde vurdere alternative
    // løsninger.
    return passwords[date] || &#96;fant ikke passord for &#36;{date}&#96;;
}
</pre>
Notice how the method uses the <a href="https://en.wikipedia.org/wiki/Fibonacci_number">Fibonacci sequence</a> when calling <code>getSecretPasswordNumber()</code>.

If we want to run the code locally we need the <code>getSecretPasswordNumber()</code>, <code>decrypt()</code> and <code>formatSalt()</code> functions too.

<a href="https://api.spst.no/eval?eval=%60%3Cpre%3E%24%7BgetSecretPasswordNumber%7D%3C%2Fpre%3E%60">https://api.spst.no/eval?eval=&#96;&lt;pre&gt;&#36;{getSecretPasswordNumber}&lt;/pre&gt;&#96;</a>:<pre class="prettyprint lang-js">function getSecretPasswordNumber(n) {
    return Math.PI.toFixed(48).toString().split(".")[1].slice(n, n+2);
}
</pre>
<a href="https://api.spst.no/eval?eval=%60%3Cpre%3E%24%7Bdecrypt%7D%3C%2Fpre%3E%60">https://api.spst.no/eval?eval=&#96;&lt;pre&gt;&#36;{decrypt}&lt;/pre&gt;&#96;</a>:<pre class="prettyprint lang-js">function decrypt(password, salt, input) {
    const algorithm = "aes-192-cbc";
    
    const key = crypto.scryptSync(password, formatSalt(salt), 24);
    
    const iv = Buffer.alloc(16, 0);
    const decipher = crypto.createDecipheriv(algorithm, key, iv);
    
    let decrypted = decipher.update(input, 'hex','utf8');
    decrypted += decipher.final('utf8');
    
    return decrypted;
}
</pre>
<a href="https://api.spst.no/eval?eval=%60%3Cpre%3E%24%7BformatSalt%7D%3C%2Fpre%3E%60">https://api.spst.no/eval?eval=&#96;&lt;pre&gt;&#36;{formatSalt}&lt;/pre&gt;&#96;</a>:<pre class="prettyprint lang-js">function formatSalt(salt) {
    return salt.toLowerCase();
}
</pre>
With all this information and pasting in the code from the server we can run the following code: <pre class="prettyprint lang-js">const crypto = require('crypto');
const password = 'passord-' + getSecretPasswordNumber(34); // Ref. Fibonacci numbers and getPassword()
const salt = 'NaHSO4'
const ciphertext = getFlag();
const plaintext = decrypt(password, salt, ciphertext);

console.log('Password:', password);
console.log('Salt:', salt);
console.log('Ciphertext:', ciphertext);
console.log('Plaintext:', plaintext);
</pre>
The output is as follows:<pre class="prettyprint lang-js">Password: passord-61
Salt: NaHSO4
Ciphertext: e5a8aadb885cd0db6c98140745daa3acf2d06edc17b08f1aff6daaca93017db9dc8d7ce7579214a92ca103129d0efcdd
Plaintext: PST{24e592de8b20fe09938916d79b08854e}
</pre>
Instead of running the code locally we can just visit <a style="overflow-wrap: break-word;" href="https://api.spst.no/eval?eval=%60%24%7Bdecrypt(%27passord-61%27%2C%27NaHSO4%27%2C%27e5a8aadb885cd0db6c98140745daa3acf2d06edc17b08f1aff6daaca93017db9dc8d7ce7579214a92ca103129d0efcdd%27)%7D%60">https://api.spst.no/eval?eval=&#96;&#36;{decrypt('passord-61','NaHSO4','e5a8aadb885cd0db6c98140745daa3acf2d06edc17b08f1aff6daaca93017db9dc8d7ce7579214a92ca103129d0efcdd')}&#96;</a>

Since this is real <code>eval()</code> it is also possible solving this challenge a bit more effectively by going to e.g. <a href="https://api.spst.no/eval?eval=%60%3Cpre%3E%24%7Brequire(%27fs%27).readdirSync(%27.%27).toString()%7D%3C%2Fpre%3E%60">https://api.spst.no/eval?eval=&#96;&lt;pre&gt;&#36;{require('fs').readdirSync('.').toString()}&lt;/pre&gt;&#96;</a> and <a href="https://api.spst.no/eval?eval=%60%3Cpre%3E%24%7Brequire(%27fs%27).readFileSync(%27eval.js%27).toString()%7D%3C%2Fpre%3E%60">https://api.spst.no/eval?eval=&#96;&lt;pre&gt;&#36;{require('fs').readFileSync('eval.js').toString()}&lt;/pre&gt;&#96;</a>

As seen, the flag is <code>PST{24e592de8b20fe09938916d79b08854e}</code> (MD5 hash of <code>passord123</code>).
</span></div></li><li><div class="collapsible-header">December 13th - Token effort - 5 points</div><div class="collapsible-body"><span><h6>Challenge</h6>Another entertaining challenge. Santa has an online naughty and nice list. Seemingly one of the API keys have been compromised and we're given <a href="https://en.wikipedia.org/wiki/7z">7z</a> archive files with access logs to investigate the issue. The elf that has archived the files is not very technical and also has forgotten the password of the archive files. However, the password should be mentioned as one of the technologies in one of PST's job ads. The challenge is to find out which of the API keys that have been compromised.

<h6>Links</h6> - <a href="https://intranett.npst.no/challenges#Token effort">Challenge</a>
 - <a href="https://kalender.npst.no/13/">Daily brief</a>
 - <a href="https://www.finn.no/165416216">Job ad</a>
 - <a href="https://kalender.npst.no/logger.7z.001">https://kalender.npst.no/logger.7z.001</a>
 - <a href="https://kalender.npst.no/logger.7z.002">https://kalender.npst.no/logger.7z.002</a>
 - <a href="https://kalender.npst.no/logger.7z.003">https://kalender.npst.no/logger.7z.003</a>
 - <a href="https://kalender.npst.no/logger.7z.004">https://kalender.npst.no/logger.7z.004</a>

<h6>Solution</h6>The challenge can be solved like this:
1. Unzip the 7z files using tech words mentioned in job ad
2. Continue to unzip stuff (no worries, it actually isn't a <a href="https://en.wikipedia.org/wiki/Zip_bomb">zip bomb</a>) until you have all four log files (I spent a bit too long when I only had one log file available)
3. Look for entries that stands out among the 1,031,074 log lines to find the compromised API key.

Easy right? Let's try to script it:<pre class="prettyprint lang-py">#!/usr/bin/python3
import os
import subprocess
import re
import glob


def unzip(filename):
    print('\\nTrying to unzip [%s].' % filename)
    try:
        output = subprocess.check_output('jar xvf ' + filename, encoding='UTF-8', shell=True).strip()
        print(output)
        if output:
            for line in output.split('\\n'):
                filename = line.split(': ')[1]
                if filename.endswith('.zip'):
                    unzip(filename)
                    if DELETE_ZIP_FILES:
                        os.remove(filename)
                elif filename.endswith('.gz'):
                    gunzip(filename)
                else:
                    print('Unknown file type for file named [%s]. Skipping.' % filename)
    except subprocess.CalledProcessError as e:
        print(e)


def gunzip(filename):
    print('\\nTrying to gunzip [%s].' % filename)
    try:
        output = subprocess.check_output('gunzip --force ' + filename, encoding='UTF-8', shell=True).strip()
        print(output)
    except subprocess.CalledProcessError as e:
        print(e)


def get_wordlist(filename):
    with open(filename, 'r') as f:
        return set(f.read().split())


def unar(filename, wordlist):
    print('\\nTrying to unar [%s].' % filename)
    for word in wordlist:
        word = word.replace('(', '').replace(')', '').replace('.', '').replace(',', '').replace(':', '').replace('?', '').replace('"', '')
        print('Trying password: [%s]' % word)
        try:
            # Using https://theunarchiver.com/command-line
            output = subprocess.check_output('./unar -force-overwrite -password "' + word + '" ' + filename, encoding='UTF-8', shell=True).strip()
            print(output)
        except subprocess.CalledProcessError:
            continue
        else:
            print('Password [%s] was correct.' % word)  # Prints 'Password [Graylog] was correct.'
            return


def update_data(name, matcher):
    if name not in counts:
        counts[name] = {}
        lengths[name] = {}

    group = matcher.group(name)
    if not group in counts[name]:
        counts[name][group] = {'count': 1, 'line': matcher.string}
    else:
        counts[name][group]['count'] = counts[name][group]['count'] + 1

    length = 0 if group is None else len(group)
    if not length in lengths[name]:
        lengths[name][length] = {'count': 1, 'line': matcher.string}
    else:
        lengths[name][length]['count'] = lengths[name][length]['count'] + 1


def parse(filename):
    print('\\nParsing [%s]' % filename)
    with open(filename) as file:
        for line in file:
            line = line.strip()
            m = re.search(r'(?P<ip>.*?) - - \[(?P<date>.*?)\] \"(?P<method>.*?) (?P<url>.*?)(\?)?(jw_token=(?P<token>.*?))?(&)?(id=(?P<id>.*?))?(&)?(page=(.*?))? (?P<http>.*?) (?P<status>.*?) (?P<size>.*?) \"-\" \"(?P<ua>.*?)\"', line)
            if not m:
                print(line)
                print(m)
                exit(0)
            update_data('ua', m)
            update_data('url', m)
            update_data('status', m)
            update_data('size', m)
            update_data('http', m)
            update_data('method', m)
            update_data('id', m)
            update_data('token', m)


def analyze_counts():
    """
    Looks for lines query param values that stand out
    """
    for name in counts:
        print('\\nAnalyzing counts of %s' % name)
        interesting = []
        for group in counts[name]:
            if counts[name][group]['count'] < 10:
                line = counts[name][group]['line']
                interesting.append(line)
        if len(interesting) == 0:
            print('  Found nothing of interest.')
        elif len(interesting) < 10:
            for line in interesting:
                # Prints lines like '10.80.116.24 - - [2019-12-07T07:00:00.000Z] "BREW /brew/coffee HTCPCP/1.0" 418 0 "-" "polarbucks/9000.1"'
                print('  Found interesting log line:\\n    %s' % line)
        else:
            print('  Found too many unique items. Not printing any.')


def analyze_lengths():
    """
    Looks for lines query param value lengths that stand out
    """
    for name in lengths:
        print('\\nAnalyzing string lengths of %s' % name)
        interesting = []
        for group in lengths[name]:
            length = 0 if group is None else group
            if lengths[name][length]['count'] < 10:
                line = lengths[name][length]['line']
                interesting.append(line)
        if len(interesting) == 0:
            print('  Found nothing of interest.')
        elif len(interesting) < 10:
            for line in interesting:
                # Prints lines like '10.87.113.12 - - [2019-12-09T11:51:19.031Z] "DELETE /lister/snille.php?id=jule_nissen&jw_token=67e49727affdee991ec58180ee657b28 HTTP/1.1" 403 24 "-" "curl/7.61.1"'
                print('  Found interesting log line:\\n    %s' % line)
        else:
            print('  Found too many unique items. Not printing any.')


DELETE_ZIP_FILES = False

# job_ad.txt contains the text from the job ad
unar('logger.7z.001', get_wordlist('job_ad.txt'))

unzip('access.log.zip')

for filename in glob.glob('*.access.log'):
    counts = {}
    lengths = {}
    parse(filename)
    analyze_counts()
    analyze_lengths()
</pre>
From this we get some interesting log lines:<pre class="prettyprint lang-bsh">Trying to unar [logger.7z.001].
Trying password: [oppgaver]
...
Trying password: [Graylog]
logger.7z.001: 7-Zip
  access.log.zip  (34231284 B)... OK.
Successfully extracted to "./access.log.zip".
Password [Graylog] was correct.

...

Trying to unzip [access.log.zip].
inflated: 2019-12-07.access.log.11.zip

...

Parsing [2019-12-07.access.log]

Analyzing counts of ua
  Found interesting log line:
    10.80.116.24 - - [2019-12-07T07:00:00.000Z] "BREW /brew/coffee HTCPCP/1.0" 418 0 "-" "polarbucks/9000.1"
...
Analyzing string lengths of id
  Found interesting log line:
    10.87.113.12 - - [2019-12-09T11:41:07.197Z] "DELETE /lister/slemme.php?id=gwyn HTTP/1.1" 401 275 "-" "curl/7.61.1"
  Found interesting log line:
    10.87.113.12 - - [2019-12-09T11:42:13.574Z] "DELETE /lister/slemme.php?id=gwyn&jw_token=f6d1ab9cebe6c5d734989151ec073bfe HTTP/1.1" 401 275 "-" "curl/7.61.1"
  Found interesting log line:
    10.87.113.12 - - [2019-12-09T11:51:19.031Z] "DELETE /lister/snille.php?id=jule_nissen&jw_token=67e49727affdee991ec58180ee657b28 HTTP/1.1" 403 24 "-" "curl/7.61.1"
...
</pre>

We are actually able to get out the log lines we need (and it's also always nice to see a reference to <code><a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/418">418 I'm a teapot</a></code>). If you look closer at the log lines from that same IP address 10.87.113.12 you'll see someone (probably good old Pen Gwyn) do this:
1. Delete himself from the naughty list without a API key and get 401 back
2. Delete himself from the naughty list with an invalid API key and get 401 back
3. Delete himself from the naughty list with a valid API key (the flag) and get 200 back
4. Add himself to the nice list with a valid API key and get 200 back
5. Delete Santa from the nice list with a valid API key and get 403 back

The flag is <code>PST{67e49727affdee991ec58180ee657b28}</code>.
</span></div></li><li><div class="collapsible-header">December 14th - Data leak - 5 points</div><div class="collapsible-body"><span><h6>Challenge</h6>NPST has been able to get their hands on a hard drive marked with <code>U+2295/U+22BB</code>. The hard drive contains contains the following document and the text also hints about <a href="https://en.wikipedia.org/wiki/Hamming_distance">hamming distance</a>:
<code style="font-size:60%;overflow-wrap: break-word;">GSU/MWR0QXpUW1p7TGZvITUXJgQaHiUbCRdONxcgEQwAahgDEU4LIgcxYyclGEwODysBPw8MVCcUAgILZRoxF0kdaiY8NjplGjUXSRKvARhFAyAWdBYME2oGiUUGJAB0NjknHlUKChwgBjURHVQlBQkXDzYYOwsMBmoFiUUgKgAwFQYYKwcfDgtlBjEXGx0+Gh4MGyhSPUUNESRVHwwdMRd0EQAQLxtCRTsrFjEXSRKyGQsAHGUXOkUGBDoGGQgDIAA9Cw5UKwNMAQc2ATFFBgQvBw0WBCocMQsMWkA5CQELNxc6RQgCajs8NjppUh4QBRFqOwUWHSAceEUBETgQGBELN1I7CB0VJgFMFgEoUh8pKCEZVQQEHGUEshcdVCUXBgAFMVIyChtULBkJFwtlEyJFDR05BglFATUXJgQaHiUbCQsLa3heSEkgIwcfAQ8iUmRWR0V4W11cTi4eNRcdEWoDiRcLZRYtDh0dLRBMDQ8mGTEXDFSvVQgABTcLJBEMBi9VlAsdLhc4DBoALwdMFgEoUiIEG1Q5EAIBGmUGPQlJPwY0OTZAZSQ9RQMbKBcJF04jHSYRGhU+AUwNDzcWIEUEES5ViUUPKxM4HBoROBBMDAArGjsJDRE+VQVFCiwBJwBJjCQGBwACLAEgAAcRZH9BRSErATAEDlR6QUJUXGtDbUUPGzgQGAoFZRc6RQgTLxsYRQsxUiIABRgzHgcAGmUBJAQHHSQSHwoeNRYmBA5UJxoYRSUJMwE2RVQmEAgAHCAcdAQfVAQlPzFAZTkYJDwnagMNF04wBjFFGZFqHwMCCSAGIRdJACMZTBUBNgY/CgcAJQcJEU4oFzBFDBpqFBpFBiQcJ0UbESMbHwEXN1x0IB0ALwdMBAIxUrFFDYwnGAlFHaBSNgAHDT4BCRZONR0nEQIbJAEDFwsxUjIKG1SvVR8AACEXdJ0HByEQAAwdMRcmRQ8GK1VOFgAsHjgAS1QoFB4LQGU2MRFJAiMHBwAcZQE7CEkbJ1UiNT0RUj0OAhFqHQ0XTisdMQtJFSQQABYLZR05RQgAahEJERogUjIKGxEtkB5FHqBSMAAbETlVGAAcNxsgChsdL1tmSE4DADEBCBNqRVpLX3dcZVxJB69VHw4HIwYxEUk6GiY4RRosHnQAB1QkDEwOHDwCIAAbHSQSHwQCIh0mDB0ZL1UfCgNlFT4KGxAvVQ0RTjMbdAwCHy9VAAAAIhcmRQ+ROFUYDAIiEzoCSQAjGUwMACsaOwkNET5VBUWWKwE/AAUdOQEJCwtrUgKAGxFqHQ0GBSAAMUUDGygXCRdONZd0FhkGLxsLRQgqAHSASRIjGwIATiAcdBMMHWoHGQsKMVIwAAcaL1UCHAtlGSYcGQAvBwULCSAcem9EVAaNHgEPIlJkUkdFeFtdXE4sHDIMBQA4EB4RC2UXOkUIEy8bGEUlCTMBNkkHIwEYRRggAD8WHREuVQMCTjcdIAAdVCwaHkWLZQE1BwYALwcJRQQwHjEDBgYoEB4ACiAeJwAHEWZVAQAAZQQxFwIHPhAIABplBDUXSRUmGQkXCyEXdBMMGC4cC0UcKgYxEQxaajMDFwagAjELHRgjEhoMHWUUOxcaHSQeCRdOIRcgEQxULBoeBws3FzAABQcvGwlFACoZdBEAGGoUGEUMIBQ7CQIaIxsLAABlEDgMG1Q/BgUOBSAAdBWMVCUYTAELMVI2CQAGahACRQkqFnQPHBhkf0FFOiwAJwEIE2pEXEtfd1xlXEkYLwMJFxogUjELSRUtEAIRTiAGdBUIBj4cTA8bKRc2FxwHagEFCU4gHHQVBgAvGx8MCykedA4AGC4QTAxOCyIHMUdUDhAYEQtlEDgASRMgGh4RTiAGIAAbVCsBTBOLN1IgDA0YIxIJFwtlGT0JDRFqBYlFByscJwwNESRVCgwFLlInFQgGIRACRQsxBjEXSRU+VQQEAGUQOABJGzoFCAQJIAZ6RT8dahAeRRs2Gz8XDFQ6kEwKA2UBOZ0bHSQSHwMBNwGsDgwAah0NF04jBzoCDAY+VQkRGiAAJwoEVCsZGgAAZQExF0kBPlUYDAJll3QNCFQnEAABGmUWMREdEWocAhELNxwgS2NZaiEDFx0hEzNFWEZkRF5LX3xSJwsIBDoQGEUYLFI7FRlULxtMCAspFj0LDlQlGEwEGmU5GCQ8J2odDRdOJx49ER1UOQwHS04DHSYNjAQvGxgJByIEPRZJAiMZTAELMQYxRQsRPgxMBBplBDEXAgc+EAgAGmUGPQlJPwY0OTZOLRMiCwwGahACAQ9lHjELDgYvVQ4EBWUCsUUPGzgXCRcLIRc4FgwaL1UfDAAgUiAMBVQgAABLZE94EAQdFSsbCxcLNVI5Ch1UGSU/MWQWBjsXDRU+FAEEHS4bOgAHVDyQHkUGJAB0BwUdPgFMEBo2EyARSRIlB0wAGmUWNREIFSQSHgAeZRt0CwgAPlUfCgNlATEXSQE+VRgMAmWXdBYdFScYCUUINxN0AAdULQcZFR4gUjIXAAIjGQAMCSBSJwoEVCAaDgcLN1IyChtUBCU/MUBlJD1FCxE4VQ0JAiBSNQsaFT4BCUUbKxwzgEmRahcJCxcxBjFFGhEtVQ0TTjEYMQsMBz4QAgBOIwA1RRoAJQcIBBokHzUWAh0kEAJFCDcXOUUdHSZVDQEDLBw9Fh0GKwYGCgA2BjEEBBE+VQQEHGUUsREdVDkcBxcLMVI4nRoaIxsLAABreF5vPB8vGx9FDysBNREdfhoQAkUpMgs6RQ8bOFUZEQMgAD8AHVQ/GwgAHCYdIgAbVCsHDgAHIVI5Ch1UBCU/MUBPeF4xCB8hVRgMAmUTOAkMVCwaHkUbMR8xFwIRPlUNFwwgGzBFDREkVR8MHTEXdBEAEC8bQm89LxcyRTokGSFARSUgGycAGwQjGwsTBysXOm9jOghPZi4PKwY9CwwaagMFCU4zlCYASQc+EAICGmUWMUUHETkBCUUaKlIwBA4RJBBMABoxFyZFAhgrEgkXTjWXdAGMBiYcC0UFMxM4DB0RPlUcgE4jGycODBpkVToMTikXIAAbVC8BGAAcZRc6RQcNahkJEws3EzoBkQZqBgMITi4TOkUFETwQHgBOJxcwFwxUOJAaBBwgAHpvOSceDg1WV3dLYlVdRntMXVZfc0dlXF5MfkAKVlonFGEBWBVyCA==</code>

<h6>Links</h6> - <a href="https://intranett.npst.no/challenges#Lekket data">Challenge</a>
 - <a href="https://kalender.npst.no/14/">Daily brief</a>

<h6>Solution</h6>The unicode characters <code>U+2295/U+22BB</code> or <code><a href="https://en.wikipedia.org/wiki/⊕">⊕</a>/<a href="https://en.wiktionary.org/wiki/⊻">⊻</a></code> are often used to symbolize <a href="https://en.wikipedia.org/wiki/Exclusive_or">exclusive or</a>, strongly hinting to <a href="https://en.wikipedia.org/wiki/XOR_cipher">XOR cipher</a> in our case.

The document is Base64 encoded. So we can assume we should decode it and then we can try to brute force the the key we to find the plaintext. It only takes a few lines of Python. The way I did it was to check the number of proper/expected plaintext chars I got for different keys:<pre class="prettyprint lang-py">#!/usr/bin/python3
import base64
import string
from time import time

cipher_base64 = 'GSU/MWR0QXpUW1p7TGZvITUXJgQaHiUbCRdONxcgEQwAahgDEU4LIgcxYyclGEwODysBPw8MVCcUAgILZRoxF0kdaiY8NjplGjUXSRKvARhFAyAWdBYME2oGiUUGJAB0NjknHlUKChwgBjURHVQlBQkXDzYYOwsMBmoFiUUgKgAwFQYYKwcfDgtlBjEXGx0+Gh4MGyhSPUUNESRVHwwdMRd0EQAQLxtCRTsrFjEXSRKyGQsAHGUXOkUGBDoGGQgDIAA9Cw5UKwNMAQc2ATFFBgQvBw0WBCocMQsMWkA5CQELNxc6RQgCajs8NjppUh4QBRFqOwUWHSAceEUBETgQGBELN1I7CB0VJgFMFgEoUh8pKCEZVQQEHGUEshcdVCUXBgAFMVIyChtULBkJFwtlEyJFDR05BglFATUXJgQaHiUbCQsLa3heSEkgIwcfAQ8iUmRWR0V4W11cTi4eNRcdEWoDiRcLZRYtDh0dLRBMDQ8mGTEXDFSvVQgABTcLJBEMBi9VlAsdLhc4DBoALwdMFgEoUiIEG1Q5EAIBGmUGPQlJPwY0OTZAZSQ9RQMbKBcJF04jHSYRGhU+AUwNDzcWIEUEES5ViUUPKxM4HBoROBBMDAArGjsJDRE+VQVFCiwBJwBJjCQGBwACLAEgAAcRZH9BRSErATAEDlR6QUJUXGtDbUUPGzgQGAoFZRc6RQgTLxsYRQsxUiIABRgzHgcAGmUBJAQHHSQSHwoeNRYmBA5UJxoYRSUJMwE2RVQmEAgAHCAcdAQfVAQlPzFAZTkYJDwnagMNF04wBjFFGZFqHwMCCSAGIRdJACMZTBUBNgY/CgcAJQcJEU4oFzBFDBpqFBpFBiQcJ0UbESMbHwEXN1x0IB0ALwdMBAIxUrFFDYwnGAlFHaBSNgAHDT4BCRZONR0nEQIbJAEDFwsxUjIKG1SvVR8AACEXdJ0HByEQAAwdMRcmRQ8GK1VOFgAsHjgAS1QoFB4LQGU2MRFJAiMHBwAcZQE7CEkbJ1UiNT0RUj0OAhFqHQ0XTisdMQtJFSQQABYLZR05RQgAahEJERogUjIKGxEtkB5FHqBSMAAbETlVGAAcNxsgChsdL1tmSE4DADEBCBNqRVpLX3dcZVxJB69VHw4HIwYxEUk6GiY4RRosHnQAB1QkDEwOHDwCIAAbHSQSHwQCIh0mDB0ZL1UfCgNlFT4KGxAvVQ0RTjMbdAwCHy9VAAAAIhcmRQ+ROFUYDAIiEzoCSQAjGUwMACsaOwkNET5VBUWWKwE/AAUdOQEJCwtrUgKAGxFqHQ0GBSAAMUUDGygXCRdONZd0FhkGLxsLRQgqAHSASRIjGwIATiAcdBMMHWoHGQsKMVIwAAcaL1UCHAtlGSYcGQAvBwULCSAcem9EVAaNHgEPIlJkUkdFeFtdXE4sHDIMBQA4EB4RC2UXOkUIEy8bGEUlCTMBNkkHIwEYRRggAD8WHREuVQMCTjcdIAAdVCwaHkWLZQE1BwYALwcJRQQwHjEDBgYoEB4ACiAeJwAHEWZVAQAAZQQxFwIHPhAIABplBDUXSRUmGQkXCyEXdBMMGC4cC0UcKgYxEQxaajMDFwagAjELHRgjEhoMHWUUOxcaHSQeCRdOIRcgEQxULBoeBws3FzAABQcvGwlFACoZdBEAGGoUGEUMIBQ7CQIaIxsLAABlEDgMG1Q/BgUOBSAAdBWMVCUYTAELMVI2CQAGahACRQkqFnQPHBhkf0FFOiwAJwEIE2pEXEtfd1xlXEkYLwMJFxogUjELSRUtEAIRTiAGdBUIBj4cTA8bKRc2FxwHagEFCU4gHHQVBgAvGx8MCykedA4AGC4QTAxOCyIHMUdUDhAYEQtlEDgASRMgGh4RTiAGIAAbVCsBTBOLN1IgDA0YIxIJFwtlGT0JDRFqBYlFByscJwwNESRVCgwFLlInFQgGIRACRQsxBjEXSRU+VQQEAGUQOABJGzoFCAQJIAZ6RT8dahAeRRs2Gz8XDFQ6kEwKA2UBOZ0bHSQSHwMBNwGsDgwAah0NF04jBzoCDAY+VQkRGiAAJwoEVCsZGgAAZQExF0kBPlUYDAJll3QNCFQnEAABGmUWMREdEWocAhELNxwgS2NZaiEDFx0hEzNFWEZkRF5LX3xSJwsIBDoQGEUYLFI7FRlULxtMCAspFj0LDlQlGEwEGmU5GCQ8J2odDRdOJx49ER1UOQwHS04DHSYNjAQvGxgJByIEPRZJAiMZTAELMQYxRQsRPgxMBBplBDEXAgc+EAgAGmUGPQlJPwY0OTZOLRMiCwwGahACAQ9lHjELDgYvVQ4EBWUCsUUPGzgXCRcLIRc4FgwaL1UfDAAgUiAMBVQgAABLZE94EAQdFSsbCxcLNVI5Ch1UGSU/MWQWBjsXDRU+FAEEHS4bOgAHVDyQHkUGJAB0BwUdPgFMEBo2EyARSRIlB0wAGmUWNREIFSQSHgAeZRt0CwgAPlUfCgNlATEXSQE+VRgMAmWXdBYdFScYCUUINxN0AAdULQcZFR4gUjIXAAIjGQAMCSBSJwoEVCAaDgcLN1IyChtUBCU/MUBlJD1FCxE4VQ0JAiBSNQsaFT4BCUUbKxwzgEmRahcJCxcxBjFFGhEtVQ0TTjEYMQsMBz4QAgBOIwA1RRoAJQcIBBokHzUWAh0kEAJFCDcXOUUdHSZVDQEDLBw9Fh0GKwYGCgA2BjEEBBE+VQQEHGUUsREdVDkcBxcLMVI4nRoaIxsLAABreF5vPB8vGx9FDysBNREdfhoQAkUpMgs6RQ8bOFUZEQMgAD8AHVQ/GwgAHCYdIgAbVCsHDgAHIVI5Ch1UBCU/MUBPeF4xCB8hVRgMAmUTOAkMVCwaHkUbMR8xFwIRPlUNFwwgGzBFDREkVR8MHTEXdBEAEC8bQm89LxcyRTokGSFARSUgGycAGwQjGwsTBysXOm9jOghPZi4PKwY9CwwaagMFCU4zlCYASQc+EAICGmUWMUUHETkBCUUaKlIwBA4RJBBMABoxFyZFAhgrEgkXTjWXdAGMBiYcC0UFMxM4DB0RPlUcgE4jGycODBpkVToMTikXIAAbVC8BGAAcZRc6RQcNahkJEws3EzoBkQZqBgMITi4TOkUFETwQHgBOJxcwFwxUOJAaBBwgAHpvOSceDg1WV3dLYlVdRntMXVZfc0dlXF5MfkAKVlonFGEBWBVyCA=='
cipher_hex = base64.b64decode(cipher_base64)


def xor(data, key):
    key = bytes(key * (len(data) // len(key) + 1), encoding='utf8')
    return bytearray(a ^ b for a, b in zip(*map(bytearray, [data, key])))


def count_chars(s, chars):
    return sum(s.count(ord(c)) for c in chars)


time_start = time()
max_key_length = 16  # Assuming that key length won't be longer than 16 chars
alphabet = string.ascii_letters + 'æøåÆØÅ .,{}' + string.whitespace + string.digits  # Assuming these should be most of the chars in the text

best_key = None
best_key_score = 0
for key_length in range(1, max_key_length + 1):  # Trying key lengths 1-max
    print('Checking key size %d.' % key_length)
    key = 'a' * key_length  # Default starting key
    for i in range(1, key_length + 1):
        best_letter_score = 0
        best_letter = None
        for l in alphabet:
            key = key[0:i - 1] + l + key[i: len(key)]
            score = count_chars(xor(cipher_hex, key), alphabet)  # Scoring the key by the number of expected chars the plaintext contains
            if score >= best_letter_score:
                best_letter_score = score
                best_letter = l
        key = key[0:i - 1] + best_letter + key[i: len(key)]  # Keeping the best letter for each position
    score = count_chars(xor(cipher_hex, key), alphabet)
    if score >= best_key_score:
        best_key_score = score
        best_key = key
        # Prints stuff like 'Found new best key [lelTeeerle] (score: 1931).':
        print('Found new best key [%s] (score: %d).' % (best_key, best_key_score))

time_spent = round(time() - time_start)

# Prints stuff like 'Found key [JulenErTeit] in 38 seconds:'
print('\\nFound key [%s] in %d seconds:' % (best_key, time_spent))
print(xor(cipher_hex, best_key).decode("latin-1"))
</pre>

The key we get is <code>JulenErTeit</code> and plaintext is an internal daily brief from SPST:
<code style="font-size:60%;">SPST
13.12.19

Operasjoner rettet mot NPST
Som kanskje mange her i SPST har fått med seg så har SPST foretatt operasjoner på Nordpolarske territorium i den siste tiden. Under følger en oppsummering av disse operasjonene.
Lederen av NPST, Jule Nissen, heretter omtalt som KLAUS har vært objekt for flere av disse operasjonene.

- Tirsdag 03.12.19 klarte våre dyktige hackere å dekryptere ønskelister som var sendt til KLAUS. Vi jobber fortsatt hardt med å analysere innholdet i disse ønskelistene.
- Onsdag 04.12.19 foretok en agent et vellykket spaningsoppdrag mot KLAUS, lederen av NPST. KLAUS var ute på joggetur til postkontoret med en av hans reinsdyr. Etter alt å dømme så benyttes postkontoret for å sende ønskelister fra "snille" barn. Det virker som om NPST ikke har noen anelse om at dette foregår på deres territorie.
- Fredag 06.12.19 så skiftet NPST til en ny krypteringsalgoritme som gjorde at vi ikke lenger får tilgang til innholdet i ønskelistene. Våre hackere jobber på spreng for å finne en vei rundt denne nye krypteringen.
- Lørdag 07.12.19 infiltrerte en agent KLAUS sitt verksted og rotet for å sabotere juleforberedelsene, men verkstedet var allerede veldig rotete. Forhåpentligvis forsinker dette forberedelsene nok til at befolkningen blir usikker på om det blir en god jul.
- Tirsdag 10.12.19 leverte en agent et parti julebrus til en potensiell kilde i NPST. Dette ble gjort etter at vår tidligere kilde på innsiden fikk sparken etter at han ble oppdaget. Vi er usikre på om smøringsforsøket har fungert ettersom alven ser ut til å ha meldt dette internt.
- Torsdag 12.12.19 snappet vi opp en melding om at KLAUS har blitt syk. Forhåpentligvis vil dette bety at verkstedet til KLAUS havner enda lengre bak på forberedelsene sine til jul.


Dataangrep mot SPST
Stordatamaskinen vår har blitt utsatt for et dataangrep i natt som ser ut til å stamme fra en gruppe frivillige som jobber for NPST. Vi ber alle ansatte unngå å benytte seg av tjenestene fra stordatamaskinen frem til administrasjonsteamet har fått sikret løsningen.


Ukens ansatt
Pen Gwyn for utmerket undercover arbeid mot NPST.


Takk til alle for utmerket arbeid den siste tiden.
Sjef SPST, Keiserpingvinen

NB:
Kantinen vil være stengt de neste to dagene etter klager på dårlig kvalitet på fisken. Vi leter etter en ny leverandør som kan levere bedre råvarer.
PST{a392960421913165197845f34bf5d1a8}</code>

The flag is <code>PST{a392960421913165197845f34bf5d1a8}</code> (MD5 hash of <code>xor</code>).
</span></div></li><li><div class="collapsible-header">December 15th - Flash drive - 10 points</div><div class="collapsible-body"><span><h6>Challenge</h6>NPST has gotten their hands on a flash drive originally belonging to SPST's Pen Gwyn. It seems to be private and contain vacation pictures, but they are stored in a password protected ZIP file. The challenge is to find the flag on the flash drive.

<h6>Links</h6> - <a href="https://intranett.npst.no/challenges#15. desember">Challenge</a>
 - <a href="https://kalender.npst.no/15/">Daily brief</a>
 - <a href="https://kalender.npst.no/spst_minnepinne.tar.gz">Flash drive image file</a>

<h6>Solution</h6>There are probably cooler ways to go about it, but I just retrieved the flag by using the <code><a href="https://en.wikipedia.org/wiki/Strings_(Unix)">strings</a></code> command. One string stood out and looked like Base64:<pre class="prettyprint lang-bsh">$ strings spst_minnepinne.dd
# ...
"RXQga2plbXBlbGFuZ3QgcGFzc29yZCBzb20gYWxkcmkgdmlsIGt1bm5lIGdqZXR0ZXMgYXYgTlBTVCEgOik="

$ echo RXQga2plbXBlbGFuZ3QgcGFzc29yZCBzb20gYWxkcmkgdmlsIGt1bm5lIGdqZXR0ZXMgYXYgTlBTVCEgOik= | base64 --decode
Et kjempelangt passord som aldri vil kunne gjettes av NPST! :)
</pre>
The flag is <code>PST{Et kjempelangt passord som aldri vil kunne gjettes av NPST! :)}</code> (=<i>A very long password NPST will never be able to guess! :)</i>).
</span></div></li><li><div class="collapsible-header">December 15th - Alternatives - 15 points</div><div class="collapsible-body"><span><h6>Challenge</h6>The challenge is to find the one letter character where the password from the previous challenge was found. It's only possible to guess the flag 20 times.

<h6>Links</h6> - <a href="https://intranett.npst.no/challenges#Alternativer">Challenge</a>
 - <a href="https://kalender.npst.no/15/">Daily brief</a>
 - <a href="https://kalender.npst.no/spst_minnepinne.tar.gz">Flash drive image file</a>

<h6>Solution</h6>Because of the way I solved the previous challenge this was pretty hard. There was no way (I think) I would get the answer to this one using <code>strings</code> or even a hex editor or by looking in the mounted disk drive.

What I finally did was to use <a href="https://en.wikipedia.org/wiki/Autopsy_(software)">Autopsy</a> and <a href="https://en.wikipedia.org/wiki/The_Sleuth_Kit">The Sleuth Kit</a> in a <a href="https://www.kali.org/">Kali</a> image.

Now it was pretty easy to see that the Base64 encoded flag was located in a file called <code>C:/feriebilder.zip:_</code>:

<img class="materialboxed responsive-img" title="" data-caption="" alt="" src="/images/pst301-autopsy.png"/>
<img class="materialboxed responsive-img" title="" data-caption="" alt="" src="/images/pst302-autopsy.png"/>

The character that was needed was <code>_</code>. The full flag after getting the md5 sum of it was <code>PST{b14a7b8059d9c055954c92674ce60032}</code>.
</span></div></li><li><div class="collapsible-header">December 15th - Vacation photos - 20 points</div><div class="collapsible-body"><span><h6>Challenge</h6>The challenge is to find a flag from one of the three vacation photos located inside the ZIP file on the disk image.

<h6>Links</h6> - <a href="https://intranett.npst.no/challenges#Feriebilder">Challenge</a>
 - <a href="https://kalender.npst.no/15/">Daily brief</a>
 - <a href="https://kalender.npst.no/spst_minnepinne.tar.gz">Flash drive image file</a>

<h6>Solution</h6>We have the password for the ZIP file containing the photos from the previous challenge. We just have to mount the disk and extract the files first: 
<pre class="prettyprint lang-bsh">$ hdiutil attach -imagekey diskimage-class=CRawDiskImage -nomount spst_minnepinne.dd
/dev/disk3          	FDisk_partition_scheme         	
/dev/disk3s1        	Windows_NTFS                   	

$ hdiutil mount /dev/disk3s1 
/dev/disk3s1        	Windows_NTFS                   	/Volumes/SPST

$ unar -password "Et kjempelangt passord som aldri vil kunne gjettes av NPST! :)" /Volumes/SPST/feriebilder.zip 
/Volumes/SPST/feriebilder.zip: Zip
  huskelapp.png  (1418810 B)... OK.
  måltid.png  (2534140 B)... OK.
  varm dag på stranda.png  (1722473 B)... OK.
Successfully extracted to "feriebilder".
</pre>
In one of the pictures - <code>måltid.png</code> - there's what appears to be a red <a href="https://en.wikipedia.org/wiki/Herring">herring</a>, and that's not just a <a href="https://en.wikipedia.org/wiki/Red_herring">red herring</a> actually. The base for the flag could be found using e.g. an <a href="https://incoherency.co.uk/image-steganography/">online tool for image steganography</a>. The file <code>strand.png</code> hid an image with the text <code>PST{md5(red_herring)}</code>. The solution was to get the md5 sum of the file itself: <code>md5 måltid.png</code> = <code>07385aacc9264738cd7c32e76f3b81a5</code>. The flag was <code>PST{07385aacc9264738cd7c32e76f3b81a5}</code>.
</span></div></li><li><div class="collapsible-header">December 17th - Password database - 5 points</div><div class="collapsible-body"><span><h6>Challenge</h6>The elfs working in the canteen uses a home made password database. The problem is that they seem to have forgotten the password to it. The challenge is to find that password.

<h6>Links</h6> - <a href="https://intranett.npst.no/challenges#Passorddatabase">Challenge</a>
 - <a href="https://kalender.npst.no/17/">Daily brief</a>
 - <a href="https://kalender.npst.no/p2w">Database executable</a>

<h6>Solution</h6>Instead of just disassembling the executable and make sense of that I went for using the <a href="https://www.gnu.org/software/gdb/">GNU Debugger (GDB)</a>/<a href="https://github.com/longld/peda">peda</a> (Python Exploit Development Assistance for GDB). This was my first time using GDB (<a href="https://blog.roysolberg.com/2018/02/crack-android-apps">I have more experience cracking Android apps</a>), but it wasn't very hard to make sense of what was happening in this small application.

My approach was this:
1. Trying out the application
2. Disassembling the executable and get a feel for the flow
3. Adding a breakpoint where I thought the password was checked
4. Making sense of the strings in memory

<pre class="prettyprint lang-bsh">$ wget https://kalender.npst.no/p2w

$ file p2w
p2w: ELF 64-bit LSB pie executable, x86-64, version 1 (SYSV), dynamically linked, interpreter /lib64/ld-linux-x86-64.so.2, for GNU/Linux 2.6.32, BuildID[sha1]=758ae2fdb3384d82e1c697e0977354612bce94bf, not stripped

$ chmod u+x p2w

$ ./p2w
Passord: npst
Feil, pigg av!

$ gdb ./p2w
GNU gdb (Debian 7.12-6+b1) 7.12.0.20161007-git
# [...]
Reading symbols from ./p2w...(no debugging symbols found)...done.

gdb-peda$ r
Starting program: /root/p2w 
# [...]
Passord: test
Feil, pigg av!
[Inferior 1 (process 17124) exited normally]
Warning: not running

gdb-peda$ disas main
Dump of assembler code for function main:
   0x00005555555547c0 <+0>:	push   rbp
   0x00005555555547c1 <+1>:	mov    rbp,rsp
   0x00005555555547c4 <+4>:	sub    rsp,0x90
   0x00005555555547cb <+11>:	mov    BYTE PTR [rbp-0x60],0xfd
# [...]
   0x00005555555558b1 <+4337>:	call   0x555555554650 <printf@plt>
   0x00005555555558b6 <+4342>:	mov    rdx,QWORD PTR [rip+0x200793]        # 0x555555756050 <stdin@@GLIBC_2.2.5>
   0x00005555555558bd <+4349>:	lea    rax,[rbp-0x30]
   0x00005555555558c1 <+4353>:	mov    esi,0x21
   0x00005555555558c6 <+4358>:	mov    rdi,rax
   0x00005555555558c9 <+4361>:	call   0x555555554660 <fgets@plt>
   0x00005555555558ce <+4366>:	lea    rdx,[rbp-0x90]
   0x00005555555558d5 <+4373>:	lea    rax,[rbp-0x30]
   0x00005555555558d9 <+4377>:	mov    rsi,rdx
   0x00005555555558dc <+4380>:	mov    rdi,rax
   0x00005555555558df <+4383>:	call   0x555555554670 <strcmp@plt>
   0x00005555555558e4 <+4388>:	test   eax,eax
   0x00005555555558e6 <+4390>:	jne    0x5555555558f6 <main+4406>
   0x00005555555558e8 <+4392>:	lea    rax,[rbp-0x60]
   0x00005555555558ec <+4396>:	mov    rdi,rax
   0x00005555555558ef <+4399>:	call   0x555555554640 <puts@plt>
   0x00005555555558f4 <+4404>:	jmp    0x555555555902 <main+4418>
   0x00005555555558f6 <+4406>:	lea    rdi,[rip+0xa1]        # 0x55555555599e
   0x00005555555558fd <+4413>:	call   0x555555554640 <puts@plt>
   0x0000555555555902 <+4418>:	mov    eax,0x0
   0x0000555555555907 <+4423>:	leave  
   0x0000555555555908 <+4424>:	ret    
End of assembler dump.

gdb-peda$ b *0x00005555555558b6
Breakpoint 1 at 0x5555555558b6

gdb-peda$ r
Starting program: /root/p2w 
#[...]
[----------------------------------registers-----------------------------------]
RAX: 0x9 ('\t')
RBX: 0x0 
RCX: 0x0 
RDX: 0x0 
RSI: 0x20 (' ')
RDI: 0x555555757269 --> 0x0 
RBP: 0x7fffffffe200 --> 0x555555555910 (<__libc_csu_init>:	push   r15)
RSP: 0x7fffffffe170 ("625b2055fe2dcda72e418940599b881d")
RIP: 0x5555555558b6 (<main+4342>:	mov    rdx,QWORD PTR [rip+0x200793]        # 0x555555756050 <stdin@@GLIBC_2.2.5>)
R8 : 0x555555757260 ("Passord: ")
R9 : 0x9 ('\t')
R10: 0x410 
R11: 0x3f ('?')
R12: 0x555555554690 (<_start>:	xor    ebp,ebp)
R13: 0x7fffffffe2e0 --> 0x1 
R14: 0x0 
R15: 0x0
EFLAGS: 0x202 (carry parity adjust zero sign trap INTERRUPT direction overflow)
[-------------------------------------code-------------------------------------]
   0x5555555558a5 <main+4325>:	lea    rdi,[rip+0xe8]        # 0x555555555994
   0x5555555558ac <main+4332>:	mov    eax,0x0
   0x5555555558b1 <main+4337>:	call   0x555555554650 <printf@plt>
=> 0x5555555558b6 <main+4342>:	mov    rdx,QWORD PTR [rip+0x200793]        # 0x555555756050 <stdin@@GLIBC_2.2.5>
   0x5555555558bd <main+4349>:	lea    rax,[rbp-0x30]
   0x5555555558c1 <main+4353>:	mov    esi,0x21
   0x5555555558c6 <main+4358>:	mov    rdi,rax
   0x5555555558c9 <main+4361>:	call   0x555555554660 <fgets@plt>
[------------------------------------stack-------------------------------------]
0000| 0x7fffffffe170 ("625b2055fe2dcda72e418940599b881d")
0008| 0x7fffffffe178 ("fe2dcda72e418940599b881d")
0016| 0x7fffffffe180 ("2e418940599b881d")
0024| 0x7fffffffe188 ("599b881d")
0032| 0x7fffffffe190 --> 0x0 
0040| 0x7fffffffe198 --> 0xf0b5ff 
0048| 0x7fffffffe1a0 ("PST{f3ad88918fd18414cc773271f586f6a9}")
0056| 0x7fffffffe1a8 ("88918fd18414cc773271f586f6a9}")
[------------------------------------------------------------------------------]
Legend: code, data, rodata, value

Breakpoint 1, 0x00005555555558b6 in main ()
gdb-peda$ continue
Continuing.
Passord: 625b2055fe2dcda72e418940599b881d
PST{f3ad88918fd18414cc773271f586f6a9}
# [...]
</pre>
The password for the program is <code>625b2055fe2dcda72e418940599b881d</code>. The is <code>PST{f3ad88918fd18414cc773271f586f6a9}</code> (MD5 hash of <code>rudolf2</code>).
</span></div></li><li><div class="collapsible-header">December 19th - Pen and paper encryption version 3 - 5 points</div><div class="collapsible-body"><span><h6>Challenge</h6>A new version of the "pen and paper" encryption has been developed. The challenge is to check if all previous weaknesses are fixed. (Oh well, the real challenge is to break it and get the flag.) We are given some ciphertext and its plaintext: <code>PPKv3("Pompøst og metodisk") → øMSijrt Mc SÅtMZPrU</code>

The ciphertext to break is this: <code>ømQ UæjEEi4æÅktÅr i4æÅktÅr SZG tWM tPSÅ i4Z i4æÅktÅr rE0tt UæjEEi4æÅktÅr rE0tt</code>

<h6>Links</h6> - <a href="https://intranett.npst.no/challenges#PPKv3">Challenge</a>
 - <a href="https://kalender.npst.no/19/">Daily brief</a>

<h6>Solution</h6>It's best to just work with what we've got and map the known cipher and plain texts. That in addition to knowing a bit about typical formulations in these text we can build on that first iteration. Here's my script:<pre class="prettyprint lang-py">#!/usr/bin/python3
import string

ciphertext = 'ømQ UæjEEi4æÅktÅr i4æÅktÅr SZG tWM tPSÅ i4Z i4æÅktÅr rE0tt UæjEEi4æÅktÅr rE0tt'
translation_map = {}


def update_translation_map(known_ciphertext, known_plaintext):
    for i in range(len(known_ciphertext)):
        translation_map[known_ciphertext[i]] = known_plaintext[i]


def decrypt(ciphertext):
    plaintext = ''
    for l in ciphertext:
        if l in translation_map:
            plaintext += translation_map[l]
        else:
            plaintext += '?'
    return plaintext.replace(' krøllparentes slutt', '}').replace(' krøllparentes', '{').replace(' parentes slutt', ')').replace(' parentes ', '(')


# The known plaintext from the challenge:
update_translation_map('øMSijrt Mc SÅtMZPrU', 'Pompøst og metodisk')

# Prints 'P?? k?ø??p??e?tes p??e?tes md? t?o time p?d p??e?tes s??tt k?ø??p??e?tes s??tt':
print(decrypt(ciphertext))

# Assumptions after first iteration of decryption:
update_translation_map('ømQ UæjEEi4æÅktÅr rE0tt G W', 'PST krøllparentes slutt 5 w')

# Prints 'PST{(md5 two time pad)}'
print(decrypt(ciphertext))
</pre>
And since they mention two-time pad: This encryption would have been good if this was an <a href="https://en.wikipedia.org/wiki/Substitution_cipher#The_one-time_pad">one-time pad</a>, but the key has been reused for at least two ciphertexts and the key is not random as the letters seem to use a simple substitution.

The text printed is <code>PST{(md5 two time pad)}</code>. That makes the flag <code>PST{4a0fc5f3c88874cab11c64e965dff58d}</code>.
</span></div></li><li><div class="collapsible-header">December 20th - Mysterious card - 5 points</div><div class="collapsible-body"><span><h6>Challenge</h6>NPST has intercepted a postcard with source code that needs to be decoded. The card is marked with <code>360</code>.

The code we are given is this:
<code>1020 2020 0010 2012 2001 2200 1020 0000 0800 0200 0001 200A 2001 2200 1020 0C00 0300 0008 0800 1012</code>

<h6>Links</h6> - <a href="https://intranett.npst.no/challenges#Mystisk kort">Challenge</a>
 - <a href="https://kalender.npst.no/20/">Daily brief</a>

<h6>Solution</h6>The text strongly hints about old hardware and <a href="https://en.wikipedia.org/wiki/Punched_card">punch cards</a>. It doesn't take much investigation to figure out that the system in question is the <a href="https://en.wikipedia.org/wiki/IBM_System/360">IBM System/360</a> dating all the way back to 1964. That system had the <a href="https://en.wikipedia.org/wiki/EBCDIC">EBCDIC charset</a> which is an eight-bit character encoding. It descended from the code used with punched cards and corresponding six-bit binary-coded decimal code. Knowing that and looking at the relatively low hex numbers we can decode the hex into a good old punched card and see what it says.

I found <a href="https://www.masswerk.at/keypunch/">https://www.masswerk.at/keypunch/</a> to be a good source to learn more of the encoding of punch cards. It also lets you enter the hex numbers we have to translate, but there's a bug (or feature I don't understand) that makes the punched card not display the letters we need to solve the challenge.

While I mostly did the mapping from holes to letters manually I have since also added a binary to alphabet mapping to the script I used for this challenge:<pre class="prettyprint lang-py">#!/usr/bin/python3
# Sources:
# https://stackoverflow.com/a/52616459/467650
# http://www.jwdp.com/colbin1.html
# https://www.masswerk.at/keypunch/

input = '1020 2020 0010 2012 2001 2200 1020 0000 0800 0200 0001 200A 2001 2200 1020 0C00 0300 0008 0800 1012'
cols_count = 80
rows_count = 12


def get_row(row_num):
    row = ''
    for cols in card:
        row += cols[row_num]
    return row


LETTERS = {
    0b100000000000: '&',    0b010000000000: '-',    0b001000000000: '0',
    0b000100000000: '1',    0b000010000000: '2',    0b000001000000: '3',
    0b000000100000: '4',    0b000000010000: '5',    0b000000001000: '6',
    0b000000000100: '7',    0b000000000010: '8',    0b000000000001: '9',
    0b000000000000: ' ',    0b100100000000: 'A',    0b100010000000: 'B',
    0b100001000000: 'C',    0b100000100000: 'D',    0b100000010000: 'E',
    0b100000001000: 'F',    0b100000000100: 'G',    0b100000000010: 'H',
    0b100000000001: 'I',    0b010100000000: 'J',    0b010010000000: 'K',
    0b010001000000: 'L',    0b010000100000: 'M',    0b010000010000: 'N',
    0b010000001000: 'O',    0b010000000100: 'P',    0b010000000010: 'Q',
    0b010000000001: 'R',    0b001100000000: '/',    0b001010000000: 'S',
    0b001001000000: 'T',    0b001000100000: 'U',    0b001000010000: 'V',
    0b001000001000: 'W',    0b001000000100: 'X',    0b001000000010: 'Y',
    0b001000000001: 'Z',    0b100010000010: '¢',    0b100001000010: '.',
    0b100000100010: '<',    0b100000010010: '(',    0b100000001010: '+',
    0b100000000110: '|',    0b010010000010: '!',    0b010001000010: '$',
    0b010000100010: '*',    0b010000010010: ')',    0b010000001010: ';',
    0b010000000110: '¬',    0b001001000010: ',',    0b001000100010: '%',
    0b001000010010: '_',    0b001000001010: '>',    0b001000000110: '?',
    0b000010000010: ':',    0b000001000010: '#',    0b000000100010: '@',
    0b000000010010: '\\'',   0b000000001010: '=',    0b000000000110: '"'
}


def get_letter(b):
    try:
        return LETTERS[b]
    except KeyError:
        print('Missing letter for value %s. Returning [?].' % bin(int(b)))
    return '?'


letters = ''

card = [[' ' for x in range(rows_count)] for x in range(cols_count)]
for col_num, b in enumerate(int(b, 16) for b in input.split(' ')):
    rows = card[col_num]
    b = (b & 0b111111) | ((b >> 2) & 0b111111000000)  # Converting 8 bit bytes to 6 bits
    for i in range(0, rows_count):
        bit_offset = i  # if i < rows_count // 2 else i + 2
        rows[i] = 'O' if b & (1 << bit_offset) else ' '
    letters += get_letter(b)

print('       ________________________________________________________________')
print('      /%s' % letters)
print('12/Y | %s' % get_row(11))
print('11/X | %s' % get_row(10))
print(' 0   | %s' % get_row(9))
print(' 1   | %s' % get_row(8))
print(' 2   | %s' % get_row(7))
print(' 3   | %s' % get_row(6))
print(' 4   | %s' % get_row(5))
print(' 5   | %s' % get_row(4))
print(' 6   | %s' % get_row(3))
print(' 7   | %s' % get_row(2))
print(' 8   | %s' % get_row(1))
print(' 9   | %s' % get_row(0))
print('     |_________________________________________________________________')
</pre>
There's one character that seems off in the challenge, so the output from the script is this:
<pre class="prettyprint">       ________________________________________________________________
      /MD5(IBM 029+IBM/?60)
12/Y |  O OOO     OOO                                                                  
11/X | O     O       O    O                                                            
 0   |         O      O  O                                                             
 1   |                O                                                                
 2   |      O   O   O  O                                                               
 3   |                 O                                                               
 4   | OO    O       O                                                                 
 5   |   OO               O                                                            
 6   |            O     O                                                              
 7   |                                                                                 
 8   |    O       O       O                                                            
 9   |     O     O O                                                                   
     |_________________________________________________________________</pre>
But I must admit that it looks a bit cooler by using the image generated by <a href="https://www.masswerk.at/keypunch/?b=bWQ1KElCTSAwMjkraWJtLzM2MCk=">https://www.masswerk.at/keypunch/?b=bWQ1KElCTSAwMjkraWJtLzM2MCk=</a>:
<img class="materialboxed responsive-img" title="" data-caption="" alt="" src="/images/pst303-punched_card.png"/>
With the MD5 hash of the output the flag we need for this challenge is <code>PST{2d0330aeddd7a66612b328b06324e3b9}</code>.
</span></div></li><li><div class="collapsible-header">December 21st - New cryptosystem - 5 points</div><div class="collapsible-body"><span><h6>Challenge</h6>SPST has got a new <a href="https://en.wikipedia.org/wiki/Cryptosystem">cryptosystem</a> and NPST has intercepted a ciphertext that needs to be decoded.

<h6>Links</h6> - <a href="https://intranett.npst.no/challenges#Nytt kryptosystem">Challenge</a>
 - <a href="https://kalender.npst.no/21/">Daily brief</a>
 - <a href="https://kalender.npst.no/melding.json">Message</a>

<h6>Solution</h6>The challenge text hints about an encryption key that doesn't seem to work. They intercepted key is named <code>recovered_key</code> and there's a field called <code>uncertain_bits_count</code> with the value of <code>2</code>.

To decrypt the ciphertext we need to tweak two of the bits in the recovered key. Personally this was my first idea, but because of a bad <a href="https://en.wikipedia.org/wiki/%3F:#Python">shorthand if</a> I spent too much time looking for bit changes in other parts of the intercepted data. The Python package <a href="https://pycryptodome.readthedocs.io/en/latest/src/cipher/aes.html">PyCryptodome</a> offers support for the <a href="https://en.wikipedia.org/wiki/Advanced_Encryption_Standard">AES</a>-256-<a href="https://en.wikipedia.org/wiki/Galois/Counter_Mode">GCM</a> used in this challenge. With a few lines of code we can get the solution:<pre class="prettyprint lang-py">#!/usr/bin/python3
from Crypto.Cipher import AES
from time import time

ciphertext = bytearray.fromhex('69cf99390e143fbab3ea8326c05b2fde58c964555bd673de10ff4cf2bf49586454b0466afd01c36b0e4dc1e3361d8ffec8998d88c13b6ff83798a4607b86f3d14f20f63486d256e65d2164ac90a931d7c36fed071321298ce6eb4206bbc31dbdbd08d72dca0f5ce486e68979f083e0e4f46d1f0eee0fec2aa48de030cb2f2069eb719563443c324b052a913e5007f114de4ed7ae44044c03278e2392b46e7815626424d735196f93adc446c4a4a30373e936fa7164112d0867e63e63a4d809d10e90e805130eb7114422ae17fddd3a272cee6100087fb37eb0268ab187721fc7e8dc8b2b79e91a1d9e276a16bcb79c36a7c91b127ea3b08fe57a33ba7d0767e35508b4ab2127aa0a2948cd2a1aace305a49cf63d03a41ca110e9d04636a85956aa1b9eac89bc4091ab59bd1ea9d9cd1c225422a7a40ef56d4b65d1e56f138df24dcf74557a72ba055160f82bf39470f785b12633584ae9639a4352ef08fe5c7f788b0f83021ccf13d7a99a0c088abf72ccc36a30e2447ce10157113a56461bfafd68be40f6f79dbdf2c901028cfe06a96e5ab9a1121c7e2d8b91e495c9722b2cd97d378844328bfba9870b814df60282fec98f70d1639d35205d399d0a858a5cf7210cd9110faecc55c79ae7fe963d908aaa8a34d68b4c0556aeaa4db1ec74cd321b249602c24dabc961b30ae456199fb1deca09f36cdf8a5d9b0b492e42f7f841cb4627880f9fdd4b2e2d94a553c61c5c9a0a253a4616af93310eb7a55a74316d595c017cd2953e505d893f85f324a50fecd459e6bce60294aef9e34b7d57c98f4e9dc5e09a9a6fe620865308d807d767e4c9fec6041b58d003b152d18473e8ce5a9bfe5203b748945a8f4c4683177b09c6b97603d37451a6220c7cf94fa4cb2f8c26331e08f8b8035acebdeaba4cec24bbdacad448b332ba67d355a91363d13a4030a7f4e5b3e0d12a5cca08d6431e356a1bf5050c9bb6373a375a58909cb59d851c0da4905a62389aef2809e354fb2d6b672071ded673f50a3ca475b229999d5a8566e3d7742a271c91f97d8182cb6dcbd3811276cea2386e66b10f047f5cfd0628e3a55ed420412a4fd1b568ef4a62384694dc6b966defe4226afcc545ff10cd61c181d5df9ce6011995df72a219f45ac44eccc63450989df746edbc7165ae008caa158c9298e6c8f8907be02c89313ec55be8eef3521a251518e394071b9deb5af8d2273cf7fe2ed9ddc96609a8057ca50e5a5c1b0a9b9e4dfa04e58be60feee17632dd713257916416471560c82da72e49962d1bfcda8db174948765bfc51159e98d38cad9a7ba51a7c8658af998534a6b223d25ba4805c4a12bf0807e043abc0b47e4562a800b6f79fca703bbd93b1c617d3a8b9244ebfcaffd7f8e44440a20ce1ed7ab8039d5cf182c7c16e7be51856ac8a516ca25acf79001af3612d7b4d304c2a5b9671620b80db4fedca8df2ec6b57ddbcf4fe9ece3da44bf47e0f3b21b61f0699e6c38a3169b2890f57636757a894caf22879b1515d1aa00ee8131d3cf7b61ab9c747690bd6ef3d93ed002c1f3a8e9b7a6b056f76cad42d67ae3f01c1d8d4d8576b950efe65b6312b700f2000f8c3821a70ba1e4800b5bdb4223f9db27c509495eb638025c4dc898c13ae9f86c944e5428209a111701bc4e2db44a7c890774b0063e20158fd0d9cebf4f05d40c74afd168d0e8968b14a56c95b0a3b657cbe0ad270170e4154d596c112156c2a9a9fc30898be1f362ca2ce1fe4e4399ab8ea3735b8f091ada9d613411b54760b7c39c956f225bb9724bd4fd8174a4703151d1b5acf2c979f446d8a33036ec652add04478a44f34bab617f15ed40451cf7603ead7f8f58f8e2fc02ca7c75c7d37cbcd9f09811abd881ef16a15e6bb4e1fe37ff96fe03421286fe37f19120fc66a105fb2b1ee0cbd19feb4e9f20b02fc5d06f6b0d8bbf393da408e2f7e7cae536852b5f81690596e78b66ca1ec10af873a8acd62cb716bdb40107019e7f3acb4d11d3e50590c2ca485c0b4a47f0c28847ee0afaa617284e5ef1fcf9fc5ec00c6cc2404016a565e4154538f93d0adee6cdb72665efb4a319a98dd58dd81e52263516a006c037a27ad249ce0efd69e4f6a685a1b6404e95938325bb1b2db35984bc37c4e9751825aaa592089511344328c84e18a470b718e3a3fa7cd6f06cf2c2352d5e6895c734bf1c8d22eb9c2037378f0609211298f71fa633ed923f31c934b05ece2375bbf700f4fd30525a20a510b7f0102f24ff2b7eb76ac77d98bc')
key = bytearray.fromhex('800816b1629bcfa519f57a502a6a841298a9f5c20203d8818fdd18271a3b1682')
key_int = int(key.hex(), 16)
nonce = bytearray.fromhex('d97c2e3410f37ac7b5dcd8df')
tag = bytearray.fromhex('76fe172806c0b41816887630ca74f2f8')

count = 0
time_start = time()
for i in range(len(key) * 8):
    for j in range(len(key) * 8):
        try:
            new_key_int = key_int
            new_key_int = new_key_int ^ (1 << i)
            count += 1
            if i != j:  # Only switching second bit if not the same position as the first
                count += 1
                new_key_int = new_key_int ^ (1 << j)
            new_key = bytearray.fromhex(hex(new_key_int)[2:])

            cipher = AES.new(new_key, AES.MODE_GCM, nonce=nonce)
            plaintext = cipher.decrypt_and_verify(ciphertext, tag)  # Throws ValueError ''MAC check failed' on wrong key
            print('Plaintext:\\n', plaintext.decode('utf-8'))  # [...] PST{7e7343c9cbe6114f8fd312490816387d}
            print('Key:', new_key.hex())  # 800816b1629bcfa519f57a502a6a841298a9e5c20243d8818fdd18271a3b1682
            print('Bits flipped: %d & %d' % (i, j))  # 86 & 108
            time_spent = round(time() - time_start)
            # Prints something like 'Found key, decrypted ciphertext and verified plaintext in 12 seconds after flipping 44163 bits.':
            print('Found key, decrypted ciphertext and verified plaintext in %d seconds after flipping %d bits.' % (time_spent, count))
            exit(0)
        except ValueError as e:
            # Printing out something from time to time so we feel that something's happening:
            if count % 500 == 0:
                print(e, count, i, j)
</pre>
The plaintext was as follows:
<code style="font-size:60%;"> ﻿SPST
21.12.19

Kantinesituasjonen
Kantinen har nå landet avtale med ny råvareleverandør, og første leveranse blir idag. 
Det blir altså vintersolverv-torsk som planlagt.

Lekkasje fra SPSTs interne nettverk
I forbindelse med angrepet mot stordatamaskinen som startet 12.12.19, ble det eksfiltrert en mindre mengde dokumenter gradert TEMMELIG HEMMELIG. Som en konsekvens av dette har vi fra idag tatt i bruk en ny krypteringsalgoritme for data i bevegelse. Vi har opplevd litt problemer med de dedikerte linjene for overføring av nøkkelmateriell, men leverandøren vår jobber på spreng for å fikse dette.


Ytterligere operasjoner mot NPST
- Lørdag 14.12.19 fikk en av våre dyktige kildeføringspingviner informasjon om NPSTs planlagte julebord. Vi har ikke lykkes i å bekrefte informasjonen, men kilden forteller at det skal konkurreres i hammerdistanse
- Tirsdag 17.12.19 ble det gjennomført en vellykket sabotasjeaksjon mot NPSTs matlager. Her ble passordet skiftet til rudolf2, og hashing-algoritme byttet ut med MD5. Det vurderes som MULIG at dette vil påvirke julen.
- Onsdag 18.12.19 ble det som en HOAX/avledningsoperasjon plassert en helt vanlig ponni i reinsdyrstallen til Jule NISSEN. Dette vil trolig kunne påvirke julen ytterligere.


Ukens ansatt
Denne ukens ansatt ønsker ikke å opptre med navn, men vi kan avsløre at pingvinen jobber ved SPSTs PINGINT-seksjon, og har gjort en utmerket jobb med kildene sine den siste tiden.


Takk til alle for utmerket arbeid uka som har vært.
Sjef SPST, Keiserpingvinen

FLAGG: PST{7e7343c9cbe6114f8fd312490816387d}
</code>
As seen above, the flag is <code>PST{7e7343c9cbe6114f8fd312490816387d}</code>.
</span></div></li><li><div class="collapsible-header">December 22nd - Fake news - 10 points</div><div class="collapsible-body"><span><h6>Challenge</h6>SPST has got an ongoing news campaign called "Cancel Chrimstas". The challenge is to check out the campaign page and look for a flag.

<h6>Links</h6> - <a href="https://intranett.npst.no/challenges#22. desember">Challenge</a>
 - <a href="https://kalender.npst.no/22/">Daily brief</a>
 - <a href="https://spst.no">Campaign site</a>

<h6>Solution</h6>Just as in real life you can find a lot of interesting stuff in <code><a href="https://blog.roysolberg.com/2018/06/robots-txt-linkifier">robots.txt</a></code>. It's always worth checking out. And in <a href="https://spst.no/robots.txt">https://spst.no/robots.txt</a> it's said that <a href="https://spst.no/temmelig-hemmelig/">https://spst.no/temmelig-hemmelig/</a> shouldn't be visited by crawlers. That is where we get the flag for this challenge: <code>PST{fc35fdc70d5fc69d269883a822c7a53e}</code> (MD5 hash of <code>html</code>).
</span></div></li><li><div class="collapsible-header">December 22nd - Source code - 15 points</div><div class="collapsible-body"><span><h6>Challenge</h6>The challenge is to find the source code of the application to gain access to it.

<h6>Links</h6> - <a href="https://intranett.npst.no/challenges#22. desember">Challenge</a>
 - <a href="https://kalender.npst.no/22/">Daily brief</a>
 - <a href="https://spst.no/temmelig-hemmelig/">Secret part of campaign site</a>

<h6>Solution</h6>The secret part of the campaign site that we found in the previous challenge has some kind of access key field that allows for input in the regex pattern <code>[ -\.]+</code> It is seemingly used to retrieve some kind of message. Lucky for us the source code also hides a link to the Github repository for the site: <a href="https://github.com/SydpolarSikkerhetstjeneste/spst.no">https://github.com/SydpolarSikkerhetstjeneste/spst.no</a>

Again we are pretty aligned with the real world as the developers at some point in time has made it easier to get access to this secret stuff and there's a password to be found in the commit history. The shortcut has been since been removed and it's stated that the regex we saw is morse code. The commit at <a href="https://github.com/SydpolarSikkerhetstjeneste/spst.no/commit/0fd327317a7fd9321ee4fab0a439bb040d67c581">commit 0fd327317a7fd9321ee4fab0a439bb040d67c581</a> reveals that the password could be <code>pingvinerbestingenprotest</code> in morse code.

The password can be <a href="http://icyberchef.com/#recipe=To_Morse_Code('-/.','Space','Line feed')&input=cGluZ3ZpbmVyYmVzdGluZ2VucHJvdGVzdA">converted via CyberChef</a> and entered. Sucess. We're given back a message to Pen Gwyn that includes an image. In the <a href="https://en.wikipedia.org/wiki/Alt_attribute">alt attribute</a> there's a flag: <code>PST{f2e0e89f59722af1f388529720b9db03}</code>.
</span></div></li><li><div class="collapsible-header">December 22nd - &amp;nbsp; - 20 points</div><div class="collapsible-body"><span><h6>Challenge</h6>We're only told that SPST may have hidden information for hackers like us.

<h6>Solution</h6>I did not like this one. It starts out pretty simple with a QR code hidden as text in the image. I found it using the tool at <a href="https://stylesuxx.github.io/steganography/">https://stylesuxx.github.io/steganography/</a>. The QR code is given as this: 
<code style="font-size:10%;display:inline-block;line-height: 1;">SSSSSSSSSSSSSSSSSSSSSSSSSSSS        SSSS                SSSS    SSSS    SSSSSSSSSSSS    SSSSSSSSSSSSSSSSSSSSSSSSSSSS                
SSSSSSSSSSSSSSSSSSSSSSSSSSSS        SSSS                SSSS    SSSS    SSSSSSSSSSSS    SSSSSSSSSSSSSSSSSSSSSSSSSSSS                
SSSSSSSSSSSSSSSSSSSSSSSSSSSS        SSSS                SSSS    SSSS    SSSSSSSSSSSS    SSSSSSSSSSSSSSSSSSSSSSSSSSSS                
SSSSSSSSSSSSSSSSSSSSSSSSSSSS        SSSS                SSSS    SSSS    SSSSSSSSSSSS    SSSSSSSSSSSSSSSSSSSSSSSSSSSS                
SSSS                    SSSS    SSSSSSSS    SSSSSSSS    SSSSSSSS                SSSS    SSSS                    SSSS                
SSSS                    SSSS    SSSSSSSS    SSSSSSSS    SSSSSSSS                SSSS    SSSS                    SSSS                
SSSS                    SSSS    SSSSSSSS    SSSSSSSS    SSSSSSSS                SSSS    SSSS                    SSSS                
SSSS                    SSSS    SSSSSSSS    SSSSSSSS    SSSSSSSS                SSSS    SSSS                    SSSS                
SSSS    SSSSSSSSSSSS    SSSS        SSSSSSSSSSSS            SSSS        SSSS    SSSS    SSSS    SSSSSSSSSSSS    SSSS                
SSSS    SSSSSSSSSSSS    SSSS        SSSSSSSSSSSS            SSSS        SSSS    SSSS    SSSS    SSSSSSSSSSSS    SSSS                
SSSS    SSSSSSSSSSSS    SSSS        SSSSSSSSSSSS            SSSS        SSSS    SSSS    SSSS    SSSSSSSSSSSS    SSSS                
SSSS    SSSSSSSSSSSS    SSSS        SSSSSSSSSSSS            SSSS        SSSS    SSSS    SSSS    SSSSSSSSSSSS    SSSS                
SSSS    SSSSSSSSSSSS    SSSS    SSSSSSSS    SSSS                SSSSSSSSSSSS            SSSS    SSSSSSSSSSSS    SSSS                
SSSS    SSSSSSSSSSSS    SSSS    SSSSSSSS    SSSS                SSSSSSSSSSSS            SSSS    SSSSSSSSSSSS    SSSS                
SSSS    SSSSSSSSSSSS    SSSS    SSSSSSSS    SSSS                SSSSSSSSSSSS            SSSS    SSSSSSSSSSSS    SSSS                
SSSS    SSSSSSSSSSSS    SSSS    SSSSSSSS    SSSS                SSSSSSSSSSSS            SSSS    SSSSSSSSSSSS    SSSS                
SSSS    SSSSSSSSSSSS    SSSS            SSSS    SSSSSSSS        SSSS        SSSSSSSS    SSSS    SSSSSSSSSSSS    SSSS                
SSSS    SSSSSSSSSSSS    SSSS            SSSS    SSSSSSSS        SSSS        SSSSSSSS    SSSS    SSSSSSSSSSSS    SSSS                
SSSS    SSSSSSSSSSSS    SSSS            SSSS    SSSSSSSS        SSSS        SSSSSSSS    SSSS    SSSSSSSSSSSS    SSSS                
SSSS    SSSSSSSSSSSS    SSSS            SSSS    SSSSSSSS        SSSS        SSSSSSSS    SSSS    SSSSSSSSSSSS    SSSS                
SSSS                    SSSS    SSSS    SSSS        SSSSSSSSSSSS    SSSSSSSS            SSSS                    SSSS                
SSSS                    SSSS    SSSS    SSSS        SSSSSSSSSSSS    SSSSSSSS            SSSS                    SSSS                
SSSS                    SSSS    SSSS    SSSS        SSSSSSSSSSSS    SSSSSSSS            SSSS                    SSSS                
SSSS                    SSSS    SSSS    SSSS        SSSSSSSSSSSS    SSSSSSSS            SSSS                    SSSS                
SSSSSSSSSSSSSSSSSSSSSSSSSSSS    SSSS    SSSS    SSSS    SSSS    SSSS    SSSS    SSSS    SSSSSSSSSSSSSSSSSSSSSSSSSSSS                
SSSSSSSSSSSSSSSSSSSSSSSSSSSS    SSSS    SSSS    SSSS    SSSS    SSSS    SSSS    SSSS    SSSSSSSSSSSSSSSSSSSSSSSSSSSS                
SSSSSSSSSSSSSSSSSSSSSSSSSSSS    SSSS    SSSS    SSSS    SSSS    SSSS    SSSS    SSSS    SSSSSSSSSSSSSSSSSSSSSSSSSSSS                
SSSSSSSSSSSSSSSSSSSSSSSSSSSS    SSSS    SSSS    SSSS    SSSS    SSSS    SSSS    SSSS    SSSSSSSSSSSSSSSSSSSSSSSSSSSS                
                                                SSSSSSSS    SSSSSSSS                                                                
                                                SSSSSSSS    SSSSSSSS                                                                
                                                SSSSSSSS    SSSSSSSS                                                                
                                                SSSSSSSS    SSSSSSSS                                                                
SSSSSSSSSSSSSSSSSSSS    SSSSSSSSSSSSSSSSSSSS    SSSS    SSSSSSSSSSSSSSSSSSSS    SSSSSSSS    SSSS    SSSS    SSSS                    
SSSSSSSSSSSSSSSSSSSS    SSSSSSSSSSSSSSSSSSSS    SSSS    SSSSSSSSSSSSSSSSSSSS    SSSSSSSS    SSSS    SSSS    SSSS                    
SSSSSSSSSSSSSSSSSSSS    SSSSSSSSSSSSSSSSSSSS    SSSS    SSSSSSSSSSSSSSSSSSSS    SSSSSSSS    SSSS    SSSS    SSSS                    
SSSSSSSSSSSSSSSSSSSS    SSSSSSSSSSSSSSSSSSSS    SSSS    SSSSSSSSSSSSSSSSSSSS    SSSSSSSS    SSSS    SSSS    SSSS                    
    SSSSSSSSSSSS    SSSS            SSSS                        SSSS        SSSS        SSSS    SSSS            SSSS                
    SSSSSSSSSSSS    SSSS            SSSS                        SSSS        SSSS        SSSS    SSSS            SSSS                
    SSSSSSSSSSSS    SSSS            SSSS                        SSSS        SSSS        SSSS    SSSS            SSSS                
    SSSSSSSSSSSS    SSSS            SSSS                        SSSS        SSSS        SSSS    SSSS            SSSS                
    SSSSSSSS    SSSSSSSSSSSS    SSSSSSSS    SSSSSSSS        SSSS    SSSSSSSS        SSSSSSSSSSSS        SSSSSSSS                    
    SSSSSSSS    SSSSSSSSSSSS    SSSSSSSS    SSSSSSSS        SSSS    SSSSSSSS        SSSSSSSSSSSS        SSSSSSSS                    
    SSSSSSSS    SSSSSSSSSSSS    SSSSSSSS    SSSSSSSS        SSSS    SSSSSSSS        SSSSSSSSSSSS        SSSSSSSS                    
    SSSSSSSS    SSSSSSSSSSSS    SSSSSSSS    SSSSSSSS        SSSS    SSSSSSSS        SSSSSSSSSSSS        SSSSSSSS                    
    SSSS    SSSS    SSSS            SSSSSSSSSSSS        SSSS    SSSS        SSSSSSSS        SSSSSSSSSSSS                            
    SSSS    SSSS    SSSS            SSSSSSSSSSSS        SSSS    SSSS        SSSSSSSS        SSSSSSSSSSSS                            
    SSSS    SSSS    SSSS            SSSSSSSSSSSS        SSSS    SSSS        SSSSSSSS        SSSSSSSSSSSS                            
    SSSS    SSSS    SSSS            SSSSSSSSSSSS        SSSS    SSSS        SSSSSSSS        SSSSSSSSSSSS                            
                    SSSSSSSSSSSS    SSSS    SSSS                    SSSS            SSSS    SSSS        SSSSSSSS                    
                    SSSSSSSSSSSS    SSSS    SSSS                    SSSS            SSSS    SSSS        SSSSSSSS                    
                    SSSSSSSSSSSS    SSSS    SSSS                    SSSS            SSSS    SSSS        SSSSSSSS                    
                    SSSSSSSSSSSS    SSSS    SSSS                    SSSS            SSSS    SSSS        SSSSSSSS                    
SSSSSSSSSSSSSSSSSSSSSSSS    SSSS        SSSS    SSSSSSSSSSSS            SSSSSSSSSSSS    SSSS    SSSS        SSSSSSSS                
SSSSSSSSSSSSSSSSSSSSSSSS    SSSS        SSSS    SSSSSSSSSSSS            SSSSSSSSSSSS    SSSS    SSSS        SSSSSSSS                
SSSSSSSSSSSSSSSSSSSSSSSS    SSSS        SSSS    SSSSSSSSSSSS            SSSSSSSSSSSS    SSSS    SSSS        SSSSSSSS                
SSSSSSSSSSSSSSSSSSSSSSSS    SSSS        SSSS    SSSSSSSSSSSS            SSSSSSSSSSSS    SSSS    SSSS        SSSSSSSS                
    SSSS    SSSS        SSSS        SSSSSSSS        SSSSSSSSSSSSSSSS                        SSSSSSSSSSSS                            
    SSSS    SSSS        SSSS        SSSSSSSS        SSSSSSSSSSSSSSSS                        SSSSSSSSSSSS                            
    SSSS    SSSS        SSSS        SSSSSSSS        SSSSSSSSSSSSSSSS                        SSSSSSSSSSSS                            
    SSSS    SSSS        SSSS        SSSSSSSS        SSSSSSSSSSSSSSSS                        SSSSSSSSSSSS                            
SSSSSSSSSSSS    SSSS            SSSSSSSS        SSSSSSSS    SSSSSSSS        SSSS        SSSS    SSSS        SSSS                    
SSSSSSSSSSSS    SSSS            SSSSSSSS        SSSSSSSS    SSSSSSSS        SSSS        SSSS    SSSS        SSSS                    
SSSSSSSSSSSS    SSSS            SSSSSSSS        SSSSSSSS    SSSSSSSS        SSSS        SSSS    SSSS        SSSS                    
SSSSSSSSSSSS    SSSS            SSSSSSSS        SSSSSSSS    SSSSSSSS        SSSS        SSSS    SSSS        SSSS                    
SSSSSSSSSSSS    SSSSSSSSSSSS    SSSS    SSSS    SSSS    SSSSSSSS    SSSSSSSS        SSSS    SSSS    SSSSSSSSSSSSSSSS                
SSSSSSSSSSSS    SSSSSSSSSSSS    SSSS    SSSS    SSSS    SSSSSSSS    SSSSSSSS        SSSS    SSSS    SSSSSSSSSSSSSSSS                
SSSSSSSSSSSS    SSSSSSSSSSSS    SSSS    SSSS    SSSS    SSSSSSSS    SSSSSSSS        SSSS    SSSS    SSSSSSSSSSSSSSSS                
SSSSSSSSSSSS    SSSSSSSSSSSS    SSSS    SSSS    SSSS    SSSSSSSS    SSSSSSSS        SSSS    SSSS    SSSSSSSSSSSSSSSS                
SSSSSSSS    SSSSSSSSSSSS    SSSS        SSSS                    SSSS        SSSSSSSS    SSSS    SSSS    SSSS    SSSS                
SSSSSSSS    SSSSSSSSSSSS    SSSS        SSSS                    SSSS        SSSSSSSS    SSSS    SSSS    SSSS    SSSS                
SSSSSSSS    SSSSSSSSSSSS    SSSS        SSSS                    SSSS        SSSSSSSS    SSSS    SSSS    SSSS    SSSS                
SSSSSSSS    SSSSSSSSSSSS    SSSS        SSSS                    SSSS        SSSSSSSS    SSSS    SSSS    SSSS    SSSS                
SSSS        SSSS        SSSS                SSSSSSSS        SSSS    SSSSSSSS                    SSSS        SSSS                    
SSSS        SSSS        SSSS                SSSSSSSS        SSSS    SSSSSSSS                    SSSS        SSSS                    
SSSS        SSSS        SSSS                SSSSSSSS        SSSS    SSSSSSSS                    SSSS        SSSS                    
SSSS        SSSS        SSSS                SSSSSSSS        SSSS    SSSSSSSS                    SSSS        SSSS                    
SSSS    SSSSSSSS    SSSS        SSSS        SSSS        SSSSSSSSSSSS    SSSS    SSSS    SSSS    SSSSSSSS        SSSS                
SSSS    SSSSSSSS    SSSS        SSSS        SSSS        SSSSSSSSSSSS    SSSS    SSSS    SSSS    SSSSSSSS        SSSS                
SSSS    SSSSSSSS    SSSS        SSSS        SSSS        SSSSSSSSSSSS    SSSS    SSSS    SSSS    SSSSSSSS        SSSS                
SSSS    SSSSSSSS    SSSS        SSSS        SSSS        SSSSSSSSSSSS    SSSS    SSSS    SSSS    SSSSSSSS        SSSS                
SSSS    SSSS        SSSSSSSSSSSS    SSSS    SSSS            SSSSSSSSSSSSSSSS    SSSSSSSSSSSSSSSSSSSS    SSSS    SSSS                
SSSS    SSSS        SSSSSSSSSSSS    SSSS    SSSS            SSSSSSSSSSSSSSSS    SSSSSSSSSSSSSSSSSSSS    SSSS    SSSS                
SSSS    SSSS        SSSSSSSSSSSS    SSSS    SSSS            SSSSSSSSSSSSSSSS    SSSSSSSSSSSSSSSSSSSS    SSSS    SSSS                
SSSS    SSSS        SSSSSSSSSSSS    SSSS    SSSS            SSSSSSSSSSSSSSSS    SSSSSSSSSSSSSSSSSSSS    SSSS    SSSS                
                                SSSS    SSSS    SSSSSSSSSSSS                    SSSS            SSSSSSSS    SSSSSSSS                
                                SSSS    SSSS    SSSSSSSSSSSS                    SSSS            SSSSSSSS    SSSSSSSS                
                                SSSS    SSSS    SSSSSSSSSSSS                    SSSS            SSSSSSSS    SSSSSSSS                
                                SSSS    SSSS    SSSSSSSSSSSS                    SSSS            SSSSSSSS    SSSSSSSS                
SSSSSSSSSSSSSSSSSSSSSSSSSSSS    SSSSSSSS            SSSSSSSSSSSSSSSS        SSSSSSSS    SSSS    SSSSSSSS    SSSS                    
SSSSSSSSSSSSSSSSSSSSSSSSSSSS    SSSSSSSS            SSSSSSSSSSSSSSSS        SSSSSSSS    SSSS    SSSSSSSS    SSSS                    
SSSSSSSSSSSSSSSSSSSSSSSSSSSS    SSSSSSSS            SSSSSSSSSSSSSSSS        SSSSSSSS    SSSS    SSSSSSSS    SSSS                    
SSSSSSSSSSSSSSSSSSSSSSSSSSSS    SSSSSSSS            SSSSSSSSSSSSSSSS        SSSSSSSS    SSSS    SSSSSSSS    SSSS                    
SSSS                    SSSS                    SSSSSSSS    SSSS            SSSSSSSS            SSSS                                
SSSS                    SSSS                    SSSSSSSS    SSSS            SSSSSSSS            SSSS                                
SSSS                    SSSS                    SSSSSSSS    SSSS            SSSSSSSS            SSSS                                
SSSS                    SSSS                    SSSSSSSS    SSSS            SSSSSSSS            SSSS                                
SSSS    SSSSSSSSSSSS    SSSS    SSSS            SSSS    SSSS    SSSSSSSSSSSS    SSSSSSSSSSSSSSSSSSSSSSSSSSSS                        
SSSS    SSSSSSSSSSSS    SSSS    SSSS            SSSS    SSSS    SSSSSSSSSSSS    SSSSSSSSSSSSSSSSSSSSSSSSSSSS                        
SSSS    SSSSSSSSSSSS    SSSS    SSSS            SSSS    SSSS    SSSSSSSSSSSS    SSSSSSSSSSSSSSSSSSSSSSSSSSSS                        
SSSS    SSSSSSSSSSSS    SSSS    SSSS            SSSS    SSSS    SSSSSSSSSSSS    SSSSSSSSSSSSSSSSSSSSSSSSSSSS                        
SSSS    SSSSSSSSSSSS    SSSS    SSSSSSSSSSSS                                SSSS            SSSS            SSSSSSSS                
SSSS    SSSSSSSSSSSS    SSSS    SSSSSSSSSSSS                                SSSS            SSSS            SSSSSSSS                
SSSS    SSSSSSSSSSSS    SSSS    SSSSSSSSSSSS                                SSSS            SSSS            SSSSSSSS                
SSSS    SSSSSSSSSSSS    SSSS    SSSSSSSSSSSS                                SSSS            SSSS            SSSSSSSS                
SSSS    SSSSSSSSSSSS    SSSS    SSSSSSSS    SSSSSSSS        SSSSSSSS            SSSSSSSSSSSS    SSSSSSSS    SSSS                    
SSSS    SSSSSSSSSSSS    SSSS    SSSSSSSS    SSSSSSSS        SSSSSSSS            SSSSSSSSSSSS    SSSSSSSS    SSSS                    
SSSS    SSSSSSSSSSSS    SSSS    SSSSSSSS    SSSSSSSS        SSSSSSSS            SSSSSSSSSSSS    SSSSSSSS    SSSS                    
SSSS    SSSSSSSSSSSS    SSSS    SSSSSSSS    SSSSSSSS        SSSSSSSS            SSSSSSSSSSSS    SSSSSSSS    SSSS                    
SSSS                    SSSS    SSSS        SSSS        SSSSSSSSSSSS    SSSSSSSSSSSS                        SSSS                    
SSSS                    SSSS    SSSS        SSSS        SSSSSSSSSSSS    SSSSSSSSSSSS                        SSSS                    
SSSS                    SSSS    SSSS        SSSS        SSSSSSSSSSSS    SSSSSSSSSSSS                        SSSS                    
SSSS                    SSSS    SSSS        SSSS        SSSSSSSSSSSS    SSSSSSSSSSSS                        SSSS                    
SSSSSSSSSSSSSSSSSSSSSSSSSSSS    SSSSSSSS    SSSS            SSSS    SSSS            SSSS        SSSSSSSSSSSS                        
SSSSSSSSSSSSSSSSSSSSSSSSSSSS    SSSSSSSS    SSSS            SSSS    SSSS            SSSS        SSSSSSSSSSSS                        
SSSSSSSSSSSSSSSSSSSSSSSSSSSS    SSSSSSSS    SSSS            SSSS    SSSS            SSSS        SSSSSSSSSSSS                        
SSSSSSSSSSSSSSSSSSSSSSSSSSSS    SSSSSSSS    SSSS            SSSS    SSSS            SSSS        SSSSSSSSSSSS                        
</code>

It wasn't possible to have any of the QR code scanners I tried to read the QR code as it was. Maybe there are better ways to do it, but I changed the S characters with a square one (like e.g. ▢), scaled a screenshot of it a bit and inverted the colours. The text encoded is <code>/8a2a8e12017977d9dbf0ed33e254e94e.txt</code>.

At first sight <a href="https://spst.no/8a2a8e12017977d9dbf0ed33e254e94e.txt">https://spst.no/8a2a8e12017977d9dbf0ed33e254e94e.txt</a> returns the same data as any other 404 pages at spst.no. But that isn't the case. It return status code 200 and many of the spaces are different <a href="https://en.wikipedia.org/wiki/Control_character">control character</a> variants of space.

I needed a hint figuring out what this was. Turns out you are supposed to throw away printable characters, split the remaining 888 bytes into triplets and use <a href="https://en.wikipedia.org/wiki/Quaternary_numeral_system">base-4-numeral system</a> and traslate to ASCII.

Note that my code doesn't figure out any of this, but has this info as a base. The code converts the bytes to base-4 and tries out the different combinations of converting the different byte combinations to the numbers 0-3.<pre class="prettyprint lang-py">#!/usr/bin/python3
import string
import itertools

with open('8a2a8e12017977d9dbf0ed33e254e94e.txt') as file:
    contents = file.read()
print(contents)
b = bytes(contents, 'utf-8')
print('Length with printable chars:', len(b), 'bytes')  # 1337 bytes

# First we remove all printable chars
for l in string.printable:
    contents = contents.replace(l, '')

b = bytes(contents, 'utf-8')
print('Length without printable chars:', len(b), 'bytes')  # 888 bytes

b_set = set()

for i in range(0, len(b), 3):  # Runs through 3 and 3 bytes
    b2 = b[i:i+3]
    if not b2 in b_set:
        b_set.add(b2)

print('Found', len(b_set), 'different 3-bytes variants:', b_set)


def count_chars(s, chars):
    return sum(s.count(c) for c in chars)


alphabet = string.ascii_letters + 'æøåÆØÅ .,{}' + string.whitespace + string.digits  # Assuming these should be most of the chars in the text
digits = string.digits[:len(b_set)]
best_score_text = None
best_score = 0

for permutation in itertools.permutations(digits):
    output = ''
    b_dict = {}
    char_counter = 0
    for i in range(0, len(b), 3):
        b2 = b[i:i+3]
        if not b2 in b_dict:
            b_dict[b2] = permutation[char_counter]
            char_counter += 1
        output += b_dict[b2]
    plaintext = ''
    for i in range(0, len(output), 8):
        plaintext += chr(int(output[i:i+8], 4))
    score = count_chars(plaintext, alphabet)
    if score >= best_score:
        best_score = score
        best_score_text = plaintext
        # Prints stuff like 'Found new best alphabet [('0', '1', '3', '2')] giving the plaintext [PST{67b8601a11e47a9ee3bf08ddfd0b79ba}] (score: 37).'
        print('Found new best alphabet [%s] giving the plaintext [%s] (score: %d).' % (permutation, best_score_text, best_score))
</pre>
The flag printed is <code>PST{67b8601a11e47a9ee3bf08ddfd0b79ba}</code> (MD5 hash of <code>whitespace</code>).
</span></div></li><li><div class="collapsible-header">December 23rd - Mysterious Christmas card - 5 points</div><div class="collapsible-body"><span><h6>Challenge</h6>Santa got a very special Christmas card in his electronic mailbox. The card has no flip side and therefore no text on it. The challenge is to decode it to find out who sent it or similar.

<h6>Links</h6> - <a href="https://intranett.npst.no/challenges#Mystisk julekort">Challenge</a>
 - <a href="https://kalender.npst.no/23/">Daily brief</a>
 - <a href="https://kalender.npst.no/30.png">Christmas card</a>

<h6>Hint #1</h6><i>The snail knows which pixels contain data.</i>

<h6>Hint #2</h6><i>When the challenge was made two decisions were made; the contents of the file and the filename. The filename is mostly relevant deep inside a rabbit hole, or should we say snail hole?</i>

<h6>Hint #3</h6><i>Everything happens in bitplan 0. The snail makes plan drawings for three separate snail shells, R, G, B, with the base in the neighbourhood in first line plus the rule of the snail.

You have to traverse the snail's plan drawings. Start on row 1 pixel 0 and go through plain drawings R, G, B, then row 1 pixel 1, R-G-B. Every time you find a 1-bit in the snail's plan drawings you pick a bit from the same place in the picture so that there are room for the snail shells.</i>

<h6>Solution</h6>During December it became clear that if no one had submitted a flag within 1 hour it was a tricky challenge. No one solved this one until all three hints were published.

I never got around to solving this. Even though the hints are getting more and more clear I think I would have needed one or two more to solve this without spending a lot of time.

I'd recommend checking out the solution at <a href="https://github.com/nordbo/writeups/blob/master/npst/23/solve.py">https://github.com/nordbo/writeups/blob/master/npst/23/solve.py</a>. The few lines of Python almost makes it look easy to solve it. 🙂 The filename <code>30.png</code> hints to <a href="https://en.wikipedia.org/wiki/Rule_30">Rule 30</a>.
</span></div></li><li><div class="collapsible-header">December 23rd - Fragmented conversation - 5 points</div><div class="collapsible-body"><span><h6>Challenge</h6>The work done in the challenge day 21 made is possible to intercept a conversation between two senior SPST agents. Seemingly there's a code being transmitted - a code that may be used to find some kind of article. The name of the article is of interest. The challenge is to decode the data, get the code and get the title of the article in question.

<h6>Links</h6> - <a href="https://intranett.npst.no/challenges#Fragmentert samtale">Challenge</a>
 - <a href="https://kalender.npst.no/23/">Daily brief</a>
 - <a href="https://kalender.npst.no/finn_koden.zip">PCAP file</a>

<h6>Solution</h6>For the first time in this calendar it was possible to do challenge 2 before 1 was solved. After reading challenge 1. I took the opportunity to focus on this while everyone else was doing the first.

When I opened the PCAP file and only saw UDP packages (audio data I suppose) I turned to the daily brief again and re-read the text. Everything was full of hints of a <a href="https://www.finn.no/">finn.no</a> code. PST likes to hint about their job ads, so relativly quickly I realized that we were looking for the title of a job ad at finn.no.

Looking at PST's open jobs at finn.no there was in particular one that was kind of related to this: <a href="http://finn.no/165890971">finn.no/165890971</a>

The title of the job opening was <i>Nettverksspesialist</i>. In the specified flag format that was <code>PST{0844d949169d24679a1f0438f89c69e3}</code>.

This was the only challenge I was the first one to solve. <em>I haven't had the time to look at the PCAP data yet. I will try to do that soon, and if not I'll publish someone else's solution. :)</em>
</span></div></li><li><div class="collapsible-header">December 24th - Operation "Cancel Christmas" - 24 points</div><div class="collapsible-body"><span><h6>Challenge</h6>The challenge is to stop SPST's operation <i>"Cancel Christmas"</i>. Sources say that it's run at their online operations centre available from all over the world.

<h6>Links</h6> - <a href="https://intranett.npst.no/challenges#24. desember">Challenge</a>
 - <a href="https://kalender.npst.no/24/">Daily brief</a>

<h6>Solution</h6><b>Step 1 - locating the operation centre</b>
The only clue we've got is that we are looking for someting online. Maybe a quick subdomain scanner will do. I downloaded a <a href="https://github.com/rbsec/dnscan/blob/master/subdomains.txt">random list of subdomains</a> and created a simple script for scanning:<pre class="prettyprint lang-py">#!/usr/bin/python3
import requests

file = open("subdomains.txt")
content = file.read()
subdomains = content.splitlines()
domain = 'spst.no'

for subdomain in subdomains:
    url = f"http://{subdomain}.{domain}"
    try:
        requests.get(url)
    except requests.ConnectionError:
        pass
    else:
        print("[+] Discovered subdomain:", url)

"""
[+] Discovered subdomain: http://api.spst.no
[+] Discovered subdomain: http://ops.spst.no
[+] Discovered subdomain: http://www.spst.no
"""
</pre>
Voilà, we've found the operation centre at <a href="http://ops.spst.no">ops.spst.no</a>.

<b>Step 2 - Deciphering Enigma ciphertext</b>
The moment the cancel button for the operation is clicked the server spits out this: <code style="font-size:60%;">SAXVC OIWPT GQOJZ OXEHI ZVCWU NCCOW FIKVP NOENT CETAU IKPCM ZLOYP BJHEC KPEXG RJWDO DJBBI HQDTG FFBQV LJAZC ZOFIC ZAIWJ QEVCL FXAVC PDUWT GBIGM SSWAO OXJHP PLKXH TGQAY COIQL ZSWIL HKMYR YMPZZ PTIEL PSRIP YVRKC DINBR WJZJP HHNXM HGYWN XXIGB UTTOX AEPKZ TUCMC MGFHC WHSAY KFVVS PDBFE KABAB PNBVR IZGTX PERJZ GDHQJ JDUYV FAOYV JWZOU WXXPR HVDLL BQTJI HULQP ACIXG NUPUS PCKHT LOKLN ZCLZO QVWSL HPBWD ATZES JEITM AJIFU SIVVF PHPEN UYHZK AWIZY MNQLH ZVKJJ EEYSZ LLUEM NZAFA OZXYL WBRPX JUKQG KIEXX CDYAT IHVJK HOMGI UVAOQ PBXRN HAAWG XOBAZ UILJB KYSBP IOBKH GYZBD IPQNG VSUTS YXOGY KEIKK TIKKQ RFVWQ NBCEK TIJLC CXRDB TUNXT SBKWR YDBR</code>

Finally there's a chance to use the clues that have been collected throughout the calendar: <code>notater.png</code> (Dec 1st), Pen Gwen's Strava profile picture (Dec 8th), <code>huskelapp.png</code> (Dec 15th) and <code>95728ce2159815f2e2a253c664b2493f.png</code> (Dec 22nd)

Not surprisingly these are all pieces for an <a href="https://en.wikipedia.org/wiki/Cryptanalysis_of_the_Enigma">Enigma cipher</a>. If we just <a href="https://gchq.github.io/CyberChef/#recipe=Enigma('3-rotor','LEYJVCNIXWPBQMDRTAKZGFUHOS','A','A','ESOVPZJAYQUIRHXLNFTGKDCMWB<K','P','S','NZJHGRCXMYSWBOUFAIVLPEKQDT<AN','T','F','NZJHGRCXMYSWBOUFAIVLPEKQDT<AN','T','W','AY BR CU DH EQ FS GL IP JX KN MO TZ VW','CO NG RA TS',true)&input=U0FYVkMgT0lXUFQgR1FPSlogT1hFSEkgWlZDV1UgTkNDT1cgRklLVlAgTk9FTlQgQ0VUQVUgSUtQQ00gWkxPWVAgQkpIRUMgS1BFWEcgUkpXRE8gREpCQkkgSFFEVEcgRkZCUVYgTEpBWkMgWk9GSUMgWkFJV0ogUUVWQ0wgRlhBVkMgUERVV1QgR0JJR00gU1NXQU8gT1hKSFAgUExLWEggVEdRQVkgQ09JUUwgWlNXSUwgSEtNWVIgWU1QWlogUFRJRUwgUFNSSVAgWVZSS0MgRElOQlIgV0paSlAgSEhOWE0gSEdZV04gWFhJR0IgVVRUT1ggQUVQS1ogVFVDTUMgTUdGSEMgV0hTQVkgS0ZWVlMgUERCRkUgS0FCQUIgUE5CVlIgSVpHVFggUEVSSlogR0RIUUogSkRVWVYgRkFPWVYgSldaT1UgV1hYUFIgSFZETEwgQlFUSkkgSFVMUVAgQUNJWEcgTlVQVVMgUENLSFQgTE9LTE4gWkNMWk8gUVZXU0wgSFBCV0QgQVRaRVMgSkVJVE0gQUpJRlUgU0lWVkYgUEhQRU4gVVlIWksgQVdJWlkgTU5RTEggWlZLSkogRUVZU1ogTExVRU0gTlpBRkEgT1pYWUwgV0JSUFggSlVLUUcgS0lFWFggQ0RZQVQgSUhWSksgSE9NR0kgVVZBT1EgUEJYUk4gSEFBV0cgWE9CQVogVUlMSkIgS1lTQlAgSU9CS0ggR1laQkQgSVBRTkcgVlNVVFMgWVhPR1kgS0VJS0sgVElLS1EgUkZWV1EgTkJDRUsgVElKTEMgQ1hSREIgVFVOWFQgU0JLV1IgWURCUg">input everything into CyberChef</a> we get the following plaintext: <code style="font-size:60%;">FIVEZ EROSI XNINE SIXSE VENSI XSEVE NTWOZ EROSI XONES EVENS IXTWO ONEZE ROAFO URNIN ESIXE SIXSE VENSI XFIVE SIXET WOZER OSIXT WOSIX FSIXB SEVEN THREE SEVEN FOURS IXONE SEVEN SIXSI XBSIX ASIXF IVESI XBSEV ENTHR EETWO EZERO AFOUR CSIXF IVESE VENFO URTWO ZEROS IXNIN ETWOZ EROSI XEIGH TSIXF IVESE VENEI GHTTW OZERO SEVEN ZEROC THREE AFIVE TWOZE ROSIX SIXCT HREEB EIGHT SIXCS IXSEV ENSIX FIVES IXESI XFOUR SIXFI VETWO ZEROS EVENT WOSIX FIVES IXSEV ENSIX FIVES EVENE IGHTT HREEA TWOZE ROFIV EBFIV ECSIX FOURS IXONE TWODS IXSIX FIVED SEVEN BTHRE ETWOS EVEND FIVEC TWOES EVENT HREES EVENZ EROSE VENTH REESE VENFO URFIV ECTWO ESIXE SIXF</code>

<b>Step 3 - Decoding Enigma plaintext</b>
The output from Enigma deciphering is partly readable with English numbers. If we replace them we'll get a long hexadecimal string. Let's check out what that is in UTF-8:<pre class="prettyprint lang-py">#!/usr/bin/python3
plaintext = 'FIVEZ EROSI XNINE SIXSE VENSI XSEVE NTWOZ EROSI XONES EVENS IXTWO ONEZE ROAFO URNIN ESIXE SIXSE VENSI XFIVE SIXET WOZER OSIXT WOSIX FSIXB SEVEN THREE SEVEN FOURS IXONE SEVEN SIXSI XBSIX ASIXF IVESI XBSEV ENTHR EETWO EZERO AFOUR CSIXF IVESE VENFO URTWO ZEROS IXNIN ETWOZ EROSI XEIGH TSIXF IVESE VENEI GHTTW OZERO SEVEN ZEROC THREE AFIVE TWOZE ROSIX SIXCT HREEB EIGHT SIXCS IXSEV ENSIX FIVES IXESI XFOUR SIXFI VETWO ZEROS EVENT WOSIX FIVES IXSEV ENSIX FIVES EVENE IGHTT HREEA TWOZE ROFIV EBFIV ECSIX FOURS IXONE TWODS IXSIX FIVED SEVEN BTHRE ETWOS EVEND FIVEC TWOES EVENT HREES EVENZ EROSE VENTH REESE VENFO URFIV ECTWO ESIXE SIXF'
plaintext = plaintext.replace(' ', '')
plaintext = plaintext.replace('ZERO', '0')
plaintext = plaintext.replace('ONE', '1')
plaintext = plaintext.replace('TWO', '2')
plaintext = plaintext.replace('THREE', '3')
plaintext = plaintext.replace('FOUR', '4')
plaintext = plaintext.replace('FIVE', '5')
plaintext = plaintext.replace('SIX', '6')
plaintext = plaintext.replace('SEVEN', '7')
plaintext = plaintext.replace('EIGHT', '8')
plaintext = plaintext.replace('NINE', '9')
print(plaintext)

plaintext = bytes.fromhex(plaintext).decode('utf-8')
print('Plaintext:\\n%s' % plaintext)

"""
Plaintext:
Pigg av!
Ingen bokstavkjeks.
Let i hex på følgende regex: [\\da-f]{2}\\.spst\\.no
"""
</pre>

No luck cancelling the operation. We're missing a "letter cookie" and they want us to look   in <code>[\da-f]{2}\.spst\.no</code>.

<b>Step 4 - DNS records</b>
I spent so much time looking for servers in the range <code>[\\da-f]{2}\\.spst\\.no</code> and all other variants I could think of. That was time wasted. Even though I earlier looked at the DNS records of spst.no I didn't think of looking for DNS records for these non-existing servers. At this step we want to look at the <code><a href="https://en.wikipedia.org/wiki/TXT_record">TXT</a></code> and <code><a href="https://en.wikipedia.org/wiki/CNAME_record">CNAME</a></code> DNS records.

I tried using a Python library for scripting the DNS queries, but I got inconsistent answers every single time for the TXT records. <a href="https://digwebinterface.com/">https://digwebinterface.com</a> proved å much better source for getting out the data.

What's interesting about the TXT records is that each domain had one record with one character. The CNAME mapped every domain to one of the other 255 domain names - except one that pointed to <code>slutt.spst.no</code> (slutt=end). The CNAME records determined the order of the characters in the TXT records. A simple script can be used to get the string we want:<pre class="prettyprint lang-py">#!/usr/bin/python3
pointers = {'00.spst.no': 'cf.spst.no', '01.spst.no': '91.spst.no', '02.spst.no': '42.spst.no', '03.spst.no': '45.spst.no', '04.spst.no': '48.spst.no', '05.spst.no': '17.spst.no', '06.spst.no': '11.spst.no', '07.spst.no': '93.spst.no', '08.spst.no': '20.spst.no', '09.spst.no': '75.spst.no', '0a.spst.no': 'a4.spst.no', '0b.spst.no': 'fe.spst.no', '0c.spst.no': '41.spst.no', '0d.spst.no': '13.spst.no', '0e.spst.no': 'c9.spst.no', '0f.spst.no': '53.spst.no', '10.spst.no': '47.spst.no', '11.spst.no': 'b7.spst.no', '12.spst.no': '63.spst.no', '13.spst.no': 'c2.spst.no', '14.spst.no': '27.spst.no', '15.spst.no': 'a1.spst.no', '16.spst.no': '38.spst.no', '17.spst.no': 'e3.spst.no', '18.spst.no': 'bd.spst.no', '19.spst.no': '5d.spst.no', '1a.spst.no': '2f.spst.no', '1b.spst.no': '05.spst.no', '1c.spst.no': '0d.spst.no', '1d.spst.no': '83.spst.no', '1e.spst.no': '78.spst.no', '1f.spst.no': '74.spst.no', '20.spst.no': '4b.spst.no', '21.spst.no': 'c4.spst.no', '22.spst.no': '10.spst.no', '23.spst.no': '16.spst.no', '24.spst.no': '33.spst.no', '25.spst.no': 'e2.spst.no', '26.spst.no': 'eb.spst.no', '27.spst.no': 'e5.spst.no', '28.spst.no': '6f.spst.no', '29.spst.no': '79.spst.no', '2a.spst.no': 'c6.spst.no', '2b.spst.no': 'd7.spst.no', '2c.spst.no': 'e6.spst.no', '2d.spst.no': 'b1.spst.no', '2e.spst.no': 'ea.spst.no', '2f.spst.no': 'df.spst.no', '30.spst.no': 'e1.spst.no', '31.spst.no': 'fc.spst.no', '32.spst.no': 'f0.spst.no', '33.spst.no': '52.spst.no', '34.spst.no': 'f9.spst.no', '35.spst.no': 'd4.spst.no', '36.spst.no': '1e.spst.no', '37.spst.no': 'd0.spst.no', '38.spst.no': 'f2.spst.no', '39.spst.no': '61.spst.no', '3a.spst.no': '09.spst.no', '3b.spst.no': '88.spst.no', '3c.spst.no': '71.spst.no', '3d.spst.no': 'bf.spst.no', '3e.spst.no': '43.spst.no', '3f.spst.no': '9c.spst.no', '40.spst.no': '28.spst.no', '41.spst.no': '24.spst.no', '42.spst.no': '3a.spst.no', '43.spst.no': 'ce.spst.no', '44.spst.no': '23.spst.no', '45.spst.no': '81.spst.no', '46.spst.no': 'aa.spst.no', '47.spst.no': 'cb.spst.no', '48.spst.no': '19.spst.no', '49.spst.no': 'c7.spst.no', '4a.spst.no': '04.spst.no', '4b.spst.no': 'dd.spst.no', '4c.spst.no': '12.spst.no', '4d.spst.no': '0a.spst.no', '4e.spst.no': '7e.spst.no', '4f.spst.no': '0b.spst.no', '50.spst.no': '9e.spst.no', '51.spst.no': '22.spst.no', '52.spst.no': '57.spst.no', '53.spst.no': 'a6.spst.no', '54.spst.no': 'ab.spst.no', '55.spst.no': '2a.spst.no', '56.spst.no': 'bc.spst.no', '57.spst.no': '5b.spst.no', '58.spst.no': '0f.spst.no', '59.spst.no': 'ba.spst.no', '5a.spst.no': 'ed.spst.no', '5b.spst.no': 'b3.spst.no', '5c.spst.no': '8c.spst.no', '5d.spst.no': '34.spst.no', '5e.spst.no': '4d.spst.no', '5f.spst.no': 'a0.spst.no', '60.spst.no': '76.spst.no', '61.spst.no': 'c5.spst.no', '62.spst.no': '01.spst.no', '63.spst.no': '0c.spst.no', '64.spst.no': '06.spst.no', '65.spst.no': 'd3.spst.no', '66.spst.no': '25.spst.no', '67.spst.no': '69.spst.no', '68.spst.no': '49.spst.no', '69.spst.no': '3b.spst.no', '6a.spst.no': 'ec.spst.no', '6b.spst.no': 'ef.spst.no', '6c.spst.no': 'c3.spst.no', '6d.spst.no': '32.spst.no', '6e.spst.no': 'f3.spst.no', '6f.spst.no': 'd5.spst.no', '70.spst.no': '37.spst.no', '71.spst.no': 'f7.spst.no', '72.spst.no': '62.spst.no', '73.spst.no': '31.spst.no', '74.spst.no': '4a.spst.no', '75.spst.no': '60.spst.no', '76.spst.no': '07.spst.no', '77.spst.no': 'd9.spst.no', '78.spst.no': 'e4.spst.no', '79.spst.no': '1d.spst.no', '7a.spst.no': 'f6.spst.no', '7b.spst.no': 'b6.spst.no', '7c.spst.no': 'e0.spst.no', '7d.spst.no': '65.spst.no', '7e.spst.no': '6b.spst.no', '7f.spst.no': '3e.spst.no',
            '80.spst.no': 'b4.spst.no', '81.spst.no': '9b.spst.no', '82.spst.no': 'ae.spst.no', '83.spst.no': '5e.spst.no', '84.spst.no': '73.spst.no', '85.spst.no': '99.spst.no', '86.spst.no': 'de.spst.no', '87.spst.no': 'c1.spst.no', '88.spst.no': 'e7.spst.no', '89.spst.no': '6d.spst.no', '8a.spst.no': '2e.spst.no', '8b.spst.no': '44.spst.no', '8c.spst.no': '7a.spst.no', '8d.spst.no': '15.spst.no', '8e.spst.no': '55.spst.no', '8f.spst.no': '21.spst.no', '90.spst.no': '6e.spst.no', '91.spst.no': '1a.spst.no', '92.spst.no': 'e9.spst.no', '93.spst.no': '3f.spst.no', '94.spst.no': 'db.spst.no', '95.spst.no': '5f.spst.no', '96.spst.no': 'ee.spst.no', '97.spst.no': '96.spst.no', '98.spst.no': '7c.spst.no', '99.spst.no': '39.spst.no', '9a.spst.no': '95.spst.no', '9b.spst.no': '1c.spst.no', '9c.spst.no': '4f.spst.no', '9d.spst.no': 'fa.spst.no', '9e.spst.no': '8e.spst.no', '9f.spst.no': '87.spst.no', 'a0.spst.no': '26.spst.no', 'a1.spst.no': 'cd.spst.no', 'a2.spst.no': '35.spst.no', 'a3.spst.no': '0e.spst.no', 'a4.spst.no': '5c.spst.no', 'a5.spst.no': 'd8.spst.no', 'a6.spst.no': 'b2.spst.no', 'a7.spst.no': 'bb.spst.no', 'a8.spst.no': '3c.spst.no', 'a9.spst.no': 'b5.spst.no', 'aa.spst.no': '67.spst.no', 'ab.spst.no': 'a9.spst.no', 'ac.spst.no': '70.spst.no', 'ad.spst.no': '8f.spst.no', 'ae.spst.no': '85.spst.no', 'af.spst.no': 'ca.spst.no', 'b0.spst.no': '8a.spst.no', 'b1.spst.no': '6a.spst.no', 'b2.spst.no': 'd2.spst.no', 'b3.spst.no': '50.spst.no', 'b4.spst.no': '2b.spst.no', 'b5.spst.no': '51.spst.no', 'b6.spst.no': '6c.spst.no', 'b7.spst.no': '59.spst.no', 'b8.spst.no': '98.spst.no', 'b9.spst.no': '02.spst.no', 'ba.spst.no': '40.spst.no', 'bb.spst.no': 'c0.spst.no', 'bc.spst.no': 'b8.spst.no', 'bd.spst.no': '2c.spst.no', 'be.spst.no': '8d.spst.no', 'bf.spst.no': '8b.spst.no', 'c0.spst.no': '86.spst.no', 'c1.spst.no': '46.spst.no', 'c2.spst.no': '90.spst.no', 'c3.spst.no': 'a3.spst.no', 'c4.spst.no': '14.spst.no', 'c5.spst.no': '94.spst.no', 'c6.spst.no': 'a8.spst.no', 'c7.spst.no': 'fd.spst.no', 'c8.spst.no': '64.spst.no', 'c9.spst.no': 'ac.spst.no', 'ca.spst.no': 'b0.spst.no', 'cb.spst.no': '30.spst.no', 'cc.spst.no': 'd1.spst.no', 'cd.spst.no': 'a5.spst.no', 'ce.spst.no': '68.spst.no', 'cf.spst.no': '3d.spst.no', 'd0.spst.no': 'f8.spst.no', 'd1.spst.no': 'da.spst.no', 'd2.spst.no': '2d.spst.no', 'd3.spst.no': '1b.spst.no', 'd4.spst.no': '56.spst.no', 'd5.spst.no': '58.spst.no', 'd6.spst.no': 'dc.spst.no', 'd7.spst.no': '72.spst.no', 'd8.spst.no': '08.spst.no', 'd9.spst.no': '36.spst.no', 'da.spst.no': '54.spst.no', 'db.spst.no': '80.spst.no', 'dc.spst.no': '7b.spst.no', 'dd.spst.no': '18.spst.no', 'de.spst.no': '00.spst.no', 'df.spst.no': '29.spst.no', 'e0.spst.no': 'fb.spst.no', 'e1.spst.no': '97.spst.no', 'e2.spst.no': 'b9.spst.no', 'e3.spst.no': '9a.spst.no', 'e4.spst.no': '03.spst.no', 'e5.spst.no': '4e.spst.no', 'e6.spst.no': '4c.spst.no', 'e7.spst.no': 'a7.spst.no', 'e8.spst.no': '92.spst.no', 'e9.spst.no': '77.spst.no', 'ea.spst.no': '82.spst.no', 'eb.spst.no': '66.spst.no', 'ec.spst.no': '7d.spst.no', 'ed.spst.no': 'slutt.spst.no', 'ee.spst.no': 'c8.spst.no', 'ef.spst.no': 'af.spst.no', 'f0.spst.no': '5a.spst.no', 'f1.spst.no': '7f.spst.no', 'f2.spst.no': 'cc.spst.no', 'f3.spst.no': '89.spst.no', 'f4.spst.no': 'd6.spst.no', 'f5.spst.no': 'ad.spst.no', 'f6.spst.no': '84.spst.no', 'f7.spst.no': '9d.spst.no', 'f8.spst.no': 'ff.spst.no', 'f9.spst.no': 'be.spst.no', 'fa.spst.no': 'f4.spst.no', 'fb.spst.no': '9f.spst.no', 'fc.spst.no': '1f.spst.no', 'fd.spst.no': 'a2.spst.no', 'fe.spst.no': 'e8.spst.no', 'ff.spst.no': 'f1.spst.no'}
letters = {'00.spst.no': 'c', '01.spst.no': 'e', '02.spst.no': 'W', '03.spst.no': '3', '04.spst.no': '0', '05.spst.no': 'l', '06.spst.no': '4', '07.spst.no': 'k', '08.spst.no': 'J', '09.spst.no': '1', '0a.spst.no': 'w', '0b.spst.no': 'G', '0c.spst.no': '6', '0d.spst.no': 'L', '0e.spst.no': 'H', '0f.spst.no': 'A', '10.spst.no': 'Z', '11.spst.no': 'T', '12.spst.no': 'w', '13.spst.no': 'k', '14.spst.no': 'a', '15.spst.no': '0', '16.spst.no': 'b', '17.spst.no': 'R', '18.spst.no': 'z', '19.spst.no': 'x', '1a.spst.no': 'X', '1b.spst.no': 'B', '1c.spst.no': 'X', '1d.spst.no': '2', '1e.spst.no': '7', '1f.spst.no': 'L', '20.spst.no': '7', '21.spst.no': 's', '22.spst.no': 'M', '23.spst.no': 'H', '24.spst.no': 'p', '25.spst.no': 'I', '26.spst.no': 'r', '27.spst.no': 'v', '28.spst.no': 'o', '29.spst.no': 'Y', '2a.spst.no': 'V', '2b.spst.no': '4', '2c.spst.no': 'e', '2d.spst.no': '2', '2e.spst.no': '9', '2f.spst.no': 'R', '30.spst.no': 'P', '31.spst.no': 'W', '32.spst.no': 'B', '33.spst.no': 'b', '34.spst.no': 'F', '35.spst.no': 'T', '36.spst.no': 'P', '37.spst.no': 'Y', '38.spst.no': 'R', '39.spst.no': 'b', '3a.spst.no': 'P', '3b.spst.no': 'W', '3c.spst.no': 'y', '3d.spst.no': 'z', '3e.spst.no': 'T', '3f.spst.no': 'r', '40.spst.no': 't', '41.spst.no': '0', '42.spst.no': '5', '43.spst.no': 'A', '44.spst.no': 'B', '45.spst.no': 'p', '46.spst.no': 'V', '47.spst.no': 'L', '48.spst.no': 'n', '49.spst.no': '3', '4a.spst.no': 'F', '4b.spst.no': 'Z', '4c.spst.no': 'n', '4d.spst.no': '7', '4e.spst.no': 'e', '4f.spst.no': 'g', '50.spst.no': 'c', '51.spst.no': 'p', '52.spst.no': 'S', '53.spst.no': '0', '54.spst.no': 'C', '55.spst.no': 'b', '56.spst.no': 'E', '57.spst.no': 'K', '58.spst.no': 'u', '59.spst.no': '9', '5a.spst.no': 'h', '5b.spst.no': 'L', '5c.spst.no': '6', '5d.spst.no': 'e', '5e.spst.no': 'U', '5f.spst.no': 'Z', '60.spst.no': '1', '61.spst.no': '0', '62.spst.no': 'W', '63.spst.no': 'e', '64.spst.no': 'u', '65.spst.no': 'q', '66.spst.no': 'j', '67.spst.no': 'G', '68.spst.no': 'p', '69.spst.no': 'c', '6a.spst.no': 'L', '6b.spst.no': 'G', '6c.spst.no': 'V', '6d.spst.no': 'B', '6e.spst.no': 'm', '6f.spst.no': '4', '70.spst.no': 'f', '71.spst.no': 'F', '72.spst.no': 'c', '73.spst.no': 'k', '74.spst.no': 'R', '75.spst.no': 'K', '76.spst.no': 'H', '77.spst.no': '7', '78.spst.no': 'S', '79.spst.no': '2', '7a.spst.no': 'F', '7b.spst.no': 'X', '7c.spst.no': 'O', '7d.spst.no': '0', '7e.spst.no': 'd', '7f.spst.no': 'D',
           '80.spst.no': 'N', '81.spst.no': 'S', '82.spst.no': 'a', '83.spst.no': 'J', '84.spst.no': 'q', '85.spst.no': '2', '86.spst.no': 's', '87.spst.no': 'd', '88.spst.no': 'y', '89.spst.no': 'L', '8a.spst.no': 'q', '8b.spst.no': 'n', '8c.spst.no': 'q', '8d.spst.no': 'r', '8e.spst.no': 'v', '8f.spst.no': 'k', '90.spst.no': 'G', '91.spst.no': 'N', '92.spst.no': '4', '93.spst.no': 'K', '94.spst.no': 'Q', '95.spst.no': 'x', '96.spst.no': 'l', '97.spst.no': 'E', '98.spst.no': 'F', '99.spst.no': 'h', '9a.spst.no': 'd', '9b.spst.no': 'N', '9c.spst.no': 'j', '9d.spst.no': 'd', '9e.spst.no': 'w', '9f.spst.no': 'K', 'a0.spst.no': 'K', 'a1.spst.no': '2', 'a2.spst.no': 'v', 'a3.spst.no': 'G', 'a4.spst.no': 'a', 'a5.spst.no': 'x', 'a6.spst.no': 'i', 'a7.spst.no': 'L', 'a8.spst.no': '3', 'a9.spst.no': '4', 'aa.spst.no': 'W', 'ab.spst.no': 'P', 'ac.spst.no': '4', 'ad.spst.no': 'o', 'ae.spst.no': 'm', 'af.spst.no': 'y', 'b0.spst.no': 'D', 'b1.spst.no': 'e', 'b2.spst.no': 'j', 'b3.spst.no': 'X', 'b4.spst.no': 'T', 'b5.spst.no': 'z', 'b6.spst.no': 'C', 'b7.spst.no': 'p', 'b8.spst.no': 'J', 'b9.spst.no': 'i', 'ba.spst.no': 'L', 'bb.spst.no': 'D', 'bc.spst.no': 'D', 'bd.spst.no': 'V', 'be.spst.no': 'N', 'bf.spst.no': '8', 'c0.spst.no': 'c', 'c1.spst.no': 'B', 'c2.spst.no': 'l', 'c3.spst.no': '6', 'c4.spst.no': 't', 'c5.spst.no': 'm', 'c6.spst.no': '2', 'c7.spst.no': 'O', 'c8.spst.no': 'e', 'c9.spst.no': 'N', 'ca.spst.no': '9', 'cb.spst.no': 'Q', 'cc.spst.no': 'U', 'cd.spst.no': 'j', 'ce.spst.no': 'o', 'cf.spst.no': 'w', 'd0.spst.no': 'n', 'd1.spst.no': 'G', 'd2.spst.no': 'U', 'd3.spst.no': 'Q', 'd4.spst.no': 'E', 'd5.spst.no': 'z', 'd6.spst.no': 'a', 'd7.spst.no': 'w', 'd8.spst.no': 'p', 'd9.spst.no': 'x', 'da.spst.no': '9', 'db.spst.no': 'Y', 'dc.spst.no': 'P', 'dd.spst.no': 'I', 'de.spst.no': 'u', 'df.spst.no': 'k', 'e0.spst.no': 'e', 'e1.spst.no': 'v', 'e2.spst.no': 'q', 'e3.spst.no': 'Q', 'e4.spst.no': 'g', 'e5.spst.no': '=', 'e6.spst.no': 'W', 'e7.spst.no': '7', 'e8.spst.no': 'j', 'e9.spst.no': 'M', 'ea.spst.no': 'r', 'eb.spst.no': 'a', 'ec.spst.no': 'k', 'ed.spst.no': 'G', 'ee.spst.no': '1', 'ef.spst.no': '1', 'f0.spst.no': 'b', 'f1.spst.no': 'w', 'f2.spst.no': '9', 'f3.spst.no': '4', 'f4.spst.no': '4', 'f5.spst.no': 'b', 'f6.spst.no': 'J', 'f7.spst.no': 'O', 'f8.spst.no': 'z', 'f9.spst.no': 'Z', 'fa.spst.no': 'N', 'fb.spst.no': 'u', 'fc.spst.no': 'M', 'fd.spst.no': '8', 'fe.spst.no': 'I', 'ff.spst.no': 's'}
last_pointer = None
for key, value in pointers.items():
    if not value in pointers:
        print('Last pointer is', key) # 'Last pointer is ed.spst.no'
        last_pointer = key
        break
ordered = ''
domains = last_pointer
while True:
    ordered = letters[last_pointer] + ordered
    found = False
    for key, value in pointers.items():
        if last_pointer == value:
            found = True
            last_pointer = key
            break
    print(ordered)
    if not found:
        break

""""
bokstav=edG1y9Dq9ram2hb0mQYNT4wcWeNXRkY22JU7wa6qFJqkWMLRF0nxeFZNr02jxpJ7ZIzVeWnwe60pbSKLXcwvbV23yFOdN4aPXCV6GHN4fYnzswDTAop3O8vTEEDJFOeuKdBVWGcWy7LDcsucwz8nBHbR9UG9CP4zpMZLQPvEl1eu4Tp9Lto4zuA0ijU2eLk0qQBlRQdxZKrajIqiW5P1K1HkKrjgGIj4M7xP7Sg3pSNXLklGm4LBBbhG
"""
</pre>

<code>bokstav</code> (=letter) equals something is printed. We were told we were missing a <i>bokstavkjeks</i> (=letter cookie). This is the cookie name and value we need.
<pre class="prettyprint lang-bsh">curl 'https://ops.spst.no/api/abort' -H 'cookie: bokstav=edG1y9Dq9ram2hb0mQYNT4wcWeNXRkY22JU7wa6qFJqkWMLRF0nxeFZNr02jxpJ7ZIzVeWnwe60pbSKLXcwvbV23yFOdN4aPXCV6GHN4fYnzswDTAop3O8vTEEDJFOeuKdBVWGcWy7LDcsucwz8nBHbR9UG9CP4zpMZLQPvEl1eu4Tp9Lto4zuA0ijU2eLk0qQBlRQdxZKrajIqiW5P1K1HkKrjgGIj4M7xP7Sg3pSNXLklGm4LBBbhG'

Arrgh! Vi gir opp for denne gang.
https://npst.no/_6331fff126233c324c9f5fc49c49a8b6.html%
</pre>

We're given a URL to <a href="https://npst.no/_6331fff126233c324c9f5fc49c49a8b6.html">https://npst.no/_6331fff126233c324c9f5fc49c49a8b6.html</a>. And there it is; a proper Star Wars intro as an outro and our final flag. Take a moment to enjoy the victory. 🚩 Christmas is saved.

The flag is <code>PST{82a1f79e6ce39ef16d0ef4ef1c1d2fcc}</code>.
</span></div></li></ul><script>
$(document).ready(function(){
    $('.collapsible').collapsible();
});
</script>
<h4>Credits</h4>While I worked on all the challenges alone there were a few times I was stuck long enough to discuss or ask for hints from Frank Karlstrøm (<a href="https://twitter.com/fjankk">Twitter</a>, <a href="https://fjank.no/">blog</a>). I'm pretty sure I wouldn't have nailed all challenges otherwise.

<h4>Scores</h4>The CTF closed by the end of New Year's Eve. Looking at <a href="https://intranett.npst.no/scoreboard">the scoreboard</a> there were 19 users who managed to get all 274 points. 39 users managed to solve challenge 24 (18 by the end of Christmas Eve). The "problem" that stopped many from full score was challenge 23 which neeed 3 hints from PST before it was solved. There were 1048 users that successfully submitted at least 1 correct flag, though I suppose there's quite a few non-real users among them. Still, there have been several hundred persons trying out the challenges. I think that's pretty good.

<div style="padding-top:80px;" class="col s12 m5 l5 xl4 right"><div class="card-panel light-blue darken-1 white-text">Enjoy reading about IT security? <span style="text-decoration:underline;"><a class="white-text" href="/category/security">Check out more of my posts.</a></span></div></div><h4>Some final thoughts</h4>This was actually my very first CTF. I don't think the intention was to have a very beginner friendly CTF, but at the same time the challenges generally weren't very hard. I think it's really cool that PST did this. This and previous job ads is a great way of showing off some of the expertise they are looking for. They sure get a lot of both media attention and awareness in the IT industry. I'm pretty sure this can - at least in the long run - help them hire the right people.

I wish that the challenges weren't published at midnight. I mean, it's fine if it was PST's way to map out who's got no commitments, no family, no job, no school. Otherwise it was a bit harsh with 19 out of 24 days like this. I'm happy that I was able to stay away most midnights, but it was hard not to check out the new challenge on the mobile when waking up in the middle of the night. Personally I'd like the challenges to be published like 6 p.m. I'm not sure if I'd give away that many hours of next December.

I saw some minor critisim of the hints being suddenly published instead without having the release time published up front. I think that is a valid point for those really competing in staying and ending on the top of the scoreboard.

It feels good that it's over now. You know your brain is working overtime when you immediately start looking for clues when you see toy penguins at the store, or you have dreams where you are trying to figure out the charset of some binary data.. 😅

<em>All in all, I think it was a great and very fun CTF. I think it was entertaining with the theme and storyline. I'm impressed by PST and I hope they continue with this and similar things in the future. It's good for them and it's good for all of us if we can increase the expertise in our industry.</em>

<h4>Request for comments</h4>If you have thoughts about my solutions, the CTF, or if I have missed something cool; don't hesitate to comment here or <a href="/about">contact me in some other way</a>. 🙂
`,
                "images": ["/images/pst304.jpg", "/images/pst301-autopsy.png", "/images/pst302-autopsy.png", "/images/pst303-punched_card.png"],
                "category":
                {
                    "title": "Security",
                    "url": "/security"
                },
                "tags": [
                    {
                        "title": "Behind the news",
                        "url": "/behind-the-news"
                    },
                    {
                        "title": "Challenge",
                        "url": "/challenge"
                    }
                ]
            },
            {
                "title": "Capture the flag with the Norwegian Police Security Service - Easter edition",
                "published": true,
                "publishDate": "2020-04-15T14:00:00.000Z",
                "summary": `Here's a write-up showing how to solve the challenges of the Norwegian Police Security Service's Easter CTF.`,
                "niceUrl": "/2020/04/pst-challenge-4",
                "text": `
<h4>Background 👮</h4>The <a href="https://en.wikipedia.org/wiki/Norwegian_Police_Security_Service">Norwegian Police Security Service</a> (with the Norwegian abbreviation <a href="https://www.pst.no/">PST</a> which I'll use for this write-up) is the police <a href="https://en.wikipedia.org/wiki/Security_agency">security agency</a> of Norway. Following up on <a href="/2020/01/pst-challenge-3">their big Christmas CTF advent calendar</a> they now did a smaller CTF for Easter.

<h4>The theme 🐰</h4>This time PST added an H in their name and created the imaginary <i>Easter Bunny's Security Service</i> (Påskeharens sikkerhetstjeneste = PHST). PHST's role is supposedly to protect the Easter Bunny's egg basket and core values. Everything happened on <a href="https://phst.no/">phst.no</a> from April 9th to April 13th 2020.

<h4>Challenges and solutions</h4>Let's jump straight in. Click on a challenge to expand it.
<a class="skip-link" href="#" aria-hidden="true" onclick="var c=$('.collapsible');var shouldOpen=c.children('.active').length === 0;for(var i=0;i<c.children().length;i++){c.collapsible(shouldOpen ? 'open' : 'close', i);}return false;"><u>Expand/collapse all</u></a><ul class="collapsible expandable" data-collapsible="expandable"><li><div class="collapsible-header">Maundy Thursday - 10 points</div><div class="collapsible-body"><span><h6>Challenge</h6><img class="materialboxed responsive-img" title="Who has taken this picture?" data-caption="Who has taken this picture?" alt="Clue" src="/images/pst401-skjaertorsdag.png">
We are told that the Easter Bunny's eggs were stolen and that someone had sent the picture above and that it might contain a clue.

<h6>Solution</h6>For this you could use some local or online tool for extracting the image meta data. <a href="https://en.wikipedia.org/wiki/Strings_(Unix)">strings</a></code> would also be a nice candiate for this. The PNG image description field contains the text <code>CUFG{Qrer_snatre_zrt_nyqev!!}</code>.

That looks a lot like the output of a <a href="https://en.wikipedia.org/wiki/Caesar_cipher">Caesar cipher</a>. <a href="https://gchq.github.io/CyberChef/#recipe=ROT13(true,true,13)&input=Q1VGR3tRcmVyX3NuYXRyZV96cnRfbnlxZXYhIX0">Using an online tool</a> you can quickly see that the flag is <code>PHST{Dere_fanger_meg_aldri!!}</code> (=<i>"You'll never catch me!!"</i>).

We are given a piece of a rebus: <code>bravo = "19de0b5a1eeef635c2b4fec6e7c7"</code></span>
</div></li><li><div class="collapsible-header">Good Friday - 20 points</div><div class="collapsible-body"><span><h6>Challenge</h6><img class="materialboxed responsive-img" title="Are these the stolen eggs?" data-caption="Are these the stolen eggs?" alt="Clue" src="/images/pst402-paskeegg_langfredag.png">
PHST received the above picture. It might show the eggs that disappeared. The challenge is to find something of interesting in the picture.

<h6>Solution</h6>This time the information we are looking for isn't hidden in the meta data. The eggs are all coloured, and we see a sheet specifying a number for each colour. The sheet also has a reference to <a href="https://en.wikipedia.org/wiki/Electronic_color_code#Resistors"><i>resistor colour code</i></a>. You have to decode each egg as a 3 colour band resistor. Starting from the top of the top left egg you would first get brown, brown, red. That translates to 1, 1, 2.

Following that logic for all the eggs give these numbers: <code>112 052 052 115 107 051 104 052 114 051 110 033</code>

The numbers can be <a href="https://gchq.github.io/CyberChef/#recipe=From_Decimal('Space',false)&input=MTEyIDA1MiAwNTIgMTE1IDEwNyAwNTEgMTA0IDA1MiAxMTQgMDUxIDExMCAwMzM">converted as an integer array to ASCII</a>: <code>p44sk3h4r3n!</code> (=leet for <i>The Easter Bunny!</i>). The flag is <code>PHST{p44sk3h4r3n!}</code>.

We are also given another piece of the rebus: <code>{delta: "03074978df7930e256789cb87ea67358"}</code></span>
</div></li><li><div class="collapsible-header">Holy Saturday - 20 points</div><div class="collapsible-body"><span><h6>Challenge</h6>The bad guys have been accessing the servers of the Easter Bunny. Tracing them back leads to the address <code>1F423.com</code>. We are asked to find out something in regards of the <i>address</i>.

<h6>Solution</h6>I was stuck on this for a long time. <code>U+1F423</code> happens to be the unicode for <a href="https://www.fileformat.info/info/unicode/char/1f423/index.htm">🐣 (hatching chick)</a>. I was so sure the flag was related to this.

However, looking at the DNS records there is an interesting <a href="https://en.wikipedia.org/wiki/LOC_record">LOC record</a>. Using the command <code>dig loc 1F423.com</code> or <a href="https://digwebinterface.com/?hostnames=1f423.com&type=LOC&ns=resolver&useresolver=8.8.4.4">an online tool</a> the following coordinates are returned: <code>60 47 34.900 N 11 6 3.600 E 0.00m 0.00m 0.00m 0.00m</code>

<a href="https://www.google.com/maps/place/60°47'34.9%22N+11°06'03.6%22E/@60.7930278,11.0988113,460m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d60.7930278!4d11.101">Pasting the coordinates into Google Maps</a> shows the <a href="https://en.wikipedia.org/wiki/Vikingskipet">Hamar Olympic Hall - Vikingskipet</a>. That is no coincident as it every Easter hosts the world's second largest computer party: <a href="https://en.wikipedia.org/wiki/The_Gathering_(LAN_party)">The Gathering</a>. PST has also used this LAN party for recruitment purposes. The flag is <code>PHST{Vikingskipet}</code>.

We are given a piece of a rebus: <code>echo: "a3f6ce4eb662e4797a39b"</code></span>
</div></li><li><div class="collapsible-header">Easter Day - 20 points</div><div class="collapsible-body"><span><h6>Challenge</h6>We are told that the threat actor has had access to the network, and we are given a <a href="https://en.wikipedia.org/wiki/pcap">pcap</a> <a href="/stuff/mistenkelig.pcap"><code>mistenkelig.pcap</code></a> showing some of the network traffic. The challenge is to figure out what information the threat actor has gotten hold of.

<h6>Solution</h6>Most of the traffic in the pcap is encrypted. Considering how the other challenges could be solved with just using online tools I spent a lot of time trying to find something interesting in the network traffic not looking at the encrypted traffic. That was a mistake.

The encrypted traffic is using <a href="https://en.wikipedia.org/wiki/Transport_Layer_Security">TLS</a>. For some reason all parameters for the TLS handshakes for one of the computers are sent to another one (is this the intruder doing this or some crazy network logging?). <a href="https://en.wikipedia.org/wiki/Wireshark">Wireshark</a> is an absolutely magical packet analyzer that can take these keys and secrets and display the decrypted data sent over the wire. It can also extract all the files transmitted.
<img class="materialboxed responsive-img" title="Wait, what? Are those TLS secrets?" data-caption="Wait, what? Are those TLS secrets?" alt="Wireshark screenshot" src="/images/pst403-pcap.png">
It turns out that the document the intruder gets a hold of isn't very exciting, but a PDF with the weather forecast for the mentioned <i>Vikingskipet</i>. The flag is <code>PHST{Weather forecast for Vikingskipet}</code>.</span>

We are also given a piece of a rebus: <code>$charlie = "664150457e1f2ccc3399"</code></span>
</div></li><li><div class="collapsible-header">Second Easter Day - 30 points</div><div class="collapsible-body"><span><h6>Challenge</h6>We are given a Python program that controls the physical access to the place of the egg thieves. The challenge is to gain access to the system.

<h6>Links</h6> - <a href="/stuff/merkelig.py.txt">Python script: <code>merkelig.py</code></a>
 - <a href="/stuff/underfundig.txt">Emojis: <code>underfundig</code></a>
 - <a href="/images/pst404-paskekyllingbetjenter.png">Picture of Easter chicken officers</a>

<h6>Solution</h6>This one was right up my alley. Though tricky at first it's always fun with a programming challenge like this. The script is pretty neat. It uses emoji input and has a set of operations that these emojis can trigger. Those operations can read input from the keyboard and write output to the screen. In practice we are given a set of input that makes the program ask for a password and tells whether or not it was correct.

It didn't take too long to shortcut the program to make it believe it got the correct input and tell that the password was correct. The problem was that the flag was the password you had to type in, and the flag wasn't directly stored in either the program or the input. So you would need to figure out what input triggered the message telling that the password was correct.

The program uses a few pointers and a stack to store the user input and the output. Playing with the stack I saw that the password had to be 34 characters long. Then the password could be brute forced.

Though it didn't look this pretty when I tried hacking it together to be among the first ones to solve it, here's a cleaned up solution. It requires change in only one line in the initial script as mentioned below. The change makes the program throw an exception the moment it receives either incorrect password length or an incorrect character in the password (starting from the end of the password). This variant of the solution also figures out the password length on it's own too.<pre class="prettyprint lang-py">"""
NOTE: Add 'raise Exception(sp)' on line 45 in merkelig.py
"""
import sys
from time import time
from string import printable

sys.argv.append('underfundig')  # We'll just append the input file here ourselves

password = '#' * 40

def readline():
    return password.encode()

sys.stdin.buffer.readline = readline  # Quick and dirty replacement of readline()

char_to_change = len(password) - 1
t = time()
while True:
    for l in printable:
        password = password[0:char_to_change] + l + password[char_to_change + 1:]
        found_password = True
        try:
            import merkelig
        except Exception as e:
            if e.args[0] != char_to_change:
                password = password.strip()
                print(password)
            char_to_change = e.args[0] - 1  # raise Exception(sp)
            found_password = False
        finally:
            if found_password:
                # Prints 'Found password in 1143 ms: PHST{Mitt navn er Gwyn. Pen Gwyn.}':
                print('Found password in', round((time() - t) * 1000), 'ms:', password)

</pre>
<img src="/images/pst405-cracking.gif" alt="Cracking in progress" title="Slowmo of cracking process. Click to see again." onclick="this.src='/images/pst405-cracking.gif'"/>
The flag was <code>PHST{Mitt navn er Gwyn. Pen Gwyn.}</code> (="<i>My name is Gwyn. Pen Gwyn.</i>"). So just like <a href="/2020/01/pst-challenge-3">Pen Gwyn gave NPST a hard time last Christmas</a>, he now has been after PHST.

The final piece for the rebus was this: <code>String alfa = "0c405bdf5899c3db8ba0d1909f9"</code></span>
</span>
</div></li><li><div class="collapsible-header">Rebus - 10 points</div><div class="collapsible-body"><span><h6>Challenge</h6>The challenge was to solve the rebus <code>print("https://www.phst.no/" + alfa + bravo + charlie + delta + echo + ".html")</code>

<h6>Solution</h6></span>We have found all the different pieces of the rebus and we can add them together to get <code style="font-size:60%;overflow-wrap: break-word;"><a href="https://www.phst.no/0c405bdf5899c3db8ba0d1909f919de0b5a1eeef635c2b4fec6e7c7664150457e1f2ccc339903074978df7930e256789cb87ea67358a3f6ce4eb662e4797a39b.html">https://www.phst.no/0c405bdf5899c3db8ba0d1909f919de0b5a1eeef635c2b4fec6e7c7664150457e1f2ccc339903074978df7930e256789cb87ea67358a3f6ce4eb662e4797a39b.html</a></code>:
<pre class="prettyprint lang-py">alfa = "0c405bdf5899c3db8ba0d1909f9"
bravo = "19de0b5a1eeef635c2b4fec6e7c7"
charlie = "664150457e1f2ccc3399"
delta = "03074978df7930e256789cb87ea67358"
echo = "a3f6ce4eb662e4797a39b"
print("https://www.phst.no/" + alfa + bravo + charlie + delta + echo + ".html")</pre>
The final flag - found on that page - was <code>PHST{Du klarte SHAbussen, veldig bra jobba!}</code> (=<i>"You did the SHAbus, very nicely done!"</i>).
</div></li></ul><script>
$(document).ready(function(){
    $('.collapsible').collapsible();
});
</script>
<h4>Scores</h4>By the end of the day of second Easter day 19 people had full score and a total of 24 had solved all the challenges. I was pretty happy being the fourth person to solve the last challenge and therefore placing me on fourth place in total.

<div style="padding-top:80px;" class="col s12 m5 l5 xl4 right"><div class="card-panel light-blue darken-1 white-text">Enjoy reading about IT security? <span style="text-decoration:underline;"><a class="white-text" href="/category/security">Check out more of my posts.</a></span></div></div><h4>Some final thoughts</h4>I really enjoyed these Easter puzzles. They were entertaining, varied and they didn't need that big of a time investment. Maybe the best part was that the challenges were opened daily at 12 p.m. instead of 12 a.m., so there was no need to lose any sleep or check the mobile in the middle of the night.
`,
                "images": ["/images/pst406-congrats.jpg"],
                "category":
                {
                    "title": "Security",
                    "url": "/security"
                },
                "tags": [
                    {
                        "title": "Challenge",
                        "url": "/challenge"
                    }
                ]
            },
            {
                "title": "Case #XX: ",
                "published": false,
                "publishDate": "2020-01-01T04:30:00.000Z",
                "updateDate": "2020-01-01T05:30:00.000Z",
                "summary": ``,
                "niceUrl": "/2020/XX/title",
                "text": ``,
                "hot": false,
                "author": "Roy Solberg",
                "images": [],
                "category":
                {
                    "title": "Security",
                    "url": "/security"
                },
                "tags": [
                    {
                        "title": "Security Monday",
                        "url": "/security-monday"
                    }
                ]
            }
        ];
}(window.SpaBlog));

if (typeof module != 'undefined') {
    module.exports = [window.SpaBlog.pages, window.SpaBlog.posts];
}
