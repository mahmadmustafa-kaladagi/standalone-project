!(function (e) {
    var t = {};
    function n(i) {
        if (t[i])
            return t[i].exports;
        var o = (t[i] = {
            i: i,
            l: !1,
            exports: {}
        });
        return e[i].call(o.exports, o, o.exports, n),
            (o.l = !0),
            o.exports;
    }
    (n.m = e),
        (n.c = t),
        (n.d = function (e, t, i) {
            n.o(e, t) || Object.defineProperty(e, t, {
                enumerable: !0,
                get: i
            });
        }
        ),
        (n.r = function (e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }),
                Object.defineProperty(e, "__esModule", {
                    value: !0
                });
        }
        ),
        (n.t = function (e, t) {
            if ((1 & t && (e = n(e)),
                8 & t))
                return e;
            if (4 & t && "object" == typeof e && e && e.__esModule)
                return e;
            var i = Object.create(null);
            if ((n.r(i),
                Object.defineProperty(i, "default", {
                    enumerable: !0,
                    value: e
                }),
                2 & t && "string" != typeof e))
                for (var o in e)
                    n.d(i, o, function (t) {
                        return e[t];
                    }
                        .bind(null, o));
            return i;
        }
        ),
        (n.n = function (e) {
            var t = e && e.__esModule ? function () {
                return e.default;
            }
                : function () {
                    return e;
                }
                ;
            return n.d(t, "a", t),
                t;
        }
        ),
        (n.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t);
        }
        ),
        (n.p = "/Users/andrejponomarenko/Projects/kit.lazy/prod/"),
        n((n.s = 0));
}
)([function (e, t, n) {
    "use strict";
    n(1),
        document.kit || (document.kit = {}),
        window.kit || (window.kit = document.kit);
    var i = function e() {
        var t = this;
        !(function (e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
        }
        )(this, e),
            (this.serve = function () {
                !1 === t.active && ((t.active = !0),
                    setTimeout(function () {
                        for (var e = t.toBeLoad, n = 0; n < e.length; n++) {
                            var i = e[n]
                                , a = i.getBoundingClientRect();
                            if (a.top <= window.innerHeight && a.bottom >= 0 && "none" !== getComputedStyle(i).display && !i.lazyLoaded) {
                                if ("IMG" === i.tagName) {
                                    if (!i.dataset.src)
                                        throw new Error("Replaceable image should contain data-src attribute, with link to another image");
                                    (i.src = i.dataset.src),
                                        i.kitAddClass(t.success),
                                        (i.lazyLoaded = !0);
                                } else
                                    i.kitAddClass(t.success),
                                        (i.lazyLoaded = !0);
                                i.kitRemoveClass(t.searchClass),
                                    t.onReplace && t.onReplace(i),
                                    (t.loaded = t.loaded.concat(e.splice(n, 1))),
                                    n--,
                                    0 === t.toBeLoad.length && o(!1);
                            }
                        }
                        t.active = !1;
                    }, t.delay));
            }
            ),
            (this.load = function () {
                var e = [].slice.call(document.querySelectorAll("." + t.searchClass));
                (t.toBeLoad = t.toBeLoad.concat(e)),
                    t.toBeLoad.length > 0 && o();
            }
            ),
            (this.delay = 0),
            (this.active = !1),
            (this.success = "loaded"),
            (this.searchClass = "kit-lazy"),
            (this.onReplace = !1),
            (this.toBeLoad = [].slice.call(document.querySelectorAll("." + this.searchClass))),
            (this.loaded = []);
    };
    function o() {
        var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        kit.lazy.serve(),
            e ? (document.addEventListener("scroll", kit.lazy.serve),
                window.addEventListener("resize", kit.lazy.serve),
                window.addEventListener("orientationchange", kit.lazy.serve)) : (document.removeEventListener("scroll", kit.lazy.serve),
                    window.removeEventListener("resize", kit.lazy.serve),
                    window.removeEventListener("orientationchange", kit.lazy.serve));
    }
    kit.createLazy = function (e) {
        kit.lazy ? (e && Object.assign(kit.lazy, e),
            kit.lazy.load()) : ((kit.lazy = e ? Object.assign(new i(), e) : new i()),
                o());
    };
}
    , function (e, t, n) {
        "use strict";
        (Element.prototype.kitAddClass = function (e) {
            return this.kitHasClass(e) || (this.className += " " + e),
                this;
        }
        ),
            (Element.prototype.kitRemoveClass = function (e) {
                return (this.kitHasClass(e) && (this.className = this.className.replace(new RegExp("[\\s]{0,1}\\b" + e + "\\b", "g"), "kit-lazy")),
                    this);
            }
            ),
            (Element.prototype.kitHasClass = function (e) {
                return this.className.indexOf(e) >= 0;
            }
            );
    }
]);
//invoking the function

// if you are calling like this (declare let lazyMustafa: any;) in component no need to add the
// export keyword infront of obj directly you can access it in component
const lazyMustafa = {
    getLazy: kit.createLazy
}

// this is code i have made some changes in css, kitAddClass etc,
// debug the code and understand it will work
// code converted to single line using ctrl+shift+p and type join lines and ENTER

// perfect example
// files   lazy-images.html and kit.lazy.js
