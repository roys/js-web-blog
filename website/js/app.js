window.SpaBlog = window.SpaBlog || {}; // Our namespace

(function (SpaBlog) {
    function AppViewModel() {
        var self = this;
        console.log(self.constructor.name + '()');

        self.posts = SpaBlog.posts;
        self.categories = [];
        self.tags = [];
        self.post = ko.observable();
        self.category = ko.observable();
        self.tag = ko.observable();
        self.yearMonth = ko.observable();
        self.isTransitioning = ko.observable(true);
        self.pageNotFound = ko.observable(false);
        self.numOfLatestPosts = ko.observable(4);
        self.changingUrl = false;
        self.commentsTimer;
        processCategoriesAndTags();

        window.onpopstate = function (event) {
            console.log("onpopstate() location: " + document.location + ", state: " + JSON.stringify(event.state));
            console.log(event);
            if (!self.changingUrl) {
                self.changingUrl = true;
                self.goToPageBasedOnUrl();
                self.changingUrl = false;
            }
        };

        self.loadAds = function () {
            setTimeout(function () {
                [].forEach.call(document.querySelectorAll('.adsbygoogle'), function () {
                    (adsbygoogle = window.adsbygoogle || []).push({});
                });
            }, 250);
        }
        self.loadComments = function (title, url, identifier) {
            if (self.commentsTimer) {
                clearTimeout(self.commentsTimer);
            }
            self.commentsTimer = setTimeout(function () {
                DISQUS.reset({
                    reload: true,
                    config: function () {
                        this.page.url = window.location.href;
                        this.page.identifier = identifier;
                        this.page.title = title;
                        this.language = 'en';
                    }
                });
            }, 200);
        }
        self.shouldDisplayFrontpage = ko.computed(function () {
            console.log('shouldDisplayFrontpage: return ' + !this.post());
            return !this.isTransitioning() && !this.post() && !this.category() && !this.tag() && !this.yearMonth() && !this.pageNotFound();
        }, self);
        self.shouldDisplayArticle = ko.computed(function () {
            console.log('shouldDisplayArticle()');
            return !this.isTransitioning() && this.post();
        }, self);
        self.shouldDisplayCategory = ko.computed(function () {
            console.log('shouldDisplayCategory()');
            return !this.isTransitioning() && this.category();
        }, self);
        self.shouldDisplayTag = ko.computed(function () {
            console.log('shouldDisplayTag()');
            return !this.isTransitioning() && this.tag();
        }, self);
        self.shouldDisplayYearMonth = ko.computed(function () {
            console.log('shouldDisplayYearMonth()');
            return !this.isTransitioning() && this.yearMonth();
        }, self);
        self.shouldDisplayPageNotFound = ko.computed(function () {
            console.log('shouldDisplayPageNotFound()');
            return !this.isTransitioning() && this.pageNotFound();
        }, self);

        self.goToPageBasedOnUrl = function () {
            var posts = self.posts;
            var tags = self.tags;
            var categories = self.categories;
            var path = location.protocol === 'file:' ? location.hash.substr(1) : location.pathname
            var index = path.indexOf(window.SpaBlog.config.blogUrlPrefix);
            if (index !== -1) {
                path = path.substr(index + window.SpaBlog.config.blogUrlPrefix.length);
            }
            if (path.startsWith('/')) {
                path = path.substr(1);
            }
            if (path.endsWith('/')) {
                path = path.substr(0, path.length - 1);
            }
            //alert(path);
            var parts = path.split('/');
            console.log(parts);
            if (path.length === 0) {
                self.goToFrontpage();
            } else if (parts.length === 1) {
                if(isInt(parts[0]) && parts[0] >= 2017) {
                    self.goToYearMonth(parts[0], null);
                }else{
                    self.goToNotFoundPage();
                }
            } else if (parts.length === 2) {
                if (parts[0] === 'category') {
                    var categoryUrl = '/' + parts[1];
                    var foundCategory = false;
                    categories.forEach(function (category, index) {
                        console.log(category);
                        if (!foundCategory && category.url === categoryUrl) {
                            foundCategory = true;
                            self.goToCategory(category);
                        }
                    });
                    if (!foundCategory) {
                        self.goToNotFoundPage();
                    }
                } else if (parts[0] === 'tag') {
                    var tagUrl = window.SpaBlog.config.blogUrlPrefix + '/tag/' + parts[1];
                    console.log('tagUrl:' + tagUrl);
                    var foundTag = false;
                    tags.forEach(function (tag, index) {
                        if (!foundTag && tag.link === tagUrl) {
                            console.log(tag);
                            foundTag = true;
                            self.goToTag({ title: tag.text, url: '/' + parts[1] });
                        }
                    });
                    if (!foundTag) {
                        self.goToNotFoundPage();
                    }
                } else if(isInt(parts[0]) && isInt(parts[1]) && parts[0] >= 2017 && parts[1] >= 1 && parts[1] <= 12 && parts[1].length == 2) {
                    self.goToYearMonth(parts[0], parts[1]);
                } else {
                    self.goToNotFoundPage();
                }
            } else if (parts.length === 3) { // Post
                var niceUrl = '/' + path;
                var foundPost = false;
                posts.forEach(function (post, index) {
                    //console.log(post);
                    if (!foundPost && post.niceUrl === niceUrl) {
                        foundPost = true;
                        self.goToPost(post);
                    }
                });
                if (!foundPost) {
                    self.goToNotFoundPage();
                }
            } else {
                self.goToNotFoundPage();
            }
        }

        self.goToFrontpage = function () {
            if (self.changeUrl(null, 'Roy Solberg - blog.roysolberg.com', '/')) {
                self.numOfLatestPosts(4);
                self.post(null);
                self.tag(null);
                self.category(null);
                self.yearMonth(null);
                self.pageNotFound(false);
                self.isTransitioning(false);
                $('#tag-cloud').jQCloud(self.tags, {
                    autoResize: true,
                    delay: 350,
                    colors: ['#01579B', '#0277BD', '#0288D1', '#039BE5', '#03A9F4', '#29B6F6', '#4FC3F7', '#81D4FA', '#B3E5FC'],//, '#E1F5FE'],
                    fontSize: ['36px', '33px', '30px', '27px', '24px', '21px', '18px', '15px', '12px']
                });
            }
        }
        self.goToPost = function (post) {
            if (self.changeUrl(null, post.title, post.niceUrl)) {
                self.isTransitioning(true);
                setTimeout(function () {
                    self.post(post);
                    self.tag(null);
                    self.category(null);
                    self.yearMonth(null);
                    self.pageNotFound(false);
                    self.isTransitioning(false);
                    setTimeout(function () {
                        $('.materialboxed').materialbox();
                        PR.prettyPrint();
                    }, 250);
                    self.loadAds();
                    self.loadComments(post.title, post.niceUrl, post.commentsIdentifier ? post.commentsIdentifier : post.niceUrl);
                }, 250);
            }
        }
        self.goToCategory = function (category) {
            if (self.changeUrl(null, category.title, '/category' + category.url)) {
                self.isTransitioning(true);
                setTimeout(function () {
                    self.post(null);
                    self.tag(null);
                    self.category(category);
                    self.pageNotFound(false);
                    self.isTransitioning(false);
                    self.loadAds();
                }, 250);
            }
        }
        self.goToTag = function (tag) {
            console.log(tag);
            if (self.changeUrl(null, tag.title, '/tag' + tag.url)) {
                self.isTransitioning(true);
                setTimeout(function () {
                    self.post(null);
                    self.tag(tag);
                    self.category(null);
                    self.yearMonth(null);
                    self.pageNotFound(false);
                    self.isTransitioning(false);
                    self.loadAds();
                }, 250);
            }
        }
        self.goToYearMonth = function (year, month) {
            var title = year;
            var url = year;
            if (month != null){
                title = new Date(year + '-' + month + '-01').toLocaleString('en-US', { year: 'numeric', month: 'long' });
                url += '/' + month;
            }
            if (self.changeUrl(null, title, url)) {
                self.isTransitioning(true);
                setTimeout(function () {
                    self.post(null);
                    self.tag(null);
                    self.category(null);
                    self.yearMonth({title: title, url: '/' + url});
                    self.pageNotFound(false);
                    self.isTransitioning(false);
                    self.loadAds();
                }, 250);
            }
        }
        self.goToNotFoundPage = function () {
            console.log('goToNotFoundPage()');
            self.pageNotFound(true);
            self.post(null);
            self.tag(null);
            self.category(null);
            self.yearMonth(null);
            self.isTransitioning(false);
        }
        self.changeUrl = function (state, title, url) {
            if (!url.startsWith(window.SpaBlog.config.blogUrlPrefix)) {
                url = window.SpaBlog.config.blogUrlPrefix + url;
            }
            console.log('changeUrl()', url, title);
            var documentTitle = title + ' - ' + location.host
            document.title = documentTitle;
            var ogTitleJqEl = $('meta[property="og:title"]');
            if (ogTitleJqEl.length > 0) {
                ogTitleJqEl.attr('content', documentTitle);
            } else {
                $('head').append('<meta property="og:title" content="' + documentTitle + '"/>');
            }
            if (url === location.pathname) {
                return true;
            }
            try {
                history.pushState(state, documentTitle, url);
                // If push state throws an exception the page view will automatically be logged on next page load
                ga('set', {
                    page: url,
                    title: title
                });
                ga('send', 'pageview');
                return true;
            } catch (e) {
                if (location.protocol !== 'file:') {
                    console.error(e);
                    location.href = url;
                    return false;
                } else {
                    location.href = '#' + url;
                    return true;
                }
            }
        }

        function isInt(value) {
            return !isNaN(value) && (function(x) { return (x | 0) === x; })(parseFloat(value));
        }

        function processCategoriesAndTags() {
            self.posts.forEach(function (post) {
                if (post.published) {
                    if (post.category) {
                        self.categories.forEach(function (category, index) {
                            if (post.category.title === category.title) {
                                self.categories.splice(index, 1);
                            }
                        });
                        self.categories.push(post.category);
                    }
                    if (post.tags) {
                        post.tags.forEach(function (postTag, index) {
                            var foundTag = false;
                            self.tags.forEach(function (existingTag, index) {
                                if (!foundTag && postTag.title === existingTag.text) {
                                    existingTag.weight = existingTag.weight + 1;
                                    foundTag = true;
                                }
                            });
                            if (!foundTag) {
                                self.tags.push({
                                    text: postTag.title, handlers: {
                                        click: function () {
                                            self.goToTag(postTag);
                                            return false;
                                        }
                                    }, weight: 1, link: window.SpaBlog.config.blogUrlPrefix + '/tag' + postTag.url
                                });
                            }
                        });
                    }
                }
            }, this);
            self.categories.sort(function (a, b) {
                if (a.title < b.title)
                    return -1;
                if (a.title > b.title)
                    return 1;
                return 0;
            });
        }
    }

    function Router() {
        var self = this;
    }

    SpaBlog.AppViewModel = AppViewModel;
    SpaBlog.Router = Router;
}(window.SpaBlog));

if (!String.prototype.startsWith) {
    String.prototype.startsWith = function (searchString, position) {
        position = position || 0;
        return this.indexOf(searchString, position) === position;
    };
}

if (!String.prototype.endsWith) {
    String.prototype.endsWith = function (searchStr, Position) {
        // This works much better than >= because
        // it compensates for NaN:
        if (!(Position < this.length))
            Position = this.length;
        else
            Position |= 0; // round position
        return this.substr(Position - searchStr.length,
            searchStr.length) === searchStr;
    };
}
