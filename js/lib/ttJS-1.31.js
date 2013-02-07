(function() {
    var v = 0,
    q = [],
    o = {},
    s = {},
    A = {
        "<": "lt",
        ">": "gt",
        "&": "amp",
        '"': "quot",
        "'": "#39"
    },
    p = /[<>&\"\']/g,
    z,
    y = window.setTimeout,
    x = {},
    w;
    function t() {
        this.returnValue = false;
    }
    function r() {
        this.cancelBubble = true;
    } 

    (function(e) {
        var d = e.split(/,/),
        c,
        a,
        b;
        for (c = 0; c < d.length; c += 2) {
            b = d[c + 1].split(/ /);
            for (a = 0; a < b.length; a++) {
                s[b[a]] = d[c];
            }
        }
    })("application/msword,doc dot,application/pdf,pdf,application/pgp-signature,pgp,application/postscript,ps ai eps,application/rtf,rtf,application/vnd.ms-excel,xls xlb,application/vnd.ms-powerpoint,ppt pps pot,application/zip,zip,application/x-shockwave-flash,swf swfl,application/vnd.openxmlformats-officedocument.wordprocessingml.document,docx,application/vnd.openxmlformats-officedocument.wordprocessingml.template,dotx,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,xlsx,application/vnd.openxmlformats-officedocument.presentationml.presentation,pptx,application/vnd.openxmlformats-officedocument.presentationml.template,potx,application/vnd.openxmlformats-officedocument.presentationml.slideshow,ppsx,application/x-javascript,js,application/json,json,audio/mpeg,mpga mpega mp2 mp3,audio/x-wav,wav,audio/mp4,m4a,image/bmp,bmp,image/gif,gif,image/jpeg,jpeg jpg jpe,image/photoshop,psd,image/png,png,image/svg+xml,svg svgz,image/tiff,tiff tif,text/plain,asc txt text diff log,text/html,htm html xhtml,text/css,css,text/csv,csv,text/rtf,rtf,video/mpeg,mpeg mpg mpe,video/quicktime,qt mov,video/mp4,mp4,video/x-m4v,m4v,video/x-flv,flv,video/x-ms-wmv,wmv,video/avi,avi,video/webm,webm,video/vnd.rn-realvideo,rv,application/vnd.oasis.opendocument.formula-template,otf,application/octet-stream,exe");
    
    var u = {
        VERSION: "1.5.4",
        STOPPED: 1,
        STARTED: 2,
        QUEUED: 1,
        UPLOADING: 2,
        FAILED: 4,
        DONE: 5,
        GENERIC_ERROR: -100,
        HTTP_ERROR: -200,
        IO_ERROR: -300,
        SECURITY_ERROR: -400,
        INIT_ERROR: -500,
        FILE_SIZE_ERROR: -600,
        FILE_EXTENSION_ERROR: -601,
        IMAGE_FORMAT_ERROR: -700,
        IMAGE_MEMORY_ERROR: -701,
        IMAGE_DIMENSIONS_ERROR: -702,
        mimeTypes: s,
        ua: (function() {
            var b = navigator,
            c = b.userAgent,
            a = b.vendor,
            e,
            f,
            d;
            e = /WebKit/.test(c);
            d = e && a.indexOf("Apple") !== -1;
            f = window.opera && window.opera.buildNumber;
            return {
                windows: navigator.platform.indexOf("Win") !== -1,
                ie: !e && !f && (/MSIE/gi).test(c) && (/Explorer/gi).test(b.appName),
                webkit: e,
                gecko: !e && /Gecko/.test(c),
                safari: d,
                opera: !!f
            };
        } ()),
        typeOf: function(a) {
            return ({}).toString.call(a).match(/\s([a-z|A-Z]+)/)[1].toLowerCase();
        },
        extend: function(a) {
            u.each(arguments, function(c, b) {
                if (b > 0) {
                    u.each(c, function(d, e) {
                        a[e] = d;
                    });
                }
            });
            return a;
        },
        cleanName: function(c) {
            var b,
            a;
            a = [/[\300-\306]/g, "A", /[\340-\346]/g, "a", /\307/g, "C", /\347/g, "c", /[\310-\313]/g, "E", /[\350-\353]/g, "e", /[\314-\317]/g, "I", /[\354-\357]/g, "i", /\321/g, "N", /\361/g, "n", /[\322-\330]/g, "O", /[\362-\370]/g, "o", /[\331-\334]/g, "U", /[\371-\374]/g, "u"];
            for (b = 0; b < a.length; b += 2) {
                c = c.replace(a[b], a[b + 1]);
            }
            c = c.replace(/\s+/g, "_");
            c = c.replace(/[^a-z0-9_\-\.]+/gi, "");
            return c;
        },
        addRuntime: function(b, a) {
            a.name = b;
            q[b] = a;
            q.push(a);
            return a;
        },
        guid: function() {
            var b = new Date().getTime().toString(32),
            a;
            for (a = 0; a < 5; a++) {
                b += Math.floor(Math.random() * 65535).toString(32);
            }
            return (u.guidPrefix || "p") + b + (v++).toString(32);
        },
        buildUrl: function(b, c) {
            var a = "";
            u.each(c, function(d, e) {
                a += (a ? "&": "") + encodeURIComponent(e) + "=" + encodeURIComponent(d);
            });
            if (a) {
                b += (b.indexOf("?") > 0 ? "&": "?") + a;
            }
            return b;
        },
        each: function(b, a) {
            var c,
            d,
            e;
            if (b) {
                c = b.length;
                if (c === z) {
                    for (d in b) {
                        if (b.hasOwnProperty(d)) {
                            if (a(b[d], d) === false) {
                                return;
                            }
                        }
                    }
                } else {
                    for (e = 0; e < c; e++) {
                        if (a(b[e], e) === false) {
                            return;
                        }
                    }
                }
            }
        },
        formatSize: function(a) {
            if (a === z || /\D/.test(a)) {
                return u.translate("N/A");
            }
            if (a > 1073741824) {
                return Math.round(a / 1073741824, 1) + " GB";
            }
            if (a > 1048576) {
                return Math.round(a / 1048576, 1) + " MB";
            }
            if (a > 1024) {
                return Math.round(a / 1024, 1) + " KB";
            }
            return a + " b";
        },
        getPos: function(c, h) {
            var g = 0,
            j = 0,
            e,
            f = document,
            b,
            a;
            c = c;
            h = h || f.body;
            function d(n) {
                var k,
                E,
                m = 0,
                l = 0;
                if (n) {
                    E = n.getBoundingClientRect();
                    k = f.compatMode === "CSS1Compat" ? f.documentElement: f.body;
                    m = E.left + k.scrollLeft;
                    l = E.top + k.scrollTop;
                }
                return {
                    x: m,
                    y: l
                };
            }
            if (c && c.getBoundingClientRect && ((navigator.userAgent.indexOf("MSIE") > 0) && (f.documentMode < 8))) {
                b = d(c);
                a = d(h);
                return {
                    x: b.x - a.x,
                    y: b.y - a.y
                };
            }
            e = c;
            while (e && e != h && e.nodeType) {
                g += e.offsetLeft || 0;
                j += e.offsetTop || 0;
                e = e.offsetParent;
            }
            e = c.parentNode;
            while (e && e != h && e.nodeType) {
                g -= e.scrollLeft || 0;
                j -= e.scrollTop || 0;
                e = e.parentNode;
            }
            return {
                x: g,
                y: j
            };
        },
        getSize: function(a) {
            return {
                w: a.offsetWidth || a.clientWidth,
                h: a.offsetHeight || a.clientHeight
            };
        },
        parseSize: function(b) {
            var a;
            if (typeof(b) == "string") {
                b = /^([0-9]+)([mgk]?)$/.exec(b.toLowerCase().replace(/[^0-9mkg]/g, ""));
                a = b[2];
                b = +b[1];
                if (a == "g") {
                    b *= 1073741824;
                }
                if (a == "m") {
                    b *= 1048576;
                }
                if (a == "k") {
                    b *= 1024;
                }
            }
            return b;
        },
        xmlEncode: function(a) {
            return a ? ("" + a).replace(p, function(b) {
                return A[b] ? "&" + A[b] + ";": b;
            }) : a;
        },
        toArray: function(a) {
            var b,
            c = [];
            for (b = 0; b < a.length; b++) {
                c[b] = a[b];
            }
            return c;
        },
        inArray: function(b, a) {
            if (a) {
                if (Array.prototype.indexOf) {
                    return Array.prototype.indexOf.call(a, b);
                }
                for (var d = 0, c = a.length; d < c; d++) {
                    if (a[d] === b) {
                        return d;
                    }
                }
            }
            return - 1;
        },
        addI18n: function(a) {
            return u.extend(o, a);
        },
        translate: function(a) {
            return o[a] || a;
        },
        isEmptyObj: function(b) {
            if (b === z) {
                return true;
            }
            for (var a in b) {
                return false;
            }
            return true;
        },
        hasClass: function(a, b) {
            var c;
            if (a.className == "") {
                return false;
            }
            c = new RegExp("(^|\\s+)" + b + "(\\s+|$)");
            return c.test(a.className);
        },
        addClass: function(a, b) {
            if (!u.hasClass(a, b)) {
                a.className = a.className == "" ? b: a.className.replace(/\s+$/, "") + " " + b;
            }
        },
        removeClass: function(a, b) {
            var c = new RegExp("(^|\\s+)" + b + "(\\s+|$)");
            a.className = a.className.replace(c, function(e, f, d) {
                return f === " " && d === " " ? " ": "";
            });
        },
        getStyle: function(a, b) {
            if (a.currentStyle) {
                return a.currentStyle[b];
            } else {
                if (window.getComputedStyle) {
                    return window.getComputedStyle(a, null)[b];
                }
            }
        },
        addEvent: function(b, g, a) {
            var c,
            d,
            e,
            f;
            f = arguments[3];
            g = g.toLowerCase();
            if (w === z) {
                w = "Plupload_" + u.guid();
            }
            if (b.addEventListener) {
                c = a;
                b.addEventListener(g, c, false);
            } else {
                if (b.attachEvent) {
                    c = function() {
                        var h = window.event;
                        if (!h.target) {
                            h.target = h.srcElement;
                        }
                        h.preventDefault = t;
                        h.stopPropagation = r;
                        a(h);
                    };
                    b.attachEvent("on" + g, c);
                }
            }
            if (b[w] === z) {
                b[w] = u.guid();
            }
            if (!x.hasOwnProperty(b[w])) {
                x[b[w]] = {};
            }
            d = x[b[w]];
            if (!d.hasOwnProperty(g)) {
                d[g] = [];
            }
            d[g].push({
                func: c,
                orig: a,
                key: f
            });
        },
        removeEvent: function(b, g) {
            var d,
            a,
            e;
            if (typeof(arguments[2]) == "function") {
                a = arguments[2];
            } else {
                e = arguments[2];
            }
            g = g.toLowerCase();
            if (b[w] && x[b[w]] && x[b[w]][g]) {
                d = x[b[w]][g];
            } else {
                return;
            }
            for (var f = d.length - 1; f >= 0; f--) {
                if (d[f].key === e || d[f].orig === a) {
                    if (b.removeEventListener) {
                        b.removeEventListener(g, d[f].func, false);
                    } else {
                        if (b.detachEvent) {
                            b.detachEvent("on" + g, d[f].func);
                        }
                    }
                    d[f].orig = null;
                    d[f].func = null;
                    d.splice(f, 1);
                    if (a !== z) {
                        break;
                    }
                }
            }
            if (!d.length) {
                delete x[b[w]][g];
            }
            if (u.isEmptyObj(x[b[w]])) {
                delete x[b[w]];
                try {
                    delete b[w];
                } catch(c) {
                    b[w] = z;
                }
            }
        },
        removeAllEvents: function(a) {
            var b = arguments[1];
            if (a[w] === z || !a[w]) {
                return;
            }
            u.each(x[a[w]], function(c, d) {
                u.removeEvent(a, d, b);
            });
        }
    };
    u.Uploader = function(d) {
        var g = {},
        a,
        b = [],
        e,
        f = false;
        a = new u.QueueProgress();
        d = u.extend({
            chunk_size: 0,
            multipart: true,
            multi_selection: true,
            file_data_name: "file",
            filters: []
            }, d);
        function c() {
            var j,
            l = 0,
            k;
            if (this.state == u.STARTED) {
                for (k = 0; k < b.length; k++) {
                    if (!j && b[k].status == u.QUEUED) {
                        j = b[k];
                        j.status = u.UPLOADING;
                        if (this.trigger("BeforeUpload", j)) {
                            this.trigger("UploadFile", j);
                        }
                    } else {
                        l++;
                    }
                }
                if (l == b.length) {
                    this.stop();
                    this.trigger("UploadComplete", b);
                }
            }
        }
        function h() {
            var j,
            k;
            a.reset();
            for (j = 0; j < b.length; j++) {
                k = b[j];
                if (k.size !== z) {
                    a.size += k.size;
                    a.loaded += k.loaded;
                } else {
                    a.size = z;
                }
                if (k.status == u.DONE) {
                    a.uploaded++;
                } else {
                    if (k.status == u.FAILED) {
                        a.failed++;
                    } else {
                        a.queued++;
                    }
                }
            }
            if (a.size === z) {
                a.percent = b.length > 0 ? Math.ceil(a.uploaded / b.length * 100) : 0;
            } else {
                a.bytesPerSec = Math.ceil(a.loaded / (( + new Date() - e || 1) / 1000));
                a.percent = a.size > 0 ? Math.ceil(a.loaded / a.size * 100) : 0;
            }
        }
        u.extend(this, {
            state: u.STOPPED,
            runtime: "",
            features: {},
            files: b,
            settings: d,
            total: a,
            id: u.guid(),
            init: function() {
                var E = this,
                n,
                D,
                k,
                j = 0,
                m;
                if (typeof(d.preinit) == "function") {
                    d.preinit(E);
                } else {
                    u.each(d.preinit, function(B, C) {
                        E.bind(C, B);
                    });
                }
                d.page_url = d.page_url || document.location.pathname.replace(/\/[^\/]+$/g, "/");
                if (!/^(\w+:\/\/|\/)/.test(d.url)) {
                    d.url = d.page_url + d.url;
                }
                d.chunk_size = u.parseSize(d.chunk_size);
                d.max_file_size = u.parseSize(d.max_file_size);
                E.bind("FilesAdded", function(O, L) {
                    var M,
                    N,
                    C = 0,
                    B,
                    K = d.filters;
                    if (K && K.length) {
                        B = [];
                        u.each(K, function(F) {
                            u.each(F.extensions.split(/,/), function(G) {
                                if (/^\s*\*\s*$/.test(G)) {
                                    B.push("\\.*");
                                } else {
                                    B.push("\\." + G.replace(new RegExp("[" + ("/^$.*+?|()[]{}\\".replace(/./g, "\\$&")) + "]", "g"), "\\$&"));
                                }
                            });
                        });
                        B = new RegExp(B.join("|") + "$", "i");
                    }
                    for (M = 0; M < L.length; M++) {
                        N = L[M];
                        N.loaded = 0;
                        N.percent = 0;
                        N.status = u.QUEUED;
                        if (B && !B.test(N.name)) {
                            O.trigger("Error", {
                                code: u.FILE_EXTENSION_ERROR,
                                message: u.translate("File extension error."),
                                file: N
                            });
                            continue;
                        }
                        if (N.size !== z && N.size > d.max_file_size) {
                            O.trigger("Error", {
                                code: u.FILE_SIZE_ERROR,
                                message: u.translate("File size error."),
                                file: N
                            });
                            continue;
                        }
                        b.push(N);
                        C++;
                    }
                    if (C) {
                        y(function() {
                            E.trigger("QueueChanged");
                            E.refresh();
                        }, 1);
                    } else {
                        return false;
                    }
                });
                if (d.unique_names) {
                    E.bind("UploadFile", function(I, H) {
                        var B = H.name.match(/\.([^.]+)$/),
                        C = "tmp";
                        if (B) {
                            C = B[1];
                        }
                        H.target_name = H.id + "." + C;
                    });
                }
                E.bind("UploadProgress", function(C, B) {
                    B.percent = B.size > 0 ? Math.ceil(B.loaded / B.size * 100) : 100;
                    h();
                });
                E.bind("StateChanged", function(B) {
                    if (B.state == u.STARTED) {
                        e = ( + new Date());
                    } else {
                        if (B.state == u.STOPPED) {
                            for (n = B.files.length - 1; n >= 0; n--) {
                                if (B.files[n].status == u.UPLOADING) {
                                    B.files[n].status = u.QUEUED;
                                    h();
                                }
                            }
                        }
                    }
                });
                E.bind("QueueChanged", h);
                E.bind("Error", function(C, B) {
                    if (B.file) {
                        B.file.status = u.FAILED;
                        h();
                        if (C.state == u.STARTED) {
                            y(function() {
                                c.call(E);
                            }, 1);
                        }
                    }
                });
                E.bind("FileUploaded", function(C, B) {
                    B.status = u.DONE;
                    B.loaded = B.size;
                    C.trigger("UploadProgress", B);
                    y(function() {
                        c.call(E);
                    }, 1);
                });
                if (d.runtimes) {
                    D = [];
                    m = d.runtimes.split(/\s?,\s?/);
                    for (n = 0; n < m.length; n++) {
                        if (q[m[n]]) {
                            D.push(q[m[n]]);
                        }
                    }
                } else {
                    D = q;
                }
                function l() {
                    var B = D[j++],
                    C,
                    I,
                    H;
                    if (B) {
                        C = B.getFeatures();
                        I = E.settings.required_features;
                        if (I) {
                            I = I.split(",");
                            for (H = 0; H < I.length; H++) {
                                if (!C[I[H]]) {
                                    l();
                                    return;
                                }
                            }
                        }
                        B.init(E, function(F) {
                            if (F && F.success) {
                                E.features = C;
                                E.runtime = B.name;
                                E.trigger("Init", {
                                    runtime: B.name
                                });
                                E.trigger("PostInit");
                                E.refresh();
                            } else {
                                l();
                            }
                        });
                    } else {
                        E.trigger("Error", {
                            code: u.INIT_ERROR,
                            message: u.translate("Init error.")
                            });
                    }
                }
                l();
                if (typeof(d.init) == "function") {
                    d.init(E);
                } else {
                    u.each(d.init, function(B, C) {
                        E.bind(C, B);
                    });
                }
            },
            refresh: function() {
                this.trigger("Refresh");
            },
            start: function() {
                if (b.length && this.state != u.STARTED) {
                    this.state = u.STARTED;
                    this.trigger("StateChanged");
                    c.call(this);
                }
            },
            stop: function() {
                if (this.state != u.STOPPED) {
                    this.state = u.STOPPED;
                    this.trigger("CancelUpload");
                    this.trigger("StateChanged");
                }
            },
            disableBrowse: function() {
                f = arguments[0] !== z ? arguments[0] : true;
                this.trigger("DisableBrowse", f);
            },
            getFile: function(j) {
                var k;
                for (k = b.length - 1; k >= 0; k--) {
                    if (b[k].id === j) {
                        return b[k];
                    }
                }
            },
            removeFile: function(j) {
                var k;
                for (k = b.length - 1; k >= 0; k--) {
                    if (b[k].id === j.id) {
                        return this.splice(k, 1)[0];
                    }
                }
            },
            splice: function(l, k) {
                var j;
                j = b.splice(l === z ? 0: l, k === z ? b.length: k);
                this.trigger("FilesRemoved", j);
                this.trigger("QueueChanged");
                return j;
            },
            trigger: function(j) {
                var l = g[j.toLowerCase()],
                m,
                k;
                if (l) {
                    k = Array.prototype.slice.call(arguments);
                    k[0] = this;
                    for (m = 0; m < l.length; m++) {
                        if (l[m].func.apply(l[m].scope, k) === false) {
                            return false;
                        }
                    }
                }
                return true;
            },
            hasEventListener: function(j) {
                return !! g[j.toLowerCase()];
            },
            bind: function(k, m, j) {
                var l;
                k = k.toLowerCase();
                l = g[k] || [];
                l.push({
                    func: m,
                    scope: j || this
                });
                g[k] = l;
            },
            unbind: function(k) {
                k = k.toLowerCase();
                var l = g[k],
                j,
                m = arguments[1];
                if (l) {
                    if (m !== z) {
                        for (j = l.length - 1; j >= 0; j--) {
                            if (l[j].func === m) {
                                l.splice(j, 1);
                                break;
                            }
                        }
                    } else {
                        l = [];
                    }
                    if (!l.length) {
                        delete g[k];
                    }
                }
            },
            unbindAll: function() {
                var j = this;
                u.each(g, function(l, k) {
                    j.unbind(k);
                });
            },
            destroy: function() {
                this.stop();
                this.trigger("Destroy");
                this.unbindAll();
            }
        });
    };
    u.File = function(a, c, b) {
        var d = this;
        d.id = a;
        d.name = c;
        d.size = b;
        d.loaded = 0;
        d.percent = 0;
        d.status = 0;
    };
    u.Runtime = function() {
        this.getFeatures = function() {};
        this.init = function(b, a) {};
    };
    u.QueueProgress = function() {
        var a = this;
        a.size = 0;
        a.loaded = 0;
        a.uploaded = 0;
        a.failed = 0;
        a.queued = 0;
        a.percent = 0;
        a.bytesPerSec = 0;
        a.reset = function() {
            a.size = a.loaded = a.uploaded = a.failed = a.queued = a.percent = a.bytesPerSec = 0;
        };
    };
    u.runtimes = {};
    window.plupload = u;
})(); (function() {
    if (window.google && google.gears) {
        return;
    }
    var d = null;
    if (typeof GearsFactory != "undefined") {
        d = new GearsFactory();
    } else {
        try {
            d = new ActiveXObject("Gears.Factory");
            if (d.getBuildInfo().indexOf("ie_mobile") != -1) {
                d.privateSetGlobalObject(this);
            }
        } catch(c) {
            if ((typeof navigator.mimeTypes != "undefined") && navigator.mimeTypes["application/x-googlegears"]) {
                d = document.createElement("object");
                d.style.display = "none";
                d.width = 0;
                d.height = 0;
                d.type = "application/x-googlegears";
                document.documentElement.appendChild(d);
            }
        }
    }
    if (!d) {
        return;
    }
    if (!window.google) {
        window.google = {};
    }
    if (!google.gears) {
        google.gears = {
            factory: d
        };
    }
})(); (function(k, g, m, l) {
    var j = {};
    function h(e, c, a) {
        var f,
        d,
        b,
        p;
        d = google.gears.factory.create("beta.canvas");
        try {
            d.decode(e);
            if (!c.width) {
                c.width = d.width;
            }
            if (!c.height) {
                c.height = d.height;
            }
            p = Math.min(width / d.width, height / d.height);
            if (p < 1 || (p === 1 && a === "image/jpeg")) {
                d.resize(Math.round(d.width * p), Math.round(d.height * p));
                if (c.quality) {
                    return d.encode(a, {
                        quality: c.quality / 100
                    });
                }
                return d.encode(a);
            }
        } catch(q) {}
        return e;
    }
    m.runtimes.Gears = m.addRuntime("gears", {
        getFeatures: function() {
            return {
                dragdrop: true,
                jpgresize: true,
                pngresize: true,
                chunks: true,
                progress: true,
                multipart: true,
                multi_selection: true
            };
        },
        init: function(b, o) {
            var a,
            e,
            f = false;
            if (!k.google || !google.gears) {
                return o({
                    success: false
                });
            }
            try {
                a = google.gears.factory.create("beta.desktop");
            } catch(c) {
                return o({
                    success: false
                });
            }
            function d(u) {
                var v,
                w,
                t = [],
                n;
                for (w = 0; w < u.length; w++) {
                    v = u[w];
                    n = m.guid();
                    j[n] = v.blob;
                    t.push(new m.File(n, v.name, v.blob.length));
                }
                b.trigger("FilesAdded", t);
            }
            b.bind("PostInit", function() {
                var n = b.settings,
                q = g.getElementById(n.drop_element);
                if (q) {
                    m.addEvent(q, "dragover", function(p) {
                        a.setDropEffect(p, "copy");
                        p.preventDefault();
                    }, b.id);
                    m.addEvent(q, "drop", function(p) {
                        var s = a.getDragData(p, "application/x-gears-files");
                        if (s) {
                            d(s.files);
                        }
                        p.preventDefault();
                    }, b.id);
                    q = 0;
                }
                m.addEvent(g.getElementById(n.browse_button), "click", function(p) {
                    var v = [],
                    x,
                    y,
                    w;
                    p.preventDefault();
                    if (f) {
                        return;
                    }
                    no_type_restriction: for (x = 0; x < n.filters.length; x++) {
                        w = n.filters[x].extensions.split(",");
                        for (y = 0; y < w.length; y++) {
                            if (w[y] === "*") {
                                v = [];
                                break no_type_restriction;
                            }
                            v.push("." + w[y]);
                        }
                    }
                    a.openFiles(d, {
                        singleFile: !n.multi_selection,
                        filter: v
                    });
                }, b.id);
            });
            b.bind("CancelUpload", function() {
                if (e.abort) {
                    e.abort();
                }
            });
            b.bind("UploadFile", function(C, n) {
                var A = 0,
                B,
                E,
                D = 0,
                x = C.settings.resize,
                z;
                if (x && /\.(png|jpg|jpeg)$/i.test(n.name)) {
                    j[n.id] = h(j[n.id], x, /\.png$/i.test(n.name) ? "image/png": "image/jpeg");
                }
                n.size = j[n.id].length;
                E = C.settings.chunk_size;
                z = E > 0;
                B = Math.ceil(n.size / E);
                if (!z) {
                    E = n.size;
                    B = 1;
                }
                function y() {
                    var s,
                    u = C.settings.multipart,
                    q = 0,
                    t = {
                        name: n.target_name || n.name
                    },
                    r = C.settings.url;
                    function p(N) {
                        var O,
                        v = "----pluploadboundary" + m.guid(),
                        L = "--",
                        w = "\r\n",
                        M,
                        K;
                        if (u) {
                            e.setRequestHeader("Content-Type", "multipart/form-data; boundary=" + v);
                            O = google.gears.factory.create("beta.blobbuilder");
                            m.each(m.extend(t, C.settings.multipart_params), function(F, G) {
                                O.append(L + v + w + 'Content-Disposition: form-data; name="' + G + '"' + w + w);
                                O.append(F + w);
                            });
                            K = m.mimeTypes[n.name.replace(/^.+\.([^.]+)/, "$1").toLowerCase()] || "application/octet-stream";
                            O.append(L + v + w + 'Content-Disposition: form-data; name="' + C.settings.file_data_name + '"; filename="' + n.name + '"' + w + "Content-Type: " + K + w + w);
                            O.append(N);
                            O.append(w + L + v + L + w);
                            M = O.getAsBlob();
                            q = M.length - N.length;
                            N = M;
                        }
                        e.send(N);
                    }
                    if (n.status == m.DONE || n.status == m.FAILED || C.state == m.STOPPED) {
                        return;
                    }
                    if (z) {
                        t.chunk = A;
                        t.chunks = B;
                    }
                    s = Math.min(E, n.size - (A * E));
                    if (!u) {
                        r = m.buildUrl(C.settings.url, t);
                    }
                    e = google.gears.factory.create("beta.httprequest");
                    e.open("POST", r);
                    if (!u) {
                        e.setRequestHeader("Content-Disposition", 'attachment; filename="' + n.name + '"');
                        e.setRequestHeader("Content-Type", "application/octet-stream");
                    }
                    m.each(C.settings.headers, function(v, w) {
                        e.setRequestHeader(w, v);
                    });
                    e.upload.onprogress = function(v) {
                        n.loaded = D + v.loaded - q;
                        C.trigger("UploadProgress", n);
                    };
                    e.onreadystatechange = function() {
                        var v;
                        if (e.readyState == 4 && C.state !== m.STOPPED) {
                            if (e.status == 200) {
                                v = {
                                    chunk: A,
                                    chunks: B,
                                    response: e.responseText,
                                    status: e.status
                                };
                                C.trigger("ChunkUploaded", n, v);
                                if (v.cancelled) {
                                    n.status = m.FAILED;
                                    return;
                                }
                                D += s;
                                if (++A >= B) {
                                    n.status = m.DONE;
                                    C.trigger("FileUploaded", n, {
                                        response: e.responseText,
                                        status: e.status
                                    });
                                } else {
                                    y();
                                }
                            } else {
                                C.trigger("Error", {
                                    code: m.HTTP_ERROR,
                                    message: m.translate("HTTP Error."),
                                    file: n,
                                    chunk: A,
                                    chunks: B,
                                    status: e.status
                                });
                            }
                        }
                    };
                    if (A < B) {
                        p(j[n.id].slice(A * E, s));
                    }
                }
                y();
            });
            b.bind("DisableBrowse", function(q, n) {
                f = n;
            });
            b.bind("Destroy", function(u) {
                var t,
                s,
                n = {
                    browseButton: u.settings.browse_button,
                    dropElm: u.settings.drop_element
                };
                for (t in n) {
                    s = g.getElementById(n[t]);
                    if (s) {
                        m.removeAllEvents(s, u.id);
                    }
                }
            });
            o({
                success: true
            });
        }
    });
})(window, document, plupload); (function(m, j, p, o) {
    var k = {},
    l = {};
    function q(e) {
        var f,
        a = typeof e,
        d,
        b,
        c;
        if (e === o || e === null) {
            return "null";
        }
        if (a === "string") {
            f = "\bb\tt\nn\ff\rr\"\"''\\\\";
            return '"' + e.replace(/([\u0080-\uFFFF\x00-\x1f\"])/g, function(g, h) {
                var s = f.indexOf(h);
                if (s + 1) {
                    return "\\" + f.charAt(s + 1);
                }
                g = h.charCodeAt().toString(16);
                return "\\u" + "0000".substring(g.length) + g;
            }) + '"';
        }
        if (a == "object") {
            d = e.length !== o;
            f = "";
            if (d) {
                for (b = 0; b < e.length; b++) {
                    if (f) {
                        f += ",";
                    }
                    f += q(e[b]);
                }
                f = "[" + f + "]";
            } else {
                for (c in e) {
                    if (e.hasOwnProperty(c)) {
                        if (f) {
                            f += ",";
                        }
                        f += q(c) + ":" + q(e[c]);
                    }
                }
                f = "{" + f + "}";
            }
            return f;
        }
        return "" + e;
    }
    function n(A) {
        var x = false,
        w = null,
        d = null,
        h,
        g,
        f,
        y,
        e,
        b = 0;
        try {
            try {
                d = new ActiveXObject("AgControl.AgControl");
                if (d.IsVersionSupported(A)) {
                    x = true;
                }
                d = null;
            } catch(a) {
                var c = navigator.plugins["Silverlight Plug-In"];
                if (c) {
                    h = c.description;
                    if (h === "1.0.30226.2") {
                        h = "2.0.30226.2";
                    }
                    g = h.split(".");
                    while (g.length > 3) {
                        g.pop();
                    }
                    while (g.length < 4) {
                        g.push(0);
                    }
                    f = A.split(".");
                    while (f.length > 4) {
                        f.pop();
                    }
                    do {
                        y = parseInt(f[b], 10);
                        e = parseInt(g[b], 10);
                        b++;
                    }
                    while (b < f.length && y === e);
                    if (y <= e && !isNaN(y)) {
                        x = true;
                    }
                }
            }
        } catch(z) {
            x = false;
        }
        return x;
    }
    p.silverlight = {
        trigger: function(e, c) {
            var a = k[e],
            b,
            d;
            if (a) {
                d = p.toArray(arguments).slice(1);
                d[0] = "Silverlight:" + c;
                setTimeout(function() {
                    a.trigger.apply(a, d);
                }, 0);
            }
        }
    };
    p.runtimes.Silverlight = p.addRuntime("silverlight", {
        getFeatures: function() {
            return {
                jpgresize: true,
                pngresize: true,
                chunks: true,
                progress: true,
                multipart: true,
                multi_selection: true
            };
        },
        init: function(f, e) {
            var g,
            a = "",
            h = f.settings.filters,
            b,
            c = j.body;
            if (!n("2.0.31005.0") || (m.opera && m.opera.buildNumber)) {
                e({
                    success: false
                });
                return;
            }
            l[f.id] = false;
            k[f.id] = f;
            g = j.createElement("div");
            g.id = f.id + "_silverlight_container";
            p.extend(g.style, {
                position: "absolute",
                top: "0px",
                background: f.settings.shim_bgcolor || "transparent",
                zIndex: 99999,
                width: "100px",
                height: "100px",
                overflow: "hidden",
                opacity: f.settings.shim_bgcolor || j.documentMode > 8 ? "": 0.01
            });
            g.className = "plupload silverlight";
            if (f.settings.container) {
                c = j.getElementById(f.settings.container);
                if (p.getStyle(c, "position") === "static") {
                    c.style.position = "relative";
                }
            }
            c.appendChild(g);
            for (b = 0; b < h.length; b++) {
                a += (a != "" ? "|": "") + h[b].title + " | *." + h[b].extensions.replace(/,/g, ";*.");
            }
            g.innerHTML = '<object id="' + f.id + '_silverlight" data="data:application/x-silverlight," type="application/x-silverlight-2" style="outline:none;" width="1024" height="1024"><param name="source" value="' + f.settings.silverlight_xap_url + '"/><param name="background" value="Transparent"/><param name="windowless" value="true"/><param name="enablehtmlaccess" value="true"/><param name="initParams" value="id=' + f.id + ",filter=" + a + ",multiselect=" + f.settings.multi_selection + '"/></object>';
            function d() {
                return j.getElementById(f.id + "_silverlight").content.Upload;
            }
            f.bind("Silverlight:Init", function() {
                var u,
                t = {};
                if (l[f.id]) {
                    return;
                }
                l[f.id] = true;
                f.bind("Silverlight:StartSelectFiles", function(r) {
                    u = [];
                });
                f.bind("Silverlight:SelectFile", function(A, s, z, y) {
                    var r;
                    r = p.guid();
                    t[r] = s;
                    t[s] = r;
                    u.push(new p.File(r, z, y));
                });
                f.bind("Silverlight:SelectSuccessful", function() {
                    if (u.length) {
                        f.trigger("FilesAdded", u);
                    }
                });
                f.bind("Silverlight:UploadChunkError", function(A, s, z, r, y) {
                    f.trigger("Error", {
                        code: p.IO_ERROR,
                        message: "IO Error.",
                        details: y,
                        file: A.getFile(t[s])
                        });
                });
                f.bind("Silverlight:UploadFileProgress", function(A, r, z, s) {
                    var y = A.getFile(t[r]);
                    if (y.status != p.FAILED) {
                        y.size = s;
                        y.loaded = z;
                        A.trigger("UploadProgress", y);
                    }
                });
                f.bind("Refresh", function(y) {
                    var x,
                    s,
                    r;
                    x = j.getElementById(y.settings.browse_button);
                    if (x) {
                        s = p.getPos(x, j.getElementById(y.settings.container));
                        r = p.getSize(x);
                        p.extend(j.getElementById(y.id + "_silverlight_container").style, {
                            top: s.y + "px",
                            left: s.x + "px",
                            width: r.w + "px",
                            height: r.h + "px"
                        });
                    }
                });
                f.bind("Silverlight:UploadChunkSuccessful", function(C, s, B, D, E) {
                    var r,
                    A = C.getFile(t[s]);
                    r = {
                        chunk: B,
                        chunks: D,
                        response: E
                    };
                    C.trigger("ChunkUploaded", A, r);
                    if (A.status != p.FAILED && C.state !== p.STOPPED) {
                        d().UploadNextChunk();
                    }
                    if (B == D - 1) {
                        A.status = p.DONE;
                        C.trigger("FileUploaded", A, {
                            response: E
                        });
                    }
                });
                f.bind("Silverlight:UploadSuccessful", function(y, r, x) {
                    var s = y.getFile(t[r]);
                    s.status = p.DONE;
                    y.trigger("FileUploaded", s, {
                        response: x
                    });
                });
                f.bind("FilesRemoved", function(w, r) {
                    var s;
                    for (s = 0; s < r.length; s++) {
                        d().RemoveFile(t[r[s].id]);
                    }
                });
                f.bind("UploadFile", function(y, s) {
                    var r = y.settings,
                    x = r.resize || {};
                    d().UploadFile(t[s.id], y.settings.url, q({
                        name: s.target_name || s.name,
                        mime: p.mimeTypes[s.name.replace(/^.+\.([^.]+)/, "$1").toLowerCase()] || "application/octet-stream",
                        chunk_size: r.chunk_size,
                        image_width: x.width,
                        image_height: x.height,
                        image_quality: x.quality || 90,
                        multipart: !!r.multipart,
                        multipart_params: r.multipart_params || {},
                        file_data_name: r.file_data_name,
                        headers: r.headers
                    }));
                });
                f.bind("CancelUpload", function() {
                    d().CancelUpload();
                });
                f.bind("Silverlight:MouseEnter", function(w) {
                    var s,
                    r;
                    s = j.getElementById(f.settings.browse_button);
                    r = w.settings.browse_button_hover;
                    if (s && r) {
                        p.addClass(s, r);
                    }
                });
                f.bind("Silverlight:MouseLeave", function(w) {
                    var s,
                    r;
                    s = j.getElementById(f.settings.browse_button);
                    r = w.settings.browse_button_hover;
                    if (s && r) {
                        p.removeClass(s, r);
                    }
                });
                f.bind("Silverlight:MouseLeftButtonDown", function(w) {
                    var s,
                    r;
                    s = j.getElementById(f.settings.browse_button);
                    r = w.settings.browse_button_active;
                    if (s && r) {
                        p.addClass(s, r);
                        p.addEvent(j.body, "mouseup", function() {
                            p.removeClass(s, r);
                        });
                    }
                });
                f.bind("Sliverlight:StartSelectFiles", function(w) {
                    var s,
                    r;
                    s = j.getElementById(f.settings.browse_button);
                    r = w.settings.browse_button_active;
                    if (s && r) {
                        p.removeClass(s, r);
                    }
                });
                f.bind("DisableBrowse", function(s, r) {
                    d().DisableBrowse(r);
                });
                f.bind("Destroy", function(s) {
                    var r;
                    p.removeAllEvents(j.body, s.id);
                    delete l[s.id];
                    delete k[s.id];
                    r = j.getElementById(s.id + "_silverlight_container");
                    if (r) {
                        c.removeChild(r);
                    }
                });
                e({
                    success: true
                });
            });
        }
    });
})(window, document, plupload); (function(l, h, n, m) {
    var j = {},
    k = {};
    function o() {
        var c;
        try {
            c = navigator.plugins["Shockwave Flash"];
            c = c.description;
        } catch(a) {
            try {
                c = new ActiveXObject("ShockwaveFlash.ShockwaveFlash").GetVariable("$version");
            } catch(b) {
                c = "0.0";
            }
        }
        c = c.match(/\d+/g);
        return parseFloat(c[0] + "." + c[1]);
    }
    n.flash = {
        trigger: function(a, c, b) {
            setTimeout(function() {
                var f = j[a],
                d,
                e;
                if (f) {
                    f.trigger("Flash:" + c, b);
                }
            }, 0);
        }
    };
    n.runtimes.Flash = n.addRuntime("flash", {
        getFeatures: function() {
            return {
                jpgresize: true,
                pngresize: true,
                maxWidth: 8091,
                maxHeight: 8091,
                chunks: true,
                progress: true,
                multipart: true,
                multi_selection: true
            };
        },
        init: function(q, f) {
            var b,
            a,
            e = 0,
            d = h.body;
            if (o() < 10) {
                f({
                    success: false
                });
                return;
            }
            k[q.id] = false;
            j[q.id] = q;
            b = h.getElementById(q.settings.browse_button);
            a = h.createElement("div");
            a.id = q.id + "_flash_container";
            n.extend(a.style, {
                position: "absolute",
                top: "0px",
                background: q.settings.shim_bgcolor || "transparent",
                zIndex: 99999,
                width: "100%",
                height: "100%"
            });
            a.className = "plupload flash";
            if (q.settings.container) {
                d = h.getElementById(q.settings.container);
                if (n.getStyle(d, "position") === "static") {
                    d.style.position = "relative";
                }
            }
            d.appendChild(a); (function() {
                var s,
                p;
                s = '<object id="' + q.id + '_flash" type="application/x-shockwave-flash" data="' + q.settings.flash_swf_url + '" ';
                if (n.ua.ie) {
                    s += 'classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" ';
                }
                s += 'width="100%" height="100%" style="outline:0"><param name="movie" value="' + q.settings.flash_swf_url + '" /><param name="flashvars" value="id=' + escape(q.id) + '" /><param name="wmode" value="transparent" /><param name="allowscriptaccess" value="always" /></object>';
                if (n.ua.ie) {
                    p = h.createElement("div");
                    a.appendChild(p);
                    p.outerHTML = s;
                    p = null;
                } else {
                    a.innerHTML = s;
                }
            } ());
            function g() {
                return h.getElementById(q.id + "_flash");
            }
            function c() {
                if (e++>5000) {
                    f({
                        success: false
                    });
                    return;
                }
                if (k[q.id] === false) {
                    setTimeout(c, 1);
                }
            }
            c();
            b = a = null;
            q.bind("Destroy", function(s) {
                var p;
                n.removeAllEvents(h.body, s.id);
                delete k[s.id];
                delete j[s.id];
                p = h.getElementById(s.id + "_flash_container");
                if (p) {
                    d.removeChild(p);
                }
            });
            q.bind("Flash:Init", function() {
                var p = {},
                t;
                try {
                    g().setFileFilters(q.settings.filters, q.settings.multi_selection);
                } catch(u) {
                    f({
                        success: false
                    });
                    return;
                }
                if (k[q.id]) {
                    return;
                }
                k[q.id] = true;
                q.bind("UploadFile", function(y, s) {
                    var r = y.settings,
                    x = q.settings.resize || {};
                    g().uploadFile(p[s.id], r.url, {
                        name: s.target_name || s.name,
                        mime: n.mimeTypes[s.name.replace(/^.+\.([^.]+)/, "$1").toLowerCase()] || "application/octet-stream",
                        chunk_size: r.chunk_size,
                        width: x.width,
                        height: x.height,
                        quality: x.quality,
                        multipart: r.multipart,
                        multipart_params: r.multipart_params || {},
                        file_data_name: r.file_data_name,
                        format: /\.(jpg|jpeg)$/i.test(s.name) ? "jpg": "png",
                        headers: r.headers,
                        urlstream_upload: r.urlstream_upload
                    });
                });
                q.bind("CancelUpload", function() {
                    g().cancelUpload();
                });
                q.bind("Flash:UploadProcess", function(s, w) {
                    var r = s.getFile(p[w.id]);
                    if (r.status != n.FAILED) {
                        r.loaded = w.loaded;
                        r.size = w.size;
                        s.trigger("UploadProgress", r);
                    }
                });
                q.bind("Flash:UploadChunkComplete", function(y, s) {
                    var r,
                    x = y.getFile(p[s.id]);
                    r = {
                        chunk: s.chunk,
                        chunks: s.chunks,
                        response: s.text
                    };
                    y.trigger("ChunkUploaded", x, r);
                    if (x.status !== n.FAILED && y.state !== n.STOPPED) {
                        g().uploadNextChunk();
                    }
                    if (s.chunk == s.chunks - 1) {
                        x.status = n.DONE;
                        y.trigger("FileUploaded", x, {
                            response: s.text
                        });
                    }
                });
                q.bind("Flash:SelectFiles", function(B, s) {
                    var z,
                    A,
                    r = [],
                    C;
                    for (A = 0; A < s.length; A++) {
                        z = s[A];
                        C = n.guid();
                        p[C] = z.id;
                        p[z.id] = C;
                        r.push(new n.File(C, z.name, z.size));
                    }
                    if (r.length) {
                        q.trigger("FilesAdded", r);
                    }
                });
                q.bind("Flash:SecurityError", function(s, r) {
                    q.trigger("Error", {
                        code: n.SECURITY_ERROR,
                        message: n.translate("Security error."),
                        details: r.message,
                        file: q.getFile(p[r.id])
                        });
                });
                q.bind("Flash:GenericError", function(s, r) {
                    q.trigger("Error", {
                        code: n.GENERIC_ERROR,
                        message: n.translate("Generic error."),
                        details: r.message,
                        file: q.getFile(p[r.id])
                        });
                });
                q.bind("Flash:IOError", function(s, r) {
                    q.trigger("Error", {
                        code: n.IO_ERROR,
                        message: n.translate("IO error."),
                        details: r.message,
                        file: q.getFile(p[r.id])
                        });
                });
                q.bind("Flash:ImageError", function(s, r) {
                    q.trigger("Error", {
                        code: parseInt(r.code, 10),
                        message: n.translate("Image error."),
                        file: q.getFile(p[r.id])
                        });
                });
                q.bind("Flash:StageEvent:rollOver", function(w) {
                    var s,
                    r;
                    s = h.getElementById(q.settings.browse_button);
                    r = w.settings.browse_button_hover;
                    if (s && r) {
                        n.addClass(s, r);
                    }
                });
                q.bind("Flash:StageEvent:rollOut", function(w) {
                    var s,
                    r;
                    s = h.getElementById(q.settings.browse_button);
                    r = w.settings.browse_button_hover;
                    if (s && r) {
                        n.removeClass(s, r);
                    }
                });
                q.bind("Flash:StageEvent:mouseDown", function(w) {
                    var s,
                    r;
                    s = h.getElementById(q.settings.browse_button);
                    r = w.settings.browse_button_active;
                    if (s && r) {
                        n.addClass(s, r);
                        n.addEvent(h.body, "mouseup", function() {
                            n.removeClass(s, r);
                        }, w.id);
                    }
                });
                q.bind("Flash:StageEvent:mouseUp", function(w) {
                    var s,
                    r;
                    s = h.getElementById(q.settings.browse_button);
                    r = w.settings.browse_button_active;
                    if (s && r) {
                        n.removeClass(s, r);
                    }
                });
                q.bind("Flash:ExifData", function(s, r) {
                    q.trigger("ExifData", q.getFile(p[r.id]), r.data);
                });
                q.bind("Flash:GpsData", function(s, r) {
                    q.trigger("GpsData", q.getFile(p[r.id]), r.data);
                });
                q.bind("QueueChanged", function(r) {
                    q.refresh();
                });
                q.bind("FilesRemoved", function(w, r) {
                    var s;
                    for (s = 0; s < r.length; s++) {
                        g().removeFile(p[r[s].id]);
                    }
                });
                q.bind("StateChanged", function(r) {
                    q.refresh();
                });
                q.bind("Refresh", function(y) {
                    var x,
                    s,
                    r;
                    g().setFileFilters(q.settings.filters, q.settings.multi_selection);
                    x = h.getElementById(y.settings.browse_button);
                    if (x) {
                        s = n.getPos(x, h.getElementById(y.settings.container));
                        r = n.getSize(x);
                        n.extend(h.getElementById(y.id + "_flash_container").style, {
                            top: s.y + "px",
                            left: s.x + "px",
                            width: r.w + "px",
                            height: r.h + "px"
                        });
                    }
                });
                q.bind("DisableBrowse", function(s, r) {
                    g().disableBrowse(r);
                });
                f({
                    success: true
                });
            });
        }
    });
})(window, document, plupload); (function(b) {
    b.runtimes.BrowserPlus = b.addRuntime("browserplus", {
        getFeatures: function() {
            return {
                dragdrop: true,
                jpgresize: true,
                pngresize: true,
                chunks: true,
                progress: true,
                multipart: true,
                multi_selection: true
            };
        },
        init: function(m, k) {
            var o = window.BrowserPlus,
            l = {},
            p = m.settings,
            q = p.resize;
            function n(g) {
                var h,
                c,
                e = [],
                d,
                f;
                for (c = 0; c < g.length; c++) {
                    d = g[c];
                    f = b.guid();
                    l[f] = d;
                    e.push(new b.File(f, d.name, d.size));
                }
                if (c) {
                    m.trigger("FilesAdded", e);
                }
            }
            function a() {
                var c = false;
                m.bind("PostInit", function() {
                    var j,
                    d = p.drop_element,
                    g = m.id + "_droptarget",
                    e = document.getElementById(d),
                    s;
                    function f(r, u) {
                        o.DragAndDrop.AddDropTarget({
                            id: r
                        }, function(t) {
                            o.DragAndDrop.AttachCallbacks({
                                id: r,
                                hover: function(w) {
                                    if (!w && u) {
                                        u();
                                    }
                                },
                                drop: function(w) {
                                    if (u) {
                                        u();
                                    }
                                    n(w);
                                }
                            }, function() {});
                        });
                    }
                    function h() {
                        document.getElementById(g).style.top = "-1000px";
                    }
                    if (e) {
                        if (document.attachEvent && (/MSIE/gi).test(navigator.userAgent)) {
                            j = document.createElement("div");
                            j.setAttribute("id", g);
                            b.extend(j.style, {
                                position: "absolute",
                                top: "-1000px",
                                background: "red",
                                filter: "alpha(opacity=0)",
                                opacity: 0
                            });
                            document.body.appendChild(j);
                            b.addEvent(e, "dragenter", function(v) {
                                var w,
                                r;
                                w = document.getElementById(d);
                                r = b.getPos(w);
                                b.extend(document.getElementById(g).style, {
                                    top: r.y + "px",
                                    left: r.x + "px",
                                    width: w.offsetWidth + "px",
                                    height: w.offsetHeight + "px"
                                });
                            });
                            f(g, h);
                        } else {
                            f(d);
                        }
                    }
                    b.addEvent(document.getElementById(p.browse_button), "click", function(E) {
                        var D = [],
                        B,
                        C,
                        r = p.filters,
                        z,
                        A;
                        E.preventDefault();
                        if (c) {
                            return;
                        }
                        no_type_restriction: for (B = 0; B < r.length; B++) {
                            z = r[B].extensions.split(",");
                            for (C = 0; C < z.length; C++) {
                                if (z[C] === "*") {
                                    D = [];
                                    break no_type_restriction;
                                }
                                A = b.mimeTypes[z[C]];
                                if (A && b.inArray(A, D) === -1) {
                                    D.push(b.mimeTypes[z[C]]);
                                }
                            }
                        }
                        o.FileBrowse.OpenBrowseDialog({
                            mimeTypes: D
                        }, function(t) {
                            if (t.success) {
                                n(t.value);
                            }
                        });
                    });
                    e = j = null;
                });
                m.bind("CancelUpload", function() {
                    o.Uploader.cancel({}, function() {});
                });
                m.bind("DisableBrowse", function(e, d) {
                    c = d;
                });
                m.bind("UploadFile", function(g, u) {
                    var h = l[u.id],
                    v = {},
                    j = g.settings.chunk_size,
                    f,
                    e = [];
                    function w(t, r) {
                        var s;
                        if (u.status == b.FAILED) {
                            return;
                        }
                        v.name = u.target_name || u.name;
                        if (j) {
                            v.chunk = "" + t;
                            v.chunks = "" + r;
                        }
                        s = e.shift();
                        o.Uploader.upload({
                            url: g.settings.url,
                            files: {
                                file: s
                            },
                            cookies: document.cookies,
                            postvars: b.extend(v, g.settings.multipart_params),
                            progressCallback: function(B) {
                                var C,
                                A = 0;
                                f[t] = parseInt(B.filePercent * s.size / 100, 10);
                                for (C = 0; C < f.length; C++) {
                                    A += f[C];
                                }
                                u.loaded = A;
                                g.trigger("UploadProgress", u);
                            }
                        }, function(C) {
                            var A,
                            B;
                            if (C.success) {
                                A = C.value.statusCode;
                                if (j) {
                                    g.trigger("ChunkUploaded", u, {
                                        chunk: t,
                                        chunks: r,
                                        response: C.value.body,
                                        status: A
                                    });
                                }
                                if (e.length > 0) {
                                    w(++t, r);
                                } else {
                                    u.status = b.DONE;
                                    g.trigger("FileUploaded", u, {
                                        response: C.value.body,
                                        status: A
                                    });
                                    if (A >= 400) {
                                        g.trigger("Error", {
                                            code: b.HTTP_ERROR,
                                            message: b.translate("HTTP Error."),
                                            file: u,
                                            status: A
                                        });
                                    }
                                }
                            } else {
                                g.trigger("Error", {
                                    code: b.GENERIC_ERROR,
                                    message: b.translate("Generic Error."),
                                    file: u,
                                    details: C.error
                                });
                            }
                        });
                    }
                    function d(r) {
                        u.size = r.size;
                        if (j) {
                            o.FileAccess.chunk({
                                file: r,
                                chunkSize: j
                            }, function(s) {
                                if (s.success) {
                                    var A = s.value,
                                    z = A.length;
                                    f = Array(z);
                                    for (var t = 0; t < z; t++) {
                                        f[t] = 0;
                                        e.push(A[t]);
                                    }
                                    w(0, z);
                                }
                            });
                        } else {
                            f = Array(1);
                            e.push(r);
                            w(0, 1);
                        }
                    }
                    if (q && /\.(png|jpg|jpeg)$/i.test(u.name)) {
                        BrowserPlus.ImageAlter.transform({
                            file: h,
                            quality: q.quality || 90,
                            actions: [{
                                scale: {
                                    maxwidth: q.width,
                                    maxheight: q.height
                                }
                            }]
                            }, function(r) {
                            if (r.success) {
                                d(r.value.file);
                            }
                        });
                    } else {
                        d(h);
                    }
                });
                k({
                    success: true
                });
            }
            if (o) {
                o.init(function(c) {
                    var d = [{
                        service: "Uploader",
                        version: "3"
                    }, {
                        service: "DragAndDrop",
                        version: "1"
                    }, {
                        service: "FileBrowse",
                        version: "1"
                    }, {
                        service: "FileAccess",
                        version: "2"
                    }];
                    if (q) {
                        d.push({
                            service: "ImageAlter",
                            version: "4"
                        });
                    }
                    if (c.success) {
                        o.require({
                            services: d
                        }, function(e) {
                            if (e.success) {
                                a();
                            } else {
                                k();
                            }
                        });
                    } else {
                        k();
                    }
                });
            } else {
                k();
            }
        }
    });
})(plupload); (function(r, p, q, u) {
    var w = {},
    s;
    function n(b, a) {
        var c;
        if ("FileReader" in r) {
            c = new FileReader();
            c.readAsDataURL(b);
            c.onload = function() {
                a(c.result);
            };
        } else {
            return a(b.getAsDataURL());
        }
    }
    function o(b, a) {
        var c;
        if ("FileReader" in r) {
            c = new FileReader();
            c.readAsBinaryString(b);
            c.onload = function() {
                a(c.result);
            };
        } else {
            return a(b.getAsBinary());
        }
    }
    function v(a, c, e, f) {
        var b,
        d,
        g,
        j,
        h = this;
        n(w[a.id], function(k) {
            b = p.createElement("canvas");
            b.style.display = "none";
            p.body.appendChild(b);
            d = b.getContext("2d");
            g = new Image();
            g.onerror = g.onabort = function() {
                f({
                    success: false
                });
            };
            g.onload = function() {
                var G,
                m,
                E,
                F,
                l;
                if (!c.width) {
                    c.width = g.width;
                }
                if (!c.height) {
                    c.height = g.height;
                }
                j = Math.min(c.width / g.width, c.height / g.height);
                if (j < 1 || (j === 1 && e === "image/jpeg")) {
                    G = Math.round(g.width * j);
                    m = Math.round(g.height * j);
                    b.width = G;
                    b.height = m;
                    d.drawImage(g, 0, 0, G, m);
                    if (e === "image/jpeg") {
                        F = new t(atob(k.substring(k.indexOf("base64,") + 7)));
                        if (F.headers && F.headers.length) {
                            l = new y();
                            if (l.init(F.get("exif")[0])) {
                                l.setExif("PixelXDimension", G);
                                l.setExif("PixelYDimension", m);
                                F.set("exif", l.getBinary());
                                if (h.hasEventListener("ExifData")) {
                                    h.trigger("ExifData", a, l.EXIF());
                                }
                                if (h.hasEventListener("GpsData")) {
                                    h.trigger("GpsData", a, l.GPS());
                                }
                            }
                        }
                        if (c.quality) {
                            try {
                                k = b.toDataURL(e, c.quality / 100);
                            } catch(D) {
                                k = b.toDataURL(e);
                            }
                        }
                    } else {
                        k = b.toDataURL(e);
                    }
                    k = k.substring(k.indexOf("base64,") + 7);
                    k = atob(k);
                    if (F && F.headers && F.headers.length) {
                        k = F.restore(k);
                        F.purge();
                    }
                    b.parentNode.removeChild(b);
                    f({
                        success: true,
                        data: k
                    });
                } else {
                    f({
                        success: false
                    });
                }
            };
            g.src = k;
        });
    }
    q.runtimes.Html5 = q.addRuntime("html5", {
        getFeatures: function() {
            var a,
            e,
            b,
            c,
            d,
            f;
            e = b = d = f = false;
            if (r.XMLHttpRequest) {
                a = new XMLHttpRequest();
                b = !!a.upload;
                e = !!(a.sendAsBinary || a.upload);
            }
            if (e) {
                c = !!(a.sendAsBinary || (r.Uint8Array && r.ArrayBuffer));
                d = !!(File && (File.prototype.getAsDataURL || r.FileReader) && c);
                f = !!(File && (File.prototype.mozSlice || File.prototype.webkitSlice || File.prototype.slice));
            }
            s = q.ua.safari && q.ua.windows;
            return {
                html5: e,
                dragdrop: (function() {
                    var g = p.createElement("div");
                    return ("draggable" in g) || ("ondragstart" in g && "ondrop" in g);
                } ()),
                jpgresize: d,
                pngresize: d,
                multipart: d || !!r.FileReader || !!r.FormData,
                canSendBinary: c,
                cantSendBlobInFormData: !!(q.ua.gecko && r.FormData && r.FileReader && !FileReader.prototype.readAsArrayBuffer),
                progress: b,
                chunks: f,
                multi_selection: !(q.ua.safari && q.ua.windows),
                triggerDialog: (q.ua.gecko && r.FormData || q.ua.webkit)
                };
        },
        init: function(c, a) {
            var e,
            b;
            function d(g) {
                var j,
                k,
                h = [],
                f,
                l = {};
                for (k = 0; k < g.length; k++) {
                    j = g[k];
                    if (l[j.name]) {
                        continue;
                    }
                    l[j.name] = true;
                    f = q.guid();
                    w[f] = j;
                    h.push(new q.File(f, j.fileName || j.name, j.fileSize || j.size));
                }
                if (h.length) {
                    c.trigger("FilesAdded", h);
                }
            }
            e = this.getFeatures();
            if (!e.html5) {
                a({
                    success: false
                });
                return;
            }
            c.bind("Init", function(m) {
                var I,
                K,
                g = [],
                H,
                f,
                L = m.settings.filters,
                J,
                h,
                N = p.body,
                M;
                I = p.createElement("div");
                I.id = m.id + "_html5_container";
                q.extend(I.style, {
                    position: "absolute",
                    background: c.settings.shim_bgcolor || "transparent",
                    width: "100px",
                    height: "100px",
                    overflow: "hidden",
                    zIndex: 99999,
                    opacity: c.settings.shim_bgcolor ? "": 0
                });
                I.className = "plupload html5";
                if (c.settings.container) {
                    N = p.getElementById(c.settings.container);
                    if (q.getStyle(N, "position") === "static") {
                        N.style.position = "relative";
                    }
                }
                N.appendChild(I);
                no_type_restriction: for (H = 0; H < L.length; H++) {
                    J = L[H].extensions.split(/,/);
                    for (f = 0; f < J.length; f++) {
                        if (J[f] === "*") {
                            g = [];
                            break no_type_restriction;
                        }
                        h = q.mimeTypes[J[f]];
                        if (h && q.inArray(h, g) === -1) {
                            g.push(h);
                        }
                    }
                }
                I.innerHTML = '<input id="' + c.id + '_html5"  style="font-size:999px" type="file" accept="' + g.join(",") + '" ' + (c.settings.multi_selection && c.features.multi_selection ? 'multiple="multiple"': "") + " />";
                I.scrollTop = 100;
                M = p.getElementById(c.id + "_html5");
                if (m.features.triggerDialog) {
                    q.extend(M.style, {
                        position: "absolute",
                        width: "100%",
                        height: "100%"
                    });
                } else {
                    q.extend(M.style, {
                        cssFloat: "right",
                        styleFloat: "right"
                    });
                }
                M.onchange = function() {
                    d(this.files);
                    this.value = "";
                };
                K = p.getElementById(m.settings.browse_button);
                if (K) {
                    var k = m.settings.browse_button_hover,
                    j = m.settings.browse_button_active,
                    l = m.features.triggerDialog ? K: I;
                    if (k) {
                        q.addEvent(l, "mouseover", function() {
                            q.addClass(K, k);
                        }, m.id);
                        q.addEvent(l, "mouseout", function() {
                            q.removeClass(K, k);
                        }, m.id);
                    }
                    if (j) {
                        q.addEvent(l, "mousedown", function() {
                            q.addClass(K, j);
                        }, m.id);
                        q.addEvent(p.body, "mouseup", function() {
                            q.removeClass(K, j);
                        }, m.id);
                    }
                    if (m.features.triggerDialog) {
                        q.addEvent(K, "click", function(z) {
                            var A = p.getElementById(m.id + "_html5");
                            if (A && !A.disabled) {
                                A.click();
                            }
                            z.preventDefault();
                        }, m.id);
                    }
                }
            });
            c.bind("PostInit", function() {
                var f = p.getElementById(c.settings.drop_element);
                if (f) {
                    if (s) {
                        q.addEvent(f, "dragenter", function(g) {
                            var h,
                            k,
                            j;
                            h = p.getElementById(c.id + "_drop");
                            if (!h) {
                                h = p.createElement("input");
                                h.setAttribute("type", "file");
                                h.setAttribute("id", c.id + "_drop");
                                h.setAttribute("multiple", "multiple");
                                q.addEvent(h, "change", function() {
                                    d(this.files);
                                    q.removeEvent(h, "change", c.id);
                                    h.parentNode.removeChild(h);
                                }, c.id);
                                f.appendChild(h);
                            }
                            k = q.getPos(f, p.getElementById(c.settings.container));
                            j = q.getSize(f);
                            if (q.getStyle(f, "position") === "static") {
                                q.extend(f.style, {
                                    position: "relative"
                                });
                            }
                            q.extend(h.style, {
                                position: "absolute",
                                display: "block",
                                top: 0,
                                left: 0,
                                width: j.w + "px",
                                height: j.h + "px",
                                opacity: 0
                            });
                        }, c.id);
                        return;
                    }
                    q.addEvent(f, "dragover", function(g) {
                        g.preventDefault();
                    }, c.id);
                    q.addEvent(f, "drop", function(g) {
                        var h = g.dataTransfer;
                        if (h && h.files) {
                            d(h.files);
                        }
                        g.preventDefault();
                    }, c.id);
                }
            });
            c.bind("Refresh", function(l) {
                var k,
                j,
                h,
                f,
                g;
                k = p.getElementById(c.settings.browse_button);
                if (k) {
                    j = q.getPos(k, p.getElementById(l.settings.container));
                    h = q.getSize(k);
                    f = p.getElementById(c.id + "_html5_container");
                    q.extend(f.style, {
                        top: j.y + "px",
                        left: j.x + "px",
                        width: h.w + "px",
                        height: h.h + "px"
                    });
                    if (c.features.triggerDialog) {
                        if (q.getStyle(k, "position") === "static") {
                            q.extend(k.style, {
                                position: "relative"
                            });
                        }
                        g = parseInt(q.getStyle(k, "z-index"), 10);
                        if (isNaN(g)) {
                            g = 0;
                        }
                        q.extend(k.style, {
                            zIndex: g
                        });
                        q.extend(f.style, {
                            zIndex: g - 1
                        });
                    }
                }
            });
            c.bind("DisableBrowse", function(h, f) {
                var g = p.getElementById(h.id + "_html5");
                if (g) {
                    g.disabled = f;
                }
            });
            c.bind("CancelUpload", function() {
                if (b && b.abort) {
                    b.abort();
                }
            });
            c.bind("UploadFile", function(l, j) {
                var h = l.settings,
                m,
                k;
                function f(E, F, H) {
                    var I;
                    if (File.prototype.slice) {
                        try {
                            E.slice();
                            return E.slice(F, H);
                        } catch(G) {
                            return E.slice(F, H - F);
                        }
                    } else {
                        if (I = File.prototype.webkitSlice || File.prototype.mozSlice) {
                            return I.call(E, F, H);
                        } else {
                            return null;
                        }
                    }
                }
                function g(E) {
                    var F = 0,
                    H = 0,
                    G = ("FileReader" in r) ? new FileReader: null;
                    function I() {
                        var D,
                        z,
                        B,
                        A,
                        N,
                        C,
                        P,
                        Q = l.settings.url;
                        function O(J) {
                            var L = 0,
                            aa = "----pluploadboundary" + q.guid(),
                            Z,
                            Y = "--",
                            K = "\r\n",
                            W = "";
                            b = new XMLHttpRequest;
                            if (b.upload) {
                                b.upload.onprogress = function(R) {
                                    j.loaded = Math.min(j.size, H + R.loaded - L);
                                    l.trigger("UploadProgress", j);
                                };
                            }
                            b.onreadystatechange = function() {
                                var R,
                                S;
                                if (b.readyState == 4 && l.state !== q.STOPPED) {
                                    try {
                                        R = b.status;
                                    } catch(T) {
                                        R = 0;
                                    }
                                    if (R >= 400) {
                                        l.trigger("Error", {
                                            code: q.HTTP_ERROR,
                                            message: q.translate("HTTP Error."),
                                            file: j,
                                            status: R
                                        });
                                    } else {
                                        if (B) {
                                            S = {
                                                chunk: F,
                                                chunks: B,
                                                response: b.responseText,
                                                status: R
                                            };
                                            l.trigger("ChunkUploaded", j, S);
                                            H += C;
                                            if (S.cancelled) {
                                                j.status = q.FAILED;
                                                return;
                                            }
                                            j.loaded = Math.min(j.size, (F + 1) * N);
                                        } else {
                                            j.loaded = j.size;
                                        }
                                        l.trigger("UploadProgress", j);
                                        J = D = Z = W = null;
                                        if (!B || ++F >= B) {
                                            j.status = q.DONE;
                                            l.trigger("FileUploaded", j, {
                                                response: b.responseText,
                                                status: R
                                            });
                                        } else {
                                            I();
                                        }
                                    }
                                }
                            };
                            if (l.settings.multipart && e.multipart) {
                                A.name = j.target_name || j.name;
                                b.open("post", Q, true);
                                q.each(l.settings.headers, function(S, R) {
                                    b.setRequestHeader(R, S);
                                });
                                if (typeof(J) !== "string" && !!r.FormData) {
                                    Z = new FormData();
                                    q.each(q.extend(A, l.settings.multipart_params), function(S, R) {
                                        Z.append(R, S);
                                    });
                                    Z.append(l.settings.file_data_name, J);
                                    b.send(Z);
                                    return;
                                }
                                if (typeof(J) === "string") {
                                    b.setRequestHeader("Content-Type", "multipart/form-data; boundary=" + aa);
                                    q.each(q.extend(A, l.settings.multipart_params), function(S, R) {
                                        W += Y + aa + K + 'Content-Disposition: form-data; name="' + R + '"' + K + K;
                                        W += unescape(encodeURIComponent(S)) + K;
                                    });
                                    P = q.mimeTypes[j.name.replace(/^.+\.([^.]+)/, "$1").toLowerCase()] || "application/octet-stream";
                                    W += Y + aa + K + 'Content-Disposition: form-data; name="' + l.settings.file_data_name + '"; filename="' + unescape(encodeURIComponent(j.name)) + '"' + K + "Content-Type: " + P + K + K + J + K + Y + aa + Y + K;
                                    L = W.length - J.length;
                                    J = W;
                                    if (b.sendAsBinary) {
                                        b.sendAsBinary(J);
                                    } else {
                                        if (e.canSendBinary) {
                                            var M = new Uint8Array(J.length);
                                            for (var X = 0; X < J.length; X++) {
                                                M[X] = (J.charCodeAt(X) & 255);
                                            }
                                            b.send(M.buffer);
                                        }
                                    }
                                    return;
                                }
                            }
                            Q = q.buildUrl(l.settings.url, q.extend(A, l.settings.multipart_params));
                            b.open("post", Q, true);
                            b.setRequestHeader("Content-Type", "application/octet-stream");
                            q.each(l.settings.headers, function(S, R) {
                                b.setRequestHeader(R, S);
                            });
                            b.send(J);
                        }
                        if (j.status == q.DONE || j.status == q.FAILED || l.state == q.STOPPED) {
                            return;
                        }
                        A = {
                            name: j.target_name || j.name
                        };
                        if (h.chunk_size && j.size > h.chunk_size && (e.chunks || typeof(E) == "string")) {
                            N = h.chunk_size;
                            B = Math.ceil(j.size / N);
                            C = Math.min(N, j.size - (F * N));
                            if (typeof(E) == "string") {
                                D = E.substring(F * N, F * N + C);
                            } else {
                                D = f(E, F * N, F * N + C);
                            }
                            A.chunk = F;
                            A.chunks = B;
                        } else {
                            C = j.size;
                            D = E;
                        }
                        if (l.settings.multipart && e.multipart && typeof(D) !== "string" && G && e.cantSendBlobInFormData && e.chunks && l.settings.chunk_size) {
                            G.onload = function() {
                                O(G.result);
                            };
                            G.readAsBinaryString(D);
                        } else {
                            O(D);
                        }
                    }
                    I();
                }
                m = w[j.id];
                if (e.jpgresize && l.settings.resize && /\.(png|jpg|jpeg)$/i.test(j.name)) {
                    v.call(l, j, l.settings.resize, /\.png$/i.test(j.name) ? "image/png": "image/jpeg", function(A) {
                        if (A.success) {
                            j.size = A.data.length;
                            g(A.data);
                        } else {
                            if (e.chunks) {
                                g(m);
                            } else {
                                o(m, g);
                            }
                        }
                    });
                } else {
                    if (!e.chunks && e.jpgresize) {
                        o(m, g);
                    } else {
                        g(m);
                    }
                }
            });
            c.bind("Destroy", function(k) {
                var h,
                g,
                j = p.body,
                f = {
                    inputContainer: k.id + "_html5_container",
                    inputFile: k.id + "_html5",
                    browseButton: k.settings.browse_button,
                    dropElm: k.settings.drop_element
                };
                for (h in f) {
                    g = p.getElementById(f[h]);
                    if (g) {
                        q.removeAllEvents(g, k.id);
                    }
                }
                q.removeAllEvents(p.body, k.id);
                if (k.settings.container) {
                    j = p.getElementById(k.settings.container);
                }
                j.removeChild(p.getElementById(f.inputContainer));
            });
            a({
                success: true
            });
        }
    });
    function x() {
        var b = false,
        d;
        function a(j, g) {
            var k = b ? 0: -8 * (g - 1),
            f = 0,
            h;
            for (h = 0; h < g; h++) {
                f | =(d.charCodeAt(j + h) << Math.abs(k + h * 8));
            }
            return f;
        }
        function e(f, h, g) {
            var g = arguments.length === 3 ? g: d.length - h - 1;
            d = d.substr(0, h) + f + d.substr(g + h);
        }
        function c(k, j, g) {
            var f = "",
            l = b ? 0: -8 * (g - 1),
            h;
            for (h = 0; h < g; h++) {
                f += String.fromCharCode((j >> Math.abs(l + h * 8)) & 255);
            }
            e(f, k, g);
        }
        return {
            II: function(f) {
                if (f === u) {
                    return b;
                } else {
                    b = f;
                }
            },
            init: function(f) {
                b = false;
                d = f;
            },
            SEGMENT: function(h, f, g) {
                switch (arguments.length) {
                case 1:
                    return d.substr(h, d.length - h - 1);
                case 2:
                    return d.substr(h, f);
                case 3:
                    e(g, h, f);
                    break;
                default:
                    return d;
                }
            },
            BYTE: function(f) {
                return a(f, 1);
            },
            SHORT: function(f) {
                return a(f, 2);
            },
            LONG: function(g, f) {
                if (f === u) {
                    return a(g, 4);
                } else {
                    c(g, f, 4);
                }
            },
            SLONG: function(g) {
                var f = a(g, 4);
                return (f > 2147483647 ? f - 4294967296: f);
            },
            STRING: function(h, g) {
                var f = "";
                for (g += h; h < g; h++) {
                    f += String.fromCharCode(a(h, 1));
                }
                return f;
            }
        };
    }
    function t(c) {
        var a = {
            65505: {
                app: "EXIF",
                name: "APP1",
                signature: "Exif\0"
            },
            65506: {
                app: "ICC",
                name: "APP2",
                signature: "ICC_PROFILE\0"
            },
            65517: {
                app: "IPTC",
                name: "APP13",
                signature: "Photoshop 3.0\0"
            }
        },
        b = [],
        d,
        h,
        f = u,
        e = 0,
        g;
        d = new x();
        d.init(c);
        if (d.SHORT(0) !== 65496) {
            return;
        }
        h = 2;
        g = Math.min(1048576, c.length);
        while (h <= g) {
            f = d.SHORT(h);
            if (f >= 65488 && f <= 65495) {
                h += 2;
                continue;
            }
            if (f === 65498 || f === 65497) {
                break;
            }
            e = d.SHORT(h + 2) + 2;
            if (a[f] && d.STRING(h + 4, a[f].signature.length) === a[f].signature) {
                b.push({
                    hex: f,
                    app: a[f].app.toUpperCase(),
                    name: a[f].name.toUpperCase(),
                    start: h,
                    length: e,
                    segment: d.SEGMENT(h, e)
                    });
            }
            h += e;
        }
        d.init(null);
        return {
            headers: b,
            restore: function(A) {
                d.init(A);
                var k = new t(A);
                if (!k.headers) {
                    return false;
                }
                for (var j = k.headers.length; j > 0; j--) {
                    var m = k.headers[j - 1];
                    d.SEGMENT(m.start, m.length, "");
                }
                k.purge();
                h = d.SHORT(2) == 65504 ? 4 + d.SHORT(4) : 2;
                for (var j = 0, l = b.length; j < l; j++) {
                    d.SEGMENT(h, 0, b[j].segment);
                    h += b[j].length;
                }
                return d.SEGMENT();
            },
            get: function(j) {
                var m = [];
                for (var k = 0, l = b.length; k < l; k++) {
                    if (b[k].app === j.toUpperCase()) {
                        m.push(b[k].segment);
                    }
                }
                return m;
            },
            set: function(A, j) {
                var m = [];
                if (typeof(j) === "string") {
                    m.push(j);
                } else {
                    m = j;
                }
                for (var k = ii = 0, l = b.length; k < l; k++) {
                    if (b[k].app === A.toUpperCase()) {
                        b[k].segment = m[ii];
                        b[k].length = m[ii].length;
                        ii++;
                    }
                    if (ii >= m.length) {
                        break;
                    }
                }
            },
            purge: function() {
                b = [];
                d.init(null);
            }
        };
    }
    function y() {
        var d,
        g,
        f = {},
        a;
        d = new x();
        g = {
            tiff: {
                274: "Orientation",
                34665: "ExifIFDPointer",
                34853: "GPSInfoIFDPointer"
            },
            exif: {
                36864: "ExifVersion",
                40961: "ColorSpace",
                40962: "PixelXDimension",
                40963: "PixelYDimension",
                36867: "DateTimeOriginal",
                33434: "ExposureTime",
                33437: "FNumber",
                34855: "ISOSpeedRatings",
                37377: "ShutterSpeedValue",
                37378: "ApertureValue",
                37383: "MeteringMode",
                37384: "LightSource",
                37385: "Flash",
                41986: "ExposureMode",
                41987: "WhiteBalance",
                41990: "SceneCaptureType",
                41988: "DigitalZoomRatio",
                41992: "Contrast",
                41993: "Saturation",
                41994: "Sharpness"
            },
            gps: {
                0: "GPSVersionID",
                1: "GPSLatitudeRef",
                2: "GPSLatitude",
                3: "GPSLongitudeRef",
                4: "GPSLongitude"
            }
        };
        a = {
            ColorSpace: {
                1: "sRGB",
                0: "Uncalibrated"
            },
            MeteringMode: {
                0: "Unknown",
                1: "Average",
                2: "CenterWeightedAverage",
                3: "Spot",
                4: "MultiSpot",
                5: "Pattern",
                6: "Partial",
                255: "Other"
            },
            LightSource: {
                1: "Daylight",
                2: "Fliorescent",
                3: "Tungsten",
                4: "Flash",
                9: "Fine weather",
                10: "Cloudy weather",
                11: "Shade",
                12: "Daylight fluorescent (D 5700 - 7100K)",
                13: "Day white fluorescent (N 4600 -5400K)",
                14: "Cool white fluorescent (W 3900 - 4500K)",
                15: "White fluorescent (WW 3200 - 3700K)",
                17: "Standard light A",
                18: "Standard light B",
                19: "Standard light C",
                20: "D55",
                21: "D65",
                22: "D75",
                23: "D50",
                24: "ISO studio tungsten",
                255: "Other"
            },
            Flash: {
                0: "Flash did not fire.",
                1: "Flash fired.",
                5: "Strobe return light not detected.",
                7: "Strobe return light detected.",
                9: "Flash fired, compulsory flash mode",
                13: "Flash fired, compulsory flash mode, return light not detected",
                15: "Flash fired, compulsory flash mode, return light detected",
                16: "Flash did not fire, compulsory flash mode",
                24: "Flash did not fire, auto mode",
                25: "Flash fired, auto mode",
                29: "Flash fired, auto mode, return light not detected",
                31: "Flash fired, auto mode, return light detected",
                32: "No flash function",
                65: "Flash fired, red-eye reduction mode",
                69: "Flash fired, red-eye reduction mode, return light not detected",
                71: "Flash fired, red-eye reduction mode, return light detected",
                73: "Flash fired, compulsory flash mode, red-eye reduction mode",
                77: "Flash fired, compulsory flash mode, red-eye reduction mode, return light not detected",
                79: "Flash fired, compulsory flash mode, red-eye reduction mode, return light detected",
                89: "Flash fired, auto mode, red-eye reduction mode",
                93: "Flash fired, auto mode, return light not detected, red-eye reduction mode",
                95: "Flash fired, auto mode, return light detected, red-eye reduction mode"
            },
            ExposureMode: {
                0: "Auto exposure",
                1: "Manual exposure",
                2: "Auto bracket"
            },
            WhiteBalance: {
                0: "Auto white balance",
                1: "Manual white balance"
            },
            SceneCaptureType: {
                0: "Standard",
                1: "Landscape",
                2: "Portrait",
                3: "Night scene"
            },
            Contrast: {
                0: "Normal",
                1: "Soft",
                2: "Hard"
            },
            Saturation: {
                0: "Normal",
                1: "Low saturation",
                2: "High saturation"
            },
            Sharpness: {
                0: "Normal",
                1: "Soft",
                2: "Hard"
            },
            GPSLatitudeRef: {
                N: "North latitude",
                S: "South latitude"
            },
            GPSLongitudeRef: {
                E: "East longitude",
                W: "West longitude"
            }
        };
        function e(M, j) {
            var J = d.SHORT(M),
            m,
            N,
            L,
            k,
            l,
            K,
            I,
            h,
            O = [],
            H = {};
            for (m = 0; m < J; m++) {
                I = K = M + 12 * m + 2;
                L = j[d.SHORT(I)];
                if (L === u) {
                    continue;
                }
                k = d.SHORT(I += 2);
                l = d.LONG(I += 2);
                I += 4;
                O = [];
                switch (k) {
                case 1:
                case 7:
                    if (l > 4) {
                        I = d.LONG(I) + f.tiffHeader;
                    }
                    for (N = 0; N < l; N++) {
                        O[N] = d.BYTE(I + N);
                    }
                    break;
                case 2:
                    if (l > 4) {
                        I = d.LONG(I) + f.tiffHeader;
                    }
                    H[L] = d.STRING(I, l - 1);
                    continue;
                case 3:
                    if (l > 2) {
                        I = d.LONG(I) + f.tiffHeader;
                    }
                    for (N = 0; N < l; N++) {
                        O[N] = d.SHORT(I + N * 2);
                    }
                    break;
                case 4:
                    if (l > 1) {
                        I = d.LONG(I) + f.tiffHeader;
                    }
                    for (N = 0; N < l; N++) {
                        O[N] = d.LONG(I + N * 4);
                    }
                    break;
                case 5:
                    I = d.LONG(I) + f.tiffHeader;
                    for (N = 0; N < l; N++) {
                        O[N] = d.LONG(I + N * 4) / d.LONG(I + N * 4 + 4);
                    }
                    break;
                case 9:
                    I = d.LONG(I) + f.tiffHeader;
                    for (N = 0; N < l; N++) {
                        O[N] = d.SLONG(I + N * 4);
                    }
                    break;
                case 10:
                    I = d.LONG(I) + f.tiffHeader;
                    for (N = 0; N < l; N++) {
                        O[N] = d.SLONG(I + N * 4) / d.SLONG(I + N * 4 + 4);
                    }
                    break;
                default:
                    continue;
                }
                h = (l == 1 ? O[0] : O);
                if (a.hasOwnProperty(L) && typeof h != "object") {
                    H[L] = a[L][h];
                } else {
                    H[L] = h;
                }
            }
            return H;
        }
        function b() {
            var h = u,
            j = f.tiffHeader;
            d.II(d.SHORT(j) == 18761);
            if (d.SHORT(j += 2) !== 42) {
                return false;
            }
            f.IFD0 = f.tiffHeader + d.LONG(j += 2);
            h = e(f.IFD0, g.tiff);
            f.exifIFD = ("ExifIFDPointer" in h ? f.tiffHeader + h.ExifIFDPointer: u);
            f.gpsIFD = ("GPSInfoIFDPointer" in h ? f.tiffHeader + h.GPSInfoIFDPointer: u);
            return true;
        }
        function c(k, m, C) {
            var E,
            D,
            j,
            h = 0;
            if (typeof(m) === "string") {
                var l = g[k.toLowerCase()];
                for (hex in l) {
                    if (l[hex] === m) {
                        m = hex;
                        break;
                    }
                }
            }
            E = f[k.toLowerCase() + "IFD"];
            D = d.SHORT(E);
            for (i = 0; i < D; i++) {
                j = E + 12 * i + 2;
                if (d.SHORT(j) == m) {
                    h = j + 8;
                    break;
                }
            }
            if (!h) {
                return false;
            }
            d.LONG(h, C);
            return true;
        }
        return {
            init: function(h) {
                f = {
                    tiffHeader: 10
                };
                if (h === u || !h.length) {
                    return false;
                }
                d.init(h);
                if (d.SHORT(0) === 65505 && d.STRING(4, 5).toUpperCase() === "EXIF\0") {
                    return b();
                }
                return false;
            },
            EXIF: function() {
                var j;
                j = e(f.exifIFD, g.exif);
                if (j.ExifVersion && q.typeOf(j.ExifVersion) === "array") {
                    for (var h = 0, k = ""; h < j.ExifVersion.length; h++) {
                        k += String.fromCharCode(j.ExifVersion[h]);
                    }
                    j.ExifVersion = k;
                }
                return j;
            },
            GPS: function() {
                var h;
                h = e(f.gpsIFD, g.gps);
                if (h.GPSVersionID) {
                    h.GPSVersionID = h.GPSVersionID.join(".");
                }
                return h;
            },
            setExif: function(j, h) {
                if (j !== "PixelXDimension" && j !== "PixelYDimension") {
                    return false;
                }
                return c("exif", j, h);
            },
            getBinary: function() {
                return d.SEGMENT();
            }
        };
    }
})(window, document, plupload); (function(j, g, f, k) {
    function h(a) {
        return g.getElementById(a);
    }
    f.runtimes.Html4 = f.addRuntime("html4", {
        getFeatures: function() {
            return {
                multipart: true,
                triggerDialog: (f.ua.gecko && j.FormData || f.ua.webkit)
                };
        },
        init: function(b, a) {
            b.bind("Init", function(e) {
                var E = g.body,
                A,
                F = "javascript",
                D,
                H,
                d,
                G = [],
                c = /MSIE/.test(navigator.userAgent),
                L = [],
                B = e.settings.filters,
                y,
                C,
                M,
                I;
                no_type_restriction: for (y = 0; y < B.length; y++) {
                    C = B[y].extensions.split(/,/);
                    for (I = 0; I < C.length; I++) {
                        if (C[I] === "*") {
                            L = [];
                            break no_type_restriction;
                        }
                        M = f.mimeTypes[C[I]];
                        if (M && f.inArray(M, L) === -1) {
                            L.push(M);
                        }
                    }
                }
                L = L.join(",");
                function J() {
                    var m,
                    l,
                    o,
                    n;
                    d = f.guid();
                    G.push(d);
                    m = g.createElement("form");
                    m.setAttribute("id", "form_" + d);
                    m.setAttribute("method", "post");
                    m.setAttribute("enctype", "multipart/form-data");
                    m.setAttribute("encoding", "multipart/form-data");
                    m.setAttribute("target", e.id + "_iframe");
                    m.style.position = "absolute";
                    l = g.createElement("input");
                    l.setAttribute("id", "input_" + d);
                    l.setAttribute("type", "file");
                    l.setAttribute("accept", L);
                    l.setAttribute("size", 1);
                    n = h(e.settings.browse_button);
                    if (e.features.triggerDialog && n) {
                        f.addEvent(h(e.settings.browse_button), "click", function(p) {
                            if (!l.disabled) {
                                l.click();
                            }
                            p.preventDefault();
                        }, e.id);
                    }
                    f.extend(l.style, {
                        width: "100%",
                        height: "100%",
                        opacity: 0,
                        fontSize: "99px",
                        cursor: "pointer"
                    });
                    f.extend(m.style, {
                        overflow: "hidden"
                    });
                    o = e.settings.shim_bgcolor;
                    if (o) {
                        m.style.background = o;
                    }
                    if (c) {
                        f.extend(l.style, {
                            filter: "alpha(opacity=0)"
                        });
                    }
                    f.addEvent(l, "change", function(q) {
                        var s = q.target,
                        t,
                        r = [],
                        p;
                        if (s.value) {
                            h("form_" + d).style.top = -1048575 + "px";
                            t = s.value.replace(/\\/g, "/");
                            t = t.substring(t.length, t.lastIndexOf("/") + 1);
                            r.push(new f.File(d, t));
                            if (!e.features.triggerDialog) {
                                f.removeAllEvents(m, e.id);
                            } else {
                                f.removeEvent(n, "click", e.id);
                            }
                            f.removeEvent(l, "change", e.id);
                            J();
                            if (r.length) {
                                b.trigger("FilesAdded", r);
                            }
                        }
                    }, e.id);
                    m.appendChild(l);
                    E.appendChild(m);
                    e.refresh();
                }
                function K() {
                    var l = g.createElement("div");
                    l.innerHTML = '<iframe id="' + e.id + '_iframe" name="' + e.id + '_iframe" src="' + F + ':&quot;&quot;" style="display:none"></iframe>';
                    A = l.firstChild;
                    E.appendChild(A);
                    f.addEvent(A, "load", function(o) {
                        var n = o.target,
                        p,
                        m;
                        if (!D) {
                            return;
                        }
                        try {
                            p = n.contentWindow.document || n.contentDocument || j.frames[n.id].document;
                        } catch(q) {
                            e.trigger("Error", {
                                code: f.SECURITY_ERROR,
                                message: f.translate("Security error."),
                                file: D
                            });
                            return;
                        }
                        m = p.body.innerHTML;
                        if (m) {
                            D.status = f.DONE;
                            D.loaded = 1025;
                            D.percent = 100;
                            e.trigger("UploadProgress", D);
                            e.trigger("FileUploaded", D, {
                                response: m
                            });
                        }
                    }, e.id);
                }
                if (e.settings.container) {
                    E = h(e.settings.container);
                    if (f.getStyle(E, "position") === "static") {
                        E.style.position = "relative";
                    }
                }
                e.bind("UploadFile", function(o, n) {
                    var m,
                    l;
                    if (n.status == f.DONE || n.status == f.FAILED || o.state == f.STOPPED) {
                        return;
                    }
                    m = h("form_" + n.id);
                    l = h("input_" + n.id);
                    l.setAttribute("name", o.settings.file_data_name);
                    m.setAttribute("action", o.settings.url);
                    f.each(f.extend({
                        name: n.target_name || n.name
                    }, o.settings.multipart_params), function(p, r) {
                        var q = g.createElement("input");
                        f.extend(q, {
                            type: "hidden",
                            name: r,
                            value: p
                        });
                        m.insertBefore(q, m.firstChild);
                    });
                    D = n;
                    h("form_" + d).style.top = -1048575 + "px";
                    m.submit();
                });
                e.bind("FileUploaded", function(l) {
                    l.refresh();
                });
                e.bind("StateChanged", function(l) {
                    if (l.state == f.STARTED) {
                        K();
                    } else {
                        if (l.state == f.STOPPED) {
                            j.setTimeout(function() {
                                f.removeEvent(A, "load", l.id);
                                if (A.parentNode) {
                                    A.parentNode.removeChild(A);
                                }
                            }, 0);
                        }
                    }
                    f.each(l.files, function(o, m) {
                        if (o.status === f.DONE || o.status === f.FAILED) {
                            var n = h("form_" + o.id);
                            if (n) {
                                n.parentNode.removeChild(n);
                            }
                        }
                    });
                });
                e.bind("Refresh", function(o) {
                    var s,
                    n,
                    m,
                    l,
                    p,
                    r,
                    q,
                    t,
                    u;
                    s = h(o.settings.browse_button);
                    if (s) {
                        p = f.getPos(s, h(o.settings.container));
                        r = f.getSize(s);
                        q = h("form_" + d);
                        t = h("input_" + d);
                        f.extend(q.style, {
                            top: p.y + "px",
                            left: p.x + "px",
                            width: r.w + "px",
                            height: r.h + "px"
                        });
                        if (o.features.triggerDialog) {
                            if (f.getStyle(s, "position") === "static") {
                                f.extend(s.style, {
                                    position: "relative"
                                });
                            }
                            u = parseInt(s.style.zIndex, 10);
                            if (isNaN(u)) {
                                u = 0;
                            }
                            f.extend(s.style, {
                                zIndex: u
                            });
                            f.extend(q.style, {
                                zIndex: u - 1
                            });
                        }
                        m = o.settings.browse_button_hover;
                        l = o.settings.browse_button_active;
                        n = o.features.triggerDialog ? s: q;
                        if (m) {
                            f.addEvent(n, "mouseover", function() {
                                f.addClass(s, m);
                            }, o.id);
                            f.addEvent(n, "mouseout", function() {
                                f.removeClass(s, m);
                            }, o.id);
                        }
                        if (l) {
                            f.addEvent(n, "mousedown", function() {
                                f.addClass(s, l);
                            }, o.id);
                            f.addEvent(g.body, "mouseup", function() {
                                f.removeClass(s, l);
                            }, o.id);
                        }
                    }
                });
                b.bind("FilesRemoved", function(o, n) {
                    var l,
                    m;
                    for (l = 0; l < n.length; l++) {
                        m = h("form_" + n[l].id);
                        if (m) {
                            m.parentNode.removeChild(m);
                        }
                    }
                });
                b.bind("DisableBrowse", function(n, m) {
                    var l = g.getElementById("input_" + d);
                    if (l) {
                        l.disabled = m;
                    }
                });
                b.bind("Destroy", function(p) {
                    var l,
                    o,
                    n,
                    m = {
                        inputContainer: "form_" + d,
                        inputFile: "input_" + d,
                        browseButton: p.settings.browse_button
                    };
                    for (l in m) {
                        o = h(m[l]);
                        if (o) {
                            f.removeAllEvents(o, p.id);
                        }
                    }
                    f.removeAllEvents(g.body, p.id);
                    f.each(G, function(q, r) {
                        n = h("form_" + q);
                        if (n) {
                            E.removeChild(n);
                        }
                    });
                });
                J();
            });
            a({
                success: true
            });
        }
    });
})(window, document, plupload);
var io = this.io = {
    SOCKET_LOG: function(a) {
        if (window.turntable) {
            turntable.socketLog(String(a) == "[object Object]" ? "[]": a);
        }
    },
    version: "0.6.3",
    setPath: function(a) {
        if (window.console && console.error) {
            console.error("io.setPath will be removed. Please set the variable WEB_SOCKET_SWF_LOCATION pointing to WebSocketMain.swf");
        }
        this.path = /\/$/.test(a) ? a: a + "/";
        WEB_SOCKET_SWF_LOCATION = a + "lib/vendor/web-socket-js/WebSocketMain.swf";
    }
};
if ("jQuery" in this) {
    jQuery.io = this.io;
}
if (typeof window != "undefined") {
    if (typeof WEB_SOCKET_SWF_LOCATION === "undefined") {
        WEB_SOCKET_SWF_LOCATION = "/socket.io/lib/vendor/web-socket-js/WebSocketMain.swf";
    }
} (function() {
    var b = this.io,
    a = false;
    b.util = {
        load: function(c) {
            if (/loaded|complete/.test(document.readyState) || a) {
                return c();
            }
            if ("attachEvent" in window) {
                window.attachEvent("onload", c);
            } else {
                window.addEventListener("load", c, false);
            }
        },
        defer: function(c) {
            if (!b.util.webkit) {
                return c();
            }
            b.util.load(function() {
                setTimeout(c, 100);
            });
        },
        inherit: function(e, c) {
            for (var d in c.prototype) {
                e.prototype[d] = c.prototype[d];
            }
        },
        indexOf: function(c, f, g) {
            for (var d = c.length, e = (g < 0) ? Math.max(0, d + g) : g || 0; e < d; e++) {
                if (c[e] === f) {
                    return e;
                }
            }
            return - 1;
        },
        isArray: function(c) {
            return Object.prototype.toString.call(c) === "[object Array]";
        },
        merge: function(e, c) {
            for (var d in c) {
                if (c.hasOwnProperty(d)) {
                    e[d] = c[d];
                }
            }
        }
    };
    b.util.webkit = /webkit/i.test(navigator.userAgent);
    b.util.load(function() {
        a = true;
    });
})(); (function() {
    var d = this.io,
    a = "~m~",
    c = function(f) {
        if (Object.prototype.toString.call(f) == "[object Object]") {
            if (! ("JSON" in window)) {
                var e = "Socket.IO Error: Trying to encode as JSON, but JSON.stringify is missing.";
                if ("console" in window && console.error) {
                    console.error(e);
                } else {
                    throw new Error(e);
                }
                return '{ "$error": "' + e + '" }';
            }
            return "~j~" + JSON.stringify(f);
        } else {
            return String(f);
        }
    },
    b = d.Transport = function(f, e) {
        this.base = f;
        this.options = {
            timeout: 15000
        };
        d.util.merge(this.options, e);
    };
    b.prototype.send = function() {
        throw new Error("Missing send() implementation");
    };
    b.prototype.connect = function() {
        throw new Error("Missing connect() implementation");
    };
    b.prototype.disconnect = function() {
        throw new Error("Missing disconnect() implementation");
    };
    b.prototype.encode = function(j) {
        var f = "",
        h;
        j = d.util.isArray(j) ? j: [j];
        for (var g = 0, e = j.length; g < e; g++) {
            h = j[g] === null || j[g] === undefined ? "": c(j[g]);
            f += a + h.length + a + h;
        }
        return f;
    };
    b.prototype.decode = function(j) {
        var h = [],
        g,
        k;
        do {
            if (j.substr(0, 3) !== a) {
                return h;
            }
            j = j.substr(3);
            g = "",
            k = "";
            for (var f = 0, e = j.length; f < e; f++) {
                k = Number(j.substr(f, 1));
                if (j.substr(f, 1) == k) {
                    g += k;
                } else {
                    j = j.substr(g.length + a.length);
                    g = Number(g);
                    break;
                }
            }
            h.push(j.substr(0, g));
            j = j.substr(g);
        }
        while (j !== "");
        return h;
    };
    b.prototype.onData = function(h) {
        this.setTimeout();
        var g = this.decode(h);
        if (g && g.length) {
            for (var f = 0, e = g.length; f < e; f++) {
                this.onMessage(g[f]);
            }
        }
    };
    b.prototype.setTimeout = function() {
        var e = this;
        if (this.timeout) {
            clearTimeout(this.timeout);
        }
        this.timeout = setTimeout(function() {
            e.onTimeout();
        }, this.options.timeout);
    };
    b.prototype.onTimeout = function() {
        d.SOCKET_LOG("timeout");
        this.onDisconnect();
    };
    b.prototype.onMessage = function(e) {
        if (!this.sessionid) {
            this.sessionid = e;
            this.onConnect();
        } else {
            if (e.substr(0, 3) == "~h~") {
                this.onHeartbeat(e.substr(3));
            } else {
                if (e.substr(0, 3) == "~j~") {
                    this.base.onMessage(JSON.parse(e.substr(3)));
                } else {
                    this.base.onMessage(e);
                }
            }
        }
    },
    b.prototype.onHeartbeat = function(e) {
        if (this.type == "websocket") {
            d.SOCKET_LOG(this.sockets[0].id + ":hb");
        }
        this.send("~h~" + e);
    };
    b.prototype.onConnect = function() {
        this.connected = true;
        this.connecting = false;
        this.base.onConnect();
        this.setTimeout();
    };
    b.prototype.onDisconnect = function() {
        if (this.timeout) {
            clearTimeout(this.timeout);
        }
        this.connecting = false;
        this.connected = false;
        this.sessionid = null;
        this.base.onDisconnect();
    };
    b.prototype.prepareUrl = function() {
        return (this.base.options.secure ? "https": "http") + "://" + this.base.host + ":" + this.base.options.port + "/" + this.base.options.resource + "/" + this.type + (this.sessionid ? ("/" + this.sessionid) : "/");
    };
})(); (function() {
    var e = this.io,
    d = new Function,
    a = (function() {
        if (! ("XMLHttpRequest" in window)) {
            return false;
        }
        var f = new XMLHttpRequest();
        return f.withCredentials != undefined;
    })(),
    c = function(h) {
        if ("XDomainRequest" in window && h) {
            return new XDomainRequest();
        }
        if ("XMLHttpRequest" in window && (!h || a)) {
            return new XMLHttpRequest();
        }
        if (!h) {
            try {
                var g = new ActiveXObject("MSXML2.XMLHTTP");
                return g;
            } catch(i) {}
            try {
                var f = new ActiveXObject("Microsoft.XMLHTTP");
                return f;
            } catch(i) {}
        }
        return false;
    },
    b = e.Transport.XHR = function() {
        e.Transport.apply(this, arguments);
        this.sendBuffer = [];
    };
    e.util.inherit(b, e.Transport);
    b.prototype.connect = function() {
        this.get();
        return this;
    };
    b.prototype.checkSend = function() {
        if (!this.posting && this.sendBuffer.length) {
            var f = this.encode(this.sendBuffer);
            this.sendBuffer = [];
            this.sendIORequest(f);
        }
    };
    b.prototype.send = function(f) {
        if (e.util.isArray(f)) {
            this.sendBuffer.push.apply(this.sendBuffer, f);
        } else {
            this.sendBuffer.push(f);
        }
        this.checkSend();
        return this;
    };
    b.prototype.sendIORequest = function(g) {
        var f = this;
        this.posting = true;
        this.sendXHR = this.request("send", "POST");
        this.sendXHR.onreadystatechange = function() {
            var h;
            if (f.sendXHR.readyState == 4) {
                f.sendXHR.onreadystatechange = d;
                try {
                    h = f.sendXHR.status;
                } catch(i) {}
                f.posting = false;
                if (h == 200) {
                    f.checkSend();
                } else {
                    f.onDisconnect();
                }
            }
        };
        this.sendXHR.send("data=" + encodeURIComponent(g));
    };
    b.prototype.disconnect = function() {
        this.onDisconnect();
        return this;
    };
    b.prototype.onDisconnect = function() {
        if (this.xhr) {
            this.xhr.onreadystatechange = d;
            try {
                this.xhr.abort();
            } catch(f) {}
            this.xhr = null;
        }
        if (this.sendXHR) {
            this.sendXHR.onreadystatechange = d;
            try {
                this.sendXHR.abort();
            } catch(f) {}
            this.sendXHR = null;
        }
        this.sendBuffer = [];
        e.Transport.prototype.onDisconnect.call(this);
    };
    b.prototype.request = function(g, i, f) {
        var h = c(this.base.isXDomain());
        if (f) {
            h.multipart = true;
        }
        h.open(i || "GET", this.prepareUrl() + (g ? "/" + g: ""));
        if (i == "POST" && "setRequestHeader" in h) {
            h.setRequestHeader("Content-type", "application/x-www-form-urlencoded; charset=utf-8");
        }
        return h;
    };
    b.check = function(f) {
        try {
            if (c(f)) {
                return true;
            }
        } catch(g) {}
        return false;
    };
    b.xdomainCheck = function() {
        return b.check(true);
    };
    b.request = c;
})(); (function() {
    var b = this.io,
    a = b.Transport.websocket = function() {
        b.Transport.apply(this, arguments);
    };
    b.util.inherit(a, b.Transport);
    a.prototype.type = "websocket";
    a.prototype.connect = function() {
        var d = this;
        if (!this.sockets) {
            this.sockets = [];
        }
        var c = new WebSocket(this.prepareUrl());
        this.sockets.unshift(c);
        b.socketsCreated = (b.socketsCreated || 0) + 1;
        c.id = "ws" + b.socketsCreated;
        b.SOCKET_LOG(c.id + ":create");
        c.onmessage = function(g) {
            if (!d.base.connected || d.base.connecting) {
                b.SOCKET_LOG(c.id + ":awake");
            }
            if (d.sockets.length > 1) {
                var e = $.inArray(c, d.sockets);
                if (e == -1) {
                    return;
                }
                d.sockets.splice(e, 1);
                for (var f = 0; f < d.sockets.length; f++) {
                    d.sockets[f].onmessage = null;
                    d.sockets[f].onclose = null;
                    d.sockets[f].onerror = null;
                    d.sockets[f].close();
                    b.SOCKET_LOG(d.sockets[f].id + ":kill");
                }
                d.sockets = [c];
            }
            d.onData(g.data);
        };
        c.onclose = function(f) {
            b.SOCKET_LOG(c.id + ":die");
            var e = $.inArray(c, d.sockets);
            if (e != -1) {
                d.sockets.splice(e, 1);
            }
            d.onDisconnect();
        };
        c.onerror = function(f) {
            d.onError(f);
        };
        return this;
    };
    a.prototype.send = function(c) {
        if (this.sockets.length) {
            this.sockets[0].send(this.encode(c));
        }
        return this;
    };
    a.prototype.disconnect = function() {
        if (this.sockets.length) {
            while (this.sockets.length) {
                var c = this.sockets.pop();
                c.onmessage = null;
                c.onclose = null;
                c.onerror = null;
                c.close();
            }
            this.onDisconnect();
        }
        return this;
    };
    a.prototype.onError = function(c) {
        this.base.emit("error", [c]);
    };
    a.prototype.prepareUrl = function() {
        return (this.base.options.secure ? "wss": "ws") + "://" + this.base.host + ":" + this.base.options.port + "/" + this.base.options.resource + "/" + this.type + (this.sessionid ? ("/" + this.sessionid) : "");
    };
    a.check = function() {
        return "WebSocket" in window && WebSocket.prototype && (WebSocket.prototype.send && !!WebSocket.prototype.send.toString().match(/native/i)) && typeof WebSocket !== "undefined";
    };
    a.xdomainCheck = function() {
        return true;
    };
})(); (function() {
    var b = this.io,
    a = b.Transport.flashsocket = function() {
        b.Transport.websocket.apply(this, arguments);
    };
    b.util.inherit(a, b.Transport.websocket);
    a.prototype.type = "flashsocket";
    a.prototype.connect = function() {
        b.SOCKET_LOG("fsock:connect");
        var c = this,
        d = arguments;
        WebSocket.__addTask(function() {
            b.Transport.websocket.prototype.connect.apply(c, d);
        });
        return this;
    };
    a.prototype.send = function() {
        var c = this,
        d = arguments;
        WebSocket.__addTask(function() {
            b.Transport.websocket.prototype.send.apply(c, d);
        });
        return this;
    };
    a.check = function() {
        if (typeof WebSocket == "undefined" || !("__addTask" in WebSocket) || !swfobject) {
            return false;
        }
        return swfobject.hasFlashPlayerVersion("10.0.0");
    };
    a.xdomainCheck = function() {
        return true;
    };
})(); (function() {
    var b = this.io,
    a = b.Transport.htmlfile = function() {
        b.Transport.XHR.apply(this, arguments);
    };
    b.util.inherit(a, b.Transport.XHR);
    a.prototype.type = "htmlfile";
    a.prototype.get = function() {
        var c = this;
        this.open();
        window.attachEvent("onunload", function() {
            c.destroy();
        });
    };
    a.prototype.open = function() {
        this.doc = new ActiveXObject("htmlfile");
        this.doc.open();
        this.doc.write("<html></html>");
        this.doc.parentWindow.s = this;
        this.doc.close();
        var c = this.doc.createElement("div");
        this.doc.body.appendChild(c);
        this.iframe = this.doc.createElement("iframe");
        c.appendChild(this.iframe);
        this.iframe.src = this.prepareUrl() + "/" + ( + new Date);
    };
    a.prototype._ = function(d, e) {
        this.onData(d);
        var c = e.getElementsByTagName("script")[0];
        c.parentNode.removeChild(c);
    };
    a.prototype.destroy = function() {
        if (this.iframe) {
            try {
                this.iframe.src = "about:blank";
            } catch(c) {}
            this.doc = null;
            CollectGarbage();
        }
    };
    a.prototype.disconnect = function() {
        this.destroy();
        return b.Transport.XHR.prototype.disconnect.call(this);
    };
    a.check = function() {
        if ("ActiveXObject" in window) {
            try {
                var c = new ActiveXObject("htmlfile");
                return c && b.Transport.XHR.check();
            } catch(d) {}
        }
        return false;
    };
    a.xdomainCheck = function() {
        return false;
    };
})(); (function() {
    var b = this.io,
    a = b.Transport["xhr-multipart"] = function() {
        b.Transport.XHR.apply(this, arguments);
    };
    b.util.inherit(a, b.Transport.XHR);
    a.prototype.type = "xhr-multipart";
    a.prototype.get = function() {
        var c = this;
        this.xhr = this.request("", "GET", true);
        this.xhr.onreadystatechange = function() {
            if (c.xhr.readyState == 4) {
                c.onData(c.xhr.responseText);
            }
        };
        this.xhr.send(null);
    };
    a.check = function() {
        return "XMLHttpRequest" in window && "prototype" in XMLHttpRequest && "multipart" in XMLHttpRequest.prototype;
    };
    a.xdomainCheck = function() {
        return true;
    };
})(); (function() {
    var c = this.io,
    a = new Function(),
    b = c.Transport["xhr-polling"] = function() {
        c.Transport.XHR.apply(this, arguments);
    };
    c.util.inherit(b, c.Transport.XHR);
    b.prototype.type = "xhr-polling";
    b.prototype.connect = function() {
        var d = this;
        c.util.defer(function() {
            c.Transport.XHR.prototype.connect.call(d);
        });
        return false;
    };
    b.prototype.get = function() {
        var d = this;
        this.xhr = this.request( + new Date, "GET");
        this.xhr.onreadystatechange = function() {
            var f;
            if (d.xhr.readyState == 4) {
                d.xhr.onreadystatechange = a;
                try {
                    f = d.xhr.status;
                } catch(g) {}
                if (f == 200) {
                    d.onData(d.xhr.responseText);
                    d.get();
                } else {
                    d.onDisconnect();
                }
            }
        };
        this.xhr.send(null);
    };
    b.check = function() {
        return c.Transport.XHR.check();
    };
    b.xdomainCheck = function() {
        return c.Transport.XHR.xdomainCheck();
    };
})(); (function() {
    var b = this.io,
    a = b.Transport["jsonp-polling"] = function() {
        b.Transport.XHR.apply(this, arguments);
        this.insertAt = document.getElementsByTagName("head")[0];
        this.index = b.JSONP.length;
        b.JSONP.push(this);
    };
    b.util.inherit(a, b.Transport["xhr-polling"]);
    b.JSONP = [];
    a.prototype.type = "jsonp-polling";
    a.prototype.sendIORequest = function(j) {
        var l = this;
        if (! ("form" in this)) {
            var d = document.createElement("FORM"),
            f = document.createElement("TEXTAREA"),
            c = this.iframeId = "socket_io_iframe_" + this.index,
            i;
            d.style.position = "absolute";
            d.style.top = "-1000px";
            d.style.left = "-1000px";
            d.target = c;
            d.method = "POST";
            d.action = this.prepareUrl() + "/" + ( + new Date) + "/" + this.index;
            f.name = "data";
            d.appendChild(f);
            this.insertAt.insertBefore(d, null);
            document.body.appendChild(d);
            this.form = d;
            this.area = f;
        }
        function g() {
            h();
            l.posting = false;
            l.checkSend();
        }
        function h() {
            if (l.iframe) {
                l.form.removeChild(l.iframe);
            }
            try {
                i = document.createElement('<iframe name="' + l.iframeId + '">');
            } catch(m) {
                i = document.createElement("iframe");
                i.name = l.iframeId;
            }
            i.id = l.iframeId;
            l.form.appendChild(i);
            l.iframe = i;
        }
        h();
        this.posting = true;
        this.area.value = j;
        try {
            this.form.submit();
        } catch(k) {}
        if (this.iframe.attachEvent) {
            i.onreadystatechange = function() {
                if (l.iframe.readyState == "complete") {
                    g();
                }
            };
        } else {
            this.iframe.onload = g;
        }
    };
    a.prototype.get = function() {
        var d = this,
        c = document.createElement("SCRIPT");
        if (this.script) {
            this.script.parentNode.removeChild(this.script);
            this.script = null;
        }
        c.async = true;
        c.src = this.prepareUrl() + "/" + ( + new Date) + "/" + this.index;
        c.onerror = function() {
            d.onDisconnect();
        };
        this.insertAt.insertBefore(c, null);
        this.script = c;
    };
    a.prototype._ = function() {
        this.onData.apply(this, arguments);
        this.get();
        return this;
    };
    a.check = function() {
        return true;
    };
    a.xdomainCheck = function() {
        return true;
    };
})(); (function() {
    var b = this.io;
    var a = b.Socket = function(d, c) {
        this.host = d || document.domain;
        this.options = {
            secure: false,
            document: document,
            port: document.location.port || 80,
            resource: "socket.io",
            transports: ["websocket", "flashsocket", "htmlfile", "xhr-multipart", "xhr-polling", "jsonp-polling"],
            transportOptions: {
                "xhr-polling": {
                    timeout: 25000
                },
                "jsonp-polling": {
                    timeout: 25000
                }
            },
            connectTimeout: 5000,
            tryTransportsOnConnectTimeout: true,
            reconnect: true,
            reconnectionDelay: 500,
            maxReconnectionAttempts: 10,
            rememberTransport: true
        };
        b.util.merge(this.options, c);
        this.connected = false;
        this.connecting = false;
        this.reconnecting = false;
        this.events = {};
        this.transport = this.getTransport();
        if (!this.transport && "console" in window) {
            console.error("No transport available");
        }
    };
    a.prototype.getTransport = function(f) {
        var c = f || this.options.transports,
        d;
        if (this.options.rememberTransport && !f) {
            d = this.options.document.cookie.match("(?:^|;)\\s*socketio=([^;]*)");
            if (d) {
                this.rememberedTransport = true;
                c = [decodeURIComponent(d[1])];
            }
        }
        for (var e = 0, g; g = c[e]; e++) {
            if (b.Transport[g] && b.Transport[g].check() && (!this.isXDomain() || b.Transport[g].xdomainCheck())) {
                return new b.Transport[g](this, this.options.transportOptions[g] || {});
            }
        }
        return null;
    };
    a.prototype.connect = function(d) {
        if (this.transport && !this.connected) {
            if (this.connecting && this.transport.type != "websocket") {
                this.disconnect(true);
            }
            this.connecting = true;
            this.emit("connecting", [this.transport.type]);
            this.transport.connect();
            if (this.options.connectTimeout && !this.reconnecting) {
                var c = this;
                this.connectTimeoutTimer = setTimeout(function() {
                    if (!c.connected) {
                        c.disconnect(true);
                        if (c.options.tryTransportsOnConnectTimeout && !c.rememberedTransport) {
                            if (!c.remainingTransports) {
                                c.remainingTransports = c.options.transports.slice(0);
                            }
                            var e = c.remainingTransports;
                            while (e.length > 0 && e.splice(0, 1)[0] != c.transport.type) {}
                            if (e.length) {
                                c.transport = c.getTransport(e);
                                c.connect();
                            }
                        }
                        if (!c.remainingTransports || c.remainingTransports.length == 0) {
                            c.emit("connect_failed");
                        }
                    }
                    if (c.remainingTransports && c.remainingTransports.length == 0) {
                        delete c.remainingTransports;
                    }
                }, this.options.connectTimeout);
            }
        }
        if (d && typeof d == "function") {
            this.once("connect", d);
        }
        return this;
    };
    a.prototype.send = function(c) {
        if (!this.transport || !this.transport.connected) {
            return this.queue(c);
        }
        this.transport.send(c);
        return this;
    };
    a.prototype.disconnect = function(c) {
        if (this.connectTimeoutTimer) {
            clearTimeout(this.connectTimeoutTimer);
        }
        if (!c) {
            this.options.reconnect = false;
        }
        this.transport.disconnect();
        return this;
    };
    a.prototype.on = function(c, d) {
        if (! (c in this.events)) {
            this.events[c] = [];
        }
        this.events[c].push(d);
        return this;
    };
    a.prototype.once = function(d, f) {
        var c = this,
        e = function() {
            c.removeEvent(d, e);
            f.apply(c, arguments);
        };
        e.ref = f;
        c.on(d, e);
        return this;
    };
    a.prototype.emit = function(d, c) {
        if (d in this.events) {
            var f = this.events[d].concat();
            for (var e = 0, g = f.length; e < g; e++) {
                f[e].apply(this, c === undefined ? [] : c);
            }
        }
        return this;
    };
    a.prototype.removeEvent = function(e, f) {
        if (e in this.events) {
            for (var d = 0, c = this.events[e].length; d < c; d++) {
                if (this.events[e][d] == f || this.events[e][d].ref && this.events[e][d].ref == f) {
                    this.events[e].splice(d, 1);
                }
            }
        }
        return this;
    };
    a.prototype.queue = function(c) {
        if (! ("queueStack" in this)) {
            this.queueStack = [];
        }
        this.queueStack.push(c);
        return this;
    };
    a.prototype.doQueue = function() {
        if (! ("queueStack" in this) || !this.queueStack.length) {
            return this;
        }
        this.transport.send(this.queueStack);
        this.queueStack = [];
        return this;
    };
    a.prototype.isXDomain = function() {
        var c = window.location.port || 80;
        return this.host !== document.domain || this.options.port != c;
    };
    a.prototype.onConnect = function() {
        this.connected = true;
        this.connecting = false;
        this.doQueue();
        if (this.options.rememberTransport) {
            this.options.document.cookie = "socketio=" + encodeURIComponent(this.transport.type);
        }
        this.emit("connect");
    };
    a.prototype.onMessage = function(c) {
        this.emit("message", [c]);
    };
    a.prototype.onDisconnect = function() {
        var c = this.connected;
        this.connected = false;
        this.connecting = false;
        this.queueStack = [];
        if (c) {
            b.SOCKET_LOG("dc");
            this.emit("disconnect");
            if (this.options.reconnect && !this.reconnecting) {
                this.onReconnect();
            }
        }
    };
    a.prototype.onReconnect = function() {
        this.reconnecting = true;
        this.reconnectionAttempts = 0;
        this.reconnectionDelay = this.options.reconnectionDelay;
        var c = this,
        e = this.options.tryTransportsOnConnectTimeout,
        g = this.options.rememberTransport;
        function d() {
            if (c.connected) {
                c.emit("reconnect", [c.transport.type, c.reconnectionAttempts]);
            }
            c.removeEvent("connect_failed", f).removeEvent("connect", f);
            c.reconnecting = false;
            delete c.reconnectionAttempts;
            delete c.reconnectionDelay;
            delete c.reconnectionTimer;
            delete c.redoTransports;
            c.options.tryTransportsOnConnectTimeout = e;
            c.options.rememberTransport = g;
            return;
        }
        function f() {
            if (!c.reconnecting) {
                return;
            }
            if (!c.connected) {
                var h = (!c.connecting || c.transport.type == "websocket");
                if (!h) {
                    return c.reconnectionTimer = setTimeout(f, 1000);
                }
                if (c.reconnectionAttempts++>=c.options.maxReconnectionAttempts) {
                    if (!c.redoTransports) {
                        c.on("connect_failed", f);
                        c.options.tryTransportsOnConnectTimeout = true;
                        c.disconnect(true);
                        c.transport = c.getTransport(c.options.transports);
                        c.redoTransports = true;
                        c.connect();
                    } else {
                        c.emit("reconnect_failed");
                        d();
                    }
                } else {
                    c.reconnectionDelay *= 2;
                    c.connect();
                    c.emit("reconnecting", [c.reconnectionDelay, c.reconnectionAttempts]);
                    c.reconnectionTimer = setTimeout(f, c.reconnectionDelay);
                }
            } else {
                d();
            }
        }
        this.options.tryTransportsOnConnectTimeout = false;
        this.reconnectionTimer = setTimeout(f, this.reconnectionDelay);
        this.on("connect", f);
    };
    a.prototype.fire = a.prototype.emit;
    a.prototype.addListener = a.prototype.addEvent = a.prototype.addEventListener = a.prototype.on;
    a.prototype.removeListener = a.prototype.removeEventListener = a.prototype.removeEvent;
})();
var swfobject = function() {
    var aq = "undefined",
    aD = "object",
    ab = "Shockwave Flash",
    X = "ShockwaveFlash.ShockwaveFlash",
    aE = "application/x-shockwave-flash",
    ac = "SWFObjectExprInst",
    ax = "onreadystatechange",
    af = window,
    aL = document,
    aB = navigator,
    aa = false,
    Z = [aN],
    aG = [],
    ag = [],
    al = [],
    aJ,
    ad,
    ap,
    at,
    ak = false,
    aU = false,
    aH,
    an,
    aI = true,
    ah = function() {
        var a = typeof aL.getElementById != aq && typeof aL.getElementsByTagName != aq && typeof aL.createElement != aq,
        e = aB.userAgent.toLowerCase(),
        c = aB.platform.toLowerCase(),
        h = c ? /win/.test(c) : /win/.test(e),
        j = c ? /mac/.test(c) : /mac/.test(e),
        g = /webkit/.test(e) ? parseFloat(e.replace(/^.*webkit\/(\d+(\.\d+)?).*$/, "$1")) : false,
        d = !+"\v1",
        f = [0, 0, 0],
        k = null;
        if (typeof aB.plugins != aq && typeof aB.plugins[ab] == aD) {
            k = aB.plugins[ab].description;
            if (k && !(typeof aB.mimeTypes != aq && aB.mimeTypes[aE] && !aB.mimeTypes[aE].enabledPlugin)) {
                aa = true;
                d = false;
                k = k.replace(/^.*\s+(\S+\s+\S+$)/, "$1");
                f[0] = parseInt(k.replace(/^(.*)\..*$/, "$1"), 10);
                f[1] = parseInt(k.replace(/^.*\.(.*)\s.*$/, "$1"), 10);
                f[2] = /[a-zA-Z]/.test(k) ? parseInt(k.replace(/^.*[a-zA-Z]+(.*)$/, "$1"), 10) : 0;
            }
        } else {
            if (typeof af.ActiveXObject != aq) {
                try {
                    var i = new ActiveXObject(X);
                    if (i) {
                        k = i.GetVariable("$version");
                        if (k) {
                            d = true;
                            k = k.split(" ")[1].split(",");
                            f = [parseInt(k[0], 10), parseInt(k[1], 10), parseInt(k[2], 10)];
                        }
                    }
                } catch(b) {}
            }
        }
        return {
            w3: a,
            pv: f,
            wk: g,
            ie: d,
            win: h,
            mac: j
        };
    } (),
    aK = function() {
        if (!ah.w3) {
            return;
        }
        if ((typeof aL.readyState != aq && aL.readyState == "complete") || (typeof aL.readyState == aq && (aL.getElementsByTagName("body")[0] || aL.body))) {
            aP();
        }
        if (!ak) {
            if (typeof aL.addEventListener != aq) {
                aL.addEventListener("DOMContentLoaded", aP, false);
            }
            if (ah.ie && ah.win) {
                aL.attachEvent(ax, function() {
                    if (aL.readyState == "complete") {
                        aL.detachEvent(ax, arguments.callee);
                        aP();
                    }
                });
                if (af == top) { (function() {
                        if (ak) {
                            return;
                        }
                        try {
                            aL.documentElement.doScroll("left");
                        } catch(a) {
                            setTimeout(arguments.callee, 0);
                            return;
                        }
                        aP();
                    })();
                }
            }
            if (ah.wk) { (function() {
                    if (ak) {
                        return;
                    }
                    if (!/loaded|complete/.test(aL.readyState)) {
                        setTimeout(arguments.callee, 0);
                        return;
                    }
                    aP();
                })();
            }
            aC(aP);
        }
    } ();
    function aP() {
        if (ak) {
            return;
        }
        try {
            var b = aL.getElementsByTagName("body")[0].appendChild(ar("span"));
            b.parentNode.removeChild(b);
        } catch(a) {
            return;
        }
        ak = true;
        var d = Z.length;
        for (var c = 0; c < d; c++) {
            Z[c]();
        }
    }
    function aj(a) {
        if (ak) {
            a();
        } else {
            Z[Z.length] = a;
        }
    }
    function aC(a) {
        if (typeof af.addEventListener != aq) {
            af.addEventListener("load", a, false);
        } else {
            if (typeof aL.addEventListener != aq) {
                aL.addEventListener("load", a, false);
            } else {
                if (typeof af.attachEvent != aq) {
                    aM(af, "onload", a);
                } else {
                    if (typeof af.onload == "function") {
                        var b = af.onload;
                        af.onload = function() {
                            b();
                            a();
                        };
                    } else {
                        af.onload = a;
                    }
                }
            }
        }
    }
    function aN() {
        if (aa) {
            Y();
        } else {
            am();
        }
    }
    function Y() {
        var d = aL.getElementsByTagName("body")[0];
        var b = ar(aD);
        b.setAttribute("type", aE);
        var a = d.appendChild(b);
        if (a) {
            var c = 0; (function() {
                if (typeof a.GetVariable != aq) {
                    var e = a.GetVariable("$version");
                    if (e) {
                        e = e.split(" ")[1].split(",");
                        ah.pv = [parseInt(e[0], 10), parseInt(e[1], 10), parseInt(e[2], 10)];
                    }
                } else {
                    if (c < 10) {
                        c++;
                        setTimeout(arguments.callee, 10);
                        return;
                    }
                }
                d.removeChild(b);
                a = null;
                am();
            })();
        } else {
            am();
        }
    }
    function am() {
        var g = aG.length;
        if (g > 0) {
            for (var h = 0; h < g; h++) {
                var c = aG[h].id;
                var l = aG[h].callbackFn;
                var a = {
                    success: false,
                    id: c
                };
                if (ah.pv[0] > 0) {
                    var i = aS(c);
                    if (i) {
                        if (ao(aG[h].swfVersion) && !(ah.wk && ah.wk < 312)) {
                            ay(c, true);
                            if (l) {
                                a.success = true;
                                a.ref = av(c);
                                l(a);
                            }
                        } else {
                            if (aG[h].expressInstall && au()) {
                                var e = {};
                                e.data = aG[h].expressInstall;
                                e.width = i.getAttribute("width") || "0";
                                e.height = i.getAttribute("height") || "0";
                                if (i.getAttribute("class")) {
                                    e.styleclass = i.getAttribute("class");
                                }
                                if (i.getAttribute("align")) {
                                    e.align = i.getAttribute("align");
                                }
                                var f = {};
                                var d = i.getElementsByTagName("param");
                                var k = d.length;
                                for (var j = 0; j < k; j++) {
                                    if (d[j].getAttribute("name").toLowerCase() != "movie") {
                                        f[d[j].getAttribute("name")] = d[j].getAttribute("value");
                                    }
                                }
                                ae(e, f, c, l);
                            } else {
                                aF(i);
                                if (l) {
                                    l(a);
                                }
                            }
                        }
                    }
                } else {
                    ay(c, true);
                    if (l) {
                        var b = av(c);
                        if (b && typeof b.SetVariable != aq) {
                            a.success = true;
                            a.ref = b;
                        }
                        l(a);
                    }
                }
            }
        }
    }
    function av(b) {
        var d = null;
        var c = aS(b);
        if (c && c.nodeName == "OBJECT") {
            if (typeof c.SetVariable != aq) {
                d = c;
            } else {
                var a = c.getElementsByTagName(aD)[0];
                if (a) {
                    d = a;
                }
            }
        }
        return d;
    }
    function au() {
        return ! aU && ao("6.0.65") && (ah.win || ah.mac) && !(ah.wk && ah.wk < 312);
    }
    function ae(f, d, h, e) {
        aU = true;
        ap = e || null;
        at = {
            success: false,
            id: h
        };
        var a = aS(h);
        if (a) {
            if (a.nodeName == "OBJECT") {
                aJ = aO(a);
                ad = null;
            } else {
                aJ = a;
                ad = h;
            }
            f.id = ac;
            if (typeof f.width == aq || (!/%$/.test(f.width) && parseInt(f.width, 10) < 310)) {
                f.width = "310";
            }
            if (typeof f.height == aq || (!/%$/.test(f.height) && parseInt(f.height, 10) < 137)) {
                f.height = "137";
            }
            aL.title = aL.title.slice(0, 47) + " - Flash Player Installation";
            var b = ah.ie && ah.win ? "ActiveX": "PlugIn",
            c = "MMredirectURL=" + af.location.toString().replace(/&/g, "%26") + "&MMplayerType=" + b + "&MMdoctitle=" + aL.title;
            if (typeof d.flashvars != aq) {
                d.flashvars += "&" + c;
            } else {
                d.flashvars = c;
            }
            if (ah.ie && ah.win && a.readyState != 4) {
                var g = ar("div");
                h += "SWFObjectNew";
                g.setAttribute("id", h);
                a.parentNode.insertBefore(g, a);
                a.style.display = "none"; (function() {
                    if (a.readyState == 4) {
                        a.parentNode.removeChild(a);
                    } else {
                        setTimeout(arguments.callee, 10);
                    }
                })();
            }
            aA(f, d, h);
        }
    }
    function aF(a) {
        if (ah.ie && ah.win && a.readyState != 4) {
            var b = ar("div");
            a.parentNode.insertBefore(b, a);
            b.parentNode.replaceChild(aO(a), b);
            a.style.display = "none"; (function() {
                if (a.readyState == 4) {
                    a.parentNode.removeChild(a);
                } else {
                    setTimeout(arguments.callee, 10);
                }
            })();
        } else {
            a.parentNode.replaceChild(aO(a), a);
        }
    }
    function aO(b) {
        var d = ar("div");
        if (ah.win && ah.ie) {
            d.innerHTML = b.innerHTML;
        } else {
            var e = b.getElementsByTagName(aD)[0];
            if (e) {
                var a = e.childNodes;
                if (a) {
                    var f = a.length;
                    for (var c = 0; c < f; c++) {
                        if (! (a[c].nodeType == 1 && a[c].nodeName == "PARAM") && !(a[c].nodeType == 8)) {
                            d.appendChild(a[c].cloneNode(true));
                        }
                    }
                }
            }
        }
        return d;
    }
    function aA(e, g, c) {
        var d,
        a = aS(c);
        if (ah.wk && ah.wk < 312) {
            return d;
        }
        if (a) {
            if (typeof e.id == aq) {
                e.id = c;
            }
            if (ah.ie && ah.win) {
                var f = "";
                for (var i in e) {
                    if (e[i] != Object.prototype[i]) {
                        if (i.toLowerCase() == "data") {
                            g.movie = e[i];
                        } else {
                            if (i.toLowerCase() == "styleclass") {
                                f += ' class="' + e[i] + '"';
                            } else {
                                if (i.toLowerCase() != "classid") {
                                    f += " " + i + '="' + e[i] + '"';
                                }
                            }
                        }
                    }
                }
                var h = "";
                for (var j in g) {
                    if (g[j] != Object.prototype[j]) {
                        h += '<param name="' + j + '" value="' + g[j] + '" />';
                    }
                }
                a.outerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"' + f + ">" + h + "</object>";
                ag[ag.length] = e.id;
                d = aS(e.id);
            } else {
                var b = ar(aD);
                b.setAttribute("type", aE);
                for (var k in e) {
                    if (e[k] != Object.prototype[k]) {
                        if (k.toLowerCase() == "styleclass") {
                            b.setAttribute("class", e[k]);
                        } else {
                            if (k.toLowerCase() != "classid") {
                                b.setAttribute(k, e[k]);
                            }
                        }
                    }
                }
                for (var l in g) {
                    if (g[l] != Object.prototype[l] && l.toLowerCase() != "movie") {
                        aQ(b, l, g[l]);
                    }
                }
                a.parentNode.replaceChild(b, a);
                d = b;
            }
        }
        return d;
    }
    function aQ(b, d, c) {
        var a = ar("param");
        a.setAttribute("name", d);
        a.setAttribute("value", c);
        b.appendChild(a);
    }
    function aw(a) {
        var b = aS(a);
        if (b && b.nodeName == "OBJECT") {
            if (ah.ie && ah.win) {
                b.style.display = "none"; (function() {
                    if (b.readyState == 4) {
                        aT(a);
                    } else {
                        setTimeout(arguments.callee, 10);
                    }
                })();
            } else {
                b.parentNode.removeChild(b);
            }
        }
    }
    function aT(a) {
        var b = aS(a);
        if (b) {
            for (var c in b) {
                if (typeof b[c] == "function") {
                    b[c] = null;
                }
            }
            b.parentNode.removeChild(b);
        }
    }
    function aS(a) {
        var c = null;
        try {
            c = aL.getElementById(a);
        } catch(b) {}
        return c;
    }
    function ar(a) {
        return aL.createElement(a);
    }
    function aM(a, c, b) {
        a.attachEvent(c, b);
        al[al.length] = [a, c, b];
    }
    function ao(a) {
        var b = ah.pv,
        c = a.split(".");
        c[0] = parseInt(c[0], 10);
        c[1] = parseInt(c[1], 10) || 0;
        c[2] = parseInt(c[2], 10) || 0;
        return (b[0] > c[0] || (b[0] == c[0] && b[1] > c[1]) || (b[0] == c[0] && b[1] == c[1] && b[2] >= c[2])) ? true: false;
    }
    function az(b, f, a, c) {
        if (ah.ie && ah.mac) {
            return;
        }
        var e = aL.getElementsByTagName("head")[0];
        if (!e) {
            return;
        }
        var g = (a && typeof a == "string") ? a: "screen";
        if (c) {
            aH = null;
            an = null;
        }
        if (!aH || an != g) {
            var d = ar("style");
            d.setAttribute("type", "text/css");
            d.setAttribute("media", g);
            aH = e.appendChild(d);
            if (ah.ie && ah.win && typeof aL.styleSheets != aq && aL.styleSheets.length > 0) {
                aH = aL.styleSheets[aL.styleSheets.length - 1];
            }
            an = g;
        }
        if (ah.ie && ah.win) {
            if (aH && typeof aH.addRule == aD) {
                aH.addRule(b, f);
            }
        } else {
            if (aH && typeof aL.createTextNode != aq) {
                aH.appendChild(aL.createTextNode(b + " {" + f + "}"));
            }
        }
    }
    function ay(a, c) {
        if (!aI) {
            return;
        }
        var b = c ? "visible": "hidden";
        if (ak && aS(a)) {
            aS(a).style.visibility = b;
        } else {
            az("#" + a, "visibility:" + b);
        }
    }
    function ai(b) {
        var a = /[\\\"<>\.;]/;
        var c = a.exec(b) != null;
        return c && typeof encodeURIComponent != aq ? encodeURIComponent(b) : b;
    }
    var aR = function() {
        if (ah.ie && ah.win) {
            window.attachEvent("onunload", function() {
                var a = al.length;
                for (var b = 0; b < a; b++) {
                    al[b][0].detachEvent(al[b][1], al[b][2]);
                }
                var d = ag.length;
                for (var c = 0; c < d; c++) {
                    aw(ag[c]);
                }
                for (var e in ah) {
                    ah[e] = null;
                }
                ah = null;
                for (var f in swfobject) {
                    swfobject[f] = null;
                }
                swfobject = null;
            });
        }
    } ();
    return {
        registerObject: function(a, e, c, b) {
            if (ah.w3 && a && e) {
                var d = {};
                d.id = a;
                d.swfVersion = e;
                d.expressInstall = c;
                d.callbackFn = b;
                aG[aG.length] = d;
                ay(a, false);
            } else {
                if (b) {
                    b({
                        success: false,
                        id: a
                    });
                }
            }
        },
        getObjectById: function(a) {
            if (ah.w3) {
                return av(a);
            }
        },
        embedSWF: function(k, e, h, f, c, a, b, i, g, j) {
            var d = {
                success: false,
                id: e
            };
            if (ah.w3 && !(ah.wk && ah.wk < 312) && k && e && h && f && c) {
                ay(e, false);
                aj(function() {
                    h += "";
                    f += "";
                    var q = {};
                    if (g && typeof g === aD) {
                        for (var o in g) {
                            q[o] = g[o];
                        }
                    }
                    q.data = k;
                    q.width = h;
                    q.height = f;
                    var n = {};
                    if (i && typeof i === aD) {
                        for (var p in i) {
                            n[p] = i[p];
                        }
                    }
                    if (b && typeof b === aD) {
                        for (var l in b) {
                            if (typeof n.flashvars != aq) {
                                n.flashvars += "&" + l + "=" + b[l];
                            } else {
                                n.flashvars = l + "=" + b[l];
                            }
                        }
                    }
                    if (ao(c)) {
                        var m = aA(q, n, e);
                        if (q.id == e) {
                            ay(e, true);
                        }
                        d.success = true;
                        d.ref = m;
                    } else {
                        if (a && au()) {
                            q.data = a;
                            ae(q, n, e, j);
                            return;
                        } else {
                            ay(e, true);
                        }
                    }
                    if (j) {
                        j(d);
                    }
                });
            } else {
                if (j) {
                    j(d);
                }
            }
        },
        switchOffAutoHideShow: function() {
            aI = false;
        },
        ua: ah,
        getFlashPlayerVersion: function() {
            return {
                major: ah.pv[0],
                minor: ah.pv[1],
                release: ah.pv[2]
                };
        },
        hasFlashPlayerVersion: ao,
        createSWF: function(a, b, c) {
            if (ah.w3) {
                return aA(a, b, c);
            } else {
                return undefined;
            }
        },
        showExpressInstall: function(b, a, d, c) {
            if (ah.w3 && au()) {
                ae(b, a, d, c);
            }
        },
        removeSWF: function(a) {
            if (ah.w3) {
                aw(a);
            }
        },
        createCSS: function(b, a, c, d) {
            if (ah.w3) {
                az(b, a, c, d);
            }
        },
        addDomLoadEvent: aj,
        addLoadEvent: aC,
        getQueryParamValue: function(b) {
            var a = aL.location.search || aL.location.hash;
            if (a) {
                if (/\?/.test(a)) {
                    a = a.split("?")[1];
                }
                if (b == null) {
                    return ai(a);
                }
                var c = a.split("&");
                for (var d = 0; d < c.length; d++) {
                    if (c[d].substring(0, c[d].indexOf("=")) == b) {
                        return ai(c[d].substring((c[d].indexOf("=") + 1)));
                    }
                }
            }
            return "";
        },
        expressInstallCallback: function() {
            if (aU) {
                var a = aS(ac);
                if (a && aJ) {
                    a.parentNode.replaceChild(aJ, a);
                    if (ad) {
                        ay(ad, true);
                        if (ah.ie && ah.win) {
                            aJ.style.display = "block";
                        }
                    }
                    if (ap) {
                        ap(at);
                    }
                }
                aU = false;
            }
        }
    };
} (); (function() {
    if (window.WebSocket) {
        return;
    }
    var a = window.console;
    if (!a || !a.log || !a.error) {
        a = {
            log: function() {},
            error: function() {}
        };
    }
    if (!swfobject.hasFlashPlayerVersion("10.0.0")) {
        a.error("Flash Player >= 10.0.0 is required.");
        return;
    }
    if (location.protocol == "file:") {
        a.error("WARNING: web-socket-js doesn't work in file:///... URL unless you set Flash Security Settings properly. Open the page via Web server i.e. http://...");
    }
    WebSocket = function(d, e, c, g, f) {
        var b = this;
        b.__id = WebSocket.__nextId++;
        WebSocket.__instances[b.__id] = b;
        b.readyState = WebSocket.CONNECTING;
        b.bufferedAmount = 0;
        b.__events = {};
        if (!e) {
            e = [];
        } else {
            if (typeof e == "string") {
                e = [e];
            }
        }
        setTimeout(function() {
            WebSocket.__addTask(function() {
                WebSocket.__flash.create(b.__id, d, e, c || null, g || 0, f || null);
            });
        }, 0);
    };
    WebSocket.prototype.send = function(c) {
        if (this.readyState == WebSocket.CONNECTING) {
            throw "INVALID_STATE_ERR: Web Socket connection has not been established";
        }
        var b = WebSocket.__flash.send(this.__id, encodeURIComponent(c));
        if (b < 0) {
            return true;
        } else {
            this.bufferedAmount += b;
            return false;
        }
    };
    WebSocket.prototype.close = function() {
        if (this.readyState == WebSocket.CLOSED || this.readyState == WebSocket.CLOSING) {
            return;
        }
        this.readyState = WebSocket.CLOSING;
        WebSocket.__flash.close(this.__id);
    };
    WebSocket.prototype.addEventListener = function(c, d, b) {
        if (! (c in this.__events)) {
            this.__events[c] = [];
        }
        this.__events[c].push(d);
    };
    WebSocket.prototype.removeEventListener = function(e, f, b) {
        if (! (e in this.__events)) {
            return;
        }
        var d = this.__events[e];
        for (var c = d.length - 1; c >= 0;--c) {
            if (d[c] === f) {
                d.splice(c, 1);
                break;
            }
        }
    };
    WebSocket.prototype.dispatchEvent = function(e) {
        var c = this.__events[e.type] || [];
        for (var b = 0; b < c.length;++b) {
            c[b](e);
        }
        var d = this["on" + e.type];
        if (d) {
            d(e);
        }
    };
    WebSocket.prototype.__handleEvent = function(d) {
        if ("readyState" in d) {
            this.readyState = d.readyState;
        }
        if ("protocol" in d) {
            this.protocol = d.protocol;
        }
        var b;
        if (d.type == "open" || d.type == "error") {
            b = this.__createSimpleEvent(d.type);
        } else {
            if (d.type == "close") {
                b = this.__createSimpleEvent("close");
            } else {
                if (d.type == "message") {
                    var c = decodeURIComponent(d.message);
                    b = this.__createMessageEvent("message", c);
                } else {
                    throw "unknown event type: " + d.type;
                }
            }
        }
        this.dispatchEvent(b);
    };
    WebSocket.prototype.__createSimpleEvent = function(b) {
        if (document.createEvent && window.Event) {
            var c = document.createEvent("Event");
            c.initEvent(b, false, false);
            return c;
        } else {
            return {
                type: b,
                bubbles: false,
                cancelable: false
            };
        }
    };
    WebSocket.prototype.__createMessageEvent = function(b, d) {
        if (document.createEvent && window.MessageEvent && !window.opera) {
            var c = document.createEvent("MessageEvent");
            c.initMessageEvent("message", false, false, d, null, null, window, null);
            return c;
        } else {
            return {
                type: b,
                data: d,
                bubbles: false,
                cancelable: false
            };
        }
    };
    WebSocket.CONNECTING = 0;
    WebSocket.OPEN = 1;
    WebSocket.CLOSING = 2;
    WebSocket.CLOSED = 3;
    WebSocket.__flash = null;
    WebSocket.__instances = {};
    WebSocket.__tasks = [];
    WebSocket.__nextId = 0;
    WebSocket.loadFlashPolicyFile = function(b) {
        WebSocket.__addTask(function() {
            WebSocket.__flash.loadManualPolicyFile(b);
        });
    };
    WebSocket.__initialize = function() {
        if (WebSocket.__flash) {
            return;
        }
        if (WebSocket.__swfLocation) {
            window.WEB_SOCKET_SWF_LOCATION = WebSocket.__swfLocation;
        }
        if (!window.WEB_SOCKET_SWF_LOCATION) {
            a.error("[WebSocket] set WEB_SOCKET_SWF_LOCATION to location of WebSocketMain.swf");
            return;
        }
        var b = document.createElement("div");
        b.id = "webSocketContainer";
        b.style.position = "absolute";
        if (WebSocket.__isFlashLite()) {
            b.style.left = "0px";
            b.style.top = "0px";
        } else {
            b.style.left = "-100px";
            b.style.top = "-100px";
        }
        var c = document.createElement("div");
        c.id = "webSocketFlash";
        b.appendChild(c);
        document.body.appendChild(b);
        swfobject.embedSWF(WEB_SOCKET_SWF_LOCATION, "webSocketFlash", "1", "1", "10.0.0", null, null, {
            hasPriority: true,
            swliveconnect: true,
            allowScriptAccess: "always"
        }, null, function(d) {
            if (!d.success) {
                a.error("[WebSocket] swfobject.embedSWF failed");
            }
        });
    };
    WebSocket.__onFlashInitialized = function() {
        setTimeout(function() {
            WebSocket.__flash = document.getElementById("webSocketFlash");
            WebSocket.__flash.setCallerUrl(location.href);
            WebSocket.__flash.setDebug( !! window.WEB_SOCKET_DEBUG);
            for (var b = 0; b < WebSocket.__tasks.length;++b) {
                WebSocket.__tasks[b]();
            }
            WebSocket.__tasks = [];
        }, 0);
    };
    WebSocket.__onFlashEvent = function() {
        setTimeout(function() {
            try {
                var c = WebSocket.__flash.receiveEvents();
                for (var b = 0; b < c.length;++b) {
                    WebSocket.__instances[c[b].webSocketId].__handleEvent(c[b]);
                }
            } catch(d) {
                a.error(d);
            }
        }, 0);
        return true;
    };
    WebSocket.__log = function(b) {
        a.log(decodeURIComponent(b));
    };
    WebSocket.__error = function(b) {
        a.error(decodeURIComponent(b));
    };
    WebSocket.__addTask = function(b) {
        if (WebSocket.__flash) {
            b();
        } else {
            WebSocket.__tasks.push(b);
        }
    };
    WebSocket.__isFlashLite = function() {
        if (!window.navigator || !window.navigator.mimeTypes) {
            return false;
        }
        var b = window.navigator.mimeTypes["application/x-shockwave-flash"];
        if (!b || !b.enabledPlugin || !b.enabledPlugin.filename) {
            return false;
        }
        return b.enabledPlugin.filename.match(/flashlite/i) ? true: false;
    };
    if (!window.WEB_SOCKET_DISABLE_AUTO_INITIALIZATION) {
        if (window.addEventListener) {
            window.addEventListener("load", function() {
                WebSocket.__initialize();
            }, false);
        } else {
            window.attachEvent("onload", function() {
                WebSocket.__initialize();
            });
        }
    }
})(); (function(c) {
    var b = null;
    function a(aP, T) {
        this.flashVersion = 8;
        this.debugMode = true;
        this.debugFlash = false;
        this.useConsole = true;
        this.consoleOnly = true;
        this.waitForWindowLoad = false;
        this.bgColor = "#ffffff";
        this.useHighPerformance = false;
        this.flashPollingInterval = null;
        this.html5PollingInterval = null;
        this.flashLoadTimeout = 1000;
        this.wmode = null;
        this.allowScriptAccess = "always";
        this.useFlashBlock = false;
        this.useHTML5Audio = true;
        this.html5Test = /^(probably|maybe)$/i;
        this.preferFlash = true;
        this.noSWFCache = false;
        this.audioFormats = {
            mp3: {
                type: ['audio/mpeg; codecs="mp3"', "audio/mpeg", "audio/mp3", "audio/MPA", "audio/mpa-robust"],
                required: true
            },
            mp4: {
                related: ["aac", "m4a"],
                type: ['audio/mp4; codecs="mp4a.40.2"', "audio/aac", "audio/x-m4a", "audio/MP4A-LATM", "audio/mpeg4-generic"],
                required: false
            },
            ogg: {
                type: ["audio/ogg; codecs=vorbis"],
                required: false
            },
            wav: {
                type: ['audio/wav; codecs="1"', "audio/wav", "audio/wave", "audio/x-wav"],
                required: false
            }
        };
        this.defaultOptions = {
            autoLoad: false,
            autoPlay: false,
            from: null,
            loops: 1,
            onid3: null,
            onload: null,
            whileloading: null,
            onplay: null,
            onpause: null,
            onresume: null,
            whileplaying: null,
            onposition: null,
            onstop: null,
            onfailure: null,
            onfinish: null,
            multiShot: true,
            multiShotEvents: false,
            position: null,
            pan: 0,
            stream: true,
            to: null,
            type: null,
            usePolicyFile: false,
            volume: 100
        };
        this.flash9Options = {
            isMovieStar: null,
            usePeakData: false,
            useWaveformData: false,
            useEQData: false,
            onbufferchange: null,
            ondataerror: null
        };
        this.movieStarOptions = {
            bufferTime: 3,
            serverURL: null,
            onconnect: null,
            duration: null
        };
        this.movieID = "sm2-container";
        this.id = (T || "sm2movie");
        this.debugID = "soundmanager-debug";
        this.debugURLParam = /([#?&])debug=1/i;
        this.versionNumber = "V2.97a.20120527";
        this.version = null;
        this.movieURL = null;
        this.url = (aP || null);
        this.altURL = null;
        this.swfLoaded = false;
        this.enabled = false;
        this.oMC = null;
        this.sounds = {};
        this.soundIDs = [];
        this.muted = false;
        this.didFlashBlock = false;
        this.filePattern = null;
        this.filePatterns = {
            flash8: /\.mp3(\?.*)?$/i,
            flash9: /\.mp3(\?.*)?$/i
        };
        this.features = {
            buffering: false,
            peakData: false,
            waveformData: false,
            eqData: false,
            movieStar: false
        };
        this.sandbox = {
            type: null,
            types: {
                remote: "remote (domain-based) rules",
                localWithFile: "local with file access (no internet access)",
                localWithNetwork: "local with network (internet access only, no local access)",
                localTrusted: "local, trusted (local+internet access)"
            },
            description: null,
            noRemote: null,
            noLocal: null
        };
        this.hasHTML5 = (function() {
            try {
                return (typeof Audio !== "undefined" && typeof new Audio().canPlayType !== "undefined");
            } catch(a5) {
                return false;
            }
        } ());
        this.html5 = {
            usingFlash: null
        };
        this.flash = {};
        this.html5Only = false;
        this.ignoreFlash = false;
        var V,
        a3 = this,
        n = null,
        aL = "soundManager",
        ay = aL + "::",
        aS = "HTML5::",
        aa,
        ag = navigator.userAgent,
        k = c,
        l = k.location.href.toString(),
        aQ = document,
        ai,
        aF,
        e,
        ar = [],
        m = true,
        am,
        aC = false,
        aY = false,
        aW = false,
        J = false,
        w = false,
        C,
        aT = 0,
        W,
        aq,
        aZ,
        a2,
        az,
        ao,
        v,
        O,
        aN,
        P,
        t,
        M,
        B,
        aJ,
        ax,
        aV,
        aM,
        at,
        I,
        Z = ["log", "info", "warn", "error"],
        S = 8,
        X,
        aw,
        h,
        p = null,
        aA = null,
        ab,
        i,
        N,
        z,
        A,
        ad,
        y,
        d,
        aj,
        a4 = false,
        G = false,
        x,
        U,
        au,
        af = 0,
        r = null,
        aU,
        an = null,
        al,
        E,
        aE,
        q,
        aD,
        aI,
        a1,
        s,
        j = Array.prototype.slice,
        aX = false,
        g,
        a0,
        ac,
        u,
        D,
        H = ag.match(/(ipad|iphone|ipod)/i),
        aO = ag.match(/firefox/i),
        f = ag.match(/msie/i),
        o = ag.match(/webkit/i),
        F = (ag.match(/safari/i) && !ag.match(/chrome/i)),
        L = (ag.match(/opera/i)),
        Y = (ag.match(/(mobile|pre\/|xoom)/i) || H),
        av = (!l.match(/usehtml5audio/i) && !l.match(/sm2\-ignorebadua/i) && F && !ag.match(/silk/i) && ag.match(/OS X 10_6_([3-7])/i)),
        aK = (typeof console !== "undefined" && typeof console.log !== "undefined"),
        aR = (typeof aQ.hasFocus !== "undefined" ? aQ.hasFocus() : null),
        ah = (F && (typeof aQ.hasFocus === "undefined" || !aQ.hasFocus())),
        K = !ah,
        R = /(mp3|mp4|mpa)/i,
        ap = "about:blank",
        aB = (aQ.location ? aQ.location.protocol.match(/http/i) : null),
        aG = (!aB ? "http://": ""),
        ak = /^\s*audio\/(?:x-)?(?:mpeg4|aac|flv|mov|mp4||m4v|m4a|mp4v|3gp|3g2)\s*(?:$|;)/i,
        aH = ["mpeg4", "aac", "flv", "mov", "mp4", "m4v", "f4v", "m4a", "mp4v", "3gp", "3g2"],
        ae = new RegExp("\\.(" + aH.join("|") + ")(\\?.*)?$", "i");
        this.mimePattern = /^\s*audio\/(?:x-)?(?:mp(?:eg|3))\s*(?:$|;)/i;
        this.useAltURL = !aB;
        this._global_a = null;
        z = {
            swfBox: "sm2-object-box",
            swfDefault: "movieContainer",
            swfError: "swf_error",
            swfTimedout: "swf_timedout",
            swfLoaded: "swf_loaded",
            swfUnblocked: "swf_unblocked",
            sm2Debug: "sm2_debug",
            highPerf: "high_performance",
            flashDebug: "flash_debug"
        };
        if (Y) {
            a3.useHTML5Audio = true;
            a3.preferFlash = false;
            if (H) {
                a3.ignoreFlash = true;
                aX = true;
            }
        }
        this.ok = function() {
            return (an ? (aW && !J) : (a3.useHTML5Audio && a3.hasHTML5));
        };
        this.supported = this.ok;
        this.getMovie = function(a5) {
            return aa(a5) || aQ[a5] || k[a5];
        };
        this.createSound = function(a7, ba) {
            var bc,
            bb,
            a9 = null,
            a8 = null,
            a6 = null;
            bc = aL + ".createSound(): ";
            bb = bc + ab(!aW ? "notReady": "notOK");
            if (!aW || !a3.ok()) {
                d(bb);
                return false;
            }
            if (typeof ba !== "undefined") {
                a7 = {
                    id: a7,
                    url: ba
                };
            }
            a9 = aq(a7);
            a9.url = aU(a9.url);
            a6 = a9;
            if (a6.id.toString().charAt(0).match(/^[0-9]$/)) {
                a3._wD(bc + ab("badID", a6.id), 2);
            }
            a3._wD(bc + a6.id + " (" + a6.url + ")", 1);
            if (aj(a6.id, true)) {
                a3._wD(bc + a6.id + " exists", 1);
                return a3.sounds[a6.id];
            }
            function a5() {
                a9 = ad(a9);
                a3.sounds[a6.id] = new V(a6);
                a3.soundIDs.push(a6.id);
                return a3.sounds[a6.id];
            }
            if (E(a6)) {
                a8 = a5();
                a3._wD("Loading sound " + a6.id + " via HTML5");
                a8._setup_html5(a6);
            } else {
                if (e > 8) {
                    if (a6.isMovieStar === null) {
                        a6.isMovieStar = (a6.serverURL || (a6.type ? a6.type.match(ak) : false) || a6.url.match(ae));
                    }
                    if (a6.isMovieStar) {
                        a3._wD(bc + "using MovieStar handling");
                        if (a6.loops > 1) {
                            C("noNSLoop");
                        }
                    }
                }
                a6 = y(a6, bc);
                a8 = a5();
                if (e === 8) {
                    n._createSound(a6.id, a6.loops || 1, a6.usePolicyFile);
                } else {
                    n._createSound(a6.id, a6.url, a6.usePeakData, a6.useWaveformData, a6.useEQData, a6.isMovieStar, (a6.isMovieStar ? a6.bufferTime: false), a6.loops || 1, a6.serverURL, a6.duration || null, a6.autoPlay, true, a6.autoLoad, a6.usePolicyFile);
                    if (!a6.serverURL) {
                        a8.connected = true;
                        if (a6.onconnect) {
                            a6.onconnect.apply(a8);
                        }
                    }
                }
                if (!a6.serverURL && (a6.autoLoad || a6.autoPlay)) {
                    a8.load(a6);
                }
            }
            if (!a6.serverURL && a6.autoPlay) {
                a8.play();
            }
            return a8;
        };
        this.destroySound = function(a5, a8) {
            if (!aj(a5)) {
                return false;
            }
            var a7 = a3.sounds[a5],
            a6;
            a7._iO = {};
            a7.stop();
            a7.unload();
            for (a6 = 0; a6 < a3.soundIDs.length; a6++) {
                if (a3.soundIDs[a6] === a5) {
                    a3.soundIDs.splice(a6, 1);
                    break;
                }
            }
            if (!a8) {
                a7.destruct(true);
            }
            a7 = null;
            delete a3.sounds[a5];
            return true;
        };
        this.load = function(a5, a6) {
            if (!aj(a5)) {
                return false;
            }
            return a3.sounds[a5].load(a6);
        };
        this.unload = function(a5) {
            if (!aj(a5)) {
                return false;
            }
            return a3.sounds[a5].unload();
        };
        this.onPosition = function(a8, a7, a6, a5) {
            if (!aj(a8)) {
                return false;
            }
            return a3.sounds[a8].onposition(a7, a6, a5);
        };
        this.onposition = this.onPosition;
        this.clearOnPosition = function(a7, a6, a5) {
            if (!aj(a7)) {
                return false;
            }
            return a3.sounds[a7].clearOnPosition(a6, a5);
        };
        this.play = function(a6, a7) {
            var a5 = false;
            if (!aW || !a3.ok()) {
                d(aL + ".play(): " + ab(!aW ? "notReady": "notOK"));
                return a5;
            }
            if (!aj(a6)) {
                if (! (a7 instanceof Object)) {
                    a7 = {
                        url: a7
                    };
                }
                if (a7 && a7.url) {
                    a3._wD(aL + '.play(): attempting to create "' + a6 + '"', 1);
                    a7.id = a6;
                    a5 = a3.createSound(a7).play();
                }
                return a5;
            }
            return a3.sounds[a6].play(a7);
        };
        this.start = this.play;
        this.setPosition = function(a5, a6) {
            if (!aj(a5)) {
                return false;
            }
            return a3.sounds[a5].setPosition(a6);
        };
        this.stop = function(a5) {
            if (!aj(a5)) {
                return false;
            }
            a3._wD(aL + ".stop(" + a5 + ")", 1);
            return a3.sounds[a5].stop();
        };
        this.stopAll = function() {
            var a5;
            a3._wD(aL + ".stopAll()", 1);
            for (a5 in a3.sounds) {
                if (a3.sounds.hasOwnProperty(a5)) {
                    a3.sounds[a5].stop();
                }
            }
        };
        this.pause = function(a5) {
            if (!aj(a5)) {
                return false;
            }
            return a3.sounds[a5].pause();
        };
        this.pauseAll = function() {
            var a5;
            for (a5 = a3.soundIDs.length - 1; a5 >= 0; a5--) {
                a3.sounds[a3.soundIDs[a5]].pause();
            }
        };
        this.resume = function(a5) {
            if (!aj(a5)) {
                return false;
            }
            return a3.sounds[a5].resume();
        };
        this.resumeAll = function() {
            var a5;
            for (a5 = a3.soundIDs.length - 1; a5 >= 0; a5--) {
                a3.sounds[a3.soundIDs[a5]].resume();
            }
        };
        this.togglePause = function(a5) {
            if (!aj(a5)) {
                return false;
            }
            return a3.sounds[a5].togglePause();
        };
        this.setPan = function(a5, a6) {
            if (!aj(a5)) {
                return false;
            }
            return a3.sounds[a5].setPan(a6);
        };
        this.setVolume = function(a6, a5) {
            if (!aj(a6)) {
                return false;
            }
            return a3.sounds[a6].setVolume(a5);
        };
        this.mute = function(a5) {
            var a6 = 0;
            if (typeof a5 !== "string") {
                a5 = null;
            }
            if (!a5) {
                a3._wD(aL + ".mute(): Muting all sounds");
                for (a6 = a3.soundIDs.length - 1; a6 >= 0; a6--) {
                    a3.sounds[a3.soundIDs[a6]].mute();
                }
                a3.muted = true;
            } else {
                if (!aj(a5)) {
                    return false;
                }
                a3._wD(aL + '.mute(): Muting "' + a5 + '"');
                return a3.sounds[a5].mute();
            }
            return true;
        };
        this.muteAll = function() {
            a3.mute();
        };
        this.unmute = function(a5) {
            var a6;
            if (typeof a5 !== "string") {
                a5 = null;
            }
            if (!a5) {
                a3._wD(aL + ".unmute(): Unmuting all sounds");
                for (a6 = a3.soundIDs.length - 1; a6 >= 0; a6--) {
                    a3.sounds[a3.soundIDs[a6]].unmute();
                }
                a3.muted = false;
            } else {
                if (!aj(a5)) {
                    return false;
                }
                a3._wD(aL + '.unmute(): Unmuting "' + a5 + '"');
                return a3.sounds[a5].unmute();
            }
            return true;
        };
        this.unmuteAll = function() {
            a3.unmute();
        };
        this.toggleMute = function(a5) {
            if (!aj(a5)) {
                return false;
            }
            return a3.sounds[a5].toggleMute();
        };
        this.getMemoryUse = function() {
            var a5 = 0;
            if (n && e !== 8) {
                a5 = parseInt(n._getMemoryUse(), 10);
            }
            return a5;
        };
        this.disable = function(a6) {
            var a5;
            if (typeof a6 === "undefined") {
                a6 = false;
            }
            if (J) {
                return false;
            }
            J = true;
            C("shutdown", 1);
            for (a5 = a3.soundIDs.length - 1; a5 >= 0; a5--) {
                X(a3.sounds[a3.soundIDs[a5]]);
            }
            W(a6);
            s.remove(k, "load", az);
            return true;
        };
        this.canPlayMIME = function(a6) {
            var a5;
            if (a3.hasHTML5) {
                a5 = aE({
                    type: a6
                });
            }
            if (!a5 && an) {
                a5 = (a6 && a3.ok() ? !!((e > 8 ? a6.match(ak) : null) || a6.match(a3.mimePattern)) : null);
            }
            return a5;
        };
        this.canPlayURL = function(a6) {
            var a5;
            if (a3.hasHTML5) {
                a5 = aE({
                    url: a6
                });
            }
            if (!a5 && an) {
                a5 = (a6 && a3.ok() ? !!(a6.match(a3.filePattern)) : null);
            }
            return a5;
        };
        this.canPlayLink = function(a5) {
            if (typeof a5.type !== "undefined" && a5.type) {
                if (a3.canPlayMIME(a5.type)) {
                    return true;
                }
            }
            return a3.canPlayURL(a5.href);
        };
        this.getSoundById = function(a6, a7) {
            if (!a6) {
                throw new Error(aL + ".getSoundById(): sID is null/undefined");
            }
            var a5 = a3.sounds[a6];
            if (!a5 && !a7) {
                a3._wD('"' + a6 + '" is an invalid sound ID.', 2);
            }
            return a5;
        };
        this.onready = function(a7, a6) {
            var a8 = "onready",
            a5 = false;
            if (typeof a7 === "function") {
                if (aW) {
                    a3._wD(ab("queue", a8));
                }
                if (!a6) {
                    a6 = k;
                }
                aZ(a8, a7, a6);
                a2();
                a5 = true;
            } else {
                throw ab("needFunction", a8);
            }
            return a5;
        };
        this.ontimeout = function(a7, a6) {
            var a8 = "ontimeout",
            a5 = false;
            if (typeof a7 === "function") {
                if (aW) {
                    a3._wD(ab("queue", a8));
                }
                if (!a6) {
                    a6 = k;
                }
                aZ(a8, a7, a6);
                a2({
                    type: a8
                });
                a5 = true;
            } else {
                throw ab("needFunction", a8);
            }
            return a5;
        };
        this._writeDebug = function(a6, bc, a7) {
            var bb = "soundmanager-debug",
            ba,
            a9,
            a5;
            if (!a3.debugMode) {
                return false;
            }
            if (typeof a7 !== "undefined" && a7) {
                a6 = a6 + " | " + new Date().getTime();
            }
            if (aK && a3.useConsole) {
                a5 = Z[bc];
                if (typeof console[a5] !== "undefined") {
                    console[a5](a6);
                } else {
                    console.log(a6);
                }
                if (a3.consoleOnly) {
                    return true;
                }
            }
            try {
                ba = aa(bb);
                if (!ba) {
                    return false;
                }
                a9 = aQ.createElement("div");
                if (++aT % 2 === 0) {
                    a9.className = "sm2-alt";
                }
                if (typeof bc === "undefined") {
                    bc = 0;
                } else {
                    bc = parseInt(bc, 10);
                }
                a9.appendChild(aQ.createTextNode(a6));
                if (bc) {
                    if (bc >= 2) {
                        a9.style.fontWeight = "bold";
                    }
                    if (bc === 3) {
                        a9.style.color = "#ff3333";
                    }
                }
                ba.insertBefore(a9, ba.firstChild);
            } catch(a8) {}
            ba = null;
            return true;
        };
        this._wD = this._writeDebug;
        this._debug = function() {
            var a6,
            a5;
            C("currentObj", 1);
            for (a6 = 0, a5 = a3.soundIDs.length; a6 < a5; a6++) {
                a3.sounds[a3.soundIDs[a6]]._debug();
            }
        };
        this.reboot = function() {
            a3._wD(aL + ".reboot()");
            if (a3.soundIDs.length) {
                a3._wD("Destroying " + a3.soundIDs.length + " SMSound objects...");
            }
            var a6,
            a5;
            for (a6 = a3.soundIDs.length - 1; a6 >= 0; a6--) {
                a3.sounds[a3.soundIDs[a6]].destruct();
            }
            try {
                if (f) {
                    aA = n.innerHTML;
                }
                p = n.parentNode.removeChild(n);
                a3._wD("Flash movie removed.");
            } catch(a7) {
                C("badRemove", 2);
            }
            aA = p = an = null;
            a3.enabled = aJ = aW = a4 = G = aC = aY = J = a3.swfLoaded = false;
            a3.soundIDs = [];
            a3.sounds = {};
            n = null;
            for (a6 in ar) {
                if (ar.hasOwnProperty(a6)) {
                    for (a5 = ar[a6].length - 1; a5 >= 0; a5--) {
                        ar[a6][a5].fired = false;
                    }
                }
            }
            a3._wD(aL + ": Rebooting...");
            k.setTimeout(a3.beginDelayedInit, 20);
        };
        this.getMoviePercent = function() {
            return (n && typeof n.PercentLoaded !== "undefined" ? n.PercentLoaded() : null);
        };
        this.beginDelayedInit = function() {
            w = true;
            M();
            setTimeout(function() {
                if (G) {
                    return false;
                }
                aV();
                t();
                G = true;
                return true;
            }, 20);
            ao();
        };
        this.destruct = function() {
            a3._wD(aL + ".destruct()");
            a3.disable(true);
        };
        V = function(bf) {
            var bi = this,
            a9,
            a5,
            be,
            bd,
            a7,
            bh,
            ba = false,
            bj = [],
            a6 = 0,
            a8,
            bb,
            bg = null,
            bc;
            bc = {
                duration: null,
                time: null
            };
            this.sID = bf.id;
            this.url = bf.url;
            this.options = aq(bf);
            this.instanceOptions = this.options;
            this._iO = this.instanceOptions;
            this.pan = this.options.pan;
            this.volume = this.options.volume;
            this.isHTML5 = false;
            this._a = null;
            this.id3 = {};
            this._debug = function() {
                if (a3.debugMode) {
                    var bm = null,
                    bo = [],
                    bl,
                    bn,
                    bk = 64;
                    for (bm in bi.options) {
                        if (bi.options[bm] !== null) {
                            if (typeof bi.options[bm] === "function") {
                                bl = bi.options[bm].toString();
                                bl = bl.replace(/\s\s+/g, " ");
                                bn = bl.indexOf("{");
                                bo.push(" " + bm + ": {" + bl.substr(bn + 1, (Math.min(Math.max(bl.indexOf("\n") - 1, bk), bk))).replace(/\n/g, "") + "... }");
                            } else {
                                bo.push(" " + bm + ": " + bi.options[bm]);
                            }
                        }
                    }
                    a3._wD("SMSound() merged options: {\n" + bo.join(", \n") + "\n}");
                }
            };
            this._debug();
            this.load = function(bl) {
                var bm = null,
                bk;
                if (typeof bl !== "undefined") {
                    bi._iO = aq(bl, bi.options);
                    bi.instanceOptions = bi._iO;
                } else {
                    bl = bi.options;
                    bi._iO = bl;
                    bi.instanceOptions = bi._iO;
                    if (bg && bg !== bi.url) {
                        C("manURL");
                        bi._iO.url = bi.url;
                        bi.url = null;
                    }
                }
                if (!bi._iO.url) {
                    bi._iO.url = bi.url;
                }
                bi._iO.url = aU(bi._iO.url);
                a3._wD("SMSound.load(): " + bi._iO.url, 1);
                if (bi._iO.url === bi.url && bi.readyState !== 0 && bi.readyState !== 2) {
                    C("onURL", 1);
                    if (bi.readyState === 3 && bi._iO.onload) {
                        bi._iO.onload.apply(bi, [( !! bi.duration)]);
                    }
                    return bi;
                }
                bk = bi._iO;
                bg = bi.url;
                bi.loaded = false;
                bi.readyState = 1;
                bi.playState = 0;
                if (E(bk)) {
                    bm = bi._setup_html5(bk);
                    if (!bm._called_load) {
                        a3._wD(aS + "load: " + bi.sID);
                        bi._html5_canplay = false;
                        bi._a.autobuffer = "auto";
                        bi._a.preload = "auto";
                        bm._called_load = true;
                        if (bk.autoPlay) {
                            bi.play();
                        } else {
                            bm.load();
                        }
                    } else {
                        a3._wD(aS + "ignoring request to load again: " + bi.sID);
                    }
                } else {
                    try {
                        bi.isHTML5 = false;
                        bi._iO = y(ad(bk));
                        bk = bi._iO;
                        if (e === 8) {
                            n._load(bi.sID, bk.url, bk.stream, bk.autoPlay, (bk.whileloading ? 1: 0), bk.loops || 1, bk.usePolicyFile);
                        } else {
                            n._load(bi.sID, bk.url, !!(bk.stream), !!(bk.autoPlay), bk.loops || 1, !!(bk.autoLoad), bk.usePolicyFile);
                        }
                    } catch(bn) {
                        C("smError", 2);
                        am("onload", false);
                        aM({
                            type: "SMSOUND_LOAD_JS_EXCEPTION",
                            fatal: true
                        });
                    }
                }
                return bi;
            };
            this.unload = function() {
                if (bi.readyState !== 0) {
                    a3._wD('SMSound.unload(): "' + bi.sID + '"');
                    if (!bi.isHTML5) {
                        if (e === 8) {
                            n._unload(bi.sID, ap);
                        } else {
                            n._unload(bi.sID);
                        }
                    } else {
                        bd();
                        if (bi._a) {
                            bi._a.pause();
                            aD(bi._a);
                        }
                    }
                    a9();
                }
                return bi;
            };
            this.destruct = function(bk) {
                a3._wD('SMSound.destruct(): "' + bi.sID + '"');
                if (!bi.isHTML5) {
                    bi._iO.onfailure = null;
                    n._destroySound(bi.sID);
                } else {
                    bd();
                    if (bi._a) {
                        bi._a.pause();
                        aD(bi._a);
                        if (!aX) {
                            be();
                        }
                        bi._a._t = null;
                        bi._a = null;
                    }
                }
                if (!bk) {
                    a3.destroySound(bi.sID, true);
                }
            };
            this.play = function(bp, bl) {
                var br,
                bk,
                bm,
                bn,
                bq,
                bo = null;
                br = "SMSound.play(): ";
                bl = (typeof bl === "undefined" ? true: bl);
                if (!bp) {
                    bp = {};
                }
                bi._iO = aq(bp, bi._iO);
                bi._iO = aq(bi._iO, bi.options);
                bi._iO.url = aU(bi._iO.url);
                bi.instanceOptions = bi._iO;
                if (bi._iO.serverURL && !bi.connected) {
                    if (!bi.getAutoPlay()) {
                        a3._wD(br + " Netstream not connected yet - setting autoPlay");
                        bi.setAutoPlay(true);
                    }
                    return bi;
                }
                if (E(bi._iO)) {
                    bi._setup_html5(bi._iO);
                    a7();
                }
                if (bi.playState === 1 && !bi.paused) {
                    bk = bi._iO.multiShot;
                    if (!bk) {
                        a3._wD(br + '"' + bi.sID + '" already playing (one-shot)', 1);
                        bo = bi;
                    } else {
                        a3._wD(br + '"' + bi.sID + '" already playing (multi-shot)', 1);
                    }
                }
                if (bo !== null) {
                    return bo;
                }
                if (!bi.loaded) {
                    if (bi.readyState === 0) {
                        a3._wD(br + 'Attempting to load "' + bi.sID + '"', 1);
                        if (!bi.isHTML5) {
                            bi._iO.autoPlay = true;
                            bi.load(bi._iO);
                        } else {
                            if (H) {
                                bi.load(bi._iO);
                            }
                        }
                    } else {
                        if (bi.readyState === 2) {
                            a3._wD(br + 'Could not load "' + bi.sID + '" - exiting', 2);
                            bo = bi;
                        } else {
                            a3._wD(br + '"' + bi.sID + '" is loading - attempting to play..', 1);
                        }
                    }
                } else {
                    a3._wD(br + '"' + bi.sID + '"');
                }
                if (bo !== null) {
                    return bo;
                }
                if (!bi.isHTML5 && e === 9 && bi.position > 0 && bi.position === bi.duration) {
                    a3._wD(br + '"' + bi.sID + '": Sound at end, resetting to position:0');
                    bp.position = 0;
                }
                if (bi.paused && bi.position && bi.position > 0) {
                    a3._wD(br + '"' + bi.sID + '" is resuming from paused state', 1);
                    bi.resume();
                } else {
                    bi._iO = aq(bp, bi._iO);
                    if (bi._iO.from !== null && bi._iO.to !== null && bi.instanceCount === 0 && bi.playState === 0 && !bi._iO.serverURL) {
                        bn = function() {
                            bi._iO = aq(bp, bi._iO);
                            bi.play(bi._iO);
                        };
                        if (bi.isHTML5 && !bi._html5_canplay) {
                            a3._wD(br + 'Beginning load of "' + bi.sID + '" for from/to case');
                            bi.load({
                                _oncanplay: bn
                            });
                            bo = false;
                        } else {
                            if (!bi.isHTML5 && !bi.loaded && (!bi.readyState || bi.readyState !== 2)) {
                                a3._wD(br + 'Preloading "' + bi.sID + '" for from/to case');
                                bi.load({
                                    onload: bn
                                });
                                bo = false;
                            }
                        }
                        if (bo !== null) {
                            return bo;
                        }
                        bi._iO = bb();
                    }
                    a3._wD(br + '"' + bi.sID + '" is starting to play');
                    if (!bi.instanceCount || bi._iO.multiShotEvents || (!bi.isHTML5 && e > 8 && !bi.getAutoPlay())) {
                        bi.instanceCount++;
                    }
                    if (bi._iO.onposition && bi.playState === 0) {
                        bh(bi);
                    }
                    bi.playState = 1;
                    bi.paused = false;
                    bi.position = (typeof bi._iO.position !== "undefined" && !isNaN(bi._iO.position) ? bi._iO.position: 0);
                    if (!bi.isHTML5) {
                        bi._iO = y(ad(bi._iO));
                    }
                    if (bi._iO.onplay && bl) {
                        bi._iO.onplay.apply(bi);
                        ba = true;
                    }
                    bi.setVolume(bi._iO.volume, true);
                    bi.setPan(bi._iO.pan, true);
                    if (!bi.isHTML5) {
                        bq = n._start(bi.sID, bi._iO.loops || 1, (e === 9 ? bi._iO.position: bi._iO.position / 1000), bi._iO.multiShot);
                    } else {
                        a7();
                        bm = bi._setup_html5();
                        bi.setPosition(bi._iO.position);
                        bm.play();
                    }
                    if (e === 9 && !bq) {
                        a3._wD(br + bi.sID + ": No sound hardware, or 32-sound ceiling hit");
                        if (bi._iO.onplayerror) {
                            bi._iO.onplayerror.apply(bi);
                        }
                    }
                }
                return bi;
            };
            this.start = this.play;
            this.stop = function(bm) {
                var bl = bi._iO,
                bk;
                if (bi.playState === 1) {
                    bi._onbufferchange(0);
                    bi._resetOnPosition(0);
                    bi.paused = false;
                    if (!bi.isHTML5) {
                        bi.playState = 0;
                    }
                    a8();
                    if (bl.to) {
                        bi.clearOnPosition(bl.to);
                    }
                    if (!bi.isHTML5) {
                        n._stop(bi.sID, bm);
                        if (bl.serverURL) {
                            bi.unload();
                        }
                    } else {
                        if (bi._a) {
                            bk = bi.position;
                            bi.setPosition(0);
                            bi.position = bk;
                            bi._a.pause();
                            bi.playState = 0;
                            bi._onTimer();
                            bd();
                        }
                    }
                    bi.instanceCount = 0;
                    bi._iO = {};
                    if (bl.onstop) {
                        bl.onstop.apply(bi);
                    }
                }
                return bi;
            };
            this.setAutoPlay = function(bk) {
                a3._wD("sound " + bi.sID + " turned autoplay " + (bk ? "on": "off"));
                bi._iO.autoPlay = bk;
                if (!bi.isHTML5) {
                    n._setAutoPlay(bi.sID, bk);
                    if (bk) {
                        if (!bi.instanceCount && bi.readyState === 1) {
                            bi.instanceCount++;
                            a3._wD("sound " + bi.sID + " incremented instance count to " + bi.instanceCount);
                        }
                    }
                }
            };
            this.getAutoPlay = function() {
                return bi._iO.autoPlay;
            };
            this.setPosition = function(bn) {
                if (typeof bn === "undefined") {
                    bn = 0;
                }
                var bm,
                bk,
                bl,
                bp = (bi.isHTML5 ? Math.max(bn, 0) : Math.min(bi.duration || bi._iO.duration, Math.max(bn, 0)));
                bm = bi.position;
                bi.position = bp;
                bl = bi.position / 1000;
                bi._resetOnPosition(bi.position);
                bi._iO.position = bp;
                if (!bi.isHTML5) {
                    bk = (e === 9 ? bi.position: bl);
                    if (bi.readyState && bi.readyState !== 2) {
                        n._setPosition(bi.sID, bk, (bi.paused || !bi.playState), bi._iO.multiShot);
                    }
                } else {
                    if (bi._a) {
                        if (bi._html5_canplay) {
                            if (bi._a.currentTime !== bl) {
                                a3._wD("setPosition(" + bl + "): setting position");
                                try {
                                    bi._a.currentTime = bl;
                                    if (bi.playState === 0 || bi.paused) {
                                        bi._a.pause();
                                    }
                                } catch(bo) {
                                    a3._wD("setPosition(" + bl + "): setting position failed: " + bo.message, 2);
                                }
                            }
                        } else {
                            a3._wD("setPosition(" + bl + "): delaying, sound not ready");
                        }
                    }
                }
                if (bi.isHTML5) {
                    if (bi.paused) {
                        bi._onTimer(true);
                    }
                }
                return bi;
            };
            this.pause = function(bk) {
                if (bi.paused || (bi.playState === 0 && bi.readyState !== 1)) {
                    return bi;
                }
                a3._wD("SMSound.pause()");
                bi.paused = true;
                if (!bi.isHTML5) {
                    if (bk || typeof bk === "undefined") {
                        n._pause(bi.sID, bi._iO.multiShot);
                    }
                } else {
                    bi._setup_html5().pause();
                    bd();
                }
                if (bi._iO.onpause) {
                    bi._iO.onpause.apply(bi);
                }
                return bi;
            };
            this.resume = function() {
                var bk = bi._iO;
                if (!bi.paused) {
                    return bi;
                }
                a3._wD("SMSound.resume()");
                bi.paused = false;
                bi.playState = 1;
                if (!bi.isHTML5) {
                    if (bk.isMovieStar && !bk.serverURL) {
                        bi.setPosition(bi.position);
                    }
                    n._pause(bi.sID, bk.multiShot);
                } else {
                    bi._setup_html5().play();
                    a7();
                }
                if (!ba && bk.onplay) {
                    bk.onplay.apply(bi);
                    ba = true;
                } else {
                    if (bk.onresume) {
                        bk.onresume.apply(bi);
                    }
                }
                return bi;
            };
            this.togglePause = function() {
                a3._wD("SMSound.togglePause()");
                if (bi.playState === 0) {
                    bi.play({
                        position: (e === 9 && !bi.isHTML5 ? bi.position: bi.position / 1000)
                        });
                    return bi;
                }
                if (bi.paused) {
                    bi.resume();
                } else {
                    bi.pause();
                }
                return bi;
            };
            this.setPan = function(bl, bk) {
                if (typeof bl === "undefined") {
                    bl = 0;
                }
                if (typeof bk === "undefined") {
                    bk = false;
                }
                if (!bi.isHTML5) {
                    n._setPan(bi.sID, bl);
                }
                bi._iO.pan = bl;
                if (!bk) {
                    bi.pan = bl;
                    bi.options.pan = bl;
                }
                return bi;
            };
            this.setVolume = function(bk, bl) {
                if (typeof bk === "undefined") {
                    bk = 100;
                }
                if (typeof bl === "undefined") {
                    bl = false;
                }
                if (!bi.isHTML5) {
                    n._setVolume(bi.sID, (a3.muted && !bi.muted) || bi.muted ? 0: bk);
                } else {
                    if (bi._a) {
                        bi._a.volume = Math.max(0, Math.min(1, bk / 100));
                    }
                }
                bi._iO.volume = bk;
                if (!bl) {
                    bi.volume = bk;
                    bi.options.volume = bk;
                }
                return bi;
            };
            this.mute = function() {
                bi.muted = true;
                if (!bi.isHTML5) {
                    n._setVolume(bi.sID, 0);
                } else {
                    if (bi._a) {
                        bi._a.muted = true;
                    }
                }
                return bi;
            };
            this.unmute = function() {
                bi.muted = false;
                var bk = (typeof bi._iO.volume !== "undefined");
                if (!bi.isHTML5) {
                    n._setVolume(bi.sID, bk ? bi._iO.volume: bi.options.volume);
                } else {
                    if (bi._a) {
                        bi._a.muted = false;
                    }
                }
                return bi;
            };
            this.toggleMute = function() {
                return (bi.muted ? bi.unmute() : bi.mute());
            };
            this.onPosition = function(bm, bl, bk) {
                bj.push({
                    position: parseInt(bm, 10),
                    method: bl,
                    scope: (typeof bk !== "undefined" ? bk: bi),
                    fired: false
                });
                return bi;
            };
            this.onposition = this.onPosition;
            this.clearOnPosition = function(bl, bk) {
                var bm;
                bl = parseInt(bl, 10);
                if (isNaN(bl)) {
                    return false;
                }
                for (bm = 0; bm < bj.length; bm++) {
                    if (bl === bj[bm].position) {
                        if (!bk || (bk === bj[bm].method)) {
                            if (bj[bm].fired) {
                                a6--;
                            }
                            bj.splice(bm, 1);
                        }
                    }
                }
            };
            this._processOnPosition = function() {
                var bl,
                bm,
                bk = bj.length;
                if (!bk || !bi.playState || a6 >= bk) {
                    return false;
                }
                for (bl = bk - 1; bl >= 0; bl--) {
                    bm = bj[bl];
                    if (!bm.fired && bi.position >= bm.position) {
                        bm.fired = true;
                        a6++;
                        bm.method.apply(bm.scope, [bm.position]);
                    }
                }
                return true;
            };
            this._resetOnPosition = function(bk) {
                var bm,
                bn,
                bl = bj.length;
                if (!bl) {
                    return false;
                }
                for (bm = bl - 1; bm >= 0; bm--) {
                    bn = bj[bm];
                    if (bn.fired && bk <= bn.position) {
                        bn.fired = false;
                        a6--;
                    }
                }
                return true;
            };
            bb = function() {
                var bl = bi._iO,
                bn = bl.from,
                bm = bl.to,
                bo,
                bk;
                bk = function() {
                    a3._wD(bi.sID + ': "to" time of ' + bm + " reached.");
                    bi.clearOnPosition(bm, bk);
                    bi.stop();
                };
                bo = function() {
                    a3._wD(bi.sID + ': playing "from" ' + bn);
                    if (bm !== null && !isNaN(bm)) {
                        bi.onPosition(bm, bk);
                    }
                };
                if (bn !== null && !isNaN(bn)) {
                    bl.position = bn;
                    bl.multiShot = false;
                    bo();
                }
                return bl;
            };
            bh = function() {
                var bk,
                bl = bi._iO.onposition;
                if (bl) {
                    for (bk in bl) {
                        if (bl.hasOwnProperty(bk)) {
                            bi.onPosition(parseInt(bk, 10), bl[bk]);
                        }
                    }
                }
            };
            a8 = function() {
                var bk,
                bl = bi._iO.onposition;
                if (bl) {
                    for (bk in bl) {
                        if (bl.hasOwnProperty(bk)) {
                            bi.clearOnPosition(parseInt(bk, 10));
                        }
                    }
                }
            };
            a7 = function() {
                if (bi.isHTML5) {
                    x(bi);
                }
            };
            bd = function() {
                if (bi.isHTML5) {
                    U(bi);
                }
            };
            a9 = function(bk) {
                if (!bk) {
                    bj = [];
                    a6 = 0;
                }
                ba = false;
                bi._hasTimer = null;
                bi._a = null;
                bi._html5_canplay = false;
                bi.bytesLoaded = null;
                bi.bytesTotal = null;
                bi.duration = (bi._iO && bi._iO.duration ? bi._iO.duration: null);
                bi.durationEstimate = null;
                bi.eqData = [];
                bi.eqData.left = [];
                bi.eqData.right = [];
                bi.failures = 0;
                bi.isBuffering = false;
                bi.instanceOptions = {};
                bi.instanceCount = 0;
                bi.loaded = false;
                bi.metadata = {};
                bi.readyState = 0;
                bi.muted = false;
                bi.paused = false;
                bi.peakData = {
                    left: 0,
                    right: 0
                };
                bi.waveformData = {
                    left: [],
                    right: []
                    };
                bi.playState = 0;
                bi.position = null;
            };
            a9();
            this._onTimer = function(bm) {
                var bo,
                bl = false,
                bn,
                bk = {};
                if (bi._hasTimer || bm) {
                    if (bi._a && (bm || ((bi.playState > 0 || bi.readyState === 1) && !bi.paused))) {
                        bo = bi._get_html5_duration();
                        if (bo !== bc.duration) {
                            bc.duration = bo;
                            bi.duration = bo;
                            bl = true;
                        }
                        bi.durationEstimate = bi.duration;
                        bn = (bi._a.currentTime * 1000 || 0);
                        if (bn !== bc.time) {
                            bc.time = bn;
                            bl = true;
                        }
                        if (bl || bm) {
                            bi._whileplaying(bn, bk, bk, bk, bk);
                        }
                    }
                    return bl;
                }
            };
            this._get_html5_duration = function() {
                var bl = bi._iO,
                bm = (bi._a ? bi._a.duration * 1000: (bl ? bl.duration: undefined)),
                bk = (bm && !isNaN(bm) && bm !== Infinity ? bm: (bl ? bl.duration: null));
                return bk;
            };
            this._apply_loop = function(bk, bl) {
                if (!bk.loop && bl > 1) {
                    a3._wD("Note: Native HTML5 looping is infinite.");
                }
                bk.loop = (bl > 1 ? "loop": "");
            };
            this._setup_html5 = function(bn) {
                var bm = aq(bi._iO, bn),
                bq = decodeURI,
                bo = aX ? a3._global_a: bi._a,
                bp = bq(bm.url),
                bl = (bo && bo._t ? bo._t.instanceOptions: null),
                bk;
                if (bo) {
                    if (bo._t) {
                        if (!aX && bp === bq(bg)) {
                            bk = bo;
                        } else {
                            if (aX && bl.url === bm.url && (!bg || (bg === bl.url))) {
                                bk = bo;
                            }
                        }
                        if (bk) {
                            bi._apply_loop(bo, bm.loops);
                            return bk;
                        }
                    }
                    a3._wD("setting new URL on existing object: " + bp + (bg ? ", old URL: " + bg: ""));
                    if (aX && bo._t && bo._t.playState && bm.url !== bl.url) {
                        bo._t.stop();
                    }
                    a9((bl.url ? bm.url === bl.url: (bg ? bg === bm.url: false)));
                    bo.src = bm.url;
                    bi.url = bm.url;
                    bg = bm.url;
                    bo._called_load = false;
                } else {
                    a3._wD("creating HTML5 Audio() element with URL: " + bp);
                    bo = new Audio(bm.url);
                    bo._called_load = false;
                    if (aX) {
                        a3._global_a = bo;
                    }
                }
                bi.isHTML5 = true;
                bi._a = bo;
                bo._t = bi;
                a5();
                bi._apply_loop(bo, bm.loops);
                if (bm.autoLoad || bm.autoPlay) {
                    bi.load();
                } else {
                    bo.autobuffer = false;
                    bo.preload = "none";
                    if (!Y) {
                        bi.load();
                    }
                }
                return bo;
            };
            a5 = function() {
                if (bi._a._added_events) {
                    return false;
                }
                var bk;
                function bl(bn, bm, bo) {
                    return bi._a ? bi._a.addEventListener(bn, bm, bo || false) : null;
                }
                a3._wD(aS + "adding event listeners: " + bi.sID);
                bi._a._added_events = true;
                for (bk in u) {
                    if (u.hasOwnProperty(bk)) {
                        bl(bk, u[bk]);
                    }
                }
                return true;
            };
            be = function() {
                var bl;
                function bk(bn, bm, bo) {
                    return (bi._a ? bi._a.removeEventListener(bn, bm, bo || false) : null);
                }
                a3._wD(aS + "removing event listeners: " + bi.sID);
                bi._a._added_events = false;
                for (bl in u) {
                    if (u.hasOwnProperty(bl)) {
                        bk(bl, u[bl]);
                    }
                }
            };
            this._onload = function(bm) {
                var bk,
                bl = !!(bm);
                bk = "SMSound._onload(): ";
                a3._wD(bk + '"' + bi.sID + '"' + (bl ? " loaded.": " failed to load? - " + bi.url), (bl ? 1: 2));
                if (!bl && !bi.isHTML5) {
                    if (a3.sandbox.noRemote === true) {
                        a3._wD(bk + ab("noNet"), 1);
                    }
                    if (a3.sandbox.noLocal === true) {
                        a3._wD(bk + ab("noLocal"), 1);
                    }
                }
                bi.loaded = bl;
                bi.readyState = bl ? 3: 2;
                bi._onbufferchange(0);
                if (bi._iO.onload) {
                    bi._iO.onload.apply(bi, [bl]);
                }
                return true;
            };
            this._onbufferchange = function(bk) {
                if (bi.playState === 0) {
                    return false;
                }
                if ((bk && bi.isBuffering) || (!bk && !bi.isBuffering)) {
                    return false;
                }
                bi.isBuffering = (bk === 1);
                if (bi._iO.onbufferchange) {
                    a3._wD("SMSound._onbufferchange(): " + bk);
                    bi._iO.onbufferchange.apply(bi);
                }
                return true;
            };
            this._onsuspend = function() {
                if (bi._iO.onsuspend) {
                    a3._wD("SMSound._onsuspend()");
                    bi._iO.onsuspend.apply(bi);
                }
                return true;
            };
            this._onfailure = function(bl, bm, bk) {
                bi.failures++;
                a3._wD('SMSound._onfailure(): "' + bi.sID + '" count ' + bi.failures);
                if (bi._iO.onfailure && bi.failures === 1) {
                    bi._iO.onfailure(bi, bl, bm, bk);
                } else {
                    a3._wD("SMSound._onfailure(): ignoring");
                }
            };
            this._onfinish = function() {
                var bk = bi._iO.onfinish;
                bi._onbufferchange(0);
                bi._resetOnPosition(0);
                if (bi.instanceCount) {
                    bi.instanceCount--;
                    if (!bi.instanceCount) {
                        a8();
                        bi.playState = 0;
                        bi.paused = false;
                        bi.instanceCount = 0;
                        bi.instanceOptions = {};
                        bi._iO = {};
                        bd();
                    }
                    if (!bi.instanceCount || bi._iO.multiShotEvents) {
                        if (bk) {
                            a3._wD('SMSound._onfinish(): "' + bi.sID + '"');
                            bk.apply(bi);
                        }
                    }
                }
            };
            this._whileloading = function(bk, bm, bo, bn) {
                var bl = bi._iO;
                bi.bytesLoaded = bk;
                bi.bytesTotal = bm;
                bi.duration = Math.floor(bo);
                bi.bufferLength = bn;
                if (!bl.isMovieStar) {
                    if (bl.duration) {
                        bi.durationEstimate = (bi.duration > bl.duration) ? bi.duration: bl.duration;
                    } else {
                        bi.durationEstimate = parseInt((bi.bytesTotal / bi.bytesLoaded) * bi.duration, 10);
                    }
                    if (typeof bi.durationEstimate === "undefined") {
                        bi.durationEstimate = bi.duration;
                    }
                    if (bi.readyState !== 3 && bl.whileloading) {
                        bl.whileloading.apply(bi);
                    }
                } else {
                    bi.durationEstimate = bi.duration;
                    if (bi.readyState !== 3 && bl.whileloading) {
                        bl.whileloading.apply(bi);
                    }
                }
            };
            this._whileplaying = function(bm, bo, bq, bl, bp) {
                var bn = bi._iO,
                bk;
                if (isNaN(bm) || bm === null) {
                    return false;
                }
                bi.position = bm;
                bi._processOnPosition();
                if (!bi.isHTML5 && e > 8) {
                    if (bn.usePeakData && typeof bo !== "undefined" && bo) {
                        bi.peakData = {
                            left: bo.leftPeak,
                            right: bo.rightPeak
                        };
                    }
                    if (bn.useWaveformData && typeof bq !== "undefined" && bq) {
                        bi.waveformData = {
                            left: bq.split(","),
                            right: bl.split(",")
                            };
                    }
                    if (bn.useEQData) {
                        if (typeof bp !== "undefined" && bp && bp.leftEQ) {
                            bk = bp.leftEQ.split(",");
                            bi.eqData = bk;
                            bi.eqData.left = bk;
                            if (typeof bp.rightEQ !== "undefined" && bp.rightEQ) {
                                bi.eqData.right = bp.rightEQ.split(",");
                            }
                        }
                    }
                }
                if (bi.playState === 1) {
                    if (!bi.isHTML5 && e === 8 && !bi.position && bi.isBuffering) {
                        bi._onbufferchange(0);
                    }
                    if (bn.whileplaying) {
                        bn.whileplaying.apply(bi);
                    }
                }
                return true;
            };
            this._oncaptiondata = function(bk) {
                a3._wD('SMSound._oncaptiondata(): "' + this.sID + '" caption data received.');
                bi.captiondata = bk;
                if (bi._iO.oncaptiondata) {
                    bi._iO.oncaptiondata.apply(bi);
                }
            };
            this._onmetadata = function(bn, bk) {
                a3._wD('SMSound._onmetadata(): "' + this.sID + '" metadata received.');
                var bo = {},
                bm,
                bl;
                for (bm = 0, bl = bn.length; bm < bl; bm++) {
                    bo[bn[bm]] = bk[bm];
                }
                bi.metadata = bo;
                if (bi._iO.onmetadata) {
                    bi._iO.onmetadata.apply(bi);
                }
            };
            this._onid3 = function(bn, bk) {
                a3._wD('SMSound._onid3(): "' + this.sID + '" ID3 data received.');
                var bo = [],
                bm,
                bl;
                for (bm = 0, bl = bn.length; bm < bl; bm++) {
                    bo[bn[bm]] = bk[bm];
                }
                bi.id3 = aq(bi.id3, bo);
                if (bi._iO.onid3) {
                    bi._iO.onid3.apply(bi);
                }
            };
            this._onconnect = function(bk) {
                bk = (bk === 1);
                a3._wD('SMSound._onconnect(): "' + bi.sID + '"' + (bk ? " connected.": " failed to connect? - " + bi.url), (bk ? 1: 2));
                bi.connected = bk;
                if (bk) {
                    bi.failures = 0;
                    if (aj(bi.sID)) {
                        if (bi.getAutoPlay()) {
                            bi.play(undefined, bi.getAutoPlay());
                        } else {
                            if (bi._iO.autoLoad) {
                                bi.load();
                            }
                        }
                    }
                    if (bi._iO.onconnect) {
                        bi._iO.onconnect.apply(bi, [bk]);
                    }
                }
            };
            this._ondataerror = function(bk) {
                if (bi.playState > 0) {
                    a3._wD("SMSound._ondataerror(): " + bk);
                    if (bi._iO.ondataerror) {
                        bi._iO.ondataerror.apply(bi);
                    }
                }
            };
        };
        ax = function() {
            return (aQ.body || aQ._docElement || aQ.getElementsByTagName("div")[0]);
        };
        aa = function(a5) {
            return aQ.getElementById(a5);
        };
        aq = function(a6, a5) {
            var a9 = {},
            a7,
            a8,
            ba;
            for (a7 in a6) {
                if (a6.hasOwnProperty(a7)) {
                    a9[a7] = a6[a7];
                }
            }
            a8 = (typeof a5 === "undefined" ? a3.defaultOptions: a5);
            for (ba in a8) {
                if (a8.hasOwnProperty(ba) && typeof a9[ba] === "undefined") {
                    a9[ba] = a8[ba];
                }
            }
            return a9;
        };
        s = (function() {
            var a7 = (k.attachEvent),
            a6 = {
                add: (a7 ? "attachEvent": "addEventListener"),
                remove: (a7 ? "detachEvent": "removeEventListener")
                };
            function a9(bd) {
                var bc = j.call(bd),
                bb = bc.length;
                if (a7) {
                    bc[1] = "on" + bc[1];
                    if (bb > 3) {
                        bc.pop();
                    }
                } else {
                    if (bb === 3) {
                        bc.push(false);
                    }
                }
                return bc;
            }
            function a8(bb, be) {
                var bc = bb.shift(),
                bd = [a6[be]];
                if (a7) {
                    bc[bd](bb[0], bb[1]);
                } else {
                    bc[bd].apply(bc, bb);
                }
            }
            function ba() {
                a8(a9(arguments), "add");
            }
            function a5() {
                a8(a9(arguments), "remove");
            }
            return {
                add: ba,
                remove: a5
            };
        } ());
        function Q(a5) {
            return function(a8) {
                var a7 = this._t,
                a6;
                if (!a7 || !a7._a) {
                    if (a7 && a7.sID) {
                        a3._wD(aS + "ignoring " + a8.type + ": " + a7.sID);
                    } else {
                        a3._wD(aS + "ignoring " + a8.type);
                    }
                    a6 = null;
                } else {
                    a6 = a5.call(this, a8);
                }
                return a6;
            };
        }
        u = {
            abort: Q(function() {
                a3._wD(aS + "abort: " + this._t.sID);
            }),
            canplay: Q(function() {
                var a7 = this._t,
                a6;
                if (a7._html5_canplay) {
                    return true;
                }
                a7._html5_canplay = true;
                a3._wD(aS + "canplay: " + a7.sID + ", " + a7.url);
                a7._onbufferchange(0);
                a6 = (!isNaN(a7.position) ? a7.position / 1000: null);
                if (a7.position && this.currentTime !== a6) {
                    a3._wD(aS + "canplay: setting position to " + a6);
                    try {
                        this.currentTime = a6;
                    } catch(a5) {
                        a3._wD(aS + "setting position failed: " + a5.message, 2);
                    }
                }
                if (a7._iO._oncanplay) {
                    a7._iO._oncanplay();
                }
            }),
            load: Q(function() {
                var a5 = this._t;
                if (!a5.loaded) {
                    a5._onbufferchange(0);
                    a5._whileloading(a5.bytesTotal, a5.bytesTotal, a5._get_html5_duration());
                    a5._onload(true);
                }
            }),
            ended: Q(function() {
                var a5 = this._t;
                a3._wD(aS + "ended: " + a5.sID);
                a5._onfinish();
            }),
            error: Q(function() {
                a3._wD(aS + "error: " + this.error.code);
                this._t._onload(false);
            }),
            loadeddata: Q(function() {
                var a5 = this._t,
                a6 = a5.bytesTotal || 1;
                a3._wD(aS + "loadeddata: " + this._t.sID);
                if (!a5._loaded && !F) {
                    a5.duration = a5._get_html5_duration();
                    a5._whileloading(a6, a6, a5._get_html5_duration());
                    a5._onload(true);
                }
            }),
            loadedmetadata: Q(function() {
                a3._wD(aS + "loadedmetadata: " + this._t.sID);
            }),
            loadstart: Q(function() {
                a3._wD(aS + "loadstart: " + this._t.sID);
                this._t._onbufferchange(1);
            }),
            play: Q(function() {
                a3._wD(aS + "play: " + this._t.sID + ", " + this._t.url);
                this._t._onbufferchange(0);
            }),
            playing: Q(function() {
                a3._wD(aS + "playing: " + this._t.sID);
                this._t._onbufferchange(0);
            }),
            progress: Q(function(ba) {
                var be = this._t,
                a9,
                a7,
                bb,
                a6 = 0,
                bd = (ba.type === "progress"),
                a5 = ba.target.buffered,
                a8 = (ba.loaded || 0),
                bc = (ba.total || 1);
                if (be.loaded) {
                    return false;
                }
                if (a5 && a5.length) {
                    for (a9 = a5.length - 1; a9 >= 0; a9--) {
                        a6 = (a5.end(a9) - a5.start(a9));
                    }
                    a8 = a6 / ba.target.duration;
                    if (bd && a5.length > 1) {
                        bb = [];
                        a7 = a5.length;
                        for (a9 = 0; a9 < a7; a9++) {
                            bb.push(ba.target.buffered.start(a9) + "-" + ba.target.buffered.end(a9));
                        }
                        a3._wD(aS + "progress: timeRanges: " + bb.join(", "));
                    }
                    if (bd && !isNaN(a8)) {
                        a3._wD(aS + "progress: " + be.sID + ": " + Math.floor(a8 * 100) + "% loaded");
                    }
                }
                if (!isNaN(a8)) {
                    be._onbufferchange(0);
                    be._whileloading(a8, bc, be._get_html5_duration());
                    if (a8 && bc && a8 === bc) {
                        u.load.call(this, ba);
                    }
                }
            }),
            ratechange: Q(function() {
                a3._wD(aS + "ratechange: " + this._t.sID);
            }),
            suspend: Q(function(a6) {
                var a5 = this._t;
                a3._wD(aS + "suspend: " + a5.sID);
                u.progress.call(this, a6);
                a5._onsuspend();
            }),
            stalled: Q(function() {
                a3._wD(aS + "stalled: " + this._t.sID);
            }),
            timeupdate: Q(function() {
                this._t._onTimer();
            }),
            waiting: Q(function() {
                var a5 = this._t;
                a3._wD(aS + "waiting: " + a5.sID);
                a5._onbufferchange(1);
            })
            };
        E = function(a5) {
            return (!a5.serverURL && (a5.type ? aE({
                type: a5.type
            }) : aE({
                url: a5.url
            }) || a3.html5Only));
        };
        aD = function(a5) {
            if (a5) {
                a5.src = (aO ? "": ap);
            }
        };
        aE = function(a8) {
            if (!a3.useHTML5Audio || !a3.hasHTML5) {
                return false;
            }
            var a6 = (a8.url || null),
            a5 = (a8.type || null),
            a9 = a3.audioFormats,
            bd,
            ba,
            bc,
            bb;
            function a7(be) {
                return (a3.preferFlash && g && !a3.ignoreFlash && (typeof a3.flash[be] !== "undefined" && a3.flash[be]));
            }
            if (a5 && typeof a3.html5[a5] !== "undefined") {
                return (a3.html5[a5] && !a7(a5));
            }
            if (!q) {
                q = [];
                for (bb in a9) {
                    if (a9.hasOwnProperty(bb)) {
                        q.push(bb);
                        if (a9[bb].related) {
                            q = q.concat(a9[bb].related);
                        }
                    }
                }
                q = new RegExp("\\.(" + q.join("|") + ")(\\?.*)?$", "i");
            }
            bc = (a6 ? a6.toLowerCase().match(q) : null);
            if (!bc || !bc.length) {
                if (!a5) {
                    bd = false;
                } else {
                    ba = a5.indexOf(";");
                    bc = (ba !== -1 ? a5.substr(0, ba) : a5).substr(6);
                }
            } else {
                bc = bc[1];
            }
            if (bc && typeof a3.html5[bc] !== "undefined") {
                bd = (a3.html5[bc] && !a7(bc));
            } else {
                a5 = "audio/" + bc;
                bd = a3.html5.canPlayType({
                    type: a5
                });
                a3.html5[bc] = bd;
                bd = (bd && a3.html5[a5] && !a7(a5));
            }
            return bd;
        };
        a1 = function() {
            if (!a3.useHTML5Audio || typeof Audio === "undefined") {
                return false;
            }
            var a5 = (typeof Audio !== "undefined" ? (L ? new Audio(null) : new Audio()) : null),
            ba,
            a9 = {},
            a7,
            a8;
            function a6(bd) {
                var bf,
                bg,
                be,
                bc = false,
                bb = false;
                if (!a5 || typeof a5.canPlayType !== "function") {
                    return bc;
                }
                if (bd instanceof Array) {
                    for (bg = 0, be = bd.length; bg < be && !bb; bg++) {
                        if (a3.html5[bd[bg]] || a5.canPlayType(bd[bg]).match(a3.html5Test)) {
                            bb = true;
                            a3.html5[bd[bg]] = true;
                            a3.flash[bd[bg]] = !!(a3.preferFlash && g && bd[bg].match(R));
                        }
                    }
                    bc = bb;
                } else {
                    bf = (a5 && typeof a5.canPlayType === "function" ? a5.canPlayType(bd) : false);
                    bc = !!(bf && (bf.match(a3.html5Test)));
                }
                return bc;
            }
            a7 = a3.audioFormats;
            for (ba in a7) {
                if (a7.hasOwnProperty(ba)) {
                    a9[ba] = a6(a7[ba].type);
                    a9["audio/" + ba] = a9[ba];
                    if (a3.preferFlash && !a3.ignoreFlash && ba.match(R)) {
                        a3.flash[ba] = true;
                    } else {
                        a3.flash[ba] = false;
                    }
                    if (a7[ba] && a7[ba].related) {
                        for (a8 = a7[ba].related.length - 1; a8 >= 0; a8--) {
                            a9["audio/" + a7[ba].related[a8]] = a9[ba];
                            a3.html5[a7[ba].related[a8]] = a9[ba];
                            a3.flash[a7[ba].related[a8]] = a9[ba];
                        }
                    }
                }
            }
            a9.canPlayType = (a5 ? a6: null);
            a3.html5 = aq(a3.html5, a9);
            return true;
        };
        P = {
            notReady: "Not loaded yet - wait for soundManager.onload()/onready()",
            notOK: "Audio support is not available.",
            domError: ay + "createMovie(): appendChild/innerHTML call failed. DOM not ready or other error.",
            spcWmode: ay + "createMovie(): Removing wmode, preventing known SWF loading issue(s)",
            swf404: aL + ": Verify that %s is a valid path.",
            tryDebug: "Try " + aL + ".debugFlash = true for more security details (output goes to SWF.)",
            checkSWF: "See SWF output for more debug info.",
            localFail: aL + ": Non-HTTP page (" + aQ.location.protocol + " URL?) Review Flash player security settings for this special case:\nhttp://www.macromedia.com/support/documentation/en/flashplayer/help/settings_manager04.html\nMay need to add/allow path, eg. c:/sm2/ or /users/me/sm2/",
            waitFocus: aL + ": Special case: Waiting for SWF to load with window focus...",
            waitImpatient: aL + ": Getting impatient, still waiting for Flash%s...",
            waitForever: aL + ": Waiting indefinitely for Flash (will recover if unblocked)...",
            waitSWF: aL + ": Retrying, waiting for 100% SWF load...",
            needFunction: aL + ": Function object expected for %s",
            badID: 'Warning: Sound ID "%s" should be a string, starting with a non-numeric character',
            currentObj: "--- " + aL + "._debug(): Current sound objects ---",
            waitEI: ay + "initMovie(): Waiting for ExternalInterface call from Flash...",
            waitOnload: aL + ": Waiting for window.onload()",
            docLoaded: aL + ": Document already loaded",
            onload: ay + "initComplete(): calling soundManager.onload()",
            onloadOK: aL + ".onload() complete",
            init: ay + "init()",
            didInit: ay + "init(): Already called?",
            flashJS: aL + ": Attempting JS to Flash call...",
            secNote: "Flash security note: Network/internet URLs will not load due to security restrictions. Access can be configured via Flash Player Global Security Settings Page: http://www.macromedia.com/support/documentation/en/flashplayer/help/settings_manager04.html",
            badRemove: "Warning: Failed to remove flash movie.",
            shutdown: aL + ".disable(): Shutting down",
            queue: aL + ": Queueing %s handler",
            smFail: aL + ": Failed to initialise.",
            smError: "SMSound.load(): Exception: JS-Flash communication failed, or JS error.",
            fbTimeout: "No flash response, applying ." + z.swfTimedout + " CSS...",
            fbLoaded: "Flash loaded",
            fbHandler: ay + "flashBlockHandler()",
            manURL: "SMSound.load(): Using manually-assigned URL",
            onURL: aL + ".load(): current URL already assigned.",
            badFV: aL + '.flashVersion must be 8 or 9. "%s" is invalid. Reverting to %s.',
            as2loop: "Note: Setting stream:false so looping can work (flash 8 limitation)",
            noNSLoop: "Note: Looping not implemented for MovieStar formats",
            needfl9: "Note: Switching to flash 9, required for MP4 formats.",
            mfTimeout: "Setting flashLoadTimeout = 0 (infinite) for off-screen, mobile flash case",
            mfOn: "mobileFlash::enabling on-screen flash repositioning",
            policy: "Enabling usePolicyFile for data access"
        };
        ab = function() {
            var a6 = j.call(arguments),
            a9 = a6.shift(),
            a8 = (P && P[a9] ? P[a9] : ""),
            a7,
            a5;
            if (a8 && a6 && a6.length) {
                for (a7 = 0, a5 = a6.length; a7 < a5; a7++) {
                    a8 = a8.replace("%s", a6[a7]);
                }
            }
            return a8;
        };
        ad = function(a5) {
            if (e === 8 && a5.loops > 1 && a5.stream) {
                C("as2loop");
                a5.stream = false;
            }
            return a5;
        };
        y = function(a6, a5) {
            if (a6 && !a6.usePolicyFile && (a6.onid3 || a6.usePeakData || a6.useWaveformData || a6.useEQData)) {
                a3._wD((a5 || "") + ab("policy"));
                a6.usePolicyFile = true;
            }
            return a6;
        };
        d = function(a5) {
            if (typeof console !== "undefined" && typeof console.warn !== "undefined") {
                console.warn(a5);
            } else {
                a3._wD(a5);
            }
        };
        ai = function() {
            return false;
        };
        X = function(a6) {
            var a5;
            for (a5 in a6) {
                if (a6.hasOwnProperty(a5) && typeof a6[a5] === "function") {
                    a6[a5] = ai;
                }
            }
            a5 = null;
        };
        aw = function(a5) {
            if (typeof a5 === "undefined") {
                a5 = false;
            }
            if (J || a5) {
                C("smFail", 2);
                a3.disable(a5);
            }
        };
        h = function(a5) {
            var a6 = null,
            a7;
            if (a5) {
                if (a5.match(/\.swf(\?.*)?$/i)) {
                    a6 = a5.substr(a5.toLowerCase().lastIndexOf(".swf?") + 4);
                    if (a6) {
                        return a5;
                    }
                } else {
                    if (a5.lastIndexOf("/") !== a5.length - 1) {
                        a5 += "/";
                    }
                }
            }
            a7 = (a5 && a5.lastIndexOf("/") !== -1 ? a5.substr(0, a5.lastIndexOf("/") + 1) : "./") + a3.movieURL;
            if (a3.noSWFCache) {
                a7 += ("?ts=" + new Date().getTime());
            }
            return a7;
        };
        O = function() {
            e = parseInt(a3.flashVersion, 10);
            if (e !== 8 && e !== 9) {
                a3._wD(ab("badFV", e, S));
                a3.flashVersion = e = S;
            }
            var a5 = (a3.debugMode || a3.debugFlash ? "_debug.swf": ".swf");
            if (a3.useHTML5Audio && !a3.html5Only && a3.audioFormats.mp4.required && e < 9) {
                a3._wD(ab("needfl9"));
                a3.flashVersion = e = 9;
            }
            a3.version = a3.versionNumber + (a3.html5Only ? " (HTML5-only mode)": (e === 9 ? " (AS3/Flash 9)": " (AS2/Flash 8)"));
            if (e > 8) {
                a3.defaultOptions = aq(a3.defaultOptions, a3.flash9Options);
                a3.features.buffering = true;
                a3.defaultOptions = aq(a3.defaultOptions, a3.movieStarOptions);
                a3.filePatterns.flash9 = new RegExp("\\.(mp3|" + aH.join("|") + ")(\\?.*)?$", "i");
                a3.features.movieStar = true;
            } else {
                a3.features.movieStar = false;
            }
            a3.filePattern = a3.filePatterns[(e !== 8 ? "flash9": "flash8")];
            a3.movieURL = (e === 8 ? "soundmanager2.swf": "soundmanager2_flash9.swf").replace(".swf", a5);
            a3.features.peakData = a3.features.waveformData = a3.features.eqData = (e > 8);
        };
        at = function(a5, a6) {
            if (!n) {
                return false;
            }
            n._setPolling(a5, a6);
        };
        I = function() {
            if (a3.debugURLParam.test(l)) {
                a3.debugMode = true;
            }
            if (aa(a3.debugID)) {
                return false;
            }
            var ba,
            a9,
            a5,
            a7,
            a6;
            if (a3.debugMode && !aa(a3.debugID) && (!aK || !a3.useConsole || !a3.consoleOnly)) {
                ba = aQ.createElement("div");
                ba.id = a3.debugID + "-toggle";
                a7 = {
                    position: "fixed",
                    bottom: "0px",
                    right: "0px",
                    width: "1.2em",
                    height: "1.2em",
                    lineHeight: "1.2em",
                    margin: "2px",
                    textAlign: "center",
                    border: "1px solid #999",
                    cursor: "pointer",
                    background: "#fff",
                    color: "#333",
                    zIndex: 10001
                };
                ba.appendChild(aQ.createTextNode("-"));
                ba.onclick = A;
                ba.title = "Toggle SM2 debug console";
                if (ag.match(/msie 6/i)) {
                    ba.style.position = "absolute";
                    ba.style.cursor = "hand";
                }
                for (a6 in a7) {
                    if (a7.hasOwnProperty(a6)) {
                        ba.style[a6] = a7[a6];
                    }
                }
                a9 = aQ.createElement("div");
                a9.id = a3.debugID;
                a9.style.display = (a3.debugMode ? "block": "none");
                if (a3.debugMode && !aa(ba.id)) {
                    try {
                        a5 = ax();
                        a5.appendChild(ba);
                    } catch(a8) {
                        throw new Error(ab("domError") + " \n" + a8.toString());
                    }
                    a5.appendChild(a9);
                }
            }
            a5 = null;
        };
        aj = this.getSoundById;
        C = function(a6, a5) {
            return (!a6 ? "": a3._wD(ab(a6), a5));
        };
        if (l.indexOf("sm2-debug=alert") + 1 && a3.debugMode) {
            a3._wD = function(a5) {
                c.alert(a5);
            };
        }
        A = function() {
            var a6 = aa(a3.debugID),
            a5 = aa(a3.debugID + "-toggle");
            if (!a6) {
                return false;
            }
            if (m) {
                a5.innerHTML = "+";
                a6.style.display = "none";
            } else {
                a5.innerHTML = "-";
                a6.style.display = "block";
            }
            m = !m;
        };
        am = function(a8, a5, a6) {
            if (typeof sm2Debugger !== "undefined") {
                try {
                    sm2Debugger.handleEvent(a8, a5, a6);
                } catch(a7) {}
            }
            return true;
        };
        N = function() {
            var a5 = [];
            if (a3.debugMode) {
                a5.push(z.sm2Debug);
            }
            if (a3.debugFlash) {
                a5.push(z.flashDebug);
            }
            if (a3.useHighPerformance) {
                a5.push(z.highPerf);
            }
            return a5.join(" ");
        };
        i = function() {
            var a6 = ab("fbHandler"),
            a8 = a3.getMoviePercent(),
            a7 = z,
            a5 = {
                type: "FLASHBLOCK"
            };
            if (a3.html5Only) {
                return false;
            }
            if (!a3.ok()) {
                if (an) {
                    a3.oMC.className = N() + " " + a7.swfDefault + " " + (a8 === null ? a7.swfTimedout: a7.swfError);
                    a3._wD(a6 + ": " + ab("fbTimeout") + (a8 ? " (" + ab("fbLoaded") + ")": ""));
                }
                a3.didFlashBlock = true;
                a2({
                    type: "ontimeout",
                    ignoreInit: true,
                    error: a5
                });
                aM(a5);
            } else {
                if (a3.didFlashBlock) {
                    a3._wD(a6 + ": Unblocked");
                }
                if (a3.oMC) {
                    a3.oMC.className = [N(), a7.swfDefault, a7.swfLoaded + (a3.didFlashBlock ? " " + a7.swfUnblocked: "")].join(" ");
                }
            }
        };
        aZ = function(a7, a6, a5) {
            if (typeof ar[a7] === "undefined") {
                ar[a7] = [];
            }
            ar[a7].push({
                method: a6,
                scope: (a5 || null),
                fired: false
            });
        };
        a2 = function(bb) {
            if (!bb) {
                bb = {
                    type: (a3.ok() ? "onready": "ontimeout")
                    };
            }
            if (!aW && bb && !bb.ignoreInit) {
                return false;
            }
            if (bb.type === "ontimeout" && (a3.ok() || (J && !bb.ignoreInit))) {
                return false;
            }
            var a7 = {
                success: (bb && bb.ignoreInit ? a3.ok() : !J)
                },
            a6 = (bb && bb.type ? ar[bb.type] || [] : []),
            a5 = [],
            bc,
            ba,
            a9 = [a7],
            a8 = (an && a3.useFlashBlock && !a3.ok());
            if (bb.error) {
                a9[0].error = bb.error;
            }
            for (bc = 0, ba = a6.length; bc < ba; bc++) {
                if (a6[bc].fired !== true) {
                    a5.push(a6[bc]);
                }
            }
            if (a5.length) {
                a3._wD(aL + ": Firing " + a5.length + " " + bb.type + "() item" + (a5.length === 1 ? "": "s"));
                for (bc = 0, ba = a5.length; bc < ba; bc++) {
                    if (a5[bc].scope) {
                        a5[bc].method.apply(a5[bc].scope, a9);
                    } else {
                        a5[bc].method.apply(this, a9);
                    }
                    if (!a8) {
                        a5[bc].fired = true;
                    }
                }
            }
            return true;
        };
        az = function() {
            k.setTimeout(function() {
                if (a3.useFlashBlock) {
                    i();
                }
                a2();
                if (typeof a3.onload === "function") {
                    C("onload", 1);
                    a3.onload.apply(k);
                    C("onloadOK", 1);
                }
                if (a3.waitForWindowLoad) {
                    s.add(k, "load", az);
                }
            }, 1);
        };
        a0 = function() {
            if (typeof g !== "undefined") {
                return g;
            }
            var a5 = false,
            bc = navigator,
            a8 = bc.plugins,
            bb,
            a7,
            a6,
            ba = k.ActiveXObject;
            if (a8 && a8.length) {
                a7 = "application/x-shockwave-flash";
                a6 = bc.mimeTypes;
                if (a6 && a6[a7] && a6[a7].enabledPlugin && a6[a7].enabledPlugin.description) {
                    a5 = true;
                }
            } else {
                if (typeof ba !== "undefined") {
                    try {
                        bb = new ba("ShockwaveFlash.ShockwaveFlash");
                    } catch(a9) {}
                    a5 = ( !! bb);
                }
            }
            g = a5;
            return a5;
        };
        al = function() {
            var a8,
            a7,
            a5 = true,
            a6 = (H && !!(ag.match(/os (1|2|3_0|3_1)/i)));
            if (a6) {
                a3.hasHTML5 = false;
                a3.html5Only = true;
                if (a3.oMC) {
                    a3.oMC.style.display = "none";
                }
                a5 = false;
            } else {
                if (a3.useHTML5Audio) {
                    if (!a3.html5 || !a3.html5.canPlayType) {
                        a3._wD("SoundManager: No HTML5 Audio() support detected.");
                        a3.hasHTML5 = false;
                    } else {
                        a3.hasHTML5 = true;
                    }
                    if (av) {
                        a3._wD(ay + "Note: Buggy HTML5 Audio in Safari on this OS X release, see https://bugs.webkit.org/show_bug.cgi?id=32159 - " + (!g ? " would use flash fallback for MP3/MP4, but none detected.": "will use flash fallback for MP3/MP4, if available"), 1);
                    }
                }
            }
            if (a3.useHTML5Audio && a3.hasHTML5) {
                for (a7 in a3.audioFormats) {
                    if (a3.audioFormats.hasOwnProperty(a7)) {
                        if ((a3.audioFormats[a7].required && !a3.html5.canPlayType(a3.audioFormats[a7].type)) || a3.flash[a7] || a3.flash[a3.audioFormats[a7].type]) {
                            a8 = true;
                        }
                    }
                }
            }
            if (a3.ignoreFlash) {
                a8 = false;
            }
            a3.html5Only = (a3.hasHTML5 && a3.useHTML5Audio && !a8);
            return (!a3.html5Only);
        };
        aU = function(a7) {
            var a9,
            a6,
            a8 = 0,
            a5;
            if (a7 instanceof Array) {
                for (a9 = 0, a6 = a7.length; a9 < a6; a9++) {
                    if (a7[a9]
                        instanceof Object) {
                        if (a3.canPlayMIME(a7[a9].type)) {
                            a8 = a9;
                            break;
                        }
                    } else {
                        if (a3.canPlayURL(a7[a9])) {
                            a8 = a9;
                            break;
                        }
                    }
                }
                if (a7[a8].url) {
                    a7[a8] = a7[a8].url;
                }
                a5 = a7[a8];
            } else {
                a5 = a7;
            }
            return a5;
        };
        x = function(a5) {
            if (!a5._hasTimer) {
                a5._hasTimer = true;
                if (!Y && a3.html5PollingInterval) {
                    if (r === null && af === 0) {
                        r = k.setInterval(au, a3.html5PollingInterval);
                    }
                    af++;
                }
            }
        };
        U = function(a5) {
            if (a5._hasTimer) {
                a5._hasTimer = false;
                if (!Y && a3.html5PollingInterval) {
                    af--;
                }
            }
        };
        au = function() {
            var a5;
            if (r !== null && !af) {
                k.clearInterval(r);
                r = null;
                return false;
            }
            for (a5 = a3.soundIDs.length - 1; a5 >= 0; a5--) {
                if (a3.sounds[a3.soundIDs[a5]].isHTML5 && a3.sounds[a3.soundIDs[a5]]._hasTimer) {
                    a3.sounds[a3.soundIDs[a5]]._onTimer();
                }
            }
        };
        aM = function(a5) {
            a5 = (typeof a5 !== "undefined" ? a5: {});
            if (typeof a3.onerror === "function") {
                a3.onerror.apply(k, [{
                    type: (typeof a5.type !== "undefined" ? a5.type: null)
                    }]);
            }
            if (typeof a5.fatal !== "undefined" && a5.fatal) {
                a3.disable();
            }
        };
        ac = function() {
            if (!av || !a0()) {
                return false;
            }
            var a5 = a3.audioFormats,
            a6,
            a7;
            for (a7 in a5) {
                if (a5.hasOwnProperty(a7)) {
                    if (a7 === "mp3" || a7 === "mp4") {
                        a3._wD(aL + ": Using flash fallback for " + a7 + " format");
                        a3.html5[a7] = false;
                        if (a5[a7] && a5[a7].related) {
                            for (a6 = a5[a7].related.length - 1; a6 >= 0; a6--) {
                                a3.html5[a5[a7].related[a6]] = false;
                            }
                        }
                    }
                }
            }
        };
        this._setSandboxType = function(a5) {
            var a6 = a3.sandbox;
            a6.type = a5;
            a6.description = a6.types[(typeof a6.types[a5] !== "undefined" ? a5: "unknown")];
            a3._wD("Flash security sandbox type: " + a6.type);
            if (a6.type === "localWithFile") {
                a6.noRemote = true;
                a6.noLocal = false;
                C("secNote", 2);
            } else {
                if (a6.type === "localWithNetwork") {
                    a6.noRemote = false;
                    a6.noLocal = true;
                } else {
                    if (a6.type === "localTrusted") {
                        a6.noRemote = false;
                        a6.noLocal = false;
                    }
                }
            }
        };
        this._externalInterfaceOK = function(a5, a7) {
            if (a3.swfLoaded) {
                return false;
            }
            var a9,
            a8 = new Date().getTime();
            a3._wD(ay + "externalInterfaceOK()" + (a5 ? " (~" + (a8 - a5) + " ms)": ""));
            am("swf", true);
            am("flashtojs", true);
            a3.swfLoaded = true;
            ah = false;
            if (av) {
                ac();
            }
            if (!a7 || a7.replace(/\+dev/i, "") !== a3.versionNumber.replace(/\+dev/i, "")) {
                a9 = aL + ': Fatal: JavaScript file build "' + a3.versionNumber + '" does not match Flash SWF build "' + a7 + '" at ' + a3.url + ". Ensure both are up-to-date.";
                setTimeout(function a6() {
                    throw new Error(a9);
                }, 0);
                return false;
            }
            setTimeout(aF, f ? 100: 1);
        };
        aV = function(bj, a9) {
            if (aC && aY) {
                return false;
            }
            function bh() {
                a3._wD("-- SoundManager 2 " + a3.version + (!a3.html5Only && a3.useHTML5Audio ? (a3.hasHTML5 ? " + HTML5 audio": ", no HTML5 audio support") : "") + (!a3.html5Only ? (a3.useHighPerformance ? ", high performance mode, ": ", ") + ((a3.flashPollingInterval ? "custom (" + a3.flashPollingInterval + "ms)": "normal") + " polling") + (a3.wmode ? ", wmode: " + a3.wmode: "") + (a3.debugFlash ? ", flash debug mode": "") + (a3.useFlashBlock ? ", flashBlock mode": "") : "") + " --", 1);
            }
            if (a3.html5Only) {
                O();
                bh();
                a3.oMC = aa(a3.movieID);
                aF();
                aC = true;
                aY = true;
                return false;
            }
            var bi = (a9 || a3.url),
            bd = (a3.altURL || bi),
            bo = "JS/Flash audio component (SoundManager 2)",
            bl,
            ba,
            bg = ax(),
            bm,
            be,
            bc,
            bf = N(),
            bb,
            a7,
            bn,
            a5 = null,
            a8 = aQ.getElementsByTagName("html")[0];
            a5 = (a8 && a8.dir && a8.dir.match(/rtl/i));
            bj = (typeof bj === "undefined" ? a3.id: bj);
            function a6(bp, bq) {
                return '<param name="' + bp + '" value="' + bq + '" />';
            }
            O();
            a3.url = h(aB ? bi: bd);
            a9 = a3.url;
            a3.wmode = (!a3.wmode && a3.useHighPerformance ? "transparent": a3.wmode);
            if (a3.wmode !== null && (ag.match(/msie 8/i) || (!f && !a3.useHighPerformance)) && navigator.platform.match(/win32|win64/i)) {
                C("spcWmode");
                a3.wmode = null;
            }
            bl = {
                name: bj,
                id: bj,
                src: a9,
                quality: "high",
                allowScriptAccess: a3.allowScriptAccess,
                bgcolor: a3.bgColor,
                pluginspage: aG + "www.macromedia.com/go/getflashplayer",
                title: bo,
                type: "application/x-shockwave-flash",
                wmode: a3.wmode,
                hasPriority: "true"
            };
            if (a3.debugFlash) {
                bl.FlashVars = "debug=1";
            }
            if (!a3.wmode) {
                delete bl.wmode;
            }
            if (f) {
                ba = aQ.createElement("div");
                be = ['<object id="' + bj + '" data="' + a9 + '" type="' + bl.type + '" title="' + bl.title + '" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="' + aG + 'download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,40,0">', a6("movie", a9), a6("AllowScriptAccess", a3.allowScriptAccess), a6("quality", bl.quality), (a3.wmode ? a6("wmode", a3.wmode) : ""), a6("bgcolor", a3.bgColor), a6("hasPriority", "true"), (a3.debugFlash ? a6("FlashVars", bl.FlashVars) : ""), "</object>"].join("");
            } else {
                ba = aQ.createElement("embed");
                for (bm in bl) {
                    if (bl.hasOwnProperty(bm)) {
                        ba.setAttribute(bm, bl[bm]);
                    }
                }
            }
            I();
            bf = N();
            bg = ax();
            if (bg) {
                a3.oMC = (aa(a3.movieID) || aQ.createElement("div"));
                if (!a3.oMC.id) {
                    a3.oMC.id = a3.movieID;
                    a3.oMC.className = z.swfDefault + " " + bf;
                    bb = null;
                    bc = null;
                    if (!a3.useFlashBlock) {
                        if (a3.useHighPerformance) {
                            bb = {
                                position: "fixed",
                                width: "8px",
                                height: "8px",
                                bottom: "0px",
                                left: "0px",
                                overflow: "hidden"
                            };
                        } else {
                            bb = {
                                position: "absolute",
                                width: "6px",
                                height: "6px",
                                top: "-9999px",
                                left: "-9999px"
                            };
                            if (a5) {
                                bb.left = Math.abs(parseInt(bb.left, 10)) + "px";
                            }
                        }
                    }
                    if (o) {
                        a3.oMC.style.zIndex = 10000;
                    }
                    if (!a3.debugFlash) {
                        for (a7 in bb) {
                            if (bb.hasOwnProperty(a7)) {
                                a3.oMC.style[a7] = bb[a7];
                            }
                        }
                    }
                    try {
                        if (!f) {
                            a3.oMC.appendChild(ba);
                        }
                        bg.appendChild(a3.oMC);
                        if (f) {
                            bc = a3.oMC.appendChild(aQ.createElement("div"));
                            bc.className = z.swfBox;
                            bc.innerHTML = be;
                        }
                        aY = true;
                    } catch(bk) {
                        throw new Error(ab("domError") + " \n" + bk.toString());
                    }
                } else {
                    bn = a3.oMC.className;
                    a3.oMC.className = (bn ? bn + " ": z.swfDefault) + (bf ? " " + bf: "");
                    a3.oMC.appendChild(ba);
                    if (f) {
                        bc = a3.oMC.appendChild(aQ.createElement("div"));
                        bc.className = z.swfBox;
                        bc.innerHTML = be;
                    }
                    aY = true;
                }
            }
            aC = true;
            bh();
            a3._wD(ay + "createMovie(): Trying to load " + a9 + (!aB && a3.altURL ? " (alternate URL)": ""), 1);
            return true;
        };
        t = function() {
            if (a3.html5Only) {
                aV();
                return false;
            }
            if (n) {
                return false;
            }
            n = a3.getMovie(a3.id);
            if (!n) {
                if (!p) {
                    aV(a3.id, a3.url);
                } else {
                    if (!f) {
                        a3.oMC.appendChild(p);
                    } else {
                        a3.oMC.innerHTML = aA;
                    }
                    p = null;
                    aC = true;
                }
                n = a3.getMovie(a3.id);
            }
            if (n) {
                C("waitEI");
            }
            if (typeof a3.oninitmovie === "function") {
                setTimeout(a3.oninitmovie, 1);
            }
            return true;
        };
        ao = function() {
            setTimeout(v, 1000);
        };
        v = function() {
            var a6,
            a5 = false;
            if (a4) {
                return false;
            }
            a4 = true;
            s.remove(k, "load", ao);
            if (ah && !aR) {
                C("waitFocus");
                return false;
            }
            if (!aW) {
                a6 = a3.getMoviePercent();
                a3._wD(ab("waitImpatient", (a6 > 0 ? " (SWF " + a6 + "% loaded)": "")));
                if (a6 > 0 && a6 < 100) {
                    a5 = true;
                }
            }
            setTimeout(function() {
                a6 = a3.getMoviePercent();
                if (a5) {
                    a4 = false;
                    a3._wD(ab("waitSWF"));
                    k.setTimeout(ao, 1);
                    return false;
                }
                if (!aW) {
                    a3._wD(aL + ": No Flash response within expected time.\nLikely causes: " + (a6 === 0 ? "Loading " + a3.movieURL + " may have failed (and/or Flash " + e + "+ not present?), ": "") + "Flash blocked or JS-Flash security error." + (a3.debugFlash ? " " + ab("checkSWF") : ""), 2);
                    if (!aB && a6) {
                        C("localFail", 2);
                        if (!a3.debugFlash) {
                            C("tryDebug", 2);
                        }
                    }
                    if (a6 === 0) {
                        a3._wD(ab("swf404", a3.url));
                    }
                    am("flashtojs", false, ": Timed out" + aB ? " (Check flash security or flash blockers)": " (No plugin/missing SWF?)");
                }
                if (!aW && K) {
                    if (a6 === null) {
                        if (a3.useFlashBlock || a3.flashLoadTimeout === 0) {
                            if (a3.useFlashBlock) {
                                i();
                            }
                            C("waitForever");
                        } else {
                            aw(true);
                        }
                    } else {
                        if (a3.flashLoadTimeout === 0) {
                            C("waitForever");
                        } else {
                            aw(true);
                        }
                    }
                }
            }, a3.flashLoadTimeout);
        };
        aN = function() {
            function a5() {
                s.remove(k, "focus", aN);
            }
            if (aR || !ah) {
                a5();
                return true;
            }
            K = true;
            aR = true;
            a3._wD(aL + ": Got window focus.");
            a4 = false;
            ao();
            a5();
            return true;
        };
        D = function() {
            var a6,
            a5 = [];
            if (a3.useHTML5Audio && a3.hasHTML5) {
                for (a6 in a3.audioFormats) {
                    if (a3.audioFormats.hasOwnProperty(a6)) {
                        a5.push(a6 + ": " + a3.html5[a6] + (!a3.html5[a6] && g && a3.flash[a6] ? " (using flash)": (a3.preferFlash && a3.flash[a6] && g ? " (preferring flash)": (!a3.html5[a6] ? " (" + (a3.audioFormats[a6].required ? "required, ": "") + "and no flash support)": ""))));
                    }
                }
                a3._wD("-- SoundManager 2: HTML5 support tests (" + a3.html5Test + "): " + a5.join(", ") + " --", 1);
            }
        };
        W = function(a8) {
            if (aW) {
                return false;
            }
            if (a3.html5Only) {
                a3._wD("-- SoundManager 2: loaded --");
                aW = true;
                az();
                am("onload", true);
                return true;
            }
            var a6 = (a3.useFlashBlock && a3.flashLoadTimeout && !a3.getMoviePercent()),
            a5 = true,
            a7;
            if (!a6) {
                aW = true;
                if (J) {
                    a7 = {
                        type: (!g && an ? "NO_FLASH": "INIT_TIMEOUT")
                        };
                }
            }
            a3._wD("-- SoundManager 2 " + (J ? "failed to load": "loaded") + " (" + (J ? "security/load error": "OK") + ") --", 1);
            if (J || a8) {
                if (a3.useFlashBlock && a3.oMC) {
                    a3.oMC.className = N() + " " + (a3.getMoviePercent() === null ? z.swfTimedout: z.swfError);
                }
                a2({
                    type: "ontimeout",
                    error: a7,
                    ignoreInit: true
                });
                am("onload", false);
                aM(a7);
                a5 = false;
            } else {
                am("onload", true);
            }
            if (!J) {
                if (a3.waitForWindowLoad && !w) {
                    C("waitOnload");
                    s.add(k, "load", az);
                } else {
                    if (a3.waitForWindowLoad && w) {
                        C("docLoaded");
                    }
                    az();
                }
            }
            return a5;
        };
        aF = function() {
            C("init");
            if (aW) {
                C("didInit");
                return false;
            }
            function a5() {
                s.remove(k, "load", a3.beginDelayedInit);
            }
            if (a3.html5Only) {
                if (!aW) {
                    a5();
                    a3.enabled = true;
                    W();
                }
                return true;
            }
            t();
            try {
                C("flashJS");
                n._externalInterfaceTest(false);
                at(true, (a3.flashPollingInterval || (a3.useHighPerformance ? 10: 50)));
                if (!a3.debugMode) {
                    n._disableDebug();
                }
                a3.enabled = true;
                am("jstoflash", true);
                if (!a3.html5Only) {
                    s.add(k, "unload", ai);
                }
            } catch(a6) {
                a3._wD("js/flash exception: " + a6.toString());
                am("jstoflash", false);
                aM({
                    type: "JS_TO_FLASH_EXCEPTION",
                    fatal: true
                });
                aw(true);
                W();
                return false;
            }
            W();
            a5();
            return true;
        };
        M = function() {
            if (aJ) {
                return false;
            }
            aJ = true;
            I(); (function() {
                var a9 = "sm2-usehtml5audio=",
                a8 = l.toLowerCase(),
                a7 = null,
                a6 = "sm2-preferflash=",
                ba = null,
                a5 = (typeof console !== "undefined" && typeof console.log === "function");
                if (a8.indexOf(a9) !== -1) {
                    a7 = (a8.charAt(a8.indexOf(a9) + a9.length) === "1");
                    if (a5) {
                        console.log((a7 ? "Enabling ": "Disabling ") + "useHTML5Audio via URL parameter");
                    }
                    a3.useHTML5Audio = a7;
                }
                if (a8.indexOf(a6) !== -1) {
                    ba = (a8.charAt(a8.indexOf(a6) + a6.length) === "1");
                    if (a5) {
                        console.log((ba ? "Enabling ": "Disabling ") + "preferFlash via URL parameter");
                    }
                    a3.preferFlash = ba;
                }
            } ());
            if (!g && a3.hasHTML5) {
                a3._wD("SoundManager: No Flash detected" + (!a3.useHTML5Audio ? ", enabling HTML5.": ". Trying HTML5-only mode."));
                a3.useHTML5Audio = true;
                a3.preferFlash = false;
            }
            a1();
            a3.html5.usingFlash = al();
            an = a3.html5.usingFlash;
            D();
            if (!g && an) {
                a3._wD("SoundManager: Fatal error: Flash is needed to play some required formats, but is not available.");
                a3.flashLoadTimeout = 1;
            }
            if (aQ.removeEventListener) {
                aQ.removeEventListener("DOMContentLoaded", M, false);
            }
            t();
            return true;
        };
        aI = function() {
            if (aQ.readyState === "complete") {
                M();
                aQ.detachEvent("onreadystatechange", aI);
            }
            return true;
        };
        B = function() {
            w = true;
            s.remove(k, "load", B);
        };
        a0();
        s.add(k, "focus", aN);
        s.add(k, "load", ao);
        s.add(k, "load", B);
        if (aQ.addEventListener) {
            aQ.addEventListener("DOMContentLoaded", M, false);
        } else {
            if (aQ.attachEvent) {
                aQ.attachEvent("onreadystatechange", aI);
            } else {
                am("onload", false);
                aM({
                    type: "NO_DOM2_EVENTS",
                    fatal: true
                });
            }
        }
        if (aQ.readyState === "complete") {
            setTimeout(M, 100);
        }
    }
    if (typeof SM2_DEFER === "undefined" || !SM2_DEFER) {
        b = new a();
    }
    c.SoundManager = a;
    c.soundManager = b;
} (window));
jQuery.cookie = function(d, e, b) {
    if (arguments.length > 1 && String(e) !== "[object Object]") {
        b = jQuery.extend({}, b);
        if (e === null || e === undefined) {
            b.expires = -1;
        }
        if (typeof b.expires === "number") {
            var g = b.expires,
            c = b.expires = new Date();
            c.setDate(c.getDate() + g);
        }
        e = String(e);
        return (document.cookie = [encodeURIComponent(d), "=", b.raw ? e: encodeURIComponent(e), b.expires ? "; expires=" + b.expires.toUTCString() : "", b.path ? "; path=" + b.path: "", b.domain ? "; domain=" + b.domain: "", b.secure ? "; secure": ""].join(""));
    }
    b = e || {};
    var a,
    f = b.raw ? function(h) {
        return h;
    }: decodeURIComponent;
    return (a = new RegExp("(?:^|; )" + encodeURIComponent(d) + "=([^;]*)").exec(document.cookie)) ? f(a[1]) : null;
}; (function(d) {
    var c = function(g, f) {
        return (g << f) | (g >>> (32 - f));
    };
    var b = function(j) {
        var f = "";
        var g;
        var k;
        var h;
        for (g = 0; g <= 6; g += 2) {
            k = (j >>> (g * 4 + 4)) & 15;
            h = (j >>> (g * 4)) & 15;
            f += k.toString(16) + h.toString(16);
        }
        return f;
    };
    var a = function(j) {
        var g = "";
        var h;
        var f;
        for (h = 7; h >= 0; h--) {
            f = (j >>> (h * 4)) & 15;
            g += f.toString(16);
        }
        return g;
    };
    var e = function(g) {
        g = g.replace(/\x0d\x0a/g, "\x0a");
        var f = "";
        for (var i = 0; i < g.length; i++) {
            var h = g.charCodeAt(i);
            if (h < 128) {
                f += String.fromCharCode(h);
            } else {
                if ((h > 127) && (h < 2048)) {
                    f += String.fromCharCode((h >> 6) | 192);
                    f += String.fromCharCode((h & 63) | 128);
                } else {
                    f += String.fromCharCode((h >> 12) | 224);
                    f += String.fromCharCode(((h >> 6) & 63) | 128);
                    f += String.fromCharCode((h & 63) | 128);
                }
            }
        }
        return f;
    };
    d.extend({
        sha1: function(f) {
            var l;
            var x,
            w;
            var g = new Array(80);
            var o = 1732584193;
            var n = 4023233417;
            var m = 2562383102;
            var k = 271733878;
            var h = 3285377520;
            var v,
            t,
            s,
            r,
            q;
            var y;
            f = e(f);
            var p = f.length;
            var u = new Array();
            for (x = 0; x < p - 3; x += 4) {
                w = f.charCodeAt(x) << 24 | f.charCodeAt(x + 1) << 16 | f.charCodeAt(x + 2) << 8 | f.charCodeAt(x + 3);
                u.push(w);
            }
            switch (p % 4) {
            case 0:
                x = 2147483648;
                break;
            case 1:
                x = f.charCodeAt(p - 1) << 24 | 8388608;
                break;
            case 2:
                x = f.charCodeAt(p - 2) << 24 | f.charCodeAt(p - 1) << 16 | 32768;
                break;
            case 3:
                x = f.charCodeAt(p - 3) << 24 | f.charCodeAt(p - 2) << 16 | f.charCodeAt(p - 1) << 8 | 128;
                break;
            }
            u.push(x);
            while ((u.length % 16) != 14) {
                u.push(0);
            }
            u.push(p >>> 29);
            u.push((p << 3) & 4294967295);
            for (l = 0; l < u.length; l += 16) {
                for (x = 0; x < 16; x++) {
                    g[x] = u[l + x];
                }
                for (x = 16; x <= 79; x++) {
                    g[x] = c(g[x - 3]^g[x - 8]^g[x - 14]^g[x - 16], 1);
                }
                v = o;
                t = n;
                s = m;
                r = k;
                q = h;
                for (x = 0; x <= 19; x++) {
                    y = (c(v, 5) + ((t & s) | (~t & r)) + q + g[x] + 1518500249) & 4294967295;
                    q = r;
                    r = s;
                    s = c(t, 30);
                    t = v;
                    v = y;
                }
                for (x = 20; x <= 39; x++) {
                    y = (c(v, 5) + (t^s^r) + q + g[x] + 1859775393) & 4294967295;
                    q = r;
                    r = s;
                    s = c(t, 30);
                    t = v;
                    v = y;
                }
                for (x = 40; x <= 59; x++) {
                    y = (c(v, 5) + ((t & s) | (t & r) | (s & r)) + q + g[x] + 2400959708) & 4294967295;
                    q = r;
                    r = s;
                    s = c(t, 30);
                    t = v;
                    v = y;
                }
                for (x = 60; x <= 79; x++) {
                    y = (c(v, 5) + (t^s^r) + q + g[x] + 3395469782) & 4294967295;
                    q = r;
                    r = s;
                    s = c(t, 30);
                    t = v;
                    v = y;
                }
                o = (o + v) & 4294967295;
                n = (n + t) & 4294967295;
                m = (m + s) & 4294967295;
                k = (k + r) & 4294967295;
                h = (h + q) & 4294967295;
            }
            var y = a(o) + a(n) + a(m) + a(k) + a(h);
            return y.toLowerCase();
        }
    });
})(jQuery);
$.fn.egrep = function(b) {
    var a = [];
    var c = function(e) {
        if (e.nodeType == Node.TEXT_NODE) {
            var d = typeof b == "string" ? e.nodeValue.indexOf(b) != -1: b.test(e.nodeValue);
            if (d) {
                a.push(e.parentNode);
            }
        } else {
            $.each(e.childNodes, function(g, f) {
                c(f);
            });
        }
    };
    this.each(function() {
        c(this);
    });
    return a;
};
var swfobject = function() {
    var aq = "undefined",
    aD = "object",
    ab = "Shockwave Flash",
    X = "ShockwaveFlash.ShockwaveFlash",
    aE = "application/x-shockwave-flash",
    ac = "SWFObjectExprInst",
    ax = "onreadystatechange",
    af = window,
    aL = document,
    aB = navigator,
    aa = false,
    Z = [aN],
    aG = [],
    ag = [],
    al = [],
    aJ,
    ad,
    ap,
    at,
    ak = false,
    aU = false,
    aH,
    an,
    aI = true,
    ah = function() {
        var a = typeof aL.getElementById != aq && typeof aL.getElementsByTagName != aq && typeof aL.createElement != aq,
        e = aB.userAgent.toLowerCase(),
        c = aB.platform.toLowerCase(),
        h = c ? /win/.test(c) : /win/.test(e),
        j = c ? /mac/.test(c) : /mac/.test(e),
        g = /webkit/.test(e) ? parseFloat(e.replace(/^.*webkit\/(\d+(\.\d+)?).*$/, "$1")) : false,
        d = !+"\v1",
        f = [0, 0, 0],
        k = null;
        if (typeof aB.plugins != aq && typeof aB.plugins[ab] == aD) {
            k = aB.plugins[ab].description;
            if (k && !(typeof aB.mimeTypes != aq && aB.mimeTypes[aE] && !aB.mimeTypes[aE].enabledPlugin)) {
                aa = true;
                d = false;
                k = k.replace(/^.*\s+(\S+\s+\S+$)/, "$1");
                f[0] = parseInt(k.replace(/^(.*)\..*$/, "$1"), 10);
                f[1] = parseInt(k.replace(/^.*\.(.*)\s.*$/, "$1"), 10);
                f[2] = /[a-zA-Z]/.test(k) ? parseInt(k.replace(/^.*[a-zA-Z]+(.*)$/, "$1"), 10) : 0;
            }
        } else {
            if (typeof af.ActiveXObject != aq) {
                try {
                    var i = new ActiveXObject(X);
                    if (i) {
                        k = i.GetVariable("$version");
                        if (k) {
                            d = true;
                            k = k.split(" ")[1].split(",");
                            f = [parseInt(k[0], 10), parseInt(k[1], 10), parseInt(k[2], 10)];
                        }
                    }
                } catch(b) {}
            }
        }
        return {
            w3: a,
            pv: f,
            wk: g,
            ie: d,
            win: h,
            mac: j
        };
    } (),
    aK = function() {
        if (!ah.w3) {
            return;
        }
        if ((typeof aL.readyState != aq && aL.readyState == "complete") || (typeof aL.readyState == aq && (aL.getElementsByTagName("body")[0] || aL.body))) {
            aP();
        }
        if (!ak) {
            if (typeof aL.addEventListener != aq) {
                aL.addEventListener("DOMContentLoaded", aP, false);
            }
            if (ah.ie && ah.win) {
                aL.attachEvent(ax, function() {
                    if (aL.readyState == "complete") {
                        aL.detachEvent(ax, arguments.callee);
                        aP();
                    }
                });
                if (af == top) { (function() {
                        if (ak) {
                            return;
                        }
                        try {
                            aL.documentElement.doScroll("left");
                        } catch(a) {
                            setTimeout(arguments.callee, 0);
                            return;
                        }
                        aP();
                    })();
                }
            }
            if (ah.wk) { (function() {
                    if (ak) {
                        return;
                    }
                    if (!/loaded|complete/.test(aL.readyState)) {
                        setTimeout(arguments.callee, 0);
                        return;
                    }
                    aP();
                })();
            }
            aC(aP);
        }
    } ();
    function aP() {
        if (ak) {
            return;
        }
        try {
            var b = aL.getElementsByTagName("body")[0].appendChild(ar("span"));
            b.parentNode.removeChild(b);
        } catch(a) {
            return;
        }
        ak = true;
        var d = Z.length;
        for (var c = 0; c < d; c++) {
            Z[c]();
        }
    }
    function aj(a) {
        if (ak) {
            a();
        } else {
            Z[Z.length] = a;
        }
    }
    function aC(a) {
        if (typeof af.addEventListener != aq) {
            af.addEventListener("load", a, false);
        } else {
            if (typeof aL.addEventListener != aq) {
                aL.addEventListener("load", a, false);
            } else {
                if (typeof af.attachEvent != aq) {
                    aM(af, "onload", a);
                } else {
                    if (typeof af.onload == "function") {
                        var b = af.onload;
                        af.onload = function() {
                            b();
                            a();
                        };
                    } else {
                        af.onload = a;
                    }
                }
            }
        }
    }
    function aN() {
        if (aa) {
            Y();
        } else {
            am();
        }
    }
    function Y() {
        var d = aL.getElementsByTagName("body")[0];
        var b = ar(aD);
        b.setAttribute("type", aE);
        var a = d.appendChild(b);
        if (a) {
            var c = 0; (function() {
                if (typeof a.GetVariable != aq) {
                    var e = a.GetVariable("$version");
                    if (e) {
                        e = e.split(" ")[1].split(",");
                        ah.pv = [parseInt(e[0], 10), parseInt(e[1], 10), parseInt(e[2], 10)];
                    }
                } else {
                    if (c < 10) {
                        c++;
                        setTimeout(arguments.callee, 10);
                        return;
                    }
                }
                d.removeChild(b);
                a = null;
                am();
            })();
        } else {
            am();
        }
    }
    function am() {
        var g = aG.length;
        if (g > 0) {
            for (var h = 0; h < g; h++) {
                var c = aG[h].id;
                var l = aG[h].callbackFn;
                var a = {
                    success: false,
                    id: c
                };
                if (ah.pv[0] > 0) {
                    var i = aS(c);
                    if (i) {
                        if (ao(aG[h].swfVersion) && !(ah.wk && ah.wk < 312)) {
                            ay(c, true);
                            if (l) {
                                a.success = true;
                                a.ref = av(c);
                                l(a);
                            }
                        } else {
                            if (aG[h].expressInstall && au()) {
                                var e = {};
                                e.data = aG[h].expressInstall;
                                e.width = i.getAttribute("width") || "0";
                                e.height = i.getAttribute("height") || "0";
                                if (i.getAttribute("class")) {
                                    e.styleclass = i.getAttribute("class");
                                }
                                if (i.getAttribute("align")) {
                                    e.align = i.getAttribute("align");
                                }
                                var f = {};
                                var d = i.getElementsByTagName("param");
                                var k = d.length;
                                for (var j = 0; j < k; j++) {
                                    if (d[j].getAttribute("name").toLowerCase() != "movie") {
                                        f[d[j].getAttribute("name")] = d[j].getAttribute("value");
                                    }
                                }
                                ae(e, f, c, l);
                            } else {
                                aF(i);
                                if (l) {
                                    l(a);
                                }
                            }
                        }
                    }
                } else {
                    ay(c, true);
                    if (l) {
                        var b = av(c);
                        if (b && typeof b.SetVariable != aq) {
                            a.success = true;
                            a.ref = b;
                        }
                        l(a);
                    }
                }
            }
        }
    }
    function av(b) {
        var d = null;
        var c = aS(b);
        if (c && c.nodeName == "OBJECT") {
            if (typeof c.SetVariable != aq) {
                d = c;
            } else {
                var a = c.getElementsByTagName(aD)[0];
                if (a) {
                    d = a;
                }
            }
        }
        return d;
    }
    function au() {
        return ! aU && ao("6.0.65") && (ah.win || ah.mac) && !(ah.wk && ah.wk < 312);
    }
    function ae(f, d, h, e) {
        aU = true;
        ap = e || null;
        at = {
            success: false,
            id: h
        };
        var a = aS(h);
        if (a) {
            if (a.nodeName == "OBJECT") {
                aJ = aO(a);
                ad = null;
            } else {
                aJ = a;
                ad = h;
            }
            f.id = ac;
            if (typeof f.width == aq || (!/%$/.test(f.width) && parseInt(f.width, 10) < 310)) {
                f.width = "310";
            }
            if (typeof f.height == aq || (!/%$/.test(f.height) && parseInt(f.height, 10) < 137)) {
                f.height = "137";
            }
            aL.title = aL.title.slice(0, 47) + " - Flash Player Installation";
            var b = ah.ie && ah.win ? "ActiveX": "PlugIn",
            c = "MMredirectURL=" + af.location.toString().replace(/&/g, "%26") + "&MMplayerType=" + b + "&MMdoctitle=" + aL.title;
            if (typeof d.flashvars != aq) {
                d.flashvars += "&" + c;
            } else {
                d.flashvars = c;
            }
            if (ah.ie && ah.win && a.readyState != 4) {
                var g = ar("div");
                h += "SWFObjectNew";
                g.setAttribute("id", h);
                a.parentNode.insertBefore(g, a);
                a.style.display = "none"; (function() {
                    if (a.readyState == 4) {
                        a.parentNode.removeChild(a);
                    } else {
                        setTimeout(arguments.callee, 10);
                    }
                })();
            }
            aA(f, d, h);
        }
    }
    function aF(a) {
        if (ah.ie && ah.win && a.readyState != 4) {
            var b = ar("div");
            a.parentNode.insertBefore(b, a);
            b.parentNode.replaceChild(aO(a), b);
            a.style.display = "none"; (function() {
                if (a.readyState == 4) {
                    a.parentNode.removeChild(a);
                } else {
                    setTimeout(arguments.callee, 10);
                }
            })();
        } else {
            a.parentNode.replaceChild(aO(a), a);
        }
    }
    function aO(b) {
        var d = ar("div");
        if (ah.win && ah.ie) {
            d.innerHTML = b.innerHTML;
        } else {
            var e = b.getElementsByTagName(aD)[0];
            if (e) {
                var a = e.childNodes;
                if (a) {
                    var f = a.length;
                    for (var c = 0; c < f; c++) {
                        if (! (a[c].nodeType == 1 && a[c].nodeName == "PARAM") && !(a[c].nodeType == 8)) {
                            d.appendChild(a[c].cloneNode(true));
                        }
                    }
                }
            }
        }
        return d;
    }
    function aA(e, g, c) {
        var d,
        a = aS(c);
        if (ah.wk && ah.wk < 312) {
            return d;
        }
        if (a) {
            if (typeof e.id == aq) {
                e.id = c;
            }
            if (ah.ie && ah.win) {
                var f = "";
                for (var i in e) {
                    if (e[i] != Object.prototype[i]) {
                        if (i.toLowerCase() == "data") {
                            g.movie = e[i];
                        } else {
                            if (i.toLowerCase() == "styleclass") {
                                f += ' class="' + e[i] + '"';
                            } else {
                                if (i.toLowerCase() != "classid") {
                                    f += " " + i + '="' + e[i] + '"';
                                }
                            }
                        }
                    }
                }
                var h = "";
                for (var j in g) {
                    if (g[j] != Object.prototype[j]) {
                        h += '<param name="' + j + '" value="' + g[j] + '" />';
                    }
                }
                a.outerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"' + f + ">" + h + "</object>";
                ag[ag.length] = e.id;
                d = aS(e.id);
            } else {
                var b = ar(aD);
                b.setAttribute("type", aE);
                for (var k in e) {
                    if (e[k] != Object.prototype[k]) {
                        if (k.toLowerCase() == "styleclass") {
                            b.setAttribute("class", e[k]);
                        } else {
                            if (k.toLowerCase() != "classid") {
                                b.setAttribute(k, e[k]);
                            }
                        }
                    }
                }
                for (var l in g) {
                    if (g[l] != Object.prototype[l] && l.toLowerCase() != "movie") {
                        aQ(b, l, g[l]);
                    }
                }
                a.parentNode.replaceChild(b, a);
                d = b;
            }
        }
        return d;
    }
    function aQ(b, d, c) {
        var a = ar("param");
        a.setAttribute("name", d);
        a.setAttribute("value", c);
        b.appendChild(a);
    }
    function aw(a) {
        var b = aS(a);
        if (b && b.nodeName == "OBJECT") {
            if (ah.ie && ah.win) {
                b.style.display = "none"; (function() {
                    if (b.readyState == 4) {
                        aT(a);
                    } else {
                        setTimeout(arguments.callee, 10);
                    }
                })();
            } else {
                b.parentNode.removeChild(b);
            }
        }
    }
    function aT(a) {
        var b = aS(a);
        if (b) {
            for (var c in b) {
                if (typeof b[c] == "function") {
                    b[c] = null;
                }
            }
            b.parentNode.removeChild(b);
        }
    }
    function aS(a) {
        var c = null;
        try {
            c = aL.getElementById(a);
        } catch(b) {}
        return c;
    }
    function ar(a) {
        return aL.createElement(a);
    }
    function aM(a, c, b) {
        a.attachEvent(c, b);
        al[al.length] = [a, c, b];
    }
    function ao(a) {
        var b = ah.pv,
        c = a.split(".");
        c[0] = parseInt(c[0], 10);
        c[1] = parseInt(c[1], 10) || 0;
        c[2] = parseInt(c[2], 10) || 0;
        return (b[0] > c[0] || (b[0] == c[0] && b[1] > c[1]) || (b[0] == c[0] && b[1] == c[1] && b[2] >= c[2])) ? true: false;
    }
    function az(b, f, a, c) {
        if (ah.ie && ah.mac) {
            return;
        }
        var e = aL.getElementsByTagName("head")[0];
        if (!e) {
            return;
        }
        var g = (a && typeof a == "string") ? a: "screen";
        if (c) {
            aH = null;
            an = null;
        }
        if (!aH || an != g) {
            var d = ar("style");
            d.setAttribute("type", "text/css");
            d.setAttribute("media", g);
            aH = e.appendChild(d);
            if (ah.ie && ah.win && typeof aL.styleSheets != aq && aL.styleSheets.length > 0) {
                aH = aL.styleSheets[aL.styleSheets.length - 1];
            }
            an = g;
        }
        if (ah.ie && ah.win) {
            if (aH && typeof aH.addRule == aD) {
                aH.addRule(b, f);
            }
        } else {
            if (aH && typeof aL.createTextNode != aq) {
                aH.appendChild(aL.createTextNode(b + " {" + f + "}"));
            }
        }
    }
    function ay(a, c) {
        if (!aI) {
            return;
        }
        var b = c ? "visible": "hidden";
        if (ak && aS(a)) {
            aS(a).style.visibility = b;
        } else {
            az("#" + a, "visibility:" + b);
        }
    }
    function ai(b) {
        var a = /[\\\"<>\.;]/;
        var c = a.exec(b) != null;
        return c && typeof encodeURIComponent != aq ? encodeURIComponent(b) : b;
    }
    var aR = function() {
        if (ah.ie && ah.win) {
            window.attachEvent("onunload", function() {
                var a = al.length;
                for (var b = 0; b < a; b++) {
                    al[b][0].detachEvent(al[b][1], al[b][2]);
                }
                var d = ag.length;
                for (var c = 0; c < d; c++) {
                    aw(ag[c]);
                }
                for (var e in ah) {
                    ah[e] = null;
                }
                ah = null;
                for (var f in swfobject) {
                    swfobject[f] = null;
                }
                swfobject = null;
            });
        }
    } ();
    return {
        registerObject: function(a, e, c, b) {
            if (ah.w3 && a && e) {
                var d = {};
                d.id = a;
                d.swfVersion = e;
                d.expressInstall = c;
                d.callbackFn = b;
                aG[aG.length] = d;
                ay(a, false);
            } else {
                if (b) {
                    b({
                        success: false,
                        id: a
                    });
                }
            }
        },
        getObjectById: function(a) {
            if (ah.w3) {
                return av(a);
            }
        },
        embedSWF: function(k, e, h, f, c, a, b, i, g, j) {
            var d = {
                success: false,
                id: e
            };
            if (ah.w3 && !(ah.wk && ah.wk < 312) && k && e && h && f && c) {
                ay(e, false);
                aj(function() {
                    h += "";
                    f += "";
                    var q = {};
                    if (g && typeof g === aD) {
                        for (var o in g) {
                            q[o] = g[o];
                        }
                    }
                    q.data = k;
                    q.width = h;
                    q.height = f;
                    var n = {};
                    if (i && typeof i === aD) {
                        for (var p in i) {
                            n[p] = i[p];
                        }
                    }
                    if (b && typeof b === aD) {
                        for (var l in b) {
                            if (typeof n.flashvars != aq) {
                                n.flashvars += "&" + l + "=" + b[l];
                            } else {
                                n.flashvars = l + "=" + b[l];
                            }
                        }
                    }
                    if (ao(c)) {
                        var m = aA(q, n, e);
                        if (q.id == e) {
                            ay(e, true);
                        }
                        d.success = true;
                        d.ref = m;
                    } else {
                        if (a && au()) {
                            q.data = a;
                            ae(q, n, e, j);
                            return;
                        } else {
                            ay(e, true);
                        }
                    }
                    if (j) {
                        j(d);
                    }
                });
            } else {
                if (j) {
                    j(d);
                }
            }
        },
        switchOffAutoHideShow: function() {
            aI = false;
        },
        ua: ah,
        getFlashPlayerVersion: function() {
            return {
                major: ah.pv[0],
                minor: ah.pv[1],
                release: ah.pv[2]
                };
        },
        hasFlashPlayerVersion: ao,
        createSWF: function(a, b, c) {
            if (ah.w3) {
                return aA(a, b, c);
            } else {
                return undefined;
            }
        },
        showExpressInstall: function(b, a, d, c) {
            if (ah.w3 && au()) {
                ae(b, a, d, c);
            }
        },
        removeSWF: function(a) {
            if (ah.w3) {
                aw(a);
            }
        },
        createCSS: function(b, a, c, d) {
            if (ah.w3) {
                az(b, a, c, d);
            }
        },
        addDomLoadEvent: aj,
        addLoadEvent: aC,
        getQueryParamValue: function(b) {
            var a = aL.location.search || aL.location.hash;
            if (a) {
                if (/\?/.test(a)) {
                    a = a.split("?")[1];
                }
                if (b == null) {
                    return ai(a);
                }
                var c = a.split("&");
                for (var d = 0; d < c.length; d++) {
                    if (c[d].substring(0, c[d].indexOf("=")) == b) {
                        return ai(c[d].substring((c[d].indexOf("=") + 1)));
                    }
                }
            }
            return "";
        },
        expressInstallCallback: function() {
            if (aU) {
                var a = aS(ac);
                if (a && aJ) {
                    a.parentNode.replaceChild(aJ, a);
                    if (ad) {
                        ay(ad, true);
                        if (ah.ie && ah.win) {
                            aJ.style.display = "block";
                        }
                    }
                    if (ap) {
                        ap(at);
                    }
                }
                aU = false;
            }
        }
    };
} (); (function() {
    var initializing = false,
    fnTest = /xyz/.test(function() {
        xyz;
    }) ? /\b_super\b/: /.*/;
    this.Class = function() {};
    Class.extend = function(prop) {
        var _super = this.prototype;
        initializing = true;
        var prototype = new this();
        initializing = false;
        var className = "Class";
        for (var name in prop) {
            if (name === "_name") {
                var potentialClassName = prop[name];
                potentialClassName = potentialClassName.replace(/[^\w$]/g, "");
                if (potentialClassName.length <= 0) {
                    continue;
                } else {
                    if (!/^[a-zA-Z_$].*$/.test(potentialClassName)) {
                        potentialClassName = "Class" + potentialClassName;
                    }
                }
                className = potentialClassName;
                continue;
            }
            prototype[name] = typeof prop[name] == "function" && typeof _super[name] == "function" && fnTest.test(prop[name]) ? (function(name, fn) {
                return function() {
                    var tmp = this._super;
                    this._super = _super[name];
                    var ret = fn.apply(this, arguments);
                    this._super = tmp;
                    return ret;
                };
            })(name, prop[name]) : prop[name];
        }
        eval("var " + className + " = function() { if ( !initializing && this.init ) this.init.apply(this, arguments); }; var Class = " + className);
        Class.prototype = prototype;
        Class.constructor = Class;
        Class.extend = arguments.callee;
        return Class;
    };
})();
var util = (function() {
    var a = function() {
        var e = this;
        var d = {
            lines: 13,
            length: 10,
            width: 3,
            radius: 13,
            color: "#FFF",
            shadow: true
        };
        function c(i, h) {
            if (i.height && i.width) {
                h.resolve();
                return true;
            }
            return false;
        }
        function b(n, o, l) {
            var k = $(n);
            for (var q in o) {
                if (q == "style") {
                    var j = o[q];
                    for (var s in j) {
                        k.css(s, j[s]);
                    }
                } else {
                    if (q == "data") {
                        var r = o[q];
                        $.data(n, r);
                    } else {
                        if (q == "event") {
                            g(n, o[q], l);
                        } else {
                            if (q == "cssClass" || q == "className") {
                                var h = o[q].split(" ");
                                var m = h.length;
                                for (var p = 0; p < m; p++) {
                                    k.addClass(h[p]);
                                }
                            } else {
                                k.attr(q, o[q]);
                            }
                        }
                    }
                }
            }
        }
        function g(m, i, h) {
            if ($.type(i) != "object") {
                LOG("WARNING: 'events' " + String(i) + " is not a dict");
                return;
            }
            for (var k in i) {
                var j = i[k];
                if ($.type(j) == "string") {
                    if (!h) {
                        LOG("WARNING: no owner provided for event handler '" + j + "'");
                        continue;
                    }
                    var l = h[j];
                    if (!l) {
                        LOG("WARNING: no event handler " + String(h) + "." + j);
                        continue;
                    }
                    j = l;
                }
                if (!j) {
                    continue;
                }
                if (!window.DEBUG_MODE) {
                    j = e.eventHandlerDecorator(j);
                }
                $(m).on(k, j);
            }
        }
        this.endsWith = function(i, h) {
            return i.indexOf(h, i.length - h.length) !== -1;
        };
        this.stripTrailingSlash = function(h) {
            if (h[h.length - 1] === "/") {
                h = h.substr(0, h.length - 1);
            }
            return h;
        };
        this.strip = function(j, i) {
            if (i === undefined) {
                return $.trim(j);
            } else {
                if (i === "") {
                    return j;
                }
            }
            i = i.replace("\\", "\\\\");
            var h = new RegExp("^[" + i + "]+|[" + i + "]+$", "g");
            return j.replace(h, "");
        };
        this.alphabetize = function(i, h) {
            i.sort(function(l, k) {
                var j,
                m;
                if (h) {
                    j = l[h].toLowerCase();
                    m = k[h].toLowerCase();
                } else {
                    j = l.toLowerCase();
                    m = k.toLowerCase();
                }
                return (m > j) ? -1: (m < j) ? 1: 0;
            });
            return i;
        };
        this.domify = function(m) {
            var l = $.parseHTML(m);
            if (!l) {
                return document.createDocumentFragment();
            }
            var h = l.length;
            if (h > 1) {
                var k = document.createDocumentFragment();
                for (var j = 0; j < h; j++) {
                    k.appendChild(l[j]);
                }
                return k;
            } else {
                if (h === 1) {
                    return l[0];
                }
            }
        };
        this.isDOMNode = function(h) {
            if (typeof Node === "object") {
                return h instanceof Node;
            } else {
                return (h && typeof h === "object" && typeof h.nodeType === "number" && typeof h.nodeName === "string");
            }
        };
        this.createElement = function(m, l, h) {
            var t = m.search(/[^#]#\w/);
            if (t != -1) {
                t += 1;
            }
            var p = [[0, "tag"], [m.indexOf("."), "className", "."], [t, "id", "#"], [m.indexOf("##"), "idd", "##"]].sort(function(u, i) {
                return u[0] - i[0];
            });
            var s = {};
            var j = p.length;
            for (var n = 0; n < j; n++) {
                var q = p[n][0];
                if (q < 0) {
                    continue;
                }
                var r = p[n][1];
                if (n == j - 1) {
                    var o = m.length;
                } else {
                    var o = p[n + 1][0];
                }
                s[r] = m.substring(q, o);
                if (r != "tag") {
                    s[r] = s[r].split(p[n][2]).slice(1);
                }
            }
            var k = document.createElement(s.tag);
            if ("className" in s) {
                k.className = s.className.join(" ");
            }
            if ("id" in s) {
                k.id = s.id[0];
            }
            if ("idd" in s && h) {
                var j = s.idd.length;
                for (var n = 0; n < j; n++) {
                    h[s.idd[n]] = k;
                }
            }
            if (l) {
                b(k, l, h);
            }
            return k;
        };
        this.buildTree = function(n, h) {
            if (this.isDOMNode(n)) {
                return n;
            }
            var s = $.type(n);
            if (s == "string" || s == "number") {
                return document.createTextNode(String(n));
            }
            if (s != "array") {
                return n;
            }
            var o = n[0],
            r = $.type(o),
            l,
            j,
            k;
            if (r === "string" || r === "function") {
                j = n.slice(1);
                if ($.type(j[0]) == "object" && !this.isDOMNode(j[0])) {
                    l = j[0];
                    j = j.slice(1);
                }
            } else {
                k = document.createDocumentFragment();
                j = n;
            }
            if (r === "function") {
                var q = new o(l);
                q.render(h, j);
                k = q.node;
            } else {
                if (r == "string") {
                    k = this.createElement(o, l, h);
                    if (o.toLowerCase() == "a" && !k.href) {
                        k.href = "#";
                    }
                }
                for (var m = 0, p = j.length; m < p; m++) {
                    if (j[m] == null || j[m] == undefined) {
                        continue;
                    } else {
                        k.appendChild(e.buildTree(j[m], h));
                    }
                }
                if (r == "string") {
                    if (o.toLowerCase() == "input") {
                        e.setupPlaceholders(k);
                    }
                }
            }
            return k;
        };
        this.createImageWithLoader = function(j) {
            var i = $.Deferred();
            var h = new Image();
            h.onload = function() {
                e.retry(null, c)(h, i);
            };
            h.onerror = function() {
                i.reject();
            };
            h.src = j;
            return [h, i];
        };
        this.detectIEVersion = function() {
            var h = navigator.userAgent;
            var i = new RegExp("MSIE ([0-9]{1,}[\\.0-9]{0,})");
            if (i.exec(h) !== null) {
                return parseFloat(RegExp.$1);
            }
        };
        this.transitionEnd = function() {
            var i = document.createElement("fakeelement"),
            j = {
                transition: "transitionend",
                OTransition: "otransitionend",
                MSTransition: "msTransitionEnd",
                MozTransition: "transitionend",
                WebkitTransition: "webkitTransitionEnd"
            };
            for (var h in j) {
                if (i.style[h] !== undefined) {
                    return j[h];
                }
            }
        } ();
        this.eventHandlerDecorator = function(h) {
            return function() {
                try {
                    return h.apply(this, arguments);
                } catch(i) {
                    LOG("Exception in event handler: " + String(i));
                }
                return false;
            };
        };
        this.now = function() {
            return (new Date()).getTime();
        };
        this.nowStr = function() {
            return String(new Date()).substr(16, 8);
        };
        this.typeOf = function(h) {
            if (h === null) {
                return "null";
            }
            if (h.nodeName) {
                if (h.nodeType == 1) {
                    return "element";
                }
                if (h.nodeType == 3) {
                    return / \S / .test(h.nodeValue) ? "textnode": "whitespace";
                }
            } else {
                if (typeof h.length == "number") {
                    if (h.callee) {
                        return "arguments";
                    }
                }
            }
            return $.type(h);
        };
        this.commafy = function(j) {
            j += "";
            var i = j.split("."),
            h = i[0],
            l = i.length > 1 ? "." + i[1] : "";
            var k = /(\d+)(\d{3})/;
            while (k.test(h)) {
                h = h.replace(k, "$1,$2");
            }
            return h + l;
        };
        this.asciify = function(h) {
            return h.replace(/[\u00E0-\u00E5]/g, "a").replace(/[\u00E8-\u00EB\u0112-\u011B]/g, "e").replace(/[\u00EC-\u00EF]/g, "i").replace(/[\u00F1\u0143-\u014B]/g, "n").replace(/[\u00F2-\u00F6\u00F8\u014C-\u0151]/g, "o").replace(/[\u00D9-\u00DC\u00F9-\u00FC]/, "u").replace(/[\u00DD\u00FD\u00FF]/, "y");
        };
        this.normalize = function(h) {
            return h.replace(/\0.*/, "");
        };
        this.stripComboDiacritics = function(h) {
            return h.replace(/[\u0300-\u036F\u0483-\u0489\u1DC0-\u1DFF\u20D0-\u20FF\uFE20-\uFE2F]/g, "");
        };
        this.cleanText = function(h) {
            return e.asciify(e.normalize(e.stripComboDiacritics(h)));
        };
        this.messageFilter = function(h) {
            return e.emojify(e.linkify(e.safeText(e.memeify(h))));
        };
        this.linkify = function(k) {
            var j = /(\b(https?|ftp):\/\/[\-A-Z0-9+&@#\/%?=~_|!:,.;'\(\)]*[\-A-Z0-9+&@#\/%=~_\(\)|])/gim;
            var h = k.replace(j, '<a href="$1" target="_blank">$1</a>');
            var i = /(\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,6})/gim;
            h = h.replace(i, '<a href="mailto:$1">$1</a>');
            return h;
        };
        this.emojify = function(h) {
            h = h.replace(/:\+1:/g, ":thumbsup:");
            var q = /:([\w\d\-_]+):/g;
            var k = h.match(q);
            if (k) {
                for (var j = 0, o = k.length; j < o; j++) {
                    var m = this.emojiToHtml(k[j]);
                    if (m) {
                        h = h.replace(k[j], m);
                    }
                }
            }
            var n = {
                ":man_with_turban:": /@:\)/g,
                ":imp:": /&gt;:\(/g,
                ":smiling_imp:": /&gt;:\)/g,
                ":smile:": /:-?\)/g,
                ":unamused:": /:-?\(/g,
                ":wink:": /;-?\)/g,
                ":stuck_out_tongue:": /:-?[Pp]/g,
                ":heart:": /&lt;3/g
            };
            for (var l in n) {
                var p = n[l];
                if (p.test(h)) {
                    h = h.replace(p, this.emojiToHtml(l));
                }
            }
            return h;
        };
        this.emojiToHtml = function(i) {
            var h = i.replace(/:/g, "").toLowerCase();
            if (h in f) {
                return "<span title='" + h + "' class='emoji emoji-" + h + "'></span>";
            }
        };
        this.emojiToTree = function(i) {
            var h = i.replace(/:/g, "").toLowerCase();
            if (h in f) {
                return ["span.emoji.emoji-" + h, {
                    title: h
                }];
            }
        };
        this.emojiTypeahead = function(j, i) {
            var l = [],
            k = 0,
            h = j.length;
            for (name in f) {
                if (f.hasOwnProperty(name)) {
                    if (name.substring(0, h) === j) {
                        l[k] = name;
                        k++;
                        if (k >= i) {
                            break;
                        }
                    }
                }
            }
            if (k < i) {
                for (name in f) {
                    if (f.hasOwnProperty(name)) {
                        if (name.indexOf(j) !== -1 && l.indexOf(name) === -1) {
                            l[k] = name;
                            k++;
                            if (k >= i) {
                                break;
                            }
                        }
                    }
                }
            }
            return l;
        },
        this.memeify = function(h) {
            if (h && h.indexOf("/") > -1) {
                return h.replace(/\/seriousface/g, "\u0ca0_\u0ca0").replace(/\/monocle/g, "\u0ca0\u005f\u0cb0\u0cc3").replace(/\/tableflip/g, "(\u256f\u00b0\u25a1\u00b0)\u256f\ufe35\u0020\u253b\u2501\u253b").replace(/\/tablefix/g, "\u252c\u2500\u252c\u30ce\u0028\u0020\u00ba\u0020\u005f\u0020\u00ba\u30ce\u0029").replace(/\/whatever/g, "\u00af\u005c\u005f\u0028\u30c4\u0029\u005f\u002f\u00af").replace(/\/danceparty/g, "\u266a\u250f(\u30fbo\uff65)\u251b\u266a\u2517 ( \uff65o\uff65) \u2513\u266a").replace(/\/koala/g, "\u0295 \u2022\u1d25\u2022\u0294").replace(/\/love/g, "\u2665\u203f\u2665").replace(/\/nano/g, ">: |");
            } else {
                return h;
            }
        };
        this.safeText = function(h) {
            return h.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
        };
        this.brText = function(h) {
            return h.replace(/\n$/, "<br/>&nbsp;").replace(/\n/g, "<br/>");
        };
        this.title = function(h) {
            return h.replace(/(^|\s)([a-z])/g, function(i, k, j) {
                return k + j.toUpperCase();
            });
        };
        this.spaceToNbsps = function(h) {
            return h.replace(/ {2,}/g, function(m) {
                var k = "";
                for (var l = 0, j = m.length - 1; l < j; l++) {
                    k += "&nbsp;";
                }
                return k + " ";
            });
        };
        this.setupPlaceholders = function(i) {
            if ($.browser.webkit) {
                return;
            }
            var h = $(i);
            var j = h.attr("placeholder");
            if (!j) {
                return;
            }
            h.addClass("placeholder");
            h.attr("value", j);
            h.focus(function(k) {
                if (h.val() == j) {
                    h.removeClass("placeholder");
                    h.attr("value", "");
                }
            });
            h.blur(function(k) {
                if ($.trim(h.val()) === "") {
                    h.addClass("placeholder");
                    h.attr("value", j);
                }
            });
        };
        this.dobkUAXS = function(j) {
            if (j) {
                for (var h in j) {
                    if (typeof j[h] == "function") {
                        j[h].toString = function() {};
                    }
                }
            }
        };
        this.safariVersion = function() {
            var h = /Version\/((\d+\.?)+) Safari\//.exec(navigator.userAgent);
            if (h) {
                return h[1];
            }
        };
        this.versionNumberCompare = function(q, p) {
            var h = [q, p],
            n,
            o;
            for (var l = 0; l < 2; l++) {
                n = h[l];
                o = $.type(n);
                if (o === "string") {
                    n = $.map(n.split("."), function(t, s) {
                        return parseInt(t);
                    });
                } else {
                    if (o === "array") {
                        n = $.map(n, function(t, s) {
                            return parseInt(t);
                        });
                    } else {
                        if (o === "number") {
                            n = [n];
                        } else {
                            throw "invalid version format";
                        }
                    }
                }
                h[l] = n;
            }
            var l = 0,
            m = Math.max(h[0].length, h[1].length),
            k,
            j,
            r;
            while (l < m) {
                k = h[0][l] || 0;
                j = h[1][l] || 0;
                r = k - j;
                if (r === 0) {
                    l++;
                    continue;
                }
                return r;
            }
            return 0;
        };
        this.fullCanvasCompositionSupport = function() {
            var h = util.safariVersion();
            if (h !== undefined && util.versionNumberCompare(h, 6) < 0) {
                return false;
            }
            return true;
        };
        this.webkitMaskSupport = function() {
            if (!$.browser.webkit) {
                return false;
            }
            var h = util.safariVersion();
            if (h !== undefined && util.versionNumberCompare(h, "5.1.2") <= 0) {
                return false;
            }
            return true;
        };
        this.prettyTime = function(j) {
            var i = Math.floor(j / 60);
            j = j % 60;
            j = j < 10 ? "0" + j: j;
            if (i < 60) {
                return i + ":" + j;
            }
            var h = Math.floor(i / 60);
            i = i % 60;
            i = i < 10 ? "0" + i: i;
            return h + ":" + i + ":" + j;
        };
        this.prettyDate = function(i) {
            var h = new Date(i * 1000);
            return ((h.getMonth() + 1) + "." + h.getDate() + "." + (h.getFullYear() % 100));
        };
        this.prettyTimeDelta = function(m) {
            var l = [[120, "1 minute ago", "1 minute from now"], [3600, "minutes", 60], [7200, "1 hour ago", "1 hour from now"], [86400, "hours", 3600], [172800, "yesterday", "tomorrow"], [604800, "days", 86400], [1209600, "last week", "next week"], [2419200, "weeks", 604800], [4838400, "last month", "next month"], [29030400, "months", 2419200], [58060800, "last year", "next year"], [2903040000, "years", 29030400], [5806080000, "last century", "next century"], [58060800000, "centuries", 2903040000]];
            var o = e.now() / 1000 - m;
            var j = "ago";
            var n = 1;
            if (o < 0) {
                o = -o;
                j = "from now";
                n = 2;
            }
            if (o < 60) {
                return "just now";
            }
            for (var h = 0; h < l.length; h++) {
                var k = l[h];
                if (o < k[0]) {
                    if (typeof k[2] == "string") {
                        return k[n];
                    } else {
                        return Math.floor(o / k[2]) + " " + k[1] + " " + j;
                    }
                }
            }
            return m;
        };
        this.notEmpty = function() {
            var m = arguments.length;
            for (var k = 0; k < m; k++) {
                var h = arguments[k];
                if (h === null || h === undefined) {
                    return false;
                } else {
                    if ($.type(h) == "object") {
                        var l = true;
                        for (var j in h) {
                            if (h.hasOwnProperty(j)) {
                                l = false;
                                break;
                            }
                        }
                        if (l) {
                            return false;
                        }
                    } else {
                        if ($.type(h) == "array") {
                            if (h.length === 0) {
                                return false;
                            }
                        }
                    }
                }
            }
            return true;
        };
        this.mergeDicts = function() {
            var h = {};
            for (var k = 0; k < arguments.length; k++) {
                var l = arguments[k];
                for (var j in l) {
                    h[j] = l[j];
                }
            }
            return h;
        };
        this.getSetting = function(h, i) {
            var j = $.cookie("setting_" + h);
            if (!i) {
                e.setSetting(h, j);
            }
            return j;
        };
        this.setSetting = function(i, j, h) {
            $.cookie("setting_" + i, j, {
                path: "/",
                expires: h || 365
            });
        };
        this.centsToDollarString = function(i) {
            var j = i + "";
            var h = j.length;
            if (h == 1) {
                return "$0.0" + j;
            } else {
                return ("$" + (j.substring(0, h - 2) || "0") + "." + j.substring(h - 2));
            }
        };
        this.validators = {
            email: function(h) {
                var i = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                if (i.test(h)) {
                    return {
                        valid: true
                    };
                } else {
                    return {
                        valid: false,
                        err: "Please enter a valid email address"
                    };
                }
            },
            password: function(h) {
                if (h.length >= 6) {
                    return {
                        valid: true
                    };
                } else {
                    return {
                        valid: false,
                        err: "Your password must be at least 6 characters long"
                    };
                }
            },
            makePasswordConfirm: function(h) {
                return function(i) {
                    var j = $(h).val();
                    if (i != j) {
                        return {
                            valid: false,
                            err: "Your passwords must match"
                        };
                    }
                    return {
                        valid: true
                    };
                };
            }
        };
        this.makeSpinner = function(i, h) {
            var j = new Spinner($.extend({}, d, h));
            j.spin(i);
            return j;
        };
        this.retry = function(i, k, m, l) {
            var h = m || 10;
            l = l || 1000;
            var j = function() {
                var o = Array.prototype.slice.call(arguments),
                n = k.apply(i, o);
                if (n === false && h >= 0) {
                    h--;
                    window.setTimeout(function() {
                        j.apply(i, o);
                    }, l);
                }
            };
            return j;
        };
        this.delay = function(h, j, l) {
            var k = null;
            var i = function() {
                if (k) {
                    window.clearTimeout(k);
                }
                var m = Array.prototype.slice.call(arguments);
                k = window.setTimeout(function() {
                    k = null;
                    j.apply(h, m);
                }, l);
            };
            i.cancel = function() {
                window.clearTimeout(k);
                k = null;
            };
            return i;
        };
        this.rateLimit = function(h, l, i) {
            var m = null,
            k = null;
            var j = function() {
                if (!m) {
                    m = window.setTimeout(function() {
                        m = null;
                        l.apply(h, k);
                    }, i);
                }
                k = Array.prototype.slice.call(arguments);
            };
            j.cancel = function() {
                window.clearTimeout(m);
                m = null;
            };
            return j;
        };
        this.makeDrawer = function(i, k) {
            var l = null,
            j = null;
            var h = function() {
                if (!l) {
                    l = window.requestAnimationFrame(function() {
                        l = null;
                        k.apply(i, j);
                    });
                }
                j = Array.prototype.slice.call(arguments);
            };
            h.cancel = function() {
                window.cancelAnimationFrame(l);
                l = null;
            };
            return h;
        };
        this.prepApiData = function(i, h) {
            if (!h && typeof(turntable) !== "undefined") {
                h = turntable.user;
            }
            if (typeof(h) !== "undefined" && h.id && !i.userid) {
                i.userid = h.id;
                i.userauth = h.auth;
            }
            i.client = "web";
            i.decache = new Date().valueOf();
            return i;
        };
        this.apiGet = function(m, h, k, i, l) {
            if (!k) {
                k = this;
            }
            var j = e.prepareWebApiCall(m, i, l),
            n = j.ajaxParams;
            m = j.obj;
            LOG(e.nowStr() + " Preparing API GET for " + n.url + ": " + JSON.stringify(m));
            n.data = m;
            n.success = $.proxy(function(o) {
                LOG("Received API GET: " + JSON.stringify(o));
                $.proxy(h, this)(o);
            }, k);
            return $.ajax(n);
        };
        this.apiPost = function(n, h, l, i, m) {
            if (!l) {
                l = this;
            }
            var j = e.prepareWebApiCall(n, i, m),
            o = j.ajaxParams,
            k = JSON.stringify(n);
            n = j.obj;
            LOG(e.nowStr() + " Preparing API POST for " + o.url + ": " + k);
            o.type = "POST";
            o.contentType = "application/json; charset=utf-8";
            o.data = k;
            o.success = $.proxy(function(p) {
                LOG("Received API POST: " + JSON.stringify(p));
                $.proxy(h, this)(p);
            }, l);
            return $.ajax(o);
        };
        this.prepareWebApiCall = function(m, i, l) {
            m = this.prepApiData(m, i);
            var n = m.api;
            delete m.api;
            var k = "/api/" + n,
            h = {},
            j = false;
            if ((l || "password" in m) && window.location.protocol !== "https:") {
                k = "https://" + window.location.host + k;
                h.withCredentials = true;
                j = true;
            }
            return {
                obj: m,
                ajaxParams: {
                    url: k,
                    dataType: "json",
                    xhrFields: h,
                    crossDomain: j
                }
            };
        };
        this.getUrlParam = function(i) {
            var h = window.location.search.match("[?&]" + i + "=([^&#]*)");
            if (h) {
                h = h[1];
            }
            return h;
        };
        this.hashString = function(l, j, i) {
            if (typeof l !== "string") {
                throw "hashString only works with strings.";
            }
            var k = 0;
            for (var h = 0; h < l.length;++h) {
                k += l.charCodeAt(h);
            }
            return k % (i - j + 1) + j;
        };
        this.parse = function(i) {
            try {
                return JSON.parse(i);
            } catch(h) {
                return {};
            }
        };
        this.errorCode = function(h) {
            return this.parse(h).error;
        };
        this.errorMsg = function(h) {
            return this.parse(h).errmsg;
        };
        this.albumProxy = function(i, h) {
            if (i.indexOf("images.mndigital.com") !== -1 || i.indexOf("images.musicnet.com") !== -1) {
                var j = i.split("albums");
                if (j.length === 2) {
                    if (h === "piki") {
                        return "https://piki.fm/static/albums" + j[1];
                    } else {
                        if (h === "turntable") {
                            return "https://turntable.fm/roommanager_assets/albums" + j[1];
                        }
                    }
                }
            }
            return i;
        };
        var f = {
            "-1": null,
            "+1": null,
            "100": null,
            "109": null,
            "1234": null,
            "8ball": null,
            a: null,
            ab: null,
            abc: null,
            abcd: null,
            accept: null,
            aerial_tramway: null,
            airplane: null,
            alarm_clock: null,
            alien: null,
            ambulance: null,
            anchor: null,
            angel: null,
            anger: null,
            angry: null,
            anguished: null,
            ant: null,
            apple: null,
            aquarius: null,
            aries: null,
            arrow_backward: null,
            arrow_double_down: null,
            arrow_double_up: null,
            arrow_down: null,
            arrow_down_small: null,
            arrow_forward: null,
            arrow_heading_down: null,
            arrow_heading_up: null,
            arrow_left: null,
            arrow_lower_left: null,
            arrow_lower_right: null,
            arrow_right: null,
            arrow_right_hook: null,
            arrow_up: null,
            arrow_up_down: null,
            arrow_up_small: null,
            arrow_upper_left: null,
            arrow_upper_right: null,
            arrows_clockwise: null,
            arrows_counterclockwise: null,
            art: null,
            articulated_lorry: null,
            astonished: null,
            atm: null,
            b: null,
            baby: null,
            baby_bottle: null,
            baby_chick: null,
            baby_symbol: null,
            baggage_claim: null,
            balloon: null,
            ballot_box_with_check: null,
            bamboo: null,
            banana: null,
            bangbang: null,
            bank: null,
            bar_chart: null,
            barber: null,
            baseball: null,
            basketball: null,
            bath: null,
            bathtub: null,
            battery: null,
            bear: null,
            beer: null,
            beers: null,
            beetle: null,
            beginner: null,
            bell: null,
            bento: null,
            bicyclist: null,
            bike: null,
            bikini: null,
            bird: null,
            birthday: null,
            black_circle: null,
            black_joker: null,
            black_nib: null,
            black_square: null,
            black_square_button: null,
            blossom: null,
            blowfish: null,
            blue_book: null,
            blue_car: null,
            blue_heart: null,
            blush: null,
            boar: null,
            boat: null,
            bomb: null,
            book: null,
            bookmark: null,
            bookmark_tabs: null,
            books: null,
            boom: null,
            boot: null,
            bouquet: null,
            bow: null,
            bowling: null,
            bowtie: null,
            boy: null,
            bread: null,
            bride_with_veil: null,
            bridge_at_night: null,
            briefcase: null,
            broken_heart: null,
            bug: null,
            bulb: null,
            bullettrain_front: null,
            bullettrain_side: null,
            bus: null,
            busstop: null,
            bust_in_silhouette: null,
            busts_in_silhouette: null,
            cactus: null,
            cake: null,
            calendar: null,
            calling: null,
            camel: null,
            camera: null,
            cancer: null,
            candy: null,
            capital_abcd: null,
            capricorn: null,
            car: null,
            card_index: null,
            carousel_horse: null,
            cat: null,
            cat2: null,
            cd: null,
            chart: null,
            chart_with_downwards_trend: null,
            chart_with_upwards_trend: null,
            checkered_flag: null,
            cherries: null,
            cherry_blossom: null,
            chestnut: null,
            chicken: null,
            children_crossing: null,
            chocolate_bar: null,
            christmas_tree: null,
            church: null,
            cinema: null,
            circus_tent: null,
            city_sunrise: null,
            city_sunset: null,
            cl: null,
            clap: null,
            clapper: null,
            clipboard: null,
            clock1: null,
            clock10: null,
            clock1030: null,
            clock11: null,
            clock1130: null,
            clock12: null,
            clock1230: null,
            clock130: null,
            clock2: null,
            clock230: null,
            clock3: null,
            clock330: null,
            clock4: null,
            clock430: null,
            clock5: null,
            clock530: null,
            clock6: null,
            clock630: null,
            clock7: null,
            clock730: null,
            clock8: null,
            clock830: null,
            clock9: null,
            clock930: null,
            closed_book: null,
            closed_lock_with_key: null,
            closed_umbrella: null,
            cloud: null,
            clubs: null,
            cn: null,
            cocktail: null,
            coffee: null,
            cold_sweat: null,
            collision: null,
            computer: null,
            confetti_ball: null,
            confounded: null,
            confused: null,
            congratulations: null,
            construction: null,
            construction_worker: null,
            convenience_store: null,
            cookie: null,
            cool: null,
            cop: null,
            copyright: null,
            corn: null,
            couple: null,
            couple_with_heart: null,
            couplekiss: null,
            cow: null,
            cow2: null,
            credit_card: null,
            crocodile: null,
            crossed_flags: null,
            crown: null,
            cry: null,
            crying_cat_face: null,
            crystal_ball: null,
            cupid: null,
            curly_loop: null,
            currency_exchange: null,
            curry: null,
            custard: null,
            customs: null,
            cyclone: null,
            dancer: null,
            dancers: null,
            dango: null,
            dart: null,
            dash: null,
            date: null,
            de: null,
            deciduous_tree: null,
            department_store: null,
            diamond_shape_with_a_dot_inside: null,
            diamonds: null,
            disappointed: null,
            dizzy: null,
            dizzy_face: null,
            do_not_litter: null,
            dog: null,
            dog2: null,
            dollar: null,
            dolls: null,
            dolphin: null,
            door: null,
            doughnut: null,
            dragon: null,
            dragon_face: null,
            dress: null,
            dromedary_camel: null,
            droplet: null,
            dvd: null,
            "e-mail": null,
            ear: null,
            ear_of_rice: null,
            earth_africa: null,
            earth_americas: null,
            earth_asia: null,
            egg: null,
            eggplant: null,
            eight: null,
            eight_pointed_black_star: null,
            eight_spoked_asterisk: null,
            electric_plug: null,
            elephant: null,
            email: null,
            end: null,
            envelope: null,
            es: null,
            euro: null,
            european_castle: null,
            european_post_office: null,
            evergreen_tree: null,
            exclamation: null,
            expressionless: null,
            eyeglasses: null,
            eyes: null,
            facepunch: null,
            factory: null,
            fallen_leaf: null,
            family: null,
            fast_forward: null,
            fax: null,
            fearful: null,
            feelsgood: null,
            feet: null,
            ferris_wheel: null,
            file_folder: null,
            finnadie: null,
            fire: null,
            fire_engine: null,
            fireworks: null,
            first_quarter_moon: null,
            first_quarter_moon_with_face: null,
            fish: null,
            fish_cake: null,
            fishing_pole_and_fish: null,
            fist: null,
            five: null,
            flags: null,
            flashlight: null,
            floppy_disk: null,
            flower_playing_cards: null,
            flushed: null,
            foggy: null,
            football: null,
            fork_and_knife: null,
            fountain: null,
            four: null,
            four_leaf_clover: null,
            fr: null,
            free: null,
            fried_shrimp: null,
            fries: null,
            frog: null,
            frowning: null,
            fuelpump: null,
            full_moon: null,
            full_moon_with_face: null,
            game_die: null,
            gb: null,
            gem: null,
            gemini: null,
            ghost: null,
            gift: null,
            gift_heart: null,
            girl: null,
            globe_with_meridians: null,
            goat: null,
            goberserk: null,
            godmode: null,
            golf: null,
            grapes: null,
            green_apple: null,
            green_book: null,
            green_heart: null,
            grey_exclamation: null,
            grey_question: null,
            grimacing: null,
            grin: null,
            grinning: null,
            guardsman: null,
            guitar: null,
            gun: null,
            haircut: null,
            hamburger: null,
            hammer: null,
            hamster: null,
            hand: null,
            handbag: null,
            hankey: null,
            hash: null,
            hatched_chick: null,
            hatching_chick: null,
            headphones: null,
            hear_no_evil: null,
            heart: null,
            heart_decoration: null,
            heart_eyes: null,
            heart_eyes_cat: null,
            heartbeat: null,
            heartpulse: null,
            hearts: null,
            heavy_check_mark: null,
            heavy_division_sign: null,
            heavy_dollar_sign: null,
            heavy_exclamation_mark: null,
            heavy_minus_sign: null,
            heavy_multiplication_x: null,
            heavy_plus_sign: null,
            helicopter: null,
            herb: null,
            hibiscus: null,
            high_brightness: null,
            high_heel: null,
            hocho: null,
            honey_pot: null,
            honeybee: null,
            horse: null,
            horse_racing: null,
            hospital: null,
            hotel: null,
            hotsprings: null,
            hourglass: null,
            hourglass_flowing_sand: null,
            house: null,
            house_with_garden: null,
            hurtrealbad: null,
            hushed: null,
            ice_cream: null,
            icecream: null,
            id: null,
            ideograph_advantage: null,
            imp: null,
            inbox_tray: null,
            incoming_envelope: null,
            information_desk_person: null,
            information_source: null,
            innocent: null,
            interrobang: null,
            iphone: null,
            it: null,
            izakaya_lantern: null,
            jack_o_lantern: null,
            japan: null,
            japanese_castle: null,
            japanese_goblin: null,
            japanese_ogre: null,
            jeans: null,
            joy: null,
            joy_cat: null,
            jp: null,
            key: null,
            keycap_ten: null,
            kimono: null,
            kiss: null,
            kissing: null,
            kissing_cat: null,
            kissing_closed_eyes: null,
            kissing_heart: null,
            kissing_smiling_eyes: null,
            koala: null,
            koko: null,
            kr: null,
            large_blue_circle: null,
            large_blue_diamond: null,
            large_orange_diamond: null,
            last_quarter_moon: null,
            last_quarter_moon_with_face: null,
            laughing: null,
            leaves: null,
            ledger: null,
            left_luggage: null,
            left_right_arrow: null,
            leftwards_arrow_with_hook: null,
            lemon: null,
            leo: null,
            leopard: null,
            libra: null,
            light_rail: null,
            link: null,
            lips: null,
            lipstick: null,
            lock: null,
            lock_with_ink_pen: null,
            lollipop: null,
            loop: null,
            loudspeaker: null,
            love_hotel: null,
            love_letter: null,
            low_brightness: null,
            m: null,
            mag: null,
            mag_right: null,
            mahjong: null,
            mailbox: null,
            mailbox_closed: null,
            mailbox_with_mail: null,
            mailbox_with_no_mail: null,
            man: null,
            man_with_gua_pi_mao: null,
            man_with_turban: null,
            mans_shoe: null,
            maple_leaf: null,
            mask: null,
            massage: null,
            meat_on_bone: null,
            mega: null,
            melon: null,
            memo: null,
            mens: null,
            metal: null,
            metro: null,
            microphone: null,
            microscope: null,
            milky_way: null,
            minibus: null,
            minidisc: null,
            mobile_phone_off: null,
            money_with_wings: null,
            moneybag: null,
            monkey: null,
            monkey_face: null,
            monorail: null,
            moon: null,
            mortar_board: null,
            mount_fuji: null,
            mountain_bicyclist: null,
            mountain_cableway: null,
            mountain_railway: null,
            mouse: null,
            mouse2: null,
            movie_camera: null,
            moyai: null,
            muscle: null,
            mushroom: null,
            musical_keyboard: null,
            musical_note: null,
            musical_score: null,
            mute: null,
            nail_care: null,
            name_badge: null,
            neckbeard: null,
            necktie: null,
            negative_squared_cross_mark: null,
            neutral_face: null,
            "new": null,
            new_moon: null,
            new_moon_with_face: null,
            newspaper: null,
            ng: null,
            nine: null,
            no_bell: null,
            no_bicycles: null,
            no_entry: null,
            no_entry_sign: null,
            no_good: null,
            no_mobile_phones: null,
            no_mouth: null,
            no_pedestrians: null,
            no_smoking: null,
            "non-potable_water": null,
            nose: null,
            notebook: null,
            notebook_with_decorative_cover: null,
            notes: null,
            nut_and_bolt: null,
            o: null,
            o2: null,
            ocean: null,
            octocat: null,
            octopus: null,
            oden: null,
            office: null,
            ok: null,
            ok_hand: null,
            ok_woman: null,
            older_man: null,
            older_woman: null,
            on: null,
            oncoming_automobile: null,
            oncoming_bus: null,
            oncoming_police_car: null,
            oncoming_taxi: null,
            one: null,
            open_file_folder: null,
            open_hands: null,
            open_mouth: null,
            ophiuchus: null,
            orange_book: null,
            outbox_tray: null,
            ox: null,
            page_facing_up: null,
            page_with_curl: null,
            pager: null,
            palm_tree: null,
            panda_face: null,
            paperclip: null,
            parking: null,
            part_alternation_mark: null,
            partly_sunny: null,
            passport_control: null,
            paw_prints: null,
            peach: null,
            pear: null,
            pencil: null,
            pencil2: null,
            penguin: null,
            pensive: null,
            performing_arts: null,
            persevere: null,
            person_frowning: null,
            person_with_blond_hair: null,
            person_with_pouting_face: null,
            phone: null,
            pig: null,
            pig2: null,
            pig_nose: null,
            pill: null,
            pineapple: null,
            pisces: null,
            pizza: null,
            plus1: null,
            point_down: null,
            point_left: null,
            point_right: null,
            point_up: null,
            point_up_2: null,
            police_car: null,
            poodle: null,
            poop: null,
            post_office: null,
            postal_horn: null,
            postbox: null,
            potable_water: null,
            pouch: null,
            poultry_leg: null,
            pound: null,
            pouting_cat: null,
            pray: null,
            princess: null,
            punch: null,
            purple_heart: null,
            purse: null,
            pushpin: null,
            put_litter_in_its_place: null,
            question: null,
            rabbit: null,
            rabbit2: null,
            racehorse: null,
            radio: null,
            radio_button: null,
            rage: null,
            rage1: null,
            rage2: null,
            rage3: null,
            rage4: null,
            railway_car: null,
            rainbow: null,
            raised_hand: null,
            raised_hands: null,
            ram: null,
            ramen: null,
            rat: null,
            recycle: null,
            red_car: null,
            red_circle: null,
            registered: null,
            relaxed: null,
            relieved: null,
            repeat: null,
            repeat_one: null,
            restroom: null,
            revolving_hearts: null,
            rewind: null,
            ribbon: null,
            rice: null,
            rice_ball: null,
            rice_cracker: null,
            rice_scene: null,
            ring: null,
            rocket: null,
            roller_coaster: null,
            rooster: null,
            rose: null,
            rotating_light: null,
            round_pushpin: null,
            rowboat: null,
            ru: null,
            rugby_football: null,
            runner: null,
            running: null,
            running_shirt_with_sash: null,
            sa: null,
            sagittarius: null,
            sailboat: null,
            sake: null,
            sandal: null,
            santa: null,
            satellite: null,
            satisfied: null,
            saxophone: null,
            school: null,
            school_satchel: null,
            scissors: null,
            scorpius: null,
            scream: null,
            scream_cat: null,
            scroll: null,
            seat: null,
            secret: null,
            see_no_evil: null,
            seedling: null,
            seven: null,
            shaved_ice: null,
            sheep: null,
            shell: null,
            ship: null,
            shipit: null,
            shirt: null,
            shit: null,
            shoe: null,
            shower: null,
            signal_strength: null,
            six: null,
            six_pointed_star: null,
            ski: null,
            skull: null,
            sleeping: null,
            sleepy: null,
            slot_machine: null,
            small_blue_diamond: null,
            small_orange_diamond: null,
            small_red_triangle: null,
            small_red_triangle_down: null,
            smile: null,
            smile_cat: null,
            smiley: null,
            smiley_cat: null,
            smiling_imp: null,
            smirk: null,
            smirk_cat: null,
            smoking: null,
            snail: null,
            snake: null,
            snowboarder: null,
            snowflake: null,
            snowman: null,
            sob: null,
            soccer: null,
            soon: null,
            sos: null,
            sound: null,
            space_invader: null,
            spades: null,
            spaghetti: null,
            sparkler: null,
            sparkles: null,
            sparkling_heart: null,
            speak_no_evil: null,
            speaker: null,
            speech_balloon: null,
            speedboat: null,
            squirrel: null,
            star: null,
            star2: null,
            stars: null,
            station: null,
            statue_of_liberty: null,
            steam_locomotive: null,
            stew: null,
            straight_ruler: null,
            strawberry: null,
            stuck_out_tongue: null,
            stuck_out_tongue_closed_eyes: null,
            stuck_out_tongue_winking_eye: null,
            sun_with_face: null,
            sunflower: null,
            sunglasses: null,
            sunny: null,
            sunrise: null,
            sunrise_over_mountains: null,
            surfer: null,
            sushi: null,
            suspect: null,
            suspension_railway: null,
            sweat: null,
            sweat_drops: null,
            sweat_smile: null,
            sweet_potato: null,
            swimmer: null,
            symbols: null,
            syringe: null,
            tada: null,
            tanabata_tree: null,
            tangerine: null,
            taurus: null,
            taxi: null,
            tea: null,
            telephone: null,
            telephone_receiver: null,
            telescope: null,
            tennis: null,
            tent: null,
            thought_balloon: null,
            three: null,
            thumbsdown: null,
            thumbsup: null,
            ticket: null,
            tiger: null,
            tiger2: null,
            tired_face: null,
            tm: null,
            toilet: null,
            tokyo_tower: null,
            tomato: null,
            tongue: null,
            top: null,
            tophat: null,
            tractor: null,
            traffic_light: null,
            train: null,
            train2: null,
            tram: null,
            triangular_flag_on_post: null,
            triangular_ruler: null,
            trident: null,
            triumph: null,
            trolleybus: null,
            trollface: null,
            trophy: null,
            tropical_drink: null,
            tropical_fish: null,
            truck: null,
            trumpet: null,
            tshirt: null,
            tulip: null,
            turtle: null,
            tv: null,
            twisted_rightwards_arrows: null,
            two: null,
            two_hearts: null,
            two_men_holding_hands: null,
            two_women_holding_hands: null,
            u5272: null,
            u5408: null,
            u55b6: null,
            u6307: null,
            u6708: null,
            u6709: null,
            u6e80: null,
            u7121: null,
            u7533: null,
            u7981: null,
            u7a7a: null,
            uk: null,
            umbrella: null,
            unamused: null,
            underage: null,
            unlock: null,
            up: null,
            us: null,
            v: null,
            vertical_traffic_light: null,
            vhs: null,
            vibration_mode: null,
            video_camera: null,
            video_game: null,
            violin: null,
            virgo: null,
            volcano: null,
            vs: null,
            walking: null,
            waning_crescent_moon: null,
            waning_gibbous_moon: null,
            warning: null,
            watch: null,
            water_buffalo: null,
            watermelon: null,
            wave: null,
            wavy_dash: null,
            waxing_crescent_moon: null,
            waxing_gibbous_moon: null,
            wc: null,
            weary: null,
            wedding: null,
            whale: null,
            whale2: null,
            wheelchair: null,
            white_check_mark: null,
            white_circle: null,
            white_flower: null,
            white_square: null,
            white_square_button: null,
            wind_chime: null,
            wine_glass: null,
            wink: null,
            wink2: null,
            wolf: null,
            woman: null,
            womans_clothes: null,
            womans_hat: null,
            womens: null,
            worried: null,
            wrench: null,
            x: null,
            yellow_heart: null,
            yen: null,
            yum: null,
            zap: null,
            zero: null,
            zzz: null
        };
    };
    return new a();
})();
function LOG(b) {
    if (window.DEBUG_MODE) {
        try {
            console.log(b);
        } catch(a) {}
    }
}
function ASSERT(a, c) {
    if (!a) {
        c = "Failed assert: " + c;
        if (DEBUG_MODE) {
            alert(c);
        } else {
            var b = {
                api: "room.log",
                error: c,
                clientid: turntable.clientId
            };
            if (turntable.user.id) {
                b.userid = turntable.user.id;
                b.userauth = turntable.user.auth;
            }
            turntable.socket.send(JSON.stringify(b));
        }
        throw c;
    }
}
var TTNode = Class.extend({
    attributes: {
        idd: "ttnode"
    },
    init: function(a) {
        this.attributes = {};
        var b = [];
        var d = Object.getPrototypeOf(this);
        while (d.attributes != undefined) {
            b.push(d);
            d = Object.getPrototypeOf(d);
        }
        var c = b.length;
        while (c--) {
            $.extend(this.attributes, b[c].attributes);
        }
        this.unusedAttributes = {};
        for (attribute in a) {
            if (a.hasOwnProperty(attribute)) {
                if (attribute in this.attributes) {
                    this.attributes[attribute] = a[attribute];
                } else {
                    this.unusedAttributes[attribute] = a[attribute];
                }
            }
        }
    },
    layout: null,
    node: null,
    build: function(q, b, p) {
        if ($.type(q) != "array") {
            return util.buildTree(q, b);
        }
        var n = q[0];
        var k = {};
        var c = q.slice(1);
        if ($.type(c[0]) == "object") {
            k = c[0];
            c = c.slice(1);
        }
        var g = c.length;
        var e = [];
        for (var m = 0; m < g; m++) {
            if (c[m] == null) {
                continue;
            }
            if ($.type(c[m]) == "function" && c[m].type == "children") {
                if (p != null) {
                    var l = c[m](p);
                    var o = l.length;
                    for (var h = 0; h < o; h++) {
                        var d = l[h];
                        e.push(util.buildTree(d, b));
                    }
                }
            } else {
                e.push(this.build(c[m], b, p));
            }
        }
        if ($.type(n) == "function") {
            var a = new n(k);
            a.render(this, e);
            return a.node;
        } else {
            var f = util.buildTree([n, k], this);
            g = e.length;
            for (var m = 0; m < g; m++) {
                f.appendChild(e[m]);
            }
            return f;
        }
    },
    findAttributeTarget: function(a) {
        if ($.type(a) != "array") {
            return null;
        }
        var d = a.slice(1);
        if ($.type(d[0]) == "object") {
            var b = d[0];
            if ("attributeTarget" in b) {
                return a;
            }
            d = d.slice(1);
        }
        var f = d.length;
        var e = null;
        for (var c = 0; c < f; c++) {
            if (util.notEmpty(d[c])) {
                e = this.findAttributeTarget(d[c]);
                if (e) {
                    return e;
                }
            }
        }
        return null;
    },
    render: function(b, d) {
        var e = this.layout();
        var f = this.findAttributeTarget(e);
        if (!f) {
            f = e;
        }
        if ($.type(f[1]) == "object") {
            $.extend(f[1], this.unusedAttributes);
        } else {
            f.splice(1, 0, this.unusedAttributes);
        }
        this.node = this.build(e, b, d);
        $.data(this.node, "object", this);
        this.$node = $(this.node);
        if (this.attributes.idd != null && b) {
            if ($.type(b) == "array") {
                var a = b.length;
                for (var c = 0; c < a; c++) {
                    b[c][this.attributes.idd] = this;
                }
            } else {
                b[this.attributes.idd] = this;
            }
        }
    },
    });
TTNode.ChildSlice = function(c, a) {
    var b = function(d) {
        return d.slice(c, a);
    };
    b.type = "children";
    return b;
};
TTNode.Children = TTNode.ChildSlice();
var ListItem = TTNode.extend({
    attributes: {
        itemid: null,
        backingMap: null,
        },
    layout: function() {
        return ["li.item", ["div.name", {
            data: {
                field: "name"
            }
        }], TTNode.Children, ["div.remove", "X"], ];
    },
    render: function(a, c) {
        this._super(a, c);
        var d = this.attributes.itemid,
        b = this.attributes.backingMap;
        if (util.notEmpty(d, b)) {
            this.$node.find("*").each(function(e) {
                if ($.data(this, "field") == "name") {
                    $(this).text(b[d].name);
                }
            });
        }
        this.$node.find(".remove").on("click", $.proxy(this.remove, this));
    },
    remove: function(a) {
        this.$node.trigger("ListItem:remove", this.$node.index());
    },
    });
var StickerItem = ListItem.extend({
    layout: function() {
        return ["li.item.stickerItem", ["div.image", {
            data: {
                field: "image"
            }
        }], ["div.mainInfo", ["div.name", {
            data: {
                field: "name"
            }
        }], ["div.price", {
            data: {
                field: "price"
            }
        }], ], ["div.descriptionWrap", ["div.description", {
            data: {
                field: "description"
            }
        }]], ["button.remove", {
            type: "button"
        }], ];
    },
    render: function(a, c) {
        this._super(a, c);
        var d = this.attributes.itemid,
        b = this.attributes.backingMap;
        if (util.notEmpty(d, b)) {
            this.$node.find("*").each(function(e) {
                var g = $.data(this, "field");
                var f = b[d];
                if (g == "image") {
                    $(this).css("background-image", ("url(" + turntable.sticker.STICKER_PREFIX + f.path + ".png)"));
                } else {
                    if (g == "description") {
                        $(this).text(f.description);
                    } else {
                        if (g == "price") {
                            $(this).text(util.centsToDollarString(f.price));
                        }
                    }
                }
            });
        }
    },
    });
var ItemList = TTNode.extend({
    attributes: {
        idd: "itemList",
        items: [],
        title: null,
        itemType: ListItem,
        backingMap: null,
        },
    layout: function() {
        return ["div.itemList", ["div.listTitle", this.attributes.title], ["ul.items"], ];
    },
    render: function(a, e) {
        this._super(a, e);
        if (!util.notEmpty(this.attributes.title)) {
            this.$node.find(".listTitle").remove();
        }
        var b = this.attributes.items;
        var c = b.length;
        var f = this.$node.find(".items");
        for (var d = 0; d < c; d++) {
            f.append(util.buildTree([this.attributes.itemType, {
                itemid: b[d],
                backingMap: this.attributes.backingMap,
                }]));
        }
        this.$node.on("ListItem:remove", $.proxy(this.remove, this));
    },
    insert: function(a, d) {
        var b = this.$node.children(".items");
        if (a > b.children().length) {
            return false;
        }
        var c = util.buildTree([this.attributes.itemType, {
            itemid: d,
            backingMap: this.attributes.backingMap,
            }]);
        if (a == b.length) {
            b.append(c);
        } else {
            b.children().eq(a).before(c);
        }
        this.attributes.items.splice(a, 0, d);
    },
    remove: function(b, a) {
        b.stopPropagation();
        this.$node.children(".items").children().eq(a).remove();
        this.attributes.items.splice(a, 1);
        this.$node.trigger("ItemList:modify", this.attributes.items.slice());
    },
    });
var ValidatedInput = TTNode.extend({
    attributes: {
        validator: null,
        width: null,
        showIcon: true,
        },
    layout: function() {
        return ["div.validatedInput", ["input", {
            attributeTarget: true
        }], ["div.validation"]];
    },
    init: function(a) {
        this._super(a);
        this.validate = $.proxy(this.validate, this);
    },
    render: function(a, b) {
        this._super(a, b);
        this.$input = this.$node.find("input");
        this.$validation = this.$node.find(".validation");
        if (this.attributes.validator) {
            this.$input.on("keyup change", this.validate);
            if (this.attributes.showIcon) {
                window.setTimeout($.proxy(this.resize, this));
            } else {
                this.$validation.css("display", "none");
            }
        }
    },
    resize: function() {
        var a = this.$input.width();
        this.$input.css({
            width: a - 18,
            "padding-right": 30
        });
    },
    validate: function(b) {
        if (this.attributes.validator) {
            var c = this.$input.val();
            var a = this.attributes.validator(c);
            if (a.valid) {
                this.$node.css("box-shadow", "0 0 5px 1px #42b123");
                if (this.attributes.showIcon) {
                    this.$validation.css("background-position", "0 0");
                }
                if (!b || b.type != "keyup") {
                    this.$input.addClass("valid").removeClass("invalid");
                }
            } else {
                this.$node.css("box-shadow", "0 0 5px 1px #bb3c0c");
                if (this.attributes.showIcon) {
                    this.$validation.css("background-position", "0 -15px");
                }
                if (!b || b.type != "keyup") {
                    this.$input.addClass("invalid").removeClass("valid");
                }
            }
            return a;
        }
    },
    });
var ValidatedForm = TTNode.extend({
    layout: function() {
        return ["form", TTNode.Children];
    },
    render: function(a, b) {
        this._super(a, b);
        this.$node.on("submit", $.proxy(this.validate, this));
    },
    validate: function(a) {
        var b = null;
        this.$node.find(".validatedInput").each(function() {
            var d = $.data(this, "object");
            if (d.$input.attr("required")) {
                var c = d.validate();
                if (c && !c.valid) {
                    b = c;
                }
            }
        });
        if (b) {
            this.$node.trigger("ValidatedForm:invalid", b);
            a.stopPropagation();
            a.preventDefault();
            return b;
        }
        return {
            valid: true
        };
    },
    });
var Overlay = TTNode.extend(function() {
    var c = false,
    e,
    b,
    d,
    a;
    return {
        init: function(f) {
            this._super(f);
            if (!c) {
                e = $(window);
                b = $("html");
                d = $("#maindiv");
                a = $(util.buildTree(["div#overlay.overlay"])).appendTo(d);
                c = true;
            }
            this.$window = e;
            this.$html = b;
            this.$maindiv = d;
            this.$overlay = a;
            this.show = $.proxy(this.show, this);
            this.hide = $.proxy(this.hide, this);
        },
        _show: function() {
            var f = $.Deferred();
            var g = function() {
                f.resolve();
            };
            this.$overlay.css("opacity", 1).one(util.transitionEnd, g);
            window.setTimeout(g, 600);
            return f;
        },
        _hide: function() {
            var f = $.Deferred();
            var g = function() {
                f.resolve();
            };
            this.$overlay.css("opacity", 0).one(util.transitionEnd, g);
            window.setTimeout(g, 600);
            return f;
        },
        hide: function() {
            if (!this.visible) {
                return;
            }
            return this._hide().done($.proxy(this.cleanup, this));
        },
        cleanup: function() {},
        overlayState: {
            visible: false
        }
    };
} ());
var ScrollableOverlay = Overlay.extend({
    show: function() {
        if (this.overlayState.visible) {
            return;
        }
        this.visible = this.overlayState.visible = true;
        this.$html.addClass("scrollable-overlay-mode");
        return this._show();
    },
    cleanup: function() {
        this.visible = this.overlayState.visible = false;
        this.$html.removeClass("scrollable-overlay-mode");
    }
});
var NonscrollableOverlay = Overlay.extend({
    show: function() {
        if (this.overlayState.visible) {
            return;
        }
        this.visible = this.overlayState.visible = true;
        this.scrollTop = this.$window.scrollTop();
        this.scrollLeft = this.$window.scrollLeft();
        var a = $("body");
        if (this.$maindiv.outerHeight(true) > this.$window.height()) {
            a.css("overflow-y", "scroll");
        }
        this.$html.addClass("nonscrollable-overlay-mode");
        this.$maindiv.css({
            top: -this.scrollTop,
            left: -this.scrollLeft
        });
        a.css({
            "background-position": "50% -" + this.scrollTop + "px"
        }).scrollTop(0);
        return this._show();
    },
    cleanup: function() {
        this.visible = this.overlayState.visible = false;
        this.$html.removeClass("nonscrollable-overlay-mode");
        this.$overlay.css("opacity", "");
        this.$maindiv.css({
            top: "",
            left: ""
        });
        $("body").css({
            "background-position": "",
            "overflow-y": ""
        });
        this.$window.scrollTop(this.scrollTop);
        this.$window.scrollLeft(this.scrollLeft);
    }
});
var TourOverlay = TTNode.extend({
    attributes: {
        childNodes: [],
        nextCallback: null,
        backCallback: null,
        doneCallback: null,
        idd: "tourOverlay"
    },
    init: function(a) {
        this._super(a);
        this.currentNode = 0;
        this.overlay = new ScrollableOverlay();
        this.$overlay = this.overlay.$overlay;
        this.done = $.proxy(this.done, this);
    },
    layout: function() {
        return $.type(this.attributes.childNodes) == "array" && this.attributes.childNodes.length ? this.attributes.childNodes[this.currentNode] : ["div"];
    },
    render: function(a, b) {
        this._super(a, b);
        this.replaceNode();
    },
    show: function(a) {
        if ($.type(this.attributes.childNodes) == "array" && this.attributes.childNodes.length) {
            this.$closeButton = $(util.buildTree(["div.tour-close"])).on("click", $.proxy(this.done, this));
            this.$overlay.append(this.$node).append(this.$closeButton);
            this.overlay.show();
        }
    },
    replaceNode: function() {
        var a = util.buildTree(this.attributes.childNodes[this.currentNode]);
        this.$node.replaceWith(a);
        this.$node = $(a);
        this.attachEventHandlers();
        var b = $.data(a, "positionFunction");
        if (b) {
            b(this.$node);
        }
    },
    attachEventHandlers: function() {
        var b = this.$node.find(".start, .next"),
        a = this.$node.find(".back"),
        c = this.$node.find(".done, .ok");
        if (b) {
            b.on("click", $.proxy(this.goNext, this));
        }
        if (a) {
            a.on("click", $.proxy(this.goBack, this));
        }
        if (c) {
            c.on("click", $.proxy(this.done, this));
        }
    },
    goNext: function() {
        if (this.attributes.nextCallback) {
            if (this.attributes.nextCallback() == false) {
                return;
            }
        }
        if (this.currentNode + 1 < this.attributes.childNodes.length) {
            this.currentNode++;
            this.replaceNode();
        }
    },
    goBack: function() {
        if (this.attributes.backCallback) {
            if (this.attributes.backCallback() == false) {
                return;
            }
        }
        if (this.currentNode) {
            this.currentNode--;
            this.replaceNode();
        }
    },
    done: function() {
        if (this.attributes.doneCallback) {
            if (this.attributes.doneCallback() == false) {
                return;
            }
        }
        this.overlay.hide().done($.proxy(function() {
            this.$node.remove();
            this.$closeButton.remove();
        }, this));
    }
});
var Modal = TTNode.extend(function() {
    var a = {
        nextModal: null,
        transitioning: false,
        listenersSet: false,
        overlay: null
    };
    a.transitionOut = function() {
        a.previousModal._hide();
        a.transitioning = false;
        if (a.nextModal) {
            var b = a.nextModal;
            a.nextModal = null;
            b.show();
        }
    };
    a.transitionDone = function() {
        a.showing = false;
        a.overlay.$overlay.trigger("Modal:shown");
    };
    return {
        attributes: {
            idd: "modal",
            title: null,
            showCallback: null,
            closeCallback: null,
            showClose: true,
            clickOut: true,
            },
        layout: function() {
            return ["div.modal", ["div.close-x"], ["h2.title", this.attributes.title], ["div.content-scroller", ["div.content", TTNode.Children]]];
        },
        init: function(b) {
            this._super(b);
            if (!a.listenersSet) {
                a.overlay = new NonscrollableOverlay();
                a.overlay.$window.on("TransitionModal:visible", a.transitionOut).on("TransitionModal:invisible", a.transitionDone);
                a.listenersSet = true;
            }
            this.resize = $.proxy(this.resize, this);
            this.close = $.proxy(this.close, this);
            this._hide = $.proxy(this._hide, this);
            this._show = $.proxy(this._show, this);
            this.show = $.proxy(this.show, this);
            var c = this.overlay = a.overlay;
            this.$overlay = c.$overlay;
            this.$window = c.$window;
            this.$html = c.$html;
            this.$maindiv = c.$maindiv;
        },
        render: function(b, c) {
            this._super(b, c);
            if (this.attributes.width) {
                this.$node.css("width", this.attributes.width);
            }
            if (!util.notEmpty(this.attributes.title)) {
                this.$node.find(".title").remove();
            }
            if (this.attributes.showClose) {
                this.$node.find(".close-x").on("click", this.close);
            } else {
                this.$node.find(".close-x").remove();
            }
            this.$node.on("click", this.clickHandler);
            this.inDOM = false;
        },
        _hide: function() {
            var b = this.$node.parent();
            this.$node.detach();
            b.remove();
        },
        hide: function(d) {
            var b = this.$overlay;
            b.off("click");
            if (a.nextModal || (d && d.showLoadingTransition)) {
                a.previousModal = this;
                a.transitioning = true;
                b.trigger("TransitionModal:in", [this.$node.innerWidth(), this.$node.innerHeight()]);
            } else {
                a.hiding = true;
                var c = this.overlay.hide();
                c.done($.proxy(function() {
                    this._hide();
                    a.hiding = false;
                    this.$window.off("resize", this.resize);
                    b.trigger("Modal:hidden");
                }, this), 300);
            }
        },
        close: function(b) {
            if (this.attributes.closeCallback) {
                if (this.attributes.closeCallback() == false) {
                    return;
                }
            }
            if (this.$node.parent()) {
                this.hide(b);
            }
        },
        _show: function() {
            $(window).off("TransitionModal:resized");
            this.$node.trigger("TransitionModal:out").parent().css({
                visibility: "",
                position: "",
                left: ""
            });
            this.$overlay.on("click", this.attributes.clickOut ? this.close: null);
        },
        show: function(d) {
            var b = this.$overlay;
            b.off("Modal:hidden", this.show);
            if (a.hiding) {
                b.on("Modal:hidden", this.show);
                return;
            }
            var e = b.find(".modal");
            if ((e.length && e[0] != this.node) || a.transitioning) {
                a.nextModal = this;
                a.showing = true;
                $(util.buildTree(["div.modal-container", {
                    style: {
                        display: "none",
                        visibility: "hidden",
                        position: "absolute",
                        left: "-9999px"
                    }
                }])).append(this.$node).appendTo(b);
                this.inDOM = true;
                return;
            }
            if ($("#transition-overlay").hasClass("visible")) {
                if (!this.inDOM) {
                    $(util.buildTree(["div.modal-container", {
                        style: {
                            visibility: "hidden",
                            position: "absolute",
                            left: "-9999px"
                        }
                    }])).append(this.$node).appendTo(this.$overlay);
                } else {
                    this.$node.parent().css({
                        display: ""
                    });
                }
                b.trigger("TransitionModal:resize", [this.$node.innerWidth(), this.$node.innerHeight()]);
                $(window).on("TransitionModal:resized", this._show);
            } else {
                $(util.buildTree(["div.modal-container"])).append(this.$node).appendTo(this.$overlay);
                this.$window.on("resize", this.resize);
                var b = this.$overlay;
                b.css({
                    height: "",
                    display: ""
                }).on("click", this.attributes.clickOut ? this.close: null);
                var c = this.overlay.show();
                c.done(function() {
                    b.trigger("Modal:shown");
                });
            }
            this.resize();
            if (this.attributes.showCallback) {
                this.attributes.showCallback();
            }
        },
        resize: function(b) {
            var c = this.$node.find(".title").height();
            this.$node.find(".content-scroller").css("max-height", window.innerHeight - 60 - c);
        },
        clickHandler: function(b) {
            b.stopPropagation();
        },
        showAlert: function(e, c) {
            if (a.showing) {
                this.$overlay.on("Modal:shown", $.proxy(function() {
                    this.$overlay.off("Modal:shown");
                    this.showAlert(e, c);
                }, this));
                return;
            }
            var d = $(util.buildTree(["div.alert." + c, ["div", e]]));
            d.css({
                display: "block",
                visibility: "hidden"
            });
            this.$node.find(".content").prepend(d);
            var b = d.outerHeight(true);
            d.css({
                top: -b,
                visibility: "visible",
                opacity: 0
            });
            d.addClass("transitioning");
            window.setTimeout(function() {
                d.css({
                    top: "0",
                    opacity: 1
                });
            });
            window.setTimeout($.proxy(this.hideAlert, this), 3000);
        },
        hideAlert: function() {
            var c = this.$node.find("div.alert");
            var b = c.outerHeight(true);
            if (c) {
                c.css({
                    top: -b,
                    opacity: 0
                });
            }
            window.setTimeout(function() {
                c.remove();
            }, 500);
        },
        };
} ());
var ActionModal = Modal.extend({
    attributes: {
        submitCallback: null,
        submitText: "OK",
        cancelCallback: null,
        cancelText: "Cancel",
        showCancel: true,
        alterateText: "Close",
        showAlternate: false
    },
    layout: function() {
        return ["div.modal", {
            style: {
                width: this.attributes.width
            }
        }, ["div.close-x"], ["h2.title", this.attributes.title], ["div.content-scroller", ["div.content", TTNode.Children, ["div.buttons", ["button.cancel"], ["button.submit", {
            type: "submit"
        }]], ], ], ];
    },
    render: function(a, b) {
        this._super(a, b);
        this.$node.find(".submit").text(this.attributes.submitText).on("click", $.proxy(this.submit, this));
        if (this.attributes.showCancel) {
            this.$node.find(".cancel").text(this.attributes.cancelText).on("click", $.proxy(this.cancel, this));
        } else {
            this.$node.find(".cancel").remove();
        }
        if (this.attributes.showAlternate) {
            this.$node.find(".submit").hide();
            this.$node.find(".cancel").text(this.attributes.alterateText);
        }
    },
    submit: function() {
        if (this.attributes.submitCallback) {
            if (this.attributes.submitCallback() == false) {
                return;
            }
        }
        this.close();
    },
    cancel: function() {
        if (this.attributes.cancelCallback) {
            if (this.attributes.cancelCallback() == false) {
                return;
            }
        }
        this.close();
    },
    revertAlternate: function() {
        if (this.attributes.showAlternate == true) {
            this.$node.find(".submit").show();
            this.$node.find(".cancel").text(this.attributes.cancelText);
            this.attributes.showAlternate = false;
        }
    },
    showAlternate: function() {
        if (this.attributes.showAlternate == false) {
            this.$node.find("submit").hide();
            this.$node.find(".cancel").text(this.attributes.alternateText);
            this.attributes.showAlternate = true;
        }
    }
});
eval(function(h, b, j, f, g, i) {
    g = function(a) {
        return (a < b ? "": g(parseInt(a / b))) + ((a = a % b) > 35 ? String.fromCharCode(a + 29) : a.toString(36));
    };
    if (!"".replace(/^/, String)) {
        while (j--) {
            i[g(j)] = f[j] || g(j);
        }
        f = [function(a) {
            return i[a];
        }];
        g = function() {
            return "\\w+";
        };
        j = 1;
    }
    while (j--) {
        if (f[j]) {
            h = h.replace(new RegExp("\\b" + g(j) + "\\b", "g"), f[j]);
        }
    }
    return h;
} ('7 x=6(){7 1D="2.0.2";7 C=/\\s*,\\s*/;7 x=6(s,A){33{7 m=[];7 u=1z.32.2c&&!A;7 b=(A)?(A.31==22)?A:[A]:[1g];7 1E=18(s).1l(C),i;9(i=0;i<1E.y;i++){s=1y(1E[i]);8(U&&s.Z(0,3).2b("")==" *#"){s=s.Z(2);A=24([],b,s[1])}1A A=b;7 j=0,t,f,a,c="";H(j<s.y){t=s[j++];f=s[j++];c+=t+f;a="";8(s[j]=="("){H(s[j++]!=")")a+=s[j];a=a.Z(0,-1);c+="("+a+")"}A=(u&&V[c])?V[c]:21(A,t,f,a);8(u)V[c]=A}m=m.30(A)}2a x.2d;5 m}2Z(e){x.2d=e;5[]}};x.1Z=6(){5"6 x() {\\n  [1D "+1D+"]\\n}"};7 V={};x.2c=L;x.2Y=6(s){8(s){s=1y(s).2b("");2a V[s]}1A V={}};7 29={};7 19=L;x.15=6(n,s){8(19)1i("s="+1U(s));29[n]=12 s()};x.2X=6(c){5 c?1i(c):o};7 D={};7 h={};7 q={P:/\\[([\\w-]+(\\|[\\w-]+)?)\\s*(\\W?=)?\\s*([^\\]]*)\\]/};7 T=[];D[" "]=6(r,f,t,n){7 e,i,j;9(i=0;i<f.y;i++){7 s=X(f[i],t,n);9(j=0;(e=s[j]);j++){8(M(e)&&14(e,n))r.z(e)}}};D["#"]=6(r,f,i){7 e,j;9(j=0;(e=f[j]);j++)8(e.B==i)r.z(e)};D["."]=6(r,f,c){c=12 1t("(^|\\\\s)"+c+"(\\\\s|$)");7 e,i;9(i=0;(e=f[i]);i++)8(c.l(e.1V))r.z(e)};D[":"]=6(r,f,p,a){7 t=h[p],e,i;8(t)9(i=0;(e=f[i]);i++)8(t(e,a))r.z(e)};h["2W"]=6(e){7 d=Q(e);8(d.1C)9(7 i=0;i<d.1C.y;i++){8(d.1C[i]==e)5 K}};h["2V"]=6(e){};7 M=6(e){5(e&&e.1c==1&&e.1f!="!")?e:23};7 16=6(e){H(e&&(e=e.2U)&&!M(e))28;5 e};7 G=6(e){H(e&&(e=e.2T)&&!M(e))28;5 e};7 1r=6(e){5 M(e.27)||G(e.27)};7 1P=6(e){5 M(e.26)||16(e.26)};7 1o=6(e){7 c=[];e=1r(e);H(e){c.z(e);e=G(e)}5 c};7 U=K;7 1h=6(e){7 d=Q(e);5(2S d.25=="2R")?/\\.1J$/i.l(d.2Q):2P(d.25=="2O 2N")};7 Q=6(e){5 e.2M||e.1g};7 X=6(e,t){5(t=="*"&&e.1B)?e.1B:e.X(t)};7 17=6(e,t,n){8(t=="*")5 M(e);8(!14(e,n))5 L;8(!1h(e))t=t.2L();5 e.1f==t};7 14=6(e,n){5!n||(n=="*")||(e.2K==n)};7 1e=6(e){5 e.1G};6 24(r,f,B){7 m,i,j;9(i=0;i<f.y;i++){8(m=f[i].1B.2J(B)){8(m.B==B)r.z(m);1A 8(m.y!=23){9(j=0;j<m.y;j++){8(m[j].B==B)r.z(m[j])}}}}5 r};8(![].z)22.2I.z=6(){9(7 i=0;i<1z.y;i++){o[o.y]=1z[i]}5 o.y};7 N=/\\|/;6 21(A,t,f,a){8(N.l(f)){f=f.1l(N);a=f[0];f=f[1]}7 r=[];8(D[t]){D[t](r,A,f,a)}5 r};7 S=/^[^\\s>+~]/;7 20=/[\\s#.:>+~()@]|[^\\s#.:>+~()@]+/g;6 1y(s){8(S.l(s))s=" "+s;5 s.P(20)||[]};7 W=/\\s*([\\s>+~(),]|^|$)\\s*/g;7 I=/([\\s>+~,]|[^(]\\+|^)([#.:@])/g;7 18=6(s){5 s.O(W,"$1").O(I,"$1*$2")};7 1u={1Z:6(){5"\'"},P:/^(\'[^\']*\')|("[^"]*")$/,l:6(s){5 o.P.l(s)},1S:6(s){5 o.l(s)?s:o+s+o},1Y:6(s){5 o.l(s)?s.Z(1,-1):s}};7 1s=6(t){5 1u.1Y(t)};7 E=/([\\/()[\\]?{}|*+-])/g;6 R(s){5 s.O(E,"\\\\$1")};x.15("1j-2H",6(){D[">"]=6(r,f,t,n){7 e,i,j;9(i=0;i<f.y;i++){7 s=1o(f[i]);9(j=0;(e=s[j]);j++)8(17(e,t,n))r.z(e)}};D["+"]=6(r,f,t,n){9(7 i=0;i<f.y;i++){7 e=G(f[i]);8(e&&17(e,t,n))r.z(e)}};D["@"]=6(r,f,a){7 t=T[a].l;7 e,i;9(i=0;(e=f[i]);i++)8(t(e))r.z(e)};h["2G-10"]=6(e){5!16(e)};h["1x"]=6(e,c){c=12 1t("^"+c,"i");H(e&&!e.13("1x"))e=e.1n;5 e&&c.l(e.13("1x"))};q.1X=/\\\\:/g;q.1w="@";q.J={};q.O=6(m,a,n,c,v){7 k=o.1w+m;8(!T[k]){a=o.1W(a,c||"",v||"");T[k]=a;T.z(a)}5 T[k].B};q.1Q=6(s){s=s.O(o.1X,"|");7 m;H(m=s.P(o.P)){7 r=o.O(m[0],m[1],m[2],m[3],m[4]);s=s.O(o.P,r)}5 s};q.1W=6(p,t,v){7 a={};a.B=o.1w+T.y;a.2F=p;t=o.J[t];t=t?t(o.13(p),1s(v)):L;a.l=12 2E("e","5 "+t);5 a};q.13=6(n){1d(n.2D()){F"B":5"e.B";F"2C":5"e.1V";F"9":5"e.2B";F"1T":8(U){5"1U((e.2A.P(/1T=\\\\1v?([^\\\\s\\\\1v]*)\\\\1v?/)||[])[1]||\'\')"}}5"e.13(\'"+n.O(N,":")+"\')"};q.J[""]=6(a){5 a};q.J["="]=6(a,v){5 a+"=="+1u.1S(v)};q.J["~="]=6(a,v){5"/(^| )"+R(v)+"( |$)/.l("+a+")"};q.J["|="]=6(a,v){5"/^"+R(v)+"(-|$)/.l("+a+")"};7 1R=18;18=6(s){5 1R(q.1Q(s))}});x.15("1j-2z",6(){D["~"]=6(r,f,t,n){7 e,i;9(i=0;(e=f[i]);i++){H(e=G(e)){8(17(e,t,n))r.z(e)}}};h["2y"]=6(e,t){t=12 1t(R(1s(t)));5 t.l(1e(e))};h["2x"]=6(e){5 e==Q(e).1H};h["2w"]=6(e){7 n,i;9(i=0;(n=e.1F[i]);i++){8(M(n)||n.1c==3)5 L}5 K};h["1N-10"]=6(e){5!G(e)};h["2v-10"]=6(e){e=e.1n;5 1r(e)==1P(e)};h["2u"]=6(e,s){7 n=x(s,Q(e));9(7 i=0;i<n.y;i++){8(n[i]==e)5 L}5 K};h["1O-10"]=6(e,a){5 1p(e,a,16)};h["1O-1N-10"]=6(e,a){5 1p(e,a,G)};h["2t"]=6(e){5 e.B==2s.2r.Z(1)};h["1M"]=6(e){5 e.1M};h["2q"]=6(e){5 e.1q===L};h["1q"]=6(e){5 e.1q};h["1L"]=6(e){5 e.1L};q.J["^="]=6(a,v){5"/^"+R(v)+"/.l("+a+")"};q.J["$="]=6(a,v){5"/"+R(v)+"$/.l("+a+")"};q.J["*="]=6(a,v){5"/"+R(v)+"/.l("+a+")"};6 1p(e,a,t){1d(a){F"n":5 K;F"2p":a="2n";1a;F"2o":a="2n+1"}7 1m=1o(e.1n);6 1k(i){7 i=(t==G)?1m.y-i:i-1;5 1m[i]==e};8(!Y(a))5 1k(a);a=a.1l("n");7 m=1K(a[0]);7 s=1K(a[1]);8((Y(m)||m==1)&&s==0)5 K;8(m==0&&!Y(s))5 1k(s);8(Y(s))s=0;7 c=1;H(e=t(e))c++;8(Y(m)||m==1)5(t==G)?(c<=s):(s>=c);5(c%m)==s}});x.15("1j-2m",6(){U=1i("L;/*@2l@8(@\\2k)U=K@2j@*/");8(!U){X=6(e,t,n){5 n?e.2i("*",t):e.X(t)};14=6(e,n){5!n||(n=="*")||(e.2h==n)};1h=1g.1I?6(e){5/1J/i.l(Q(e).1I)}:6(e){5 Q(e).1H.1f!="2g"};1e=6(e){5 e.2f||e.1G||1b(e)};6 1b(e){7 t="",n,i;9(i=0;(n=e.1F[i]);i++){1d(n.1c){F 11:F 1:t+=1b(n);1a;F 3:t+=n.2e;1a}}5 t}}});19=K;5 x}();', 62, 190, "|||||return|function|var|if|for||||||||pseudoClasses||||test|||this||AttributeSelector|||||||cssQuery|length|push|fr|id||selectors||case|nextElementSibling|while||tests|true|false|thisElement||replace|match|getDocument|regEscape||attributeSelectors|isMSIE|cache||getElementsByTagName|isNaN|slice|child||new|getAttribute|compareNamespace|addModule|previousElementSibling|compareTagName|parseSelector|loaded|break|_0|nodeType|switch|getTextContent|tagName|document|isXML|eval|css|_1|split|ch|parentNode|childElements|nthChild|disabled|firstElementChild|getText|RegExp|Quote|x22|PREFIX|lang|_2|arguments|else|all|links|version|se|childNodes|innerText|documentElement|contentType|xml|parseInt|indeterminate|checked|last|nth|lastElementChild|parse|_3|add|href|String|className|create|NS_IE|remove|toString|ST|select|Array|null|_4|mimeType|lastChild|firstChild|continue|modules|delete|join|caching|error|nodeValue|textContent|HTML|prefix|getElementsByTagNameNS|end|x5fwin32|cc_on|standard||odd|even|enabled|hash|location|target|not|only|empty|root|contains|level3|outerHTML|htmlFor|class|toLowerCase|Function|name|first|level2|prototype|item|scopeName|toUpperCase|ownerDocument|Document|XML|Boolean|URL|unknown|typeof|nextSibling|previousSibling|visited|link|valueOf|clearCache|catch|concat|constructor|callee|try".split("|"), 0, {}));
eval(function(h, b, i, d, g, f) {
    g = function(a) {
        return (a < b ? "": g(parseInt(a / b))) + ((a = a % b) > 35 ? String.fromCharCode(a + 29) : a.toString(36));
    };
    if (!"".replace(/^/, String)) {
        while (i--) {
            f[g(i)] = d[i] || g(i);
        }
        d = [function(a) {
            return f[a];
        }];
        g = function() {
            return "\\w+";
        };
        i = 1;
    }
    while (i--) {
        if (d[i]) {
            h = h.replace(new RegExp("\\b" + g(i) + "\\b", "g"), d[i]);
        }
    }
    return h;
} ("9 17={3i:'0.1.3',16:1e-6};l v(){}v.23={e:l(i){8(i<1||i>7.4.q)?w:7.4[i-1]},2R:l(){8 7.4.q},1u:l(){8 F.1x(7.2u(7))},24:l(a){9 n=7.4.q;9 V=a.4||a;o(n!=V.q){8 1L}J{o(F.13(7.4[n-1]-V[n-1])>17.16){8 1L}}H(--n);8 2x},1q:l(){8 v.u(7.4)},1b:l(a){9 b=[];7.28(l(x,i){b.19(a(x,i))});8 v.u(b)},28:l(a){9 n=7.4.q,k=n,i;J{i=k-n;a(7.4[i],i+1)}H(--n)},2q:l(){9 r=7.1u();o(r===0){8 7.1q()}8 7.1b(l(x){8 x/r})},1C:l(a){9 V=a.4||a;9 n=7.4.q,k=n,i;o(n!=V.q){8 w}9 b=0,1D=0,1F=0;7.28(l(x,i){b+=x*V[i-1];1D+=x*x;1F+=V[i-1]*V[i-1]});1D=F.1x(1D);1F=F.1x(1F);o(1D*1F===0){8 w}9 c=b/(1D*1F);o(c<-1){c=-1}o(c>1){c=1}8 F.37(c)},1m:l(a){9 b=7.1C(a);8(b===w)?w:(b<=17.16)},34:l(a){9 b=7.1C(a);8(b===w)?w:(F.13(b-F.1A)<=17.16)},2k:l(a){9 b=7.2u(a);8(b===w)?w:(F.13(b)<=17.16)},2j:l(a){9 V=a.4||a;o(7.4.q!=V.q){8 w}8 7.1b(l(x,i){8 x+V[i-1]})},2C:l(a){9 V=a.4||a;o(7.4.q!=V.q){8 w}8 7.1b(l(x,i){8 x-V[i-1]})},22:l(k){8 7.1b(l(x){8 x*k})},x:l(k){8 7.22(k)},2u:l(a){9 V=a.4||a;9 i,2g=0,n=7.4.q;o(n!=V.q){8 w}J{2g+=7.4[n-1]*V[n-1]}H(--n);8 2g},2f:l(a){9 B=a.4||a;o(7.4.q!=3||B.q!=3){8 w}9 A=7.4;8 v.u([(A[1]*B[2])-(A[2]*B[1]),(A[2]*B[0])-(A[0]*B[2]),(A[0]*B[1])-(A[1]*B[0])])},2A:l(){9 m=0,n=7.4.q,k=n,i;J{i=k-n;o(F.13(7.4[i])>F.13(m)){m=7.4[i]}}H(--n);8 m},2Z:l(x){9 a=w,n=7.4.q,k=n,i;J{i=k-n;o(a===w&&7.4[i]==x){a=i+1}}H(--n);8 a},3g:l(){8 S.2X(7.4)},2d:l(){8 7.1b(l(x){8 F.2d(x)})},2V:l(x){8 7.1b(l(y){8(F.13(y-x)<=17.16)?x:y})},1o:l(a){o(a.K){8 a.1o(7)}9 V=a.4||a;o(V.q!=7.4.q){8 w}9 b=0,2b;7.28(l(x,i){2b=x-V[i-1];b+=2b*2b});8 F.1x(b)},3a:l(a){8 a.1h(7)},2T:l(a){8 a.1h(7)},1V:l(t,a){9 V,R,x,y,z;2S(7.4.q){27 2:V=a.4||a;o(V.q!=2){8 w}R=S.1R(t).4;x=7.4[0]-V[0];y=7.4[1]-V[1];8 v.u([V[0]+R[0][0]*x+R[0][1]*y,V[1]+R[1][0]*x+R[1][1]*y]);1I;27 3:o(!a.U){8 w}9 C=a.1r(7).4;R=S.1R(t,a.U).4;x=7.4[0]-C[0];y=7.4[1]-C[1];z=7.4[2]-C[2];8 v.u([C[0]+R[0][0]*x+R[0][1]*y+R[0][2]*z,C[1]+R[1][0]*x+R[1][1]*y+R[1][2]*z,C[2]+R[2][0]*x+R[2][1]*y+R[2][2]*z]);1I;2P:8 w}},1t:l(a){o(a.K){9 P=7.4.2O();9 C=a.1r(P).4;8 v.u([C[0]+(C[0]-P[0]),C[1]+(C[1]-P[1]),C[2]+(C[2]-(P[2]||0))])}1d{9 Q=a.4||a;o(7.4.q!=Q.q){8 w}8 7.1b(l(x,i){8 Q[i-1]+(Q[i-1]-x)})}},1N:l(){9 V=7.1q();2S(V.4.q){27 3:1I;27 2:V.4.19(0);1I;2P:8 w}8 V},2n:l(){8'['+7.4.2K(', ')+']'},26:l(a){7.4=(a.4||a).2O();8 7}};v.u=l(a){9 V=25 v();8 V.26(a)};v.i=v.u([1,0,0]);v.j=v.u([0,1,0]);v.k=v.u([0,0,1]);v.2J=l(n){9 a=[];J{a.19(F.2F())}H(--n);8 v.u(a)};v.1j=l(n){9 a=[];J{a.19(0)}H(--n);8 v.u(a)};l S(){}S.23={e:l(i,j){o(i<1||i>7.4.q||j<1||j>7.4[0].q){8 w}8 7.4[i-1][j-1]},33:l(i){o(i>7.4.q){8 w}8 v.u(7.4[i-1])},2E:l(j){o(j>7.4[0].q){8 w}9 a=[],n=7.4.q,k=n,i;J{i=k-n;a.19(7.4[i][j-1])}H(--n);8 v.u(a)},2R:l(){8{2D:7.4.q,1p:7.4[0].q}},2D:l(){8 7.4.q},1p:l(){8 7.4[0].q},24:l(a){9 M=a.4||a;o(1g(M[0][0])=='1f'){M=S.u(M).4}o(7.4.q!=M.q||7.4[0].q!=M[0].q){8 1L}9 b=7.4.q,15=b,i,G,10=7.4[0].q,j;J{i=15-b;G=10;J{j=10-G;o(F.13(7.4[i][j]-M[i][j])>17.16){8 1L}}H(--G)}H(--b);8 2x},1q:l(){8 S.u(7.4)},1b:l(a){9 b=[],12=7.4.q,15=12,i,G,10=7.4[0].q,j;J{i=15-12;G=10;b[i]=[];J{j=10-G;b[i][j]=a(7.4[i][j],i+1,j+1)}H(--G)}H(--12);8 S.u(b)},2i:l(a){9 M=a.4||a;o(1g(M[0][0])=='1f'){M=S.u(M).4}8(7.4.q==M.q&&7.4[0].q==M[0].q)},2j:l(a){9 M=a.4||a;o(1g(M[0][0])=='1f'){M=S.u(M).4}o(!7.2i(M)){8 w}8 7.1b(l(x,i,j){8 x+M[i-1][j-1]})},2C:l(a){9 M=a.4||a;o(1g(M[0][0])=='1f'){M=S.u(M).4}o(!7.2i(M)){8 w}8 7.1b(l(x,i,j){8 x-M[i-1][j-1]})},2B:l(a){9 M=a.4||a;o(1g(M[0][0])=='1f'){M=S.u(M).4}8(7.4[0].q==M.q)},22:l(a){o(!a.4){8 7.1b(l(x){8 x*a})}9 b=a.1u?2x:1L;9 M=a.4||a;o(1g(M[0][0])=='1f'){M=S.u(M).4}o(!7.2B(M)){8 w}9 d=7.4.q,15=d,i,G,10=M[0].q,j;9 e=7.4[0].q,4=[],21,20,c;J{i=15-d;4[i]=[];G=10;J{j=10-G;21=0;20=e;J{c=e-20;21+=7.4[i][c]*M[c][j]}H(--20);4[i][j]=21}H(--G)}H(--d);9 M=S.u(4);8 b?M.2E(1):M},x:l(a){8 7.22(a)},32:l(a,b,c,d){9 e=[],12=c,i,G,j;9 f=7.4.q,1p=7.4[0].q;J{i=c-12;e[i]=[];G=d;J{j=d-G;e[i][j]=7.4[(a+i-1)%f][(b+j-1)%1p]}H(--G)}H(--12);8 S.u(e)},31:l(){9 a=7.4.q,1p=7.4[0].q;9 b=[],12=1p,i,G,j;J{i=1p-12;b[i]=[];G=a;J{j=a-G;b[i][j]=7.4[j][i]}H(--G)}H(--12);8 S.u(b)},1y:l(){8(7.4.q==7.4[0].q)},2A:l(){9 m=0,12=7.4.q,15=12,i,G,10=7.4[0].q,j;J{i=15-12;G=10;J{j=10-G;o(F.13(7.4[i][j])>F.13(m)){m=7.4[i][j]}}H(--G)}H(--12);8 m},2Z:l(x){9 a=w,12=7.4.q,15=12,i,G,10=7.4[0].q,j;J{i=15-12;G=10;J{j=10-G;o(7.4[i][j]==x){8{i:i+1,j:j+1}}}H(--G)}H(--12);8 w},30:l(){o(!7.1y){8 w}9 a=[],n=7.4.q,k=n,i;J{i=k-n;a.19(7.4[i][i])}H(--n);8 v.u(a)},1K:l(){9 M=7.1q(),1c;9 n=7.4.q,k=n,i,1s,1n=7.4[0].q,p;J{i=k-n;o(M.4[i][i]==0){2e(j=i+1;j<k;j++){o(M.4[j][i]!=0){1c=[];1s=1n;J{p=1n-1s;1c.19(M.4[i][p]+M.4[j][p])}H(--1s);M.4[i]=1c;1I}}}o(M.4[i][i]!=0){2e(j=i+1;j<k;j++){9 a=M.4[j][i]/M.4[i][i];1c=[];1s=1n;J{p=1n-1s;1c.19(p<=i?0:M.4[j][p]-M.4[i][p]*a)}H(--1s);M.4[j]=1c}}}H(--n);8 M},3h:l(){8 7.1K()},2z:l(){o(!7.1y()){8 w}9 M=7.1K();9 a=M.4[0][0],n=M.4.q-1,k=n,i;J{i=k-n+1;a=a*M.4[i][i]}H(--n);8 a},3f:l(){8 7.2z()},2y:l(){8(7.1y()&&7.2z()===0)},2Y:l(){o(!7.1y()){8 w}9 a=7.4[0][0],n=7.4.q-1,k=n,i;J{i=k-n+1;a+=7.4[i][i]}H(--n);8 a},3e:l(){8 7.2Y()},1Y:l(){9 M=7.1K(),1Y=0;9 a=7.4.q,15=a,i,G,10=7.4[0].q,j;J{i=15-a;G=10;J{j=10-G;o(F.13(M.4[i][j])>17.16){1Y++;1I}}H(--G)}H(--a);8 1Y},3d:l(){8 7.1Y()},2W:l(a){9 M=a.4||a;o(1g(M[0][0])=='1f'){M=S.u(M).4}9 T=7.1q(),1p=T.4[0].q;9 b=T.4.q,15=b,i,G,10=M[0].q,j;o(b!=M.q){8 w}J{i=15-b;G=10;J{j=10-G;T.4[i][1p+j]=M[i][j]}H(--G)}H(--b);8 T},2w:l(){o(!7.1y()||7.2y()){8 w}9 a=7.4.q,15=a,i,j;9 M=7.2W(S.I(a)).1K();9 b,1n=M.4[0].q,p,1c,2v;9 c=[],2c;J{i=a-1;1c=[];b=1n;c[i]=[];2v=M.4[i][i];J{p=1n-b;2c=M.4[i][p]/2v;1c.19(2c);o(p>=15){c[i].19(2c)}}H(--b);M.4[i]=1c;2e(j=0;j<i;j++){1c=[];b=1n;J{p=1n-b;1c.19(M.4[j][p]-M.4[i][p]*M.4[j][i])}H(--b);M.4[j]=1c}}H(--a);8 S.u(c)},3c:l(){8 7.2w()},2d:l(){8 7.1b(l(x){8 F.2d(x)})},2V:l(x){8 7.1b(l(p){8(F.13(p-x)<=17.16)?x:p})},2n:l(){9 a=[];9 n=7.4.q,k=n,i;J{i=k-n;a.19(v.u(7.4[i]).2n())}H(--n);8 a.2K('\\n')},26:l(a){9 i,4=a.4||a;o(1g(4[0][0])!='1f'){9 b=4.q,15=b,G,10,j;7.4=[];J{i=15-b;G=4[i].q;10=G;7.4[i]=[];J{j=10-G;7.4[i][j]=4[i][j]}H(--G)}H(--b);8 7}9 n=4.q,k=n;7.4=[];J{i=k-n;7.4.19([4[i]])}H(--n);8 7}};S.u=l(a){9 M=25 S();8 M.26(a)};S.I=l(n){9 a=[],k=n,i,G,j;J{i=k-n;a[i]=[];G=k;J{j=k-G;a[i][j]=(i==j)?1:0}H(--G)}H(--n);8 S.u(a)};S.2X=l(a){9 n=a.q,k=n,i;9 M=S.I(n);J{i=k-n;M.4[i][i]=a[i]}H(--n);8 M};S.1R=l(b,a){o(!a){8 S.u([[F.1H(b),-F.1G(b)],[F.1G(b),F.1H(b)]])}9 d=a.1q();o(d.4.q!=3){8 w}9 e=d.1u();9 x=d.4[0]/e,y=d.4[1]/e,z=d.4[2]/e;9 s=F.1G(b),c=F.1H(b),t=1-c;8 S.u([[t*x*x+c,t*x*y-s*z,t*x*z+s*y],[t*x*y+s*z,t*y*y+c,t*y*z-s*x],[t*x*z-s*y,t*y*z+s*x,t*z*z+c]])};S.3b=l(t){9 c=F.1H(t),s=F.1G(t);8 S.u([[1,0,0],[0,c,-s],[0,s,c]])};S.39=l(t){9 c=F.1H(t),s=F.1G(t);8 S.u([[c,0,s],[0,1,0],[-s,0,c]])};S.38=l(t){9 c=F.1H(t),s=F.1G(t);8 S.u([[c,-s,0],[s,c,0],[0,0,1]])};S.2J=l(n,m){8 S.1j(n,m).1b(l(){8 F.2F()})};S.1j=l(n,m){9 a=[],12=n,i,G,j;J{i=n-12;a[i]=[];G=m;J{j=m-G;a[i][j]=0}H(--G)}H(--12);8 S.u(a)};l 14(){}14.23={24:l(a){8(7.1m(a)&&7.1h(a.K))},1q:l(){8 14.u(7.K,7.U)},2U:l(a){9 V=a.4||a;8 14.u([7.K.4[0]+V[0],7.K.4[1]+V[1],7.K.4[2]+(V[2]||0)],7.U)},1m:l(a){o(a.W){8 a.1m(7)}9 b=7.U.1C(a.U);8(F.13(b)<=17.16||F.13(b-F.1A)<=17.16)},1o:l(a){o(a.W){8 a.1o(7)}o(a.U){o(7.1m(a)){8 7.1o(a.K)}9 N=7.U.2f(a.U).2q().4;9 A=7.K.4,B=a.K.4;8 F.13((A[0]-B[0])*N[0]+(A[1]-B[1])*N[1]+(A[2]-B[2])*N[2])}1d{9 P=a.4||a;9 A=7.K.4,D=7.U.4;9 b=P[0]-A[0],2a=P[1]-A[1],29=(P[2]||0)-A[2];9 c=F.1x(b*b+2a*2a+29*29);o(c===0)8 0;9 d=(b*D[0]+2a*D[1]+29*D[2])/c;9 e=1-d*d;8 F.13(c*F.1x(e<0?0:e))}},1h:l(a){9 b=7.1o(a);8(b!==w&&b<=17.16)},2T:l(a){8 a.1h(7)},1v:l(a){o(a.W){8 a.1v(7)}8(!7.1m(a)&&7.1o(a)<=17.16)},1U:l(a){o(a.W){8 a.1U(7)}o(!7.1v(a)){8 w}9 P=7.K.4,X=7.U.4,Q=a.K.4,Y=a.U.4;9 b=X[0],1z=X[1],1B=X[2],1T=Y[0],1S=Y[1],1M=Y[2];9 c=P[0]-Q[0],2s=P[1]-Q[1],2r=P[2]-Q[2];9 d=-b*c-1z*2s-1B*2r;9 e=1T*c+1S*2s+1M*2r;9 f=b*b+1z*1z+1B*1B;9 g=1T*1T+1S*1S+1M*1M;9 h=b*1T+1z*1S+1B*1M;9 k=(d*g/f+h*e)/(g-h*h);8 v.u([P[0]+k*b,P[1]+k*1z,P[2]+k*1B])},1r:l(a){o(a.U){o(7.1v(a)){8 7.1U(a)}o(7.1m(a)){8 w}9 D=7.U.4,E=a.U.4;9 b=D[0],1l=D[1],1k=D[2],1P=E[0],1O=E[1],1Q=E[2];9 x=(1k*1P-b*1Q),y=(b*1O-1l*1P),z=(1l*1Q-1k*1O);9 N=v.u([x*1Q-y*1O,y*1P-z*1Q,z*1O-x*1P]);9 P=11.u(a.K,N);8 P.1U(7)}1d{9 P=a.4||a;o(7.1h(P)){8 v.u(P)}9 A=7.K.4,D=7.U.4;9 b=D[0],1l=D[1],1k=D[2],1w=A[0],18=A[1],1a=A[2];9 x=b*(P[1]-18)-1l*(P[0]-1w),y=1l*((P[2]||0)-1a)-1k*(P[1]-18),z=1k*(P[0]-1w)-b*((P[2]||0)-1a);9 V=v.u([1l*x-1k*z,1k*y-b*x,b*z-1l*y]);9 k=7.1o(P)/V.1u();8 v.u([P[0]+V.4[0]*k,P[1]+V.4[1]*k,(P[2]||0)+V.4[2]*k])}},1V:l(t,a){o(1g(a.U)=='1f'){a=14.u(a.1N(),v.k)}9 R=S.1R(t,a.U).4;9 C=a.1r(7.K).4;9 A=7.K.4,D=7.U.4;9 b=C[0],1E=C[1],1J=C[2],1w=A[0],18=A[1],1a=A[2];9 x=1w-b,y=18-1E,z=1a-1J;8 14.u([b+R[0][0]*x+R[0][1]*y+R[0][2]*z,1E+R[1][0]*x+R[1][1]*y+R[1][2]*z,1J+R[2][0]*x+R[2][1]*y+R[2][2]*z],[R[0][0]*D[0]+R[0][1]*D[1]+R[0][2]*D[2],R[1][0]*D[0]+R[1][1]*D[1]+R[1][2]*D[2],R[2][0]*D[0]+R[2][1]*D[1]+R[2][2]*D[2]])},1t:l(a){o(a.W){9 A=7.K.4,D=7.U.4;9 b=A[0],18=A[1],1a=A[2],2N=D[0],1l=D[1],1k=D[2];9 c=7.K.1t(a).4;9 d=b+2N,2h=18+1l,2o=1a+1k;9 Q=a.1r([d,2h,2o]).4;9 e=[Q[0]+(Q[0]-d)-c[0],Q[1]+(Q[1]-2h)-c[1],Q[2]+(Q[2]-2o)-c[2]];8 14.u(c,e)}1d o(a.U){8 7.1V(F.1A,a)}1d{9 P=a.4||a;8 14.u(7.K.1t([P[0],P[1],(P[2]||0)]),7.U)}},1Z:l(a,b){a=v.u(a);b=v.u(b);o(a.4.q==2){a.4.19(0)}o(b.4.q==2){b.4.19(0)}o(a.4.q>3||b.4.q>3){8 w}9 c=b.1u();o(c===0){8 w}7.K=a;7.U=v.u([b.4[0]/c,b.4[1]/c,b.4[2]/c]);8 7}};14.u=l(a,b){9 L=25 14();8 L.1Z(a,b)};14.X=14.u(v.1j(3),v.i);14.Y=14.u(v.1j(3),v.j);14.Z=14.u(v.1j(3),v.k);l 11(){}11.23={24:l(a){8(7.1h(a.K)&&7.1m(a))},1q:l(){8 11.u(7.K,7.W)},2U:l(a){9 V=a.4||a;8 11.u([7.K.4[0]+V[0],7.K.4[1]+V[1],7.K.4[2]+(V[2]||0)],7.W)},1m:l(a){9 b;o(a.W){b=7.W.1C(a.W);8(F.13(b)<=17.16||F.13(F.1A-b)<=17.16)}1d o(a.U){8 7.W.2k(a.U)}8 w},2k:l(a){9 b=7.W.1C(a.W);8(F.13(F.1A/2-b)<=17.16)},1o:l(a){o(7.1v(a)||7.1h(a)){8 0}o(a.K){9 A=7.K.4,B=a.K.4,N=7.W.4;8 F.13((A[0]-B[0])*N[0]+(A[1]-B[1])*N[1]+(A[2]-B[2])*N[2])}1d{9 P=a.4||a;9 A=7.K.4,N=7.W.4;8 F.13((A[0]-P[0])*N[0]+(A[1]-P[1])*N[1]+(A[2]-(P[2]||0))*N[2])}},1h:l(a){o(a.W){8 w}o(a.U){8(7.1h(a.K)&&7.1h(a.K.2j(a.U)))}1d{9 P=a.4||a;9 A=7.K.4,N=7.W.4;9 b=F.13(N[0]*(A[0]-P[0])+N[1]*(A[1]-P[1])+N[2]*(A[2]-(P[2]||0)));8(b<=17.16)}},1v:l(a){o(1g(a.U)=='1f'&&1g(a.W)=='1f'){8 w}8!7.1m(a)},1U:l(a){o(!7.1v(a)){8 w}o(a.U){9 A=a.K.4,D=a.U.4,P=7.K.4,N=7.W.4;9 b=(N[0]*(P[0]-A[0])+N[1]*(P[1]-A[1])+N[2]*(P[2]-A[2]))/(N[0]*D[0]+N[1]*D[1]+N[2]*D[2]);8 v.u([A[0]+D[0]*b,A[1]+D[1]*b,A[2]+D[2]*b])}1d o(a.W){9 c=7.W.2f(a.W).2q();9 N=7.W.4,A=7.K.4,O=a.W.4,B=a.K.4;9 d=S.1j(2,2),i=0;H(d.2y()){i++;d=S.u([[N[i%3],N[(i+1)%3]],[O[i%3],O[(i+1)%3]]])}9 e=d.2w().4;9 x=N[0]*A[0]+N[1]*A[1]+N[2]*A[2];9 y=O[0]*B[0]+O[1]*B[1]+O[2]*B[2];9 f=[e[0][0]*x+e[0][1]*y,e[1][0]*x+e[1][1]*y];9 g=[];2e(9 j=1;j<=3;j++){g.19((i==j)?0:f[(j+(5-i)%3)%3])}8 14.u(g,c)}},1r:l(a){9 P=a.4||a;9 A=7.K.4,N=7.W.4;9 b=(A[0]-P[0])*N[0]+(A[1]-P[1])*N[1]+(A[2]-(P[2]||0))*N[2];8 v.u([P[0]+N[0]*b,P[1]+N[1]*b,(P[2]||0)+N[2]*b])},1V:l(t,a){9 R=S.1R(t,a.U).4;9 C=a.1r(7.K).4;9 A=7.K.4,N=7.W.4;9 b=C[0],1E=C[1],1J=C[2],1w=A[0],18=A[1],1a=A[2];9 x=1w-b,y=18-1E,z=1a-1J;8 11.u([b+R[0][0]*x+R[0][1]*y+R[0][2]*z,1E+R[1][0]*x+R[1][1]*y+R[1][2]*z,1J+R[2][0]*x+R[2][1]*y+R[2][2]*z],[R[0][0]*N[0]+R[0][1]*N[1]+R[0][2]*N[2],R[1][0]*N[0]+R[1][1]*N[1]+R[1][2]*N[2],R[2][0]*N[0]+R[2][1]*N[1]+R[2][2]*N[2]])},1t:l(a){o(a.W){9 A=7.K.4,N=7.W.4;9 b=A[0],18=A[1],1a=A[2],2M=N[0],2L=N[1],2Q=N[2];9 c=7.K.1t(a).4;9 d=b+2M,2p=18+2L,2m=1a+2Q;9 Q=a.1r([d,2p,2m]).4;9 e=[Q[0]+(Q[0]-d)-c[0],Q[1]+(Q[1]-2p)-c[1],Q[2]+(Q[2]-2m)-c[2]];8 11.u(c,e)}1d o(a.U){8 7.1V(F.1A,a)}1d{9 P=a.4||a;8 11.u(7.K.1t([P[0],P[1],(P[2]||0)]),7.W)}},1Z:l(a,b,c){a=v.u(a);a=a.1N();o(a===w){8 w}b=v.u(b);b=b.1N();o(b===w){8 w}o(1g(c)=='1f'){c=w}1d{c=v.u(c);c=c.1N();o(c===w){8 w}}9 d=a.4[0],18=a.4[1],1a=a.4[2];9 e=b.4[0],1W=b.4[1],1X=b.4[2];9 f,1i;o(c!==w){9 g=c.4[0],2l=c.4[1],2t=c.4[2];f=v.u([(1W-18)*(2t-1a)-(1X-1a)*(2l-18),(1X-1a)*(g-d)-(e-d)*(2t-1a),(e-d)*(2l-18)-(1W-18)*(g-d)]);1i=f.1u();o(1i===0){8 w}f=v.u([f.4[0]/1i,f.4[1]/1i,f.4[2]/1i])}1d{1i=F.1x(e*e+1W*1W+1X*1X);o(1i===0){8 w}f=v.u([b.4[0]/1i,b.4[1]/1i,b.4[2]/1i])}7.K=a;7.W=f;8 7}};11.u=l(a,b,c){9 P=25 11();8 P.1Z(a,b,c)};11.2I=11.u(v.1j(3),v.k);11.2H=11.u(v.1j(3),v.i);11.2G=11.u(v.1j(3),v.j);11.36=11.2I;11.35=11.2H;11.3j=11.2G;9 $V=v.u;9 $M=S.u;9 $L=14.u;9 $P=11.u;", 62, 206, "||||elements|||this|return|var||||||||||||function|||if||length||||create|Vector|null|||||||||Math|nj|while||do|anchor||||||||Matrix||direction||normal||||kj|Plane|ni|abs|Line|ki|precision|Sylvester|A2|push|A3|map|els|else||undefined|typeof|contains|mod|Zero|D3|D2|isParallelTo|kp|distanceFrom|cols|dup|pointClosestTo|np|reflectionIn|modulus|intersects|A1|sqrt|isSquare|X2|PI|X3|angleFrom|mod1|C2|mod2|sin|cos|break|C3|toRightTriangular|false|Y3|to3D|E2|E1|E3|Rotation|Y2|Y1|intersectionWith|rotate|v12|v13|rank|setVectors|nc|sum|multiply|prototype|eql|new|setElements|case|each|PA3|PA2|part|new_element|round|for|cross|product|AD2|isSameSizeAs|add|isPerpendicularTo|v22|AN3|inspect|AD3|AN2|toUnitVector|PsubQ3|PsubQ2|v23|dot|divisor|inverse|true|isSingular|determinant|max|canMultiplyFromLeft|subtract|rows|col|random|ZX|YZ|XY|Random|join|N2|N1|D1|slice|default|N3|dimensions|switch|liesIn|translate|snapTo|augment|Diagonal|trace|indexOf|diagonal|transpose|minor|row|isAntiparallelTo|ZY|YX|acos|RotationZ|RotationY|liesOn|RotationX|inv|rk|tr|det|toDiagonalMatrix|toUpperTriangular|version|XZ".split("|"), 0, {}));
var avatar_animations = {
    rock: {
        id: "rock",
        keyframes: [{
            "hb,hf": {
                y: 1,
                x: 3,
                angle: 10
            },
            duration: 100
        }, {
            "hb,hf": {
                y: 3,
                x: 6,
                angle: 10
            },
            duration: 100
        }, {
            "hb,hf": {
                y: 3,
                x: 6,
                angle: 10
            },
            duration: 100
        }, {
            "hb,hf": {
                y: 1,
                x: 3,
                angle: 0
            },
            duration: 100
        }, {
            "hb,hf": {
                y: 0,
                x: 0,
                angle: 0
            },
            duration: 100
        }, {
            "hb,hf": {
                y: 0,
                x: 0,
                angle: 0
            },
            duration: 100
        }, {
            "hb,hf": {
                y: 1,
                x: -3,
                angle: -10
            },
            duration: 100
        }, {
            "hb,hf": {
                y: 3,
                x: -6,
                angle: -10
            },
            duration: 100
        }, {
            "hb,hf": {
                y: 3,
                x: -6,
                angle: -10
            },
            duration: 100
        }, {
            "hb,hf": {
                y: 1,
                x: -3,
                angle: 0
            },
            duration: 100
        }, {
            "hb,hf": {
                y: 0,
                x: 0,
                angle: 0
            },
            duration: 100
        }, {
            "hb,hf": {
                y: 0,
                x: 0,
                angle: 0
            },
            duration: 100
        }],
        loop: true
    },
    smallrock: {
        id: "smallrock",
        keyframes: [{
            "hb,hf": {
                y: 1,
                x: 2,
                angle: 6
            },
            duration: 100
        }, {
            "hb,hf": {
                y: 2,
                x: 4,
                angle: 6
            },
            duration: 100
        }, {
            "hb,hf": {
                y: 2,
                x: 4,
                angle: 6
            },
            duration: 100
        }, {
            "hb,hf": {
                y: 1,
                x: 2,
                angle: 0
            },
            duration: 100
        }, {
            "hb,hf": {
                y: 0,
                x: 0,
                angle: 0
            },
            duration: 100
        }, {
            "hb,hf": {
                y: 0,
                x: 0,
                angle: 0
            },
            duration: 100
        }, {
            "hb,hf": {
                y: 1,
                x: -2,
                angle: -6
            },
            duration: 100
        }, {
            "hb,hf": {
                y: 2,
                x: -4,
                angle: -6
            },
            duration: 100
        }, {
            "hb,hf": {
                y: 2,
                x: -4,
                angle: -6
            },
            duration: 100
        }, {
            "hb,hf": {
                y: 1,
                x: -2,
                angle: 0
            },
            duration: 100
        }, {
            "hb,hf": {
                y: 0,
                x: 0,
                angle: 0
            },
            duration: 100
        }, {
            "hb,hf": {
                y: 0,
                x: 0,
                angle: 0
            },
            duration: 100
        }],
        loop: true
    },
    bob: {
        id: "bob",
        keyframes: [{
            "hb,hf": {
                y: 7
            },
            duration: 200
        }, {
            "hb,hf": {
                y: 7
            },
            duration: 100
        }, {
            "hb,hf": {
                y: 0
            },
            duration: 200
        }, {
            "hb,hf": {
                y: 0
            },
            duration: 100
        }],
        loop: true
    }
};
var Animation = Class.extend({
    init: function(a) {
        $.extend(this, a);
        this.ready = false;
    }
});
$.extend(Animation, {
    cache: {},
    cacheAnimation: function(a) {
        this.cache[a.id] = a;
    },
    getCachedAnimation: function(a) {
        var b = a.id;
        if (!b) {
            a.id = JSON.stringify(a);
            return;
        }
        return this.cache[b];
    },
    createAnimationGetter: function(a) {
        return function(b) {
            var d = Animation.getCachedAnimation(b);
            if (d) {
                return d;
            }
            var c = new a(b);
            Animation.cacheAnimation(c);
            return c;
        };
    }
});
var AvatarAnimation = Animation.extend({
    init: function(b) {
        this._super(b);
        this.ready = true;
        var d = 0,
        e = this.keyframes,
        a = e.length;
        for (var c = 0; c < a; c++) {
            d += e[c].duration;
        }
        this.duration = d;
    }
});
$.extend(AvatarAnimation, {
    getAnimation: Animation.createAnimationGetter(AvatarAnimation)
    });
var SpriteAnimation = Animation.extend({
    init: function(b) {
        this._super(b);
        var a = util.createImageWithLoader(this.url);
        this.image = a[0];
        var c = a[1];
        c.done($.proxy(function() {
            this.ready = true;
        }, this));
    }
});
$.extend(SpriteAnimation, {
    getAnimation: Animation.createAnimationGetter(SpriteAnimation)
    }); (function() {
    var b = 0;
    var c = ["ms", "moz", "webkit", "o"];
    for (var a = 0; a < c.length && !window.requestAnimationFrame;++a) {
        window.requestAnimationFrame = window[c[a] + "RequestAnimationFrame"];
        window.cancelAnimationFrame = window[c[a] + "CancelAnimationFrame"] || window[c[a] + "CancelRequestAnimationFrame"];
    }
    if (!window.requestAnimationFrame) {
        window.requestAnimationFrame = function(h, e) {
            var d = new Date().getTime();
            var f = Math.max(0, 16 - (d - b));
            var g = window.setTimeout(function() {
                h(d + f);
            }, f);
            b = d + f;
            return g;
        };
    }
    if (!window.cancelAnimationFrame) {
        window.cancelAnimationFrame = function(d) {
            clearTimeout(d);
        };
    }
} ());
var BLACKSWAN_FRAMERATE = 20;
var Dancer = Class.extend({
    framerate: BLACKSWAN_FRAMERATE,
    msPerFrame: 1000 / BLACKSWAN_FRAMERATE,
    init: function(a) {
        this.animationQueue = [];
        this.notifyStateChange = a;
    },
    setEventBus: function(a) {
        this.$eventBus = a;
        if (this.setupEventListeners) {
            this.setupEventListeners();
        }
    },
    unsetEventBus: function(a) {
        delete this.$eventBus;
    },
    pushAnimation: function(a) {
        this.animationQueue.push(a);
    },
    _shiftAnimation: function(a) {
        var b = this.animationQueue.shift();
        this.startTime = $.type(a) === "number" ? a: Date.now();
        delete this.nextAnimationStartTime;
        if (this.notifyStateChange && this.$eventBus) {
            if (this.disabledCache && b.loop) {
                this.$eventBus.trigger("Stage.enableCache", [this.dancerid]);
                delete this.disabledCache;
            }
        }
        this.animation = b;
    },
    nextAnimation: function() {
        return this.animationQueue[0];
    },
    clearAnimationQueue: function() {
        this.animationQueue = [];
    },
    start: function(a) {
        delete this.stopTime;
        if (!this.animating) {
            this.startTime = $.type(a) === "number" ? a: Date.now();
            this.animating = true;
            if (this.notifyStateChange && this.$eventBus) {
                if (this.animation && this.animation.loop) {
                    this.$eventBus.trigger("Stage.emptyCache", [this.dancerid]);
                } else {
                    this.$eventBus.trigger("Stage.disableCache", [this.dancerid]);
                    this.disabledCache = true;
                }
            }
        }
    },
    next: function(c) {
        if (this.nextAnimation()) {
            if (this.animating) {
                if (this.nextAnimationStartTime) {
                    this.animationQueue.shift();
                } else {
                    var d = this.animation.duration,
                    a = $.type(c) === "number" ? c: Date.now(),
                    e = a - this.startTime,
                    b = d ? Math.max(1, Math.ceil(e / d)) : 1;
                    this.nextAnimationStartTime = this.startTime + d * b;
                    if (this.notifyStateChange && this.$eventBus) {
                        this.$eventBus.trigger("Stage.disableCache", [this.dancerid]);
                        this.disabledCache = true;
                    }
                }
            } else {
                this._shiftAnimation(c);
            }
        }
    },
    stop: function(b) {
        if (this.animating) {
            var d = this.animation.duration,
            c = $.type(b) === "number" ? b: Date.now(),
            e = c - this.startTime,
            a = d ? Math.max(1, Math.ceil(e / d)) : 1;
            this.stopTime = this.startTime + d * a;
            if (this.notifyStateChange && this.$eventBus) {
                this.$eventBus.trigger("Stage.disableCache", [this.dancerid]);
                this.disabledCache = true;
            }
        }
    },
    _stop: function() {
        this.animating = false;
        delete this.stopTime;
        if (this.notifyStateChange && this.disabledCache && this.$eventBus) {
            this.$eventBus.trigger("Stage.enableCache", [this.dancerid]);
            delete this.disabledCache;
        }
    },
    determineFrame: function(c) {
        if (!this.animating) {
            return 0;
        }
        if (this.stopTime !== undefined && c > this.stopTime) {
            this._stop();
            return 0;
        }
        var f = this.animation,
        d = this.startTime,
        g = f ? f.duration: null;
        if (!f || (!f.loop && c > this.startTime + g) || (this.nextAnimationStartTime !== undefined && c > this.nextAnimationStartTime)) {
            var e = this.nextAnimation();
            if (!e) {
                this._stop();
                return 0;
            }
            if (e.ready) {
                this._shiftAnimation(c);
            }
            return 0;
        }
        var b = c - this.startTime,
        a = b % g;
        if (a < 0) {
            a += g;
        }
        return Math.floor(a / this.msPerFrame);
    },
    });
var SpriteDancer = Dancer.extend({
    imagesLoaded: true,
    setScale: function() {},
    setColor: function() {},
    _shiftAnimation: function() {
        this._super();
        this.msPerFrame = this.animation.msPerFrame;
    },
    draw: function(e, d) {
        var b = this.determineFrame(d);
        if (this.animation) {
            var g = this.animation.image,
            f = g.width,
            a = g.height,
            c = g.height / (this.animation.duration / this.msPerFrame);
            e.drawImage(g, 0, c * b, f, c, 0, 0, f, c);
        }
    }
});
var BlackSwanDancer = Dancer.extend(function() {
    var a = {
        frameCache: {},
        imageCache: {},
        shadedImageCache: {},
        loaderMap: {},
        boundingBoxCache: {},
        animationData: {}
    };
    return {
        init: function(f, e, g, d, c, b) {
            this._super(d);
            this.dancerid = f;
            this.avatarid = e;
            this.data = b || avatars[e];
            this.state = g;
            this.isCrowdMember = c;
            this.animating = false;
            this.parts = {};
            this.shadedParts = {};
            this.colorizedParts = {};
            this._setColor = $.proxy(this._setColor, this);
            this.color = null;
        },
        getPartImageUrl: function(b) {
            return this.data.images[b];
        },
        loadImages: function() {
            var v = [],
            h = [],
            c = this.data.states[this.state];
            for (var o = 0, q = c.length; o < q; o++) {
                h.push(c[o].name);
            }
            if (this.data.animations) {
                for (var s in this.data.animations) {
                    var r = this.data.animations[s];
                    for (var n in r.keyframes) {
                        var e = r.keyframes[n];
                        for (var l in e) {
                            var m = e[l],
                            j = m.swap;
                            if (j && !(j in h)) {
                                h.push(j);
                            }
                        }
                    }
                }
            }
            for (var o = 0, q = h.length; o < q; o++) {
                var t = h[o],
                d = this.getPartImageUrl(t);
                if (! (d in a.imageCache)) {
                    var u = util.createImageWithLoader(d),
                    w = u[0],
                    g = u[1];
                    a.imageCache[d] = w;
                    u = this.shadeImage(w, g);
                    var b = u[0],
                    f = u[1];
                    a.shadedImageCache[d] = b;
                    a.loaderMap[d] = f;
                }
                v.push(a.loaderMap[d]);
                this.parts[t] = a.imageCache[d];
                this.shadedParts[t] = a.shadedImageCache[d];
            }
            this.imagesLoad = $.when.apply(this, v);
            this.imagesLoaded = false;
            this.imagesLoad.done($.proxy(function() {
                this.imagesLoaded = true;
            }, this)).fail($.proxy(function() {
                LOG("unable to load images for avatar " + this.avatarid);
                this.imageLoaded = false;
            }, this));
        },
        shadeImage: function(f, b, e) {
            if (!e) {
                e = "#100911";
            }
            var g = util.buildTree(["canvas"]);
            var c = $.Deferred();
            var h = this;
            b.done(function() {
                g.width = f.width;
                g.height = f.height;
                var d = g.getContext("2d");
                d.drawImage(f, 0, 0);
                d.globalCompositeOperation = "source-atop";
                d.globalAlpha = 0.5;
                d.fillStyle = e;
                d.fillRect(0, 0, f.width, f.height);
                c.resolve();
            });
            return [g, c];
        },
        calculateBoundingBox: function(m) {
            var p = a.boundingBoxCache[this.avatarid];
            if (p && !m) {
                this.boundingBox = p;
            } else {
                var h = this.data.states[this.state],
                b = [],
                q = [],
                e = [],
                d = [],
                l = h.length;
                for (var k = 0; k < l; k++) {
                    var c = h[k];
                    var o = c.name;
                    var j = this.parts[o];
                    if (!j.height && !j.width) {
                        return false;
                    }
                    var f = c.offset[0],
                    n = c.offset[1];
                    b.push(f);
                    q.push(n);
                    e.push(f + j.width);
                    d.push(n + j.height);
                }
                var g = {
                    left: Math.min.apply(Math, b),
                    top: Math.min.apply(Math, q),
                    right: Math.max.apply(Math, e),
                    bottom: Math.max.apply(Math, d)
                    };
                this.boundingBox = g;
                a.boundingBoxCache[this.avatarid] = g;
            }
            $(window).trigger(this.dancerid + ".hasBoundingBox");
            return this.boundingBox;
        },
        setScale: function(b) {
            if (b === this.scale) {
                return;
            }
            this.scale = b;
            this.imagesLoaded = false;
            this.loadImages();
            if (!this.imagesLoaded) {
                this.imagesLoad.done(util.retry(this, this.calculateBoundingBox));
                this.imagesLoad.done($.proxy(function() {
                    if (this.notifyStateChange && this.$eventBus) {
                        this.$eventBus.trigger("Stage.emptyCache", [this.dancerid]);
                    }
                }, this));
            } else {
                util.retry(this, this.calculateBoundingBox)();
            }
        },
        setColor: function(b) {
            if (b == this.color && this.colorSet) {
                return;
            }
            this.color = b;
            this.colorSet = false;
            if (this.imagesLoaded) {
                this._setColor(b);
            } else {
                this.imagesLoad.done(this._setColor);
            }
        },
        _setColor: function(h) {
            if (!h) {
                h = this.color;
            }
            for (var f in this.parts) {
                if (this.parts.hasOwnProperty(f)) {
                    var e = this.parts[f];
                    if (!e.height && !e.width) {
                        window.setTimeout(this._setColor, 1000);
                        return;
                    }
                }
            }
            for (var f in this.parts) {
                if (this.parts.hasOwnProperty(f)) {
                    var e = this.parts[f];
                    var k = document.createElement("canvas");
                    k.width = e.width;
                    k.height = e.height;
                    var d = k.getContext("2d");
                    d.drawImage(e, 0, 0, e.width, e.height);
                    d.globalCompositeOperation = "source-atop";
                    var j = (h >> 16) % 256,
                    i = (h >> 8) % 256,
                    c = h % 256;
                    d.fillStyle = "rgba(" + j + ", " + i + ", " + c + ", 1)";
                    d.fillRect(0, 0, e.width, e.height);
                    d.globalCompositeOperation = "source-over";
                    this.colorizedParts[f] = k;
                }
            }
            this.colorSet = true;
        },
        tween: function(h) {
            var u = this.animation;
            if (!a.frameCache[u.id]) {
                a.frameCache[u.id] = {};
            }
            var n = a.frameCache[u.id];
            if (!n[h]) {
                var r = h * this.msPerFrame,
                v = {},
                l = u.keyframes,
                t = l.length;
                for (var s = 0; s < t; s++) {
                    var f = l[s];
                    if (r <= f.duration) {
                        var e = r / f.duration;
                        var d = $.extend({}, v);
                        for (var w in f) {
                            if (w != "duration" && f.hasOwnProperty(w)) {
                                var m = f[w];
                                var k = w.split(",");
                                var g = k.length;
                                for (var q = 0; q < g; q++) {
                                    for (var c in m) {
                                        if (m.hasOwnProperty(c)) {
                                            var b = m[c];
                                            if (!util.notEmpty(b) || !b.toFixed) {
                                                continue;
                                            }
                                            if (!d[k[q]]) {
                                                d[k[q]] = {};
                                            }
                                            var p = d[k[q]][c];
                                            if (!util.notEmpty(p)) {
                                                p = 0;
                                            }
                                            var o = (b - p) * e + p;
                                            d[k[q]][c] = o;
                                        }
                                    }
                                }
                            }
                        }
                        n[h] = d;
                        break;
                    } else {
                        r -= f.duration;
                        for (var w in f) {
                            if (w != "duration" && f.hasOwnProperty(w)) {
                                var d = f[w];
                                var k = w.split(",");
                                var g = k.length;
                                for (var q = 0; q < g; q++) {
                                    if (!v[k[q]]) {
                                        v[k[q]] = {};
                                    }
                                    $.extend(v[k[q]], d);
                                }
                            }
                        }
                    }
                }
            }
            return n[h];
        },
        draw: function(c, b, r) {
            if (!this.imagesLoaded) {
                return false;
            }
            var l = this.isCrowdMember;
            var e = this.determineFrame(b),
            j = {};
            if (this.animating && this.animation && !r) {
                j = this.tween(e);
            }
            var h = true;
            var m = this.data.states[this.state];
            var p = m.length;
            for (var o = 0; o < p; o++) {
                var n = m[o],
                s = n.name,
                t = this.parts[s];
                if (!r && (s in j) && j[s].swap) {
                    t = this.parts[j[s].swap];
                }
                if (!t || !t.width || !t.height) {
                    h = false;
                    break;
                }
                var d = t.width / 2;
                var k = t.height / 2;
                var g = n.offset[0];
                var f = n.offset[1];
                var q = 0;
                if (s in j) {
                    g += j[s].x || 0;
                    f += j[s].y || 0;
                    q = (j[s].angle || 0) * Math.PI / 180;
                }
                if (r) {
                    t = this.colorizedParts[s];
                } else {
                    if (l) {
                        t = this.shadedParts[s];
                    }
                }
                if (t) {
                    if (q) {
                        c.save();
                        c.translate(g + d, f + k);
                        c.rotate(q);
                        c.drawImage(t, -d, -k, t.width, t.height);
                        c.restore();
                    } else {
                        c.drawImage(t, g, f, t.width, t.height);
                    }
                } else {
                    h = false;
                }
            }
            return h;
        },
        };
} ());
var Stage = Class.extend(function() {
    var b = {
        FLOOR_COLOR: 0,
        config: {
            stageBottomScale: 0.9,
            stageTopScale: 0.55,
            usePerspective: true,
            bottomAlign: false,
            paddingTop: 0,
            paddingLeft: 0,
            paddingRight: 0,
            cacheFrames: true,
            mouseEvents: true,
            ignoreInitialMouseEvents: false,
            ignoreExceptionSelector: null
        },
        framerate: BLACKSWAN_FRAMERATE,
        msPerFrame: 1000 / BLACKSWAN_FRAMERATE,
        };
    var d = [],
    a = false;
    var c = function() {
        if (!d.length) {
            a = false;
            return;
        }
        setTimeout(function() {
            requestAnimationFrame(c);
        }, b.msPerFrame);
        a = true;
        var g = Date.now();
        for (var j = 0, n = d.length; j < n; j++) {
            var o = d[j],
            h = o.canvas,
            f = o.context;
            f.clearRect(0, 0, h.width, h.height);
            if (o.config.cacheFrames) {
                var m = Math.floor((g - o.startTime) / b.msPerFrame),
                e = m % o.numCachedFrames,
                l = o.frameCache[e];
                if (!o.cacheDisabled && l) {
                    f.putImageData(l, 0, 0);
                } else {
                    g = o.startTime + m * b.msPerFrame;
                    var k = o.draw(h, f, o.dancers, false, g);
                    if (k) {
                        o.frameCache[e] = f.getImageData(0, 0, h.width, h.height);
                    }
                }
            } else {
                o.draw(h, f, o.dancers, false, g);
            }
        }
    };
    return {
        animatingStages: d,
        framerate: b.framerate,
        msPerFrame: b.msPerFrame,
        init: function(i, h, e, g) {
            this.width = h;
            this.height = e;
            this.config = $.extend({}, b.config, g);
            this.$container = i;
            this.$el = $(util.buildTree(["div.stage"])).appendTo(i);
            this.$eventBus = $({});
            this.canvasWidth = h + this.config.paddingLeft + this.config.paddingRight;
            this.canvasHeight = e + this.config.paddingTop;
            var f = util.buildTree(["canvas", {
                width: this.canvasWidth,
                height: this.canvasHeight
            }]);
            this.canvas = f;
            this.context = f.getContext("2d");
            this.$el.append(f);
            this.dancerMap = {};
            this.dancers = [];
            this.tick = $.proxy(this.tick, this);
            this.animating = false;
            if (this.config.mouseEvents) {
                this.updateMap = util.delay(this, util.retry(this, this.updateMap), 1000);
                this.mapCanvas = util.buildTree(["canvas", {
                    width: this.canvasWidth,
                    height: this.canvasHeight
                }]);
                this.mapContext = this.mapCanvas.getContext("2d");
                this.mouseenter = $.proxy(this.mouseenter, this);
                this.mousemove = util.rateLimit(this, this.mousemove, 200);
                this.mouseleave = $.proxy(this.mouseleave, this);
                this.click = $.proxy(this.click, this);
                this.$el.on("mouseenter", this.mouseenter).on("mousemove", this.mousemove).on("mouseleave", this.mouseleave).on("click", this.click);
                this.$eventBus.on("newColorizedDancer", this.updateMap);
                this.colorMap = {};
                this.colorCount = b.FLOOR_COLOR;
                this.colorizer = new Colorizer(this.$eventBus);
            }
            if (this.config.cacheFrames) {
                this.$eventBus.on("Stage.emptyCache", $.proxy(this.emptyFrameCache, this)).on("Stage.disableCache", $.proxy(this.disableFrameCache, this)).on("Stage.enableCache", $.proxy(this.enableFrameCache, this));
                this.frameCache = [];
                this.cacheDisablers = {};
                this.cacheDuration = AvatarAnimation.getAnimation(avatar_animations.rock).duration;
                this.numCachedFrames = this.cacheDuration / this.msPerFrame;
            }
        },
        addDancer: function(o, l, j) {
            l = l + this.config.paddingLeft;
            j = j + this.config.paddingTop;
            if (o.dancerid in this.dancerMap) {
                if (o.x == l && o.y == j) {
                    return;
                } else {
                    this.removeDancer(o.dancerid);
                }
            }
            var n = {
                dancer: o,
                x: l,
                y: j
            };
            if (this.config.usePerspective) {
                n.scale = (this.config.stageTopScale + (j - this.config.paddingTop) * (this.config.stageBottomScale - this.config.stageTopScale) / this.height);
            } else {
                n.scale = this.config.stageBottomScale;
            }
            o.setScale(n.scale);
            if (this.config.mouseEvents) {
                if (o.color && util.notEmpty(o.colorizedParts) && !(o.color in this.colorMap)) {
                    this.colorMap[o.color] = n;
                    this.updateMap();
                } else {
                    var f;
                    if (o.isCrowdMember) {
                        f = 0;
                    } else {
                        this.colorCount += 3;
                        while (this.colorCount in this.colorMap) {
                            this.colorCount += 3;
                        }
                        f = this.colorCount;
                        this.colorMap[f] = n;
                    }
                    this.colorizer.push({
                        dancer: o,
                        color: f
                    });
                    window.setTimeout(this.colorizer.start, 1000);
                }
            }
            this.dancerMap[o.dancerid] = n;
            o.setEventBus(this.$eventBus);
            var m = this.dancers;
            var g = m.length;
            if (!g) {
                m.push(n);
            } else {
                var k = false;
                while (g--) {
                    var h = m[g];
                    if (h.y > j) {
                        m.splice(g + 1, 0, n);
                        k = true;
                        break;
                    } else {
                        if (h.y == j && h.x > l) {
                            m.splice(g + 1, 0, n);
                            k = true;
                            break;
                        }
                    }
                }
                if (!k) {
                    m.splice(0, 0, n);
                }
            }
            if (this.config.cacheFrames) {
                if (o.imagesLoaded) {
                    this.emptyFrameCache();
                } else {
                    var e = this;
                    o.imagesLoad.done(function() {
                        e.emptyFrameCache();
                    });
                }
            }
        },
        removeDancer: function(g) {
            var h = null;
            if (this.dancerMap[g]) {
                h = this.dancerMap[g];
                if (this.config.mouseEvents) {
                    delete this.colorMap[this.dancerMap[g].dancer.color];
                }
                delete this.dancerMap[g];
            }
            var f = this.dancers;
            var e = f.length;
            while (e--) {
                if (f[e].dancer.dancerid == g) {
                    f.splice(e, 1);
                    break;
                }
            }
            if (this.config.mouseEvents) {
                this.updateMap();
            }
            if (this.config.cacheFrames) {
                this.emptyFrameCache();
                this.enableFrameCache(g);
            }
            return h;
        },
        moveDancer: function(h, e, j, g) {
            var f = this.dancerMap[h];
            if (!f) {
                return;
            }
            var i = f.dancer;
            e = e + this.config.paddingLeft;
            j = j + this.config.paddingTop;
            f.x = e;
            f.y = j;
            if (this.config.usePerspective) {
                f.scale = (this.config.stageTopScale + (j - this.config.paddingTop) * (this.config.stageBottomScale - this.config.stageTopScale) / this.height);
                i.setScale(f.scale);
            }
            if (!g) {
                this.dancers.sort(function(l, k) {
                    return k.y - l.y || k.x - l.x;
                });
            }
            if (this.config.cacheFrames) {
                this.emptyFrameCache();
            }
        },
        hasDancer: function(e) {
            return (e in this.dancerMap);
        },
        start: function() {
            this.animating = true;
            this.startTime = Date.now();
            if (d.indexOf(this) === -1) {
                d.push(this);
            }
            if (!a) {
                c();
            }
        },
        stop: function() {
            this.animating = false;
            var e = d.indexOf(this);
            if (e !== -1) {
                d.splice(e, 1);
            }
        },
        draw: function(j, g, t, f, h) {
            if (!t || !t.length) {
                return true;
            }
            var n = t.length,
            o = true;
            while (n--) {
                var p = t[n],
                l = p.dancer.boundingBox,
                r = p.x,
                q = p.y,
                k = p.scale,
                m = p.dancer.data;
                if (this.config.bottomAlign) {
                    if (!l) {
                        o = false;
                        continue;
                    }
                    var u = (l.right + l.left) / 2;
                    r -= u * k;
                    q -= l.bottom * k;
                }
                var e = r || q,
                v = k !== 1;
                if (e || v) {
                    g.save();
                    g.translate(r, q);
                    g.scale(k, k);
                }
                o = p.dancer.draw(g, h, f) && o;
                if (e || v) {
                    g.restore();
                }
            }
            var s = this.config.extraDrawFunction;
            if (s) {
                s(j, g);
            }
            return o;
        },
        updateMap: function() {
            this.mapContext.save();
            var e = this.draw(this.mapCanvas, this.mapContext, this.dancers, true);
            this.mapContext.restore();
            return e;
        },
        mouseenter: function(e) {
            if (this.config.ignoreInitialMouseEvents && (!this.config.ignoreExceptionSelector || $(e.relatedTarget).filter(this.config.ignoreExceptionSelector).length === 0)) {
                this.ignoreMousemove = true;
                window.setTimeout($.proxy(function() {
                    this.ignoreMousemove = false;
                }, this), 400);
            } else {
                this.ignoreMousemove = false;
            }
        },
        mousemove: function(g) {
            if (this.ignoreMousemove) {
                return;
            }
            var i = this.$el.offset();
            var e = g.pageX - i.left;
            var j = g.pageY - i.top;
            var h = this.getDancerFromCoordinates(e, j);
            if (h) {
                if (this.lastHoverDancerid == h.dancer.dancerid) {
                    return;
                } else {
                    this.lastHoverDancerid = h.dancer.dancerid;
                }
                var f = this.getDancerBoundingBox(h.dancer.dancerid);
                this.lastBoundingBox = f;
                this.$el.trigger("Stage.mouseenter", [g, h.dancer, f]);
            } else {
                this.mouseleaveDancer(g);
            }
        },
        mouseleave: function(e) {
            this.ignoreMousemove = true;
            this.mouseleaveDancer(e);
        },
        mouseleaveDancer: function(e) {
            if (this.lastHoverDancerid) {
                if (this.lastHoverDancerid in this.dancerMap) {
                    this.$el.trigger("Stage.mouseleave", [e, this.dancerMap[this.lastHoverDancerid].dancer, this.lastBoundingBox]);
                }
                this.lastHoverDancerid = null;
            }
        },
        click: function(g) {
            var i = this.$el.offset();
            var e = g.pageX - i.left;
            var j = g.pageY - i.top;
            var h = this.getDancerFromCoordinates(e, j);
            if (h) {
                var f = this.getDancerBoundingBox(h.dancer.dancerid);
                this.$el.trigger("Stage.click", [g, h.dancer, f]);
            }
        },
        getDancerFromCoordinates: function(e, j) {
            e = Math.min(Math.max(1, e), this.canvasWidth - 1);
            var i = this.mapContext.getImageData(e - 1, j, 3, 1),
            g = i.data,
            h = new Uint32Array(g.buffer, 0, g.length / 4);
            if (h[0] === h[1] && h[1] == h[2] && g[3] === 255) {
                var f = (g[0] << 16) + (g[1] << 8) + g[2];
                if (f != b.FLOOR_COLOR) {
                    return this.colorMap[f];
                }
            }
        },
        getDancerBoundingBox: function(g) {
            var j = this.dancerMap[g];
            var h = j.dancer.boundingBox;
            if (!h) {
                return;
            }
            var l = j.x,
            k = j.y,
            f = j.scale;
            if (this.config.bottomAlign) {
                var e = (h.right - h.left) * j.scale;
                var m = (h.bottom - h.top) * j.scale;
                var i = e / 2;
                h = {
                    left: l - i,
                    top: k - m,
                    right: l + i,
                    bottom: k
                };
            } else {
                h = {
                    left: l + f * h.left,
                    top: k + f * h.top,
                    right: l + f * h.right,
                    bottom: k + f * h.bottom
                };
            }
            return h;
        },
        emptyFrameCache: function() {
            this.frameCache = [];
        },
        disableFrameCache: function(g, f) {
            if (!this.cacheDisablers[f]) {
                this.cacheDisabled = true;
                this.cacheDisablers[f] = true;
            }
        },
        enableFrameCache: function(i, h) {
            if (this.cacheDisablers[h]) {
                delete this.cacheDisablers[h];
                var f = 0;
                for (var g in this.cacheDisablers) {
                    if (this.cacheDisablers.hasOwnProperty(g)) {
                        f++;
                    }
                }
                if (f === 0) {
                    this.cacheDisabled = false;
                    this.emptyFrameCache();
                }
            }
        }
    };
} ());
var StageMouseHandler = Class.extend({
    init: function(a) {
        this.$el = $("<div>").css({
            position: "absolute",
            "z-index": 12000
        });
        this.$el.appendTo(a.$el.parent());
        a.$el.on("Stage.mouseenter", $.proxy(this.mouseenter, this));
        a.$el.on("Stage.mouseleave", $.proxy(this.mouseleave, this));
        a.$el.on("Stage.click", $.proxy(this.click, this));
        this.$el.on("mouseover", function() {
            a.cancelMousemove();
        });
        this.stage = a;
    },
    mouseenter: function(c, a, d, b) {
        return;
    },
    mouseleave: function(c, a, d, b) {
        return;
    },
    click: function(c, a, d, b) {
        return;
    }
});
var SimpleMouseHandler = StageMouseHandler.extend({
    init: function(a) {
        this._super(a);
        this.$el.css({
            background: "white",
            opacity: 0.5
        });
    },
    mouseenter: function(c, a, d, b) {
        this.$el.css({
            left: b.left,
            top: b.top,
            width: b.right - b.left,
            height: b.bottom - b.top
        });
    }
});
var ProcessingQueue = Class.extend({
    init: function() {
        this.queue = [];
        this.start = $.proxy(this.start, this);
        this._process = $.proxy(this._process, this);
    },
    start: function() {
        if (this.processTimeout) {
            return;
        }
        this._process();
    },
    _process: function() {
        var a;
        while (!a) {
            if (this.queue.length <= 0) {
                break;
            }
            a = this.queue.shift();
        }
        if (a) {
            this.process(a);
        }
        if (this.queue.length > 0) {
            this.processTimeout = window.setTimeout(this._process);
        } else {
            this.processTimeout = null;
        }
    },
    process: function(a) {
        return;
    },
    push: function(a) {
        this.queue.push(a);
    }
});
var Colorizer = ProcessingQueue.extend({
    init: function(a) {
        this._super();
        this.$eventBus = a;
    },
    process: function(b) {
        var c = b.dancer;
        var a = b.color;
        c.setColor(a);
        this.$eventBus.trigger("newColorizedDancer");
    }
}); (function(c) {
    function b(f, e) {
        return (typeof f == "function") ? (f.call(e)) : f;
    }
    function d(e) {
        while (e = e.parentNode) {
            if (e == document) {
                return true;
            }
        }
        return false;
    }
    function a(f, e) {
        this.$element = c(f);
        this.options = e;
        this.enabled = true;
        this.fixTitle();
    }
    a.prototype = {
        show: function() {
            var h = this.getTitle();
            if (h && this.enabled) {
                var g = this.tip();
                g.find(".tipsy-inner")[this.options.html ? "html": "text"](h);
                g[0].className = "tipsy";
                g.remove().css({
                    top: 0,
                    left: 0,
                    visibility: "hidden",
                    display: "block"
                }).prependTo(document.body);
                if (this.options.className) {
                    g.addClass(b(this.options.className, this.$element[0]));
                }
                var k = c.extend({}, this.$element.offset(), {
                    width: this.$element[0].offsetWidth,
                    height: this.$element[0].offsetHeight
                });
                var e = g[0].offsetWidth,
                j = g[0].offsetHeight,
                i = b(this.options.gravity, this.$element[0]);
                var f;
                switch (i.charAt(0)) {
                case "n":
                    f = {
                        top: k.top + k.height + this.options.offset,
                        left: k.left + k.width / 2 - e / 2
                    };
                    break;
                case "s":
                    f = {
                        top: k.top - j - this.options.offset,
                        left: k.left + k.width / 2 - e / 2
                    };
                    break;
                case "e":
                    f = {
                        top: k.top + k.height / 2 - j / 2,
                        left: k.left - e - this.options.offset
                    };
                    break;
                case "w":
                    f = {
                        top: k.top + k.height / 2 - j / 2,
                        left: k.left + k.width + this.options.offset
                    };
                    break;
                }
                if (i.length == 2) {
                    if (i.charAt(1) == "w") {
                        f.left = k.left + k.width / 2 - 15;
                    } else {
                        f.left = k.left + k.width / 2 - e + 15;
                    }
                }
                g.css(f).addClass("tipsy-" + i);
                g.find(".tipsy-arrow").addClass("tipsy-arrow-" + i.charAt(0));
                if (this.options.fade) {
                    g.stop().css({
                        opacity: 0,
                        display: "block",
                        visibility: "visible"
                    }).animate({
                        opacity: this.options.opacity
                    });
                } else {
                    g.css({
                        visibility: "visible",
                        opacity: this.options.opacity
                    });
                }
            }
        },
        hide: function() {
            if (this.options.fade) {
                this.tip().stop().fadeOut(function() {
                    c(this).remove();
                });
            } else {
                this.tip().remove();
            }
        },
        fixTitle: function() {
            var e = this.$element;
            if (e.attr("title") || typeof(e.attr("original-title")) != "string") {
                e.attr("original-title", e.attr("title") || "").removeAttr("title");
            }
        },
        getTitle: function() {
            var g,
            e = this.$element,
            f = this.options;
            this.fixTitle();
            var g,
            f = this.options;
            if (typeof f.title == "string") {
                g = e.attr(f.title == "title" ? "original-title": f.title);
            } else {
                if (typeof f.title == "function") {
                    g = f.title.call(e[0]);
                }
            }
            g = ("" + g).replace(/(^\s*|\s*$)/, "");
            return g || f.fallback;
        },
        tip: function() {
            if (!this.$tip) {
                this.$tip = c('<div class="tipsy"></div>').html('<div class="tipsy-arrow outer"></div><div class="tipsy-arrow"></div><div class="tipsy-inner"></div>');
                this.$tip.data("tipsy-pointee", this.$element[0]);
            }
            return this.$tip;
        },
        validate: function() {
            if (!this.$element[0].parentNode) {
                this.hide();
                this.$element = null;
                this.options = null;
            }
        },
        enable: function() {
            this.enabled = true;
        },
        disable: function() {
            this.enabled = false;
        },
        toggleEnabled: function() {
            this.enabled = !this.enabled;
        }
    };
    c.fn.tipsy = function(i) {
        if (i === true) {
            return this.data("tipsy");
        } else {
            if (typeof i == "string") {
                var k = this.data("tipsy");
                if (k) {
                    k[i]();
                }
                return this;
            }
        }
        i = c.extend({}, c.fn.tipsy.defaults, i);
        function h(m) {
            var n = c.data(m, "tipsy");
            if (!n) {
                n = new a(m, c.fn.tipsy.elementOptions(m, i));
                c.data(m, "tipsy", n);
            }
            return n;
        }
        function l() {
            var m = h(this);
            m.hoverState = "in";
            if (i.delayIn == 0) {
                m.show();
            } else {
                m.fixTitle();
                setTimeout(function() {
                    if (m.hoverState == "in") {
                        m.show();
                    }
                }, i.delayIn);
            }
        }
        function g() {
            var m = h(this);
            m.hoverState = "out";
            if (i.delayOut == 0) {
                m.hide();
            } else {
                setTimeout(function() {
                    if (m.hoverState == "out") {
                        m.hide();
                    }
                }, i.delayOut);
            }
        }
        if (!i.live) {
            this.each(function() {
                h(this);
            });
        }
        if (i.trigger != "manual") {
            var e = i.live ? "live": "bind",
            j = i.trigger == "hover" ? "mouseenter": "focus",
            f = i.trigger == "hover" ? "mouseleave": "blur";
            this[e](j, l)[e](f, g);
        }
        return this;
    };
    c.fn.tipsy.defaults = {
        className: null,
        delayIn: 0,
        delayOut: 0,
        fade: false,
        fallback: "",
        gravity: "n",
        html: false,
        live: false,
        offset: 0,
        opacity: 0.8,
        title: "title",
        trigger: "hover"
    };
    c.fn.tipsy.revalidate = function() {
        c(".tipsy").each(function() {
            var e = c.data(this, "tipsy-pointee");
            if (!e || !d(e)) {
                c(this).remove();
            }
        });
    };
    c.fn.tipsy.elementOptions = function(f, e) {
        return c.metadata ? c.extend({}, e, c(f).metadata()) : e;
    };
    c.fn.tipsy.autoNS = function() {
        return c(this).offset().top > (c(document).scrollTop() + c(window).height() / 2) ? "s": "n";
    };
    c.fn.tipsy.autoWE = function() {
        return c(this).offset().left > (c(document).scrollLeft() + c(window).width() / 2) ? "e": "w";
    };
    c.fn.tipsy.autoBounds = function(f, e) {
        return function() {
            var g = {
                ns: e[0],
                ew: (e.length > 1 ? e[1] : false)
                },
            j = c(document).scrollTop() + f,
            h = c(document).scrollLeft() + f,
            i = c(this);
            if (i.offset().top < j) {
                g.ns = "n";
            }
            if (i.offset().left < h) {
                g.ew = "w";
            }
            if (c(window).width() + c(document).scrollLeft() - i.offset().left < f) {
                g.ew = "e";
            }
            if (c(window).height() + c(document).scrollTop() - i.offset().top < f) {
                g.ns = "s";
            }
            return g.ns + (g.ew ? g.ew: "");
        };
    };
})(jQuery);
jQuery.fn.limitMaxLength = function(a) {
    var c = jQuery.extend({
        attribute: "maxlength",
        onLimit: function() {},
        onEdit: function() {}
    }, a);
    var b = function() {
        var d = jQuery(this);
        var e = parseInt(d.attr(c.attribute));
        if (d.val().length > e) {
            d.val(d.val().substr(0, e));
            jQuery.proxy(c.onLimit, this)();
        }
        jQuery.proxy(c.onEdit, this)(e - d.val().length);
    };
    this.each(b);
    return this.keyup(b).keydown(b).focus(b);
};
FhoeNwaAy = null;
ROOM_INTERVAL = null;
MARQUEE_INTERVALS = {};
SHORTEST_AVATAR_HEIGHT = 107;
TALLEST_AVATAR_HEIGHT = 238;
THINNEST_AVATAR_WIDTH = 100;
WIDEST_AVATAR_WIDTH = 295;
ROOM_WIDTH = 3378;
ROOM_HEIGHT = 600;
ROOM_VIEW_WIDTH = 1468;
ROOM_VIEW_HEIGHT = 600;
CROWD_UPDATE_THRESHOLD = 5;
var laptopUrls = {
    laptop_mac: "https://s3.amazonaws.com/static.turntable.fm/roommanager_assets/props/laptop_mac_11.png",
    laptop_pc: "https://s3.amazonaws.com/static.turntable.fm/roommanager_assets/props/laptop_windows_11.png",
    laptop_linux: "https://s3.amazonaws.com/static.turntable.fm/roommanager_assets/props/laptop_linux_11.png",
    laptop_ubuntu: "https://s3.amazonaws.com/static.turntable.fm/roommanager_assets/props/laptop_ubuntu_11.png",
    laptop_chrome: "https://s3.amazonaws.com/static.turntable.fm/roommanager_assets/props/laptop_chrome_11.png",
    laptop_iphone: "https://s3.amazonaws.com/static.turntable.fm/roommanager_assets/props/laptop_iphone.png",
    laptop_cake: "https://s3.amazonaws.com/static.turntable.fm/roommanager_assets/props/cake.png",
    laptop_intel: "https://s3.amazonaws.com/static.turntable.fm/roommanager_assets/props/laptop_intel.png",
    laptop_android: "https://s3.amazonaws.com/static.turntable.fm/roommanager_assets/props/laptop_android.png"
};
var DjBoothMouseHandler = StageMouseHandler.extend({
    click: function(c, a, d, b) {
        FhoeNwaAy.callback("profile", d.dancerid);
    }
});
var FloorMouseHandler = DjBoothMouseHandler.extend({
    mouseenter: function(c, a, d, b) {
        FhoeNwaAy.showTipsy(d.dancerid);
    },
    mouseleave: function(e, a, f, b) {
        var d = a.toElement || a.relatedTarget;
        var c = $(d);
        if (!c.closest(".tooltip").length) {
            FhoeNwaAy.hideLastTipsy();
        }
    }
});
var RoomView = TTNode.extend(function() {
    var d = {
        origin: {
            x: ROOM_VIEW_WIDTH / 2,
            y: ROOM_VIEW_HEIGHT / 2
        },
        relativeScale: 3,
        zoomLevel: 0,
        djBooth: {
            avatarScale: 0.45,
            laptopScale: 0.11,
            spotWidth: 67,
            djOffset: {
                x: -18,
                y: -144
            },
            laptopOffset: {
                x: -33,
                y: -108
            },
            laptopDimensions: {
                x: 62,
                y: 42
            },
            djButtonOffset: {
                x: -27,
                y: -129
            },
            reservedButtonOffset: {
                x: -32,
                y: -123
            },
            recordPileOffset: {
                x: -21,
                y: -96
            },
            pointDisplayOffset: {
                x: -45,
                y: -66
            },
            tipsyOffset: {
                x: 0,
                y: -132
            },
            spotlightOffset: {
                x: -54,
                y: -186
            }
        },
        audience: {
            noScale: ["zIndex"],
            viewport: {
                top: 27,
                left: -ROOM_VIEW_WIDTH / 2,
                height: ROOM_VIEW_HEIGHT / 2,
                width: ROOM_VIEW_WIDTH,
                },
            rect: {
                top: 27,
                left: -ROOM_WIDTH / 2,
                height: ROOM_HEIGHT,
                width: ROOM_WIDTH
            },
            frontScale: 0.5,
            backScale: 1.1,
            paddingLeft: 0,
            paddingRight: 0,
            zIndex: 1,
            },
        bigboard: {
            offset: {
                x: -188,
                y: -268
            },
            },
        curtain: {
            rect: {
                top: -342,
                left: -246,
                height: 282,
                width: 492
            }
        },
        stageCanvas: {
            rect: {
                top: -415,
                left: -734,
                width: 1468,
                height: 800
            },
            props: {
                stage: {
                    x: -732,
                    y: -415
                },
                floor: {
                    x: -734,
                    y: -58
                },
                curtain: {
                    x: -246,
                    y: -342
                },
                rightSpeakerInner: {
                    x: 258,
                    y: -315
                },
                rightSpeakerOuter: {
                    x: 463,
                    y: -315
                },
                leftSpeakerInner: {
                    x: -459,
                    y: -315
                },
                leftSpeakerOuter: {
                    x: -669,
                    y: -315
                },
                leftScreen: {
                    x: -585,
                    y: -331
                },
                rightScreen: {
                    x: 260,
                    y: -331
                },
                djTable: {
                    x: -186,
                    y: -78
                },
                lights0Add: {
                    x: -250,
                    y: -380
                },
                lights0Normal: {
                    x: -728,
                    y: -394
                },
                lights1Add: {
                    x: -690,
                    y: -380
                },
                lights1Normal: {
                    x: -728,
                    y: -394
                },
                lights2Add: {
                    x: -731,
                    y: -413
                },
                lights2Normal: {
                    x: -728,
                    y: -400
                },
                lights3Add: {
                    x: -731,
                    y: -413
                },
                lights3Normal: {
                    x: -728,
                    y: -400
                },
                },
            shade: [0, -140, 0, 0, -140, 500],
            shadeOpacity: 0.74
        },
        djTableCanvas: {
            rect: {
                top: -120,
                left: -186,
                width: 372,
                height: 87
            },
            },
        leftScreen: {
            rect: {
                top: -304,
                left: -576,
                width: 300,
                height: 225
            }
        },
        rightScreen: {
            rect: {
                top: -304,
                left: 270,
                width: 300,
                height: 225
            }
        },
        };
    var a = {
        origin: {
            x: ROOM_VIEW_WIDTH / 2,
            y: ROOM_VIEW_HEIGHT / 3
        },
        relativeScale: 2,
        zoomLevel: 1,
        djBooth: {
            pointDisplayOffset: {
                x: -45
            }
        },
        bigboard: {
            offset: {
                x: -127,
                y: -180
            },
            },
        stageCanvas: {
            rect: {
                top: -277,
                left: -734,
                width: 1468,
                height: 800
            },
            props: {
                stage: {
                    x: -733,
                    y: -277
                },
                floor: {
                    x: -734,
                    y: -40
                },
                curtain: {
                    x: -164,
                    y: -228
                },
                rightSpeakerInner: {
                    x: 172,
                    y: -210
                },
                rightSpeakerOuter: {
                    x: 312,
                    y: -210
                },
                leftSpeakerInner: {
                    x: -306,
                    y: -210
                },
                leftSpeakerOuter: {
                    x: -446,
                    y: -210
                },
                leftScreen: {
                    x: -391,
                    y: -221
                },
                rightScreen: {
                    x: 173,
                    y: -221
                },
                djTable: {
                    x: -124,
                    y: -52
                },
                lights0Add: {
                    x: -167,
                    y: -256
                },
                lights0Normal: {
                    x: -485,
                    y: -263
                },
                lights1Add: {
                    x: -459,
                    y: -256
                },
                lights1Normal: {
                    x: -485,
                    y: -263
                },
                lights2Add: {
                    x: -680,
                    y: -277
                },
                lights2Normal: {
                    x: -552,
                    y: -267
                },
                lights3Add: {
                    x: -676,
                    y: -277
                },
                lights3Normal: {
                    x: -725,
                    y: -267
                }
            },
            shade: [0, -94, 0, 0, -94, 333],
            shadeOpacity: 0.74
        },
        leftScreen: {
            rect: {
                top: -203
            }
        },
        rightScreen: {
            rect: {
                top: -203
            }
        }
    };
    var c = function(g) {
        if ($.type(g) == "object") {
            g = $.extend({}, g);
            var f = g.noScale;
            for (var e in g) {
                if (g.hasOwnProperty(e) && !(f && f.indexOf(e) !== -1)) {
                    g[e] = c(g[e]);
                }
            }
            return g;
        } else {
            if ($.type(g) == "number") {
                return g / d.relativeScale * a.relativeScale;
            } else {
                return g;
            }
        }
    };
    var a = $.extend(true, c(d), a, {
        audience: {
            viewport: {
                left: -ROOM_VIEW_WIDTH / 2,
                width: ROOM_VIEW_WIDTH,
                height: ROOM_VIEW_HEIGHT * 2 / 3
            },
            zIndex: 3,
            }
    });
    var b = {
        room: d,
        concert: a
    };
    return {
        _name: "RoomView",
        attributes: {
            idd: "roomView",
            type: "room",
            numDjSpots: 5,
            callback: null,
            roomData: {},
            listenerids: [],
            crowdControl: {},
            $eventBus: $({})
            },
        layout: function() {
            var e = ["div.room-view", ["div#curtain.screen", ["iframe", {
                scrolling: "no",
                frameborder: "none"
            }]], ["div#stage-background"], ["div#dj-booth"], ["div#dj-table"], ["div#bigboard", ["div#board"], ["div#songboard", ["div#song-details", ["div#songboard-artist"], ["div#songboard-title"], ["div#time-since-start"], ["div#time-left"], ["div#progress-bar", ["div#progress"]]], ["div#song-add", "Add song to:", ["div.buttons", ["div.btn.queue", ["div.service-name", "tt.fm queue"]], ["div.btn.amazon", ["div.service-name", "amazon"]], ["div.btn.itunes", ["div.service-name", "itunes"]], ["div.btn.lastfm", ["div.service-name", "last.fm"]], ["div.btn.spotify", ["div.service-name", "spotify"]], ["div.btn.rdio", ["div.service-name", "rdio"]]]]], ["div#awesome-button"], ["div#lame-button"], ["div#awesome-meter", ["div#awesome-needle"]], ], ["div#audience"], ["div.screen.side-screen#left-screen", ["iframe.screen-content", {
                scrolling: "no",
                frameborder: "none"
            }], ["iframe.screen-link", {
                scrolling: "no",
                frameborder: "none"
            }]], ["div.screen.side-screen#right-screen", ["iframe.screen-content", {
                scrolling: "no",
                frameborder: "none"
            }], ["iframe.screen-link", {
                scrolling: "no",
                frameborder: "none"
            }]]];
            return e;
        },
        init: function(e) {
            this._super(e);
            this.config = b[this.attributes.type];
            this.prefix = this.attributes.type.substring(0, 4) === "room" ? "room": "concert";
            this.dancerMap = {};
            this.listeners = {};
            this.djs = {};
            this.djsBySpot = [];
            this.$wbkFbFIRvVno = null;
            this.$inviteDj = null;
            this.recordPiles = [];
            this.taken_dj_map = [ - 1, -1, -1, -1, -1];
            this.spotlight_index = -1;
            this.lastTipsyUserid = null;
            this.tipsies = {};
            this.tipsyCloseTimeouts = {};
            this.marquee_texts = {};
            this.crowdDancerMap = {};
            this.crowdActionsByArea = [];
            this.crowdActionTimeout = null;
            this.performCrowdActions = $.proxy(this.performCrowdActions, this);
            this.roomData = this.attributes.roomData;
            this.callback = this.attributes.callback;
            this.positionTourListener = $.proxy(this.positionTourListener, this);
            this.positionTourDj = $.proxy(this.positionTourDj, this);
            this.positionTourSongboard = $.proxy(this.positionTourSongboard, this);
            this.positionTourChat = $.proxy(this.positionTourChat, this);
            this.positionTourQueue = $.proxy(this.positionTourQueue, this);
            this.update_songboard = $.proxy(this.update_songboard, this);
            this.setScreenConfigSrc();
        },
        render: function(G, s) {
            this._super(G, s);
            this.$node.css({
                width: ROOM_VIEW_WIDTH,
                height: ROOM_VIEW_HEIGHT
            });
            var R = this.config.origin,
            E = this;
            var u = turntable.ialIp.section;
            if (!u) {
                this.$wbkFbFIRvVno = $("<div>").click(function(i) {
                    if (! (i.pageX && i.pageY)) {
                        return;
                    }
                    E.callback("become_dj", $(this).data("spot"));
                }).appendTo(this.$node);
                this.drawDjButton();
                this.$inviteDj = $('<div class="invite-dj"><span>Invite DJ</span></div>').hide().click(function() {
                    E.callback("invite_dj");
                }).appendTo(this.$node);
            }
            for (var N = 0; N < this.attributes.numDjSpots;++N) {
                var o = $('<div class="record-pile"></div>').data("spot", N);
                this.recordPiles[N] = o;
                var M = this.djPropOffset(N, "recordPile");
                o.css({
                    top: R.y + M.y,
                    left: R.x + M.x
                }).appendTo(this.$node);
            }
            var j = this.attributes.crowdControl;
            var T = this.config.djBooth,
            e = Math.ceil(this.attributes.numDjSpots * T.spotWidth + WIDEST_AVATAR_WIDTH * T.avatarScale),
            h = -T.djOffset.y;
            this.djBoothOffset = {
                x: Math.floor( - e / 2),
                y: Math.floor(T.djOffset.y - 100 * T.avatarScale)
                };
            this.$djBooth = this.$node.find("#dj-booth").css({
                position: "absolute",
                top: R.y + this.djBoothOffset.y,
                left: R.x + this.djBoothOffset.x,
                });
            this.djBooth = new Stage(this.$djBooth, e, h, {
                usePerspective: false,
                stageBottomScale: T.avatarScale,
                cacheFrames: false,
                mouseEvents: false,
                extraDrawFunction: $.proxy(function(r, x) {
                    var i = this.spotlightOffset,
                    X = this.spotlightRect;
                    if (i) {
                        x.globalCompositeOperation = "lighter";
                        x.drawImage(this.boardSprite, X.left, X.top, X.width, X.height, i.x, i.y, X.width, X.height);
                        x.globalCompositeOperation = "source-over";
                    }
                }, this)
                });
            this.djBooth.start();
            this.djBoothMouseHandler = new DjBoothMouseHandler(this.djBooth);
            var l = this.attributes.roomData.metadata && this.attributes.roomData.metadata.djs,
            K = this.attributes.roomData.metadata.current_dj,
            v = {},
            g = turntable.ialIp.userMap,
            y = turntable.ialIp.upvoters,
            P = {};
            for (var U = 0, t = y.length; U < t; U++) {
                P[y[U]] = true;
            }
            if (l) {
                for (var U = 0, t = l.length; U < t; U++) {
                    var A = l[U];
                    v[A] = true;
                    this.addDj(g[A], U);
                    if (A === K) {
                        var m;
                        m = j.userMap[A] && j.userMap[A].startTime;
                        this.set_active_dj(U, m);
                    } else {
                        if (P[A]) {
                            var m;
                            m = j.userMap[A] && j.userMap[A].startTime;
                            this.update_vote(g[A], "up", m);
                        }
                    }
                }
            }
            var k = this.config.audience,
            I = this.attributes.type === "room" ? 1: 2,
            H = j.areaConfigs[0];
            var z = this.$audience = this.$node.find("#audience");
            this.crowds = [[], []];
            this.crowdAreaRects = [[], []];
            for (var O = 0; O < I; O++) {
                for (var U = 0, t = H.dividers.length - 1; U < t; U++) {
                    var L = ((u && O === 1 && U === 1) || (!u && O === 0 && U === 1));
                    var F = this.getAreaRect(O, U);
                    var B = $('<div class="crowd" />').css({
                        position: "absolute",
                        top: R.y + F.top - F.paddingTop,
                        left: R.x + F.left,
                        "z-index": O + Math.abs(U - 1),
                        "pointer-events": L ? "": "none"
                    });
                    var W = new Stage(B, F.width, F.height, {
                        stageTopScale: F.topScale,
                        stageBottomScale: F.bottomScale,
                        bottomAlign: true,
                        paddingTop: F.paddingTop,
                        mouseEvents: L ? true: false,
                        ignoreInitialMouseEvents: true,
                        ignoreExceptionSelector: ".tooltip"
                    });
                    z.append(B);
                    this.crowds[O][U] = W;
                    this.crowdAreaRects[O][U] = F;
                    W.start();
                }
            }
            if (u) {
                this.floor = this.crowds[1][1];
                this.floorAreaRect = this.crowdAreaRects[1][1];
            } else {
                this.floor = this.crowds[0][1];
                this.floorAreaRect = this.crowdAreaRects[0][1];
            }
            this.floorMouseHandler = new FloorMouseHandler(this.floor);
            var n = this.attributes.listenerids,
            Q = turntable.ialIp.getEntropyForUser;
            if (n) {
                for (var U = 0, t = n.length; U < t; U++) {
                    var S = n[U];
                    if (!v[S]) {
                        var D = g[S];
                        this.addListener(D, Q(D));
                        if (P[S]) {
                            var m;
                            m = j.userMap[S] && j.userMap[S].startTime;
                            this.update_vote(D, "up", m);
                        }
                    }
                }
            }
            this.createCrowd();
            this.$node.on("mouseenter", ".dj-laptop", $.proxy(function(r) {
                var i = $(r.target).data("userid");
                this.toggleTipsy(i);
            }, this));
            var p = this.config.bigboard;
            this.$bigboard = this.$node.find("#bigboard").css({
                top: R.y + p.offset.y,
                left: R.x + p.offset.x,
                });
            this.$songboardArtist = this.$bigboard.find("#songboard-artist");
            this.$songboardTitle = this.$bigboard.find("#songboard-title");
            this.$needle = this.$bigboard.find("#awesome-needle");
            this.boardSprite = util.createImageWithLoader("https://s3.amazonaws.com/static.turntable.fm/images/room/board-sprite-" + this.config.zoomLevel + ".png?cachebuster=1")[0];
            if (this.config.zoomLevel === 0) {
                this.spotlightRect = {
                    top: 244,
                    left: 264,
                    width: 107,
                    height: 136
                };
            } else {
                this.spotlightRect = {
                    top: 169,
                    left: 180,
                    width: 72,
                    height: 91
                };
            }
            this.stageCanvas = util.buildTree(["canvas", {
                width: this.config.stageCanvas.rect.width,
                height: this.config.stageCanvas.rect.height
            }]);
            this.stageContext = this.stageCanvas.getContext("2d");
            this.$stageBackground = this.$node.find("#stage-background").css({
                position: "absolute",
                top: R.y + this.config.stageCanvas.rect.top,
                left: R.x + this.config.stageCanvas.rect.left,
                }).append(this.stageCanvas);
            this.djTableCanvas = util.buildTree(["canvas", {
                width: this.config.djTableCanvas.rect.width,
                height: this.config.djTableCanvas.rect.height
            }]);
            this.djTableContext = this.djTableCanvas.getContext("2d");
            this.$djTable = this.$node.find("#dj-table").css({
                position: "absolute",
                top: R.y + this.config.djTableCanvas.rect.top,
                left: R.x + this.config.djTableCanvas.rect.left,
                }).append(this.djTableCanvas);
            this.drawStage(0);
            this.$node.addClass("zoom-" + this.config.zoomLevel);
            this.$node.on("click", ".avatar-tipsy div", function() {
                var i = $(this).closest(".avatar-tipsy").data("userid");
                if (i) {
                    E._hideTipsy(i);
                }
            });
            var C = this.$node.find("#awesome-button").click(function(i) {
                if (i.pageX && i.pageY && turntable.BXruhgG() < 5000) {
                    if (FhoeNwaAy.djsBySpot.length > 0 && !FhoeNwaAy.currentSong) {
                        turntable.ialIp.loadRoomState();
                    } else {
                        if (turntable.ialIp.currentSong) {
                            FhoeNwaAy.callback("upvote");
                            $("#awesome-button").addClass("selected");
                            $("#lame-button").removeClass("selected");
                        }
                    }
                }
            });
            var J = this.$node.find("#lame-button").click(function(i) {
                if (turntable.ialIp.currentSong && i.pageX && i.pageY && turntable.BXruhgG() < 5000) {
                    FhoeNwaAy.callback("downvote");
                    $("#awesome-button").removeClass("selected");
                    $("#lame-button").addClass("selected");
                }
            });
            C.add(J).on("mousedown", function(i) {
                i.preventDefault();
            });
            var q = this.$node.find("#song-add");
            this.$queueAdd = q.find(".queue").click(function() {
                if (turntable.ialIp.currentSong.snaggable !== false) {
                    FhoeNwaAy.callback("add_song_to", "queue");
                }
            });
            q.find(".amazon").click(function() {
                FhoeNwaAy.callback("add_song_to", "amazon");
            });
            q.find(".itunes").click(function() {
                FhoeNwaAy.callback("add_song_to", "itunes");
            });
            q.find(".lastfm").click(function() {
                FhoeNwaAy.callback("add_song_to", "lastfm");
            });
            q.find(".spotify").click(function() {
                FhoeNwaAy.callback("add_song_to", "spotify");
            });
            q.find(".rdio").click(function() {
                FhoeNwaAy.callback("add_song_to", "rdio");
            });
            var f = $.extend({}, this.config.leftScreen.rect),
            w = $.extend({}, this.config.rightScreen.rect),
            V = $.extend({}, this.config.curtain.rect),
            R = this.config.origin;
            $.each([f, w, V], function(r, x) {
                x.top += R.y;
                x.left += R.x;
            });
            this.$node.find("#left-screen").css(f);
            this.$node.find("#left-screen-link").css(f);
            this.$node.find("#right-screen").css(w);
            this.$node.find("#right-screen-link").css(w);
            this.$node.find("#curtain").css(V);
            this.drawScreens();
            if (util.detectIEVersion()) {
                $("#shadow").remove();
            }
            this.initialRenderDone = true;
        },
        cleanup: function() {
            var g = this.crowds;
            for (var f = 0, h = g.length; f < h; f++) {
                var l = g[f];
                for (var e = 0, k = l.length; e < k; e++) {
                    l[e].stop();
                    l[e].emptyFrameCache();
                }
            }
            this.djBooth.stop();
        },
        drawStage: function(x, f) {
            if (!x) {
                x = 0;
            }
            if (!f && x === this.lightLevel) {
                return;
            }
            this.$node.removeClass("light-level-" + this.lightLevel).addClass("light-level-" + x);
            this.lightLevel = x;
            var l = this.getNormalizedScreenConfig("left") ? true: false;
            var o = "https://s3.amazonaws.com/static.turntable.fm/roommanager_assets/props/zoom-" + this.config.zoomLevel + "/",
            h = [],
            w = function(z) {
                var y = util.createImageWithLoader(o + z);
                h.push(y[1]);
                return y[0];
            },
            r = w("floor.jpg"),
            m = w("speakers-right.png"),
            u = w("speakers-left.png"),
            t = w("stage.png"),
            i = w("dj-table.png"),
            n = "lights" + x + "Add",
            q = "lights" + x + "Normal",
            g = w("screen/screen.png");
            if (l) {
                var v = "screen/lights" + x + "Add",
                p = "screen/lights" + x + "Normal";
            } else {
                var v = "no-screen/lights" + x + "Add",
                p = "no-screen/lights" + x + "Normal";
            }
            var e = w(v + ".png"),
            s = w(p + ".png");
            var k = this.getNormalizedScreenConfig("curtain"),
            j = w("curtain.png?cachebuster=1");
            $.when.apply(this, h).done($.proxy(function() {
                var A = this.stageCanvas,
                B = A.width,
                F = A.height,
                z = this.stageContext,
                I = this.config.stageCanvas.rect,
                E = this.config.stageCanvas.props,
                H = {};
                $.each(E, function(N, O) {
                    var M = $.extend({}, O);
                    M.x -= I.left;
                    M.y -= I.top;
                    H[N] = M;
                });
                z.clearRect(0, 0, B, F);
                z.drawImage(r, H.floor.x, H.floor.y);
                z.drawImage(m, H.rightSpeakerInner.x, H.rightSpeakerInner.y);
                z.drawImage(m, H.rightSpeakerOuter.x, H.rightSpeakerOuter.y);
                z.drawImage(u, H.leftSpeakerInner.x, H.leftSpeakerInner.y);
                z.drawImage(u, H.leftSpeakerOuter.x, H.leftSpeakerOuter.y);
                if (!k) {
                    z.drawImage(j, H.curtain.x, H.curtain.y);
                }
                z.drawImage(t, H.stage.x, H.stage.y);
                if (this.getNormalizedScreenConfig("left")) {
                    z.drawImage(g, H.leftScreen.x, H.leftScreen.y);
                }
                if (this.getNormalizedScreenConfig("right")) {
                    z.drawImage(g, H.rightScreen.x, H.rightScreen.y);
                }
                if (k && util.fullCanvasCompositionSupport()) {
                    var y = $.extend({}, this.config.curtain.rect);
                    y.top -= I.top;
                    y.left -= I.left;
                    var K = util.buildTree(["canvas", {
                        width: y.width,
                        height: y.height
                    }]);
                    K.getContext("2d").drawImage(A, -y.left, -y.top);
                    z.globalCompositeOperation = "lighter";
                    z.drawImage(e, H[n].x, H[n].y);
                    var D = util.buildTree(["canvas", {
                        width: y.width,
                        height: y.height
                    }]),
                    G = D.getContext("2d");
                    G.drawImage(A, -y.left, -y.top);
                    G.globalCompositeOperation = "destination-in";
                    G.drawImage(K, 0, 0);
                    var L = util.buildTree(["canvas", {
                        width: y.width,
                        height: y.height
                    }]),
                    J = L.getContext("2d");
                    J.drawImage(A, -y.left, -y.top);
                    J.globalCompositeOperation = "destination-out";
                    J.drawImage(K, 0, 0);
                    z.clearRect(y.left, y.top, y.width, y.height);
                    z.drawImage(D, y.left, y.top);
                    z.globalAlpha = 0.4;
                    z.drawImage(L, y.left, y.top);
                    z.globalAlpha = 1;
                } else {
                    z.globalCompositeOperation = "lighter";
                    z.drawImage(e, H[n].x, H[n].y);
                }
                z.globalCompositeOperation = "source-over";
                z.drawImage(s, H[q].x, H[q].y);
                var C = this.$node.siblings("#shadow");
                if (C.length === 0 && !util.detectIEVersion()) {
                    this.$node.after(util.buildTree(["div#shadow"]));
                    C = this.$node.siblings("#shadow");
                }
                C.attr("class", "light-level-" + x);
            }, this));
            this.drawDjTable(x);
        },
        drawDjTable: function(f) {
            var h = "https://s3.amazonaws.com/static.turntable.fm/roommanager_assets/props/zoom-" + this.config.zoomLevel + "/",
            j = [],
            g = function(o) {
                var n = util.createImageWithLoader(h + o);
                j.push(n[1]);
                return n[0];
            },
            e = this.getNormalizedScreenConfig("left") ? true: false,
            m = "lights" + f + "Add",
            i = g("dj-table.png");
            if (e) {
                var k = "screen/lights" + f + "Add";
            } else {
                var k = "no-screen/lights" + f + "Add";
            }
            var l = g(k + ".png");
            $.when.apply(this, j).done($.proxy(function() {
                var n = this.djTableCanvas,
                o = this.djTableContext,
                q = this.config.djTableCanvas.rect,
                p = this.config.stageCanvas.props;
                o.clearRect(0, 0, n.width, n.height);
                o.drawImage(i, p.djTable.x - q.left, p.djTable.y - q.top);
                if (util.fullCanvasCompositionSupport()) {
                    o.globalCompositeOperation = "lighter";
                    o.drawImage(l, p[m].x - q.left, p[m].y - q.top);
                    o.globalCompositeOperation = "destination-in";
                    o.drawImage(i, p.djTable.x - q.left, p.djTable.y - q.top);
                    o.globalCompositeOperation = "source-over";
                }
            }, this));
        },
        setScreenConfigSrc: function(e) {
            this.screens = e || this.roomData.metadata.screens;
        },
        getScreenConfig: function(e) {
            return this.screens[e];
        },
        getNormalizedScreenConfig: function(g) {
            var e = this.screens,
            k = this.config.zoomLevel,
            f = 1 - k,
            h = e[g],
            i = false;
            if (!h) {
                if (g === "left") {
                    h = e.right || {};
                } else {
                    if (g === "right") {
                        h = e.left || {};
                    }
                }
                i = true;
            }
            if (!h) {
                return;
            }
            var j = h[k] || h[f];
            if (!j) {
                return;
            }
            return {
                type: h.type,
                src: j,
                link: h.link,
                mirror: i
            };
        },
        drawScreens: function(f) {
            var i = this,
            h = false;
            $.each(["left", "right"], function(m, l) {
                var k = i.getNormalizedScreenConfig(l),
                n = i.$node.find("#" + l + "-screen"),
                j = n.find(".screen-link");
                i.drawScreen(n, k, f);
                if (k) {
                    h = true;
                    if (k.link) {
                        j.attr("src", "https://s3.amazonaws.com/static.turntable.fm/link.html?href=" + k.link).show();
                    } else {
                        j.hide();
                    }
                } else {
                    j.hide();
                }
            });
            if (h) {
                $("html").addClass("side-screens-visible");
            } else {
                $("html").removeClass("side-screens-visible");
            }
            var g = this.getNormalizedScreenConfig("curtain"),
            e = this.$node.find("#curtain");
            this.drawScreen(e, g);
        },
        drawScreen: function(g, f, e) {
            if (f) {
                if (!f.type || f.type === "image") {
                    g.css("background-image", "url(" + f.src + ")");
                    g.find(".screen-content").hide();
                } else {
                    g.css("background-image", "").find("iframe").attr("src", f.src).show();
                }
                g.show();
            } else {
                g.css("background-image", "").find("iframe").attr("src", "");
                if (!e) {
                    g.hide();
                }
            }
        },
        getScale: function(f) {
            var e = this.config.audience;
            return (f - e.rect.top) / (e.rect.height) * (e.backScale - e.frontScale) + e.frontScale;
        },
        getAreaRect: function(o, f) {
            var i = this.config.audience,
            h = this.attributes.crowdControl.areaConfigs[o];
            var k = this.projectFloorLocation({
                x: 0,
                y: h.top
            }).y;
            var e = this.projectFloorLocation({
                x: 0,
                y: h.bottom
            }).y;
            var l = this.getScale(k);
            var p = this.getScale(e);
            var g = Math.min(this.projectFloorLocation({
                x: h.dividers[f](h.top),
                y: h.top
            }).x - THINNEST_AVATAR_WIDTH * l, this.projectFloorLocation({
                x: h.dividers[f](h.bottom),
                y: h.bottom
            }).x - THINNEST_AVATAR_WIDTH * p);
            g = Math.max(g, i.viewport.left);
            var m = Math.max(this.projectFloorLocation({
                x: h.dividers[f + 1](h.top),
                y: h.top
            }).x + THINNEST_AVATAR_WIDTH * l, this.projectFloorLocation({
                x: h.dividers[f + 1](h.bottom),
                y: h.bottom
            }).x + THINNEST_AVATAR_WIDTH * p);
            m = Math.min(m, i.viewport.left + i.viewport.width);
            var n;
            if (o === 0) {
                n = l * 150;
            } else {
                n = l * SHORTEST_AVATAR_HEIGHT;
            }
            var j = {
                top: k,
                left: g,
                height: e - k,
                width: m - g,
                topScale: l,
                bottomScale: p,
                paddingTop: n
            };
            return j;
        },
        createCrowd: function() {
            var h = this.attributes.crowdControl,
            f = h.crowdMembers,
            j = h.crowdMemberMap,
            k,
            l;
            for (var g = 0, e = f.length; g < e; g++) {
                k = f[g];
                l = j[k];
                this.renderCrowdMember(l, true);
            }
        },
        renderCrowdMember: function(k, j) {
            if (!k.locationData) {
                return;
            }
            var l = k.locationData,
            h = l.area,
            f = this.crowds[h[0]][h[1]],
            n = this.crowdAreaRects[h[0]][h[1]];
            if (f) {
                var i = b[this.attributes.type].audience,
                p = k.userid,
                s = k.avatarid,
                l = this.projectFloorLocation(l),
                r = l.x - n.left,
                q = l.y - n.top;
                var m = avatars[k.avatarid].size[1],
                t = n.topScale,
                e = Math.max(0, (m - SHORTEST_AVATAR_HEIGHT) * t);
                q = Math.max(q, e + 5);
                var o = new BlackSwanDancer(p, s, "back", true, true, k.custom_avatar);
                var g = function(u) {
                    u.addDancer(o, r, q);
                    this.crowdDancerMap[p] = o;
                    if (k.bopping) {
                        var v = k.startTime;
                        o.pushAnimation(AvatarAnimation.getAnimation(avatar_animations.rock));
                        o.next(v);
                        o.start(v);
                    }
                };
                if (j) {
                    g.call(this, f);
                } else {
                    this.pushCrowdAction(h, g);
                }
            }
        },
        removeCrowdMember: function(h) {
            if (!h.locationData) {
                return;
            }
            var f = h.locationData.area,
            e = this.crowds[f[0]][f[1]],
            g = h.userid;
            if (e) {
                e.removeDancer(g);
            }
            delete this.crowdDancerMap[g];
        },
        calculateNumDancersRendered: function() {
            var e = this.numDancersRendered = (this.attributes.crowdControl.listenerids.length + this.attributes.crowdControl.numCrowdMembers);
            return e;
        },
        updateTotalListeners: function(f) {
            this.calculateNumDancersRendered();
            var l = parseInt(f) - this.numDancersRendered,
            m = this.attributes.crowdControl;
            if (Math.abs(l) > CROWD_UPDATE_THRESHOLD) {
                if (l < 0) {
                    var e = -l;
                    while (e > 0) {
                        var h = m.getRandom(m.crowdMembers);
                        if (h === undefined) {
                            break;
                        }
                        var j = m.crowdMemberMap[h];
                        if (j) {
                            this.removeCrowdMember(j);
                        }
                        m.removeMember(h);
                        e--;
                        this.numDancersRendered--;
                    }
                } else {
                    var n = l,
                    k;
                    while (n > 0) {
                        var i = m.makeMember();
                        this.renderCrowdMember(i);
                        n--;
                        this.numDancersRendered++;
                    }
                }
                var g = (m.listenerids.length + m.crowdMemberidsInSection.length - m.sectionConfig.capacity);
                while (g > 0) {
                    var h = m.getRandom(m.crowdMemberidsInSection);
                    if (!h) {
                        break;
                    }
                    var j = m.crowdMemberMap[h];
                    if (j) {
                        this.removeCrowdMember(j);
                    }
                    m.removeMember(h);
                    var i = m.makeMember(true);
                    this.renderCrowdMember(i);
                    g--;
                }
            }
        },
        updateCrowdVotes: function(j) {
            var h = this.attributes.crowdControl,
            i = parseInt(j) - h.crowdBoppers.length,
            e;
            if (Math.abs(i) > CROWD_UPDATE_THRESHOLD) {
                if (i < 0) {
                    var f = -i;
                    while (f > 0) {
                        e = h.getRandom(h.crowdBoppers);
                        if (e === undefined) {
                            break;
                        }
                        var k = this.crowdDancerMap[e];
                        if (k) {
                            this.pushCrowdAction(h.crowdMemberMap[e].locationData.area, function(l) {
                                return function() {
                                    l.stop();
                                };
                            } (k));
                        }
                        h.setNotBopping(e);
                        f--;
                    }
                } else {
                    var g = i,
                    k;
                    while (g > 0) {
                        e = h.getRandom(h.crowdNotBoppers);
                        if (e === undefined) {
                            break;
                        }
                        k = this.crowdDancerMap[e];
                        if (k) {
                            this.pushCrowdAction(h.crowdMemberMap[e].locationData.area, function(m, l) {
                                return function() {
                                    var n = Date.now();
                                    m.pushAnimation(AvatarAnimation.getAnimation(avatar_animations.rock));
                                    m.next(n);
                                    m.start(n);
                                    h.setBopping(l, n);
                                };
                            } (k, e));
                        }
                        g--;
                    }
                }
            }
        },
        crowdActionsByArea: [],
        crowdActionTimeout: null,
        pushCrowdAction: function(k, h) {
            var j = this.crowdActionsByArea,
            l = false;
            for (var g = 0, e = j.length; g < e; g++) {
                var f = j[g];
                if (f.area[0] === k[0] && f.area[1] === k[1]) {
                    f.actions.push(h);
                    l = true;
                    break;
                }
            }
            if (!l) {
                j.push({
                    area: k,
                    actions: [h]
                    });
            }
            if (!this.crowdActionTimeout) {
                this.crowdActionTimeout = window.setTimeout(this.performCrowdActions, 300);
            }
        },
        performCrowdActions: function() {
            var g = this.crowdActionsByArea.splice(0, 1)[0];
            if (g) {
                var j = g.area,
                k = g.actions,
                f = this.crowds[j[0]][j[1]];
                for (var h = 0, e = k.length; h < e; h++) {
                    k[h].call(this, f);
                }
            }
            this.crowdActionTimeout = null;
            if (this.crowdActionsByArea.length > 0) {
                this.crowdActionTimeout = window.setTimeout(this.performCrowdActions, 1800);
            }
        },
        updateStage: function(h) {
            var g = this.numDancersAtLastStageUpdate,
            e = this.numDancersRendered;
            if (!g || Math.abs(e - g) > 10) {
                this.numDancersAtLastStageUpdate = e;
            } else {
                e = g;
            }
            var i = 0;
            if (e > 400) {
                i = 3;
            } else {
                if (e > 200) {
                    i = 2;
                } else {
                    if (e > 50) {
                        i = 1;
                    }
                }
            }
            var f = this.roomData.metadata;
            if (f.upvotes / f.listeners > 0.8) {
                i++;
            }
            this.drawStage(Math.min(3, i), h);
        },
        moveNeedle: function(f) {
            var e = (f * 2 - 1) * 70;
            if (e > 10) {
                this.$needle.removeClass("red").addClass("green");
            } else {
                if (e < -10) {
                    this.$needle.removeClass("green").addClass("red");
                } else {
                    this.$needle.removeClass("green").removeClass("red");
                }
            }
            this.$needle.css("transform", "rotate(" + e + "deg)");
        },
        getExistingAvatarid: function(e) {
            e = e.toString();
            if (e in avatars) {
                return e;
            } else {
                return Math.ceil(Math.random() * 8).toString();
            }
        },
        showYouMarker: function(e) {
            var f = this.getDancerBoundingBox(e);
            if (!f) {
                return;
            }
            var g = $(util.buildTree(["div.you-marker"])).css({
                top: f.top,
                left: (f.left + f.right) / 2
            }).text("YOU").appendTo(this.$node);
            window.setTimeout(function() {
                g.remove();
            }, 3000);
        },
        addListener: function(f, j) {
            var h = this.floor;
            if (!this.listeners[f.userid]) {
                var l = this.getExistingAvatarid(f.avatarid);
                f.avatarid = l;
                var k = this.attributes.crowdControl.generateUserLocation(f),
                q = this.projectFloorLocation(k),
                g = f.userid,
                i = this.dancerMap[g];
                if (!i || i.avatarid != l || i.state != "back" || (f.custom_avatar && f.custom_avatar != i.data)) {
                    i = new BlackSwanDancer(g, l, "back", true, false, f.custom_avatar);
                    this.dancerMap[g] = i;
                }
                var n = this.translateToFloorStageCoordinates(f, q);
                h.addDancer(i, n[0], n[1]);
                this.listeners[g] = i;
                this.numDancersRendered++;
                if (this.initialRenderDone) {
                    this.fixDancerSpacing();
                }
            }
            if (turntable.user && turntable.user.id == g) {
                var m = h.dancerMap[g],
                p = h.$container,
                e = $.proxy(this.useModalOrYouMarker, this);
                var r = function() {
                    var t = h.getDancerBoundingBox(g);
                    if (t) {
                        e(g);
                    } else {
                        var s = g + ".hasBoundingBox";
                        $(window).one(s, function() {
                            e(g);
                        });
                    }
                };
                if (this.$node.parent().length) {
                    r();
                } else {
                    this.attributes.$eventBus.one("RoomView.visible", r);
                }
            }
            var o = this.attributes.crowdControl;
            if (!o.userMap[g]) {
                o.userMap[g] = {};
            }
        },
        removeListener: function(g) {
            var f = g.userid,
            h = this.floor,
            e = this.floorAreaRect,
            i = e.topScale;
            delete this.listeners[f];
            h.removeDancer(f);
            this.numDancersRendered--;
            delete this.attributes.crowdControl.userMap[f];
            this.fixDancerSpacing();
        },
        fixDancerSpacing: function() {
            var t = this.attributes.crowdControl,
            l = t.listenerids,
            g = turntable.ialIp.userMap,
            f = this.config.audience.rect.left,
            o = this.config.audience.rect.top,
            e = this.floorAreaRect,
            q = e.topScale,
            m = this.floor,
            j,
            h,
            r,
            s,
            p;
            for (var k = 0, n = l.length; k < n; k++) {
                h = l[k];
                j = g[h];
                r = t.generateUserLocation(j);
                s = this.projectFloorLocation(r);
                p = this.translateToFloorStageCoordinates(j, s);
                m.moveDancer(h, p[0], p[1], (k !== n - 1));
            }
        },
        getDancerBoundingBox: function(h) {
            var k = [this.floor, this.djBooth];
            for (var g = 0; g < k.length; g++) {
                var f = k[g];
                if (!f.hasDancer(h)) {
                    continue;
                }
                var e = f.getDancerBoundingBox(h);
                if (!e) {
                    continue;
                }
                var j = f.$el.offsetParent().position();
                e.left += j.left;
                e.right += j.left;
                e.top += j.top;
                e.bottom += j.top;
                return e;
            }
        },
        projectFloorLocation: function(g) {
            var e = this.config.audience,
            m = $.extend({}, e.rect),
            n = g.x,
            l = g.y,
            j = e.frontScale,
            k = e.backScale,
            i = -(m.left + m.width / 2) * (k - j) / k;
            n = n * 2 / this.attributes.crowdControl.crowdConfig.width;
            l = l / 2;
            l = Math.pow(l * (Math.sqrt(1.5) - Math.sqrt(0.5)) + Math.sqrt(0.5), 2) - 0.5;
            var h = m.width / 2,
            p = j / k,
            o = (p + ((1 - p) * l)) * h,
            f = n * o + (1 - l) * i;
            n = Math.floor(m.left + h + f);
            l = Math.floor(l * m.height + m.top);
            return {
                x: n,
                y: l
            };
        },
        translateToFloorStageCoordinates: function(g, r) {
            var j = this.floor,
            e = this.floorAreaRect,
            p = this.getExistingAvatarid(g.avatarid),
            m = g.custom_avatar ? g.custom_avatar: avatars[p],
            s = e.paddingTop,
            n = m.size[1],
            k = e.topScale,
            q = e.bottomScale,
            i = e.height,
            f = (s - k * n) / ((q - k) * n / i - 1),
            o = Math.floor(r.x - e.left),
            l = Math.floor(Math.max(r.y - e.top, f + 5));
            return [o, l];
        },
        useModalOrYouMarker: function(e) {
            var f = $.cookie("turntableShowBigWelcome"),
            g = turntable.playlist.queue.attributes.songids.length;
            if (!f && !g) {
                util.buildTree([TourOverlay, {
                    childNodes: [this.layouts.welcomeViewOne(this.positionTourListener), this.layouts.welcomeViewTwo(this.positionTourDj), this.layouts.welcomeViewThree(this.positionTourSongboard), this.layouts.welcomeViewFour(this.positionTourChat), this.layouts.welcomeViewFive(false, this.positionTourQueue)],
                    doneCallback: function() {
                        $.cookie("turntableShowBigWelcome", true, {
                            path: "/",
                            expires: 365
                        });
                    }
                }], this);
                this.tourOverlay.show();
            } else {
                this.showYouMarker(e);
            }
        },
        positionTourListener: function(h) {
            var f = this.getDancerBoundingBox(turntable.user.id),
            e = this.$node.offset(),
            g = {
                x: -176,
                y: -250
            };
            h.css({
                top: f.top + +e.top + g.y,
                left: (f.left + f.right) / 2 + e.left + g.x
            });
        },
        positionTourDj: function(i) {
            var g = this.spotOffset(this.rightmostSpot() + 1),
            f = this.config.origin,
            e = this.$node.offset(),
            h = {
                x: -50,
                y: -40
            };
            if (this.config.zoomLevel === 1) {
                h.y = -21;
            }
            i.css({
                top: h.y + e.top + f.y + g.y,
                left: h.x + e.left + f.x + g.x
            });
        },
        positionTourSongboard: function(h) {
            var i = this.config.bigboard.offset,
            f = this.config.origin,
            e = this.$node.offset(),
            g = {
                x: -133,
                y: 30
            };
            h.css({
                top: g.y + e.top + f.y + i.y,
                left: g.x + e.left + f.x
            });
        },
        positionTourChat: function(g) {
            $(".chat-container .floating-panel-tab").click();
            var e = $("#chat-form").offset(),
            f = {
                x: -43,
                y: -175
            };
            g.css({
                top: f.y + e.top,
                left: f.x + e.left
            });
        },
        positionTourQueue: function(f) {
            $("#playlist-container .floating-panel-tab").click();
            var g = $("#songs").offset(),
            e = {
                x: -270,
                y: -38
            };
            if (turntable.ialIp.layout === "dual") {
                e.x = 263;
                f.addClass("right");
            }
            f.css({
                top: e.y + g.top,
                left: e.x + g.left
            });
        },
        showTipsy: function(e, g) {
            if (this.lastTipsyUserid == e || e in this.tipsies) {
                var f = this.tipsyCloseTimeouts[e];
                if (f) {
                    window.clearTimeout(f);
                    delete this.tipsyCloseTimeouts[e];
                }
                return;
            } else {
                if (this.lastTipsyUserid) {
                    this.hideLastTipsy();
                }
            }
            this._showTipsy(e, g);
        },
        toggleTipsy: function(f, h) {
            var e = false,
            g = this.lastTipsyUserid;
            if (g) {
                this.hideLastTipsy();
                if (g == f) {
                    e = true;
                }
            }
            if (f in this.tipsies) {
                this._hideTipsy(f);
                e = true;
            }
            if (!e) {
                this._showTipsy(f, h);
            }
        },
        _showTipsy: function(k, r) {
            var n,
            i = false,
            g,
            f;
            if (this.floor.dancerMap.hasOwnProperty(k)) {
                n = this.floor;
                var s = n.dancerMap[k].dancer,
                j = this.getDancerBoundingBox(k);
                g = (j.left + j.right) / 2;
                f = j.top;
            } else {
                if (this.djBooth.dancerMap.hasOwnProperty(k)) {
                    n = this.djBooth;
                    i = true;
                    var l = this.roomData.metadata.djs.indexOf(k);
                    var e = this.djPropOffset(l, "tipsy"),
                    o = this.config.origin;
                    f = o.y + e.y;
                    g = o.x + e.x;
                } else {
                    return;
                }
            }
            if (!r) {
                this.lastTipsyUserid = k;
            }
            var p;
            var q = {
                "margin-left": "-65px"
            };
            var h;
            if (!i) {
                $.extend(q, {
                    position: "absolute",
                    bottom: 0
                });
                h = "up";
            }
            var m = $(this.makeTooltip(k, i, h)).css(q).data("userid", k);
            if (i) {
                m.addClass("is-dj");
            }
            this.tipsies[k] = $("<div />").append(m).css({
                position: "absolute",
                top: f,
                left: g,
                opacity: 1,
                "z-index": 10
            }).on("mouseenter", function() {
                window.clearTimeout(p);
                delete FhoeNwaAy.tipsyCloseTimeouts[k];
                $(this).on("mouseleave", function(t) {
                    if (!i) {
                        var u = t.toElement || t.relatedTarget;
                        var E = $(u);
                        var C = E.closest("canvas");
                        if (C.length) {
                            var v = C[0];
                            if (v == n.canvas) {
                                var w = n.$el.offset();
                                var D = t.pageX - w.left;
                                var B = t.pageY - w.top;
                                var A = n.getDancerFromCoordinates(D, B);
                                if (A && A.dancer.dancerid == k) {
                                    return;
                                }
                            }
                        }
                    }
                    var z = $(this);
                    z.off("mouseleave");
                    p = window.setTimeout(function() {
                        delete FhoeNwaAy.tipsyCloseTimeouts[k];
                        FhoeNwaAy._hideTipsy(k);
                        if (FhoeNwaAy.lastTipsyUserid == k) {
                            FhoeNwaAy.lastTipsyUserid = null;
                        }
                    }, 500);
                    FhoeNwaAy.tipsyCloseTimeouts[k] = p;
                });
            }).appendTo(this.$node);
        },
        _hideTipsy: function(e) {
            var f = this.tipsies[e];
            if (f) {
                f.css("opacity", 0);
                window.setTimeout(function() {
                    f.remove();
                }, 250);
                delete this.tipsies[e];
            }
        },
        hideLastTipsy: function() {
            if (this.lastTipsyUserid) {
                this._hideTipsy(this.lastTipsyUserid);
                this.lastTipsyUserid = null;
            }
        },
        speak: function(f, i) {
            var e = f.userid,
            g = this.getDancerBoundingBox(e);
            if (!g) {
                return;
            }
            i = util.emojify(util.safeText(util.stripComboDiacritics(i)));
            var h = $(util.buildTree(["div.speech-bubble", ["div.speech-text"]]));
            h.css({
                top: g.top - 10,
                left: (g.left + g.right) / 2,
                visibility: "hidden",
                opacity: 0
            }).appendTo(this.$node).find(".speech-text").html(i);
            window.setTimeout(function() {
                h.css({
                    "margin-top": -h.height(),
                    visibility: "visible",
                    opacity: 1
                });
            });
            setTimeout(function() {
                h.css("opacity", 0);
                window.setTimeout(function() {
                    h.remove();
                }, 250);
            }, 2000);
        },
        spotOffset: function(g) {
            var i = this.config.djBooth,
            e = i.spotWidth * this.attributes.numDjSpots,
            h = -e / 2,
            f = h + (g + 0.5) * i.spotWidth;
            return {
                x: f,
                y: 0
            };
        },
        djPropOffset: function(e, h) {
            h = h + "Offset";
            var g = this.config.djBooth,
            f = this.spotOffset(e);
            f.x += g[h].x;
            f.y += g[h].y;
            return f;
        },
        addDj: function(v, j, i) {
            var l = this.getExistingAvatarid(v.avatarid),
            e = v.userid,
            p = this.dancerMap[e],
            s = this.attributes.crowdControl;
            if (!p || p.avatarid != l || p.state != "front" || (v.custom_avatar && v.custom_avatar != p.data)) {
                p = new BlackSwanDancer(e, l, "front", true, false, v.custom_avatar);
                this.dancerMap[e] = p;
            }
            var u = this.djBooth.config.stageBottomScale;
            var f = new Date();
            if (v.userid == "4e08f595a3f7517d1204e33c" && f.getDate() == 11 && f.getMonth() == 0) {
                v.laptop = "cake";
            } else {
                if (turntable.ialIp.roomid == "4f49105da3f75128a7000db9") {
                    v.laptop = "intel";
                }
            }
            var h = this.djPropOffset(j, "laptop"),
            t = this.config.origin,
            r = this.config.djBooth,
            o = r.laptopDimensions,
            k = util.buildTree(["div.dj-laptop", {
                style: {
                    top: t.y + h.y,
                    left: t.x + h.x,
                    width: o.x,
                    height: o.y,
                    background: "url(" + laptopUrls["laptop_" + v.laptop] + ") bottom left no-repeat",
                    "background-size": "contain"
                }
            }]),
            n = $(k).data("userid", e).attr("data-userid", e).appendTo(this.$node);
            $(document).trigger("drawDjLaptop", [e, o, r.laptopScale, n]);
            var g = this.djPropOffset(j, "pointDisplay");
            var m = $('<div class="point_display"></div>').css({
                top: t.y + g.y,
                left: t.x + g.x,
                "z-index": 5
            }).hide().appendTo(this.$node);
            var q = {
                x: this.spotOffset(j).x - p.data.size[0] * u / 2,
                y: Math.floor(h.y - p.data.ll * u + 3)
                };
            this.djBooth.addDancer(p, q.x - this.djBoothOffset.x, q.y - this.djBoothOffset.y);
            this.djsBySpot[j] = [e, p, n, m, v];
            this.djs[e] = [p, n];
            this.shuffleDjSpots(j, 1);
            this.numDancersRendered++;
            if (!s.userMap[e]) {
                s.userMap[e] = {};
            }
            return p;
        },
        removeDj: function(f) {
            var g = this.djsBySpot[f];
            if (g) {
                this.djBooth.removeDancer(g[0]);
                var h = this.djsBySpot[f],
                e = h[0];
                delete this.djs[h[0]];
                delete this.djsBySpot[f];
                g[2].remove();
                g[3].remove();
                this.shuffleDjSpots(f, -1);
                this.numDancersRendered--;
                delete this.attributes.crowdControl.userMap[e];
                this._hideTipsy(e);
            }
        },
        rightmostSpot: function() {
            for (var e = this.taken_dj_map.length; e >= 0;--e) {
                if (this.taken_dj_map[e] == 1) {
                    return e;
                }
            }
            return - 1;
        },
        drawDjButton: function() {
            var j = turntable.ialIp.section,
            f = this.rightmostSpot() + 1;
            if (!j) {
                var i,
                e,
                h,
                g = this.config.origin;
                if (this.roomData.metadata.dj_reservation == true) {
                    e = "reserved-dj";
                    h = "Reserved";
                    i = this.djPropOffset(f, "reservedButton");
                } else {
                    e = "become-dj";
                    h = "Play Music";
                    i = this.djPropOffset(f, "djButton");
                }
                this.$wbkFbFIRvVno.html(h).data("spot", f).removeClass("reserved-dj become-dj").addClass(e).css({
                    top: g.y + i.y,
                    left: g.x + i.x
                });
            }
        },
        shuffleDjSpots: function(g, e) {
            this.taken_dj_map[g] = e;
            var i = this.rightmostSpot() + 1,
            l = turntable.ialIp.section;
            if (!l) {
                this.$wbkFbFIRvVno.hide();
                this.$inviteDj.hide();
            }
            var m = this.attributes.numDjSpots;
            for (var j = 0; j < m;++j) {
                this.recordPiles[j].hide();
            }
            if (i < this.attributes.numDjSpots) {
                for (var j = i; j < m;++j) {
                    if (! (j === g && e !== -1)) {
                        this.recordPiles[j].show();
                    }
                }
                if (!l) {
                    if (this.djs[turntable.user.id]) {
                        var h = this.$inviteDj;
                    } else {
                        var h = this.$wbkFbFIRvVno;
                    }
                    var f,
                    k = this.config.origin;
                    if (this.roomData.metadata.dj_reservation == true && !this.djs[turntable.user.id]) {
                        f = this.djPropOffset(i, "reservedButton");
                    } else {
                        f = this.djPropOffset(i, "djButton");
                    }
                    h.data("spot", i).css({
                        top: k.y + f.y,
                        left: k.x + f.x
                    }).show();
                }
            }
        },
        set_dj_points: function(e) {
            if (this.current_dj) {
                this.current_dj[3].html(util.commafy(e) + " points").show();
            }
        },
        set_active_dj: function(e, h) {
            var g = this.djsBySpot[e];
            if (g) {
                var k = g[1],
                j = k.avatarid,
                f = g[4],
                i;
                if (f.custom_avatar) {
                    if (f.custom_avatar.animations) {
                        i = f.custom_avatar.animations.bob;
                    }
                } else {
                    if (avatars[j].animations) {
                        i = avatars[j].animations.bob;
                    }
                }
                i = i || avatar_animations.bob;
                k.pushAnimation(AvatarAnimation.getAnimation(i));
                k.next();
                k.start(h);
                this.current_dj = g;
                this.set_dj_points(g[4].points);
                this.spotlightOffset = this.djPropOffset(e, "spotlight");
                this.spotlightOffset.x -= this.djBoothOffset.x;
                this.spotlightOffset.y -= this.djBoothOffset.y;
            }
        },
        stop_active_dj: function() {
            if (this.current_dj) {
                this.current_dj[1].stop();
                this.current_dj[3].hide();
            }
        },
        loadingMessages: ["the bits are breeding", "go ahead - hold your breath", "at least you're not on hold", "we're testing your patience", "as if you had any other choice", "don't think of purple hippos", "follow the white rabbit", "reticulating splines", "frobulating widgets", "pc load letter"],
        loadingsong: function(e) {
            LOG("loadingsong");
            this.nosong();
            this.set_active_dj(e);
            this.$songboardArtist.text("Loading");
            this.$songboardTitle.text(this.loadingMessages[Math.floor(Math.random() * this.loadingMessages.length)]);
        },
        newsong: function(g, e, j, i, h) {
            LOG("newsong");
            e = util.cleanText(e);
            j = util.cleanText(j);
            turntable.current_artist = e;
            turntable.current_title = j;
            this.set_active_dj(g);
            var k = Date.now() / 1000,
            f = k + i;
            this.currentSong = {
                start: Date.now(),
                end: f,
                artist: e,
                title: j
            };
            this.update_songboard();
            this.$bigboard.addClass("song-playing");
            if (h === false) {
                this.$queueAdd.addClass("unavailable").find(".service-name").text("unavailable");
            } else {
                this.$queueAdd.removeClass("unavailable").find(".service-name").text("tt.fm queue");
            }
            if (ROOM_INTERVAL) {
                clearInterval(ROOM_INTERVAL);
            }
            ROOM_INTERVAL = setInterval(this.update_songboard, 1000);
        },
        nosong: function() {
            LOG("nosong");
            if (ROOM_INTERVAL) {
                clearInterval(ROOM_INTERVAL);
                ROOM_INTERVAL = null;
            }
            this.clear_marquees();
            $("#awesome-button").removeClass("selected");
            $("#lame-button").removeClass("selected");
            this.userLastVote = null;
            this.stop_active_dj();
            for (var e in this.listeners) {
                var g = this.listeners[e];
                if (g) {
                    g.stop();
                }
            }
            for (var e in this.djs) {
                var f = this.djs[e];
                if (f) {
                    f[0].stop();
                }
            }
            this.updateCrowdVotes(0);
            this.moveNeedle(0.5);
            delete this.spotlightOffset;
            delete this.currentSong;
            this.$songboardArtist.text("");
            this.$songboardTitle.text("");
            this.$bigboard.removeClass("song-playing");
        },
        resetVoteButtons: function(e) {
            var f = this.userLastVote;
            if (f === "up") {
                $("#awesome-button").addClass("selected");
                $("#lame-button").removeClass("selected");
            } else {
                if (f === "down") {
                    $("#awesome-button").removeClass("selected");
                    $("#lame-button").addClass("selected");
                } else {
                    $("#awesome-button").removeClass("selected");
                    $("#lame-button").removeClass("selected");
                }
            }
        },
        update_vote: function(f, h, j) {
            var e = f.userid,
            k = this.listeners[e],
            i = this.attributes.crowdControl;
            if (k) {
                if (h == "up") {
                    k.pushAnimation(AvatarAnimation.getAnimation(avatar_animations.rock));
                    k.next();
                    k.start(j);
                    i.setBopping(e, k.startTime);
                } else {
                    k.stop();
                }
            }
            var g = this.djs[e];
            if (g) {
                var k = g[0];
                if (h == "up") {
                    k.pushAnimation(AvatarAnimation.getAnimation(avatar_animations.smallrock));
                    k.next();
                    k.start(j);
                    i.setBopping(e, k.startTime);
                } else {
                    k.stop();
                }
            }
            if (e === turntable.user.id) {
                this.userLastVote = h;
                if (h === "up") {
                    $("#awesome-button").addClass("selected");
                    $("#lame-button").removeClass("selected");
                } else {
                    if (h === "down") {
                        $("#awesome-button").removeClass("selected");
                        $("#lame-button").addClass("selected");
                    }
                }
            }
        },
        update_songboard: function(e, k) {
            var g = Date.now() / 1000,
            i = this.currentSong;
            if (!i || g > i.end) {
                LOG("update songboard called with no song! or song expired..");
                this.nosong();
                this.$songboardArtist.text("");
                this.$songboardTitle.text("");
            } else {
                var j = turntable.ialIp;
                var l = util.prettyTime(Math.floor(j.currentSongEndTime - g)),
                f = util.prettyTime(Math.floor(g - j.currentSong.starttime)),
                h = Math.round(j.getCurrentSongProgress() * 100);
                e = e || i.artist;
                k = k || i.title;
                this.marquee("songboard-artist", 800, 12, e);
                this.marquee("songboard-title", 400, 27, k);
                this.$node.find("#time-since-start").text(f);
                this.$node.find("#time-left").text(l);
                this.$node.find("#progress").css("width", h + "%");
            }
        },
        showFloater: function(g, j) {
            $.fx.step.path = function(o) {
                var n = o.end.css(1 - o.pos);
                for (var m in n) {
                    o.elem.style[m] = n[m];
                }
            };
            var k = function(n) {
                var m = $(n).position();
                this.css = function(v) {
                    var u = Math.sin(v * 10);
                    var q = m.left + (1 - v) * u * 20;
                    var r = m.top + (1 - v) * -150;
                    var w = v * 5 - 1;
                    return {
                        top: r + "px",
                        left: q + "px",
                        opacity: w
                    };
                };
            };
            if (!g) {
                return;
            }
            var i = this.getDancerBoundingBox(g);
            if (!i) {
                return;
            }
            var h = util.createImageWithLoader(j),
            f = h[0],
            e = h[1],
            l = this;
            e.done(function() {
                var m = $(f).css({
                    position: "absolute",
                    top: i.top,
                    left: (i.left + i.right) / 2 - 10,
                    "z-index": 4
                }).appendTo(l.$node);
                m.animate({
                    path: new k(m)
                    }, 5000, function() {
                    m.remove();
                });
            });
        },
        showHeart: function(e) {
            this.showFloater(e, "https://s3.amazonaws.com/static.turntable.fm/images/room/heart.png");
        },
        showStar: function(e) {
            this.showFloater(e, "https://s3.amazonaws.com/static.turntable.fm/images/room/spinning_star.gif");
        },
        makeTooltip: function(m, k, j) {
            var l = turntable.ialIp.userMap[m];
            var n = "<br>" + util.commafy(l.points) + " DJ point" + (l.points == 1 ? "": "s") + "<br>" + util.commafy(l.fans || 0) + " fan" + (l.fans == 1 ? "": "s");
            var o = "<div class=\"option\" onclick=\"FhoeNwaAy.callback('become_fan','" + l.userid + "')\">Become a Fan</div>";
            var g = "<div class=\"option\" onclick=\"FhoeNwaAy.callback('remove_fan','" + l.userid + "')\">Unfan</div>";
            var s = "<div class=\"option\" onclick=\"FhoeNwaAy.callback('remove_dj','" + l.userid + "')\">Remove DJ</div>";
            var f = "<div class=\"option\" onclick=\"FhoeNwaAy.callback('boot_user','" + l.userid + "')\">Boot User</div>";
            var p = "<div class=\"option\" onclick=\"FhoeNwaAy.callback('add_moderator','" + l.userid + "')\">Make a Moderator</div>";
            var i = "<div class=\"option\" onclick=\"FhoeNwaAy.callback('rem_moderator','" + l.userid + "')\">Remove Moderator</div>";
            var e = '<div class="option" onclick="FhoeNwaAy.callback(\'stop_song\')">Skip My Song</div>';
            var r = '<div class="option" onclick="FhoeNwaAy.callback(\'rem_dj\')">Quit DJing</div>';
            var h = "<div class=\"option\" onclick=\"FhoeNwaAy.callback('pm_user','" + l.userid + "')\">Send Message</div>";
            var q = "" + n + "</div>";
            if (k) {
                if (l.userid == turntable.user.id) {
                    q += r;
                    if (FhoeNwaAy.current_dj && FhoeNwaAy.current_dj[0] == turntable.user.id) {
                        q += e;
                    }
                }
            }
            if (l.userid != turntable.user.id && turntable.ialIp.hasModPowers()) {
                if (turntable.user.acl >= l.acl) {
                    q += f;
                    if (turntable.ialIp.isMod(l.userid)) {
                        q += i;
                    } else {
                        q += p;
                    }
                }
                if (k) {
                    q += s;
                }
            }
            if (l.userid != turntable.user.id) {
                q += h;
                if (l.fanof) {
                    q += g;
                } else {
                    q += o;
                }
            }
            return '<div class="tooltip avatar-tipsy floating-menu ' + ((j) ? j: "") + '"><div class="option special" onclick="FhoeNwaAy.callback(\'profile\',\'' + l.userid + "')\"><b>" + util.safeText(l.name) + "</b>" + q + "</div>";
        },
        marquee: function(h, f, g, e) {
            this.marquee_texts[h] = e;
            this._marquee_helper(h, f, g);
        },
        _marquee_helper: function(k, f, h) {
            var j = $("#" + k);
            var i = 0;
            var e = this;
            if (this.marquee_texts[k].length < h) {
                j.text(this.marquee_texts[k]);
                return;
            }
            if (MARQUEE_INTERVALS[k]) {
                return;
            }
            function g() {
                var n = true;
                var l = e.marquee_texts[k];
                while (l[i] == " " || n) {
                    i += 1;
                    var n = false;
                }
                if (i == l.length) {
                    i = 0;
                }
                var m = l.substring(i) + " - " + l.substring(0, i - 1);
                j.text(m);
            }
            MARQUEE_INTERVALS[k] = setInterval(g, f);
            g();
        },
        clear_marquees: function() {
            for (var e in MARQUEE_INTERVALS) {
                if (MARQUEE_INTERVALS[e]) {
                    clearInterval(MARQUEE_INTERVALS[e]);
                    MARQUEE_INTERVALS[e] = null;
                }
            }
        },
        layouts: {
            welcomeViewOne: function(e) {
                return ["div.tour-overlay.step-1", {
                    data: {
                        positionFunction: e
                    }
                }, ["h3.header", "Welcome to Turntable!"], ["div.message", ["b", ["i", "This is you!"], " turntable.fm is a fun way to listen to music and play your favorite songs for your friends and strangers, in real-time, for free."], ], ["div.buttons", ["div.start"], ], ["div.avatar"], ["div.progress"]];
            },
            welcomeViewTwo: function(e) {
                return ["div.tour-overlay.step-2", {
                    data: {
                        positionFunction: e
                    }
                }, ["h3.header", ["div.icon"], "DJ music"], ["div.message", ["b", "DJ's play songs for everyone in the room. You can become one too and start earning DJ points!"]], ["div.buttons", ["div.back"], ["div.next"]], ["div.progress"]];
            },
            welcomeViewThree: function(e) {
                return ["div.tour-overlay.step-3", {
                    data: {
                        positionFunction: e
                    }
                }, ["h3.header", ["div.icon"], "Rate songs"], ["div.message", ["b", 'Like what you hear? Clicking the "thumbs up" will award the DJ a DJ point. Enough "Lame" votes and the song will be skipped.']], ["div.buttons", ["div.back"], ["div.next"]], ["div.icon"], ["div.progress"]];
            },
            welcomeViewFour: function(e) {
                return ["div.tour-overlay.step-4", {
                    data: {
                        positionFunction: e
                    }
                }, ["h3.header", "Chat"], ["div.message", ["b", "Show some love! You can talk to others in the room in real time."]], ["div.buttons", ["div.back"], ["div.next"]], ["div.icon"], ["div.progress"]];
            },
            welcomeViewFive: function(f, g) {
                f = (f === undefined) ? false: f;
                var e = ["div.tour-overlay.step-5", {
                    data: {
                        positionFunction: g
                    }
                }, ["h3.header", "Get Ready to DJ"], ["div.icon"]];
                if (f) {
                    e.push(["div.message", ["b", "Hold on a second! Before you can DJ you need to add some songs to your queue."]], ["div.buttons", ["div.ok"]]);
                } else {
                    e.push(["div.message", ["b", "Pick some songs to be played when it's your turn on deck."]], ["div.buttons", ["div.back"], ["div.done"]], ["div.progress"]);
                }
                return e;
            }
        }
    };
} ()); (function(H, G, F) {
    function B(b, h) {
        var g = G.createElement(b || "div"),
        f;
        for (f in h) {
            g[f] = h[f];
        }
        return g;
    }
    function A(e) {
        for (var d = 1, f = arguments.length; d < f; d++) {
            e.appendChild(arguments[d]);
        }
        return e;
    }
    function y(I, q, p, o) {
        var n = ["opacity", q, ~~ (I * 100), p, o].join("-"),
        m = 0.01 + p / o * 100,
        i = Math.max(1 - (1 - I) / q * (100 - m), I),
        f = C.substring(0, C.indexOf("Animation")).toLowerCase(),
        e = f && "-" + f + "-" || "";
        return D[n] || (z.insertRule("@" + e + "keyframes " + n + "{0%{opacity:" + i + "}" + m + "%{opacity:" + I + "}" + (m + 0.01) + "%{opacity:1}" + (m + q) % 100 + "%{opacity:" + I + "}100%{opacity:" + i + "}}", 0), D[n] = 1),
        n;
    }
    function x(d, c) {
        var j = d.style,
        i,
        h;
        if (j[c] !== F) {
            return c;
        }
        c = c.charAt(0).toUpperCase() + c.slice(1);
        for (h = 0; h < E.length; h++) {
            i = E[h] + c;
            if (j[i] !== F) {
                return i;
            }
        }
    }
    function w(e, d) {
        for (var f in d) {
            e.style[x(e, f) || f] = d[f];
        }
        return e;
    }
    function v(f) {
        for (var c = 1; c < arguments.length; c++) {
            var h = arguments[c];
            for (var g in h) {
                f[g] === F && (f[g] = h[g]);
            }
        }
        return f;
    }
    function u(d) {
        var c = {
            x: d.offsetLeft,
            y: d.offsetTop
        };
        while (d = d.offsetParent) {
            c.x += d.offsetLeft,
            c.y += d.offsetTop;
        }
        return c;
    }
    var E = ["webkit", "Moz", "ms", "O"],
    D = {},
    C,
    z = function() {
        var b = B("style");
        return A(G.getElementsByTagName("head")[0], b),
        b.sheet || b.styleSheet;
    } (),
    t = {
        lines: 12,
        length: 7,
        width: 5,
        radius: 10,
        rotate: 0,
        color: "#000",
        speed: 1,
        trail: 100,
        opacity: 0.25,
        fps: 20,
        zIndex: 2000000000,
        className: "spinner",
        top: "auto",
        left: "auto"
    },
    s = function r(b) {
        if (!this.spin) {
            return new r(b);
        }
        this.opts = v(b || {}, r.defaults, t);
    };
    s.defaults = {},
    v(s.prototype, {
        spin: function(Q) {
            this.stop();
            var P = this,
            O = P.opts,
            N = P.el = w(B(0, {
                className: O.className
            }), {
                position: "relative",
                zIndex: O.zIndex
            }),
            M = O.radius + O.length + O.width,
            L,
            K;
            Q && (Q.insertBefore(N, Q.firstChild || null), K = u(Q), L = u(N), w(N, {
                left: (O.left == "auto" ? K.x - L.x + (Q.offsetWidth >> 1) : O.left + M) + "px",
                top: (O.top == "auto" ? K.y - L.y + (Q.offsetHeight >> 1) : O.top + M) + "px"
            })),
            N.setAttribute("aria-role", "progressbar"),
            P.lines(N, P.opts);
            if (!C) {
                var J = 0,
                I = O.fps,
                n = I / O.speed,
                l = (1 - O.opacity) / (n * O.trail / 100),
                g = n / O.lines; ! function f() {
                    J++;
                    for (var b = O.lines; b; b--) {
                        var c = Math.max(1 - (J + b * g) % n * l, O.opacity);
                        P.opacity(N, O.lines - b, c, O);
                    }
                    P.timeout = P.el && setTimeout(f, ~~ (1000 / I));
                } ();
            }
            return P;
        },
        stop: function() {
            var b = this.el;
            return b && (clearTimeout(this.timeout), b.parentNode && b.parentNode.removeChild(b), this.el = F),
            this;
        },
        lines: function(g, f) {
            function h(b, c) {
                return w(B(), {
                    position: "absolute",
                    width: f.length + f.width + "px",
                    height: f.width + "px",
                    background: b,
                    boxShadow: c,
                    transformOrigin: "left",
                    transform: "rotate(" + ~~ (360 / f.lines * j + f.rotate) + "deg) translate(" + f.radius + "px,0)",
                    borderRadius: (f.width >> 1) + "px"
                });
            }
            var j = 0,
            i;
            for (; j < f.lines; j++) {
                i = w(B(), {
                    position: "absolute",
                    top: 1 + ~ (f.width / 2) + "px",
                    transform: f.hwaccel ? "translate3d(0,0,0)": "",
                    opacity: f.opacity,
                    animation: C && y(f.opacity, f.trail, j, f.lines) + " " + 1 / f.speed + "s linear infinite"
                }),
                f.shadow && A(i, w(h("#000", "0 0 4px #000"), {
                    top: "2px"
                })),
                A(g, A(i, h(f.color, "0 0 1px rgba(0,0,0,.1)")));
            }
            return g;
        },
        opacity: function(e, d, f) {
            d < e.childNodes.length && (e.childNodes[d].style.opacity = f);
        }
    }),
    !function() {
        function d(f, e) {
            return B("<" + f + ' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">', e);
        }
        var c = w(B("group"), {
            behavior: "url(#default#VML)"
        }); ! x(c, "transform") && c.adj ? (z.addRule(".spin-vml", "behavior:url(#default#VML)"), s.prototype.lines = function(I, q) {
            function n() {
                return w(d("group", {
                    coordsize: o + " " + o,
                    coordorigin: -p + " " + -p
                }), {
                    width: o,
                    height: o
                });
            }
            function a(f, j, i) {
                A(l, A(w(n(), {
                    rotation: 360 / q.lines * f + "deg",
                    left: ~~j
                }), A(w(d("roundrect", {
                    arcsize: 1
                }), {
                    width: p,
                    height: q.width,
                    left: q.radius,
                    top: -q.width >> 1,
                    filter: i
                }), d("fill", {
                    color: q.color,
                    opacity: q.opacity
                }), d("stroke", {
                    opacity: 0
                }))));
            }
            var p = q.length + q.width,
            o = 2 * p,
            m = -(q.width + q.length) * 2 + "px",
            l = w(n(), {
                position: "absolute",
                top: m,
                left: m
            }),
            h;
            if (q.shadow) {
                for (h = 1; h <= q.lines; h++) {
                    a(h, -2, "progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)");
                }
            }
            for (h = 1; h <= q.lines; h++) {
                a(h);
            }
            return A(I, l);
        }, s.prototype.opacity = function(g, f, j, i) {
            var h = g.firstChild;
            i = i.shadow && i.lines || 0,
            h && f + i < h.childNodes.length && (h = h.childNodes[f + i], h = h && h.firstChild, h = h && h.firstChild, h && (h.opacity = j));
        }) : C = x(c, "animation");
    } (),
    H.Spinner = s;
})(window, document);
turntableCommon = {
    getUser: function() {
        var a = {};
        a.id = util.getUrlParam("ui");
        a.auth = util.getUrlParam("ua");
        if (!a.id || !a.auth) {
            a.id = $.cookie("turntableUserId");
            a.auth = $.cookie("turntableUserAuth");
        }
        if (!a.id || !a.auth) {
            return null;
        }
        return a;
    },
    logout: function() {
        $.cookie("turntableUserId", null, {
            path: "/",
            expires: 0
        });
        $.cookie("turntableUserAuth", null, {
            path: "/",
            expires: 0
        });
        $.cookie("turntableUserNamed", null, {
            path: "/",
            expires: 0
        });
        var a = function() {
            window.location.replace("/");
        };
        if (FB && FB.getAuthResponse()) {
            FB.logout(a);
        } else {
            a();
        }
    }
};
var thost = window.location.host;
DEBUG_MODE = (thost != "turntable.fm" || $.sha1(location.hash) == "47381f2767629f64daa0d70c79d91baaeb702835");
DEMO_MODE = (location.pathname != "/lobby" && $.sha1(location.hash) == "1309dbac26cf64a7f1671c206230a3bf31229006");
var dmca = {
    showPreview: function(c) {
        var a = [];
        for (var b = 0; b < a.length;++b) {
            if (c.metadata.labelid == a[b]) {
                return false;
            }
        }
        return true;
    }
};
var httpStream = (function() {
    var a = null;
    var n = null;
    var q = null;
    var j = "stopped";
    var l = "";
    var h = null;
    function m(r) {
        if (q) {
            q(r);
        }
        if (r == "initialized") {
            if (a) {
                return;
            }
            LOG("HTTPSimpleStream initialized");
            a = $("#httpstream")[0];
            a.setVolume(String(httpStream.volume));
            if (n) {
                i();
            }
        } else {
            if (r == "streamstart") {
                l = "buffered";
            } else {
                if (r == "resync") {
                    l = "buffering";
                } else {
                    if (r == "streamfinish") {
                        j = "stopped";
                        l = "";
                        if (h) {
                            h();
                        }
                    }
                }
            }
        }
    }
    function e(r) {
        q = r;
    }
    function b(v, s, r, u, t) {
        n = {
            args: [v, s, r, Number(u)],
            time: util.now()
            };
        if (a) {
            i();
        }
        h = (t && t.onfinish);
    }
    function k() {
        n = null;
        j = "stopped";
        l = "";
        if (a) {
            a.closeStream("");
        }
    }
    function d(r) {
        httpStream.volume = r;
        if (a) {
            a.setVolume(String(r));
        }
    }
    function g() {
        return j == "playing";
    }
    function f() {
        return j;
    }
    function i() {
        var s = n;
        var r = util.now() - s.time;
        s[3] += r;
        s.time += r;
        a.loadStream(s.args.join(","));
        j = "playing";
        l = "buffering";
    }
    function o() {
        return Number(a.getPosition(""));
    }
    function p() {
        j = "paused";
        if (a) {
            a.pause("");
        }
    }
    function c(r) {
        j = "playing";
        if (a) {
            a.resume("");
        }
        h = (r && r.onfinish);
    }
    return {
        volume: 100,
        setVolume: d,
        callback: m,
        setCallback: e,
        loadStream: b,
        closeStream: k,
        isPlaying: g,
        getPosition: o,
        getPlayState: f,
        pause: p,
        play: c
    };
})();
HTTPSimpleStreamCallback = httpStream.callback;
WEB_SOCKET_SWF_LOCATION = "/static/web-socket-js/WebSocketMain.swf";
soundManager.url = "/static/soundmanager2/swf/soundmanager2_flash9.swf?20120527";
soundManager.audioFormats.mp4.required = false;
soundManager.consoleOnly = true;
soundManager.debugMode = false;
soundManager.debugFlash = false;
soundManager.flashVersion = 9;
soundManager.useFavIcon = false;
soundManager.useFlashBlock = true;
soundManager.useMovieStar = false;
if ($.browser.msie) {
    var version = util.detectIEVersion();
    if (!version || version < 9) {
        alert("Turntable.fm doesn't work too well in Internet Explorer right now. Join the party with Firefox, Chrome, or Safari!");
    }
}
var turntable = {
    ialIp: null,
    pendingCalls: [],
    deferreds: [],
    clientId: util.now() + "-" + Math.random(),
    clientTimeDelta: 0,
    eventListeners: {
        auth: [],
        avatarchange: [],
        message: [],
        messagefinish: [],
        reconnect: [],
        trackstart: [],
        trackfinish: [],
        unidle: [],
        userinfo: []
        },
    socket: null,
    socketVerbose: true,
    socketErrors: [],
    messageId: 0,
    currentSocketPort: 0,
    currentSocketServer: null,
    favorites: false,
    buddyList: false,
    presenceUpdateInterval: 10,
    syncServerClock: function() {
        turntable.updatePresence();
    },
    main: function() {
        turntable.avatarLoad = util.apiGet({
            api: "avatar.all"
        }, function(a) {
            avatars = a[1]["avatars"];
        });
        $("html").append(util.buildTree(["div#httpstream"]));
        httpStream.url = "/static/swf/HTTPSimpleStream.swf";
        swfobject.embedSWF(httpStream.url + "?" + util.now(), "httpstream", "1", "1", "10.1.0", null, {}, {
            bgcolor: "red"
        });
        turntable.loadTime = util.now();
        turntable.setSocketAddr(turntable.getHashedAddr(window.TURNTABLE_ROOM.roomid, window.TURNTABLE_ROOM.section));
        LOG("Initializing Facebook...");
        if (typeof(FB) != "undefined" && FB != null) {
            FB.init({
                appId: "127146244018710",
                status: true,
                cookie: false,
                xfbml: true
            });
        }
        turntable.user.init().done(function() {
            $(window).trigger("userInitDone");
            turntable.initFavorites();
            turntable.syncServerClock();
            turntable.playlist.init();
            $(window).bind("keydown", function(b) {
                if (b.keyCode == 8 && $.inArray(b.target.tagName.toLowerCase(), ["input", "textarea"]) == -1) {
                    b.preventDefault();
                }
            });
            if (window.history && window.history.pushState) {
                $(window).bind("popstate", function(b) {
                    if (util.now() - turntable.loadTime < 10 * 1000) {
                        return;
                    }
                    turntable.reloadPage(b.state || b.originalEvent.state || TURNTABLE_ROOM);
                });
            }
            turntable.reloadPage(TURNTABLE_ROOM);
            var a = util.getSetting("isUnavailable");
            turntable.isUnavailable = (a == "true") ? true: false;
            turntable.uMezpCDC();
            turntable.trackPresence();
            turntable.initBuddyPresencePolling();
            turntable.buddyList = new BuddyListPM(turntable.ialIp);
        });
        util.dobkUAXS(turntable);
        util.dobkUAXS(turntable.user);
    },
    socketsByPort: {},
    flushUnsentMessages: function() {
        for (var a = 0; a < turntable.unsentMessageCallbacks.length; a++) {
            turntable.unsentMessageCallbacks[a]();
        }
        turntable.unsentMessageCallbacks = [];
    },
    setSocketAddr: function(a) {
        LOG("Setting socket addr to " + a);
        if (a[0] == turntable.currentSocketServer && a[1] == turntable.currentSocketPort) {
            return;
        }
        turntable.socketKeepAlive(false);
        turntable.currentSocketServer = a[0];
        turntable.currentSocketPort = a[1];
        var b = function() {
            turntable.removeEventListener("messagefinish", b);
            if (turntable.socket) {
                LOG("Disconnecting " + turntable.socket.host);
                turntable.socket.removeListener("reconnect", turntable.socketReconnected);
                turntable.socket.send("disconnect");
                var c = turntable.socket;
                setTimeout(function() {
                    c.disconnect();
                }, 1000);
            }
            LOG("Switching to addr " + a);
            turntable.socket = new io.Socket(a[0], {
                port: a[1],
                transports: ["websocket", "flashsocket", "xhr-polling"],
                rememberTransport: false,
                connectTimeout: 5000
            });
            if (turntable.socket.transport.type == "websocket") {
                turntable.socket.transport.options.timeout = 25000;
            }
            turntable.connectionTimeout = setTimeout(function() {
                turntable.die("Could not connect to turntable. Please try again. If you still cannot connect, you might have a firewall blocking your connection. (" + a[1] + ")");
                turntable.connectionTimeout = null;
            }, 30000);
            turntable.socket.connect();
            turntable.socket.on("connect", turntable.socketConnected);
            turntable.socket.on("message", turntable.messageReceived);
            turntable.socket.on("reconnect", turntable.socketReconnected);
        };
        if (turntable.socket && turntable.socket.connected && turntable.numRecentPendingCalls(15) > 0) {
            turntable.addEventListener("messagefinish", b);
            LOG("There are " + turntable.pendingCalls.length + " pending calls on old socket! Waiting...");
        } else {
            LOG("No pending calls on old socket... setting up new socket");
            b();
        }
    },
    socketConnected: function() {
        if (turntable.connectionTimeout) {
            clearTimeout(turntable.connectionTimeout);
            turntable.connectionTimeout = null;
        }
        turntable.resetPresenceThrottle();
        turntable.syncServerClock();
        turntable.flushUnsentMessages();
        turntable.socket.removeListener("connect", turntable.socketConnected);
    },
    socketKeepAlive: function(a) {
        if (turntable.socketKeepAliveTimer) {
            clearTimeout(turntable.socketKeepAliveTimer);
            turntable.socketKeepAliveTimer = null;
        }
        if (a) {
            turntable.socketKeepAliveTimer = setTimeout(turntable.syncServerClock, 20000);
        }
    },
    socketLog: function(a) {
        while (turntable.socketErrors.length && turntable.socketErrors[0].time + 60000 < util.now()) {
            turntable.socketErrors.shift();
        }
        turntable.socketErrors.push({
            time: util.now(),
            msg: a
        });
    },
    socketDumpLog: function() {
        while (turntable.socketErrors.length && turntable.socketErrors[0].time + 60000 < util.now()) {
            turntable.socketErrors.shift();
        }
        if (util.now() < turntable.socketDumpLogLast + 60000) {
            return;
        }
        turntable.socketDumpLogLast = util.now();
        if (turntable.socketErrors.length) {
            var c = "";
            for (var a = 0; a < turntable.socketErrors.length; a++) {
                var b = turntable.socketErrors[a];
                c += Math.round((util.now() - b.time) / 100) / 10 + ":" + b.msg + ",";
            }
        }
    },
    isIdle: false,
    isUnavailable: false,
    uMezpCDC: function() {
        $(window).on("focus keydown mousemove mousedown", util.rateLimit(null, function() {
            turntable.xylGXkgo = util.now();
        }, 200));
        setTimeout(turntable.checkIdle, 1000);
        turntable.xylGXkgo = util.now();
    },
    idleTime: function() {
        return util.now() - turntable.xylGXkgo;
    },
    BXruhgG: function() {
        return util.now() - turntable.xylGXkgo;
    },
    checkIdle: function() {
        var a = turntable.BXruhgG();
        var c = (a > 3 * 60 * 1000);
        if (!turntable.isIdle && c) {
            for (var f in turntable.idleTimers) {
                var b = turntable.idleTimers[f];
                b.timeout = setTimeout(b.callback, Number(f) * 1000 - a);
            }
        } else {
            if (turntable.isIdle && !c) {
                for (var f in turntable.idleTimers) {
                    clearTimeout(turntable.idleTimers[f].timeout);
                }
                turntable.dispatchEvent("unidle");
                turntable.lastBuddyPresencePoll = 0;
                turntable.fetchBuddyPresence();
            }
        }
        turntable.isIdle = c;
        try {
            turntable.buddyList.updateMyStatus(turntable.currentStatus());
        } catch(d) {
            LOG(d);
        }
        setTimeout(turntable.checkIdle, 1000);
    },
    currentStatus: function() {
        if (turntable.isUnavailable) {
            return "unavailable";
        } else {
            return turntable.isIdle ? "away": "available";
        }
    },
    presenceTimer: null,
    trackPresence: function() {
        if (turntable.presenceTimer) {
            return;
        }
        turntable.presenceTimer = setInterval(turntable.updatePresence, turntable.presenceUpdateInterval * 1000);
    },
    updatePresence: function(a) {
        turntable.sendPresence(turntable.currentStatus(), a);
    },
    resetPresenceThrottle: function() {
        turntable.syncServerClockLast = 0;
    },
    sendPresence: function(b, d, c) {
        if (util.now() < turntable.syncServerClockLast + turntable.presenceUpdateInterval * 1000 && !c) {
            return;
        }
        turntable.syncServerClockLast = util.now();
        var a = util.now();
        turntable.hYkveeiflds({
            api: "presence.update",
            status: b
        }, function(f) {
            if (f.success) {
                var e = util.now();
                turntable.clientTimeDelta = (e + a) / 2000 - f.now;
                if (turntable.presenceUpdateInterval != f.interval) {
                    LOG("Resetting presence update interval");
                    turntable.presenceUpdateInterval = f.interval;
                    clearInterval(turntable.presenceTimer);
                    turntable.presenceTimer = null;
                    turntable.trackPresence();
                }
            }
            if (d && typeof(d) == "function") {
                d(f);
            }
        });
    },
    buddyPresenceTimer: null,
    initBuddyPresencePolling: function() {
        if (turntable.buddyPresenceTimer) {
            return;
        }
        turntable.buddyPresenceTimer = setInterval(turntable.fetchBuddyPresence, 60000);
    },
    lastBuddyPresencePoll: false,
    fetchBuddyPresence: function() {
        var a = new Date().getTime();
        if (!turntable.buddyList.allPMWindowsClosed() || !turntable.buddyList.isClosed()) {
            if (turntable.isIdle && turntable.lastBuddyPresencePoll && (a - turntable.lastBuddyPresencePoll < (10 * 60 * 1000) + 200)) {
                return;
            }
            turntable.hYkveeiflds({
                api: "room.directory_graph"
            }, function(b) {
                turntable.lastBuddyPresencePoll = new Date().getTime();
                try {
                    turntable.buddyList.updateBuddies(b);
                } catch(c) {
                    LOG(c);
                }
            });
        }
    },
    pingTimer: null,
    numPings: 0,
    socketReconnected: function() {
        turntable.socketLog("rc");
        LOG("socket reconnected?");
        if (turntable.pingTimer) {
            return;
        }
        turntable.numPings = 0;
        turntable.pingTimer = setInterval(turntable.pingSocket, 5000);
        turntable.pingSocket();
    },
    pingSocket: function() {
        turntable.resetPresenceThrottle();
        turntable.updatePresence(function(a) {
            if (a && a.success && turntable.pingTimer) {
                turntable.numPings = 0;
                clearInterval(turntable.pingTimer);
                turntable.pingTimer = null;
                turntable.dispatchEvent("reconnect");
            }
        });
        turntable.numPings += 1;
        if (turntable.numPings > 5) {
            clearInterval(turntable.pingTimer);
            turntable.pingTimer = null;
        }
    },
    closeSocket: function(a) {
        turntable.socket.send('{"api":"room.deregister","userid":"' + turntable.user.id + '","userauth":"' + turntable.user.auth + '","roomid":"' + (turntable.ialIp.roomId || "") + '","section":"' + (turntable.ialIp.section || "") + '"}');
    },
    addEventListener: function(b, c) {
        var a = turntable.eventListeners[b];
        ASSERT(a, "Unknown event '" + b + "'");
        if ($.inArray(c, a) == -1) {
            a.push(c);
        }
    },
    removeEventListener: function(c, d) {
        var b = turntable.eventListeners[c];
        ASSERT(b, "Unknown event " + c);
        var a = $.inArray(d, b);
        if (a != -1) {
            b.splice(a, 1);
        }
    },
    dispatchEvent: function(c) {
        args = [];
        for (var a = 1; a < arguments.length; a++) {
            args.push(arguments[a]);
        }
        var b = turntable.eventListeners[c];
        ASSERT(b, "Unknown event " + c);
        b = b.slice();
        for (var a = 0; a < b.length; a++) {
            b[a].apply(turntable, args);
        }
    },
    idleTimers: {},
    addIdleListener: function(a, c) {
        var b = turntable.idleTimers[String(a)];
        var d = a * 1000 - turntable.idleTime();
        if (!b) {
            b = {
                timeout: null,
                listeners: [c],
                callback: function() {
                    for (var e = 0; e < b.listeners.length; e++) {
                        b.listeners[e]();
                    }
                }
            };
            turntable.idleTimers[String(a)] = b;
            if (turntable.isIdle) {
                b.timeout = setTimeout(b.callback, d);
            }
        } else {
            if ($.inArray(c, b.listeners) == -1) {
                b.listeners.push(c);
                if (d <= 0) {
                    c();
                }
            }
        }
    },
    removeIdleListener: function(a, d) {
        var b = turntable.idleTimers[String(a)];
        var c = (b ? $.inArray(d, b.listeners) : -1);
        if (c != -1) {
            b.listeners.splice(c, 1);
        }
    },
    setPage: function(a, c, b, f) {
        var d = "/" + (a || b);
        if (window.history && window.history.pushState) {
            var e = {
                shortcut: a,
                roomid: b,
                section: f
            };
            window.history.pushState(e, d, d);
            this.reloadPage(e);
            document.title = "turntable: " + c;
        } else {
            window.location.href = d;
        }
    },
    reloadPage: function(a) {
        if (turntable.ialIp && turntable.ialIp.cleanup) {
            turntable.ialIp.cleanup();
        }
        $("#turntable").empty();
        LOG("Turntable page is empty");
        if (a && a.shortcut != "lobby" && a.roomid) {
            turntable.ialIp = new Room(a.roomid, a.section);
        } else {
            welcome.init();
            turntable.ialIp = welcome;
        }
        $("#turntable").append(turntable.ialIp.view);
        if (turntable.ialIp.onAddedToDOM) {
            turntable.ialIp.onAddedToDOM();
        }
    },
    initFavorites: function() {
        turntable.hYkveeiflds({
            api: "room.get_favorites"
        }, function(c) {
            if (c.success) {
                turntable.favorites = {};
                for (var b = 0, a = c.list.length; b < a; b++) {
                    turntable.favorites[c.list[b]] = true;
                }
                if (turntable.ialIp && "roomId" in turntable.ialIp && !turntable.ialIp.hasLoadedFavorites) {
                    turntable.ialIp.initFavorite();
                }
            }
        });
    },
    hashMod: function(e, b) {
        var d = $.sha1(e);
        var c = 0;
        for (var a = 0; a < d.length; a++) {
            c += d.charCodeAt(a);
        }
        return c % b;
    },
    getHashedAddr: function(b, c) {
        var a = b || String(Math.random());
        if (c) {
            a = a + "_" + c;
        }
        return CHATSERVER_ADDRS[turntable.hashMod(a, CHATSERVER_ADDRS.length)];
    },
    hYkveeiflds: function(c, a) {
        if (c.api == "room.now") {
            return;
        }
        c.msgid = turntable.messageId;
        c.client = "web";
        turntable.messageId += 1;
        c.clientid = turntable.clientId;
        if (turntable.user.id && !c.userid) {
            c.userid = turntable.user.id;
            c.userauth = turntable.user.auth;
        }
        var d = JSON.stringify(c);
        if (turntable.socketVerbose) {
            LOG(util.nowStr() + " Preparing message " + d);
        }
        var b = $.Deferred();
        turntable.whenSocketConnected(function() {
            if (turntable.socketVerbose) {
                LOG(util.nowStr() + " Sending message " + c.msgid + " to " + turntable.socket.host);
            }
            if (turntable.socket.transport.type == "websocket") {
                turntable.socketLog(turntable.socket.transport.sockets[0].id + ":<" + c.msgid);
            }
            turntable.socket.send(d);
            turntable.socketKeepAlive(true);
            turntable.pendingCalls.push({
                msgid: c.msgid,
                handler: a,
                deferred: b,
                time: util.now()
                });
        });
        return b.promise();
    },
    numRecentPendingCalls: function(a) {
        var c = util.now();
        var b = 0;
        for (var d = 0; d < turntable.pendingCalls.length; d++) {
            if (c - turntable.pendingCalls[d].time < a * 1000) {
                b += 1;
            }
        }
        return b;
    },
    unsentMessageCallbacks: [],
    whenSocketConnected: function(a) {
        if (turntable.socket.connected && turntable.socket.host == turntable.currentSocketServer && turntable.socket.options.port == turntable.currentSocketPort) {
            a();
        } else {
            turntable.unsentMessageCallbacks.push(a);
        }
    },
    messageReceived: function(b) {
        if (window.DEBUG_MODE) {
            turntable._messageReceived(b);
        } else {
            try {
                turntable._messageReceived(b);
            } catch(a) {
                LOG("Exception in MessageReceived");
                LOG(a);
            }
        }
    },
    _messageReceived: function(d) {
        if (turntable.socketVerbose) {
            LOG(util.nowStr() + " Received: " + d);
        }
        if (d == "no_session") {
            return;
        } else {
            d = JSON.parse(d);
        }
        if (d.command == "killdashnine") {
            var a = turntable.ialIp;
            if (util.notEmpty(d.roomid, d.section, a.roomId, a.section) && (a.roomId != d.roomid || a.section != d.section)) {
                return;
            }
            turntable.socket.disconnect();
            turntable.socket = null;
            var c = d.msg || "This session has been disconnected because you signed on from another location. Refresh this page if you want to continue.";
            turntable.die(c);
            return;
        }
        turntable.dispatchEvent("message", d);
        if (turntable.socket.transport.type == "websocket") {
            turntable.socketLog(turntable.socket.transport.sockets[0].id + ":>" + (d.hasOwnProperty("msgid") ? d.msgid: (d.command || "?")));
        }
        if (d.hasOwnProperty("msgid")) {
            ASSERT(d.msgid < turntable.messageId, "Future msg " + JSON.stringify(d));
            var g = turntable.pendingCalls.length;
            var f = false;
            for (var e = 0; e < g; e++) {
                var j = turntable.pendingCalls[e];
                if (j.msgid == d.msgid) {
                    var h = j.handler;
                    var k = j.deferred;
                    if (h) {
                        h(d);
                    } (d.success ? k.resolve: k.reject)(d);
                    var b = util.now();
                    if (b - turntable.loadTime > 60 * 1000 && b - j.time > 10 * 1000) {
                        turntable.socketDumpLog();
                    }
                    turntable.pendingCalls.splice(e, 1);
                    f = true;
                    break;
                }
            }
            if (!f) {
                LOG("Unexpected msg " + JSON.stringify(d));
            } else {
                if (turntable.pendingCalls.length == 0) {
                    turntable.dispatchEvent("messagefinish");
                }
            }
        }
    },
    logMessage: function(c) {
        if (turntable.pendingLogMessage) {
            turntable.pendingLogMessage = c;
            return;
        }
        var a = (turntable.lastLogPacket || 0) + 5000 - util.now();
        if (a <= 0) {
            var b = navigator.userAgent.substr(navigator.userAgent.lastIndexOf(")") + 2);
            turntable.hYkveeiflds({
                api: "room.log",
                error: "v3 " + b + " " + c
            });
            turntable.lastLogPacket = util.now();
            return;
        }
        turntable.pendingLogMessage = c;
        setTimeout(function() {
            turntable.hYkveeiflds({
                api: "room.log",
                error: turntable.pendingLogMessage
            });
            turntable.pendingLogMessage = null;
            turntable.lastLogPacket = util.now();
        }, a);
    },
    randomRoom: function() {
        turntable.hYkveeiflds({
            api: "room.random_room"
        }, function(a) {
            turntable.setPage(a.room.shortcut, a.room.name, a.room.roomid);
        });
    },
    die: function(a) {
        turntable.showAlert(a);
    },
    showAlert: function(c, d) {
        var a = {};
        var b = {
            closeCallback: d,
            showCancel: false
        };
        util.buildTree([ActionModal, b, ["div.alert-message", c]], a);
        a.modal.show();
    },
    serverNow: function() {
        return util.now() / 1000 - turntable.clientTimeDelta;
    },
    seedPRNG: function(a) {
        return function() {
            var c = a;
            var b = 9001;
            return {
                random: function() {
                    if (b + 4 > c.length) {
                        c = $.sha1(c);
                        b = 0;
                    }
                    var d = c.substr(b, 4);
                    b += 4;
                    return (parseInt(d, 16) + 1) / 65537;
                }
            };
        } ();
    }
};
var turntablePlayer = {
    initDeferred: $.Deferred(),
    volume: 3,
    ephemeralCache: {},
    oyNlLWRCMd: false,
    init: function() {
        turntablePlayer.initDeferred.resolve();
    },
    FTkXUmn: function(a) {
        turntablePlayer.oyNlLWRCMd = a;
        turntablePlayer.setVolume(turntablePlayer.volume);
    },
    setVolume: function(b) {
        if (b != turntablePlayer.volume) {
            turntablePlayer.volume = b;
            if (turntablePlayer.previewSound && b) {
                turntablePlayer.previewSound.setVolume(turntablePlayer.realVolume(b));
            }
            if (b > 0) {
                util.setSetting("volume", b);
            }
        }
        var a = turntablePlayer.realVolume(turntablePlayer.calculatedBarsVolume());
        httpStream.setVolume(a);
    },
    realVolume: function(a) {
        return (a > 0 ? 100 * Math.pow(2, a - 4) : 0);
    },
    barsVolume: function(a) {
        return (a > 0 ? Math.max(0, Math.log(a / 100) / Math.LN2 + 4) : 0);
    },
    calculatedBarsVolume: function() {
        if (turntablePlayer.previewSound || turntablePlayer.oyNlLWRCMd) {
            return 0;
        }
        return turntablePlayer.volume;
    },
    samplePlay: function(a, b) {
        if (turntablePlayer.previewTimer) {
            clearTimeout(turntablePlayer.previewTimer);
            clearInterval(turntablePlayer.previewProgressTimer);
            turntablePlayer.previewCallback("stop");
        }
        turntablePlayer.previewTimer = setTimeout(turntablePlayer.sampleStop, 30000);
        turntablePlayer.previewProgressTimer = setInterval(turntablePlayer.sampleUpdateProgress, 100);
        turntablePlayer.initDeferred.done(function() {
            turntablePlayer.fade(httpStream, 0);
            if (turntablePlayer.previewSound) {
                turntablePlayer.fade(turntablePlayer.previewSound, 0).done(function(e) {
                    e.destruct();
                });
            }
            var c = window.location.protocol + "//" + MEDIA_HOST + "/previewfile/?fileid=" + a;
            turntablePlayer.previewSound = soundManager.createSound({
                id: "preview" + a,
                url: c
            });
            turntablePlayer.previewSound.play();
            var d = turntablePlayer.realVolume(turntablePlayer.volume || 3);
            turntablePlayer.previewSound.setVolume(d);
        });
        turntablePlayer.previewCallback = b;
    },
    sampleUpdateProgress: function() {
        try {
            var a = (Number(turntablePlayer.previewSound.position) / 27000 * 100) + "%";
            turntablePlayer.previewCallback("progress", a);
        } catch(b) {}
    },
    sampleStop: function() {
        if (turntablePlayer.previewTimer) {
            clearTimeout(turntablePlayer.previewTimer);
            clearInterval(turntablePlayer.previewProgressTimer);
            turntablePlayer.previewTimer = null;
            turntablePlayer.previewProgressTimer = null;
            if (turntablePlayer.previewSound) {
                turntablePlayer.fade(turntablePlayer.previewSound, 0).done(function(a) {
                    a.destruct();
                });
                turntablePlayer.previewSound = null;
            }
            turntablePlayer.fade(httpStream, turntablePlayer.calculatedBarsVolume());
        }
        if (turntablePlayer.previewCallback) {
            turntablePlayer.previewCallback("stop");
            turntablePlayer.previewCallback = null;
        }
    },
    fade: function(g, a, f) {
        var b = $.Deferred();
        if (!f || typeof f != "number") {
            f = 1.5;
        }
        var e = turntablePlayer.barsVolume(g.volume);
        var d = a - e;
        var c = util.now();
        var h = setInterval(function() {
            var i = (util.now() - c) / (1000 * f);
            if (i < 1) {
                g.setVolume(turntablePlayer.realVolume(e + i * d));
            } else {
                g.setVolume(turntablePlayer.realVolume(a));
                clearInterval(h);
                b.resolve(g);
            }
        }, 100);
        return b.promise();
    },
    playEphemeral: function(b, a) {
        turntablePlayer.initDeferred.done(function() {
            turntablePlayer.loadEphemeralUrl(b, a);
        });
    },
    loadEphemeralUrl: function(b, a) {
        var d = null;
        if (a) {
            d = turntablePlayer.ephemeralCache[b];
        }
        if (d) {
            if (d.playState) {
                d.setPosition(0);
                return;
            }
        } else {
            var c = {
                id: "ephemeral" + util.now(),
                url: b
            };
            if (!a) {
                c.onfinish = function() {
                    this.destruct();
                };
            }
            d = soundManager.createSound(c);
            if (a) {
                turntablePlayer.ephemeralCache[b] = d;
            }
        }
        d.setVolume(turntablePlayer.realVolume(turntablePlayer.volume));
        d.play();
    }
};
$(document).ready(turntable.main);
soundManager.onready(turntablePlayer.init);
$(window).on("beforeunload unload", turntable.closeSocket);
turntable.sticker = (function() {
    var a = {
        ZOOM_VIEW_RADIUS: 80,
        ZOOM_RATIO: 0.5,
        DJ_RATIO: 0.11,
        CORNER_DRAG_RADIUS: 20,
        STICKER_PREFIX: "https://s3.amazonaws.com/static.turntable.fm/roommanager_assets/stickers/",
        IMAGE_PREFIX: "https://s3.amazonaws.com/static.turntable.fm/roommanager_assets/props/",
        LAPTOP_WIDTH: 564,
        LAPTOP_HEIGHT: 381,
        SCREEN_WIDTH: 502,
        SCREEN_HEIGHT: 325,
        SCREEN_CORNER_RADIUS: 23,
        SCREEN_OFFSET_X: 34,
        SCREEN_OFFSET_Y: 0,
        MAX_PLACEMENTS: 20,
        PICKER_STICKER_WIDTH: 130,
        UNPURCHASED_STICKER_OPACITY: 0.5,
        $zoomView: null,
        context: null,
        tempCanvas: null,
        tempContext: null,
        hoverUserid: null,
        updateZoomCanvas: null,
        $boundingBox: null,
        stickerMap: {},
        stickersLoaded: false,
        stickersLoad: null,
        stickerPlacements: {},
        images: {},
        imagesLoaded: false,
        imagesLoad: null,
        numPlacements: 0,
        };
    a.init = function() {
        turntable.addEventListener("message", a.messageHandler);
        $(document).on("add_sticker_placements", a.addStickerPlacements);
        $(document).on("drawDjLaptop", a.drawDjStickerPlacements);
        a.cacheImages();
        a.cacheStickers();
        a.initZoomView();
    };
    a.initZoomView = function() {
        var e = util.buildTree(a.layouts.zoomView);
        $("#maindiv").append(e);
        a.$zoomView = $(e);
        var c = $("#zoomCanvas")[0];
        var b = a.ZOOM_VIEW_RADIUS;
        c.width = b * 2;
        c.height = b * 2;
        var d = c.getContext("2d");
        a.context = d;
        d.beginPath();
        d.arc(b, b, b, 0, Math.PI * 2, false);
        d.clip();
        a.tempCanvas = util.buildTree(["canvas", {
            width: a.LAPTOP_WIDTH + 2 * a.ZOOM_VIEW_RADIUS,
            height: a.LAPTOP_HEIGHT + 2 * a.ZOOM_VIEW_RADIUS,
            }]);
        a.tempContext = a.tempCanvas.getContext("2d");
    };
    a.cacheImages = function() {
        var l = [];
        var f;
        var g = ["mac", "pc", "linux", "chrome"];
        var e = ["screen", "mask", "laptop"];
        var m = g.length;
        var d = e.length;
        for (var c = 0; c < d; c++) {
            var h = e[c];
            a.images[h] = {};
            if (h == "mask") {
                f = util.createImageWithLoader(a.IMAGE_PREFIX + "mask_mac_full.png");
                a.images.mask.mac = f[0];
                l.push(f[1]);
                f = util.createImageWithLoader(a.IMAGE_PREFIX + "mask_pc_full.png");
                a.images.mask.pc = f[0];
                l.push(f[1]);
                continue;
            }
            for (var b = 0; b < m; b++) {
                var k = g[b];
                f = util.createImageWithLoader(a.IMAGE_PREFIX + h + "_" + k + "_full.png");
                a.images[h][k] = f[0];
                l.push(f[1]);
            }
        }
        f = util.createImageWithLoader(a.IMAGE_PREFIX + "wallpaper_full.png");
        a.images.wallpaper = f[0];
        l.push(f[1]);
        a.imagesLoaded = false;
        a.imagesLoad = $.when.apply(this, l);
        a.imagesLoad.done(function() {
            a.imagesLoaded = true;
        });
    };
    a.cacheStickers = function(b) {
        turntable.hYkveeiflds({
            api: "sticker.get"
        }, function(e) {
            var d;
            var c = [];
            $.each(e.stickers, function() {
                var g = this;
                var f = false;
                if (g._id in a.stickerMap) {
                    $.extend(a.stickerMap[g._id], g);
                    if (a.stickerMap[g._id].path == g.path && a.stickerMap[g._id].image) {
                        f = true;
                    }
                } else {
                    a.stickerMap[g._id] = g;
                }
                if (!f) {
                    d = util.createImageWithLoader(a.STICKER_PREFIX + g.path + ".png");
                    a.stickerMap[g._id].image = d[0];
                    c.push(d[1]);
                    a.stickerMap[g._id].smallImage = util.buildTree(["img", {
                        src: (a.STICKER_PREFIX + g.path + "_small.png")
                        }]);
                }
            });
            a.stickersLoaded = false;
            a.stickersLoad = $.when.apply(this, c);
            a.stickersLoad.done(function() {
                a.stickersLoaded = true;
                if (b != undefined) {
                    b(e);
                }
            });
        });
    };
    a.messageHandler = function(b) {
        if (b.hasOwnProperty("msgid") || b.command == undefined || !(b.command in a.messageHandlers)) {
            return;
        }
        a.messageHandlers[b.command](b);
    };
    a.messageHandlers = {
        add_dj: function(c) {
            var b = c.user[0].userid;
            a.stickerPlacements[b] = c.placements;
        },
        rem_dj: function(c) {
            var b = c.user[0].userid;
            if (b == a.hoverUserid) {
                a.djLaptopLeave();
            }
        },
        update_sticker_placements: function(c) {
            var b = c.userid;
            a.stickerPlacements[b] = c.placements;
            a.updateDjStickerPlacements(b);
        },
        };
    a.addStickerPlacements = function(b, c) {
        $.each(c, function(e, d) {
            a.stickerPlacements[e] = d;
        });
    };
    a.drawDjStickerPlacements = function(c, g, b, f, k) {
        if (turntable.ialIp.users[g].laptop in {
            iphone: 1,
            android: 1
        }) {
            return;
        }
        if (!a.stickersLoaded) {
            a.stickersLoad.done(function() {
                a.drawDjStickerPlacements(c, g, b, f);
            });
            return;
        }
        if (!k) {
            k = $(".dj-laptop[data-userid=" + g + "]");
        }
        var h = turntable.ialIp.users[g].laptop === "mac",
        j = 0,
        e = 0;
        if (f < 0.1) {
            j = h ? "3px": "1px";
            e = "3px";
        } else {
            if (f < 0.2) {
                j = h ? "4px": 0;
                e = "5px";
            }
        }
        var i = $(util.buildTree(["canvas.laptopCanvas", {
            width: b.x,
            height: b.y,
            data: {
                userid: g
            },
            style: {
                position: "absolute",
                top: j,
                left: e
            }
        }])).appendTo(k);
        var d = i[0].getContext("2d");
        a.drawStickerPlacementsCanvas(g, d, f);
    };
    a.updateDjStickerPlacements = function(b) {
        if (turntable.ialIp.users[b].laptop in {
            iphone: 1,
            android: 1
        }) {
            return;
        }
        var e = $(".dj-laptop[data-userid=" + b + "]");
        if (e.length != 1) {
            return;
        }
        var d = e.find("canvas");
        if (d.length != 1) {
            LOG("Canvas for DJ's laptop not found: " + b);
        }
        var c = d[0].getContext("2d");
        c.clearRect(0, 0, a.SCREEN_WIDTH, a.SCREEN_HEIGHT);
        a.drawStickerPlacementsCanvas(b, c, a.DJ_RATIO);
    };
    a.drawStickerCSS = function(d) {
        if (! (d in this.stickerMap)) {
            return null;
        }
        var b = this.stickerMap[d];
        var c = util.buildTree(this.layouts.sticker);
        c.style.background = "url(" + b.image.src + ")";
        c.style.height = b.image.height + "px";
        c.style.width = b.image.width + "px";
        return c;
    };
    a.drawStickerPlacementCSS = function(f, c) {
        var e = a.drawStickerCSS(c.sticker_id);
        if (!e) {
            return false;
        }
        var b = $(e);
        var d = a.stickerMap[c.sticker_id];
        if (d.price && !d.purchased) {
            b.css("opacity", a.UNPURCHASED_STICKER_OPACITY);
        }
        var g = "rotate(" + c.angle + "deg)";
        b.css({
            top: c.top + "px",
            left: c.left + "px",
            transform: g
        });
        $.data(e, c);
        f.append(e);
        a.numPlacements++;
        a.updateSlotCount();
    };
    a.drawStickerPlacementsCanvas = function(m, b, f, j, p) {
        b.save();
        if (f) {
            b.scale(f, f);
        }
        if (j) {
            b.translate(j.x, j.y);
        }
        b.beginPath();
        b.moveTo(a.SCREEN_CORNER_RADIUS, 0);
        b.arcTo(a.SCREEN_WIDTH, 0, a.SCREEN_WIDTH, a.SCREEN_HEIGHT, a.SCREEN_CORNER_RADIUS);
        b.arcTo(a.SCREEN_WIDTH, a.SCREEN_HEIGHT, 0, a.SCREEN_HEIGHT, a.SCREEN_CORNER_RADIUS);
        b.arcTo(0, a.SCREEN_HEIGHT, 0, 0, a.SCREEN_CORNER_RADIUS);
        b.arcTo(0, 0, a.SCREEN_WIDTH, 0, a.SCREEN_CORNER_RADIUS);
        b.clip();
        var o = a.stickerPlacements[m];
        var q = o.length;
        for (var l = 0; l < q; l++) {
            var h = o[l];
            if (!a.stickerMap.hasOwnProperty(h.sticker_id)) {
                if (!p) {
                    b.restore();
                    a.cacheStickers(function() {
                        a.drawStickerPlacementsCanvas(m, b, f, j, true);
                    });
                    return;
                } else {
                    continue;
                }
            }
            var e = a.stickerMap[h.sticker_id];
            var k = e.image.width / 2;
            var n = e.image.height / 2;
            var g = h.left + k;
            var d = h.top + n;
            b.save();
            b.translate(g, d);
            b.rotate(h.angle * Math.PI / 180);
            var c = e.image;
            if (f < 0.2) {
                c = e.smallImage;
            }
            b.drawImage(c, k * -1, n * -1, e.image.width, e.image.height);
            b.restore();
        }
        b.restore();
    };
    a.drawLaptopCanvas = function(b, d, e, c) {
        if (!c) {
            c = turntable.ialIp.users[b].laptop;
        }
        if (c in {
            iphone: 1,
            android: 1
        }) {
            return;
        }
        d.save();
        d.scale(e, e);
        d.drawImage(a.images.laptop[c], 0, 0);
        d.restore();
        offset = {
            x: a.SCREEN_OFFSET_X,
            y: a.SCREEN_OFFSET_Y
        };
        a.drawStickerPlacementsCanvas(b, d, e, offset);
    };
    a.djLaptopEnter = function(c) {
        var d = $(this);
        var b = d.data("userid");
        a.replaceUpdateZoomCanvas(d, b);
        a.djLaptopHover(c);
        a.$zoomView.show();
    };
    a.djLaptopHover = function(b) {
        a.$zoomView.css({
            top: b.pageY + 10,
            left: b.pageX - a.ZOOM_VIEW_RADIUS,
            });
        a.updateZoomCanvas(b);
    };
    a.djLaptopLeave = function(b) {
        a.$zoomView.hide();
    };
    a.replaceUpdateZoomCanvas = function(i, g) {
        var h = i.offset();
        var f = turntable.ialIp.users[g].laptop;
        var j = a.images.laptop[f];
        var c = this.context;
        var d = a.SCREEN_HEIGHT * a.ZOOM_RATIO - a.ZOOM_VIEW_RADIUS + 22;
        var e = a.ZOOM_VIEW_RADIUS - 8;
        var b = a.tempContext;
        b.drawImage(a.images.wallpaper, 0, 0);
        b.save();
        b.translate(a.ZOOM_VIEW_RADIUS, a.ZOOM_VIEW_RADIUS);
        a.drawLaptopCanvas(g, b, a.ZOOM_RATIO);
        b.restore();
        a.updateZoomCanvas = function(m) {
            var p = (m.pageX - h.left) / i.width();
            var l = (m.pageY - h.top) / i.height();
            var o = a.SCREEN_WIDTH * a.ZOOM_RATIO * p;
            var n = Math.max(Math.min(a.SCREEN_HEIGHT * a.ZOOM_RATIO * l, d), e);
            var k = -o - a.SCREEN_OFFSET_X * a.ZOOM_RATIO;
            var q = -n - a.SCREEN_OFFSET_Y * a.ZOOM_RATIO;
            c.drawImage(a.tempCanvas, k, q);
        };
    };
    a.showEditor = function() {
        a.cacheStickers(function(e) {
            a.stickerPickerEventHandlersSet = false;
            util.buildTree(a.layouts.editView, a);
            var d = a.modal.$node;
            a.$laptopView = a.modal.$node.find("#laptopView");
            turntable.hYkveeiflds({
                api: "sticker.get_placements"
            }, function(f) {
                $.each(f.placements, function() {
                    a.drawStickerPlacementCSS(a.$laptopView, this);
                });
                a.refreshPurchaseData();
                a.modal.show();
            });
            a.modal.$node.find("#remainingNumber").text(a.MAX_PLACEMENTS);
            a.numPlacements = 0;
            var c = turntable.user.laptop;
            d.find("#laptopScreen").css("background", "url(" + a.images.screen[c].src + ")");
            if (c != "mac") {
                c = "pc";
            }
            d.find("#laptopMask").css("background", "url(" + a.images.mask[c].src + ") bottom left");
            var b = util.buildTree(a.layouts.boundingBox);
            a.$boundingBox = $(b);
            d.find("#laptopScreen").append(b);
            a.addLaptopViewListeners();
            a.$boundingBox.on("mouseup", "#boundingBoxX", a.removeCurrentSticker);
            d.find("#stickerSaveButton").click(a.save);
            a.$laptopView.on("dragover", a.stickerDragOver).on("dragenter", a.stickerDragOver).on("drop", a.stickerDrop);
        });
    };
    a.refreshPurchaseData = function() {
        turntable.hYkveeiflds({
            api: "sticker.get_purchased_stickers"
        }, function(c) {
            for (stickerid in a.stickerMap) {
                if (a.stickerMap.hasOwnProperty(stickerid)) {
                    a.stickerMap[stickerid].purchased = false;
                }
            }
            var f = c.stickers;
            var b = f.length;
            for (var d = 0; d < b; d++) {
                var e = a.stickerMap[f[d].sticker_id];
                e.purchased = true;
            }
            a.initStickerPicker();
            a.checkForUnpurchasedStickers();
            a.modal.$node.find("#laptopView").find(".sticker").each(function(h) {
                var g = $(this);
                var i = $.data(this, "sticker_id");
                var j = a.stickerMap[i];
                if (j.price) {
                    if (j.purchased) {
                        g.css("opacity", "");
                    } else {
                        g.css("opacity", a.UNPURCHASED_STICKER_OPACITY);
                    }
                }
            });
        });
    };
    a.initStickerPicker = function() {
        var e = a.modal.$node.find("#picker");
        var c = 0;
        var f = e.find("#stickerList").empty();
        $.each(a.stickerMap, function(o, g) {
            if (g.state != "active") {
                return;
            }
            c += 1;
            var k = util.buildTree(a.layouts.sticker);
            var p = $(k);
            var i = util.buildTree(["div.stickerImage"]);
            var h = $(i);
            $.data(k, g);
            p.attr("draggable", "true");
            h.css({
                "background-image": "url(" + g.image.src + ")"
            });
            if (g.image.height < 100 && g.image.width < 100) {
                h.css("background-size", "auto");
            }
            var l = util.buildTree(a.layouts.stickerContainer);
            var n = $(l);
            n.prepend(i).prepend(k).find(".stickerName").text(g.name);
            var j = false;
            var q = n.find(".priceInfo");
            if (g.price == 0) {
                j = true;
            } else {
                if (g.purchased) {
                    q.text("Purchased");
                } else {
                    var m = g.price.toString();
                    m = "$" + m.slice(0, -2) + "." + m.slice( - 2);
                    q.text(m);
                }
            }
            f.append(l);
        });
        f.css({
            width: c * a.PICKER_STICKER_WIDTH,
            left: 0
        });
        a.numPages = Math.ceil(c / 4);
        a.currentPage = 0;
        var b = e.find("#stickerListScrollLeft");
        var d = e.find("#stickerListScrollRight");
        b.addClass("inactive");
        if (a.numPages > 1) {
            d.addClass("active");
        } else {
            d.addClass("inactive");
        }
        if (!a.stickerPickerEventHandlersSet) {
            b.click(a.stickerListScrollLeft);
            d.click(a.stickerListScrollRight);
            a.stickerPickerEventHandlersSet = true;
            f.on("dragstart", ".sticker", a.stickerDragStart);
        }
    };
    a.stickerListScrollLeft = function() {
        if (a.currentPage > 0) {
            if (a.currentPage == a.numPages - 1) {
                $("#stickerListScrollRight").removeClass("inactive").addClass("active");
            }
            a.currentPage--;
            $("#stickerList").css({
                left: -a.currentPage * a.PICKER_STICKER_WIDTH * 4
            });
            if (a.currentPage == 0) {
                $("#stickerListScrollLeft").removeClass("active").addClass("inactive");
            }
        }
    };
    a.stickerListScrollRight = function() {
        if (a.currentPage < a.numPages - 1) {
            if (a.currentPage == 0) {
                $("#stickerListScrollLeft").removeClass("inactive").addClass("active");
            }
            a.currentPage++;
            $("#stickerList").css({
                left: -a.currentPage * a.PICKER_STICKER_WIDTH * 4
            });
            if (a.currentPage == a.numPages - 1) {
                $("#stickerListScrollRight").removeClass("active").addClass("inactive");
            }
        }
    };
    a.save = function() {
        var b = a.getUnpurchasedStickers();
        if (b.length) {
            a.modal.hide({
                showLoadingTransition: true
            });
            turntable.payment.makePaymentModal(b, $.proxy(a.purchaseCallback, a), $.proxy(a.cancelCallback, a));
            return false;
        }
        var c = $.map($("#laptopView").find(".sticker"), function(d) {
            return $.data(d);
        });
        turntable.hYkveeiflds({
            api: "sticker.place",
            placements: c,
            is_dj: turntable.ialIp.isDj(),
            roomid: turntable.ialIp.roomId,
            section: turntable.ialIp.section
        }, function(d) {
            if (d.success) {
                a.modal.close();
            } else {
                if (d.err.indexOf("limit") != 1) {
                    a.modal.showAlert("You've passed the sticker limit. Please remove some and try saving again.");
                } else {
                    if (d.err.indexOf("unpurchased") != 1) {
                        a.modal.showAlert("You must purchase the paid stickers.");
                    } else {
                        a.modal.showAlert("Sorry, there was an error saving your stickers. Please try again.");
                    }
                }
            }
        });
        return false;
    };
    a.removeCurrentSticker = function() {
        $(a.currentSticker).remove();
        a.numPlacements--;
        a.updateSlotCount();
        a.checkForUnpurchasedStickers();
    };
    a.updateSlotCount = function() {
        var b = a.MAX_PLACEMENTS - a.numPlacements;
        a.modal.$node.find("#remainingNumber").text(b);
        var c = a.modal.$node.find("#picker .sticker");
        if (b == 0) {
            c.addClass("inactive").removeAttr("draggable");
        } else {
            if (b == 1) {
                c.removeClass("inactive").attr("draggable", "true");
            }
        }
    };
    a.getOffsetFromTarget = function(c, b) {
        var d;
        if (b) {
            d = b.offset();
        } else {
            d = $(c.target).offset();
        }
        return {
            x: c.originalEvent.pageX - d.left,
            y: c.originalEvent.pageY - d.top
        };
    };
    a.stickerDragStart = function(d) {
        var g = $(this).parent();
        d.originalEvent.dataTransfer.effectAllowed = "copyMove";
        var f = a.getOffsetFromTarget(d);
        var c = $.data(this);
        var b = f.x / g.width() * c.image.width;
        var h = f.y / g.height() * c.image.height;
        var e = ['{"sticker_id": "', c._id, '"', ', "offsetX": ', b, ', "offsetY": ', h, "}"].join("");
        d.originalEvent.dataTransfer.setDragImage(a.stickerMap[c._id].image, b, h);
        d.originalEvent.dataTransfer.setData("text", e);
    };
    a.stickerDragOver = function(b) {
        b.preventDefault();
        b.originalEvent.dataTransfer.dropEffect = "copy";
        return false;
    };
    a.stickerDrop = function(c) {
        c.preventDefault();
        c.stopPropagation();
        if (a.numPlacements >= a.MAX_PLACEMENTS) {
            return false;
        }
        $dropZone = $(this);
        var d = c.originalEvent.dataTransfer.getData("text");
        d = $.parseJSON(d);
        var g = a.getOffsetFromTarget(c, $dropZone);
        var f = Math.ceil(g.y - d.offsetY);
        var e = Math.ceil(g.x - d.offsetX);
        var b = {
            sticker_id: d.sticker_id,
            top: f,
            left: e,
            angle: 0,
            };
        a.drawStickerPlacementCSS(a.$laptopView, b);
        a.checkForUnpurchasedStickers();
        return false;
    };
    a.getCorners = function(g) {
        var d = g.style.left;
        d = parseInt(d.substring(0, d.length - 2));
        var o = g.style.top;
        o = parseInt(o.substring(0, o.length - 2));
        var c = g.style.width;
        c = parseInt(c.substring(0, c.length - 2));
        var q = g.style.height;
        q = parseInt(q.substring(0, q.length - 2));
        var l = c / 2;
        var n = q / 2;
        var m = [[l * -1, n * -1], [l, n * -1], [l, n], [l * -1, n]];
        var b = [];
        var f = m.length;
        var e = $.data(g, "angle") * Math.PI / 180;
        for (var k = 0; k < f; k++) {
            var p = m[k];
            b[k] = [p[0] * Math.cos(e) - p[1] * Math.sin(e), p[0] * Math.sin(e) + p[1] * Math.cos(e)];
        }
        var j = d + l;
        var h = o + n;
        for (var k = 0; k < f; k++) {
            var p = b[k];
            b[k] = [p[0] + j, p[1] + h];
        }
        return b;
    };
    a.addLaptopViewListeners = function() {
        a.$laptopView.on("mouseenter", ".sticker", a.showBoundingBox);
        a.$boundingBox.on("mouseleave", a.hideBoundingBox).on("mouseenter", a.cancelHideBoundingBox).on("mousedown", a.boundingBoxDrag);
    };
    a.removeLaptopViewListeners = function() {
        a.$laptopView.off("mouseenter", ".sticker", a.showBoundingBox);
        a.$boundingBox.off("mouseleave", a.hideBoundingBox).off("mouseenter", a.cancelHideBoundingBox).off("mousedown", a.boundingBoxDrag);
    };
    a.showBoundingBox = function(c) {
        a.currentSticker = this;
        var h = a.getCorners(this);
        var m = function(n) {
            return n[0];
        };
        var k = function(n) {
            return n[1];
        };
        var f = Math.min.apply(Math, h.map(m));
        var j = Math.max.apply(Math, h.map(m));
        var i = Math.min.apply(Math, h.map(k));
        var b = Math.max.apply(Math, h.map(k));
        var d = j - f;
        var l = b - i;
        var g = a.stickerMap[$.data(this, "sticker_id")];
        var e = a.$boundingBox.find(".unpurchased");
        if (g.price && g.purchased == false) {
            if (d < 95) {
                e.text("$");
            } else {
                e.text("UNPURCHASED");
            }
            e.show();
        } else {
            a.$boundingBox.find(".unpurchased").hide();
        }
        a.$boundingBox.find(".top.left").css("cursor", ("url(" + a.IMAGE_PREFIX + "rotate_top_left.png) 12 12, auto"));
        a.$boundingBox.find(".bottom.left").css("cursor", ("url(" + a.IMAGE_PREFIX + "rotate_bottom_left.png) 12 12, auto"));
        a.$boundingBox.find(".bottom.right").css("cursor", ("url(" + a.IMAGE_PREFIX + "rotate_bottom_right.png) 12 12, auto"));
        a.$boundingBox.hide().css("transform", "");
        a.$boundingBox.css({
            width: d,
            height: l,
            });
        window.setTimeout(function() {
            a.$boundingBox.css({
                left: f,
                top: i,
                }).show();
        });
    };
    a.hideBoundingBox = function(b) {
        a.hideTimer = window.setTimeout(function() {
            a.$boundingBox.hide();
        }, 1000);
    };
    a.cancelHideBoundingBox = function(b) {
        window.clearTimeout(a.hideTimer);
    };
    a.boundingBoxDrag = function(C) {
        C.preventDefault();
        C.stopPropagation();
        a.removeLaptopViewListeners();
        var m = this;
        var E = $(this);
        var q = a.currentSticker;
        var G = $(q);
        var A = C.pageX;
        var y = C.pageY;
        var j = a.$laptopView.offset();
        var v = q.style.left;
        v = parseInt(v.substring(0, v.length - 2));
        var w = q.style.top;
        w = parseInt(w.substring(0, w.length - 2));
        var e = m.style.left;
        e = parseInt(e.substring(0, e.length - 2));
        var r = m.style.top;
        r = parseInt(r.substring(0, r.length - 2));
        var x = m.style.width;
        x = parseInt(x.substring(0, x.length - 2));
        var s = m.style.height;
        s = parseInt(s.substring(0, s.length - 2));
        var l = x / 2;
        var t = s / 2;
        var H = false;
        corners = [[e, r], [e + x, r], [e + x, r + s], [e, r + s]];
        var z = corners.length;
        for (var D = 0; D < z; D++) {
            var k = corners[D];
            if (Math.abs(j.left + k[0] - A) < a.CORNER_DRAG_RADIUS && Math.abs(j.top + k[1] - y) < a.CORNER_DRAG_RADIUS) {
                H = true;
                break;
            }
        }
        if (H) {
            var c = j.left + e + l;
            var b = j.top + r + t;
            var g = A - c;
            var f = b - y;
            var B,
            d,
            p,
            u;
            a.newStickerAngle;
            B = $.data(q, "angle");
            d = a.getAngle(g, f);
            var o = false;
            var h = $("#overlay");
            var n = null;
            h.mousemove(a.boundingBoxDragRotate(c, b, n, h, E, G, B, d, o));
            h.mouseup(function(i) {
                a.addLaptopViewListeners();
                E.hide();
                E.find(".dragBox").show();
                $("#boundingBoxX").show();
                $.data(q, {
                    angle: a.newStickerAngle
                });
                h.off("mousemove").off("mouseup");
                h.css("cursor", "auto");
                E.css("cursor", "");
            });
        } else {
            var F = {};
            $("#laptopScreen").mousemove(a.boundingBoxDragMove(A, y, j, e, r, v, w, F, G, E));
            $("#laptopScreen").mouseup(function(i) {
                a.addLaptopViewListeners();
                $.data(q, {
                    top: F.top,
                    left: F.left
                });
                $("#laptopScreen").unbind("mousemove").unbind("mouseup");
            });
        }
    };
    a.boundingBoxDragRotate = function(f, e, g, j, b, i, c, d, h) {
        return function(n) {
            n.preventDefault();
            n.stopPropagation();
            if (!h) {
                $("#boundingBoxX").hide();
                b.find(".dragBox").hide();
                b.find(".unpurchased").hide();
                h = true;
            }
            var l = n.pageX;
            var k = n.pageY;
            var q = l - f;
            var o = e - k;
            var r = a.getAngle(q, o);
            cursor = a.getRotateCursor(r);
            if (g == null || cursor != g) {
                g = cursor;
                var m = ("url(" + a.IMAGE_PREFIX + "rotate_" + cursor + ".png) 12 12, auto");
                j.css("cursor", m);
                b.css("cursor", m);
            }
            newAngle = r - d;
            if (n.shiftKey) {
                newAngle = Math.round(newAngle / 45) * 45;
            }
            a.newStickerAngle = c + newAngle;
            var p = "rotate(" + a.newStickerAngle + "deg)";
            i.css("transform", p);
            p = "rotate(" + newAngle + "deg)";
            b.css("transform", p);
        };
    };
    a.boundingBoxDragMove = function(d, b, h, f, i, k, g, e, j, c) {
        return function(p) {
            var o,
            l;
            var n = p.pageX;
            var m = p.pageY;
            if (n < h.left || m < h.top || n > h.left + a.SCREEN_WIDTH || m > h.top + a.SCREEN_HEIGHT) {
                return;
            }
            e.left = k + n - d;
            e.top = g + m - b;
            o = f + n - d;
            l = i + m - b;
            j.css({
                left: e.left + "px",
                top: e.top + "px",
                });
            c.css({
                left: o + "px",
                top: l + "px",
                });
        };
    };
    a.getAngle = function(c, e) {
        var b = Math.atan(c / e);
        var d = b * 180 / Math.PI;
        if (e < 0) {
            d = 180 + d;
        }
        return d;
    };
    a.getRotateCursor = function(b) {
        while (b < 0) {
            b += 360;
        }
        b = b % 360;
        if (0 <= b && b < 90) {
            return "top_right";
        } else {
            if (90 <= b && b < 180) {
                return "bottom_right";
            } else {
                if (180 <= b && b < 270) {
                    return "bottom_left";
                } else {
                    return "top_left";
                }
            }
        }
    };
    a.checkForUnpurchasedStickers = function() {
        var b = a.modal.$node.find(".submit");
        if (a.getUnpurchasedStickers().length) {
            b.text("Checkout");
        } else {
            b.text("Save");
        }
    };
    a.getUnpurchasedStickers = function() {
        var d = {};
        var c = $.map(a.modal.$node.find("#laptopView").find(".sticker"), function(e) {
            var f = a.stickerMap[$.data(e, "sticker_id")];
            if (f.price && f.purchased != true && !(f.sticker_id in d)) {
                d[f._id] = true;
            }
        });
        var b = [];
        for (key in d) {
            if (d.hasOwnProperty(key)) {
                b.push(key);
            }
        }
        return b;
    };
    a.purchaseCallback = function() {
        util.buildTree(a.layouts.successModal, a);
        a.successModal.show();
        a.refreshPurchaseData();
    };
    a.cancelCallback = function() {
        a.modal.show();
    };
    a.layouts = {
        zoomView: ["div#zoomView", ["canvas#zoomCanvas"], ["div#zoomOverlay"], ],
        stickerContainer: ["div.stickerContainer", ["div.stickerName"], ["div.priceInfo"], ],
        sticker: ["div.sticker"],
        boundingBox: ["div.boundingBox", ["div.unpurchased", "UNPURCHASED"], ["div#boundingBoxX"], ["div.dragBox.top.left"], ["div.dragBox.bottom.left"], ["div.dragBox.bottom.right"], ],
        successModal: [ActionModal, {
            id: "stickerSuccessModal",
            idd: "successModal",
            title: "Success!",
            showClose: false,
            clickOut: false,
            submitCallback: function() {
                a.modal.show();
            },
            submitText: "Sweet!",
            showCancel: false,
            }, ["div.hellsYeah"], ["div.section.top", ["Sticker acquired! You may now review and ", "save your sticker placements."].join("")], ],
        };
    a.layouts.editView = [ActionModal, {
        id: "stickerModal",
        title: "Edit Your Laptop Cover",
        submitText: "Save",
        submitCallback: a.save,
        showCancel: false,
        }, ["div#laptop", ["div#laptopScreen", ["div#laptopView"], ], ["div#laptopMask"], ], ["h3", "Your Stickers"], ["div#remainingCount", ["span#remainingNumber"], " slots remaining.", ], ["div#picker", ["div#stickerListScrollLeft"], ["div#stickerScroller", ["div#stickerList"], ], ["div#stickerListScrollRight"], ], ];
    if (window.DEBUG_MODE) {
        return a;
    } else {
        return {
            init: a.init,
            showEditor: a.showEditor,
            drawLaptopCanvas: a.drawLaptopCanvas,
            };
    }
} ());
$(function() {
    $(window).bind("userInitDone", turntable.sticker.init);
});
turntable.payment = (function() {
    var a = {
        products: {},
        paymentModal: null,
        processingModal: null,
        account: null,
        currentMonth: null,
        currentYear: null,
        $year: null,
        instructions: {
            noCard: "Add a credit card to finish the purchase!",
            hasCard: ("Use your existing credit card or enter a new credit card to finish your purchase!"),
            noPassword: ("Create a turntable password and add a credit card to finish your purchase!")
            },
        cardImagePrefix: "https://s3.amazonaws.com/static.turntable.fm/images/payment/",
        };
    a.cardImageMap = {
        Visa: a.cardImagePrefix + "visa.png",
        "American Express": a.cardImagePrefix + "amex.png",
        MasterCard: a.cardImagePrefix + "mastercard.png",
        Discover: a.cardImagePrefix + "discover.png"
    };
    a.makePaymentModal = function(f, b, c) {
        var g = $.Deferred();
        $.ajax({
            url: "https://" + MEDIA_HOST + "/payment_info",
            data: {
                userid: turntable.user.id
            },
            xhrFields: {
                withCredentials: true
            },
            success: function(h) {
                g.resolve(JSON.parse(h));
            }
        });
        var e = $.Deferred();
        turntable.hYkveeiflds({
            api: "product.get",
            productids: f,
            }, function(h) {
            e.resolve(h);
        });
        $.when(g, e).done($.proxy(a.getProductsCallback, a));
        a.successCallback = b;
        a.cancelCallback = c;
        var d = new Date();
        a.currentYear = d.getFullYear();
        a.currentMonth = d.getMonth() + 1;
    };
    a.getProductsCallback = function(g, c) {
        if (c.products.length) {
            var j = c.products;
            var h = [];
            var b = j.length;
            for (var e = 0; e < b; e++) {
                if (j[e].price && j[e].state == "active") {
                    a.products[j[e]._id] = j[e];
                    h.push(j[e]._id);
                }
            }
            util.buildTree(a.layouts.paymentModal(h), a);
            a.updateTotal();
            var l = a.paymentModal.$node;
            a.$modal = l;
            l.on("ItemList:modify", a.updateTotal);
            l.find(".back").on("click", function() {
                a.paymentModal.close({
                    showLoadingTransition: true
                });
                a.cancelCallback();
            });
            var k = l.find("#lastCard");
            var f = l.find("#newCard");
            var d = l.find(".instructions");
            if (util.notEmpty(g.card)) {
                a.replaceCardType(k, g.card.type);
                k.find(".lastFour").text(g.card.last_four);
                d.text(a.instructions.hasCard);
                a.lastCardClick();
            } else {
                k.remove();
                d.text(a.instructions.noCard);
                a.newCardClick();
            }
            if (g.account.has_password === true) {
                l.find("#newAccount").remove();
                a.account = g.account;
            } else {
                l.find("#submitSection .passwordLabel").remove();
                a.account = null;
                d.text(a.instructions.noPassword);
                k.remove();
                a.newCardClick();
                l.find(".setEmail").val(g.account.email);
            }
            a.paymentModal.show();
            a.$year = l.find(".expirationYear");
            a.$year.on("change", a.monthInput.validate);
            a.checkSubmitable();
            $("#paymentForm").on("ItemList:modify", a.checkSubmitable).on("ValidatedForm:invalid", function(i, m) {
                a.paymentModal.showAlert(m.err);
            });
            $("#newCard").on("click", a.newCardClick);
            $("#newCard .cardNumber").on("change", function() {
                a.replaceCardType(f, a.determineCardType(this.value));
            });
            $("#lastCard").on("click", a.lastCardClick);
            $("#paymentModal").on("submit", a.checkoutSubmit);
        }
    };
    a.updateTotal = function() {
        var b = a.totalPrice();
        a.paymentModal.$node.find(".totalPrice").text(util.centsToDollarString(b));
    };
    a.totalPrice = function() {
        var c = a.itemList.attributes.items;
        var b = c.length;
        var e = 0;
        for (var d = 0; d < b; d++) {
            e += a.products[c[d]].price;
        }
        return e;
    };
    a.checkSubmitable = function() {
        if (a.totalPrice() > 0) {
            a.enableForm();
        } else {
            a.disableForm();
        }
    };
    a.disableForm = function() {
        var b = a.$modal.find(".submit");
        b.addClass("disabled").attr("disabled", "disabled");
    };
    a.enableForm = function() {
        var b = a.$modal.find(".submit");
        b.removeClass("disabled").removeAttr("disabled");
    };
    a.checkoutSubmit = function(b) {
        a.disableForm();
        if (b) {
            b.preventDefault();
        }
        if (a.account == null) {
            var f = $("#newAccount");
            var j = f.find(".setEmail").val();
            var k = f.find(".setPassword").val();
            var c = {
                api: "user.set_email_password",
                email: j,
                password: k,
                };
            util.apiGet(c, function(i) {
                if (i[0]) {
                    a.account = {
                        email: j
                    };
                    a.checkoutSubmit();
                } else {
                    a.paymentModal.showAlert("Unable to set password: " + i[1]["err"] + ". Please try again.");
                    a.enableForm();
                }
            });
        } else {
            var g = $("#paymentForm").find("input[name=card]");
            var d = g.length;
            var e;
            for (var h = 0; h < d; h++) {
                if (g[h].checked) {
                    e = g[h].value;
                    break;
                }
            }
            if (e == "last") {
                a.buySubmit();
            } else {
                if (e == "new") {
                    a.buyPreProcess();
                } else {
                    LOG("invalid card type selected");
                }
            }
        }
        return false;
    };
    a.newCardClick = function(d) {
        var c = a.paymentModal.$node.find("#lastCard");
        var b = a.paymentModal.$node.find("#newCard");
        c.removeClass("selected");
        b.addClass("selected");
        b.find("input[type=radio]").attr("checked", "checked");
        b.find("input").attr("required", "required");
    };
    a.lastCardClick = function(d) {
        var c = a.paymentModal.$node.find("#lastCard");
        var b = a.paymentModal.$node.find("#newCard");
        c.addClass("selected");
        b.removeClass("selected");
        c.find("input[type=radio]").attr("checked", "checked");
        b.find("input").removeAttr("required");
    };
    a.buyPreProcess = function() {
        var f = $(".cardNumber").val();
        var e = $(".expirationMonth").val();
        var d = $(".expirationYear").val();
        if (d.length == 2) {
            d = "20" + d;
        }
        var b = $(".cvc").val();
        var c = $(".zipCode").val();
        Stripe.createToken({
            number: f,
            cvc: b,
            exp_month: e,
            exp_year: d,
            address_zip: c
        }, function(g, h) {
            if (h.error) {
                a.paymentModal.showAlert(h.error.message);
                a.enableForm();
            } else {
                turntable.payment.buySubmit(h.id);
            }
        });
    };
    a.buySubmit = function(d) {
        var b = a.account.email;
        var e = a.paymentModal.$node.find(".accountPassword").val();
        var c = {
            userid: turntable.user.id,
            cardToken: d,
            accountEmail: b,
            accountPassword: e,
            order: a.itemList.attributes.items,
            };
        $.ajax({
            url: "https://" + MEDIA_HOST + "/buy",
            type: "post",
            data: {
                msg: JSON.stringify(c, true)
                },
            xhrFields: {
                withCredentials: true
            },
            success: function(g) {
                g = JSON.parse(g);
                if (g[0]) {
                    var h = g[1]["orderid"];
                    a.processPaymentStart();
                    a.processStartTime = new Date();
                    turntable.hYkveeiflds({
                        api: "order.state",
                        orderid: h
                    }, a.pollOrderState);
                } else {
                    var f = g[1]["err"];
                    a.paymentModal.showAlert(f);
                    a.enableForm();
                }
            }
        });
    };
    a.processPaymentStart = function() {
        util.buildTree(a.layouts.processingModal, a);
        a.paymentModal.hide({
            showLoadingTransition: true
        });
        a.processingModal.show();
    };
    a.processPaymentDone = function() {
        a.processingModal.close({
            showLoadingTransition: true
        });
        a.successCallback();
    };
    a.processPaymentFailed = function() {
        a.processingModal.close({
            showLoadingTransition: true
        });
        a.paymentModal.show();
        a.paymentModal.showAlert("Sorry, your payment did not go through. Please try again.");
        a.enableForm();
    };
    a.pollOrderState = function(c) {
        if (c.success) {
            if (c.state == "succeeded") {
                a.processPaymentDone();
            } else {
                if (c.state == "failed") {
                    a.processPaymentFailed();
                } else {
                    var b = new Date();
                    if (b - a.processStartTime > 30000) {
                        a.processPaymentDone();
                        return;
                    }
                    window.setTimeout(function() {
                        turntable.hYkveeiflds({
                            api: "order.state",
                            orderid: c.orderid
                        }, a.pollOrderState);
                    }, 2000);
                }
            }
        } else {
            a.processPaymentFailed();
        }
    };
    a.replaceCardType = function(d, b) {
        if (!d) {
            return;
        }
        var c = "";
        if (b in a.cardImageMap) {
            c = "url(" + a.cardImageMap[b] + ")";
        }
        d.find(".cardType").css("background-image", c);
    };
    a.determineCardType = function(e) {
        if (!e) {
            return null;
        }
        var c = parseInt(e.substring(0, 2));
        var d = parseInt(e.substring(0, 3));
        var b = parseInt(e.substring(0, 6));
        if (e.lastIndexOf("4", 0) == 0) {
            return "Visa";
        } else {
            if (e.lastIndexOf("34", 0) == 0 || e.lastIndexOf("37", 0) == 0) {
                return "American Express";
            } else {
                if (e.lastIndexOf("6011", 0) == 0 || e.lastIndexOf("65", 0) == 0 || (644 <= d && d <= 649) || (622126 <= b && b <= 622925)) {
                    return "Discover";
                } else {
                    if (51 <= c && c <= 55) {
                        return "MasterCard";
                    } else {
                        return null;
                    }
                }
            }
        }
    };
    a.creditCardValidator = function(b) {
        if (!Stripe.validateCardNumber(b)) {
            return {
                valid: false,
                err: "Please enter a valid credit card number"
            };
        }
        return {
            valid: true
        };
    };
    a.cvcValidator = function(b) {
        if (!Stripe.validateCVC(b)) {
            return {
                valid: false,
                err: "Please enter a valid CVC"
            };
        }
        return {
            valid: true
        };
    };
    a.monthValidator = function(c) {
        c = parseInt(c, 10);
        var b = a.$year.val();
        if (b) {
            b = parseInt(b);
            if (b == a.currentYear && c < a.currentMonth) {
                return {
                    valid: false,
                    err: "Please check your expiration month and year"
                };
            }
        }
        if (! (1 <= c && c <= 12)) {
            return {
                valid: false,
                err: "Please enter a valid month"
            };
        }
        return {
            valid: true
        };
    };
    a.yearValidator = function(b) {
        b = parseInt(b, 10);
        if (b < 100 && b >= a.currentYear % 100) {
            return {
                valid: true
            };
        } else {
            if (b >= a.currentYear) {
                return {
                    valid: true
                };
            }
        }
        return {
            valid: false,
            err: "Please check your expiration year"
        };
    };
    a.zipCodeValidator = function(b) {
        if (! (/[0-9][0-9][0-9][0-9][0-9]/.test(b))) {
            return {
                valid: false,
                err: "Please enter a valid ZIP code"
            };
        }
        return {
            valid: true
        };
    };
    a.layouts = {
        paymentModal: function(b) {
            return [Modal, {
                id: "paymentModal",
                idd: "paymentModal",
                title: "Checkout",
                showClose: false,
                clickOut: false,
                }, ["span.back.cancel", "Back"], [ValidatedForm, {
                id: "paymentForm",
                idd: "paymentForm",
                }, ["div.section.top", [ItemList, {
                id: "purchasesList",
                items: b,
                itemType: StickerItem,
                backingMap: a.products,
                }], ], ["div.section.accountAndCard", ["div.instructions"], ["fieldset#newAccount", ["label.emailLabel", "Email", [ValidatedInput, {
                cssClass: "setEmail",
                type: "email",
                required: "required",
                invalidMessage: "Please enter a valid email address",
                validator: util.validators.email
            }], ], ["label.passwordLabel", "turntable password", [ValidatedInput, {
                cssClass: "accountPassword setPassword",
                type: "password",
                required: "required",
                invalidMessage: "Your password must be at least 8 characters",
                validator: util.validators.password
            }], ], ["label.passwordLabel", "Confirm password", [ValidatedInput, {
                cssClass: "confirmPassword",
                type: "password",
                required: "required",
                invalidMessage: "Your passwords do not match",
                validator: util.validators.makePasswordConfirm("#newAccount .accountPassword"),
                width: 300
            }], ], ], ["label#lastCard", ["input", {
                type: "radio",
                name: "card",
                value: "last",
                checked: "checked",
                }, ], ["fieldset.last", ["legend", "Existing Card"], ["label.cardNumberLabel", "Card Number", ["div.lastCardNumber", ["span.firstTwelve", "XXXX XXXX XXXX "], ["span.lastFour"], ], ], ["div.cardOwner", turntable.user.displayName], ["div.cardType"], ], ], ["label#newCard", ["input", {
                type: "radio",
                name: "card",
                value: "new",
                }, ], ["fieldset.new", ["legend", "New Card"], ["label.cardNumberLabel", "Card Number", [ValidatedInput, {
                cssClass: "cardNumber",
                maxlength: 19,
                showIcon: false,
                validator: a.creditCardValidator
            }], ], ["label.cvcLabel", "CVC", [ValidatedInput, {
                cssClass: "cvc",
                maxlength: 4,
                showIcon: false,
                validator: a.cvcValidator
            }], ], ["div.expires", ["label", {
                "for": "expirationMonth"
            }, "Expires"], [ValidatedInput, {
                idd: "monthInput",
                name: "expirationMonth",
                cssClass: "expirationMonth",
                maxlength: 2,
                showIcon: false,
                validator: a.monthValidator
            }], ["span.slash", "/"], [ValidatedInput, {
                cssClass: "expirationYear",
                maxlength: 4,
                showIcon: false,
                validator: a.yearValidator
            }], ], ["label.zipCodeLabel", "Zip Code", [ValidatedInput, {
                cssClass: "zipCode",
                maxlength: 5,
                showIcon: false,
                validator: a.zipCodeValidator
            }], ], ["div.cardOwner", turntable.user.displayName], ["div.cardType"], ], ], ], ["div.section#submitSection", ["div.priceLabel", "Total: ", ["span.totalPrice"], ], ["label.passwordLabel", "turntable Password", [ValidatedInput, {
                cssClass: "accountPassword",
                type: "password",
                required: "required"
            }], ], ["button.submit", {
                type: "submit"
            }, "Checkout"], ], ], ];
        },
        processingModal: [Modal, {
            id: "processingModal",
            idd: "processingModal",
            title: "Processing Payment",
            showCallback: function() {
                util.makeSpinner(a.processingModal.$node.find(".processingSpinner")[0]);
            },
            showClose: false,
            clickOut: false,
            }, ["div.processingSpinner"], ["div.section.top.processingText", "Hang in there, buddy!"], ]
        };
    if (window.DEBUG_MODE) {
        return a;
    } else {
        return {
            makePaymentModal: a.makePaymentModal
        };
    }
} ());
turntable.user = {
    djPoints: 0,
    acl: 0,
    fanOf: [],
    buddies: [],
    blockedUsers: {},
    images: {},
    init: function() {
        var a = turntable.user.initAuth();
        a.done(turntable.user.updateDom, turntable.user.getUserInfo);
        turntable.hYkveeiflds({
            api: "block.list_all"
        }, function(b) {
            $.each(b.blocks, function() {
                turntable.user.blockedUsers[this.block.blockedid] = true;
            });
        });
        return a;
    },
    initAuth: function() {
        var a = $.Deferred();
        turntable.user.id = $.cookie("turntableUserId");
        turntable.user.auth = $.cookie("turntableUserAuth");
        turntable.user.named = ($.cookie("turntableUserNamed") != "false");
        LOG("Authenticating user...");
        turntable.hYkveeiflds({
            api: "user.authenticate"
        }, function(b) {
            if (b.success) {
                a.resolve();
            } else {
                turntable.ialIp.lobbyRedirect(3);
            }
        });
        return a.promise();
    },
    elements: {},
    view: null,
    updateDom: function() {
        turntable.user.elements = {};
        turntable.user.view = util.buildTree(turntable.user.layouts[turntable.user.named ? "signedIn": "guest"], turntable.user.elements);
        $("#userauth").empty().append(turntable.user.view);
        turntable.addEventListener("avatarchange", turntable.user.updateAvatarHead);
    },
    updateAvatarHead: function() {
        $(".settings-head").css("background-image", "url(" + turntable.user.images.headfront + ")");
    },
    loginSubmit: function() {},
    signUpSubmit: function() {
        var b = $.trim($("#userSignUpName")[0].value);
        var a = $.trim($("#userSignUpEmail")[0].value);
        var d = $("#userSignUpPasswd")[0].value;
        var c = $("#userSignUpPasswd2")[0].value;
        if (d != c) {
            alert("passwords do not match");
            return;
        }
        turntable.user.signUp(b, a, d);
    },
    getUserInfo: function() {
        turntable.hYkveeiflds({
            api: "user.info"
        }, function(b) {
            turntable.user.setDisplayName(b.name);
            turntable.user.djPoints = b.points;
            turntable.user.avatarId = b.avatarid;
            turntable.dispatchEvent("avatarchange");
            turntable.user.acl = b.acl;
            turntable.user.custom_avatar = b.custom_avatar;
            turntable.user.images = {};
            turntable.user.images.headfront = b.images.headfront;
            turntable.user.images.fullfront = b.images.fullfront;
            turntable.hYkveeiflds({
                api: "user.get_fan_of"
            }, function(c) {
                turntable.user.fanOf = c.fanof;
                turntable.dispatchEvent("userinfo");
            });
            turntable.hYkveeiflds({
                api: "user.get_buddies"
            }, function(c) {
                turntable.user.buddies = c.buddies;
            });
            turntable.user.updateAvatarHead();
            if (turntable.user.custom_avatar) {
                $("li.avatar-option").hide();
            }
        });
        var a = "linux";
        if (navigator.userAgent.indexOf("Macintosh") != -1 || navigator.userAgent.indexOf("iPhone") != -1 || navigator.userAgent.indexOf("iPad") != -1) {
            a = "mac";
        } else {
            if (navigator.userAgent.indexOf("Windows") != -1) {
                a = "pc";
            } else {
                if (navigator.userAgent.indexOf("CrOS") != -1) {
                    a = "chrome";
                }
            }
        }
        setTimeout(function() {
            turntable.hYkveeiflds({
                api: "user.modify",
                laptop: a
            });
        }, 2000);
        turntable.user.laptop = a;
    },
    setDisplayName: function(a) {
        turntable.user.displayName = a;
        $(".bindUserName").text(a);
    },
    avatarsShow: function() {
        var a = {};
        util.buildTree(turntable.user.layouts.avatarsView(), a);
        turntable.hYkveeiflds({
            api: "user.available_avatars"
        }, function(b) {
            ASSERT(b.success, "Failed to get available avatars");
            turntable.user.avatarsShowTiers(a.tiers, b.avatars);
            a.modal.show();
        });
    },
    avatarsShowTiers: function(d, k) {
        for (var f = 0; f < k.length; f++) {
            var g = k[f];
            if (g.min >= 50000) {
                continue;
            }
            if (g.acl) {
                var l = "Superusers";
            } else {
                var l = g.min + (f + 2 < k.length ? "-" + (k[f + 1].min - 1) : "+") + " Points";
            }
            var h = util.buildTree(turntable.user.layouts.avatarTier(l));
            var a = $(h).find(".avatarList");
            var c = (turntable.user.djPoints >= g.min) && (turntable.user.acl >= (g.acl || 0));
            for (var e = 0; e < g.avatarids.length; e++) {
                var b = util.buildTree(turntable.user.layouts.avatarImg(g.avatarids[e], c));
                if (avatars && typeof(avatars[g.avatarids[e]]) !== "undefined") {
                    a.append(b);
                }
                if (g.avatarids[e] == turntable.user.avatarId) {
                    $(b).addClass("currentAvatar");
                }
            }
            $(d).append(h);
        }
    },
    avatarLoad: function() {
        var b = $(this).closest("div.avatar");
        b.css("width", this.width);
        b.css("height", this.height);
        var a = 150;
        if (this.width < a) {
            b.css("padding-left", (a - this.width) / 2);
            b.css("padding-right", (a - this.width) / 2);
        }
        if (this.height < a) {
            b.css("padding-top", (a - this.height) / 2);
            b.css("padding-bottom", (a - this.height) / 2);
        }
        $(this).addClass("shrink");
    },
    avatarShrink: function() {
        $(this).addClass("shrink");
    },
    avatarUnshrink: function() {
        $(this).removeClass("shrink");
    },
    avatarClick: function() {
        $(".avatar.currentAvatar").removeClass("currentAvatar");
        $(this).closest(".avatar").addClass("currentAvatar");
    },
    avatarClose: function() {
        var a = $(".avatar.currentAvatar").data("avatarId");
        if (a != turntable.user.avatarId) {
            turntable.user.avatarId = a;
            turntable.hYkveeiflds({
                api: "user.set_avatar",
                avatarid: a
            }, function(b) {
                if (b.success) {
                    turntable.dispatchEvent("avatarchange");
                }
            });
        }
    },
    settingsShow: function() {
        turntable.hYkveeiflds({
            api: "user.get_profile"
        }, function(a) {
            util.buildTree(turntable.user.layouts.settingsView(), turntable.user);
            var b = turntable.user.modal.$node;
            b.find("#displayNameField").val(turntable.user.displayName);
            b.find("#twitterField").val(a.twitter);
            b.find("#facebookField").val(a.facebook);
            b.find("#websiteField").val(a.website);
            b.find("#aboutField").val(a.about);
            b.find("#aboutField").limitMaxLength();
            b.find("#topArtistsField").val(a.topartists);
            b.find("#topArtistsField").limitMaxLength();
            b.find("#hangoutField").val(a.hangout);
            b.find("#hangoutField").limitMaxLength();
            b.find("#displayNameFieldWrapper").tipsy({
                className: "fieldWrapperTipsy",
                opacity: 1,
                gravity: "n",
                fade: true,
                });
            turntable.user.modal.show();
        });
    },
    settingsSubmit: function() {
        var c = $("#displayNameField").val();
        var h = $("#twitterField").val();
        var b = $("#facebookField").val();
        var e = $("#websiteField").val();
        var f = $("#aboutField").val();
        var a = $("#topArtistsField").val();
        var d = $("#hangoutField").val();
        var g = turntable.user.modal;
        turntable.hYkveeiflds({
            api: "user.modify_profile",
            name: c,
            twitter: h,
            facebook: b,
            website: e,
            about: f,
            topartists: a,
            hangout: d
        }, function(i) {
            if (!i.success) {
                g.showAlert("Sorry, " + i.err);
                return;
            } else {
                turntable.user.setDisplayName(c);
                g.close();
            }
        });
        return false;
    },
    ignoredShow: function() {
        util.buildTree(turntable.user.layouts.ignoredView(), turntable.user);
        turntable.user.modal.show();
        var b = function(c) {
            if ($("#" + c).length > 0) {
                return;
            }
            var d = function() {
                var f = $(this).parent();
                turntable.hYkveeiflds({
                    api: "block.remove",
                    blockedid: f.attr("id")
                    }, function(g) {
                    if (g && g.success) {
                        f.hide("slow", function() {
                            $(this).remove();
                        });
                        delete turntable.user.blockedUsers[f.attr("id")];
                        turntable.buddyList.updateIgnored();
                    } else {
                        $("#addIgnoreFieldError").html("An error occurred when removing the user").show("slow");
                    }
                });
                return false;
            };
            var e = util.buildTree(["li#" + c + ".ignored", {}, ["a.remove", {
                event: {
                    click: d
                }
            }], ["span.name", {}, "Loading..."]]);
            turntable.hYkveeiflds({
                api: "user.get_profile",
                userid: c
            }, function(f) {
                $("#" + c + " span.name").html(f.name);
            });
            return e;
        };
        turntable.hYkveeiflds({
            api: "block.list_all"
        }, function(c) {
            $.each(c.blocks, function() {
                var d = this.block;
                $("ul#ignoredUsers").append(b(d.blockedid));
                turntable.user.blockedUsers = {};
                turntable.user.blockedUsers[this.block.blockedid] = true;
                turntable.buddyList.updateIgnored();
            });
        });
        var a = "Enter a username...";
        $("div.addIgnore input").val(a).addClass("default");
        $("div.addIgnore input").focus(function() {
            if ($(this).val() == a) {
                $(this).val("").removeClass("default");
            }
        });
        $("div.addIgnore input").keyup(function(c) {
            if (c.keyCode == 13) {
                $("div.addIgnore button").click();
            }
        });
        $("div.addIgnore input").focus(function(c) {
            setTimeout(function() {
                $("#addIgnoreFieldError").hide("slow");
            }, 1000);
        });
        $("div.addIgnore button").click(function() {
            var c = $("#addIgnoreField").val();
            if ($.trim(c).length > 0) {
                turntable.hYkveeiflds({
                    api: "user.get_id",
                    name: c
                }, function(d) {
                    if (d && d.success) {
                        turntable.hYkveeiflds({
                            api: "block.add",
                            blockedid: d.userid
                        }, function(e) {
                            if (e.success) {
                                $("ul#ignoredUsers").append(b(d.userid));
                                $("#" + d.userid).hide().show("slow");
                                $("#addIgnoreField").val("");
                                turntable.user.blockedUsers[d.userid] = true;
                                turntable.buddyList.updateIgnored();
                            } else {
                                turntable.user.modal.showAlert(e.err);
                            }
                        });
                    } else {
                        turntable.user.modal.showAlert(d.err);
                    }
                });
            }
        });
    }
};
turntable.user.layouts = {
    signedIn: ["div#settings.dropdown-container", ["div#settings-button", ["div.settings-head"]], ["ul.floating-menu.down#settings-dropdown", ["li.option.avatar-option", {
        event: {
            click: turntable.user.avatarsShow
        }
    }, "Change avatar"], ["li.option", {
        event: {
            click: turntable.user.settingsShow
        }
    }, "Edit my profile"], ["li.option", {
        event: {
            click: turntable.sticker.showEditor
        }
    }, "Laptop stickers"], ["li.option", {
        event: {
            click: turntable.user.ignoredShow
        }
    }, "Ignored users"], ["li.option.split-option#layout-option", {
        title: "Choose between one or two sidebars"
    }, ["div.description", "Layout"], ["div.options", ["div.option.single-panel", {
        data: {
            layout: "single"
        }
    }], ["div.option.dual-panel", {
        data: {
            layout: "dual"
        }
    }]]], ["li.option.special", {
        event: {
            click: turntableCommon.logout
        }
    }, "Logout"]]],
    avatarsView: function() {
        return [Modal, {
            title: "Choose Avatar",
            cssClass: "avatarsModal",
            closeCallback: turntable.user.avatarClose,
            }, ["p.djPointsMsg", ["span.djName", "DJ ", ["span.bindUserName", {}, turntable.user.displayName]], ", you have ", ["span.djPoints", {}, turntable.user.djPoints], " points."], ["p.djPointsMsg", "Earn more points to unlock new avatars."], ["div##tiers.avatarTiers"]];
    },
    avatarTier: function(a) {
        return ["div.tier", {}, ["div.reqsHeader", {}, a], ["div.avatarList"]];
    },
    avatarImg: function(b, a) {
        return ["div.avatar" + (a ? "": ".locked"), {
            data: {
                avatarId: b
            }
        }, ["img.avatarImg", {
            src: "https://s3.amazonaws.com/static.turntable.fm/roommanager_assets/avatars/" + b + "/fullfront.png",
            event: {
                load: turntable.user.avatarLoad,
                mouseover: a && turntable.user.avatarUnshrink,
                mouseout: a && turntable.user.avatarShrink,
                click: a && turntable.user.avatarClick
            }
        }], (a ? null: ["img.lockedIcon", {
            src: "https://s3.amazonaws.com/static.turntable.fm/images/overlay/avatar_locked_icon.png"
        }]), ["div.djName", {}, "DJ " + turntable.user.displayName]];
    },
    settingsView: function() {
        return [ActionModal, {
            title: "Edit Profile",
            width: 480,
            submitCallback: turntable.user.settingsSubmit,
            submitText: "Save",
            }, ["div.fields", {}, ["div.field.settings", {}, ["div#displayNameFieldWrapper", {
            title: "Can't be changed more than once every seven days"
        }, ["div", {}, "Display Name:"], ["input#displayNameField.text.name"]], ["div", {}, "Twitter Name:"], ["input#twitterField.text.twitter", {
            maxlength: 15
        }], ["div", {}, "Facebook URL:"], ["input#facebookField.text.facebook"], ["div", {}, "Website:"], ["input#websiteField.text.website"], ["div", {}, "Write something about yourself:"], ["textarea#aboutField.textarea", {
            maxlength: 400
        }], ["div", {}, "Got some favorite artists?"], ["textarea#topArtistsField.textarea", {
            maxlength: 400
        }], ["div", {}, "Where do you usually hang out on turntable?"], ["textarea#hangoutField.textarea", {
            maxlength: 400
        }]]], ];
    },
    ignoredView: function() {
        return [Modal, {
            title: "Ignored Users",
            cssClass: "ignoreModal"
        }, ["div.field", ["div.ignoredDescription", "Someone bothering you? Add a user to this list to block their incoming chat messages."], ["div.addIgnore", ["input#addIgnoreField", {
            size: "15"
        }], ["button", {}], ["div#addIgnoreFieldError", {}]], ["ul#ignoredUsers", {}]]];
    }
};
turntable.playlist = {
    MAX_API_RETRIES: 5,
    SEARCH_DELAY: 500,
    defaultPlaylistName: "default",
    playlists: {},
    activePlaylist: null,
    fileids: [],
    songsByFid: {},
    searchResultsByFid: {},
    filteredSearchResults: {},
    currentSong: null,
    currentSongTimer: null,
    filesUploading: [],
    filesProcessing: {},
    filesProcessed: 0,
    filesToProcess: 0,
    searchBarValue: "",
    lastQuery: "",
    lastSearchTime: 0,
    queueEditsLocked: false,
    loadPlaylistsDeferred: null,
    init: function() {
        var c = this;
        this.loadList = $.proxy(this.loadList, this);
        this.loadPlaylistsDeferred = this.loadPlaylists();
        $("#playlist").replaceWith(util.buildTree(this.layouts.playlistView));
        var a = util.buildTree([Queue, {
            $viewport: $("#songs"),
            titleText: "Results from your queue",
            backingMap: this.songsByFid,
            songConstructor: this.layouts.songView,
            highlightTopSong: true,
            id: "queue"
        }], this);
        $("#queue").replaceWith(a);
        this.queue.hideTitle();
        var b = util.buildTree([SongList, {
            $viewport: $("#songs"),
            titleText: "Results from the turntable library",
            alwaysShowTitle: true,
            backingMap: this.searchResultsByFid,
            songConstructor: this.layouts.searchedSongView,
            idd: "searchResults",
            id: "search-results"
        }], this);
        $(b).replaceAll("#search-results").hide();
        this.$playlistView = $("#playlist");
        this.$songs = $("#songs");
        this.$queue = $("#queue");
        this.$queueMessage = this.$playlistView.find(".queue-message");
        this.$emptyQueue = $("#empty-queue");
        this.$searchResults = $("#search-results");
        this.$searchLoading = $("#search-loading");
        this.$searchEmpty = $("#search-empty");
        this.$searchInput = $("#song-search-input");
        this.$panes = $("#queue-view-panes");
        this.songsByFid = $.extend(this.songsByFid, this.cache.toObject());
        var d = $.proxy(this.initPlaylistDropdown(), this);
        $("#playlist-display").click(d);
        $("#queue-header").find(".done").on("click", function(f) {
            $("#queue-header").addClass("normal").removeClass("edit");
            c.queue.normalMode();
            $("#playlist-dropdown").remove();
        });
        $("#queue-header").find(".remove").on("click", function(f) {
            if ($(f.currentTarget).hasClass("disabled")) {
                return;
            }
            util.buildTree(c.layouts.removeSongConfirmation("the selected songs", c.activePlaylist, function() {
                c.queue.removeSelectedSongs();
            }), c);
            c.modal.show();
        });
        $("#queue-header").find(".show-playlists").on("click", function(i) {
            if ($(i.currentTarget).hasClass("disabled")) {
                return;
            }
            var j = c.displayMenu.getMenu();
            if (j && j.is("#batch-copy-dropdown")) {
                c.displayMenu.removeMenu();
                return;
            }
            var h = $(util.buildTree(c.layouts.batchCopyDropdown())),
            f = $("#queue-view"),
            g = $(i.currentTarget);
            f.append(c.displayMenu.create(h, g));
            h.on("click", ".playlist", function(l) {
                var k = $(l.currentTarget).closest(".playlist");
                k.html("Adding...");
                c.queue.addSelectedSongs(k.data("playlist")).done(function(m) {
                    c.displayMenu.removeMenu(h);
                });
            });
        });
        $("#queue-header").find(".show-playlists").tipsy({
            className: "batch-add",
            offset: -5,
            gravity: $.fn.tipsy.autoWE,
            fade: true,
            opacity: 1,
            title: function() {
                if (c.getNumPlaylists() == 1) {
                    return "Create a playlist to add songs";
                } else {
                    if (!c.queue.selectedSongExists()) {
                        return "Select songs below to add to your playlist";
                    }
                }
            }
        });
        $("#upload-button").on("click", function(g) {
            c.filterQueue("");
            c.$panes.addClass("subsection-visible");
            var f = $("#pickfiles");
            $("#plUpload .plupload.html5").css({
                width: f.outerWidth(),
                height: f.outerHeight(true)
                });
        });
        $("#upload-pane .back").click($.proxy(function() {
            this.$panes.removeClass("subsection-visible");
        }, this));
        this.$searchResults.on("click", ".addSong", $.proxy(this.addSearchResult, this));
        this.$songs.on("SongList:previewCreated", $.proxy(function() {
            var f = this.currentPreviewid,
            e = (this.queue.getNodeBySongid(f) || this.searchResults.getNodeBySongid(f));
            if (e) {
                this.$currentPreview = e;
                this.currentPreviewIsFresh = true;
            }
        }, this));
        this.$songs.on("SongList:previewRemoved", $.proxy(function() {
            this.$currentPreview = null;
        }, this));
        this.lastHoverSongid = null;
        this.createSongOverlayTimeout = null;
        this.$searchInput.on("focus", function() {
            $(this).closest("#queue-header").addClass("search-focused");
        }).on("blur", function() {
            var e = $(this);
            if (e.val().length === 0) {
                e.closest("#queue-header").removeClass("search-focused");
            }
        });
        $("#upload-button").tipsy({
            gravity: "nw",
            fade: true,
            opacity: 1
        });
        turntable.addEventListener("message", $.proxy(this.messageReceived, this));
        util.dobkUAXS(this);
        this.initSongSearch = $.proxy(this.initSongSearch, this);
        this.delayedSongSearch = util.delay(this, this.songSearch, this.SEARCH_DELAY);
        this.songSearch = $.proxy(this.songSearch, this);
        this.showSearchResults = $.proxy(this.showSearchResults, this);
        this.filterQueue = $.proxy(this.filterQueue, this);
        this.beginUpload = $.proxy(this.beginUpload, this);
        this.setCurrentSong = $.proxy(this.setCurrentSong, this);
        this.checkBlockMessageInView = util.rateLimit(this, this.checkBlockMessageInView, 250);
        this.updateFileid = $.proxy(this.updateFileid, this);
        this.searchScrollHandler = util.delay(this, this.searchScrollHandler, 250);
        this.clearSearchBar = $.proxy(this.clearSearchBar, this);
        this.initUploader();
        this.initDragAndDrop();
    },
    initBlockedSongsMessage: function(b) {
        if (!b) {
            return;
        }
        var c = this.$queueMessage,
        a = this.$playlistView,
        d;
        if (b > 1) {
            d = b + " songs were";
        } else {
            d = b + " song was";
        }
        c.find(".blockedSongs").text(d);
        c.show();
        this.queueMessageInitialized = true;
        a.on("scroll", this.checkBlockMessageInView);
        this.checkBlockMessageInView();
        c.find(".hide").on("click", $.proxy(function() {
            c.hide();
            this.queueMessageInitialized = false;
        }, this));
    },
    checkBlockMessageInView: function() {
        var d = this.$queueMessage;
        var b = this.$playlistView;
        var c = (d.position().top + d.height());
        var a = b.height();
        if (c < a + 5) {
            this.markMessageSeen(this.MAX_API_RETRIES);
            b.off("scroll", this.checkBlockMessageInView);
        }
    },
    markMessageSeen: function(a) {
        turntable.hYkveeiflds({
            api: "playlist.mark_message_seen"
        }, function(b) {
            if (!b.success) {
                if (a > 0) {
                    window.setTimeout(function() {
                        turntable.playlist.markMessageSeen(a - 1);
                    }, 1000);
                }
            }
        });
    },
    loadPlaylists: function() {
        this.playlists = {};
        return turntable.hYkveeiflds({
            api: "playlist.list_all"
        }, $.proxy(function(c) {
            var b = c.list;
            for (var a = 0; a < b.length; a++) {
                this.playlists[b[a].name] = true;
                if (b[a].active) {
                    this.setActivePlaylist(b[a].name);
                }
            }

            if (!this.activePlaylist) {
                this.playlists[this.defaultPlaylistName] = true;
                this.setActivePlaylist(this.defaultPlaylistName);
            }
            this.loadList();
        }, this));
    },
    loadList: function() {
        var b = $.Deferred(),
        c = this;
        this.fileids = [];
        this.loadListDone = false;
        function a() {
            var e = [];
            for (var d = 0; d < c.fileids.length; d++) {
                var f = c.fileids[d];
                if (f in c.songsByFid) {
                    e.push(f);
                }
            }
            if (c.currentSong && c.activePlaylist == c.currentSong.playlist && e.indexOf(c.currentSong.fileId) != -1) {
                c.queue.setCurrentlyPlayingSongid(c.currentSong.fileId);
            } else {
                c.queue.clearCurrentlyPlayingSongid();
            }
            c.fileids = e;
            c.queue.reset(e);
            c.filterQueue($("#song-search-input").val());
            if (!c.isFiltering) {
                c.decorateQueueView();
            }
            b.resolve();
        }
        turntable.hYkveeiflds({
            api: "playlist.all",
            playlist_name: c.activePlaylist,
            minimal: true
        }, function(f) {
            c.loadListDone = true;
            var d = [];
            for (var e = 0; e < f.list.length; e++) {
                var g = f.list[e]._id;
                c.fileids.push(g);
                if (! (g in c.songsByFid)) {
                    d.push(g);
                }
            }
            if (!d.length) {
                a();
                return;
            }
            turntable.hYkveeiflds({
                api: "playlist.get_metadata",
                playlist_name: c.activePlaylist,
                files: d
            }, function(i) {
                for (var j in i.files) {
                    if (i.files.hasOwnProperty(j)) {
                        var h = i.files[j];
                        h.fileId = h._id;
                        delete h._id;
                        c.songsByFid[j] = h;
                    }
                }
                a();
                if (c.cache.usable) {
                    window.setTimeout(function() {
                        var k = c.cache.loadObject(i.files);
                        if (!k) {
                            k = c.resetCache();
                            if (!k) {
                                c.cache.fromObject(i.files);
                            }
                        }
                    }, 1000);
                }
            });
        });
        turntable.hYkveeiflds({
            api: "playlist.new_blocked_song_count"
        }, function(d) {
            if (d.count > 0) {
                c.initBlockedSongsMessage(d.count);
            }
        });
        return b.promise();
    },
    initPlaylistDropdown: function() {
        var h = this,
        g,
        d;
        function c(i) {
            i.removeClass("edit");
            d = null;
        }
        function b(i) {
            if (d) {
                c(d);
            }
            i.addClass("edit");
            i.find("input[type=text]").val(i.data("playlist")).select();
            d = i;
        }
        function a(j) {
            var i = j.find(".playlist-label"),
            k = j.find("input[type=text]").val();
            i.html("Creating...");
            return h.createPlaylist(k).done(function(l) {
                h.playlists[k] = true;
                h.queue.queueButtonDecorator();
                j.before(util.buildTree(h.layouts.playlistRow(k)));
            }).always(function(l) {
                i.html("New Playlist");
            });
        }
        function f(j) {
            var i = j.find(".playlist-label"),
            l = j.find("input[type=text]").val(),
            k = j.data("playlist");
            i.html("Renaming...");
            return h.renamePlaylist(k, l).done(function(m) {
                delete h.playlists[k];
                h.playlists[l] = true;
                if (h.activePlaylist == k) {
                    h.setActivePlaylist(l);
                }
                j.data("playlist", l);
                i.html(l);
            }).fail(function(m) {
                i.html(k);
            });
        }
        function e(j) {
            var i = j.find(".playlist-label"),
            k = j.data("playlist");
            i.html("Deleting...");
            return h.deletePlaylist(k).done(function(l) {
                if (k == h.activePlaylist) {
                    h.loadPlaylists();
                }
                delete h.playlists[k];
                h.queue.queueButtonDecorator();
                j.remove();
            }).fail(function(l) {
                i.html(k);
            });
        }
        return function(k) {
            if (g && g === this.displayMenu.getMenu()) {
                this.displayMenu.removeMenu();
                return;
            }
            var j = g = $(util.buildTree(this.layouts.playlistHeaderDropdown())),
            i = $("#playlist-display");
            d = null;
            $("#queue-view").append(this.displayMenu.create(j, i));
            j.on("click", ".playlist:not(.active, .edit)", function(n) {
                var l = $(n.currentTarget),
                m = l.data("playlist");
                h.switchPlaylist(m).done(function(o) {
                    h.setActivePlaylist(m, l);
                    h.loadList().done(function(p) {
                        if (h.isFiltering) {
                            h.clearSearchBar();
                        }
                        h.displayMenu.removeMenu(j);
                    });
                });
            }).on("click", ".playlist .edit-icon", function(m) {
                var l = $(m.currentTarget).closest(".playlist");
                b(l);
                return false;
            }).on("click", ".delete-playlist-icon", function(n) {
                var l = $(n.currentTarget).closest(".playlist"),
                m = l.data("playlist");
                c(l);
                util.buildTree(h.layouts.removePlaylistConfirmation(m, function() {
                    e(l);
                }, function() {
                    h.displayMenu.bindListeners(j);
                    h.displayMenu.removeMenuWithDelay(j, 750);
                }), h);
                h.displayMenu.unbindListeners(j);
                h.modal.show();
                return false;
            }).on("click", ".cancel", function(m) {
                var l = $(m.currentTarget).closest(".option");
                c(l);
                return false;
            }).on("submit", ".playlist-input", function(m) {
                var l = $(m.currentTarget).closest(".new-playlist, .playlist");
                if (l.hasClass("new-playlist")) {
                    c(l);
                    a(l);
                } else {
                    c(l);
                    f(l);
                }
                m.preventDefault();
            });
            j.find(".new-playlist").on("click", function(m) {
                var l = $(m.currentTarget);
                if (!l.hasClass("edit")) {
                    b(l);
                }
            });
            $("#trigger-batch").click(function(l) {
                $("#queue-header").removeClass("normal").addClass("edit");
                if (h.isFiltering) {
                    h.clearSearchBar();
                }
                h.queue.batchEditMode();
                h.displayMenu.removeMenu(g);
            });
        };
    },
    displayMenu: (function() {
        var f,
        e,
        b;
        function h() {
            if (e) {
                e.trigger("menu.removed");
                c();
                e.remove();
                this.$menu = e = null;
            }
            a();
        }
        function a() {
            window.clearTimeout(f);
            f = null;
        }
        function g(j, i) {
            if (!f) {
                var i = typeof i === "number" ? i: 500;
                f = window.setTimeout(h, i);
            }
        }
        function d() {
            b.on("mouseover", a).on("mouseleave", g);
        }
        function c() {
            b.off("mouseover", a).off("mouseleave", g);
        }
        return {
            getMenu: function() {
                return e;
            },
            create: function(i, j) {
                h();
                this.$menu = e = i;
                b = e.add(j);
                d();
                return e;
            },
            bindListeners: function(i) {
                if (!i || i == e) {
                    d();
                }
            },
            unbindListeners: function(i) {
                if (!i || i == e) {
                    c();
                }
            },
            removeMenu: function(i) {
                this.removeMenuWithDelay(i, 0);
            },
            removeMenuWithDelay: function(j, i) {
                if (!j || j == e) {
                    b.trigger("mouseleave", i);
                }
            }
        };
    })(),
    resetCache: function() {
        var a = this.fileids.length;
        var c = {};
        for (var b = 0; b < a; b++) {
            var d = this.fileids[b];
            c[d] = this.songsByFid[d];
        }
        return this.cache.fromObject(c);
    },
    setCurrentSong: function(b) {
        if (this.currentSong == null && b == null) {
            return;
        }
        this.previewStop();
        if (this.currentSongTimer) {
            window.clearInterval(this.currentSongTimer);
            this.currentSongTimer = null;
        }
        this.currentSong = (b ? {
            fileId: b._id,
            metadata: b.metadata,
            playlist: b.playlist
        }: null);
        if (this.currentSong) {
            var a = Math.max(500, 1000 * b.metadata.length / $("#playlist").width());
            this.currentSongTimer = setInterval(this.updateCurrentSongProgress, a);
        }
        this.loadList();
    },
    updateCurrentSongProgress: function() {
        try {
            var a = turntable.ialIp.getCurrentSongProgress();
            turntable.playlist.queue.$node.find(".current-song .progress").css("width", a * 100 + "%");
        } catch(b) {}
    },
    messageReceived: function(b) {
        if (b.command == "upload_complete") {
            this.filesProcessed += 1;
            this.updateProcessing();
            this.filesProcessing[b.jobid].remove();
            if (this.queue.contains(b.fid)) {
                return;
            }
            this.addToCurrentPlaylist({
                fileId: b.fid,
                metadata: b.metadata
            });
        } else {
            if (b.command == "upload_failed") {
                var a = b.err || "Your upload failed. There may have been a problem with the file, or the song wasn't long enough.";
                if (turntable.ialIp && turntable.ialIp.showRoomTip) {
                    turntable.ialIp.showRoomTip(a);
                }
                this.filesProcessing[b.jobid].remove();
                if (this.filesToProcess > 0) {
                    this.filesToProcess -= 1;
                    this.updateProcessing();
                }
            } else {
                if (b.command == "search_complete" || b.command == "search_failed") {
                    this.showSearchResults(b);
                }
            }
        }
    },
    updateFileid: function(e, b) {
        if (this.currentPreviewid == e) {
            this.currentPreviewid = b;
        }
        var a = this.queue.attributes.songids,
        c = a.indexOf(e);
        if (c != -1) {
            a[c] = b;
        }
        var f = this.queue.renderedItems,
        d = f[e];
        if (f[e]) {
            f[b] = d;
            delete f[e];
        }
        a = this.queue.filteredSongids;
        c = a.indexOf(e);
        if (c != -1) {
            a[c] = b;
        }
        f = this.queue.songsToShow;
        if (f[e]) {
            f[b] = true;
            delete f[e];
        }
        f = this.songsByFid;
        d = f[e];
        if (d) {
            d.fileId = b;
            f[b] = d;
            f[e] = null;
        }
        a = this.searchResults.attributes.songids;
        c = a.indexOf(e);
        if (c != -1) {
            a[c] = b;
        }
        f = this.searchResults.songsToShow;
        if (f[e]) {
            f[b] = true;
            delete f[e];
        }
        f = this.searchResultsByFid;
        d = f[e];
        if (d) {
            d.fileId = b;
            f[b] = d;
            f[e] = null;
        }
        this.queue.reset();
        this.searchResults.reset();
    },
    initDragAndDrop: function() {
        var a;
        $(document).bind("dragenter dragover", function(f) {
            var d = f.originalEvent.dataTransfer.types.length;
            for (var c = 0; c < d; c++) {
                if (f.originalEvent.dataTransfer.types[c] == "Files") {
                    $("#drop-zone").show();
                    window.clearTimeout(a);
                    break;
                }
            }
        }).bind("dragleave dragexit", function(c) {
            a = window.setTimeout(function() {
                $("#drop-zone").hide();
            }, 100);
        }).bind("drop", function(c) {
            $("#drop-zone").attr("style", "").hide();
        }).bind("mouseleave", function(c) {
            $("#drop-zone").attr("style", "").hide();
        });
        var b;
        $("#drop-zone").bind("dragenter dragover", function(c) {
            $(this).css("background", "#ccc");
            window.clearTimeout(b);
        }).bind("dragleave", function(c) {
            b = window.setTimeout(function() {
                $("#drop-zone").css("background", "");
            }, 100);
        });
    },
    initUploader: function() {
        LOG("Initializing plupload...");
        var a = turntable.uploader = new plupload.Uploader({
            runtimes: "html5,flash,silverlight",
            browse_button: "pickfiles",
            browse_button_hover: "hover",
            browse_button_active: "active",
            container: "plupload",
            drop_element: "drop-zone",
            autostart: true,
            max_file_size: "30mb",
            url: "/upload/" + turntable.currentSocketServer,
            flash_swf_url: "/static/plupload/js/plupload.flash.swf",
            silverlight_xap_url: "/static/plupload/js/plupload.silverlight.xap",
            filters: [{
                title: "Music files",
                extensions: "mp3"
            }],
            multipart_params: {
                type: "file"
            }
        });
        a.init();
        a.bind("FilesAdded", turntable.playlist.beginUpload);
        a.bind("UploadProgress", function(b, c) {
            $(".plFile-" + c.id + " .progress").css("width", c.percent + "%");
        });
        a.bind("FileUploaded", function(b, d, f) {
            LOG("file uploaded: " + f.response);
            var c = JSON.parse(f.response);
            turntable.playlist.endUpload(d, c.jobid);
            if (!c.success) {
                var e = "There was an error uploading " + c.filename + " \u2014 please check the song file.";
                turntable.playlist.messageReceived({
                    command: "upload_failed",
                    err: e,
                    jobid: c.jobid
                });
            }
        });
    },
    beginUpload: function(f, b) {
        ASSERT(b.length, "beginUpload called with 0 files... intentional?");
        $("#drop-zone").attr("style", "").hide();
        this.$panes.removeClass("subsection-visible");
        this.clearSearchBar();
        turntable.playlist.filesToProcess += b.length;
        turntable.playlist.updateProcessing();
        var e = $("#songs"),
        g = e.find(".uploads");
        for (var d = 0, a = b.length; d < a; d++) {
            var c = util.buildTree(turntable.playlist.layouts.uploadingView(b[d].name));
            $(c).addClass("plFile-" + b[d].id).appendTo(g);
        }
        e.scrollTop(turntable.playlist.queue.$node.height());
        turntable.playlist.filesUploading = turntable.playlist.filesUploading.concat(b);
        turntable.uploader.settings.url = "/upload/" + turntable.currentSocketServer;
        turntable.uploader.settings.multipart_params.userid = turntable.user.id;
        turntable.uploader.settings.multipart_params.userauth = turntable.user.auth;
        turntable.uploader.settings.multipart_params.port = String(turntable.socket.options.port);
        f.start();
    },
    endUpload: function(b, e) {
        LOG(b.name + " finished uploading");
        var d = $.inArray(b, turntable.playlist.filesUploading);
        ASSERT(d != -1, "Never began uploading " + b.name);
        turntable.playlist.filesUploading.splice(d, 1);
        var c = b.id;
        var a = $(".plFile-" + c);
        turntable.playlist.filesProcessing[e] = a;
        a.find(" .details").text("Processing...");
        turntable.playlist.updateProcessing();
    },
    addSearchResult: function(b) {
        if (this.queueEditsLocked) {
            return;
        }
        var a = $(b.target).closest(".song").data("songData");
        this.addToCurrentPlaylist(a, 0);
    },
    switchPlaylist: function(a) {
        var b = this;
        return turntable.hYkveeiflds({
            api: "playlist.switch",
            playlist_name: a
        }).done(function(c) {
            b.queue.deselectAllSongs();
        });
    },
    createPlaylist: function(a) {
        return turntable.hYkveeiflds({
            api: "playlist.create",
            playlist_name: a
        });
    },
    renamePlaylist: function(b, a) {
        return turntable.hYkveeiflds({
            api: "playlist.rename",
            old_playlist_name: b,
            new_playlist_name: a
        });
    },
    deletePlaylist: function(a) {
        return turntable.hYkveeiflds({
            api: "playlist.delete",
            playlist_name: a
        });
    },
    addToCurrentPlaylist: function(b, a) {
        return this.addSong(b, undefined, a);
    },
    addSong: function(c, b, a) {
        return this.addSongs([c], b, a);
    },
    addSongs: function(e, d, c) {
        var a = this.queue,
        b = [];
        for (var f = 0; f < e.length; f++) {
            b.push({
                fileid: e[f].fileId
            });
        }
        if (c === undefined) {
            if (d == this.activePlaylist && this.currentSong) {
                c = a.attributes.songids.length - 1;
            } else {
                c = -1;
            }
        }
        if (d === undefined) {
            d = this.activePlaylist;
        }
        this.lockQueueEdits();
        var g = this;
        return turntable.hYkveeiflds({
            api: "playlist.add",
            playlist_name: d,
            index: c,
            song_dict: b
        }, function(k) {
            if (!k.success) {
                g.loadList();
                g.unlockQueueEdits();
                return;
            }
            if (d != g.activePlaylist) {
                g.unlockQueueEdits();
                return;
            }
            for (var h = 0; h < e.length; h++) {
                var j = e[h],
                m = e[h].fileId;
                g.songsByFid[m] = j;
                if (turntable.playlist.cache.usable) {
                    try {
                        g.cache.setItem(m, j);
                    } catch(l) {}
                }
                if (g.isFiltering) {
                    g.queue.songsToShow[m] = true;
                    delete g.searchResults.songsToShow[m];
                }
                g.queue.add(m, c);
                if (k.song_dicts[h].mnid) {
                    g.updateFileid(k.song_dicts[h].mnid, k.song_dicts[h].fileid);
                }
            }
            if (g.isFiltering) {
                g.searchResults.refilter();
                g.savedScrollPosition = 0;
            }
            g.unlockQueueEdits();
        });
    },
    removeSong: function(a, b) {
        return this.removeSongs([b]);
    },
    removeSongs: function(b) {
        this.lockQueueEdits();
        var a = this;
        // NOTE: remove
        return turntable.hYkveeiflds({
            api: "playlist.remove",
            playlist_name: a.activePlaylist,
            index: b
        }, function(d) {
            if (!d.success) {
                a.unlockQueueEdits();
                return;
            }
            for (var c = 0; c < d.song_dict.length; c++) {
                var e = d.song_dict[c].fileid;
                if (a.searchResults.songsToShow) {
                    a.searchResults.songsToShow[e] = true;
                }
                delete a.songsByFid[e];
                if (a.currentPreviewid == e) {
                    a.previewStop();
                }
            }
            if (a.searchResults.songsToShow) {
                a.searchResults.refilter();
            }
            a.unlockQueueEdits();
        });
    },
    reorder: function(a, b) {
        var d = {
            api: "playlist.reorder",
            playlist_name: this.activePlaylist,
            index_from: a,
            index_to: b
        };
        this.lockQueueEdits();
        var c = this;
        return turntable.hYkveeiflds(d, function(e) {
            c.unlockQueueEdits();
        });
    },
    lockQueueEdits: function() {
        this.$songs.addClass("locked");
        this.queueEditsLocked = true;
        this.queue.locked = true;
        this.searchResults.locked = true;
        this.unlockTimer = window.setTimeout($.proxy(function() {
            this.unlockTimer = null;
            this.loadList();
            this.unlockQueueEdits();
        }, this), 5000);
    },
    unlockQueueEdits: function() {
        if (this.unlockTimer) {
            window.clearTimeout(this.unlockTimer);
            this.unlockTImer = null;
        }
        this.$songs.removeClass("locked");
        this.queueEditsLocked = false;
        this.queue.locked = false;
        this.searchResults.locked = false;
    },
    searchKeyUp: function(d) {
        var g = $(d.target),
        b = g.closest(".search"),
        a = b.find(".mag-glass"),
        c = g.val().trim(),
        f = false;
        if (this.searchBarValue == c) {
            return;
        }
        if (!this.searchBarValue) {
            this.savedScrollPosition = this.$songs.scrollTop();
        }
        if (c) {
            a.addClass("clear-search");
            this.isFiltering = true;
        } else {
            a.removeClass("clear-search");
            this.isFiltering = false;
            f = true;
        }
        turntable.playlist.filterQueue(c);
        turntable.playlist.initSongSearch(c);
        this.searchBarValue = c;
        this.decorateQueueView();
        if (f && util.notEmpty(this.savedScrollPosition)) {
            this.$songs.scrollTop(this.savedScrollPosition);
            this.savedScrollPosition = null;
        }
    },
    clearSearchButtonClicked: function(b) {
        var a = $(b.target);
        if (a.hasClass("clear-search")) {
            turntable.playlist.clearSearchBar();
            turntable.playlist.$searchInput.blur();
        }
    },
    clearSearchBar: function() {
        var b = $(".clear-search").removeClass("clear-search"),
        a = b.closest(".search"),
        c = a.find("input");
        c.val("").focus();
        this.searchBarValue = "";
        this.isFiltering = false;
        turntable.playlist.filterQueue("");
        turntable.playlist.initSongSearch("");
        if (util.notEmpty(this.savedScrollPosition)) {
            this.$songs.scrollTop(this.savedScrollPosition);
            this.savedScrollPosition = null;
        }
        this.decorateQueueView();
    },
    decorateQueueView: function() {
        var a = this.$emptyQueue || $("#empty-queue");
        if (this.loadListDone && this.queue.attributes.songids.length == 0 && !this.isFiltering) {
            a.show();
        } else {
            a.hide();
        }
        if (this.queueMessageInitialized) {
            var b = this.$queueMessage || $(".queue-message");
            if (this.isFiltering) {
                b.hide();
            } else {
                b.show();
            }
        }
    },
    parseFilter: function(c) {
        var d = new RegExp(/\b(album|artist|duration|title):(.*?)(?=\balbum:|\bartist:|\bduration:|\btitle:|$)/);
        var a = {};
        while (true) {
            var b = d.exec(c);
            if (b == null) {
                break;
            }
            if (b[1] == "duration") {
                a[b[1]] = $.trim(b[2]);
            } else {
                a[b[1]] = new RegExp($.trim(b[2]).replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&"), "i");
            }
            c = c.replace(b[0], "");
        }
        if (c != null) {
            a.all = c;
        } else {
            a.all = "";
        }
        return a;
    },
    filterQueue: function(k) {
        if (k && k.length > 0) {
            var g = this.parseFilter(k);
            var u = g.all.split(/\s+/g),
            f = $.map(u, function(i) {
                return new RegExp(i.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&"), "i");
            });
            var v = {},
            q = 0,
            a = this.queue.attributes.songids,
            e = u.length;
            for (var r = 0, s = a.length; r < s; r++) {
                var m = a[r],
                l = this.songsByFid[m].metadata,
                t = l.song,
                d = l.artist,
                n = l.album,
                c = l.length,
                h = true;
                for (var p = 0; p < e; p++) {
                    var b = f[p];
                    if (!b.test(t) && !b.test(d) && !b.test(n)) {
                        h = false;
                        break;
                    }
                }
                if (h && g.hasOwnProperty("artist")) {
                    if (!g.artist.test(d)) {
                        h = false;
                    }
                }
                if (h && g.hasOwnProperty("title")) {
                    if (!g.title.test(t)) {
                        h = false;
                    }
                }
                if (h && g.hasOwnProperty("album")) {
                    if (!g.album.test(n)) {
                        h = false;
                    }
                }
                if (h && g.hasOwnProperty("duration")) {
                    var o = parseInt(g.duration.split(":")[0]);
                    if (!isNaN(o)) {
                        if (c < o * 60 || c > (o + 1) * 60) {
                            h = false;
                        }
                    }
                }
                if (h) {
                    v[m] = true;
                    q++;
                }
            }
            this.queue.setFilter(v);
            this.queue.showTitle();
            if (this.currentPreviewid && !v[this.currentPreviewid]) {
                this.previewStop();
            }
            turntable.playlist.notifyGAOfFilter(k, q);
        } else {
            this.queue.clearFilter();
            this.queue.hideTitle();
            if (this.currentPreviewid && !this.queue.contains(this.currentPreviewid)) {
                this.previewStop();
            }
        }
    },
    notifyGAOfFilter: util.delay(null, function(b, a) {
        _gaq.push(["_trackEvent", "queue", "filter", b, a]);
    }, 1000),
    initSongSearch: function(a) {
        this.searchFailed = false;
        this.searchResults.reset([]);
        if (a.length > 2) {
            this.$searchResults.show();
            this.$searchLoading.show();
        } else {
            this.$searchResults.hide();
            this.$searchLoading.hide();
        }
        this.delayedSongSearch(a);
        this.$searchEmpty.hide();
        this.lastQuery = "";
        this.$songs.off("scroll", this.searchScrollHandler);
    },
    songSearch: function(c) {
        if (c.length <= 2) {
            return;
        }
        var b = 1;
        if (c == this.lastQuery) {
            if (this.searchFailed) {
                return;
            }
            b = this.latestResultsPage + 1;
            var a = Date.now();
            if (b === this.lastPageRequested && (a - this.lastSearchTime) < this.SEARCH_DELAY) {
                return;
            }
        } else {
            _gaq.push(["_trackEvent", "song", "search", c]);
            this.searchFailed = false;
            this.latestResultsPage = 0;
        }
        this.lastSearchTime = Date.now();
        this.lastPageRequested = b;
        turntable.hYkveeiflds({
            api: "file.search",
            query: c,
            page: b
        });
        if (b == 1) {
            this.$searchResults.show();
        }
        this.$searchLoading.show();
        this.lastQuery = c;
    },
    showSearchResults: function(e) {
        if ((e.command != "search_complete" && e.command != "search_failed") || e.query != this.searchBarValue || (turntable.playlist.latestResultsPage && e.page != turntable.playlist.latestResultsPage + 1)) {
            return;
        }
        this.$searchLoading.hide();
        var g;
        if (!e.success) {
            g = (e.err ? "Error: " + e.err: "Sorry, the search failed. Please try again later.");
        } else {
            if (e.docs.length == 0) {
                g = "Sorry, no results could be found.";
            }
        }
        if (g) {
            this.$searchEmpty.text(g).show();
            this.searchFailed = true;
            return;
        }
        this.$searchEmpty.hide();
        if (e.page == 1) {
            this.filteredSearchResults = {};
            for (var m in this.searchResultsByFid) {
                if (this.searchResultsByFid.hasOwnProperty(m)) {
                    delete this.searchResultsByFid[m];
                }
            }
        }
        var j = e.docs,
        b = [],
        k = this.filteredSearchResults,
        o = this.searchResultsByFid,
        n = this.queue.attributes.songids;
        for (var d = 0, h = j.length; d < h; d++) {
            var l = j[d],
            c = l._id,
            a = {
                fileId: c,
                metadata: l.metadata
            };
            if (!o[c]) {
                o[c] = a;
                b[d] = c;
                if (!this.queue.contains(c)) {
                    k[c] = true;
                }
            }
        }
        if (e.page == 1) {
            this.searchResults.reset(b);
            this.$songs.on("scroll", this.searchScrollHandler);
        } else {
            var f = this.searchResults.attributes.songids;
            this.searchResults.reset(f.concat(b));
        }
        turntable.playlist.searchResults.setFilter(k);
        this.latestResultsPage = e.page;
        this.searchScrollHandler();
    },
    searchScrollHandler: function(a) {
        if ((this.$searchResults.offset().top + this.$searchResults.height()) - (this.$songs.offset().top + this.$songs.height()) < 50) {
            this.songSearch(this.lastQuery);
        }
    },
    buySong: function() {
        var b = $(this).closest(".song").data("songData").fileId;
        if (b) {
            var a = "itunes";
            window.open("/link/?fileid=" + b + "&site=" + a, a + b);
        }
    },
    previewPlay: function() {
        var a = $(this).closest(".song"),
        b = a.data("songData").fileId;
        turntablePlayer.samplePlay(b, turntable.playlist.previewCallback);
        a.addClass("currentPreview").find(".progress").css("width", "0%");
        turntable.playlist.currentPreviewid = b;
        turntable.playlist.$currentPreview = a;
    },

    // TODO: comback for this! tracking progress will be a must
    previewCallback: function(c, b) {
        if (c == "progress") {
            var a = turntable.playlist.$currentPreview;
            if (a) {
                if (turntable.playlist.currentPreviewIsFresh) {
                    a.addClass("currentPreview");
                    turntable.playlist.currentPreviewIsFresh = false;
                }
                a.find(".progress").css("width", b);
            }
        } else {
            if (c == "stop") {
                $("#playlist .song.currentPreview").removeClass("currentPreview").find(".progress").css("width", "0%");
                turntable.playlist.currentPreviewid = null;
            }
        }
    },
    previewStop: turntablePlayer.sampleStop,
    updateProcessing: function() {
        var a = this.$playlistView.find(".processing");
        if (this.filesProcessed >= this.filesToProcess) {
            this.filesProcessed = this.filesToProcess = 0;
        }
        if (this.filesToProcess > 0) {
            a.find(".text").html("Uploads &mdash; Processed " + this.filesProcessed + " of " + this.filesToProcess + " files");
            a.show();
        } else {
            a.hide();
        }
    },
    getNumPlaylists: function() {
        return Object.getOwnPropertyNames(this.playlists).length;
    },
    setPlaylistHeight: function(a) {
        if (a === null || a === undefined) {
            a = 351;
        } else {
            if (a < 25) {
                a = 25;
            }
        }
        this.$playlistView.css({
            height: a
        });
        return a;
    },
    // c: playlistdata, b: event target
    setActivePlaylist: function(c, b) {
        var a = this.activePlaylist = c;
        this.loadPlaylistsDeferred.done(function() {
            $("#playlist-display").find(".text").text(c);
            var d = $("#playlist-dropdown");
            if (d.length) {
                $("#playlist-dropdown .playlist").removeClass("active");
                if (b) {
                    b.addClass("active");
                } else {
                    d.find(".playlist").each(function(e, f) {
                        if ($.data(f, "playlist") == a) {
                            f.className += " active";
                        }
                    });
                }
            }
        });
    }
};
turntable.playlist.layouts = {
    playlistView: ["div#playlist##root", {}, ["div#queue-view-panes", {}, ["div#queue-view.main-pane", {}, ["div#playlist-header.floating-panel-header", ["div#playlist-display.panel-button", ["div.pushdown-content", ["div.queue-inset-icon"], ["div.text"], ["div.arrow-icon"]]]], ["div#queue-header.floating-panel-header.normal", ["div#normal-mode", ["div#upload-button.down", {
        title: "Upload music"
    }, ["button", "Upload music"]], ["div.divider"], ["form.search.song-search", {
        event: {
            submit: function() {
                return false;
            }
        }
    }, ["input#song-search-input", {
        type: "text",
        placeholder: "search for songs",
        event: {
            keyup: $.proxy(turntable.playlist.searchKeyUp, turntable.playlist)
            }
    }], ["div.mag-glass", {
        event: {
            click: turntable.playlist.clearSearchButtonClicked
        }
    }]]], ["div#batch-edit-mode", ["div.show-playlists.disabled.panel-button", ["div.pushdown-content", ["div.queue-plus-inset-icon"], ["div.text", "Add to Playlist"], ["div.arrow-icon"]]], ["div.remove.disabled.panel-button", ["div.pushdown-content", ["div.trash-icon"]]], ["button.done.primary.small.inset.tt-button", "Done"]]], ["div#songs-wrapper", ["div#songs", {}, ["div#queue"], ["div.uploads", {}, ["div.processing.separator", {
        style: {
            display: "none"
        }
    }, ["div.text"]]], ["div.queue-message", {
        style: {
            display: "none"
        }
    }, ["div.hide"], "Sorry! ", ["span.blockedSongs"], " pulled from your queue. ", ["a", {
        href: "/removed_songs",
        target: "_blank"
    }, "Learn more"], "."], ["div#empty-queue.default-message", {
        style: {
            display: "none"
        }
    }, ["p", "No songs in your queue. Start searching for songs to add!"]], ["div#search-results"], ["div#search-loading", {
        style: {
            display: "none"
        }
    }, ["div.text", "Searching turntable"]], ["div#search-empty", {
        style: {
            display: "none"
        }
    }]]]], ["div#upload-pane.main-pane", ["div.floating-panel-header", {}, ["button.back", "Back"], ["span.title", "Upload Music"]], ["div#upload-view", ["div.flat-button#plupload", ["div#pickfiles", "Browse Files"]], ["div.orText", "or"], ["div.drop-message", {}, ["img", {
        src: "https://s3.amazonaws.com/static.turntable.fm/images/playlist/move_small.png"
    }], ["span", "Drag files here"]], ["div.upload-tos", "By uploading music, you agree to the ", ["a", {
        href: "/terms/",
        target: "_blank"
    }, "Terms of Service"], "."]]]], ["div#drop-zone", {}, ["div#drop-zone-text.centered-pane", {}, ["img", {
        src: "https://s3.amazonaws.com/static.turntable.fm/images/playlist/move_big.png"
    }], ["div#drop-zone-main-text", "Drop songs here"], ["div#drop-zone-small-text", "to upload them to your queue"]]]],
    songView: function(f, d, a) {
        var e = f.metadata,
        c = [],
        b = e.artist + " \u2022 " + util.prettyTime(e.length);
        if (!dmca.showPreview(f)) {
            c.push(".noPreview");
        }
        if (a !== undefined && a % 2 === 0) {
            c.push(".nth-child-even");
        }
        return ["li.song" + c.join(""), {
            data: {
                songData: f
            },
            style: ((d !== undefined) ? {
                top: d
            }: {})
            }, ["div.progress-bar", ["div.progress"]], ["div.vinyl"], ["div.thumb", {
            style: {
                "background-image": (e.coverart ? "url(" + e.coverart + ")": "")
                }
        }], ["div.playSample"], ["div.pauseSample"], ["div.title", {
            title: e.song
        }, e.song], ["div.details", {
            title: b
        }, ["span", e.artist, ["span.divider", " \u2022 "], util.prettyTime(e.length)]], ["div.go-top"], ["div.open-options"], ["div.checkbox"]];
    },
    searchedSongView: function(f, d, a) {
        var e = f.metadata,
        c = [],
        b = e.artist + " \u2022 " + util.prettyTime(e.length);
        if (!dmca.showPreview(f)) {
            c.push(".noPreview");
        }
        if (a % 2 === 0) {
            c.push(".nth-child-even");
        }
        return ["div.song" + c.join(""), {
            data: {
                songData: f
            },
            style: ((d !== undefined) ? {
                top: d
            }: {})
            }, ["div.progress-bar", ["div.progress"]], ["div.thumb", {
            style: {
                "background-image": (e.coverart ? "url(" + e.coverart + ")": "")
                }
        }], ["div.playSample"], ["div.pauseSample"], ["div.title", {
            title: e.song
        }, e.song], ["div.details", {
            title: b
        }, ["span", e.artist, ["span.didver", " \u2022 "], util.prettyTime(e.length)]], ["div.addSong"]];
    },
    uploadingView: function(a) {
        return ["div.song.uploading", {}, ["div.thumb"], ["div.progress-bar", ["div.progress"]], ["div.title", {}, a], ["div.details", {}, "Uploading..."]];
    },
    batchCopyDropdown: function() {
        var d = ["ul#batch-copy-dropdown.floating-menu"],
        c = turntable.playlist.playlists;
        for (var a in c) {
            if (c.hasOwnProperty(a)) {
                var b = ["li.option.playlist", {
                    data: {
                        playlist: a
                    }
                }, ["div.queue-icon"], ["span.playlist-label", a]];
                if (turntable.playlist.activePlaylist != a) {
                    d.push(b);
                }
            }
        }
        return d;
    },
    playlistRow: function(a) {
        var b = ["li.option.playlist", {
            data: {
                playlist: a
            }
        }, ["div.queue-icon"], ["span.playlist-label", a], ];
        if (a != turntable.playlist.defaultPlaylistName) {
            b.push(["div.edit-icon"], ["div.delete-playlist-icon"], ["form.playlist-input", ["input", {
                type: "text"
            }]], ["div.cancel", "cancel"]);
        }
        if (a == turntable.playlist.activePlaylist) {
            b[0] += ".active";
        }
        return b;
    },
    playlistHeaderDropdown: function() {
        var d = ["ul.floating-menu#playlist-dropdown"],
        c = [],
        b = turntable.playlist.playlists;
        for (var a in b) {
            if (b.hasOwnProperty(a)) {
                c.push(turntable.playlist.layouts.playlistRow(a));
            }
        }
        c.push(["li.option.new-playlist", ["div.queue-plus-icon"], ["span.playlist-label", "New Playlist"], ["form.playlist-input", ["input", {
            type: "text"
        }]], ["div.cancel", "cancel"]], ["li.option#trigger-batch", ["span.text", "Organize Songs"]]);
        d.push(c);
        return d;
    },
    songOptionsMenu: function(b) {
        var a = turntable.playlist.layouts;
        return ["ul.floating-menu.song-options", {
            data: {
                songid: b
            }
        }, ["div.outer-arrow"], ["div.inner-arrow"], ["div.menu-wrapper", ["div#song-option-panes", ["div#song-option-first-pane", a.firstMenu()], ["div#song-option-second-pane", a.secondMenu()]]]];
    },
    firstMenu: function() {
        return [["li.option.switch-menu" + ((turntable.playlist.getNumPlaylists() > 1) ? "": ".disabled"), ["div.queue-plus-icon"], ["div.right-arrow-icon"], ["div.text", "Add to playlist"]], ["li.option.playlist-remove", ["div.trash-icon"], ["div.text", "Remove from playlist"]], ["li.option.site-add", ["div.btn.amazon", {
            data: {
                site: "amazon"
            }
        }], ["div.btn.itunes", {
            data: {
                site: "itunes"
            }
        }], ["div.btn.lastfm", {
            data: {
                site: "lastfm"
            }
        }], ["div.btn.spotify", {
            data: {
                site: "spotify"
            }
        }], ["div.btn.rdio", {
            data: {
                site: "rdio"
            }
        }]]];
    },
    secondMenu: function() {
        var d = turntable.playlist.playlists,
        b = [],
        a = ["div.content-scroller"];
        b.push(["li.option.switch-menu.second", ["div.queue-plus-inset-icon"], ["div.left-arrow-icon"], ["div.text", "Add to playlist"]]);
        for (var c in d) {
            if (d.hasOwnProperty(c)) {
                if (turntable.playlist.activePlaylist != c) {
                    a.push(["li.option.playlist-add", {
                        data: {
                            playlist: c
                        }
                    }, ["div.queue-icon"], ["div.text", c]]);
                }
            }
        }
        b.push(a);
        return b;
    },
    removeSongConfirmation: function(c, b, a) {
        return [ActionModal, {
            submitText: "Delete",
            submitCallback: a
        }, ["div.removeConfirmation", "Are you sure you want to remove " + c + " from playlist '" + b + "'?"]];
    },
    removePlaylistConfirmation: function(b, a, c) {
        return [ActionModal, {
            submitText: "Delete",
            submitCallback: a,
            closeCallback: c
        }, ["div.removeConfirmation", "Are you sure you want to delete playlist '" + b + "'?"]];
    }
};
turntable.playlist.cache = function() {
    var a = {
        prefix: "_pl_"
    };
    return {
        usable: ( !! window.localStorage),
        getItem: function(b) {
            return JSON.parse(localStorage.getItem(a.prefix + b));
        },
        removeItem: function(b) {
            localStorage.removeItem(a.prefix + b);
        },
        setItem: function(c, b) {
            var f = JSON.stringify(b);
            try {
                localStorage.setItem(a.prefix + c, f);
            } catch(d) {
                LOG("cache size limit reached");
                return false;
            }
            return true;
        },
        toObject: function() {
            var b = {};
            for (var c in localStorage) {
                if (c.lastIndexOf(a.prefix, 0) === 0) {
                    c = c.slice(a.prefix.length);
                    b[c] = this.getItem(c);
                }
            }
            return b;
        },
        loadObject: function(c) {
            for (var b in c) {
                if (c.hasOwnProperty(b)) {
                    var d = this.setItem(b, c[b]);
                    if (!d) {
                        return false;
                    }
                }
            }
            return true;
        },
        fromObject: function(c) {
            for (var b in localStorage) {
                if (b.lastIndexOf(a.prefix, 0) === 0) {
                    localStorage.removeItem(b);
                }
            }
            return this.loadObject(c);
        }
    };
} ();
var SongList = TTNode.extend({
    attributes: {
        idd: "songList",
        songids: [],
        $viewport: null,
        itemHeight: 50,
        maxItemsInDOM: 150,
        titleText: null,
        backingMap: {},
        songConstructor: null,
        highlightTopSong: false,
        alwaysShowTitle: false
    },
    layout: function() {
        return ["div.song-list", ["ul.songs"]];
    },
    init: function(a) {
        this._super(a);
        this.itemPaddingSize = Math.floor(this.attributes.maxItemsInDOM / 2);
        this.itemPaddingHeight = this.itemPaddingSize * this.attributes.itemHeight;
        this.$viewport = this.attributes.$viewport;
        this.redraw = $.proxy(this.redraw, this);
        this.viewportScroll = $.proxy(this.viewportScroll, this);
        this.currentlyPlayingSongPassedFilter = true;
        this.notifyPreviewCreated = $.proxy(this.notifyPreviewCreated, this);
        this.notifyPreviewRemoved = $.proxy(this.notifyPreviewRemoved, this);
    },
    render: function(a, b) {
        this._super(a, b);
        this.$songs = this.$node.find(".songs");
        if (this.attributes.titleText) {
            this.$title = $(util.buildTree(["div.separator", ["div.text", this.attributes.titleText]]));
            this.$node.prepend(this.$title);
            this.titleVisible = true;
        }
        this.renderedItems = {};
        this.reset();
        this.$viewport.on("scroll", util.rateLimit(this, this.scroll, 250));

        // NOTE: song previews
        this.$songs.on("click", ".playSample", turntable.playlist.previewPlay)
                    .on("click", ".pauseSample", turntable.playlist.previewStop).on("click", ".buy", turntable.playlist.buySong);
    },
    scroll: function(b) {
        var a = this.$viewport.scrollTop();
        if (Math.abs(a - this.lastRedrawScrollTop) > this.itemPaddingHeight - 2 * this.$viewport.height()) {
            if (this.redrawTimeout) {
                window.clearTimeout(this.redrawTimeout);
            }
            this.redrawTimeout = null;
            this.redraw(a);
        } else {
            if (this.redrawTimeout) {
                window.clearTimeout(this.redrawTimeout);
            }
            this.redrawTimeout = window.setTimeout(this.redraw, 1000);
        }
    },
    redraw: function(n) {
        var f = this.$viewport.scrollTop(),
        j = this.$viewport.height(),
        B = f - this.$songs[0].offsetTop + j / 2,
        H = Math.floor(B / this.attributes.itemHeight),
        x = this.attributes.itemHeight,
        d = this.filteredSongids || this.attributes.songids,
        G = d.length,
        z = 0,
        m,
        y = this.attributes.highlightTopSong,
        a = this.currentlyPlayingSongid || this.attributes.songids[0],
        D = {},
        F = false,
        g = turntable.playlist.currentPreviewid,
        k = {},
        c = [];
        if (this.currentlyPlayingSongid && this.currentlyPlayingSongid != this.attributes.songids[0] && this.currentlyPlayingSongPassedFilter) {
            z = 1;
        }
        if (H < this.itemPaddingSize) {
            m = 0;
        } else {
            if (H > G - this.itemPaddingSize) {
                m = Math.max(0, G - this.attributes.maxItemsInDOM);
            } else {
                m = H - this.itemPaddingSize;
            }
        }
        var h = Math.min(G, m + this.attributes.maxItemsInDOM);
        for (var A = m; A < h; A++) {
            if (D[d[A]] != undefined) {
                F = true;
            }
            D[d[A]] = A;
        }
        if (this.currentlyPlayingSongid && this.currentlyPlayingSongid != this.attributes.songids[0] && this.currentlyPlayingSongPassedFilter && m === 0) {
            D[this.currentlyPlayingSongid] = 0;
        }
        for (var u in this.renderedItems) {
            if (this.renderedItems.hasOwnProperty(u)) {
                var q = this.renderedItems[u],
                p,
                b,
                r,
                o,
                E;
                if (this.currentlyPlayingSongid == u && this.currentlyPlayingSongPassedFilter && m === 0) {
                    if (n) {
                        p = 0;
                        r = 0;
                        b = q.index;
                        o = q.visibleIndex;
                        E = q.$node.addClass("current-song");
                        q.currentSong = true;
                        E.trigger("song.currentSet", true);
                    }
                } else {
                    if (D[u] !== undefined && this.currentlyPlayingSongid != u) {
                        if (n) {
                            p = D[u];
                            r = p + z;
                            b = q.index;
                            o = q.visibleIndex;
                            E = q.$node;
                            if (q.currentSong) {
                                E.removeClass("current-song");
                                q.currentSong = false;
                                E.trigger("song.currentSet", false);
                            }
                        }
                    } else {
                        if (g && g == u) {
                            window.setTimeout(this.notifyPreviewRemoved, 0);
                            g = null;
                        }
                        q.$node.remove();
                        c.push(u);
                        delete this.renderedItems[u];
                        continue;
                    }
                }
                delete D[u];
                if (n) {
                    if (p != b) {
                        E.data("index", p);
                    }
                    if (r != o) {
                        var C = r * x;
                        E.css("top", C);
                        if (r % 2 === 0) {
                            E.addClass("nth-child-even");
                        } else {
                            E.removeClass("nth-child-even");
                        }
                        q.index = p;
                        q.visibleIndex = r;
                    }
                    if (y) {
                        var l = (a == u);
                        if (o === 0 && !l) {
                            E.removeClass("topSong");
                        } else {
                            if (r === 0 && l) {
                                E.addClass("topSong");
                            }
                        }
                    }
                }
            }
        }
        var e = document.createDocumentFragment(),
        v = this.attributes.songConstructor,
        t = this.attributes.backingMap;
        for (u in D) {
            if (D.hasOwnProperty(u)) {
                var s = t[u];
                if (!s) {
                    F = true;
                    continue;
                }
                var p = D[u],
                r = p;
                if (u != this.currentlyPlayingSongid) {
                    r += z;
                } else {
                    if (p !== 0) {
                        continue;
                    }
                }
                var C = r * x,
                w = util.buildTree(v(s, C, r)),
                E = $(w),
                q = {
                    $node: E,
                    index: p,
                    visibleIndex: r
                };
                if (y && a == u) {
                    w.className += " topSong";
                }
                if (this.currentlyPlayingSongid == u) {
                    w.className += " current-song";
                    q.currentSong = true;
                }
                $.data(w, "index", p);
                this.renderedItems[u] = q;
                k[u] = q.$node;
                e.appendChild(w);
                if (g && g == u) {
                    window.setTimeout(this.notifyPreviewCreated, 0);
                    g = null;
                }
            }
        }
        this.$songs.append(e);
        $("#songs").trigger("renderedItem.created", k);
        $("#songs").trigger("renderedItem.removed", {
            songids: c
        });
        if (!this.attributes.alwaysShowTitle && this.$title) {
            if (!this.titleVisible && G && !this.hidingTitle) {
                this.$title.show();
                this.titleVisible = true;
            } else {
                if (this.titleVisible && (!G || this.hidingTitle)) {
                    this.$title.hide();
                    this.titleVisible = false;
                }
            }
        }
        this.lastRedrawScrollTop = f;
        return ! F;
    },
    reset: function(b) {
        if (b) {
            this.attributes.songids = b;
            this.filterSongs();
        }
        var c = (this.filteredSongids || this.attributes.songids).length,
        a = c * this.attributes.itemHeight;
        this.$songs.css("height", a);
        this.redraw(true);
    },
    add: function(b, a) {
        if (a < 0) {
            a = this.attributes.songids.length + 1 + length;
        }
        this.attributes.songids.splice(a, 0, b);
        this.refilter();
    },
    setFilter: function(a) {
        this.songsToShow = a;
        this.$node.addClass("filtered");
        this.refilter();
    },
    refilter: function() {
        this.filterSongs();
        this.reset();
    },
    clearFilter: function() {
        delete this.songsToShow;
        delete this.filteredSongids;
        this.currentlyPlayingSongPassedFilter = true;
        this.$node.removeClass("filtered");
        this.reset();
    },
    filterSongs: function() {
        if (!this.songsToShow) {
            delete this.filteredSongids;
            this.currentlyPlayingSongPassedFilter = true;
            return;
        }
        var b = this.attributes.songids,
        e = [],
        f = 0;
        for (var c = 0, a = b.length; c < a; c++) {
            var d = b[c];
            if (this.songsToShow[d] === true) {
                e[f++] = d;
            }
        }
        this.currentlyPlayingSongPassedFilter = this.songsToShow[this.currentlyPlayingSongid];
        this.filteredSongids = e;
    },
    hideTitle: function() {
        this.hidingTitle = true;
        this.redraw();
    },
    showTitle: function() {
        this.hidingTitle = false;
        this.redraw();
    },
    getNodeBySongid: function(a) {
        if (this.renderedItems[a]) {
            return this.renderedItems[a].$node;
        }
    },
    contains: function(a) {
        return this.attributes.songids.indexOf(a) !== -1;
    },
    notifyPreviewCreated: function() {
        this.$node.trigger("SongList:previewCreated");
    },
    notifyPreviewRemoved: function() {
        this.$node.trigger("SongList:previewRemoved");
    }
});
var Queue = SongList.extend({
    attributes: {
        idd: "queue"
    },
    init: function(a) {
        this._super(a);
        this.batchSongMouseDown = $.proxy(this.batchSongMouseDown, this);
        this.songMouseDown = $.proxy(this.songMouseDown, this);
        this.songMouseMove = $.proxy(this.songMouseMove, this);
        this.songMouseUp = $.proxy(this.songMouseUp, this);
        this.moveClone = util.makeDrawer(this, this.moveClone);
        this.throttledReorderIfRequired = util.rateLimit(this, this.reorderIfRequired, 150);
        this.selectedSongs = {};
        this.stateEnum = {
            NORMAL: 0,
            BATCHEDIT: 1
        };
        this.mode = this.stateEnum.NORMAL;
        $("#songs").on("renderedItem.created", $.proxy(this.renderBatchEditRows, this));
        $("#songs").on("renderedItem.removed", $.proxy(this.cleanupRemovedSongs, this));
    },
    render: function(a, c) {
        this._super(a, c);
        this.$currentSong = this.$node.find(".current-song");
        var b = this.songDrag = new Draggable();
        $.extend(b, {
            mousedown: this.songMouseDown,
            mousemove: this.songMouseMove,
            mouseup: this.songMouseUp,
            cursor: "move",
            scroller: this.$viewport[0]
            });
        this.$songs.on("mousedown", ".song", b.setup).on("click", ".go-top", $.proxy(function(h) {
            if (this.locked) {
                return;
            }
            var f = $(h.target).closest(".song"),
            g = f.data("songData").fileId,
            d = this.attributes.songids.indexOf(g);
            turntable.playlist.reorder(d, 0).done($.proxy(function() {
                this.reorderBySongid(g, 0);
                if (turntable.playlist.isFiltering) {
                    turntable.playlist.savedScrollPosition = 0;
                }
            }, this));
        }, this)).on("click", ".open-options", $.proxy(this.initOpenOptions(), this));
    },
    initOpenOptions: function() {
        var a = this,
        g = turntable.playlist,
        f,
        b;
        function e() {
            return b.hasClass("subsection-visible") ? $("#song-option-second-pane") : $("#song-option-first-pane");
        }
        function c(m, n) {
            var j = $("#songs"),
            o = e(),
            q = parseInt(n.css("top")),
            i = j.height(),
            l = a.renderedItems[m],
            p = a.attributes.itemHeight * l.visibleIndex - $("#songs").scrollTop(),
            k = q + 10 + o.height();
            return i - p - k;
        }
        function h(m, i) {
            var k = parseInt(i.css("top")),
            l = c(m, i);
            if (l < 0) {
                var n = i.find(".outer-arrow"),
                j = i.find(".inner-arrow");
                i.css("top", k + l + "px");
                n.css("top", parseInt(n.css("top")) - l + "px");
                j.css("top", parseInt(j.css("top")) - l + "px");
            }
        }
        function d(n, i) {
            var m = c(n, i),
            j = e(),
            k = b.find(".content-scroller"),
            l = k.height();
            newPaneHeight = j.height(),
            detachedMenuThreshold = 9;
            if (b.hasClass("subsection-visible") && (m < 0 || parseInt(i.css("top")) + l < detachedMenuThreshold)) {
                k.height(k.height() + m);
                newPaneHeight += m;
            } else {
                k.height("");
            }
            i.height(newPaneHeight);
        }
        return function(l) {
            var j = $(l.target).closest(".song"),
            k = j.data("songData").fileId;
            if (f && f.data("songid") == k) {
                g.displayMenu.removeMenu();
                return;
            }
            var i = f = $(util.buildTree(g.layouts.songOptionsMenu(k)));
            j.append(g.displayMenu.create(i, j));
            b = $("#song-option-panes");
            i.find(".switch-menu.disabled").tipsy({
                offset: -6,
                gravity: $.fn.tipsy.autoWE,
                fade: true,
                opacity: 1,
                title: function() {
                    return "Create a playlist to add songs";
                }
            });
            h(k, i);
            d(k, i);
            j.on("song.currentSet", function(m) {
                d(k, i);
            }).one("menu.removed", function(m) {
                j.off("song.currentSet");
            });
            i.on("click", ".playlist-add", function(p) {
                var m = $(p.currentTarget),
                n = j.data("songData"),
                o = m.data("playlist");
                m.html("Adding...");
                g.addSong(n, o).done(function(q) {
                    g.displayMenu.removeMenu(i);
                });
            });
            i.find(".site-add").on("click", ".btn", $.proxy(turntable.ialIp.songLogAddClick, turntable.ialIp));
            i.find(".switch-menu:not(.disabled)").on("click", function(m) {
                b.toggleClass("subsection-visible");
                d(k, i);
            });
            i.find(".playlist-remove").on("click", function(q) {
                if (j.hasClass("current-song")) {
                    return;
                }
                var m = $(q.currentTarget),
                o = j.data("songData"),
                p = o.fileId,
                n = a.attributes.songids.indexOf(p);
                util.buildTree(g.layouts.removeSongConfirmation(o.metadata.song, g.activePlaylist, function() {
                    g.removeSong(p, n).done(function() {
                        a.removeIndex(n);
                        g.displayMenu.removeMenu(i);
                    });
                }), a);
                a.modal.show();
            });
        };
    },
    redraw: function(a) {
        var b = this._super(a);
        if (!b) {
            LOG("draw failed! reloading playlist");
            turntable.playlist.loadList();
        }
    },
    reset: function(a) {
        this._super(a);
        turntable.playlist.decorateQueueView();
    },
    append: function(a) {
        this.add(a, this.attributes.songids.length);
    },
    reorder: function(a, c) {
        var b = this.attributes.songids.splice(a, 1)[0];
        this.attributes.songids.splice(c, 0, b);
        this.refilter();
    },
    reorderBySongid: function(d, c) {
        var a = this.attributes.songids,
        b = a.indexOf(d);
        if (b !== -1) {
            this.reorder(b, c);
        }
    },
    removeIndex: function(a) {
        this.removeIndices([a]);
    },
    removeIndices: function(b) {
        b = b.sort(function(c, d) {
            return d - c;
        });
        for (var a = 0; a < b.length; a++) {
            this.attributes.songids.splice(b[a], 1);
        }
        this.refilter();
    },
    removeBySongid: function(c) {
        var a = this.attributes.songids,
        b = a.indexOf(c);
        if (b !== -1) {
            this.removeIndex(b);
        }
    },
    deselectAllSongs: function() {
        if (this.mode != this.stateEnum.BATCHEDIT) {
            return;
        }
        for (var a in this.selectedSongs) {
            if (this.selectedSongs[a]
                instanceof jQuery) {
                this.selectedSongs[a].removeClass("selected");
            }
        }
        this.selectedSongs = {};
        this.queueButtonDecorator();
    },
    removeSelectedSongs: function() {
        if (this.mode != this.stateEnum.BATCHEDIT) {
            return;
        }
        var c = [],
        a = [];
        for (var b in this.selectedSongs) {
            if (this.selectedSongs[b] && this.currentlyPlayingSongid != b) {
                c.push(this.attributes.songids.indexOf(b));
                a.push(b);
            }
        }
        if (!c.length) {
            return;
        }
        turntable.playlist.removeSongs(c).done($.proxy(function() {
            this.removeIndices(c);
            for (var d = 0; d < a.length; d++) {
                var e = a[d];
                this.selectedSongs[e] = null;
            }
            this.queueButtonDecorator();
        }, this));
    },
    addSelectedSongs: function(b) {
        if (this.mode != this.stateEnum.BATCHEDIT) {
            return;
        }
        var a = [];
        for (var c in this.selectedSongs) {
            if (this.selectedSongs[c]) {
                a.push(this.attributes.backingMap[c]);
            }
        }
        return turntable.playlist.addSongs(a, b);
    },
    queueButtonDecorator: function() {
        var b = $("#queue-header .remove"),
        a = $("#queue-header .show-playlists");
        if (this.selectedSongExists(true)) {
            b.removeClass("disabled");
        } else {
            b.addClass("disabled");
        }
        if (this.selectedSongExists() && turntable.playlist.getNumPlaylists() > 1) {
            a.removeClass("disabled");
            a.data("tipsy").disable();
        } else {
            a.addClass("disabled");
            a.data("tipsy").enable();
        }
    },
    selectedSongExists: function(b) {
        for (var a in this.selectedSongs) {
            if (this.selectedSongs[a] && !(b && a == this.currentlyPlayingSongid)) {
                return true;
            }
        }
        return false;
    },
    songMouseDown: function(c) {
        var a = $(c.currentTarget),
        b = a.data("songData").fileId;
        this.setupDragCompleted = false;
        if (this.songsToShow || (b == this.currentlyPlayingSongid) || this.mode == this.stateEnum.BATCHEDIT || this.locked) {
            this.songDrag.cancelDrag();
            return;
        }
        this.$viewport.on("scroll", this.viewportScroll);
        this.$songBeingDragged = a;
        this.mouseOffsetFromSong = c.pageY - a.offset().top;
        c.preventDefault();
    },
    songMouseMove: function(h) {
        if (!this.setupDragCompleted) {
            var b = this.$songBeingDragged,
            g = b.clone().addClass("clone").appendTo(this.$viewport.parent());
            this.$clone = g.width(b.width());
            b.css("opacity", 0);
            this.originalIndex = b.data("index");
            this.currentIndex = this.originalIndex;
            this.viewportScrollTop = this.$viewport.scrollTop();
            this.viewportOffset = this.$viewport.offset().top;
            this.viewportHeight = this.$viewport.height();
            this.listOffsetFromViewport = this.$songs[0].offsetTop;
            this.draggedSongid = b.data("songData").fileId;
            this.setupDragCompleted = true;
            this.minSongVisibleHeight = g.height() / 2;
        }
        var a = this.viewportOffset,
        i = 40,
        f = a + this.viewportHeight;
        if (h) {
            var c = this.mouseOffsetY = h.pageY || this.mouseOffsetY;
            if (c < a) {
                this.scrollVelocity = i * (c - a);
            } else {
                if (c > f) {
                    this.scrollVelocity = i * (c - f);
                } else {
                    this.scrollVelocity = 0;
                }
            }
        }
        var d = (this.mouseOffsetY - this.mouseOffsetFromSong - this.viewportOffset);
        this.cloneOffsetTop = Math.min(Math.max( - this.minSongVisibleHeight, d), this.viewportHeight - this.minSongVisibleHeight);
        this.moveClone();
        this.throttledReorderIfRequired();
        if (h) {
            h.preventDefault();
        }
    },
    songMouseUp: function(h) {
        this.$viewport.off("scroll", this.viewportScroll);
        if (this.setupDragCompleted) {
            this.reorderIfRequired();
            this.throttledReorderIfRequired.cancel();
            this.moveClone.cancel();
            var g = this.originalIndex,
            f = this.currentIndex,
            b = this.$songBeingDragged,
            c = this.$clone,
            d = b.data("songData").fileId,
            a = this,
            i = 0;
            if (this.currentlyPlayingSongid && this.currentlyPlayingSongid != this.attributes.songids[0] && this.currentlyPlayingSongPassedFilter) {
                i = 1;
            }
            c.animate({
                top: (this.currentIndex + i) * this.attributes.itemHeight - this.$viewport.scrollTop()
                }, 300, function() {
                b.css({
                    opacity: ""
                });
                c.remove();
                turntable.playlist.reorder(g, f).fail(function() {
                    a.reorderBySongid.call(a, d, g);
                    alert("sorry move failed");
                });
            });
            this.$clone = null;
        }
    },
    cancelSongDrag: function() {
        this.$viewport.off("scroll", this.viewportScroll);
        this.songDrag.cancelDrag();
        var c = this.$clone,
        b = this.$songBeingDragged,
        a = this;
        c.animate({
            top: 0
        }, 300, function() {
            b.css({
                opacity: ""
            });
            c.remove();
            a.reset();
        });
        this.$clone = null;
    },
    batchSongMouseDown: function(h) {
        var b = $(h.currentTarget),
        j = b.data("songData").fileId;
        if (!$(h.target).is(".playSample, .pauseSample")) {
            if (h.shiftKey) {
                var c = this.lastSelectedSongId || this.attributes.songids[0],
                k = this.attributes.songids.indexOf(c),
                g = this.attributes.songids.indexOf(j);
                if (k > g) {
                    var l = k;
                    k = g;
                    g = l;
                }
                for (var f = k; f <= g; f++) {
                    var d = this.attributes.songids[f],
                    a = this.getNodeBySongid(d);
                    if (a) {
                        a.addClass("selected");
                        this.selectedSongs[d] = a;
                    } else {
                        this.selectedSongs[d] = true;
                    }
                }
            } else {
                b.toggleClass("selected");
                this.selectedSongs[j] = this.selectedSongs[j] ? null: b;
            }
            this.lastSelectedSongId = j;
            this.queueButtonDecorator();
        }
    },
    viewportScroll: function() {
        this.viewportScrollTop = this.$viewport.scrollTop();
        this.songMouseMove();
    },
    reorderIfRequired: function() {
        if (this.draggedSongid == this.currentlyPlayingSongid) {
            this.cancelSongDrag();
        }
        var b = 0;
        if (this.currentlyPlayingSongid && this.currentlyPlayingSongid != this.attributes.songids[0] && this.currentlyPlayingSongPassedFilter) {
            b = 1;
        }
        var a = Math.round((this.cloneOffsetTop + this.viewportScrollTop) / this.attributes.itemHeight - b);
        a = Math.min(Math.max(a, 0), this.attributes.songids.length - 1 - b);
        if (a != this.currentIndex) {
            if (a + b === 0) {
                this.$clone.addClass("topSong");
            } else {
                if (this.currentIndex === 0) {
                    this.$clone.removeClass("topSong");
                }
            }
            this.reorder(this.currentIndex, a);
            this.currentIndex = a;
        }
    },
    moveClone: function() {
        var b = Date.now();
        if (this.lastMoveTime) {
            var c = (b - this.lastMoveTime) / 1000,
            a = this.scrollVelocity * c;
            this.$viewport.scrollTop(this.viewportScrollTop + a);
        }
        this.lastMoveTime = b;
        this.$clone.css({
            top: this.cloneOffsetTop
        });
    },
    batchEditMode: function() {
        if (this.mode == this.stateEnum.BATCHEDIT) {
            return;
        }
        this.mode = this.stateEnum.BATCHEDIT;
        turntable.playlist.$songs.find(".song").addClass("batch");
        turntable.playlist.$songs.find(".checkbox").addClass("slide");
        this.$songs.off("mousedown", ".song", this.songDrag.setup).on("click", ".song", this.batchSongMouseDown);
    },
    normalMode: function() {
        if (this.mode == this.stateEnum.NORMAL) {
            return;
        }
        this.deselectAllSongs();
        this.mode = this.stateEnum.NORMAL;
        turntable.playlist.$songs.find(".song").removeClass("batch");
        turntable.playlist.$songs.find(".checkbox").removeClass("slide");
        this.$songs.off("click", ".song", this.batchSongMouseDown).on("mousedown", ".song", this.songDrag.setup);
    },
    renderBatchEditRows: function(d, c) {
        if (this.mode != this.stateEnum.BATCHEDIT) {
            return;
        }
        for (var b in c) {
            if (c.hasOwnProperty(b)) {
                var a = c[b];
                a.addClass("batch");
                a.find(".checkbox").addClass("slide");
                if (this.selectedSongs[b]) {
                    this.selectedSongs[b] = a;
                    a.addClass("selected");
                }
            }
        }
    },
    cleanupRemovedSongs: function(f, c) {
        if (this.mode != this.stateEnum.BATCHEDIT) {
            return;
        }
        var a = c.songids;
        for (var b = 0; b < a.length; b++) {
            var d = a[b];
            if (this.selectedSongs[d]) {
                this.selectedSongs[d] = true;
            }
        }
    },
    setCurrentlyPlayingSongid: function(a) {
        this.currentlyPlayingSongid = a;
    },
    clearCurrentlyPlayingSongid: function() {
        this.currentlyPlayingSongid = null;
    }
});
var welcome = {
    elements: {},
    init: function() {
        welcome.view = util.buildTree(welcome.layouts.indexPage, welcome.elements);
        welcome.roomList = new RoomList();
        $(welcome.elements.roomListContainer).append(welcome.roomList.view);
        $(welcome.elements.userauth).append($("#userauth"));
        util.dobkUAXS(this);
    },
    createRoomShow: function() {
        var a = util.buildTree(welcome.layouts.createRoomView, welcome);
        welcome.modal.show();
        welcome.modal.$node.find(".roomName").focus();
        welcome.modal.$node.find(".roomtype-option").click(function() {
            $(this).find(".radio-input").attr("checked", true);
            $(".roomtype-option").removeClass("roomtype-option-on");
            $(this).addClass("roomtype-option-on");
        });
    },
    createRoomSubmit: function() {
        var d = welcome.modal.$node,
        b = $.trim(d.find(".roomName")[0].value),
        c,
        e,
        a;
        if (!b) {
            welcome.modal.showAlert("Room needs a name.");
            return false;
        }
        e = Number(d.find("select")[0].value);
        c = {
            api: "room.create",
            room_name: b,
            max_djs: e
        };
        if (!d.find(".public")[0].checked) {
            c.privacy = "unlisted";
        }
        a = parseInt(d.find(".djThreshold").val());
        turntable.hYkveeiflds(c, welcome.createRoomDone);
    },
    createRoomDone: function(a) {
        turntable.setPage(a.shortcut, a.name, a.roomid);
    },
    advancedOptions: function() {
        var a = $(".overlay div.advanced");
        if (a.css("display") == "none") {
            a.show();
            $(".overlay div.show-advanced").text("close advanced options");
        } else {
            a.hide();
            $(".overlay div.show-advanced").text("advanced options");
        }
    },
    cleanup: function() {
        $("#offstage").append($("#userauth"));
        welcome.roomList.cleanup();
        welcome.roomList = null;
    }
};
welcome.layouts = {
    indexPage: ["div", {}, ["div#header", {}, ["div##userauth.userauthContainer"]], ["div#content", {}, ["p.centeredImage", {}, ["img", {
        src: "https://s3.amazonaws.com/static.turntable.fm/images/logo.png"
    }]], ["h1", {}, "Play music together."], ["p.centeredButtons", ["a.create-btn", {
        event: {
            click: welcome.createRoomShow
        }
    }], ["a.random-btn", {
        event: {
            click: turntable.randomRoom
        }
    }]], ["br"], ["br"], ["div##roomListContainer"]]],
    createRoomView: [ActionModal, {
        title: "Create Room",
        cssClass: "createRoom",
        submitText: "Create Room",
        submitCallback: welcome.createRoomSubmit,
        }, ["div.field##createRoomModal", "Room name:", ["br"], ["input.roomName.text"], ["br"], ["br"], "Set my room as:", ["div.type", {}, ["div.roomtype", {}, ["div.roomtype-option.roomtype-option-on", {}, "Public", ["div.radios", {}, ["input.radio-input.public", {
        type: "radio",
        name: "type",
        value: "public",
        checked: true
    }]], ["div.tip", {}, "(anyone can join)"]]], ["div.roomtype", {}, ["div.roomtype-option", {}, "Unlisted", ["div.radios", {}, ["input.radio-input", {
        type: "radio",
        name: "type",
        value: "unlisted"
    }]], ["div.tip", {}, "(only people with the link can join)"]]], ], ["div.advanced", {}, "Let up to ", ["select", {
        name: "maxdjs"
    }, ["option", {
        value: "1"
    }, "1"], ["option", {
        value: "2"
    }, "2"], ["option", {
        value: "3"
    }, "3"], ["option", {
        value: "4"
    }, "4"], ["option", {
        value: "5",
        selected: "selected"
    }, "5"]], " people DJ", ["br"], ["br"], "Require ", ["input.djThreshold.text", {
        value: "0",
        size: 3
    }], " points to DJ", ["br"], ["br"]], ["div.show-advanced", {
        event: {
            click: welcome.advancedOptions
        }
    }, "advanced options"], ], ],
    };
var Room = Class.extend(function() {
    var a = {
        chatHistory: [],
        historyLength: 3,
        lastChatTime: 0,
        totalTimeDebt: 0,
        intervalMultiplier: 1,
        debtViolations: 0,
        chatThrottlingThreshold: 100,
        throttleChat: function(g) {
            if (a.lastChatTime === 0) {
                a.lastChatTime = new Date();
                a.chatHistory.push(g);
                return false;
            }
            var f,
            k,
            e = turntable.user.id,
            b = this.userMap[e];
            if (this.numListeners() >= a.chatThrottlingThreshold) {
                var f = 5.4 / (0.01 * b.fans + 1) - 0.4;
                var d = f * a.intervalMultiplier;
                var l = new Date();
                var k = 0;
                chatInterval = (l - a.lastChatTime) / 1000;
                k = d - chatInterval;
                if (a.totalTimeDebt + k > d) {
                    var m = this.throttleMessages[Math.floor(Math.random() * this.throttleMessages.length)];
                    this.appendAction(e, b.name, m, "action");
                    return true;
                }
            }
            var h = a.chatHistory;
            h.push(g);
            while (h.length > a.historyLength) {
                h.shift();
            }
            if (h.length == a.historyLength) {
                var j = true;
                for (var c = 1; c < h.length; c++) {
                    if (h[c] != h[c - 1]) {
                        j = false;
                    }
                }
                if (j) {
                    var m = this.repeatMessages[Math.floor(Math.random() * this.repeatMessages.length)];
                    this.appendAction(e, b.name, m, "action");
                    return true;
                }
            }
            if (this.numListeners() >= a.chatThrottlingThreshold) {
                a.lastChatTime = l;
                a.totalTimeDebt = Math.max( - f, a.totalTimeDebt + k);
                if (a.totalTimeDebt >= 0) {
                    a.debtViolations += 1;
                    if (a.debtViolations > 2) {
                        a.debtViolations = 0;
                        a.intervalMultiplier += 0.1;
                    }
                } else {
                    a.intervalMultiplier = 1;
                }
            }
            return false;
        },
        tGTeRRuWwi: function(b, f) {
            if (this.currentSong) {
                var e = $.sha1(this.roomId + b + this.currentSong._id);
                var c = $.sha1(Math.random() + "");
                var d = $.sha1(Math.random() + "");
                turntable.hYkveeiflds({
                    api: "room.vote",
                    roomid: this.roomId,
                    section: this.section,
                    val: b,
                    vh: e,
                    th: c,
                    ph: d
                }, function(g) {
                    if (!g.success) {
                        FhoeNwaAy.resetVoteButtons(turntable.user.id);
                    }
                    if (f) {
                        f(g);
                    }
                });
            }
        }
    };
    return {
        _name: "Room",
        timers: {},
        ignoredUsers: [],
        hasLoadedFavorites: false,
        isFavorite: false,
        suggestedName: false,
        streamStarted: false,
        currentDjPointDelta: 0,
        init: function(c, d) {
            this.roomId = c;
            this.section = d;
            this.roomData = {};
            this.listenerids = [];
            this.listenerMap = {};
            this.djids = [];
            this.userMap = {};
            this.users = this.userMap;
            this.songsDjed = [];
            this.starShown = {};
            turntable.setSocketAddr(turntable.getHashedAddr(this.roomId, this.section));
            for (var b in this) {
                if (typeof this[b] == "function") {
                    this[b] = $.proxy(this[b], this);
                }
            }
            this.loadLayout();
            this.initFavorite();
            // NOTE: it appears fan event is from "useinfo"
            turntable.addEventListener("userinfo", this.updateUserFanofs);
            turntable.addEventListener("message", this.messageListener);
            turntable.addEventListener("reconnect", this.reconnectListener);
            httpStream.setCallback(this.httpStreamListener);
            turntable.hYkveeiflds({
                api: "user.get_prefs"
            }, $.proxy(function(e) {
                if (e.success) {
                    this.setPanelLayout(e.layout || "single");
                }
            }, this));
            this.registerUser().done($.proxy(function() {
                this.loadRoomStateTask = this.loadRoomState();
            }, this));
            if (c != "4f594a82a3f751581000eb80") {
                turntable.addIdleListener(4 * 3600, this.checkIdle);
            }
            util.dobkUAXS(this);
            window.onbeforeunload = this.unloadWarning;
            $(window).on("resize", this.recenterRoomView);
            $(window).keydown(this.keyboardShortcuts);
            this.$eventBus = $({});
        },
        numListeners: function() {
            return this.listenerids.length;
        },
        numDjs: function() {
            return this.djids.length;
        },
        numAudienceMembers: function() {
            if (this.section) {
                return this.listenerids.length;
            } else {
                return this.listenerids.length - this.djids.length;
            }
        },
        registerUser: function() {
            var b = {
                api: "room.register",
                roomid: this.roomId,
                section: this.section
            };
            return turntable.hYkveeiflds(b, $.proxy(function(d) {
                if (!d.success) {
                    if (d.errno === 4) {
                        var c = window.history.state || TURNTABLE_ROOM;
                        var f = "/" + (c.shortcut || c.roomid);
                        window.location.href = f;
                        return;
                    } else {
                        this.lobbyRedirect(d.errno);
                        return;
                    }
                }
                if (d.roomid != this.roomId) {
                    LOG("User registered into wrong room");
                    this.lobbyRedirect(3);
                }
                if (d.section != this.section) {
                    this.section = d.section;
                    if (window.history && window.history.replaceState) {
                        var c = window.history.state || TURNTABLE_ROOM;
                        var e = $.extend({}, c, {
                            section: d.section
                        });
                        var f = e.shortcut || e.roomid;
                        f = "/" + f + "/" + e.section;
                        window.history.replaceState(e, f, f);
                    }
                }
                if (this.reconnecting) {
                    turntable.socketDumpLog();
                }
            }, this));
        },
        lastRoomStateLoadTime: 0,
        loadRoomState: function() {
            LOG("LOAD ROOM STATE");
            var b = $.Deferred();
            var d = {
                api: "room.info",
                roomid: this.roomId,
                section: this.section
            };
            if ($("#song-log").children().size() > 0) {
                d.extended = false;
            }
            if (d.extended) {
                var c = Date.now() / 1000;
                if (c - this.lastRoomStateLoadTime < 2) {
                    LOG("THROTTLED LOADROOMSTATE");
                    return;
                }
                this.lastRoomStateLoadTime = lastRoomStateLoadTime;
            }
            var e = $.when(turntable.hYkveeiflds(d), turntable.avatarLoad);
            e.done($.proxy(function(m) {
                var p = m.room,
                g = m.users,
                l = m.djids,
                n = m.listenerids;
                if (!util.notEmpty(this.roomData)) {
                    $.extend(this.roomData, p);
                }
                if (this.resyncStream) {
                    this.setCurrentSong(p.metadata);
                    b.resolve();
                    return;
                }
                for (var h = 0, j = g.length; h < j; h++) {
                    this.addUserToMap(g[h]);
                }
                this.crowdControl = new CrowdControl(this.section ? "back": "front", this.$eventBus, p.metadata.max_size);
                for (var h = 0; h < n.length; h++) {
                    var f = n[h];
                    if (!this.userMap[f]) {
                        n.splice(h, 1);
                        h--;
                        continue;
                    }
                    this.$eventBus.trigger("Room.addListener", n[h]);
                }
                this.djids = l.slice();
                this.listenerids = n;
                this.setupRoom(p);
                var k = n.slice();
                for (var h = 0; h < k.length; h++) {
                    this.addListener(k[h], true);
                }
                var o = p.metadata.djs.slice();
                for (var h = 0; h < o.length; h++) {
                    this.addDj(o[h]);
                }
                this.setCurrentSong(p.metadata);
                this.updateVotes(p.metadata, false);
                this.updateGuestList();
                this.roomInfoHandler(p);
                b.resolve();
            }, this));
            e.fail(function(f) {
                turntable.showAlert("The requested room could not found: " + f.err);
                b.reject();
                window.location.href = "/lobby";
            });
            return b.promise();
        },
        messageListener: function(g) {
            if (g.hasOwnProperty("msgid")) {
                return;
            }
            if (g.command == "speak") {
                this.showChatMessage(g.userid, g.name, g.text);
            } else {
                if (g.command == "newsong") {
                    LOG("newsong message received");
                    if (this.currentSongEndTime && this.currentSongEndTime - Date.now() / 1000 > 10) {
                        LOG("previous song ended early");
                        turntablePlayer.playEphemeral(UI_SOUND_ENDSONG, true);
                    }
                    this.setCurrentSong(g.room.metadata, g.current_dj_points);
                    this.addToSongLog(g.room.metadata.current_song);
                    this.roomInfoHandler(g.room);
                    this.updateGuestList();
                } else {
                    if (g.command == "nosong") {
                        this.setCurrentSong(null);
                        this.roomInfoHandler(g.room);
                    } else {
                        if (g.command == "registered") {
                            var f = g.user[0];
                            var h = f.userid;
                            this.addUserToMap(f);
                            this.$eventBus.trigger("Room.addListener", h);
                            this.addListener(h);
                            if (this.roomData.metadata && this.roomData.metadata.listeners) {
                                this.roomData.metadata.listeners++;
                                this.updateTotalListeners(this.roomData.metadata.listeners);
                            }
                        } else {
                            if (g.command == "deregistered") {
                                var h = g.user[0].userid;
                                this.removeListener(h);
                                if (this.roomData.metadata && this.roomData.metadata.listeners) {
                                    this.roomData.metadata.listeners--;
                                    this.updateTotalListeners(this.roomData.metadata.listeners);
                                }
                            } else {
                                if (g.command == "update_user") {
                                    this.updateUser(g);
                                } else {
                                    if (g.command == "add_dj") {
                                        var f = g.user[0];
                                        this.addUserToMap(f);
                                        this.addDj(f.userid);
                                        if (this.djids.length > 1 && turntablePlayer.oyNlLWRCMd) {
                                            turntablePlayer.FTkXUmn(false);
                                        }
                                    } else {
                                        if (g.command == "rem_dj") {
                                            var f = g.user[0];
                                            this.addUserToMap(f);
                                            var k = f.userid;
                                            this.removeDj(k);
                                            if (g.modid) {
                                                var l;
                                                if (g.modid == 1) {
                                                    l = " was booed off the stage.";
                                                } else {
                                                    l = " was kindly escorted off the stage";
                                                    if (this.userMap[g.modid]) {
                                                        l += " by " + this.userMap[g.modid].name + ".";
                                                    } else {
                                                        l += ".";
                                                    }
                                                }
                                                this.appendAction(k, this.userMap[k].name, l, "action");
                                            }
                                        } else {
                                            if (g.command == "update_votes") {
                                                var d = g.current_song;
                                                if (!d || (d._id === this.currentSong._id && Math.floor(d.starttime) === Math.floor(this.currentSong.starttime))) {
                                                    this.updateVotes(g.room.metadata, true);
                                                    this.roomInfoHandler(g.room);
                                                } else {
                                                    if (this.previousDjid && this.previousDjid in this.users) {
                                                        var c = g.room.metadata.upvotes - this.previousDjPointDelta;
                                                        this.users[this.previousDjid].points += c;
                                                        if (this.previousDjid === this.roomData.metadata.current_dj) {
                                                            this.currentDjPointsAtSongStart += c;
                                                        }
                                                        this.previousDjPointDelta = g.room.metadata.upvotes;
                                                    }
                                                }
                                            } else {
                                                if (g.command == "new_moderator") {
                                                    var i = this.roomData.metadata.moderator_id;
                                                    if ($.inArray(g.userid, i) == -1) {
                                                        i.push(g.userid);
                                                        this.updateGuestList();
                                                        if (g.userid == turntable.user.id) {
                                                            this.showRoomTip("You are now a moderator of this room. Moderators can boot people out of the room who act inappropriately. Thanks for your help.", 10);
                                                            this.setupRoomSettingsDropdown();
                                                        }
                                                    }
                                                } else {
                                                    if (g.command == "rem_moderator") {
                                                        var i = this.roomData.metadata.moderator_id;
                                                        var j = $.inArray(g.userid, i);
                                                        if (j != -1) {
                                                            i.splice(j, 1);
                                                            this.updateGuestList();
                                                            if (g.userid == turntable.user.id) {
                                                                this.showRoomTip("You are no longer a moderator of this room.", 10);
                                                                this.removeRoomSettingsDropdown();
                                                            }
                                                        }
                                                    } else {
                                                        if (g.command == "booted_user") {
                                                            if (g.userid == turntable.user.id) {
                                                                this.gotBooted(g.reason, this.userMap[g.modid].name);
                                                            } else {
                                                                var e = " was booted from the room by " + this.userMap[g.modid].name + ".";
                                                                if (g.reason) {
                                                                    e += " Reason: " + g.reason;
                                                                }
                                                                var f = this.userMap[g.userid],
                                                                b = f ? f.name: "Somebody";
                                                                this.appendAction(g.userid, b, e, "action");
                                                            }
                                                        } else {
                                                            if (g.command == "dmca_error") {
                                                                var e = (g.type == "song" ? "We had to skip your song because our music licenses force us to limit the number of times an artist can be played each hour in a room. Playing the next song in your queue that is in compliance.": "We had to skip your turn because our music licenses force us to limit the number of times an artist can be played each hour in a room. Add some new artists to your queue or try joining a new room.");
                                                                this.showRoomTip("Bummer! " + e, 10);
                                                            } else {
                                                                if (g.command == "song_blocked") {
                                                                    var e = "We had to skip your ";
                                                                    if (g.type == "song") {
                                                                        e += "song";
                                                                    } else {
                                                                        e += "turn";
                                                                    }
                                                                    e += " due to a copyright claim";
                                                                    if (g.label) {
                                                                        e += " by " + g.label;
                                                                    }
                                                                    if (g.type == "song") {
                                                                        e += ". Playing the next song in your queue that is in compliance.";
                                                                    } else {
                                                                        e += ". Try adding more songs to your queue.";
                                                                    }
                                                                    this.showRoomTip("Bummer! " + e, 10);
                                                                } else {
                                                                    if (g.command == "update_room") {
                                                                        if (g.description) {
                                                                            this.updateRoomDesc(g);
                                                                        }
                                                                        if (g.screens) {
                                                                            this.updateScreens(g);
                                                                        }
                                                                    } else {
                                                                        if (g.command == "snagged") {
                                                                            this.handleSnagged(g);
                                                                        } else {
                                                                            if (g.command == "pmmed") {
                                                                                this.handlePM(g, false);
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        },
        updateScreens: function(b) {
            $.extend(this.roomData.metadata.screens, b.screens);
            this.$eventBus.trigger("screenUpdate");
            this.SXjgB.drawScreens();
            this.SXjgB.updateStage(true);
        },
        updateUserFanofs: function() {
            if (!this.userMap) {
                return;
            }
            var b;
            for (var d in this.userMap) {
                b = this.userMap[d];
                b.oldFanof = b.fanof;
                b.fanof = false;
            }
            for (var c = 0; c < turntable.user.fanOf.length; c++) {
                b = this.userMap[turntable.user.fanOf[c]];
                if (b) {
                    b.fanof = true;
                }
            }
            if (!this.SXjgB) {
                return;
            }
            for (var d in this.userMap) {
                b = this.userMap[d];
                if (b.oldFanof != b.fanof) {
                    this.updateUserInRoomView(b);
                }
            }
        },
        reconnectListener: function() {
            LOG("Reconnected to server");
            this.reconnecting = true;
            var c = this.isDj();
            var b = this;
            this.loadRoomState().done(function() {
                b.reconnecting = false;
                if (c && !b.isDj()) {
                    turntable.showAlert("You stopped DJing because you were disconnected for too long.");
                }
            });
        },
        httpStreamListener: function(b) {
            if (b == "resync") {
                this.scheduleResyncStream();
            } else {
                if (b == "streamstart") {
                    var c = this.currentSong.metadata;
                    this.SXjgB.newsong($.inArray(this.roomData.metadata.currentDj, this.djids), c.artist, c.song, Math.round(this.currentSongEndTime - util.now() / 1000), this.currentSong.snaggable);
                    if (!this.streamStarted) {
                        this.streamStarted = true;
                        turntablePlayer.FTkXUmn(false);
                        if (this.roomData.metadata.currentDj == turntable.user.id && this.numDjs() == 1 && this.roomData.metadata.single_dj_enabled != true) {
                            this.timers.oyNlLWRCM = setTimeout(this.oyNlLWRCM, 30 * 1000);
                        }
                        this.logSongRequest();
                    }
                }
            }
        },
        logSongRequest: function() {
            var b = {
                api: "room.log_song_request",
                roomid: this.roomId,
                section: this.section,
                song: this.currentSong
            };
            turntable.hYkveeiflds(b, function(c) {
                if (c.success) {
                    LOG("logged song request");
                }
            });
        },
        scheduleResyncStream: function(e) {
            LOG("schedule resync stream");
            var c = this;
            var b = httpStream.isPlaying();
            var d = function() {
                if (b) {
                    LOG("was playing. do loading song");
                    c.SXjgB.loadingsong();
                }
                c.resyncStream = true;
                c.loadRoomState();
            };
            if (!e) {
                d();
            } else {
                setTimeout(d, e);
            }
        },
        roomInfoHandler: function(e) {
            $.extend(this.roomData.metadata, e.metadata);
            var d = e.metadata;
            if (d) {
                var c = e.metadata.moderator_id;
                if (c) {
                    this.roomData.metadata.moderator_id = $.type(c) == "array" ? c: [c];
                }
                if (!this.section && ((e.metadata.listeners > 400 && this.currentRoomViewType === "room") || (e.metadata.listeners <= 375 && this.currentRoomViewType === "concert"))) {
                    this.switchRoomView();
                }
                var b = d.listeners;
                this.updateTotalListeners(b);
                this.SXjgB.updateTotalListeners(b);
                this.SXjgB.updateCrowdVotes(d.upvotes - this.upvoters.length);
                this.SXjgB.updateStage();
                this.SXjgB.drawDjButton();
            }
        },
        SXjgBCallback: function(f, h) {
            if (f == "upvote") {
                if (turntable.BXruhgG() < 15000) {
                    a.tGTeRRuWwi.apply(this, ["up"]);
                }
            } else {
                if (f == "downvote") {
                    if (turntable.BXruhgG() < 15000) {
                        a.tGTeRRuWwi.apply(this, ["down"]);
                    }
                }
            }
            if (f == "become_dj") {
                if (turntable.BXruhgG() < 15000) {
                    this.wbkFbFIRvVno();
                }
            } else {
                if (f == "stop_song") {
                    turntable.hYkveeiflds({
                        api: "room.stop_song",
                        roomid: this.roomId,
                        section: this.section
                    });
                    if (this.roomData.metadata.currentDj == turntable.user.id && this.songsDjed.length > 0 && this.songsDjed[this.songsDjed.length - 1].fileId == this.currentSong._id) {
                        this.songsDjed.pop();
                    }
                } else {
                    if (f == "rem_dj") {
                        this.quitDj();
                    } else {
                        if (f == "remove_dj") {
                            turntable.hYkveeiflds({
                                api: "room.rem_dj",
                                roomid: this.roomId,
                                section: this.section,
                                djid: h
                            });
                        } else {
                            if (f == "set_volume") {
                                turntablePlayer.setVolume(h);
                            } else {
                                if (f == "boot_user") {
                                    var d = this;
                                    var b = {};
                                    util.buildTree(Room.layouts.bootConfirmView(this.userMap[h].name, function() {
                                        var j = {
                                            api: "room.boot_user",
                                            roomid: d.roomId,
                                            section: d.section,
                                            target_userid: h
                                        };
                                        var k = $.trim($(".bootReasonField").val());
                                        if (k && k != "(optional)") {
                                            j.reason = k;
                                        }
                                        turntable.hYkveeiflds(j);
                                        b.modal.hide();
                                        var i = $(turntable.ialIp.nodes.roomName).html();
                                        _gaq.push(["_trackEvent", "room", "boot", i + "--" + turntable.user.displayName]);
                                    }), b);
                                    b.modal.show();
                                } else {
                                    if (f == "add_song") {
                                        this.$view.find(".addSongOverlay").remove();
                                        this.$view.append(util.buildTree(Room.layouts.addSongOverlay(this)));
                                    } else {
                                        if (f == "add_song_to") {
                                            this.addSong(h);
                                        } else {
                                            if (f == "invite_dj") {
                                                this.facebookSendDialog();
                                            } else {
                                                if (f == "become_fan") {
                                                    var c = this.userMap[h];
                                                    if (c) {
                                                        c.fanof = true;
                                                    }
                                                    turntable.hYkveeiflds({
                                                        api: "user.become_fan",
                                                        djid: h
                                                    }, function(i) {
                                                        if (i && i.success) {
                                                            turntable.buddyList.lookupUser(h, function(j) {
                                                                j.roomName = turntable.ialIp.name;
                                                                turntable.buddyList.addBuddy(j);
                                                            });
                                                            if ($.inArray(h, turntable.user.fanOf) == -1) {
                                                                turntable.user.fanOf.push(h);
                                                                turntable.ialIp.updateGuestList();
                                                            }
                                                        }
                                                    });
                                                } else {
                                                    if (f == "remove_fan") {
                                                        var c = this.userMap[h];
                                                        if (c) {
                                                            c.fanof = false;
                                                        }
                                                        turntable.hYkveeiflds({
                                                            api: "user.remove_fan",
                                                            djid: h
                                                        }, function(j) {
                                                            if (j && j.success) {
                                                                turntable.buddyList.removeBuddy(h);
                                                                var i = turntable.user.fanOf.indexOf(h);
                                                                if (i >= 0) {
                                                                    turntable.user.fanOf.splice(i, 1);
                                                                    turntable.ialIp.updateGuestList();
                                                                }
                                                            }
                                                        });
                                                    } else {
                                                        if (f == "profile") {
                                                            var d = this;
                                                            var g = $.Deferred();
                                                            var e = $.Deferred();
                                                            $.when(g, e).done(d.setupProfileOverlay);
                                                            turntable.hYkveeiflds({
                                                                api: "user.get_profile",
                                                                userid: h
                                                            }, function(i) {
                                                                g.resolve(i);
                                                            });
                                                            turntable.hYkveeiflds({
                                                                api: "sticker.get_placements",
                                                                userid: h
                                                            }, function(j) {
                                                                var i = {};
                                                                i[h] = j.placements;
                                                                $(document).trigger("add_sticker_placements", i);
                                                                e.resolve(j);
                                                            });
                                                        } else {
                                                            if (f == "report_user") {
                                                                this.setupReportOverlay(h, this.users[h].name, this.roomId, this.section, "user");
                                                            } else {
                                                                if (f == "add_moderator") {
                                                                    var d = this;
                                                                    var b = {};
                                                                    util.buildTree(Room.layouts.addModConfirmView(this.userMap[h].name, function() {
                                                                        turntable.hYkveeiflds({
                                                                            api: "room.add_moderator",
                                                                            roomid: d.roomId,
                                                                            section: d.section,
                                                                            target_userid: h
                                                                        });
                                                                        b.modal.hide();
                                                                    }), b);
                                                                    b.modal.show();
                                                                } else {
                                                                    if (f == "rem_moderator") {
                                                                        var d = this;
                                                                        var b = {};
                                                                        util.buildTree(Room.layouts.removeModConfirmView(this.userMap[h].name, function() {
                                                                            turntable.hYkveeiflds({
                                                                                api: "room.rem_moderator",
                                                                                roomid: d.roomId,
                                                                                section: d.section,
                                                                                target_userid: h
                                                                            });
                                                                            b.modal.hide();
                                                                        }), b);
                                                                        b.modal.show();
                                                                    } else {
                                                                        if (f == "pm_user") {
                                                                            this.handlePM({
                                                                                senderid: h
                                                                            }, true);
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        },
        setupProfileOverlay: function(k, b) {
            if (k.success) {
                var e = {};
                util.buildTree(Room.layouts.profileView(k), e);
                var o = e.modal.$node;
                var m = o.find("canvas.laptop");
                if (b.success) {
                    var d = m[0].getContext("2d");
                    var l = k.laptop;
                    if (l in {
                        iphone: 1,
                        android: 1
                    }) {
                        l = "mac";
                    }
                    turntable.sticker.drawLaptopCanvas(k.userid, d, 0.5, l);
                } else {
                    m.hide();
                }
                var n = o.find(".acl");
                if (k.verified) {
                    n.text("Verified " + k.verified);
                } else {
                    if (k.acl > 1) {
                        n.text("gatekeeper");
                    } else {
                        if (k.acl > 0) {
                            n.text("superuser");
                        }
                    }
                }
                var g = o.find(".twitter");
                if (!k.twitter) {
                    g.hide();
                } else {
                    g.attr("href", "http://twitter.com/" + k.twitter);
                }
                var h = o.find(".facebook");
                if (!k.facebook) {
                    h.hide();
                } else {
                    h.attr("href", k.facebook);
                }
                var c = o.find(".website");
                if (!k.website) {
                    c.hide();
                }
                if (!k.twitter && !k.facebook && !k.website) {
                    o.find(".web-links").remove();
                } else {
                    c.html(util.linkify(util.safeText(c.html())));
                }
                var j = o.find(".about");
                if (!k.about) {
                    j.hide();
                } else {
                    j.find(".profileText").html(util.brText(util.linkify(util.safeText(k.about))));
                }
                var i = o.find(".topartists");
                if (!k.topartists) {
                    i.hide();
                } else {
                    i.find(".profileText").html(util.brText(util.linkify(util.safeText(k.topartists))));
                }
                var f = o.find(".hangout");
                if (!k.hangout) {
                    f.hide();
                } else {
                    f.find(".profileText").html(util.brText(util.linkify(util.safeText(k.hangout))));
                }
                e.modal.show();
            }
        },
        setupReportOverlay: function(b, f, c, d, e) {
            util.buildTree(Room.layouts.reportView(this.reportUserOrRoom, b, f, c, d, e), this);
            this.reportModal.show();
        },
        reportUserOrRoom: function() {
            var e = $("#reasonField").val();
            if (!e) {
                this.reportModal.showAlert("Please supply a detailed reason");
                return false;
            }
            var c = "room.report_room";
            var d = $("#useridField").val();
            var b = $("#roomidField").val();
            var f = "";
            $("div.messages .message").slice( - 25, -1).each(function() {
                f += "<div>" + $(this).html() + "</div>";
            });
            if (d) {
                c = "room.report_user";
            }
            turntable.hYkveeiflds({
                api: c,
                roomid: b,
                section: this.section,
                reported: d,
                reason: e,
                chatlog: f
            }, $.proxy(function(g) {
                if (!g.success) {
                    this.reportModal.showAlert(g.err);
                } else {
                    this.reportModal.close();
                    util.buildTree([ActionModal, {
                        showCancel: false
                    }, ["div.message", {}, "Thank-you."]], Room);
                    Room.modal.show();
                }
            }, this));
            return false;
        },
        addSong: function(e, i) {
            if (!i) {
                if (!this.currentSong) {
                    return;
                }
                i = this.currentSong;
            }
            var d = false;
            var f = i._id || i.fileId;
            var c = turntable.playlist.queue.contains(f);
            if (e == "queue") {
                var h;
                if (i.snaggable == false) {
                    h = "Sorry, this song cannot be added to your queue";
                    if (i.metadata.label) {
                        h += (" due to a copyright claim by " + i.metadata.label);
                        d = true;
                    }
                } else {
                    if (c) {
                        h = "This song is already in your queue!";
                    } else {
                        turntable.playlist.addSong({
                            fileId: f,
                            metadata: i.metadata
                        });
                        h = "Song added to queue.";
                    }
                }
                this.showRoomTip(h, 5);
            } else {
                window.open("/link/?fileid=" + f + "&site=" + e, e + f);
            }
            var b = i ? i.djid: this.roomData.metadata.currentDj;
            var g = (i == this.currentSong) ? "board": "songlog";
            this.sendSnag(
                          turntable.user.id, // h
                          this.roomId, // 
                          this.section, // m
                          b, // c
                          f, // g
                          e, // b
                          g, // l
                          (c ? "true": "false"), // d
                          d); // j
        },
        sendSnag: function(
                           h, 
                           e, 
                           m, 
                           c, // b 
                           g, // f
                           b, // e
                           l, // g
                           d, // "true" / "false"
                           j) { // d
            if (c) {
                var i = $.sha1(Math.random() + "");
                var n = $.sha1(Math.random() + "");
                j = j.toString();
                var k = [h, c, g, e, b, l, d, j, i];
                var f = $.sha1(k.join("/"));
                turntable.hYkveeiflds({
                    api: "snag.add",
                    djid: c,   //
                    songid: g, //
                    roomid: e, //
                    section: m,//
                    site: b,
                    location: l,
                    in_queue: d,
                    blocked: j,
                    vh: f,
                    sh: i,
                    fh: n
                });
                _gaq.push(["_trackEvent", "song", "snag", b, (d ? 0: 1)]);
            }
        },
        handleSnagged: function(b) {
            this.SXjgB.showHeart(b.userid);
        },
        handleFanned: function(e) {
            var d = e.userid,
            c = this.userMap[e.userid],
            b = e.fanid;
            if (!c.fans) {
                c.fans = 0;
            }
            c.fans += e.fans;
            if (d === this.roomData.metadata.current_dj && e.fans > 0 && !(this.starShown[d] && this.starShown[d][b])) {
                this.SXjgB.showStar(b);
                if (!this.starShown[d]) {
                    this.starShown[d] = {};
                }
                this.starShown[d][b] = true;
            }
        },
        userIdFromName: function(c) {
            for (var d in this.userMap) {
                var b = this.userMap[d];
                if (b && b.name == c) {
                    return d;
                }
            }
            return null;
        },
        throttleMessages: [", relax and just enjoy the music.", " has been awfully chatty lately...", ", quiet down; the neighbors are complaining about the noise."],
        repeatMessages: [" sounds like a broken record...", ", okay, we get it."],
        speak: function(f) {
            f.preventDefault();
            var h = $.trim(this.nodes.chatText.value),
            i = false;
            if (!h) {
                return;
            }
            if (h.indexOf("/ignore ") == 0) {
                var g = h.substr(8);
                var e = this.userIdFromName(g);
                if (e && $.inArray(e, this.ignoredUsers) == -1) {
                    this.ignoredUsers.push(e);
                    this.appendAction(e, g, " will be ignored.");
                }
                return;
            } else {
                if (h.indexOf("/unignore ") == 0) {
                    var g = h.substr(10);
                    var e = this.userIdFromName(g);
                    if (e) {
                        var d = $.inArray(e, this.ignoredUsers);
                        if (d != -1) {
                            this.ignoredUsers.splice(d, 1);
                            this.appendAction(e, g, " will be ignored no more.");
                        }
                    }
                    return;
                } else {
                    if (h == "/up") {
                        a.tGTeRRuWwi.apply(this, ["up"]);
                        i = true;
                    } else {
                        if (h == "/down") {
                            a.tGTeRRuWwi.apply(this, ["down", function(j) {
                                if (j.success) {
                                    $("#lame-button").addClass("selected");
                                }
                            }]);
                            i = true;
                        }
                    }
                }
            }
            if (i || !a.throttleChat.apply(this, [h])) {
                this.nodes.chatText.value = "";
                $("#chat-input").trigger("autosize");
                if (!i) {
                    var c = turntable.hYkveeiflds({
                        api: "room.speak",
                        roomid: this.roomId,
                        section: this.section,
                        text: h
                    });
                    var b = this;
                    c.fail(function(j) {
                        if (j && j.err == "user not in room") {
                            b.reconnectListener();
                        }
                    });
                }
            }
        },
        clearRoomUsers: function() {
            if (this.SXjgB) {
                for (var e = 0, b = this.djids.length; e < b; e++) {
                    this.SXjgB.removeDj(e);
                }
                var f = this.listenerids,
                c = this.userMap,
                d = this.SXjgB;
                for (var e = 0, b = f.length; e < b; e++) {
                    d.removeListener(c[f[e]]);
                }
            }
            this.userMap = {};
            this.djids = [];
            this.listenerids = [];
        },
        cleanup: function() {
            this.clearRoomUsers();
            turntable.removeEventListener("auth", this.authListener);
            turntable.removeEventListener("userinfo", this.updateUserFanofs);
            turntable.removeEventListener("message", this.messageListener);
            turntable.removeEventListener("reconnect", this.reconnectListener);
            httpStream.setCallback(null);
            if (this.roomList) {
                this.roomList.cleanup();
                this.roomList = null;
            }
            $("#offstage").append($("#userauth"));
            $("#offstage").append($("#playlist"));
            httpStream.closeStream();
            turntable.hYkveeiflds({
                api: "room.deregister",
                roomid: this.roomId,
                section: this.section
            });
            turntable.playlist.decorateQueueView();
            for (var b in this.timers) {
                if (this.timers[b]) {
                    clearTimeout(this.timers[b]);
                }
            }
            Room.layouts.zeroClip.destroy();
            Room.layouts.zeroClip = null;
            this.SXjgB.cleanup();
            window.onbeforeunload = null;
            $(window).off("resize", this.recenterRoomView);
            $(window).off("keydown", this.keyboardShortcuts);
        },
        getEntropyForUser: function(b) {
            return turntable.seedPRNG(b.userid + b.points + this.roomId + Math.round(turntable.serverNow() / (6 * 3600)));
        },
        loadLayout: function() {
            this.nodes = {};
            this.view = util.buildTree(Room.layouts.page(this.toggleFavorite, this.chatTextListener), this.nodes);
            $(this.nodes.userauth).append($("#userauth"));
            $(this.nodes.playlist).append($("#playlist"));
            var d = this.$view = $(this.view);
            d.find(".searchView").hide();
            $(this.nodes.logo).click(util.eventHandlerDecorator(function() {
                window.location.href = "/lobby";
            }));
            $(this.nodes.listRooms).click(this.listRoomsShow);
            d.find("#feedback-button").click(this.feedbackShow);
            d.find("#help-button").on("click", this.helpShow);
            d.find("#report-room").on("click", $.proxy(function(f) {
                f.preventDefault();
                this.setupReportOverlay("", "", this.roomId, this.section, "room");
                return false;
            }, this));
            d.find(".roomTip").click(this.hideRoomTip);
            $(this.nodes.chatForm).submit(this.speak);
            $(this.nodes.chatText).keydown(this.chatKeyDownListener);
            if (!util.getSetting("playdingsound")) {
                var c = util.getSetting("playding") == "true" ? "on": "mention";
                util.setSetting("playdingsound", c);
                this.dingSetting = c;
            } else {
                this.dingSetting = util.getSetting("playdingsound");
            }
            this.$dingMenu = $(util.buildTree(Room.layouts.dingMenu)).hide().appendTo("body");
            this.$dingMenu.find("." + this.dingSetting).addClass("selected");
            this.$dingButton = $(this.nodes.chatSound);
            this.$dingButton.addClass(util.getSetting("playdingsound"));
            this.$dingButton.add(this.$dingMenu).on("mouseenter", this.dingMenuMouseEnter).on("mouseleave", this.dingMenuMouseLeave);
            this.$dingMenu.on("click", ".option", this.dingMenuClick);
            $(this.nodes.chatLog).on("click", ".speaker", $.proxy(function(e) {
                this.SXjgB.toggleTipsy($.data(e.target, "userid"), true);
            }, this));
            if (!util.webkitMaskSupport()) {
                $("html").addClass("no-webkit-mask");
            }
            d.find(".floating-panel-tab").on("click", $.proxy(function(g) {
                var f = $(g.target).closest("li");
                if (f.hasClass("selected")) {
                    return;
                }
                f.siblings(".selected").removeClass("selected");
                f.addClass("selected");
                if (f.hasClass("chat-container")) {
                    this.updateChatScroll();
                } else {
                    if (f.attr("id") === "room-info-container" && f.find("#song-log-panel").css("display") !== "none") {
                        this.$eventBus.trigger("SongLog.visible");
                    }
                }
            }, this));
            d.find(".room-info-link").on("click", $.proxy(function(g) {
                var f = $(g.target).closest("li");
                if (f.hasClass("selected")) {
                    return;
                }
                f.siblings(".selected").removeClass("selected");
                f.addClass("selected");
                if (f.attr("id") === "song-log-container") {
                    this.$eventBus.trigger("SongLog.visible");
                }
                f.closest("#room-info").addClass("subsection-visible");
            }, this));
            d.find("#room-info-nav").on("click", "button.back", $.proxy(function(g) {
                var f = $(g.target);
                this.$lastSelectedSubsection = f.closest("li");
                f.closest("#room-info").one(util.transitionEnd, this.transitionEndHandler).removeClass("subsection-visible");
            }, this));
            d.find("#chat-input").on("focus", $.proxy(function(f) {
                $(f.target).closest(".chatBar").addClass("chat-focused");
                this.checkChatScroll();
            }, this)).on("blur", function() {
                var e = $(this);
                if (e.val().length === 0) {
                    e.closest(".chatBar").removeClass("chat-focused");
                }
            });
            d.find(".dropdown-container").on("mouseenter", this.dropDownMouseEnter).on("mouseleave", this.dropDownMouseLeave);
            var b = this.volumeKnob = new Draggable();
            $.extend(b, {
                mousedown: this.volumeKnobMouseDown,
                mousemove: this.volumeKnobMouseMove,
                mouseup: this.volumeKnobMouseUp,
                cursor: "pointer"
            });
            d.find("#volume-knob").on("mousedown", b.setup);
            d.find("#volume-button").on("click", this.toggleMute);
            d.find("#layout-option").tipsy({
                className: "layout-option",
                offset: -8,
                gravity: "e",
                fade: true,
                opacity: 1
            });
            d.find("#layout-option .option").on("click", $.proxy(function(g) {
                var f = $.data(g.target, "layout");
                if (f === this.layout) {
                    return;
                }
                turntable.hYkveeiflds({
                    api: "user.edit_prefs",
                    layout: f
                });
                this.setPanelLayout(f);
            }, this));
            d.find("#song-log").on("mouseenter", ".song", this.songViewMouseEnter).on("mouseleave", ".song", this.songViewMouseLeave);
        },
        keyboardShortcuts: function(c) {
            var b = c.srcElement.nodeName == "TEXTAREA" || c.srcElement.nodeName == "INPUT";
            if (!b && c.keyCode == 32) {
                this.toggleMute();
            }
        },
        dingMenuHideTimeout: null,
        dingMenuHide: function() {
            this.$dingButton.removeClass("hover");
            this.$dingMenu.hide();
        },
        dingMenuMouseEnter: function(b) {
            window.clearTimeout(this.dingMenuHideTimeout);
            var c = this.$dingButton.offset();
            this.$dingMenu.css({
                top: c.top,
                left: c.left + this.$dingButton.width() / 2
            }).show();
            this.$dingButton.addClass("hover");
        },
        dingMenuMouseLeave: function(b) {
            this.dingMenuHideTimeout = window.setTimeout(this.dingMenuHide, 500);
        },
        dingMenuClick: function(d) {
            var b = $(d.target),
            c = b.data("setting");
            b.addClass("selected").siblings(".option").removeClass("selected");
            this.dingSetting = c;
            util.setSetting("playdingsound", c);
            this.dingMenuHide();
        },
        $lastHoveredHeaderButton: null,
        dropDownHideTimeout: null,
        dropDownHide: function() {
            var b = this.$lastHoveredHeaderButton;
            if (b) {
                b.removeClass("hover").find(".floating-menu").hide();
            }
            this.$lastHoveredHeaderButton = null;
        },
        dropDownMouseEnter: function(f) {
            var b = $(f.target).closest(".dropdown-container");
            var d = this.$lastHoveredHeaderButton;
            if (d) {
                window.clearTimeout(this.dropDownHideTimeout);
                if (d[0] === b[0]) {
                    return;
                } else {
                    this.dropDownHide();
                }
            }
            var c = b.find(".floating-menu");
            c.show();
            b.addClass("hover");
            this.$lastHoveredHeaderButton = b;
        },
        dropDownMouseLeave: function(b) {
            if (!this.dropDownOverride) {
                this.dropDownHideTimeout = window.setTimeout(this.dropDownHide, 500);
            }
        },
        $lastSelectedSubsection: null,
        transitionEndHandler: function(c) {
            var b = $(c.target);
            this.$lastSelectedSubsection.removeClass("selected");
        },
        volumeControlClasses: ["volume-high", "volume-medium", "volume-low", "volume-mute"],
        toggleMute: function() {
            if (this.muted) {
                this.volumeKnobDraw();
                turntablePlayer.setVolume(this.volumePercentage * 4);
                this.muted = false;
            } else {
                this.volumeKnobDraw(null, 0);
                var b = this.volumeControlClasses.slice(0, 3);
                this.$volumeControl.removeClass(b.join(" ")).addClass(this.volumeControlClasses[3]);
                turntablePlayer.setVolume(0);
                this.muted = true;
            }
        },
        yOffsetFromKnobCenter: null,
        knobMaxY: null,
        knobMinY: null,
        fillRadius: 3,
        volumeKnobMouseDown: function(c) {
            this.dropDownOverride = true;
            this.muted = false;
            var b = this.$fill;
            var d = this.$slider;
            this.yOffsetFromKnobCenter = c.pageY - b.offset().top;
            this.knobMinY = d.offset().top;
            this.knobMaxY = this.knobMinY + d.height();
            this.knobMinY += this.fillRadius;
            this.knobMaxY -= this.fillRadius;
            c.preventDefault();
        },
        volumeKnobMouseMove: function(f) {
            var d = f.pageY - this.yOffsetFromKnobCenter;
            d = Math.min(this.knobMaxY, Math.max(this.knobMinY, d));
            var b = this.knobMaxY - d,
            c = b / (this.knobMaxY - this.knobMinY);
            this.volumeFillHeight = b + 2 * this.fillRadius;
            this.requestVolumeKnobDraw();
            this.bufferedSetVolume(c * 4);
            this.volumePercentage = c;
            f.preventDefault();
        },
        volumeKnobMouseUp: function() {
            this.dropDownOverride = false;
            this.dropDownMouseLeave();
        },
        volumeKnobDraw: function(g, c) {
            c = c !== undefined ? c: this.volumePercentage;
            var b = c * (this.$slider.height() - 2 * this.fillRadius) + 2 * this.fillRadius;
            this.$fill.height(b);
            var e = this.volumeControlClasses.slice(),
            d = Math.round((1 - c) * 2),
            f = e.splice(d, 1)[0];
            if (f != this.currentVolumeClass) {
                this.$volumeControl.removeClass(e.join(" ")).addClass(f);
            }
        },
        initFavorite: function() {
            if (turntable.favorites) {
                this.hasLoadedFavorites = true;
                if (this.roomId in turntable.favorites) {
                    $(this.nodes.favorite).addClass("favorite-on");
                    this.isFavorite = true;
                }
            }
        },
        toggleFavorite: function() {
            if (this.hasLoadedFavorites) {
                var b = this;
                if (!this.isFavorite) {
                    $(b.nodes.favorite).addClass("favorite-on");
                    turntable.hYkveeiflds({
                        api: "room.add_favorite",
                        roomid: this.roomId,
                        section: this.section
                    }, function(c) {
                        if (c.success) {
                            b.isFavorite = true;
                            turntable.favorites[b.roomId] = true;
                        } else {
                            $(b.nodes.favorite).removeClass("favorite-on");
                        }
                    });
                } else {
                    $(b.nodes.favorite).removeClass("favorite-on");
                    turntable.hYkveeiflds({
                        api: "room.rem_favorite",
                        roomid: this.roomId,
                        section: this.section
                    }, function(c) {
                        if (c.success) {
                            b.isFavorite = false;
                            delete turntable.favorites[b.roomId];
                        } else {
                            $(b.nodes.favorite).addClass("favorite-on");
                        }
                    });
                }
            }
        },
        onAddedToDOM: function() {
            var b = $("#share-container .header-well-dropdown").css({
                display: "block",
                visibility: "hidden"
            });
            if (!Room.layouts.zeroClip) {
                Room.layouts.zeroClip = new ZeroClipboard.Client();
            }
            Room.layouts.zeroClip.setHandCursor(true);
            Room.layouts.zeroClip.setText(location.href);
            Room.layouts.zeroClip.glue(this.nodes.zeroClipButton, this.nodes.zeroClipContainer);
            b.css({
                display: "",
                visibility: ""
            });
            var f = this.$view.find(".chatBar"),
            c = this.$view.find("#chat-input"),
            e = this.$view.find(".messages");
            c.autosize({
                callback: $.proxy(function() {
                    var h = c.outerHeight(true) + 8,
                    g = c[0];
                    f.height(h);
                    e.css("bottom", h);
                    this.updateChatScroll();
                }, this)
                });
            var d = this.$view.find(".edit-description");
            d.autosize();
            this.$eventBus.trigger("Room.visible");
            this.$scene = $(this.nodes.roomArea);
            this.$header = $("#header");
        },
        recenterRoomView: function() {
            var e = $(window),
            b = $("html"),
            d = {
                width: {
                    level: undefined,
                    numLevels: 3
                },
                height: {
                    level: undefined,
                    numLevels: 2
                }
            },
            f,
            c;
            alterCSS = util.makeDrawer(null, function() {
                var g = [],
                k = [];
                for (var j in d) {
                    if (d.hasOwnProperty(j)) {
                        f = d[j].level;
                        for (var h = 0; h < d[j].numLevels; h++) {
                            c = j + "-level-" + h;
                            if (h === f) {
                                k.push(c);
                            } else {
                                g.push(c);
                            }
                        }
                    }
                }
                b.removeClass(g.join(" ")).addClass(k.join(" "));
                turntable.ialIp.checkPanelLayout();
            });
            return function(j) {
                var i = e.width(),
                h = e.height(),
                g;
                if (i >= 1262) {
                    g = 2;
                } else {
                    if (i >= 1024) {
                        g = 1;
                    } else {
                        g = 0;
                    }
                }
                if (h > 700) {
                    currentHeightLevel = 1;
                } else {
                    currentHeightLevel = 0;
                }
                if (j || g !== d.width.level || currentHeightLevel !== d.height.level) {
                    d.width.level = g;
                    d.height.level = currentHeightLevel;
                    alterCSS();
                }
            };
        } (),
        layout: "single",
        visibleLayout: "single",
        setPanelLayout: function(b) {
            this.layout = b;
            this.checkPanelLayout();
            if (this.visibleLayout != this.layout) {
                this.showRoomTip("Sorry, the layout you've chosen doesn't fit your window size. Please select a different layout or resize your window.");
            }
            this.$view.find("." + b + "-panel").addClass("selected").siblings(".selected").removeClass("selected");
        },
        checkPanelLayout: function() {
            if (this.layout === "dual" && $(window).width() >= 1262) {
                this.showDualPanels();
            } else {
                this.showSinglePanel();
            }
        },
        showDualPanels: function() {
            if (this.visibleLayout === "dual") {
                return;
            }
            var g = this.$view,
            b = g.find("#left-panel"),
            h = b.find(".floating-panel-tabs"),
            e = g.find("#right-panel"),
            d = e.find(".floating-panel-tabs"),
            c = g.find("#playlist-container, #room-info-container");
            h.append(c).addClass("tabs-2");
            b.removeClass("hidden");
            d.addClass("tabs-1");
            var f = [h, d];
            $.each(f, function(k, j) {
                if (j.children(".selected").length === 0) {
                    j.children().first().addClass("selected");
                }
            });
            this.visibleLayout = "dual";
        },
        showSinglePanel: function() {
            if (this.visibleLayout === "single") {
                return;
            }
            var e = this.$view,
            b = e.find("#left-panel"),
            f = b.find(".floating-panel-tabs"),
            d = e.find("#right-panel"),
            c = d.find(".floating-panel-tabs"),
            g = e.find("#playlist-container, #room-info-container");
            b.addClass("hidden");
            g.removeClass("selected");
            c.append(g).removeClass("tabs-1");
            this.visibleLayout = "single";
        },
        setupRoomSettingsDropdown: function() {
            if (!this.hasModPowers()) {
                return;
            }
            var b = $("#room-settings-container").show();
            b.find(".nib").tipsy({
                gravity: "e",
                fade: true,
                opacity: 1
            }).on("click", function() {
                $(this).parent().toggleClass("closed");
            });
            $("#save-description-btn").tipsy({
                gravity: "e",
                fade: true,
                opacity: 1
            });
            $("#edit-description-option, #save-description-btn").on("click", $.proxy(this.toggleEditDesc, this));
            if (this.roomData.metadata.screen_uploads_allowed && turntable.user.acl > 1) {
                $("#edit-screens-option").show().on("click", $.proxy(this.showScreenEditor, this));
            } else {
                $("#edit-screens-option").hide();
            }
        },
        removeRoomSettingsDropdown: function() {
            var b = $("#room-settings-container");
            b.hide().find(".nib").off("click");
            $("#edit-description-option, #save-description-btn").off("click");
            $("#edit-screens-option").off("click");
        },
        setupRoom: function(f) {
            var e = f.metadata;
            $(this.nodes.roomName).text(f.name);
            var b = e.sticker_placements;
            if (b) {
                $(document).trigger("add_sticker_placements", b);
            }
            this.setupSharing(f.name);
            this.updateRoomDesc(f);
            $("#room-info .room-name").text(f.name);
            if (f.metadata.creator) {
                var g = f.metadata.creator && f.metadata.creator.userid;
                $("#room-info .creator").text(util.safeText(f.metadata.creator.name)).on("click", function(i) {
                    i.preventDefault();
                    FhoeNwaAy.callback("profile", g);
                });
            }
            if (!this.hasModPowers()) {
                this.removeRoomSettingsDropdown();
            } else {
                this.setupRoomSettingsDropdown();
            }
            if (f.metadata.songlog) {
                $("#song-log").empty();
                for (var d = 0; d < f.metadata.songlog.length; d++) {
                    this.addToSongLog(f.metadata.songlog[d]);
                }
            }
            if (!this.SXjgB) {
                window.FhoeNwaAy = this.SXjgB = this.makeRoomView();
                this.currentRoomViewType = this.SXjgB.attributes.type;
                var h = this.SXjgB.$node;
                $(this.nodes.roomArea).css({
                    width: h.css("width"),
                    height: h.css("height")
                    }).append(this.SXjgB.node);
                this.recenterRoomView(true);
                this.SXjgB.attributes.$eventBus.trigger("RoomView.visible");
            }
            if (this.muted === true || this.volumePercentage === 0) {} else {
                var c = parseFloat(util.getSetting("volume")) || turntablePlayer.volume;
                turntablePlayer.setVolume(c);
                this.bufferedSetVolume = util.rateLimit(turntablePlayer, turntablePlayer.setVolume, 200);
                this.$fill = $("#volume-fill");
                this.$slider = $("#volume-slider");
                this.$volumeControl = $("#volume-control");
                this.volumePercentage = c / 4;
                this.requestVolumeKnobDraw = util.makeDrawer(this, this.volumeKnobDraw);
                this.volumeKnobDraw();
            }
        },
        makeRoomView: function(c, b) {
            if (!c) {
                c = this.roomData;
            }
            if (!b) {
                if (this.section || c.metadata.listeners > 400) {
                    b = "concert";
                } else {
                    b = "room";
                }
            }
            var d = new RoomView({
                type: b,
                numDjSpots: c.metadata.max_djs,
                callback: this.SXjgBCallback,
                roomData: this.roomData,
                listenerids: this.listenerids,
                crowdControl: this.crowdControl,
                $eventBus: this.$eventBus
            });
            d.render();
            return d;
        },
        switchRoomView: function() {
            var f = this.currentRoomViewType,
            b = this.SXjgB,
            k = b.$node,
            h,
            c,
            g;
            if (f === "concert") {
                h = "room";
                c = this.makeRoomView(null, h);
                var i = this.roomData.metadata;
                c.updateTotalListeners(i.listeners);
                c.updateCrowdVotes(i.upvotes - this.upvoters.length);
                c.updateStage();
                c.moveNeedle(this.getScore());
                g = c.$node;
                g.css({
                    "z-index": -1,
                    visibility: "hidden"
                }).appendTo(this.nodes.roomArea);
                window.FhoeNwaAy = this.SXjgB = c;
                this.recenterRoomView(true);
                var j = b.config.origin;
                var e = false;
                var d = $.proxy(function() {
                    if (e) {
                        return;
                    }
                    e = true;
                    k.remove();
                    if (this.currentSong) {
                        var l = this.currentSong.metadata;
                        b.clear_marquees();
                        c.newsong(this.roomData.metadata.currentDj.indexOf(this.djids), l.artist, l.song, Math.round(this.currentSongEndTime - util.now() / 1000), this.currentSong.snaggable);
                    }
                    b.cleanup();
                    g.css({
                        "z-index": "",
                        visibility: "visible"
                    });
                    c.attributes.$eventBus.trigger("RoomView.visible");
                    this.$eventBus.trigger("roomViewZoomChange");
                }, this);
                k.css({
                    transform: "scale(1.5, 1.5)",
                    "transform-origin": "top center"
                }).one(util.transitionEnd, d);
                window.setTimeout(d, 4000);
            } else {
                if (f === "room") {
                    h = "concert";
                    c = this.makeRoomView(null, h);
                    var i = this.roomData.metadata;
                    c.updateTotalListeners(i.listeners);
                    c.updateCrowdVotes(i.upvotes - this.upvoters.length);
                    c.updateStage();
                    c.moveNeedle(this.getScore());
                    g = c.$node;
                    var j = c.config.origin;
                    g.css({
                        transform: "scale(1.5, 1.5)",
                        "transform-origin": "top center"
                    }).appendTo(this.nodes.roomArea);
                    window.FhoeNwaAy = this.SXjgB = c;
                    this.recenterRoomView(true);
                    window.setTimeout($.proxy(function() {
                        k.remove();
                        if (this.currentSong) {
                            var m = this.currentSong.metadata;
                            b.clear_marquees();
                            c.newsong(this.roomData.metadata.currentDj.indexOf(this.djids), m.artist, m.song, Math.round(this.currentSongEndTime - util.now() / 1000), this.currentSong.snaggable);
                        }
                        b.cleanup();
                        var l = false;
                        var n = $.proxy(function() {
                            if (l) {
                                return;
                            }
                            l = true;
                            c.attributes.$eventBus.trigger("RoomView.visible");
                            this.$eventBus.trigger("roomViewZoomChange");
                        }, this);
                        g.css({
                            transform: ""
                        }).one(util.transitionEnd, n);
                        window.setTimeout(n, 4000);
                    }, this), 0);
                } else {
                    return;
                }
            }
            this.currentRoomViewType = h;
        },
        setupSharing: function(f) {
            var e = this;
            var d = function() {
                if (e.currentSong) {
                    var j = e.currentSong.metadata.coverart;
                    if (j) {
                        return j.replace("_50", "_100");
                    }
                }
                return "";
            };
            var c = function() {
                var j = "";
                if (e.currentSong) {
                    j = "Now playing: " + e.currentSong.metadata.artist + " - " + e.currentSong.metadata.song;
                }
                return j;
            };
            var b = function() {
                var j = f;
                if (!j.match(/^the/i)) {
                    j = "the " + j;
                }
                if (!j.match(/room$/i)) {
                    j = j + " room";
                }
                return j;
            };
            var i = function() {
                var n = [(e.isDj() ? "DJing in ": "I'm listening to ") + b() + ".", " Come hang out!", " \u266B\u266A", " #turntablefm"];
                var m = [1, -2, -1];
                if (e.currentSong) {
                    n.splice(2, 0, " Now playing " + e.currentSong.metadata.artist, ": " + e.currentSong.metadata.song);
                    m.splice(2, 0, 3);
                }
                var k = 0;
                for (var l = 0; l < n.length; l++) {
                    k += n[l].length;
                }
                for (var l = 0; l < m.length && k > 120; l++) {
                    var j = m[l];
                    if (j < 0) {
                        j += n.length;
                    }
                    k -= n[j].length;
                    n[j] = "";
                }
                return encodeURIComponent(n.join(""));
            };
            var h = function(j, k) {
                _gaq.push(["_trackEvent", "share", j, k]);
            };
            var g = encodeURIComponent(location.href);
            $("#share-email").click(function() {
                var j = c();
                var n = b();
                var k = "Let's hang out and play music together";
                var m = "Hey there,\n\nCome DJ with me at " + location.href + "\n\nI'm in " + n + " rocking out right now. Invite anyone else you want by sending them the room link.\n\n" + j;
                h("email", f);
                var l = window.open("mailto:?subject=" + encodeURIComponent(k) + "&body=" + encodeURIComponent(m));
            });
            $("#share-twitter").click(function() {
                var n = i();
                var k = 600;
                var j = 300;
                var m = (screen.width / 2) - (k / 2);
                var l = (screen.height / 3) - (j / 2);
                h("twitter", f);
                window.open("http://twitter.com/share?text=" + n + "&url=" + g, "tweet", "menubar=0,resizable=0,width=" + k + ",height=" + j + ",left=" + m + ",top=" + l);
            });
            $("#share-facebook").click(function() {
                var l = i();
                var q = b();
                var n = d();
                var o = "turntable.fm+lets+you+listen+to+music+at+the+same+time+with+your+friends.";
                var j = c();
                if (j) {
                    o = j;
                }
                var k = 1000;
                var r = 460;
                var m = (screen.width / 2) - (k / 2);
                var p = (screen.height / 3) - (r / 2);
                h("facebook", f);
                window.open("https://www.facebook.com/dialog/feed?app_id=127146244018710&redirect_uri=" + encodeURIComponent("http://" + location.host + "/close_window") + "&link=" + g + "&picture=" + n + "&caption=Come+join+me+and+let's+listen+to+music+together&description=" + o + "&name=I'm+in+" + util.title(q) + "+on+turntable.fm", "fb", "menubar=0,resizable=0,width=" + k + ",height=" + r + ",left=" + m + ",top=" + p);
            });
        },
        refreshFacebookToken: function() {
            turntable.hYkveeiflds({
                api: "user.is_facebook_token_stale"
            }, function(b) {
                if (b.success) {
                    turntable.hYkveeiflds({
                        api: "user.update_facebook_token"
                    });
                }
            });
        },
        addToSongLog: function(f) {
            var c = $("#song-log");
            var d = $(util.buildTree(Room.layouts.songView(this, f)));
            if (c.find(".song").length % 2) {
                d.addClass("nth-child-even");
            }
            c.prepend(d);
            this.updateScoreInSongLog(f.score || 0.5);
            var e = (c.closest("#song-log-panel").css("display") !== "none" && $("#room-info").css("display") !== "none"),
            b = function() {
                var g = d.find(".dj-info").width() + 16;
                d.find(".details").css("right", g);
            };
            if (e) {
                b();
            } else {
                this.$eventBus.one("SongLog.visible", b);
            }
        },
        songViewMouseEnter: function(c) {
            var b = $(c.target);
            b.closest(".song").append($(util.buildTree(["div#song-add-menu", ["div.btn.queue", {
                data: {
                    site: "queue"
                }
            }], ["div.btn.amazon", {
                data: {
                    site: "amazon"
                }
            }], ["div.btn.itunes", {
                data: {
                    site: "itunes"
                }
            }], ["div.btn.lastfm", {
                data: {
                    site: "lastfm"
                }
            }], ["div.btn.spotify", {
                data: {
                    site: "spotify"
                }
            }], ["div.btn.rdio", {
                data: {
                    site: "rdio"
                }
            }]])).on("click", ".btn", this.songLogAddClick));
        },
        songViewMouseLeave: function(b) {
            $(b.target).closest(".song").find("#song-add-menu").remove();
        },
        songLogAddClick: function(f) {
            var b = $(f.target),
            d = b.closest(".song").data("songData"),
            c = b.data("site");
            this.addSong(c, d);
        },
        updateScoreInSongLog: function(b) {
            var c = $("#song-log-container .score:first");
            if (b >= 0.5) {
                c.addClass("scoregood").removeClass("scorebad");
            } else {
                c.removeClass("scoregood").addClass("scorebad");
            }
            c.html(Math.round(b * 100) + "%");
        },
        samplePlay: function(b) {
            var c = $(b).closest(".song");
            turntablePlayer.samplePlay(c.data("songData")._id, this.sampleCallback);
            c.addClass("currentPreview");
        },
        sampleCallback: function(c, b) {
            if (c == "progress") {
                $(".currentPreview .progress").css({
                    width: b
                });
            } else {
                if (c == "stop") {
                    $(".currentPreview .progress").css({
                        width: "0%"
                    });
                    $(".currentPreview").removeClass("currentPreview");
                }
            }
        },
        hasModPowers: function(b) {
            b = b || turntable.user.id;
            return this.isMod(b) || this.isSuperuser(b);
        },
        isMod: function(b) {
            b = b || turntable.user.id;
            return $.inArray(b, this.roomData.metadata.moderator_id) != -1;
        },
        isSuperuser: function(c) {
            c = c || turntable.user.id;
            if (c == turntable.user.id) {
                return turntable.user.acl > 0;
            }
            var b = this.userMap[c];
            return b && b.acl > 0;
        },
        showScreenEditor: function() {
            $("#room-settings-container").addClass("closed");
            var b = new RoomScreenEditor();
            b.render();
            b.show();
        },
        toggleEditDesc: function() {
            var e = $("#room-info"),
            d = e.find("#room-settings-container"),
            f = e.find("#save-description-btn"),
            b = e.find(".infowrap .description"),
            i = e.find(".edit-description"),
            c = parseInt(i.css("line-height").slice(0, -2));
            if (!this.editingRoomDescription) {
                i.val(this.description).width(b.width());
                d.hide().addClass("closed");
                f.show();
                this.editingRoomDescription = true;
                b.hide();
                i.css("display", "block").trigger("autosize").focus();
                i[0].selectionStart = i.val().length;
                e.find(".room-info-wrap").on("scroll", function() {
                    this.scrollTop = 0;
                });
            } else {
                var g = this;
                var h = function() {
                    g.editingRoomDescription = false;
                    d.show();
                    f.hide();
                    i.hide();
                    b.show();
                    e.find(".room-info-wrap").off("scroll");
                };
                if (i.val() != this.description) {
                    turntable.hYkveeiflds({
                        api: "room.modify",
                        roomid: this.roomId,
                        section: this.section,
                        description: i.val()
                        }).done(function(j) {
                        if (j.success) {
                            h();
                        }
                    });
                } else {
                    h();
                }
            }
        },
        updateRoomDesc: function(e) {
            var d = $("#room-info .default-message"),
            b = $("#room-info .description");
            if (!e.description || e.description === "") {
                var c = "No room description. ";
                if (this.hasModPowers()) {
                    c += "Click the icon above to write one!";
                } else {
                    c += "Ask a moderator to write one!";
                }
                b.text(c).addClass("default-message");
            } else {
                b.html(util.linkify(util.brText(util.spaceToNbsps(util.safeText(e.description))))).removeClass("default-message");
            }
            this.description = e.description;
        },
        updateTotalListeners: function(b) {
            $(".total-listener-count").text(b);
        },
        facebookSendDialog: function() {
            var c = 465;
            var b = 225;
            var e = (screen.width / 2) - (c / 2);
            var d = (screen.height / 3) - (b / 2);
            window.open("https://www.facebook.com/plugins/send_button_form_shell.php?api_key=113869198637480&nodeImageURL=https://s3.amazonaws.com/static.turntable.fm/images/record_logo.gif&nodeSummary=turntable.fm+lets+you+listen+to+music+at+the+same+time+with+your+friends.&nodeTitle=Play+music+together.&nodeURL=" + encodeURIComponent(location.href), "fb", "menubar=0,resizable=0,width=" + c + ",height=" + b + ",left=" + e + ",top=" + d);
        },
        feedbackShow: function() {
            FBY.showForm("633");
            this.feedbackifyInstrument();
        },
        helpShow: function() {
            FBY.showForm("3178");
            this.feedbackifyInstrument();
        },
        feedbackifyInstrument: function() {
            var c = $("#feedbackify .fsend");
            if (c.length == 0) {
                setTimeout(this.feedbackifyInstrument, 300);
                return;
            }
            var b = c.filter(".new");
            if (b.length == 0) {
                var b = c.clone(false).addClass("new");
                b.insertAfter(c);
                b.click(function() {
                    var d = $("#feedbackify .feedback-holder textarea");
                    var e = d.val();
                    if (typeof e == "string") {
                        d.val(e + "\n\nSent by user " + turntable.user.id + "\n" + navigator.userAgent);
                    }
                    $(".fsend.new").hide();
                    $(".fsend.old").show();
                    YUI().use("node-event-simulate", function(f) {
                        f.one(".fsend.old").simulate("click");
                    });
                });
            } else {
                b.show();
            }
            c.addClass("old").hide();
        },
        listRoomsShow: function(d) {
            var c = util.buildTree(Room.layouts.listRooms($.proxy(this.createRoom, this), $.proxy(this.closeListRooms, this)), Room);
            var b;
            this.roomList = new RoomList(this.roomId);
            Room.modal.show();
            b = Room.modal.$node.find(".roomIndexContainer");
            b.append(this.roomList.view);
            b.on("click", ".roomRow", Room.modal.close);
            Room.modal.$node.find(".randomRoom").click(Room.modal.close);
            Room.modal.$node.find(".content").css({
                padding: "0 0 1em 0",
                background: "#3c3c3c"
            });
        },
        listRoomsHide: function() {
            this.roomList.cleanup();
            this.roomList = null;
        },
        closeListRooms: function(b) {
            this.listRoomsHide();
            Room.modal.close();
        },
        createRoom: function(b) {
            this.listRoomsHide();
            Room.modal.close({
                showLoadingTransition: true
            });
            welcome.createRoomShow();
        },
        addUserToMap: function(b) {
            b.fanof = ($.inArray(b.userid, turntable.user.fanOf) !== -1);
            b.isBuddy = ($.inArray(b.userid, turntable.user.buddies) !== -1);
            this.userMap[b.userid] = b;
        },
        addListener: function(c, e) {
            if (this.SXjgB == null) {
                if (this.loadRoomStateTask) {
                    this.loadRoomStateTask.done($.proxy(function() {
                        this.addListener(c);
                    }, this));
                } else {
                    LOG("Attempted to add listener without a room manager");
                }
                return;
            }
            var b = this.userMap[c];
            var d = this.listenerMap[c];
            if (d) {
                this.updateUserInRoomView(b);
            } else {
                this.SXjgB.addListener(b, this.getEntropyForUser(b));
                this.updateUserVoteInRoomView(b);
                this.listenerMap[c] = true;
            }
            if (this.listenerids.indexOf(c) === -1) {
                this.listenerids.push(c);
            }
            if (!e) {
                this.updateGuestList();
            }
            if (b.fanof || b.isBuddy) {
                b.status = "available";
                b.roomName = this.name;
                turntable.buddyList.addBuddy(b, true);
                if (b.userid in turntable.buddyList.pmWindows) {
                    turntable.buddyList.pmWindows[b.userid].updateStatus(b.status);
                }
            }
        },
        removeListener: function(c) {
            if (!this.userMap.hasOwnProperty(c)) {
                LOG(c + " is not a listener!");
                return;
            }
            var b = this.userMap[c];
            if (b) {
                $(window).trigger("removeListener", [b]);
            }
            delete this.listenerMap[c];
            var d = this.listenerids.indexOf(c);
            if (d !== -1) {
                this.listenerids.splice(d, 1);
            }
            d = this.djids.indexOf(c);
            if (d !== -1) {
                this.djids.splice(d, 1);
            }
            this.SXjgB.removeListener(b);
            this.updateGuestList();
            this.$eventBus.trigger("Room.removeListener", c);
        },
        updateUser: function(c) {
            var b = this.userMap[c.userid];
            if (!b) {
                return;
            }
            if (c.hasOwnProperty("avatarid")) {
                b.avatarid = c.avatarid;
            }
            if (c.hasOwnProperty("name") && c.name != b.name) {
                this.appendAction(b.userid, b.name, " shall now be known as " + c.name + ".", "action");
                b.name = c.name;
            }
            if (c.hasOwnProperty("fans")) {
                this.handleFanned(c);
            }
            this.updateUserInRoomView(b);
        },
        updateUserInRoomView: function(c) {
            var b = $.inArray(c.userid, this.djids);
            if (b == -1) {
                this.SXjgB.removeListener(c);
                this.SXjgB.addListener(c, this.getEntropyForUser(c));
            } else {
                this.SXjgB.removeDj(b);
                this.SXjgB.addDj(c, b);
                if (c.userid == this.roomData.metadata.currentDj) {
                    this.SXjgB.set_active_dj(b);
                }
            }
            this.updateUserVoteInRoomView(c);
        },
        updateUserVoteInRoomView: function(b) {
            if ($.inArray(b.userid, this.upvoters) != -1) {
                this.SXjgB.update_vote(b, "up");
            }
        },
        addDj: function(c) {
            if ($.inArray(c, this.djids) != -1) {
                this.removeDj(c);
            }
            if (this.djids.length < this.roomData.metadata.max_djs) {
                var b = this.userMap[c];
                this.SXjgB.removeListener(b);
                this.SXjgB.addDj(b, this.djids.length);
                this.updateUserVoteInRoomView(b);
                this.djids.push(c);
                this.roomData.metadata.djs = this.djids.slice();
                this.updateGuestList();
            } else {
                this.loadRoomState();
            }
        },
        removeDj: function(d) {
            var c = $.inArray(d, this.djids);
            if (c == -1) {
                return;
            }
            this.djids.splice(c, 1);
            this.roomData.metadata.djs = this.djids.slice();
            this.SXjgB.removeDj(c);
            for (; c < this.djids.length; c++) {
                this.SXjgB.removeDj(c + 1);
                var f = this.djids[c];
                var e = this.userMap[f];
                this.SXjgB.addDj(e, c);
                if (f == this.roomData.metadata.currentDj) {
                    this.SXjgB.set_active_dj(c);
                } else {
                    this.updateUserVoteInRoomView(e);
                }
            }
            var b = this.userMap[d];
            if (b && !this.section) {
                this.SXjgB.addListener(b, this.getEntropyForUser(b));
                this.updateUserVoteInRoomView(b);
            }
            this.updateGuestList();
        },
        wbkFbFIRvVno: function() {
            if (this.isDj()) {
                return;
            }
            if (turntable.playlist.fileids.length == 0) {
                util.buildTree([TourOverlay, {
                    childNodes: [FhoeNwaAy.layouts.welcomeViewFive(true, FhoeNwaAy.positionTourQueue)]
                    }], Room);
                Room.tourOverlay.show();
                return;
            }
            var b = this;
            turntable.hYkveeiflds({
                api: "room.add_dj",
                roomid: this.roomId,
                section: this.section
            }, function(c) {
                if (!c.success && !b.isDj()) {
                    turntable.showAlert(c.err);
                }
            });
        },
        quitDj: function() {
            if (this.isDj()) {
                turntable.hYkveeiflds({
                    api: "room.rem_dj",
                    roomid: this.roomId,
                    section: this.section
                });
            }
        },
        isDj: function(b) {
            if (!b) {
                b = turntable.user.id;
            }
            return ($.inArray(b, this.djids) != -1);
        },
        guestListSort: function(e, d) {
            var c = e.name.toLowerCase(),
            f = d.name.toLowerCase();
            return (f > c) ? -1: (f < c) ? 1: 0;
        },
        updateGuestList: function() {
            var d = [],
            c = [],
            x = [],
            s = [],
            j = [],
            k = $(".guest-list-container .guests"),
            h = this.userMap,
            p = this.roomData.metadata.moderator_id,
            t = turntable.user.fanOf;
            for (var q = 0, b = this.djids, r = b.length; q < r; q++) {
                x.push(h[b[q]]);
            }
            for (var q = 0, v = this.listenerids, r = v.length; q < r; q++) {
                if (b.indexOf(v[q]) > -1) {
                    continue;
                } else {
                    if (this.isSuperuser(v[q])) {
                        d.push(h[v[q]]);
                    } else {
                        if (this.isMod(v[q])) {
                            c.push(h[v[q]]);
                        } else {
                            if (t.indexOf(v[q]) > -1) {
                                s.push(h[v[q]]);
                            } else {
                                j.push(h[v[q]]);
                            }
                        }
                    }
                }
            }
            c = d.sort(this.guestListSort).concat(c.sort(this.guestListSort));
            j = s.sort(this.guestListSort).concat(j.sort(this.guestListSort));
            var e = k.find(".guest.selected").data("id");
            k.children().remove();
            var w = [x, c, j],
            y = ["DJs", "Moderators", "Audience"];
            for (var n = 0, m = w.length; n < m; n++) {
                var f = w[n];
                if (f.length > 0) {
                    k.append(util.buildTree(["div.separator", ["div.text", y[n]]]));
                }
                for (var q = 0, r = f.length; q < r; q++) {
                    var g = (e && e == f[q].userid);
                    k.append(util.buildTree(Room.layouts.guestListName(f[q], this, g)));
                }
            }
            var o = c.length + j.length,
            u;
            if (this.section === undefined) {
                o += x.length;
            }
            if (o === 1) {
                u = o + " person here";
            } else {
                u = o + " people here";
            }
            $("span#totalUsers").text(u);
            this.updateGuestListMenu();
        },
        addGuestListMenu: function(b, c) {
            if (this.guestOptionsHoverTimer) {
                clearTimeout(this.guestOptionsHoverTimer);
            }
            $("div.guest.selected").removeClass("selected");
            var d = $(util.buildTree(Room.layouts.guestOptions(b, this))).css({
                visibility: "hidden"
            });
            c.addClass("selected").parent().append(d);
            this.updateGuestListMenu(d, c);
        },
        updateGuestListMenu: function(f, c) {
            if (!f) {
                f = $("div.guestOptionsContainer");
            }
            if (!c) {
                c = $("div.guest.selected");
            }
            if (f.length && c.length) {
                var b = c.position().top,
                e = c.parent().scrollTop();
                var d = b + e - f.height() + 6;
                if (d < 0 || (d < e && b + e + c.height() + f.height() < f.parent()[0].scrollHeight)) {
                    d = b + e + c.height() - 5;
                    f.addClass("nibTop");
                }
                $(f).css({
                    top: d + "px",
                    visibility: "visible"
                });
            }
        },
        removeGuestListMenu: function(b) {
            $("div.guest.selected").removeClass("selected");
            $("div.guestOptionsContainer").fadeOut("fast", function() {
                $(this).remove();
                if (b) {
                    b();
                }
            });
        },
        unloadWarning: function() {
            if (this.isDj()) {
                return "Warning: if you leave this page, you'll give up your DJ spot.";
            }
        },
        postUsernameRegex: /^([^A-Za-z0-9!@#$%^&*()+=_\[\]{}~|;:\'"<>,.?/\\ - ] | [!);: \',.?]*(\s|$))/,isMention:function(f){if(!f){return;}var e=turntable.user.displayName.toLowerCase(),f=f.toLowerCase();if(e[0]!=="@"){e="@"+e;}var b=f.indexOf(e),d=e.length,c;while(b!==-1){c=b+d;if(this.postUsernameRegex.test(f.substring(c))){return true;}b=f.indexOf(e,b+1);}return false;},showChatMessage:function(d,e,f){if($.inArray(d,this.ignoredUsers)==-1){var c=this.isMention(f);if(f.substr(0,4)==="/me "){this.appendAction(d,e,f.substr(3));if(this.SXjgB){this.SXjgB.speak(this.userMap[d],"*"+f.substr(4)+"*");}}else{var b=c?"mention":undefined;this.appendChatMessage(d,e,f,b);if(this.SXjgB){this.SXjgB.speak(this.userMap[d],f);}}if(c&&(this.dingSetting==="on"||this.dingSetting==="mention")){turntablePlayer.playEphemeral(UI_SOUND_MENTION,true);}else{if(this.dingSetting==="on"){turntablePlayer.playEphemeral(UI_SOUND_CHAT,true);}}}},lastChatSpeakerid:null,$lastChatMessage:null,appendChatMessage:function(f,e,i,c){var d,b=false;if(this.lastChatSpeakerid===f){d=this.$lastChatMessage;}else{d=$(util.buildTree(Room.layouts.chatMessage));var h;if(e=="TURNTABLE"){h="url(http://static.turntable.fm/roommanager_assets/props/loudspeaker.png)";}else{h="url("+this.userMap[f].images.headfront+")";}d.find(".avatar").css("background-image",h);d.find(".speaker").text(e).data("userid",f);b=true;this.lastChatSpeakerid=f;this.$lastChatMessage=d;}var g=$(util.buildTree(["div.text"]));i=util.stripComboDiacritics(i);if(i.length>446){g.attr("title",i.substr(0,2)==": "?i.substr(2):i);i=i.substr(0,440)+"...";}g.html(util.messageFilter(i));if(c){d.addClass(c);}if(b){d.find(".textContainer").append(g);this.appendMessage(d);}else{this.checkChatScroll();d.find(".textContainer").append(g);this.updateChatScroll();}},appendAction:function(c,e,f,b){this.lastChatSpeakerid=null;var d=$(util.buildTree(Room.layouts.actionMessage));d.find(".subject").text(e).data("userid",c);d.find(".text").html(util.messageFilter(f));if(b){d.addClass(b);}this.appendMessage(d);},emptyMessageRemoved:false,appendMessage:function(d){var f=this.nodes.chatLog,c=$(f);if(!this.emptyMessageRemoved){c.find(".default-message").remove();this.emptyMessageRemoved=true;}this.checkChatScroll();c.append(d);this.updateChatScroll();var e=$(f).find(".message");if(e.length>500){e=e.slice(0,2);var b=e.first().outerHeight(true)+e.last().outerHeight(true);e.remove();if(!this.chatScrollBottom){f.scrollTop-=b;}}},chatScrollBottom:true,checkChatScroll:function(){var c=this.nodes.chatLog,b=(c.scrollTop+c.offsetHeight+20>=c.scrollHeight);this.chatScrollBottom=b;},updateChatScroll:function(){var b=this.nodes.chatLog;if(this.chatScrollBottom){b.scrollTop=b.scrollHeight;}},votes:0,upvoters:[],currentSong:null,setCurrentSong:function(o,n){LOG("setCurrentSong");var b=util.now()/1000;var f=(o?o.current_dj:null);var j=(o?o.current_song:null);if(!f||!j){f=j=null;}var c=!(this.currentSong&&j&&this.currentSong._id==j._id&&Math.abs(this.currentSong.starttime-j.starttime)<0.1);if(!this.resyncStream){this.upvoters=[];}var p=this.roomData.metadata;if(c){LOG("song change");httpStream.closeStream();this.streamStarted=false;if(p.currentDj){this.userMap[p.currentDj].points=this.currentDjPointsAtSongStart+this.currentDjPointDelta;this.previousDjid=p.currentDj;this.previousDjPointDelta=this.currentDjPointDelta;if(p.currentDj==turntable.user.id){turntable.user.djPoints=this.userMap[p.currentDj].points;}}if(util.notEmpty(n)){this.userMap[f].points=n;}if(f){this.currentDjPointsAtSongStart=this.userMap[f].points-o.upvotes;}this.currentDjPointDelta=0;if(this.timers.oyNlLWRCM){clearTimeout(this.timers.oyNlLWRCM);this.timers.oyNlLWRCM=null;}}if(p.currentDj===f&&util.notEmpty(n)){LOG("same DJ");this.SXjgB.set_dj_points(n);}p.currentDj=f;var k=this.resyncStream;this.resyncStream=false;if(j){var q=j.metadata;var e=b-turntable.clientTimeDelta;if(e<j.starttime){e=j.starttime;turntable.clientTimeDelta=b-e;}if(o.netloc&&o.sync&&o.sync.current_seg){var m=o.netloc+this.roomId;var d=function(){httpStream.loadStream(m,o.sync.current_seg,o.sync.tstamp,500);};if(c){LOG("seting timeout to load stream");setTimeout(d,500);}else{if(k){d();}}}else{LOG("scheduling resync stream");this.scheduleResyncStream(2000);}var h=$.inArray(p.currentDj,this.djids);ASSERT(h!==-1);if(c){LOG("song change calling loadingsong");this.appendAction(p.currentDj,this.userMap[p.currentDj].name,'started playing "'+j.metadata.song+'"by '+j.metadata.artist);this.SXjgB.loadingsong(h);}else{LOG("not song change, setting active DJ");this.SXjgB.set_active_dj(h);}this.currentSong=j;this.currentSongEndTime=j.starttime+turntable.clientTimeDelta+q.length;LOG("current song end time: "+this.currentSongEndTime);LOG("current time: "+Date.now()/1000);}else{LOG("no song");this.SXjgB.nosong();this.currentSong=null;}if(c){LOG("current dj? "+p.currentDj==turntable.user.id);turntable.playlist.setCurrentSong(p.currentDj==turntable.user.id?j:null);if(p.currentDj==turntable.user.id){while(this.songsDjed.length&&this.songsDjed[0].time+3*3600<b){this.songsDjed.shift();}var g=false;for(var l=0;l<this.songsDjed.length;l++){if(this.songsDjed[l].fileId==j._id){g=true;break;}}if(!g){this.songsDjed.push({fileId:j._id,time:b});}else{if(turntable.BXruhgG()>120*1000){}}}else{if(turntable.BXruhgG()>30*60*1000){if(this.roomId!="4f594a82a3f751581000eb80"){if(this.isDj()){this.showRoomTip("It looks like you've been falling asleep at the deck.How about taking a
        break from DJing ? ");this.quitDj();}}}}}if(this.currentSong&&!this.SXjgB.currentSong){var q=this.currentSong.metadata;this.SXjgB.newsong($.inArray(this.roomData.metadata.currentDj,this.djids),q.artist,q.song,Math.round(this.currentSongEndTime-util.now()/1000),this.currentSong.snaggable);}},getCurrentSongProgress:function(){var b=this.currentSong.metadata;return 1-(this.currentSongEndTime-util.now()/1000)/b.length;},oyNlLWRCM:function(){this.timers.oyNlLWRCM=null;if(this.numDjs()!=1){return;}turntablePlayer.FTkXUmn(true);this.showRoomTip("We can only play you a preview of your song until someone else
            also starts DJing.Everyone else
            can still hear the song playing.");},getScore:function(b){if(!b){b=this.roomData.metadata;}return(b.upvotes-b.downvotes+b.listeners)/(2*b.listeners);},updateVotes:function(k,i){var g=k.upvotes-k.downvotes;var f=this.getScore(k);if(f){if(this.SXjgB){this.SXjgB.moveNeedle(f);}this.updateScoreInSongLog(f);}var j=this.upvoters.length;for(var h=0;h<k.votelog.length;h++){var e=k.votelog[h];var d=this.userMap[e[0]];if(d){if(this.SXjgB==null){if(this.loadRoomStateTask){this.loadRoomStateTask.done($.proxy(function(){this.SXjgB.update_vote(d,e[1]);},this));}else{window.setTimeout($.proxy(function(){this.updateVotes(k,i);},this),1000);}}else{this.SXjgB.update_vote(d,e[1]);}var c=$.inArray(d.userid,this.upvoters);if(e[1]=="up "&&c==-1){this.upvoters.push(d.userid);}else{if(e[1]=="down "&&c!=-1){this.upvoters.splice(c,1);}}}}if(i){var b=this.roomData.metadata.current_dj;ASSERT(b,"Somebody voted but no DJ was active ");this.currentDjPointDelta=k.upvotes;this.users[b].points=this.currentDjPointsAtSongStart+this.currentDjPointDelta;this.SXjgB.set_dj_points(this.users[b].points);}},lobbyRedirect:function(b){var c="Sorry,
        you weren 't able to enter the room (error "+b+"). Please choose another room.";if(b==1){c="Due to fire codes, this room is at maximum capacity. We'll escort you back to the lobby.";_gaq.push(["_trackEvent ","room ","deny ","full "]);}else{if(b==2){c="Looks like you 're already in another room. Please close that room before entering another one.";_gaq.push(["_trackEvent","room","deny","otherroom"]);}else{if(b==3){c="The bouncer has decided not to let you in, and will escort you back to the lobby.";_gaq.push(["_trackEvent","room","deny","bouncer"]);}}}turntable.showAlert(c,function(){window.location.href="/lobby";});this.setCurrentSong(null);},gotBooted:function(e,d){if(!d){d="The Moderator";}var c=(e?" (Reason: "+e+")":"");var b={};util.buildTree([ActionModal,{cssClass:"booted",showCancel:false,showClose:false,clickOut:false,submitCallback:function(){b.modal.close();window.location.href="/lobby";}},["div.section",["div.unhappyFace"],["br"],d," booted you from the room.",c,["br"],["br"],"We'll take you back to the lobby to choose a new room.",["br "]]],b);b.modal.show();},checkIdle:function(){turntable.showAlert("Hey sleepyhead,
        are you idle ? Click OK to continue listening,
        or you will be escorted to the lobby in two minutes.");var b=this;this.originalVolume=turntablePlayer.volume;turntablePlayer.setVolume(0);this.timers.checkIdle=setTimeout(function(){b.timers.checkIdle=null;turntable.removeEventListener("unidle ",b.cancelIdleBoot);turntable.hideOverlay();turntablePlayer.setVolume(b.originalVolume);window.location.href=" / lobby ";},120*1000);turntable.addEventListener("unidle ",this.cancelIdleBoot);},cancelIdleBoot:function(){clearTimeout(this.timers.checkIdle);this.timers.checkIdle=null;turntable.removeEventListener("unidle ",this.cancelIdleBoot);turntable.hideOverlay();turntablePlayer.setVolume(this.originalVolume);},showRoomTip:function(d,b){var c=$(".roomTip.text ");c.text(d);if(this.timers.hideRoomTip){clearTimeout(this.timers.hideRoomTip);this.timers.hideRoomTip=null;}else{$(".roomTip ").fadeIn();}setTimeout(function(){c.css("margin - top ",($(".roomTip ").height()-c.height())/2+"px ");},0);if(b){this.timers.hideRoomTip=setTimeout(this.hideRoomTip,b*1000);}},hideRoomTip:function(){$(".roomTip ").fadeOut();if(this.timers.hideRoomTip){clearTimeout(this.timers.hideRoomTip);this.timers.hideRoomTip=null;}},handlePM:function(c,b){var d=function(){if(c&&c.senderid&&c.text){turntable.buddyList.pmWindows[c.senderid].addPM(c);}};if(!(c.senderid in turntable.buddyList.pmWindows)){turntable.buddyList.addPMWindow(c.senderid,b,d);}else{d();turntable.buddyList.pmWindows[c.senderid].open(b);}},filterUsersByName:function(l,d){var h=[],g=0,b=l.length,k=this.listenerids,c=this.userMap,e;l.toLowerCase();for(var f=0,j=k.length;f<j;f++){e=c[k[f]];name=e.name.toLowerCase();name=(name[0]=="@")?name.slice(1):name;if(name.substring(0,b)===l){h[g]=e;g++;if(g>=d){break;}}}return h;},chatTextListener:function(h){var k=h.target;var m=h.charCode||h.keyCode;var q=this;if(m==38||m==40||m==27||(m==39&&k.selectionEnd==k.value.length)||m==13||m==9){return;}$("#typeahead ").remove();this.typeahead=null;this.replaceStartIndex=null;this.suggestion=null;var r=k.value.substring(0,h.target.selectionEnd);var g=false;var o=this.lastValidAtSymbolIndex(r);var p=5;if(o>=0){g=r.slice(o+1).toLowerCase();if(g===false){return;}var c=this.filterUsersByName(g,5);if(c.length){this.typeahead="name ";util.alphabetize(c,"name ");var b=util.buildTree(Room.layouts.nameSuggest(c));this.suggestion=c[0].name;this.replaceStartIndex=o+1;}}if(!this.typeahead){var f=this.emojiRegex.exec(r);if(f){var n=f[3].toLowerCase();var d=util.emojiTypeahead(n,5);if(d.length){this.typeahead="emoji ";util.alphabetize(d);d.sort(function(s,e){return s.indexOf(n)-e.indexOf(n);});var l=n.length===1,j=!l,b=util.buildTree(Room.layouts.emojiSuggest(d,j));if(j){this.suggestion=d[0];}this.replaceStartIndex=r.lastIndexOf(f[3]);}}}if(this.typeahead){$("body ").append(b);var i=$("#chat - input ").offset();$(b).css({left:i.left+1+"px ",top:i.top-5-$(b).outerHeight(true)+"px "});$(".suggestion ").click(function(s){q.chooseSuggestion(false,$(s.target).text());}).mouseover(function(t){var s=$(this);if(!s.hasClass("selected ")){q.suggestion=s.text();s.addClass("selected ").siblings(".selected ").removeClass("selected ");}});}return true;},emojiRegex:/([^:](:[\w\d\-_+]+:)?)*:([\w\d\-_+]+)$/,chatKeyDownListener:function(g){var c=g.target;var d=g.charCode||g.keyCode;if(this.typeahead){if(d==13||d==9){if(this.suggestion){this.chooseSuggestion(c);return false;}else{this.cancelTypeahead();}}else{if(d==38){var f=$(".suggestion.selected "),b;if(f.length){b=f.prev();}if(!b||!b.length){b=$(".suggestion ").last();}f.removeClass("selected ");this.suggestion=b.addClass("selected ").text();return false;}else{if(d==40){var f=$(".suggestion.selected "),b;if(f.length){b=f.next();}if(!b||!b.length){b=$(".suggestion ").first();}f.removeClass("selected ");this.suggestion=b.addClass("selected ").text();return false;}else{if(d==27||(d==39&&c.selectionEnd==c.value.length)){this.cancelTypeahead();return false;}}}}}if(d===13){$(this.nodes.chatForm).submit();g.preventDefault();}},lastValidAtSymbolIndex:function(b){var d=b.split("@");if(d.length>1){for(var c=d.length-2;c>=0;c--){if(!d[c].length||(d[c].length&&d[c][d[c].length-1]=="")){return d.slice(0,c+1).join("@").length;}}if(d[0]==""){return 0;}}return -1;},chooseSuggestion:function(c,b){b=b||this.suggestion;if(!b){this.cancelTypeahead();return;}if(!c){c=$("#chat - input ")[0];}if(this.typeahead==="name "){if(b[0]=="@"){b=b.slice(1);}}else{if(this.typeahead==="emoji "){b=b+": ";}}var e=c.value.substring(0,c.selectionEnd);var f=c.value.substring(c.selectionEnd);var d=e.slice(0,this.replaceStartIndex)+b+"";$(c).val(d+f);c.selectionEnd=c.selectionStart=d.length;this.cancelTypeahead();},cancelTypeahead:function(){this.suggestion=false;$("#typeahead ").remove();}};}());Room.layouts={zeroClip:null,page:function(b,a){return["div.roomView ",{},["div#header ",{},["div##logo.logo "],["div.info ",{},["div.room ",{},["div##favorite.favorite ",{event:{click:b}}],["div##roomName.name "],["div.total - listeners ",["span.total - listener - count "],"Listeners "]],["ul.header - well - buttons#volume - control ",["li.dropdown - container ",["div.header - well - button#volume - button ","Volume "],["ul.header - well - dropdown.floating - menu.down#volume - dropdown ",["div#volume - slider ",["div#volume - fill ",["div#volume - knob "]]]]]],["ul.header - well - buttons#room - controls ",["li.dropdown - container#share - container ",["div.header - well - button#share ","Share "],["ul.header - well - dropdown.floating - menu.down ",["li.option#share - facebook ","Facebook "],["li.option#share - twitter ","Twitter "],["li.option#share - email ","Email "],["li.option.zeroClipContainer#share - link##zeroClipContainer ","Copy URL ",["div##zeroClipButton.zeroClipButton "]]]],["li.dropdown - container ",["div.header - well - button#help ","Help "],["ul.header - well - dropdown.floating - menu.down ",["li.option ",{event:{click:function(){window.open("http: 
        //faq.turntable.fm/");}}},"Visit the FAQ"],["li.option#help-button","Ask for Help"],["li.option#feedback-button","Give Feedback"],["li.option#report-room","Report Room"]]]]],["button##listRooms#switch-room.tt-button.small.primary.inset","Switch Room"],["div##userauth.userauthContainer"]],["div##roomArea#scene"],["div.roomTip",{},["div.roomTipClose"],["div.text"]],["div.floating-panel.hidden#left-panel",["ul.floating-panel-tabs"]],["div.floating-panel#right-panel",["ul.floating-panel-tabs",{},["li.chat-container",["div.floating-panel-tab.right-divider",["div.floating-panel-tab-content",["span.tab-icon"],["h2","Chat"]]],["div#chat",["div##chatLog.messages",["div.default-message",["p","It's a little quiet in here. Start the conversation!"]]],["div.chatBar.floating-panel-bar",{},["div##chatSound.chatsound"],["div.divider"],["form##chatForm#chat-form",{},["textarea##chatText#chat-input.message-input",{event:{keyup:a},type:"text",placeholder:"enter a message"}]]]]],["li##playlist#playlist-container",["div.floating-panel-tab.right-divider.left-divider",["div.floating-panel-tab-content",["span.tab-icon"],["h2","Queue"]]]],["li#room-info-container.selected",["div.floating-panel-tab.left-divider",["div.floating-panel-tab-content",["span.tab-icon"],["h2","Room"]]],["div#room-info",["div.infowrap",{},["div#room-info-intro","Welcome to ",["a.creator"],"'s room,"],["div.room-info-wrap",["div.room-name"],["div#room-settings-container.contextual-popup.closed",["div.nib",{title:"Room Settings"},["div.icon"]],["ul.options",["li.option#edit-description-option","Edit Description"],["li.option#edit-screens-option","Edit Screens"]]],["div#save-description-btn",{title:"Save Room Description"},["div.icon","Save"]],["div.description-wrap",["textarea.edit-description"],["div.description"]]]],["ul#room-info-nav",["li#song-log-container",["div.flat-button.room-info-link",["h3","Recently Played Songs"]],["div#song-log-panel",["div.floating-panel-header",["button.back","Back"],["span.title","Recent Songs"]],["div#song-log"]]],["li.guest-list-container",["div.flat-button.room-info-link",["h3","People Here"]],["div#guest-list",["div.floating-panel-header",{},["button.back","Back"],["span.title",["span#totalUsers"]]],["div.guests"]]]]]]]]];},dingMenu:["ul#ding-menu.floating-menu.up",["li.option.on",{data:{setting:"on"}},"Ding on"],["li.option.mention",{data:{setting:"mention"}},"Ding on Mention"],["li.option.off",{data:{setting:"off"}},"Ding off"]],chatMessage:["div.message",{},["div.avatar"],["div.speaker"],["div.textContainer"]],actionMessage:["div.message",{},["span.subject"],["span.text"]],nameSuggest:function(g){var b=["div#typeahead",{}];for(var e=0,a=g.length;e<a;e++){var f=(e==0)?".selected":"";var d=g[e];var c=d.thumbnail;b.push(["div.suggestion"+f,{},["div.avatar",{style:{"background-image":"url("+c+")"}}],g[e].name]);}return b;},emojiSuggest:function(f,c){var b=["div#typeahead",{}];for(var d=0,a=f.length;d<a;d++){var e=(c&&d==0)?".selected":"",g=f[d]==="+1"?"thumbsup":f[d];b.push(["div.suggestion"+e,{},util.emojiToTree(g),f[d]]);}return b;},guestListName:function(c,g,d){var b=c.images.headfront;var f=d?".guest.selected":".guest";var e=["div.icons",{}];if(g.isSuperuser(c.userid)){e.push(["div.superuser.icon",{title:"Superuser"}]);}else{if(g.isMod(c.userid)){e.push(["div.mod.icon",{title:"Moderator"}]);}}if(turntable.user.fanOf.indexOf(c.userid)>-1){e.push(["div.fanned.icon",{title:"Fanned"}]);}var a=["div"+f,{event:{mouseover:function(){$(this).find("div.guestArrow").show();},mouseout:function(){$(this).find("div.guestArrow").hide();},click:function(){var h=$(this).parent().find("div.guestOptionsContainer");var i=$(this);if(!h.length){$.proxy(function(){this.addGuestListMenu(c,i);},g)();}else{if($(this).hasClass("selected")){g.removeGuestListMenu();}else{g.removeGuestListMenu($.proxy(function(){this.addGuestListMenu(c,i);},g));}}},dblclick:function(){g.handlePM({senderid:c.userid},true);}},data:{id:c.userid}},["div.guest-avatar",{style:{"background-image":"url("+b+")"}}],["div.guestName",{},c.name],e,["div.guestArrow"]];if(g.roomData.metadata.currentDj==c.userid){a.splice(2,0,["div.current-dj"]);}return a;},guestOptions:function(a,d){var b=["div.guestOptions.options",{event:{mouseover:function(){if(d.guestOptionsHoverTimer){clearTimeout(d.guestOptionsHoverTimer);}},mouseout:function(){d.guestOptionsHoverTimer=setTimeout(function(){d.removeGuestListMenu();},1000);}}}];b.push(Room.layouts.guestOption("View Profile","profile",a.userid,d));b.push(Room.layouts.guestOption("Report User","report_user",a.userid,d));if(a.userid==FhoeNwaAy.myuserid&&d.isDj()){b.push(Room.layouts.guestOption("Skip My Song","stop_song",a.userid,d));b.push(Room.layouts.guestOption("Quit DJing","rem_dj",a.userid,d));}var c=d.roomData.metadata.moderator_id;if(a.userid!==turntable.user.id&&d.hasModPowers()){if(turntable.user.acl>=a.acl){b.push(Room.layouts.guestOption("Boot User","boot_user",a.userid,d));if(d.isMod(a.userid)){b.push(Room.layouts.guestOption("Remove Moderator","rem_moderator",a.userid,d));}else{b.push(Room.layouts.guestOption("Make a Moderator","add_moderator",a.userid,d));}}if(d.isDj(a.userid)){b.push(Room.layouts.guestOption("Remove DJ","remove_dj",a.userid,d));}}if(a.userid!==turntable.user.id){if(a.fanof){b.push(Room.layouts.guestOption("Unfan","remove_fan",a.userid,d));}else{b.push(Room.layouts.guestOption("Become a Fan","become_fan",a.userid,d));}b.push(Room.layouts.guestOption("Send Private Message",function(){d.handlePM({senderid:a.userid},true);}));}return["div.guestOptionsContainer.contextual-popup",{},b,["div.guestOptionsNib.nib",{event:{click:function(){d.removeGuestListMenu();}}},["div.guestOptionsNibArrow"]]];},guestOption:function(c,d,a,b){return["a.guestOption.option",{href:"#",event:{click:function(){if(typeof d=="string"){b.SXjgBCallback(d,a);}else{if(typeof d=="function"){d();}}$("div.guestOptionsContainer").remove();return false;}}},c];},listRooms:function(b,a){return[Modal,{style:{width:605},showClose:false},["div.roomIndexContainer"],["div.buttons",["button.createRoom",{event:{click:b}},"Create Room"],["button.randomRoom",{event:{click:turntable.randomRoom}},"Random Room"],["button.cancel",{event:{click:a}},"Close"]]];},addSongOverlay:function(b){var a=function(c){return{event:{click:function(){b.addSong(c);}}};};return["div.addSongOverlay",{},["div.close-x",{event:{click:function(){$(".addSongOverlay").remove();}}}],["div.content",{},"Add song to:",["div.options",{},["div.btn.queue",a("queue"),["div.text","queue"]],["div.btn.amazon",a("amazon"),["div.text","amazon"]],["div.btn.itunes",a("itunes"),["div.text","iTunes"]],["div.btn.lastfm",a("lastfm"),["div.text","last.fm"]],["div.btn.spotify",a("spotify"),["div.text","spotify"]],["div.btn.rdio",a("rdio"),["div.text","rdio"]]]]];},songView:function(e,f){var d=f.metadata;var c=function(g,h){return{event:{click:function(){e.addSong(g,h);}}};};var a=dmca.showPreview(f);var b="";if(f.djname){b=["span.dj-info",["a.dj",{event:{click:function(){FhoeNwaAy.callback("profile",f.djid);}}},f.djname]];}return["div.song",{data:{songData:f}},["div.progress-bar",["div.progress"]],["div.thumb",{style:{"background-image":(d.coverart?"url("+d.coverart+")":"")}}],["div.playSample",{style:(a?{}:{display:"none"}),event:{click:function(){e.samplePlay(this);}}}],["div.pauseSample",{event:{click:turntablePlayer.sampleStop}}],["div.title",{title:d.song},d.song],["div.details",["span",d.artist,["span.divider"," \u2022 "],util.prettyTime(d.length)],],["div.score"],b];},bootConfirmView:function(a,b){return[ActionModal,{title:"Boot User",submitCallback:b},["div.field",{},"You're about to boot ",a," from the room.",["br"],["br"],"Care to give a reason?",["br"],["input.bootReasonField.text",{placeholder:"(optional)"}]]];},addModConfirmView:function(a,b){return[ActionModal,{title:"Add Moderator",submitCallback:b},["div.field",{},"You're about to bestow moderator powers upon ",a,".",["br"]]];},removeModConfirmView:function(a,b){return[ActionModal,{title:"Remove Moderator",submitCallback:b},["div.field",{},"You're about to remove ",a,"'s moderator powers.",["br"]]];},profileView:function(a){return[Modal,{cssClass:"profile",width:480},["div.profile-images",["div.avatar",{},["img",{src:(a.images.fullfront)}]],["canvas.laptop",{width:282,height:190}]],["div.section.big",["div.name",{},a.name],["div.acl"]],["div.section.web-links",["div.social",{},["a.twitter",{target:"_blank"}],["a.facebook",{target:"_blank"}]],["div.website",{},a.website]],["div.section",{},["div.joined",{},"Joined",["div.stat-number",util.prettyDate(a.created)]],["div.points",{},"DJ points",["div.stat-number",a.points]],["div.fans",{},"Fans",["div.stat-number",a.fans]]],["div.section.about",{},["div.left",{},"About me"],["div.right",{},["div.profileText",a.about]]],["div.section.topartists",{},["div.left",{},"Favorite artists"],["div.right",{},["div.profileText",a.topartists]]],["div.section.hangout",{},["div.left",{},"Usually hanging out in"],["div.right",{},["div.profileText",a.hangout]]]];},reportView:function(g,a,h,c,e,b){var f="Report User";var d="Why are you reporting "+h+"? Please give a short explanation and be as specific as you can. Keep in mind that you can't report someone for dissing your song, refusing to awesome, or playing something that's a little off genre.";if(b=="room"){f="Report Room";d="Why are you reporting this room? Please give a short explanation and be as specific as you can.";}return[ActionModal,{idd:"reportModal",title:f,style:{width:480},submitCallback:g,submitText:"Save"},["div.fields",{},["div.field.settings",{},["div",{},d],["textarea#reasonField.textarea",{maxlength:400,placeholder:"Please enter a reason."}],["input#useridField",{type:"hidden",value:a}],["input#roomidField",{type:"hidden",value:c}]]]];}};var RoomList=Class.extend({init:function(b){this.currentRoomId=b;this.searchQuery=null;this.listRooms=$.proxy(this.listRooms,this);this.refreshRoomList=$.proxy(this.refreshRoomList,this);this.searchSubmit=$.proxy(this.searchSubmit,this);this.searchKeyUp=$.proxy(this.searchKeyUp,this);this.searchClear=$.proxy(this.searchClear,this);this.enterRoom=$.proxy(this.enterRoom,this);this.nodes={};this.view=util.buildTree(RoomList.layouts.roomList(this),this.nodes);this.refreshRoomList();this.skip=0;this.last_refresh=0;var a=this;$(this.nodes.roomsList).unbind("scroll");$(this.nodes.roomsList).scroll(function(){if($(this).scrollTop()+$(this).innerHeight()>=$(this)[0].scrollHeight){var c=(new Date()).getTime();if((c-a.last_refresh)/1000>1){a.skip+=20;a.refreshRoomList(a.skip,true);a.last_refresh=(new Date()).getTime();}}});util.dobkUAXS(this);},refreshRoomList:function(c,a){if(this.refreshTimer){clearTimeout(this.refreshTimer);}if(true||!turntable.isIdle){if(!c){c=0;}var b={api:"room.list_rooms",skip:c,section_aware:true};if(this.searchQuery){b.api="room.search";b.query=this.searchQuery;}if(a){turntable.hYkveeiflds(b,this.listRoomsAppend);}else{turntable.hYkveeiflds(b,this.listRooms);}}},searchKeyUp:function(){if(this.nodes.searchQuery.value){$(this.nodes.clearSearch).addClass("active");}else{$(this.nodes.clearSearch).removeClass("active");if(this.searchQuery){this.searchQuery=null;this.refreshRoomList();}}},searchSubmit:function(b){b.preventDefault();this.skip=0;var a=$.trim(this.nodes.searchQuery.value);if(a!=this.searchQuery){this.searchQuery=a;this.refreshRoomList();}},searchClear:function(){var b=$(this.nodes.clearSearch);if(b.hasClass("active")){if(this.searchQuery){this.searchQuery=null;this.refreshRoomList();}b.removeClass("active");var a=$(this.nodes.searchQuery);a.val("").focus();}},listRooms:function(l,c){if(!l.rooms.length){this.skip=0;}if(!c){$(this.nodes.roomList).empty();}var r=this;var g=function(){r.enterRoom($(this));};for(var m=0;m<l.rooms.length;m++){var d=l.rooms[m][0];var k=null;if(l.rooms[m].length>2){k=l.rooms[m][2][0];}else{k=d.metadata.current_song&&d.metadata.current_song.metadata;}var p=(k?k.artist+" \u2015 "+k.song:"");var e=util.buildTree(RoomList.layouts.roomView(d,p,g));var a=$(e).find(".songName");a.append(p);if(k&&k.played){a.append(util.buildTree(["span.songPlayed","played "+util.prettyTimeDelta(k.played)]));}var o=l.rooms[m][1];var q=$(e).find(".friends");for(var h=0;h<o.length;h++){var n=o[h];var b="";if(n.fbid){b="https://graph.facebook.com/"+n.fbid+"/picture";}else{if(n.twitterid_lower){b="https://api.twitter.com/1/users/profile_image?screen_name="+n.twitterid_lower+"&size=normal";}else{b=n.images.headfront;}}q.append('<img src="'+b+'" width="35" height="35" title="'+n.name+'" />');}if(d.roomid==this.currentRoomId){$(e).addClass("currentRoom");}this.nodes.roomList.appendChild(e);}$(this.nodes.roomList).find(".roomRow:even").addClass("odd");},listRoomsAppend:function(a){if(turntable.ialIp.roomId){turntable.ialIp.roomList.listRooms(a,true);}else{welcome.roomList.listRooms(a,true);}},enterRoom:function(a){if(a.hasClass("currentRoom")){return;}turntable.setPage(a.data("shortcut"),a.data("name"),a.data("id"));},cleanup:function(){if(this.refreshTimer){clearTimeout(this.refreshTimer);this.refreshTimer=null;}}});RoomList.layouts={roomList:function(a){return(["div.roomIndex",{},["div.rooms.roomsHeader",{},["form.roomSearch",{event:{submit:a.searchSubmit}},["input##searchQuery",{event:{keyup:a.searchKeyUp},placeholder:"search all rooms \u2015 enter room name"}],["div##clearSearch.clearSearch",{event:{click:a.searchClear}}]],],["div##roomsList.rooms.roomsList",{},["table.roomsTable",{},["thead",{},["tr",{},["th.listeners",{scope:"col"},"Listeners"],["th",{scope:"col"},"Room name and Current song"],["th.friends",{scope:"col"},"Friends"]]],["tbody##roomList"]]]]);},roomView:function(c,b,a){return(["tr.roomRow",{data:{id:c.roomid,shortcut:c.shortcut,name:c.name},event:{click:a}},["td.roomStats",{},["div.nListeners",{},String(c.metadata.listeners)],["div.numDJs",{},c.metadata.djcount,"/",c.metadata.max_djs," DJs"]],["td.roomtitles",{},["div.roomInfo",{},["span.roomName",{},c.name]],["div.songName",{}]],["td.friends"]]);},};var ZeroClipboard={version:"1.0.7",clients:{},moviePath:"/static/zeroclipboard/ZeroClipboard.swf",nextId:1,$:function(a){if(typeof(a)=="string"){a=document.getElementById(a);}if(!a.addClass){a.hide=function(){this.style.display="none";};a.show=function(){this.style.display="";};a.addClass=function(b){this.removeClass(b);this.className+=" "+b;};a.removeClass=function(d){var e=this.className.split(/\s+/);var b=-1;for(var c=0;c<e.length;c++){if(e[c]==d){b=c;c=e.length;}}if(b>-1){e.splice(b,1);this.className=e.join(" ");}return this;};a.hasClass=function(b){return !!this.className.match(new RegExp("\\s*"+b+"\\s*"));};}return a;},setMoviePath:function(a){this.moviePath=a;},dispatch:function(d,b,c){var a=this.clients[d];if(a){a.receiveEvent(b,c);}},register:function(b,a){this.clients[b]=a;},getDOMObjectPosition:function(c,a){var b={left:0,top:0,width:c.width?c.width:c.offsetWidth,height:c.height?c.height:c.offsetHeight};while(c&&(c!=a)){b.left+=c.offsetLeft;b.top+=c.offsetTop;c=c.offsetParent;}return b;},Client:function(a){this.handlers={};this.id=ZeroClipboard.nextId++;this.movieId="ZeroClipboardMovie_"+this.id;ZeroClipboard.register(this.id,this);if(a){this.glue(a);}}};ZeroClipboard.Client.prototype={id:0,ready:false,movie:null,clipText:"",handCursorEnabled:true,cssEffects:true,handlers:null,glue:function(d,b,e){this.domElement=ZeroClipboard.$(d);var f=99;if(this.domElement.style.zIndex){f=parseInt(this.domElement.style.zIndex,10)+1;}if(typeof(b)=="string"){b=ZeroClipboard.$(b);}else{if(typeof(b)=="undefined"){b=document.getElementsByTagName("body")[0];}}var c=ZeroClipboard.getDOMObjectPosition(this.domElement,b);this.div=document.createElement("div");var a=this.div.style;a.position="absolute";a.left=""+c.left+"px";a.top=""+c.top+"px";a.width=""+c.width+"px";a.height=""+c.height+"px";a.zIndex=f;if(typeof(e)=="object"){for(addedStyle in e){a[addedStyle]=e[addedStyle];}}b.appendChild(this.div);this.div.innerHTML=this.getHTML(c.width,c.height);},getHTML:function(d,a){var c="";var b="id="+this.id+"&width="+d+"&height="+a;if(navigator.userAgent.match(/MSIE/)){var e=location.href.match(/^https/i)?"https://":"http://";c+='<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="'+e+'download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=9,0,0,0" width="'+d+'" height="'+a+'" id="'+this.movieId+'" align="middle"><param name="allowScriptAccess" value="always" /><param name="allowFullScreen" value="false" /><param name="movie" value="'+ZeroClipboard.moviePath+'" /><param name="loop" value="false" /><param name="menu" value="false" /><param name="quality" value="best" /><param name="bgcolor" value="#ffffff" /><param name="flashvars" value="'+b+'"/><param name="wmode" value="transparent"/></object>';}else{c+='<embed id="'+this.movieId+'" src="'+ZeroClipboard.moviePath+'" loop="false" menu="false" quality="best" bgcolor="#ffffff" width="'+d+'" height="'+a+'" name="'+this.movieId+'" align="middle" allowScriptAccess="always" allowFullScreen="false" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" flashvars="'+b+'" wmode="transparent" />';}return c;},hide:function(){if(this.div){this.div.style.left="-2000px";}},show:function(){this.reposition();},destroy:function(){if(this.domElement&&this.div){this.hide();this.div.innerHTML="";var a=document.getElementsByTagName("body")[0];try{a.removeChild(this.div);}catch(b){}this.domElement=null;this.div=null;}},reposition:function(c){if(c){this.domElement=ZeroClipboard.$(c);if(!this.domElement){this.hide();}}if(this.domElement&&this.div){var b=ZeroClipboard.getDOMObjectPosition(this.domElement);var a=this.div.style;a.left=""+b.left+"px";a.top=""+b.top+"px";}},setText:function(a){this.clipText=a;if(this.ready){this.movie.setText(a);}},addEventListener:function(a,b){a=a.toString().toLowerCase().replace(/^on/,"");if(!this.handlers[a]){this.handlers[a]=[];}this.handlers[a].push(b);},setHandCursor:function(a){this.handCursorEnabled=a;if(this.ready){this.movie.setHandCursor(a);}},setCSSEffects:function(a){this.cssEffects=!!a;},receiveEvent:function(d,e){d=d.toString().toLowerCase().replace(/^on/,"");switch(d){case"load":this.movie=document.getElementById(this.movieId);if(!this.movie){var c=this;setTimeout(function(){c.receiveEvent("load",null);},1);return;}if(!this.ready&&navigator.userAgent.match(/Firefox/)&&navigator.userAgent.match(/Windows/)){var c=this;setTimeout(function(){c.receiveEvent("load",null);},100);this.ready=true;return;}this.ready=true;this.movie.setText(this.clipText);this.movie.setHandCursor(this.handCursorEnabled);break;case"mouseover":if(this.domElement&&this.cssEffects){this.domElement.addClass("hover");if(this.recoverActive){this.domElement.addClass("active");}}break;case"mouseout":if(this.domElement&&this.cssEffects){this.recoverActive=false;if(this.domElement.hasClass("active")){this.domElement.removeClass("active");this.recoverActive=true;}this.domElement.removeClass("hover");}break;case"mousedown":if(this.domElement&&this.cssEffects){this.domElement.addClass("active");}break;case"mouseup":if(this.domElement&&this.cssEffects){this.domElement.removeClass("active");this.recoverActive=false;}break;}if(this.handlers[d]){for(var b=0,a=this.handlers[d].length;b<a;b++){var f=this.handlers[d][b];if(typeof(f)=="function"){f(this,e);}else{if((typeof(f)=="object")&&(f.length==2)){f[0][f[1]](this,e);}else{if(typeof(f)=="string"){window[f](this,e);}}}}}}};var PMWindow=Class.extend({buddyList:{},otherUser:{},otherUserId:false,otherUserName:false,isClosed:true,isMinimized:false,isOverflow:false,lastActive:false,firstPM:false,iAmUnavailable:false,hasError:false,isIgnored:false,init:function(a,c,d){this.buddyList=c;this.otherUser=a;this.otherUserId=a.userid;this.otherUserName=a.name;this.lastActive=new Date().getTime();this.nodes={};this.lastSpeakerName=null;this.$lastPMMessage=null;var b=("status" in a)?a.status:"available";this.pmWindow=$(util.buildTree(PMWindow.layouts.pmWindow(this.otherUser,b,$.proxy(this.toggleOptions,this)),this.nodes));var e=$(".pmContainer").last();if(e.length){this.pmWindow.css({left:(e.offset().left+e.outerWidth()+10)+"px"});}$("#closedPMWindows").append(this.pmWindow);this.addPMHistory();this.updateStatus(b,false,true);this.updateMyAvailability(true);this.setIgnored(d,true);$(this.nodes.pmInput).autosize().on("keydown",$.proxy(this.pmKeyDown,this));$(this.nodes.pmInputForm).submit($.proxy(this.sendPM,this));$(this.nodes.close).click($.proxy(function(f){this.close();},this));$(this.nodes.header).click($.proxy(function(f){this.toggleMinimize();},this));},addPM:function(d,a,c){this.open(false);if(!this.firstPM){this.firstPM=d;}if(c){this.hasError=true;var b=false;if(c==4){b="offline";}else{if(c==5){b="unavailable";}else{if(c==6){this.updateMyAvailability();}}}if(b){this.updateStatus(b,true);}}else{if(!c&&this.otherUser.status.match(/offline|unavailable/)){turntable.hYkveeiflds({api:"presence.get",uid:this.otherUserId},$.proxy(function(e){if(e.success&&"presence" in e){this.updateStatus(e.presence.status,true);}if(d.text){this.addPMText(d.text,a,this.hasError);}},this));return;}}if(d.text){this.addPMText(d.text,a,this.hasError);}},addPMText:function(l,a,k,c){var h=(l.substr(0,4)==="/me "),i,d=false,f;if(h){this.lastSpeakerName=null;d=true;var i=$(util.buildTree(PMWindow.layouts.pmStatus({})));i.find(".text").html(util.messageFilter(l.substr(3)));i.find(".subject").text(a?turntable.user.displayName:this.otherUserName);}else{var b="",e=this.lastSpeakerName,g;if(!a){this.lastSpeakerName=b=this.otherUserName;f=this.otherUser.images.headfront;}else{this.lastSpeakerName=b="Me";f=turntable.user.images.headfront;}if(e!==null&&e===this.lastSpeakerName){i=this.$lastPMMessage;}else{i=$(util.buildTree(PMWindow.layouts.pm(b,k)));d=true;this.$lastPMMessage=i;i.find(".avatar").css("background-image","url("+f+")");}var j=$(util.buildTree(["div.text"])).html(util.messageFilter(l));i.find(".textContainer").append(j);}var m=c?$(this.nodes.history):$(this.nodes.content);if(d){m.append(i);}this.redraw();if(!a&&!$(this.nodes.container).find("textarea:focus").length&&!c){$(this.nodes.header).addClass("newMessage");if(this.isOverflow){$("div#pmOverflowIcon").addClass("newMessage");$(this.nodes.overflowListItem).addClass("newMessage");}this.playDing();$(this.nodes.container).one("click",$.proxy(function(n){$(this.nodes.header).removeClass("newMessage");},this));}},addPMHistory:function(){turntable.hYkveeiflds({api:"pm.history",receiverid:this.otherUserId},$.proxy(function(e){if(e.success&&e.history.length){this.lastSpeakerName=null;$(this.nodes.historyDivider).show();for(var c=0;c<e.history.length;c++){var b=e.history[c];var a=!(b.senderid==this.otherUserId);this.addPMText(e.history[c].text,a,false,true);}if(this.firstPM&&"text" in this.firstPM&&"time" in this.firstPM&&e.history[e.history.length-1].text==this.firstPM.text&&e.history[e.history.length-1].time==this.firstPM.time){var d=$(this.nodes.history).find(".text").last();if(d.siblings(".text").length===0){d.closest(".message").remove();}else{d.remove();}}this.lastSpeakerName=null;}},this));},pmKeyDown:function(c){var a=c.target,b=c.charCode||c.keyCode;if(b===13){this.sendPM();c.preventDefault();}},sendPM:function(a){if(a){a.preventDefault();}var b=$.trim(this.nodes.pmInput.value);$(this.nodes.pmInput).val("").trigger("autosize");if(!b){return;}if(this.isIgnored){this.addPMText(b,true,true);}else{turntable.hYkveeiflds({api:"pm.send",receiverid:this.otherUserId,text:b},$.proxy(function(c){if(c.success){this.addPM({text:b},true);}else{if(c.errid){this.addPM({text:b},true,c.errid);}}},this));}},updateStatus:function(c,b,d){if(!d&&c==this.otherUser.status){return;}var a=this.otherUser.status;this.showErrors(c);if(!d){this.showStatusMessage(a,c);}this.otherUser.status=c;$(this.nodes.status).removeClass("available away offline unavailable iphone").addClass(c);if(b){this.buddyList.updateBuddyStatus(this.otherUser);}},showErrors:function(a){var b=false;if(this.iAmUnavailable){b="You are currently unavailable and cannot send or receive messages.";}else{if(a=="offline"){b=this.otherUserName+" is offline, your message(s) cannot be delivered.";}else{if(this.isIgnored){b="You have ignored "+this.otherUserName+" and cannot exchange messages with them.";}else{if(a=="unavailable"){b=this.otherUserName+" is unavailable, your message(s) cannot be delivered.";}else{if(a=="no_pm"){b=this.otherUserName+" is using a mobile app, which currently does not support private messages. Your message(s) cannot be delivered.";}}}}}if(b){this.addError(b);this.hasError=true;}else{this.removeError();this.hasError=false;}},addError:function(a){if($(this.nodes.container).find(".pmError").length){this.removeError();}$(this.nodes.content).after(util.buildTree(PMWindow.layouts.pmError(a),this.nodes));var b=$(this.nodes.error).outerHeight(true);$(this.nodes.content).css({minHeight:(parseInt($(this.nodes.content).css("minHeight"))-b)+"px",maxHeight:(parseInt($(this.nodes.content).css("maxHeight"))-b)+"px",});this.redraw();},removeError:function(){if($(this.nodes.container).find(".pmError").length){var a=$(this.nodes.error).outerHeight(true);$(this.nodes.error).remove();$(this.nodes.content).css({minHeight:(parseInt($(this.nodes.content).css("minHeight"))+a)+"px",maxHeight:(parseInt($(this.nodes.content).css("maxHeight"))+a)+"px",});}this.redraw();},showStatusMessage:function(a,b){this.lastSpeakerName=null;var c=false;if(b=="offline"){c={text:this.otherUserName+" went offline.",color:"red"};}else{if(b=="unavailable"||b=="no_pm"){c={text:this.otherUserName+" became unavailable.",color:"red"};}else{if((b=="away"||b=="available")&&a=="offline"){c={text:this.otherUserName+" came online.",color:"green"};}else{if((b=="away"||b=="available")&&(a=="unavailable"||a=="no_pm")){c={text:this.otherUserName+" became available.",color:"green"};}else{if(b=="ignored"&&a=="unignored"){c={text:"You ignored "+this.otherUserName+".",color:"red"};}else{if(b=="unignored"&&a=="ignored"){c={text:"You unignored "+this.otherUserName+".",color:"green"};}else{if(b=="senderUnavailable"&&a=="senderAvailable"){c={text:"You became unavailable.",color:"red"};}else{if(b=="senderAvailable"&&a=="senderUnavailable"){c={text:"You became available.",color:"green"};}}}}}}}}if(c){$(this.nodes.content).append(util.buildTree(PMWindow.layouts.pmStatus(c)));}this.redraw();},updateMyAvailability:function(b){var a=false;if(this.iAmUnavailable==turntable.isUnavailable){return;}else{if(!this.iAmUnavailable&&turntable.isUnavailable){this.iAmUnavailable=true;if(!b){this.showStatusMessage("senderAvailable","senderUnavailable");}}else{if(this.iAmUnavailable&&!turntable.isUnavailable){this.iAmUnavailable=false;if(!b){this.showStatusMessage("senderUnavailable","senderAvailable");}}}}this.showErrors(this.otherUser.status);},open:function(a){this.lastActive=new Date().getTime();if(this.isClosed||(this.isOverflow&&a)){this.isClosed=false;this.isMinimized=false;$(this.nodes.container).queue($.proxy(function(){this.unOverflow(false);if(a){$(this.nodes.container).detach().prependTo("#pmWindows");}else{$(this.nodes.container).detach().appendTo("#pmWindows");}$(this.nodes.container).css({marginBottom:(-$(this.nodes.container).height())+"px"});this.buddyList.repositionPMWindows(false);if(!this.isOverflow){this.animateOpen(a);}$(this.nodes.container).dequeue();},this));if(this.otherUser.status!="no_pm"){turntable.hYkveeiflds({api:"presence.get",uid:this.otherUserId},$.proxy(function(b){if(b.success&&"presence" in b){this.updateStatus(b.presence.status,true);}},this));}}else{if(this.isMinimized&&a){this.toggleMinimize();}}},animateOpen:function(a){$(this.nodes.container).animate({marginBottom:"0px"},"fast",$.proxy(function(){if(a){$(this.nodes.pmInput).focus();}},this));this.nodes.content.scrollTop+=this.nodes.content.scrollHeight;this.nodes.content.scrollLeft=0;},close:function(a){if(!this.isClosed){this.isClosed=true;$(this.nodes.container).animate({marginBottom:(-$(this.nodes.container).height())+"px"},"fast");$(this.nodes.container).queue($.proxy(function(){$(this.nodes.container).detach().appendTo("#closedPMWindows");this.buddyList.repositionPMWindows(true);$(this.nodes.container).dequeue();},this));if(a){a.stopPropagation();}}else{return;}},redraw:function(){this.nodes.content.scrollTop+=2000;this.nodes.content.scrollLeft=0;this.repositionMinimized();},toggleMinimize:function(){if(parseInt($(this.nodes.container).css("margin-bottom"))<0){this.isMinimized=false;$(this.nodes.container).animate({marginBottom:"0px"},"fast");}else{this.isMinimized=true;this.repositionMinimized(true);}},repositionMinimized:function(a){if(!this.isMinimized){return;}if(a){$(this.nodes.container).animate({marginBottom:(-$(this.nodes.container).height()+28)+"px"},"fast");}else{$(this.nodes.container).css({marginBottom:(-$(this.nodes.container).height()+28)+"px"});}},overflow:function(){if(this.isOverflow){return;}this.isOverflow=true;$(this.nodes.container).detach().appendTo("#overflowPMWindows");var a=BuddyListPM.layouts.buddyListBuddy(this.otherUser,this.buddyList.room,true);$(this.buddyList.nodes.pmOverflowList).append(util.buildTree(a,this.nodes));},unOverflow:function(a){if(!this.isOverflow){return;}this.isOverflow=false;$(this.nodes.container).detach().appendTo("#pmWindows").css({marginBottom:(-$(this.nodes.container).height())+"px"});$(this.nodes.overflowListItem).remove();if(!$("#pmOverflowList li.newMessage").length){$("div#pmOverflowIcon").removeClass("newMessage");}if(a){this.animateOpen(false);}},toggleOptions:function(b){if(this.isMinimized){this.toggleMinimize();}var a=$(this.nodes.optionsContainer);if(a.is(":visible")){a.fadeOut("fast");}else{this.refreshOptions();$(this.nodes.optionsContainer).fadeIn("fast");}if(b){b.stopPropagation();}},refreshOptions:function(){var a=PMWindow.layouts.pmWindowOptions(this.otherUser,$.proxy(this.toggleOptions,this));$(this.nodes.optionsContainer).replaceWith(util.buildTree(a,this.nodes));},setIgnored:function(a,b){if(this.isIgnored==a){return;}this.isIgnored=a;this.showErrors();if(a&&!b){this.showStatusMessage("unignored","ignored");}else{if(!a&&!b){this.showStatusMessage("ignored","unignored");}}},playDing:function(){if(util.getSetting("pmding")!="false"&&!this.isMinimized){turntablePlayer.playEphemeral(UI_SOUND_PM,true);}}});PMWindow.layouts={pmWindow:function(a,b,c){var d={event:{mouseenter:function(){$(this).addClass("hover");},mouseleave:function(){$(this).removeClass("hover");}}};var e=$.extend(true,{},d);e.event.click=c;return["div##container.pmContainer",{data:{userId:a.userid}},["div##header.pmHeader.pmGreyTop",d,a.name,["div##status.status."+b],["div##close.pmWindowIcon.pmClose",d],["div.pmWindowIcon.pmOptions",e]],["div##content.pmContent",{},["div##history.pmHistory"],["div##historyDivider.pmHistoryDivider",{},["span.pmHistoryDividerText",{},"Earlier messages"]]],["div.pmInput.floating-panel-bar",{},["form##pmInputForm",{},["textarea##pmInput.message-input",{placeholder:"enter a message"}]]],PMWindow.layouts.pmWindowOptions(a,c,e)];},pmWindowOptions:function(f,a,b){if(!b){b={event:{mouseover:function(){$(this).addClass("hover");},mouseout:function(){$(this).removeClass("hover");},click:a}};}var c=$.extend(true,{},b);c.event.click=function(){turntable.ialIp.SXjgBCallback("profile",f.userid);a();};var g=($.inArray(f.userid,turntable.user.fanOf)!=-1);var i=g?"Unfan":"Become a fan";var j=g?"remove_fan":"become_fan";var e=$.extend(true,{},b);e.event.click=function(){turntable.ialIp.SXjgBCallback(j,f.userid);a();};var d=$.extend(true,{},b);d.event.click=function(){turntable.user.ignoredShow();if($("#addIgnoreField").length){$("#addIgnoreField").focus()[0].value=f.name;}a();};var h=$.extend(true,{},b);h.event.click=function(){turntable.ialIp.feedbackifyShow();a();};return["div##optionsContainer.pmOptionsContainer.contextual-popup",{},["div.pmOptionsIconActive.nib",b],["div.pmOptionsContent.options",{},["div.pmOption.option",c,"View Profile"],["div.pmOption.option",e,i],["div.pmOption.option",d,"Ignore User"],["div.pmOption.option",h,"Report User"]]];},pm:function(a,c){var b=(c)?".notSent":"";return["div.message"+b,{},["div.avatar"],["div.speaker",a],["div.textContainer"]];},pmStatus:function(a){return["div.pmStatus.message"+(a.color?"."+a.color:""),["span.subject"],["span.text",a.text]];},pmError:function(a){return["div##error.pmError",{},a];}};var BuddyListPM=Class.extend({room:{},knownUsers:{},onlineBuddies:{},nodes:{},pmWindows:{},status:"available",init:function(d){this.room=d;$("body").append(util.buildTree(["div#pmWindows"]));$("body").append($(util.buildTree(["div#closedPMWindows"])).hide());$("body").append($(util.buildTree(["div#overflowPMWindows"])).hide());var e=$(util.buildTree(BuddyListPM.layouts.privateChatIcon(turntable.isIdle),this.nodes));e.click(this.toggle);$("#pmWindows").append(e);var c=BuddyListPM.layouts.buddyList(this.toggleOptions,$.proxy(this.toggleUnavailable,this),$.proxy(this.toggleDing,this));var b=$(util.buildTree(c,this.nodes)).hide();$("#maindiv").append(b);$(this.nodes.optionsContainer).hide();if(turntable.isUnavailable){$(this.nodes.unavailableWarning).show();}$(this.nodes.buddyListHeader).click(this.toggle);var a=$(util.buildTree(BuddyListPM.layouts.pmOverflowIcon(),this.nodes)).hide();$("#pmWindows").append(a);var f=$(util.buildTree(BuddyListPM.layouts.pmOverflow(),this.nodes)).hide();$("#maindiv").append(f);$(window).resize($.proxy(this.repositionPMWindows,this));turntable.hYkveeiflds({api:"room.directory_graph"},$.proxy(function(g){this.updateBuddies(g);},this));},updateMyStatus:function(a){if(a==this.status){return;}this.status=a;$(this.nodes.status).removeClass("available away offline unavailable").addClass(a);},updateBuddies:function(f){if(f.success==true){$(this.nodes.buddyList).empty();var a=[];var e={};if(f.rooms&&f.rooms.length){for(var g=0,l=f.rooms.length;g<l;g++){var c=f.rooms[g];if(c.length&&c[1].length){for(var d=0,n=c[1].length;d<n;d++){var b=c[1][d];b.roomName=c[0].name;a.push(b);e[b.userid]=b;}}}this.onlineBuddies={};a=util.alphabetize(a,"name");for(var g=0,l=a.length;g<l;g++){this.addBuddy(a[g]);}}else{$(this.nodes.buddyList).append(util.buildTree(BuddyListPM.layouts.noBuddies));}for(var g in this.pmWindows){var k=this.pmWindows[g].otherUserId;if(k in e){this.pmWindows[g].updateStatus(e[k].status,false);}else{var m=(turntable.user.fanOf.indexOf(k)>=0);var h=(turntable.user.buddies.indexOf(k)>=0);if(m||h){this.pmWindows[g].updateStatus("offline",false);}}}}},updateBuddyStatus:function(a){if(!("status" in a)){return;}if(a.status=="offline"&&a.userid in this.onlineBuddies){this.removeBuddy(a.userid);}else{if(a.status!="offline"){if(!(a.userid in this.onlineBuddies)){this.addBuddy(a,true);}else{if(a.userid in this.onlineBuddies&&"status"+a.userid in this.nodes){$(this.nodes["status"+a.userid]).removeClass("available away offline unavailable no_pm").addClass(a.status);}}}}},addBuddy:function(d,a){if("status" in d&&d.status=="offline"){return;}if(d.userid==turntable.user.id){return;}if("laptop" in d&&d.laptop=="iphone"){if(d.laptop_version!="2.1"){d.status="no_pm";}}if("laptop" in d&&d.laptop=="android"){d.status="no_pm";}if(!(d.userid in this.onlineBuddies)){var c=util.buildTree(BuddyListPM.layouts.buddyListBuddy(d,this.room),this.nodes);var e=$(this.nodes.buddyList);e.append(c);if(a){var b=$(this.nodes.buddyList).find("li.buddy").sort(function(h,g){var f=$(h).find("div.name").text().toLowerCase();var i=$(g).find("div.name").text().toLowerCase();return(i>f)?-1:(i<f)?1:0;});e.find(".buddy").detach();e.append(b);}this.onlineBuddies[d.userid]=d;$(this.nodes.buddyList).find(".noBuddies").remove();}else{this.updateBuddyStatus(d);}},removeBuddy:function(a){if(a in this.onlineBuddies){delete this.onlineBuddies[a];if("buddy"+a in this.nodes){$(this.nodes["buddy"+a]).remove();}if(!$(this.nodes.buddyList).find(".buddy").length&&!$(this.nodes.buddyList).find(".noBuddies").length){$(this.nodes.buddyList).append(util.buildTree(BuddyListPM.layouts.noBuddies));}}},toggle:function(){var c=$("div#privateChatIcon");if(c.hasClass("open")){c.removeClass("open");if($("#buddyListOptionsContainer").is(":visible")){turntable.buddyList.toggleOptions();}$("div#buddyListContainer").fadeOut(200);$(document).unbind("click",turntable.buddyList.bodyClickHandler);}else{c.addClass("open");var b=turntable.isUnavailable?63:0;$("ul#buddyList").css({maxHeight:($(window).height()-(80+b))+"px"});$("div#buddyListContainer").fadeIn(200);$(document).click(turntable.buddyList.bodyClickHandler);var a=new Date().getTime();if(!turntable.lastBuddyPresencePoll||(a-turntable.lastBuddyPresencePoll>(30*1000))){turntable.fetchBuddyPresence();}}},isClosed:function(){var a=$("div#privateChatIcon");if(a.hasClass("open")){return false;}else{return true;}},bodyClickHandler:function(a){if($(a.target).parents().index($("#buddyListContainer"))==-1&&$(a.target).parents().index($("#privateChatIcon"))==-1&&!$(a.target).is("#privateChatIcon")&&$("div#privateChatIcon").hasClass("open")){turntable.buddyList.toggle();}},lookupUser:function(e,i){var c=false;var g=(turntable.user.fanOf.indexOf(e)>=0);var d=(turntable.user.buddies.indexOf(e)>=0);if(e in this.onlineBuddies){c=this.onlineBuddies[e];}else{if(e in this.knownUsers){c=this.knownUsers[e];}else{if(e in this.room.users){this.knownUsers[e]=this.room.users[e];c=this.knownUsers[e];}}}if(c&&"status" in c&&"name" in c){i(c);if((g||d)&&!(e in this.onlineBuddies)){this.addBuddy(c,true);}}else{var h=[],f=false;if(!c){c={};}if(!("name" in c)){var b=$.Deferred();turntable.hYkveeiflds({api:"user.get_profile",userid:e},$.proxy(function(j){this.knownUsers[e]=j;c=j;b.resolve();},this));h.push(b);}if(!("status" in c)){var a=$.Deferred();turntable.hYkveeiflds({api:"presence.get",uid:e},function(j){f=j;a.resolve();});h.push(a);}$.when.apply(null,h).then($.proxy(function(){if(f&&f.success&&"presence" in f){c.status=f.presence.status;}i(c);if((g||d)&&!(e in this.onlineBuddies)){this.addBuddy(c,true);}},this));}},addPMWindow:function(c,a,b){this.lookupUser(c,$.proxy(function(d){var e=d.userid in turntable.user.blockedUsers;this.pmWindows[d.userid]=new PMWindow(d,this,e);this.pmWindows[d.userid].open(a);if(b){b();}},this));},repositionPMWindows:function(e){var f=false;var g=$("#pmWindows .pmContainer");for(var d=0;d<g.length;d++){var c=g.eq(d);f=this.positionPMWindow(c,d,e);}if(!f){var a=$("#overflowPMWindows .pmContainer");for(var d=a.length-1;d>=0;d--){var c=a.eq(d);var b=g.length+(a.length-(d+1));f=this.positionPMWindow(c,b,e);if(f){break;}}}a=$("#overflowPMWindows .pmContainer");if(a.length){$(this.nodes.pmOverflowIcon).show();$(this.nodes.pmOverflowCount).text(a.length);}else{$(this.nodes.pmOverflowIcon).hide();$(this.nodes.pmOverflowContainer).hide();}},positionPMWindow:function(b,a,d){var c=b.data("userId");if(c in this.pmWindows){var f=this.pmWindows[c];var e=52+(a*(b.width()+5));if(e+b.width()>$(window).width()-50){f.overflow();return true;}else{f.unOverflow(true);var g=parseInt(b.css("left"));if(g==e){return;}if(d){b.animate({left:e+"px"},"fast");}else{b.css({left:e+"px"});}return false;}}},allPMWindowsClosed:function(){for(var a in this.pmWindows){if(!this.pmWindows[a].isClosed){return false;}}return true;},toggleDing:function(){util.setSetting("pmding",util.getSetting("pmding")=="false"?"true":"false");this.refreshOptions();},toggleOptions:function(b){var a=$("#buddyListOptionsContainer");if(a.is(":visible")){a.fadeOut("fast");}else{a.fadeIn("fast");}if(b){b.stopPropagation();}},toggleUnavailable:function(b){if(turntable.isUnavailable){turntable.isUnavailable=false;util.setSetting("isUnavailable",false);turntable.sendPresence("available",false,true);this.updateMyStatus("available");var c=$(this.nodes.unavailableWarning).outerHeight(true);$(this.nodes.unavailableWarning).slideUp("fast");$(this.nodes.buddyList).animate({maxHeight:(parseInt($(this.nodes.buddyList).css("max-height"))+c)+"px"});}else{turntable.isUnavailable=true;util.setSetting("isUnavailable",true);turntable.sendPresence("unavailable",false,true);this.updateMyStatus("unavailable");var c=$(this.nodes.unavailableWarning).show().outerHeight(true);$(this.nodes.unavailableWarning).hide();$(this.nodes.unavailableWarning).slideDown("fast");$(this.nodes.buddyList).animate({maxHeight:(parseInt($(this.nodes.buddyList).css("max-height"))-c)+"px"});}for(var a in this.pmWindows){this.pmWindows[a].updateMyAvailability();}this.refreshOptions();if(b){$("#buddyListOptionsContainer").hide();}},refreshOptions:function(){var a=BuddyListPM.layouts.buddyListOptions(this.toggleOptions,$.proxy(this.toggleUnavailable,this),$.proxy(this.toggleDing,this));$("#buddyListOptionsContainer").replaceWith(util.buildTree(a,this.nodes));},updateIgnored:function(){for(var a in turntable.user.blockedUsers){if(a in this.pmWindows&&!this.pmWindows[a].isIgnored){this.pmWindows[a].setIgnored(true);}}for(var a in this.pmWindows){if(!(a in turntable.user.blockedUsers)&&this.pmWindows[a].isIgnored){this.pmWindows[a].setIgnored(false);}}}});BuddyListPM.layouts={privateChatIcon:function(b){var a=b?".away":"";return["div#privateChatIcon.pmGreyTop",{event:{mouseover:function(){$(this).addClass("hover");},mouseout:function(){$(this).removeClass("hover");}}},["div##status.status"+a],["div.chatIcon"]];},buddyList:function(b,a,c){return["div#buddyListContainer",{},["div#buddyListMain",{},["div#buddyListHeader##buddyListHeader",{},["div#buddyListTitle",{},"Private chat"],["div#buddyListOptionsIcon",{event:{click:b}}]],["div#buddyListUnavailableWarning##unavailableWarning",{},"You are unavailable to chat.",["div#buddyListBecomeAvailable",{event:{mouseover:function(){$(this).addClass("hover");},mouseout:function(){$(this).removeClass("hover");},click:a}}]],["ul#buddyList##buddyList",{}],BuddyListPM.layouts.buddyListOptions(b,a,c)],["div#buddyListNipple"]];},pmOverflowIcon:function(){return["div#pmOverflowIcon##pmOverflowIcon.pmGreyTop",{event:{click:function(){$("div#pmOverflowContainer").fadeToggle("fast");},mouseover:function(){$(this).addClass("hover");},mouseout:function(){$(this).removeClass("hover");}}},["span#pmOverflowCount##pmOverflowCount",{},"0"],["div#pmOverflowArrow"]];},pmOverflow:function(){return["div#pmOverflowContainer##pmOverflowContainer",{},["ul#pmOverflowList##pmOverflowList",{}],["div#pmOverflowNipple"]];},buddyListOptions:function(e,b,i){var c="Available for private chat";var a=turntable.isUnavailable?".red":"";var j=turntable.isUnavailable?"":["div.buddyListOptionCheck"];var f=util.getSetting("pmding")=="false";var d="Ding on new message";var g=f?"":["div.buddyListOptionCheck"];var h=f?".red":"";return["div#buddyListOptionsContainer.contextual-popup##optionsContainer",{},["div#buddyListOptionsIconActive.nib",{event:{click:e}}],["div#buddyListOptionsContent.options",{},["div##availableOption.buddyListOption.option"+a,{event:{click:function(){b();e();},mouseover:function(){$(this).addClass("hover");},mouseout:function(){$(this).removeClass("hover");}}},c,j],["div##dingOption.buddyListOption.option"+h,{event:{click:function(){i();e();},mouseover:function(){$(this).addClass("hover");},mouseout:function(){$(this).removeClass("hover");}}},d,g],["div.buddyListOption.option",{event:{click:function(){turntable.user.ignoredShow();e();},mouseover:function(){$(this).addClass("hover");},mouseout:function(){$(this).removeClass("hover");}}},"Ignored users..."]]];},buddyListBuddy:function(d,g,f){var b=("roomName" in d&&!f)?["div.room",{},d.roomName]:"";var a=function(){g.handlePM({senderid:d.userid},true);if(f){$("div#pmOverflowContainer").fadeOut("fast");}else{turntable.buddyList.toggle();}};var e=(f)?"overflowListItem":"buddy"+d.userid;var c;if("fbid" in d){c="https://graph.facebook.com/"+d.fbid+"/picture";}else{if("twitterid_lower" in d){c="https://api.twitter.com/1/users/profile_image?screen_name="+d.twitterid_lower+"&size=normal";}else{c=d.images.headfront;}}return["li##"+e+".buddy",{event:{click:a,mouseover:function(){$(this).addClass("hover");},mouseout:function(){$(this).removeClass("hover");}}},["div.avatar",{},["img",{src:c,height:"20"}]],["div.user",{},["div.name",{},d.name],b],["div##status"+d.userid+".status."+d.status]];},noBuddies:["li.noBuddies",{},"None of your buddies are online."]};if(window.DEMO_MODE){$(document).ready(function(){var a={elements:{},init:function(){a.leftView=util.buildTree(a.layouts.leftSide,a.elements);a.rightView=util.buildTree(a.layouts.rightSide,a.elements);$("body").append(a.leftView);$("body").append(a.rightView);},alignImagesToEdges:function(){$("#demoLeft img").css("left",$("#outer").offset().left-132);$("#demoRight img").css("left",$("#outer").offset().left+$("#outer").width()+7);}};a.layouts={leftSide:["div#demoLeft",{},["img.about",{src:"https://s3.amazonaws.com/static.turntable.fm/images/demo/about.png"}],["img.djs",{src:"https://s3.amazonaws.com/static.turntable.fm/images/demo/djs.png"}],["img.audience",{src:"https://s3.amazonaws.com/static.turntable.fm/images/demo/audience.png"}]],rightSide:["div#demoRight",{},["img.download",{src:"https://s3.amazonaws.com/static.turntable.fm/images/demo/download.png"}]]};a.init();a.alignImagesToEdges();$(window).resize(function(){a.alignImagesToEdges();});});}$(function(){var a=$("#transition-overlay");if(!a.length){a=$(util.buildTree(["div#transition-overlay",["div#transition-modal-container",["div#transition-modal.modal"]]])).appendTo("#maindiv");}var c=a.find("#transition-modal");var b={$overlay:a,$modal:c};b.transitionIn=function(g,f,e){b.$modal.css({width:f,height:e});b.$overlay.addClass("visible");window.setTimeout(function(){util.makeSpinner(b.$overlay[0]);b.$overlay.css({opacity:1});});window.setTimeout(b.notifyIn,300);};b.notifyIn=function(){b.$overlay.trigger("TransitionModal:visible").find(".spinner").addClass("visible");};b.resize=function(g,f,e){b.$overlay.find(".spinner").removeClass("visible");b.$modal.css({width:f,height:e});window.setTimeout(b.notifyResize,300);};b.notifyResize=function(){b.$overlay.trigger("TransitionModal:resized");};b.transitionOut=function(){b.$overlay.css({opacity:0});window.setTimeout(b.cleanup,300);};b.cleanup=function(){b.$overlay.removeClass("visible").css({opacity:""}).trigger("TransitionModal:invisible").find(".spinner").remove();};var d=$("#maindiv");d.on("TransitionModal:in",b.transitionIn).on("TransitionModal:resize",b.resize).on("TransitionModal:out",b.transitionOut);});(function(c){var e="hidden",b="border-box",i="lineHeight",a='<textarea tabindex="-1" style="position:absolute; top:-9999px; left:-9999px; right:auto; bottom:auto; -moz-box-sizing:content-box; -webkit-box-sizing:content-box; box-sizing:content-box; word-wrap:break-word; height:0 !important; min-height:0 !important; overflow:hidden;"/>',f=["fontFamily","fontSize","fontWeight","fontStyle","letterSpacing","textTransform","wordSpacing","textIndent"],h="oninput",d="onpropertychange",g=c(a)[0];g.setAttribute(h,"return");if(c.isFunction(g[h])||d in g){c(g).css(i,"99px");if(c(g).css(i)==="99px"){f.push(i);}c.fn.autosize=function(j){j=j||{};return this.each(function(){var q=this,m=c(q),r,o,w=m.height(),u=parseInt(m.css("maxHeight"),10),n,p=f.length,l,k=0,t=q.value,v=c.isFunction(j.callback);if(m.css("box-sizing")===b||m.css("-moz-box-sizing")===b||m.css("-webkit-box-sizing")===b){k=m.outerHeight(true)-m.height();}if(m.data("mirror")||m.data("ismirror")){return;}else{r=c(a).data("ismirror",true).addClass(j.className||"autosizejs")[0];o=c(r);l=m.css("resize")==="none"?"none":"horizontal";m.data("mirror",c(r)).css({overflow:e,overflowY:e,wordWrap:"break-word",resize:l});}u=u&&u>0?u:90000;function s(){var x,z,y;if(!n){n=true;r.value=q.value;r.style.overflowY=q.style.overflowY;y=parseInt(q.style.height,10);r.style.width=m.css("width");r.scrollTop=0;r.scrollTop=90000;x=r.scrollTop+o.height();z=e;if(x>u){x=u;z="scroll";}else{if(x<w){x=w;}}x+=k;q.style.overflowY=z;if(y!==x){q.style.height=x+"px";if(v){j.callback.call(q);}}setTimeout(function(){n=false;},1);}}while(p--){r.style[f[p]]=m.css(f[p]);}c("body").append(r);if(d in q){if(h in q){q[h]=q.onkeyup=s;}else{q[d]=s;}}else{q[h]=s;}c(window).resize(s);m.bind("autosize",s);q.value="";q.value=t;s();});};}else{c.fn.autosize=function(j){return this;};}}(jQuery));"use strict";var CrowdControl=Class.extend(function(){var c={capacity:800,yOffset:0,height:2,width:5,maxMinRadius:Math.sqrt(2),radius:function(i){return Math.sqrt(i)/Math.sqrt(200);},angleLimits:function(i){return{minAngle:0,maxAngle:Math.PI};},};var f={front:{capacity:310,radius:function(j,i){return Math.sqrt(j)/Math.sqrt(i||this.capacity);}},back:{capacity:310,yOffset:1,radius:function(j,i){return Math.sqrt(j)/Math.sqrt(i||this.capacity);},}};var h={0:{top:0,bottom:1,left:-c.width/2,right:c.width/2,slope:1,dividers:[function(i){return -c.width/2;},function(k){var i=this.slope,j=Math.sqrt(i*i+1);return(k-j)/i;},function(i){return -this.dividers[1](i);},function(i){return -this.dividers[0](i);}]},1:{top:1,bottom:2,left:-c.width/2,right:c.width/2,slope:2,dividers:[function(i){return -c.width/2;},function(k){var i=this.slope,j=Math.sqrt(i*i+1);return(k-j-1)/i;},function(i){return -this.dividers[1](i);},function(i){return -this.dividers[0](i);}]},};for(var d=0;d<2;d++){var g=h[d],e=g.dividers;for(var b=0,a=e.length;b<a;b++){e[b]=$.proxy(e[b],g);}}return{_name:"CrowdControl",init:function(j,k,i){this.room=turntable.ialIp;if(turntable.seedPRNG&&turntable.serverNow){this.entropy=turntable.seedPRNG(this.room.roomId+Math.round(turntable.serverNow()/(6*3600)));}else{this.entropy=Math;}this.sectionName=j;this.sectionConfig=$.extend({},c,f[j]);if(i){this.sectionConfig.capacity=i;}this.sectionConfig.maxRadius=this.sectionConfig.radius(1,1);var l;if(j==="room"){l=h[0];}else{l=h[1];}this.sectionAreaConfig=$.extend({},l);this.sectionAreaConfig.dividers=this.sectionAreaConfig.dividers.slice(1,3);this.$eventBus=k;this.freeCrowdLocations=[];this.freeCrowdMemberids=[];this.crowdBoppers=[],this.crowdNotBoppers=[],this.crowdMembers=[],this.crowdMemberMap={},this.numCrowdMembers=0;this.listenerids=[];this.addListener=$.proxy(this.addListener,this);this.removeListener=$.proxy(this.removeListener,this);this.$eventBus.on("Room.addListener",this.addListener);this.$eventBus.on("Room.removeListener",this.removeListener);},crowdConfig:c,areaConfigs:h,randomBasicAvatarid:function(){var i=[1,2,3,4,5,6,7,8,34];return this.getRandom(i);},randomAvatarid:function(){var j=[{range:[1,8],probability:20},{range:34,probability:20},{range:[9,17],probability:10},{range:[18,19],probability:6},{range:121,probability:6},{range:[20,22],probability:5},{range:23,probability:5,},{range:[36,37],probability:4,},{range:[27,33],probability:3,},{range:[218,221],probability:2,},{range:[222,230],probability:2,}],l=function(){var s=[];for(var q=0,m=j.length;q<m;q++){var r=j[q],o=r.range,t=r.probability;if($.type(o)==="number"){for(var n=0;n<t;n++){s.push(o);}s.push(o);}else{if($.type(o)==="array"){for(var p=o[0];p<=o[1];p++){for(var n=0;n<t;n++){s.push(p);}}}}}return s;},k=l(),i=k.length;return function(){return k[Math.floor(this.entropy.random()*i)];};}(),getRandom:function(m,j){var i=m.length;if(i>0){var k=Math.floor(Math.random()*i),l=m[k];if(j){m.splice(k,1);}return l;}},_pop:function(k,j){var i=k.indexOf(j);if(i!==-1){k.splice(i,1);return true;}return false;},freeCrowdLocations:[],crowdMemberids:[],freeCrowdLocationsInSection:[],crowdMemberidsInSection:[],getCrowdLocation:function(s){var k=c,n=this.numCrowdMembers,j=Math.max(this.minRadius||0,k.radius(n+this.listenerids.length)*1.1),q=this.freeCrowdLocations,r=[];while(k.radius(q.length+n)<=j&&q.length+n<=k.capacity){this.generateCrowdLocation();}if(s===undefined&&this.listenerids.length+this.crowdMemberidsInSection.length>=this.sectionConfig.capacity){s=true;}var u=q.slice();for(var m=0;m<2;m++){var p=10,l;while(p>0&&u.length>0){l=this.getRandom(u,true);if(!s||!l.inSection){break;}else{l=null;}p--;}if(l){r.push(l);}}if(r.length){var v,t;for(var m=0;m<r.length;m++){var l=r[m];var o=Math.sqrt(Math.pow(l.x,2)+Math.pow(l.y,2));if(!t||o<t){v=l;t=o;}}this._pop(q,v);this._pop(this.freeCrowdLocationsInSection,v);return v;}},generateCrowdLocation:function(k){if(k===undefined){k=this.freeCrowdLocations.length+this.numCrowdMembers;}var l=this.generateLocation(this.entropy,c,k);this.freeCrowdLocations.push(l);var j=this.sectionConfig,i=l.x,m=l.y-j.yOffset;if(m>=0&&Math.sqrt(Math.pow(i,2)+Math.pow(m,2))<=j.maxRadius){l.inSection=true;this.freeCrowdLocationsInSection.push(l);}return l;},generateLocation:function(p,l,o,n){var i=p.random()<0.3?true:false,k;if(i){k=l.radius(p.random()*Math.min(o*5,l.capacity));}else{if(n){n=(n*5+l.capacity)/6;}k=l.radius(o,n);}var s=l.angleLimits(k);var m=s.minAngle+p.random()*(s.maxAngle-s.minAngle),r=Math.cos(m)*k,q=Math.sin(m)*k;q+=l.yOffset;var j=this.getAreaFromLocation({x:r,y:q});return{x:r,y:q,area:j};},getAreaFromLocation:function(l){var j=l.x,o=l.y;for(var n=0;n<2;n++){var m=h[n];if(o<m.top||o>=m.bottom){continue;}for(var k=0,i=m.dividers.length-1;k<i;k++){if(k===i-1){if(j<m.dividers[k](o)||j>m.dividers[k+1](o)){continue;}}else{if(j<m.dividers[k](o)||j>=m.dividers[k+1](o)){continue;}}return[n,k];}}},numCrowdMembers:0,freeCrowdMemberids:[],crowdBoppers:[],crowdNotBoppers:[],crowdMembers:[],crowdMemberMap:{},makeMember:function(o){var k=this.getCrowdLocation(o),l=this.getRandom(this.freeCrowdMemberids,true)||this.numCrowdMembers,p;if(k){var r=WIDEST_AVATAR_WIDTH/2*1.1*c.width/ROOM_WIDTH,j=k.area,q=k.x,n=k.y,m=h[j[0]].dividers[j[1]],t=h[j[0]].dividers[j[1]+1],i=Math.min(q-m(n),t(n)-q),p;if(i<r||k.inSection){p=this.randomBasicAvatarid();}else{p=this.randomAvatarid();}}this.numCrowdMembers++;var s={userid:l,avatarid:p,bopping:false,locationData:k};this.crowdMemberMap[l]=s;this.crowdMembers.push(l);this.crowdNotBoppers.push(l);if(k&&k.inSection){this.crowdMemberidsInSection.push(l);}return s;},removeMember:function(j){if(this.crowdMemberMap[j]){this._pop(this.crowdBoppers,j);this._pop(this.crowdNotBoppers,j);this._pop(this.crowdMembers,j);this._pop(this.crowdMemberidsInSection,j);var i=this.crowdMemberMap[j].locationData;if(i){this.freeCrowdLocations.push(i);if(i.inSection){this.freeCrowdLocationsInSection.push(i);}}this.freeCrowdMemberids.push(j);delete this.crowdMemberMap[j];this.numCrowdMembers--;}},setBopping:function(j,i){if(this.crowdMemberMap[j]&&this._pop(this.crowdNotBoppers,j)){this.crowdBoppers.push(j);$.extend(this.crowdMemberMap[j],{bopping:true,startTime:i});}else{if(this.userMap[j]){this.userMap[j].startTime=i;}}},setNotBopping:function(i){if(this.crowdMemberMap[i]&&this._pop(this.crowdBoppers,i)){this.crowdNotBoppers.push(i);this.crowdMemberMap[i].bopping=false;}},listenerids:[],addListener:function(k,i){var j=this.listenerids;if(j.indexOf(i)===-1){j.push(i);}},removeListener:function(j,i){this._pop(this.listenerids,i);},generateUserLocation:function(i){var o=this.room.getEntropyForUser(i),n=this.sectionConfig,s=this.listenerids.indexOf(i.userid);if(s===-1){s=this.room.listenerids.length;}var j=this.generateLocation(o,n,s,this.listenerids.length),l=Math.sqrt(Math.pow(j.x,2)+Math.pow(j.y,2));this.minRadius=Math.min(Math.max(this.minRadius||0,l),c.maxMinRadius);var q;if(i.custom_avatar){q=i.custom_avatar;}else{if(i.avatarid){q=avatars[i.avatarid];}}if(q){var k=(q.size[0]-THINNEST_AVATAR_WIDTH)/2;k=k*1.1*c.width/ROOM_WIDTH;var m=this.sectionAreaConfig.dividers[0],t=this.sectionAreaConfig.dividers[1],r=j.x,p=j.y;j.x=Math.min(Math.max(r,m(p)+k),t(p)-k);}return j;},userMap:{},};}());/* Copyright (c) 2011 Brandon Aaron (http://brandonaaron.net)
        Uncaught TypeError: Cannot read property 'starttime'of null(repeated 5 times) * Licensed under the MIT License(LICENSE.txt). * *Thanks to: http: 
        //adomas.org/javascript-mouse-wheel/ for some pointers.
        *Thanks to: Mathias Bank(http: 
        //www.mathias-bank.de) for a scope bug fix.
        *Thanks to: Seamus Leahy
        for adding deltaX and deltaY * *Version: 3.0.6 * *Requires: 1.2.2 + */
(function(d){var b=["DOMMouseScroll","mousewheel"];if(d.event.fixHooks){for(var a=b.length;a;){d.event.fixHooks[b[--a]]=d.event.mouseHooks;}}d.event.special.mousewheel={setup:function(){if(this.addEventListener){for(var e=b.length;e;){this.addEventListener(b[--e],c,false);}}else{this.onmousewheel=c;}},teardown:function(){if(this.removeEventListener){for(var e=b.length;e;){this.removeEventListener(b[--e],c,false);}}else{this.onmousewheel=null;}}};d.fn.extend({mousewheel:function(e){return e?this.bind("mousewheel",e):this.trigger("mousewheel");},unmousewheel:function(e){return this.unbind("mousewheel",e);}});function c(j){var h=j||window.event,g=[].slice.call(arguments,1),k=0,i=true,f=0,e=0;j=d.event.fix(h);j.type="mousewheel";if(h.wheelDelta){k=h.wheelDelta/120;
    }
    if (h.detail) {
        k = -h.detail / 3;
    }
    e = k;
    if (h.axis !== undefined && h.axis === h.HORIZONTAL_AXIS) {
        e = 0;
        f = -1 * k;
    }
    if (h.wheelDeltaY !== undefined) {
        e = h.wheelDeltaY / 120;
    }
    if (h.wheelDeltaX !== undefined) {
        f = -1 * h.wheelDeltaX / 120;
    }
    g.unshift(j, k, f, e);
    return (d.event.dispatch || d.event.handle).apply(this, g);
}
})(jQuery);
var Draggable = Class.extend(function() {
    var a;
    return {
        init: function() {
            if (!a) {
                a = $(".clear-overlay");
            }
            if (a.length === 0) {
                a = $(util.buildTree(["div.clear-overlay"])).hide().appendTo(document.body);
            }
            this.setup = $.proxy(this.setup, this);
            this._setupOverlay = $.proxy(this._setupOverlay, this);
            this._endDrag = $.proxy(this._endDrag, this);
            this._scroll = $.proxy(this._scroll, this);
            this.cancelDrag = $.proxy(this.cancelDrag, this);
            this.setCursor = $.proxy(this.setCursor, this);
            this._setScroll = util.makeDrawer(this, this._setScroll);
            this.$window = $(window);
        },
        setup: function(b) {
            if (b.which !== 1) {
                return;
            }
            this.$window.one("mousemove", this._setupOverlay).one("mouseup", this._endDrag);
            this.setupComplete = true;
            this.mousedown(b);
        },
        _setupOverlay: function(b) {
            a.css("cursor", this.cursor || "").show().on("mousemove", this.mousemove).one("mouseup", this._endDrag);
            if (this.scroller) {
                a.on("mousewheel", this._scroll);
                this._scrollDeltaX = 0;
                this._scrollDeltaY = 0;
            }
        },
        _endDrag: function(b) {
            this.mouseup(b);
            this.cancelDrag();
        },
        _scroll: function(d, f, c, b) {
            this._scrollDeltaX -= c * 20;
            this._scrollDeltaY -= b * 20;
            this._setScroll();
            d.preventDefault();
        },
        _setScroll: function() {
            this.scroller.scrollLeft += this._scrollDeltaX;
            this.scroller.scrollTop += this._scrollDeltaY;
            this._scrollDeltaX = 0;
            this._scrollDeltaY = 0;
        },
        cancelDrag: function() {
            if (this.setupComplete) {
                this.$window.off("mousemove", this._setupOverlay).off("mouseup", this._endDrag);
                a.hide().off("mousemove", this.mousemove).off("mouseup", this._endDrag).css("cursor", "").off("mousewheel", this._scroll);
                this.setupComplete = false;
            }
        },
        setCursor: function(b) {
            a.css("cursor", b);
            this.cursor = b;
        },
        mousedown: function(b) {},
        mousemove: function(b) {},
        mouseup: function(b) {},
        };
} ());
var ScreenEditor = TTNode.extend({
    attributes: {
        idd: "screenEditor",
        screenName: null,
        screens: {},
        originalScreens: {}
    },
    layout: function() {
        return ["div.screen-editor", ["button.file-picker.tt-button.small", {
            type: "button"
        }, ["input", {
            type: "file",
            name: this.attributes.screenName,
            accept: "image/jpeg,image/gif,image/png"
        }], "Upload an Image"], ["div.file-name-bar", ["div.file-name"]], ["div.clear-screen", {
            style: {
                display: "none"
            }
        }]];
    },
    init: function(a) {
        this._super(a);
        this.$eventBus = $({});
        this.onFileChosen = $.proxy(this.onFileChosen, this);
        this.clearScreen = $.proxy(this.clearScreen, this);
        this.checkMirroring = $.proxy(this.checkMirroring, this);
    },
    render: function(a, c) {
        this._super(a, c);
        this.$name = this.$node.find(".file-name");
        this.$clearScreen = this.$node.find(".clear-screen").on("click", this.clearScreen);
        var b = this.$imageFile = this.$node.find("input[type=file]").on("change", this.onFileChosen).on("click", function(d) {
            d.stopPropagation();
        });
        this.$node.find("button").on("click", function() {
            b.click();
        });
    },
    redraw: function() {
        var d = this.attributes.screens[this.attributes.screenName],
        c = FhoeNwaAy.getNormalizedScreenConfig(this.attributes.screenName),
        b,
        e = true;
        if (!c) {
            b = "empty";
            this.$clearScreen.hide();
        } else {
            if (c.mirror) {
                this.$clearScreen.hide();
                b = "mirroring";
            } else {
                this.$clearScreen.show();
                e = false;
                var g,
                a;
                if (d.type === "page") {
                    b = "custom page";
                } else {
                    if (!this.hasChanged()) {
                        g = c.src;
                        a = g.split(".");
                        var h = a[a.length - 1];
                        b = "custom " + h.toLowerCase();
                    } else {
                        g = this.$imageFile[0].value;
                        a = g.split("\\");
                        b = a[a.length - 1];
                        this.$name.text(b);
                        var f = this.$name[0];
                        while (f.scrollWidth > f.offsetWidth) {
                            b = "\u2026" + b.substr(2);
                            this.$name.text(b);
                        }
                    }
                }
            }
        }
        this.$name.text(b);
        if (e) {
            this.$name.parent().addClass("empty");
        } else {
            this.$name.parent().removeClass("empty");
        }
        FhoeNwaAy.drawScreens(true);
    },
    reposition: function() {
        var a = $("#" + this.attributes.screenName + "-screen"),
        c = a.offset(),
        b = {
            top: c.top - 30,
            left: c.left,
            width: a.width(),
            height: a.height() + 30
        };
        this.$node.css(b);
    },
    onFileChosen: function(h) {
        var b = h.target,
        g = b.files[0],
        c;
        if (g.type.indexOf("image") === -1) {
            c = "Sorry, only images can be uploaded.";
        } else {
            if (g.size > 2000000) {
                c = "Sorry, the chosen image is too big. Please choose a smaller one.";
            }
        }
        if (c) {
            this.$eventBus.trigger("error", [c]);
            b.value = "";
            return;
        }
        var a = new FileReader(),
        d = this;
        a.onload = function(f) {
            d.attributes.screens[d.attributes.screenName] = {
                0: f.target.result,
                type: "image"
            };
            d.redraw();
            d.$eventBus.trigger("change");
        };
        a.readAsDataURL(g);
    },
    clearScreen: function() {
        this.$imageFile.val("");
        this.attributes.screens[this.attributes.screenName] = undefined;
        this.redraw();
        this.$eventBus.trigger("change");
    },
    monitor: function(a) {
        this.otherScreenEditor = a.$eventBus.on("change", this.checkMirroring);
    },
    checkMirroring: function(b) {
        var a = FhoeNwaAy.getNormalizedScreenConfig(this.attributes.screenName);
        if (a && !a.mirror) {
            return;
        }
        this.redraw();
    },
    hasChanged: function() {
        var a = this.attributes.screens[this.attributes.screenName],
        c = this.attributes.originalScreens[this.attributes.screenName];
        if (a && !c || !a && c) {
            return true;
        }
        for (var b in a) {
            if (a.hasOwnProperty(b)) {
                if (c[b] != a[b]) {
                    return true;
                }
            }
        }
        return false;
    },
    cleanup: function() {
        if (this.otherScreenEditor) {
            this.otherScreenEditor.off("change", this.checkMirroring);
            delete this.otherScreenEditor;
        }
    }
});
var RoomScreenEditor = TTNode.extend({
    layout: function() {
        return ["div#room-screen-editor", ["form", [ScreenEditor, {
            idd: "leftScreenEditor",
            screenName: "left",
            screens: this.screens,
            originalScreens: FhoeNwaAy.roomData.metadata.screens
        }], [ScreenEditor, {
            idd: "rightScreenEditor",
            screenName: "right",
            screens: this.screens,
            originalScreens: FhoeNwaAy.roomData.metadata.screens
        }], ["div.modal##modal", ["div.content-scroller", ["div.content", ["div.instructions", ["p", "Customize this room by placing images on the screens on either side of the stage! Please keep in mind:"], ["ul", ["li", "Each image MUST be a GIF, JPEG, or PNG under 2 MB in size."], ["li", "Screens can only be updated 3 times per day."], ["li", "Inappropriate images (NSFW or NSFL) will be removed."]]], ["div.buttons", ["button#cancel-screen-edit.tt-button", {
            type: "button"
        }, "Cancel"], ["button#submit-screen-edit.tt-button.primary", {
            type: "submit"
        }, "Save"]]]]]]];
    },
    init: function(a) {
        this._super(a);
        this.overlay = new ScrollableOverlay();
        this.$overlay = this.overlay.$overlay;
        this.hide = $.proxy(this.hide, this);
        this.cleanup = $.proxy(this.cleanup, this);
        this.beginUpload = $.proxy(this.beginUpload, this);
        this.onUploadProgress = $.proxy(this.onUploadProgress, this);
        this.onUploadDone = $.proxy(this.onUploadDone, this);
        this.requestReposition = util.makeDrawer(this, this.reposition);
        this.requestRepositionAndRedraw = util.makeDrawer(this, this.repositionAndRedraw);
        this.screens = $.extend({}, FhoeNwaAy.roomData.metadata.screens);
        FhoeNwaAy.setScreenConfigSrc(this.screens);
    },
    show: function() {
        this.$overlay.append(this.$node);
        this.overlay.show();
        $("html").addClass("centered-mode no-panels");
        FhoeNwaAy.updateStage(true, true);
        this.screensAlreadyVisible = FhoeNwaAy.getNormalizedScreenConfig("left") !== undefined;
        if (!this.screensAlreadyVisible) {
            $(".side-screen").show();
        }
        $(".side-screen").css("z-index", this.$overlay.css("z-index") + 1);
        this.$form = this.$node.find("form").on("submit", this.beginUpload);
        $("#cancel-screen-edit").on("click", this.hide);
        var b = this.leftScreenEditor,
        a = this.rightScreenEditor;
        b.monitor(a);
        a.monitor(b);
        b.$eventBus.add(a.$eventBus).on("change", $.proxy(this.redrawUpdateButton, this)).on("error", $.proxy(function(d, c) {
            this.showAlert(c);
        }, this));
        turntable.ialIp.$eventBus.on("screenUpdate", $.proxy(function() {
            this.showAlert('Screens have been modified by somebody else. Press "Cancel" to see their changes.');
        }, this));
        this.$modalWindow = $(this.modal);
        this.$instructions = this.$node.find(".instructions");
        $(window).on("resize", this.requestReposition);
        turntable.ialIp.$eventBus.on("roomViewZoomChange", this.requestRepositionAndRedraw);
        this.reposition();
        this.redraw();
    },
    hide: function() {
        this.overlay.hide().done(this.cleanup);
        $("html").removeClass("centered-mode no-panels");
        FhoeNwaAy.setScreenConfigSrc();
        FhoeNwaAy.updateStage(true, false);
        FhoeNwaAy.drawScreens();
        if (!this.screensAlreadyVisible) {
            $(".side-screen").hide();
        }
        $(".side-screen").css("z-index", "");
        $(window).off("resize", this.reposition);
        turntable.ialIp.$eventBus.off("roomViewZoomChange", this.requestRepositionAndRedraw);
    },
    cleanup: function() {
        this.$node.remove();
        this.leftScreenEditor.cleanup();
        this.rightScreenEditor.cleanup();
    },
    reposition: function() {
        this.leftScreenEditor.reposition();
        this.rightScreenEditor.reposition();
        this.$modalWindow.css("margin-top", FhoeNwaAy.$node.offset().top - 30);
    },
    redraw: function() {
        var b = this.leftScreenEditor,
        a = this.rightScreenEditor;
        b.redraw();
        a.redraw();
        $(".side-screen").css("z-index", this.$overlay.css("z-index") + 1);
        this.redrawUpdateButton();
    },
    repositionAndRedraw: function() {
        FhoeNwaAy.setScreenConfigSrc(this.screens);
        this.reposition();
        this.redraw();
    },
    redrawUpdateButton: function() {
        var b = this.leftScreenEditor,
        a = this.rightScreenEditor;
        if (b.hasChanged() || a.hasChanged()) {
            $("#submit-screen-edit").prop("disabled", false).removeClass("disabled");
        } else {
            $("#submit-screen-edit").prop("disabled", true).addClass("disabled");
        }
    },
    beginUpload: function(c) {
        var b = new FormData(this.$form[0]);
        b.append("userid", turntable.user.id);
        b.append("userauth", turntable.user.auth);
        b.append("roomid", turntable.ialIp.roomId);
        b.append("type", "screen");
        b.append("updateLeft", this.leftScreenEditor.hasChanged());
        b.append("updateRight", this.rightScreenEditor.hasChanged());
        var a = new XMLHttpRequest();
        a.addEventListener("load", this.onUploadDone, false);
        a.open("POST", "/upload/" + turntable.currentSocketServer);
        a.send(b);
        this.showProcessing();
        c.preventDefault();
    },
    onUploadDone: function(c) {
        var a;
        try {
            a = JSON.parse(c.target.responseText);
        } catch(b) {
            this.showAlert("Sorry, image upload failed. Please try again.");
            this.hideProcessing();
            return;
        }
        if (!a.success) {
            this.showAlert(a.err);
            this.hideProcessing();
        } else {
            this.hide();
        }
    },
    showProcessing: function() {
        this.$instructions.children().css("opacity", 0);
        this.spinner = util.makeSpinner(this.$instructions[0]);
        $("#submit-screen-edit").prop("disabled", true).addClass("disabled");
        $("#cancel-screen-edit").prop("disabled", true).addClass("disabled");
    },
    hideProcessing: function() {
        this.spinner.stop();
        this.$instructions.children().css("opacity", 1);
        $("#submit-screen-edit").prop("disabled", false).removeClass("disabled");
        $("#cancel-screen-edit").prop("disabled", false).removeClass("disabled");
    },
    });
RoomScreenEditor.constructor.prototype.showAlert = Modal.constructor.prototype.showAlert;
RoomScreenEditor.constructor.prototype.hideAlert = Modal.constructor.prototype.hideAlert;