this["Handlebars"] = this["Handlebars"] || {};
this["Handlebars"]["templates"] = this["Handlebars"]["templates"] || {};
this["Handlebars"]["templates"]["filterDropdown"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var helper;

  return "            <div class=\"search-filter-dropdown-filter\"><input class=\"form-control\" type=\"text\" placeholder=\""
    + this.escapeExpression(((helper = (helper = helpers.placeholder || (depth0 != null ? depth0.placeholder : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"placeholder","hash":{},"data":data}) : helper)))
    + "\"/></div>\n";
},"3":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "                <li data-search-text=\""
    + alias3(((helper = (helper = helpers.value || (depth0 != null ? depth0.value : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"value","hash":{},"data":data}) : helper)))
    + "\">\n                    <a href=\"#\" data-value=\""
    + alias3(((helper = (helper = helpers.value || (depth0 != null ? depth0.value : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"value","hash":{},"data":data}) : helper)))
    + "\" class=\""
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.selected : depth0),{"name":"if","hash":{},"fn":this.program(4, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\">\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.count : depth0),{"name":"if","hash":{},"fn":this.program(6, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "                        <span class=\"glyphicon glyphicon-ok checkmark\" aria-hidden=\"true\"></span>\n                        <span>"
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "</span>\n                    </a>\n                </li>\n";
},"4":function(depth0,helpers,partials,data) {
    return "selected";
},"6":function(depth0,helpers,partials,data) {
    var helper;

  return "                            <span class=\"badge\">"
    + this.escapeExpression(((helper = (helper = helpers.count || (depth0 != null ? depth0.count : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"count","hash":{},"data":data}) : helper)))
    + "</span>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n    "
    + alias3(((helper = (helper = helpers.label || (depth0 != null ? depth0.label : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"label","hash":{},"data":data}) : helper)))
    + "\n    <span class=\"caret\"></span>\n</a>\n<div class=\"dropdown-menu search-filter-dropdown pull-right\">\n    <div class=\"search-filter-dropdown-header\">\n        "
    + alias3(((helper = (helper = helpers.headerLabel || (depth0 != null ? depth0.headerLabel : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"headerLabel","hash":{},"data":data}) : helper)))
    + "\n        <button type=\"button\" class=\"close\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n    </div>\n    <div class=\"search-filter-dropdown-body\">\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.placeholder : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "        <ul>\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.items : depth0),{"name":"each","hash":{},"fn":this.program(3, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "        </ul>\n        <div class=\"no-matches hide\">No matches</div>\n    </div>\n</div>";
},"useData":true});
'use strict';

Handlebars.registerHelper('fromNow', function (string) {
    return string ? moment(string).fromNow() : '';
});

Handlebars.registerHelper('quoteIfWhitespace', function (string) {
    return (/\s/.test(string) ? '"' + string + '"' : string
    );
});

Handlebars.registerHelper('baseUrl', function () {
    return app.baseUrl;
});

var grailsplugins = {
    views: {}
};
this["Handlebars"] = this["Handlebars"] || {};
this["Handlebars"]["templates"] = this["Handlebars"]["templates"] || {};
this["Handlebars"]["templates"]["plugin"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var stack1, alias1=this.lambda, alias2=this.escapeExpression;

  return "            <span class=\"github-btn github-stargazers pull-right\" id=\"github-btn\"><a class=\"gh-btn\" id=\"gh-btn\" href=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.githubRepo : depth0)) != null ? stack1.html_url : stack1), depth0))
    + "\">\n                <i class=\"fa fa-github\"></i> <span class=\"gh-text\" id=\"gh-text\">Star</span></a><a class=\"gh-count\" id=\"gh-count\" href=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.githubRepo : depth0)) != null ? stack1.html_url : stack1), depth0))
    + "/stargazers\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.githubRepo : depth0)) != null ? stack1.stargazers_count : stack1), depth0))
    + "</a>\n            </span>\n";
},"3":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "                        <a href=\""
    + alias3(((helper = (helper = helpers.url || (depth0 != null ? depth0.url : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"url","hash":{},"data":data}) : helper)))
    + "\" target=\"_top\">"
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "</a>\n";
},"5":function(depth0,helpers,partials,data) {
    var helper;

  return "                <li>\n                    <i class=\"fa fa-code\"></i>\n                    <a href=\""
    + this.escapeExpression(((helper = (helper = helpers.vcs_url || (depth0 != null ? depth0.vcs_url : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"vcs_url","hash":{},"data":data}) : helper)))
    + "\" target=\"_top\"> Source</a>\n                </li>\n";
},"7":function(depth0,helpers,partials,data) {
    var helper;

  return "                <li>\n                    <i class=\"fa fa-bug\"></i>\n                    <a href=\""
    + this.escapeExpression(((helper = (helper = helpers.issue_tracker_url || (depth0 != null ? depth0.issue_tracker_url : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"issue_tracker_url","hash":{},"data":data}) : helper)))
    + "\" target=\"_top\"> Issues</a>\n                </li>\n";
},"9":function(depth0,helpers,partials,data) {
    var stack1;

  return "        <div class=\"plugin-labels\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.labels : depth0),{"name":"each","hash":{},"fn":this.program(10, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "        </div>\n";
},"10":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2=this.escapeExpression;

  return "                <a href=\""
    + alias2(((helper = (helper = helpers.baseUrl || (depth0 != null ? depth0.baseUrl : depth0)) != null ? helper : alias1),(typeof helper === "function" ? helper.call(depth0,{"name":"baseUrl","hash":{},"data":data}) : helper)))
    + "#q/label:"
    + alias2((helpers.quoteIfWhitespace || (depth0 && depth0.quoteIfWhitespace) || alias1).call(depth0,depth0,{"name":"quoteIfWhitespace","hash":{},"data":data}))
    + "\" class=\"searchby-label\" data-internal><span class=\"plugin-label label\">"
    + alias2(this.lambda(depth0, depth0))
    + "</span></a>\n";
},"12":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "        <div class=\"version-info\">\n            <div class=\"bintray-section clearfix\">\n                <strong>"
    + alias3(((helper = (helper = helpers.latest_version || (depth0 != null ? depth0.latest_version : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"latest_version","hash":{},"data":data}) : helper)))
    + "</strong> published "
    + alias3((helpers.fromNow || (depth0 && depth0.fromNow) || alias1).call(depth0,(depth0 != null ? depth0.latest_version_updated : depth0),{"name":"fromNow","hash":{},"data":data}))
    + "\n\n                <!--<div class=\"input-group dependency-clip pull-right\">-->\n                    <!--<input type=\"text\" class=\"form-control\" value=\""
    + alias3(((helper = (helper = helpers.dependency || (depth0 != null ? depth0.dependency : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"dependency","hash":{},"data":data}) : helper)))
    + "\" readonly>-->\n                    <!--<div class=\"input-group-addon btn clippy\" data-clipboard-text=\""
    + alias3(((helper = (helper = helpers.dependency || (depth0 != null ? depth0.dependency : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"dependency","hash":{},"data":data}) : helper)))
    + "\"><span class=\"glyphicon glyphicon-copy\" aria-hidden=\"true\"></span></div>-->\n                <!--</div>-->\n            </div>\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.dependency : depth0),{"name":"if","hash":{},"fn":this.program(13, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "        </div>\n";
},"13":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "                <div class=\"gradle-format\">\n<pre class=\"hljs lang-groovy\">\ndependencies {\n    "
    + alias3(((helper = (helper = helpers.dependencyScope || (depth0 != null ? depth0.dependencyScope : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"dependencyScope","hash":{},"data":data}) : helper)))
    + " '"
    + alias3(((helper = (helper = helpers.dependency || (depth0 != null ? depth0.dependency : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"dependency","hash":{},"data":data}) : helper)))
    + "'\n}\n</pre>\n                </div>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<!--<div class=\"nav-back\"><a class=\"btn btn-default self-link\" href=\""
    + alias3(((helper = (helper = helpers.baseUrl || (depth0 != null ? depth0.baseUrl : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"baseUrl","hash":{},"data":data}) : helper)))
    + "#\" data-internal><i class=\"fa fa-search\"></i> Search Plugins</a></div>-->\n<div class=\"plugin-main\">\n    <div>\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.githubRepo : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "        <a class=\"plugin-name\" href=\""
    + alias3(((helper = (helper = helpers.baseUrl || (depth0 != null ? depth0.baseUrl : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"baseUrl","hash":{},"data":data}) : helper)))
    + "#plugin/"
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "\" data-internal>"
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "</a>\n    </div>\n    <div class=\"attributes-bar clearfix\">\n        <ul class=\"attributes-list\">\n            <li class=\"attribute-owner\">\n                <label>Owner</label>\n                <span><a href=\""
    + alias3(((helper = (helper = helpers.baseUrl || (depth0 != null ? depth0.baseUrl : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"baseUrl","hash":{},"data":data}) : helper)))
    + "#q/owner:"
    + alias3((helpers.quoteIfWhitespace || (depth0 && depth0.quoteIfWhitespace) || alias1).call(depth0,(depth0 != null ? depth0.owner : depth0),{"name":"quoteIfWhitespace","hash":{},"data":data}))
    + "\" class=\"searchby-owner\" data-internal><span class=\"owner\">"
    + alias3(((helper = (helper = helpers.owner || (depth0 != null ? depth0.owner : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"owner","hash":{},"data":data}) : helper)))
    + "</span></a></span>\n            </li>\n            <li class=\"attribute-license\">\n                <label>License</label>\n                <span>\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.licenses : depth0),{"name":"each","hash":{},"fn":this.program(3, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "                </span>\n            </li>\n        </ul>\n        <ul class=\"links-list\">\n            <li>\n                <img src=\"src/img/bintray-black.png\">\n                <a href=\""
    + alias3(((helper = (helper = helpers.bintrayHref || (depth0 != null ? depth0.bintrayHref : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"bintrayHref","hash":{},"data":data}) : helper)))
    + "\" target=\"_top\">Package</a>\n            </li>\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.vcs_url : depth0),{"name":"if","hash":{},"fn":this.program(5, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.issue_tracker_url : depth0),{"name":"if","hash":{},"fn":this.program(7, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "        </ul>\n    </div>\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.labels : depth0),{"name":"if","hash":{},"fn":this.program(9, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    <span class=\"plugin-description\">"
    + alias3(((helper = (helper = helpers.desc || (depth0 != null ? depth0.desc : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"desc","hash":{},"data":data}) : helper)))
    + "</span>\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.latest_version : depth0),{"name":"if","hash":{},"fn":this.program(12, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\n    <div class=\"readme hide\">\n        <div class=\"readme-header\"><i class=\"fa fa-github\" aria-hidden=\"true\"></i> README</div>\n        <div class=\"readme-body\"></div>\n    </div>\n\n    <div class=\"docs-message hide\"></div>\n</div>\n";
},"useData":true});
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

grailsplugins.App = function () {
    function _class() {
        var _this = this;

        _classCallCheck(this, _class);

        this.isEmbedded = window.self !== window.top;
        this.baseUrl = 'https://grails.org/plugins.html';

        $('.resources-dropdown-mobile-toggle').click(function (e) {
            e.preventDefault();
            e.stopPropagation();
            $('.resources-dropdown-toggle').click();
        });

        $('a.self-link').attr('href', this.baseUrl + '#');

        $('body').delegate('a[data-internal]', 'click', function (e) {
            e.preventDefault();
            var href = $(e.currentTarget).attr('href');
            window.location.hash = href.substr(_this.baseUrl.length);
        });

        grailsplugins.Plugins.fetch().then(this.onPluginsFetch.bind(this));

        $('body').removeClass('hide');
    }

    _createClass(_class, [{
        key: 'route',
        value: function route() {
            var hashId = window.location.hash;

            if (hashId && hashId.indexOf('#plugin/') === 0) {
                this.showPlugin(hashId.substring('#plugin/'.length));
            } else {
                var q = hashId && hashId.indexOf('#q/') === 0 ? hashId.substring('#q/'.length) : '';
                this.showSearch(q);
            }
            ga('send', 'pageview', hashId);
        }
    }, {
        key: 'addHashChangeListener',
        value: function addHashChangeListener() {
            var _this2 = this;

            if (this.isEmbedded) {
                window.addEventListener('hashchange', function () {
                    var hash = window.location.hash ? window.location.hash : '#';
                    window.parent.postMessage({
                        type: 'hashchange',
                        hash: hash
                    }, '*');
                }, false);
                window.addEventListener('message', function (e) {
                    var hash = e.data.hash;
                    if (e.data.type === 'init') {
                        window.location.hash = hash;
                        _this2.show();
                    } else {
                        if (window.location.hash !== hash) {
                            // forward/back nav
                            history.replaceState(undefined, undefined, hash ? hash : '#');
                        }
                    }
                    _this2.route();
                }, false);
            } else {
                window.addEventListener('hashchange', function (e) {
                    e.preventDefault();
                    e.stopPropagation();
                    _this2.route();
                }, false);
            }
        }
    }, {
        key: 'onPluginsFetch',
        value: function onPluginsFetch(plugins) {
            this.addHashChangeListener();

            this.plugins = plugins;
            this.searchView = new grailsplugins.views.SearchView($('.search-section'), this.plugins);
            this.pluginView = new grailsplugins.views.PluginView($('.plugin-section'));

            if (!this.isEmbedded) {
                this.show();
                this.route();
            }
        }
    }, {
        key: 'show',
        value: function show() {
            $('.page-loading').remove();
            $('.main-content').removeClass('hide');
        }
    }, {
        key: 'showSearch',
        value: function showSearch() {
            var q = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];

            document.title = 'Grails 3 Plugins';
            $('.search-section').removeClass('hide');
            $('.plugin-section').addClass('hide');

            var scrollTop = 0;
            if (this._lastSearchScrollTop) {
                scrollTop = this._lastSearchScrollTop;
                this._lastSearchScrollTop = undefined;
            }
            $('body').scrollTop(scrollTop);

            if (this._lastSearch !== q) {
                this._lastSearch = q;
                this.searchView.search(q);
            }
        }
    }, {
        key: 'showPlugin',
        value: function showPlugin(pluginName) {
            this._lastSearchScrollTop = $('body').scrollTop();

            document.title = pluginName;
            $('.search-section').addClass('hide');
            $('.plugin-section').removeClass('hide');
            var plugin = this.plugins.findByName(pluginName);
            this.pluginView.showPlugin(plugin);
        }
    }]);

    return _class;
}();
this["Handlebars"] = this["Handlebars"] || {};
this["Handlebars"]["templates"] = this["Handlebars"]["templates"] || {};
this["Handlebars"]["templates"]["pluginDocs"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "Documentation at <a href=\""
    + alias3(((helper = (helper = helpers.website_url || (depth0 != null ? depth0.website_url : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"website_url","hash":{},"data":data}) : helper)))
    + "\" target=\"_top\">"
    + alias3(((helper = (helper = helpers.website_url || (depth0 != null ? depth0.website_url : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"website_url","hash":{},"data":data}) : helper)))
    + "</a>";
},"useData":true});
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

grailsplugins.Plugins = function () {
    _createClass(_class, null, [{
        key: 'fetch',
        value: function fetch() {
            return $.get('build/dist/data/plugins.json').then(function (data) {
                return new grailsplugins.Plugins(data);
            });
        }
    }]);

    function _class(data) {
        _classCallCheck(this, _class);

        this.labelsToIgnore = ['grails plugin', 'grails', 'plugin', 'plugins'];

        this._plugins = _.sortBy(data, function (pluginData) {
            return pluginData.name.toLowerCase();
        });
        this._plugins.forEach(this._processPlugin, this);

        this._allLabels = _.chain(this._plugins).pluck('labels').flatten().unique().sortBy(function (it) {
            return it.toLowerCase();
        }).value();
    }

    _createClass(_class, [{
        key: '_processPlugin',
        value: function _processPlugin(pluginData) {
            var _$chain;

            if (pluginData.system_ids.length) {
                pluginData.dependency = pluginData.system_ids[pluginData.system_ids.length - 1] + ':' + pluginData.latest_version;
                pluginData.dependencyScope = this._parseAttr(pluginData, 'pluginScope', 'compile');
            }
            pluginData.labels = (_$chain = _.chain(pluginData.labels)).without.apply(_$chain, _toConsumableArray(this.labelsToIgnore)).sortBy(function (it) {
                return it.toLowerCase();
            }).value();

            pluginData.licenses = pluginData.licenses.map(function (license) {
                return {
                    name: license,
                    url: 'https://opensource.org/licenses/' + license.replace(/\s/g, '-')
                };
            });

            pluginData.bintrayHref = 'https://bintray.com/' + pluginData.owner + '/' + pluginData.repo + '/' + pluginData.name;
            pluginData.bintrayRepo = pluginData.owner + '/' + pluginData.repo + '/' + pluginData.name;

            if (/(grails\.org)|(github\.com)|(grails-plugins\.org)/.test(pluginData.website_url)) {
                pluginData.website_url = undefined; // ignore these
            }
        }
    }, {
        key: '_parseAttr',
        value: function _parseAttr(pluginData, name, defaultVal) {
            var attr = _.findWhere(pluginData.attributes, { name: name });
            return attr && attr.values && attr.values[0] ? attr.values[0] : defaultVal;
        }
    }, {
        key: 'search',
        value: function search(query) {
            var matches = this._plugins;

            _.each(query.getParams(), function (value, field) {
                if (field === 'q') {
                    matches = matches.filter(function (pluginData) {
                        return pluginData.name.toLowerCase().indexOf(value.toLowerCase()) !== -1;
                    });
                } else if (field === 'label') {
                    matches = matches.filter(function (pluginData) {
                        return _.contains(pluginData.labels, value);
                    });
                } else if (field === 'owner') {
                    matches = matches.filter(function (pluginData) {
                        return pluginData.owner === value;
                    });
                }
            });

            var sort = query.getSort() || 'name';
            if (sort === 'name') {
                matches = _.sortBy(matches, function (it) {
                    return it.name.toLowerCase();
                });
            } else if (sort === 'date') {
                matches = _.sortBy(matches, function (it) {
                    return it.latest_version_updated ? new Date(it.latest_version_updated).getTime() : 0;
                }).reverse();
            } else if (sort === 'stars') {
                matches = _.sortBy(matches, function (it) {
                    return it.githubRepo ? it.githubRepo.stargazers_count : 0;
                }).reverse();
            }

            return matches;
        }
    }, {
        key: 'findByName',
        value: function findByName(name) {
            return _.findWhere(this._plugins, { name: name });
        }
    }, {
        key: 'getLabels',
        value: function getLabels() {
            return this._allLabels;
        }
    }, {
        key: 'getLabelCounts',
        value: function getLabelCounts() {
            return _.chain(this._plugins).pluck('labels').flatten().countBy().map(function (v, k) {
                return { name: k, count: v };
            }).sortBy('name').sortBy(function (it) {
                return it.count * -1;
            }).value();
        }
    }, {
        key: 'getOwnerCounts',
        value: function getOwnerCounts() {
            return _.chain(this._plugins).pluck('owner').flatten().countBy().map(function (v, k) {
                return { name: k, count: v };
            }).sortBy('name').sortBy(function (it) {
                return it.count * -1;
            }).value();
        }
    }]);

    return _class;
}();
this["Handlebars"] = this["Handlebars"] || {};
this["Handlebars"]["templates"] = this["Handlebars"]["templates"] || {};
this["Handlebars"]["templates"]["pluginNotFound"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class=\"plugin-info\">\n    <span class=\"plugin-name\">Plugin Not Found</span>\n</div>\n<div class=\"readme\">\n    <span class=\"not-found\">The plugin you are looking for was not found. Please check the name and try again.</span>\n</div>\n";
},"useData":true});
'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

grailsplugins.Query = function () {
    function _class() {
        var queryString = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];

        _classCallCheck(this, _class);

        this._parseQueryString(queryString);
    }

    _createClass(_class, [{
        key: 'toggleField',
        value: function toggleField(field, value) {
            if (field === 'sort') {
                if (this._sort === value) {
                    delete this._sort;
                } else {
                    this._sort = value;
                }
            } else {
                if (this._params[field] === value) {
                    delete this._params[field];
                } else {
                    this._params[field] = value;
                }
            }
        }
    }, {
        key: '_parseQueryString',
        value: function _parseQueryString(queryString) {
            var _this = this;

            var params = {};

            var tokens = queryString.split(/ +(?=(?:(?:[^"]*"){2})*[^"]*$)/g);

            _.chain(tokens).filter().forEach(function (token) {
                var key = undefined,
                    value = undefined;

                var match = /(.*):"?([^"]*)"?/.exec(token);
                if (match) {
                    var _match = _slicedToArray(match, 3);

                    key = _match[1];
                    value = _match[2];
                } else {
                    key = 'q';
                    value = token;
                }

                if (value) {
                    if (key === 'sort') {
                        _this._sort = value;
                    } else {
                        params[key] = value;
                    }
                }
            });

            this._params = params;
        }
    }, {
        key: 'getParams',
        value: function getParams() {
            return this._params;
        }
    }, {
        key: 'getField',
        value: function getField(field) {
            return this._params[field];
        }
    }, {
        key: 'getSort',
        value: function getSort() {
            return this._sort;
        }
    }, {
        key: 'getQueryString',
        value: function getQueryString() {
            var tokens = _.map(this._params, function (v, k) {
                v = /\s/.test(v) ? '"' + v + '"' : v;
                return k === 'q' ? v : k + ':' + v;
            });

            if (this._sort) {
                tokens.push('sort:' + this._sort);
            }

            return tokens.join(' ');
        }
    }]);

    return _class;
}();
this["Handlebars"] = this["Handlebars"] || {};
this["Handlebars"]["templates"] = this["Handlebars"]["templates"] || {};
this["Handlebars"]["templates"]["plugins"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "        <li>\n            <div>\n                <a class=\"plugin-name\" href=\""
    + alias3(((helper = (helper = helpers.baseUrl || (depth0 != null ? depth0.baseUrl : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"baseUrl","hash":{},"data":data}) : helper)))
    + "#plugin/"
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "\" data-internal>"
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "</a>\n                <span class=\"external-links\">\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.githubRepo : depth0),{"name":"if","hash":{},"fn":this.program(2, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "                    <a href=\""
    + alias3(((helper = (helper = helpers.bintrayHref || (depth0 != null ? depth0.bintrayHref : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"bintrayHref","hash":{},"data":data}) : helper)))
    + "\" title=\"Bintray package\" target=\"_top\"><img src=\"src/img/bintray-black.png\"></a>\n                </span>\n            </div>\n            <span class=\"plugin-description\">"
    + alias3(((helper = (helper = helpers.desc || (depth0 != null ? depth0.desc : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"desc","hash":{},"data":data}) : helper)))
    + "</span>\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.latest_version : depth0),{"name":"if","hash":{},"fn":this.program(4, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.labels : depth0),{"name":"if","hash":{},"fn":this.program(6, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.githubRepo : depth0),{"name":"if","hash":{},"fn":this.program(9, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "        </li>\n";
},"2":function(depth0,helpers,partials,data) {
    var stack1;

  return "                        <a href=\""
    + this.escapeExpression(this.lambda(((stack1 = (depth0 != null ? depth0.githubRepo : depth0)) != null ? stack1.html_url : stack1), depth0))
    + "\" title=\"Github repository\" target=\"_top\"><img src=\"src/img/plainicon.com-50224-svg.svg\"></a>\n";
},"4":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "                <div class=\"bintray-section\">\n                    <strong>"
    + alias3(((helper = (helper = helpers.latest_version || (depth0 != null ? depth0.latest_version : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"latest_version","hash":{},"data":data}) : helper)))
    + "</strong> published "
    + alias3((helpers.fromNow || (depth0 && depth0.fromNow) || alias1).call(depth0,(depth0 != null ? depth0.latest_version_updated : depth0),{"name":"fromNow","hash":{},"data":data}))
    + " by\n                    <a href=\""
    + alias3(((helper = (helper = helpers.baseUrl || (depth0 != null ? depth0.baseUrl : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"baseUrl","hash":{},"data":data}) : helper)))
    + "#q/owner:"
    + alias3((helpers.quoteIfWhitespace || (depth0 && depth0.quoteIfWhitespace) || alias1).call(depth0,(depth0 != null ? depth0.owner : depth0),{"name":"quoteIfWhitespace","hash":{},"data":data}))
    + "\" class=\"searchby-owner\" data-internal><span class=\"owner\">"
    + alias3(((helper = (helper = helpers.owner || (depth0 != null ? depth0.owner : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"owner","hash":{},"data":data}) : helper)))
    + "</span></a>\n                </div>\n";
},"6":function(depth0,helpers,partials,data) {
    var stack1;

  return "                <div class=\"plugin-labels\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.labels : depth0),{"name":"each","hash":{},"fn":this.program(7, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "                </div>\n";
},"7":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2=this.escapeExpression;

  return "                        <a href=\""
    + alias2(((helper = (helper = helpers.baseUrl || (depth0 != null ? depth0.baseUrl : depth0)) != null ? helper : alias1),(typeof helper === "function" ? helper.call(depth0,{"name":"baseUrl","hash":{},"data":data}) : helper)))
    + "#q/label:"
    + alias2((helpers.quoteIfWhitespace || (depth0 && depth0.quoteIfWhitespace) || alias1).call(depth0,depth0,{"name":"quoteIfWhitespace","hash":{},"data":data}))
    + "\" class=\"searchby-label\" data-internal><span class=\"plugin-label label\">"
    + alias2(this.lambda(depth0, depth0))
    + "</span></a>\n";
},"9":function(depth0,helpers,partials,data) {
    var stack1, alias1=this.lambda, alias2=this.escapeExpression;

  return "                <div class=\"github-section\">\n                    <span class=\"github-btn github-stargazers\" id=\"github-btn\"><a class=\"gh-btn\" id=\"gh-btn\" href=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.githubRepo : depth0)) != null ? stack1.html_url : stack1), depth0))
    + "\">\n                        <i class=\"fa fa-github\"></i> <span class=\"gh-text\" id=\"gh-text\">Star</span></a><a class=\"gh-count\" id=\"gh-count\" href=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.githubRepo : depth0)) != null ? stack1.html_url : stack1), depth0))
    + "/stargazers\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.githubRepo : depth0)) != null ? stack1.stargazers_count : stack1), depth0))
    + "</a>\n                    </span>\n                </div>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper;

  return "<div class=\"search-count\">\n    <span>"
    + this.escapeExpression(((helper = (helper = helpers.searchCount || (depth0 != null ? depth0.searchCount : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"searchCount","hash":{},"data":data}) : helper)))
    + "</span>\n    <ul class=\"search-options pull-right\">\n        <li class=\"dropdown labels\"></li>\n        <li class=\"dropdown owners\"></li>\n        <li class=\"dropdown sort\"></li>\n    </ul>\n</div>\n<ul class=\"plugins-list\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.plugins : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "</ul>\n";
},"useData":true});
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

grailsplugins.views.FilterDropdownView = function () {
    function _class(options) {
        var _this = this;

        _classCallCheck(this, _class);

        this.options = options;
        this.$el = options.$el;
        this.$el.html(Handlebars.templates['filterDropdown'](options));

        this.$el.find('.search-filter-dropdown-body a').click(this._handleFilterClick.bind(this));

        this.$el.find('.search-filter-dropdown-filter input').keyup(function (e) {
            var $el = $(e.currentTarget);
            var val = $el.val();
            var $ul = $el.closest('.search-filter-dropdown-body').find('ul');
            $ul.children().each(function () {
                var $li = $(this);
                var match = !val || $li.data('searchText').toLowerCase().indexOf(val) !== -1;
                $li.toggleClass('hide', !match);
            });
            _this.$el.find('.no-matches').toggleClass('hide', !!$ul.find('li:not(.hide)').length);
        });
    }

    _createClass(_class, [{
        key: '_handleFilterClick',
        value: function _handleFilterClick(e) {
            e.preventDefault();
            this.options.onClick(this.options.field, $(e.currentTarget).data('value'));
        }
    }]);

    return _class;
}();
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

grailsplugins.views.PluginView = function () {
    function _class($el) {
        _classCallCheck(this, _class);

        this.$el = $el;
    }

    _createClass(_class, [{
        key: 'showPlugin',
        value: function showPlugin(plugin) {
            var _this = this;

            this.clipboard && this.clipboard.destroy();

            if (!plugin) {
                this.$el.html(Handlebars.templates['pluginNotFound']);
                return;
            }

            this.$el.html(Handlebars.templates['plugin'](plugin));
            if (plugin.website_url) {
                this.$el.find('.docs-message').removeClass('hide').html(Handlebars.templates['pluginDocs'](plugin));
            } else if (plugin.githubRepo) {
                $.ajax({
                    url: 'https://api.github.com/repos/' + plugin.githubRepo.full_name + '/readme',
                    headers: { 'Accept': 'application/vnd.github.VERSION.html' },
                    type: 'GET'
                }).done(function (html) {
                    _this.$el.find('.readme').removeClass('hide');
                    _this.$el.find('.readme-body').html(html);
                    _this.$el.find('.readme-body a').attr('target', '_top');

                    var regex = new RegExp('^(?:[a-z]+:)?//', 'i');
                    _this.$el.find('.readme-body img').each(function (i, e) {
                        var imgSrc = e.getAttribute('src');
                        if (!regex.test(imgSrc)) {
                            e.setAttribute('src', 'https://github.com/' + plugin.githubRepo.full_name + '/raw/master/' + imgSrc);
                        }
                    });
                }).fail(function (jqXhr) {
                    if (jqXhr.status === 404) {
                        _this.showDocumentationNotAvailable();
                    }
                });
            } else {
                this.showDocumentationNotAvailable();
            }

            if (plugin.dependency) {
                var $copy = this.$el.find('.clippy');

                if ($copy.length) {
                    this.clipboard = new Clipboard($copy[0]);

                    $copy.tooltip({
                        title: 'Copied!',
                        trigger: 'manual'
                    });

                    $copy.click(function (e) {
                        e.preventDefault();
                        $copy.tooltip('show');
                        _.delay(function () {
                            return $copy.tooltip('hide');
                        }, 2000);
                    });
                }

                this.$el.find('.hljs').each(function (i, block) {
                    hljs.highlightBlock(block);
                });
            }
        }
    }, {
        key: 'showDocumentationNotAvailable',
        value: function showDocumentationNotAvailable() {
            this.$el.find('.docs-message').removeClass('hide').html('<span class="not-found">Documentation not available.</span>');
        }
    }]);

    return _class;
}();
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

grailsplugins.views.SearchView = function () {
    function _class($el, plugins) {
        var _this = this;

        _classCallCheck(this, _class);

        this.$el = $el;
        this.plugins = plugins;

        this.query = new grailsplugins.Query();

        $el.find('.search-input').keyup(this.doSearch.bind(this));
        $el.find('.search-form').submit(function (e) {
            e.preventDefault();
            var val = _this.$el.find('.search-input').val();
            window.location.href = '#q/' + val;
        });
        $el.find('.clear-search').click(function (event) {
            event.preventDefault();
            if (window.location.hash) {
                window.location.href = '#';
            } else {
                _this.search('');
            }
        });
    }

    _createClass(_class, [{
        key: 'search',
        value: function search(value) {
            var decoded = decodeURIComponent(value.replace(/\+/g, '%20'));
            this.$el.find('.search-input').val(decoded);
            this.doSearch();
        }
    }, {
        key: 'doSearch',
        value: function doSearch() {
            var val = this.$el.find('.search-input').val();
            var query = new grailsplugins.Query(val);
            this.$el.find('.clear-search').toggleClass('hide', !val);

            var matches = this.plugins.search(query);

            var searchCount = undefined;
            if (!val) {
                searchCount = 'Showing all ' + matches.length + ' plugins';
            } else if (!matches.length) {
                searchCount = 'No matching plugins';
            } else {
                searchCount = 'Showing ' + matches.length + ' matching ' + (matches.length === 1 ? 'plugin' : 'plugins');
            }

            this.$el.find('.search-results').html(Handlebars.templates['plugins']({
                plugins: matches,
                searchCount: searchCount
            }));

            var label = query.getField('label');
            new grailsplugins.views.FilterDropdownView({
                $el: this.$el.find('.dropdown.labels'),
                label: 'Label',
                headerLabel: 'Filter by label',
                placeholder: 'Filter labels',
                items: this.plugins.getLabelCounts().map(function (it) {
                    return {
                        name: it.name,
                        value: it.name,
                        count: it.count,
                        selected: label === it.name
                    };
                }),
                field: 'label',
                onClick: this.onFilterClick.bind(this)
            });

            var owner = query.getField('owner');
            new grailsplugins.views.FilterDropdownView({
                $el: this.$el.find('.dropdown.owners'),
                label: 'Owner',
                headerLabel: 'Filter by owner',
                placeholder: 'Filter owners',
                items: this.plugins.getOwnerCounts().map(function (it) {
                    return {
                        name: it.name,
                        value: it.name,
                        count: it.count,
                        selected: owner === it.name
                    };
                }),
                field: 'owner',
                onClick: this.onFilterClick.bind(this)
            });

            var sort = query.getSort() || 'name';
            new grailsplugins.views.FilterDropdownView({
                $el: this.$el.find('.dropdown.sort'),
                label: 'Sort',
                headerLabel: 'Sort by',
                items: [{ name: 'Name', value: 'name', selected: sort === 'name' }, { name: 'Date', value: 'date', selected: sort === 'date' }, { name: 'Stars', value: 'stars', selected: sort === 'stars' }],
                field: 'sort',
                onClick: this.onFilterClick.bind(this)
            });
        }
    }, {
        key: 'onFilterClick',
        value: function onFilterClick(field, value) {
            var val = this.$el.find('.search-input').val();
            var query = new grailsplugins.Query(val);
            query.toggleField(field, value);
            window.location.href = '#q/' + encodeURIComponent(query.getQueryString()).replace(/%20/g, '+');
        }
    }]);

    return _class;
}();