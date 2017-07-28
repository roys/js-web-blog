window.SpaBlog = window.SpaBlog || {}; // Our namespace

(function (SpaBlog) {
    SpaBlog.posts =
        [
            {
                title: 'Building a real SPA blog',
                date: '2017-07-27 22:00',
                summary: 'This blog is a real single-page application with no backend or database. It\'s refreshingly easy to work with.',
                niceUrl: '/2017/07/building-a-real-spa-blog',
                text: `I wanted a blog. A plain and simple blog. More often than not I read blog posts hosted by <a href="https://medium.com/">medium.com</a>. It seems like they are really dominating these days. And I understand why; the layout is so simple yet attractive and easy to read.
                
I expected to settle with a medium.com blog. However, it isn't possible to have ads in the blog posts. And I wanted that. So I looked to Google's <a href="https://blogger.com">blogger.com</a>. Customizing the layout and templates I thought I was getting there. But I couldn't make it look and feel exactly right. And it felt cumbersome to do all the adjustments to get where I wanted.

I knew I didn't want to reinvent the wheel. If this has been somewhere from 2000 to 2007 I probably would have mashed something together using PHP and MySQL. But the thought of doing that in 2017 repelled me. I didn't want any database setup, SQLs or stuff that takes time from creating the actual product.`,
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
                    }
                ]
            }
        ];
}(window.SpaBlog));
