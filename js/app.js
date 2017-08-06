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
        self.isTransitioning = ko.observable(true);
        self.pageNotFound = ko.observable(false);
        self.changingUrl = false;
        processCategoriesAndTags();

        window.onpopstate = function (event) {
            console.log('***');
            console.log("onpopstate() location: " + document.location + ", state: " + JSON.stringify(event.state));
            console.log(event);
            console.log('*******');
            if (!self.changingUrl) {
                self.changingUrl = true;
                self.goToPageBasedOnUrl();
                self.changingUrl = false;
            }
        };

        self.shouldDisplayFrontpage = ko.computed(function () {
            console.log('shouldDisplayFrontpage: return ' + !this.post());
            return !this.isTransitioning() && !this.post() && !this.category() && !this.tag() && !this.pageNotFound();
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
        self.shouldDisplayPageNotFound = ko.computed(function () {
            console.log('shouldDisplayPageNotFound()');
            return !this.isTransitioning() && this.pageNotFound();
        }, self);

        self.goToPageBasedOnUrl = function () {
            var posts = self.posts;
            var tags = self.tags;
            var categories = self.categories;
            var path = location.protocol === 'file:' ? location.hash : location.pathname
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
                        console.log(tag);
                        if (!foundTag && tag.link === tagUrl) {
                            foundTag = true;
                            self.goToTag({ title: tag.text, url: '/' + parts[1] });
                        }
                    });
                    if (!foundTag) {
                        self.goToNotFoundPage();
                    }
                } else {
                    self.goToNotFoundPage();
                }
            } else if (parts.length === 3) { // Post
                var niceUrl = '/' + path;
                var foundPost = false;
                posts.forEach(function (post, index) {
                    console.log(post);
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
            if (self.changeUrl(null, 'My blog', '/')) {
                self.post(null);
                self.tag(null);
                self.category(null);
                self.pageNotFound(false);
                self.isTransitioning(false);
                console.log($('#tag-cloud'));
                $('#tag-cloud').jQCloud(self.tags, {
                    autoResize: true,
                    delay: 350,
                    colors: ['#311B92', '#4527A01', '#512DA8', '#5E35B1', '#673AB7', '#7E57C2', '#9575CD', '#B39DDB', '#D1C4E9'],//, '#EDE7F6'],
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
                    self.pageNotFound(false);
                    self.isTransitioning(false);
                    $('.materialboxed').materialbox();
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
                    self.pageNotFound(false);
                    self.isTransitioning(false);
                }, 250);
            }
        }
        self.goToNotFoundPage = function () {
            console.log('goToNotFoundPage()');
            self.pageNotFound(true);
            self.post(null);
            self.tag(null);
            self.category(null);
            self.isTransitioning(false);
        }
        self.changeUrl = function (state, title, url) {
            if (!url.startsWith(window.SpaBlog.config.blogUrlPrefix)) {
                url = window.SpaBlog.config.blogUrlPrefix + url;
            }
            console.log('changeUrl()', url);
            if (url === location.pathname) {
                return true;
            }
            try {
                history.pushState(state, title, url)
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

        function processCategoriesAndTags() {
            self.posts.forEach(function (post) {
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
