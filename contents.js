window.SpaBlog = window.SpaBlog || {}; // Our namespace

(function (SpaBlog) {
    SpaBlog.posts =
        [
            {
                title: 'Building a real SPA blog',
                publishDate: '2017-08-01 22:00',
                summary: 'This blog is a real single-page application with no backend or database. It\'s refreshingly easy to work with.',
                niceUrl: '/2017/07/building-a-real-spa-blog',
                text: `I wanted a blog. A plain and simple blog. More often than not I read blog posts hosted by <a href="https://medium.com/">medium.com</a>. It seems like they are really dominating these days. And I understand why; the layout is so simple yet attractive and easy to read.
                
I expected to settle with a medium.com blog. However, it isn't possible to have ads in the blog posts. And I wanted that. So I looked to Google's <a href="https://blogger.com">blogger.com</a>. Customizing the layout and templates I thought I was getting there. They have some really nice features. But I couldn't make it look and feel exactly right. And it felt cumbersome to do all the adjustments to get where I wanted.

I knew I didn't want to reinvent the wheel. If this had been somewhere from 2000 to 2007 I probably would have mashed something together using PHP and MySQL. But the thought of doing that in 2017 repelled me. I didn't want any database setup, SQLs or stuff that takes time from creating the actual product.

Further on I didn't want some hosting at one of the big companies offering "free" (they tend to end up costing a few bucks) backend hosting with all the hassle of setting up a new environment and installing some SDKs that needs to be constantly updated or suddenly removes support for some version of whatever you use.

I'm no designer. So I like to use UI frameworks that ensures that I can't get it completely wrong. I really like Google's <a href="https://material.io/guidelines/">Material Design</a>. To be continued...

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
                    }
                ]
            },
            {
                title: 'Chromecast on the go',
                niceUrl: '/chromecast-on-the-go',
                category:
                {
                    title: 'Tech',
                    url: '/tech'
                },
                tags: [
                    {
                        title: 'Chromecast',
                        url: '/chromecast'
                    },
                    {
                        title: 'JavaScript',
                        url: '/javascript'
                    }
                ]
            },
            {
                title: 'The pain of releasing an app in 2017',
                niceUrl: '/the-pain-of-releasing-an-app-in-2017',
                category:
                {
                    title: 'Software development',
                    url: '/software-development'
                },
                tags: [
                    {
                        title: 'App',
                        url: '/app'
                    },
                    {
                        title: 'eSports',
                        url: '/esports'
                    }
                ]
            },
            {
                title: 'Information leak using customer\'s e-mail address',
                niceUrl: '/the-pain-of-releasing-an-app-in-2017',
                category:
                {
                    title: 'Security',
                    url: '/security'
                },
                tags: [
                    {
                        title: 'App',
                        url: '/app'
                    },
                    {
                        title: 'Chromecast',
                        url: '/chromecast'
                    },
                    {
                        title: 'JavaScript',
                        url: '/javascript'
                    }
                ]
            }
        ];
}(window.SpaBlog));
