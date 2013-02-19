function LOG(e) {
    if(window.DEBUG_MODE) try {
        console.log(e)
    } catch(t) {}
}
function ASSERT(e, t) {
    if(!e) {
        if(t = "Failed assert: " + t, DEBUG_MODE) alert(t);
        else {
            var i = {
                api: "room.log",
                error: t,
                clientid: turntable.clientId
            };
            turntable.user.id && (i.userid = turntable.user.id, i.userauth = turntable.user.auth), turntable.socket.send(JSON.stringify(i))
        }
        throw t
    }
}
var requirejs, require, define;
(function(e) {
    function t(e, t) {
        return v.call(e, t)
    }
    function i(e, t) {
        var i, n, o, s, r, a, l, u, d, c, h = t && t.split("/"),
            p = m.map,
            f = p && p["*"] || {};
        if(e && "." === e.charAt(0)) if(t) {
            for(h = h.slice(0, h.length - 1), e = h.concat(e.split("/")), u = 0; e.length > u; u += 1) if(c = e[u], "." === c) e.splice(u, 1), u -= 1;
            else if(".." === c) {
                if(1 === u && (".." === e[2] || ".." === e[0])) break;
                u > 0 && (e.splice(u - 1, 2), u -= 2)
            }
            e = e.join("/")
        } else 0 === e.indexOf("./") && (e = e.substring(2));
        if((h || f) && p) {
            for(i = e.split("/"), u = i.length; u > 0; u -= 1) {
                if(n = i.slice(0, u).join("/"), h) for(d = h.length; d > 0; d -= 1) if(o = p[h.slice(0, d).join("/")], o && (o = o[n])) {
                    s = o, r = u;
                    break
                }
                if(s) break;
                !a && f && f[n] && (a = f[n], l = u)
            }!s && a && (s = a, r = l), s && (i.splice(0, r, s), e = i.join("/"))
        }
        return e
    }
    function n(t, i) {
        return function() {
            return d.apply(e, y.call(arguments, 0).concat([t, i]))
        }
    }
    function o(e) {
        return function(t) {
            return i(t, e)
        }
    }
    function s(e) {
        return function(t) {
            p[e] = t
        }
    }
    function r(i) {
        if(t(f, i)) {
            var n = f[i];
            delete f[i], g[i] = !0, u.apply(e, n)
        }
        if(!t(p, i) && !t(g, i)) throw Error("No " + i);
        return p[i]
    }
    function a(e) {
        var t, i = e ? e.indexOf("!") : -1;
        return i > -1 && (t = e.substring(0, i), e = e.substring(i + 1, e.length)), [t, e]
    }
    function l(e) {
        return function() {
            return m && m.config && m.config[e] || {}
        }
    }
    var u, d, c, h, p = {},
        f = {},
        m = {},
        g = {},
        v = Object.prototype.hasOwnProperty,
        y = [].slice;
    c = function(e, t) {
        var n, s = a(e),
            l = s[0];
        return e = s[1], l && (l = i(l, t), n = r(l)), l ? e = n && n.normalize ? n.normalize(e, o(t)) : i(e, t) : (e = i(e, t), s = a(e), l = s[0], e = s[1], l && (n = r(l))), {
            f: l ? l + "!" + e : e,
            n: e,
            pr: l,
            p: n
        }
    }, h = {
        require: function(e) {
            return n(e)
        },
        exports: function(e) {
            var t = p[e];
            return t !== void 0 ? t : p[e] = {}
        },
        module: function(e) {
            return {
                id: e,
                uri: "",
                exports: p[e],
                config: l(e)
            }
        }
    }, u = function(i, o, a, l) {
        var u, d, m, v, y, b, w = [];
        if(l = l || i, "function" == typeof a) {
            for(o = !o.length && a.length ? ["require", "exports", "module"] : o, y = 0; o.length > y; y += 1) if(v = c(o[y], l), d = v.f, "require" === d) w[y] = h.require(i);
            else if("exports" === d) w[y] = h.exports(i), b = !0;
            else if("module" === d) u = w[y] = h.module(i);
            else if(t(p, d) || t(f, d) || t(g, d)) w[y] = r(d);
            else {
                if(!v.p) throw Error(i + " missing " + d);
                v.p.load(v.n, n(l, !0), s(d), {}), w[y] = p[d]
            }
            m = a.apply(p[i], w), i && (u && u.exports !== e && u.exports !== p[i] ? p[i] = u.exports : m === e && b || (p[i] = m))
        } else i && (p[i] = a)
    }, requirejs = require = d = function(t, i, n, o, s) {
        return "string" == typeof t ? h[t] ? h[t](i) : r(c(t, i).f) : (t.splice || (m = t, i.splice ? (t = i, i = n, n = null) : t = e), i = i ||
        function() {}, "function" == typeof n && (n = o, o = s), o ? u(e, t, i, n) : setTimeout(function() {
            u(e, t, i, n)
        }, 4), d)
    }, d.config = function(e) {
        return m = e, d
    }, define = function(e, i, n) {
        i.splice || (n = i, i = []), t(p, e) || t(f, e) || (f[e] = [e, i, n])
    }, define.amd = {
        jQuery: !0
    }
})(), define("lib/almond", function() {}), function(e) {
    var t = function(e, t) {
            return e << t | e >>> 32 - t
        },
        i = function(e) {
            var t, i, n = "";
            for(t = 7; t >= 0; t--) i = 15 & e >>> 4 * t, n += i.toString(16);
            return n
        },
        n = function(e) {
            e = e.replace(/
/g, "\n");
            for(var t = "", i = 0; e.length > i; i++) {
                var n = e.charCodeAt(i);
                128 > n ? t += String.fromCharCode(n) : n > 127 && 2048 > n ? (t += String.fromCharCode(192 | n >> 6), t += String.fromCharCode(128 | 63 & n)) : (t += String.fromCharCode(224 | n >> 12), t += String.fromCharCode(128 | 63 & n >> 6), t += String.fromCharCode(128 | 63 & n))
            }
            return t
        };
    e.extend({
        sha1: function(e) {
            var o, s, r, a, l, u, d, c, h, p = Array(80),
                f = 1732584193,
                m = 4023233417,
                g = 2562383102,
                v = 271733878,
                y = 3285377520;
            e = n(e);
            var b = e.length,
                w = [];
            for(s = 0; b - 3 > s; s += 4) r = e.charCodeAt(s) << 24 | e.charCodeAt(s + 1) << 16 | e.charCodeAt(s + 2) << 8 | e.charCodeAt(s + 3), w.push(r);
            switch(b % 4) {
            case 0:
                s = 2147483648;
                break;
            case 1:
                s = 8388608 | e.charCodeAt(b - 1) << 24;
                break;
            case 2:
                s = 32768 | (e.charCodeAt(b - 2) << 24 | e.charCodeAt(b - 1) << 16);
                break;
            case 3:
                s = 128 | (e.charCodeAt(b - 3) << 24 | e.charCodeAt(b - 2) << 16 | e.charCodeAt(b - 1) << 8)
            }
            for(w.push(s); 14 != w.length % 16;) w.push(0);
            for(w.push(b >>> 29), w.push(4294967295 & b << 3), o = 0; w.length > o; o += 16) {
                for(s = 0; 16 > s; s++) p[s] = w[o + s];
                for(s = 16; 79 >= s; s++) p[s] = t(p[s - 3] ^ p[s - 8] ^ p[s - 14] ^ p[s - 16], 1);
                for(a = f, l = m, u = g, d = v, c = y, s = 0; 19 >= s; s++) h = 4294967295 & t(a, 5) + (l & u | ~l & d) + c + p[s] + 1518500249, c = d, d = u, u = t(l, 30), l = a, a = h;
                for(s = 20; 39 >= s; s++) h = 4294967295 & t(a, 5) + (l ^ u ^ d) + c + p[s] + 1859775393, c = d, d = u, u = t(l, 30), l = a, a = h;
                for(s = 40; 59 >= s; s++) h = 4294967295 & t(a, 5) + (l & u | l & d | u & d) + c + p[s] + 2400959708, c = d, d = u, u = t(l, 30), l = a, a = h;
                for(s = 60; 79 >= s; s++) h = 4294967295 & t(a, 5) + (l ^ u ^ d) + c + p[s] + 3395469782, c = d, d = u, u = t(l, 30), l = a, a = h;
                f = 4294967295 & f + a, m = 4294967295 & m + l, g = 4294967295 & g + u, v = 4294967295 & v + d, y = 4294967295 & y + c
            }
            var h = i(f) + i(m) + i(g) + i(v) + i(y);
            return h.toLowerCase()
        }
    })
}(jQuery), define("jquery.sha1", function() {}), define("config", ["require", "jquery.sha1"], function(e) {
    e("jquery.sha1");
    var t = window.location.host,
        i = "turntable.fm" != t || "47381f2767629f64daa0d70c79d91baaeb702835" == $.sha1(location.hash),
        n = {
            DEBUG_MODE: i
        };
    return window.DEBUG_MODE = i, n
}), function(e, t) {
    function i(i, n) {
        function o(e) {
            return pt.preferFlash && at && !pt.ignoreFlash && pt.flash[e] !== t && pt.flash[e]
        }
        function s(e) {
            return function(t) {
                var i, n = this._s;
                return n && n._a ? i = e.call(this, t) : (n && n.id ? pt._wD(n.id + ": Ignoring " + t.type) : pt._wD(yt + "Ignoring " + t.type), i = null), i
            }
        }
        this.setupOptions = {
            url: i || null,
            flashVersion: 8,
            debugMode: !0,
            debugFlash: !1,
            useConsole: !0,
            consoleOnly: !0,
            waitForWindowLoad: !1,
            bgColor: "#ffffff",
            useHighPerformance: !1,
            flashPollingInterval: null,
            html5PollingInterval: null,
            flashLoadTimeout: 1e3,
            wmode: null,
            allowScriptAccess: "always",
            useFlashBlock: !1,
            useHTML5Audio: !0,
            html5Test: /^(probably|maybe)$/i,
            preferFlash: !0,
            noSWFCache: !1
        }, this.defaultOptions = {
            autoLoad: !1,
            autoPlay: !1,
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
            multiShot: !0,
            multiShotEvents: !1,
            position: null,
            pan: 0,
            stream: !0,
            to: null,
            type: null,
            usePolicyFile: !1,
            volume: 100
        }, this.flash9Options = {
            isMovieStar: null,
            usePeakData: !1,
            useWaveformData: !1,
            useEQData: !1,
            onbufferchange: null,
            ondataerror: null
        }, this.movieStarOptions = {
            bufferTime: 3,
            serverURL: null,
            onconnect: null,
            duration: null
        }, this.audioFormats = {
            mp3: {
                type: ['audio/mpeg; codecs="mp3"', "audio/mpeg", "audio/mp3", "audio/MPA", "audio/mpa-robust"],
                required: !0
            },
            mp4: {
                related: ["aac", "m4a", "m4b"],
                type: ['audio/mp4; codecs="mp4a.40.2"', "audio/aac", "audio/x-m4a", "audio/MP4A-LATM", "audio/mpeg4-generic"],
                required: !1
            },
            ogg: {
                type: ["audio/ogg; codecs=vorbis"],
                required: !1
            },
            wav: {
                type: ['audio/wav; codecs="1"', "audio/wav", "audio/wave", "audio/x-wav"],
                required: !1
            }
        }, this.movieID = "sm2-container", this.id = n || "sm2movie", this.debugID = "soundmanager-debug", this.debugURLParam = /([#?&])debug=1/i, this.versionNumber = "V2.97a.20130101", this.version = null, this.movieURL = null, this.altURL = null, this.swfLoaded = !1, this.enabled = !1, this.oMC = null, this.sounds = {}, this.soundIDs = [], this.muted = !1, this.didFlashBlock = !1, this.filePattern = null, this.filePatterns = {
            flash8: /\.mp3(\?.*)?$/i,
            flash9: /\.mp3(\?.*)?$/i
        }, this.features = {
            buffering: !1,
            peakData: !1,
            waveformData: !1,
            eqData: !1,
            movieStar: !1
        }, this.sandbox = {
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
        }, this.html5 = {
            usingFlash: null
        }, this.flash = {}, this.html5Only = !1, this.ignoreFlash = !1;
        var r, a, l, u, d, c, h, p, f, m, g, v, y, b, w, _, S, k, T, C, x, $, M, O, E, D, I, L, R, A, P, F, N, B, j, U, H, V, q, z, W, G, X, Q, Y, K, J, Z, et, tt, it, nt, ot, st, rt, at, lt, ut, dt, ct, ht, pt = this,
            ft = null,
            mt = null,
            gt = "soundManager",
            vt = gt + ": ",
            yt = "HTML5::",
            bt = navigator.userAgent,
            wt = "" + e.location.href,
            _t = document,
            St = [],
            kt = !0,
            Tt = !1,
            Ct = !1,
            xt = !1,
            $t = !1,
            Mt = !1,
            Ot = 0,
            Et = ["log", "info", "warn", "error"],
            Dt = 8,
            It = null,
            Lt = null,
            Rt = !1,
            At = !1,
            Pt = 0,
            Ft = null,
            Nt = [],
            Bt = null,
            jt = Array.prototype.slice,
            Ut = !1,
            Ht = bt.match(/(ipad|iphone|ipod)/i),
            Vt = bt.match(/android/i),
            qt = bt.match(/msie/i),
            zt = bt.match(/webkit/i),
            Wt = bt.match(/safari/i) && !bt.match(/chrome/i),
            Gt = bt.match(/opera/i),
            Xt = bt.match(/(mobile|pre\/|xoom)/i) || Ht || Vt,
            Qt = !wt.match(/usehtml5audio/i) && !wt.match(/sm2\-ignorebadua/i) && Wt && !bt.match(/silk/i) && bt.match(/OS X 10_6_([3-7])/i),
            Yt = e.console !== t && console.log !== t,
            Kt = _t.hasFocus !== t ? _t.hasFocus() : null,
            Jt = Wt && (_t.hasFocus === t || !_t.hasFocus()),
            Zt = !Jt,
            ei = /(mp3|mp4|mpa|m4a|m4b)/i,
            ti = "about:blank",
            ii = _t.location ? _t.location.protocol.match(/http/i) : null,
            ni = ii ? "" : "http://",
            oi = /^\s*audio\/(?:x-)?(?:mpeg4|aac|flv|mov|mp4||m4v|m4a|m4b|mp4v|3gp|3g2)\s*(?:$|;)/i,
            si = ["mpeg4", "aac", "flv", "mov", "mp4", "m4v", "f4v", "m4a", "m4b", "mp4v", "3gp", "3g2"],
            ri = RegExp("\\.(" + si.join("|") + ")(\\?.*)?$", "i");
        this.mimePattern = /^\s*audio\/(?:x-)?(?:mp(?:eg|3))\s*(?:$|;)/i, this.useAltURL = !ii, H = {
            swfBox: "sm2-object-box",
            swfDefault: "movieContainer",
            swfError: "swf_error",
            swfTimedout: "swf_timedout",
            swfLoaded: "swf_loaded",
            swfUnblocked: "swf_unblocked",
            sm2Debug: "sm2_debug",
            highPerf: "high_performance",
            flashDebug: "flash_debug"
        }, this.hasHTML5 = function() {
            try {
                return Audio !== t && (Gt && opera !== t && 10 > opera.version() ? new Audio(null) : new Audio).canPlayType !== t
            } catch(e) {
                return !1
            }
        }(), this.setup = function(e) {
            var i = !pt.url;
            return e !== t && xt && Bt && pt.ok() && (e.flashVersion !== t || e.url !== t || e.html5Test !== t) && W(B("setupLate")), g(e), i && E && e.url !== t && pt.beginDelayedInit(), E || e.url === t || "complete" !== _t.readyState || setTimeout(M, 1), pt
        }, this.ok = function() {
            return Bt ? xt && !$t : pt.useHTML5Audio && pt.hasHTML5
        }, this.supported = this.ok, this.getMovie = function(t) {
            return a(t) || _t[t] || e[t]
        }, this.createSound = function(e, i) {
            function n() {
                return a = q(a), pt.sounds[a.id] = new r(a), pt.soundIDs.push(a.id), pt.sounds[a.id]
            }
            var o, s, a, l = null;
            return o = gt + ".createSound(): ", s = o + B(xt ? "notOK" : "notReady"), xt && pt.ok() ? (i !== t && (e = {
                id: e,
                url: i
            }), a = m(e), a.url = K(a.url), ("" + a.id).charAt(0).match(/^[0-9]$/) && pt._wD(o + B("badID", a.id), 2), pt._wD(o + a.id + " (" + a.url + ")", 1), G(a.id, !0) ? (pt._wD(o + a.id + " exists", 1), pt.sounds[a.id]) : (Z(a) ? (l = n(), pt._wD(a.id + ": Using HTML5"), l._setup_html5(a)) : (c > 8 && (null === a.isMovieStar && (a.isMovieStar = !(!a.serverURL && (a.type ? !a.type.match(oi) : 1) && !a.url.match(ri))), a.isMovieStar && (pt._wD(o + "using MovieStar handling"), a.loops > 1 && p("noNSLoop"))), a = z(a, o), l = n(), 8 === c ? mt._createSound(a.id, a.loops || 1, a.usePolicyFile) : (mt._createSound(a.id, a.url, a.usePeakData, a.useWaveformData, a.useEQData, a.isMovieStar, a.isMovieStar ? a.bufferTime : !1, a.loops || 1, a.serverURL, a.duration || null, a.autoPlay, !0, a.autoLoad, a.usePolicyFile), a.serverURL || (l.connected = !0, a.onconnect && a.onconnect.apply(l))), a.serverURL || !a.autoLoad && !a.autoPlay || l.load(a)), !a.serverURL && a.autoPlay && l.play(), l)) : (W(s), !1)
        }, this.destroySound = function(e, t) {
            if(!G(e)) return !1;
            var i, n = pt.sounds[e];
            for(n._iO = {}, n.stop(), n.unload(), i = 0; pt.soundIDs.length > i; i++) if(pt.soundIDs[i] === e) {
                pt.soundIDs.splice(i, 1);
                break
            }
            return t || n.destruct(!0), n = null, delete pt.sounds[e], !0
        }, this.load = function(e, t) {
            return G(e) ? pt.sounds[e].load(t) : !1
        }, this.unload = function(e) {
            return G(e) ? pt.sounds[e].unload() : !1
        }, this.onPosition = function(e, t, i, n) {
            return G(e) ? pt.sounds[e].onposition(t, i, n) : !1
        }, this.onposition = this.onPosition, this.clearOnPosition = function(e, t, i) {
            return G(e) ? pt.sounds[e].clearOnPosition(t, i) : !1
        }, this.play = function(e, t) {
            var i = !1;
            return xt && pt.ok() ? G(e) ? pt.sounds[e].play(t) : (t instanceof Object || (t = {
                url: t
            }), t && t.url && (pt._wD(gt + '.play(): attempting to create "' + e + '"', 1), t.id = e, i = pt.createSound(t).play()), i) : (W(gt + ".play(): " + B(xt ? "notOK" : "notReady")), i)
        }, this.start = this.play, this.setPosition = function(e, t) {
            return G(e) ? pt.sounds[e].setPosition(t) : !1
        }, this.stop = function(e) {
            return G(e) ? (pt._wD(gt + ".stop(" + e + ")", 1), pt.sounds[e].stop()) : !1
        }, this.stopAll = function() {
            var e;
            pt._wD(gt + ".stopAll()", 1);
            for(e in pt.sounds) pt.sounds.hasOwnProperty(e) && pt.sounds[e].stop()
        }, this.pause = function(e) {
            return G(e) ? pt.sounds[e].pause() : !1
        }, this.pauseAll = function() {
            var e;
            for(e = pt.soundIDs.length - 1; e >= 0; e--) pt.sounds[pt.soundIDs[e]].pause()
        }, this.resume = function(e) {
            return G(e) ? pt.sounds[e].resume() : !1
        }, this.resumeAll = function() {
            var e;
            for(e = pt.soundIDs.length - 1; e >= 0; e--) pt.sounds[pt.soundIDs[e]].resume()
        }, this.togglePause = function(e) {
            return G(e) ? pt.sounds[e].togglePause() : !1
        }, this.setPan = function(e, t) {
            return G(e) ? pt.sounds[e].setPan(t) : !1
        }, this.setVolume = function(e, t) {
            return G(e) ? pt.sounds[e].setVolume(t) : !1
        }, this.mute = function(e) {
            var t = 0;
            if(e instanceof String && (e = null), e) return G(e) ? (pt._wD(gt + '.mute(): Muting "' + e + '"'), pt.sounds[e].mute()) : !1;
            for(pt._wD(gt + ".mute(): Muting all sounds"), t = pt.soundIDs.length - 1; t >= 0; t--) pt.sounds[pt.soundIDs[t]].mute();
            return pt.muted = !0, !0
        }, this.muteAll = function() {
            pt.mute()
        }, this.unmute = function(e) {
            var t;
            if(e instanceof String && (e = null), e) return G(e) ? (pt._wD(gt + '.unmute(): Unmuting "' + e + '"'), pt.sounds[e].unmute()) : !1;
            for(pt._wD(gt + ".unmute(): Unmuting all sounds"), t = pt.soundIDs.length - 1; t >= 0; t--) pt.sounds[pt.soundIDs[t]].unmute();
            return pt.muted = !1, !0
        }, this.unmuteAll = function() {
            pt.unmute()
        }, this.toggleMute = function(e) {
            return G(e) ? pt.sounds[e].toggleMute() : !1
        }, this.getMemoryUse = function() {
            var e = 0;
            return mt && 8 !== c && (e = parseInt(mt._getMemoryUse(), 10)), e
        }, this.disable = function(i) {
            var n;
            if(i === t && (i = !1), $t) return !1;
            for($t = !0, p("shutdown", 1), n = pt.soundIDs.length - 1; n >= 0; n--) P(pt.sounds[pt.soundIDs[n]]);
            return f(i), st.remove(e, "load", w), !0
        }, this.canPlayMIME = function(e) {
            var t;
            return pt.hasHTML5 && (t = et({
                type: e
            })), !t && Bt && (t = e && pt.ok() ? !! ((c > 8 ? e.match(oi) : null) || e.match(pt.mimePattern)) : null), t
        }, this.canPlayURL = function(e) {
            var t;
            return pt.hasHTML5 && (t = et({
                url: e
            })), !t && Bt && (t = e && pt.ok() ? !! e.match(pt.filePattern) : null), t
        }, this.canPlayLink = function(e) {
            return e.type !== t && e.type && pt.canPlayMIME(e.type) ? !0 : pt.canPlayURL(e.href)
        }, this.getSoundById = function(e, t) {
            if(!e) throw Error(gt + ".getSoundById(): sID is null/_undefined");
            var i = pt.sounds[e];
            return i || t || pt._wD('"' + e + '" is an invalid sound ID.', 2), i
        }, this.onready = function(t, i) {
            var n = "onready",
                o = !1;
            if("function" != typeof t) throw B("needFunction", n);
            return xt && pt._wD(B("queue", n)), i || (i = e), y(n, t, i), b(), o = !0, o
        }, this.ontimeout = function(t, i) {
            var n = "ontimeout",
                o = !1;
            if("function" != typeof t) throw B("needFunction", n);
            return xt && pt._wD(B("queue", n)), i || (i = e), y(n, t, i), b({
                type: n
            }), o = !0, o
        }, this._writeDebug = function(e, i) {
            var n, o, s = "soundmanager-debug";
            return pt.debugMode ? Yt && pt.useConsole && (i && "object" == typeof i ? console.log(e, i) : Et[i] !== t ? console[Et[i]](e) : console.log(e), pt.consoleOnly) ? !0 : (n = a(s)) ? (o = _t.createElement("div"), 0 === ++Ot % 2 && (o.className = "sm2-alt"), i = i === t ? 0 : parseInt(i, 10), o.appendChild(_t.createTextNode(e)), i && (i >= 2 && (o.style.fontWeight = "bold"), 3 === i && (o.style.color = "#ff3333")), n.insertBefore(o, n.firstChild), n = null, !0) : !1 : !1
        }, -1 !== wt.indexOf("sm2-debug=alert") && (this._writeDebug = function(t) {
            e.alert(t)
        }), this._wD = this._writeDebug, this._debug = function() {
            var e, t;
            for(p("currentObj", 1), e = 0, t = pt.soundIDs.length; t > e; e++) pt.sounds[pt.soundIDs[e]]._debug()
        }, this.reboot = function(t, i) {
            pt.soundIDs.length && pt._wD("Destroying " + pt.soundIDs.length + " SMSound objects...");
            var n, o, s;
            for(n = pt.soundIDs.length - 1; n >= 0; n--) pt.sounds[pt.soundIDs[n]].destruct();
            if(mt) try {
                qt && (Lt = mt.innerHTML), It = mt.parentNode.removeChild(mt), p("flRemoved")
            } catch(r) {
                p("badRemove", 2)
            }
            if(Lt = It = Bt = mt = null, pt.enabled = E = xt = Rt = At = Tt = Ct = $t = Ut = pt.swfLoaded = !1, pt.soundIDs = [], pt.sounds = {}, t) St = [];
            else for(n in St) if(St.hasOwnProperty(n)) for(o = 0, s = St[n].length; s > o; o++) St[n][o].fired = !1;
            return i || pt._wD(gt + ": Rebooting..."), pt.html5 = {
                usingFlash: null
            }, pt.flash = {}, pt.html5Only = !1, pt.ignoreFlash = !1, e.setTimeout(function() {
                $(), i || pt.beginDelayedInit()
            }, 20), pt
        }, this.reset = function() {
            return p("reset"), pt.reboot(!0, !0)
        }, this.getMoviePercent = function() {
            return mt && "PercentLoaded" in mt ? mt.PercentLoaded() : null
        }, this.beginDelayedInit = function() {
            Mt = !0, M(), setTimeout(function() {
                return At ? !1 : (I(), x(), At = !0, !0)
            }, 20), _()
        }, this.destruct = function() {
            pt._wD(gt + ".destruct()"), pt.disable(!0)
        }, r = function(e) {
            var i, n, o, s, r, a, l, u, d, f = this,
                g = !1,
                v = [],
                y = 0,
                b = null;
            d = {
                duration: null,
                time: null
            }, this.id = e.id, this.sID = this.id, this.url = e.url, this.options = m(e), this.instanceOptions = this.options, this._iO = this.instanceOptions, this.pan = this.options.pan, this.volume = this.options.volume, this.isHTML5 = !1, this._a = null, this.id3 = {}, this._debug = function() {
                pt._wD(f.id + ": Merged options:", f.options)
            }, this.load = function(e) {
                var i, n = null;
                if(e !== t ? f._iO = m(e, f.options) : (e = f.options, f._iO = e, b && b !== f.url && (p("manURL"), f._iO.url = f.url, f.url = null)), f._iO.url || (f._iO.url = f.url), f._iO.url = K(f._iO.url), f.instanceOptions = f._iO, i = f._iO, pt._wD(f.id + ": load (" + i.url + ")"), i.url === f.url && 0 !== f.readyState && 2 !== f.readyState) return p("onURL", 1), 3 === f.readyState && i.onload && i.onload.apply(f, [ !! f.duration]), f;
                if(f.loaded = !1, f.readyState = 1, f.playState = 0, f.id3 = {}, Z(i)) n = f._setup_html5(i), n._called_load ? pt._wD(f.id + ": Ignoring request to load again") : (f._html5_canplay = !1, f.url !== i.url && (pt._wD(p("manURL") + ": " + i.url), f._a.src = i.url, f.setPosition(0)), f._a.autobuffer = "auto", f._a.preload = "auto", f._a._called_load = !0, i.autoPlay && f.play());
                else try {
                    f.isHTML5 = !1, f._iO = z(q(i)), i = f._iO, 8 === c ? mt._load(f.id, i.url, i.stream, i.autoPlay, i.usePolicyFile) : mt._load(f.id, i.url, !! i.stream, !! i.autoPlay, i.loops || 1, !! i.autoLoad, i.usePolicyFile)
                } catch(o) {
                    p("smError", 2), h("onload", !1), L({
                        type: "SMSOUND_LOAD_JS_EXCEPTION",
                        fatal: !0
                    })
                }
                return f.url = i.url, f
            }, this.unload = function() {
                return 0 !== f.readyState && (pt._wD(f.id + ": unload()"), f.isHTML5 ? (s(), f._a && (f._a.pause(), it(f._a, ti), b = ti)) : 8 === c ? mt._unload(f.id, ti) : mt._unload(f.id), i()), f
            }, this.destruct = function(e) {
                pt._wD(f.id + ": Destruct"), f.isHTML5 ? (s(), f._a && (f._a.pause(), it(f._a), Ut || o(), f._a._s = null, f._a = null)) : (f._iO.onfailure = null, mt._destroySound(f.id)), e || pt.destroySound(f.id, !0)
            }, this.play = function(e, i) {
                var n, o, s, l, d = !0,
                    h = null;
                if(n = f.id + ": play(): ", i = i === t ? !0 : i, e || (e = {}), f.url && (f._iO.url = f.url), f._iO = m(f._iO, f.options), f._iO = m(e, f._iO), f._iO.url = K(f._iO.url), f.instanceOptions = f._iO, f._iO.serverURL && !f.connected) return f.getAutoPlay() || (pt._wD(n + " Netstream not connected yet - setting autoPlay"), f.setAutoPlay(!0)), f;
                if(Z(f._iO) && (f._setup_html5(f._iO), r()), 1 !== f.playState || f.paused || (o = f._iO.multiShot, o ? pt._wD(n + "Already playing (multi-shot)", 1) : (pt._wD(n + "Already playing (one-shot)", 1), h = f)), null !== h) return h;
                if(e.url && e.url !== f.url && f.load(f._iO), f.loaded ? pt._wD(n) : 0 === f.readyState ? (pt._wD(n + "Attempting to load"), f.isHTML5 ? f.load(f._iO) : (f._iO.autoPlay = !0, f.load(f._iO)), f.instanceOptions = f._iO) : 2 === f.readyState ? (pt._wD(n + "Could not load - exiting", 2), h = f) : pt._wD(n + "Loading - attempting to play..."), null !== h) return h;
                if(!f.isHTML5 && 9 === c && f.position > 0 && f.position === f.duration && (pt._wD(n + "Sound at end, resetting to position:0"), e.position = 0), f.paused && f.position >= 0 && (!f._iO.serverURL || f.position > 0)) pt._wD(n + "Resuming from paused state", 1), f.resume();
                else {
                    if(f._iO = m(e, f._iO), null !== f._iO.from && null !== f._iO.to && 0 === f.instanceCount && 0 === f.playState && !f._iO.serverURL) {
                        if(l = function() {
                            f._iO = m(e, f._iO), f.play(f._iO)
                        }, f.isHTML5 && !f._html5_canplay ? (pt._wD(n + "Beginning load for from/to case"), f.load({
                            oncanplay: l
                        }), h = !1) : f.isHTML5 || f.loaded || f.readyState && 2 === f.readyState || (pt._wD(n + "Preloading for from/to case"), f.load({
                            onload: l
                        }), h = !1), null !== h) return h;
                        f._iO = u()
                    }
                    pt._wD(n + "Starting to play"), (!f.instanceCount || f._iO.multiShotEvents || !f.isHTML5 && c > 8 && !f.getAutoPlay()) && f.instanceCount++, f._iO.onposition && 0 === f.playState && a(f), f.playState = 1, f.paused = !1, f.position = f._iO.position === t || isNaN(f._iO.position) ? 0 : f._iO.position, f.isHTML5 || (f._iO = z(q(f._iO))), f._iO.onplay && i && (f._iO.onplay.apply(f), g = !0), f.setVolume(f._iO.volume, !0), f.setPan(f._iO.pan, !0), f.isHTML5 ? (r(), s = f._setup_html5(), f.setPosition(f._iO.position), s.play()) : (d = mt._start(f.id, f._iO.loops || 1, 9 === c ? f._iO.position : f._iO.position / 1e3, f._iO.multiShot), 9 !== c || d || (pt._wD(n + "No sound hardware, or 32-sound ceiling hit"), f._iO.onplayerror && f._iO.onplayerror.apply(f)))
                }
                return f
            }, this.start = this.play, this.stop = function(e) {
                var t, i = f._iO;
                return 1 === f.playState && (pt._wD(f.id + ": stop()"), f._onbufferchange(0), f._resetOnPosition(0), f.paused = !1, f.isHTML5 || (f.playState = 0), l(), i.to && f.clearOnPosition(i.to), f.isHTML5 ? f._a && (t = f.position, f.setPosition(0), f.position = t, f._a.pause(), f.playState = 0, f._onTimer(), s()) : (mt._stop(f.id, e), i.serverURL && f.unload()), f.instanceCount = 0, f._iO = {}, i.onstop && i.onstop.apply(f)), f
            }, this.setAutoPlay = function(e) {
                pt._wD(f.id + ": Autoplay turned " + (e ? "on" : "off")), f._iO.autoPlay = e, f.isHTML5 || (mt._setAutoPlay(f.id, e), e && (f.instanceCount || 1 !== f.readyState || (f.instanceCount++, pt._wD(f.id + ": Incremented instance count to " + f.instanceCount))))
            }, this.getAutoPlay = function() {
                return f._iO.autoPlay
            }, this.setPosition = function(e) {
                e === t && (e = 0);
                var i, n, o, s = f.isHTML5 ? Math.max(e, 0) : Math.min(f.duration || f._iO.duration, Math.max(e, 0));
                if(i = f.position, f.position = s, o = f.position / 1e3, f._resetOnPosition(f.position), f._iO.position = s, f.isHTML5) {
                    if(f._a) if(f._html5_canplay) {
                        if(f._a.currentTime !== o) {
                            pt._wD(f.id + ": setPosition(" + o + ")");
                            try {
                                f._a.currentTime = o, (0 === f.playState || f.paused) && f._a.pause()
                            } catch(r) {
                                pt._wD(f.id + ": setPosition(" + o + ") failed: " + r.message, 2)
                            }
                        }
                    } else pt._wD(f.id + ": setPosition(" + o + "): Cannot seek yet, sound not ready")
                } else n = 9 === c ? f.position : o, f.readyState && 2 !== f.readyState && mt._setPosition(f.id, n, f.paused || !f.playState, f._iO.multiShot);
                return f.isHTML5 && f.paused && f._onTimer(!0), f
            }, this.pause = function(e) {
                return f.paused || 0 === f.playState && 1 !== f.readyState ? f : (pt._wD(f.id + ": pause()"), f.paused = !0, f.isHTML5 ? (f._setup_html5().pause(), s()) : (e || e === t) && mt._pause(f.id, f._iO.multiShot), f._iO.onpause && f._iO.onpause.apply(f), f)
            }, this.resume = function() {
                var e = f._iO;
                return f.paused ? (pt._wD(f.id + ": resume()"), f.paused = !1, f.playState = 1, f.isHTML5 ? (f._setup_html5().play(), r()) : (e.isMovieStar && !e.serverURL && f.setPosition(f.position), mt._pause(f.id, e.multiShot)), !g && e.onplay ? (e.onplay.apply(f), g = !0) : e.onresume && e.onresume.apply(f), f) : f
            }, this.togglePause = function() {
                return pt._wD(f.id + ": togglePause()"), 0 === f.playState ? (f.play({
                    position: 9 !== c || f.isHTML5 ? f.position / 1e3 : f.position
                }), f) : (f.paused ? f.resume() : f.pause(), f)
            }, this.setPan = function(e, i) {
                return e === t && (e = 0), i === t && (i = !1), f.isHTML5 || mt._setPan(f.id, e), f._iO.pan = e, i || (f.pan = e, f.options.pan = e), f
            }, this.setVolume = function(e, i) {
                return e === t && (e = 100), i === t && (i = !1), f.isHTML5 ? f._a && (f._a.volume = Math.max(0, Math.min(1, e / 100))) : mt._setVolume(f.id, pt.muted && !f.muted || f.muted ? 0 : e), f._iO.volume = e, i || (f.volume = e, f.options.volume = e), f
            }, this.mute = function() {
                return f.muted = !0, f.isHTML5 ? f._a && (f._a.muted = !0) : mt._setVolume(f.id, 0), f
            }, this.unmute = function() {
                f.muted = !1;
                var e = f._iO.volume !== t;
                return f.isHTML5 ? f._a && (f._a.muted = !1) : mt._setVolume(f.id, e ? f._iO.volume : f.options.volume), f
            }, this.toggleMute = function() {
                return f.muted ? f.unmute() : f.mute()
            }, this.onPosition = function(e, i, n) {
                return v.push({
                    position: parseInt(e, 10),
                    method: i,
                    scope: n !== t ? n : f,
                    fired: !1
                }), f
            }, this.onposition = this.onPosition, this.clearOnPosition = function(e, t) {
                var i;
                if(e = parseInt(e, 10), isNaN(e)) return !1;
                for(i = 0; v.length > i; i++) e === v[i].position && (t && t !== v[i].method || (v[i].fired && y--, v.splice(i, 1)))
            }, this._processOnPosition = function() {
                var e, t, i = v.length;
                if(!i || !f.playState || y >= i) return !1;
                for(e = i - 1; e >= 0; e--) t = v[e], !t.fired && f.position >= t.position && (t.fired = !0, y++, t.method.apply(t.scope, [t.position]));
                return !0
            }, this._resetOnPosition = function(e) {
                var t, i, n = v.length;
                if(!n) return !1;
                for(t = n - 1; t >= 0; t--) i = v[t], i.fired && i.position >= e && (i.fired = !1, y--);
                return !0
            }, u = function() {
                var e, t, i = f._iO,
                    n = i.from,
                    o = i.to;
                return t = function() {
                    pt._wD(f.id + ': "To" time of ' + o + " reached."), f.clearOnPosition(o, t), f.stop()
                }, e = function() {
                    pt._wD(f.id + ': Playing "from" ' + n), null === o || isNaN(o) || f.onPosition(o, t)
                }, null === n || isNaN(n) || (i.position = n, i.multiShot = !1, e()), i
            }, a = function() {
                var e, t = f._iO.onposition;
                if(t) for(e in t) t.hasOwnProperty(e) && f.onPosition(parseInt(e, 10), t[e])
            }, l = function() {
                var e, t = f._iO.onposition;
                if(t) for(e in t) t.hasOwnProperty(e) && f.clearOnPosition(parseInt(e, 10))
            }, r = function() {
                f.isHTML5 && X(f)
            }, s = function() {
                f.isHTML5 && Q(f)
            }, i = function(e) {
                e || (v = [], y = 0), g = !1, f._hasTimer = null, f._a = null, f._html5_canplay = !1, f.bytesLoaded = null, f.bytesTotal = null, f.duration = f._iO && f._iO.duration ? f._iO.duration : null, f.durationEstimate = null, f.buffered = [], f.eqData = [], f.eqData.left = [], f.eqData.right = [], f.failures = 0, f.isBuffering = !1, f.instanceOptions = {}, f.instanceCount = 0, f.loaded = !1, f.metadata = {}, f.readyState = 0, f.muted = !1, f.paused = !1, f.peakData = {
                    left: 0,
                    right: 0
                }, f.waveformData = {
                    left: [],
                    right: []
                }, f.playState = 0, f.position = null, f.id3 = {}
            }, i(), this._onTimer = function(e) {
                var t, i, n = !1,
                    o = {};
                return f._hasTimer || e ? (f._a && (e || (f.playState > 0 || 1 === f.readyState) && !f.paused) && (t = f._get_html5_duration(), t !== d.duration && (d.duration = t, f.duration = t, n = !0), f.durationEstimate = f.duration, i = 1e3 * f._a.currentTime || 0, i !== d.time && (d.time = i, n = !0), (n || e) && f._whileplaying(i, o, o, o, o)), n) : void 0
            }, this._get_html5_duration = function() {
                var e = f._iO,
                    t = f._a && f._a.duration ? 1e3 * f._a.duration : e && e.duration ? e.duration : null,
                    i = t && !isNaN(t) && 1 / 0 !== t ? t : null;
                return i
            }, this._apply_loop = function(e, t) {
                !e.loop && t > 1 && pt._wD("Note: Native HTML5 looping is infinite.", 1), e.loop = t > 1 ? "loop" : ""
            }, this._setup_html5 = function(e) {
                var t, o = m(f._iO, e),
                    s = decodeURI,
                    r = Ut ? ft : f._a,
                    a = s(o.url);
                if(Ut ? a === rt && (t = !0) : a === b && (t = !0), r) {
                    if(r._s) if(Ut) r._s && r._s.playState && !t && r._s.stop();
                    else if(!Ut && a === s(b)) return f._apply_loop(r, o.loops), r;
                    t || (i(!1), r.src = o.url, f.url = o.url, b = o.url, rt = o.url, r._called_load = !1)
                } else f._a = o.autoLoad || o.autoPlay ? new Audio(o.url) : Gt && 10 > opera.version() ? new Audio(null) : new Audio, r = f._a, r._called_load = !1, Ut && (ft = r);
                return f.isHTML5 = !0, f._a = r, r._s = f, n(), f._apply_loop(r, o.loops), o.autoLoad || o.autoPlay ? f.load() : (r.autobuffer = !1, r.preload = "auto"), r
            }, n = function() {
                function e(e, t, i) {
                    return f._a ? f._a.addEventListener(e, t, i || !1) : null
                }
                if(f._a._added_events) return !1;
                var t;
                f._a._added_events = !0;
                for(t in dt) dt.hasOwnProperty(t) && e(t, dt[t]);
                return !0
            }, o = function() {
                function e(e, t, i) {
                    return f._a ? f._a.removeEventListener(e, t, i || !1) : null
                }
                var t;
                pt._wD(f.id + ": Removing event listeners"), f._a._added_events = !1;
                for(t in dt) dt.hasOwnProperty(t) && e(t, dt[t])
            }, this._onload = function(e) {
                var t, i = !! e || !f.isHTML5 && 8 === c && f.duration;
                return t = f.id + ": ", pt._wD(t + (i ? "onload()" : "Failed to load? - " + f.url), i ? 1 : 2), i || f.isHTML5 || (pt.sandbox.noRemote === !0 && pt._wD(t + B("noNet"), 1), pt.sandbox.noLocal === !0 && pt._wD(t + B("noLocal"), 1)), f.loaded = i, f.readyState = i ? 3 : 2, f._onbufferchange(0), f._iO.onload && f._iO.onload.apply(f, [i]), !0
            }, this._onbufferchange = function(e) {
                return 0 === f.playState ? !1 : e && f.isBuffering || !e && !f.isBuffering ? !1 : (f.isBuffering = 1 === e, f._iO.onbufferchange && (pt._wD(f.id + ": Buffer state change: " + e), f._iO.onbufferchange.apply(f)), !0)
            }, this._onsuspend = function() {
                return f._iO.onsuspend && (pt._wD(f.id + ": Playback suspended"), f._iO.onsuspend.apply(f)), !0
            }, this._onfailure = function(e, t, i) {
                f.failures++, pt._wD(f.id + ": Failures = " + f.failures), f._iO.onfailure && 1 === f.failures ? f._iO.onfailure(f, e, t, i) : pt._wD(f.id + ": Ignoring failure")
            }, this._onfinish = function() {
                var e = f._iO.onfinish;
                f._onbufferchange(0), f._resetOnPosition(0), f.instanceCount && (f.instanceCount--, f.instanceCount || (l(), f.playState = 0, f.paused = !1, f.instanceCount = 0, f.instanceOptions = {}, f._iO = {}, s(), f.isHTML5 && (f.position = 0)), (!f.instanceCount || f._iO.multiShotEvents) && e && (pt._wD(f.id + ": onfinish()"), e.apply(f)))
            }, this._whileloading = function(e, t, i, n) {
                var o = f._iO;
                f.bytesLoaded = e, f.bytesTotal = t, f.duration = Math.floor(i), f.bufferLength = n, f.durationEstimate = f.isHTML5 || o.isMovieStar ? f.duration : o.duration ? f.duration > o.duration ? f.duration : o.duration : parseInt(f.bytesTotal / f.bytesLoaded * f.duration, 10), f.isHTML5 || (f.buffered = [{
                    start: 0,
                    end: f.duration
                }]), (3 !== f.readyState || f.isHTML5) && o.whileloading && o.whileloading.apply(f)
            }, this._whileplaying = function(e, i, n, o, s) {
                var r, a = f._iO;
                return isNaN(e) || null === e ? !1 : (f.position = Math.max(0, e), f._processOnPosition(), !f.isHTML5 && c > 8 && (a.usePeakData && i !== t && i && (f.peakData = {
                    left: i.leftPeak,
                    right: i.rightPeak
                }), a.useWaveformData && n !== t && n && (f.waveformData = {
                    left: n.split(","),
                    right: o.split(",")
                }), a.useEQData && s !== t && s && s.leftEQ && (r = s.leftEQ.split(","), f.eqData = r, f.eqData.left = r, s.rightEQ !== t && s.rightEQ && (f.eqData.right = s.rightEQ.split(",")))), 1 === f.playState && (f.isHTML5 || 8 !== c || f.position || !f.isBuffering || f._onbufferchange(0), a.whileplaying && a.whileplaying.apply(f)), !0)
            }, this._oncaptiondata = function(e) {
                pt._wD(f.id + ": Caption data received."), f.captiondata = e, f._iO.oncaptiondata && f._iO.oncaptiondata.apply(f, [e])
            }, this._onmetadata = function(e, t) {
                pt._wD(f.id + ": Metadata received.");
                var i, n, o = {};
                for(i = 0, n = e.length; n > i; i++) o[e[i]] = t[i];
                f.metadata = o, f._iO.onmetadata && f._iO.onmetadata.apply(f)
            }, this._onid3 = function(e, t) {
                pt._wD(f.id + ": ID3 data received.");
                var i, n, o = [];
                for(i = 0, n = e.length; n > i; i++) o[e[i]] = t[i];
                f.id3 = m(f.id3, o), f._iO.onid3 && f._iO.onid3.apply(f)
            }, this._onconnect = function(e) {
                e = 1 === e, pt._wD(f.id + ": " + (e ? "Connected." : "Failed to connect? - " + f.url), e ? 1 : 2), f.connected = e, e && (f.failures = 0, G(f.id) && (f.getAutoPlay() ? f.play(t, f.getAutoPlay()) : f._iO.autoLoad && f.load()), f._iO.onconnect && f._iO.onconnect.apply(f, [e]))
            }, this._ondataerror = function(e) {
                f.playState > 0 && (pt._wD(f.id + ": Data error: " + e), f._iO.ondataerror && f._iO.ondataerror.apply(f))
            }, this._debug()
        }, D = function() {
            return _t.body || _t._docElement || _t.getElementsByTagName("div")[0]
        }, a = function(e) {
            return _t.getElementById(e)
        }, m = function(e, i) {
            var n, o, s = e || {};
            n = i === t ? pt.defaultOptions : i;
            for(o in n) n.hasOwnProperty(o) && s[o] === t && (s[o] = "object" != typeof n[o] || null === n[o] ? n[o] : m(s[o], n[o]));
            return s
        }, v = {
            onready: 1,
            ontimeout: 1,
            defaultOptions: 1,
            flash9Options: 1,
            movieStarOptions: 1
        }, g = function(e, i) {
            var n, o = !0,
                s = i !== t,
                r = pt.setupOptions,
                a = v;
            if(e === t) {
                o = [];
                for(n in r) r.hasOwnProperty(n) && o.push(n);
                for(n in a) a.hasOwnProperty(n) && ("object" == typeof pt[n] ? o.push(n + ": {...}") : pt[n] instanceof Function ? o.push(n + ": function() {...}") : o.push(n));
                return pt._wD(B("setup", o.join(", "))), !1
            }
            for(n in e) if(e.hasOwnProperty(n)) if("object" != typeof e[n] || null === e[n] || e[n] instanceof Array || e[n] instanceof RegExp) s && a[i] !== t ? pt[i][n] = e[n] : r[n] !== t ? (pt.setupOptions[n] = e[n], pt[n] = e[n]) : a[n] === t ? (W(B(pt[n] === t ? "setupUndef" : "setupError", n), 2), o = !1) : pt[n] instanceof Function ? pt[n].apply(pt, e[n] instanceof Array ? e[n] : [e[n]]) : pt[n] = e[n];
            else {
                if(a[n] !== t) return g(e[n], n);
                W(B(pt[n] === t ? "setupUndef" : "setupError", n), 2), o = !1
            }
            return o
        }, st = function() {
            function t(e) {
                var t = jt.call(e),
                    i = t.length;
                return s ? (t[1] = "on" + t[1], i > 3 && t.pop()) : 3 === i && t.push(!1), t
            }
            function i(e, t) {
                var i = e.shift(),
                    n = [r[t]];
                s ? i[n](e[0], e[1]) : i[n].apply(i, e)
            }
            function n() {
                i(t(arguments), "add")
            }
            function o() {
                i(t(arguments), "remove")
            }
            var s = e.attachEvent,
                r = {
                    add: s ? "attachEvent" : "addEventListener",
                    remove: s ? "detachEvent" : "removeEventListener"
                };
            return {
                add: n,
                remove: o
            }
        }(), dt = {
            abort: s(function() {
                pt._wD(this._s.id + ": abort")
            }),
            canplay: s(function() {
                var e, i = this._s;
                if(i._html5_canplay) return !0;
                if(i._html5_canplay = !0, pt._wD(i.id + ": canplay"), i._onbufferchange(0), e = i._iO.position === t || isNaN(i._iO.position) ? null : i._iO.position / 1e3, i.position && this.currentTime !== e) {
                    pt._wD(i.id + ": canplay: Setting position to " + e);
                    try {
                        this.currentTime = e
                    } catch(n) {
                        pt._wD(i.id + ": canplay: Setting position of " + e + " failed: " + n.message, 2)
                    }
                }
                i._iO._oncanplay && i._iO._oncanplay()
            }),
            canplaythrough: s(function() {
                var e = this._s;
                e.loaded || (e._onbufferchange(0), e._whileloading(e.bytesLoaded, e.bytesTotal, e._get_html5_duration()), e._onload(!0))
            }),
            ended: s(function() {
                var e = this._s;
                pt._wD(e.id + ": ended"), e._onfinish()
            }),
            error: s(function() {
                pt._wD(this._s.id + ": HTML5 error, code " + this.error.code), this._s._onload(!1)
            }),
            loadeddata: s(function() {
                var e = this._s;
                pt._wD(e.id + ": loadeddata"), e._loaded || Wt || (e.duration = e._get_html5_duration())
            }),
            loadedmetadata: s(function() {
                pt._wD(this._s.id + ": loadedmetadata")
            }),
            loadstart: s(function() {
                pt._wD(this._s.id + ": loadstart"), this._s._onbufferchange(1)
            }),
            play: s(function() {
                pt._wD(this._s.id + ": play()"), this._s._onbufferchange(0)
            }),
            playing: s(function() {
                pt._wD(this._s.id + ": playing"), this._s._onbufferchange(0)
            }),
            progress: s(function(e) {
                var t, i, n, o = this._s,
                    s = 0,
                    r = "progress" === e.type,
                    a = e.target.buffered,
                    l = e.loaded || 0,
                    u = e.total || 1,
                    d = 1e3;
                if(o.buffered = [], a && a.length) {
                    for(t = 0, i = a.length; i > t; t++) o.buffered.push({
                        start: a.start(t) * d,
                        end: a.end(t) * d
                    });
                    if(s = (a.end(0) - a.start(0)) * d, l = s / (e.target.duration * d), r && a.length > 1) {
                        for(n = [], i = a.length, t = 0; i > t; t++) n.push(e.target.buffered.start(t) * d + "-" + e.target.buffered.end(t) * d);
                        pt._wD(this._s.id + ": progress, timeRanges: " + n.join(", "))
                    }
                    r && !isNaN(l) && pt._wD(this._s.id + ": progress, " + Math.floor(100 * l) + "% loaded")
                }
                isNaN(l) || (o._onbufferchange(0), o._whileloading(l, u, o._get_html5_duration()), l && u && l === u && dt.canplaythrough.call(this, e))
            }),
            ratechange: s(function() {
                pt._wD(this._s.id + ": ratechange")
            }),
            suspend: s(function(e) {
                var t = this._s;
                pt._wD(this._s.id + ": suspend"), dt.progress.call(this, e), t._onsuspend()
            }),
            stalled: s(function() {
                pt._wD(this._s.id + ": stalled")
            }),
            timeupdate: s(function() {
                this._s._onTimer()
            }),
            waiting: s(function() {
                var e = this._s;
                pt._wD(this._s.id + ": waiting"), e._onbufferchange(1)
            })
        }, Z = function(e) {
            var t;
            return t = e.serverURL || e.type && o(e.type) ? !1 : e.type ? et({
                type: e.type
            }) : et({
                url: e.url
            }) || pt.html5Only
        }, it = function(e, t) {
            e && (e.src = t, e._called_load = !1), Ut && (rt = null)
        }, et = function(e) {
            if(!pt.useHTML5Audio || !pt.hasHTML5) return !1;
            var i, n, s, r, a = e.url || null,
                l = e.type || null,
                u = pt.audioFormats;
            if(l && pt.html5[l] !== t) return pt.html5[l] && !o(l);
            if(!tt) {
                tt = [];
                for(r in u) u.hasOwnProperty(r) && (tt.push(r), u[r].related && (tt = tt.concat(u[r].related)));
                tt = RegExp("\\.(" + tt.join("|") + ")(\\?.*)?$", "i")
            }
            return s = a ? a.toLowerCase().match(tt) : null, s && s.length ? s = s[1] : l ? (n = l.indexOf(";"), s = (-1 !== n ? l.substr(0, n) : l).substr(6)) : i = !1, s && pt.html5[s] !== t ? i = pt.html5[s] && !o(s) : (l = "audio/" + s, i = pt.html5.canPlayType({
                type: l
            }), pt.html5[s] = i, i = i && pt.html5[l] && !o(l)), i
        }, ot = function() {
            function e(e) {
                var t, i, n, o = !1,
                    s = !1;
                if(!r || "function" != typeof r.canPlayType) return o;
                if(e instanceof Array) {
                    for(i = 0, n = e.length; n > i; i++)(pt.html5[e[i]] || r.canPlayType(e[i]).match(pt.html5Test)) && (s = !0, pt.html5[e[i]] = !0, pt.flash[e[i]] = !! e[i].match(ei));
                    o = s
                } else t = r && "function" == typeof r.canPlayType ? r.canPlayType(e) : !1, o = !(!t || !t.match(pt.html5Test));
                return o
            }
            if(!pt.useHTML5Audio || !pt.hasHTML5) return !1;
            var i, n, o, s, r = Audio !== t ? Gt && 10 > opera.version() ? new Audio(null) : new Audio : null,
                a = {};
            o = pt.audioFormats;
            for(i in o) if(o.hasOwnProperty(i) && (n = "audio/" + i, a[i] = e(o[i].type), a[n] = a[i], i.match(ei) ? (pt.flash[i] = !0, pt.flash[n] = !0) : (pt.flash[i] = !1, pt.flash[n] = !1), o[i] && o[i].related)) for(s = o[i].related.length - 1; s >= 0; s--) a["audio/" + o[i].related[s]] = a[i], pt.html5[o[i].related[s]] = a[i], pt.flash[o[i].related[s]] = a[i];
            return a.canPlayType = r ? e : null, pt.html5 = m(pt.html5, a), !0
        }, C = {
            notReady: "Unavailable - wait until onready() has fired.",
            notOK: "Audio support is not available.",
            domError: gt + "exception caught while appending SWF to DOM.",
            spcWmode: "Removing wmode, preventing known SWF loading issue(s)",
            swf404: vt + "Verify that %s is a valid path.",
            tryDebug: "Try " + gt + ".debugFlash = true for more security details (output goes to SWF.)",
            checkSWF: "See SWF output for more debug info.",
            localFail: vt + "Non-HTTP page (" + _t.location.protocol + " URL?) Review Flash player security settings for this special case:\nhttp://www.macromedia.com/support/documentation/en/flashplayer/help/settings_manager04.html\nMay need to add/allow path, eg. c:/sm2/ or /users/me/sm2/",
            waitFocus: vt + "Special case: Waiting for SWF to load with window focus...",
            waitForever: vt + "Waiting indefinitely for Flash (will recover if unblocked)...",
            waitSWF: vt + "Waiting for 100% SWF load...",
            needFunction: vt + "Function object expected for %s",
            badID: 'Warning: Sound ID "%s" should be a string, starting with a non-numeric character',
            currentObj: vt + "_debug(): Current sound objects",
            waitOnload: vt + "Waiting for window.onload()",
            docLoaded: vt + "Document already loaded",
            onload: vt + "initComplete(): calling soundManager.onload()",
            onloadOK: gt + ".onload() complete",
            didInit: vt + "init(): Already called?",
            secNote: "Flash security note: Network/internet URLs will not load due to security restrictions. Access can be configured via Flash Player Global Security Settings Page: http://www.macromedia.com/support/documentation/en/flashplayer/help/settings_manager04.html",
            badRemove: vt + "Failed to remove Flash node.",
            shutdown: gt + ".disable(): Shutting down",
            queue: vt + "Queueing %s handler",
            smError: "SMSound.load(): Exception: JS-Flash communication failed, or JS error.",
            fbTimeout: "No flash response, applying ." + H.swfTimedout + " CSS...",
            fbLoaded: "Flash loaded",
            flRemoved: vt + "Flash movie removed.",
            fbHandler: vt + "flashBlockHandler()",
            manURL: "SMSound.load(): Using manually-assigned URL",
            onURL: gt + ".load(): current URL already assigned.",
            badFV: gt + '.flashVersion must be 8 or 9. "%s" is invalid. Reverting to %s.',
            as2loop: "Note: Setting stream:false so looping can work (flash 8 limitation)",
            noNSLoop: "Note: Looping not implemented for MovieStar formats",
            needfl9: "Note: Switching to flash 9, required for MP4 formats.",
            mfTimeout: "Setting flashLoadTimeout = 0 (infinite) for off-screen, mobile flash case",
            needFlash: vt + "Fatal error: Flash is needed to play some required formats, but is not available.",
            gotFocus: vt + "Got window focus.",
            policy: "Enabling usePolicyFile for data access",
            setup: gt + ".setup(): allowed parameters: %s",
            setupError: gt + '.setup(): "%s" cannot be assigned with this method.',
            setupUndef: gt + '.setup(): Could not find option "%s"',
            setupLate: gt + ".setup(): url, flashVersion and html5Test property changes will not take effect until reboot().",
            noURL: vt + "Flash URL required. Call soundManager.setup({url:...}) to get started.",
            sm2Loaded: "SoundManager 2: Ready.",
            reset: gt + ".reset(): Removing event callbacks",
            mobileUA: "Mobile UA detected, preferring HTML5 by default.",
            globalHTML5: "Using singleton HTML5 Audio() pattern for this device."
        }, B = function() {
            var e, t, i = jt.call(arguments),
                n = i.shift(),
                o = C && C[n] ? C[n] : "";
            if(o && i && i.length) for(e = 0, t = i.length; t > e; e++) o = o.replace("%s", i[e]);
            return o
        }, q = function(e) {
            return 8 === c && e.loops > 1 && e.stream && (p("as2loop"), e.stream = !1), e
        }, z = function(e, t) {
            return e && !e.usePolicyFile && (e.onid3 || e.usePeakData || e.useWaveformData || e.useEQData) && (pt._wD((t || "") + B("policy")), e.usePolicyFile = !0), e
        }, W = function(e) {
            console !== t && console.warn !== t ? console.warn(e) : pt._wD(e)
        }, l = function() {
            return !1
        }, P = function(e) {
            var t;
            for(t in e) e.hasOwnProperty(t) && "function" == typeof e[t] && (e[t] = l);
            t = null
        }, F = function(e) {
            e === t && (e = !1), ($t || e) && pt.disable(e)
        }, N = function(e) {
            var t, i = null;
            if(e) if(e.match(/\.swf(\?.*)?$/i)) {
                if(i = e.substr(e.toLowerCase().lastIndexOf(".swf?") + 4)) return e
            } else e.lastIndexOf("/") !== e.length - 1 && (e += "/");
            return t = (e && -1 !== e.lastIndexOf("/") ? e.substr(0, e.lastIndexOf("/") + 1) : "./") + pt.movieURL, pt.noSWFCache && (t += "?ts=" + (new Date).getTime()), t
        }, k = function() {
            c = parseInt(pt.flashVersion, 10), 8 !== c && 9 !== c && (pt._wD(B("badFV", c, Dt)), pt.flashVersion = c = Dt);
            var e = pt.debugMode || pt.debugFlash ? "_debug.swf" : ".swf";
            pt.useHTML5Audio && !pt.html5Only && pt.audioFormats.mp4.required && 9 > c && (pt._wD(B("needfl9")), pt.flashVersion = c = 9), pt.version = pt.versionNumber + (pt.html5Only ? " (HTML5-only mode)" : 9 === c ? " (AS3/Flash 9)" : " (AS2/Flash 8)"), c > 8 ? (pt.defaultOptions = m(pt.defaultOptions, pt.flash9Options), pt.features.buffering = !0, pt.defaultOptions = m(pt.defaultOptions, pt.movieStarOptions), pt.filePatterns.flash9 = RegExp("\\.(mp3|" + si.join("|") + ")(\\?.*)?$", "i"), pt.features.movieStar = !0) : pt.features.movieStar = !1, pt.filePattern = pt.filePatterns[8 !== c ? "flash9" : "flash8"], pt.movieURL = (8 === c ? "soundmanager2.swf" : "soundmanager2_flash9.swf").replace(".swf", e), pt.features.peakData = pt.features.waveformData = pt.features.eqData = c > 8
        }, R = function(e, t) {
            return mt ? (mt._setPolling(e, t), void 0) : !1
        }, A = function() {
            if(pt.debugURLParam.test(wt) && (pt.debugMode = !0), a(pt.debugID)) return !1;
            var e, t, i, n, o;
            if(!(!pt.debugMode || a(pt.debugID) || Yt && pt.useConsole && pt.consoleOnly)) {
                e = _t.createElement("div"), e.id = pt.debugID + "-toggle", n = {
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
                }, e.appendChild(_t.createTextNode("-")), e.onclick = V, e.title = "Toggle SM2 debug console", bt.match(/msie 6/i) && (e.style.position = "absolute", e.style.cursor = "hand");
                for(o in n) n.hasOwnProperty(o) && (e.style[o] = n[o]);
                if(t = _t.createElement("div"), t.id = pt.debugID, t.style.display = pt.debugMode ? "block" : "none", pt.debugMode && !a(e.id)) {
                    try {
                        i = D(), i.appendChild(e)
                    } catch(s) {
                        throw Error(B("domError") + " \n" + ("" + s))
                    }
                    i.appendChild(t)
                }
            }
            i = null
        }, G = this.getSoundById, p = function(e, t) {
            return e ? pt._wD(B(e), t) : ""
        }, V = function() {
            var e = a(pt.debugID),
                t = a(pt.debugID + "-toggle");
            return e ? (kt ? (t.innerHTML = "+", e.style.display = "none") : (t.innerHTML = "-", e.style.display = "block"), kt = !kt, void 0) : !1
        }, h = function(i, n, o) {
            if(e.sm2Debugger !== t) try {
                sm2Debugger.handleEvent(i, n, o)
            } catch(s) {}
            return !0
        }, U = function() {
            var e = [];
            return pt.debugMode && e.push(H.sm2Debug), pt.debugFlash && e.push(H.flashDebug), pt.useHighPerformance && e.push(H.highPerf), e.join(" ")
        }, j = function() {
            var e = B("fbHandler"),
                t = pt.getMoviePercent(),
                i = H,
                n = {
                    type: "FLASHBLOCK"
                };
            return pt.html5Only ? !1 : (pt.ok() ? (pt.didFlashBlock && pt._wD(e + ": Unblocked"), pt.oMC && (pt.oMC.className = [U(), i.swfDefault, i.swfLoaded + (pt.didFlashBlock ? " " + i.swfUnblocked : "")].join(" "))) : (Bt && (pt.oMC.className = U() + " " + i.swfDefault + " " + (null === t ? i.swfTimedout : i.swfError), pt._wD(e + ": " + B("fbTimeout") + (t ? " (" + B("fbLoaded") + ")" : ""))), pt.didFlashBlock = !0, b({
                type: "ontimeout",
                ignoreInit: !0,
                error: n
            }), L(n)), void 0)
        }, y = function(e, i, n) {
            St[e] === t && (St[e] = []), St[e].push({
                method: i,
                scope: n || null,
                fired: !1
            })
        }, b = function(e) {
            if(e || (e = {
                type: pt.ok() ? "onready" : "ontimeout"
            }), !xt && e && !e.ignoreInit) return !1;
            if("ontimeout" === e.type && (pt.ok() || $t && !e.ignoreInit)) return !1;
            var t, i, n = {
                success: e && e.ignoreInit ? pt.ok() : !$t
            },
                o = e && e.type ? St[e.type] || [] : [],
                s = [],
                r = [n],
                a = Bt && !pt.ok();
            for(e.error && (r[0].error = e.error), t = 0, i = o.length; i > t; t++) o[t].fired !== !0 && s.push(o[t]);
            if(s.length) for(t = 0, i = s.length; i > t; t++) s[t].scope ? s[t].method.apply(s[t].scope, r) : s[t].method.apply(this, r), a || (s[t].fired = !0);
            return !0
        }, w = function() {
            e.setTimeout(function() {
                pt.useFlashBlock && j(), b(), "function" == typeof pt.onload && (p("onload", 1), pt.onload.apply(e), p("onloadOK", 1)), pt.waitForWindowLoad && st.add(e, "load", w)
            }, 1)
        }, lt = function() {
            if(at !== t) return at;
            var i, n, o, s = !1,
                r = navigator,
                a = r.plugins,
                l = e.ActiveXObject;
            if(a && a.length) n = "application/x-shockwave-flash", o = r.mimeTypes, o && o[n] && o[n].enabledPlugin && o[n].enabledPlugin.description && (s = !0);
            else if(l !== t && !bt.match(/MSAppHost/i)) {
                try {
                    i = new l("ShockwaveFlash.ShockwaveFlash")
                } catch(u) {}
                s = !! i, i = null
            }
            return at = s, s
        }, J = function() {
            var e, t, i = !0,
                n = pt.audioFormats,
                o = Ht && !! bt.match(/os (1|2|3_0|3_1)/i);
            if(o ? (pt.hasHTML5 = !1, pt.html5Only = !0, pt.oMC && (pt.oMC.style.display = "none"), i = !1) : pt.useHTML5Audio && (pt.html5 && pt.html5.canPlayType || (pt._wD("SoundManager: No HTML5 Audio() support detected."), pt.hasHTML5 = !1), Qt && pt._wD(vt + "Note: Buggy HTML5 Audio in Safari on this OS X release, see https://bugs.webkit.org/show_bug.cgi?id=32159 - " + (at ? "will use flash fallback for MP3/MP4, if available" : " would use flash fallback for MP3/MP4, but none detected."), 1)), pt.useHTML5Audio && pt.hasHTML5) for(t in n) n.hasOwnProperty(t) && (n[t].required && !pt.html5.canPlayType(n[t].type) || pt.preferFlash && (pt.flash[t] || pt.flash[n[t].type])) && (e = !0);
            return pt.ignoreFlash && (e = !1), pt.html5Only = pt.hasHTML5 && pt.useHTML5Audio && !e, !pt.html5Only
        }, K = function(e) {
            var t, i, n, o = 0;
            if(e instanceof Array) {
                for(t = 0, i = e.length; i > t; t++) if(e[t] instanceof Object) {
                    if(pt.canPlayMIME(e[t].type)) {
                        o = t;
                        break
                    }
                } else if(pt.canPlayURL(e[t])) {
                    o = t;
                    break
                }
                e[o].url && (e[o] = e[o].url), n = e[o]
            } else n = e;
            return n
        }, X = function(t) {
            t._hasTimer || (t._hasTimer = !0, !Xt && pt.html5PollingInterval && (null === Ft && 0 === Pt && (Ft = e.setInterval(Y, pt.html5PollingInterval)), Pt++))
        }, Q = function(e) {
            e._hasTimer && (e._hasTimer = !1, !Xt && pt.html5PollingInterval && Pt--)
        }, Y = function() {
            var t;
            if(null !== Ft && !Pt) return e.clearInterval(Ft), Ft = null, !1;
            for(t = pt.soundIDs.length - 1; t >= 0; t--) pt.sounds[pt.soundIDs[t]].isHTML5 && pt.sounds[pt.soundIDs[t]]._hasTimer && pt.sounds[pt.soundIDs[t]]._onTimer()
        }, L = function(i) {
            i = i !== t ? i : {}, "function" == typeof pt.onerror && pt.onerror.apply(e, [{
                type: i.type !== t ? i.type : null
            }]), i.fatal !== t && i.fatal && pt.disable()
        }, ut = function() {
            if(!Qt || !lt()) return !1;
            var e, t, i = pt.audioFormats;
            for(t in i) if(i.hasOwnProperty(t) && ("mp3" === t || "mp4" === t) && (pt._wD(gt + ": Using flash fallback for " + t + " format"), pt.html5[t] = !1, i[t] && i[t].related)) for(e = i[t].related.length - 1; e >= 0; e--) pt.html5[i[t].related[e]] = !1
        }, this._setSandboxType = function(e) {
            var i = pt.sandbox;
            i.type = e, i.description = i.types[i.types[e] !== t ? e : "unknown"], "localWithFile" === i.type ? (i.noRemote = !0, i.noLocal = !1, p("secNote", 2)) : "localWithNetwork" === i.type ? (i.noRemote = !1, i.noLocal = !0) : "localTrusted" === i.type && (i.noRemote = !1, i.noLocal = !1)
        }, this._externalInterfaceOK = function(e, t) {
            if(pt.swfLoaded) return !1;
            var i;
            return h("swf", !0), h("flashtojs", !0), pt.swfLoaded = !0, Jt = !1, Qt && ut(), t && t.replace(/\+dev/i, "") === pt.versionNumber.replace(/\+dev/i, "") ? (setTimeout(d, qt ? 100 : 1), void 0) : (i = gt + ': Fatal: JavaScript file build "' + pt.versionNumber + '" does not match Flash SWF build "' + t + '" at ' + pt.url + ". Ensure both are up-to-date.", setTimeout(function() {
                throw Error(i)
            }, 0), !1)
        }, I = function(e, i) {
            function n() {
                var e, t = [],
                    i = [],
                    n = " + ";
                e = "SoundManager " + pt.version + (!pt.html5Only && pt.useHTML5Audio ? pt.hasHTML5 ? " + HTML5 audio" : ", no HTML5 audio support" : ""), pt.html5Only ? pt.html5PollingInterval && t.push("html5PollingInterval (" + pt.html5PollingInterval + "ms)") : (pt.preferFlash && t.push("preferFlash"), pt.useHighPerformance && t.push("useHighPerformance"), pt.flashPollingInterval && t.push("flashPollingInterval (" + pt.flashPollingInterval + "ms)"), pt.html5PollingInterval && t.push("html5PollingInterval (" + pt.html5PollingInterval + "ms)"), pt.wmode && t.push("wmode (" + pt.wmode + ")"), pt.debugFlash && t.push("debugFlash"), pt.useFlashBlock && t.push("flashBlock")), t.length && (i = i.concat([t.join(n)])), pt._wD(e + (i.length ? n + i.join(", ") : ""), 1), ct()
            }
            function o(e, t) {
                return '<param name="' + e + '" value="' + t + '" />'
            }
            if(Tt && Ct) return !1;
            if(pt.html5Only) return k(), n(), pt.oMC = a(pt.movieID), d(), Tt = !0, Ct = !0, !1;
            var s, r, l, u, c, h, p, f, m = i || pt.url,
                g = pt.altURL || m,
                v = "JS/Flash audio component (SoundManager 2)",
                y = D(),
                b = U(),
                w = null,
                _ = _t.getElementsByTagName("html")[0];
            if(w = _ && _.dir && _.dir.match(/rtl/i), e = e === t ? pt.id : e, k(), pt.url = N(ii ? m : g), i = pt.url, pt.wmode = !pt.wmode && pt.useHighPerformance ? "transparent" : pt.wmode, null !== pt.wmode && (bt.match(/msie 8/i) || !qt && !pt.useHighPerformance) && navigator.platform.match(/win32|win64/i) && (Nt.push(C.spcWmode), pt.wmode = null), s = {
                name: e,
                id: e,
                src: i,
                quality: "high",
                allowScriptAccess: pt.allowScriptAccess,
                bgcolor: pt.bgColor,
                pluginspage: ni + "www.macromedia.com/go/getflashplayer",
                title: v,
                type: "application/x-shockwave-flash",
                wmode: pt.wmode,
                hasPriority: "true"
            }, pt.debugFlash && (s.FlashVars = "debug=1"), pt.wmode || delete s.wmode, qt) r = _t.createElement("div"), u = ['<object id="' + e + '" data="' + i + '" type="' + s.type + '" title="' + s.title + '" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="' + ni + 'download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,40,0">', o("movie", i), o("AllowScriptAccess", pt.allowScriptAccess), o("quality", s.quality), pt.wmode ? o("wmode", pt.wmode) : "", o("bgcolor", pt.bgColor), o("hasPriority", "true"), pt.debugFlash ? o("FlashVars", s.FlashVars) : "", "</object>"].join("");
            else {
                r = _t.createElement("embed");
                for(l in s) s.hasOwnProperty(l) && r.setAttribute(l, s[l])
            }
            if(A(), b = U(), y = D()) if(pt.oMC = a(pt.movieID) || _t.createElement("div"), pt.oMC.id) f = pt.oMC.className, pt.oMC.className = (f ? f + " " : H.swfDefault) + (b ? " " + b : ""), pt.oMC.appendChild(r), qt && (c = pt.oMC.appendChild(_t.createElement("div")), c.className = H.swfBox, c.innerHTML = u), Ct = !0;
            else {
                if(pt.oMC.id = pt.movieID, pt.oMC.className = H.swfDefault + " " + b, h = null, c = null, pt.useFlashBlock || (pt.useHighPerformance ? h = {
                    position: "fixed",
                    width: "8px",
                    height: "8px",
                    bottom: "0px",
                    left: "0px",
                    overflow: "hidden"
                } : (h = {
                    position: "absolute",
                    width: "6px",
                    height: "6px",
                    top: "-9999px",
                    left: "-9999px"
                }, w && (h.left = Math.abs(parseInt(h.left, 10)) + "px"))), zt && (pt.oMC.style.zIndex = 1e4), !pt.debugFlash) for(p in h) h.hasOwnProperty(p) && (pt.oMC.style[p] = h[p]);
                try {
                    qt || pt.oMC.appendChild(r), y.appendChild(pt.oMC), qt && (c = pt.oMC.appendChild(_t.createElement("div")), c.className = H.swfBox, c.innerHTML = u), Ct = !0
                } catch(S) {
                    throw Error(B("domError") + " \n" + ("" + S))
                }
            }
            return Tt = !0, n(), !0
        }, x = function() {
            return pt.html5Only ? (I(), !1) : mt ? !1 : pt.url ? (mt = pt.getMovie(pt.id), mt || (It ? (qt ? pt.oMC.innerHTML = Lt : pt.oMC.appendChild(It), It = null, Tt = !0) : I(pt.id, pt.url), mt = pt.getMovie(pt.id)), "function" == typeof pt.oninitmovie && setTimeout(pt.oninitmovie, 1), ht(), !0) : (p("noURL"), !1)
        }, _ = function() {
            setTimeout(S, 1e3)
        }, S = function() {
            var t, i = !1;
            return pt.url ? Rt ? !1 : (Rt = !0, st.remove(e, "load", _), Jt && !Kt ? (p("waitFocus"), !1) : (xt || (t = pt.getMoviePercent(), t > 0 && 100 > t && (i = !0)), setTimeout(function() {
                return t = pt.getMoviePercent(), i ? (Rt = !1, pt._wD(B("waitSWF")), e.setTimeout(_, 1), !1) : (xt || (pt._wD(gt + ": No Flash response within expected time. Likely causes: " + (0 === t ? "SWF load failed, " : "") + "Flash blocked or JS-Flash security error." + (pt.debugFlash ? " " + B("checkSWF") : ""), 2), !ii && t && (p("localFail", 2), pt.debugFlash || p("tryDebug", 2)), 0 === t && pt._wD(B("swf404", pt.url), 1), h("flashtojs", !1, " (Check flash security or flash blockers)")), !xt && Zt && (null === t ? pt.useFlashBlock || 0 === pt.flashLoadTimeout ? (pt.useFlashBlock && j(), p("waitForever")) : (p("waitForever"), b({
                    type: "ontimeout",
                    ignoreInit: !0
                })) : 0 === pt.flashLoadTimeout ? p("waitForever") : F(!0)), void 0)
            }, pt.flashLoadTimeout), void 0)) : !1
        }, T = function() {
            function t() {
                st.remove(e, "focus", T)
            }
            return Kt || !Jt ? (t(), !0) : (Zt = !0, Kt = !0, p("gotFocus"), Rt = !1, _(), t(), !0)
        }, ht = function() {
            Nt.length && (pt._wD("SoundManager 2: " + Nt.join(" "), 1), Nt = [])
        }, ct = function() {
            ht();
            var e, t = [];
            if(pt.useHTML5Audio && pt.hasHTML5) {
                for(e in pt.audioFormats) pt.audioFormats.hasOwnProperty(e) && t.push(e + " = " + pt.html5[e] + (!pt.html5[e] && at && pt.flash[e] ? " (using flash)" : pt.preferFlash && pt.flash[e] && at ? " (preferring flash)" : pt.html5[e] ? "" : " (" + (pt.audioFormats[e].required ? "required, " : "") + "and no flash support)"));
                pt._wD("SoundManager 2 HTML5 support: " + t.join(", "), 1)
            }
        }, f = function(t) {
            if(xt) return !1;
            if(pt.html5Only) return p("sm2Loaded"), xt = !0, w(), h("onload", !0), !0;
            var i, n = pt.useFlashBlock && pt.flashLoadTimeout && !pt.getMoviePercent(),
                o = !0;
            return n || (xt = !0, $t && (i = {
                type: !at && Bt ? "NO_FLASH" : "INIT_TIMEOUT"
            })), pt._wD("SoundManager 2 " + ($t ? "failed to load" : "loaded") + " (" + ($t ? "Flash security/load error" : "OK") + ")", $t ? 2 : 1), $t || t ? (pt.useFlashBlock && pt.oMC && (pt.oMC.className = U() + " " + (null === pt.getMoviePercent() ? H.swfTimedout : H.swfError)), b({
                type: "ontimeout",
                error: i,
                ignoreInit: !0
            }), h("onload", !1), L(i), o = !1) : h("onload", !0), $t || (pt.waitForWindowLoad && !Mt ? (p("waitOnload"), st.add(e, "load", w)) : (pt.waitForWindowLoad && Mt && p("docLoaded"), w())), o
        }, u = function() {
            var e, i = pt.setupOptions;
            for(e in i) i.hasOwnProperty(e) && (pt[e] === t ? pt[e] = i[e] : pt[e] !== i[e] && (pt.setupOptions[e] = pt[e]))
        }, d = function() {
            function t() {
                st.remove(e, "load", pt.beginDelayedInit)
            }
            if(xt) return p("didInit"), !1;
            if(pt.html5Only) return xt || (t(), pt.enabled = !0, f()), !0;
            x();
            try {
                mt._externalInterfaceTest(!1), R(!0, pt.flashPollingInterval || (pt.useHighPerformance ? 10 : 50)), pt.debugMode || mt._disableDebug(), pt.enabled = !0, h("jstoflash", !0), pt.html5Only || st.add(e, "unload", l)
            } catch(i) {
                return pt._wD("js/flash exception: " + ("" + i)), h("jstoflash", !1), L({
                    type: "JS_TO_FLASH_EXCEPTION",
                    fatal: !0
                }), F(!0), f(), !1
            }
            return f(), t(), !0
        }, M = function() {
            return E ? !1 : (E = !0, u(), A(), function() {
                var i = "sm2-usehtml5audio=",
                    n = "sm2-preferflash=",
                    o = null,
                    s = null,
                    r = e.console !== t && "function" == typeof console.log,
                    a = wt.toLowerCase(); - 1 !== a.indexOf(i) && (o = "1" === a.charAt(a.indexOf(i) + i.length), r && console.log((o ? "Enabling " : "Disabling ") + "useHTML5Audio via URL parameter"), pt.setup({
                    useHTML5Audio: o
                })), -1 !== a.indexOf(n) && (s = "1" === a.charAt(a.indexOf(n) + n.length), r && console.log((s ? "Enabling " : "Disabling ") + "preferFlash via URL parameter"), pt.setup({
                    preferFlash: s
                }))
            }(), !at && pt.hasHTML5 && (pt._wD("SoundManager: No Flash detected" + (pt.useHTML5Audio ? ". Trying HTML5-only mode." : ", enabling HTML5."), 1), pt.setup({
                useHTML5Audio: !0,
                preferFlash: !1
            })), ot(), pt.html5.usingFlash = J(), Bt = pt.html5.usingFlash, !at && Bt && (Nt.push(C.needFlash), pt.setup({
                flashLoadTimeout: 1
            })), _t.removeEventListener && _t.removeEventListener("DOMContentLoaded", M, !1), x(), !0)
        }, nt = function() {
            return "complete" === _t.readyState && (M(), _t.detachEvent("onreadystatechange", nt)), !0
        }, O = function() {
            Mt = !0, st.remove(e, "load", O)
        }, $ = function() {
            Xt && ((!pt.setupOptions.useHTML5Audio || pt.setupOptions.preferFlash) && Nt.push(C.mobileUA), pt.setupOptions.useHTML5Audio = !0, pt.setupOptions.preferFlash = !1, (Ht || Vt && !bt.match(/android\s2\.3/i)) && (Nt.push(C.globalHTML5), Ht && (pt.ignoreFlash = !0), Ut = !0))
        }, $(), lt(), st.add(e, "focus", T), st.add(e, "load", _), st.add(e, "load", O), _t.addEventListener ? _t.addEventListener("DOMContentLoaded", M, !1) : _t.attachEvent ? _t.attachEvent("onreadystatechange", nt) : (h("onload", !1), L({
            type: "NO_DOM2_EVENTS",
            fatal: !0
        }))
    }
    var n = null;
    void 0 !== e.SM2_DEFER && SM2_DEFER || (n = new i), e.SoundManager = i, e.soundManager = n
}(window), define("soundmanager", function(e) {
    return function() {
        var t;
        return t || e.soundManager
    }
}(this)), function(e, t, i) {
    function n(e, i) {
        var n, o = t.createElement(e || "div");
        for(n in i) o[n] = i[n];
        return o
    }
    function o(e) {
        for(var t = 1, i = arguments.length; i > t; t++) e.appendChild(arguments[t]);
        return e
    }
    function s(e, t, i, n) {
        var o = ["opacity", t, ~~ (100 * e), i, n].join("-"),
            s = .01 + 100 * (i / n),
            r = Math.max(1 - (1 - e) / t * (100 - s), e),
            a = d.substring(0, d.indexOf("Animation")).toLowerCase(),
            l = a && "-" + a + "-" || "";
        return h[o] || (p.insertRule("@" + l + "keyframes " + o + "{" + "0%{opacity:" + r + "}" + s + "%{opacity:" + e + "}" + (s + .01) + "%{opacity:1}" + (s + t) % 100 + "%{opacity:" + e + "}" + "100%{opacity:" + r + "}" + "}", 0), h[o] = 1), o
    }
    function r(e, t) {
        var n, o, s = e.style;
        if(s[t] !== i) return t;
        for(t = t.charAt(0).toUpperCase() + t.slice(1), o = 0; c.length > o; o++) if(n = c[o] + t, s[n] !== i) return n
    }
    function a(e, t) {
        for(var i in t) e.style[r(e, i) || i] = t[i];
        return e
    }
    function l(e) {
        for(var t = 1; arguments.length > t; t++) {
            var n = arguments[t];
            for(var o in n) e[o] === i && (e[o] = n[o])
        }
        return e
    }
    function u(e) {
        for(var t = {
            x: e.offsetLeft,
            y: e.offsetTop
        }; e = e.offsetParent;) t.x += e.offsetLeft, t.y += e.offsetTop;
        return t
    }
    var d, c = ["webkit", "Moz", "ms", "O"],
        h = {},
        p = function() {
            var e = n("style");
            return o(t.getElementsByTagName("head")[0], e), e.sheet || e.styleSheet
        }(),
        f = {
            lines: 12,
            length: 7,
            width: 5,
            radius: 10,
            rotate: 0,
            color: "#000",
            speed: 1,
            trail: 100,
            opacity: .25,
            fps: 20,
            zIndex: 2e9,
            className: "spinner",
            top: "auto",
            left: "auto"
        },
        m = function g(e) {
            return this.spin ? (this.opts = l(e || {}, g.defaults, f), void 0) : new g(e)
        };
    m.defaults = {}, l(m.prototype, {
        spin: function(e) {
            this.stop();
            var t, i, o = this,
                s = o.opts,
                r = o.el = a(n(0, {
                    className: s.className
                }), {
                    position: "relative",
                    zIndex: s.zIndex
                }),
                l = s.radius + s.length + s.width;
            if(e && (e.insertBefore(r, e.firstChild || null), i = u(e), t = u(r), a(r, {
                left: ("auto" == s.left ? i.x - t.x + (e.offsetWidth >> 1) : s.left + l) + "px",
                top: ("auto" == s.top ? i.y - t.y + (e.offsetHeight >> 1) : s.top + l) + "px"
            })), r.setAttribute("aria-role", "progressbar"), o.lines(r, o.opts), !d) {
                var c = 0,
                    h = s.fps,
                    p = h / s.speed,
                    f = (1 - s.opacity) / (p * s.trail / 100),
                    m = p / s.lines;
                !
                function g() {
                    c++;
                    for(var e = s.lines; e; e--) {
                        var t = Math.max(1 - (c + e * m) % p * f, s.opacity);
                        o.opacity(r, s.lines - e, t, s)
                    }
                    o.timeout = o.el && setTimeout(g, ~~ (1e3 / h))
                }()
            }
            return o
        },
        stop: function() {
            var e = this.el;
            return e && (clearTimeout(this.timeout), e.parentNode && e.parentNode.removeChild(e), this.el = i), this
        },
        lines: function(e, t) {
            function i(e, i) {
                return a(n(), {
                    position: "absolute",
                    width: t.length + t.width + "px",
                    height: t.width + "px",
                    background: e,
                    boxShadow: i,
                    transformOrigin: "left",
                    transform: "rotate(" + ~~ (360 / t.lines * l + t.rotate) + "deg) translate(" + t.radius + "px" + ",0)",
                    borderRadius: (t.width >> 1) + "px"
                })
            }
            for(var r, l = 0; t.lines > l; l++) r = a(n(), {
                position: "absolute",
                top: 1 + ~ (t.width / 2) + "px",
                transform: t.hwaccel ? "translate3d(0,0,0)" : "",
                opacity: t.opacity,
                animation: d && s(t.opacity, t.trail, l, t.lines) + " " + 1 / t.speed + "s linear infinite"
            }), t.shadow && o(r, a(i("#000", "0 0 4px #000"), {
                top: "2px"
            })), o(e, o(r, i(t.color, "0 0 1px rgba(0,0,0,.1)")));
            return e
        },
        opacity: function(e, t, i) {
            e.childNodes.length > t && (e.childNodes[t].style.opacity = i)
        }
    }), !
    function() {
        function e(e, t) {
            return n("<" + e + ' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">', t)
        }
        var t = a(n("group"), {
            behavior: "url(#default#VML)"
        });
        !r(t, "transform") && t.adj ? (p.addRule(".spin-vml", "behavior:url(#default#VML)"), m.prototype.lines = function(t, i) {
            function n() {
                return a(e("group", {
                    coordsize: u + " " + u,
                    coordorigin: -l + " " + -l
                }), {
                    width: u,
                    height: u
                })
            }
            function s(t, s, r) {
                o(c, o(a(n(), {
                    rotation: 360 / i.lines * t + "deg",
                    left: ~~s
                }), o(a(e("roundrect", {
                    arcsize: 1
                }), {
                    width: l,
                    height: i.width,
                    left: i.radius,
                    top: -i.width >> 1,
                    filter: r
                }), e("fill", {
                    color: i.color,
                    opacity: i.opacity
                }), e("stroke", {
                    opacity: 0
                }))))
            }
            var r, l = i.length + i.width,
                u = 2 * l,
                d = 2 * -(i.width + i.length) + "px",
                c = a(n(), {
                    position: "absolute",
                    top: d,
                    left: d
                });
            if(i.shadow) for(r = 1; i.lines >= r; r++) s(r, -2, "progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)");
            for(r = 1; i.lines >= r; r++) s(r);
            return o(t, c)
        }, m.prototype.opacity = function(e, t, i, n) {
            var o = e.firstChild;
            n = n.shadow && n.lines || 0, o && o.childNodes.length > t + n && (o = o.childNodes[t + n], o = o && o.firstChild, o = o && o.firstChild, o && (o.opacity = i))
        }) : d = r(t, "animation")
    }(), e.Spinner = m
}(window, document), define("../common/js/spin.min", function() {}), function() {
    for(var e = 0, t = ["ms", "moz", "webkit", "o"], i = 0; t.length > i && !window.requestAnimationFrame; ++i) window.requestAnimationFrame = window[t[i] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[t[i] + "CancelAnimationFrame"] || window[t[i] + "CancelRequestAnimationFrame"];
    window.requestAnimationFrame || (window.requestAnimationFrame = function(t) {
        var i = (new Date).getTime(),
            n = Math.max(0, 16 - (i - e)),
            o = window.setTimeout(function() {
                t(i + n)
            }, n);
        return e = i + n, o
    }), window.cancelAnimationFrame || (window.cancelAnimationFrame = function(e) {
        clearTimeout(e)
    })
}(), define("blackswan/requestAnimationFrame", function() {});
var util = function() {
        var e = function() {
                function e(e, t) {
                    return e.height && e.width ? (t.resolve(), !0) : !1
                }
                function t(e, t, n) {
                    var o = $(e);
                    for(var s in t) if("style" == s) {
                        var r = t[s];
                        for(var a in r) o.css(a, r[a])
                    } else if("data" == s) {
                        var l = t[s];
                        $.data(e, l)
                    } else if("event" == s) i(e, t[s], n);
                    else if("cssClass" == s || "className" == s) for(var u = t[s].split(" "), d = u.length, c = 0; d > c; c++) o.addClass(u[c]);
                    else o.attr(s, t[s])
                }
                function i(e, t, i) {
                    if("object" != $.type(t)) return LOG("WARNING: 'events' " + (t + "") + " is not a dict"), void 0;
                    for(var o in t) {
                        var s = t[o];
                        if("string" == $.type(s)) {
                            if(!i) {
                                LOG("WARNING: no owner provided for event handler '" + s + "'");
                                continue
                            }
                            var r = i[s];
                            if(!r) {
                                LOG("WARNING: no event handler " + (i + "") + "." + s);
                                continue
                            }
                            s = r
                        }
                        s && (window.DEBUG_MODE || (s = n.eventHandlerDecorator(s)), $(e).on(o, s))
                    }
                }
                var n = this,
                    o = {
                        lines: 13,
                        length: 10,
                        width: 3,
                        radius: 13,
                        color: "#FFF",
                        shadow: !0
                    };
                this.endsWith = function(e, t) {
                    return -1 !== e.indexOf(t, e.length - t.length)
                }, this.stripTrailingSlash = function(e) {
                    return "/" === e[e.length - 1] && (e = e.substr(0, e.length - 1)), e
                }, this.strip = function(e, t) {
                    if(void 0 === t) return $.trim(e);
                    if("" === t) return e;
                    t = t.replace("\\", "\\\\");
                    var i = RegExp("^[" + t + "]+|[" + t + "]+$", "g");
                    return e.replace(i, "")
                }, this.alphabetize = function(e, t) {
                    return e.sort(function(e, i) {
                        var n, o;
                        return t ? (n = e[t].toLowerCase(), o = i[t].toLowerCase()) : (n = e.toLowerCase(), o = i.toLowerCase()), o > n ? -1 : n > o ? 1 : 0
                    }), e
                }, this.domify = function(e) {
                    var t = $.parseHTML(e);
                    if(!t) return document.createDocumentFragment();
                    var i = t.length;
                    if(i > 1) {
                        for(var n = document.createDocumentFragment(), o = 0; i > o; o++) n.appendChild(t[o]);
                        return n
                    }
                    return 1 === i ? t[0] : void 0
                }, this.isDOMNode = function(e) {
                    return "object" == typeof Node ? e instanceof Node : e && "object" == typeof e && "number" == typeof e.nodeType && "string" == typeof e.nodeName
                }, this.createElement = function(e, i, n) {
                    var o = e.search(/[^#]#\w/); - 1 != o && (o += 1);
                    for(var s = [
                        [0, "tag"],
                        [e.indexOf("."), "className", "."],
                        [o, "id", "#"],
                        [e.indexOf("##"), "idd", "##"]
                    ].sort(function(e, t) {
                        return e[0] - t[0]
                    }), r = {}, a = s.length, l = 0; a > l; l++) {
                        var u = s[l][0];
                        if(!(0 > u)) {
                            var d = s[l][1];
                            if(l == a - 1) var c = e.length;
                            else var c = s[l + 1][0];
                            r[d] = e.substring(u, c), "tag" != d && (r[d] = r[d].split(s[l][2]).slice(1))
                        }
                    }
                    var h = document.createElement(r.tag);
                    if("className" in r && (h.className = r.className.join(" ")), "id" in r && (h.id = r.id[0]), "idd" in r && n) for(var a = r.idd.length, l = 0; a > l; l++) n[r.idd[l]] = h;
                    return i && t(h, i, n), h
                }, this.buildTree = function(e, t) {
                    if(this.isDOMNode(e)) return e;
                    var i = $.type(e);
                    if("string" == i || "number" == i) return document.createTextNode(e + "");
                    if("array" != i) return e;
                    var o, s, r, a = e[0],
                        l = $.type(a);
                    if("string" === l || "function" === l ? (s = e.slice(1), "object" != $.type(s[0]) || this.isDOMNode(s[0]) || (o = s[0], s = s.slice(1))) : (r = document.createDocumentFragment(), s = e), "function" === l) {
                        var u = new a(o);
                        u.render(t, s), r = u.node
                    } else {
                        "string" == l && (r = this.createElement(a, o, t), "a" != a.toLowerCase() || r.href || (r.href = "#"));
                        for(var d = 0, c = s.length; c > d; d++) null != s[d] && void 0 != s[d] && r.appendChild(n.buildTree(s[d], t));
                        "string" == l && "input" == a.toLowerCase() && n.setupPlaceholders(r)
                    }
                    return r
                }, this.createImageWithLoader = function(t) {
                    var i = $.Deferred(),
                        o = new Image;
                    return o.onload = function() {
                        n.retry(null, e)(o, i)
                    }, o.onerror = function() {
                        i.reject()
                    }, o.src = t, [o, i]
                }, this.detectIEVersion = function() {
                    var e = navigator.userAgent,
                        t = RegExp("MSIE ([0-9]{1,}[\\.0-9]{0,})");
                    return null !== t.exec(e) ? parseFloat(RegExp.$1) : void 0
                }, this.transitionEnd = function() {
                    var e = document.createElement("fakeelement"),
                        t = {
                            transition: "transitionend",
                            OTransition: "otransitionend",
                            MSTransition: "msTransitionEnd",
                            MozTransition: "transitionend",
                            WebkitTransition: "webkitTransitionEnd"
                        };
                    for(var i in t) if(void 0 !== e.style[i]) return t[i]
                }(), this.eventHandlerDecorator = function(e) {
                    return function() {
                        try {
                            return e.apply(this, arguments)
                        } catch(t) {
                            LOG("Exception in event handler: " + (t + ""))
                        }
                        return !1
                    }
                }, this.now = function() {
                    return(new Date).getTime()
                }, this.nowStr = function() {
                    return(new Date + "").substr(16, 8)
                }, this.typeOf = function(e) {
                    if(null === e) return "null";
                    if(e.nodeName) {
                        if(1 == e.nodeType) return "element";
                        if(3 == e.nodeType) return /\S/.test(e.nodeValue) ? "textnode" : "whitespace"
                    } else if("number" == typeof e.length && e.callee) return "arguments";
                    return $.type(e)
                }, this.commafy = function(e) {
                    e += "";
                    for(var t = e.split("."), i = t[0], n = t.length > 1 ? "." + t[1] : "", o = /(\d+)(\d{3})/; o.test(i);) i = i.replace(o, "$1,$2");
                    return i + n
                }, this.asciify = function(e) {
                    return e.replace(/[\u00E0-\u00E5]/g, "a").replace(/[\u00E8-\u00EB\u0112-\u011B]/g, "e").replace(/[\u00EC-\u00EF]/g, "i").replace(/[\u00F1\u0143-\u014B]/g, "n").replace(/[\u00F2-\u00F6\u00F8\u014C-\u0151]/g, "o").replace(/[\u00D9-\u00DC\u00F9-\u00FC]/, "u").replace(/[\u00DD\u00FD\u00FF]/, "y")
                }, this.normalize = function(e) {
                    return e.replace(/\0.*/, "")
                }, this.stripComboDiacritics = function(e) {
                    return e.replace(/[\u0300-\u036F\u0483-\u0489\u1DC0-\u1DFF\u20D0-\u20FF\uFE20-\uFE2F]/g, "")
                }, this.cleanText = function(e) {
                    return n.asciify(n.normalize(n.stripComboDiacritics(e)))
                }, this.messageFilter = function(e) {
                    return n.emojify(n.linkify(n.safeText(n.memeify(e))))
                }, this.linkify = function(e) {
                    var t = /(\b(https?|ftp):\/\/[\-A-Z0-9+&@#\/%?=~_|!:,.;'\(\)]*[\-A-Z0-9+&@#\/%=~_\(\)|])/gim,
                        i = e.replace(t, '<a href="$1" target="_blank">$1</a>'),
                        n = /(\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,6})/gim;
                    return i = i.replace(n, '<a href="mailto:$1">$1</a>')
                }, this.emojify = function(e) {
                    e = e.replace(/:\+1:/g, ":thumbsup:");
                    var t = /:([\w\d\-_]+):/g,
                        i = e.match(t);
                    if(i) for(var n = 0, o = i.length; o > n; n++) {
                        var s = this.emojiToHtml(i[n]);
                        s && (e = e.replace(i[n], s))
                    }
                    var r = {
                        ":man_with_turban:": /@:\)/g,
                        ":imp:": /&gt;:\(/g,
                        ":smiling_imp:": /&gt;:\)/g,
                        ":smile:": /:-?\)/g,
                        ":unamused:": /:-?\(/g,
                        ":wink:": /;-?\)/g,
                        ":stuck_out_tongue:": /:-?[Pp]/g,
                        ":heart:": /&lt;3/g
                    };
                    for(var a in r) {
                        var l = r[a];
                        l.test(e) && (e = e.replace(l, this.emojiToHtml(a)))
                    }
                    return e
                }, this.emojiToHtml = function(e) {
                    var t = e.replace(/:/g, "").toLowerCase();
                    return t in s ? "<span title='" + t + "' class='emoji emoji-" + t + "'></span>" : void 0
                }, this.emojiToTree = function(e) {
                    var t = e.replace(/:/g, "").toLowerCase();
                    return t in s ? ["span.emoji.emoji-" + t,
                    {
                        title: t
                    }] : void 0
                }, this.emojiTypeahead = function(e, t) {
                    var i = [],
                        n = 0,
                        o = e.length;
                    for(name in s) if(s.hasOwnProperty(name) && name.substring(0, o) === e && (i[n] = name, n++, n >= t)) break;
                    if(t > n) for(name in s) if(s.hasOwnProperty(name) && -1 !== name.indexOf(e) && -1 === i.indexOf(name) && (i[n] = name, n++, n >= t)) break;
                    return i
                }, this.memeify = function(e) {
                    return e && e.indexOf("/") > -1 ? e.replace(/\/seriousface/g, "\u0ca0_\u0ca0").replace(/\/monocle/g, "\u0ca0_\u0cb0\u0cc3").replace(/\/tableflip/g, "(\u256f\u00b0\u25a1\u00b0)\u256f\ufe35 \u253b\u2501\u253b").replace(/\/tablefix/g, "\u252c\u2500\u252c\u30ce( \u00ba _ \u00ba\u30ce)").replace(/\/whatever/g, "\u00af\\_(\u30c4)_/\u00af").replace(/\/danceparty/g, "\u266a\u250f(\u30fbo\uff65)\u251b\u266a\u2517 ( \uff65o\uff65) \u2513\u266a").replace(/\/koala/g, "\u0295 \u2022\u1d25\u2022\u0294").replace(/\/love/g, "\u2665\u203f\u2665").replace(/\/nano/g, ">: |") : e
                }, this.safeText = function(e) {
                    return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
                }, this.brText = function(e) {
                    return e.replace(/\n$/, "<br/>&nbsp;").replace(/\n/g, "<br/>")
                }, this.title = function(e) {
                    return e.replace(/(^|\s)([a-z])/g, function(e, t, i) {
                        return t + i.toUpperCase()
                    })
                }, this.spaceToNbsps = function(e) {
                    return e.replace(/ {2,}/g, function(e) {
                        for(var t = "", i = 0, n = e.length - 1; n > i; i++) t += "&nbsp;";
                        return t + " "
                    })
                }, this.setupPlaceholders = function(e) {
                    if(!$.browser.webkit) {
                        var t = $(e),
                            i = t.attr("placeholder");
                        i && (t.addClass("placeholder"), t.attr("value", i), t.focus(function() {
                            t.val() == i && (t.removeClass("placeholder"), t.attr("value", ""))
                        }), t.blur(function() {
                            "" === $.trim(t.val()) && (t.addClass("placeholder"), t.attr("value", i))
                        }))
                    }
                }, this.LWKTya = function(e) {
                    if(e) for(var t in e) "function" == typeof e[t] && (e[t].toString = function() {})
                }, this.safariVersion = function() {
                    var e = /Version\/((\d+\.?)+) Safari\//.exec(navigator.userAgent);
                    return e ? e[1] : void 0
                }, this.versionNumberCompare = function(e, t) {
                    for(var i, n, o = [e, t], s = 0; 2 > s; s++) {
                        if(i = o[s], n = $.type(i), "string" === n) i = $.map(i.split("."), function(e) {
                            return parseInt(e)
                        });
                        else if("array" === n) i = $.map(i, function(e) {
                            return parseInt(e)
                        });
                        else {
                            if("number" !== n) throw "invalid version format";
                            i = [i]
                        }
                        o[s] = i
                    }
                    for(var r, a, l, s = 0, u = Math.max(o[0].length, o[1].length); u > s;) {
                        if(r = o[0][s] || 0, a = o[1][s] || 0, l = r - a, 0 !== l) return l;
                        s++
                    }
                    return 0
                }, this.fullCanvasCompositionSupport = function() {
                    var e = util.safariVersion();
                    return void 0 !== e && 0 > util.versionNumberCompare(e, 6) ? !1 : !0
                }, this.webkitMaskSupport = function() {
                    if(!$.browser.webkit) return !1;
                    var e = util.safariVersion();
                    return void 0 !== e && 0 >= util.versionNumberCompare(e, "5.1.2") ? !1 : !0
                }, this.prettyTime = function(e) {
                    var t = Math.floor(e / 60);
                    if(e %= 60, e = 10 > e ? "0" + e : e, 60 > t) return t + ":" + e;
                    var i = Math.floor(t / 60);
                    return t %= 60, t = 10 > t ? "0" + t : t, i + ":" + t + ":" + e
                }, this.prettyDate = function(e) {
                    var t = new Date(1e3 * e);
                    return t.getMonth() + 1 + "." + t.getDate() + "." + t.getFullYear() % 100
                }, this.prettyTimeDelta = function(e) {
                    var t = [
                        [120, "1 minute ago", "1 minute from now"],
                        [3600, "minutes", 60],
                        [7200, "1 hour ago", "1 hour from now"],
                        [86400, "hours", 3600],
                        [172800, "yesterday", "tomorrow"],
                        [604800, "days", 86400],
                        [1209600, "last week", "next week"],
                        [2419200, "weeks", 604800],
                        [4838400, "last month", "next month"],
                        [29030400, "months", 2419200],
                        [58060800, "last year", "next year"],
                        [290304e4, "years", 29030400],
                        [580608e4, "last century", "next century"],
                        [580608e5, "centuries", 290304e4]
                    ],
                        i = n.now() / 1e3 - e,
                        o = "ago",
                        s = 1;
                    if(0 > i && (i = -i, o = "from now", s = 2), 60 > i) return "just now";
                    for(var r = 0; t.length > r; r++) {
                        var a = t[r];
                        if(a[0] > i) return "string" == typeof a[2] ? a[s] : Math.floor(i / a[2]) + " " + a[1] + " " + o
                    }
                    return e
                }, this.notEmpty = function() {
                    for(var e = arguments.length, t = 0; e > t; t++) {
                        var i = arguments[t];
                        if(null === i || void 0 === i) return !1;
                        if("object" == $.type(i)) {
                            var n = !0;
                            for(var o in i) if(i.hasOwnProperty(o)) {
                                n = !1;
                                break
                            }
                            if(n) return !1
                        } else if("array" == $.type(i) && 0 === i.length) return !1
                    }
                    return !0
                }, this.mergeDicts = function() {
                    for(var e = {}, t = 0; arguments.length > t; t++) {
                        var i = arguments[t];
                        for(var n in i) e[n] = i[n]
                    }
                    return e
                }, this.getSetting = function(e, t) {
                    var i = $.cookie("setting_" + e);
                    return t || n.setSetting(e, i), i
                }, this.setSetting = function(e, t, i) {
                    $.cookie("setting_" + e, t, {
                        path: "/",
                        expires: i || 365
                    })
                }, this.centsToDollarString = function(e) {
                    var t = e + "",
                        i = t.length;
                    return 1 == i ? "$0.0" + t : "$" + (t.substring(0, i - 2) || "0") + "." + t.substring(i - 2)
                }, this.validators = {
                    email: function(e) {
                        var t = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                        return t.test(e) ? {
                            valid: !0
                        } : {
                            valid: !1,
                            err: "Please enter a valid email address"
                        }
                    },
                    password: function(e) {
                        return e.length >= 6 ? {
                            valid: !0
                        } : {
                            valid: !1,
                            err: "Your password must be at least 6 characters long"
                        }
                    },
                    makePasswordConfirm: function(e) {
                        return function(t) {
                            var i = $(e).val();
                            return t != i ? {
                                valid: !1,
                                err: "Your passwords must match"
                            } : {
                                valid: !0
                            }
                        }
                    }
                }, this.makeSpinner = function(e, t) {
                    var i = new Spinner($.extend({}, o, t));
                    return i.spin(e), i
                }, this.retry = function(e, t, i, n) {
                    var o = i || 10;
                    n = n || 1e3;
                    var s = function() {
                            var i = Array.prototype.slice.call(arguments),
                                r = t.apply(e, i);
                            r === !1 && o >= 0 && (o--, window.setTimeout(function() {
                                s.apply(e, i)
                            }, n))
                        };
                    return s
                }, this.delay = function(e, t, i) {
                    var n = null,
                        o = function() {
                            n && window.clearTimeout(n);
                            var o = Array.prototype.slice.call(arguments);
                            n = window.setTimeout(function() {
                                n = null, t.apply(e, o)
                            }, i)
                        };
                    return o.cancel = function() {
                        window.clearTimeout(n), n = null
                    }, o
                }, this.rateLimit = function(e, t, i) {
                    var n = null,
                        o = null,
                        s = function() {
                            n || (n = window.setTimeout(function() {
                                n = null, t.apply(e, o)
                            }, i)), o = Array.prototype.slice.call(arguments)
                        };
                    return s.cancel = function() {
                        window.clearTimeout(n), n = null
                    }, s
                }, this.makeDrawer = function(e, t) {
                    var i = null,
                        n = null,
                        o = function() {
                            i || (i = window.requestAnimationFrame(function() {
                                i = null, t.apply(e, n)
                            })), n = Array.prototype.slice.call(arguments)
                        };
                    return o.cancel = function() {
                        window.cancelAnimationFrame(i), i = null
                    }, o
                }, this.prepApiData = function(e, t) {
                    return t || "undefined" == typeof turntable || (t = turntable.user), t !== void 0 && t.id && !e.userid && (e.userid = t.id, e.userauth = t.auth), e.client = "web", e.decache = (new Date).valueOf(), e
                }, this.apiGet = function(e, t, i, o, s) {
                    i || (i = this);
                    var r = n.prepareWebApiCall(e, o, s),
                        a = r.ajaxParams;
                    return e = r.obj, LOG(n.nowStr() + " Preparing API GET for " + a.url + ": " + JSON.stringify(e)), a.data = e, a.success = $.proxy(function(e) {
                        LOG("Received API GET: " + JSON.stringify(e)), $.proxy(t, this)(e)
                    }, i), $.ajax(a)
                }, this.apiPost = function(e, t, i, o, s) {
                    i || (i = this);
                    var r = n.prepareWebApiCall(e, o, s),
                        a = r.ajaxParams,
                        l = JSON.stringify(e);
                    return e = r.obj, LOG(n.nowStr() + " Preparing API POST for " + a.url + ": " + l), a.type = "POST", a.contentType = "application/json; charset=utf-8", a.data = l, a.success = $.proxy(function(e) {
                        LOG("Received API POST: " + JSON.stringify(e)), $.proxy(t, this)(e)
                    }, i), $.ajax(a)
                }, this.prepareWebApiCall = function(e, t, i) {
                    e = this.prepApiData(e, t);
                    var n = e.api;
                    delete e.api;
                    var o = "/api/" + n,
                        s = {},
                        r = !1;
                    return(i || "password" in e) && "https:" !== window.location.protocol && (o = "https://" + window.location.host + o, s.withCredentials = !0, r = !0), {
                        obj: e,
                        ajaxParams: {
                            url: o,
                            dataType: "json",
                            xhrFields: s,
                            crossDomain: r
                        }
                    }
                }, this.getUrlParam = function(e) {
                    var t = window.location.search.match("[?&]" + e + "=([^&#]*)");
                    return t && (t = t[1]), t
                }, this.hashString = function(e, t, i) {
                    if("string" != typeof e) throw "hashString only works with strings.";
                    for(var n = 0, o = 0; e.length > o; ++o) n += e.charCodeAt(o);
                    return n % (i - t + 1) + t
                }, this.parse = function(e) {
                    try {
                        return JSON.parse(e)
                    } catch(t) {
                        return {}
                    }
                }, this.errorCode = function(e) {
                    return this.parse(e).error
                }, this.errorMsg = function(e) {
                    return this.parse(e).errmsg
                }, this.albumProxy = function(e, t) {
                    if(-1 !== e.indexOf("images.mndigital.com") || -1 !== e.indexOf("images.musicnet.com")) {
                        var i = e.split("albums");
                        if(2 === i.length) {
                            if("piki" === t) return "https://piki.fm/static/albums" + i[1];
                            if("turntable" === t) return "https://turntable.fm/roommanager_assets/albums" + i[1]
                        }
                    }
                    return e
                };
                var s = {
                    "-1": null,
                    "+1": null,
                    100: null,
                    109: null,
                    1234: null,
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
                }
            };
        return new e
    }();
define("util", ["config", "../common/js/spin.min", "blackswan/requestAnimationFrame"], function(e) {
    return function() {
        var t;
        return t || e.util
    }
}(this)), define("class", [], function() {
    var initializing = !1,
        fnTest = /xyz/.test(function() {}) ? /\b_super\b/ : /.*/,
        Class = function() {};
    return Class.extend = function(prop) {
        var _super = this.prototype;
        initializing = !0;
        var prototype = new this;
        initializing = !1;
        var className = "Class";
        for(var name in prop) if("_name" !== name) prototype[name] = "function" == typeof prop[name] && "function" == typeof _super[name] && fnTest.test(prop[name]) ?
        function(e, t) {
            return function() {
                var i = this._super;
                this._super = _super[e];
                var n = t.apply(this, arguments);
                return this._super = i, n
            }
        }(name, prop[name]) : prop[name];
        else {
            var potentialClassName = prop[name];
            if(potentialClassName = potentialClassName.replace(/[^\w$]/g, ""), 0 >= potentialClassName.length) continue;
            /^[a-zA-Z_$].*$/.test(potentialClassName) || (potentialClassName = "Class" + potentialClassName), className = potentialClassName
        }
        return eval("var " + className + " = function() { if ( !initializing && this.init ) this.init.apply(this, arguments); }; var Class = " + className), Class.prototype = prototype, Class.constructor = Class, Class.extend = arguments.callee, Class
    }, Class
}), define("ttnode", ["require", "class", "util"], function(e) {
    var t = e("class"),
        i = e("util"),
        n = t.extend({
            attributes: {
                idd: "ttnode"
            },
            init: function(e) {
                this.attributes = {};
                for(var t = [], i = Object.getPrototypeOf(this); void 0 != i.attributes;) t.push(i), i = Object.getPrototypeOf(i);
                for(var n = t.length; n--;) $.extend(this.attributes, t[n].attributes);
                this.unusedAttributes = {};
                for(attribute in e) e.hasOwnProperty(attribute) && (attribute in this.attributes ? this.attributes[attribute] = e[attribute] : this.unusedAttributes[attribute] = e[attribute])
            },
            layout: null,
            node: null,
            build: function(e, t, n) {
                if("array" != $.type(e)) return i.buildTree(e, t);
                var o = e[0],
                    s = {},
                    r = e.slice(1);
                "object" == $.type(r[0]) && (s = r[0], r = r.slice(1));
                for(var a = r.length, l = [], u = 0; a > u; u++) if(null != r[u]) if("function" == $.type(r[u]) && "children" == r[u].type) {
                    if(null != n) for(var d = r[u](n), c = d.length, h = 0; c > h; h++) {
                        var p = d[h];
                        l.push(i.buildTree(p, t))
                    }
                } else l.push(this.build(r[u], t, n));
                if("function" == $.type(o)) {
                    var f = new o(s);
                    return f.render(this, l), f.node
                }
                var m = i.buildTree([o, s], this);
                a = l.length;
                for(var u = 0; a > u; u++) m.appendChild(l[u]);
                return m
            },
            findAttributeTarget: function(e) {
                if("array" != $.type(e)) return null;
                var t = e.slice(1);
                if("object" == $.type(t[0])) {
                    var n = t[0];
                    if("attributeTarget" in n) return e;
                    t = t.slice(1)
                }
                for(var o = t.length, s = null, r = 0; o > r; r++) if(i.notEmpty(t[r]) && (s = this.findAttributeTarget(t[r]))) return s;
                return null
            },
            render: function(e, t) {
                var i = this.layout(),
                    n = this.findAttributeTarget(i);
                if(n || (n = i), "object" == $.type(n[1]) ? $.extend(n[1], this.unusedAttributes) : n.splice(1, 0, this.unusedAttributes), this.node = this.build(i, e, t), $.data(this.node, "object", this), this.$node = $(this.node), null != this.attributes.idd && e) if("array" == $.type(e)) for(var o = e.length, s = 0; o > s; s++) e[s][this.attributes.idd] = this;
                else e[this.attributes.idd] = this
            }
        });
    return n.ChildSlice = function(e, t) {
        var i = function(i) {
                return i.slice(e, t)
            };
        return i.type = "children", i
    }, n.Children = n.ChildSlice(), n
}), define("overlay", ["require", "util", "ttnode"], function(e) {
    var t = e("util"),
        i = e("ttnode"),
        n = i.extend(function() {
            var e, i, n, o, s = !1;
            return {
                init: function(r) {
                    this._super(r), s || (e = $(window), i = $("html"), n = $("#maindiv"), o = $(t.buildTree(["div#overlay.overlay"])).appendTo(n), s = !0), this.$window = e, this.$html = i, this.$maindiv = n, this.$overlay = o, this.show = $.proxy(this.show, this), this.hide = $.proxy(this.hide, this)
                },
                _show: function() {
                    var e = $.Deferred(),
                        i = function() {
                            e.resolve()
                        };
                    return this.$overlay.css("opacity", 1).one(t.transitionEnd, i), window.setTimeout(i, 600), e
                },
                _hide: function() {
                    var e = $.Deferred(),
                        i = function() {
                            e.resolve()
                        };
                    return this.$overlay.css("opacity", 0).one(t.transitionEnd, i), window.setTimeout(i, 600), e
                },
                hide: function() {
                    return this.visible ? this._hide().done($.proxy(this.cleanup, this)) : void 0
                },
                cleanup: function() {},
                overlayState: {
                    visible: !1
                }
            }
        }()),
        o = n.extend({
            show: function() {
                return this.overlayState.visible ? void 0 : (this.visible = this.overlayState.visible = !0, this.$html.addClass("scrollable-overlay-mode"), this._show())
            },
            cleanup: function() {
                this.visible = this.overlayState.visible = !1, this.$html.removeClass("scrollable-overlay-mode")
            }
        }),
        s = n.extend({
            show: function() {
                if(!this.overlayState.visible) {
                    this.visible = this.overlayState.visible = !0, this.scrollTop = this.$window.scrollTop(), this.scrollLeft = this.$window.scrollLeft();
                    var e = $("body");
                    return this.$maindiv.outerHeight(!0) > this.$window.height() && e.css("overflow-y", "scroll"), this.$html.addClass("nonscrollable-overlay-mode"), this.$maindiv.css({
                        top: -this.scrollTop,
                        left: -this.scrollLeft
                    }), e.css({
                        "background-position": "50% -" + this.scrollTop + "px"
                    }).scrollTop(0), this._show()
                }
            },
            cleanup: function() {
                this.visible = this.overlayState.visible = !1, this.$html.removeClass("nonscrollable-overlay-mode"), this.$overlay.css("opacity", ""), this.$maindiv.css({
                    top: "",
                    left: ""
                }), $("body").css({
                    "background-position": "",
                    "overflow-y": ""
                }), this.$window.scrollTop(this.scrollTop), this.$window.scrollLeft(this.scrollLeft)
            }
        }),
        r = i.extend({
            attributes: {
                childNodes: [],
                nextCallback: null,
                backCallback: null,
                doneCallback: null,
                idd: "tourOverlay"
            },
            init: function(e) {
                this._super(e), this.currentNode = 0, this.overlay = new o, this.$overlay = this.overlay.$overlay, this.done = $.proxy(this.done, this)
            },
            layout: function() {
                return "array" == $.type(this.attributes.childNodes) && this.attributes.childNodes.length ? this.attributes.childNodes[this.currentNode] : ["div"]
            },
            render: function(e, t) {
                this._super(e, t), this.replaceNode()
            },
            show: function() {
                "array" == $.type(this.attributes.childNodes) && this.attributes.childNodes.length && (this.$closeButton = $(t.buildTree(["div.tour-close"])).on("click", $.proxy(this.done, this)), this.$overlay.append(this.$node).append(this.$closeButton), this.overlay.show())
            },
            replaceNode: function() {
                var e = t.buildTree(this.attributes.childNodes[this.currentNode]);
                this.$node.replaceWith(e), this.$node = $(e), this.attachEventHandlers();
                var i = $.data(e, "positionFunction");
                i && i(this.$node)
            },
            attachEventHandlers: function() {
                var e = this.$node.find(".start, .next"),
                    t = this.$node.find(".back"),
                    i = this.$node.find(".done, .ok");
                e && e.on("click", $.proxy(this.goNext, this)), t && t.on("click", $.proxy(this.goBack, this)), i && i.on("click", $.proxy(this.done, this))
            },
            goNext: function() {
                this.attributes.nextCallback && 0 == this.attributes.nextCallback() || this.currentNode + 1 < this.attributes.childNodes.length && (this.currentNode++, this.replaceNode())
            },
            goBack: function() {
                this.attributes.backCallback && 0 == this.attributes.backCallback() || this.currentNode && (this.currentNode--, this.replaceNode())
            },
            done: function() {
                this.attributes.doneCallback && 0 == this.attributes.doneCallback() || this.overlay.hide().done($.proxy(function() {
                    this.$node.remove(), this.$closeButton.remove()
                }, this))
            }
        });
    return {
        NonscrollableOverlay: s,
        ScrollableOverlay: o,
        TourOverlay: r
    }
}), define("transition-modal", ["require", "util"], function(e) {
    var t = e("util");
    $(function() {
        var e = $("#transition-overlay");
        e.length || (e = $(t.buildTree(["div#transition-overlay", ["div#transition-modal-container", ["div#transition-modal.modal"]]])).appendTo("#maindiv"));
        var i = e.find("#transition-modal"),
            n = {
                $overlay: e,
                $modal: i
            };
        n.transitionIn = function(e, i, o) {
            n.$modal.css({
                width: i,
                height: o
            }), n.$overlay.addClass("visible"), window.setTimeout(function() {
                t.makeSpinner(n.$overlay[0]), n.$overlay.css({
                    opacity: 1
                })
            }), window.setTimeout(n.notifyIn, 300)
        }, n.notifyIn = function() {
            n.$overlay.trigger("TransitionModal:visible").find(".spinner").addClass("visible")
        }, n.resize = function(e, t, i) {
            n.$overlay.find(".spinner").removeClass("visible"), n.$modal.css({
                width: t,
                height: i
            }), window.setTimeout(n.notifyResize, 300)
        }, n.notifyResize = function() {
            n.$overlay.trigger("TransitionModal:resized")
        }, n.transitionOut = function() {
            n.$overlay.css({
                opacity: 0
            }), window.setTimeout(n.cleanup, 300)
        }, n.cleanup = function() {
            n.$overlay.removeClass("visible").css({
                opacity: ""
            }).trigger("TransitionModal:invisible").find(".spinner").remove()
        };
        var o = $("#maindiv");
        o.on("TransitionModal:in", n.transitionIn).on("TransitionModal:resize", n.resize).on("TransitionModal:out", n.transitionOut)
    })
}), define("modal", ["require", "util", "overlay", "ttnode", "transition-modal"], function(e) {
    var t = e("util"),
        i = e("overlay"),
        n = e("ttnode");
    e("transition-modal");
    var o = n.extend(function() {
        var e = {
            nextModal: null,
            transitioning: !1,
            listenersSet: !1,
            overlay: null
        };
        return e.transitionOut = function() {
            if(e.previousModal._hide(), e.transitioning = !1, e.nextModal) {
                var t = e.nextModal;
                e.nextModal = null, t.show()
            }
        }, e.transitionDone = function() {
            e.showing = !1, e.overlay.$overlay.trigger("Modal:shown")
        }, {
            attributes: {
                idd: "modal",
                title: null,
                showCallback: null,
                closeCallback: null,
                showClose: !0,
                clickOut: !0
            },
            layout: function() {
                return ["div.modal", ["div.close-x"], ["h2.title", this.attributes.title], ["div.content-scroller", ["div.content", n.Children]]]
            },
            init: function(t) {
                this._super(t), e.listenersSet || (e.overlay = new i.NonscrollableOverlay, e.overlay.$window.on("TransitionModal:visible", e.transitionOut).on("TransitionModal:invisible", e.transitionDone), e.listenersSet = !0), this.resize = $.proxy(this.resize, this), this.close = $.proxy(this.close, this), this._hide = $.proxy(this._hide, this), this._show = $.proxy(this._show, this), this.show = $.proxy(this.show, this);
                var n = this.overlay = e.overlay;
                this.$overlay = n.$overlay, this.$window = n.$window, this.$html = n.$html, this.$maindiv = n.$maindiv
            },
            render: function(e, i) {
                this._super(e, i), this.attributes.width && this.$node.css("width", this.attributes.width), t.notEmpty(this.attributes.title) || this.$node.find(".title").remove(), this.attributes.showClose ? this.$node.find(".close-x").on("click", this.close) : this.$node.find(".close-x").remove(), this.$node.on("click", this.clickHandler), this.inDOM = !1
            },
            _hide: function() {
                var e = this.$node.parent();
                this.$node.detach(), e.remove()
            },
            hide: function(t) {
                var i = this.$overlay;
                if(i.off("click"), e.nextModal || t && t.showLoadingTransition) e.previousModal = this, e.transitioning = !0, i.trigger("TransitionModal:in", [this.$node.innerWidth(), this.$node.innerHeight()]);
                else {
                    e.hiding = !0;
                    var n = this.overlay.hide();
                    n.done($.proxy(function() {
                        this._hide(), e.hiding = !1, this.$window.off("resize", this.resize), i.trigger("Modal:hidden")
                    }, this), 300)
                }
            },
            close: function(e) {
                this.attributes.closeCallback && 0 == this.attributes.closeCallback() || this.$node.parent() && this.hide(e)
            },
            _show: function() {
                $(window).off("TransitionModal:resized"), this.$node.trigger("TransitionModal:out").parent().css({
                    visibility: "",
                    position: "",
                    left: ""
                }), this.$overlay.on("click", this.attributes.clickOut ? this.close : null)
            },
            show: function() {
                var i = this.$overlay;
                if(i.off("Modal:hidden", this.show), e.hiding) return i.on("Modal:hidden", this.show), void 0;
                var n = i.find(".modal");
                if(n.length && n[0] != this.node || e.transitioning) return e.nextModal = this, e.showing = !0, $(t.buildTree(["div.modal-container",
                {
                    style: {
                        display: "none",
                        visibility: "hidden",
                        position: "absolute",
                        left: "-9999px"
                    }
                }])).append(this.$node).appendTo(i), this.inDOM = !0, void 0;
                if($("#transition-overlay").hasClass("visible")) this.inDOM ? this.$node.parent().css({
                    display: ""
                }) : $(t.buildTree(["div.modal-container",
                {
                    style: {
                        visibility: "hidden",
                        position: "absolute",
                        left: "-9999px"
                    }
                }])).append(this.$node).appendTo(this.$overlay), i.trigger("TransitionModal:resize", [this.$node.innerWidth(), this.$node.innerHeight()]), $(window).on("TransitionModal:resized", this._show);
                else {
                    $(t.buildTree(["div.modal-container"])).append(this.$node).appendTo(this.$overlay), this.$window.on("resize", this.resize);
                    var i = this.$overlay;
                    i.css({
                        height: "",
                        display: ""
                    }).on("click", this.attributes.clickOut ? this.close : null);
                    var o = this.overlay.show();
                    o.done(function() {
                        i.trigger("Modal:shown")
                    })
                }
                this.resize(), this.attributes.showCallback && this.attributes.showCallback()
            },
            resize: function() {
                var e = this.$node.find(".title").height();
                this.$node.find(".content-scroller").css("max-height", window.innerHeight - 60 - e)
            },
            clickHandler: function(e) {
                e.stopPropagation()
            },
            showAlert: function(i, n) {
                if(e.showing) return this.$overlay.on("Modal:shown", $.proxy(function() {
                    this.$overlay.off("Modal:shown"), this.showAlert(i, n)
                }, this)), void 0;
                var o = $(t.buildTree(["div.alert." + n, ["div", i]]));
                o.css({
                    display: "block",
                    visibility: "hidden"
                }), this.$node.find(".content").prepend(o);
                var s = o.outerHeight(!0);
                o.css({
                    top: -s,
                    visibility: "visible",
                    opacity: 0
                }), o.addClass("transitioning"), window.setTimeout(function() {
                    o.css({
                        top: "0",
                        opacity: 1
                    })
                }), window.setTimeout($.proxy(this.hideAlert, this), 3e3)
            },
            hideAlert: function() {
                var e = this.$node.find("div.alert"),
                    t = e.outerHeight(!0);
                e && e.css({
                    top: -t,
                    opacity: 0
                }), window.setTimeout(function() {
                    e.remove()
                }, 500)
            }
        }
    }());
    return o
}), define("action-modal", ["require", "modal", "ttnode"], function(e) {
    var t = e("modal"),
        i = e("ttnode"),
        n = t.extend({
            attributes: {
                submitCallback: null,
                submitText: "OK",
                cancelCallback: null,
                cancelText: "Cancel",
                showCancel: !0,
                alterateText: "Close",
                showAlternate: !1
            },
            layout: function() {
                return ["div.modal", {
                    style: {
                        width: this.attributes.width
                    }
                }, ["div.close-x"], ["h2.title", this.attributes.title], ["div.content-scroller", ["div.content", i.Children, ["div.buttons", ["button.cancel"],
                    ["button.submit",
                    {
                        type: "submit"
                    }]
                ]]]]
            },
            render: function(e, t) {
                this._super(e, t), this.$node.find(".submit").text(this.attributes.submitText).on("click", $.proxy(this.submit, this)), this.attributes.showCancel ? this.$node.find(".cancel").text(this.attributes.cancelText).on("click", $.proxy(this.cancel, this)) : this.$node.find(".cancel").remove(), this.attributes.showAlternate && (this.$node.find(".submit").hide(), this.$node.find(".cancel").text(this.attributes.alterateText))
            },
            submit: function() {
                this.attributes.submitCallback && 0 == this.attributes.submitCallback() || this.close()
            },
            cancel: function() {
                this.attributes.cancelCallback && 0 == this.attributes.cancelCallback() || this.close()
            },
            revertAlternate: function() {
                1 == this.attributes.showAlternate && (this.$node.find(".submit").show(), this.$node.find(".cancel").text(this.attributes.cancelText), this.attributes.showAlternate = !1)
            },
            showAlternate: function() {
                0 == this.attributes.showAlternate && (this.$node.find("submit").hide(), this.$node.find(".cancel").text(this.attributes.alternateText), this.attributes.showAlternate = !0)
            }
        });
    return n
}), define("sticker", ["require", "util", "action-modal", "config"], function(e) {
    var t = e("util"),
        i = e("action-modal"),
        n = e("config"),
        o = {
            ZOOM_VIEW_RADIUS: 80,
            ZOOM_RATIO: .5,
            DJ_RATIO: .11,
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
            UNPURCHASED_STICKER_OPACITY: .5,
            $zoomView: null,
            context: null,
            tempCanvas: null,
            tempContext: null,
            hoverUserid: null,
            updateZoomCanvas: null,
            $boundingBox: null,
            stickerMap: {},
            stickersLoaded: !1,
            stickersLoad: null,
            stickerPlacements: {},
            images: {},
            imagesLoaded: !1,
            imagesLoad: null,
            numPlacements: 0
        };
    return o.init = function() {
        turntable.addEventListener("message", o.messageHandler), $(document).on("add_sticker_placements", o.addStickerPlacements), $(document).on("drawDjLaptop", o.drawDjStickerPlacements), o.cacheImages(), o.cacheStickers(), o.initZoomView()
    }, o.initZoomView = function() {
        var e = t.buildTree(o.layouts.zoomView);
        $("#maindiv").append(e), o.$zoomView = $(e);
        var i = $("#zoomCanvas")[0],
            n = o.ZOOM_VIEW_RADIUS;
        i.width = 2 * n, i.height = 2 * n;
        var s = i.getContext("2d");
        o.context = s, s.beginPath(), s.arc(n, n, n, 0, 2 * Math.PI, !1), s.clip(), o.tempCanvas = t.buildTree(["canvas",
        {
            width: o.LAPTOP_WIDTH + 2 * o.ZOOM_VIEW_RADIUS,
            height: o.LAPTOP_HEIGHT + 2 * o.ZOOM_VIEW_RADIUS
        }]), o.tempContext = o.tempCanvas.getContext("2d")
    }, o.cacheImages = function() {
        for(var e, i = [], n = ["mac", "pc", "linux", "chrome"], s = ["screen", "mask", "laptop"], r = n.length, a = s.length, l = 0; a > l; l++) {
            var u = s[l];
            if(o.images[u] = {}, "mask" != u) for(var d = 0; r > d; d++) {
                var c = n[d];
                e = t.createImageWithLoader(o.IMAGE_PREFIX + u + "_" + c + "_full.png"), o.images[u][c] = e[0], i.push(e[1])
            } else e = t.createImageWithLoader(o.IMAGE_PREFIX + "mask_mac_full.png"), o.images.mask.mac = e[0], i.push(e[1]), e = t.createImageWithLoader(o.IMAGE_PREFIX + "mask_pc_full.png"), o.images.mask.pc = e[0], i.push(e[1])
        }
        e = t.createImageWithLoader(o.IMAGE_PREFIX + "wallpaper_full.png"), o.images.wallpaper = e[0], i.push(e[1]), o.imagesLoaded = !1, o.imagesLoad = $.when.apply(this, i), o.imagesLoad.done(function() {
            o.imagesLoaded = !0
        })
    }, o.cacheStickers = function(e) {
        turntable.uRzNYq({
            api: "sticker.get"
        }, function(i) {
            var n, s = [];
            $.each(i.stickers, function() {
                var e = this,
                    i = !1;
                e._id in o.stickerMap ? ($.extend(o.stickerMap[e._id], e), o.stickerMap[e._id].path == e.path && o.stickerMap[e._id].image && (i = !0)) : o.stickerMap[e._id] = e, i || (n = t.createImageWithLoader(o.STICKER_PREFIX + e.path + ".png"), o.stickerMap[e._id].image = n[0], s.push(n[1]), o.stickerMap[e._id].smallImage = t.buildTree(["img",
                {
                    src: o.STICKER_PREFIX + e.path + "_small.png"
                }]))
            }), o.stickersLoaded = !1, o.stickersLoad = $.when.apply(this, s), o.stickersLoad.done(function() {
                o.stickersLoaded = !0, void 0 != e && e(i)
            })
        })
    }, o.messageHandler = function(e) {
        !e.hasOwnProperty("msgid") && void 0 != e.command && e.command in o.messageHandlers && o.messageHandlers[e.command](e)
    }, o.messageHandlers = {
        add_dj: function(e) {
            var t = e.user[0].userid;
            o.stickerPlacements[t] = e.placements
        },
        rem_dj: function(e) {
            var t = e.user[0].userid;
            t == o.hoverUserid && o.djLaptopLeave()
        },
        update_sticker_placements: function(e) {
            var t = e.userid;
            o.stickerPlacements[t] = e.placements, o.updateDjStickerPlacements(t)
        }
    }, o.addStickerPlacements = function(e, t) {
        $.each(t, function(e, t) {
            o.stickerPlacements[e] = t
        })
    }, o.drawDjStickerPlacements = function(e, i, n, s, r) {
        if(!(turntable.cjAgpz.users[i].laptop in {
            iphone: 1,
            android: 1
        })) {
            if(!o.stickersLoaded) return o.stickersLoad.done(function() {
                o.drawDjStickerPlacements(e, i, n, s)
            }), void 0;
            r || (r = $(".dj-laptop[data-userid=" + i + "]"));
            var a = "mac" === turntable.cjAgpz.users[i].laptop,
                l = 0,
                u = 0;.1 > s ? (l = a ? "3px" : "1px", u = "3px") : .2 > s && (l = a ? "4px" : 0, u = "5px");
            var d = $(t.buildTree(["canvas.laptopCanvas",
            {
                width: n.x,
                height: n.y,
                data: {
                    userid: i
                },
                style: {
                    position: "absolute",
                    top: l,
                    left: u
                }
            }])).appendTo(r),
                c = d[0].getContext("2d");
            o.drawStickerPlacementsCanvas(i, c, s)
        }
    }, o.updateDjStickerPlacements = function(e) {
        if(!(turntable.cjAgpz.users[e].laptop in {
            iphone: 1,
            android: 1
        })) {
            var t = $(".dj-laptop[data-userid=" + e + "]");
            if(1 == t.length) {
                var i = t.find("canvas");
                1 != i.length && LOG("Canvas for DJ's laptop not found: " + e);
                var n = i[0].getContext("2d");
                n.clearRect(0, 0, o.SCREEN_WIDTH, o.SCREEN_HEIGHT), o.drawStickerPlacementsCanvas(e, n, o.DJ_RATIO)
            }
        }
    }, o.drawStickerCSS = function(e) {
        if(!(e in this.stickerMap)) return null;
        var i = this.stickerMap[e],
            n = t.buildTree(this.layouts.sticker);
        return n.style.background = "url(" + i.image.src + ")", n.style.height = i.image.height + "px", n.style.width = i.image.width + "px", n
    }, o.drawStickerPlacementCSS = function(e, t) {
        var i = o.drawStickerCSS(t.sticker_id);
        if(!i) return !1;
        var n = $(i),
            s = o.stickerMap[t.sticker_id];
        s.price && !s.purchased && n.css("opacity", o.UNPURCHASED_STICKER_OPACITY);
        var r = "rotate(" + t.angle + "deg)";
        n.css({
            top: t.top + "px",
            left: t.left + "px",
            transform: r
        }), $.data(i, t), e.append(i), o.numPlacements++, o.updateSlotCount()
    }, o.drawStickerPlacementsCanvas = function(e, t, i, n, s) {
        t.save(), i && t.scale(i, i), n && t.translate(n.x, n.y), t.beginPath(), t.moveTo(o.SCREEN_CORNER_RADIUS, 0), t.arcTo(o.SCREEN_WIDTH, 0, o.SCREEN_WIDTH, o.SCREEN_HEIGHT, o.SCREEN_CORNER_RADIUS), t.arcTo(o.SCREEN_WIDTH, o.SCREEN_HEIGHT, 0, o.SCREEN_HEIGHT, o.SCREEN_CORNER_RADIUS), t.arcTo(0, o.SCREEN_HEIGHT, 0, 0, o.SCREEN_CORNER_RADIUS), t.arcTo(0, 0, o.SCREEN_WIDTH, 0, o.SCREEN_CORNER_RADIUS), t.clip();
        for(var r = o.stickerPlacements[e], a = r.length, l = 0; a > l; l++) {
            var u = r[l];
            if(!o.stickerMap.hasOwnProperty(u.sticker_id)) {
                if(s) continue;
                return t.restore(), o.cacheStickers(function() {
                    o.drawStickerPlacementsCanvas(e, t, i, n, !0)
                }), void 0
            }
            var d = o.stickerMap[u.sticker_id],
                c = d.image.width / 2,
                h = d.image.height / 2,
                p = u.left + c,
                f = u.top + h;
            t.save(), t.translate(p, f), t.rotate(u.angle * Math.PI / 180);
            var m = d.image;.2 > i && (m = d.smallImage), t.drawImage(m, -1 * c, -1 * h, d.image.width, d.image.height), t.restore()
        }
        t.restore()
    }, o.drawLaptopCanvas = function(e, t, i, n) {
        n || (n = turntable.cjAgpz.users[e].laptop), n in {
            iphone: 1,
            android: 1
        } || (t.save(), t.scale(i, i), t.drawImage(o.images.laptop[n], 0, 0), t.restore(), offset = {
            x: o.SCREEN_OFFSET_X,
            y: o.SCREEN_OFFSET_Y
        }, o.drawStickerPlacementsCanvas(e, t, i, offset))
    }, o.djLaptopEnter = function(e) {
        var t = $(this),
            i = t.data("userid");
        o.replaceUpdateZoomCanvas(t, i), o.djLaptopHover(e), o.$zoomView.show()
    }, o.djLaptopHover = function(e) {
        o.$zoomView.css({
            top: e.pageY + 10,
            left: e.pageX - o.ZOOM_VIEW_RADIUS
        }), o.updateZoomCanvas(e)
    }, o.djLaptopLeave = function() {
        o.$zoomView.hide()
    }, o.replaceUpdateZoomCanvas = function(e, t) {
        var i = e.offset(),
            n = turntable.cjAgpz.users[t].laptop;
        o.images.laptop[n];
        var s = this.context,
            r = o.SCREEN_HEIGHT * o.ZOOM_RATIO - o.ZOOM_VIEW_RADIUS + 22,
            a = o.ZOOM_VIEW_RADIUS - 8,
            l = o.tempContext;
        l.drawImage(o.images.wallpaper, 0, 0), l.save(), l.translate(o.ZOOM_VIEW_RADIUS, o.ZOOM_VIEW_RADIUS), o.drawLaptopCanvas(t, l, o.ZOOM_RATIO), l.restore(), o.updateZoomCanvas = function(t) {
            var n = (t.pageX - i.left) / e.width(),
                l = (t.pageY - i.top) / e.height(),
                u = o.SCREEN_WIDTH * o.ZOOM_RATIO * n,
                d = Math.max(Math.min(o.SCREEN_HEIGHT * o.ZOOM_RATIO * l, r), a),
                c = -u - o.SCREEN_OFFSET_X * o.ZOOM_RATIO,
                h = -d - o.SCREEN_OFFSET_Y * o.ZOOM_RATIO;
            s.drawImage(o.tempCanvas, c, h)
        }
    }, o.showEditor = function() {
        o.cacheStickers(function() {
            o.stickerPickerEventHandlersSet = !1, t.buildTree(o.layouts.editView, o);
            var e = o.modal.$node;
            o.$laptopView = o.modal.$node.find("#laptopView"), turntable.uRzNYq({
                api: "sticker.get_placements"
            }, function(e) {
                $.each(e.placements, function() {
                    o.drawStickerPlacementCSS(o.$laptopView, this)
                }), o.refreshPurchaseData(), o.modal.show()
            }), o.modal.$node.find("#remainingNumber").text(o.MAX_PLACEMENTS), o.numPlacements = 0;
            var i = turntable.user.laptop;
            e.find("#laptopScreen").css("background", "url(" + o.images.screen[i].src + ")"), "mac" != i && (i = "pc"), e.find("#laptopMask").css("background", "url(" + o.images.mask[i].src + ") bottom left");
            var n = t.buildTree(o.layouts.boundingBox);
            o.$boundingBox = $(n), e.find("#laptopScreen").append(n), o.addLaptopViewListeners(), o.$boundingBox.on("mouseup", "#boundingBoxX", o.removeCurrentSticker), e.find("#stickerSaveButton").click(o.save), o.$laptopView.on("dragover", o.stickerDragOver).on("dragenter", o.stickerDragOver).on("drop", o.stickerDrop)
        })
    }, o.refreshPurchaseData = function() {
        turntable.uRzNYq({
            api: "sticker.get_purchased_stickers"
        }, function(e) {
            for(stickerid in o.stickerMap) o.stickerMap.hasOwnProperty(stickerid) && (o.stickerMap[stickerid].purchased = !1);
            for(var t = e.stickers, i = t.length, n = 0; i > n; n++) {
                var s = o.stickerMap[t[n].sticker_id];
                s.purchased = !0
            }
            o.initStickerPicker(), o.checkForUnpurchasedStickers(), o.modal.$node.find("#laptopView").find(".sticker").each(function() {
                var e = $(this),
                    t = $.data(this, "sticker_id"),
                    i = o.stickerMap[t];
                i.price && (i.purchased ? e.css("opacity", "") : e.css("opacity", o.UNPURCHASED_STICKER_OPACITY))
            })
        })
    }, o.initStickerPicker = function() {
        var e = o.modal.$node.find("#picker"),
            i = 0,
            n = e.find("#stickerList").empty();
        $.each(o.stickerMap, function(e, s) {
            if("active" == s.state) {
                i += 1;
                var r = t.buildTree(o.layouts.sticker),
                    a = $(r),
                    l = t.buildTree(["div.stickerImage"]),
                    u = $(l);
                $.data(r, s), a.attr("draggable", "true"), u.css({
                    "background-image": "url(" + s.image.src + ")"
                }), 100 > s.image.height && 100 > s.image.width && u.css("background-size", "auto");
                var d = t.buildTree(o.layouts.stickerContainer),
                    c = $(d);
                c.prepend(l).prepend(r).find(".stickerName").text(s.name);
                var h = !1,
                    p = c.find(".priceInfo");
                if(0 == s.price) h = !0;
                else if(s.purchased) p.text("Purchased");
                else {
                    var f = "" + s.price;
                    f = "$" + f.slice(0, -2) + "." + f.slice(-2), p.text(f)
                }
                n.append(d)
            }
        }), n.css({
            width: i * o.PICKER_STICKER_WIDTH,
            left: 0
        }), o.numPages = Math.ceil(i / 4), o.currentPage = 0;
        var s = e.find("#stickerListScrollLeft"),
            r = e.find("#stickerListScrollRight");
        s.addClass("inactive"), o.numPages > 1 ? r.addClass("active") : r.addClass("inactive"), o.stickerPickerEventHandlersSet || (s.click(o.stickerListScrollLeft), r.click(o.stickerListScrollRight), o.stickerPickerEventHandlersSet = !0, n.on("dragstart", ".sticker", o.stickerDragStart))
    }, o.stickerListScrollLeft = function() {
        o.currentPage > 0 && (o.currentPage == o.numPages - 1 && $("#stickerListScrollRight").removeClass("inactive").addClass("active"), o.currentPage--, $("#stickerList").css({
            left: 4 * -o.currentPage * o.PICKER_STICKER_WIDTH
        }), 0 == o.currentPage && $("#stickerListScrollLeft").removeClass("active").addClass("inactive"))
    }, o.stickerListScrollRight = function() {
        o.currentPage < o.numPages - 1 && (0 == o.currentPage && $("#stickerListScrollLeft").removeClass("inactive").addClass("active"), o.currentPage++, $("#stickerList").css({
            left: 4 * -o.currentPage * o.PICKER_STICKER_WIDTH
        }), o.currentPage == o.numPages - 1 && $("#stickerListScrollRight").removeClass("active").addClass("inactive"))
    }, o.save = function() {
        var e = o.getUnpurchasedStickers();
        if(e.length) return o.modal.hide({
            showLoadingTransition: !0
        }), turntable.payment.makePaymentModal(e, $.proxy(o.purchaseCallback, o), $.proxy(o.cancelCallback, o)), !1;
        var t = $.map($("#laptopView").find(".sticker"), function(e) {
            return $.data(e)
        });
        return turntable.uRzNYq({
            api: "sticker.place",
            placements: t,
            is_dj: turntable.cjAgpz.isDj(),
            roomid: turntable.cjAgpz.roomId,
            section: turntable.cjAgpz.section
        }, function(e) {
            e.success ? o.modal.close() : 1 != e.err.indexOf("slow") ? o.modal.showAlert(e.err) : 1 != e.err.indexOf("limit") ? o.modal.showAlert("You've passed the sticker limit. Please remove some and try saving again.") : 1 != e.err.indexOf("unpurchased") ? o.modal.showAlert("You must purchase the paid stickers.") : o.modal.showAlert("Sorry, there was an error saving your stickers. Please try again.")
        }), !1
    }, o.removeCurrentSticker = function() {
        $(o.currentSticker).remove(), o.numPlacements--, o.updateSlotCount(), o.checkForUnpurchasedStickers()
    }, o.updateSlotCount = function() {
        var e = o.MAX_PLACEMENTS - o.numPlacements;
        o.modal.$node.find("#remainingNumber").text(e);
        var t = o.modal.$node.find("#picker .sticker");
        0 == e ? t.addClass("inactive").removeAttr("draggable") : 1 == e && t.removeClass("inactive").attr("draggable", "true")
    }, o.getOffsetFromTarget = function(e, t) {
        var i;
        return i = t ? t.offset() : $(e.target).offset(), {
            x: e.originalEvent.pageX - i.left,
            y: e.originalEvent.pageY - i.top
        }
    }, o.stickerDragStart = function(e) {
        var t = $(this).parent();
        e.originalEvent.dataTransfer.effectAllowed = "copyMove";
        var i = o.getOffsetFromTarget(e),
            n = $.data(this),
            s = i.x / t.width() * n.image.width,
            r = i.y / t.height() * n.image.height,
            a = ['{"sticker_id": "', n._id, '"', ', "offsetX": ', s, ', "offsetY": ', r, "}"].join("");
        e.originalEvent.dataTransfer.setDragImage(o.stickerMap[n._id].image, s, r), e.originalEvent.dataTransfer.setData("text", a)
    }, o.stickerDragOver = function(e) {
        return e.preventDefault(), e.originalEvent.dataTransfer.dropEffect = "copy", !1
    }, o.stickerDrop = function(e) {
        if(e.preventDefault(), e.stopPropagation(), o.numPlacements >= o.MAX_PLACEMENTS) return !1;
        $dropZone = $(this);
        var t = e.originalEvent.dataTransfer.getData("text");
        t = $.parseJSON(t);
        var i = o.getOffsetFromTarget(e, $dropZone),
            n = Math.ceil(i.y - t.offsetY),
            s = Math.ceil(i.x - t.offsetX),
            r = {
                sticker_id: t.sticker_id,
                top: n,
                left: s,
                angle: 0
            };
        return o.drawStickerPlacementCSS(o.$laptopView, r), o.checkForUnpurchasedStickers(), !1
    }, o.getCorners = function(e) {
        var t = e.style.left;
        t = parseInt(t.substring(0, t.length - 2));
        var i = e.style.top;
        i = parseInt(i.substring(0, i.length - 2));
        var n = e.style.width;
        n = parseInt(n.substring(0, n.length - 2));
        var o = e.style.height;
        o = parseInt(o.substring(0, o.length - 2));
        for(var s = n / 2, r = o / 2, a = [
            [-1 * s, -1 * r],
            [s, -1 * r],
            [s, r],
            [-1 * s, r]
        ], l = [], u = a.length, d = $.data(e, "angle") * Math.PI / 180, c = 0; u > c; c++) {
            var h = a[c];
            l[c] = [h[0] * Math.cos(d) - h[1] * Math.sin(d), h[0] * Math.sin(d) + h[1] * Math.cos(d)]
        }
        for(var p = t + s, f = i + r, c = 0; u > c; c++) {
            var h = l[c];
            l[c] = [h[0] + p, h[1] + f]
        }
        return l
    }, o.addLaptopViewListeners = function() {
        o.$laptopView.on("mouseenter", ".sticker", o.showBoundingBox), o.$boundingBox.on("mouseleave", o.hideBoundingBox).on("mouseenter", o.cancelHideBoundingBox).on("mousedown", o.boundingBoxDrag)
    }, o.removeLaptopViewListeners = function() {
        o.$laptopView.off("mouseenter", ".sticker", o.showBoundingBox), o.$boundingBox.off("mouseleave", o.hideBoundingBox).off("mouseenter", o.cancelHideBoundingBox).off("mousedown", o.boundingBoxDrag)
    }, o.showBoundingBox = function() {
        o.currentSticker = this;
        var e = o.getCorners(this),
            t = function(e) {
                return e[0]
            },
            i = function(e) {
                return e[1]
            },
            n = Math.min.apply(Math, e.map(t)),
            s = Math.max.apply(Math, e.map(t)),
            r = Math.min.apply(Math, e.map(i)),
            a = Math.max.apply(Math, e.map(i)),
            l = s - n,
            u = a - r,
            d = o.stickerMap[$.data(this, "sticker_id")],
            c = o.$boundingBox.find(".unpurchased");
        d.price && 0 == d.purchased ? (95 > l ? c.text("$") : c.text("UNPURCHASED"), c.show()) : o.$boundingBox.find(".unpurchased").hide(), o.$boundingBox.find(".top.left").css("cursor", "url(" + o.IMAGE_PREFIX + "rotate_top_left.png) 12 12" + ", auto"), o.$boundingBox.find(".bottom.left").css("cursor", "url(" + o.IMAGE_PREFIX + "rotate_bottom_left.png) 12 12" + ", auto"), o.$boundingBox.find(".bottom.right").css("cursor", "url(" + o.IMAGE_PREFIX + "rotate_bottom_right.png) 12 12" + ", auto"), o.$boundingBox.hide().css("transform", ""), o.$boundingBox.css({
            width: l,
            height: u
        }), window.setTimeout(function() {
            o.$boundingBox.css({
                left: n,
                top: r
            }).show()
        })
    }, o.hideBoundingBox = function() {
        o.hideTimer = window.setTimeout(function() {
            o.$boundingBox.hide()
        }, 1e3)
    }, o.cancelHideBoundingBox = function() {
        window.clearTimeout(o.hideTimer)
    }, o.boundingBoxDrag = function(e) {
        e.preventDefault(), e.stopPropagation(), o.removeLaptopViewListeners();
        var t = this,
            i = $(this),
            n = o.currentSticker,
            s = $(n),
            r = e.pageX,
            a = e.pageY,
            l = o.$laptopView.offset(),
            u = n.style.left;
        u = parseInt(u.substring(0, u.length - 2));
        var d = n.style.top;
        d = parseInt(d.substring(0, d.length - 2));
        var c = t.style.left;
        c = parseInt(c.substring(0, c.length - 2));
        var h = t.style.top;
        h = parseInt(h.substring(0, h.length - 2));
        var p = t.style.width;
        p = parseInt(p.substring(0, p.length - 2));
        var f = t.style.height;
        f = parseInt(f.substring(0, f.length - 2));
        var m = p / 2,
            g = f / 2,
            v = !1;
        corners = [
            [c, h],
            [c + p, h],
            [c + p, h + f],
            [c, h + f]
        ];
        for(var y = corners.length, b = 0; y > b; b++) {
            var w = corners[b];
            if(Math.abs(l.left + w[0] - r) < o.CORNER_DRAG_RADIUS && Math.abs(l.top + w[1] - a) < o.CORNER_DRAG_RADIUS) {
                v = !0;
                break
            }
        }
        if(v) {
            var _, S, k = l.left + c + m,
                T = l.top + h + g,
                C = r - k,
                x = T - a;
            o.newStickerAngle, _ = $.data(n, "angle"), S = o.getAngle(C, x);
            var M = !1,
                O = $("#overlay"),
                E = null;
            O.mousemove(o.boundingBoxDragRotate(k, T, E, O, i, s, _, S, M)), O.mouseup(function() {
                o.addLaptopViewListeners(), i.hide(), i.find(".dragBox").show(), $("#boundingBoxX").show(), $.data(n, {
                    angle: o.newStickerAngle
                }), O.off("mousemove").off("mouseup"), O.css("cursor", "auto"), i.css("cursor", "")
            })
        } else {
            var D = {};
            $("#laptopScreen").mousemove(o.boundingBoxDragMove(r, a, l, c, h, u, d, D, s, i)), $("#laptopScreen").mouseup(function() {
                o.addLaptopViewListeners(), $.data(n, {
                    top: D.top,
                    left: D.left
                }), $("#laptopScreen").unbind("mousemove").unbind("mouseup")
            })
        }
    }, o.boundingBoxDragRotate = function(e, t, i, n, s, r, a, l, u) {
        return function(d) {
            d.preventDefault(), d.stopPropagation(), u || ($("#boundingBoxX").hide(), s.find(".dragBox").hide(), s.find(".unpurchased").hide(), u = !0);
            var c = d.pageX,
                h = d.pageY,
                p = c - e,
                f = t - h,
                m = o.getAngle(p, f);
            if(cursor = o.getRotateCursor(m), null == i || cursor != i) {
                i = cursor;
                var g = "url(" + o.IMAGE_PREFIX + "rotate_" + cursor + ".png) 12 12, auto";
                n.css("cursor", g), s.css("cursor", g)
            }
            newAngle = m - l, d.shiftKey && (newAngle = 45 * Math.round(newAngle / 45)), o.newStickerAngle = a + newAngle;
            var v = "rotate(" + o.newStickerAngle + "deg)";
            r.css("transform", v), v = "rotate(" + newAngle + "deg)", s.css("transform", v)
        }
    }, o.boundingBoxDragMove = function(e, t, i, n, s, r, a, l, u, d) {
        return function(c) {
            var h, p, f = c.pageX,
                m = c.pageY;
            i.left > f || i.top > m || f > i.left + o.SCREEN_WIDTH || m > i.top + o.SCREEN_HEIGHT || (l.left = r + f - e, l.top = a + m - t, h = n + f - e, p = s + m - t, u.css({
                left: l.left + "px",
                top: l.top + "px"
            }), d.css({
                left: h + "px",
                top: p + "px"
            }))
        }
    }, o.getAngle = function(e, t) {
        var i = Math.atan(e / t),
            n = 180 * i / Math.PI;
        return 0 > t && (n = 180 + n), n
    }, o.getRotateCursor = function(e) {
        for(; 0 > e;) e += 360;
        return e %= 360, e >= 0 && 90 > e ? "top_right" : e >= 90 && 180 > e ? "bottom_right" : e >= 180 && 270 > e ? "bottom_left" : "top_left"
    }, o.checkForUnpurchasedStickers = function() {
        var e = o.modal.$node.find(".submit");
        o.getUnpurchasedStickers().length ? e.text("Checkout") : e.text("Save")
    }, o.getUnpurchasedStickers = function() {
        var e = {};
        $.map(o.modal.$node.find("#laptopView").find(".sticker"), function(t) {
            var i = o.stickerMap[$.data(t, "sticker_id")];
            !i.price || 1 == i.purchased || i.sticker_id in e || (e[i._id] = !0)
        });
        var t = [];
        for(key in e) e.hasOwnProperty(key) && t.push(key);
        return t
    }, o.purchaseCallback = function() {
        t.buildTree(o.layouts.successModal, o), o.successModal.show(), o.refreshPurchaseData()
    }, o.cancelCallback = function() {
        o.modal.show()
    }, o.layouts = {
        zoomView: ["div#zoomView", ["canvas#zoomCanvas"],
            ["div#zoomOverlay"]
        ],
        stickerContainer: ["div.stickerContainer", ["div.stickerName"],
            ["div.priceInfo"]
        ],
        sticker: ["div.sticker"],
        boundingBox: ["div.boundingBox", ["div.unpurchased", "UNPURCHASED"],
            ["div#boundingBoxX"],
            ["div.dragBox.top.left"],
            ["div.dragBox.bottom.left"],
            ["div.dragBox.bottom.right"]
        ],
        successModal: [i,
        {
            id: "stickerSuccessModal",
            idd: "successModal",
            title: "Success!",
            showClose: !1,
            clickOut: !1,
            submitCallback: function() {
                o.modal.show()
            },
            submitText: "Sweet!",
            showCancel: !1
        }, ["div.hellsYeah"],
            ["div.section.top", ["Sticker acquired! You may now review and ", "save your sticker placements."].join("")]
        ]
    }, o.layouts.editView = [i,
    {
        id: "stickerModal",
        title: "Edit Your Laptop Cover",
        submitText: "Save",
        submitCallback: o.save,
        showCancel: !1
    }, ["div#laptop", ["div#laptopScreen", ["div#laptopView"]],
        ["div#laptopMask"]
    ],
        ["h3", "Your Stickers"],
        ["div#remainingCount", ["span#remainingNumber"], " slots remaining."],
        ["div#picker", ["div#stickerListScrollLeft"],
            ["div#stickerScroller", ["div#stickerList"]],
            ["div#stickerListScrollRight"]
        ]
    ], n.DEBUG_MODE ? o : {
        init: o.init,
        showEditor: o.showEditor,
        drawLaptopCanvas: o.drawLaptopCanvas
    }
});
var httpStream = function() {
        function e(e) {
            if(p && p(e), "initialized" == e) {
                if(c) return;
                LOG("HTTPSimpleStream initialized"), c = $("#httpstream")[0], c.setVolume(httpStream.volume + ""), h && a()
            } else "streamstart" == e ? m = "buffered" : "resync" == e ? m = "buffering" : "streamfinish" == e && (f = "stopped", m = "", g && g())
        }
        function t(e) {
            p = e
        }
        function i(e, t, i, n, o) {
            h = {
                args: [e, t, i, Number(n)],
                time: util.now()
            }, c && a(), g = o && o.onfinish
        }
        function n() {
            h = null, f = "stopped", m = "", c && c.closeStream("")
        }
        function o(e) {
            httpStream.volume = e, c && c.setVolume(e + "")
        }
        function s() {
            return "playing" == f
        }
        function r() {
            return f
        }
        function a() {
            var e = h,
                t = util.now() - e.time;
            e[3] += t, e.time += t, c.loadStream(e.args.join(",")), f = "playing", m = "buffering"
        }
        function l() {
            return Number(c.getPosition(""))
        }
        function u() {
            f = "paused", c && c.pause("")
        }
        function d(e) {
            f = "playing", c && c.resume(""), g = e && e.onfinish
        }
        var c = null,
            h = null,
            p = null,
            f = "stopped",
            m = "",
            g = null;
        return {
            volume: 100,
            setVolume: o,
            callback: e,
            setCallback: t,
            loadStream: i,
            closeStream: n,
            isPlaying: s,
            getPosition: l,
            getPlayState: r,
            pause: u,
            play: d
        }
    }();
HTTPSimpleStreamCallback = httpStream.callback, define("httpstream", function(e) {
    return function() {
        var t;
        return t || e.httpStream
    }
}(this));
var io = this.io = {
    SOCKET_LOG: function(e) {
        window.turntable && turntable.socketLog("[object Object]" == e + "" ? "[]" : e)
    },
    version: "0.6.3",
    setPath: function(e) {
        window.console && console.error && console.error("io.setPath will be removed. Please set the variable WEB_SOCKET_SWF_LOCATION pointing to WebSocketMain.swf"), this.path = /\/$/.test(e) ? e : e + "/", WEB_SOCKET_SWF_LOCATION = e + "lib/vendor/web-socket-js/WebSocketMain.swf"
    }
};
"jQuery" in this && (jQuery.io = this.io), "undefined" != typeof window && "undefined" == typeof WEB_SOCKET_SWF_LOCATION && (WEB_SOCKET_SWF_LOCATION = "/socket.io/lib/vendor/web-socket-js/WebSocketMain.swf"), function() {
    var e = this.io,
        t = !1;
    e.util = {
        load: function(e) {
            return /loaded|complete/.test(document.readyState) || t ? e() : ("attachEvent" in window ? window.attachEvent("onload", e) : window.addEventListener("load", e, !1), void 0)
        },
        defer: function(t) {
            return e.util.webkit ? (e.util.load(function() {
                setTimeout(t, 100)
            }), void 0) : t()
        },
        inherit: function(e, t) {
            for(var i in t.prototype) e.prototype[i] = t.prototype[i]
        },
        indexOf: function(e, t, i) {
            for(var n = e.length, o = 0 > i ? Math.max(0, n + i) : i || 0; n > o; o++) if(e[o] === t) return o;
            return -1
        },
        isArray: function(e) {
            return "[object Array]" === Object.prototype.toString.call(e)
        },
        merge: function(e, t) {
            for(var i in t) t.hasOwnProperty(i) && (e[i] = t[i])
        }
    }, e.util.webkit = /webkit/i.test(navigator.userAgent), e.util.load(function() {
        t = !0
    })
}(), function() {
    var e = this.io,
        t = "~m~",
        i = function(e) {
            if("[object Object]" == Object.prototype.toString.call(e)) {
                if(!("JSON" in window)) {
                    var t = "Socket.IO Error: Trying to encode as JSON, but JSON.stringify is missing.";
                    if(!("console" in window && console.error)) throw Error(t);
                    return console.error(t), '{ "$error": "' + t + '" }'
                }
                return "~j~" + JSON.stringify(e)
            }
            return e + ""
        },
        n = e.Transport = function(t, i) {
            this.base = t, this.options = {
                timeout: 15e3
            }, e.util.merge(this.options, i)
        };
    n.prototype.send = function() {
        throw Error("Missing send() implementation")
    }, n.prototype.connect = function() {
        throw Error("Missing connect() implementation")
    }, n.prototype.disconnect = function() {
        throw Error("Missing disconnect() implementation")
    }, n.prototype.encode = function(n) {
        var o, s = "";
        n = e.util.isArray(n) ? n : [n];
        for(var r = 0, a = n.length; a > r; r++) o = null === n[r] || void 0 === n[r] ? "" : i(n[r]), s += t + o.length + t + o;
        return s
    }, n.prototype.decode = function(e) {
        var i, n, o = [];
        do {
            if(e.substr(0, 3) !== t) return o;
            e = e.substr(3), i = "", n = "";
            for(var s = 0, r = e.length; r > s; s++) {
                if(n = Number(e.substr(s, 1)), e.substr(s, 1) != n) {
                    e = e.substr(i.length + t.length), i = Number(i);
                    break
                }
                i += n
            }
            o.push(e.substr(0, i)), e = e.substr(i)
        } while ("" !== e);
        return o
    }, n.prototype.onData = function(e) {
        this.setTimeout();
        var t = this.decode(e);
        if(t && t.length) for(var i = 0, n = t.length; n > i; i++) this.onMessage(t[i])
    }, n.prototype.setTimeout = function() {
        var e = this;
        this.timeout && clearTimeout(this.timeout), this.timeout = setTimeout(function() {
            e.onTimeout()
        }, this.options.timeout)
    }, n.prototype.onTimeout = function() {
        e.SOCKET_LOG("timeout"), this.onDisconnect()
    }, n.prototype.onMessage = function(e) {
        this.sessionid ? "~h~" == e.substr(0, 3) ? this.onHeartbeat(e.substr(3)) : "~j~" == e.substr(0, 3) ? this.base.onMessage(JSON.parse(e.substr(3))) : this.base.onMessage(e) : (this.sessionid = e, this.onConnect())
    }, n.prototype.onHeartbeat = function(t) {
        "websocket" == this.type && e.SOCKET_LOG(this.sockets[0].id + ":hb"), this.send("~h~" + t)
    }, n.prototype.onConnect = function() {
        this.connected = !0, this.connecting = !1, this.base.onConnect(), this.setTimeout()
    }, n.prototype.onDisconnect = function() {
        this.timeout && clearTimeout(this.timeout), this.connecting = !1, this.connected = !1, this.sessionid = null, this.base.onDisconnect()
    }, n.prototype.prepareUrl = function() {
        return(this.base.options.secure ? "https" : "http") + "://" + this.base.host + ":" + this.base.options.port + "/" + this.base.options.resource + "/" + this.type + (this.sessionid ? "/" + this.sessionid : "/")
    }
}(), function() {
    var e = this.io,
        t = Function(),
        i = function() {
            if(!("XMLHttpRequest" in window)) return !1;
            var e = new XMLHttpRequest;
            return void 0 != e.withCredentials
        }(),
        n = function(e) {
            if("XDomainRequest" in window && e) return new XDomainRequest;
            if("XMLHttpRequest" in window && (!e || i)) return new XMLHttpRequest;
            if(!e) {
                try {
                    var t = new ActiveXObject("MSXML2.XMLHTTP");
                    return t
                } catch(n) {}
                try {
                    var o = new ActiveXObject("Microsoft.XMLHTTP");
                    return o
                } catch(n) {}
            }
            return !1
        },
        o = e.Transport.XHR = function() {
            e.Transport.apply(this, arguments), this.sendBuffer = []
        };
    e.util.inherit(o, e.Transport), o.prototype.connect = function() {
        return this.get(), this
    }, o.prototype.checkSend = function() {
        if(!this.posting && this.sendBuffer.length) {
            var e = this.encode(this.sendBuffer);
            this.sendBuffer = [], this.sendIORequest(e)
        }
    }, o.prototype.send = function(t) {
        return e.util.isArray(t) ? this.sendBuffer.push.apply(this.sendBuffer, t) : this.sendBuffer.push(t), this.checkSend(), this
    }, o.prototype.sendIORequest = function(e) {
        var i = this;
        this.posting = !0, this.sendXHR = this.request("send", "POST"), this.sendXHR.onreadystatechange = function() {
            var e;
            if(4 == i.sendXHR.readyState) {
                i.sendXHR.onreadystatechange = t;
                try {
                    e = i.sendXHR.status
                } catch(n) {}
                i.posting = !1, 200 == e ? i.checkSend() : i.onDisconnect()
            }
        }, this.sendXHR.send("data=" + encodeURIComponent(e))
    }, o.prototype.disconnect = function() {
        return this.onDisconnect(), this
    }, o.prototype.onDisconnect = function() {
        if(this.xhr) {
            this.xhr.onreadystatechange = t;
            try {
                this.xhr.abort()
            } catch(i) {}
            this.xhr = null
        }
        if(this.sendXHR) {
            this.sendXHR.onreadystatechange = t;
            try {
                this.sendXHR.abort()
            } catch(i) {}
            this.sendXHR = null
        }
        this.sendBuffer = [], e.Transport.prototype.onDisconnect.call(this)
    }, o.prototype.request = function(e, t, i) {
        var o = n(this.base.isXDomain());
        return i && (o.multipart = !0), o.open(t || "GET", this.prepareUrl() + (e ? "/" + e : "")), "POST" == t && "setRequestHeader" in o && o.setRequestHeader("Content-type", "application/x-www-form-urlencoded; charset=utf-8"), o
    }, o.check = function(e) {
        try {
            if(n(e)) return !0
        } catch(t) {}
        return !1
    }, o.xdomainCheck = function() {
        return o.check(!0)
    }, o.request = n
}(), function() {
    var e = this.io,
        t = e.Transport.websocket = function() {
            e.Transport.apply(this, arguments)
        };
    e.util.inherit(t, e.Transport), t.prototype.type = "websocket", t.prototype.connect = function() {
        var t = this;
        this.sockets || (this.sockets = []);
        var i = new WebSocket(this.prepareUrl());
        return this.sockets.unshift(i), e.socketsCreated = (e.socketsCreated || 0) + 1, i.id = "ws" + e.socketsCreated, e.SOCKET_LOG(i.id + ":create"), i.onmessage = function(n) {
            if((!t.base.connected || t.base.connecting) && e.SOCKET_LOG(i.id + ":awake"), t.sockets.length > 1) {
                var o = $.inArray(i, t.sockets);
                if(-1 == o) return;
                t.sockets.splice(o, 1);
                for(var s = 0; t.sockets.length > s; s++) t.sockets[s].onmessage = null, t.sockets[s].onclose = null, t.sockets[s].onerror = null, t.sockets[s].close(), e.SOCKET_LOG(t.sockets[s].id + ":kill");
                t.sockets = [i]
            }
            t.onData(n.data)
        }, i.onclose = function() {
            e.SOCKET_LOG(i.id + ":die");
            var n = $.inArray(i, t.sockets); - 1 != n && t.sockets.splice(n, 1), t.onDisconnect()
        }, i.onerror = function(e) {
            t.onError(e)
        }, this
    }, t.prototype.send = function(e) {
        return this.sockets.length && this.sockets[0].send(this.encode(e)), this
    }, t.prototype.disconnect = function() {
        if(this.sockets.length) {
            for(; this.sockets.length;) {
                var e = this.sockets.pop();
                e.onmessage = null, e.onclose = null, e.onerror = null, e.close()
            }
            this.onDisconnect()
        }
        return this
    }, t.prototype.onError = function(e) {
        this.base.emit("error", [e])
    }, t.prototype.prepareUrl = function() {
        return(this.base.options.secure ? "wss" : "ws") + "://" + this.base.host + ":" + this.base.options.port + "/" + this.base.options.resource + "/" + this.type + (this.sessionid ? "/" + this.sessionid : "")
    }, t.check = function() {
        return "WebSocket" in window && WebSocket.prototype && WebSocket.prototype.send && !! ("" + WebSocket.prototype.send).match(/native/i) && "undefined" != typeof WebSocket
    }, t.xdomainCheck = function() {
        return !0
    }
}(), function() {
    var e = this.io,
        t = e.Transport.flashsocket = function() {
            e.Transport.websocket.apply(this, arguments)
        };
    e.util.inherit(t, e.Transport.websocket), t.prototype.type = "flashsocket", t.prototype.connect = function() {
        e.SOCKET_LOG("fsock:connect");
        var t = this,
            i = arguments;
        return WebSocket.__addTask(function() {
            e.Transport.websocket.prototype.connect.apply(t, i)
        }), this
    }, t.prototype.send = function() {
        var t = this,
            i = arguments;
        return WebSocket.__addTask(function() {
            e.Transport.websocket.prototype.send.apply(t, i)
        }), this
    }, t.check = function() {
        return "undefined" != typeof WebSocket && "__addTask" in WebSocket && swfobject ? swfobject.hasFlashPlayerVersion("10.0.0") : !1
    }, t.xdomainCheck = function() {
        return !0
    }
}(), function() {
    var e = this.io,
        t = e.Transport.htmlfile = function() {
            e.Transport.XHR.apply(this, arguments)
        };
    e.util.inherit(t, e.Transport.XHR), t.prototype.type = "htmlfile", t.prototype.get = function() {
        var e = this;
        this.open(), window.attachEvent("onunload", function() {
            e.destroy()
        })
    }, t.prototype.open = function() {
        this.doc = new ActiveXObject("htmlfile"), this.doc.open(), this.doc.write("<html></html>"), this.doc.parentWindow.s = this, this.doc.close();
        var e = this.doc.createElement("div");
        this.doc.body.appendChild(e), this.iframe = this.doc.createElement("iframe"), e.appendChild(this.iframe), this.iframe.src = this.prepareUrl() + "/" + +new Date
    }, t.prototype._ = function(e, t) {
        this.onData(e);
        var i = t.getElementsByTagName("script")[0];
        i.parentNode.removeChild(i)
    }, t.prototype.destroy = function() {
        if(this.iframe) {
            try {
                this.iframe.src = "about:blank"
            } catch(e) {}
            this.doc = null, CollectGarbage()
        }
    }, t.prototype.disconnect = function() {
        return this.destroy(), e.Transport.XHR.prototype.disconnect.call(this)
    }, t.check = function() {
        if("ActiveXObject" in window) try {
            var t = new ActiveXObject("htmlfile");
            return t && e.Transport.XHR.check()
        } catch(i) {}
        return !1
    }, t.xdomainCheck = function() {
        return !1
    }
}(), function() {
    var e = this.io,
        t = e.Transport["xhr-multipart"] = function() {
            e.Transport.XHR.apply(this, arguments)
        };
    e.util.inherit(t, e.Transport.XHR), t.prototype.type = "xhr-multipart", t.prototype.get = function() {
        var e = this;
        this.xhr = this.request("", "GET", !0), this.xhr.onreadystatechange = function() {
            4 == e.xhr.readyState && e.onData(e.xhr.responseText)
        }, this.xhr.send(null)
    }, t.check = function() {
        return "XMLHttpRequest" in window && "prototype" in XMLHttpRequest && "multipart" in XMLHttpRequest.prototype
    }, t.xdomainCheck = function() {
        return !0
    }
}(), function() {
    var e = this.io,
        t = Function(),
        i = e.Transport["xhr-polling"] = function() {
            e.Transport.XHR.apply(this, arguments)
        };
    e.util.inherit(i, e.Transport.XHR), i.prototype.type = "xhr-polling", i.prototype.connect = function() {
        var t = this;
        return e.util.defer(function() {
            e.Transport.XHR.prototype.connect.call(t)
        }), !1
    }, i.prototype.get = function() {
        var e = this;
        this.xhr = this.request(+new Date, "GET"), this.xhr.onreadystatechange = function() {
            var i;
            if(4 == e.xhr.readyState) {
                e.xhr.onreadystatechange = t;
                try {
                    i = e.xhr.status
                } catch(n) {}
                200 == i ? (e.onData(e.xhr.responseText), e.get()) : e.onDisconnect()
            }
        }, this.xhr.send(null)
    }, i.check = function() {
        return e.Transport.XHR.check()
    }, i.xdomainCheck = function() {
        return e.Transport.XHR.xdomainCheck()
    }
}(), function() {
    var e = this.io,
        t = e.Transport["jsonp-polling"] = function() {
            e.Transport.XHR.apply(this, arguments), this.insertAt = document.getElementsByTagName("head")[0], this.index = e.JSONP.length, e.JSONP.push(this)
        };
    e.util.inherit(t, e.Transport["xhr-polling"]), e.JSONP = [], t.prototype.type = "jsonp-polling", t.prototype.sendIORequest = function(e) {
        function t() {
            i(), n.posting = !1, n.checkSend()
        }
        function i() {
            n.iframe && n.form.removeChild(n.iframe);
            try {
                o = document.createElement('<iframe name="' + n.iframeId + '">')
            } catch(e) {
                o = document.createElement("iframe"), o.name = n.iframeId
            }
            o.id = n.iframeId, n.form.appendChild(o), n.iframe = o
        }
        var n = this;
        if(!("form" in this)) {
            var o, s = document.createElement("FORM"),
                r = document.createElement("TEXTAREA"),
                a = this.iframeId = "socket_io_iframe_" + this.index;
            s.style.position = "absolute", s.style.top = "-1000px", s.style.left = "-1000px", s.target = a, s.method = "POST", s.action = this.prepareUrl() + "/" + +new Date + "/" + this.index, r.name = "data", s.appendChild(r), this.insertAt.insertBefore(s, null), document.body.appendChild(s), this.form = s, this.area = r
        }
        i(), this.posting = !0, this.area.value = e;
        try {
            this.form.submit()
        } catch(l) {}
        this.iframe.attachEvent ? o.onreadystatechange = function() {
            "complete" == n.iframe.readyState && t()
        } : this.iframe.onload = t
    }, t.prototype.get = function() {
        var e = this,
            t = document.createElement("SCRIPT");
        this.script && (this.script.parentNode.removeChild(this.script), this.script = null), t.async = !0, t.src = this.prepareUrl() + "/" + +new Date + "/" + this.index, t.onerror = function() {
            e.onDisconnect()
        }, this.insertAt.insertBefore(t, null), this.script = t
    }, t.prototype._ = function() {
        return this.onData.apply(this, arguments), this.get(), this
    }, t.check = function() {
        return !0
    }, t.xdomainCheck = function() {
        return !0
    }
}(), function() {
    var e = this.io,
        t = e.Socket = function(t, i) {
            this.host = t || document.domain, this.options = {
                secure: !1,
                document: document,
                port: document.location.port || 80,
                resource: "socket.io",
                transports: ["websocket", "flashsocket", "htmlfile", "xhr-multipart", "xhr-polling", "jsonp-polling"],
                transportOptions: {
                    "xhr-polling": {
                        timeout: 25e3
                    },
                    "jsonp-polling": {
                        timeout: 25e3
                    }
                },
                connectTimeout: 5e3,
                tryTransportsOnConnectTimeout: !0,
                reconnect: !0,
                reconnectionDelay: 500,
                maxReconnectionAttempts: 10,
                rememberTransport: !0
            }, e.util.merge(this.options, i), this.connected = !1, this.connecting = !1, this.reconnecting = !1, this.events = {}, this.transport = this.getTransport(), !this.transport && "console" in window && console.error("No transport available")
        };
    t.prototype.getTransport = function(t) {
        var i, n = t || this.options.transports;
        this.options.rememberTransport && !t && (i = this.options.document.cookie.match("(?:^|;)\\s*socketio=([^;]*)"), i && (this.rememberedTransport = !0, n = [decodeURIComponent(i[1])]));
        for(var o, s = 0; o = n[s]; s++) if(e.Transport[o] && e.Transport[o].check() && (!this.isXDomain() || e.Transport[o].xdomainCheck())) return new e.Transport[o](this, this.options.transportOptions[o] || {});
        return null
    }, t.prototype.connect = function(e) {
        if(this.transport && !this.connected && (this.connecting && "websocket" != this.transport.type && this.disconnect(!0), this.connecting = !0, this.emit("connecting", [this.transport.type]), this.transport.connect(), this.options.connectTimeout && !this.reconnecting)) {
            var t = this;
            this.connectTimeoutTimer = setTimeout(function() {
                if(!t.connected) {
                    if(t.disconnect(!0), t.options.tryTransportsOnConnectTimeout && !t.rememberedTransport) {
                        t.remainingTransports || (t.remainingTransports = t.options.transports.slice(0));
                        for(var e = t.remainingTransports; e.length > 0 && e.splice(0, 1)[0] != t.transport.type;);
                        e.length && (t.transport = t.getTransport(e), t.connect())
                    }
                    t.remainingTransports && 0 != t.remainingTransports.length || t.emit("connect_failed")
                }
                t.remainingTransports && 0 == t.remainingTransports.length && delete t.remainingTransports
            }, this.options.connectTimeout)
        }
        return e && "function" == typeof e && this.once("connect", e), this
    }, t.prototype.send = function(e) {
        return this.transport && this.transport.connected ? (this.transport.send(e), this) : this.queue(e)
    }, t.prototype.disconnect = function(e) {
        return this.connectTimeoutTimer && clearTimeout(this.connectTimeoutTimer), e || (this.options.reconnect = !1), this.transport.disconnect(), this
    }, t.prototype.on = function(e, t) {
        return e in this.events || (this.events[e] = []), this.events[e].push(t), this
    }, t.prototype.once = function(e, t) {
        var i = this,
            n = function() {
                i.removeEvent(e, n), t.apply(i, arguments)
            };
        return n.ref = t, i.on(e, n), this
    }, t.prototype.emit = function(e, t) {
        if(e in this.events) for(var i = this.events[e].concat(), n = 0, o = i.length; o > n; n++) i[n].apply(this, void 0 === t ? [] : t);
        return this
    }, t.prototype.removeEvent = function(e, t) {
        if(e in this.events) for(var i = 0, n = this.events[e].length; n > i; i++)(this.events[e][i] == t || this.events[e][i].ref && this.events[e][i].ref == t) && this.events[e].splice(i, 1);
        return this
    }, t.prototype.queue = function(e) {
        return "queueStack" in this || (this.queueStack = []), this.queueStack.push(e), this
    }, t.prototype.doQueue = function() {
        return "queueStack" in this && this.queueStack.length ? (this.transport.send(this.queueStack), this.queueStack = [], this) : this
    }, t.prototype.isXDomain = function() {
        var e = window.location.port || 80;
        return this.host !== document.domain || this.options.port != e
    }, t.prototype.onConnect = function() {
        this.connected = !0, this.connecting = !1, this.doQueue(), this.options.rememberTransport && (this.options.document.cookie = "socketio=" + encodeURIComponent(this.transport.type)), this.emit("connect")
    }, t.prototype.onMessage = function(e) {
        this.emit("message", [e])
    }, t.prototype.onDisconnect = function() {
        var t = this.connected;
        this.connected = !1, this.connecting = !1, this.queueStack = [], t && (e.SOCKET_LOG("dc"), this.emit("disconnect"), this.options.reconnect && !this.reconnecting && this.onReconnect())
    }, t.prototype.onReconnect = function() {
        function e() {
            i.connected && i.emit("reconnect", [i.transport.type, i.reconnectionAttempts]), i.removeEvent("connect_failed", t).removeEvent("connect", t), i.reconnecting = !1, delete i.reconnectionAttempts, delete i.reconnectionDelay, delete i.reconnectionTimer, delete i.redoTransports, i.options.tryTransportsOnConnectTimeout = n, i.options.rememberTransport = o
        }
        function t() {
            if(i.reconnecting) if(i.connected) e();
            else {
                var n = !i.connecting || "websocket" == i.transport.type;
                if(!n) return i.reconnectionTimer = setTimeout(t, 1e3);
                i.reconnectionAttempts++ >= i.options.maxReconnectionAttempts ? i.redoTransports ? (i.emit("reconnect_failed"), e()) : (i.on("connect_failed", t), i.options.tryTransportsOnConnectTimeout = !0, i.disconnect(!0), i.transport = i.getTransport(i.options.transports), i.redoTransports = !0, i.connect()) : (i.reconnectionDelay *= 2, i.connect(), i.emit("reconnecting", [i.reconnectionDelay, i.reconnectionAttempts]), i.reconnectionTimer = setTimeout(t, i.reconnectionDelay))
            }
        }
        this.reconnecting = !0, this.reconnectionAttempts = 0, this.reconnectionDelay = this.options.reconnectionDelay;
        var i = this,
            n = this.options.tryTransportsOnConnectTimeout,
            o = this.options.rememberTransport;
        this.options.tryTransportsOnConnectTimeout = !1, this.reconnectionTimer = setTimeout(t, this.reconnectionDelay), this.on("connect", t)
    }, t.prototype.fire = t.prototype.emit, t.prototype.addListener = t.prototype.addEvent = t.prototype.addEventListener = t.prototype.on, t.prototype.removeListener = t.prototype.removeEventListener = t.prototype.removeEvent
}();
var swfobject = function() {
        function e() {
            if(!V) {
                try {
                    var e = P.getElementsByTagName("body")[0].appendChild(g("span"));
                    e.parentNode.removeChild(e)
                } catch(t) {
                    return
                }
                V = !0;
                for(var i = B.length, n = 0; i > n; n++) B[n]()
            }
        }
        function t(e) {
            V ? e() : B[B.length] = e
        }
        function i(e) {
            if(typeof A.addEventListener != M) A.addEventListener("load", e, !1);
            else if(typeof P.addEventListener != M) P.addEventListener("load", e, !1);
            else if(typeof A.attachEvent != M) v(A, "onload", e);
            else if("function" == typeof A.onload) {
                var t = A.onload;
                A.onload = function() {
                    t(), e()
                }
            } else A.onload = e
        }
        function n() {
            N ? o() : s()
        }
        function o() {
            var e = P.getElementsByTagName("body")[0],
                t = g(O);
            t.setAttribute("type", I);
            var i = e.appendChild(t);
            if(i) {
                var n = 0;
                (function() {
                    if(typeof i.GetVariable != M) {
                        var o = i.GetVariable("$version");
                        o && (o = o.split(" ")[1].split(","), W.pv = [parseInt(o[0], 10), parseInt(o[1], 10), parseInt(o[2], 10)])
                    } else if(10 > n) return n++, setTimeout(arguments.callee, 10), void 0;
                    e.removeChild(t), i = null, s()
                })()
            } else s()
        }
        function s() {
            var e = j.length;
            if(e > 0) for(var t = 0; e > t; t++) {
                var i = j[t].id,
                    n = j[t].callbackFn,
                    o = {
                        success: !1,
                        id: i
                    };
                if(W.pv[0] > 0) {
                    var s = m(i);
                    if(s) if(!y(j[t].swfVersion) || W.wk && 312 > W.wk) if(j[t].expressInstall && a()) {
                        var d = {};
                        d.data = j[t].expressInstall, d.width = s.getAttribute("width") || "0", d.height = s.getAttribute("height") || "0", s.getAttribute("class") && (d.styleclass = s.getAttribute("class")), s.getAttribute("align") && (d.align = s.getAttribute("align"));
                        for(var c = {}, h = s.getElementsByTagName("param"), p = h.length, f = 0; p > f; f++) "movie" != h[f].getAttribute("name").toLowerCase() && (c[h[f].getAttribute("name")] = h[f].getAttribute("value"));
                        l(d, c, i, n)
                    } else u(s), n && n(o);
                    else w(i, !0), n && (o.success = !0, o.ref = r(i), n(o))
                } else if(w(i, !0), n) {
                    var g = r(i);
                    g && typeof g.SetVariable != M && (o.success = !0, o.ref = g), n(o)
                }
            }
        }
        function r(e) {
            var t = null,
                i = m(e);
            if(i && "OBJECT" == i.nodeName) if(typeof i.SetVariable != M) t = i;
            else {
                var n = i.getElementsByTagName(O)[0];
                n && (t = n)
            }
            return t
        }
        function a() {
            return !q && y("6.0.65") && (W.win || W.mac) && !(W.wk && 312 > W.wk)
        }
        function l(e, t, i, n) {
            q = !0, T = n || null, C = {
                success: !1,
                id: i
            };
            var o = m(i);
            if(o) {
                "OBJECT" == o.nodeName ? (S = d(o), k = null) : (S = o, k = i), e.id = L, (typeof e.width == M || !/%$/.test(e.width) && 310 > parseInt(e.width, 10)) && (e.width = "310"), (typeof e.height == M || !/%$/.test(e.height) && 137 > parseInt(e.height, 10)) && (e.height = "137"), P.title = P.title.slice(0, 47) + " - Flash Player Installation";
                var s = W.ie && W.win ? "ActiveX" : "PlugIn",
                    r = "MMredirectURL=" + ("" + A.location).replace(/&/g, "%26") + "&MMplayerType=" + s + "&MMdoctitle=" + P.title;
                if(typeof t.flashvars != M ? t.flashvars += "&" + r : t.flashvars = r, W.ie && W.win && 4 != o.readyState) {
                    var a = g("div");
                    i += "SWFObjectNew", a.setAttribute("id", i), o.parentNode.insertBefore(a, o), o.style.display = "none", function() {
                        4 == o.readyState ? o.parentNode.removeChild(o) : setTimeout(arguments.callee, 10)
                    }()
                }
                c(e, t, i)
            }
        }
        function u(e) {
            if(W.ie && W.win && 4 != e.readyState) {
                var t = g("div");
                e.parentNode.insertBefore(t, e), t.parentNode.replaceChild(d(e), t), e.style.display = "none", function() {
                    4 == e.readyState ? e.parentNode.removeChild(e) : setTimeout(arguments.callee, 10)
                }()
            } else e.parentNode.replaceChild(d(e), e)
        }
        function d(e) {
            var t = g("div");
            if(W.win && W.ie) t.innerHTML = e.innerHTML;
            else {
                var i = e.getElementsByTagName(O)[0];
                if(i) {
                    var n = i.childNodes;
                    if(n) for(var o = n.length, s = 0; o > s; s++) 1 == n[s].nodeType && "PARAM" == n[s].nodeName || 8 == n[s].nodeType || t.appendChild(n[s].cloneNode(!0))
                }
            }
            return t
        }
        function c(e, t, i) {
            var n, o = m(i);
            if(W.wk && 312 > W.wk) return n;
            if(o) if(typeof e.id == M && (e.id = i), W.ie && W.win) {
                var s = "";
                for(var r in e) e[r] != Object.prototype[r] && ("data" == r.toLowerCase() ? t.movie = e[r] : "styleclass" == r.toLowerCase() ? s += ' class="' + e[r] + '"' : "classid" != r.toLowerCase() && (s += " " + r + '="' + e[r] + '"'));
                var a = "";
                for(var l in t) t[l] != Object.prototype[l] && (a += '<param name="' + l + '" value="' + t[l] + '" />');
                o.outerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"' + s + ">" + a + "</object>", U[U.length] = e.id, n = m(e.id)
            } else {
                var u = g(O);
                u.setAttribute("type", I);
                for(var d in e) e[d] != Object.prototype[d] && ("styleclass" == d.toLowerCase() ? u.setAttribute("class", e[d]) : "classid" != d.toLowerCase() && u.setAttribute(d, e[d]));
                for(var c in t) t[c] != Object.prototype[c] && "movie" != c.toLowerCase() && h(u, c, t[c]);
                o.parentNode.replaceChild(u, o), n = u
            }
            return n
        }
        function h(e, t, i) {
            var n = g("param");
            n.setAttribute("name", t), n.setAttribute("value", i), e.appendChild(n)
        }
        function p(e) {
            var t = m(e);
            t && "OBJECT" == t.nodeName && (W.ie && W.win ? (t.style.display = "none", function() {
                4 == t.readyState ? f(e) : setTimeout(arguments.callee, 10)
            }()) : t.parentNode.removeChild(t))
        }
        function f(e) {
            var t = m(e);
            if(t) {
                for(var i in t) "function" == typeof t[i] && (t[i] = null);
                t.parentNode.removeChild(t)
            }
        }
        function m(e) {
            var t = null;
            try {
                t = P.getElementById(e)
            } catch(i) {}
            return t
        }
        function g(e) {
            return P.createElement(e)
        }
        function v(e, t, i) {
            e.attachEvent(t, i), H[H.length] = [e, t, i]
        }
        function y(e) {
            var t = W.pv,
                i = e.split(".");
            return i[0] = parseInt(i[0], 10), i[1] = parseInt(i[1], 10) || 0, i[2] = parseInt(i[2], 10) || 0, t[0] > i[0] || t[0] == i[0] && t[1] > i[1] || t[0] == i[0] && t[1] == i[1] && t[2] >= i[2] ? !0 : !1
        }
        function b(e, t, i, n) {
            if(!W.ie || !W.mac) {
                var o = P.getElementsByTagName("head")[0];
                if(o) {
                    var s = i && "string" == typeof i ? i : "screen";
                    if(n && (x = null, $ = null), !x || $ != s) {
                        var r = g("style");
                        r.setAttribute("type", "text/css"), r.setAttribute("media", s), x = o.appendChild(r), W.ie && W.win && typeof P.styleSheets != M && P.styleSheets.length > 0 && (x = P.styleSheets[P.styleSheets.length - 1]), $ = s
                    }
                    W.ie && W.win ? x && typeof x.addRule == O && x.addRule(e, t) : x && typeof P.createTextNode != M && x.appendChild(P.createTextNode(e + " {" + t + "}"))
                }
            }
        }
        function w(e, t) {
            if(z) {
                var i = t ? "visible" : "hidden";
                V && m(e) ? m(e).style.visibility = i : b("#" + e, "visibility:" + i)
            }
        }
        function _(e) {
            var t = /[\\\"<>\.;]/,
                i = null != t.exec(e);
            return i && typeof encodeURIComponent != M ? encodeURIComponent(e) : e
        }
        var S, k, T, C, x, $, M = "undefined",
            O = "object",
            E = "Shockwave Flash",
            D = "ShockwaveFlash.ShockwaveFlash",
            I = "application/x-shockwave-flash",
            L = "SWFObjectExprInst",
            R = "onreadystatechange",
            A = window,
            P = document,
            F = navigator,
            N = !1,
            B = [n],
            j = [],
            U = [],
            H = [],
            V = !1,
            q = !1,
            z = !0,
            W = function() {
                var e = typeof P.getElementById != M && typeof P.getElementsByTagName != M && typeof P.createElement != M,
                    t = F.userAgent.toLowerCase(),
                    i = F.platform.toLowerCase(),
                    n = i ? /win/.test(i) : /win/.test(t),
                    o = i ? /mac/.test(i) : /mac/.test(t),
                    s = /webkit/.test(t) ? parseFloat(t.replace(/^.*webkit\/(\d+(\.\d+)?).*$/, "$1")) : !1,
                    r = !1,
                    a = [0, 0, 0],
                    l = null;
                if(typeof F.plugins != M && typeof F.plugins[E] == O) l = F.plugins[E].description, !l || typeof F.mimeTypes != M && F.mimeTypes[I] && !F.mimeTypes[I].enabledPlugin || (N = !0, r = !1, l = l.replace(/^.*\s+(\S+\s+\S+$)/, "$1"), a[0] = parseInt(l.replace(/^(.*)\..*$/, "$1"), 10), a[1] = parseInt(l.replace(/^.*\.(.*)\s.*$/, "$1"), 10), a[2] = /[a-zA-Z]/.test(l) ? parseInt(l.replace(/^.*[a-zA-Z]+(.*)$/, "$1"), 10) : 0);
                else if(typeof A.ActiveXObject != M) try {
                    var u = new ActiveXObject(D);
                    u && (l = u.GetVariable("$version"), l && (r = !0, l = l.split(" ")[1].split(","), a = [parseInt(l[0], 10), parseInt(l[1], 10), parseInt(l[2], 10)]))
                } catch(d) {}
                return {
                    w3: e,
                    pv: a,
                    wk: s,
                    ie: r,
                    win: n,
                    mac: o
                }
            }();
        return function() {
            W.w3 && ((typeof P.readyState != M && "complete" == P.readyState || typeof P.readyState == M && (P.getElementsByTagName("body")[0] || P.body)) && e(), V || (typeof P.addEventListener != M && P.addEventListener("DOMContentLoaded", e, !1), W.ie && W.win && (P.attachEvent(R, function() {
                "complete" == P.readyState && (P.detachEvent(R, arguments.callee), e())
            }), A == top &&
            function() {
                if(!V) {
                    try {
                        P.documentElement.doScroll("left")
                    } catch(t) {
                        return setTimeout(arguments.callee, 0), void 0
                    }
                    e()
                }
            }()), W.wk &&
            function() {
                return V ? void 0 : /loaded|complete/.test(P.readyState) ? (e(), void 0) : (setTimeout(arguments.callee, 0), void 0)
            }(), i(e)))
        }(), function() {
            W.ie && W.win && window.attachEvent("onunload", function() {
                for(var e = H.length, t = 0; e > t; t++) H[t][0].detachEvent(H[t][1], H[t][2]);
                for(var i = U.length, n = 0; i > n; n++) p(U[n]);
                for(var o in W) W[o] = null;
                W = null;
                for(var s in swfobject) swfobject[s] = null;
                swfobject = null
            })
        }(), {
            registerObject: function(e, t, i, n) {
                if(W.w3 && e && t) {
                    var o = {};
                    o.id = e, o.swfVersion = t, o.expressInstall = i, o.callbackFn = n, j[j.length] = o, w(e, !1)
                } else n && n({
                    success: !1,
                    id: e
                })
            },
            getObjectById: function(e) {
                return W.w3 ? r(e) : void 0
            },
            embedSWF: function(e, i, n, o, s, r, u, d, h, p) {
                var f = {
                    success: !1,
                    id: i
                };
                W.w3 && !(W.wk && 312 > W.wk) && e && i && n && o && s ? (w(i, !1), t(function() {
                    n += "", o += "";
                    var t = {};
                    if(h && typeof h === O) for(var m in h) t[m] = h[m];
                    t.data = e, t.width = n, t.height = o;
                    var g = {};
                    if(d && typeof d === O) for(var v in d) g[v] = d[v];
                    if(u && typeof u === O) for(var b in u) typeof g.flashvars != M ? g.flashvars += "&" + b + "=" + u[b] : g.flashvars = b + "=" + u[b];
                    if(y(s)) {
                        var _ = c(t, g, i);
                        t.id == i && w(i, !0), f.success = !0, f.ref = _
                    } else {
                        if(r && a()) return t.data = r, l(t, g, i, p), void 0;
                        w(i, !0)
                    }
                    p && p(f)
                })) : p && p(f)
            },
            switchOffAutoHideShow: function() {
                z = !1
            },
            ua: W,
            getFlashPlayerVersion: function() {
                return {
                    major: W.pv[0],
                    minor: W.pv[1],
                    release: W.pv[2]
                }
            },
            hasFlashPlayerVersion: y,
            createSWF: function(e, t, i) {
                return W.w3 ? c(e, t, i) : void 0
            },
            showExpressInstall: function(e, t, i, n) {
                W.w3 && a() && l(e, t, i, n)
            },
            removeSWF: function(e) {
                W.w3 && p(e)
            },
            createCSS: function(e, t, i, n) {
                W.w3 && b(e, t, i, n)
            },
            addDomLoadEvent: t,
            addLoadEvent: i,
            getQueryParamValue: function(e) {
                var t = P.location.search || P.location.hash;
                if(t) {
                    if(/\?/.test(t) && (t = t.split("?")[1]), null == e) return _(t);
                    for(var i = t.split("&"), n = 0; i.length > n; n++) if(i[n].substring(0, i[n].indexOf("=")) == e) return _(i[n].substring(i[n].indexOf("=") + 1))
                }
                return ""
            },
            expressInstallCallback: function() {
                if(q) {
                    var e = m(L);
                    e && S && (e.parentNode.replaceChild(S, e), k && (w(k, !0), W.ie && W.win && (S.style.display = "block")), T && T(C)), q = !1
                }
            }
        }
    }();
(function() {
    if(!window.WebSocket) {
        var e = window.console;
        if(e && e.log && e.error || (e = {
            log: function() {},
            error: function() {}
        }), !swfobject.hasFlashPlayerVersion("10.0.0")) return e.error("Flash Player >= 10.0.0 is required."), void 0;
        "file:" == location.protocol && e.error("WARNING: web-socket-js doesn't work in file:///... URL unless you set Flash Security Settings properly. Open the page via Web server i.e. http://..."), WebSocket = function(e, t, i, n, o) {
            var s = this;
            s.__id = WebSocket.__nextId++, WebSocket.__instances[s.__id] = s, s.readyState = WebSocket.CONNECTING, s.bufferedAmount = 0, s.__events = {}, t ? "string" == typeof t && (t = [t]) : t = [], setTimeout(function() {
                WebSocket.__addTask(function() {
                    WebSocket.__flash.create(s.__id, e, t, i || null, n || 0, o || null)
                })
            }, 0)
        }, WebSocket.prototype.send = function(e) {
            if(this.readyState == WebSocket.CONNECTING) throw "INVALID_STATE_ERR: Web Socket connection has not been established";
            var t = WebSocket.__flash.send(this.__id, encodeURIComponent(e));
            return 0 > t ? !0 : (this.bufferedAmount += t, !1)
        }, WebSocket.prototype.close = function() {
            this.readyState != WebSocket.CLOSED && this.readyState != WebSocket.CLOSING && (this.readyState = WebSocket.CLOSING, WebSocket.__flash.close(this.__id))
        }, WebSocket.prototype.addEventListener = function(e, t) {
            e in this.__events || (this.__events[e] = []), this.__events[e].push(t)
        }, WebSocket.prototype.removeEventListener = function(e, t) {
            if(e in this.__events) for(var i = this.__events[e], n = i.length - 1; n >= 0; --n) if(i[n] === t) {
                i.splice(n, 1);
                break
            }
        }, WebSocket.prototype.dispatchEvent = function(e) {
            for(var t = this.__events[e.type] || [], i = 0; t.length > i; ++i) t[i](e);
            var n = this["on" + e.type];
            n && n(e)
        }, WebSocket.prototype.__handleEvent = function(e) {
            "readyState" in e && (this.readyState = e.readyState), "protocol" in e && (this.protocol = e.protocol);
            var t;
            if("open" == e.type || "error" == e.type) t = this.__createSimpleEvent(e.type);
            else if("close" == e.type) t = this.__createSimpleEvent("close");
            else {
                if("message" != e.type) throw "unknown event type: " + e.type;
                var i = decodeURIComponent(e.message);
                t = this.__createMessageEvent("message", i)
            }
            this.dispatchEvent(t)
        }, WebSocket.prototype.__createSimpleEvent = function(e) {
            if(document.createEvent && window.Event) {
                var t = document.createEvent("Event");
                return t.initEvent(e, !1, !1), t
            }
            return {
                type: e,
                bubbles: !1,
                cancelable: !1
            }
        }, WebSocket.prototype.__createMessageEvent = function(e, t) {
            if(document.createEvent && window.MessageEvent && !window.opera) {
                var i = document.createEvent("MessageEvent");
                return i.initMessageEvent("message", !1, !1, t, null, null, window, null), i
            }
            return {
                type: e,
                data: t,
                bubbles: !1,
                cancelable: !1
            }
        }, WebSocket.CONNECTING = 0, WebSocket.OPEN = 1, WebSocket.CLOSING = 2, WebSocket.CLOSED = 3, WebSocket.__flash = null, WebSocket.__instances = {}, WebSocket.__tasks = [], WebSocket.__nextId = 0, WebSocket.loadFlashPolicyFile = function(e) {
            WebSocket.__addTask(function() {
                WebSocket.__flash.loadManualPolicyFile(e)
            })
        }, WebSocket.__initialize = function() {
            if(!WebSocket.__flash) {
                if(WebSocket.__swfLocation && (window.WEB_SOCKET_SWF_LOCATION = WebSocket.__swfLocation), !window.WEB_SOCKET_SWF_LOCATION) return e.error("[WebSocket] set WEB_SOCKET_SWF_LOCATION to location of WebSocketMain.swf"), void 0;
                var t = document.createElement("div");
                t.id = "webSocketContainer", t.style.position = "absolute", WebSocket.__isFlashLite() ? (t.style.left = "0px", t.style.top = "0px") : (t.style.left = "-100px", t.style.top = "-100px");
                var i = document.createElement("div");
                i.id = "webSocketFlash", t.appendChild(i), document.body.appendChild(t), swfobject.embedSWF(WEB_SOCKET_SWF_LOCATION, "webSocketFlash", "1", "1", "10.0.0", null, null, {
                    hasPriority: !0,
                    swliveconnect: !0,
                    allowScriptAccess: "always"
                }, null, function(t) {
                    t.success || e.error("[WebSocket] swfobject.embedSWF failed")
                })
            }
        }, WebSocket.__onFlashInitialized = function() {
            setTimeout(function() {
                WebSocket.__flash = document.getElementById("webSocketFlash"), WebSocket.__flash.setCallerUrl(location.href), WebSocket.__flash.setDebug( !! window.WEB_SOCKET_DEBUG);
                for(var e = 0; WebSocket.__tasks.length > e; ++e) WebSocket.__tasks[e]();
                WebSocket.__tasks = []
            }, 0)
        }, WebSocket.__onFlashEvent = function() {
            return setTimeout(function() {
                try {
                    for(var t = WebSocket.__flash.receiveEvents(), i = 0; t.length > i; ++i) WebSocket.__instances[t[i].webSocketId].__handleEvent(t[i])
                } catch(n) {
                    e.error(n)
                }
            }, 0), !0
        }, WebSocket.__log = function(t) {
            e.log(decodeURIComponent(t))
        }, WebSocket.__error = function(t) {
            e.error(decodeURIComponent(t))
        }, WebSocket.__addTask = function(e) {
            WebSocket.__flash ? e() : WebSocket.__tasks.push(e)
        }, WebSocket.__isFlashLite = function() {
            if(!window.navigator || !window.navigator.mimeTypes) return !1;
            var e = window.navigator.mimeTypes["application/x-shockwave-flash"];
            return e && e.enabledPlugin && e.enabledPlugin.filename ? e.enabledPlugin.filename.match(/flashlite/i) ? !0 : !1 : !1
        }, window.WEB_SOCKET_DISABLE_AUTO_INITIALIZATION || (window.addEventListener ? window.addEventListener("load", function() {
            WebSocket.__initialize()
        }, !1) : window.attachEvent("onload", function() {
            WebSocket.__initialize()
        }))
    }
})(), define("socket.io", function(e) {
    return function() {
        var t;
        return t || e.io
    }
}(this));
var swfobject = function() {
        function e() {
            if(!V) {
                try {
                    var e = P.getElementsByTagName("body")[0].appendChild(g("span"));
                    e.parentNode.removeChild(e)
                } catch(t) {
                    return
                }
                V = !0;
                for(var i = B.length, n = 0; i > n; n++) B[n]()
            }
        }
        function t(e) {
            V ? e() : B[B.length] = e
        }
        function i(e) {
            if(typeof A.addEventListener != M) A.addEventListener("load", e, !1);
            else if(typeof P.addEventListener != M) P.addEventListener("load", e, !1);
            else if(typeof A.attachEvent != M) v(A, "onload", e);
            else if("function" == typeof A.onload) {
                var t = A.onload;
                A.onload = function() {
                    t(), e()
                }
            } else A.onload = e
        }
        function n() {
            N ? o() : s()
        }
        function o() {
            var e = P.getElementsByTagName("body")[0],
                t = g(O);
            t.setAttribute("type", I);
            var i = e.appendChild(t);
            if(i) {
                var n = 0;
                (function() {
                    if(typeof i.GetVariable != M) {
                        var o = i.GetVariable("$version");
                        o && (o = o.split(" ")[1].split(","), W.pv = [parseInt(o[0], 10), parseInt(o[1], 10), parseInt(o[2], 10)])
                    } else if(10 > n) return n++, setTimeout(arguments.callee, 10), void 0;
                    e.removeChild(t), i = null, s()
                })()
            } else s()
        }
        function s() {
            var e = j.length;
            if(e > 0) for(var t = 0; e > t; t++) {
                var i = j[t].id,
                    n = j[t].callbackFn,
                    o = {
                        success: !1,
                        id: i
                    };
                if(W.pv[0] > 0) {
                    var s = m(i);
                    if(s) if(!y(j[t].swfVersion) || W.wk && 312 > W.wk) if(j[t].expressInstall && a()) {
                        var d = {};
                        d.data = j[t].expressInstall, d.width = s.getAttribute("width") || "0", d.height = s.getAttribute("height") || "0", s.getAttribute("class") && (d.styleclass = s.getAttribute("class")), s.getAttribute("align") && (d.align = s.getAttribute("align"));
                        for(var c = {}, h = s.getElementsByTagName("param"), p = h.length, f = 0; p > f; f++) "movie" != h[f].getAttribute("name").toLowerCase() && (c[h[f].getAttribute("name")] = h[f].getAttribute("value"));
                        l(d, c, i, n)
                    } else u(s), n && n(o);
                    else w(i, !0), n && (o.success = !0, o.ref = r(i), n(o))
                } else if(w(i, !0), n) {
                    var g = r(i);
                    g && typeof g.SetVariable != M && (o.success = !0, o.ref = g), n(o)
                }
            }
        }
        function r(e) {
            var t = null,
                i = m(e);
            if(i && "OBJECT" == i.nodeName) if(typeof i.SetVariable != M) t = i;
            else {
                var n = i.getElementsByTagName(O)[0];
                n && (t = n)
            }
            return t
        }
        function a() {
            return !q && y("6.0.65") && (W.win || W.mac) && !(W.wk && 312 > W.wk)
        }
        function l(e, t, i, n) {
            q = !0, T = n || null, C = {
                success: !1,
                id: i
            };
            var o = m(i);
            if(o) {
                "OBJECT" == o.nodeName ? (S = d(o), k = null) : (S = o, k = i), e.id = L, (typeof e.width == M || !/%$/.test(e.width) && 310 > parseInt(e.width, 10)) && (e.width = "310"), (typeof e.height == M || !/%$/.test(e.height) && 137 > parseInt(e.height, 10)) && (e.height = "137"), P.title = P.title.slice(0, 47) + " - Flash Player Installation";
                var s = W.ie && W.win ? "ActiveX" : "PlugIn",
                    r = "MMredirectURL=" + ("" + A.location).replace(/&/g, "%26") + "&MMplayerType=" + s + "&MMdoctitle=" + P.title;
                if(typeof t.flashvars != M ? t.flashvars += "&" + r : t.flashvars = r, W.ie && W.win && 4 != o.readyState) {
                    var a = g("div");
                    i += "SWFObjectNew", a.setAttribute("id", i), o.parentNode.insertBefore(a, o), o.style.display = "none", function() {
                        4 == o.readyState ? o.parentNode.removeChild(o) : setTimeout(arguments.callee, 10)
                    }()
                }
                c(e, t, i)
            }
        }
        function u(e) {
            if(W.ie && W.win && 4 != e.readyState) {
                var t = g("div");
                e.parentNode.insertBefore(t, e), t.parentNode.replaceChild(d(e), t), e.style.display = "none", function() {
                    4 == e.readyState ? e.parentNode.removeChild(e) : setTimeout(arguments.callee, 10)
                }()
            } else e.parentNode.replaceChild(d(e), e)
        }
        function d(e) {
            var t = g("div");
            if(W.win && W.ie) t.innerHTML = e.innerHTML;
            else {
                var i = e.getElementsByTagName(O)[0];
                if(i) {
                    var n = i.childNodes;
                    if(n) for(var o = n.length, s = 0; o > s; s++) 1 == n[s].nodeType && "PARAM" == n[s].nodeName || 8 == n[s].nodeType || t.appendChild(n[s].cloneNode(!0))
                }
            }
            return t
        }
        function c(e, t, i) {
            var n, o = m(i);
            if(W.wk && 312 > W.wk) return n;
            if(o) if(typeof e.id == M && (e.id = i), W.ie && W.win) {
                var s = "";
                for(var r in e) e[r] != Object.prototype[r] && ("data" == r.toLowerCase() ? t.movie = e[r] : "styleclass" == r.toLowerCase() ? s += ' class="' + e[r] + '"' : "classid" != r.toLowerCase() && (s += " " + r + '="' + e[r] + '"'));
                var a = "";
                for(var l in t) t[l] != Object.prototype[l] && (a += '<param name="' + l + '" value="' + t[l] + '" />');
                o.outerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"' + s + ">" + a + "</object>", U[U.length] = e.id, n = m(e.id)
            } else {
                var u = g(O);
                u.setAttribute("type", I);
                for(var d in e) e[d] != Object.prototype[d] && ("styleclass" == d.toLowerCase() ? u.setAttribute("class", e[d]) : "classid" != d.toLowerCase() && u.setAttribute(d, e[d]));
                for(var c in t) t[c] != Object.prototype[c] && "movie" != c.toLowerCase() && h(u, c, t[c]);
                o.parentNode.replaceChild(u, o), n = u
            }
            return n
        }
        function h(e, t, i) {
            var n = g("param");
            n.setAttribute("name", t), n.setAttribute("value", i), e.appendChild(n)
        }
        function p(e) {
            var t = m(e);
            t && "OBJECT" == t.nodeName && (W.ie && W.win ? (t.style.display = "none", function() {
                4 == t.readyState ? f(e) : setTimeout(arguments.callee, 10)
            }()) : t.parentNode.removeChild(t))
        }
        function f(e) {
            var t = m(e);
            if(t) {
                for(var i in t) "function" == typeof t[i] && (t[i] = null);
                t.parentNode.removeChild(t)
            }
        }
        function m(e) {
            var t = null;
            try {
                t = P.getElementById(e)
            } catch(i) {}
            return t
        }
        function g(e) {
            return P.createElement(e)
        }
        function v(e, t, i) {
            e.attachEvent(t, i), H[H.length] = [e, t, i]
        }
        function y(e) {
            var t = W.pv,
                i = e.split(".");
            return i[0] = parseInt(i[0], 10), i[1] = parseInt(i[1], 10) || 0, i[2] = parseInt(i[2], 10) || 0, t[0] > i[0] || t[0] == i[0] && t[1] > i[1] || t[0] == i[0] && t[1] == i[1] && t[2] >= i[2] ? !0 : !1
        }
        function b(e, t, i, n) {
            if(!W.ie || !W.mac) {
                var o = P.getElementsByTagName("head")[0];
                if(o) {
                    var s = i && "string" == typeof i ? i : "screen";
                    if(n && (x = null, $ = null), !x || $ != s) {
                        var r = g("style");
                        r.setAttribute("type", "text/css"), r.setAttribute("media", s), x = o.appendChild(r), W.ie && W.win && typeof P.styleSheets != M && P.styleSheets.length > 0 && (x = P.styleSheets[P.styleSheets.length - 1]), $ = s
                    }
                    W.ie && W.win ? x && typeof x.addRule == O && x.addRule(e, t) : x && typeof P.createTextNode != M && x.appendChild(P.createTextNode(e + " {" + t + "}"))
                }
            }
        }
        function w(e, t) {
            if(z) {
                var i = t ? "visible" : "hidden";
                V && m(e) ? m(e).style.visibility = i : b("#" + e, "visibility:" + i)
            }
        }
        function _(e) {
            var t = /[\\\"<>\.;]/,
                i = null != t.exec(e);
            return i && typeof encodeURIComponent != M ? encodeURIComponent(e) : e
        }
        var S, k, T, C, x, $, M = "undefined",
            O = "object",
            E = "Shockwave Flash",
            D = "ShockwaveFlash.ShockwaveFlash",
            I = "application/x-shockwave-flash",
            L = "SWFObjectExprInst",
            R = "onreadystatechange",
            A = window,
            P = document,
            F = navigator,
            N = !1,
            B = [n],
            j = [],
            U = [],
            H = [],
            V = !1,
            q = !1,
            z = !0,
            W = function() {
                var e = typeof P.getElementById != M && typeof P.getElementsByTagName != M && typeof P.createElement != M,
                    t = F.userAgent.toLowerCase(),
                    i = F.platform.toLowerCase(),
                    n = i ? /win/.test(i) : /win/.test(t),
                    o = i ? /mac/.test(i) : /mac/.test(t),
                    s = /webkit/.test(t) ? parseFloat(t.replace(/^.*webkit\/(\d+(\.\d+)?).*$/, "$1")) : !1,
                    r = !1,
                    a = [0, 0, 0],
                    l = null;
                if(typeof F.plugins != M && typeof F.plugins[E] == O) l = F.plugins[E].description, !l || typeof F.mimeTypes != M && F.mimeTypes[I] && !F.mimeTypes[I].enabledPlugin || (N = !0, r = !1, l = l.replace(/^.*\s+(\S+\s+\S+$)/, "$1"), a[0] = parseInt(l.replace(/^(.*)\..*$/, "$1"), 10), a[1] = parseInt(l.replace(/^.*\.(.*)\s.*$/, "$1"), 10), a[2] = /[a-zA-Z]/.test(l) ? parseInt(l.replace(/^.*[a-zA-Z]+(.*)$/, "$1"), 10) : 0);
                else if(typeof A.ActiveXObject != M) try {
                    var u = new ActiveXObject(D);
                    u && (l = u.GetVariable("$version"), l && (r = !0, l = l.split(" ")[1].split(","), a = [parseInt(l[0], 10), parseInt(l[1], 10), parseInt(l[2], 10)]))
                } catch(d) {}
                return {
                    w3: e,
                    pv: a,
                    wk: s,
                    ie: r,
                    win: n,
                    mac: o
                }
            }();
        return function() {
            W.w3 && ((typeof P.readyState != M && "complete" == P.readyState || typeof P.readyState == M && (P.getElementsByTagName("body")[0] || P.body)) && e(), V || (typeof P.addEventListener != M && P.addEventListener("DOMContentLoaded", e, !1), W.ie && W.win && (P.attachEvent(R, function() {
                "complete" == P.readyState && (P.detachEvent(R, arguments.callee), e())
            }), A == top &&
            function() {
                if(!V) {
                    try {
                        P.documentElement.doScroll("left")
                    } catch(t) {
                        return setTimeout(arguments.callee, 0), void 0
                    }
                    e()
                }
            }()), W.wk &&
            function() {
                return V ? void 0 : /loaded|complete/.test(P.readyState) ? (e(), void 0) : (setTimeout(arguments.callee, 0), void 0)
            }(), i(e)))
        }(), function() {
            W.ie && W.win && window.attachEvent("onunload", function() {
                for(var e = H.length, t = 0; e > t; t++) H[t][0].detachEvent(H[t][1], H[t][2]);
                for(var i = U.length, n = 0; i > n; n++) p(U[n]);
                for(var o in W) W[o] = null;
                W = null;
                for(var s in swfobject) swfobject[s] = null;
                swfobject = null
            })
        }(), {
            registerObject: function(e, t, i, n) {
                if(W.w3 && e && t) {
                    var o = {};
                    o.id = e, o.swfVersion = t, o.expressInstall = i, o.callbackFn = n, j[j.length] = o, w(e, !1)
                } else n && n({
                    success: !1,
                    id: e
                })
            },
            getObjectById: function(e) {
                return W.w3 ? r(e) : void 0
            },
            embedSWF: function(e, i, n, o, s, r, u, d, h, p) {
                var f = {
                    success: !1,
                    id: i
                };
                W.w3 && !(W.wk && 312 > W.wk) && e && i && n && o && s ? (w(i, !1), t(function() {
                    n += "", o += "";
                    var t = {};
                    if(h && typeof h === O) for(var m in h) t[m] = h[m];
                    t.data = e, t.width = n, t.height = o;
                    var g = {};
                    if(d && typeof d === O) for(var v in d) g[v] = d[v];
                    if(u && typeof u === O) for(var b in u) typeof g.flashvars != M ? g.flashvars += "&" + b + "=" + u[b] : g.flashvars = b + "=" + u[b];
                    if(y(s)) {
                        var _ = c(t, g, i);
                        t.id == i && w(i, !0), f.success = !0, f.ref = _
                    } else {
                        if(r && a()) return t.data = r, l(t, g, i, p), void 0;
                        w(i, !0)
                    }
                    p && p(f)
                })) : p && p(f)
            },
            switchOffAutoHideShow: function() {
                z = !1
            },
            ua: W,
            getFlashPlayerVersion: function() {
                return {
                    major: W.pv[0],
                    minor: W.pv[1],
                    release: W.pv[2]
                }
            },
            hasFlashPlayerVersion: y,
            createSWF: function(e, t, i) {
                return W.w3 ? c(e, t, i) : void 0
            },
            showExpressInstall: function(e, t, i, n) {
                W.w3 && a() && l(e, t, i, n)
            },
            removeSWF: function(e) {
                W.w3 && p(e)
            },
            createCSS: function(e, t, i, n) {
                W.w3 && b(e, t, i, n)
            },
            addDomLoadEvent: t,
            addLoadEvent: i,
            getQueryParamValue: function(e) {
                var t = P.location.search || P.location.hash;
                if(t) {
                    if(/\?/.test(t) && (t = t.split("?")[1]), null == e) return _(t);
                    for(var i = t.split("&"), n = 0; i.length > n; n++) if(i[n].substring(0, i[n].indexOf("=")) == e) return _(i[n].substring(i[n].indexOf("=") + 1))
                }
                return ""
            },
            expressInstallCallback: function() {
                if(q) {
                    var e = m(L);
                    e && S && (e.parentNode.replaceChild(S, e), k && (w(k, !0), W.ie && W.win && (S.style.display = "block")), T && T(C)), q = !1
                }
            }
        }
    }();
define("swfobject", function(e) {
    return function() {
        var t;
        return t || e.swfobject
    }
}(this)), define("player", [], function() {
    var e = {
        initDeferred: $.Deferred(),
        volume: 3,
        ephemeralCache: {},
        WSvQHQd: !1,
        init: function() {
            e.initDeferred.resolve()
        },
        oeDZMm: function(t) {
            e.WSvQHQd = t, e.setVolume(e.volume)
        },
        setVolume: function(t) {
            t != e.volume && (e.volume = t, e.previewSound && t && e.previewSound.setVolume(e.realVolume(t)), t > 0 && util.setSetting("volume", t));
            var i = e.realVolume(e.calculatedBarsVolume());
            httpStream.setVolume(i)
        },
        realVolume: function(e) {
            return e > 0 ? 100 * Math.pow(2, e - 4) : 0
        },
        barsVolume: function(e) {
            return e > 0 ? Math.max(0, Math.log(e / 100) / Math.LN2 + 4) : 0
        },
        calculatedBarsVolume: function() {
            return e.previewSound || e.WSvQHQd ? 0 : e.volume
        },
        samplePlay: function(t, i) {
            e.previewTimer && (clearTimeout(e.previewTimer), clearInterval(e.previewProgressTimer), e.previewCallback("stop")), e.previewTimer = setTimeout(e.sampleStop, 3e4), e.previewProgressTimer = setInterval(e.sampleUpdateProgress, 100), e.initDeferred.done(function() {
                e.fade(httpStream, 0), e.previewSound && e.fade(e.previewSound, 0).done(function(e) {
                    e.destruct()
                });
                var i = window.location.protocol + "//" + MEDIA_HOST + "/previewfile/?fileid=" + t;
                e.previewSound = soundManager.createSound({
                    id: "preview" + t,
                    url: i
                }), e.previewSound.play();
                var n = e.realVolume(e.volume || 3);
                e.previewSound.setVolume(n)
            }), e.previewCallback = i
        },
        sampleUpdateProgress: function() {
            try {
                var t = 100 * (Number(e.previewSound.position) / 27e3) + "%";
                e.previewCallback("progress", t)
            } catch(i) {}
        },
        sampleStop: function() {
            e.previewTimer && (clearTimeout(e.previewTimer), clearInterval(e.previewProgressTimer), e.previewTimer = null, e.previewProgressTimer = null, e.previewSound && (e.fade(e.previewSound, 0).done(function(e) {
                e.destruct()
            }), e.previewSound = null), e.fade(httpStream, e.calculatedBarsVolume())), e.previewCallback && (e.previewCallback("stop"), e.previewCallback = null)
        },
        fade: function(t, i, n) {
            var o = $.Deferred();
            n && "number" == typeof n || (n = 1.5);
            var s = e.barsVolume(t.volume),
                r = i - s,
                a = util.now(),
                l = setInterval(function() {
                    var u = (util.now() - a) / (1e3 * n);
                    1 > u ? t.setVolume(e.realVolume(s + u * r)) : (t.setVolume(e.realVolume(i)), clearInterval(l), o.resolve(t))
                }, 100);
            return o.promise()
        },
        playEphemeral: function(t, i) {
            e.initDeferred.done(function() {
                e.loadEphemeralUrl(t, i)
            })
        },
        loadEphemeralUrl: function(t, i) {
            var n = null;
            if(i && (n = e.ephemeralCache[t]), n) {
                if(n.playState) return n.setPosition(0), void 0
            } else {
                var o = {
                    id: "ephemeral" + util.now(),
                    url: t
                };
                i || (o.onfinish = function() {
                    this.destruct()
                }), n = soundManager.createSound(o), i && (e.ephemeralCache[t] = n)
            }
            n.setVolume(e.realVolume(e.volume)), n.play()
        }
    };
    return e
}), jQuery.cookie = function(e, t, i) {
    if(arguments.length > 1 && "[object Object]" != t + "") {
        if(i = jQuery.extend({}, i), (null === t || void 0 === t) && (i.expires = -1), "number" == typeof i.expires) {
            var n = i.expires,
                o = i.expires = new Date;
            o.setDate(o.getDate() + n)
        }
        return t += "", document.cookie = [encodeURIComponent(e), "=", i.raw ? t : encodeURIComponent(t), i.expires ? "; expires=" + i.expires.toUTCString() : "", i.path ? "; path=" + i.path : "", i.domain ? "; domain=" + i.domain : "", i.secure ? "; secure" : ""].join("")
    }
    i = t || {};
    var s, r = i.raw ?
    function(e) {
        return e
    } : decodeURIComponent;
    return(s = RegExp("(?:^|; )" + encodeURIComponent(e) + "=([^;]*)").exec(document.cookie)) ? r(s[1]) : null
}, define("jquery.cookie", function() {}), define("tt-common", ["require", "util", "jquery.cookie"], function(e) {
    var t = e("util");
    e("jquery.cookie");
    var i = {
        getUser: function() {
            var e = {};
            return e.id = t.getUrlParam("ui"), e.auth = t.getUrlParam("ua"), e.id && e.auth || (e.id = $.cookie("turntableUserId"), e.auth = $.cookie("turntableUserAuth")), e.id && e.auth ? e : null
        },
        logout: function() {
            $.cookie("turntableUserId", null, {
                path: "/",
                expires: 0
            }), $.cookie("turntableUserAuth", null, {
                path: "/",
                expires: 0
            }), $.cookie("turntableUserNamed", null, {
                path: "/",
                expires: 0
            });
            var e = function() {
                    window.location.replace("/")
                };
            FB && FB.getAuthResponse() ? FB.logout(e) : e()
        }
    };
    return i
}), jQuery.fn.limitMaxLength = function(e) {
    var t = jQuery.extend({
        attribute: "maxlength",
        onLimit: function() {},
        onEdit: function() {}
    }, e),
        i = function() {
            var e = jQuery(this),
                i = parseInt(e.attr(t.attribute));
            e.val().length > i && (e.val(e.val().substr(0, i)), jQuery.proxy(t.onLimit, this)()), jQuery.proxy(t.onEdit, this)(i - e.val().length)
        };
    return this.each(i), this.keyup(i).keydown(i).focus(i)
}, define("jquery.maxlength", function() {}), define("user", ["require", "util", "action-modal", "modal", "sticker", "tt-common", "jquery.maxlength", "main"], function(e) {
    var t = e("util"),
        i = e("action-modal"),
        n = e("modal"),
        o = e("sticker"),
        s = e("tt-common");
    e("jquery.maxlength");
    var r, a = {
        djPoints: 0,
        acl: 0,
        fanOf: [],
        buddies: [],
        blockedUsers: {},
        images: {},
        init: function() {
            r = e("main");
            var t = a.initAuth();
            return t.done(a.updateDom, a.getUserInfo), r.uRzNYq({
                api: "block.list_all"
            }, function(e) {
                $.each(e.blocks, function() {
                    a.blockedUsers[this.block.blockedid] = !0
                })
            }), t
        },
        initAuth: function() {
            var e = $.Deferred();
            return a.id = $.cookie("turntableUserId"), a.auth = $.cookie("turntableUserAuth"), a.named = "false" != $.cookie("turntableUserNamed"), LOG("Authenticating user..."), r.uRzNYq({
                api: "user.authenticate"
            }, function(t) {
                t.success ? e.resolve() : r.cjAgpz.lobbyRedirect(3)
            }), e.promise()
        },
        elements: {},
        view: null,
        updateDom: function() {
            a.elements = {}, a.view = t.buildTree(a.layouts[a.named ? "signedIn" : "guest"], a.elements), $("#userauth").empty().append(a.view), r.addEventListener("avatarchange", a.updateAvatarHead)
        },
        updateAvatarHead: function() {
            $(".settings-head").css("background-image", "url(" + a.images.headfront + ")")
        },
        loginSubmit: function() {},
        signUpSubmit: function() {
            var e = $.trim($("#userSignUpName")[0].value),
                t = $.trim($("#userSignUpEmail")[0].value),
                i = $("#userSignUpPasswd")[0].value,
                n = $("#userSignUpPasswd2")[0].value;
            return i != n ? (alert("passwords do not match"), void 0) : (a.signUp(e, t, i), void 0)
        },
        getUserInfo: function() {
            r.uRzNYq({
                api: "user.info"
            }, function(e) {
                a.setDisplayName(e.name), a.djPoints = e.points, a.avatarId = e.avatarid, r.dispatchEvent("avatarchange"), a.acl = e.acl, a.custom_avatar = e.custom_avatar, a.images = {}, a.images.headfront = e.images.headfront, a.images.fullfront = e.images.fullfront, r.uRzNYq({
                    api: "user.get_fan_of"
                }, function(e) {
                    a.fanOf = e.fanof, r.dispatchEvent("userinfo")
                }), r.uRzNYq({
                    api: "user.get_buddies"
                }, function(e) {
                    a.buddies = e.buddies
                }), a.updateAvatarHead(), a.custom_avatar && $("li.avatar-option").hide()
            });
            var e = "linux"; - 1 != navigator.userAgent.indexOf("Macintosh") || -1 != navigator.userAgent.indexOf("iPhone") || -1 != navigator.userAgent.indexOf("iPad") ? e = "mac" : -1 != navigator.userAgent.indexOf("Windows") ? e = "pc" : -1 != navigator.userAgent.indexOf("CrOS") && (e = "chrome"), setTimeout(function() {
                r.uRzNYq({
                    api: "user.modify",
                    laptop: e
                })
            }, 2e3), a.laptop = e
        },
        setDisplayName: function(e) {
            a.displayName = e, $(".bindUserName").text(e)
        },
        avatarsShow: function() {
            var e = {};
            t.buildTree(a.layouts.avatarsView(), e), r.uRzNYq({
                api: "user.available_avatars"
            }, function(t) {
                ASSERT(t.success, "Failed to get available avatars"), a.avatarsShowTiers(e.tiers, t.avatars), e.modal.show()
            })
        },
        avatarsShowTiers: function(e, i) {
            for(var n = 0; i.length > n; n++) {
                var o = i[n];
                if(o.acl) var s = "Superusers";
                else var s = o.min + (i.length > n + 2 ? "-" + (i[n + 1].min - 1) : "+") + " Points";
                for(var r = t.buildTree(a.layouts.avatarTier(s)), l = $(r).find(".avatarList"), u = a.djPoints >= o.min && a.acl >= (o.acl || 0), d = 0; o.avatarids.length > d; d++) {
                    var c = t.buildTree(a.layouts.avatarImg(o.avatarids[d], u));
                    avatars && avatars[o.avatarids[d]] !== void 0 && l.append(c), o.avatarids[d] == a.avatarId && $(c).addClass("currentAvatar")
                }
                $(e).append(r)
            }
        },
        avatarLoad: function() {
            var e = $(this).closest("div.avatar");
            e.css("width", this.width), e.css("height", this.height);
            var t = 150;
            t > this.width && (e.css("padding-left", (t - this.width) / 2), e.css("padding-right", (t - this.width) / 2)), t > this.height && (e.css("padding-top", (t - this.height) / 2), e.css("padding-bottom", (t - this.height) / 2)), $(this).addClass("shrink")
        },
        avatarShrink: function() {
            $(this).addClass("shrink")
        },
        avatarUnshrink: function() {
            $(this).removeClass("shrink")
        },
        avatarClick: function() {
            $(".avatar.currentAvatar").removeClass("currentAvatar"), $(this).closest(".avatar").addClass("currentAvatar")
        },
        avatarClose: function() {
            var e = $(".avatar.currentAvatar").data("avatarId");
            e != a.avatarId && (a.avatarId = e, r.uRzNYq({
                api: "user.set_avatar",
                avatarid: e
            }, function(e) {
                e.success && r.dispatchEvent("avatarchange")
            }))
        },
        settingsShow: function() {
            r.uRzNYq({
                api: "user.get_profile"
            }, function(e) {
                t.buildTree(a.layouts.settingsView(), a);
                var i = a.modal.$node;
                i.find("#displayNameField").val(a.displayName), i.find("#twitterField").val(e.twitter), i.find("#facebookField").val(e.facebook), i.find("#websiteField").val(e.website), i.find("#aboutField").val(e.about), i.find("#aboutField").limitMaxLength(), i.find("#topArtistsField").val(e.topartists), i.find("#topArtistsField").limitMaxLength(), i.find("#hangoutField").val(e.hangout), i.find("#hangoutField").limitMaxLength(), i.find("#displayNameFieldWrapper").tipsy({
                    className: "fieldWrapperTipsy",
                    opacity: 1,
                    gravity: "n",
                    fade: !0
                }), a.modal.show()
            })
        },
        settingsSubmit: function() {
            var e = $("#displayNameField").val(),
                t = $("#twitterField").val(),
                i = $("#facebookField").val(),
                n = $("#websiteField").val(),
                o = $("#aboutField").val(),
                s = $("#topArtistsField").val(),
                l = $("#hangoutField").val(),
                u = a.modal;
            return r.uRzNYq({
                api: "user.modify_profile",
                name: e,
                twitter: t,
                facebook: i,
                website: n,
                about: o,
                topartists: s,
                hangout: l
            }, function(t) {
                return t.success ? (a.setDisplayName(e), u.close(), void 0) : (u.showAlert("Sorry, " + t.err), void 0)
            }), !1
        },
        ignoredShow: function() {
            t.buildTree(a.layouts.ignoredView(), a), a.modal.show();
            var e = function(e) {
                    if(!($("#" + e).length > 0)) {
                        var i = function() {
                                var e = $(this).parent();
                                return r.uRzNYq({
                                    api: "block.remove",
                                    blockedid: e.attr("id")
                                }, function(t) {
                                    t && t.success ? (e.hide("slow", function() {
                                        $(this).remove()
                                    }), delete a.blockedUsers[e.attr("id")], r.buddyList.updateIgnored()) : $("#addIgnoreFieldError").html("An error occurred when removing the user").show("slow")
                                }), !1
                            },
                            n = t.buildTree(["li#" + e + ".ignored",
                            {}, ["a.remove",
                            {
                                event: {
                                    click: i
                                }
                            }],
                                ["span.name",
                                {}, "Loading..."]
                            ]);
                        return r.uRzNYq({
                            api: "user.get_profile",
                            userid: e
                        }, function(t) {
                            $("#" + e + " span.name").html(t.name)
                        }), n
                    }
                };
            r.uRzNYq({
                api: "block.list_all"
            }, function(t) {
                $.each(t.blocks, function() {
                    var t = this.block;
                    $("ul#ignoredUsers").append(e(t.blockedid)), a.blockedUsers = {}, a.blockedUsers[this.block.blockedid] = !0, r.buddyList.updateIgnored()
                })
            });
            var i = "Enter a username...";
            $("div.addIgnore input").val(i).addClass("default"), $("div.addIgnore input").focus(function() {
                $(this).val() == i && $(this).val("").removeClass("default")
            }), $("div.addIgnore input").keyup(function(e) {
                13 == e.keyCode && $("div.addIgnore button").click()
            }), $("div.addIgnore input").focus(function() {
                setTimeout(function() {
                    $("#addIgnoreFieldError").hide("slow")
                }, 1e3)
            }), $("div.addIgnore button").click(function() {
                var t = $("#addIgnoreField").val();
                $.trim(t).length > 0 && r.uRzNYq({
                    api: "user.get_id",
                    name: t
                }, function(t) {
                    t && t.success ? r.uRzNYq({
                        api: "block.add",
                        blockedid: t.userid
                    }, function(i) {
                        i.success ? ($("ul#ignoredUsers").append(e(t.userid)), $("#" + t.userid).hide().show("slow"), $("#addIgnoreField").val(""), a.blockedUsers[t.userid] = !0, r.buddyList.updateIgnored()) : a.modal.showAlert(i.err)
                    }) : a.modal.showAlert(t.err)
                })
            })
        }
    };
    return a.layouts = {
        signedIn: ["div#settings.dropdown-container", ["div#settings-button", ["div.settings-head"]],
            ["ul.floating-menu.down#settings-dropdown", ["li.option.avatar-option",
            {
                event: {
                    click: a.avatarsShow
                }
            }, "Change avatar"],
                ["li.option",
                {
                    event: {
                        click: a.settingsShow
                    }
                }, "Edit my profile"],
                ["li.option",
                {
                    event: {
                        click: o.showEditor
                    }
                }, "Laptop stickers"],
                ["li.option",
                {
                    event: {
                        click: a.ignoredShow
                    }
                }, "Ignored users"],
                ["li.option.split-option#layout-option",
                {
                    title: "Choose between one or two sidebars"
                }, ["div.description", "Layout"],
                    ["div.options", ["div.option.single-panel",
                    {
                        data: {
                            layout: "single"
                        }
                    }],
                        ["div.option.dual-panel",
                        {
                            data: {
                                layout: "dual"
                            }
                        }]
                    ]
                ],
                ["li.option.special",
                {
                    event: {
                        click: s.logout
                    }
                }, "Logout"]
            ]
        ],
        avatarsView: function() {
            return [n, {
                title: "Choose Avatar",
                cssClass: "avatarsModal",
                closeCallback: a.avatarClose
            }, ["p.djPointsMsg", ["span.djName", "DJ ", ["span.bindUserName",
            {},
            a.displayName]], ", you have ", ["span.djPoints",
            {},
            a.djPoints], " points."], ["p.djPointsMsg", "Earn more points to unlock new avatars."], ["div##tiers.avatarTiers"]]
        },
        avatarTier: function(e) {
            return ["div.tier", {}, ["div.reqsHeader",
            {},
            e], ["div.avatarList"]]
        },
        avatarImg: function(e, t) {
            return ["div.avatar" + (t ? "" : ".locked"), {
                data: {
                    avatarId: e
                }
            }, ["img.avatarImg",
            {
                src: "/roommanager_assets/avatars/" + e + "/fullfront.png",
                event: {
                    load: a.avatarLoad,
                    mouseover: t && a.avatarUnshrink,
                    mouseout: t && a.avatarShrink,
                    click: t && a.avatarClick
                }
            }], t ? null : ["img.lockedIcon",
            {
                src: "https://s3.amazonaws.com/static.turntable.fm/images/overlay/avatar_locked_icon.png"
            }], ["div.djName",
            {}, "DJ " + a.displayName]]
        },
        settingsView: function() {
            return [i, {
                title: "Edit Profile",
                width: 480,
                submitCallback: a.settingsSubmit,
                submitText: "Save"
            }, ["div.fields",
            {}, ["div.field.settings",
            {}, ["div#displayNameFieldWrapper",
            {
                title: "Can't be changed more than once every seven days"
            }, ["div",
            {}, "Display Name:"],
                ["input#displayNameField.text.name"]
            ],
                ["div",
                {}, "Twitter Name:"],
                ["input#twitterField.text.twitter",
                {
                    maxlength: 15
                }],
                ["div",
                {}, "Facebook URL:"],
                ["input#facebookField.text.facebook"],
                ["div",
                {}, "Website:"],
                ["input#websiteField.text.website"],
                ["div",
                {}, "Write something about yourself:"],
                ["textarea#aboutField.textarea",
                {
                    maxlength: 400
                }],
                ["div",
                {}, "Got some favorite artists?"],
                ["textarea#topArtistsField.textarea",
                {
                    maxlength: 400
                }],
                ["div",
                {}, "Where do you usually hang out on turntable?"],
                ["textarea#hangoutField.textarea",
                {
                    maxlength: 400
                }]
            ]]]
        },
        ignoredView: function() {
            return [n, {
                title: "Ignored Users",
                cssClass: "ignoreModal"
            }, ["div.field", ["div.ignoredDescription", "Someone bothering you? Add a user to this list to block their incoming chat messages."],
                ["div.addIgnore", ["input#addIgnoreField",
                {
                    size: "15"
                }],
                    ["button",
                    {}],
                    ["div#addIgnoreFieldError",
                    {}]
                ],
                ["ul#ignoredUsers",
                {}]
            ]]
        }
    }, a
}), define("pmwindow", ["require", "class", "util", "player", "user"], function(e) {
    var t = e("class"),
        i = e("util"),
        n = e("player"),
        o = e("user"),
        s = t.extend({
            buddyList: {},
            otherUser: {},
            otherUserId: !1,
            otherUserName: !1,
            isClosed: !0,
            isMinimized: !1,
            isOverflow: !1,
            lastActive: !1,
            firstPM: !1,
            iAmUnavailable: !1,
            hasError: !1,
            isIgnored: !1,
            init: function(e, t, n) {
                this.buddyList = t, this.otherUser = e, this.otherUserId = e.userid, this.otherUserName = e.name, this.lastActive = (new Date).getTime(), this.nodes = {}, this.lastSpeakerName = null, this.$lastPMMessage = null;
                var o = "status" in e ? e.status : "available";
                this.pmWindow = $(i.buildTree(s.layouts.pmWindow(this.otherUser, o, $.proxy(this.toggleOptions, this)), this.nodes));
                var r = $(".pmContainer").last();
                r.length && this.pmWindow.css({
                    left: r.offset().left + r.outerWidth() + 10 + "px"
                }), $("#closedPMWindows").append(this.pmWindow), this.addPMHistory(), this.updateStatus(o, !1, !0), this.updateMyAvailability(!0), this.setIgnored(n, !0), $(this.nodes.pmInput).autosize().on("keydown", $.proxy(this.pmKeyDown, this)), $(this.nodes.pmInputForm).submit($.proxy(this.sendPM, this)), $(this.nodes.close).click($.proxy(function() {
                    this.close()
                }, this)), $(this.nodes.header).click($.proxy(function() {
                    this.toggleMinimize()
                }, this))
            },
            addPM: function(e, t, i) {
                if(this.open(!1), this.firstPM || (this.firstPM = e), i) {
                    this.hasError = !0;
                    var n = !1;
                    4 == i ? n = "offline" : 5 == i ? n = "unavailable" : 6 == i && this.updateMyAvailability(), n && this.updateStatus(n, !0)
                } else if(!i && this.otherUser.status.match(/offline|unavailable/)) return turntable.uRzNYq({
                    api: "presence.get",
                    uid: this.otherUserId
                }, $.proxy(function(i) {
                    i.success && "presence" in i && this.updateStatus(i.presence.status, !0), e.text && this.addPMText(e.text, t, this.hasError)
                }, this)), void 0;
                e.text && this.addPMText(e.text, t, this.hasError)
            },
            addPMText: function(e, t, n, r) {
                var a, l, u = "/me " === e.substr(0, 4),
                    d = !1;
                if(u) this.lastSpeakerName = null, d = !0, a = $(i.buildTree(s.layouts.pmStatus({}))), a.find(".text").html(i.messageFilter(e.substr(3))), a.find(".subject").text(t ? o.displayName : this.otherUserName);
                else {
                    var c = "",
                        h = this.lastSpeakerName;
                    t ? (this.lastSpeakerName = c = "Me", l = o.images.headfront) : (this.lastSpeakerName = c = this.otherUserName, l = this.otherUser.images.headfront), null !== h && h === this.lastSpeakerName ? a = this.$lastPMMessage : (a = $(i.buildTree(s.layouts.pm(c, n))), d = !0, this.$lastPMMessage = a, a.find(".avatar").css("background-image", "url(" + l + ")"));
                    var p = $(i.buildTree(["div.text"])).html(i.messageFilter(e));
                    a.find(".textContainer").append(p)
                }
                var f = r ? $(this.nodes.history) : $(this.nodes.content);
                d && f.append(a), this.redraw(), t || $(this.nodes.container).find("textarea:focus").length || r || ($(this.nodes.header).addClass("newMessage"), this.isOverflow && ($("div#pmOverflowIcon").addClass("newMessage"), $(this.nodes.overflowListItem).addClass("newMessage")), this.playDing(), $(this.nodes.container).one("click", $.proxy(function() {
                    $(this.nodes.header).removeClass("newMessage")
                }, this)))
            },
            addPMHistory: function() {
                turntable.uRzNYq({
                    api: "pm.history",
                    receiverid: this.otherUserId
                }, $.proxy(function(e) {
                    if(e.success && e.history.length) {
                        this.lastSpeakerName = null, $(this.nodes.historyDivider).show();
                        for(var t = 0; e.history.length > t; t++) {
                            var i = e.history[t],
                                n = i.senderid !== this.otherUserId;
                            this.addPMText(e.history[t].text, n, !1, !0)
                        }
                        if(this.firstPM && "text" in this.firstPM && "time" in this.firstPM && e.history[e.history.length - 1].text == this.firstPM.text && e.history[e.history.length - 1].time == this.firstPM.time) {
                            var o = $(this.nodes.history).find(".text").last();
                            0 === o.siblings(".text").length ? o.closest(".message").remove() : o.remove()
                        }
                        this.lastSpeakerName = null
                    }
                }, this))
            },
            pmKeyDown: function(e) {
                var t = (e.target, e.charCode || e.keyCode);
                13 === t && (this.sendPM(), e.preventDefault())
            },
            sendPM: function(e) {
                e && e.preventDefault();
                var t = $.trim(this.nodes.pmInput.value);
                $(this.nodes.pmInput).val("").trigger("autosize"), t && (this.isIgnored ? this.addPMText(t, !0, !0) : turntable.uRzNYq({
                    api: "pm.send",
                    receiverid: this.otherUserId,
                    text: t
                }, $.proxy(function(e) {
                    e.success ? this.addPM({
                        text: t
                    }, !0) : e.errid && this.addPM({
                        text: t
                    }, !0, e.errid)
                }, this)))
            },
            updateStatus: function(e, t, i) {
                if(i || e != this.otherUser.status) {
                    var n = this.otherUser.status;
                    this.showErrors(e), i || this.showStatusMessage(n, e), this.otherUser.status = e, $(this.nodes.status).removeClass("available away offline unavailable iphone").addClass(e), t && this.buddyList.updateBuddyStatus(this.otherUser)
                }
            },
            showErrors: function(e) {
                var t = !1;
                this.iAmUnavailable && 2 != this.otherUser.acl ? t = "You are currently unavailable and cannot send or receive messages." : "offline" == e ? t = this.otherUserName + " is offline, your message(s) cannot be delivered." : this.isIgnored ? t = "You have ignored " + this.otherUserName + " and cannot exchange messages with them." : "unavailable" == e && 2 != o.acl ? t = this.otherUserName + " is unavailable, your message(s) cannot be delivered." : "no_pm" == e && (t = this.otherUserName + " is using a mobile app, which currently does " + "not support private messages. Your message(s) cannot be delivered."), t ? (this.addError(t), this.hasError = !0) : (this.removeError(), this.hasError = !1)
            },
            addError: function(e) {
                $(this.nodes.container).find(".pmError").length && this.removeError(), $(this.nodes.content).after(i.buildTree(s.layouts.pmError(e), this.nodes));
                var t = $(this.nodes.error).outerHeight(!0);
                $(this.nodes.content).css({
                    minHeight: parseInt($(this.nodes.content).css("minHeight")) - t + "px",
                    maxHeight: parseInt($(this.nodes.content).css("maxHeight")) - t + "px"
                }), this.redraw()
            },
            removeError: function() {
                if($(this.nodes.container).find(".pmError").length) {
                    var e = $(this.nodes.error).outerHeight(!0);
                    $(this.nodes.error).remove(), $(this.nodes.content).css({
                        minHeight: parseInt($(this.nodes.content).css("minHeight")) + e + "px",
                        maxHeight: parseInt($(this.nodes.content).css("maxHeight")) + e + "px"
                    })
                }
                this.redraw()
            },
            showStatusMessage: function(e, t) {
                this.lastSpeakerName = null;
                var n = !1;
                "offline" == t ? n = {
                    text: this.otherUserName + " went offline.",
                    color: "red"
                } : "unavailable" == t || "no_pm" == t ? n = {
                    text: this.otherUserName + " became unavailable.",
                    color: "red"
                } : "away" != t && "available" != t || "offline" != e ? "away" != t && "available" != t || "unavailable" != e && "no_pm" != e ? "ignored" == t && "unignored" == e ? n = {
                    text: "You ignored " + this.otherUserName + ".",
                    color: "red"
                } : "unignored" == t && "ignored" == e ? n = {
                    text: "You unignored " + this.otherUserName + ".",
                    color: "green"
                } : "senderUnavailable" == t && "senderAvailable" == e ? n = {
                    text: "You became unavailable.",
                    color: "red"
                } : "senderAvailable" == t && "senderUnavailable" == e && (n = {
                    text: "You became available.",
                    color: "green"
                }) : n = {
                    text: this.otherUserName + " became available.",
                    color: "green"
                } : n = {
                    text: this.otherUserName + " came online.",
                    color: "green"
                }, n && $(this.nodes.content).append(i.buildTree(s.layouts.pmStatus(n))), this.redraw()
            },
            updateMyAvailability: function(e) {
                this.iAmUnavailable != turntable.isUnavailable && (!this.iAmUnavailable && turntable.isUnavailable ? (this.iAmUnavailable = !0, e || this.showStatusMessage("senderAvailable", "senderUnavailable")) : this.iAmUnavailable && !turntable.isUnavailable && (this.iAmUnavailable = !1, e || this.showStatusMessage("senderUnavailable", "senderAvailable")), this.showErrors(this.otherUser.status))
            },
            open: function(e) {
                this.lastActive = (new Date).getTime(), this.isClosed || this.isOverflow && e ? (this.isClosed = !1, this.isMinimized = !1, $(this.nodes.container).queue($.proxy(function() {
                    this.unOverflow(!1), e ? $(this.nodes.container).detach().prependTo("#pmWindows") : $(this.nodes.container).detach().appendTo("#pmWindows"), $(this.nodes.container).css({
                        marginBottom: -$(this.nodes.container).height() + "px"
                    }), this.buddyList.repositionPMWindows(!1), this.isOverflow || this.animateOpen(e), $(this.nodes.container).dequeue()
                }, this)), "no_pm" != this.otherUser.status && turntable.uRzNYq({
                    api: "presence.get",
                    uid: this.otherUserId
                }, $.proxy(function(e) {
                    e.success && "presence" in e && this.updateStatus(e.presence.status, !0)
                }, this))) : this.isMinimized && e && this.toggleMinimize()
            },
            animateOpen: function(e) {
                $(this.nodes.container).animate({
                    marginBottom: "0px"
                }, "fast", $.proxy(function() {
                    e && $(this.nodes.pmInput).focus()
                }, this)), this.nodes.content.scrollTop += this.nodes.content.scrollHeight, this.nodes.content.scrollLeft = 0
            },
            close: function(e) {
                this.isClosed || (this.isClosed = !0, $(this.nodes.container).animate({
                    marginBottom: -$(this.nodes.container).height() + "px"
                }, "fast"), $(this.nodes.container).queue($.proxy(function() {
                    $(this.nodes.container).detach().appendTo("#closedPMWindows"), this.buddyList.repositionPMWindows(!0), $(this.nodes.container).dequeue()
                }, this)), e && e.stopPropagation())
            },
            redraw: function() {
                this.nodes.content.scrollTop += 2e3, this.nodes.content.scrollLeft = 0, this.repositionMinimized()
            },
            toggleMinimize: function() {
                0 > parseInt($(this.nodes.container).css("margin-bottom")) ? (this.isMinimized = !1, $(this.nodes.container).animate({
                    marginBottom: "0px"
                }, "fast")) : (this.isMinimized = !0, this.repositionMinimized(!0))
            },
            repositionMinimized: function(e) {
                this.isMinimized && (e ? $(this.nodes.container).animate({
                    marginBottom: -$(this.nodes.container).height() + 28 + "px"
                }, "fast") : $(this.nodes.container).css({
                    marginBottom: -$(this.nodes.container).height() + 28 + "px"
                }))
            },
            overflow: function() {
                if(!this.isOverflow) {
                    this.isOverflow = !0, $(this.nodes.container).detach().appendTo("#overflowPMWindows");
                    var e = BuddyListPM.layouts.buddyListBuddy(this.otherUser, this.buddyList.room, !0);
                    $(this.buddyList.nodes.pmOverflowList).append(i.buildTree(e, this.nodes))
                }
            },
            unOverflow: function(e) {
                this.isOverflow && (this.isOverflow = !1, $(this.nodes.container).detach().appendTo("#pmWindows").css({
                    marginBottom: -$(this.nodes.container).height() + "px"
                }), $(this.nodes.overflowListItem).remove(), $("#pmOverflowList li.newMessage").length || $("div#pmOverflowIcon").removeClass("newMessage"), e && this.animateOpen(!1))
            },
            toggleOptions: function(e) {
                this.isMinimized && this.toggleMinimize();
                var t = $(this.nodes.optionsContainer);
                t.is(":visible") ? t.fadeOut("fast") : (this.refreshOptions(), $(this.nodes.optionsContainer).fadeIn("fast")), e && e.stopPropagation()
            },
            refreshOptions: function() {
                var e = s.layouts.pmWindowOptions(this.otherUser, $.proxy(this.toggleOptions, this));
                $(this.nodes.optionsContainer).replaceWith(i.buildTree(e, this.nodes))
            },
            setIgnored: function(e, t) {
                this.isIgnored != e && (this.isIgnored = e, this.showErrors(), e && !t ? this.showStatusMessage("unignored", "ignored") : e || t || this.showStatusMessage("ignored", "unignored"))
            },
            playDing: function() {
                "false" == i.getSetting("pmding") || this.isMinimized || n.playEphemeral(UI_SOUND_PM, !0)
            }
        });
    return s.layouts = {
        pmWindow: function(e, t, i) {
            var n = {
                event: {
                    mouseenter: function() {
                        $(this).addClass("hover")
                    },
                    mouseleave: function() {
                        $(this).removeClass("hover")
                    }
                }
            },
                o = $.extend(!0, {}, n);
            return o.event.click = i, ["div##container.pmContainer",
            {
                data: {
                    userId: e.userid
                }
            }, ["div##header.pmHeader.pmGreyTop", n, e.name, ["div##status.status." + t],
                ["div##close.pmWindowIcon.pmClose", n],
                ["div.pmWindowIcon.pmOptions", o]
            ],
                ["div##content.pmContent",
                {}, ["div##history.pmHistory"],
                    ["div##historyDivider.pmHistoryDivider",
                    {}, ["span.pmHistoryDividerText",
                    {}, "Earlier messages"]]
                ],
                ["div.pmInput.floating-panel-bar",
                {}, ["form##pmInputForm",
                {}, ["textarea##pmInput.message-input",
                {
                    placeholder: "enter a message"
                }]]], s.layouts.pmWindowOptions(e, i, o)]
        },
        pmWindowOptions: function(e, t, i) {
            i || (i = {
                event: {
                    mouseover: function() {
                        $(this).addClass("hover")
                    },
                    mouseout: function() {
                        $(this).removeClass("hover")
                    },
                    click: t
                }
            });
            var n = $.extend(!0, {}, i);
            n.event.click = function() {
                turntable.cjAgpz.GVAGXLCallback("profile", e.userid), t()
            };
            var s = -1 != $.inArray(e.userid, o.fanOf),
                r = s ? "Unfan" : "Become a fan",
                a = s ? "remove_fan" : "become_fan",
                l = $.extend(!0, {}, i);
            l.event.click = function() {
                turntable.cjAgpz.GVAGXLCallback(a, e.userid), t()
            };
            var u = $.extend(!0, {}, i);
            u.event.click = function() {
                o.ignoredShow(), $("#addIgnoreField").length && ($("#addIgnoreField").focus()[0].value = e.name), t()
            };
            var d = $.extend(!0, {}, i);
            return d.event.click = function() {
                var i = turntable.cjAgpz.roomId,
                    n = turntable.cjAgpz.section;
                turntable.cjAgpz.setupReportOverlay(e.userid, e.name, i, n, "user"), t()
            }, ["div##optionsContainer.pmOptionsContainer.contextual-popup",
            {}, ["div.pmOptionsIconActive.nib", i],
                ["div.pmOptionsContent.options",
                {}, ["div.pmOption.option", n, "View Profile"],
                    ["div.pmOption.option", l, r],
                    ["div.pmOption.option", u, "Ignore User"],
                    ["div.pmOption.option", d, "Report User"]
                ]
            ]
        },
        pm: function(e, t) {
            var i = t ? ".notSent" : "";
            return ["div.message" + i, {}, ["div.avatar"], ["div.speaker", e], ["div.textContainer"]]
        },
        pmStatus: function(e) {
            return ["div.pmStatus.message" + (e.color ? "." + e.color : ""), ["span.subject"], ["span.text", e.text]]
        },
        pmError: function(e) {
            return ["div##error.pmError", {}, e]
        }
    }, s
}), define("buddylistpm", ["require", "class", "util", "pmwindow", "user"], function(e) {
    var t = e("class"),
        i = e("util"),
        n = e("pmwindow"),
        o = e("user"),
        s = t.extend({
            room: {},
            knownUsers: {},
            onlineBuddies: {},
            nodes: {},
            pmWindows: {},
            status: "available",
            init: function(e) {
                this.room = e, $("body").append(i.buildTree(["div#pmWindows"])), $("body").append($(i.buildTree(["div#closedPMWindows"])).hide()), $("body").append($(i.buildTree(["div#overflowPMWindows"])).hide());
                var t = $(i.buildTree(s.layouts.privateChatIcon(turntable.isIdle), this.nodes));
                t.click(this.toggle), $("#pmWindows").append(t);
                var n = s.layouts.buddyList(this.toggleOptions, $.proxy(this.toggleUnavailable, this), $.proxy(this.toggleDing, this)),
                    o = $(i.buildTree(n, this.nodes)).hide();
                $("#maindiv").append(o), $(this.nodes.optionsContainer).hide(), turntable.isUnavailable && $(this.nodes.unavailableWarning).show(), $(this.nodes.buddyListHeader).click(this.toggle);
                var r = $(i.buildTree(s.layouts.pmOverflowIcon(), this.nodes)).hide();
                $("#pmWindows").append(r);
                var a = $(i.buildTree(s.layouts.pmOverflow(), this.nodes)).hide();
                $("#maindiv").append(a), $(window).resize($.proxy(this.repositionPMWindows, this)), turntable.uRzNYq({
                    api: "room.directory_graph"
                }, $.proxy(function(e) {
                    this.updateBuddies(e)
                }, this))
            },
            updateMyStatus: function(e) {
                e != this.status && (this.status = e, $(this.nodes.status).removeClass("available away offline unavailable").addClass(e))
            },
            updateBuddies: function(e) {
                if(1 == e.success) {
                    $(this.nodes.buddyList).empty();
                    var t = [],
                        n = {};
                    if(e.rooms && e.rooms.length) {
                        for(var r = 0, a = e.rooms.length; a > r; r++) {
                            var l = e.rooms[r];
                            if(l.length && l[1].length) for(var u = 0, d = l[1].length; d > u; u++) {
                                var c = l[1][u];
                                c.roomName = l[0].name, t.push(c), n[c.userid] = c
                            }
                        }
                        this.onlineBuddies = {}, t = i.alphabetize(t, "name");
                        for(var r = 0, a = t.length; a > r; r++) this.addBuddy(t[r])
                    } else $(this.nodes.buddyList).append(i.buildTree(s.layouts.noBuddies));
                    for(var r in this.pmWindows) {
                        var h = this.pmWindows[r].otherUserId;
                        if(h in n) this.pmWindows[r].updateStatus(n[h].status, !1);
                        else {
                            var p = o.fanOf.indexOf(h) >= 0,
                                f = o.buddies.indexOf(h) >= 0;
                            (p || f) && this.pmWindows[r].updateStatus("offline", !1)
                        }
                    }
                }
            },
            updateBuddyStatus: function(e) {
                "status" in e && ("offline" == e.status && e.userid in this.onlineBuddies ? this.removeBuddy(e.userid) : "offline" != e.status && (e.userid in this.onlineBuddies ? e.userid in this.onlineBuddies && "status" + e.userid in this.nodes && $(this.nodes["status" + e.userid]).removeClass("available away offline unavailable no_pm").addClass(e.status) : this.addBuddy(e, !0)))
            },
            addBuddy: function(e, t) {
                if(!("status" in e && "offline" == e.status) && e.userid != o.id) if("laptop" in e && "iphone" == e.laptop && "2.1" != e.laptop_version && (e.status = "no_pm"), "laptop" in e && "android" == e.laptop && (e.status = "no_pm"), e.userid in this.onlineBuddies) this.updateBuddyStatus(e);
                else {
                    var n = i.buildTree(s.layouts.buddyListBuddy(e, this.room), this.nodes),
                        r = $(this.nodes.buddyList);
                    if(r.append(n), t) {
                        var a = $(this.nodes.buddyList).find("li.buddy").sort(function(e, t) {
                            var i = $(e).find("div.name").text().toLowerCase(),
                                n = $(t).find("div.name").text().toLowerCase();
                            return n > i ? -1 : i > n ? 1 : 0
                        });
                        r.find(".buddy").detach(), r.append(a)
                    }
                    this.onlineBuddies[e.userid] = e, $(this.nodes.buddyList).find(".noBuddies").remove()
                }
            },
            removeBuddy: function(e) {
                e in this.onlineBuddies && (delete this.onlineBuddies[e], "buddy" + e in this.nodes && $(this.nodes["buddy" + e]).remove(), $(this.nodes.buddyList).find(".buddy").length || $(this.nodes.buddyList).find(".noBuddies").length || $(this.nodes.buddyList).append(i.buildTree(s.layouts.noBuddies)))
            },
            toggle: function() {
                var e = $("div#privateChatIcon");
                if(e.hasClass("open")) e.removeClass("open"), $("#buddyListOptionsContainer").is(":visible") && turntable.buddyList.toggleOptions(), $("div#buddyListContainer").fadeOut(200), $(document).unbind("click", turntable.buddyList.bodyClickHandler);
                else {
                    e.addClass("open");
                    var t = turntable.isUnavailable ? 63 : 0;
                    $("ul#buddyList").css({
                        maxHeight: $(window).height() - (80 + t) + "px"
                    }), $("div#buddyListContainer").fadeIn(200), $(document).click(turntable.buddyList.bodyClickHandler);
                    var i = (new Date).getTime();
                    (!turntable.lastBuddyPresencePoll || i - turntable.lastBuddyPresencePoll > 3e4) && turntable.fetchBuddyPresence()
                }
            },
            isClosed: function() {
                var e = $("div#privateChatIcon");
                return e.hasClass("open") ? !1 : !0
            },
            bodyClickHandler: function(e) {
                -1 == $(e.target).parents().index($("#buddyListContainer")) && -1 == $(e.target).parents().index($("#privateChatIcon")) && !$(e.target).is("#privateChatIcon") && $("div#privateChatIcon").hasClass("open") && turntable.buddyList.toggle()
            },
            lookupUser: function(e, t) {
                var i = !1,
                    n = o.fanOf.indexOf(e) >= 0,
                    s = o.buddies.indexOf(e) >= 0;
                if(e in this.onlineBuddies ? i = this.onlineBuddies[e] : e in this.knownUsers ? i = this.knownUsers[e] : e in this.room.users && (this.knownUsers[e] = this.room.users[e], i = this.knownUsers[e]), i && "status" in i && "name" in i) t(i), !n && !s || e in this.onlineBuddies || this.addBuddy(i, !0);
                else {
                    var r = [],
                        a = !1;
                    if(i || (i = {}), !("name" in i)) {
                        var l = $.Deferred();
                        turntable.uRzNYq({
                            api: "user.get_profile",
                            userid: e
                        }, $.proxy(function(t) {
                            this.knownUsers[e] = t, i = t, l.resolve()
                        }, this)), r.push(l)
                    }
                    if(!("status" in i)) {
                        var u = $.Deferred();
                        turntable.uRzNYq({
                            api: "presence.get",
                            uid: e
                        }, function(e) {
                            a = e, u.resolve()
                        }), r.push(u)
                    }
                    $.when.apply(null, r).then($.proxy(function() {
                        a && a.success && "presence" in a && (i.status = a.presence.status), t(i), !n && !s || e in this.onlineBuddies || this.addBuddy(i, !0)
                    }, this))
                }
            },
            addPMWindow: function(e, t, i) {
                this.lookupUser(e, $.proxy(function(e) {
                    var s = e.userid in o.blockedUsers;
                    this.pmWindows[e.userid] = new n(e, this, s), this.pmWindows[e.userid].open(t), i && i()
                }, this))
            },
            repositionPMWindows: function(e) {
                for(var t = !1, i = $("#pmWindows .pmContainer"), n = 0; i.length > n; n++) {
                    var o = i.eq(n);
                    t = this.positionPMWindow(o, n, e)
                }
                if(!t) for(var s = $("#overflowPMWindows .pmContainer"), n = s.length - 1; n >= 0; n--) {
                    var o = s.eq(n),
                        r = i.length + (s.length - (n + 1));
                    if(t = this.positionPMWindow(o, r, e)) break
                }
                s = $("#overflowPMWindows .pmContainer"), s.length ? ($(this.nodes.pmOverflowIcon).show(), $(this.nodes.pmOverflowCount).text(s.length)) : ($(this.nodes.pmOverflowIcon).hide(), $(this.nodes.pmOverflowContainer).hide())
            },
            positionPMWindow: function(e, t, i) {
                var n = e.data("userId");
                if(n in this.pmWindows) {
                    var o = this.pmWindows[n],
                        s = 52 + t * (e.width() + 5);
                    if(s + e.width() > $(window).width() - 50) return o.overflow(), !0;
                    o.unOverflow(!0);
                    var r = parseInt(e.css("left"));
                    if(r == s) return;
                    return i ? e.animate({
                        left: s + "px"
                    }, "fast") : e.css({
                        left: s + "px"
                    }), !1
                }
            },
            allPMWindowsClosed: function() {
                for(var e in this.pmWindows) if(!this.pmWindows[e].isClosed) return !1;
                return !0
            },
            toggleDing: function() {
                i.setSetting("pmding", "false" == i.getSetting("pmding") ? "true" : "false"), this.refreshOptions()
            },
            toggleOptions: function(e) {
                var t = $("#buddyListOptionsContainer");
                t.is(":visible") ? t.fadeOut("fast") : t.fadeIn("fast"), e && e.stopPropagation()
            },
            toggleUnavailable: function(e) {
                if(turntable.isUnavailable) {
                    turntable.isUnavailable = !1, i.setSetting("isUnavailable", !1), turntable.sendPresence("available", !1, !0), this.updateMyStatus("available");
                    var t = $(this.nodes.unavailableWarning).outerHeight(!0);
                    $(this.nodes.unavailableWarning).slideUp("fast"), $(this.nodes.buddyList).animate({
                        maxHeight: parseInt($(this.nodes.buddyList).css("max-height")) + t + "px"
                    })
                } else {
                    turntable.isUnavailable = !0, i.setSetting("isUnavailable", !0), turntable.sendPresence("unavailable", !1, !0), this.updateMyStatus("unavailable");
                    var t = $(this.nodes.unavailableWarning).show().outerHeight(!0);
                    $(this.nodes.unavailableWarning).hide(), $(this.nodes.unavailableWarning).slideDown("fast"), $(this.nodes.buddyList).animate({
                        maxHeight: parseInt($(this.nodes.buddyList).css("max-height")) - t + "px"
                    })
                }
                for(var n in this.pmWindows) this.pmWindows[n].updateMyAvailability();
                this.refreshOptions(), e && $("#buddyListOptionsContainer").hide()
            },
            refreshOptions: function() {
                var e = s.layouts.buddyListOptions(this.toggleOptions, $.proxy(this.toggleUnavailable, this), $.proxy(this.toggleDing, this));
                $("#buddyListOptionsContainer").replaceWith(i.buildTree(e, this.nodes))
            },
            updateIgnored: function() {
                for(var e in o.blockedUsers) e in this.pmWindows && !this.pmWindows[e].isIgnored && this.pmWindows[e].setIgnored(!0);
                for(var e in this.pmWindows) e in o.blockedUsers || !this.pmWindows[e].isIgnored || this.pmWindows[e].setIgnored(!1)
            }
        });
    return s.layouts = {
        privateChatIcon: function(e) {
            var t = e ? ".away" : "";
            return ["div#privateChatIcon.pmGreyTop", {
                event: {
                    mouseover: function() {
                        $(this).addClass("hover")
                    },
                    mouseout: function() {
                        $(this).removeClass("hover")
                    }
                }
            }, ["div##status.status" + t], ["div.chatIcon"]]
        },
        buddyList: function(e, t, i) {
            return ["div#buddyListContainer", {}, ["div#buddyListMain",
            {}, ["div#buddyListHeader##buddyListHeader",
            {}, ["div#buddyListTitle",
            {}, "Private chat"],
                ["div#buddyListOptionsIcon",
                {
                    event: {
                        click: e
                    }
                }]
            ],
                ["div#buddyListUnavailableWarning##unavailableWarning",
                {}, "You are unavailable to chat.", ["div#buddyListBecomeAvailable",
                {
                    event: {
                        mouseover: function() {
                            $(this).addClass("hover")
                        },
                        mouseout: function() {
                            $(this).removeClass("hover")
                        },
                        click: t
                    }
                }]],
                ["ul#buddyList##buddyList",
                {}], s.layouts.buddyListOptions(e, t, i)], ["div#buddyListNipple"]]
        },
        pmOverflowIcon: function() {
            return ["div#pmOverflowIcon##pmOverflowIcon.pmGreyTop", {
                event: {
                    click: function() {
                        $("div#pmOverflowContainer").fadeToggle("fast")
                    },
                    mouseover: function() {
                        $(this).addClass("hover")
                    },
                    mouseout: function() {
                        $(this).removeClass("hover")
                    }
                }
            }, ["span#pmOverflowCount##pmOverflowCount",
            {}, "0"], ["div#pmOverflowArrow"]]
        },
        pmOverflow: function() {
            return ["div#pmOverflowContainer##pmOverflowContainer", {}, ["ul#pmOverflowList##pmOverflowList",
            {}], ["div#pmOverflowNipple"]]
        },
        buddyListOptions: function(e, t, n) {
            var s = "Available for private chat",
                r = turntable.isUnavailable ? ".red" : "",
                a = turntable.isUnavailable ? "" : ["div.buddyListOptionCheck"],
                l = "false" == i.getSetting("pmding"),
                u = "Ding on new message",
                d = l ? "" : ["div.buddyListOptionCheck"],
                c = l ? ".red" : "";
            return ["div#buddyListOptionsContainer.contextual-popup##optionsContainer", {}, ["div#buddyListOptionsIconActive.nib",
            {
                event: {
                    click: e
                }
            }], ["div#buddyListOptionsContent.options",
            {}, ["div##availableOption.buddyListOption.option" + r,
            {
                event: {
                    click: function() {
                        t(), e()
                    },
                    mouseover: function() {
                        $(this).addClass("hover")
                    },
                    mouseout: function() {
                        $(this).removeClass("hover")
                    }
                }
            },
            s, a],
                ["div##dingOption.buddyListOption.option" + c,
                {
                    event: {
                        click: function() {
                            n(), e()
                        },
                        mouseover: function() {
                            $(this).addClass("hover")
                        },
                        mouseout: function() {
                            $(this).removeClass("hover")
                        }
                    }
                },
                u, d],
                ["div.buddyListOption.option",
                {
                    event: {
                        click: function() {
                            o.ignoredShow(), e()
                        },
                        mouseover: function() {
                            $(this).addClass("hover")
                        },
                        mouseout: function() {
                            $(this).removeClass("hover")
                        }
                    }
                }, "Ignored users..."]
            ]]
        },
        buddyListBuddy: function(e, t, i) {
            var n, o = "roomName" in e && !i ? ["div.room",
            {},
            e.roomName] : "",
                s = function() {
                    t.handlePM({
                        senderid: e.userid
                    }, !0), i ? $("div#pmOverflowContainer").fadeOut("fast") : turntable.buddyList.toggle()
                },
                r = i ? "overflowListItem" : "buddy" + e.userid;
            return n = "fbid" in e ? "https://graph.facebook.com/" + e.fbid + "/picture" : "twitterid_lower" in e ? "https://api.twitter.com/1/users/profile_image?screen_name=" + e.twitterid_lower + "&size=normal" : e.images.headfront, ["li##" + r + ".buddy",
            {
                event: {
                    click: s,
                    mouseover: function() {
                        $(this).addClass("hover")
                    },
                    mouseout: function() {
                        $(this).removeClass("hover")
                    }
                }
            }, ["div.avatar",
            {}, ["img",
            {
                src: n,
                height: "20"
            }]],
                ["div.user",
                {}, ["div.name",
                {},
                e.name], o],
                ["div##status" + e.userid + ".status." + e.status]
            ]
        },
        noBuddies: ["li.noBuddies",
        {}, "None of your buddies are online."]
    }, s
}), function() {
    function e() {
        this.returnValue = !1
    }
    function t() {
        this.cancelBubble = !0
    }
    var i, n, o = 0,
        s = [],
        r = {},
        a = {},
        l = {
            "<": "lt",
            ">": "gt",
            "&": "amp",
            '"': "quot",
            "'": "#39"
        },
        u = /[<>&\"\']/g,
        d = window.setTimeout,
        c = {};
    (function(e) {
        var t, i, n, o = e.split(/,/);
        for(t = 0; o.length > t; t += 2) for(n = o[t + 1].split(/ /), i = 0; n.length > i; i++) a[n[i]] = o[t]
    })("application/msword,doc dot,application/pdf,pdf,application/pgp-signature,pgp,application/postscript,ps ai eps,application/rtf,rtf,application/vnd.ms-excel,xls xlb,application/vnd.ms-powerpoint,ppt pps pot,application/zip,zip,application/x-shockwave-flash,swf swfl,application/vnd.openxmlformats-officedocument.wordprocessingml.document,docx,application/vnd.openxmlformats-officedocument.wordprocessingml.template,dotx,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,xlsx,application/vnd.openxmlformats-officedocument.presentationml.presentation,pptx,application/vnd.openxmlformats-officedocument.presentationml.template,potx,application/vnd.openxmlformats-officedocument.presentationml.slideshow,ppsx,application/x-javascript,js,application/json,json,audio/mpeg,mpga mpega mp2 mp3,audio/x-wav,wav,audio/mp4,m4a,image/bmp,bmp,image/gif,gif,image/jpeg,jpeg jpg jpe,image/photoshop,psd,image/png,png,image/svg+xml,svg svgz,image/tiff,tiff tif,text/plain,asc txt text diff log,text/html,htm html xhtml,text/css,css,text/csv,csv,text/rtf,rtf,video/mpeg,mpeg mpg mpe,video/quicktime,qt mov,video/mp4,mp4,video/x-m4v,m4v,video/x-flv,flv,video/x-ms-wmv,wmv,video/avi,avi,video/webm,webm,video/vnd.rn-realvideo,rv,application/vnd.oasis.opendocument.formula-template,otf,application/octet-stream,exe");
    var h = {
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
        mimeTypes: a,
        ua: function() {
            var e, t, i, n = navigator,
                o = n.userAgent,
                s = n.vendor;
            return e = /WebKit/.test(o), i = e && -1 !== s.indexOf("Apple"), t = window.opera && window.opera.buildNumber, {
                windows: -1 !== navigator.platform.indexOf("Win"),
                ie: !e && !t && /MSIE/gi.test(o) && /Explorer/gi.test(n.appName),
                webkit: e,
                gecko: !e && /Gecko/.test(o),
                safari: i,
                opera: !! t
            }
        }(),
        typeOf: function(e) {
            return {}.toString.call(e).match(/\s([a-z|A-Z]+)/)[1].toLowerCase()
        },
        extend: function(e) {
            return h.each(arguments, function(t, i) {
                i > 0 && h.each(t, function(t, i) {
                    e[i] = t
                })
            }), e
        },
        cleanName: function(e) {
            var t, i;
            for(i = [/[\300-\306]/g, "A", /[\340-\346]/g, "a", /\307/g, "C", /\347/g, "c", /[\310-\313]/g, "E", /[\350-\353]/g, "e", /[\314-\317]/g, "I", /[\354-\357]/g, "i", /\321/g, "N", /\361/g, "n", /[\322-\330]/g, "O", /[\362-\370]/g, "o", /[\331-\334]/g, "U", /[\371-\374]/g, "u"], t = 0; i.length > t; t += 2) e = e.replace(i[t], i[t + 1]);
            return e = e.replace(/\s+/g, "_"), e = e.replace(/[^a-z0-9_\-\.]+/gi, "")
        },
        addRuntime: function(e, t) {
            return t.name = e, s[e] = t, s.push(t), t
        },
        guid: function() {
            var e, t = (new Date).getTime().toString(32);
            for(e = 0; 5 > e; e++) t += Math.floor(65535 * Math.random()).toString(32);
            return(h.guidPrefix || "p") + t + (o++).toString(32)
        },
        buildUrl: function(e, t) {
            var i = "";
            return h.each(t, function(e, t) {
                i += (i ? "&" : "") + encodeURIComponent(t) + "=" + encodeURIComponent(e)
            }), i && (e += (e.indexOf("?") > 0 ? "&" : "?") + i), e
        },
        each: function(e, t) {
            var n, o, s;
            if(e) if(n = e.length, n === i) {
                for(o in e) if(e.hasOwnProperty(o) && t(e[o], o) === !1) return
            } else for(s = 0; n > s; s++) if(t(e[s], s) === !1) return
        },
        formatSize: function(e) {
            return e === i || /\D/.test(e) ? h.translate("N/A") : e > 1073741824 ? Math.round(e / 1073741824, 1) + " GB" : e > 1048576 ? Math.round(e / 1048576, 1) + " MB" : e > 1024 ? Math.round(e / 1024, 1) + " KB" : e + " b"
        },
        getPos: function(e, t) {
            function i(e) {
                var t, i, n = 0,
                    o = 0;
                return e && (i = e.getBoundingClientRect(), t = "CSS1Compat" === l.compatMode ? l.documentElement : l.body, n = i.left + t.scrollLeft, o = i.top + t.scrollTop), {
                    x: n,
                    y: o
                }
            }
            var n, o, s, r = 0,
                a = 0,
                l = document;
            if(e = e, t = t || l.body, e && e.getBoundingClientRect && navigator.userAgent.indexOf("MSIE") > 0 && 8 > l.documentMode) return o = i(e), s = i(t), {
                x: o.x - s.x,
                y: o.y - s.y
            };
            for(n = e; n && n != t && n.nodeType;) r += n.offsetLeft || 0, a += n.offsetTop || 0, n = n.offsetParent;
            for(n = e.parentNode; n && n != t && n.nodeType;) r -= n.scrollLeft || 0, a -= n.scrollTop || 0, n = n.parentNode;
            return {
                x: r,
                y: a
            }
        },
        getSize: function(e) {
            return {
                w: e.offsetWidth || e.clientWidth,
                h: e.offsetHeight || e.clientHeight
            }
        },
        parseSize: function(e) {
            var t;
            return "string" == typeof e && (e = /^([0-9]+)([mgk]?)$/.exec(e.toLowerCase().replace(/[^0-9mkg]/g, "")), t = e[2], e = +e[1], "g" == t && (e *= 1073741824), "m" == t && (e *= 1048576), "k" == t && (e *= 1024)), e
        },
        xmlEncode: function(e) {
            return e ? ("" + e).replace(u, function(e) {
                return l[e] ? "&" + l[e] + ";" : e
            }) : e
        },
        toArray: function(e) {
            var t, i = [];
            for(t = 0; e.length > t; t++) i[t] = e[t];
            return i
        },
        inArray: function(e, t) {
            if(t) {
                if(Array.prototype.indexOf) return Array.prototype.indexOf.call(t, e);
                for(var i = 0, n = t.length; n > i; i++) if(t[i] === e) return i
            }
            return -1
        },
        addI18n: function(e) {
            return h.extend(r, e)
        },
        translate: function(e) {
            return r[e] || e
        },
        isEmptyObj: function(e) {
            if(e === i) return !0;
            for(var t in e) return !1;
            return !0
        },
        hasClass: function(e, t) {
            var i;
            return "" == e.className ? !1 : (i = RegExp("(^|\\s+)" + t + "(\\s+|$)"), i.test(e.className))
        },
        addClass: function(e, t) {
            h.hasClass(e, t) || (e.className = "" == e.className ? t : e.className.replace(/\s+$/, "") + " " + t)
        },
        removeClass: function(e, t) {
            var i = RegExp("(^|\\s+)" + t + "(\\s+|$)");
            e.className = e.className.replace(i, function(e, t, i) {
                return " " === t && " " === i ? " " : ""
            })
        },
        getStyle: function(e, t) {
            return e.currentStyle ? e.currentStyle[t] : window.getComputedStyle ? window.getComputedStyle(e, null)[t] : void 0
        },
        addEvent: function(o, s, r) {
            var a, l, u;
            u = arguments[3], s = s.toLowerCase(), n === i && (n = "Plupload_" + h.guid()), o.addEventListener ? (a = r, o.addEventListener(s, a, !1)) : o.attachEvent && (a = function() {
                var i = window.event;
                i.target || (i.target = i.srcElement), i.preventDefault = e, i.stopPropagation = t, r(i)
            }, o.attachEvent("on" + s, a)), o[n] === i && (o[n] = h.guid()), c.hasOwnProperty(o[n]) || (c[o[n]] = {}), l = c[o[n]], l.hasOwnProperty(s) || (l[s] = []), l[s].push({
                func: a,
                orig: r,
                key: u
            })
        },
        removeEvent: function(e, t) {
            var o, s, r;
            if("function" == typeof arguments[2] ? s = arguments[2] : r = arguments[2], t = t.toLowerCase(), e[n] && c[e[n]] && c[e[n]][t]) {
                o = c[e[n]][t];
                for(var a = o.length - 1; a >= 0 && (o[a].key !== r && o[a].orig !== s || (e.removeEventListener ? e.removeEventListener(t, o[a].func, !1) : e.detachEvent && e.detachEvent("on" + t, o[a].func), o[a].orig = null, o[a].func = null, o.splice(a, 1), s === i)); a--);
                if(o.length || delete c[e[n]][t], h.isEmptyObj(c[e[n]])) {
                    delete c[e[n]];
                    try {
                        delete e[n]
                    } catch(l) {
                        e[n] = i
                    }
                }
            }
        },
        removeAllEvents: function(e) {
            var t = arguments[1];
            e[n] !== i && e[n] && h.each(c[e[n]], function(i, n) {
                h.removeEvent(e, n, t)
            })
        }
    };
    h.Uploader = function(e) {
        function t() {
            var e, t, i = 0;
            if(this.state == h.STARTED) {
                for(t = 0; l.length > t; t++) e || l[t].status != h.QUEUED ? i++ : (e = l[t], e.status = h.UPLOADING, this.trigger("BeforeUpload", e) && this.trigger("UploadFile", e));
                i == l.length && (this.stop(), this.trigger("UploadComplete", l))
            }
        }
        function n() {
            var e, t;
            for(o.reset(), e = 0; l.length > e; e++) t = l[e], t.size !== i ? (o.size += t.size, o.loaded += t.loaded) : o.size = i, t.status == h.DONE ? o.uploaded++ : t.status == h.FAILED ? o.failed++ : o.queued++;
            o.size === i ? o.percent = l.length > 0 ? Math.ceil(100 * (o.uploaded / l.length)) : 0 : (o.bytesPerSec = Math.ceil(o.loaded / ((+new Date - r || 1) / 1e3)), o.percent = o.size > 0 ? Math.ceil(100 * (o.loaded / o.size)) : 0)
        }
        var o, r, a = {},
            l = [],
            u = !1;
        o = new h.QueueProgress, e = h.extend({
            chunk_size: 0,
            multipart: !0,
            multi_selection: !0,
            file_data_name: "file",
            filters: []
        }, e), h.extend(this, {
            state: h.STOPPED,
            runtime: "",
            features: {},
            files: l,
            settings: e,
            total: o,
            id: h.guid(),
            init: function() {
                function o() {
                    var e, t, i, n = u[f++];
                    if(n) {
                        if(e = n.getFeatures(), t = p.settings.required_features) for(t = t.split(","), i = 0; t.length > i; i++) if(!e[t[i]]) return o(), void 0;
                        n.init(p, function(t) {
                            t && t.success ? (p.features = e, p.runtime = n.name, p.trigger("Init", {
                                runtime: n.name
                            }), p.trigger("PostInit"), p.refresh()) : o()
                        })
                    } else p.trigger("Error", {
                        code: h.INIT_ERROR,
                        message: h.translate("Init error.")
                    })
                }
                var a, u, c, p = this,
                    f = 0;
                if("function" == typeof e.preinit ? e.preinit(p) : h.each(e.preinit, function(e, t) {
                    p.bind(t, e)
                }), e.page_url = e.page_url || document.location.pathname.replace(/\/[^\/]+$/g, "/"), /^(\w+:\/\/|\/)/.test(e.url) || (e.url = e.page_url + e.url), e.chunk_size = h.parseSize(e.chunk_size), e.max_file_size = h.parseSize(e.max_file_size), p.bind("FilesAdded", function(t, n) {
                    var o, s, r, a = 0,
                        u = e.filters;
                    for(u && u.length && (r = [], h.each(u, function(e) {
                        h.each(e.extensions.split(/,/), function(e) {
                            /^\s*\*\s*$/.test(e) ? r.push("\\.*") : r.push("\\." + e.replace(RegExp("[" + "/^$.*+?|()[]{}\\".replace(/./g, "\\$&") + "]", "g"), "\\$&"))
                        })
                    }), r = RegExp(r.join("|") + "$", "i")), o = 0; n.length > o; o++) s = n[o], s.loaded = 0, s.percent = 0, s.status = h.QUEUED, !r || r.test(s.name) ? s.size !== i && s.size > e.max_file_size ? t.trigger("Error", {
                        code: h.FILE_SIZE_ERROR,
                        message: h.translate("File size error."),
                        file: s
                    }) : (l.push(s), a++) : t.trigger("Error", {
                        code: h.FILE_EXTENSION_ERROR,
                        message: h.translate("File extension error."),
                        file: s
                    });
                    return a ? (d(function() {
                        p.trigger("QueueChanged"), p.refresh()
                    }, 1), void 0) : !1
                }), e.unique_names && p.bind("UploadFile", function(e, t) {
                    var i = t.name.match(/\.([^.]+)$/),
                        n = "tmp";
                    i && (n = i[1]), t.target_name = t.id + "." + n
                }), p.bind("UploadProgress", function(e, t) {
                    t.percent = t.size > 0 ? Math.ceil(100 * (t.loaded / t.size)) : 100, n()
                }), p.bind("StateChanged", function(e) {
                    if(e.state == h.STARTED) r = +new Date;
                    else if(e.state == h.STOPPED) for(a = e.files.length - 1; a >= 0; a--) e.files[a].status == h.UPLOADING && (e.files[a].status = h.QUEUED, n())
                }), p.bind("QueueChanged", n), p.bind("Error", function(e, i) {
                    i.file && (i.file.status = h.FAILED, n(), e.state == h.STARTED && d(function() {
                        t.call(p)
                    }, 1))
                }), p.bind("FileUploaded", function(e, i) {
                    i.status = h.DONE, i.loaded = i.size, e.trigger("UploadProgress", i), d(function() {
                        t.call(p)
                    }, 1)
                }), e.runtimes) for(u = [], c = e.runtimes.split(/\s?,\s?/), a = 0; c.length > a; a++) s[c[a]] && u.push(s[c[a]]);
                else u = s;
                o(), "function" == typeof e.init ? e.init(p) : h.each(e.init, function(e, t) {
                    p.bind(t, e)
                })
            },
            refresh: function() {
                this.trigger("Refresh")
            },
            start: function() {
                l.length && this.state != h.STARTED && (this.state = h.STARTED, this.trigger("StateChanged"), t.call(this))
            },
            stop: function() {
                this.state != h.STOPPED && (this.state = h.STOPPED, this.trigger("CancelUpload"), this.trigger("StateChanged"))
            },
            disableBrowse: function() {
                u = arguments[0] !== i ? arguments[0] : !0, this.trigger("DisableBrowse", u)
            },
            getFile: function(e) {
                var t;
                for(t = l.length - 1; t >= 0; t--) if(l[t].id === e) return l[t]
            },
            removeFile: function(e) {
                var t;
                for(t = l.length - 1; t >= 0; t--) if(l[t].id === e.id) return this.splice(t, 1)[0]
            },
            splice: function(e, t) {
                var n;
                return n = l.splice(e === i ? 0 : e, t === i ? l.length : t), this.trigger("FilesRemoved", n), this.trigger("QueueChanged"), n
            },
            trigger: function(e) {
                var t, i, n = a[e.toLowerCase()];
                if(n) for(i = Array.prototype.slice.call(arguments), i[0] = this, t = 0; n.length > t; t++) if(n[t].func.apply(n[t].scope, i) === !1) return !1;
                return !0
            },
            hasEventListener: function(e) {
                return !!a[e.toLowerCase()]
            },
            bind: function(e, t, i) {
                var n;
                e = e.toLowerCase(), n = a[e] || [], n.push({
                    func: t,
                    scope: i || this
                }), a[e] = n
            },
            unbind: function(e) {
                e = e.toLowerCase();
                var t, n = a[e],
                    o = arguments[1];
                if(n) {
                    if(o !== i) {
                        for(t = n.length - 1; t >= 0; t--) if(n[t].func === o) {
                            n.splice(t, 1);
                            break
                        }
                    } else n = [];
                    n.length || delete a[e]
                }
            },
            unbindAll: function() {
                var e = this;
                h.each(a, function(t, i) {
                    e.unbind(i)
                })
            },
            destroy: function() {
                this.stop(), this.trigger("Destroy"), this.unbindAll()
            }
        })
    }, h.File = function(e, t, i) {
        var n = this;
        n.id = e, n.name = t, n.size = i, n.loaded = 0, n.percent = 0, n.status = 0
    }, h.Runtime = function() {
        this.getFeatures = function() {}, this.init = function() {}
    }, h.QueueProgress = function() {
        var e = this;
        e.size = 0, e.loaded = 0, e.uploaded = 0, e.failed = 0, e.queued = 0, e.percent = 0, e.bytesPerSec = 0, e.reset = function() {
            e.size = e.loaded = e.uploaded = e.failed = e.queued = e.percent = e.bytesPerSec = 0
        }
    }, h.runtimes = {}, window.plupload = h
}(), function() {
    if(!window.google || !google.gears) {
        var e = null;
        if("undefined" != typeof GearsFactory) e = new GearsFactory;
        else try {
            e = new ActiveXObject("Gears.Factory"), -1 != e.getBuildInfo().indexOf("ie_mobile") && e.privateSetGlobalObject(this)
        } catch(t) {
            navigator.mimeTypes !== void 0 && navigator.mimeTypes["application/x-googlegears"] && (e = document.createElement("object"), e.style.display = "none", e.width = 0, e.height = 0, e.type = "application/x-googlegears", document.documentElement.appendChild(e))
        }
        e && (window.google || (window.google = {}), google.gears || (google.gears = {
            factory: e
        }))
    }
}(), function(e, t, i) {
    function n(e, t, i) {
        var n, o;
        n = google.gears.factory.create("beta.canvas");
        try {
            if(n.decode(e), t.width || (t.width = n.width), t.height || (t.height = n.height), o = Math.min(width / n.width, height / n.height), 1 > o || 1 === o && "image/jpeg" === i) return n.resize(Math.round(n.width * o), Math.round(n.height * o)), t.quality ? n.encode(i, {
                quality: t.quality / 100
            }) : n.encode(i)
        } catch(s) {}
        return e
    }
    var o = {};
    i.runtimes.Gears = i.addRuntime("gears", {
        getFeatures: function() {
            return {
                dragdrop: !0,
                jpgresize: !0,
                pngresize: !0,
                chunks: !0,
                progress: !0,
                multipart: !0,
                multi_selection: !0
            }
        },
        init: function(s, r) {
            function a(e) {
                var t, n, r, a = [];
                for(n = 0; e.length > n; n++) t = e[n], r = i.guid(), o[r] = t.blob, a.push(new i.File(r, t.name, t.blob.length));
                s.trigger("FilesAdded", a)
            }
            var l, u, d = !1;
            if(!e.google || !google.gears) return r({
                success: !1
            });
            try {
                l = google.gears.factory.create("beta.desktop")
            } catch(c) {
                return r({
                    success: !1
                })
            }
            s.bind("PostInit", function() {
                var e = s.settings,
                    n = t.getElementById(e.drop_element);
                n && (i.addEvent(n, "dragover", function(e) {
                    l.setDropEffect(e, "copy"), e.preventDefault()
                }, s.id), i.addEvent(n, "drop", function(e) {
                    var t = l.getDragData(e, "application/x-gears-files");
                    t && a(t.files), e.preventDefault()
                }, s.id), n = 0), i.addEvent(t.getElementById(e.browse_button), "click", function(t) {
                    var i, n, o, s = [];
                    if(t.preventDefault(), !d) {
                        e: for(i = 0; e.filters.length > i; i++) for(o = e.filters[i].extensions.split(","), n = 0; o.length > n; n++) {
                            if("*" === o[n]) {
                                s = [];
                                break e
                            }
                            s.push("." + o[n])
                        }
                        l.openFiles(a, {
                            singleFile: !e.multi_selection,
                            filter: s
                        })
                    }
                }, s.id)
            }), s.bind("CancelUpload", function() {
                u.abort && u.abort()
            }), s.bind("UploadFile", function(e, t) {
                function s() {
                    function n(n) {
                        var o, s, r, a = "----pluploadboundary" + i.guid(),
                            l = "--",
                            d = "\r\n";
                        p && (u.setRequestHeader("Content-Type", "multipart/form-data; boundary=" + a), o = google.gears.factory.create("beta.blobbuilder"), i.each(i.extend(m, e.settings.multipart_params), function(e, t) {
                            o.append(l + a + d + 'Content-Disposition: form-data; name="' + t + '"' + d + d), o.append(e + d)
                        }), r = i.mimeTypes[t.name.replace(/^.+\.([^.]+)/, "$1").toLowerCase()] || "application/octet-stream", o.append(l + a + d + 'Content-Disposition: form-data; name="' + e.settings.file_data_name + '"; filename="' + t.name + '"' + d + "Content-Type: " + r + d + d), o.append(n), o.append(d + l + a + l + d), s = o.getAsBlob(), f = s.length - n.length, n = s), u.send(n)
                    }
                    var h, p = e.settings.multipart,
                        f = 0,
                        m = {
                            name: t.target_name || t.name
                        },
                        g = e.settings.url;
                    t.status != i.DONE && t.status != i.FAILED && e.state != i.STOPPED && (l && (m.chunk = d, m.chunks = r), h = Math.min(a, t.size - d * a), p || (g = i.buildUrl(e.settings.url, m)), u = google.gears.factory.create("beta.httprequest"), u.open("POST", g), p || (u.setRequestHeader("Content-Disposition", 'attachment; filename="' + t.name + '"'), u.setRequestHeader("Content-Type", "application/octet-stream")), i.each(e.settings.headers, function(e, t) {
                        u.setRequestHeader(t, e)
                    }), u.upload.onprogress = function(i) {
                        t.loaded = c + i.loaded - f, e.trigger("UploadProgress", t)
                    }, u.onreadystatechange = function() {
                        var n;
                        if(4 == u.readyState && e.state !== i.STOPPED) if(200 == u.status) {
                            if(n = {
                                chunk: d,
                                chunks: r,
                                response: u.responseText,
                                status: u.status
                            }, e.trigger("ChunkUploaded", t, n), n.cancelled) return t.status = i.FAILED, void 0;
                            c += h, ++d >= r ? (t.status = i.DONE, e.trigger("FileUploaded", t, {
                                response: u.responseText,
                                status: u.status
                            })) : s()
                        } else e.trigger("Error", {
                            code: i.HTTP_ERROR,
                            message: i.translate("HTTP Error."),
                            file: t,
                            chunk: d,
                            chunks: r,
                            status: u.status
                        })
                    }, r > d && n(o[t.id].slice(d * a, h)))
                }
                var r, a, l, d = 0,
                    c = 0,
                    h = e.settings.resize;
                h && /\.(png|jpg|jpeg)$/i.test(t.name) && (o[t.id] = n(o[t.id], h, /\.png$/i.test(t.name) ? "image/png" : "image/jpeg")), t.size = o[t.id].length, a = e.settings.chunk_size, l = a > 0, r = Math.ceil(t.size / a), l || (a = t.size, r = 1), s()
            }), s.bind("DisableBrowse", function(e, t) {
                d = t
            }), s.bind("Destroy", function(e) {
                var n, o, s = {
                    browseButton: e.settings.browse_button,
                    dropElm: e.settings.drop_element
                };
                for(n in s) o = t.getElementById(s[n]), o && i.removeAllEvents(o, e.id)
            }), r({
                success: !0
            })
        }
    })
}(window, document, plupload), function(e, t, i, n) {
    function o(e) {
        var t, i, s, r, a = typeof e;
        if(e === n || null === e) return "null";
        if("string" === a) return t = "\bb   t\nn\ff\rr\"\"''\\\\", '"' + e.replace(/([\u0080-\uFFFF\x00-\x1f\"])/g, function(e, i) {
            var n = t.indexOf(i);
            return n + 1 ? "\\" + t.charAt(n + 1) : (e = i.charCodeAt().toString(16), "\\u" + "0000".substring(e.length) + e)
        }) + '"';
        if("object" == a) {
            if(i = e.length !== n, t = "", i) {
                for(s = 0; e.length > s; s++) t && (t += ","), t += o(e[s]);
                t = "[" + t + "]"
            } else {
                for(r in e) e.hasOwnProperty(r) && (t && (t += ","), t += o(r) + ":" + o(e[r]));
                t = "{" + t + "}"
            }
            return t
        }
        return "" + e
    }
    function s(e) {
        var t, i, n, o, s, r = !1,
            a = null,
            l = 0;
        try {
            try {
                a = new ActiveXObject("AgControl.AgControl"), a.IsVersionSupported(e) && (r = !0), a = null
            } catch(u) {
                var d = navigator.plugins["Silverlight Plug-In"];
                if(d) {
                    for(t = d.description, "1.0.30226.2" === t && (t = "2.0.30226.2"), i = t.split("."); i.length > 3;) i.pop();
                    for(; 4 > i.length;) i.push(0);
                    for(n = e.split("."); n.length > 4;) n.pop();
                    do o = parseInt(n[l], 10), s = parseInt(i[l], 10), l++;
                    while(n.length > l && o === s);
                    s >= o && !isNaN(o) && (r = !0)
                }
            }
        } catch(c) {
            r = !1
        }
        return r
    }
    var r = {},
        a = {};
    i.silverlight = {
        trigger: function(e, t) {
            var n, o = r[e];
            o && (n = i.toArray(arguments).slice(1), n[0] = "Silverlight:" + t, setTimeout(function() {
                o.trigger.apply(o, n)
            }, 0))
        }
    }, i.runtimes.Silverlight = i.addRuntime("silverlight", {
        getFeatures: function() {
            return {
                jpgresize: !0,
                pngresize: !0,
                chunks: !0,
                progress: !0,
                multipart: !0,
                multi_selection: !0
            }
        },
        init: function(n, l) {
            function u() {
                return t.getElementById(n.id + "_silverlight").content.Upload
            }
            var d, c, h = "",
                p = n.settings.filters,
                f = t.body;
            if(!s("2.0.31005.0") || e.opera && e.opera.buildNumber) return l({
                success: !1
            }), void 0;
            for(a[n.id] = !1, r[n.id] = n, d = t.createElement("div"), d.id = n.id + "_silverlight_container", i.extend(d.style, {
                position: "absolute",
                top: "0px",
                background: n.settings.shim_bgcolor || "transparent",
                zIndex: 99999,
                width: "100px",
                height: "100px",
                overflow: "hidden",
                opacity: n.settings.shim_bgcolor || t.documentMode > 8 ? "" : .01
            }), d.className = "plupload silverlight", n.settings.container && (f = t.getElementById(n.settings.container), "static" === i.getStyle(f, "position") && (f.style.position = "relative")), f.appendChild(d), c = 0; p.length > c; c++) h += ("" != h ? "|" : "") + p[c].title + " | *." + p[c].extensions.replace(/,/g, ";*.");
            d.innerHTML = '<object id="' + n.id + '_silverlight" data="data:application/x-silverlight," type="application/x-silverlight-2" style="outline:none;" width="1024" height="1024"><param name="source" value="' + n.settings.silverlight_xap_url + '"/><param name="background" value="Transparent"/><param name="windowless" value="true"/><param name="enablehtmlaccess" value="true"/><param name="initParams" value="id=' + n.id + ",filter=" + h + ",multiselect=" + n.settings.multi_selection + '"/></object>', n.bind("Silverlight:Init", function() {
                var e, s = {};
                a[n.id] || (a[n.id] = !0, n.bind("Silverlight:StartSelectFiles", function() {
                    e = []
                }), n.bind("Silverlight:SelectFile", function(t, n, o, r) {
                    var a;
                    a = i.guid(), s[a] = n, s[n] = a, e.push(new i.File(a, o, r))
                }), n.bind("Silverlight:SelectSuccessful", function() {
                    e.length && n.trigger("FilesAdded", e)
                }), n.bind("Silverlight:UploadChunkError", function(e, t, o, r, a) {
                    n.trigger("Error", {
                        code: i.IO_ERROR,
                        message: "IO Error.",
                        details: a,
                        file: e.getFile(s[t])
                    })
                }), n.bind("Silverlight:UploadFileProgress", function(e, t, n, o) {
                    var r = e.getFile(s[t]);
                    r.status != i.FAILED && (r.size = o, r.loaded = n, e.trigger("UploadProgress", r))
                }), n.bind("Refresh", function(e) {
                    var n, o, s;
                    n = t.getElementById(e.settings.browse_button), n && (o = i.getPos(n, t.getElementById(e.settings.container)), s = i.getSize(n), i.extend(t.getElementById(e.id + "_silverlight_container").style, {
                        top: o.y + "px",
                        left: o.x + "px",
                        width: s.w + "px",
                        height: s.h + "px"
                    }))
                }), n.bind("Silverlight:UploadChunkSuccessful", function(e, t, n, o, r) {
                    var a, l = e.getFile(s[t]);
                    a = {
                        chunk: n,
                        chunks: o,
                        response: r
                    }, e.trigger("ChunkUploaded", l, a), l.status != i.FAILED && e.state !== i.STOPPED && u().UploadNextChunk(), n == o - 1 && (l.status = i.DONE, e.trigger("FileUploaded", l, {
                        response: r
                    }))
                }), n.bind("Silverlight:UploadSuccessful", function(e, t, n) {
                    var o = e.getFile(s[t]);
                    o.status = i.DONE, e.trigger("FileUploaded", o, {
                        response: n
                    })
                }), n.bind("FilesRemoved", function(e, t) {
                    var i;
                    for(i = 0; t.length > i; i++) u().RemoveFile(s[t[i].id])
                }), n.bind("UploadFile", function(e, t) {
                    var n = e.settings,
                        r = n.resize || {};
                    u().UploadFile(s[t.id], e.settings.url, o({
                        name: t.target_name || t.name,
                        mime: i.mimeTypes[t.name.replace(/^.+\.([^.]+)/, "$1").toLowerCase()] || "application/octet-stream",
                        chunk_size: n.chunk_size,
                        image_width: r.width,
                        image_height: r.height,
                        image_quality: r.quality || 90,
                        multipart: !! n.multipart,
                        multipart_params: n.multipart_params || {},
                        file_data_name: n.file_data_name,
                        headers: n.headers
                    }))
                }), n.bind("CancelUpload", function() {
                    u().CancelUpload()
                }), n.bind("Silverlight:MouseEnter", function(e) {
                    var o, s;
                    o = t.getElementById(n.settings.browse_button), s = e.settings.browse_button_hover, o && s && i.addClass(o, s)
                }), n.bind("Silverlight:MouseLeave", function(e) {
                    var o, s;
                    o = t.getElementById(n.settings.browse_button), s = e.settings.browse_button_hover, o && s && i.removeClass(o, s)
                }), n.bind("Silverlight:MouseLeftButtonDown", function(e) {
                    var o, s;
                    o = t.getElementById(n.settings.browse_button), s = e.settings.browse_button_active, o && s && (i.addClass(o, s), i.addEvent(t.body, "mouseup", function() {
                        i.removeClass(o, s)
                    }))
                }), n.bind("Sliverlight:StartSelectFiles", function(e) {
                    var o, s;
                    o = t.getElementById(n.settings.browse_button), s = e.settings.browse_button_active, o && s && i.removeClass(o, s)
                }), n.bind("DisableBrowse", function(e, t) {
                    u().DisableBrowse(t)
                }), n.bind("Destroy", function(e) {
                    var n;
                    i.removeAllEvents(t.body, e.id), delete a[e.id], delete r[e.id], n = t.getElementById(e.id + "_silverlight_container"), n && f.removeChild(n)
                }), l({
                    success: !0
                }))
            })
        }
    })
}(window, document, plupload), function(e, t, i) {
    function n() {
        var e;
        try {
            e = navigator.plugins["Shockwave Flash"], e = e.description
        } catch(t) {
            try {
                e = new ActiveXObject("ShockwaveFlash.ShockwaveFlash").GetVariable("$version")
            } catch(i) {
                e = "0.0"
            }
        }
        return e = e.match(/\d+/g), parseFloat(e[0] + "." + e[1])
    }
    var o = {},
        s = {};
    i.flash = {
        trigger: function(e, t, i) {
            setTimeout(function() {
                var n = o[e];
                n && n.trigger("Flash:" + t, i)
            }, 0)
        }
    }, i.runtimes.Flash = i.addRuntime("flash", {
        getFeatures: function() {
            return {
                jpgresize: !0,
                pngresize: !0,
                maxWidth: 8091,
                maxHeight: 8091,
                chunks: !0,
                progress: !0,
                multipart: !0,
                multi_selection: !0
            }
        },
        init: function(e, r) {
            function a() {
                return t.getElementById(e.id + "_flash")
            }
            function l() {
                return c++ > 5e3 ? (r({
                    success: !1
                }), void 0) : (s[e.id] === !1 && setTimeout(l, 1), void 0)
            }
            var u, d, c = 0,
                h = t.body;
            return 10 > n() ? (r({
                success: !1
            }), void 0) : (s[e.id] = !1, o[e.id] = e, u = t.getElementById(e.settings.browse_button), d = t.createElement("div"), d.id = e.id + "_flash_container", i.extend(d.style, {
                position: "absolute",
                top: "0px",
                background: e.settings.shim_bgcolor || "transparent",
                zIndex: 99999,
                width: "100%",
                height: "100%"
            }), d.className = "plupload flash", e.settings.container && (h = t.getElementById(e.settings.container), "static" === i.getStyle(h, "position") && (h.style.position = "relative")), h.appendChild(d), function() {
                var n, o;
                n = '<object id="' + e.id + '_flash" type="application/x-shockwave-flash" data="' + e.settings.flash_swf_url + '" ', i.ua.ie && (n += 'classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" '), n += 'width="100%" height="100%" style="outline:0"><param name="movie" value="' + e.settings.flash_swf_url + '" /><param name="flashvars" value="id=' + escape(e.id) + '" /><param name="wmode" value="transparent" /><param name="allowscriptaccess" value="always" /></object>', i.ua.ie ? (o = t.createElement("div"), d.appendChild(o), o.outerHTML = n, o = null) : d.innerHTML = n
            }(), l(), u = d = null, e.bind("Destroy", function(e) {
                var n;
                i.removeAllEvents(t.body, e.id), delete s[e.id], delete o[e.id], n = t.getElementById(e.id + "_flash_container"), n && h.removeChild(n)
            }), e.bind("Flash:Init", function() {
                var n = {};
                try {
                    a().setFileFilters(e.settings.filters, e.settings.multi_selection)
                } catch(o) {
                    return r({
                        success: !1
                    }), void 0
                }
                s[e.id] || (s[e.id] = !0, e.bind("UploadFile", function(t, o) {
                    var s = t.settings,
                        r = e.settings.resize || {};
                    a().uploadFile(n[o.id], s.url, {
                        name: o.target_name || o.name,
                        mime: i.mimeTypes[o.name.replace(/^.+\.([^.]+)/, "$1").toLowerCase()] || "application/octet-stream",
                        chunk_size: s.chunk_size,
                        width: r.width,
                        height: r.height,
                        quality: r.quality,
                        multipart: s.multipart,
                        multipart_params: s.multipart_params || {},
                        file_data_name: s.file_data_name,
                        format: /\.(jpg|jpeg)$/i.test(o.name) ? "jpg" : "png",
                        headers: s.headers,
                        urlstream_upload: s.urlstream_upload
                    })
                }), e.bind("CancelUpload", function() {
                    a().cancelUpload()
                }), e.bind("Flash:UploadProcess", function(e, t) {
                    var o = e.getFile(n[t.id]);
                    o.status != i.FAILED && (o.loaded = t.loaded, o.size = t.size, e.trigger("UploadProgress", o))
                }), e.bind("Flash:UploadChunkComplete", function(e, t) {
                    var o, s = e.getFile(n[t.id]);
                    o = {
                        chunk: t.chunk,
                        chunks: t.chunks,
                        response: t.text
                    }, e.trigger("ChunkUploaded", s, o), s.status !== i.FAILED && e.state !== i.STOPPED && a().uploadNextChunk(), t.chunk == t.chunks - 1 && (s.status = i.DONE, e.trigger("FileUploaded", s, {
                        response: t.text
                    }))
                }), e.bind("Flash:SelectFiles", function(t, o) {
                    var s, r, a, l = [];
                    for(r = 0; o.length > r; r++) s = o[r], a = i.guid(), n[a] = s.id, n[s.id] = a, l.push(new i.File(a, s.name, s.size));
                    l.length && e.trigger("FilesAdded", l)
                }), e.bind("Flash:SecurityError", function(t, o) {
                    e.trigger("Error", {
                        code: i.SECURITY_ERROR,
                        message: i.translate("Security error."),
                        details: o.message,
                        file: e.getFile(n[o.id])
                    })
                }), e.bind("Flash:GenericError", function(t, o) {
                    e.trigger("Error", {
                        code: i.GENERIC_ERROR,
                        message: i.translate("Generic error."),
                        details: o.message,
                        file: e.getFile(n[o.id])
                    })
                }), e.bind("Flash:IOError", function(t, o) {
                    e.trigger("Error", {
                        code: i.IO_ERROR,
                        message: i.translate("IO error."),
                        details: o.message,
                        file: e.getFile(n[o.id])
                    })
                }), e.bind("Flash:ImageError", function(t, o) {
                    e.trigger("Error", {
                        code: parseInt(o.code, 10),
                        message: i.translate("Image error."),
                        file: e.getFile(n[o.id])
                    })
                }), e.bind("Flash:StageEvent:rollOver", function(n) {
                    var o, s;
                    o = t.getElementById(e.settings.browse_button), s = n.settings.browse_button_hover, o && s && i.addClass(o, s)
                }), e.bind("Flash:StageEvent:rollOut", function(n) {
                    var o, s;
                    o = t.getElementById(e.settings.browse_button), s = n.settings.browse_button_hover, o && s && i.removeClass(o, s)
                }), e.bind("Flash:StageEvent:mouseDown", function(n) {
                    var o, s;
                    o = t.getElementById(e.settings.browse_button), s = n.settings.browse_button_active, o && s && (i.addClass(o, s), i.addEvent(t.body, "mouseup", function() {
                        i.removeClass(o, s)
                    }, n.id))
                }), e.bind("Flash:StageEvent:mouseUp", function(n) {
                    var o, s;
                    o = t.getElementById(e.settings.browse_button), s = n.settings.browse_button_active, o && s && i.removeClass(o, s)
                }), e.bind("Flash:ExifData", function(t, i) {
                    e.trigger("ExifData", e.getFile(n[i.id]), i.data)
                }), e.bind("Flash:GpsData", function(t, i) {
                    e.trigger("GpsData", e.getFile(n[i.id]), i.data)
                }), e.bind("QueueChanged", function() {
                    e.refresh()
                }), e.bind("FilesRemoved", function(e, t) {
                    var i;
                    for(i = 0; t.length > i; i++) a().removeFile(n[t[i].id])
                }), e.bind("StateChanged", function() {
                    e.refresh()
                }), e.bind("Refresh", function(n) {
                    var o, s, r;
                    a().setFileFilters(e.settings.filters, e.settings.multi_selection), o = t.getElementById(n.settings.browse_button), o && (s = i.getPos(o, t.getElementById(n.settings.container)), r = i.getSize(o), i.extend(t.getElementById(n.id + "_flash_container").style, {
                        top: s.y + "px",
                        left: s.x + "px",
                        width: r.w + "px",
                        height: r.h + "px"
                    }))
                }), e.bind("DisableBrowse", function(e, t) {
                    a().disableBrowse(t)
                }), r({
                    success: !0
                }))
            }), void 0)
        }
    })
}(window, document, plupload), function(e) {
    e.runtimes.BrowserPlus = e.addRuntime("browserplus", {
        getFeatures: function() {
            return {
                dragdrop: !0,
                jpgresize: !0,
                pngresize: !0,
                chunks: !0,
                progress: !0,
                multipart: !0,
                multi_selection: !0
            }
        },
        init: function(t, i) {
            function n(i) {
                var n, o, s, a = [];
                for(n = 0; i.length > n; n++) o = i[n], s = e.guid(), r[s] = o, a.push(new e.File(s, o.name, o.size));
                n && t.trigger("FilesAdded", a)
            }
            function o() {
                var o = !1;
                t.bind("PostInit", function() {
                    function i(e, t) {
                        s.DragAndDrop.AddDropTarget({
                            id: e
                        }, function() {
                            s.DragAndDrop.AttachCallbacks({
                                id: e,
                                hover: function(e) {
                                    !e && t && t()
                                },
                                drop: function(e) {
                                    t && t(), n(e)
                                }
                            }, function() {})
                        })
                    }
                    function r() {
                        document.getElementById(d).style.top = "-1000px"
                    }
                    var l, u = a.drop_element,
                        d = t.id + "_droptarget",
                        c = document.getElementById(u);
                    c && (document.attachEvent && /MSIE/gi.test(navigator.userAgent) ? (l = document.createElement("div"), l.setAttribute("id", d), e.extend(l.style, {
                        position: "absolute",
                        top: "-1000px",
                        background: "red",
                        filter: "alpha(opacity=0)",
                        opacity: 0
                    }), document.body.appendChild(l), e.addEvent(c, "dragenter", function() {
                        var t, i;
                        t = document.getElementById(u), i = e.getPos(t), e.extend(document.getElementById(d).style, {
                            top: i.y + "px",
                            left: i.x + "px",
                            width: t.offsetWidth + "px",
                            height: t.offsetHeight + "px"
                        })
                    }), i(d, r)) : i(u)), e.addEvent(document.getElementById(a.browse_button), "click", function(t) {
                        var i, r, l, u, d = [],
                            c = a.filters;
                        if(t.preventDefault(), !o) {
                            e: for(i = 0; c.length > i; i++) for(l = c[i].extensions.split(","), r = 0; l.length > r; r++) {
                                if("*" === l[r]) {
                                    d = [];
                                    break e
                                }
                                u = e.mimeTypes[l[r]], u && -1 === e.inArray(u, d) && d.push(e.mimeTypes[l[r]])
                            }
                            s.FileBrowse.OpenBrowseDialog({
                                mimeTypes: d
                            }, function(e) {
                                e.success && n(e.value)
                            })
                        }
                    }), c = l = null
                }), t.bind("CancelUpload", function() {
                    s.Uploader.cancel({}, function() {})
                }), t.bind("DisableBrowse", function(e, t) {
                    o = t
                }), t.bind("UploadFile", function(t, i) {
                    function n(o, r) {
                        var l;
                        i.status != e.FAILED && (d.name = i.target_name || i.name, c && (d.chunk = "" + o, d.chunks = "" + r), l = h.shift(), s.Uploader.upload({
                            url: t.settings.url,
                            files: {
                                file: l
                            },
                            cookies: document.cookies,
                            postvars: e.extend(d, t.settings.multipart_params),
                            progressCallback: function(e) {
                                var n, s = 0;
                                for(a[o] = parseInt(e.filePercent * l.size / 100, 10), n = 0; a.length > n; n++) s += a[n];
                                i.loaded = s, t.trigger("UploadProgress", i)
                            }
                        }, function(s) {
                            var a;
                            s.success ? (a = s.value.statusCode, c && t.trigger("ChunkUploaded", i, {
                                chunk: o,
                                chunks: r,
                                response: s.value.body,
                                status: a
                            }), h.length > 0 ? n(++o, r) : (i.status = e.DONE, t.trigger("FileUploaded", i, {
                                response: s.value.body,
                                status: a
                            }), a >= 400 && t.trigger("Error", {
                                code: e.HTTP_ERROR,
                                message: e.translate("HTTP Error."),
                                file: i,
                                status: a
                            }))) : t.trigger("Error", {
                                code: e.GENERIC_ERROR,
                                message: e.translate("Generic Error."),
                                file: i,
                                details: s.error
                            })
                        }))
                    }
                    function o(e) {
                        i.size = e.size, c ? s.FileAccess.chunk({
                            file: e,
                            chunkSize: c
                        }, function(e) {
                            if(e.success) {
                                var t = e.value,
                                    i = t.length;
                                a = Array(i);
                                for(var o = 0; i > o; o++) a[o] = 0, h.push(t[o]);
                                n(0, i)
                            }
                        }) : (a = Array(1), h.push(e), n(0, 1))
                    }
                    var a, u = r[i.id],
                        d = {},
                        c = t.settings.chunk_size,
                        h = [];
                    l && /\.(png|jpg|jpeg)$/i.test(i.name) ? BrowserPlus.ImageAlter.transform({
                        file: u,
                        quality: l.quality || 90,
                        actions: [{
                            scale: {
                                maxwidth: l.width,
                                maxheight: l.height
                            }
                        }]
                    }, function(e) {
                        e.success && o(e.value.file)
                    }) : o(u)
                }), i({
                    success: !0
                })
            }
            var s = window.BrowserPlus,
                r = {},
                a = t.settings,
                l = a.resize;
            s ? s.init(function(e) {
                var t = [{
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
                l && t.push({
                    service: "ImageAlter",
                    version: "4"
                }), e.success ? s.require({
                    services: t
                }, function(e) {
                    e.success ? o() : i()
                }) : i()
            }) : i()
        }
    })
}(plupload), function(e, t, n, o) {
    function s(t, i) {
        var n;
        return "FileReader" in e ? (n = new FileReader, n.readAsDataURL(t), n.onload = function() {
            i(n.result)
        }, void 0) : i(t.getAsDataURL())
    }
    function r(t, i) {
        var n;
        return "FileReader" in e ? (n = new FileReader, n.readAsBinaryString(t), n.onload = function() {
            i(n.result)
        }, void 0) : i(t.getAsBinary())
    }
    function a(e, i, n, o) {
        var r, a, l, c, p = this;
        s(h[e.id], function(s) {
            r = t.createElement("canvas"), r.style.display = "none", t.body.appendChild(r), a = r.getContext("2d"), l = new Image, l.onerror = l.onabort = function() {
                o({
                    success: !1
                })
            }, l.onload = function() {
                var t, h, f, m;
                if(i.width || (i.width = l.width), i.height || (i.height = l.height), c = Math.min(i.width / l.width, i.height / l.height), 1 > c || 1 === c && "image/jpeg" === n) {
                    if(t = Math.round(l.width * c), h = Math.round(l.height * c), r.width = t, r.height = h, a.drawImage(l, 0, 0, t, h), "image/jpeg" === n) {
                        if(f = new u(atob(s.substring(s.indexOf("base64,") + 7))), f.headers && f.headers.length && (m = new d, m.init(f.get("exif")[0]) && (m.setExif("PixelXDimension", t), m.setExif("PixelYDimension", h), f.set("exif", m.getBinary()), p.hasEventListener("ExifData") && p.trigger("ExifData", e, m.EXIF()), p.hasEventListener("GpsData") && p.trigger("GpsData", e, m.GPS()))), i.quality) try {
                            s = r.toDataURL(n, i.quality / 100)
                        } catch(g) {
                            s = r.toDataURL(n)
                        }
                    } else s = r.toDataURL(n);
                    s = s.substring(s.indexOf("base64,") + 7), s = atob(s), f && f.headers && f.headers.length && (s = f.restore(s), f.purge()), r.parentNode.removeChild(r), o({
                        success: !0,
                        data: s
                    })
                } else o({
                    success: !1
                })
            }, l.src = s
        })
    }
    function l() {
        function e(e, t) {
            var i, o = s ? 0 : -8 * (t - 1),
                r = 0;
            for(i = 0; t > i; i++) r |= n.charCodeAt(e + i) << Math.abs(o + 8 * i);
            return r
        }
        function t(e, t, i) {
            var i = 3 === arguments.length ? i : n.length - t - 1;
            n = n.substr(0, t) + e + n.substr(i + t)
        }
        function i(e, i, n) {
            var o, r = "",
                a = s ? 0 : -8 * (n - 1);
            for(o = 0; n > o; o++) r += String.fromCharCode(255 & i >> Math.abs(a + 8 * o));
            t(r, e, n)
        }
        var n, s = !1;
        return {
            II: function(e) {
                return e === o ? s : (s = e, void 0)
            },
            init: function(e) {
                s = !1, n = e
            },
            SEGMENT: function(e, i, o) {
                switch(arguments.length) {
                case 1:
                    return n.substr(e, n.length - e - 1);
                case 2:
                    return n.substr(e, i);
                case 3:
                    t(o, e, i);
                    break;
                default:
                    return n
                }
            },
            BYTE: function(t) {
                return e(t, 1)
            },
            SHORT: function(t) {
                return e(t, 2)
            },
            LONG: function(t, n) {
                return n === o ? e(t, 4) : (i(t, n, 4), void 0)
            },
            SLONG: function(t) {
                var i = e(t, 4);
                return i > 2147483647 ? i - 4294967296 : i
            },
            STRING: function(t, i) {
                var n = "";
                for(i += t; i > t; t++) n += String.fromCharCode(e(t, 1));
                return n
            }
        }
    }
    function u(e) {
        var t, i, n, s = {
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
            r = [],
            a = o,
            d = 0;
        if(t = new l, t.init(e), 65496 === t.SHORT(0)) {
            for(i = 2, n = Math.min(1048576, e.length); n >= i;) if(a = t.SHORT(i), a >= 65488 && 65495 >= a) i += 2;
            else {
                if(65498 === a || 65497 === a) break;
                d = t.SHORT(i + 2) + 2, s[a] && t.STRING(i + 4, s[a].signature.length) === s[a].signature && r.push({
                    hex: a,
                    app: s[a].app.toUpperCase(),
                    name: s[a].name.toUpperCase(),
                    start: i,
                    length: d,
                    segment: t.SEGMENT(i, d)
                }), i += d
            }
            return t.init(null), {
                headers: r,
                restore: function(e) {
                    t.init(e);
                    var n = new u(e);
                    if(!n.headers) return !1;
                    for(var o = n.headers.length; o > 0; o--) {
                        var s = n.headers[o - 1];
                        t.SEGMENT(s.start, s.length, "")
                    }
                    n.purge(), i = 65504 == t.SHORT(2) ? 4 + t.SHORT(4) : 2;
                    for(var o = 0, a = r.length; a > o; o++) t.SEGMENT(i, 0, r[o].segment), i += r[o].length;
                    return t.SEGMENT()
                },
                get: function(e) {
                    for(var t = [], i = 0, n = r.length; n > i; i++) r[i].app === e.toUpperCase() && t.push(r[i].segment);
                    return t
                },
                set: function(e, t) {
                    var i = [];
                    "string" == typeof t ? i.push(t) : i = t;
                    for(var n = ii = 0, o = r.length; o > n && (r[n].app === e.toUpperCase() && (r[n].segment = i[ii], r[n].length = i[ii].length, ii++), !(ii >= i.length)); n++);
                },
                purge: function() {
                    r = [], t.init(null)
                }
            }
        }
    }
    function d() {
        function e(e, t) {
            var i, n, s, a, l, c, h, p, f = r.SHORT(e),
                m = [],
                g = {};
            for(i = 0; f > i; i++) if(h = c = e + 12 * i + 2, s = t[r.SHORT(h)], s !== o) {
                switch(a = r.SHORT(h += 2), l = r.LONG(h += 2), h += 4, m = [], a) {
                case 1:
                case 7:
                    for(l > 4 && (h = r.LONG(h) + d.tiffHeader), n = 0; l > n; n++) m[n] = r.BYTE(h + n);
                    break;
                case 2:
                    l > 4 && (h = r.LONG(h) + d.tiffHeader), g[s] = r.STRING(h, l - 1);
                    continue;
                case 3:
                    for(l > 2 && (h = r.LONG(h) + d.tiffHeader), n = 0; l > n; n++) m[n] = r.SHORT(h + 2 * n);
                    break;
                case 4:
                    for(l > 1 && (h = r.LONG(h) + d.tiffHeader), n = 0; l > n; n++) m[n] = r.LONG(h + 4 * n);
                    break;
                case 5:
                    for(h = r.LONG(h) + d.tiffHeader, n = 0; l > n; n++) m[n] = r.LONG(h + 4 * n) / r.LONG(h + 4 * n + 4);
                    break;
                case 9:
                    for(h = r.LONG(h) + d.tiffHeader, n = 0; l > n; n++) m[n] = r.SLONG(h + 4 * n);
                    break;
                case 10:
                    for(h = r.LONG(h) + d.tiffHeader, n = 0; l > n; n++) m[n] = r.SLONG(h + 4 * n) / r.SLONG(h + 4 * n + 4);
                    break;
                default:
                    continue
                }
                p = 1 == l ? m[0] : m, g[s] = u.hasOwnProperty(s) && "object" != typeof p ? u[s][p] : p
            }
            return g
        }
        function t() {
            var t = o,
                i = d.tiffHeader;
            return r.II(18761 == r.SHORT(i)), 42 !== r.SHORT(i += 2) ? !1 : (d.IFD0 = d.tiffHeader + r.LONG(i += 2), t = e(d.IFD0, a.tiff), d.exifIFD = "ExifIFDPointer" in t ? d.tiffHeader + t.ExifIFDPointer : o, d.gpsIFD = "GPSInfoIFDPointer" in t ? d.tiffHeader + t.GPSInfoIFDPointer : o, !0)
        }
        function s(e, t, n) {
            var o, s, l, u = 0;
            if("string" == typeof t) {
                var c = a[e.toLowerCase()];
                for(hex in c) if(c[hex] === t) {
                    t = hex;
                    break
                }
            }
            for(o = d[e.toLowerCase() + "IFD"], s = r.SHORT(o), i = 0; s > i; i++) if(l = o + 12 * i + 2, r.SHORT(l) == t) {
                u = l + 8;
                break
            }
            return u ? (r.LONG(u, n), !0) : !1
        }
        var r, a, u, d = {};
        return r = new l, a = {
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
        }, u = {
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
        }, {
            init: function(e) {
                return d = {
                    tiffHeader: 10
                }, e !== o && e.length ? (r.init(e), 65505 === r.SHORT(0) && "EXIF\0" === r.STRING(4, 5).toUpperCase() ? t() : !1) : !1
            },
            EXIF: function() {
                var t;
                if(t = e(d.exifIFD, a.exif), t.ExifVersion && "array" === n.typeOf(t.ExifVersion)) {
                    for(var i = 0, o = ""; t.ExifVersion.length > i; i++) o += String.fromCharCode(t.ExifVersion[i]);
                    t.ExifVersion = o
                }
                return t
            },
            GPS: function() {
                var t;
                return t = e(d.gpsIFD, a.gps), t.GPSVersionID && (t.GPSVersionID = t.GPSVersionID.join(".")), t
            },
            setExif: function(e, t) {
                return "PixelXDimension" !== e && "PixelYDimension" !== e ? !1 : s("exif", e, t)
            },
            getBinary: function() {
                return r.SEGMENT()
            }
        }
    }
    var c, h = {};
    n.runtimes.Html5 = n.addRuntime("html5", {
        getFeatures: function() {
            var i, o, s, r, a, l;
            return o = s = a = l = !1, e.XMLHttpRequest && (i = new XMLHttpRequest, s = !! i.upload, o = !(!i.sendAsBinary && !i.upload)), o && (r = !! (i.sendAsBinary || e.Uint8Array && e.ArrayBuffer), a = !(!File || !File.prototype.getAsDataURL && !e.FileReader || !r), l = !(!File || !(File.prototype.mozSlice || File.prototype.webkitSlice || File.prototype.slice))), c = n.ua.safari && n.ua.windows, {
                html5: o,
                dragdrop: function() {
                    var e = t.createElement("div");
                    return "draggable" in e || "ondragstart" in e && "ondrop" in e
                }(),
                jpgresize: a,
                pngresize: a,
                multipart: a || !! e.FileReader || !! e.FormData,
                canSendBinary: r,
                cantSendBlobInFormData: !(!(n.ua.gecko && e.FormData && e.FileReader) || FileReader.prototype.readAsArrayBuffer),
                progress: s,
                chunks: l,
                multi_selection: !(n.ua.safari && n.ua.windows),
                triggerDialog: n.ua.gecko && e.FormData || n.ua.webkit
            }
        },
        init: function(i, o) {
            function s(e) {
                var t, o, s, r = [],
                    a = {};
                for(o = 0; e.length > o; o++) t = e[o], a[t.name] || (a[t.name] = !0, s = n.guid(), h[s] = t, r.push(new n.File(s, t.fileName || t.name, t.fileSize || t.size)));
                r.length && i.trigger("FilesAdded", r)
            }
            var l, u;
            return l = this.getFeatures(), l.html5 ? (i.bind("Init", function(e) {
                var o, r, a, l, u, d, c, h = [],
                    p = e.settings.filters,
                    f = t.body;
                o = t.createElement("div"), o.id = e.id + "_html5_container", n.extend(o.style, {
                    position: "absolute",
                    background: i.settings.shim_bgcolor || "transparent",
                    width: "100px",
                    height: "100px",
                    overflow: "hidden",
                    zIndex: 99999,
                    opacity: i.settings.shim_bgcolor ? "" : 0
                }), o.className = "plupload html5", i.settings.container && (f = t.getElementById(i.settings.container), "static" === n.getStyle(f, "position") && (f.style.position = "relative")), f.appendChild(o);
                e: for(a = 0; p.length > a; a++) for(u = p[a].extensions.split(/,/), l = 0; u.length > l; l++) {
                    if("*" === u[l]) {
                        h = [];
                        break e
                    }
                    d = n.mimeTypes[u[l]], d && -1 === n.inArray(d, h) && h.push(d)
                }
                if(o.innerHTML = '<input id="' + i.id + '_html5"  style="font-size:999px" type="file" accept="' + h.join(",") + '" ' + (i.settings.multi_selection && i.features.multi_selection ? 'multiple="multiple"' : "") + " />", o.scrollTop = 100, c = t.getElementById(i.id + "_html5"), e.features.triggerDialog ? n.extend(c.style, {
                    position: "absolute",
                    width: "100%",
                    height: "100%"
                }) : n.extend(c.style, {
                    cssFloat: "right",
                    styleFloat: "right"
                }), c.onchange = function() {
                    s(this.files), this.value = ""
                }, r = t.getElementById(e.settings.browse_button)) {
                    var m = e.settings.browse_button_hover,
                        g = e.settings.browse_button_active,
                        v = e.features.triggerDialog ? r : o;
                    m && (n.addEvent(v, "mouseover", function() {
                        n.addClass(r, m)
                    }, e.id), n.addEvent(v, "mouseout", function() {
                        n.removeClass(r, m)
                    }, e.id)), g && (n.addEvent(v, "mousedown", function() {
                        n.addClass(r, g)
                    }, e.id), n.addEvent(t.body, "mouseup", function() {
                        n.removeClass(r, g)
                    }, e.id)), e.features.triggerDialog && n.addEvent(r, "click", function(i) {
                        var n = t.getElementById(e.id + "_html5");
                        n && !n.disabled && n.click(), i.preventDefault()
                    }, e.id)
                }
            }), i.bind("PostInit", function() {
                var e = t.getElementById(i.settings.drop_element);
                if(e) {
                    if(c) return n.addEvent(e, "dragenter", function() {
                        var o, r, a;
                        o = t.getElementById(i.id + "_drop"), o || (o = t.createElement("input"), o.setAttribute("type", "file"), o.setAttribute("id", i.id + "_drop"), o.setAttribute("multiple", "multiple"), n.addEvent(o, "change", function() {
                            s(this.files), n.removeEvent(o, "change", i.id), o.parentNode.removeChild(o)
                        }, i.id), e.appendChild(o)), r = n.getPos(e, t.getElementById(i.settings.container)), a = n.getSize(e), "static" === n.getStyle(e, "position") && n.extend(e.style, {
                            position: "relative"
                        }), n.extend(o.style, {
                            position: "absolute",
                            display: "block",
                            top: 0,
                            left: 0,
                            width: a.w + "px",
                            height: a.h + "px",
                            opacity: 0
                        })
                    }, i.id), void 0;
                    n.addEvent(e, "dragover", function(e) {
                        e.preventDefault()
                    }, i.id), n.addEvent(e, "drop", function(e) {
                        var t = e.dataTransfer;
                        t && t.files && s(t.files), e.preventDefault()
                    }, i.id)
                }
            }), i.bind("Refresh", function(e) {
                var o, s, r, a, l;
                o = t.getElementById(i.settings.browse_button), o && (s = n.getPos(o, t.getElementById(e.settings.container)), r = n.getSize(o), a = t.getElementById(i.id + "_html5_container"), n.extend(a.style, {
                    top: s.y + "px",
                    left: s.x + "px",
                    width: r.w + "px",
                    height: r.h + "px"
                }), i.features.triggerDialog && ("static" === n.getStyle(o, "position") && n.extend(o.style, {
                    position: "relative"
                }), l = parseInt(n.getStyle(o, "z-index"), 10), isNaN(l) && (l = 0), n.extend(o.style, {
                    zIndex: l
                }), n.extend(a.style, {
                    zIndex: l - 1
                })))
            }), i.bind("DisableBrowse", function(e, i) {
                var n = t.getElementById(e.id + "_html5");
                n && (n.disabled = i)
            }), i.bind("CancelUpload", function() {
                u && u.abort && u.abort()
            }), i.bind("UploadFile", function(t, i) {
                function o(e, t, i) {
                    var n;
                    if(!File.prototype.slice) return(n = File.prototype.webkitSlice || File.prototype.mozSlice) ? n.call(e, t, i) : null;
                    try {
                        return e.slice(), e.slice(t, i)
                    } catch(o) {
                        return e.slice(t, i - t)
                    }
                }
                function s(s) {
                    function r() {
                        function p(o) {
                            var s, c = 0,
                                h = "----pluploadboundary" + n.guid(),
                                p = "--",
                                _ = "\r\n",
                                S = "";
                            if(u = new XMLHttpRequest, u.upload && (u.upload.onprogress = function(e) {
                                i.loaded = Math.min(i.size, d + e.loaded - c), t.trigger("UploadProgress", i)
                            }), u.onreadystatechange = function() {
                                var e, l;
                                if(4 == u.readyState && t.state !== n.STOPPED) {
                                    try {
                                        e = u.status
                                    } catch(c) {
                                        e = 0
                                    }
                                    if(e >= 400) t.trigger("Error", {
                                        code: n.HTTP_ERROR,
                                        message: n.translate("HTTP Error."),
                                        file: i,
                                        status: e
                                    });
                                    else {
                                        if(m) {
                                            if(l = {
                                                chunk: a,
                                                chunks: m,
                                                response: u.responseText,
                                                status: e
                                            }, t.trigger("ChunkUploaded", i, l), d += y, l.cancelled) return i.status = n.FAILED, void 0;
                                            i.loaded = Math.min(i.size, (a + 1) * v)
                                        } else i.loaded = i.size;
                                        t.trigger("UploadProgress", i), o = f = s = S = null, !m || ++a >= m ? (i.status = n.DONE, t.trigger("FileUploaded", i, {
                                            response: u.responseText,
                                            status: e
                                        })) : r()
                                    }
                                }
                            }, t.settings.multipart && l.multipart) {
                                if(g.name = i.target_name || i.name, u.open("post", w, !0), n.each(t.settings.headers, function(e, t) {
                                    u.setRequestHeader(t, e)
                                }), "string" != typeof o && e.FormData) return s = new FormData, n.each(n.extend(g, t.settings.multipart_params), function(e, t) {
                                    s.append(t, e)
                                }), s.append(t.settings.file_data_name, o), u.send(s), void 0;
                                if("string" == typeof o) {
                                    if(u.setRequestHeader("Content-Type", "multipart/form-data; boundary=" + h), n.each(n.extend(g, t.settings.multipart_params), function(e, t) {
                                        S += p + h + _ + 'Content-Disposition: form-data; name="' + t + '"' + _ + _, S += unescape(encodeURIComponent(e)) + _
                                    }), b = n.mimeTypes[i.name.replace(/^.+\.([^.]+)/, "$1").toLowerCase()] || "application/octet-stream", S += p + h + _ + 'Content-Disposition: form-data; name="' + t.settings.file_data_name + '"; filename="' + unescape(encodeURIComponent(i.name)) + '"' + _ + "Content-Type: " + b + _ + _ + o + _ + p + h + p + _, c = S.length - o.length, o = S, u.sendAsBinary) u.sendAsBinary(o);
                                    else if(l.canSendBinary) {
                                        for(var k = new Uint8Array(o.length), T = 0; o.length > T; T++) k[T] = 255 & o.charCodeAt(T);
                                        u.send(k.buffer)
                                    }
                                    return
                                }
                            }
                            w = n.buildUrl(t.settings.url, n.extend(g, t.settings.multipart_params)), u.open("post", w, !0), u.setRequestHeader("Content-Type", "application/octet-stream"), n.each(t.settings.headers, function(e, t) {
                                u.setRequestHeader(t, e)
                            }), u.send(o)
                        }
                        var f, m, g, v, y, b, w = t.settings.url;
                        i.status != n.DONE && i.status != n.FAILED && t.state != n.STOPPED && (g = {
                            name: i.target_name || i.name
                        }, c.chunk_size && i.size > c.chunk_size && (l.chunks || "string" == typeof s) ? (v = c.chunk_size, m = Math.ceil(i.size / v), y = Math.min(v, i.size - a * v), f = "string" == typeof s ? s.substring(a * v, a * v + y) : o(s, a * v, a * v + y), g.chunk = a, g.chunks = m) : (y = i.size, f = s), t.settings.multipart && l.multipart && "string" != typeof f && h && l.cantSendBlobInFormData && l.chunks && t.settings.chunk_size ? (h.onload = function() {
                            p(h.result)
                        }, h.readAsBinaryString(f)) : p(f))
                    }
                    var a = 0,
                        d = 0,
                        h = "FileReader" in e ? new FileReader : null;
                    r()
                }
                var d, c = t.settings;
                d = h[i.id], l.jpgresize && t.settings.resize && /\.(png|jpg|jpeg)$/i.test(i.name) ? a.call(t, i, t.settings.resize, /\.png$/i.test(i.name) ? "image/png" : "image/jpeg", function(e) {
                    e.success ? (i.size = e.data.length, s(e.data)) : l.chunks ? s(d) : r(d, s)
                }) : !l.chunks && l.jpgresize ? r(d, s) : s(d)
            }), i.bind("Destroy", function(e) {
                var i, o, s = t.body,
                    r = {
                        inputContainer: e.id + "_html5_container",
                        inputFile: e.id + "_html5",
                        browseButton: e.settings.browse_button,
                        dropElm: e.settings.drop_element
                    };
                for(i in r) o = t.getElementById(r[i]), o && n.removeAllEvents(o, e.id);
                n.removeAllEvents(t.body, e.id), e.settings.container && (s = t.getElementById(e.settings.container)), s.removeChild(t.getElementById(r.inputContainer))
            }), o({
                success: !0
            }), void 0) : (o({
                success: !1
            }), void 0)
        }
    })
}(window, document, plupload), function(e, t, i) {
    function n(e) {
        return t.getElementById(e)
    }
    i.runtimes.Html4 = i.addRuntime("html4", {
        getFeatures: function() {
            return {
                multipart: !0,
                triggerDialog: i.ua.gecko && e.FormData || i.ua.webkit
            }
        },
        init: function(o, s) {
            o.bind("Init", function(s) {
                function r() {
                    var e, a, l, u;
                    d = i.guid(), v.push(d), e = t.createElement("form"), e.setAttribute("id", "form_" + d), e.setAttribute("method", "post"), e.setAttribute("enctype", "multipart/form-data"), e.setAttribute("encoding", "multipart/form-data"), e.setAttribute("target", s.id + "_iframe"), e.style.position = "absolute", a = t.createElement("input"), a.setAttribute("id", "input_" + d), a.setAttribute("type", "file"), a.setAttribute("accept", b), a.setAttribute("size", 1), u = n(s.settings.browse_button), s.features.triggerDialog && u && i.addEvent(n(s.settings.browse_button), "click", function(e) {
                        a.disabled || a.click(), e.preventDefault()
                    }, s.id), i.extend(a.style, {
                        width: "100%",
                        height: "100%",
                        opacity: 0,
                        fontSize: "99px",
                        cursor: "pointer"
                    }), i.extend(e.style, {
                        overflow: "hidden"
                    }), l = s.settings.shim_bgcolor, l && (e.style.background = l), y && i.extend(a.style, {
                        filter: "alpha(opacity=0)"
                    }), i.addEvent(a, "change", function(t) {
                        var l, c = t.target,
                            h = [];
                        c.value && (n("form_" + d).style.top = "-1048575px", l = c.value.replace(/\\/g, "/"), l = l.substring(l.length, l.lastIndexOf("/") + 1), h.push(new i.File(d, l)), s.features.triggerDialog ? i.removeEvent(u, "click", s.id) : i.removeAllEvents(e, s.id), i.removeEvent(a, "change", s.id), r(), h.length && o.trigger("FilesAdded", h))
                    }, s.id), e.appendChild(a), m.appendChild(e), s.refresh()
                }
                function a() {
                    var n = t.createElement("div");
                    n.innerHTML = '<iframe id="' + s.id + '_iframe" name="' + s.id + '_iframe" src="' + g + ':&quot;&quot;" style="display:none"></iframe>', l = n.firstChild, m.appendChild(l), i.addEvent(l, "load", function(t) {
                        var n, o, r = t.target;
                        if(u) {
                            try {
                                n = r.contentWindow.document || r.contentDocument || e.frames[r.id].document
                            } catch(a) {
                                return s.trigger("Error", {
                                    code: i.SECURITY_ERROR,
                                    message: i.translate("Security error."),
                                    file: u
                                }), void 0
                            }
                            o = n.body.innerHTML, o && (u.status = i.DONE, u.loaded = 1025, u.percent = 100, s.trigger("UploadProgress", u), s.trigger("FileUploaded", u, {
                                response: o
                            }))
                        }
                    }, s.id)
                }
                var l, u, d, c, h, p, f, m = t.body,
                    g = "javascript",
                    v = [],
                    y = /MSIE/.test(navigator.userAgent),
                    b = [],
                    w = s.settings.filters;
                e: for(c = 0; w.length > c; c++) for(h = w[c].extensions.split(/,/), f = 0; h.length > f; f++) {
                    if("*" === h[f]) {
                        b = [];
                        break e
                    }
                    p = i.mimeTypes[h[f]], p && -1 === i.inArray(p, b) && b.push(p)
                }
                b = b.join(","),
                s.settings.container && (m = n(s.settings.container), "static" === i.getStyle(m, "position") && (m.style.position = "relative")),
                s.bind("UploadFile", function(e, o) {
                    var s, r;
                    o.status != i.DONE && o.status != i.FAILED && e.state != i.STOPPED && (s = n("form_" + o.id), r = n("input_" + o.id), r.setAttribute("name", e.settings.file_data_name), s.setAttribute("action", e.settings.url), i.each(i.extend({
                        name: o.target_name || o.name
                    }, e.settings.multipart_params), function(e, n) {
                        var o = t.createElement("input");
                        i.extend(o, {
                            type: "hidden",
                            name: n,
                            value: e
                        }), s.insertBefore(o, s.firstChild)
                    }), u = o, n("form_" + d).style.top = "-1048575px", s.submit())
                }),
                s.bind("FileUploaded", function(e) {
                    e.refresh()
                }),
                s.bind("StateChanged", function(t) {
                    t.state == i.STARTED ? a() : t.state == i.STOPPED && e.setTimeout(function() {
                        i.removeEvent(l, "load", t.id), l.parentNode && l.parentNode.removeChild(l)
                    }, 0), i.each(t.files, function(e) {
                        if(e.status === i.DONE || e.status === i.FAILED) {
                            var t = n("form_" + e.id);
                            t && t.parentNode.removeChild(t)
                        }
                    })
                }),
                s.bind("Refresh", function(e) {
                    var o, s, r, a, l, u, c, h, p;
                    o = n(e.settings.browse_button), o && (l = i.getPos(o, n(e.settings.container)), u = i.getSize(o), c = n("form_" + d), h = n("input_" + d), i.extend(c.style, {
                        top: l.y + "px",
                        left: l.x + "px",
                        width: u.w + "px",
                        height: u.h + "px"
                    }), e.features.triggerDialog && ("static" === i.getStyle(o, "position") && i.extend(o.style, {
                        position: "relative"
                    }), p = parseInt(o.style.zIndex, 10), isNaN(p) && (p = 0), i.extend(o.style, {
                        zIndex: p
                    }), i.extend(c.style, {
                        zIndex: p - 1
                    })), r = e.settings.browse_button_hover, a = e.settings.browse_button_active, s = e.features.triggerDialog ? o : c, r && (i.addEvent(s, "mouseover", function() {
                        i.addClass(o, r)
                    }, e.id), i.addEvent(s, "mouseout", function() {
                        i.removeClass(o, r)
                    }, e.id)), a && (i.addEvent(s, "mousedown", function() {
                        i.addClass(o, a)
                    }, e.id), i.addEvent(t.body, "mouseup", function() {
                        i.removeClass(o, a)
                    }, e.id)))
                }),
                o.bind("FilesRemoved", function(e, t) {
                    var i, o;
                    for(i = 0; t.length > i; i++) o = n("form_" + t[i].id), o && o.parentNode.removeChild(o)
                }),
                o.bind("DisableBrowse", function(e, i) {
                    var n = t.getElementById("input_" + d);
                    n && (n.disabled = i)
                }),
                o.bind("Destroy", function(e) {
                    var o, s, r, a = {
                        inputContainer: "form_" + d,
                        inputFile: "input_" + d,
                        browseButton: e.settings.browse_button
                    };
                    for(o in a) s = n(a[o]), s && i.removeAllEvents(s, e.id);
                    i.removeAllEvents(t.body, e.id), i.each(v, function(e) {
                        r = n("form_" + e), r && m.removeChild(r)
                    })
                }),
                r()
            }), s({
                success: !0
            })
        }
    })
}(window, document, plupload), define("plupload", function(e) {
    return function() {
        var t;
        return t || e.plupload
    }
}(this)), define("dmca", [], function() {
    return {
        showPreview: function(e) {
            for(var t = [], i = 0; t.length > i; ++i) if(e.metadata.labelid == t[i]) return !1;
            return !0
        }
    }
}), function(e) {
    function t(t) {
        var i = t || window.event,
            n = [].slice.call(arguments, 1),
            o = 0,
            s = 0,
            r = 0;
        return t = e.event.fix(i), t.type = "mousewheel", i.wheelDelta && (o = i.wheelDelta / 120), i.detail && (o = -i.detail / 3), r = o, void 0 !== i.axis && i.axis === i.HORIZONTAL_AXIS && (r = 0, s = -1 * o), void 0 !== i.wheelDeltaY && (r = i.wheelDeltaY / 120), void 0 !== i.wheelDeltaX && (s = -1 * i.wheelDeltaX / 120), n.unshift(t, o, s, r), (e.event.dispatch || e.event.handle).apply(this, n)
    }
    var i = ["DOMMouseScroll", "mousewheel"];
    if(e.event.fixHooks) for(var n = i.length; n;) e.event.fixHooks[i[--n]] = e.event.mouseHooks;
    e.event.special.mousewheel = {
        setup: function() {
            if(this.addEventListener) for(var e = i.length; e;) this.addEventListener(i[--e], t, !1);
            else this.onmousewheel = t
        },
        teardown: function() {
            if(this.removeEventListener) for(var e = i.length; e;) this.removeEventListener(i[--e], t, !1);
            else this.onmousewheel = null
        }
    }, e.fn.extend({
        mousewheel: function(e) {
            return e ? this.bind("mousewheel", e) : this.trigger("mousewheel")
        },
        unmousewheel: function(e) {
            return this.unbind("mousewheel", e)
        }
    })
}(jQuery), define("jquery.mousewheel", function() {}), define("draggable", ["require", "class", "util", "jquery.mousewheel"], function(e) {
    var t = e("class"),
        i = e("util");
    e("jquery.mousewheel");
    var n, o = t.extend({
        init: function() {
            n || (n = $(".clear-overlay")), 0 === n.length && (n = $(i.buildTree(["div.clear-overlay"])).hide().appendTo(document.body)), this.setup = $.proxy(this.setup, this), this._setupOverlay = $.proxy(this._setupOverlay, this), this._endDrag = $.proxy(this._endDrag, this), this._scroll = $.proxy(this._scroll, this), this.cancelDrag = $.proxy(this.cancelDrag, this), this.setCursor = $.proxy(this.setCursor, this), this._setScroll = i.makeDrawer(this, this._setScroll), this.$window = $(window)
        },
        setup: function(e) {
            1 === e.which && (this.$window.one("mousemove", this._setupOverlay).one("mouseup", this._endDrag), this.setupComplete = !0, this.mousedown(e))
        },
        _setupOverlay: function() {
            n.css("cursor", this.cursor || "").show().on("mousemove", this.mousemove).one("mouseup", this._endDrag), this.scroller && (n.on("mousewheel", this._scroll), this._scrollDeltaX = 0, this._scrollDeltaY = 0)
        },
        _endDrag: function(e) {
            this.mouseup(e), this.cancelDrag()
        },
        _scroll: function(e, t, i, n) {
            this._scrollDeltaX -= 20 * i, this._scrollDeltaY -= 20 * n, this._setScroll(), e.preventDefault()
        },
        _setScroll: function() {
            this.scroller.scrollLeft += this._scrollDeltaX, this.scroller.scrollTop += this._scrollDeltaY, this._scrollDeltaX = 0, this._scrollDeltaY = 0
        },
        cancelDrag: function() {
            this.setupComplete && (this.$window.off("mousemove", this._setupOverlay).off("mouseup", this._endDrag), n.hide().off("mousemove", this.mousemove).off("mouseup", this._endDrag).css("cursor", "").off("mousewheel", this._scroll), this.setupComplete = !1)
        },
        setCursor: function(e) {
            n.css("cursor", e), this.cursor = e
        },
        mousedown: function() {},
        mousemove: function() {},
        mouseup: function() {}
    });
    return o
}), define("tip", ["require", "ttnode"], function(e) {
    var t = e("ttnode"),
        i = t.extend({
            attributes: {
                text: null,
                duration: 5
            },
            init: function(e) {
                this._super(e), this.hideTip = $.proxy(this.hideTip, this)
            },
            layout: function() {
                return ["div.roomTip", ["div.roomTipClose"], ["div.text"]]
            },
            render: function(e, t) {
                this._super(e, t), this.$node.on("click", this.hideTip), this.$node.fadeIn(), setTimeout($.proxy(function() {
                    var e = this.$node.find(".text");
                    e.text(this.attributes.text), e.css("margin-top", (this.$node.height() - e.height()) / 2 + "px")
                }, this), 0), this.attributes.duration && (this.timer = setTimeout(this.hideTip, 1e3 * this.attributes.duration))
            },
            hideTip: function() {
                this.$node.fadeOut(), this.timer && (clearTimeout(this.timer), this.timer = null)
            }
        });
    return i
}), function(e) {
    function t(e, t) {
        return "function" == typeof e ? e.call(t) : e
    }
    function i(e) {
        for(; e = e.parentNode;) if(e == document) return !0;
        return !1
    }
    function n(t, i) {
        this.$element = e(t), this.options = i, this.enabled = !0, this.fixTitle()
    }
    n.prototype = {
        show: function() {
            var i = this.getTitle();
            if(i && this.enabled) {
                var n = this.tip();
                n.find(".tipsy-inner")[this.options.html ? "html" : "text"](i), n[0].className = "tipsy", n.remove().css({
                    top: 0,
                    left: 0,
                    visibility: "hidden",
                    display: "block"
                }).prependTo(document.body), this.options.className && n.addClass(t(this.options.className, this.$element[0]));
                var o, s = e.extend({}, this.$element.offset(), {
                    width: this.$element[0].offsetWidth,
                    height: this.$element[0].offsetHeight
                }),
                    r = n[0].offsetWidth,
                    a = n[0].offsetHeight,
                    l = t(this.options.gravity, this.$element[0]);
                switch(l.charAt(0)) {
                case "n":
                    o = {
                        top: s.top + s.height + this.options.offset,
                        left: s.left + s.width / 2 - r / 2
                    };
                    break;
                case "s":
                    o = {
                        top: s.top - a - this.options.offset,
                        left: s.left + s.width / 2 - r / 2
                    };
                    break;
                case "e":
                    o = {
                        top: s.top + s.height / 2 - a / 2,
                        left: s.left - r - this.options.offset
                    };
                    break;
                case "w":
                    o = {
                        top: s.top + s.height / 2 - a / 2,
                        left: s.left + s.width + this.options.offset
                    }
                }
                2 == l.length && (o.left = "w" == l.charAt(1) ? s.left + s.width / 2 - 15 : s.left + s.width / 2 - r + 15), n.css(o).addClass("tipsy-" + l), n.find(".tipsy-arrow").addClass("tipsy-arrow-" + l.charAt(0)), this.options.fade ? n.stop().css({
                    opacity: 0,
                    display: "block",
                    visibility: "visible"
                }).animate({
                    opacity: this.options.opacity
                }) : n.css({
                    visibility: "visible",
                    opacity: this.options.opacity
                })
            }
        },
        hide: function() {
            this.options.fade ? this.tip().stop().fadeOut(function() {
                e(this).remove()
            }) : this.tip().remove()
        },
        fixTitle: function() {
            var e = this.$element;
            (e.attr("title") || "string" != typeof e.attr("original-title")) && e.attr("original-title", e.attr("title") || "").removeAttr("title")
        },
        getTitle: function() {
            var e, t = this.$element,
                i = this.options;
            this.fixTitle();
            var e, i = this.options;
            return "string" == typeof i.title ? e = t.attr("title" == i.title ? "original-title" : i.title) : "function" == typeof i.title && (e = i.title.call(t[0])), e = ("" + e).replace(/(^\s*|\s*$)/, ""), e || i.fallback
        },
        tip: function() {
            return this.$tip || (this.$tip = e('<div class="tipsy"></div>').html('<div class="tipsy-arrow outer"></div><div class="tipsy-arrow"></div><div class="tipsy-inner"></div>'), this.$tip.data("tipsy-pointee", this.$element[0])), this.$tip
        },
        validate: function() {
            this.$element[0].parentNode || (this.hide(), this.$element = null, this.options = null)
        },
        enable: function() {
            this.enabled = !0
        },
        disable: function() {
            this.enabled = !1
        },
        toggleEnabled: function() {
            this.enabled = !this.enabled
        }
    }, e.fn.tipsy = function(t) {
        function i(i) {
            var o = e.data(i, "tipsy");
            return o || (o = new n(i, e.fn.tipsy.elementOptions(i, t)), e.data(i, "tipsy", o)), o
        }
        function o() {
            var e = i(this);
            e.hoverState = "in", 0 == t.delayIn ? e.show() : (e.fixTitle(), setTimeout(function() {
                "in" == e.hoverState && e.show()
            }, t.delayIn))
        }
        function s() {
            var e = i(this);
            e.hoverState = "out", 0 == t.delayOut ? e.hide() : setTimeout(function() {
                "out" == e.hoverState && e.hide()
            }, t.delayOut)
        }
        if(t === !0) return this.data("tipsy");
        if("string" == typeof t) {
            var r = this.data("tipsy");
            return r && r[t](), this
        }
        if(t = e.extend({}, e.fn.tipsy.defaults, t), t.live || this.each(function() {
            i(this)
        }), "manual" != t.trigger) {
            var a = t.live ? "live" : "bind",
                l = "hover" == t.trigger ? "mouseenter" : "focus",
                u = "hover" == t.trigger ? "mouseleave" : "blur";
            this[a](l, o)[a](u, s)
        }
        return this
    }, e.fn.tipsy.defaults = {
        className: null,
        delayIn: 0,
        delayOut: 0,
        fade: !1,
        fallback: "",
        gravity: "n",
        html: !1,
        live: !1,
        offset: 0,
        opacity: .8,
        title: "title",
        trigger: "hover"
    }, e.fn.tipsy.revalidate = function() {
        e(".tipsy").each(function() {
            var t = e.data(this, "tipsy-pointee");
            t && i(t) || e(this).remove()
        })
    }, e.fn.tipsy.elementOptions = function(t, i) {
        return e.metadata ? e.extend({}, i, e(t).metadata()) : i
    }, e.fn.tipsy.autoNS = function() {
        return e(this).offset().top > e(document).scrollTop() + e(window).height() / 2 ? "s" : "n"
    }, e.fn.tipsy.autoWE = function() {
        return e(this).offset().left > e(document).scrollLeft() + e(window).width() / 2 ? "e" : "w"
    }, e.fn.tipsy.autoBounds = function(t, i) {
        return function() {
            var n = {
                ns: i[0],
                ew: i.length > 1 ? i[1] : !1
            },
                o = e(document).scrollTop() + t,
                s = e(document).scrollLeft() + t,
                r = e(this);
            return o > r.offset().top && (n.ns = "n"), s > r.offset().left && (n.ew = "w"), t > e(window).width() + e(document).scrollLeft() - r.offset().left && (n.ew = "e"), t > e(window).height() + e(document).scrollTop() - r.offset().top && (n.ns = "s"), n.ns + (n.ew ? n.ew : "")
        }
    }
}(jQuery), define("jquery.tipsy", function() {}), define("playlist", ["require", "plupload", "util", "action-modal", "dmca", "draggable", "tip", "player", "ttnode", "user", "jquery.tipsy"], function(e) {
    var t = e("plupload"),
        i = e("util"),
        n = e("action-modal"),
        o = e("dmca"),
        s = e("draggable"),
        r = e("tip"),
        a = e("player"),
        l = e("ttnode"),
        u = e("user");
    e("jquery.tipsy");
    var d = {
        MAX_API_RETRIES: 5,
        SEARCH_DELAY: 500,
        defaultPlaylistName: "default",
        playlists: [],
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
        queueEditsLocked: !1,
        loadPlaylistsDeferred: null,
        init: function() {
            var e = this;
            this.loadList = $.proxy(this.loadList, this), this.loadPlaylistsDeferred = this.loadPlaylists(), $("#playlist").replaceWith(i.buildTree(this.layouts.playlistView));
            var t = i.buildTree([h,
            {
                $viewport: $("#songs"),
                titleText: "Results from your queue",
                backingMap: this.songsByFid,
                songConstructor: this.layouts.songView,
                highlightTopSong: !0,
                id: "queue"
            }], this);
            $("#queue").replaceWith(t), this.queue.hideTitle();
            var n = i.buildTree([c,
            {
                $viewport: $("#songs"),
                titleText: "Results from the turntable library",
                alwaysShowTitle: !0,
                backingMap: this.searchResultsByFid,
                songConstructor: this.layouts.searchedSongView,
                idd: "searchResults",
                id: "search-results"
            }], this);
            $(n).replaceAll("#search-results").hide(), this.$playlistView = $("#playlist"), this.$songs = $("#songs"), this.$queue = $("#queue"), this.$queueMessage = this.$playlistView.find(".queue-message"), this.$emptyQueue = $("#empty-queue"), this.$searchResults = $("#search-results"), this.$searchLoading = $("#search-loading"), this.$searchEmpty = $("#search-empty"), this.$searchInput = $("#song-search-input"), this.$panes = $("#queue-view-panes"), this.songsByFid = $.extend(this.songsByFid, this.cache.toObject());
            var o = $.proxy(this.initPlaylistDropdown(), this);
            $("#playlist-display").click(o), $("#queue-header").find(".done").on("click", function() {
                $("#queue-header").addClass("normal").removeClass("edit"), e.queue.normalMode(), $("#playlist-dropdown").remove()
            }), $("#queue-header").find(".remove").on("click", function(t) {
                $(t.currentTarget).hasClass("disabled") || (i.buildTree(e.layouts.removeSongConfirmation("the selected songs", e.activePlaylist, function() {
                    e.queue.removeSelectedSongs()
                }), e), e.modal.show())
            }), $("#queue-header").find(".show-playlists").on("click", function(t) {
                if(!$(t.currentTarget).hasClass("disabled")) {
                    var n = e.displayMenu.getMenu();
                    if(n && n.is("#batch-copy-dropdown")) return e.displayMenu.removeMenu(), void 0;
                    var o = $(i.buildTree(e.layouts.batchCopyDropdown())),
                        s = $("#queue-view"),
                        r = $(t.currentTarget);
                    s.append(e.displayMenu.create(o, r)), o.on("click", ".playlist", function(t) {
                        var i = $(t.currentTarget).closest(".playlist");
                        i.html("Adding..."), e.queue.addSelectedSongs(i.data("playlist")).done(function() {
                            e.displayMenu.removeMenu(o)
                        })
                    })
                }
            }), $("#queue-header").find(".show-playlists").tipsy({
                className: "batch-add",
                offset: -5,
                gravity: $.fn.tipsy.autoWE,
                fade: !0,
                opacity: 1,
                title: function() {
                    return 1 == e.playlists.length ? "Create a playlist to add songs" : e.queue.selectedSongExists() ? void 0 : "Select songs below to add to your playlist"
                }
            }), $("#upload-button").on("click", function() {
                e.filterQueue(""), e.$panes.addClass("subsection-visible");
                var t = $("#pickfiles");
                $("#plUpload .plupload.html5").css({
                    width: t.outerWidth(),
                    height: t.outerHeight(!0)
                })
            }), $("#upload-pane .back").click($.proxy(function() {
                this.$panes.removeClass("subsection-visible")
            }, this)), this.$searchResults.on("click", ".addSong", $.proxy(this.addSearchResult, this)), this.$songs.on("SongList:previewCreated", $.proxy(function() {
                var e = this.currentPreviewid,
                    t = this.queue.getNodeBySongid(e) || this.searchResults.getNodeBySongid(e);
                t && (this.$currentPreview = t, this.currentPreviewIsFresh = !0)
            }, this)), this.$songs.on("SongList:previewRemoved", $.proxy(function() {
                this.$currentPreview = null
            }, this)), this.lastHoverSongid = null, this.createSongOverlayTimeout = null, this.$searchInput.on("focus", function() {
                $(this).closest("#queue-header").addClass("search-focused")
            }).on("blur", function() {
                var e = $(this);
                0 === e.val().length && e.closest("#queue-header").removeClass("search-focused")
            }), $("#upload-button").tipsy({
                gravity: "nw",
                fade: !0,
                opacity: 1
            }), turntable.addEventListener("message", $.proxy(this.messageReceived, this)), i.LWKTya(this), this.initSongSearch = $.proxy(this.initSongSearch, this), this.delayedSongSearch = i.delay(this, this.songSearch, this.SEARCH_DELAY), this.songSearch = $.proxy(this.songSearch, this), this.showSearchResults = $.proxy(this.showSearchResults, this), this.filterQueue = $.proxy(this.filterQueue, this), this.beginUpload = $.proxy(this.beginUpload, this), this.setCurrentSong = $.proxy(this.setCurrentSong, this), this.checkBlockMessageInView = i.rateLimit(this, this.checkBlockMessageInView, 250), this.updateFileid = $.proxy(this.updateFileid, this), this.searchScrollHandler = i.delay(this, this.searchScrollHandler, 250), this.clearSearchBar = $.proxy(this.clearSearchBar, this), this.initUploader(), this.initDragAndDrop()
        },
        initBlockedSongsMessage: function(e) {
            if(e) {
                var t, i = this.$queueMessage,
                    n = this.$playlistView;
                t = e > 1 ? e + " songs were" : e + " song was", i.find(".blockedSongs").text(t), i.show(), this.queueMessageInitialized = !0, n.on("scroll", this.checkBlockMessageInView), this.checkBlockMessageInView(), i.find(".hide").on("click", $.proxy(function() {
                    i.hide(), this.queueMessageInitialized = !1
                }, this))
            }
        },
        checkBlockMessageInView: function() {
            var e = this.$queueMessage,
                t = this.$playlistView,
                i = e.position().top + e.height(),
                n = t.height();
            n + 5 > i && (this.markMessageSeen(this.MAX_API_RETRIES), t.off("scroll", this.checkBlockMessageInView))
        },
        markMessageSeen: function(e) {
            turntable.uRzNYq({
                api: "playlist.mark_message_seen"
            }).done(function(t) {
                t.success || e > 0 && window.setTimeout(function() {
                    d.markMessageSeen(e - 1)
                }, 1e3)
            })
        },
        loadPlaylists: function() {
            return this.playlists = [], turntable.uRzNYq({
                api: "playlist.list_all"
            }).done($.proxy(function(e) {
                for(var t = e.list, i = 0; t.length > i; i++) this.playlists.push(t[i].name), t[i].active && this.setActivePlaylist(t[i].name);
                this.activePlaylist || (this.playlists.push(this.defaultPlaylistName), this.setActivePlaylist(this.defaultPlaylistName)), this.loadList()
            }, this))
        },
        loadList: function() {
            function e() {
                for(var e = [], n = 0; i.fileids.length > n; n++) {
                    var o = i.fileids[n];
                    o in i.songsByFid && e.push(o)
                }
                i.currentSong && i.activePlaylist == i.currentSong.playlist && -1 != e.indexOf(i.currentSong.fileId) ? i.queue.setCurrentlyPlayingSongid(i.currentSong.fileId) : i.queue.clearCurrentlyPlayingSongid(), i.fileids = e, i.queue.reset(e), i.filterQueue($("#song-search-input").val()), i.isFiltering || i.decorateQueueView(), t.resolve()
            }
            var t = $.Deferred(),
                i = this;
            return this.fileids = [], this.loadListDone = !1, turntable.uRzNYq({
                api: "playlist.all",
                playlist_name: i.activePlaylist,
                minimal: !0
            }, function(t) {
                i.loadListDone = !0;
                for(var n = [], o = 0; t.list.length > o; o++) {
                    var s = t.list[o]._id;
                    i.fileids.push(s), s in i.songsByFid || n.push(s)
                }
                return n.length ? (turntable.uRzNYq({
                    api: "playlist.get_metadata",
                    playlist_name: i.activePlaylist,
                    files: n
                }, function(t) {
                    for(var n in t.files) if(t.files.hasOwnProperty(n)) {
                        var o = t.files[n];
                        o.fileId = o._id, delete o._id, i.songsByFid[n] = o
                    }
                    e(), i.cache.usable && window.setTimeout(function() {
                        var e = i.cache.loadObject(t.files);
                        e || (e = i.resetCache(), e || i.cache.fromObject(t.files))
                    }, 1e3)
                }), void 0) : (e(), void 0)
            }), turntable.uRzNYq({
                api: "playlist.new_blocked_song_count"
            }, function(e) {
                e.count > 0 && i.initBlockedSongsMessage(e.count)
            }), t.promise()
        },
        initPlaylistDropdown: function() {
            function e(e) {
                e.removeClass("edit"), a = null
            }
            function t(t) {
                a && e(a), t.addClass("edit"), t.find("input[type=text]").val(t.data("playlist")).select(), a = t
            }
            function n(e) {
                var t = e.find(".playlist-label"),
                    n = e.find("input[type=text]").val();
                return t.html("Creating..."), l.createPlaylist(n).done(function() {
                    l.playlists.push(n), l.queue.queueButtonDecorator(), e.before(i.buildTree(l.layouts.playlistRow(n)))
                }).always(function() {
                    t.html("New Playlist")
                })
            }
            function o(e) {
                var t = e.find(".playlist-label"),
                    i = e.find("input[type=text]").val(),
                    n = e.data("playlist");
                return t.html("Renaming..."), l.renamePlaylist(n, i).done(function() {
                    l.playlists.splice(l.playlists.indexOf(n), 1, i), l.activePlaylist == n && l.setActivePlaylist(i), e.data("playlist", i), t.html(i)
                }).fail(function() {
                    t.html(n)
                })
            }
            function s(e) {
                var t = e.find(".playlist-label"),
                    i = e.data("playlist");
                return t.html("Deleting..."), l.deletePlaylist(i).done(function() {
                    i == l.activePlaylist && l.loadPlaylists(), l.playlists.splice(l.playlists.indexOf(i), 1), l.queue.queueButtonDecorator(), e.remove()
                }).fail(function() {
                    t.html(i)
                })
            }
            var r, a, l = this;
            return function() {
                if(r && r === this.displayMenu.getMenu()) return this.displayMenu.removeMenu(), void 0;
                var u = r = $(i.buildTree(this.layouts.playlistHeaderDropdown())),
                    d = $("#playlist-display");
                a = null, $("#queue-view").append(this.displayMenu.create(u, d)), u.on("click", ".playlist:not(.active, .edit)", function(e) {
                    var t = $(e.currentTarget),
                        i = t.data("playlist");
                    l.switchPlaylist(i).done(function() {
                        l.setActivePlaylist(i, t), l.loadList().done(function() {
                            l.isFiltering && l.clearSearchBar(), l.displayMenu.removeMenu(u)
                        })
                    })
                }).on("click", ".playlist .edit-icon", function(e) {
                    var i = $(e.currentTarget).closest(".playlist");
                    return t(i), !1
                }).on("click", ".delete-playlist-icon", function(t) {
                    var n = $(t.currentTarget).closest(".playlist"),
                        o = n.data("playlist");
                    return e(n), i.buildTree(l.layouts.removePlaylistConfirmation(o, function() {
                        s(n)
                    }, function() {
                        l.displayMenu.bindListeners(u), l.displayMenu.removeMenuWithDelay(u, 750)
                    }), l), l.displayMenu.unbindListeners(u), l.modal.show(), !1
                }).on("click", ".cancel", function(t) {
                    var i = $(t.currentTarget).closest(".option");
                    return e(i), !1
                }).on("submit", ".playlist-input", function(t) {
                    var i = $(t.currentTarget).closest(".new-playlist, .playlist");
                    i.hasClass("new-playlist") ? (e(i), n(i)) : (e(i), o(i)), t.preventDefault()
                }), u.find(".new-playlist").on("click", function(e) {
                    var i = $(e.currentTarget);
                    i.hasClass("edit") || t(i)
                }), $("#trigger-batch").click(function() {
                    $("#queue-header").removeClass("normal").addClass("edit"), l.isFiltering && l.clearSearchBar(), l.queue.batchEditMode(), l.displayMenu.removeMenu(r)
                })
            }
        },
        displayMenu: function() {
            function e() {
                r && (r.trigger("menu.removed"), o(), r.remove(), this.$menu = r = null), t()
            }
            function t() {
                window.clearTimeout(s), s = null
            }
            function i(t, i) {
                s || (i = "number" == typeof i ? i : 500, s = window.setTimeout(e, i))
            }
            function n() {
                a.on("mouseover", t).on("mouseleave", i)
            }
            function o() {
                a.off("mouseover", t).off("mouseleave", i)
            }
            var s, r, a;
            return {
                getMenu: function() {
                    return r
                },
                create: function(t, i) {
                    return e(), this.$menu = r = t, a = r.add(i), n(), r
                },
                bindListeners: function(e) {
                    e && e != r || n()
                },
                unbindListeners: function(e) {
                    e && e != r || o()
                },
                removeMenu: function(e) {
                    this.removeMenuWithDelay(e, 0)
                },
                removeMenuWithDelay: function(e, t) {
                    e && e != r || a.trigger("mouseleave", t)
                }
            }
        }(),
        resetCache: function() {
            for(var e = this.fileids.length, t = {}, i = 0; e > i; i++) {
                var n = this.fileids[i];
                t[n] = this.songsByFid[n]
            }
            return this.cache.fromObject(t)
        },
        setCurrentSong: function(e) {
            if(null != this.currentSong || null != e) {
                if(this.previewStop(), this.currentSongTimer && (window.clearInterval(this.currentSongTimer), this.currentSongTimer = null), this.currentSong = e ? {
                    fileId: e._id,
                    metadata: e.metadata,
                    playlist: e.playlist
                } : null, this.currentSong) {
                    var t = Math.max(500, 1e3 * e.metadata.length / $("#playlist").width());
                    this.currentSongTimer = setInterval(this.updateCurrentSongProgress, t)
                }
                this.loadList()
            }
        },
        updateCurrentSongProgress: function() {
            try {
                var e = turntable.cjAgpz.getCurrentSongProgress();
                d.queue.$node.find(".current-song .progress").css("width", 100 * e + "%")
            } catch(t) {}
        },
        messageReceived: function(e) {
            if("upload_complete" == e.command) {
                if(this.filesProcessed += 1, this.updateProcessing(), this.filesProcessing[e.jobid].remove(), this.queue.contains(e.fid)) return;
                this.addToCurrentPlaylist({
                    fileId: e.fid,
                    metadata: e.metadata
                })
            } else if("upload_failed" == e.command) {
                var t = e.err || "Your upload failed. There may have been a problem with the file, or the song wasn't long enough.";
                $(".roomView").append(i.buildTree([r,
                {
                    text: t
                }])), this.filesProcessing[e.jobid].remove(), this.filesToProcess > 0 && (this.filesToProcess -= 1, this.updateProcessing())
            } else("search_complete" == e.command || "search_failed" == e.command) && this.showSearchResults(e)
        },
        updateFileid: function(e, t) {
            this.currentPreviewid == e && (this.currentPreviewid = t);
            var i = this.queue.attributes.songids,
                n = i.indexOf(e); - 1 != n && (i[n] = t);
            var o = this.queue.renderedItems,
                s = o[e];
            o[e] && (o[t] = s, delete o[e]), i = this.queue.filteredSongids, n = i.indexOf(e), -1 != n && (i[n] = t), o = this.queue.songsToShow, o[e] && (o[t] = !0, delete o[e]), o = this.songsByFid, s = o[e], s && (s.fileId = t, o[t] = s, o[e] = null), i = this.searchResults.attributes.songids, n = i.indexOf(e), -1 != n && (i[n] = t), o = this.searchResults.songsToShow, o[e] && (o[t] = !0, delete o[e]), o = this.searchResultsByFid, s = o[e], s && (s.fileId = t, o[t] = s, o[e] = null), this.queue.reset(), this.searchResults.reset()
        },
        initDragAndDrop: function() {
            var e;
            $(document).bind("dragenter dragover", function(t) {
                for(var i = t.originalEvent.dataTransfer.types.length, n = 0; i > n; n++) if("Files" == t.originalEvent.dataTransfer.types[n]) {
                    $("#drop-zone").show(), window.clearTimeout(e);
                    break
                }
            }).bind("dragleave dragexit", function() {
                e = window.setTimeout(function() {
                    $("#drop-zone").hide()
                }, 100)
            }).bind("drop", function() {
                $("#drop-zone").attr("style", "").hide()
            }).bind("mouseleave", function() {
                $("#drop-zone").attr("style", "").hide()
            });
            var t;
            $("#drop-zone").bind("dragenter dragover", function() {
                $(this).css("background", "#ccc"), window.clearTimeout(t)
            }).bind("dragleave", function() {
                t = window.setTimeout(function() {
                    $("#drop-zone").css("background", "")
                }, 100)
            })
        },
        initUploader: function() {
            LOG("Initializing plupload...");
            var e = turntable.uploader = new t.Uploader({
                runtimes: "html5,flash,silverlight",
                browse_button: "pickfiles",
                browse_button_hover: "hover",
                browse_button_active: "active",
                drop_element: "drop-zone",
                autostart: !0,
                max_file_size: "30mb",
                url: "/upload/" + turntable.currentSocketServer,
                flash_swf_url: "/static/swf/plupload.flash.swf",
                silverlight_xap_url: "/static/js/lib/plupload/plupload.silverlight.xap",
                filters: [{
                    title: "Music files",
                    extensions: "mp3"
                }],
                multipart_params: {
                    type: "file"
                }
            });
            e.init(), e.bind("FilesAdded", d.beginUpload), e.bind("UploadProgress", function(e, t) {
                $(".plFile-" + t.id + " .progress").css("width", t.percent + "%")
            }), e.bind("FileUploaded", function(e, t, i) {
                LOG("file uploaded: " + i.response);
                var n = JSON.parse(i.response);
                if(d.endUpload(t, n.jobid), !n.success) {
                    var o = "There was an error uploading " + n.filename + " \u2014 please check the song file.";
                    d.messageReceived({
                        command: "upload_failed",
                        err: o,
                        jobid: n.jobid
                    })
                }
            })
        },
        beginUpload: function(e, t) {
            ASSERT(t.length, "beginUpload called with 0 files... intentional?"), $("#drop-zone").attr("style", "").hide(), this.$panes.removeClass("subsection-visible"), this.clearSearchBar(), d.filesToProcess += t.length, d.updateProcessing();
            for(var n = $("#songs"), o = n.find(".uploads"), s = 0, r = t.length; r > s; s++) {
                var a = i.buildTree(d.layouts.uploadingView(t[s].name));
                $(a).addClass("plFile-" + t[s].id).appendTo(o)
            }
            n.scrollTop(d.queue.$node.height()), d.filesUploading = d.filesUploading.concat(t), turntable.uploader.settings.url = "/upload/" + turntable.currentSocketServer, turntable.uploader.settings.multipart_params.userid = u.id, turntable.uploader.settings.multipart_params.userauth = u.auth, turntable.uploader.settings.multipart_params.port = turntable.socket.options.port + "", e.start()
        },
        endUpload: function(e, t) {
            LOG(e.name + " finished uploading");
            var i = $.inArray(e, d.filesUploading);
            ASSERT(-1 != i, "Never began uploading " + e.name), d.filesUploading.splice(i, 1);
            var n = e.id,
                o = $(".plFile-" + n);
            d.filesProcessing[t] = o, o.find(" .details").text("Processing..."), d.updateProcessing()
        },
        addSearchResult: function(e) {
            if(!this.queueEditsLocked) {
                var t = $(e.target).closest(".song").data("songData");
                this.addToCurrentPlaylist(t, 0)
            }
        },
        switchPlaylist: function(e) {
            var t = this;
            return turntable.uRzNYq({
                api: "playlist.switch",
                playlist_name: e
            }).done(function() {
                t.queue.deselectAllSongs()
            }).fail(function(e) {
                $(".roomView").append(i.buildTree([r,
                {
                    text: e.err
                }]))
            })
        },
        createPlaylist: function(e) {
            return turntable.uRzNYq({
                api: "playlist.create",
                playlist_name: e
            }).fail(function(e) {
                $(".roomView").append(i.buildTree([r,
                {
                    text: e.err
                }]))
            })
        },
        renamePlaylist: function(e, t) {
            return turntable.uRzNYq({
                api: "playlist.rename",
                old_playlist_name: e,
                new_playlist_name: t
            }).fail(function(e) {
                $(".roomView").append(i.buildTree([r,
                {
                    text: e.err
                }]))
            })
        },
        deletePlaylist: function(e) {
            return turntable.uRzNYq({
                api: "playlist.delete",
                playlist_name: e
            }).fail(function(e) {
                $(".roomView").append(i.buildTree([r,
                {
                    text: e.err
                }]))
            })
        },
        addToCurrentPlaylist: function(e, t) {
            return this.addSong(e, void 0, t)
        },
        addSong: function(e, t, i) {
            return this.addSongs([e], t, i)
        },
        addSongs: function(e, t, n) {
            for(var o = this.queue, s = [], a = 0; e.length > a; a++) s.push({
                fileid: e[a].fileId
            });
            void 0 === n && (n = t == this.activePlaylist && this.currentSong ? o.attributes.songids.length - 1 : -1), void 0 === t && (t = this.activePlaylist), this.lockQueueEdits();
            var l = this;
            return turntable.uRzNYq({
                api: "playlist.add",
                playlist_name: t,
                index: n,
                song_dict: s
            }).done(function(i) {
                if(t != l.activePlaylist) return l.unlockQueueEdits(), void 0;
                for(var o = 0; e.length > o; o++) {
                    var s = e[o],
                        r = e[o].fileId;
                    if(l.songsByFid[r] = s, l.cache.usable) try {
                        l.cache.setItem(r, s)
                    } catch(a) {}
                    l.isFiltering && (l.queue.songsToShow[r] = !0, delete l.searchResults.songsToShow[r]), l.queue.add(r, n), i.song_dicts[o].mnid && l.updateFileid(i.song_dicts[o].mnid, i.song_dicts[o].fileid)
                }
                l.isFiltering && (l.searchResults.refilter(), l.savedScrollPosition = 0), l.unlockQueueEdits()
            }).fail(function(e) {
                $(".roomView").append(i.buildTree([r,
                {
                    text: e.err
                }])), l.loadList(), l.unlockQueueEdits()
            })
        },
        removeSong: function(e, t) {
            return this.removeSongs([t])
        },
        removeSongs: function(e) {
            this.lockQueueEdits();
            var t = this;
            return turntable.uRzNYq({
                api: "playlist.remove",
                playlist_name: t.activePlaylist,
                index: e
            }).done(function(e) {
                for(var i = 0; e.song_dict.length > i; i++) {
                    var n = e.song_dict[i].fileid;
                    t.searchResults.songsToShow && (t.searchResults.songsToShow[n] = !0), delete t.songsByFid[n], t.currentPreviewid == n && t.previewStop()
                }
                t.searchResults.songsToShow && t.searchResults.refilter(), t.unlockQueueEdits()
            }).fail(function(e) {
                $(".roomView").append(i.buildTree([r,
                {
                    text: e.err
                }])), t.unlockQueueEdits()
            })
        },
        reorder: function(e, t) {
            var i = {
                api: "playlist.reorder",
                playlist_name: this.activePlaylist,
                index_from: e,
                index_to: t
            };
            this.lockQueueEdits();
            var n = this;
            return turntable.uRzNYq(i, function() {
                n.unlockQueueEdits()
            })
        },
        lockQueueEdits: function() {
            this.$songs.addClass("locked"), this.queueEditsLocked = !0, this.queue.locked = !0, this.searchResults.locked = !0, this.unlockTimer = window.setTimeout($.proxy(function() {
                this.unlockTimer = null, this.loadList(), this.unlockQueueEdits()
            }, this), 5e3)
        },
        unlockQueueEdits: function() {
            this.unlockTimer && (window.clearTimeout(this.unlockTimer), this.unlockTImer = null), this.$songs.removeClass("locked"), this.queueEditsLocked = !1, this.queue.locked = !1, this.searchResults.locked = !1
        },
        searchKeyUp: function(e) {
            var t = $(e.target),
                n = t.closest(".search"),
                o = n.find(".mag-glass"),
                s = t.val().trim(),
                r = !1;
            this.searchBarValue != s && (this.searchBarValue || (this.savedScrollPosition = this.$songs.scrollTop()), s ? (o.addClass("clear-search"), this.isFiltering = !0) : (o.removeClass("clear-search"), this.isFiltering = !1, r = !0), d.filterQueue(s), d.initSongSearch(s), this.searchBarValue = s, this.decorateQueueView(), r && i.notEmpty(this.savedScrollPosition) && (this.$songs.scrollTop(this.savedScrollPosition), this.savedScrollPosition = null))
        },
        clearSearchButtonClicked: function(e) {
            var t = $(e.target);
            t.hasClass("clear-search") && (d.clearSearchBar(), d.$searchInput.blur())
        },
        clearSearchBar: function() {
            var e = $(".clear-search").removeClass("clear-search"),
                t = e.closest(".search"),
                n = t.find("input");
            n.val("").focus(), this.searchBarValue = "", this.isFiltering = !1, d.filterQueue(""), d.initSongSearch(""), i.notEmpty(this.savedScrollPosition) && (this.$songs.scrollTop(this.savedScrollPosition), this.savedScrollPosition = null), this.decorateQueueView()
        },
        decorateQueueView: function() {
            var e = this.$emptyQueue || $("#empty-queue");
            if(this.loadListDone && 0 == this.queue.attributes.songids.length && !this.isFiltering ? e.show() : e.hide(), this.queueMessageInitialized) {
                var t = this.$queueMessage || $(".queue-message");
                this.isFiltering ? t.hide() : t.show()
            }
        },
        parseFilter: function(e) {
            for(var t = RegExp(/\b(album|artist|duration|title):(.*?)(?=\balbum:|\bartist:|\bduration:|\btitle:|$)/), i = {};;) {
                var n = t.exec(e);
                if(null == n) break;
                i[n[1]] = "duration" == n[1] ? $.trim(n[2]) : RegExp($.trim(n[2]).replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&"), "i"), e = e.replace(n[0], "")
            }
            return i.all = null != e ? e : "", i
        },
        filterQueue: function(e) {
            if(e && e.length > 0) {
                for(var t = this.parseFilter(e), i = t.all.split(/\s+/g), n = $.map(i, function(e) {
                    return RegExp(e.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&"), "i")
                }), o = {}, s = 0, r = this.queue.attributes.songids, a = i.length, l = 0, u = r.length; u > l; l++) {
                    for(var c = r[l], h = this.songsByFid[c].metadata, p = h.song, f = h.artist, m = h.album, g = h.length, v = !0, y = 0; a > y; y++) {
                        var b = n[y];
                        if(!b.test(p) && !b.test(f) && !b.test(m)) {
                            v = !1;
                            break
                        }
                    }
                    if(v && t.hasOwnProperty("artist") && (t.artist.test(f) || (v = !1)), v && t.hasOwnProperty("title") && (t.title.test(p) || (v = !1)), v && t.hasOwnProperty("album") && (t.album.test(m) || (v = !1)), v && t.hasOwnProperty("duration")) {
                        var w = parseInt(t.duration.split(":")[0]);
                        isNaN(w) || (60 * w > g || g > 60 * (w + 1)) && (v = !1)
                    }
                    v && (o[c] = !0, s++)
                }
                this.queue.setFilter(o), this.queue.showTitle(), this.currentPreviewid && !o[this.currentPreviewid] && this.previewStop(), d.notifyGAOfFilter(e, s)
            } else this.queue.clearFilter(), this.queue.hideTitle(), this.currentPreviewid && !this.queue.contains(this.currentPreviewid) && this.previewStop()
        },
        notifyGAOfFilter: i.delay(null, function(e, t) {
            _gaq.push(["_trackEvent", "queue", "filter", e, t])
        }, 1e3),
        initSongSearch: function(e) {
            this.searchFailed = !1, this.searchResults.reset([]), e.length > 2 ? (this.$searchResults.show(), this.$searchLoading.show()) : (this.$searchResults.hide(), this.$searchLoading.hide()), this.delayedSongSearch(e), this.$searchEmpty.hide(), this.lastQuery = "", this.$songs.off("scroll", this.searchScrollHandler)
        },
        songSearch: function(e) {
            if(!(2 >= e.length)) {
                var t = 1;
                if(e == this.lastQuery) {
                    if(this.searchFailed) return;
                    t = this.latestResultsPage + 1;
                    var i = Date.now();
                    if(t === this.lastPageRequested && i - this.lastSearchTime < this.SEARCH_DELAY) return
                } else _gaq.push(["_trackEvent", "song", "search", e]), this.searchFailed = !1, this.latestResultsPage = 0;
                this.lastSearchTime = Date.now(), this.lastPageRequested = t, turntable.uRzNYq({
                    api: "file.search",
                    query: e,
                    page: t
                }), 1 == t && this.$searchResults.show(), this.$searchLoading.show(), this.lastQuery = e
            }
        },
        showSearchResults: function(e) {
            if(!("search_complete" != e.command && "search_failed" != e.command || e.query != this.searchBarValue || d.latestResultsPage && e.page != d.latestResultsPage + 1)) {
                this.$searchLoading.hide();
                var t;
                if(e.success ? 0 == e.docs.length && (t = "Sorry, no results could be found.") : t = e.err ? "Error: " + e.err : "Sorry, the search failed. Please try again later.", t) return this.$searchEmpty.text(t).show(), this.searchFailed = !0, void 0;
                if(this.$searchEmpty.hide(), 1 == e.page) {
                    this.filteredSearchResults = {};
                    for(var i in this.searchResultsByFid) this.searchResultsByFid.hasOwnProperty(i) && delete this.searchResultsByFid[i]
                }
                var n = e.docs,
                    o = [],
                    s = this.filteredSearchResults,
                    r = this.searchResultsByFid;
                this.queue.attributes.songids;
                for(var a = 0, l = n.length; l > a; a++) {
                    var u = n[a],
                        c = u._id,
                        h = {
                            fileId: c,
                            metadata: u.metadata
                        };
                    r[c] || (r[c] = h, o[a] = c, this.queue.contains(c) || (s[c] = !0))
                }
                if(1 == e.page) this.searchResults.reset(o), this.$songs.on("scroll", this.searchScrollHandler);
                else {
                    var p = this.searchResults.attributes.songids;
                    this.searchResults.reset(p.concat(o))
                }
                d.searchResults.setFilter(s), this.latestResultsPage = e.page, this.searchScrollHandler()
            }
        },
        searchScrollHandler: function() {
            50 > this.$searchResults.offset().top + this.$searchResults.height() - (this.$songs.offset().top + this.$songs.height()) && this.songSearch(this.lastQuery)
        },
        buySong: function() {
            var e = $(this).closest(".song").data("songData").fileId;
            if(e) {
                var t = "itunes";
                window.open("/link/?fileid=" + e + "&site=" + t, t + e)
            }
        },
        previewPlay: function() {
            var e = $(this).closest(".song"),
                t = e.data("songData").fileId;
            
            a.samplePlay(t, d.previewCallback), 
            e.addClass("currentPreview").find(".progress").css("width", "0%"), d.currentPreviewid = t, 
            d.$currentPreview = e
        },
        previewCallback: function(e, t) {
            if("progress" == e) {
                var i = d.$currentPreview;
                i && (d.currentPreviewIsFresh && (i.addClass("currentPreview"), d.currentPreviewIsFresh = !1), i.find(".progress").css("width", t))
            } else "stop" == e && ($("#playlist .song.currentPreview").removeClass("currentPreview").find(".progress").css("width", "0%"), d.currentPreviewid = null)
        },
        previewStop: a.sampleStop,
        updateProcessing: function() {
            var e = this.$playlistView.find(".processing");
            this.filesProcessed >= this.filesToProcess && (this.filesProcessed = this.filesToProcess = 0), this.filesToProcess > 0 ? (e.find(".text").html("Uploads &mdash; Processed " + this.filesProcessed + " of " + this.filesToProcess + " files"), e.show()) : e.hide()
        },
        setPlaylistHeight: function(e) {
            return null === e || void 0 === e ? e = 351 : 25 > e && (e = 25), this.$playlistView.css({
                height: e
            }), e
        },
        setActivePlaylist: function(e, t) {
            var i = this.activePlaylist = e;
            this.loadPlaylistsDeferred.done(function() {
                $("#playlist-display").find(".text").text(e);
                var n = $("#playlist-dropdown");
                n.length && ($("#playlist-dropdown .playlist").removeClass("active"), t ? t.addClass("active") : n.find(".playlist").each(function(e, t) {
                    $.data(t, "playlist") == i && (t.className += " active")
                }))
            })
        }
    };
    d.layouts = {
        playlistView: ["div#playlist##root",
        {}, ["div#queue-view-panes",
        {}, ["div#queue-view.main-pane",
        {}, ["div#playlist-header.floating-panel-header", ["div#playlist-display.panel-button", ["div.pushdown-content", ["div.queue-inset-icon"],
            ["div.text"],
            ["div.arrow-icon"]
        ]]],
            ["div#queue-header.floating-panel-header.normal", ["div#normal-mode", ["div#upload-button.down",
            {
                title: "Upload music"
            }, ["button", "Upload music"]],
                ["div.divider"],
                ["form.search.song-search",
                {
                    event: {
                        submit: function() {
                            return !1
                        }
                    }
                }, ["input#song-search-input",
                {
                    type: "text",
                    placeholder: "search for songs",
                    event: {
                        keyup: $.proxy(d.searchKeyUp, d)
                    }
                }],
                    ["div.mag-glass",
                    {
                        event: {
                            click: d.clearSearchButtonClicked
                        }
                    }]
                ]
            ],
                ["div#batch-edit-mode", ["div.show-playlists.disabled.panel-button", ["div.pushdown-content", ["div.queue-plus-inset-icon"],
                    ["div.text", "Add to Playlist"],
                    ["div.arrow-icon"]
                ]],
                    ["div.remove.disabled.panel-button", ["div.pushdown-content", ["div.trash-icon"]]],
                    ["button.done.primary.small.inset.tt-button", "Done"]
                ]
            ],
            ["div#songs-wrapper", ["div#songs",
            {}, ["div#queue"],
                ["div.uploads",
                {}, ["div.processing.separator",
                {
                    style: {
                        display: "none"
                    }
                }, ["div.text"]]],
                ["div.queue-message",
                {
                    style: {
                        display: "none"
                    }
                }, ["div.hide"], "Sorry! ", ["span.blockedSongs"], " pulled from your queue. ", ["a",
                {
                    href: "/removed_songs",
                    target: "_blank"
                }, "Learn more"], "."],
                ["div#empty-queue.default-message",
                {
                    style: {
                        display: "none"
                    }
                }, ["p", "No songs in your queue. Start searching for songs to add!"]],
                ["div#search-results"],
                ["div#search-loading",
                {
                    style: {
                        display: "none"
                    }
                }, ["div.text", "Searching turntable"]],
                ["div#search-empty",
                {
                    style: {
                        display: "none"
                    }
                }]
            ]]
        ],
            ["div#upload-pane.main-pane", ["div.floating-panel-header",
            {}, ["button.back", "Back"],
                ["span.title", "Upload Music"]
            ],
                ["div#upload-view", ["div.flat-button#plupload", ["div#pickfiles", "Browse Files"]],
                    ["div.orText", "or"],
                    ["div.drop-message",
                    {}, ["img",
                    {
                        src: "https://s3.amazonaws.com/static.turntable.fm/images/playlist/move_small.png"
                    }],
                        ["span", "Drag files here"]
                    ],
                    ["div.upload-tos", "By uploading music, you agree to the ", ["a",
                    {
                        href: "/terms/",
                        target: "_blank"
                    }, "Terms of Service"], "."]
                ]
            ]
        ],
            ["div#drop-zone",
            {}, ["div#drop-zone-text.centered-pane",
            {}, ["img",
            {
                src: "https://s3.amazonaws.com/static.turntable.fm/images/playlist/move_big.png"
            }],
                ["div#drop-zone-main-text", "Drop songs here"],
                ["div#drop-zone-small-text", "to upload them to your queue"]
            ]]
        ],
        songView: function(e, t, n) {
            var s = e.metadata,
                r = [],
                a = s.artist + " \u2022 " + i.prettyTime(s.length);
            return o.showPreview(e) || r.push(".noPreview"), void 0 !== n && 0 === n % 2 && r.push(".nth-child-even"), ["li.song" + r.join(""),
            {
                data: {
                    songData: e
                },
                style: void 0 !== t ? {
                    top: t
                } : {}
            }, ["div.progress-bar", ["div.progress"]],
                ["div.vinyl"],
                ["div.thumb",
                {
                    style: {
                        "background-image": s.coverart ? "url(" + s.coverart + ")" : ""
                    }
                }],
                ["div.playSample"],
                ["div.pauseSample"],
                ["div.title",
                {
                    title: s.song
                },
                s.song],
                ["div.details",
                {
                    title: a
                }, ["span", s.artist, ["span.divider", " \u2022 "], i.prettyTime(s.length)]],
                ["div.go-top"],
                ["div.open-options"],
                ["div.checkbox"]
            ]
        },
        searchedSongView: function(e, t, n) {
            var s = e.metadata,
                r = [],
                a = s.artist + " \u2022 " + i.prettyTime(s.length);
            return o.showPreview(e) || r.push(".noPreview"), 0 === n % 2 && r.push(".nth-child-even"), ["div.song" + r.join(""),
            {
                data: {
                    songData: e
                },
                style: void 0 !== t ? {
                    top: t
                } : {}
            }, ["div.progress-bar", ["div.progress"]],
                ["div.thumb",
                {
                    style: {
                        "background-image": s.coverart ? "url(" + s.coverart + ")" : ""
                    }
                }],
                ["div.playSample"],
                ["div.pauseSample"],
                ["div.title",
                {
                    title: s.song
                },
                s.song],
                ["div.details",
                {
                    title: a
                }, ["span", s.artist, ["span.didver", " \u2022 "], i.prettyTime(s.length)]],
                ["div.addSong"]
            ]
        },
        uploadingView: function(e) {
            return ["div.song.uploading", {}, ["div.thumb"], ["div.progress-bar", ["div.progress"]], ["div.title",
            {},
            e], ["div.details",
            {}, "Uploading..."]]
        },
        batchCopyDropdown: function() {
            for(var e = ["ul#batch-copy-dropdown.floating-menu"], t = ["div.content-scroller"], i = d.playlists, n = 0; i.length > n; n++) {
                var o = i[n],
                    s = ["li.option.playlist",
                    {
                        data: {
                            playlist: o
                        }
                    }, ["div.queue-icon"],
                        ["span.playlist-label", o]
                    ];
                d.activePlaylist != o && t.push(s)
            }
            return e.push(t), e
        },
        playlistRow: function(e) {
            var t = ["li.option.playlist",
            {
                data: {
                    playlist: e
                }
            }, ["div.queue-icon"],
                ["span.playlist-label", e]
            ];
            return e != d.defaultPlaylistName && t.push(["div.edit-icon"], ["div.delete-playlist-icon"], ["form.playlist-input", ["input",
            {
                type: "text"
            }]], ["div.cancel", "cancel"]), e == d.activePlaylist && (t[0] += ".active"), t
        },
        playlistHeaderDropdown: function() {
            for(var e = ["ul.floating-menu#playlist-dropdown"], t = ["div.content-scroller"], i = d.playlists, n = 0; i.length > n; n++) {
                var o = i[n];
                t.push(d.layouts.playlistRow(o))
            }
            return t.push(["li.option.new-playlist", ["div.queue-plus-icon"],
                ["span.playlist-label", "New Playlist"],
                ["form.playlist-input", ["input",
                {
                    type: "text"
                }]],
                ["div.cancel", "cancel"]
            ], ["li.option#trigger-batch", ["span.text", "Organize Songs"]]), e.push(t), e
        },
        songOptionsMenu: function(e) {
            var t = d.layouts;
            return ["ul.floating-menu.song-options", {
                data: {
                    songid: e
                }
            }, ["div.outer-arrow"], ["div.inner-arrow"], ["div.menu-wrapper", ["div#song-option-panes", ["div#song-option-first-pane", t.firstMenu()],
                ["div#song-option-second-pane", t.secondMenu()]
            ]]]
        },
        firstMenu: function() {
            return [["li.option.switch-menu" + (d.playlists.length > 1 ? "" : ".disabled"), ["div.queue-plus-icon"],
                ["div.right-arrow-icon"],
                ["div.text", "Add to playlist"]
            ], ["li.option.playlist-remove", ["div.trash-icon"],
                ["div.text", "Remove from playlist"]
            ], ["li.option.site-add", ["div.btn.amazon",
            {
                data: {
                    site: "amazon"
                }
            }],
                ["div.btn.itunes",
                {
                    data: {
                        site: "itunes"
                    }
                }],
                ["div.btn.lastfm",
                {
                    data: {
                        site: "lastfm"
                    }
                }],
                ["div.btn.spotify",
                {
                    data: {
                        site: "spotify"
                    }
                }],
                ["div.btn.rdio",
                {
                    data: {
                        site: "rdio"
                    }
                }]
            ]]
        },
        secondMenu: function() {
            var e = d.playlists,
                t = [],
                i = ["div.content-scroller"];
            t.push(["li.option.switch-menu.second", ["div.queue-plus-inset-icon"],
                ["div.left-arrow-icon"],
                ["div.text", "Add to playlist"]
            ]);
            for(var n = 0; e.length > n; n++) {
                var o = e[n];
                d.activePlaylist != o && i.push(["li.option.playlist-add",
                {
                    data: {
                        playlist: o
                    }
                }, ["div.queue-icon"],
                    ["div.text", o]
                ])
            }
            return t.push(i), t
        },
        removeSongConfirmation: function(e, t, i) {
            return [n, {
                submitText: "Delete",
                submitCallback: i
            }, ["div.removeConfirmation", "Are you sure you want to remove " + e + " from playlist '" + t + "'?"]]
        },
        removePlaylistConfirmation: function(e, t, i) {
            return [n, {
                submitText: "Delete",
                submitCallback: t,
                closeCallback: i
            }, ["div.removeConfirmation", "Are you sure you want to delete playlist '" + e + "'?"]]
        }
    }, d.cache = function() {
        var e = {
            prefix: "_pl_"
        };
        return {
            usable: !! window.localStorage,
            getItem: function(t) {
                return JSON.parse(localStorage.getItem(e.prefix + t))
            },
            removeItem: function(t) {
                localStorage.removeItem(e.prefix + t)
            },
            setItem: function(t, i) {
                var n = JSON.stringify(i);
                try {
                    localStorage.setItem(e.prefix + t, n)
                } catch(o) {
                    return LOG("cache size limit reached"), !1
                }
                return !0
            },
            toObject: function() {
                var t = {};
                for(var i in localStorage) 0 === i.lastIndexOf(e.prefix, 0) && (i = i.slice(e.prefix.length), t[i] = this.getItem(i));
                return t
            },
            loadObject: function(e) {
                for(var t in e) if(e.hasOwnProperty(t)) {
                    var i = this.setItem(t, e[t]);
                    if(!i) return !1
                }
                return !0
            },
            fromObject: function(t) {
                for(var i in localStorage) 0 === i.lastIndexOf(e.prefix, 0) && localStorage.removeItem(i);
                return this.loadObject(t)
            }
        }
    }();
    var c = l.extend({
        attributes: {
            idd: "songList",
            songids: [],
            $viewport: null,
            itemHeight: 50,
            maxItemsInDOM: 150,
            titleText: null,
            backingMap: {},
            songConstructor: null,
            highlightTopSong: !1,
            alwaysShowTitle: !1
        },
        layout: function() {
            return ["div.song-list", ["ul.songs"]]
        },
        init: function(e) {
            this._super(e), this.itemPaddingSize = Math.floor(this.attributes.maxItemsInDOM / 2), this.itemPaddingHeight = this.itemPaddingSize * this.attributes.itemHeight, this.$viewport = this.attributes.$viewport, this.redraw = $.proxy(this.redraw, this), this.viewportScroll = $.proxy(this.viewportScroll, this), this.currentlyPlayingSongPassedFilter = !0, this.notifyPreviewCreated = $.proxy(this.notifyPreviewCreated, this), this.notifyPreviewRemoved = $.proxy(this.notifyPreviewRemoved, this)
        },
        render: function(e, t) {
            this._super(e, t), this.$songs = this.$node.find(".songs"), this.attributes.titleText && (this.$title = $(i.buildTree(["div.separator", ["div.text", this.attributes.titleText]])), this.$node.prepend(this.$title), this.titleVisible = !0), this.renderedItems = {}, this.reset(), this.$viewport.on("scroll", i.rateLimit(this, this.scroll, 250)), this.$songs.on("click", ".playSample", d.previewPlay).on("click", ".pauseSample", d.previewStop).on("click", ".buy", d.buySong)
        },
        scroll: function() {
            var e = this.$viewport.scrollTop();
            Math.abs(e - this.lastRedrawScrollTop) > this.itemPaddingHeight - 2 * this.$viewport.height() ? (this.redrawTimeout && window.clearTimeout(this.redrawTimeout), this.redrawTimeout = null, this.redraw(e)) : (this.redrawTimeout && window.clearTimeout(this.redrawTimeout), this.redrawTimeout = window.setTimeout(this.redraw, 1e3))
        },
        redraw: function(e) {
            var t, n = this.$viewport.scrollTop(),
                o = this.$viewport.height(),
                s = n - this.$songs[0].offsetTop + o / 2,
                r = Math.floor(s / this.attributes.itemHeight),
                a = this.attributes.itemHeight,
                l = this.filteredSongids || this.attributes.songids,
                u = l.length,
                c = 0,
                h = this.attributes.highlightTopSong,
                p = this.currentlyPlayingSongid || this.attributes.songids[0],
                f = {},
                m = !1,
                g = d.currentPreviewid,
                v = {},
                y = [];
            this.currentlyPlayingSongid && this.currentlyPlayingSongid != this.attributes.songids[0] && this.currentlyPlayingSongPassedFilter && (c = 1), t = this.itemPaddingSize > r ? 0 : r > u - this.itemPaddingSize ? Math.max(0, u - this.attributes.maxItemsInDOM) : r - this.itemPaddingSize;
            for(var b = Math.min(u, t + this.attributes.maxItemsInDOM), w = t; b > w; w++) void 0 != f[l[w]] && (m = !0), f[l[w]] = w;
            this.currentlyPlayingSongid && this.currentlyPlayingSongid != this.attributes.songids[0] && this.currentlyPlayingSongPassedFilter && 0 === t && (f[this.currentlyPlayingSongid] = 0);
            for(var _ in this.renderedItems) if(this.renderedItems.hasOwnProperty(_)) {
                var S, k, T, C, x, M = this.renderedItems[_];
                if(this.currentlyPlayingSongid == _ && this.currentlyPlayingSongPassedFilter && 0 === t) e && (S = 0, T = 0, k = M.index, C = M.visibleIndex, x = M.$node.addClass("current-song"), M.currentSong = !0, x.trigger("song.currentSet", !0));
                else {
                    if(void 0 === f[_] || this.currentlyPlayingSongid == _) {
                        g && g == _ && (window.setTimeout(this.notifyPreviewRemoved, 0), g = null), M.$node.remove(), y.push(_), delete this.renderedItems[_];
                        continue
                    }
                    e && (S = f[_], T = S + c, k = M.index, C = M.visibleIndex, x = M.$node, M.currentSong && (x.removeClass("current-song"), M.currentSong = !1, x.trigger("song.currentSet", !1)))
                }
                if(delete f[_], e) {
                    if(S != k && x.data("index", S), T != C) {
                        var O = T * a;
                        x.css("top", O), 0 === T % 2 ? x.addClass("nth-child-even") : x.removeClass("nth-child-even"), M.index = S, M.visibleIndex = T
                    }
                    if(h) {
                        var E = p == _;
                        0 !== C || E ? 0 === T && E && x.addClass("topSong") : x.removeClass("topSong")
                    }
                }
            }
            var D = document.createDocumentFragment(),
                I = this.attributes.songConstructor,
                L = this.attributes.backingMap;
            for(_ in f) if(f.hasOwnProperty(_)) {
                var R = L[_];
                if(!R) {
                    m = !0;
                    continue
                }
                var S = f[_],
                    T = S;
                if(_ != this.currentlyPlayingSongid) T += c;
                else if(0 !== S) continue;
                var O = T * a,
                    A = i.buildTree(I(R, O, T)),
                    x = $(A),
                    M = {
                        $node: x,
                        index: S,
                        visibleIndex: T
                    };
                h && p == _ && (A.className += " topSong"), this.currentlyPlayingSongid == _ && (A.className += " current-song", M.currentSong = !0), $.data(A, "index", S), this.renderedItems[_] = M, v[_] = M.$node, D.appendChild(A), g && g == _ && (window.setTimeout(this.notifyPreviewCreated, 0), g = null)
            }
            return this.$songs.append(D), $("#songs").trigger("renderedItem.created", v), $("#songs").trigger("renderedItem.removed", {
                songids: y
            }), !this.attributes.alwaysShowTitle && this.$title && (this.titleVisible || !u || this.hidingTitle ? !this.titleVisible || u && !this.hidingTitle || (this.$title.hide(), this.titleVisible = !1) : (this.$title.show(), this.titleVisible = !0)), this.lastRedrawScrollTop = n, !m
        },
        reset: function(e) {
            e && (this.attributes.songids = e, this.filterSongs());
            var t = (this.filteredSongids || this.attributes.songids).length,
                i = t * this.attributes.itemHeight;
            this.$songs.css("height", i), this.redraw(!0)
        },
        add: function(e, t) {
            0 > t && (t = this.attributes.songids.length + 1 + length), this.attributes.songids.splice(t, 0, e), this.refilter()
        },
        setFilter: function(e) {
            this.songsToShow = e, this.$node.addClass("filtered"), this.refilter()
        },
        refilter: function() {
            this.filterSongs(), this.reset()
        },
        clearFilter: function() {
            delete this.songsToShow, delete this.filteredSongids, this.currentlyPlayingSongPassedFilter = !0, this.$node.removeClass("filtered"), this.reset()
        },
        filterSongs: function() {
            if(!this.songsToShow) return delete this.filteredSongids, this.currentlyPlayingSongPassedFilter = !0, void 0;
            for(var e = this.attributes.songids, t = [], i = 0, n = 0, o = e.length; o > n; n++) {
                var s = e[n];
                this.songsToShow[s] === !0 && (t[i++] = s)
            }
            this.currentlyPlayingSongPassedFilter = this.songsToShow[this.currentlyPlayingSongid], this.filteredSongids = t
        },
        hideTitle: function() {
            this.hidingTitle = !0, this.redraw()
        },
        showTitle: function() {
            this.hidingTitle = !1, this.redraw()
        },
        getNodeBySongid: function(e) {
            return this.renderedItems[e] ? this.renderedItems[e].$node : void 0
        },
        contains: function(e) {
            return -1 !== this.attributes.songids.indexOf(e)
        },
        notifyPreviewCreated: function() {
            this.$node.trigger("SongList:previewCreated")
        },
        notifyPreviewRemoved: function() {
            this.$node.trigger("SongList:previewRemoved")
        }
    }),
        h = c.extend({
            attributes: {
                idd: "queue"
            },
            init: function(e) {
                this._super(e), this.batchSongMouseDown = $.proxy(this.batchSongMouseDown, this), this.songMouseDown = $.proxy(this.songMouseDown, this), this.songMouseMove = $.proxy(this.songMouseMove, this), this.songMouseUp = $.proxy(this.songMouseUp, this), this.moveClone = i.makeDrawer(this, this.moveClone), this.throttledReorderIfRequired = i.rateLimit(this, this.reorderIfRequired, 150), this.selectedSongs = {}, this.stateEnum = {
                    NORMAL: 0,
                    BATCHEDIT: 1
                }, this.mode = this.stateEnum.NORMAL, $("#songs").on("renderedItem.created", $.proxy(this.renderBatchEditRows, this)), $("#songs").on("renderedItem.removed", $.proxy(this.cleanupRemovedSongs, this))
            },
            render: function(e, t) {
                this._super(e, t), this.$currentSong = this.$node.find(".current-song");
                var i = this.songDrag = new s;
                $.extend(i, {
                    mousedown: this.songMouseDown,
                    mousemove: this.songMouseMove,
                    mouseup: this.songMouseUp,
                    cursor: "move",
                    scroller: this.$viewport[0]
                }), this.$songs.on("mousedown", ".song", i.setup).on("click", ".go-top", $.proxy(function(e) {
                    if(!this.locked) {
                        var t = $(e.target).closest(".song"),
                            i = t.data("songData").fileId,
                            n = this.attributes.songids.indexOf(i);
                        d.reorder(n, 0).done($.proxy(function() {
                            this.reorderBySongid(i, 0), d.isFiltering && (d.savedScrollPosition = 0)
                        }, this))
                    }
                }, this)).on("click", ".open-options", $.proxy(this.initOpenOptions(), this))
            },
            initOpenOptions: function() {
                function e() {
                    return r.hasClass("subsection-visible") ? $("#song-option-second-pane") : $("#song-option-first-pane")
                }
                function t(t, i) {
                    var n = $("#songs"),
                        o = e(),
                        s = parseInt(i.css("top")),
                        r = n.height(),
                        l = a.renderedItems[t],
                        u = a.attributes.itemHeight * l.visibleIndex - $("#songs").scrollTop(),
                        d = s + 10 + o.height();
                    return r - u - d
                }
                function n(e, i) {
                    var n = parseInt(i.css("top")),
                        o = t(e, i);
                    if(0 > o) {
                        var s = i.find(".outer-arrow"),
                            r = i.find(".inner-arrow");
                        i.css("top", n + o + "px"), s.css("top", parseInt(s.css("top")) - o + "px"), r.css("top", parseInt(r.css("top")) - o + "px")
                    }
                }
                function o(i, n) {
                    var o = t(i, n),
                        s = e(),
                        a = r.find(".content-scroller"),
                        l = a.height();
                    newPaneHeight = s.height(), detachedMenuThreshold = 9, r.hasClass("subsection-visible") && (0 > o || detachedMenuThreshold > parseInt(n.css("top")) + l) ? (a.height(a.height() + o), newPaneHeight += o) : a.height(""), n.height(newPaneHeight)
                }
                var s, r, a = this;
                return function(e) {
                    var t = $(e.target).closest(".song"),
                        l = t.data("songData").fileId;
                    if(s && s.data("songid") == l) return d.displayMenu.removeMenu(), void 0;
                    var u = s = $(i.buildTree(d.layouts.songOptionsMenu(l)));
                    t.append(d.displayMenu.create(u, t)), r = $("#song-option-panes"), u.find(".switch-menu.disabled").tipsy({
                        offset: -6,
                        gravity: $.fn.tipsy.autoWE,
                        fade: !0,
                        opacity: 1,
                        title: function() {
                            return "Create a playlist to add songs"
                        }
                    }), n(l, u), o(l, u), t.on("song.currentSet", function() {
                        o(l, u)
                    }).one("menu.removed", function() {
                        t.off("song.currentSet")
                    }), u.on("click", ".playlist-add", function(e) {
                        var i = $(e.currentTarget),
                            n = t.data("songData"),
                            o = i.data("playlist");
                        i.html("Adding..."), d.addSong(n, o).done(function() {
                            d.displayMenu.removeMenu(u)
                        })
                    }), u.find(".site-add").on("click", ".btn", $.proxy(turntable.cjAgpz.songLogAddClick, turntable.cjAgpz)), u.find(".switch-menu:not(.disabled)").on("click", function() {
                        r.toggleClass("subsection-visible"), o(l, u)
                    }), u.find(".playlist-remove").on("click", function(e) {
                        if(!t.hasClass("current-song")) {
                            var n = ($(e.currentTarget), t.data("songData")),
                                o = n.fileId,
                                s = a.attributes.songids.indexOf(o);
                            i.buildTree(d.layouts.removeSongConfirmation(n.metadata.song, d.activePlaylist, function() {
                                d.removeSong(o, s).done(function() {
                                    a.removeIndex(s), d.displayMenu.removeMenu(u)
                                })
                            }), a), a.modal.show()
                        }
                    })
                }
            },
            redraw: function(e) {
                var t = this._super(e);
                t || (LOG("draw failed! reloading playlist"), d.loadList())
            },
            reset: function(e) {
                this._super(e), d.decorateQueueView()
            },
            append: function(e) {
                this.add(e, this.attributes.songids.length)
            },
            reorder: function(e, t) {
                var i = this.attributes.songids.splice(e, 1)[0];
                this.attributes.songids.splice(t, 0, i), this.refilter()
            },
            reorderBySongid: function(e, t) {
                var i = this.attributes.songids,
                    n = i.indexOf(e); - 1 !== n && this.reorder(n, t)
            },
            removeIndex: function(e) {
                this.removeIndices([e])
            },
            removeIndices: function(e) {
                e = e.sort(function(e, t) {
                    return t - e
                });
                for(var t = 0; e.length > t; t++) this.attributes.songids.splice(e[t], 1);
                this.refilter()
            },
            removeBySongid: function(e) {
                var t = this.attributes.songids,
                    i = t.indexOf(e); - 1 !== i && this.removeIndex(i)
            },
            deselectAllSongs: function() {
                if(this.mode == this.stateEnum.BATCHEDIT) {
                    for(var e in this.selectedSongs) this.selectedSongs[e] instanceof jQuery && this.selectedSongs[e].removeClass("selected");
                    this.selectedSongs = {}, this.queueButtonDecorator()
                }
            },
            removeSelectedSongs: function() {
                if(this.mode == this.stateEnum.BATCHEDIT) {
                    var e = [],
                        t = [];
                    for(var i in this.selectedSongs) this.selectedSongs[i] && this.currentlyPlayingSongid != i && (e.push(this.attributes.songids.indexOf(i)), t.push(i));
                    e.length && d.removeSongs(e).done($.proxy(function() {
                        this.removeIndices(e);
                        for(var i = 0; t.length > i; i++) {
                            var n = t[i];
                            this.selectedSongs[n] = null
                        }
                        this.queueButtonDecorator()
                    }, this))
                }
            },
            addSelectedSongs: function(e) {
                if(this.mode == this.stateEnum.BATCHEDIT) {
                    var t = [];
                    for(var i in this.selectedSongs) this.selectedSongs[i] && t.push(this.attributes.backingMap[i]);
                    return d.addSongs(t, e)
                }
            },
            queueButtonDecorator: function() {
                var e = $("#queue-header .remove"),
                    t = $("#queue-header .show-playlists");
                this.selectedSongExists(!0) ? e.removeClass("disabled") : e.addClass("disabled"), this.selectedSongExists() && d.playlists.length > 1 ? (t.removeClass("disabled"), t.data("tipsy").disable()) : (t.addClass("disabled"), t.data("tipsy").enable())
            },
            selectedSongExists: function(e) {
                for(var t in this.selectedSongs) if(this.selectedSongs[t] && (!e || t != this.currentlyPlayingSongid)) return !0;
                return !1
            },
            songMouseDown: function(e) {
                var t = $(e.currentTarget),
                    i = t.data("songData").fileId;
                return this.setupDragCompleted = !1, this.songsToShow || i == this.currentlyPlayingSongid || this.mode == this.stateEnum.BATCHEDIT || this.locked ? (this.songDrag.cancelDrag(), void 0) : (this.$viewport.on("scroll", this.viewportScroll), this.$songBeingDragged = t, this.mouseOffsetFromSong = e.pageY - t.offset().top, e.preventDefault(), void 0)
            },
            songMouseMove: function(e) {
                if(!this.setupDragCompleted) {
                    var t = this.$songBeingDragged,
                        i = t.clone().addClass("clone").appendTo(this.$viewport.parent());
                    this.$clone = i.width(t.width()), t.css("opacity", 0), this.originalIndex = t.data("index"), this.currentIndex = this.originalIndex, this.viewportScrollTop = this.$viewport.scrollTop(), this.viewportOffset = this.$viewport.offset().top, this.viewportHeight = this.$viewport.height(), this.listOffsetFromViewport = this.$songs[0].offsetTop, this.draggedSongid = t.data("songData").fileId, this.setupDragCompleted = !0, this.minSongVisibleHeight = i.height() / 2
                }
                var n = this.viewportOffset,
                    o = 40,
                    s = n + this.viewportHeight;
                if(e) {
                    var r = this.mouseOffsetY = e.pageY || this.mouseOffsetY;
                    this.scrollVelocity = n > r ? o * (r - n) : r > s ? o * (r - s) : 0
                }
                var a = this.mouseOffsetY - this.mouseOffsetFromSong - this.viewportOffset;
                this.cloneOffsetTop = Math.min(Math.max(-this.minSongVisibleHeight, a), this.viewportHeight - this.minSongVisibleHeight), this.moveClone(), this.throttledReorderIfRequired(), e && e.preventDefault()
            },
            songMouseUp: function() {
                if(this.$viewport.off("scroll", this.viewportScroll), this.setupDragCompleted) {
                    this.reorderIfRequired(), this.throttledReorderIfRequired.cancel(), this.moveClone.cancel();
                    var e = this.originalIndex,
                        t = this.currentIndex,
                        i = this.$songBeingDragged,
                        n = this.$clone,
                        o = i.data("songData").fileId,
                        s = this,
                        r = 0;
                    this.currentlyPlayingSongid && this.currentlyPlayingSongid != this.attributes.songids[0] && this.currentlyPlayingSongPassedFilter && (r = 1), n.animate({
                        top: (this.currentIndex + r) * this.attributes.itemHeight - this.$viewport.scrollTop()
                    }, 300, function() {
                        i.css({
                            opacity: ""
                        }), n.remove(), d.reorder(e, t).fail(function() {
                            s.reorderBySongid.call(s, o, e), alert("sorry move failed")
                        })
                    }), this.$clone = null
                }
            },
            cancelSongDrag: function() {
                this.$viewport.off("scroll", this.viewportScroll), this.songDrag.cancelDrag();
                var e = this.$clone,
                    t = this.$songBeingDragged,
                    i = this;
                e.animate({
                    top: 0
                }, 300, function() {
                    t.css({
                        opacity: ""
                    }), e.remove(), i.reset()
                }), this.$clone = null
            },
            batchSongMouseDown: function(e) {
                var t = $(e.currentTarget),
                    i = t.data("songData").fileId;
                if(!$(e.target).is(".playSample, .pauseSample")) {
                    if(e.shiftKey) {
                        var n = this.lastSelectedSongId || this.attributes.songids[0],
                            o = this.attributes.songids.indexOf(n),
                            s = this.attributes.songids.indexOf(i);
                        if(o > s) {
                            var r = o;
                            o = s, s = r
                        }
                        for(var a = o; s >= a; a++) {
                            var l = this.attributes.songids[a],
                                u = this.getNodeBySongid(l);
                            u ? (u.addClass("selected"), this.selectedSongs[l] = u) : this.selectedSongs[l] = !0
                        }
                    } else t.toggleClass("selected"), this.selectedSongs[i] = this.selectedSongs[i] ? null : t;
                    this.lastSelectedSongId = i, this.queueButtonDecorator()
                }
            },
            viewportScroll: function() {
                this.viewportScrollTop = this.$viewport.scrollTop(), this.songMouseMove()
            },
            reorderIfRequired: function() {
                this.draggedSongid == this.currentlyPlayingSongid && this.cancelSongDrag();
                var e = 0;
                this.currentlyPlayingSongid && this.currentlyPlayingSongid != this.attributes.songids[0] && this.currentlyPlayingSongPassedFilter && (e = 1);
                var t = Math.round((this.cloneOffsetTop + this.viewportScrollTop) / this.attributes.itemHeight - e);
                t = Math.min(Math.max(t, 0), this.attributes.songids.length - 1 - e), t != this.currentIndex && (0 === t + e ? this.$clone.addClass("topSong") : 0 === this.currentIndex && this.$clone.removeClass("topSong"), this.reorder(this.currentIndex, t), this.currentIndex = t)
            },
            moveClone: function() {
                var e = Date.now();
                if(this.lastMoveTime) {
                    var t = (e - this.lastMoveTime) / 1e3,
                        i = this.scrollVelocity * t;
                    this.$viewport.scrollTop(this.viewportScrollTop + i)
                }
                this.lastMoveTime = e, this.$clone.css({
                    top: this.cloneOffsetTop
                })
            },
            batchEditMode: function() {
                if(this.mode != this.stateEnum.BATCHEDIT) {
                    this.mode = this.stateEnum.BATCHEDIT;
                    var e = d.$queue;
                    e.off(i.transitionEnd), e.addClass("batch"), setTimeout(function() {
                        e.addClass("slide")
                    }), this.$songs.off("mousedown", ".song", this.songDrag.setup).on("click", ".song", this.batchSongMouseDown)
                }
            },
            normalMode: function() {
                if(this.mode != this.stateEnum.NORMAL) {
                    this.deselectAllSongs(), this.mode = this.stateEnum.NORMAL;
                    var e = d.$queue;
                    e.removeClass("slide"), e.one(i.transitionEnd, function() {
                        e.removeClass("batch")
                    }), this.$songs.off("click", ".song", this.batchSongMouseDown).on("mousedown", ".song", this.songDrag.setup)
                }
            },
            renderBatchEditRows: function(e, t) {
                if(this.mode == this.stateEnum.BATCHEDIT) for(var i in t) if(t.hasOwnProperty(i)) {
                    var n = t[i];
                    this.selectedSongs[i] && (this.selectedSongs[i] = n, n.addClass("selected"))
                }
            },
            cleanupRemovedSongs: function(e, t) {
                if(this.mode == this.stateEnum.BATCHEDIT) for(var i = t.songids, n = 0; i.length > n; n++) {
                    var o = i[n];
                    this.selectedSongs[o] && (this.selectedSongs[o] = !0)
                }
            },
            setCurrentlyPlayingSongid: function(e) {
                this.currentlyPlayingSongid = e
            },
            clearCurrentlyPlayingSongid: function() {
                this.currentlyPlayingSongid = null
            }
        });
    return d
});
var ZeroClipboard = {
    version: "1.0.7",
    clients: {},
    moviePath: "/static/swf/ZeroClipboard.swf",
    nextId: 1,
    $: function(e) {
        return "string" == typeof e && (e = document.getElementById(e)), e.addClass || (e.hide = function() {
            this.style.display = "none"
        }, e.show = function() {
            this.style.display = ""
        }, e.addClass = function(e) {
            this.removeClass(e), this.className += " " + e
        }, e.removeClass = function(e) {
            for(var t = this.className.split(/\s+/), i = -1, n = 0; t.length > n; n++) t[n] == e && (i = n, n = t.length);
            return i > -1 && (t.splice(i, 1), this.className = t.join(" ")), this
        }, e.hasClass = function(e) {
            return !!this.className.match(RegExp("\\s*" + e + "\\s*"))
        }), e
    },
    setMoviePath: function(e) {
        this.moviePath = e
    },
    dispatch: function(e, t, i) {
        var n = this.clients[e];
        n && n.receiveEvent(t, i)
    },
    register: function(e, t) {
        this.clients[e] = t
    },
    getDOMObjectPosition: function(e, t) {
        for(var i = {
            left: 0,
            top: 0,
            width: e.width ? e.width : e.offsetWidth,
            height: e.height ? e.height : e.offsetHeight
        }; e && e != t;) i.left += e.offsetLeft, i.top += e.offsetTop, e = e.offsetParent;
        return i
    },
    Client: function(e) {
        this.handlers = {}, this.id = ZeroClipboard.nextId++, this.movieId = "ZeroClipboardMovie_" + this.id, ZeroClipboard.register(this.id, this), e && this.glue(e)
    }
};
ZeroClipboard.Client.prototype = {
    id: 0,
    ready: !1,
    movie: null,
    clipText: "",
    handCursorEnabled: !0,
    cssEffects: !0,
    handlers: null,
    glue: function(e, t, i) {
        this.domElement = ZeroClipboard.$(e);
        var n = 99;
        this.domElement.style.zIndex && (n = parseInt(this.domElement.style.zIndex, 10) + 1), "string" == typeof t ? t = ZeroClipboard.$(t) : t === void 0 && (t = document.getElementsByTagName("body")[0]);
        var o = ZeroClipboard.getDOMObjectPosition(this.domElement, t);
        this.div = document.createElement("div");
        var s = this.div.style;
        if(s.position = "absolute", s.left = "" + o.left + "px", s.top = "" + o.top + "px", s.width = "" + o.width + "px", s.height = "" + o.height + "px", s.zIndex = n, "object" == typeof i) for(addedStyle in i) s[addedStyle] = i[addedStyle];
        t.appendChild(this.div), this.div.innerHTML = this.getHTML(o.width, o.height)
    },
    getHTML: function(e, t) {
        var i = "",
            n = "id=" + this.id + "&width=" + e + "&height=" + t;
        if(navigator.userAgent.match(/MSIE/)) {
            var o = location.href.match(/^https/i) ? "https://" : "http://";
            i += '<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="' + o + 'download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=9,0,0,0" width="' + e + '" height="' + t + '" id="' + this.movieId + '" align="middle"><param name="allowScriptAccess" value="always" /><param name="allowFullScreen" value="false" /><param name="movie" value="' + ZeroClipboard.moviePath + '" /><param name="loop" value="false" /><param name="menu" value="false" /><param name="quality" value="best" /><param name="bgcolor" value="#ffffff" /><param name="flashvars" value="' + n + '"/><param name="wmode" value="transparent"/></object>'
        } else i += '<embed id="' + this.movieId + '" src="' + ZeroClipboard.moviePath + '" loop="false" menu="false" quality="best" bgcolor="#ffffff" width="' + e + '" height="' + t + '" name="' + this.movieId + '" align="middle" allowScriptAccess="always" allowFullScreen="false" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" flashvars="' + n + '" wmode="transparent" />';
        return i
    },
    hide: function() {
        this.div && (this.div.style.left = "-2000px")
    },
    show: function() {
        this.reposition()
    },
    destroy: function() {
        if(this.domElement && this.div) {
            this.hide(), this.div.innerHTML = "";
            var e = document.getElementsByTagName("body")[0];
            try {
                e.removeChild(this.div)
            } catch(t) {}
            this.domElement = null, this.div = null
        }
    },
    reposition: function(e) {
        if(e && (this.domElement = ZeroClipboard.$(e), this.domElement || this.hide()), this.domElement && this.div) {
            var t = ZeroClipboard.getDOMObjectPosition(this.domElement),
                i = this.div.style;
            i.left = "" + t.left + "px", i.top = "" + t.top + "px"
        }
    },
    setText: function(e) {
        this.clipText = e, this.ready && this.movie.setText(e)
    },
    addEventListener: function(e, t) {
        e = ("" + e).toLowerCase().replace(/^on/, ""), this.handlers[e] || (this.handlers[e] = []), this.handlers[e].push(t)
    },
    setHandCursor: function(e) {
        this.handCursorEnabled = e, this.ready && this.movie.setHandCursor(e)
    },
    setCSSEffects: function(e) {
        this.cssEffects = !! e
    },
    receiveEvent: function(e, t) {
        switch(e = ("" + e).toLowerCase().replace(/^on/, "")) {
        case "load":
            if(this.movie = document.getElementById(this.movieId), !this.movie) {
                var i = this;
                return setTimeout(function() {
                    i.receiveEvent("load", null)
                }, 1), void 0
            }
            if(!this.ready && navigator.userAgent.match(/Firefox/) && navigator.userAgent.match(/Windows/)) {
                var i = this;
                return setTimeout(function() {
                    i.receiveEvent("load", null)
                }, 100), this.ready = !0, void 0
            }
            this.ready = !0, this.movie.setText(this.clipText), this.movie.setHandCursor(this.handCursorEnabled);
            break;
        case "mouseover":
            this.domElement && this.cssEffects && (this.domElement.addClass("hover"), this.recoverActive && this.domElement.addClass("active"));
            break;
        case "mouseout":
            this.domElement && this.cssEffects && (this.recoverActive = !1, this.domElement.hasClass("active") && (this.domElement.removeClass("active"), this.recoverActive = !0), this.domElement.removeClass("hover"));
            break;
        case "mousedown":
            this.domElement && this.cssEffects && this.domElement.addClass("active");
            break;
        case "mouseup":
            this.domElement && this.cssEffects && (this.domElement.removeClass("active"), this.recoverActive = !1)
        }
        if(this.handlers[e]) for(var n = 0, o = this.handlers[e].length; o > n; n++) {
            var s = this.handlers[e][n];
            "function" == typeof s ? s(this, t) : "object" == typeof s && 2 == s.length ? s[0][s[1]](this, t) : "string" == typeof s && window[s](this, t)
        }
    }
}, define("zeroclipboard", function(e) {
    return function() {
        var t;
        return t || e.ZeroClipboard
    }
}(this)), define("crowd-control", ["require", "class"], function(e) {
    "use strict";
    var t = e("class"),
        i = t.extend(function() {
            for(var e = {
                capacity: 800,
                yOffset: 0,
                height: 2,
                width: 5,
                maxMinRadius: Math.sqrt(2),
                radius: function(e) {
                    return Math.sqrt(e) / Math.sqrt(200)
                },
                angleLimits: function() {
                    return {
                        minAngle: 0,
                        maxAngle: Math.PI
                    }
                }
            }, t = {
                front: {
                    capacity: 310,
                    radius: function(e, t) {
                        return Math.sqrt(e) / Math.sqrt(t || this.capacity)
                    }
                },
                back: {
                    capacity: 310,
                    yOffset: 1,
                    radius: function(e, t) {
                        return Math.sqrt(e) / Math.sqrt(t || this.capacity)
                    }
                }
            }, i = {
                0: {
                    top: 0,
                    bottom: 1,
                    left: -e.width / 2,
                    right: e.width / 2,
                    slope: 1,
                    dividers: [function() {
                        return -e.width / 2
                    }, function(e) {
                        var t = this.slope,
                            i = Math.sqrt(t * t + 1);
                        return(e - i) / t
                    }, function(e) {
                        return -this.dividers[1](e)
                    }, function(e) {
                        return -this.dividers[0](e)
                    }]
                },
                1: {
                    top: 1,
                    bottom: 2,
                    left: -e.width / 2,
                    right: e.width / 2,
                    slope: 2,
                    dividers: [function() {
                        return -e.width / 2
                    }, function(e) {
                        var t = this.slope,
                            i = Math.sqrt(t * t + 1);
                        return(e - i - 1) / t
                    }, function(e) {
                        return -this.dividers[1](e)
                    }, function(e) {
                        return -this.dividers[0](e)
                    }]
                }
            }, n = 0; 2 > n; n++) for(var o = i[n], s = o.dividers, r = 0, a = s.length; a > r; r++) s[r] = $.proxy(s[r], o);
            return {
                _name: "CrowdControl",
                init: function(n, o, s) {
                    this.room = turntable.cjAgpz, this.entropy = turntable.seedPRNG && turntable.serverNow ? turntable.seedPRNG(this.room.roomId + Math.round(turntable.serverNow() / 21600)) : Math, this.sectionName = n, this.sectionConfig = $.extend({}, e, t[n]), s && (this.sectionConfig.capacity = s), this.sectionConfig.maxRadius = this.sectionConfig.radius(1, 1);
                    var r;
                    r = "room" === n ? i[0] : i[1], this.sectionAreaConfig = $.extend({}, r), this.sectionAreaConfig.dividers = this.sectionAreaConfig.dividers.slice(1, 3), this.$eventBus = o, this.freeCrowdLocations = [], this.freeCrowdMemberids = [], this.crowdBoppers = [], this.crowdNotBoppers = [], this.crowdMembers = [], this.crowdMemberMap = {}, this.numCrowdMembers = 0, this.listenerids = [], this.addListener = $.proxy(this.addListener, this), this.removeListener = $.proxy(this.removeListener, this), this.$eventBus.on("Room.addListener", this.addListener), this.$eventBus.on("Room.removeListener", this.removeListener)
                },
                crowdConfig: e,
                areaConfigs: i,
                randomBasicAvatarid: function() {
                    var e = [1, 2, 3, 4, 5, 6, 7, 8, 34];
                    return this.getRandom(e)
                },
                randomAvatarid: function() {
                    var e = [{
                        range: [1, 8],
                        probability: 20
                    }, {
                        range: 34,
                        probability: 20
                    }, {
                        range: [9, 17],
                        probability: 10
                    }, {
                        range: [18, 19],
                        probability: 6
                    }, {
                        range: 121,
                        probability: 6
                    }, {
                        range: [20, 22],
                        probability: 5
                    }, {
                        range: 23,
                        probability: 5
                    }, {
                        range: [36, 37],
                        probability: 4
                    }, {
                        range: [27, 33],
                        probability: 3
                    }, {
                        range: [218, 221],
                        probability: 2
                    }, {
                        range: [222, 230],
                        probability: 2
                    }],
                        t = function() {
                            for(var t = [], i = 0, n = e.length; n > i; i++) {
                                var o = e[i],
                                    s = o.range,
                                    r = o.probability;
                                if("number" === $.type(s)) {
                                    for(var a = 0; r > a; a++) t.push(s);
                                    t.push(s)
                                } else if("array" === $.type(s)) for(var l = s[0]; s[1] >= l; l++) for(var a = 0; r > a; a++) t.push(l)
                            }
                            return t
                        },
                        i = t(),
                        n = i.length;
                    return function() {
                        return i[Math.floor(this.entropy.random() * n)]
                    }
                }(),
                getRandom: function(e, t) {
                    var i = e.length;
                    if(i > 0) {
                        var n = Math.floor(Math.random() * i),
                            o = e[n];
                        return t && e.splice(n, 1), o
                    }
                },
                _pop: function(e, t) {
                    var i = e.indexOf(t);
                    return -1 !== i ? (e.splice(i, 1), !0) : !1
                },
                freeCrowdLocations: [],
                crowdMemberids: [],
                freeCrowdLocationsInSection: [],
                crowdMemberidsInSection: [],
                getCrowdLocation: function(t) {
                    for(var i = e, n = this.numCrowdMembers, o = Math.max(this.minRadius || 0, 1.1 * i.radius(n + this.listenerids.length)), s = this.freeCrowdLocations, r = []; o >= i.radius(s.length + n) && s.length + n <= i.capacity;) this.generateCrowdLocation();
                    void 0 === t && this.listenerids.length + this.crowdMemberidsInSection.length >= this.sectionConfig.capacity && (t = !0);
                    for(var a = s.slice(), l = 0; 2 > l; l++) {
                        for(var u, d = 10; d > 0 && a.length > 0 && (u = this.getRandom(a, !0), t && u.inSection);) u = null, d--;
                        u && r.push(u)
                    }
                    if(r.length) {
                        for(var c, h, l = 0; r.length > l; l++) {
                            var u = r[l],
                                p = Math.sqrt(Math.pow(u.x, 2) + Math.pow(u.y, 2));
                            (!h || h > p) && (c = u, h = p)
                        }
                        return this._pop(s, c), this._pop(this.freeCrowdLocationsInSection, c), c
                    }
                },
                generateCrowdLocation: function(t) {
                    void 0 === t && (t = this.freeCrowdLocations.length + this.numCrowdMembers);
                    var i = this.generateLocation(this.entropy, e, t);
                    this.freeCrowdLocations.push(i);
                    var n = this.sectionConfig,
                        o = i.x,
                        s = i.y - n.yOffset;
                    return s >= 0 && Math.sqrt(Math.pow(o, 2) + Math.pow(s, 2)) <= n.maxRadius && (i.inSection = !0, this.freeCrowdLocationsInSection.push(i)), i
                },
                generateLocation: function(e, t, i, n) {
                    var o, s = .3 > e.random() ? !0 : !1;
                    s ? o = t.radius(e.random() * Math.min(5 * i, t.capacity)) : (n && (n = (5 * n + t.capacity) / 6), o = t.radius(i, n));
                    var r = t.angleLimits(o),
                        a = r.minAngle + e.random() * (r.maxAngle - r.minAngle),
                        l = Math.cos(a) * o,
                        u = Math.sin(a) * o;
                    u += t.yOffset;
                    var d = this.getAreaFromLocation({
                        x: l,
                        y: u
                    });
                    return {
                        x: l,
                        y: u,
                        area: d
                    }
                },
                getAreaFromLocation: function(e) {
                    for(var t = e.x, n = e.y, o = 0; 2 > o; o++) {
                        var s = i[o];
                        if(!(s.top > n || n >= s.bottom)) for(var r = 0, a = s.dividers.length - 1; a > r; r++) {
                            if(r === a - 1) {
                                if(s.dividers[r](n) > t || t > s.dividers[r + 1](n)) continue
                            } else if(s.dividers[r](n) > t || t >= s.dividers[r + 1](n)) continue;
                            return [o, r]
                        }
                    }
                },
                numCrowdMembers: 0,
                freeCrowdMemberids: [],
                crowdBoppers: [],
                crowdNotBoppers: [],
                crowdMembers: [],
                crowdMemberMap: {},
                makeMember: function(t) {
                    var n, o = this.getCrowdLocation(t),
                        s = this.getRandom(this.freeCrowdMemberids, !0) || this.numCrowdMembers;
                    if(o) {
                        var n, r = 1.1 * (WIDEST_AVATAR_WIDTH / 2) * e.width / ROOM_WIDTH,
                            a = o.area,
                            l = o.x,
                            u = o.y,
                            d = i[a[0]].dividers[a[1]],
                            c = i[a[0]].dividers[a[1] + 1],
                            h = Math.min(l - d(u), c(u) - l);
                        n = r > h || o.inSection ? this.randomBasicAvatarid() : this.randomAvatarid()
                    }
                    this.numCrowdMembers++;
                    var p = {
                        userid: s,
                        avatarid: n,
                        bopping: !1,
                        locationData: o
                    };
                    return this.crowdMemberMap[s] = p, this.crowdMembers.push(s), this.crowdNotBoppers.push(s), o && o.inSection && this.crowdMemberidsInSection.push(s), p
                },
                removeMember: function(e) {
                    if(this.crowdMemberMap[e]) {
                        this._pop(this.crowdBoppers, e), this._pop(this.crowdNotBoppers, e), this._pop(this.crowdMembers, e), this._pop(this.crowdMemberidsInSection, e);
                        var t = this.crowdMemberMap[e].locationData;
                        t && (this.freeCrowdLocations.push(t), t.inSection && this.freeCrowdLocationsInSection.push(t)), this.freeCrowdMemberids.push(e), delete this.crowdMemberMap[e], this.numCrowdMembers--
                    }
                },
                setBopping: function(e, t) {
                    this.crowdMemberMap[e] && this._pop(this.crowdNotBoppers, e) ? (this.crowdBoppers.push(e), $.extend(this.crowdMemberMap[e], {
                        bopping: !0,
                        startTime: t
                    })) : this.userMap[e] && (this.userMap[e].startTime = t)
                },
                setNotBopping: function(e) {
                    this.crowdMemberMap[e] && this._pop(this.crowdBoppers, e) && (this.crowdNotBoppers.push(e), this.crowdMemberMap[e].bopping = !1)
                },
                listenerids: [],
                addListener: function(e, t) {
                    var i = this.listenerids; - 1 === i.indexOf(t) && i.push(t)
                },
                removeListener: function(e, t) {
                    this._pop(this.listenerids, t)
                },
                generateUserLocation: function(t) {
                    var i = this.room.getEntropyForUser(t),
                        n = this.sectionConfig,
                        o = this.listenerids.indexOf(t.userid); - 1 === o && (o = this.room.listenerids.length);
                    var s = this.generateLocation(i, n, o, this.listenerids.length),
                        r = Math.sqrt(Math.pow(s.x, 2) + Math.pow(s.y, 2));
                    this.minRadius = Math.min(Math.max(this.minRadius || 0, r), e.maxMinRadius);
                    var a;
                    if(t.custom_avatar ? a = t.custom_avatar : t.avatarid && (a = avatars[t.avatarid]), a) {
                        var l = (a.size[0] - THINNEST_AVATAR_WIDTH) / 2;
                        l = 1.1 * l * e.width / ROOM_WIDTH;
                        var u = this.sectionAreaConfig.dividers[0],
                            d = this.sectionAreaConfig.dividers[1],
                            c = s.x,
                            h = s.y;
                        s.x = Math.min(Math.max(c, u(h) + l), d(h) - l)
                    }
                    return s
                },
                userMap: {}
            }
        }());
    return i
}), define("roomlist", ["require", "class", "util"], function(e) {
    var t = e("class"),
        i = e("util"),
        n = t.extend({
            init: function(e) {
                this.currentRoomId = e, this.searchQuery = null, this.listRooms = $.proxy(this.listRooms, this), this.refreshRoomList = $.proxy(this.refreshRoomList, this), this.searchSubmit = $.proxy(this.searchSubmit, this), this.searchKeyUp = $.proxy(this.searchKeyUp, this), this.searchClear = $.proxy(this.searchClear, this), this.enterRoom = $.proxy(this.enterRoom, this), this.nodes = {}, this.view = i.buildTree(n.layouts.roomList(this), this.nodes), this.refreshRoomList(), this.skip = 0, this.last_refresh = 0;
                var t = this;
                $(this.nodes.roomsList).unbind("scroll"), $(this.nodes.roomsList).scroll(function() {
                    if($(this).scrollTop() + $(this).innerHeight() >= $(this)[0].scrollHeight) {
                        var e = (new Date).getTime();
                        (e - t.last_refresh) / 1e3 > 1 && (t.skip += 20, t.refreshRoomList(t.skip, !0), t.last_refresh = (new Date).getTime())
                    }
                }), i.LWKTya(this)
            },
            refreshRoomList: function(e, t) {
                this.refreshTimer && clearTimeout(this.refreshTimer), e || (e = 0);
                var i = {
                    api: "room.list_rooms",
                    skip: e,
                    section_aware: !0
                };
                this.searchQuery && (i.api = "room.search", i.query = this.searchQuery), t ? turntable.uRzNYq(i, this.listRoomsAppend) : turntable.uRzNYq(i, this.listRooms)
            },
            searchKeyUp: function() {
                this.nodes.searchQuery.value ? $(this.nodes.clearSearch).addClass("active") : ($(this.nodes.clearSearch).removeClass("active"), this.searchQuery && (this.searchQuery = null, this.refreshRoomList()))
            },
            searchSubmit: function(e) {
                e.preventDefault(), this.skip = 0;
                var t = $.trim(this.nodes.searchQuery.value);
                t != this.searchQuery && (this.searchQuery = t, this.refreshRoomList())
            },
            searchClear: function() {
                var e = $(this.nodes.clearSearch);
                if(e.hasClass("active")) {
                    this.searchQuery && (this.searchQuery = null, this.refreshRoomList()), e.removeClass("active");
                    var t = $(this.nodes.searchQuery);
                    t.val("").focus()
                }
            },
            listRooms: function(e, t) {
                e.rooms.length || (this.skip = 0), t || $(this.nodes.roomList).empty();
                for(var o = this, s = function() {
                        o.enterRoom($(this))
                    }, r = 0; e.rooms.length > r; r++) {
                    var a = e.rooms[r][0],
                        l = null;
                    l = e.rooms[r].length > 2 ? e.rooms[r][2][0] : a.metadata.current_song && a.metadata.current_song.metadata;
                    var u = l ? l.artist + " \u2015 " + l.song : "",
                        d = i.buildTree(n.layouts.roomView(a, u, s)),
                        c = $(d).find(".songName");
                    c.append(u), l && l.played && c.append(i.buildTree(["span.songPlayed", "played " + i.prettyTimeDelta(l.played)]));
                    for(var h = e.rooms[r][1], p = $(d).find(".friends"), f = 0; h.length > f; f++) {
                        var m = h[f],
                            g = "";
                        g = m.fbid ? "https://graph.facebook.com/" + m.fbid + "/picture" : m.twitterid_lower ? "https://api.twitter.com/1/users/profile_image?screen_name=" + m.twitterid_lower + "&size=normal" : m.images.headfront, p.append('<img src="' + g + '" width="35" height="35" title="' + m.name + '" />')
                    }
                    a.roomid == this.currentRoomId && $(d).addClass("currentRoom"), this.nodes.roomList.appendChild(d)
                }
                $(this.nodes.roomList).find(".roomRow:even").addClass("odd")
            },
            listRoomsAppend: function(e) {
                turntable.cjAgpz.roomId && turntable.cjAgpz.roomList.listRooms(e, !0)
            },
            enterRoom: function(e) {
                e.hasClass("currentRoom") || turntable.setPage(e.data("shortcut"), e.data("name"), e.data("id"))
            },
            cleanup: function() {
                this.refreshTimer && (clearTimeout(this.refreshTimer), this.refreshTimer = null)
            }
        });
    return n.layouts = {
        roomList: function(e) {
            return ["div.roomIndex", {}, ["div.rooms.roomsHeader",
            {}, ["form.roomSearch",
            {
                event: {
                    submit: e.searchSubmit
                }
            }, ["input##searchQuery",
            {
                event: {
                    keyup: e.searchKeyUp
                },
                placeholder: "search all rooms \u2015 enter room name"
            }],
                ["div##clearSearch.clearSearch",
                {
                    event: {
                        click: e.searchClear
                    }
                }]
            ]], ["div##roomsList.rooms.roomsList",
            {}, ["table.roomsTable",
            {}, ["thead",
            {}, ["tr",
            {}, ["th.listeners",
            {
                scope: "col"
            }, "Listeners"],
                ["th",
                {
                    scope: "col"
                }, "Room name and Current song"],
                ["th.friends",
                {
                    scope: "col"
                }, "Friends"]
            ]],
                ["tbody##roomList"]
            ]]]
        },
        roomView: function(e, t, i) {
            return ["tr.roomRow", {
                data: {
                    id: e.roomid,
                    shortcut: e.shortcut,
                    name: e.name
                },
                event: {
                    click: i
                }
            }, ["td.roomStats",
            {}, ["div.nListeners",
            {},
            e.metadata.listeners + ""],
                ["div.numDJs",
                {},
                e.metadata.djcount, "/", e.metadata.max_djs, " DJs"]
            ], ["td.roomtitles",
            {}, ["div.roomInfo",
            {}, ["span.roomName",
            {},
            e.name]],
                ["div.songName",
                {}]
            ], ["td.friends"]]
        }
    }, n
}), define("animation", ["require", "class"], function(e) {
    var t = e("class"),
        i = {
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
                loop: !0
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
                loop: !0
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
                loop: !0
            }
        },
        n = t.extend({
            init: function(e) {
                $.extend(this, e), this.ready = !1
            }
        });
    $.extend(n, {
        cache: {},
        cacheAnimation: function(e) {
            this.cache[e.id] = e
        },
        getCachedAnimation: function(e) {
            var t = e.id;
            return t ? this.cache[t] : (e.id = JSON.stringify(e), void 0)
        },
        createAnimationGetter: function(e) {
            return function(t) {
                var i = n.getCachedAnimation(t);
                if(i) return i;
                var o = new e(t);
                return n.cacheAnimation(o), o
            }
        }
    });
    var o = n.extend({
        init: function(e) {
            this._super(e), this.ready = !0;
            for(var t = 0, i = this.keyframes, n = i.length, o = 0; n > o; o++) t += i[o].duration;
            this.duration = t
        }
    });
    $.extend(o, {
        getAnimation: n.createAnimationGetter(o)
    });
    var s = n.extend({
        init: function(e) {
            this._super(e);
            var t = util.createImageWithLoader(this.url);
            this.image = t[0];
            var i = t[1];
            i.done($.proxy(function() {
                this.ready = !0
            }, this))
        }
    });
    return $.extend(s, {
        getAnimation: n.createAnimationGetter(s)
    }), {
        animations: i,
        AvatarAnimation: o,
        SpriteAnimation: s
    }
}), define("blackswan/blackswan", ["require", "animation", "class", "blackswan/requestAnimationFrame"], function(e) {
    var t = e("animation"),
        i = e("class");
    e("blackswan/requestAnimationFrame");
    var n = 20,
        o = i.extend({
            framerate: n,
            msPerFrame: 1e3 / n,
            init: function(e) {
                this.animationQueue = [], this.notifyStateChange = e
            },
            setEventBus: function(e) {
                this.$eventBus = e, this.setupEventListeners && this.setupEventListeners()
            },
            unsetEventBus: function() {
                delete this.$eventBus
            },
            pushAnimation: function(e) {
                this.animationQueue.push(e)
            },
            _shiftAnimation: function(e) {
                var t = this.animationQueue.shift();
                this.startTime = "number" === $.type(e) ? e : Date.now(), delete this.nextAnimationStartTime, this.notifyStateChange && this.$eventBus && this.disabledCache && t.loop && (this.$eventBus.trigger("Stage.enableCache", [this.dancerid]), delete this.disabledCache), this.animation = t
            },
            nextAnimation: function() {
                return this.animationQueue[0]
            },
            clearAnimationQueue: function() {
                this.animationQueue = []
            },
            start: function(e) {
                delete this.stopTime, this.animating || (this.startTime = "number" === $.type(e) ? e : Date.now(), this.animating = !0, this.notifyStateChange && this.$eventBus && (this.animation && this.animation.loop ? this.$eventBus.trigger("Stage.emptyCache", [this.dancerid]) : (this.$eventBus.trigger("Stage.disableCache", [this.dancerid]), this.disabledCache = !0)))
            },
            next: function(e) {
                if(this.nextAnimation()) if(this.animating) if(this.nextAnimationStartTime) this.animationQueue.shift();
                else {
                    var t = this.animation.duration,
                        i = "number" === $.type(e) ? e : Date.now(),
                        n = i - this.startTime,
                        o = t ? Math.max(1, Math.ceil(n / t)) : 1;
                    this.nextAnimationStartTime = this.startTime + t * o, this.notifyStateChange && this.$eventBus && (this.$eventBus.trigger("Stage.disableCache", [this.dancerid]), this.disabledCache = !0)
                } else this._shiftAnimation(e)
            },
            stop: function(e) {
                if(this.animating) {
                    var t = this.animation.duration,
                        i = "number" === $.type(e) ? e : Date.now(),
                        n = i - this.startTime,
                        o = t ? Math.max(1, Math.ceil(n / t)) : 1;
                    this.stopTime = this.startTime + t * o, this.notifyStateChange && this.$eventBus && (this.$eventBus.trigger("Stage.disableCache", [this.dancerid]), this.disabledCache = !0)
                }
            },
            _stop: function() {
                this.animating = !1, delete this.stopTime, this.notifyStateChange && this.disabledCache && this.$eventBus && (this.$eventBus.trigger("Stage.enableCache", [this.dancerid]), delete this.disabledCache)
            },
            determineFrame: function(e) {
                if(!this.animating) return 0;
                if(void 0 !== this.stopTime && e > this.stopTime) return this._stop(), 0;
                var t = this.animation,
                    i = (this.startTime, t ? t.duration : null);
                if(!t || !t.loop && e > this.startTime + i || void 0 !== this.nextAnimationStartTime && e > this.nextAnimationStartTime) {
                    var n = this.nextAnimation();
                    return n ? (n.ready && this._shiftAnimation(e), 0) : (this._stop(), 0)
                }
                var o = e - this.startTime,
                    s = o % i;
                return 0 > s && (s += i), Math.floor(s / this.msPerFrame)
            }
        }),
        s = o.extend({
            imagesLoaded: !0,
            setScale: function() {},
            setColor: function() {},
            _shiftAnimation: function() {
                this._super(), this.msPerFrame = this.animation.msPerFrame
            },
            draw: function(e, t) {
                var i = this.determineFrame(t);
                if(this.animation) {
                    var n = this.animation.image,
                        o = n.width,
                        s = (n.height, n.height / (this.animation.duration / this.msPerFrame));
                    e.drawImage(n, 0, s * i, o, s, 0, 0, o, s)
                }
            }
        }),
        r = o.extend(function() {
            var e = {
                frameCache: {},
                imageCache: {},
                shadedImageCache: {},
                loaderMap: {},
                boundingBoxCache: {},
                animationData: {}
            };
            return {
                init: function(e, t, i, n, o, s) {
                    this._super(n), this.dancerid = e, this.avatarid = t, this.data = s || avatars[t], this.state = i, this.isCrowdMember = o, this.animating = !1, this.parts = {}, this.shadedParts = {}, this.colorizedParts = {}, this._setColor = $.proxy(this._setColor, this), this.color = null
                },
                getPartImageUrl: function(e) {
                    return this.data.images[e]
                },
                loadImages: function() {
                    for(var t = [], i = [], n = this.data.states[this.state], o = 0, s = n.length; s > o; o++) i.push(n[o].name);
                    if(this.data.animations) for(var r in this.data.animations) {
                        var a = this.data.animations[r];
                        for(var l in a.keyframes) {
                            var u = a.keyframes[l];
                            for(var d in u) {
                                var c = u[d],
                                    h = c.swap;
                                !h || h in i || i.push(h)
                            }
                        }
                    }
                    for(var o = 0, s = i.length; s > o; o++) {
                        var p = i[o],
                            f = this.getPartImageUrl(p);
                        if(!(f in e.imageCache)) {
                            var m = util.createImageWithLoader(f),
                                g = m[0],
                                v = m[1];
                            e.imageCache[f] = g, m = this.shadeImage(g, v);
                            var y = m[0],
                                b = m[1];
                            e.shadedImageCache[f] = y, e.loaderMap[f] = b
                        }
                        t.push(e.loaderMap[f]), this.parts[p] = e.imageCache[f], this.shadedParts[p] = e.shadedImageCache[f]
                    }
                    this.imagesLoad = $.when.apply(this, t), this.imagesLoaded = !1, this.imagesLoad.done($.proxy(function() {
                        this.imagesLoaded = !0
                    }, this)).fail($.proxy(function() {
                        LOG("unable to load images for avatar " + this.avatarid), this.imageLoaded = !1
                    }, this))
                },
                shadeImage: function(e, t, i) {
                    i || (i = "#100911");
                    var n = util.buildTree(["canvas"]),
                        o = $.Deferred();
                    return t.done(function() {
                        n.width = e.width, n.height = e.height;
                        var t = n.getContext("2d");
                        t.drawImage(e, 0, 0), t.globalCompositeOperation = "source-atop", t.globalAlpha = .5, t.fillStyle = i, t.fillRect(0, 0, e.width, e.height), o.resolve()
                    }), [n, o]
                },
                calculateBoundingBox: function(t) {
                    var i = e.boundingBoxCache[this.avatarid];
                    if(i && !t) this.boundingBox = i;
                    else {
                        for(var n = this.data.states[this.state], o = [], s = [], r = [], a = [], l = n.length, u = 0; l > u; u++) {
                            var d = n[u],
                                c = d.name,
                                h = this.parts[c];
                            if(!h.height && !h.width) return !1;
                            var p = d.offset[0],
                                f = d.offset[1];
                            o.push(p), s.push(f), r.push(p + h.width), a.push(f + h.height)
                        }
                        var m = {
                            left: Math.min.apply(Math, o),
                            top: Math.min.apply(Math, s),
                            right: Math.max.apply(Math, r),
                            bottom: Math.max.apply(Math, a)
                        };
                        this.boundingBox = m, e.boundingBoxCache[this.avatarid] = m
                    }
                    return $(window).trigger(this.dancerid + ".hasBoundingBox"), this.boundingBox
                },
                setScale: function(e) {
                    e !== this.scale && (this.scale = e, this.imagesLoaded = !1, this.loadImages(), this.imagesLoaded ? util.retry(this, this.calculateBoundingBox)() : (this.imagesLoad.done(util.retry(this, this.calculateBoundingBox)), this.imagesLoad.done($.proxy(function() {
                        this.notifyStateChange && this.$eventBus && this.$eventBus.trigger("Stage.emptyCache", [this.dancerid])
                    }, this))))
                },
                setColor: function(e) {
                    e == this.color && this.colorSet || (this.color = e, this.colorSet = !1, this.imagesLoaded ? this._setColor(e) : this.imagesLoad.done(this._setColor))
                },
                _setColor: function(e) {
                    e || (e = this.color);
                    for(var t in this.parts) if(this.parts.hasOwnProperty(t)) {
                        var i = this.parts[t];
                        if(!i.height && !i.width) return window.setTimeout(this._setColor, 1e3), void 0
                    }
                    for(var t in this.parts) if(this.parts.hasOwnProperty(t)) {
                        var i = this.parts[t],
                            n = document.createElement("canvas");
                        n.width = i.width, n.height = i.height;
                        var o = n.getContext("2d");
                        o.drawImage(i, 0, 0, i.width, i.height), o.globalCompositeOperation = "source-atop";
                        var s = (e >> 16) % 256,
                            r = (e >> 8) % 256,
                            a = e % 256;
                        o.fillStyle = "rgba(" + s + ", " + r + ", " + a + ", 1)", o.fillRect(0, 0, i.width, i.height), o.globalCompositeOperation = "source-over", this.colorizedParts[t] = n
                    }
                    this.colorSet = !0
                },
                tween: function(t) {
                    var i = this.animation;
                    e.frameCache[i.id] || (e.frameCache[i.id] = {});
                    var n = e.frameCache[i.id];
                    if(!n[t]) for(var o = t * this.msPerFrame, s = {}, r = i.keyframes, a = r.length, l = 0; a > l; l++) {
                        var u = r[l];
                        if(u.duration >= o) {
                            var d = o / u.duration,
                                c = $.extend({}, s);
                            for(var h in u) if("duration" != h && u.hasOwnProperty(h)) for(var p = u[h], f = h.split(","), m = f.length, g = 0; m > g; g++) for(var v in p) if(p.hasOwnProperty(v)) {
                                var y = p[v];
                                if(!util.notEmpty(y) || !y.toFixed) continue;
                                c[f[g]] || (c[f[g]] = {});
                                var b = c[f[g]][v];
                                util.notEmpty(b) || (b = 0);
                                var w = (y - b) * d + b;
                                c[f[g]][v] = w
                            }
                            n[t] = c;
                            break
                        }
                        o -= u.duration;
                        for(var h in u) if("duration" != h && u.hasOwnProperty(h)) for(var c = u[h], f = h.split(","), m = f.length, g = 0; m > g; g++) s[f[g]] || (s[f[g]] = {}), $.extend(s[f[g]], c)
                    }
                    return n[t]
                },
                draw: function(e, t, i) {
                    if(!this.imagesLoaded) return !1;
                    var n = this.isCrowdMember,
                        o = this.determineFrame(t),
                        s = {};
                    this.animating && this.animation && !i && (s = this.tween(o));
                    for(var r = !0, a = this.data.states[this.state], l = a.length, u = 0; l > u; u++) {
                        var d = a[u],
                            c = d.name,
                            h = this.parts[c];
                        if(!i && c in s && s[c].swap && (h = this.parts[s[c].swap]), !h || !h.width || !h.height) {
                            r = !1;
                            break
                        }
                        var p = h.width / 2,
                            f = h.height / 2,
                            m = d.offset[0],
                            g = d.offset[1],
                            v = 0;
                        c in s && (m += s[c].x || 0, g += s[c].y || 0, v = (s[c].angle || 0) * Math.PI / 180), i ? h = this.colorizedParts[c] : n && (h = this.shadedParts[c]), h ? v ? (e.save(), e.translate(m + p, g + f), e.rotate(v), e.drawImage(h, -p, -f, h.width, h.height), e.restore()) : e.drawImage(h, m, g, h.width, h.height) : r = !1
                    }
                    return r
                }
            }
        }()),
        a = i.extend(function() {
            var e = {
                FLOOR_COLOR: 0,
                config: {
                    stageBottomScale: .9,
                    stageTopScale: .55,
                    usePerspective: !0,
                    bottomAlign: !1,
                    paddingTop: 0,
                    paddingLeft: 0,
                    paddingRight: 0,
                    cacheFrames: !0,
                    mouseEvents: !0,
                    ignoreInitialMouseEvents: !1,
                    ignoreExceptionSelector: null
                },
                framerate: n,
                msPerFrame: 1e3 / n
            },
                i = [],
                o = !1,
                s = function() {
                    if(!i.length) return o = !1, void 0;
                    setTimeout(function() {
                        requestAnimationFrame(s)
                    }, e.msPerFrame), o = !0;
                    for(var t = Date.now(), n = 0, r = i.length; r > n; n++) {
                        var a = i[n],
                            l = a.canvas,
                            u = a.context;
                        if(u.clearRect(0, 0, l.width, l.height), a.config.cacheFrames) {
                            var d = Math.floor((t - a.startTime) / e.msPerFrame),
                                c = d % a.numCachedFrames,
                                h = a.frameCache[c];
                            if(!a.cacheDisabled && h) u.putImageData(h, 0, 0);
                            else {
                                t = a.startTime + d * e.msPerFrame;
                                var p = a.draw(l, u, a.dancers, !1, t);
                                p && (a.frameCache[c] = u.getImageData(0, 0, l.width, l.height))
                            }
                        } else a.draw(l, u, a.dancers, !1, t)
                    }
                };
            return {
                animatingStages: i,
                framerate: e.framerate,
                msPerFrame: e.msPerFrame,
                init: function(i, n, o, s) {
                    this.width = n, this.height = o, this.config = $.extend({}, e.config, s), this.$container = i, this.$el = $(util.buildTree(["div.stage"])).appendTo(i), this.$eventBus = $({}), this.canvasWidth = n + this.config.paddingLeft + this.config.paddingRight, this.canvasHeight = o + this.config.paddingTop;
                    var r = util.buildTree(["canvas",
                    {
                        width: this.canvasWidth,
                        height: this.canvasHeight
                    }]);
                    this.canvas = r, this.context = r.getContext("2d"), this.$el.append(r), this.dancerMap = {}, this.dancers = [], this.tick = $.proxy(this.tick, this), this.animating = !1, this.config.mouseEvents && (this.updateMap = util.delay(this, util.retry(this, this.updateMap), 1e3), this.mapCanvas = util.buildTree(["canvas",
                    {
                        width: this.canvasWidth,
                        height: this.canvasHeight
                    }]), this.mapContext = this.mapCanvas.getContext("2d"), this.mouseenter = $.proxy(this.mouseenter, this), this.mousemove = util.rateLimit(this, this.mousemove, 200), this.mouseleave = $.proxy(this.mouseleave, this), this.click = $.proxy(this.click, this), this.$el.on("mouseenter", this.mouseenter).on("mousemove", this.mousemove).on("mouseleave", this.mouseleave).on("click", this.click), this.$eventBus.on("newColorizedDancer", this.updateMap), this.colorMap = {}, this.colorCount = e.FLOOR_COLOR, this.colorizer = new d(this.$eventBus)), this.config.cacheFrames && (this.$eventBus.on("Stage.emptyCache", $.proxy(this.emptyFrameCache, this)).on("Stage.disableCache", $.proxy(this.disableFrameCache, this)).on("Stage.enableCache", $.proxy(this.enableFrameCache, this)), this.frameCache = [], this.cacheDisablers = {}, this.cacheDuration = t.AvatarAnimation.getAnimation(t.animations.rock).duration, this.numCachedFrames = this.cacheDuration / this.msPerFrame)
                },
                addDancer: function(e, t, i) {
                    if(t += this.config.paddingLeft, i += this.config.paddingTop, e.dancerid in this.dancerMap) {
                        if(e.x == t && e.y == i) return;
                        this.removeDancer(e.dancerid)
                    }
                    var n = {
                        dancer: e,
                        x: t,
                        y: i
                    };
                    if(n.scale = this.config.usePerspective ? this.config.stageTopScale + (i - this.config.paddingTop) * (this.config.stageBottomScale - this.config.stageTopScale) / this.height : this.config.stageBottomScale, e.setScale(n.scale), this.config.mouseEvents) if(!e.color || !util.notEmpty(e.colorizedParts) || e.color in this.colorMap) {
                        var o;
                        if(e.isCrowdMember) o = 0;
                        else {
                            for(this.colorCount += 3; this.colorCount in this.colorMap;) this.colorCount += 3;
                            o = this.colorCount, this.colorMap[o] = n
                        }
                        this.colorizer.push({
                            dancer: e,
                            color: o
                        }), window.setTimeout(this.colorizer.start, 1e3)
                    } else this.colorMap[e.color] = n, this.updateMap();
                    this.dancerMap[e.dancerid] = n, e.setEventBus(this.$eventBus);
                    var s = this.dancers,
                        r = s.length;
                    if(r) {
                        for(var a = !1; r--;) {
                            var l = s[r];
                            if(l.y > i) {
                                s.splice(r + 1, 0, n), a = !0;
                                break
                            }
                            if(l.y == i && l.x > t) {
                                s.splice(r + 1, 0, n), a = !0;
                                break
                            }
                        }
                        a || s.splice(0, 0, n)
                    } else s.push(n);
                    if(this.config.cacheFrames) if(e.imagesLoaded) this.emptyFrameCache();
                    else {
                        var u = this;
                        e.imagesLoad.done(function() {
                            u.emptyFrameCache()
                        })
                    }
                },
                removeDancer: function(e) {
                    var t = null;
                    this.dancerMap[e] && (t = this.dancerMap[e], this.config.mouseEvents && delete this.colorMap[this.dancerMap[e].dancer.color], delete this.dancerMap[e]);
                    for(var i = this.dancers, n = i.length; n--;) if(i[n].dancer.dancerid == e) {
                        i.splice(n, 1);
                        break
                    }
                    return this.config.mouseEvents && this.updateMap(), this.config.cacheFrames && (this.emptyFrameCache(), this.enableFrameCache(e)), t
                },
                moveDancer: function(e, t, i, n) {
                    var o = this.dancerMap[e];
                    if(o) {
                        var s = o.dancer;
                        t += this.config.paddingLeft, i += this.config.paddingTop, o.x = t, o.y = i, this.config.usePerspective && (o.scale = this.config.stageTopScale + (i - this.config.paddingTop) * (this.config.stageBottomScale - this.config.stageTopScale) / this.height, s.setScale(o.scale)), n || this.dancers.sort(function(e, t) {
                            return t.y - e.y || t.x - e.x
                        }), this.config.cacheFrames && this.emptyFrameCache()
                    }
                },
                hasDancer: function(e) {
                    return e in this.dancerMap
                },
                start: function() {
                    this.animating = !0, this.startTime = Date.now(), -1 === i.indexOf(this) && i.push(this), o || s()
                },
                stop: function() {
                    this.animating = !1;
                    var e = i.indexOf(this); - 1 !== e && i.splice(e, 1)
                },
                draw: function(e, t, i, n, o) {
                    if(!i || !i.length) return !0;
                    for(var s = i.length, r = !0; s--;) {
                        var a = i[s],
                            l = a.dancer.boundingBox,
                            u = a.x,
                            d = a.y,
                            c = a.scale;
                        if(a.dancer.data, this.config.bottomAlign) {
                            if(!l) {
                                r = !1;
                                continue
                            }
                            var h = (l.right + l.left) / 2;
                            u -= h * c, d -= l.bottom * c
                        }
                        var p = u || d,
                            f = 1 !== c;
                        (p || f) && (t.save(), t.translate(u, d), t.scale(c, c)), r = a.dancer.draw(t, o, n) && r, (p || f) && t.restore()
                    }
                    var m = this.config.extraDrawFunction;
                    return m && m(e, t), r
                },
                updateMap: function() {
                    this.mapContext.save();
                    var e = this.draw(this.mapCanvas, this.mapContext, this.dancers, !0);
                    return this.mapContext.restore(), e
                },
                mouseenter: function(e) {
                    !this.config.ignoreInitialMouseEvents || this.config.ignoreExceptionSelector && 0 !== $(e.relatedTarget).filter(this.config.ignoreExceptionSelector).length ? this.ignoreMousemove = !1 : (this.ignoreMousemove = !0, window.setTimeout($.proxy(function() {
                        this.ignoreMousemove = !1
                    }, this), 400))
                },
                mousemove: function(e) {
                    if(!this.ignoreMousemove) {
                        var t = this.$el.offset(),
                            i = e.pageX - t.left,
                            n = e.pageY - t.top,
                            o = this.getDancerFromCoordinates(i, n);
                        if(o) {
                            if(this.lastHoverDancerid == o.dancer.dancerid) return;
                            this.lastHoverDancerid = o.dancer.dancerid;
                            var s = this.getDancerBoundingBox(o.dancer.dancerid);
                            this.lastBoundingBox = s, this.$el.trigger("Stage.mouseenter", [e, o.dancer, s])
                        } else this.mouseleaveDancer(e)
                    }
                },
                mouseleave: function(e) {
                    this.ignoreMousemove = !0, this.mouseleaveDancer(e)
                },
                mouseleaveDancer: function(e) {
                    this.lastHoverDancerid && (this.lastHoverDancerid in this.dancerMap && this.$el.trigger("Stage.mouseleave", [e, this.dancerMap[this.lastHoverDancerid].dancer, this.lastBoundingBox]), this.lastHoverDancerid = null)
                },
                click: function(e) {
                    var t = this.$el.offset(),
                        i = e.pageX - t.left,
                        n = e.pageY - t.top,
                        o = this.getDancerFromCoordinates(i, n);
                    if(o) {
                        var s = this.getDancerBoundingBox(o.dancer.dancerid);
                        this.$el.trigger("Stage.click", [e, o.dancer, s])
                    }
                },
                getDancerFromCoordinates: function(t, i) {
                    t = Math.min(Math.max(1, t), this.canvasWidth - 1);
                    var n = this.mapContext.getImageData(t - 1, i, 3, 1),
                        o = n.data,
                        s = new Uint32Array(o.buffer, 0, o.length / 4);
                    if(s[0] === s[1] && s[1] == s[2] && 255 === o[3]) {
                        var r = (o[0] << 16) + (o[1] << 8) + o[2];
                        if(r != e.FLOOR_COLOR) return this.colorMap[r]
                    }
                },
                getDancerBoundingBox: function(e) {
                    var t = this.dancerMap[e],
                        i = t.dancer.boundingBox;
                    if(i) {
                        var n = t.x,
                            o = t.y,
                            s = t.scale;
                        if(this.config.bottomAlign) {
                            var r = (i.right - i.left) * t.scale,
                                a = (i.bottom - i.top) * t.scale,
                                l = r / 2;
                            i = {
                                left: n - l,
                                top: o - a,
                                right: n + l,
                                bottom: o
                            }
                        } else i = {
                            left: n + s * i.left,
                            top: o + s * i.top,
                            right: n + s * i.right,
                            bottom: o + s * i.bottom
                        };
                        return i
                    }
                },
                emptyFrameCache: function() {
                    this.frameCache = []
                },
                disableFrameCache: function(e, t) {
                    this.cacheDisablers[t] || (this.cacheDisabled = !0, this.cacheDisablers[t] = !0)
                },
                enableFrameCache: function(e, t) {
                    if(this.cacheDisablers[t]) {
                        delete this.cacheDisablers[t];
                        var i = 0;
                        for(var n in this.cacheDisablers) this.cacheDisablers.hasOwnProperty(n) && i++;
                        0 === i && (this.cacheDisabled = !1, this.emptyFrameCache())
                    }
                }
            }
        }()),
        l = i.extend({
            init: function(e) {
                this.$el = $("<div>").css({
                    position: "absolute",
                    "z-index": 12e3
                }), this.$el.appendTo(e.$el.parent()), e.$el.on("Stage.mouseenter", $.proxy(this.mouseenter, this)), e.$el.on("Stage.mouseleave", $.proxy(this.mouseleave, this)), e.$el.on("Stage.click", $.proxy(this.click, this)), this.$el.on("mouseover", function() {
                    e.cancelMousemove()
                }), this.stage = e
            },
            mouseenter: function() {},
            mouseleave: function() {},
            click: function() {}
        });
    l.extend({
        init: function(e) {
            this._super(e), this.$el.css({
                background: "white",
                opacity: .5
            })
        },
        mouseenter: function(e, t, i, n) {
            this.$el.css({
                left: n.left,
                top: n.top,
                width: n.right - n.left,
                height: n.bottom - n.top
            })
        }
    });
    var u = i.extend({
        init: function() {
            this.queue = [], this.start = $.proxy(this.start, this), this._process = $.proxy(this._process, this)
        },
        start: function() {
            this.processTimeout || this._process()
        },
        _process: function() {
            for(var e; !(e || 0 >= this.queue.length);) e = this.queue.shift();
            e && this.process(e), this.processTimeout = this.queue.length > 0 ? window.setTimeout(this._process) : null
        },
        process: function() {},
        push: function(e) {
            this.queue.push(e)
        }
    }),
        d = u.extend({
            init: function(e) {
                this._super(), this.$eventBus = e
            },
            process: function(e) {
                var t = e.dancer,
                    i = e.color;
                t.setColor(i), this.$eventBus.trigger("newColorizedDancer")
            }
        });
    return {
        BlackSwanDancer: r,
        SpriteDancer: s,
        Stage: a,
        StageMouseHandler: l
    }
}), define("bXCndf/bXCndf", ["require", "animation", "blackswan/blackswan", "overlay", "ttnode"], function(e) {
    var t = e("animation"),
        i = e("blackswan/blackswan"),
        n = e("overlay"),
        o = e("ttnode");
    RFmAZA = null, ROOM_INTERVAL = null, MARQUEE_INTERVALS = {}, SHORTEST_AVATAR_HEIGHT = 107, TALLEST_AVATAR_HEIGHT = 238, THINNEST_AVATAR_WIDTH = 100, WIDEST_AVATAR_WIDTH = 295, ROOM_WIDTH = 3378, ROOM_HEIGHT = 600, ROOM_VIEW_WIDTH = 1468, ROOM_VIEW_HEIGHT = 600, CROWD_UPDATE_THRESHOLD = 5;
    var s = {
        laptop_mac: "https://s3.amazonaws.com/static.turntable.fm/roommanager_assets/props/laptop_mac_11.png",
        laptop_pc: "https://s3.amazonaws.com/static.turntable.fm/roommanager_assets/props/laptop_windows_11.png",
        laptop_linux: "https://s3.amazonaws.com/static.turntable.fm/roommanager_assets/props/laptop_linux_11.png",
        laptop_ubuntu: "https://s3.amazonaws.com/static.turntable.fm/roommanager_assets/props/laptop_ubuntu_11.png",
        laptop_chrome: "https://s3.amazonaws.com/static.turntable.fm/roommanager_assets/props/laptop_chrome_11.png",
        laptop_iphone: "https://s3.amazonaws.com/static.turntable.fm/roommanager_assets/props/laptop_iphone.png",
        laptop_cake: "https://s3.amazonaws.com/static.turntable.fm/roommanager_assets/props/cake.png",
        laptop_intel: "https://s3.amazonaws.com/static.turntable.fm/roommanager_assets/props/laptop_intel.png",
        laptop_android: "https://s3.amazonaws.com/static.turntable.fm/roommanager_assets/props/laptop_android.png"
    },
        r = i.StageMouseHandler.extend({
            click: function(e, t, i) {
                RFmAZA.callback("profile", i.dancerid)
            }
        }),
        a = r.extend({
            mouseenter: function(e, t, i) {
                RFmAZA.showTipsy(i.dancerid)
            },
            mouseleave: function(e, t) {
                var i = t.toElement || t.relatedTarget,
                    n = $(i);
                n.closest(".tooltip").length || RFmAZA.hideLastTipsy()
            }
        }),
        l = o.extend(function() {
            var e = {
                origin: {
                    x: ROOM_VIEW_WIDTH / 2,
                    y: ROOM_VIEW_HEIGHT / 2
                },
                relativeScale: 3,
                zoomLevel: 0,
                djBooth: {
                    avatarScale: .45,
                    laptopScale: .11,
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
                        width: ROOM_VIEW_WIDTH
                    },
                    rect: {
                        top: 27,
                        left: -ROOM_WIDTH / 2,
                        height: ROOM_HEIGHT,
                        width: ROOM_WIDTH
                    },
                    frontScale: .5,
                    backScale: 1.1,
                    paddingLeft: 0,
                    paddingRight: 0,
                    zIndex: 1
                },
                bigboard: {
                    offset: {
                        x: -188,
                        y: -268
                    }
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
                        }
                    },
                    shade: [0, -140, 0, 0, -140, 500],
                    shadeOpacity: .74
                },
                djTableCanvas: {
                    rect: {
                        top: -120,
                        left: -186,
                        width: 372,
                        height: 87
                    }
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
                }
            },
                o = {
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
                        }
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
                        shadeOpacity: .74
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
                },
                l = function(t) {
                    if("object" == $.type(t)) {
                        t = $.extend({}, t);
                        var i = t.noScale;
                        for(var n in t)!t.hasOwnProperty(n) || i && -1 !== i.indexOf(n) || (t[n] = l(t[n]));
                        return t
                    }
                    return "number" == $.type(t) ? t / e.relativeScale * o.relativeScale : t
                },
                o = $.extend(!0, l(e), o, {
                    audience: {
                        viewport: {
                            left: -ROOM_VIEW_WIDTH / 2,
                            width: ROOM_VIEW_WIDTH,
                            height: 2 * ROOM_VIEW_HEIGHT / 3
                        },
                        zIndex: 3
                    }
                }),
                u = {
                    room: e,
                    concert: o
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
                    var e = ["div.room-view", ["div#curtain.screen", ["iframe",
                    {
                        scrolling: "no",
                        frameborder: "none"
                    }]],
                        ["div#stage-background"],
                        ["div#dj-booth"],
                        ["div#dj-table"],
                        ["div#bigboard", ["div#board"],
                            ["div#songboard", ["div#song-details", ["div#songboard-artist"],
                                ["div#songboard-title"],
                                ["div#time-since-start"],
                                ["div#time-left"],
                                ["div#progress-bar", ["div#progress"]]
                            ],
                                ["div#song-add", "Add song to:", ["div.buttons", ["div.btn.queue", ["div.service-name", "tt.fm queue"]],
                                    ["div.btn.amazon", ["div.service-name", "amazon"]],
                                    ["div.btn.itunes", ["div.service-name", "itunes"]],
                                    ["div.btn.lastfm", ["div.service-name", "last.fm"]],
                                    ["div.btn.spotify", ["div.service-name", "spotify"]],
                                    ["div.btn.rdio", ["div.service-name", "rdio"]]
                                ]]
                            ],
                            ["div#awesome-button"],
                            ["div#lame-button"],
                            ["div#awesome-meter", ["div#awesome-needle"]]
                        ],
                        ["div#audience"],
                        ["div.screen.side-screen#left-screen", ["iframe.screen-content",
                        {
                            scrolling: "no",
                            frameborder: "none"
                        }],
                            ["iframe.screen-link",
                            {
                                scrolling: "no",
                                frameborder: "none"
                            }]
                        ],
                        ["div.screen.side-screen#right-screen", ["iframe.screen-content",
                        {
                            scrolling: "no",
                            frameborder: "none"
                        }],
                            ["iframe.screen-link",
                            {
                                scrolling: "no",
                                frameborder: "none"
                            }]
                        ]
                    ];
                    return e
                },
                init: function(e) {
                    this._super(e), this.config = u[this.attributes.type], this.prefix = "room" === this.attributes.type.substring(0, 4) ? "room" : "concert", this.dancerMap = {}, this.listeners = {}, this.djs = {}, this.djsBySpot = [], this.$uGveFa = null, this.$inviteDj = null, this.recordPiles = [], this.taken_dj_map = [-1, -1, -1, -1, -1], this.spotlight_index = -1, this.lastTipsyUserid = null, this.tipsies = {}, this.tipsyCloseTimeouts = {}, this.marquee_texts = {}, this.crowdDancerMap = {}, this.crowdActionsByArea = [], this.crowdActionTimeout = null, this.performCrowdActions = $.proxy(this.performCrowdActions, this), this.roomData = this.attributes.roomData, this.callback = this.attributes.callback, this.positionTourListener = $.proxy(this.positionTourListener, this), this.positionTourDj = $.proxy(this.positionTourDj, this), this.positionTourSongboard = $.proxy(this.positionTourSongboard, this), this.positionTourChat = $.proxy(this.positionTourChat, this), this.positionTourQueue = $.proxy(this.positionTourQueue, this), this.update_songboard = $.proxy(this.update_songboard, this), this.setScreenConfigSrc()
                },
                render: function(e, t) {
                    this._super(e, t), this.$node.css({
                        width: ROOM_VIEW_WIDTH,
                        height: ROOM_VIEW_HEIGHT
                    });
                    var n = this.config.origin,
                        o = this,
                        s = turntable.cjAgpz.section;
                    s || (this.$uGveFa = $("<div>").click(function(e) {
                        e.pageX && e.pageY && o.callback("become_dj", $(this).data("spot"))
                    }).appendTo(this.$node), this.drawDjButton(), this.$inviteDj = $('<div class="invite-dj"><span>Invite DJ</span></div>').hide().click(function() {
                        o.callback("invite_dj")
                    }).appendTo(this.$node));
                    for(var l = 0; this.attributes.numDjSpots > l; ++l) {
                        var u = $('<div class="record-pile"></div>').data("spot", l);
                        this.recordPiles[l] = u;
                        var d = this.djPropOffset(l, "recordPile");
                        u.css({
                            top: n.y + d.y,
                            left: n.x + d.x
                        }).appendTo(this.$node)
                    }
                    var c = this.attributes.crowdControl,
                        h = this.config.djBooth,
                        p = Math.ceil(this.attributes.numDjSpots * h.spotWidth + WIDEST_AVATAR_WIDTH * h.avatarScale),
                        f = -h.djOffset.y;
                    this.djBoothOffset = {
                        x: Math.floor(-p / 2),
                        y: Math.floor(h.djOffset.y - 100 * h.avatarScale)
                    }, this.$djBooth = this.$node.find("#dj-booth").css({
                        position: "absolute",
                        top: n.y + this.djBoothOffset.y,
                        left: n.x + this.djBoothOffset.x
                    }), this.djBooth = new i.Stage(this.$djBooth, p, f, {
                        usePerspective: !1,
                        stageBottomScale: h.avatarScale,
                        cacheFrames: !1,
                        mouseEvents: !1,
                        extraDrawFunction: $.proxy(function(e, t) {
                            var i = this.spotlightOffset,
                                n = this.spotlightRect;
                            i && (t.globalCompositeOperation = "lighter", t.drawImage(this.boardSprite, n.left, n.top, n.width, n.height, i.x, i.y, n.width, n.height), t.globalCompositeOperation = "source-over")
                        }, this)
                    }), this.djBooth.start(), this.djBoothMouseHandler = new r(this.djBooth);
                    for(var m = this.attributes.roomData.metadata && this.attributes.roomData.metadata.djs, g = this.attributes.roomData.metadata.current_dj, v = {}, y = turntable.cjAgpz.userMap, b = turntable.cjAgpz.upvoters, w = {}, _ = 0, S = b.length; S > _; _++) w[b[_]] = !0;
                    if(m) for(var _ = 0, S = m.length; S > _; _++) {
                        var k = m[_];
                        if(v[k] = !0, this.addDj(y[k], _), k === g) {
                            var T;
                            T = c.userMap[k] && c.userMap[k].startTime, this.set_active_dj(_, T)
                        } else if(w[k]) {
                            var T;
                            T = c.userMap[k] && c.userMap[k].startTime, this.update_vote(y[k], "up", T)
                        }
                    }
                    var C = (this.config.audience, "room" === this.attributes.type ? 1 : 2),
                        x = c.areaConfigs[0],
                        M = this.$audience = this.$node.find("#audience");
                    this.crowds = [
                        [],
                        []
                    ], this.crowdAreaRects = [
                        [],
                        []
                    ];
                    for(var O = 0; C > O; O++) for(var _ = 0, S = x.dividers.length - 1; S > _; _++) {
                        var E = s && 1 === O && 1 === _ || !s && 0 === O && 1 === _,
                            D = this.getAreaRect(O, _),
                            I = $('<div class="crowd" />').css({
                                position: "absolute",
                                top: n.y + D.top - D.paddingTop,
                                left: n.x + D.left,
                                "z-index": O + Math.abs(_ - 1),
                                "pointer-events": E ? "" : "none"
                            }),
                            L = new i.Stage(I, D.width, D.height, {
                                stageTopScale: D.topScale,
                                stageBottomScale: D.bottomScale,
                                bottomAlign: !0,
                                paddingTop: D.paddingTop,
                                mouseEvents: E ? !0 : !1,
                                ignoreInitialMouseEvents: !0,
                                ignoreExceptionSelector: ".tooltip"
                            });
                        M.append(I), this.crowds[O][_] = L, this.crowdAreaRects[O][_] = D, L.start()
                    }
                    s ? (this.floor = this.crowds[1][1], this.floorAreaRect = this.crowdAreaRects[1][1]) : (this.floor = this.crowds[0][1], this.floorAreaRect = this.crowdAreaRects[0][1]), this.floorMouseHandler = new a(this.floor);
                    var R = this.attributes.listenerids,
                        A = turntable.cjAgpz.getEntropyForUser;
                    if(R) for(var _ = 0, S = R.length; S > _; _++) {
                        var P = R[_];
                        if(!v[P]) {
                            var F = y[P];
                            if(this.addListener(F, A(F)), w[P]) {
                                var T;
                                T = c.userMap[P] && c.userMap[P].startTime, this.update_vote(F, "up", T)
                            }
                        }
                    }
                    this.createCrowd(), this.$node.on("mouseenter", ".dj-laptop", $.proxy(function(e) {
                        var t = $(e.target).data("userid");
                        this.toggleTipsy(t)
                    }, this));
                    var N = this.config.bigboard;
                    this.$bigboard = this.$node.find("#bigboard").css({
                        top: n.y + N.offset.y,
                        left: n.x + N.offset.x
                    }), this.$songboardArtist = this.$bigboard.find("#songboard-artist"), this.$songboardTitle = this.$bigboard.find("#songboard-title"), this.$needle = this.$bigboard.find("#awesome-needle"), this.boardSprite = util.createImageWithLoader("https://s3.amazonaws.com/static.turntable.fm/images/room/board-sprite-" + this.config.zoomLevel + ".png?cachebuster=1")[0], this.spotlightRect = 0 === this.config.zoomLevel ? {
                        top: 244,
                        left: 264,
                        width: 107,
                        height: 136
                    } : {
                        top: 169,
                        left: 180,
                        width: 72,
                        height: 91
                    }, this.stageCanvas = util.buildTree(["canvas",
                    {
                        width: this.config.stageCanvas.rect.width,
                        height: this.config.stageCanvas.rect.height
                    }]), this.stageContext = this.stageCanvas.getContext("2d"), this.$stageBackground = this.$node.find("#stage-background").css({
                        position: "absolute",
                        top: n.y + this.config.stageCanvas.rect.top,
                        left: n.x + this.config.stageCanvas.rect.left
                    }).append(this.stageCanvas), this.djTableCanvas = util.buildTree(["canvas",
                    {
                        width: this.config.djTableCanvas.rect.width,
                        height: this.config.djTableCanvas.rect.height
                    }]), this.djTableContext = this.djTableCanvas.getContext("2d"), this.$djTable = this.$node.find("#dj-table").css({
                        position: "absolute",
                        top: n.y + this.config.djTableCanvas.rect.top,
                        left: n.x + this.config.djTableCanvas.rect.left
                    }).append(this.djTableCanvas), this.drawStage(0), this.$node.addClass("zoom-" + this.config.zoomLevel), this.$node.on("click", ".avatar-tipsy div", function() {
                        var e = $(this).closest(".avatar-tipsy").data("userid");
                        e && o._hideTipsy(e)
                    });
                    var B = this.$node.find("#awesome-button").click(function(e) {
                        e.pageX && e.pageY && 5e3 > turntable.WvZjta() && (RFmAZA.djsBySpot.length > 0 && !RFmAZA.currentSong ? turntable.cjAgpz.loadRoomState() : turntable.cjAgpz.currentSong && (RFmAZA.callback("upvote"), $("#awesome-button").addClass("selected"), $("#lame-button").removeClass("selected")))
                    }),
                        j = this.$node.find("#lame-button").click(function(e) {
                            turntable.cjAgpz.currentSong && e.pageX && e.pageY && 5e3 > turntable.WvZjta() && (RFmAZA.callback("downvote"), $("#awesome-button").removeClass("selected"), $("#lame-button").addClass("selected"))
                        });
                    B.add(j).on("mousedown", function(e) {
                        e.preventDefault()
                    });
                    var U = this.$node.find("#song-add");
                    this.$queueAdd = U.find(".queue").click(function() {
                        turntable.cjAgpz.currentSong.snaggable !== !1 && RFmAZA.callback("add_song_to", "queue")
                    }), U.find(".amazon").click(function() {
                        RFmAZA.callback("add_song_to", "amazon")
                    }), U.find(".itunes").click(function() {
                        RFmAZA.callback("add_song_to", "itunes")
                    }), U.find(".lastfm").click(function() {
                        RFmAZA.callback("add_song_to", "lastfm")
                    }), U.find(".spotify").click(function() {
                        RFmAZA.callback("add_song_to", "spotify")
                    }), U.find(".rdio").click(function() {
                        RFmAZA.callback("add_song_to", "rdio")
                    });
                    var H = $.extend({}, this.config.leftScreen.rect),
                        V = $.extend({}, this.config.rightScreen.rect),
                        q = $.extend({}, this.config.curtain.rect),
                        n = this.config.origin;
                    $.each([H, V, q], function(e, t) {
                        t.top += n.y, t.left += n.x
                    }), this.$node.find("#left-screen").css(H), this.$node.find("#left-screen-link").css(H), this.$node.find("#right-screen").css(V), this.$node.find("#right-screen-link").css(V), this.$node.find("#curtain").css(q), this.drawScreens(), util.detectIEVersion() && $("#shadow").remove(), this.initialRenderDone = !0
                },
                cleanup: function() {
                    for(var e = this.crowds, t = 0, i = e.length; i > t; t++) for(var n = e[t], o = 0, s = n.length; s > o; o++) n[o].stop(), n[o].emptyFrameCache();
                    this.djBooth.stop()
                },
                drawStage: function(e, t) {
                    if(e || (e = 0), t || e !== this.lightLevel) {
                        this.$node.removeClass("light-level-" + this.lightLevel).addClass("light-level-" + e), this.lightLevel = e;
                        var i = this.getNormalizedScreenConfig("left") ? !0 : !1,
                            n = "https://s3.amazonaws.com/static.turntable.fm/roommanager_assets/props/zoom-" + this.config.zoomLevel + "/",
                            o = [],
                            s = function(e) {
                                var t = util.createImageWithLoader(n + e);
                                return o.push(t[1]), t[0]
                            },
                            r = s("floor.jpg"),
                            a = s("speakers-right.png"),
                            l = s("speakers-left.png"),
                            u = s("stage.png"),
                            d = (s("dj-table.png"), "lights" + e + "Add"),
                            c = "lights" + e + "Normal",
                            h = s("screen/screen.png");
                        if(i) var p = "screen/lights" + e + "Add",
                            f = "screen/lights" + e + "Normal";
                        else var p = "no-screen/lights" + e + "Add",
                            f = "no-screen/lights" + e + "Normal";
                        var m = s(p + ".png"),
                            g = s(f + ".png"),
                            v = this.getNormalizedScreenConfig("curtain"),
                            y = s("curtain.png?cachebuster=1");
                        $.when.apply(this, o).done($.proxy(function() {
                            var t = this.stageCanvas,
                                i = t.width,
                                n = t.height,
                                o = this.stageContext,
                                s = this.config.stageCanvas.rect,
                                p = this.config.stageCanvas.props,
                                f = {};
                            if($.each(p, function(e, t) {
                                var i = $.extend({}, t);
                                i.x -= s.left, i.y -= s.top, f[e] = i
                            }), o.clearRect(0, 0, i, n), o.drawImage(r, f.floor.x, f.floor.y), o.drawImage(a, f.rightSpeakerInner.x, f.rightSpeakerInner.y), o.drawImage(a, f.rightSpeakerOuter.x, f.rightSpeakerOuter.y), o.drawImage(l, f.leftSpeakerInner.x, f.leftSpeakerInner.y), o.drawImage(l, f.leftSpeakerOuter.x, f.leftSpeakerOuter.y), v || o.drawImage(y, f.curtain.x, f.curtain.y), o.drawImage(u, f.stage.x, f.stage.y), this.getNormalizedScreenConfig("left") && o.drawImage(h, f.leftScreen.x, f.leftScreen.y), this.getNormalizedScreenConfig("right") && o.drawImage(h, f.rightScreen.x, f.rightScreen.y), v && util.fullCanvasCompositionSupport()) {
                                var b = $.extend({}, this.config.curtain.rect);
                                b.top -= s.top, b.left -= s.left;
                                var w = util.buildTree(["canvas",
                                {
                                    width: b.width,
                                    height: b.height
                                }]);
                                w.getContext("2d").drawImage(t, -b.left, -b.top), o.globalCompositeOperation = "lighter", o.drawImage(m, f[d].x, f[d].y);
                                var _ = util.buildTree(["canvas",
                                {
                                    width: b.width,
                                    height: b.height
                                }]),
                                    S = _.getContext("2d");
                                S.drawImage(t, -b.left, -b.top), S.globalCompositeOperation = "destination-in", S.drawImage(w, 0, 0);
                                var k = util.buildTree(["canvas",
                                {
                                    width: b.width,
                                    height: b.height
                                }]),
                                    T = k.getContext("2d");
                                T.drawImage(t, -b.left, -b.top), T.globalCompositeOperation = "destination-out", T.drawImage(w, 0, 0), o.clearRect(b.left, b.top, b.width, b.height), o.drawImage(_, b.left, b.top), o.globalAlpha = .4, o.drawImage(k, b.left, b.top), o.globalAlpha = 1
                            } else o.globalCompositeOperation = "lighter", o.drawImage(m, f[d].x, f[d].y);
                            o.globalCompositeOperation = "source-over", o.drawImage(g, f[c].x, f[c].y);
                            var C = this.$node.siblings("#shadow");
                            0 !== C.length || util.detectIEVersion() || (this.$node.after(util.buildTree(["div#shadow"])), C = this.$node.siblings("#shadow")), C.attr("class", "light-level-" + e)
                        }, this)), this.drawDjTable(e)
                    }
                },
                drawDjTable: function(e) {
                    var t = "https://s3.amazonaws.com/static.turntable.fm/roommanager_assets/props/zoom-" + this.config.zoomLevel + "/",
                        i = [],
                        n = function(e) {
                            var n = util.createImageWithLoader(t + e);
                            return i.push(n[1]), n[0]
                        },
                        o = this.getNormalizedScreenConfig("left") ? !0 : !1,
                        s = "lights" + e + "Add",
                        r = n("dj-table.png");
                    if(o) var a = "screen/lights" + e + "Add";
                    else var a = "no-screen/lights" + e + "Add";
                    var l = n(a + ".png");
                    $.when.apply(this, i).done($.proxy(function() {
                        var e = this.djTableCanvas,
                            t = this.djTableContext,
                            i = this.config.djTableCanvas.rect,
                            n = this.config.stageCanvas.props;
                        t.clearRect(0, 0, e.width, e.height), t.drawImage(r, n.djTable.x - i.left, n.djTable.y - i.top), util.fullCanvasCompositionSupport() && (t.globalCompositeOperation = "lighter", t.drawImage(l, n[s].x - i.left, n[s].y - i.top), t.globalCompositeOperation = "destination-in", t.drawImage(r, n.djTable.x - i.left, n.djTable.y - i.top), t.globalCompositeOperation = "source-over")
                    }, this))
                },
                setScreenConfigSrc: function(e) {
                    this.screens = e || this.roomData.metadata.screens
                },
                getScreenConfig: function(e) {
                    return this.screens[e]
                },
                getNormalizedScreenConfig: function(e) {
                    var t = this.screens,
                        i = this.config.zoomLevel,
                        n = 1 - i,
                        o = t[e],
                        s = !1;
                    if(o || ("left" === e ? o = t.right || {} : "right" === e && (o = t.left || {}), s = !0), o) {
                        var r = o[i] || o[n];
                        if(r) return {
                            type: o.type,
                            src: r,
                            link: o.link,
                            mirror: s
                        }
                    }
                },
                drawScreens: function(e) {
                    var t = this,
                        i = !1;
                    $.each(["left", "right"], function(n, o) {
                        var s = t.getNormalizedScreenConfig(o),
                            r = t.$node.find("#" + o + "-screen"),
                            a = r.find(".screen-link");
                        t.drawScreen(r, s, e), s ? (i = !0, s.link ? a.attr("src", "https://s3.amazonaws.com/static.turntable.fm/link.html?href=" + s.link).show() : a.hide()) : a.hide()
                    }), i ? $("html").addClass("side-screens-visible") : $("html").removeClass("side-screens-visible");
                    var n = this.getNormalizedScreenConfig("curtain"),
                        o = this.$node.find("#curtain");
                    this.drawScreen(o, n)
                },
                drawScreen: function(e, t, i) {
                    t ? (t.type && "image" !== t.type ? e.css("background-image", "").find("iframe").attr("src", t.src).show() : (e.css("background-image", "url(" + t.src + ")"), e.find(".screen-content").hide()), e.show()) : (e.css("background-image", "").find("iframe").attr("src", ""), i || e.hide())
                },
                getScale: function(e) {
                    var t = this.config.audience;
                    return(e - t.rect.top) / t.rect.height * (t.backScale - t.frontScale) + t.frontScale
                },
                getAreaRect: function(e, t) {
                    var i = this.config.audience,
                        n = this.attributes.crowdControl.areaConfigs[e],
                        o = this.projectFloorLocation({
                            x: 0,
                            y: n.top
                        }).y,
                        s = this.projectFloorLocation({
                            x: 0,
                            y: n.bottom
                        }).y,
                        r = this.getScale(o),
                        a = this.getScale(s),
                        l = Math.min(this.projectFloorLocation({
                            x: n.dividers[t](n.top),
                            y: n.top
                        }).x - THINNEST_AVATAR_WIDTH * r, this.projectFloorLocation({
                            x: n.dividers[t](n.bottom),
                            y: n.bottom
                        }).x - THINNEST_AVATAR_WIDTH * a);
                    l = Math.max(l, i.viewport.left);
                    var u = Math.max(this.projectFloorLocation({
                        x: n.dividers[t + 1](n.top),
                        y: n.top
                    }).x + THINNEST_AVATAR_WIDTH * r, this.projectFloorLocation({
                        x: n.dividers[t + 1](n.bottom),
                        y: n.bottom
                    }).x + THINNEST_AVATAR_WIDTH * a);
                    u = Math.min(u, i.viewport.left + i.viewport.width);
                    var d;
                    d = 0 === e ? 150 * r : r * SHORTEST_AVATAR_HEIGHT;
                    var c = {
                        top: o,
                        left: l,
                        height: s - o,
                        width: u - l,
                        topScale: r,
                        bottomScale: a,
                        paddingTop: d
                    };
                    return c
                },
                createCrowd: function() {
                    for(var e, t, i = this.attributes.crowdControl, n = i.crowdMembers, o = i.crowdMemberMap, s = 0, r = n.length; r > s; s++) e = n[s], t = o[e], this.renderCrowdMember(t, !0)
                },
                renderCrowdMember: function(e, n) {
                    if(e.locationData) {
                        var o = e.locationData,
                            s = o.area,
                            r = this.crowds[s[0]][s[1]],
                            a = this.crowdAreaRects[s[0]][s[1]];
                        if(r) {
                            var l = (u[this.attributes.type].audience, e.userid),
                                d = e.avatarid,
                                o = this.projectFloorLocation(o),
                                c = o.x - a.left,
                                h = o.y - a.top,
                                p = avatars[e.avatarid].size[1],
                                f = a.topScale,
                                m = Math.max(0, (p - SHORTEST_AVATAR_HEIGHT) * f);
                            h = Math.max(h, m + 5);
                            var g = new i.BlackSwanDancer(l, d, "back", !0, !0, e.custom_avatar),
                                v = function(i) {
                                    if(i.addDancer(g, c, h), this.crowdDancerMap[l] = g, e.bopping) {
                                        var n = e.startTime;
                                        g.pushAnimation(t.AvatarAnimation.getAnimation(t.animations.rock)), g.next(n), g.start(n)
                                    }
                                };
                            n ? v.call(this, r) : this.pushCrowdAction(s, v)
                        }
                    }
                },
                removeCrowdMember: function(e) {
                    if(e.locationData) {
                        var t = e.locationData.area,
                            i = this.crowds[t[0]][t[1]],
                            n = e.userid;
                        i && i.removeDancer(n), delete this.crowdDancerMap[n]
                    }
                },
                calculateNumDancersRendered: function() {
                    var e = this.numDancersRendered = this.attributes.crowdControl.listenerids.length + this.attributes.crowdControl.numCrowdMembers;
                    return e
                },
                updateTotalListeners: function(e) {
                    this.calculateNumDancersRendered();
                    var t = parseInt(e) - this.numDancersRendered,
                        i = this.attributes.crowdControl;
                    if(Math.abs(t) > CROWD_UPDATE_THRESHOLD) {
                        if(0 > t) for(var n = -t; n > 0;) {
                            var o = i.getRandom(i.crowdMembers);
                            if(void 0 === o) break;
                            var s = i.crowdMemberMap[o];
                            s && this.removeCrowdMember(s), i.removeMember(o), n--, this.numDancersRendered--
                        } else for(var r = t; r > 0;) {
                            var a = i.makeMember();
                            this.renderCrowdMember(a), r--, this.numDancersRendered++
                        }
                        for(var l = i.listenerids.length + i.crowdMemberidsInSection.length - i.sectionConfig.capacity; l > 0;) {
                            var o = i.getRandom(i.crowdMemberidsInSection);
                            if(!o) break;
                            var s = i.crowdMemberMap[o];
                            s && this.removeCrowdMember(s), i.removeMember(o);
                            var a = i.makeMember(!0);
                            this.renderCrowdMember(a), l--
                        }
                    }
                },
                updateCrowdVotes: function(e) {
                    var i, n = this.attributes.crowdControl,
                        o = parseInt(e) - n.crowdBoppers.length;
                    if(Math.abs(o) > CROWD_UPDATE_THRESHOLD) if(0 > o) for(var s = -o; s > 0 && (i = n.getRandom(n.crowdBoppers), void 0 !== i);) {
                        var r = this.crowdDancerMap[i];
                        r && this.pushCrowdAction(n.crowdMemberMap[i].locationData.area, function(e) {
                            return function() {
                                e.stop()
                            }
                        }(r)), n.setNotBopping(i), s--
                    } else for(var r, a = o; a > 0 && (i = n.getRandom(n.crowdNotBoppers), void 0 !== i);) r = this.crowdDancerMap[i], r && this.pushCrowdAction(n.crowdMemberMap[i].locationData.area, function(e, i) {
                        return function() {
                            var o = Date.now();
                            e.pushAnimation(t.AvatarAnimation.getAnimation(t.animations.rock)), e.next(o), e.start(o), n.setBopping(i, o)
                        }
                    }(r, i)), a--
                },
                crowdActionsByArea: [],
                crowdActionTimeout: null,
                pushCrowdAction: function(e, t) {
                    for(var i = this.crowdActionsByArea, n = !1, o = 0, s = i.length; s > o; o++) {
                        var r = i[o];
                        if(r.area[0] === e[0] && r.area[1] === e[1]) {
                            r.actions.push(t), n = !0;
                            break
                        }
                    }
                    n || i.push({
                        area: e,
                        actions: [t]
                    }), this.crowdActionTimeout || (this.crowdActionTimeout = window.setTimeout(this.performCrowdActions, 300))
                },
                performCrowdActions: function() {
                    var e = this.crowdActionsByArea.splice(0, 1)[0];
                    if(e) for(var t = e.area, i = e.actions, n = this.crowds[t[0]][t[1]], o = 0, s = i.length; s > o; o++) i[o].call(this, n);
                    this.crowdActionTimeout = null, this.crowdActionsByArea.length > 0 && (this.crowdActionTimeout = window.setTimeout(this.performCrowdActions, 1800))
                },
                updateStage: function(e) {
                    var t = this.numDancersAtLastStageUpdate,
                        i = this.numDancersRendered;
                    !t || Math.abs(i - t) > 10 ? this.numDancersAtLastStageUpdate = i : i = t;
                    var n = 0;
                    i > 400 ? n = 3 : i > 200 ? n = 2 : i > 50 && (n = 1);
                    var o = this.roomData.metadata;
                    o.upvotes / o.listeners > .8 && n++, this.drawStage(Math.min(3, n), e)
                },
                moveNeedle: function(e) {
                    var t = 70 * (2 * e - 1);
                    t > 10 ? this.$needle.removeClass("red").addClass("green") : -10 > t ? this.$needle.removeClass("green").addClass("red") : this.$needle.removeClass("green").removeClass("red"), this.$needle.css("transform", "rotate(" + t + "deg)")
                },
                getExistingAvatarid: function(e) {
                    return e = "" + e, e in avatars ? e : "" + Math.ceil(8 * Math.random())
                },
                showYouMarker: function(e) {
                    var t = this.getDancerBoundingBox(e);
                    if(t) {
                        var i = $(util.buildTree(["div.you-marker"])).css({
                            top: t.top,
                            left: (t.left + t.right) / 2
                        }).text("YOU").appendTo(this.$node);
                        window.setTimeout(function() {
                            i.remove()
                        }, 3e3)
                    }
                },
                addListener: function(e) {
                    var t = this.floor;
                    if(!this.listeners[e.userid]) {
                        var n = this.getExistingAvatarid(e.avatarid);
                        e.avatarid = n;
                        var o = this.attributes.crowdControl.generateUserLocation(e),
                            s = this.projectFloorLocation(o),
                            r = e.userid,
                            a = this.dancerMap[r];
                        (!a || a.avatarid != n || "back" != a.state || e.custom_avatar && e.custom_avatar != a.data) && (a = new i.BlackSwanDancer(r, n, "back", !0, !1, e.custom_avatar), this.dancerMap[r] = a);
                        var l = this.translateToFloorStageCoordinates(e, s);
                        t.addDancer(a, l[0], l[1]), this.listeners[r] = a, this.numDancersRendered++, this.initialRenderDone && this.fixDancerSpacing()
                    }
                    if(turntable.user && turntable.user.id == r) {
                        var u = (t.dancerMap[r], t.$container, $.proxy(this.useModalOrYouMarker, this)),
                            d = function() {
                                var e = t.getDancerBoundingBox(r);
                                if(e) u(r);
                                else {
                                    var i = r + ".hasBoundingBox";
                                    $(window).one(i, function() {
                                        u(r)
                                    })
                                }
                            };
                        this.$node.parent().length ? d() : this.attributes.$eventBus.one("RoomView.visible", d)
                    }
                    var c = this.attributes.crowdControl;
                    c.userMap[r] || (c.userMap[r] = {})
                },
                removeListener: function(e) {
                    var t = e.userid,
                        i = this.floor,
                        n = this.floorAreaRect;
                    n.topScale, delete this.listeners[t], i.removeDancer(t), this.numDancersRendered--, delete this.attributes.crowdControl.userMap[t], this.fixDancerSpacing()
                },
                fixDancerSpacing: function() {
                    for(var e, t, i, n, o, s = this.attributes.crowdControl, r = s.listenerids, a = turntable.cjAgpz.userMap, l = (this.config.audience.rect.left, this.config.audience.rect.top, this.floorAreaRect), u = (l.topScale, this.floor), d = 0, c = r.length; c > d; d++) t = r[d], e = a[t], i = s.generateUserLocation(e), n = this.projectFloorLocation(i), o = this.translateToFloorStageCoordinates(e, n), u.moveDancer(t, o[0], o[1], d !== c - 1)
                },
                getDancerBoundingBox: function(e) {
                    for(var t = [this.floor, this.djBooth], i = 0; t.length > i; i++) {
                        var n = t[i];
                        if(n.hasDancer(e)) {
                            var o = n.getDancerBoundingBox(e);
                            if(o) {
                                var s = n.$el.offsetParent().position();
                                return o.left += s.left, o.right += s.left, o.top += s.top, o.bottom += s.top, o
                            }
                        }
                    }
                },
                projectFloorLocation: function(e) {
                    var t = this.config.audience,
                        i = $.extend({}, t.rect),
                        n = e.x,
                        o = e.y,
                        s = t.frontScale,
                        r = t.backScale,
                        a = -(i.left + i.width / 2) * (r - s) / r;
                    n = 2 * n / this.attributes.crowdControl.crowdConfig.width, o /= 2, o = Math.pow(o * (Math.sqrt(1.5) - Math.sqrt(.5)) + Math.sqrt(.5), 2) - .5;
                    var l = i.width / 2,
                        u = s / r,
                        d = (u + (1 - u) * o) * l,
                        c = n * d + (1 - o) * a;
                    return n = Math.floor(i.left + l + c), o = Math.floor(o * i.height + i.top), {
                        x: n,
                        y: o
                    }
                },
                translateToFloorStageCoordinates: function(e, t) {
                    var i = (this.floor, this.floorAreaRect),
                        n = this.getExistingAvatarid(e.avatarid),
                        o = e.custom_avatar ? e.custom_avatar : avatars[n],
                        s = i.paddingTop,
                        r = o.size[1],
                        a = i.topScale,
                        l = i.bottomScale,
                        u = i.height,
                        d = (s - a * r) / ((l - a) * r / u - 1),
                        c = Math.floor(t.x - i.left),
                        h = Math.floor(Math.max(t.y - i.top, d + 5));
                    return [c, h]
                },
                useModalOrYouMarker: function(e) {
                    var t = $.cookie("turntableShowBigWelcome"),
                        i = turntable.playlist.queue.attributes.songids.length;
                    t || i ? this.showYouMarker(e) : (util.buildTree([n.TourOverlay,
                    {
                        childNodes: [this.layouts.welcomeViewOne(this.positionTourListener), this.layouts.welcomeViewTwo(this.positionTourDj), this.layouts.welcomeViewThree(this.positionTourSongboard), this.layouts.welcomeViewFour(this.positionTourChat), this.layouts.welcomeViewFive(!1, this.positionTourQueue)],
                        doneCallback: function() {
                            $.cookie("turntableShowBigWelcome", !0, {
                                path: "/",
                                expires: 365
                            })
                        }
                    }], this), this.tourOverlay.show())
                },
                positionTourListener: function(e) {
                    var t = this.getDancerBoundingBox(turntable.user.id),
                        i = this.$node.offset(),
                        n = {
                            x: -176,
                            y: -250
                        };
                    e.css({
                        top: t.top + +i.top + n.y,
                        left: (t.left + t.right) / 2 + i.left + n.x
                    })
                },
                positionTourDj: function(e) {
                    var t = this.spotOffset(this.rightmostSpot() + 1),
                        i = this.config.origin,
                        n = this.$node.offset(),
                        o = {
                            x: -50,
                            y: -40
                        };
                    1 === this.config.zoomLevel && (o.y = -21), e.css({
                        top: o.y + n.top + i.y + t.y,
                        left: o.x + n.left + i.x + t.x
                    })
                },
                positionTourSongboard: function(e) {
                    var t = this.config.bigboard.offset,
                        i = this.config.origin,
                        n = this.$node.offset(),
                        o = {
                            x: -133,
                            y: 30
                        };
                    e.css({
                        top: o.y + n.top + i.y + t.y,
                        left: o.x + n.left + i.x
                    })
                },
                positionTourChat: function(e) {
                    $(".chat-container .floating-panel-tab").click();
                    var t = $("#chat-form").offset(),
                        i = {
                            x: -43,
                            y: -175
                        };
                    e.css({
                        top: i.y + t.top,
                        left: i.x + t.left
                    })
                },
                positionTourQueue: function(e) {
                    $("#playlist-container .floating-panel-tab").click();
                    var t = $("#songs").offset(),
                        i = {
                            x: -270,
                            y: -38
                        };
                    "dual" === turntable.cjAgpz.layout && (i.x = 263, e.addClass("right")), e.css({
                        top: i.y + t.top,
                        left: i.x + t.left
                    })
                },
                showTipsy: function(e, t) {
                    if(this.lastTipsyUserid == e || e in this.tipsies) {
                        var i = this.tipsyCloseTimeouts[e];
                        return i && (window.clearTimeout(i), delete this.tipsyCloseTimeouts[e]), void 0
                    }
                    this.lastTipsyUserid && this.hideLastTipsy(), this._showTipsy(e, t)
                },
                toggleTipsy: function(e, t) {
                    var i = !1,
                        n = this.lastTipsyUserid;
                    n && (this.hideLastTipsy(), n == e && (i = !0)), e in this.tipsies && (this._hideTipsy(e), i = !0), i || this._showTipsy(e, t)
                },
                _showTipsy: function(e, t) {
                    var i, n, o, s = !1;
                    if(this.floor.dancerMap.hasOwnProperty(e)) {
                        i = this.floor;
                        var r = (i.dancerMap[e].dancer, this.getDancerBoundingBox(e));
                        n = (r.left + r.right) / 2, o = r.top
                    } else {
                        if(!this.djBooth.dancerMap.hasOwnProperty(e)) return;
                        i = this.djBooth, s = !0;
                        var a = this.roomData.metadata.djs.indexOf(e),
                            l = this.djPropOffset(a, "tipsy"),
                            u = this.config.origin;
                        o = u.y + l.y, n = u.x + l.x
                    }
                    t || (this.lastTipsyUserid = e);
                    var d, c, h = {
                        "margin-left": "-65px"
                    };
                    s || ($.extend(h, {
                        position: "absolute",
                        bottom: 0
                    }), c = "up");
                    var p = $(this.makeTooltip(e, s, c)).css(h).data("userid", e);
                    s && p.addClass("is-dj"), this.tipsies[e] = $("<div />").append(p).css({
                        position: "absolute",
                        top: o,
                        left: n,
                        opacity: 1,
                        "z-index": 10
                    }).on("mouseenter", function() {
                        window.clearTimeout(d), delete RFmAZA.tipsyCloseTimeouts[e], $(this).on("mouseleave", function(t) {
                            if(!s) {
                                var n = t.toElement || t.relatedTarget,
                                    o = $(n),
                                    r = o.closest("canvas");
                                if(r.length) {
                                    var a = r[0];
                                    if(a == i.canvas) {
                                        var l = i.$el.offset(),
                                            u = t.pageX - l.left,
                                            c = t.pageY - l.top,
                                            h = i.getDancerFromCoordinates(u, c);
                                        if(h && h.dancer.dancerid == e) return
                                    }
                                }
                            }
                            var p = $(this);
                            p.off("mouseleave"), d = window.setTimeout(function() {
                                delete RFmAZA.tipsyCloseTimeouts[e], RFmAZA._hideTipsy(e), RFmAZA.lastTipsyUserid == e && (RFmAZA.lastTipsyUserid = null)
                            }, 500), RFmAZA.tipsyCloseTimeouts[e] = d
                        })
                    }).appendTo(this.$node)
                },
                _hideTipsy: function(e) {
                    var t = this.tipsies[e];
                    t && (t.css("opacity", 0), window.setTimeout(function() {
                        t.remove()
                    }, 250), delete this.tipsies[e])
                },
                hideLastTipsy: function() {
                    this.lastTipsyUserid && (this._hideTipsy(this.lastTipsyUserid), this.lastTipsyUserid = null)
                },
                speak: function(e, t) {
                    var i = e.userid,
                        n = this.getDancerBoundingBox(i);
                    if(n) {
                        t = util.emojify(util.safeText(util.stripComboDiacritics(t)));
                        var o = $(util.buildTree(["div.speech-bubble", ["div.speech-text"]]));
                        o.css({
                            top: n.top - 10,
                            left: (n.left + n.right) / 2,
                            visibility: "hidden",
                            opacity: 0
                        }).appendTo(this.$node).find(".speech-text").html(t), window.setTimeout(function() {
                            o.css({
                                "margin-top": -o.height(),
                                visibility: "visible",
                                opacity: 1
                            })
                        }), setTimeout(function() {
                            o.css("opacity", 0), window.setTimeout(function() {
                                o.remove()
                            }, 250)
                        }, 2e3)
                    }
                },
                spotOffset: function(e) {
                    var t = this.config.djBooth,
                        i = t.spotWidth * this.attributes.numDjSpots,
                        n = -i / 2,
                        o = n + (e + .5) * t.spotWidth;
                    return {
                        x: o,
                        y: 0
                    }
                },
                djPropOffset: function(e, t) {
                    t += "Offset";
                    var i = this.config.djBooth,
                        n = this.spotOffset(e);
                    return n.x += i[t].x, n.y += i[t].y, n
                },
                addDj: function(e, t) {
                    var n = this.getExistingAvatarid(e.avatarid),
                        o = e.userid,
                        r = this.dancerMap[o],
                        a = this.attributes.crowdControl;
                    (!r || r.avatarid != n || "front" != r.state || e.custom_avatar && e.custom_avatar != r.data) && (r = new i.BlackSwanDancer(o, n, "front", !0, !1, e.custom_avatar), this.dancerMap[o] = r);
                    var l = this.djBooth.config.stageBottomScale,
                        u = new Date;
                    "4e08f595a3f7517d1204e33c" == e.userid && 11 == u.getDate() && 0 == u.getMonth() ? e.laptop = "cake" : "4f49105da3f75128a7000db9" == turntable.cjAgpz.roomid && (e.laptop = "intel");
                    var d = this.djPropOffset(t, "laptop"),
                        c = this.config.origin,
                        h = this.config.djBooth,
                        p = h.laptopDimensions,
                        f = util.buildTree(["div.dj-laptop",
                        {
                            style: {
                                top: c.y + d.y,
                                left: c.x + d.x,
                                width: p.x,
                                height: p.y,
                                background: "url(" + s["laptop_" + e.laptop] + ") bottom left no-repeat",
                                "background-size": "contain"
                            }
                        }]),
                        m = $(f).data("userid", o).attr("data-userid", o).appendTo(this.$node);
                    $(document).trigger("drawDjLaptop", [o, p, h.laptopScale, m]);
                    var g = this.djPropOffset(t, "pointDisplay"),
                        v = $('<div class="point_display"></div>').css({
                            top: c.y + g.y,
                            left: c.x + g.x,
                            "z-index": 5
                        }).hide().appendTo(this.$node),
                        y = {
                            x: this.spotOffset(t).x - r.data.size[0] * l / 2,
                            y: Math.floor(d.y - r.data.ll * l + 3)
                        };
                    return this.djBooth.addDancer(r, y.x - this.djBoothOffset.x, y.y - this.djBoothOffset.y), this.djsBySpot[t] = [o, r, m, v, e], this.djs[o] = [r, m], this.shuffleDjSpots(t, 1), this.numDancersRendered++, a.userMap[o] || (a.userMap[o] = {}), r
                },
                removeDj: function(e) {
                    var t = this.djsBySpot[e];
                    if(t) {
                        this.djBooth.removeDancer(t[0]);
                        var i = this.djsBySpot[e],
                            n = i[0];
                        delete this.djs[i[0]], delete this.djsBySpot[e], t[2].remove(), t[3].remove(), this.shuffleDjSpots(e, -1), this.numDancersRendered--, delete this.attributes.crowdControl.userMap[n], this._hideTipsy(n)
                    }
                },
                rightmostSpot: function() {
                    for(var e = this.taken_dj_map.length; e >= 0; --e) if(1 == this.taken_dj_map[e]) return e;
                    return -1
                },
                drawDjButton: function() {
                    var e = turntable.cjAgpz.section,
                        t = this.rightmostSpot() + 1;
                    if(!e) {
                        var i, n, o, s = this.config.origin;
                        1 == this.roomData.metadata.dj_reservation ? (n = "reserved-dj", o = "Reserved", i = this.djPropOffset(t, "reservedButton")) : (n = "become-dj", o = "Play Music", i = this.djPropOffset(t, "djButton")), this.$uGveFa.html(o).data("spot", t).removeClass("reserved-dj become-dj").addClass(n).css({
                            top: s.y + i.y,
                            left: s.x + i.x
                        })
                    }
                },
                shuffleDjSpots: function(e, t) {
                    this.taken_dj_map[e] = t;
                    var i = this.rightmostSpot() + 1,
                        n = turntable.cjAgpz.section;
                    n || (this.$uGveFa.hide(), this.$inviteDj.hide());
                    for(var o = this.attributes.numDjSpots, s = 0; o > s; ++s) this.recordPiles[s].hide();
                    if(this.attributes.numDjSpots > i) {
                        for(var s = i; o > s; ++s)(s !== e || -1 === t) && this.recordPiles[s].show();
                        if(!n) {
                            if(this.djs[turntable.user.id]) var r = this.$inviteDj;
                            else var r = this.$uGveFa;
                            var a, l = this.config.origin;
                            a = 1 != this.roomData.metadata.dj_reservation || this.djs[turntable.user.id] ? this.djPropOffset(i, "djButton") : this.djPropOffset(i, "reservedButton"), r.data("spot", i).css({
                                top: l.y + a.y,
                                left: l.x + a.x
                            }).show()
                        }
                    }
                },
                set_dj_points: function(e) {
                    this.current_dj && this.current_dj[3].html(util.commafy(e) + " points").show()
                },
                set_active_dj: function(e, i) {
                    var n = this.djsBySpot[e];
                    if(n) {
                        var o, s = n[1],
                            r = s.avatarid,
                            a = n[4];
                        a.custom_avatar ? a.custom_avatar.animations && (o = a.custom_avatar.animations.bob) : avatars[r].animations && (o = avatars[r].animations.bob), o = o || t.animations.bob, s.pushAnimation(t.AvatarAnimation.getAnimation(o)), s.next(), s.start(i), this.current_dj = n, this.set_dj_points(n[4].points), this.spotlightOffset = this.djPropOffset(e, "spotlight"), this.spotlightOffset.x -= this.djBoothOffset.x, this.spotlightOffset.y -= this.djBoothOffset.y
                    }
                },
                stop_active_dj: function() {
                    this.current_dj && (this.current_dj[1].stop(), this.current_dj[3].hide())
                },
                loadingMessages: ["the bits are breeding", "go ahead - hold your breath", "at least you're not on hold", "we're testing your patience", "as if you had any other choice", "don't think of purple hippos", "follow the white rabbit", "reticulating splines", "frobulating widgets", "pc load letter"],
                loadingsong: function(e) {
                    LOG("loadingsong"), this.nosong(), this.set_active_dj(e), this.$songboardArtist.text("Loading"), this.$songboardTitle.text(this.loadingMessages[Math.floor(Math.random() * this.loadingMessages.length)])
                },
                newsong: function(e, t, i, n, o) {
                    LOG("newsong"), t = util.cleanText(t), i = util.cleanText(i), turntable.current_artist = t, turntable.current_title = i, this.set_active_dj(e);
                    var s = Date.now() / 1e3,
                        r = s + n;
                    this.currentSong = {
                        start: Date.now(),
                        end: r,
                        artist: t,
                        title: i
                    }, this.update_songboard(), this.$bigboard.addClass("song-playing"), o === !1 ? this.$queueAdd.addClass("unavailable").find(".service-name").text("unavailable") : this.$queueAdd.removeClass("unavailable").find(".service-name").text("tt.fm queue"), ROOM_INTERVAL && clearInterval(ROOM_INTERVAL), ROOM_INTERVAL = setInterval(this.update_songboard, 1e3)
                },
                nosong: function() {
                    LOG("nosong"), ROOM_INTERVAL && (clearInterval(ROOM_INTERVAL), ROOM_INTERVAL = null), this.clear_marquees(), $("#awesome-button").removeClass("selected"), $("#lame-button").removeClass("selected"), this.userLastVote = null, this.stop_active_dj();
                    for(var e in this.listeners) {
                        var t = this.listeners[e];
                        t && t.stop()
                    }
                    for(var e in this.djs) {
                        var i = this.djs[e];
                        i && i[0].stop()
                    }
                    this.updateCrowdVotes(0), this.moveNeedle(.5), delete this.spotlightOffset, delete this.currentSong, this.$songboardArtist.text(""), this.$songboardTitle.text(""), this.$bigboard.removeClass("song-playing")
                },
                resetVoteButtons: function() {
                    var e = this.userLastVote;
                    "up" === e ? ($("#awesome-button").addClass("selected"), $("#lame-button").removeClass("selected")) : "down" === e ? ($("#awesome-button").removeClass("selected"), $("#lame-button").addClass("selected")) : ($("#awesome-button").removeClass("selected"), $("#lame-button").removeClass("selected"))
                },
                update_vote: function(e, i, n) {
                    var o = e.userid,
                        s = this.listeners[o],
                        r = this.attributes.crowdControl;
                    s && ("up" == i ? (s.pushAnimation(t.AvatarAnimation.getAnimation(t.animations.rock)), s.next(), s.start(n), r.setBopping(o, s.startTime)) : s.stop());
                    var a = this.djs[o];
                    if(a) {
                        var s = a[0];
                        "up" == i ? (s.pushAnimation(t.AvatarAnimation.getAnimation(t.animations.smallrock)), s.next(), s.start(n), r.setBopping(o, s.startTime)) : s.stop()
                    }
                    o === turntable.user.id && (this.userLastVote = i, "up" === i ? ($("#awesome-button").addClass("selected"), $("#lame-button").removeClass("selected")) : "down" === i && ($("#awesome-button").removeClass("selected"), $("#lame-button").addClass("selected")))
                },
                update_songboard: function(e, t) {
                    var i = Date.now() / 1e3,
                        n = this.currentSong;
                    if(!n || i > n.end) LOG("update songboard called with no song! or song expired.."), this.nosong(), this.$songboardArtist.text(""), this.$songboardTitle.text("");
                    else {
                        var o = turntable.cjAgpz,
                            s = util.prettyTime(Math.floor(o.currentSongEndTime - i)),
                            r = util.prettyTime(Math.floor(i - o.currentSong.starttime)),
                            a = Math.round(100 * o.getCurrentSongProgress());
                        e = e || n.artist, t = t || n.title, this.marquee("songboard-artist", 800, 12, e), this.marquee("songboard-title", 400, 27, t), this.$node.find("#time-since-start").text(r), this.$node.find("#time-left").text(s), this.$node.find("#progress").css("width", a + "%")
                    }
                },
                showFloater: function(e, t) {
                    $.fx.step.path = function(e) {
                        var t = e.end.css(1 - e.pos);
                        for(var i in t) e.elem.style[i] = t[i]
                    };
                    var i = function(e) {
                            var t = $(e).position();
                            this.css = function(e) {
                                var i = Math.sin(10 * e),
                                    n = t.left + 20 * (1 - e) * i,
                                    o = t.top + -150 * (1 - e),
                                    s = 5 * e - 1;
                                return {
                                    top: o + "px",
                                    left: n + "px",
                                    opacity: s
                                }
                            }
                        };
                    if(e) {
                        var n = this.getDancerBoundingBox(e);
                        if(n) {
                            var o = util.createImageWithLoader(t),
                                s = o[0],
                                r = o[1],
                                a = this;
                            r.done(function() {
                                var e = $(s).css({
                                    position: "absolute",
                                    top: n.top,
                                    left: (n.left + n.right) / 2 - 10,
                                    "z-index": 4
                                }).appendTo(a.$node);
                                e.animate({
                                    path: new i(e)
                                }, 5e3, function() {
                                    e.remove()
                                })
                            })
                        }
                    }
                },
                showHeart: function(e) {
                    this.showFloater(e, "https://s3.amazonaws.com/static.turntable.fm/images/room/heart.png")
                },
                showStar: function(e) {
                    this.showFloater(e, "https://s3.amazonaws.com/static.turntable.fm/images/room/spinning_star.gif")
                },
                makeTooltip: function(e, t, i) {
                    var n = turntable.cjAgpz.userMap[e],
                        o = "<br>" + util.commafy(n.points) + " DJ point" + (1 == n.points ? "" : "s") + "<br>" + util.commafy(n.fans || 0) + " fan" + (1 == n.fans ? "" : "s"),
                        s = "<div class=\"option\" onclick=\"RFmAZA.callback('become_fan','" + n.userid + "')\">Become a Fan</div>",
                        r = "<div class=\"option\" onclick=\"RFmAZA.callback('remove_fan','" + n.userid + "')\">Unfan</div>",
                        a = "<div class=\"option\" onclick=\"RFmAZA.callback('remove_dj','" + n.userid + "')\">Remove DJ</div>",
                        l = "<div class=\"option\" onclick=\"RFmAZA.callback('boot_user','" + n.userid + "')\">Boot User</div>",
                        u = "<div class=\"option\" onclick=\"RFmAZA.callback('add_moderator','" + n.userid + "')\">Make a Moderator</div>",
                        d = "<div class=\"option\" onclick=\"RFmAZA.callback('rem_moderator','" + n.userid + "')\">Remove Moderator</div>",
                        c = '<div class="option" onclick="RFmAZA.callback(\'stop_song\')">Skip My Song</div>',
                        h = '<div class="option" onclick="RFmAZA.callback(\'stop_song\')">Skip Their Song</div>',
                        p = '<div class="option" onclick="RFmAZA.callback(\'rem_dj\')">Quit DJing</div>',
                        f = "<div class=\"option\" onclick=\"RFmAZA.callback('pm_user','" + n.userid + "')\">Send Message</div>",
                        m = "" + o + "</div>";
                    return t && (n.userid == turntable.user.id ? (m += p, RFmAZA.current_dj && RFmAZA.current_dj[0] == turntable.user.id && (m += c)) : turntable.user.acl >= 1 && RFmAZA.current_dj && RFmAZA.current_dj[0] == n.userid && (m += h)), n.userid != turntable.user.id && turntable.cjAgpz.hasModPowers() && (turntable.user.acl >= n.acl && (m += l, m += turntable.cjAgpz.isMod(n.userid) ? d : u), t && (m += a)), n.userid != turntable.user.id && (m += f, m += n.fanof ? r : s), '<div class="tooltip avatar-tipsy floating-menu ' + (i ? i : "") + '"><div class="option special" onclick="RFmAZA.callback(\'profile\',\'' + n.userid + "')\"><b>" + util.safeText(n.name) + "</b>" + m + "</div>"
                },
                marquee: function(e, t, i, n) {
                    this.marquee_texts[e] = n, this._marquee_helper(e, t, i)
                },
                _marquee_helper: function(e, t, i) {
                    function n() {
                        for(var t = !0, i = r.marquee_texts[e];
                        " " == i[s] || t;) {
                            s += 1;
                            var t = !1
                        }
                        s == i.length && (s = 0);
                        var n = i.substring(s) + " - " + i.substring(0, s - 1);
                        o.text(n)
                    }
                    var o = $("#" + e),
                        s = 0,
                        r = this;
                    return i > this.marquee_texts[e].length ? (o.text(this.marquee_texts[e]), void 0) : (MARQUEE_INTERVALS[e] || (MARQUEE_INTERVALS[e] = setInterval(n, t), n()), void 0)
                },
                clear_marquees: function() {
                    for(var e in MARQUEE_INTERVALS) MARQUEE_INTERVALS[e] && (clearInterval(MARQUEE_INTERVALS[e]), MARQUEE_INTERVALS[e] = null)
                },
                layouts: {
                    welcomeViewOne: function(e) {
                        return ["div.tour-overlay.step-1", {
                            data: {
                                positionFunction: e
                            }
                        }, ["h3.header", "Welcome to Turntable!"], ["div.message", ["b", ["i", "This is you!"], " turntable.fm is a fun way to listen to music and play your favorite songs for your friends and strangers, in real-time, for free."]], ["div.buttons", ["div.start"]], ["div.avatar"], ["div.progress"]]
                    },
                    welcomeViewTwo: function(e) {
                        return ["div.tour-overlay.step-2", {
                            data: {
                                positionFunction: e
                            }
                        }, ["h3.header", ["div.icon"], "DJ music"], ["div.message", ["b", "DJ's play songs for everyone in the room. You can become one too and start earning DJ points!"]], ["div.buttons", ["div.back"],
                            ["div.next"]
                        ], ["div.progress"]]
                    },
                    welcomeViewThree: function(e) {
                        return ["div.tour-overlay.step-3", {
                            data: {
                                positionFunction: e
                            }
                        }, ["h3.header", ["div.icon"], "Rate songs"], ["div.message", ["b", 'Like what you hear? Clicking the "thumbs up" will award the DJ a DJ point. Enough "Lame" votes and the song will be skipped.']], ["div.buttons", ["div.back"],
                            ["div.next"]
                        ], ["div.icon"], ["div.progress"]]
                    },
                    welcomeViewFour: function(e) {
                        return ["div.tour-overlay.step-4", {
                            data: {
                                positionFunction: e
                            }
                        }, ["h3.header", "Chat"], ["div.message", ["b", "Show some love! You can talk to others in the room in real time."]], ["div.buttons", ["div.back"],
                            ["div.next"]
                        ], ["div.icon"], ["div.progress"]]
                    },
                    welcomeViewFive: function(e, t) {
                        e = void 0 === e ? !1 : e;
                        var i = ["div.tour-overlay.step-5",
                        {
                            data: {
                                positionFunction: t
                            }
                        }, ["h3.header", "Get Ready to DJ"],
                            ["div.icon"]
                        ];
                        return e ? i.push(["div.message", ["b", "Hold on a second! Before you can DJ you need to add some songs to your queue."]], ["div.buttons", ["div.ok"]]) : i.push(["div.message", ["b", "Pick some songs to be played when it's your turn on deck."]], ["div.buttons", ["div.back"],
                            ["div.done"]
                        ], ["div.progress"]), i
                    }
                }
            }
        }());
    return l
}), define("screen-editor", ["require", "util", "modal", "overlay", "ttnode", "user"], function(e) {
    var t = e("util"),
        i = e("modal"),
        n = e("overlay"),
        o = e("ttnode"),
        s = e("user"),
        r = o.extend({
            attributes: {
                idd: "screenEditor",
                screenName: null,
                screens: {},
                originalScreens: {}
            },
            layout: function() {
                return ["div.screen-editor", ["button.file-picker.tt-button.small",
                {
                    type: "button"
                }, ["input",
                {
                    type: "file",
                    name: this.attributes.screenName,
                    accept: "image/jpeg,image/gif,image/png"
                }], "Upload an Image"], ["div.file-name-bar", ["div.file-name"]], ["div.clear-screen",
                {
                    style: {
                        display: "none"
                    }
                }]]
            },
            init: function(e) {
                this._super(e), this.$eventBus = $({}), this.onFileChosen = $.proxy(this.onFileChosen, this), this.clearScreen = $.proxy(this.clearScreen, this), this.checkMirroring = $.proxy(this.checkMirroring, this)
            },
            render: function(e, t) {
                this._super(e, t), this.$name = this.$node.find(".file-name"), this.$clearScreen = this.$node.find(".clear-screen").on("click", this.clearScreen);
                var i = this.$imageFile = this.$node.find("input[type=file]").on("change", this.onFileChosen).on("click", function(e) {
                    e.stopPropagation()
                });
                this.$node.find("button").on("click", function() {
                    i.click()
                })
            },
            redraw: function() {
                var e, t = this.attributes.screens[this.attributes.screenName],
                    i = RFmAZA.getNormalizedScreenConfig(this.attributes.screenName),
                    n = !0;
                if(i) if(i.mirror) this.$clearScreen.hide(), e = "mirroring";
                else {
                    this.$clearScreen.show(), n = !1;
                    var o, s;
                    if("page" === t.type) e = "custom page";
                    else if(this.hasChanged()) {
                        o = this.$imageFile[0].value, s = o.split("\\"), e = s[s.length - 1], this.$name.text(e);
                        for(var r = this.$name[0]; r.scrollWidth > r.offsetWidth;) e = "\u2026" + e.substr(2), this.$name.text(e)
                    } else {
                        o = i.src, s = o.split(".");
                        var a = s[s.length - 1];
                        e = "custom " + a.toLowerCase()
                    }
                } else e = "empty", this.$clearScreen.hide();
                this.$name.text(e), n ? this.$name.parent().addClass("empty") : this.$name.parent().removeClass("empty"), RFmAZA.drawScreens(!0)
            },
            reposition: function() {
                var e = $("#" + this.attributes.screenName + "-screen"),
                    t = e.offset(),
                    i = {
                        top: t.top - 30,
                        left: t.left,
                        width: e.width(),
                        height: e.height() + 30
                    };
                this.$node.css(i)
            },
            onFileChosen: function(e) {
                var t, i = e.target,
                    n = i.files[0];
                if(-1 === n.type.indexOf("image") ? t = "Sorry, only images can be uploaded." : n.size > 2e6 && (t = "Sorry, the chosen image is too big. Please choose a smaller one."), t) return this.$eventBus.trigger("error", [t]), i.value = "", void 0;
                var o = new FileReader,
                    s = this;
                o.onload = function(e) {
                    s.attributes.screens[s.attributes.screenName] = {
                        0: e.target.result,
                        type: "image"
                    }, s.redraw(), s.$eventBus.trigger("change")
                }, o.readAsDataURL(n)
            },
            clearScreen: function() {
                this.$imageFile.val(""), this.attributes.screens[this.attributes.screenName] = void 0, this.redraw(), this.$eventBus.trigger("change")
            },
            monitor: function(e) {
                this.otherScreenEditor = e.$eventBus.on("change", this.checkMirroring)
            },
            checkMirroring: function() {
                var e = RFmAZA.getNormalizedScreenConfig(this.attributes.screenName);
                (!e || e.mirror) && this.redraw()
            },
            hasChanged: function() {
                var e = this.attributes.screens[this.attributes.screenName],
                    t = this.attributes.originalScreens[this.attributes.screenName];
                if(e && !t || !e && t) return !0;
                for(var i in e) if(e.hasOwnProperty(i) && t[i] != e[i]) return !0;
                return !1
            },
            cleanup: function() {
                this.otherScreenEditor && (this.otherScreenEditor.off("change", this.checkMirroring), delete this.otherScreenEditor)
            }
        }),
        a = o.extend({
            layout: function() {
                return ["div#room-screen-editor", ["form", [r,
                {
                    idd: "leftScreenEditor",
                    screenName: "left",
                    screens: this.screens,
                    originalScreens: RFmAZA.roomData.metadata.screens
                }],
                    [r,
                    {
                        idd: "rightScreenEditor",
                        screenName: "right",
                        screens: this.screens,
                        originalScreens: RFmAZA.roomData.metadata.screens
                    }],
                    ["div.modal##modal", ["div.content-scroller", ["div.content", ["div.instructions", ["p", "Customize this room by placing images on the screens on either side of the stage! Please keep in mind:"],
                        ["ul", ["li", "Each image MUST be a GIF, JPEG, or PNG under 2 MB in size."],
                            ["li", "Screens can only be updated 3 times per day."],
                            ["li", "Inappropriate images (NSFW or NSFL) will be removed."]
                        ]
                    ],
                        ["div.buttons", ["button#cancel-screen-edit.tt-button",
                        {
                            type: "button"
                        }, "Cancel"],
                            ["button#submit-screen-edit.tt-button.primary",
                            {
                                type: "submit"
                            }, "Save"]
                        ]
                    ]]]
                ]]
            },
            init: function(e) {
                this._super(e), this.overlay = new n.ScrollableOverlay, this.$overlay = this.overlay.$overlay, this.hide = $.proxy(this.hide, this), this.cleanup = $.proxy(this.cleanup, this), this.beginUpload = $.proxy(this.beginUpload, this), this.onUploadProgress = $.proxy(this.onUploadProgress, this), this.onUploadDone = $.proxy(this.onUploadDone, this), this.requestReposition = t.makeDrawer(this, this.reposition), this.requestRepositionAndRedraw = t.makeDrawer(this, this.repositionAndRedraw), this.screens = $.extend({}, RFmAZA.roomData.metadata.screens), RFmAZA.setScreenConfigSrc(this.screens)
            },
            show: function() {
                this.$overlay.append(this.$node), this.overlay.show(), $("html").addClass("centered-mode no-panels"), RFmAZA.updateStage(!0, !0), this.screensAlreadyVisible = void 0 !== RFmAZA.getNormalizedScreenConfig("left"), this.screensAlreadyVisible || $(".side-screen").show(), $(".side-screen").css("z-index", this.$overlay.css("z-index") + 1), this.$form = this.$node.find("form").on("submit", this.beginUpload), $("#cancel-screen-edit").on("click", this.hide);
                var e = this.leftScreenEditor,
                    t = this.rightScreenEditor;
                e.monitor(t), t.monitor(e), e.$eventBus.add(t.$eventBus).on("change", $.proxy(this.redrawUpdateButton, this)).on("error", $.proxy(function(e, t) {
                    this.showAlert(t)
                }, this)), turntable.cjAgpz.$eventBus.on("screenUpdate", $.proxy(function() {
                    this.showAlert('Screens have been modified by somebody else. Press "Cancel" to see their changes.')
                }, this)), this.$modalWindow = $(this.modal), this.$instructions = this.$node.find(".instructions"), $(window).on("resize", this.requestReposition), turntable.cjAgpz.$eventBus.on("roomViewZoomChange", this.requestRepositionAndRedraw), this.reposition(), this.redraw()
            },
            hide: function() {
                this.overlay.hide().done(this.cleanup), $("html").removeClass("centered-mode no-panels"), RFmAZA.setScreenConfigSrc(), RFmAZA.updateStage(!0, !1), RFmAZA.drawScreens(), this.screensAlreadyVisible || $(".side-screen").hide(), $(".side-screen").css("z-index", ""), $(window).off("resize", this.reposition), turntable.cjAgpz.$eventBus.off("roomViewZoomChange", this.requestRepositionAndRedraw)
            },
            cleanup: function() {
                this.$node.remove(), this.leftScreenEditor.cleanup(), this.rightScreenEditor.cleanup()
            },
            reposition: function() {
                this.leftScreenEditor.reposition(), this.rightScreenEditor.reposition(), this.$modalWindow.css("margin-top", RFmAZA.$node.offset().top - 30)
            },
            redraw: function() {
                var e = this.leftScreenEditor,
                    t = this.rightScreenEditor;
                e.redraw(), t.redraw(), $(".side-screen").css("z-index", this.$overlay.css("z-index") + 1), this.redrawUpdateButton()
            },
            repositionAndRedraw: function() {
                RFmAZA.setScreenConfigSrc(this.screens), this.reposition(), this.redraw()
            },
            redrawUpdateButton: function() {
                var e = this.leftScreenEditor,
                    t = this.rightScreenEditor;
                e.hasChanged() || t.hasChanged() ? $("#submit-screen-edit").prop("disabled", !1).removeClass("disabled") : $("#submit-screen-edit").prop("disabled", !0).addClass("disabled")
            },
            beginUpload: function(e) {
                var t = new FormData(this.$form[0]);
                t.append("userid", s.id), t.append("userauth", s.auth), t.append("roomid", turntable.cjAgpz.roomId), t.append("type", "screen"), t.append("updateLeft", this.leftScreenEditor.hasChanged()), t.append("updateRight", this.rightScreenEditor.hasChanged());
                var i = new XMLHttpRequest;
                i.addEventListener("load", this.onUploadDone, !1), i.open("POST", "/upload/" + turntable.currentSocketServer), i.send(t), this.showProcessing(), e.preventDefault()
            },
            onUploadDone: function(e) {
                var t;
                try {
                    t = JSON.parse(e.target.responseText)
                } catch(i) {
                    return this.showAlert("Sorry, image upload failed. Please try again."), this.hideProcessing(), void 0
                }
                t.success ? this.hide() : (this.showAlert(t.err), this.hideProcessing())
            },
            showProcessing: function() {
                this.$instructions.children().css("opacity", 0), this.spinner = t.makeSpinner(this.$instructions[0]), $("#submit-screen-edit").prop("disabled", !0).addClass("disabled"), $("#cancel-screen-edit").prop("disabled", !0).addClass("disabled")
            },
            hideProcessing: function() {
                this.spinner.stop(), this.$instructions.children().css("opacity", 1), $("#submit-screen-edit").prop("disabled", !1).removeClass("disabled"), $("#cancel-screen-edit").prop("disabled", !1).removeClass("disabled")
            }
        });
    return a.constructor.prototype.showAlert = i.constructor.prototype.showAlert, a.constructor.prototype.hideAlert = i.constructor.prototype.hideAlert, a
}), define("welcome", ["require", "util", "action-modal"], function(e) {
    var t = e("util"),
        i = e("action-modal"),
        n = {
            createRoomShow: function() {
                t.buildTree(n.layouts.createRoomView, n), n.modal.show(), n.modal.$node.find(".roomName").focus(), n.modal.$node.find(".roomtype-option").click(function() {
                    $(this).find(".radio-input").attr("checked", !0), $(".roomtype-option").removeClass("roomtype-option-on"), $(this).addClass("roomtype-option-on")
                })
            },
            createRoomSubmit: function() {
                var e, t, i, o = n.modal.$node,
                    s = $.trim(o.find(".roomName")[0].value);
                return s ? (t = Number(o.find("select")[0].value), e = {
                    api: "room.create",
                    room_name: s,
                    max_djs: t
                }, o.find(".public")[0].checked || (e.privacy = "unlisted"), i = parseInt(o.find(".djThreshold").val()), turntable.uRzNYq(e, n.createRoomDone), void 0) : (n.modal.showAlert("Room needs a name."), !1)
            },
            createRoomDone: function(e) {
                turntable.setPage(e.shortcut, e.name, e.roomid)
            },
            advancedOptions: function() {
                var e = $(".overlay div.advanced");
                "none" == e.css("display") ? (e.show(), $(".overlay div.show-advanced").text("close advanced options")) : (e.hide(), $(".overlay div.show-advanced").text("advanced options"))
            }
        };
    return n.layouts = {
        createRoomView: [i,
        {
            title: "Create Room",
            cssClass: "createRoom",
            submitText: "Create Room",
            submitCallback: n.createRoomSubmit
        }, ["div.field##createRoomModal", "Room name:", ["br"],
            ["input.roomName.text"],
            ["br"],
            ["br"], "Set my room as:", ["div.type",
            {}, ["div.roomtype",
            {}, ["div.roomtype-option.roomtype-option-on",
            {}, "Public", ["div.radios",
            {}, ["input.radio-input.public",
            {
                type: "radio",
                name: "type",
                value: "public",
                checked: !0
            }]],
                ["div.tip",
                {}, "(anyone can join)"]
            ]],
                ["div.roomtype",
                {}, ["div.roomtype-option",
                {}, "Unlisted", ["div.radios",
                {}, ["input.radio-input",
                {
                    type: "radio",
                    name: "type",
                    value: "unlisted"
                }]],
                    ["div.tip",
                    {}, "(only people with the link can join)"]
                ]]
            ],
            ["div.advanced",
            {}, "Let up to ", ["select",
            {
                name: "maxdjs"
            }, ["option",
            {
                value: "1"
            }, "1"],
                ["option",
                {
                    value: "2"
                }, "2"],
                ["option",
                {
                    value: "3"
                }, "3"],
                ["option",
                {
                    value: "4"
                }, "4"],
                ["option",
                {
                    value: "5",
                    selected: "selected"
                }, "5"]
            ], " people DJ", ["br"],
                ["br"], "Require ", ["input.djThreshold.text",
                {
                    value: "0",
                    size: 3
                }], " points to DJ", ["br"],
                ["br"]
            ],
            ["div.show-advanced",
            {
                event: {
                    click: n.advancedOptions
                }
            }, "advanced options"]
        ]]
    }, n
}), function(e) {
    var t = "hidden",
        i = "border-box",
        n = "lineHeight",
        o = '<textarea tabindex="-1" style="position:absolute; top:-9999px; left:-9999px; right:auto; bottom:auto; -moz-box-sizing:content-box; -webkit-box-sizing:content-box; box-sizing:content-box; word-wrap:break-word; height:0 !important; min-height:0 !important; overflow:hidden;"/>',
        s = ["fontFamily", "fontSize", "fontWeight", "fontStyle", "letterSpacing", "textTransform", "wordSpacing", "textIndent"],
        r = "oninput",
        a = "onpropertychange",
        l = e(o)[0];
    l.setAttribute(r, "return"), e.isFunction(l[r]) || a in l ? (e(l).css(n, "99px"), "99px" === e(l).css(n) && s.push(n), e.fn.autosize = function(n) {
        return n = n || {}, this.each(function() {
            function l() {
                var e, i, o;
                c || (c = !0, u.value = p.value, u.style.overflowY = p.style.overflowY, o = parseInt(p.style.height, 10), u.style.width = f.css("width"), u.scrollTop = 0, u.scrollTop = 9e4, e = u.scrollTop + d.height(), i = t, e > g ? (e = g, i = "scroll") : m > e && (e = m), e += y, p.style.overflowY = i, o !== e && (p.style.height = e + "px", w && n.callback.call(p)), setTimeout(function() {
                    c = !1
                }, 1))
            }
            var u, d, c, h, p = this,
                f = e(p),
                m = f.height(),
                g = parseInt(f.css("maxHeight"), 10),
                v = s.length,
                y = 0,
                b = p.value,
                w = e.isFunction(n.callback);
            if((f.css("box-sizing") === i || f.css("-moz-box-sizing") === i || f.css("-webkit-box-sizing") === i) && (y = f.outerHeight(!0) - f.height()), !f.data("mirror") && !f.data("ismirror")) {
                for(u = e(o).data("ismirror", !0).addClass(n.className || "autosizejs")[0], d = e(u), h = "none" === f.css("resize") ? "none" : "horizontal", f.data("mirror", e(u)).css({
                    overflow: t,
                    overflowY: t,
                    wordWrap: "break-word",
                    resize: h
                }), g = g && g > 0 ? g : 9e4; v--;) u.style[s[v]] = f.css(s[v]);
                e("body").append(u), a in p ? r in p ? p[r] = p.onkeyup = l : p[a] = l : p[r] = l, e(window).resize(l), f.bind("autosize", l), p.value = "", p.value = b, l()
            }
        })
    }) : e.fn.autosize = function() {
        return this
    }
}(jQuery), define("jquery.autosize", function() {}), define("room", ["require", "class", "util", "zeroclipboard", "action-modal", "crowd-control", "dmca", "draggable", "modal", "player", "playlist", "overlay", "roomlist", "bXCndf/bXCndf", "screen-editor", "sticker", "user", "welcome", "jquery.autosize", "jquery.tipsy"], function(e) {
    var t = e("class"),
        i = e("util"),
        n = e("zeroclipboard"),
        o = e("action-modal"),
        s = e("crowd-control"),
        r = e("dmca"),
        a = e("draggable"),
        l = e("modal"),
        u = e("player"),
        d = e("playlist"),
        c = e("overlay"),
        h = e("roomlist"),
        p = e("bXCndf/bXCndf"),
        f = e("screen-editor"),
        m = e("sticker"),
        g = e("user"),
        v = e("welcome");
    e("jquery.autosize"), e("jquery.tipsy");
    var y = t.extend(function() {
        var e = {
            chatHistory: [],
            historyLength: 3,
            lastChatTime: 0,
            totalTimeDebt: 0,
            intervalMultiplier: 1,
            debtViolations: 0,
            chatThrottlingThreshold: 100,
            throttleChat: function(t) {
                if(0 === e.lastChatTime) return e.lastChatTime = new Date, e.chatHistory.push(t), !1;
                var i, n, o = g.id,
                    s = this.userMap[o];
                if(this.numListeners() >= e.chatThrottlingThreshold) {
                    var i = 5.4 / (.01 * s.fans + 1) - .4,
                        r = i * e.intervalMultiplier,
                        a = new Date,
                        n = 0;
                    if(chatInterval = (a - e.lastChatTime) / 1e3, n = r - chatInterval, e.totalTimeDebt + n > r) {
                        var l = this.throttleMessages[Math.floor(Math.random() * this.throttleMessages.length)];
                        return this.appendAction(o, s.name, l, "action"), !0
                    }
                }
                var u = e.chatHistory;
                for(u.push(t); u.length > e.historyLength;) u.shift();
                if(u.length == e.historyLength) {
                    for(var d = !0, c = 1; u.length > c; c++) u[c] != u[c - 1] && (d = !1);
                    if(d) {
                        var l = this.repeatMessages[Math.floor(Math.random() * this.repeatMessages.length)];
                        return this.appendAction(o, s.name, l, "action"), !0
                    }
                }
                return this.numListeners() >= e.chatThrottlingThreshold && (e.lastChatTime = a, e.totalTimeDebt = Math.max(-i, e.totalTimeDebt + n), e.totalTimeDebt >= 0 ? (e.debtViolations += 1, e.debtViolations > 2 && (e.debtViolations = 0, e.intervalMultiplier += .1)) : e.intervalMultiplier = 1), !1
            },
            lVOrdI: function(e, t) {
                if(this.currentSong) {
                    var i = $.sha1(this.roomId + e + this.currentSong._id),
                        n = $.sha1(Math.random() + ""),
                        o = $.sha1(Math.random() + "");
                    turntable.uRzNYq({
                        api: "room.vote",
                        roomid: this.roomId,
                        section: this.section,
                        val: e,
                        vh: i,
                        th: n,
                        ph: o
                    }, function(e) {
                        e.success || RFmAZA.resetVoteButtons(g.id), t && t(e)
                    })
                }
            }
        };
        return {
            _name: "Room",
            timers: {},
            ignoredUsers: [],
            hasLoadedFavorites: !1,
            isFavorite: !1,
            suggestedName: !1,
            streamStarted: !1,
            currentDjPointDelta: 0,
            init: function(e, t) {
                this.roomId = e, this.section = t, this.roomData = {}, this.listenerids = [], this.listenerMap = {}, this.djids = [], this.userMap = {}, this.users = this.userMap, this.songsDjed = [], this.starShown = {}, turntable.setSocketAddr(turntable.getHashedAddr(this.roomId, this.section));
                for(var n in this) "function" == typeof this[n] && (this[n] = $.proxy(this[n], this));
                this.loadLayout(), this.initFavorite(), turntable.addEventListener("userinfo", this.updateUserFanofs), turntable.addEventListener("message", this.messageListener), turntable.addEventListener("reconnect", this.reconnectListener), httpStream.setCallback(this.httpStreamListener), turntable.uRzNYq({
                    api: "user.get_prefs"
                }, $.proxy(function(e) {
                    e.success && this.setPanelLayout(e.layout || "single")
                }, this)), this.registerUser().done($.proxy(function() {
                    this.loadRoomStateTask = this.loadRoomState(), this.refreshFacebookToken()
                }, this)), "4f594a82a3f751581000eb80" != e && turntable.addIdleListener(14400, this.checkIdle), i.LWKTya(this), window.onbeforeunload = this.unloadWarning, $(window).on("resize", this.recenterRoomView), $(window).keydown(this.keyboardShortcuts), this.$eventBus = $({})
            },
            numListeners: function() {
                return this.listenerids.length
            },
            numDjs: function() {
                return this.djids.length
            },
            numAudienceMembers: function() {
                return this.section ? this.listenerids.length : this.listenerids.length - this.djids.length
            },
            registerUser: function() {
                var e = {
                    api: "room.register",
                    roomid: this.roomId,
                    section: this.section
                };
                return turntable.uRzNYq(e, $.proxy(function(e) {
                    if(!e.success) {
                        if(4 === e.errno) {
                            var t = window.history.state || TURNTABLE_ROOM,
                                i = "/" + (t.shortcut || t.roomid);
                            return window.location.href = i, void 0
                        }
                        return this.lobbyRedirect(e.errno), void 0
                    }
                    if(e.roomid != this.roomId && (LOG("User registered into wrong room"), this.lobbyRedirect(3)), e.section != this.section && (this.section = e.section, window.history && window.history.replaceState)) {
                        var t = window.history.state || TURNTABLE_ROOM,
                            n = $.extend({}, t, {
                                section: e.section
                            }),
                            i = n.shortcut || n.roomid;
                        i = "/" + i + "/" + n.section, window.history.replaceState(n, i, i)
                    }
                    this.reconnecting && turntable.socketDumpLog()
                }, this))
            },
            lastRoomStateLoadTime: 0,
            loadRoomState: function() {
                LOG("LOAD ROOM STATE");
                var e = $.Deferred(),
                    t = {
                        api: "room.info",
                        roomid: this.roomId,
                        section: this.section
                    };
                if($("#song-log").children().size() > 0 && (t.extended = !1), t.extended) {
                    var n = Date.now() / 1e3;
                    if(2 > n - this.lastRoomStateLoadTime) return LOG("THROTTLED LOADROOMSTATE"), void 0;
                    this.lastRoomStateLoadTime = lastRoomStateLoadTime
                }
                var o = $.when(turntable.uRzNYq(t), turntable.avatarLoad);
                return o.done($.proxy(function(t) {
                    var n = t.room,
                        o = t.users,
                        r = t.djids,
                        a = t.listenerids;
                    if(i.notEmpty(this.roomData) || $.extend(this.roomData, n), this.resyncStream) return this.setCurrentSong(n.metadata), e.resolve(), void 0;
                    for(var l = 0, u = o.length; u > l; l++) this.addUserToMap(o[l]);
                    this.crowdControl = new s(this.section ? "back" : "front", this.$eventBus, n.metadata.max_size);
                    for(var l = 0; a.length > l; l++) {
                        var d = a[l];
                        this.userMap[d] ? this.$eventBus.trigger("Room.addListener", a[l]) : (a.splice(l, 1), l--)
                    }
                    this.djids = r.slice(), this.listenerids = a, this.setupRoom(n);
                    for(var c = a.slice(), l = 0; c.length > l; l++) this.addListener(c[l], !0);
                    for(var h = n.metadata.djs.slice(), l = 0; h.length > l; l++) this.addDj(h[l]);
                    this.setCurrentSong(n.metadata), this.updateVotes(n.metadata, !1), this.updateGuestList(), this.roomInfoHandler(n), e.resolve()
                }, this)), o.fail(function(t) {
                    turntable.showAlert("The requested room could not found: " + t.err), e.reject(), window.location.href = "/lobby"
                }), e.promise()
            },
            messageListener: function(e) {
                if(!e.hasOwnProperty("msgid")) if("speak" == e.command) this.showChatMessage(e.userid, e.name, e.text);
                else if("newsong" == e.command) LOG("newsong message received"), this.currentSongEndTime && this.currentSongEndTime - Date.now() / 1e3 > 10 && (LOG("previous song ended early"), u.playEphemeral(UI_SOUND_ENDSONG, !0)), this.setCurrentSong(e.room.metadata, e.current_dj_points), this.addToSongLog(e.room.metadata.current_song), this.roomInfoHandler(e.room), this.updateGuestList();
                else if("nosong" == e.command) this.setCurrentSong(null), this.roomInfoHandler(e.room);
                else if("registered" == e.command) {
                    var t = e.user[0],
                        i = t.userid;
                    this.addUserToMap(t), this.$eventBus.trigger("Room.addListener", i), this.addListener(i), this.roomData.metadata && this.roomData.metadata.listeners && (this.roomData.metadata.listeners++, this.updateTotalListeners(this.roomData.metadata.listeners))
                } else if("deregistered" == e.command) {
                    var i = e.user[0].userid;
                    this.removeListener(i), this.roomData.metadata && this.roomData.metadata.listeners && (this.roomData.metadata.listeners--, this.updateTotalListeners(this.roomData.metadata.listeners))
                } else if("update_user" == e.command) this.updateUser(e);
                else if("add_dj" == e.command) {
                    var t = e.user[0];
                    this.addUserToMap(t), this.addDj(t.userid), this.djids.length > 1 && u.WSvQHQd && u.oeDZMm(!1)
                } else if("rem_dj" == e.command) {
                    var t = e.user[0];
                    this.addUserToMap(t);
                    var n = t.userid;
                    if(this.removeDj(n), e.modid) {
                        var o;
                        1 == e.modid ? o = " was booed off the stage." : (o = " was kindly escorted off the stage", o += this.userMap[e.modid] ? " by " + this.userMap[e.modid].name + "." : "."), this.appendAction(n, this.userMap[n].name, o, "action")
                    }
                } else if("update_votes" == e.command) {
                    var s = e.current_song;
                    if(!s || s._id === this.currentSong._id && Math.floor(s.starttime) === Math.floor(this.currentSong.starttime)) this.updateVotes(e.room.metadata, !0), this.roomInfoHandler(e.room);
                    else if(this.previousDjid && this.previousDjid in this.users) {
                        var r = e.room.metadata.upvotes - this.previousDjPointDelta;
                        this.users[this.previousDjid].points += r, this.previousDjid === this.roomData.metadata.current_dj && (this.currentDjPointsAtSongStart += r), this.previousDjPointDelta = e.room.metadata.upvotes
                    }
                } else if("new_moderator" == e.command) {
                    var a = this.roomData.metadata.moderator_id; - 1 == $.inArray(e.userid, a) && (a.push(e.userid), this.updateGuestList(), e.userid == g.id && (this.showRoomTip("You are now a moderator of this room. Moderators can boot people out of the room who act inappropriately. Thanks for your help.", 10), this.setupRoomSettingsDropdown()))
                } else if("rem_moderator" == e.command) {
                    var a = this.roomData.metadata.moderator_id,
                        l = $.inArray(e.userid, a); - 1 != l && (a.splice(l, 1), this.updateGuestList(), e.userid == g.id && (this.showRoomTip("You are no longer a moderator of this room.", 10), this.removeRoomSettingsDropdown()))
                } else if("booted_user" == e.command) if(e.userid == g.id) this.gotBooted(e.reason, this.userMap[e.modid].name);
                else {
                    var d = " was booted from the room by " + this.userMap[e.modid].name + ".";
                    e.reason && (d += " Reason: " + e.reason);
                    var t = this.userMap[e.userid],
                        c = t ? t.name : "Somebody";
                    this.appendAction(e.userid, c, d, "action")
                } else if("dmca_error" == e.command) {
                    var d = "song" == e.type ? "We had to skip your song because our music licenses force us to limit the number of times an artist can be played each hour in a room. Playing the next song in your queue that is in compliance." : "We had to skip your turn because our music licenses force us to limit the number of times an artist can be played each hour in a room. Add some new artists to your queue or try joining a new room.";
                    this.showRoomTip("Bummer! " + d, 10)
                } else if("song_blocked" == e.command) {
                    var d = "We had to skip your ";
                    d += "song" == e.type ? "song" : "turn", d += " due to a copyright claim", e.label && (d += " by " + e.label), d += "song" == e.type ? ". Playing the next song in your queue that is in compliance." : ". Try adding more songs to your queue.", this.showRoomTip("Bummer! " + d, 10)
                } else "update_room" == e.command ? (e.description && this.updateRoomDesc(e), e.screens && this.updateScreens(e)) : "snagged" == e.command ? this.handleSnagged(e) : "pmmed" == e.command && this.handlePM(e, !1)
            },
            updateScreens: function(e) {
                $.extend(this.roomData.metadata.screens, e.screens), this.$eventBus.trigger("screenUpdate"), this.GVAGXL.drawScreens(), this.GVAGXL.updateStage(!0)
            },
            updateUserFanofs: function() {
                if(this.userMap) {
                    var e;
                    for(var t in this.userMap) e = this.userMap[t], e.oldFanof = e.fanof, e.fanof = !1;
                    for(var i = 0; g.fanOf.length > i; i++) e = this.userMap[g.fanOf[i]], e && (e.fanof = !0);
                    if(this.GVAGXL) for(var t in this.userMap) e = this.userMap[t], e.oldFanof != e.fanof && this.updateUserInRoomView(e)
                }
            },
            reconnectListener: function() {
                LOG("Reconnected to server"), this.reconnecting = !0;
                var e = this.isDj(),
                    t = this;
                this.loadRoomState().done(function() {
                    t.reconnecting = !1, e && !t.isDj() && turntable.showAlert("You stopped DJing because you were disconnected for too long.")
                })
            },
            httpStreamListener: function(e) {
                if("resync" == e) this.scheduleResyncStream();
                else if("streamstart" == e) {
                    var t = this.currentSong.metadata;
                    this.GVAGXL.newsong($.inArray(this.roomData.metadata.currentDj, this.djids), t.artist, t.song, Math.round(this.currentSongEndTime - i.now() / 1e3), this.currentSong.snaggable), this.streamStarted || (this.streamStarted = !0, u.oeDZMm(!1), this.roomData.metadata.currentDj == g.id && 1 == this.numDjs() && 1 != this.roomData.metadata.single_dj_enabled && (this.timers.WSvQHQ = setTimeout(this.WSvQHQ, 3e4)), this.logSongRequest())
                }
            },
            logSongRequest: function() {
                var e = {
                    api: "room.log_song_request",
                    roomid: this.roomId,
                    section: this.section,
                    song: this.currentSong
                };
                turntable.uRzNYq(e, function(e) {
                    e.success && LOG("logged song request")
                })
            },
            scheduleResyncStream: function(e) {
                LOG("schedule resync stream");
                var t = this,
                    i = httpStream.isPlaying(),
                    n = function() {
                        i && (LOG("was playing. do loading song"), t.GVAGXL.loadingsong()), t.resyncStream = !0, t.loadRoomState()
                    };
                e ? setTimeout(n, e) : n()
            },
            roomInfoHandler: function(e) {
                $.extend(this.roomData.metadata, e.metadata);
                var t = e.metadata;
                if(t) {
                    var i = e.metadata.moderator_id;
                    i && (this.roomData.metadata.moderator_id = "array" == $.type(i) ? i : [i]), !this.section && (e.metadata.listeners > 400 && "room" === this.currentRoomViewType || 375 >= e.metadata.listeners && "concert" === this.currentRoomViewType) && this.switchRoomView();
                    var n = t.listeners;
                    this.updateTotalListeners(n), this.GVAGXL.updateTotalListeners(n), this.GVAGXL.updateCrowdVotes(t.upvotes - this.upvoters.length), this.GVAGXL.updateStage(), this.GVAGXL.drawDjButton()
                }
            },
            GVAGXLCallback: function(t, n) {
                if("upvote" == t ? 15e3 > turntable.WvZjta() && e.lVOrdI.apply(this, ["up"]) : "downvote" == t && 15e3 > turntable.WvZjta() && e.lVOrdI.apply(this, ["down"]), "become_dj" == t) 15e3 > turntable.WvZjta() && this.uGveFa();
                else if("stop_song" == t) turntable.uRzNYq({
                    api: "room.stop_song",
                    roomid: this.roomId,
                    section: this.section
                }), this.roomData.metadata.currentDj == g.id && this.songsDjed.length > 0 && this.songsDjed[this.songsDjed.length - 1].fileId == this.currentSong._id && this.songsDjed.pop();
                else if("rem_dj" == t) this.quitDj();
                else if("remove_dj" == t) turntable.uRzNYq({
                    api: "room.rem_dj",
                    roomid: this.roomId,
                    section: this.section,
                    djid: n
                });
                else if("set_volume" == t) u.setVolume(n);
                else if("boot_user" == t) {
                    var o = this,
                        s = {};
                    i.buildTree(y.layouts.bootConfirmView(this.userMap[n].name, function() {
                        var e = {
                            api: "room.boot_user",
                            roomid: o.roomId,
                            section: o.section,
                            target_userid: n
                        },
                            t = $.trim($(".bootReasonField").val());
                        t && "(optional)" != t && (e.reason = t), turntable.uRzNYq(e), s.modal.hide();
                        var i = $(turntable.cjAgpz.nodes.roomName).html();
                        _gaq.push(["_trackEvent", "room", "boot", i + "--" + g.displayName])
                    }), s), s.modal.show()
                } else if("add_song" == t) this.$view.find(".addSongOverlay").remove(), this.$view.append(i.buildTree(y.layouts.addSongOverlay(this)));
                else if("add_song_to" == t) this.addSong(n);
                else if("invite_dj" == t) this.facebookSendDialog();
                else if("become_fan" == t) {
                    var r = this.userMap[n];
                    r && (r.fanof = !0), turntable.uRzNYq({
                        api: "user.become_fan",
                        djid: n
                    }, function(e) {
                        e && e.success && (turntable.buddyList.lookupUser(n, function(e) {
                            e.roomName = turntable.cjAgpz.name, turntable.buddyList.addBuddy(e)
                        }), -1 == $.inArray(n, g.fanOf) && (g.fanOf.push(n), turntable.cjAgpz.updateGuestList()))
                    })
                } else if("remove_fan" == t) {
                    var r = this.userMap[n];
                    r && (r.fanof = !1), turntable.uRzNYq({
                        api: "user.remove_fan",
                        djid: n
                    }, function(e) {
                        if(e && e.success) {
                            turntable.buddyList.removeBuddy(n);
                            var t = g.fanOf.indexOf(n);
                            t >= 0 && (g.fanOf.splice(t, 1), turntable.cjAgpz.updateGuestList())
                        }
                    })
                } else if("profile" == t) {
                    var o = this,
                        a = $.Deferred(),
                        l = $.Deferred();
                    $.when(a, l).done(o.setupProfileOverlay), turntable.uRzNYq({
                        api: "user.get_profile",
                        userid: n
                    }, function(e) {
                        a.resolve(e)
                    }), turntable.uRzNYq({
                        api: "sticker.get_placements",
                        userid: n
                    }, function(e) {
                        var t = {};
                        t[n] = e.placements, $(document).trigger("add_sticker_placements", t), l.resolve(e)
                    })
                } else if("report_user" == t) this.setupReportOverlay(n, this.users[n].name, this.roomId, this.section, "user");
                else if("add_moderator" == t) {
                    var o = this,
                        s = {};
                    i.buildTree(y.layouts.addModConfirmView(this.userMap[n].name, function() {
                        turntable.uRzNYq({
                            api: "room.add_moderator",
                            roomid: o.roomId,
                            section: o.section,
                            target_userid: n
                        }), s.modal.hide()
                    }), s), s.modal.show()
                } else if("rem_moderator" == t) {
                    var o = this,
                        s = {};
                    i.buildTree(y.layouts.removeModConfirmView(this.userMap[n].name, function() {
                        turntable.uRzNYq({
                            api: "room.rem_moderator",
                            roomid: o.roomId,
                            section: o.section,
                            target_userid: n
                        }), s.modal.hide()
                    }), s), s.modal.show()
                } else "pm_user" == t && this.handlePM({
                    senderid: n
                }, !0)
            },
            setupProfileOverlay: function(e, t) {
                if(e.success) {
                    var n = {};
                    i.buildTree(y.layouts.profileView(e), n);
                    var o = n.modal.$node,
                        s = o.find("canvas.laptop");
                    if(t.success) {
                        var r = s[0].getContext("2d"),
                            a = e.laptop;
                        a in {
                            iphone: 1,
                            android: 1
                        } && (a = "mac"), m.drawLaptopCanvas(e.userid, r, .5, a)
                    } else s.hide();
                    var l = o.find(".acl");
                    e.verified ? l.text("Verified " + e.verified) : e.acl > 1 ? l.text("gatekeeper") : e.acl > 0 && l.text("superuser");
                    var u = o.find(".twitter");
                    e.twitter ? u.attr("href", "http://twitter.com/" + e.twitter) : u.hide();
                    var d = o.find(".facebook");
                    e.facebook ? d.attr("href", e.facebook) : d.hide();
                    var c = o.find(".website");
                    e.website || c.hide(), e.twitter || e.facebook || e.website ? c.html(i.linkify(i.safeText(c.html()))) : o.find(".web-links").remove();
                    var h = o.find(".about");
                    e.about ? h.find(".profileText").html(i.brText(i.linkify(i.safeText(e.about)))) : h.hide();
                    var p = o.find(".topartists");
                    e.topartists ? p.find(".profileText").html(i.brText(i.linkify(i.safeText(e.topartists)))) : p.hide();
                    var f = o.find(".hangout");
                    e.hangout ? f.find(".profileText").html(i.brText(i.linkify(i.safeText(e.hangout)))) : f.hide(), n.modal.show(), o.find(".name").dblclick(function() {
                        var t = o.find(".acl"); - 1 == t.text().indexOf(e.userid) && t.text(t.text() + " " + e.userid)
                    })
                }
            },
            setupReportOverlay: function(e, t, n, o, s) {
                i.buildTree(y.layouts.reportView(this.reportUserOrRoom, e, t, n, o, s), this), this.reportModal.show()
            },
            reportUserOrRoom: function() {
                var e = $("#reasonField").val();
                if(!e) return this.reportModal.showAlert("Please supply a detailed reason"), !1;
                var t = "room.report_room",
                    n = $("#useridField").val(),
                    s = $("#roomidField").val(),
                    r = "";
                return $("div.messages .message").slice(-25, -1).each(function() {
                    r += "<div>" + $(this).html() + "</div>"
                }), n && (t = "room.report_user"), turntable.uRzNYq({
                    api: t,
                    roomid: s,
                    section: this.section,
                    reported: n,
                    reason: e,
                    chatlog: r
                }, $.proxy(function(e) {
                    e.success ? (this.reportModal.close(), i.buildTree([o,
                    {
                        showCancel: !1
                    }, ["div.message",
                    {}, "Thank-you."]], y), y.modal.show()) : this.reportModal.showAlert(e.err)
                }, this)), !1
            },
            addSong: function(e, t) {
                if(!t) {
                    if(!this.currentSong) return;
                    t = this.currentSong
                }
                var i = !1,
                    n = t._id || t.fileId,
                    o = d.queue.contains(n);
                if("queue" == e) {
                    var s;
                    0 == t.snaggable ? (s = "Sorry, this song cannot be added to your queue", t.metadata.label && (s += " due to a copyright claim by " + t.metadata.label, i = !0)) : o ? s = "This song is already in your queue!" : (d.addSong({
                        fileId: n,
                        metadata: t.metadata
                    }), s = "Song added to queue."), this.showRoomTip(s, 5)
                } else window.open("/link/?fileid=" + n + "&site=" + e, e + n);
                var r = t ? t.djid : this.roomData.metadata.currentDj,
                    a = t == this.currentSong ? "board" : "songlog";
                this.sendSnag(g.id, this.roomId, this.section, r, n, e, a, o ? "true" : "false", i)
            },
            sendSnag: function(e, t, i, n, o, s, r, a, l) {
                if(n) {
                    var u = $.sha1(Math.random() + ""),
                        d = $.sha1(Math.random() + "");
                    l = "" + l;
                    var c = [e, n, o, t, s, r, a, l, u],
                        h = $.sha1(c.join("/"));
                    turntable.uRzNYq({
                        api: "snag.add",
                        djid: n,
                        songid: o,
                        roomid: t,
                        section: i,
                        site: s,
                        location: r,
                        in_queue: a,
                        blocked: l,
                        vh: h,
                        sh: u,
                        fh: d
                    }), _gaq.push(["_trackEvent", "song", "snag", s, a ? 0 : 1])
                }
            },
            handleSnagged: function(e) {
                this.GVAGXL.showHeart(e.userid)
            },
            handleFanned: function(e) {
                var t = e.userid,
                    i = this.userMap[e.userid],
                    n = e.fanid;
                i.fans || (i.fans = 0), i.fans += e.fans, !(t === this.roomData.metadata.current_dj && e.fans > 0) || this.starShown[t] && this.starShown[t][n] || (this.GVAGXL.showStar(n), this.starShown[t] || (this.starShown[t] = {}), this.starShown[t][n] = !0)
            },
            userIdFromName: function(e) {
                for(var t in this.userMap) {
                    var i = this.userMap[t];
                    if(i && i.name == e) return t
                }
                return null
            },
            throttleMessages: [", relax and just enjoy the music.", " has been awfully chatty lately...", ", quiet down; the neighbors are complaining about the noise."],
            repeatMessages: [" sounds like a broken record...", ", okay, we get it."],
            speak: function(t) {
                t.preventDefault();
                var i = $.trim(this.nodes.chatText.value),
                    n = !1;
                if(i) {
                    if(0 == i.indexOf("/ignore ")) {
                        var o = i.substr(8),
                            s = this.userIdFromName(o);
                        return s && -1 == $.inArray(s, this.ignoredUsers) && (this.ignoredUsers.push(s), this.appendAction(s, o, " will be ignored.")), void 0
                    }
                    if(0 != i.indexOf("/unignore ")) {
                        if("/up" == i ? (e.lVOrdI.apply(this, ["up"]), n = !0) : "/down" == i && (e.lVOrdI.apply(this, ["down", function(e) {
                            e.success && $("#lame-button").addClass("selected")
                        }]), n = !0), (n || !e.throttleChat.apply(this, [i])) && (this.nodes.chatText.value = "", $("#chat-input").trigger("autosize"), !n)) {
                            var r = turntable.uRzNYq({
                                api: "room.speak",
                                roomid: this.roomId,
                                section: this.section,
                                text: i
                            }),
                                a = this;
                            r.fail(function(e) {
                                e && "user not in room" == e.err && a.reconnectListener()
                            })
                        }
                    } else {
                        var o = i.substr(10),
                            s = this.userIdFromName(o);
                        if(s) {
                            var l = $.inArray(s, this.ignoredUsers); - 1 != l && (this.ignoredUsers.splice(l, 1), this.appendAction(s, o, " will be ignored no more."))
                        }
                    }
                }
            },
            clearRoomUsers: function() {
                if(this.GVAGXL) {
                    for(var e = 0, t = this.djids.length; t > e; e++) this.GVAGXL.removeDj(e);
                    for(var i = this.listenerids, n = this.userMap, o = this.GVAGXL, e = 0, t = i.length; t > e; e++) o.removeListener(n[i[e]])
                }
                this.userMap = {}, this.djids = [], this.listenerids = []
            },
            cleanup: function() {
                this.clearRoomUsers(), turntable.removeEventListener("auth", this.authListener), turntable.removeEventListener("userinfo", this.updateUserFanofs), turntable.removeEventListener("message", this.messageListener), turntable.removeEventListener("reconnect", this.reconnectListener), httpStream.setCallback(null), this.roomList && (this.roomList.cleanup(), this.roomList = null), $("#offstage").append($("#userauth")), $("#offstage").append($("#playlist")), httpStream.closeStream(), turntable.uRzNYq({
                    api: "room.deregister",
                    roomid: this.roomId,
                    section: this.section
                }), d.decorateQueueView();
                for(var e in this.timers) this.timers[e] && clearTimeout(this.timers[e]);
                y.layouts.zeroClip.destroy(), y.layouts.zeroClip = null, this.GVAGXL.cleanup(), window.onbeforeunload = null, $(window).off("resize", this.recenterRoomView), $(window).off("keydown", this.keyboardShortcuts)
            },
            getEntropyForUser: function(e) {
                return turntable.seedPRNG(e.userid + e.points + this.roomId + Math.round(turntable.serverNow() / 21600))
            },
            loadLayout: function() {
                this.nodes = {}, this.view = i.buildTree(y.layouts.page(this.toggleFavorite, this.chatTextListener), this.nodes), $(this.nodes.userauth).append($("#userauth")), $(this.nodes.playlist).append($("#playlist"));
                var e = this.$view = $(this.view);
                if(e.find(".searchView").hide(), $(this.nodes.logo).click(i.eventHandlerDecorator(function() {
                    window.location.href = "/lobby"
                })), $(this.nodes.listRooms).click(this.listRoomsShow), e.find("#feedback-button").click(this.feedbackShow), e.find("#help-button").on("click", this.helpShow), e.find("#report-room").on("click", $.proxy(function(e) {
                    return e.preventDefault(), this.setupReportOverlay("", "", this.roomId, this.section, "room"), !1
                }, this)), e.find(".roomTip").click(this.hideRoomTip), $(this.nodes.chatForm).submit(this.speak), $(this.nodes.chatText).keydown(this.chatKeyDownListener), i.getSetting("playdingsound")) this.dingSetting = i.getSetting("playdingsound");
                else {
                    var t = "true" == i.getSetting("playding") ? "on" : "mention";
                    i.setSetting("playdingsound", t), this.dingSetting = t
                }
                this.$dingMenu = $(i.buildTree(y.layouts.dingMenu)).hide().appendTo("body"), this.$dingMenu.find("." + this.dingSetting).addClass("selected"), this.$dingButton = $(this.nodes.chatSound), this.$dingButton.addClass(i.getSetting("playdingsound")), this.$dingButton.add(this.$dingMenu).on("mouseenter", this.dingMenuMouseEnter).on("mouseleave", this.dingMenuMouseLeave), this.$dingMenu.on("click", ".option", this.dingMenuClick), $(this.nodes.chatLog).on("click", ".speaker", $.proxy(function(e) {
                    this.GVAGXL.toggleTipsy($.data(e.target, "userid"), !0)
                }, this)), i.webkitMaskSupport() || $("html").addClass("no-webkit-mask"), e.find(".floating-panel-tab").on("click", $.proxy(function(e) {
                    var t = $(e.target).closest("li");
                    t.hasClass("selected") || (t.siblings(".selected").removeClass("selected"), t.addClass("selected"), t.hasClass("chat-container") ? this.updateChatScroll() : "room-info-container" === t.attr("id") && "none" !== t.find("#song-log-panel").css("display") && this.$eventBus.trigger("SongLog.visible"))
                }, this)), e.find(".room-info-link").on("click", $.proxy(function(e) {
                    var t = $(e.target).closest("li");
                    t.hasClass("selected") || (t.siblings(".selected").removeClass("selected"), t.addClass("selected"), "song-log-container" === t.attr("id") && this.$eventBus.trigger("SongLog.visible"), t.closest("#room-info").addClass("subsection-visible"))
                }, this)), e.find("#room-info-nav").on("click", "button.back", $.proxy(function(e) {
                    var t = $(e.target);
                    this.$lastSelectedSubsection = t.closest("li"), t.closest("#room-info").one(i.transitionEnd, this.transitionEndHandler).removeClass("subsection-visible")
                }, this)), e.find("#chat-input").on("focus", $.proxy(function(e) {
                    $(e.target).closest(".chatBar").addClass("chat-focused"), this.checkChatScroll()
                }, this)).on("blur", function() {
                    var e = $(this);
                    0 === e.val().length && e.closest(".chatBar").removeClass("chat-focused")
                }), e.find(".dropdown-container").on("mouseenter", this.dropDownMouseEnter).on("mouseleave", this.dropDownMouseLeave);
                var n = this.volumeKnob = new a;
                $.extend(n, {
                    mousedown: this.volumeKnobMouseDown,
                    mousemove: this.volumeKnobMouseMove,
                    mouseup: this.volumeKnobMouseUp,
                    cursor: "pointer"
                }), e.find("#volume-knob").on("mousedown", n.setup), e.find("#volume-button").on("click", this.toggleMute), e.find("#layout-option").tipsy({
                    className: "layout-option",
                    offset: -8,
                    gravity: "e",
                    fade: !0,
                    opacity: 1
                }), e.find("#layout-option .option").on("click", $.proxy(function(e) {
                    var t = $.data(e.target, "layout");
                    t !== this.layout && (turntable.uRzNYq({
                        api: "user.edit_prefs",
                        layout: t
                    }), this.setPanelLayout(t))
                }, this)), e.find("#song-log").on("mouseenter", ".song", this.songViewMouseEnter).on("mouseleave", ".song", this.songViewMouseLeave)
            },
            keyboardShortcuts: function(e) {
                var t = "TEXTAREA" == e.srcElement.nodeName || "INPUT" == e.srcElement.nodeName;
                t || 32 != e.keyCode || this.toggleMute()
            },
            dingMenuHideTimeout: null,
            dingMenuHide: function() {
                this.$dingButton.removeClass("hover"), this.$dingMenu.hide()
            },
            dingMenuMouseEnter: function() {
                window.clearTimeout(this.dingMenuHideTimeout);
                var e = this.$dingButton.offset();
                this.$dingMenu.css({
                    top: e.top,
                    left: e.left + this.$dingButton.width() / 2
                }).show(), this.$dingButton.addClass("hover")
            },
            dingMenuMouseLeave: function() {
                this.dingMenuHideTimeout = window.setTimeout(this.dingMenuHide, 500)
            },
            dingMenuClick: function(e) {
                var t = $(e.target),
                    n = t.data("setting");
                t.addClass("selected").siblings(".option").removeClass("selected"), this.dingSetting = n, i.setSetting("playdingsound", n), this.dingMenuHide()
            },
            $lastHoveredHeaderButton: null,
            dropDownHideTimeout: null,
            dropDownHide: function() {
                var e = this.$lastHoveredHeaderButton;
                e && e.removeClass("hover").find(".floating-menu").hide(), this.$lastHoveredHeaderButton = null
            },
            dropDownMouseEnter: function(e) {
                var t = $(e.target).closest(".dropdown-container"),
                    i = this.$lastHoveredHeaderButton;
                if(i) {
                    if(window.clearTimeout(this.dropDownHideTimeout), i[0] === t[0]) return;
                    this.dropDownHide()
                }
                var n = t.find(".floating-menu");
                n.show(), t.addClass("hover"), this.$lastHoveredHeaderButton = t
            },
            dropDownMouseLeave: function() {
                this.dropDownOverride || (this.dropDownHideTimeout = window.setTimeout(this.dropDownHide, 500))
            },
            $lastSelectedSubsection: null,
            transitionEndHandler: function(e) {
                $(e.target), this.$lastSelectedSubsection.removeClass("selected")
            },
            volumeControlClasses: ["volume-high", "volume-medium", "volume-low", "volume-mute"],
            toggleMute: function() {
                if(this.muted) this.volumeKnobDraw(), u.setVolume(4 * this.volumePercentage), this.muted = !1;
                else {
                    this.volumeKnobDraw(null, 0);
                    var e = this.volumeControlClasses.slice(0, 3);
                    this.$volumeControl.removeClass(e.join(" ")).addClass(this.volumeControlClasses[3]), u.setVolume(0), this.muted = !0
                }
            },
            yOffsetFromKnobCenter: null,
            knobMaxY: null,
            knobMinY: null,
            fillRadius: 3,
            volumeKnobMouseDown: function(e) {
                this.dropDownOverride = !0, this.muted = !1;
                var t = this.$fill,
                    i = this.$slider;
                this.yOffsetFromKnobCenter = e.pageY - t.offset().top, this.knobMinY = i.offset().top, this.knobMaxY = this.knobMinY + i.height(), this.knobMinY += this.fillRadius, this.knobMaxY -= this.fillRadius, e.preventDefault()
            },
            volumeKnobMouseMove: function(e) {
                var t = e.pageY - this.yOffsetFromKnobCenter;
                t = Math.min(this.knobMaxY, Math.max(this.knobMinY, t));
                var i = this.knobMaxY - t,
                    n = i / (this.knobMaxY - this.knobMinY);
                this.volumeFillHeight = i + 2 * this.fillRadius, this.requestVolumeKnobDraw(), this.bufferedSetVolume(4 * n), this.volumePercentage = n, e.preventDefault()
            },
            volumeKnobMouseUp: function() {
                this.dropDownOverride = !1, this.dropDownMouseLeave()
            },
            volumeKnobDraw: function(e, t) {
                t = void 0 !== t ? t : this.volumePercentage;
                var i = t * (this.$slider.height() - 2 * this.fillRadius) + 2 * this.fillRadius;
                this.$fill.height(i);
                var n = this.volumeControlClasses.slice(),
                    o = Math.round(2 * (1 - t)),
                    s = n.splice(o, 1)[0];
                s != this.currentVolumeClass && this.$volumeControl.removeClass(n.join(" ")).addClass(s)
            },
            initFavorite: function() {
                turntable.favorites && (this.hasLoadedFavorites = !0, this.roomId in turntable.favorites && ($(this.nodes.favorite).addClass("favorite-on"), this.isFavorite = !0))
            },
            toggleFavorite: function() {
                if(this.hasLoadedFavorites) {
                    var e = this;
                    this.isFavorite ? ($(e.nodes.favorite).removeClass("favorite-on"), turntable.uRzNYq({
                        api: "room.rem_favorite",
                        roomid: this.roomId,
                        section: this.section
                    }, function(t) {
                        t.success ? (e.isFavorite = !1, delete turntable.favorites[e.roomId]) : $(e.nodes.favorite).addClass("favorite-on")
                    })) : ($(e.nodes.favorite).addClass("favorite-on"), turntable.uRzNYq({
                        api: "room.add_favorite",
                        roomid: this.roomId,
                        section: this.section
                    }, function(t) {
                        t.success ? (e.isFavorite = !0, turntable.favorites[e.roomId] = !0) : $(e.nodes.favorite).removeClass("favorite-on")
                    }))
                }
            },
            onAddedToDOM: function() {
                var e = $("#share-container .header-well-dropdown").css({
                    display: "block",
                    visibility: "hidden"
                });
                y.layouts.zeroClip || (y.layouts.zeroClip = new n.Client), y.layouts.zeroClip.setHandCursor(!0), y.layouts.zeroClip.setText(location.href), y.layouts.zeroClip.glue(this.nodes.zeroClipButton, this.nodes.zeroClipContainer), e.css({
                    display: "",
                    visibility: ""
                });
                var t = this.$view.find(".chatBar"),
                    i = this.$view.find("#chat-input"),
                    o = this.$view.find(".messages");
                i.autosize({
                    callback: $.proxy(function() {
                        var e = i.outerHeight(!0) + 8;
                        i[0], t.height(e), o.css("bottom", e), this.updateChatScroll()
                    }, this)
                });
                var s = this.$view.find(".edit-description");
                s.autosize(), this.$eventBus.trigger("Room.visible"), this.$scene = $(this.nodes.roomArea), this.$header = $("#header")
            },
            recenterRoomView: function() {
                var e, t, n = $(window),
                    o = $("html"),
                    s = {
                        width: {
                            level: void 0,
                            numLevels: 3
                        },
                        height: {
                            level: void 0,
                            numLevels: 2
                        }
                    };
                return alterCSS = i.makeDrawer(null, function() {
                    var i = [],
                        n = [];
                    for(var r in s) if(s.hasOwnProperty(r)) {
                        e = s[r].level;
                        for(var a = 0; s[r].numLevels > a; a++) t = r + "-level-" + a, a === e ? n.push(t) : i.push(t)
                    }
                    o.removeClass(i.join(" ")).addClass(n.join(" ")), turntable.cjAgpz.checkPanelLayout()
                }), function(e) {
                    var t, i = n.width(),
                        o = n.height();
                    t = i >= 1262 ? 2 : i >= 1024 ? 1 : 0, currentHeightLevel = o > 700 ? 1 : 0, (e || t !== s.width.level || currentHeightLevel !== s.height.level) && (s.width.level = t, s.height.level = currentHeightLevel, alterCSS())
                }
            }(),
            layout: "single",
            visibleLayout: "single",
            setPanelLayout: function(e) {
                this.layout = e, this.checkPanelLayout(), this.visibleLayout != this.layout && this.showRoomTip("Sorry, the layout you've chosen doesn't fit your window size. Please select a different layout or resize your window."), this.$view.find("." + e + "-panel").addClass("selected").siblings(".selected").removeClass("selected")
            },
            checkPanelLayout: function() {
                "dual" === this.layout && $(window).width() >= 1262 ? this.showDualPanels() : this.showSinglePanel()
            },
            showDualPanels: function() {
                if("dual" !== this.visibleLayout) {
                    var e = this.$view,
                        t = e.find("#left-panel"),
                        i = t.find(".floating-panel-tabs"),
                        n = e.find("#right-panel"),
                        o = n.find(".floating-panel-tabs"),
                        s = e.find("#playlist-container, #room-info-container");
                    i.append(s).addClass("tabs-2"), t.removeClass("hidden"), o.addClass("tabs-1");
                    var r = [i, o];
                    $.each(r, function(e, t) {
                        0 === t.children(".selected").length && t.children().first().addClass("selected")
                    }), this.visibleLayout = "dual"
                }
            },
            showSinglePanel: function() {
                if("single" !== this.visibleLayout) {
                    var e = this.$view,
                        t = e.find("#left-panel"),
                        i = (t.find(".floating-panel-tabs"), e.find("#right-panel")),
                        n = i.find(".floating-panel-tabs"),
                        o = e.find("#playlist-container, #room-info-container");
                    t.addClass("hidden"), o.removeClass("selected"), n.append(o).removeClass("tabs-1"), this.visibleLayout = "single"
                }
            },
            setupRoomSettingsDropdown: function() {
                if(this.hasModPowers()) {
                    var e = $("#room-settings-container").show();
                    e.find(".nib").tipsy({
                        gravity: "e",
                        fade: !0,
                        opacity: 1
                    }).on("click", function() {
                        $(this).parent().toggleClass("closed")
                    }), $("#save-description-btn").tipsy({
                        gravity: "e",
                        fade: !0,
                        opacity: 1
                    }), $("#edit-description-option, #save-description-btn").on("click", $.proxy(this.toggleEditDesc, this)), this.roomData.metadata.screen_uploads_allowed && g.acl > 1 ? $("#edit-screens-option").show().on("click", $.proxy(this.showScreenEditor, this)) : $("#edit-screens-option").hide()
                }
            },
            removeRoomSettingsDropdown: function() {
                var e = $("#room-settings-container");
                e.hide().find(".nib").off("click"), $("#edit-description-option, #save-description-btn").off("click"), $("#edit-screens-option").off("click")
            },
            setupRoom: function(e) {
                var t = e.metadata;
                $(this.nodes.roomName).text(e.name);
                var n = t.sticker_placements;
                if(n && $(document).trigger("add_sticker_placements", n), this.setupSharing(e.name), this.updateRoomDesc(e), $("#room-info .room-name").text(e.name), e.metadata.creator) {
                    var o = e.metadata.creator && e.metadata.creator.userid;
                    $("#room-info .creator").text(i.safeText(e.metadata.creator.name)).on("click", function(e) {
                        e.preventDefault(), RFmAZA.callback("profile", o)
                    })
                }
                if(this.hasModPowers() ? this.setupRoomSettingsDropdown() : this.removeRoomSettingsDropdown(), e.metadata.songlog) {
                    $("#song-log").empty();
                    for(var s = 0; e.metadata.songlog.length > s; s++) this.addToSongLog(e.metadata.songlog[s])
                }
                if(!this.GVAGXL) {
                    window.RFmAZA = this.GVAGXL = this.makeRoomView(), this.currentRoomViewType = this.GVAGXL.attributes.type;
                    var r = this.GVAGXL.$node;
                    $(this.nodes.roomArea).css({
                        width: r.css("width"),
                        height: r.css("height")
                    }).append(this.GVAGXL.node), this.recenterRoomView(!0), this.GVAGXL.attributes.$eventBus.trigger("RoomView.visible")
                }
                if(this.muted === !0 || 0 === this.volumePercentage);
                else {
                    var a = parseFloat(i.getSetting("volume")) || u.volume;
                    u.setVolume(a), this.bufferedSetVolume = i.rateLimit(u, u.setVolume, 200), this.$fill = $("#volume-fill"), this.$slider = $("#volume-slider"), this.$volumeControl = $("#volume-control"), this.volumePercentage = a / 4, this.requestVolumeKnobDraw = i.makeDrawer(this, this.volumeKnobDraw), this.volumeKnobDraw()
                }
            },
            makeRoomView: function(e, t) {
                e || (e = this.roomData), t || (t = this.section || e.metadata.listeners > 400 ? "concert" : "room");
                var i = new p({
                    type: t,
                    numDjSpots: e.metadata.max_djs,
                    callback: this.GVAGXLCallback,
                    roomData: this.roomData,
                    listenerids: this.listenerids,
                    crowdControl: this.crowdControl,
                    $eventBus: this.$eventBus
                });
                return i.render(), i
            },
            switchRoomView: function() {
                var e, t, n, o = this.currentRoomViewType,
                    s = this.GVAGXL,
                    r = s.$node;
                if("concert" === o) {
                    e = "room", t = this.makeRoomView(null, e);
                    var a = this.roomData.metadata;
                    t.updateTotalListeners(a.listeners), t.updateCrowdVotes(a.upvotes - this.upvoters.length), t.updateStage(), t.moveNeedle(this.getScore()), n = t.$node, n.css({
                        "z-index": -1,
                        visibility: "hidden"
                    }).appendTo(this.nodes.roomArea), window.RFmAZA = this.GVAGXL = t, this.recenterRoomView(!0), s.config.origin;
                    var l = !1,
                        u = $.proxy(function() {
                            if(!l) {
                                if(l = !0, r.remove(), this.currentSong) {
                                    var e = this.currentSong.metadata;
                                    s.clear_marquees(), t.newsong(this.roomData.metadata.currentDj.indexOf(this.djids), e.artist, e.song, Math.round(this.currentSongEndTime - i.now() / 1e3), this.currentSong.snaggable)
                                }
                                s.cleanup(), n.css({
                                    "z-index": "",
                                    visibility: "visible"
                                }), t.attributes.$eventBus.trigger("RoomView.visible"), this.$eventBus.trigger("roomViewZoomChange")
                            }
                        }, this);
                    r.css({
                        transform: "scale(1.5, 1.5)",
                        "transform-origin": "top center"
                    }).one(i.transitionEnd, u), window.setTimeout(u, 4e3)
                } else {
                    if("room" !== o) return;
                    e = "concert", t = this.makeRoomView(null, e);
                    var a = this.roomData.metadata;
                    t.updateTotalListeners(a.listeners), t.updateCrowdVotes(a.upvotes - this.upvoters.length), t.updateStage(), t.moveNeedle(this.getScore()), n = t.$node, t.config.origin, n.css({
                        transform: "scale(1.5, 1.5)",
                        "transform-origin": "top center"
                    }).appendTo(this.nodes.roomArea), window.RFmAZA = this.GVAGXL = t, this.recenterRoomView(!0), window.setTimeout($.proxy(function() {
                        if(r.remove(), this.currentSong) {
                            var e = this.currentSong.metadata;
                            s.clear_marquees(), t.newsong(this.roomData.metadata.currentDj.indexOf(this.djids), e.artist, e.song, Math.round(this.currentSongEndTime - i.now() / 1e3), this.currentSong.snaggable)
                        }
                        s.cleanup();
                        var o = !1,
                            a = $.proxy(function() {
                                o || (o = !0, t.attributes.$eventBus.trigger("RoomView.visible"), this.$eventBus.trigger("roomViewZoomChange"))
                            }, this);
                        n.css({
                            transform: ""
                        }).one(i.transitionEnd, a), window.setTimeout(a, 4e3)
                    }, this), 0)
                }
                this.currentRoomViewType = e
            },
            setupSharing: function(e) {
                var t = this,
                    n = function() {
                        if(t.currentSong) {
                            var e = t.currentSong.metadata.coverart;
                            if(e) return e.replace("_50", "_100")
                        }
                        return ""
                    },
                    o = function() {
                        var e = "";
                        return t.currentSong && (e = "Now playing: " + t.currentSong.metadata.artist + " - " + t.currentSong.metadata.song), e
                    },
                    s = function() {
                        var t = e;
                        return t.match(/^the/i) || (t = "the " + t), t.match(/room$/i) || (t += " room"), t
                    },
                    r = function() {
                        var e = [(t.isDj() ? "DJing in " : "I'm listening to ") + s() + ".", " Come hang out!", " \u266b\u266a", " #turntablefm"],
                            i = [1, -2, -1];
                        t.currentSong && (e.splice(2, 0, " Now playing " + t.currentSong.metadata.artist, ": " + t.currentSong.metadata.song), i.splice(2, 0, 3));
                        for(var n = 0, o = 0; e.length > o; o++) n += e[o].length;
                        for(var o = 0; i.length > o && n > 120; o++) {
                            var r = i[o];
                            0 > r && (r += e.length), n -= e[r].length, e[r] = ""
                        }
                        return encodeURIComponent(e.join(""))
                    },
                    a = function(e, t) {
                        _gaq.push(["_trackEvent", "share", e, t])
                    },
                    l = encodeURIComponent(location.href);
                $("#share-email").click(function() {
                    var t = o(),
                        i = s(),
                        n = "Let's hang out and play music together",
                        r = "Hey there,\n\nCome DJ with me at " + location.href + "\n\nI'm in " + i + " rocking out right now. Invite anyone else you want by sending them the room link.\n\n" + t;
                    a("email", e), window.open("mailto:?subject=" + encodeURIComponent(n) + "&body=" + encodeURIComponent(r))
                }), $("#share-twitter").click(function() {
                    var t = r(),
                        i = 600,
                        n = 300,
                        o = screen.width / 2 - i / 2,
                        s = screen.height / 3 - n / 2;
                    a("twitter", e), window.open("http://twitter.com/share?text=" + t + "&url=" + l, "tweet", "menubar=0,resizable=0,width=" + i + ",height=" + n + ",left=" + o + ",top=" + s)
                }), $("#share-facebook").click(function() {
                    r();
                    var t = s(),
                        u = n(),
                        d = "turntable.fm+lets+you+listen+to+music+at+the+same+time+with+your+friends.",
                        c = o();
                    c && (d = c);
                    var h = 1e3,
                        p = 460,
                        f = screen.width / 2 - h / 2,
                        m = screen.height / 3 - p / 2;
                    a("facebook", e), window.open("https://www.facebook.com/dialog/feed?app_id=127146244018710&redirect_uri=" + encodeURIComponent("http://" + location.host + "/close_window") + "&link=" + l + "&picture=" + u + "&caption=Come+join+me+and+let's+listen+to+music+together" + "&description=" + d + "&name=I'm+in+" + i.title(t) + "+on+turntable.fm", "fb", "menubar=0,resizable=0,width=" + h + ",height=" + p + ",left=" + f + ",top=" + m)
                })
            },
            refreshFacebookToken: function() {
                setTimeout(function() {
                    turntable.uRzNYq({
                        api: "user.update_facebook_token",
                        fbtoken: USER_FBTOKEN
                    })
                }, 3e4)
            },
            addToSongLog: function(e) {
                var t = $("#song-log"),
                    n = $(i.buildTree(y.layouts.songView(this, e)));
                t.find(".song").length % 2 && n.addClass("nth-child-even"), t.prepend(n), this.updateScoreInSongLog(e.score || .5);
                var o = "none" !== t.closest("#song-log-panel").css("display") && "none" !== $("#room-info").css("display"),
                    s = function() {
                        var e = n.find(".dj-info").width() + 16;
                        n.find(".details").css("right", e)
                    };
                o ? s() : this.$eventBus.one("SongLog.visible", s)
            },
            songViewMouseEnter: function(e) {
                var t = $(e.target);
                t.closest(".song").append($(i.buildTree(["div#song-add-menu", ["div.btn.queue",
                {
                    data: {
                        site: "queue"
                    }
                }],
                    ["div.btn.amazon",
                    {
                        data: {
                            site: "amazon"
                        }
                    }],
                    ["div.btn.itunes",
                    {
                        data: {
                            site: "itunes"
                        }
                    }],
                    ["div.btn.lastfm",
                    {
                        data: {
                            site: "lastfm"
                        }
                    }],
                    ["div.btn.spotify",
                    {
                        data: {
                            site: "spotify"
                        }
                    }],
                    ["div.btn.rdio",
                    {
                        data: {
                            site: "rdio"
                        }
                    }]
                ])).on("click", ".btn", this.songLogAddClick))
            },
            songViewMouseLeave: function(e) {
                $(e.target).closest(".song").find("#song-add-menu").remove()
            },
            songLogAddClick: function(e) {
                var t = $(e.target),
                    i = t.closest(".song").data("songData"),
                    n = t.data("site");
                this.addSong(n, i)
            },
            updateScoreInSongLog: function(e) {
                var t = $("#song-log-container .score:first");
                e >= .5 ? t.addClass("scoregood").removeClass("scorebad") : t.removeClass("scoregood").addClass("scorebad"), t.html(Math.round(100 * e) + "%")
            },
            samplePlay: function(e) {
                var t = $(e).closest(".song");
                u.samplePlay(t.data("songData")._id, this.sampleCallback), t.addClass("currentPreview")
            },
            sampleCallback: function(e, t) {
                "progress" == e ? $(".currentPreview .progress").css({
                    width: t
                }) : "stop" == e && ($(".currentPreview .progress").css({
                    width: "0%"
                }), $(".currentPreview").removeClass("currentPreview"))
            },
            hasModPowers: function(e) {
                return e = e || g.id, this.isMod(e) || this.isSuperuser(e)
            },
            isMod: function(e) {
                return e = e || g.id, -1 != $.inArray(e, this.roomData.metadata.moderator_id)
            },
            isSuperuser: function(e) {
                if(e = e || g.id, e == g.id) return g.acl > 0;
                var t = this.userMap[e];
                return t && t.acl > 0
            },
            showScreenEditor: function() {
                $("#room-settings-container").addClass("closed");
                var e = new f;
                e.render(), e.show()
            },
            toggleEditDesc: function() {
                var e = $("#room-info"),
                    t = e.find("#room-settings-container"),
                    i = e.find("#save-description-btn"),
                    n = e.find(".infowrap .description"),
                    o = e.find(".edit-description");
                if(parseInt(o.css("line-height").slice(0, -2)), this.editingRoomDescription) {
                    var s = this,
                        r = function() {
                            s.editingRoomDescription = !1, t.show(), i.hide(), o.hide(), n.show(), e.find(".room-info-wrap").off("scroll")
                        };
                    o.val() != this.description ? turntable.uRzNYq({
                        api: "room.modify",
                        roomid: this.roomId,
                        section: this.section,
                        description: o.val()
                    }).done(function(e) {
                        e.success && r()
                    }) : r()
                } else o.val(this.description).width(n.width()), t.hide().addClass("closed"), i.show(), this.editingRoomDescription = !0, n.hide(), o.css("display", "block").trigger("autosize").focus(), o[0].selectionStart = o.val().length, e.find(".room-info-wrap").on("scroll", function() {
                    this.scrollTop = 0
                })
            },
            updateRoomDesc: function(e) {
                var t = ($("#room-info .default-message"), $("#room-info .description"));
                if(e.description && "" !== e.description) t.html(i.linkify(i.brText(i.spaceToNbsps(i.safeText(e.description))))).removeClass("default-message");
                else {
                    var n = "No room description. ";
                    n += this.hasModPowers() ? "Click the icon above to write one!" : "Ask a moderator to write one!", t.text(n).addClass("default-message")
                }
                this.description = e.description
            },
            updateTotalListeners: function(e) {
                $(".total-listener-count").text(e)
            },
            facebookSendDialog: function() {
                var e = 465,
                    t = 225,
                    i = screen.width / 2 - e / 2,
                    n = screen.height / 3 - t / 2;
                window.open("https://www.facebook.com/plugins/send_button_form_shell.php?api_key=113869198637480&nodeImageURL=https://s3.amazonaws.com/static.turntable.fm/images/record_logo.gif&nodeSummary=turntable.fm+lets+you+listen+to+music+at+the+same+time+with+your+friends.&nodeTitle=Play+music+together.&nodeURL=" + encodeURIComponent(location.href), "fb", "menubar=0,resizable=0,width=" + e + ",height=" + t + ",left=" + i + ",top=" + n)
            },
            feedbackShow: function() {
                FBY.showForm("633"), this.feedbackifyInstrument()
            },
            helpShow: function() {
                FBY.showForm("3178"), this.feedbackifyInstrument()
            },
            feedbackifyInstrument: function() {
                var e = $("#feedbackify .fsend");
                if(0 == e.length) return setTimeout(this.feedbackifyInstrument, 300), void 0;
                var t = e.filter(".new");
                if(0 == t.length) {
                    var t = e.clone(!1).addClass("new");
                    t.insertAfter(e), t.click(function() {
                        var e = $("#feedbackify .feedback-holder textarea"),
                            t = e.val();
                        "string" == typeof t && e.val(t + "\n\nSent by user " + g.id + "\n" + navigator.userAgent), $(".fsend.new").hide(), $(".fsend.old").show(), YUI().use("node-event-simulate", function(e) {
                            e.one(".fsend.old").simulate("click")
                        })
                    })
                } else t.show();
                e.addClass("old").hide()
            },
            listRoomsShow: function() {
                i.buildTree(y.layouts.listRooms($.proxy(this.createRoom, this), $.proxy(this.closeListRooms, this)), y);
                var e;
                this.roomList = new h(this.roomId), y.modal.show(), e = y.modal.$node.find(".roomIndexContainer"), e.append(this.roomList.view), e.on("click", ".roomRow", y.modal.close), y.modal.$node.find(".randomRoom").click(y.modal.close), y.modal.$node.find(".content").css({
                    padding: "0 0 1em 0",
                    background: "#3c3c3c"
                })
            },
            listRoomsHide: function() {
                this.roomList.cleanup(), this.roomList = null
            },
            closeListRooms: function() {
                this.listRoomsHide(), y.modal.close()
            },
            createRoom: function() {
                this.listRoomsHide(), y.modal.close({
                    showLoadingTransition: !0
                }), v.createRoomShow()
            },
            addUserToMap: function(e) {
                e.fanof = -1 !== $.inArray(e.userid, g.fanOf), e.isBuddy = -1 !== $.inArray(e.userid, g.buddies), this.userMap[e.userid] = e
            },
            addListener: function(e, t) {
                if(null == this.GVAGXL) return this.loadRoomStateTask ? this.loadRoomStateTask.done($.proxy(function() {
                    this.addListener(e)
                }, this)) : LOG("Attempted to add listener without a room manager"), void 0;
                var i = this.userMap[e],
                    n = this.listenerMap[e];
                n ? this.updateUserInRoomView(i) : (this.GVAGXL.addListener(i, this.getEntropyForUser(i)), this.updateUserVoteInRoomView(i), this.listenerMap[e] = !0), -1 === this.listenerids.indexOf(e) && this.listenerids.push(e), t || this.updateGuestList(), (i.fanof || i.isBuddy) && (i.status = "available", i.roomName = this.name, turntable.buddyList.addBuddy(i, !0), i.userid in turntable.buddyList.pmWindows && turntable.buddyList.pmWindows[i.userid].updateStatus(i.status))
            },
            removeListener: function(e) {
                if(!this.userMap.hasOwnProperty(e)) return LOG(e + " is not a listener!"), void 0;
                var t = this.userMap[e];
                t && $(window).trigger("removeListener", [t]), delete this.listenerMap[e];
                var i = this.listenerids.indexOf(e); - 1 !== i && this.listenerids.splice(i, 1), i = this.djids.indexOf(e), -1 !== i && this.djids.splice(i, 1), this.GVAGXL.removeListener(t), this.updateGuestList(), this.$eventBus.trigger("Room.removeListener", e)
            },
            updateUser: function(e) {
                var t = this.userMap[e.userid];
                t && (e.hasOwnProperty("avatarid") && (t.avatarid = e.avatarid), e.hasOwnProperty("name") && e.name != t.name && (this.appendAction(t.userid, t.name, " shall now be known as " + e.name + ".", "action"), t.name = e.name), e.hasOwnProperty("fans") && this.handleFanned(e), this.updateUserInRoomView(t))
            },
            updateUserInRoomView: function(e) {
                var t = $.inArray(e.userid, this.djids); - 1 == t ? (this.GVAGXL.removeListener(e), this.GVAGXL.addListener(e, this.getEntropyForUser(e))) : (this.GVAGXL.removeDj(t), this.GVAGXL.addDj(e, t), e.userid == this.roomData.metadata.currentDj && this.GVAGXL.set_active_dj(t)), this.updateUserVoteInRoomView(e)
            },
            updateUserVoteInRoomView: function(e) {
                -1 != $.inArray(e.userid, this.upvoters) && this.GVAGXL.update_vote(e, "up")
            },
            addDj: function(e) {
                if(-1 != $.inArray(e, this.djids) && this.removeDj(e), this.djids.length < this.roomData.metadata.max_djs) {
                    var t = this.userMap[e];
                    this.GVAGXL.removeListener(t), this.GVAGXL.addDj(t, this.djids.length), this.updateUserVoteInRoomView(t), this.djids.push(e), this.roomData.metadata.djs = this.djids.slice(), this.updateGuestList()
                } else this.loadRoomState()
            },
            removeDj: function(e) {
                var t = $.inArray(e, this.djids);
                if(-1 != t) {
                    for(this.djids.splice(t, 1), this.roomData.metadata.djs = this.djids.slice(), this.GVAGXL.removeDj(t); this.djids.length > t; t++) {
                        this.GVAGXL.removeDj(t + 1);
                        var i = this.djids[t],
                            n = this.userMap[i];
                        this.GVAGXL.addDj(n, t), i == this.roomData.metadata.currentDj ? this.GVAGXL.set_active_dj(t) : this.updateUserVoteInRoomView(n)
                    }
                    var o = this.userMap[e];
                    o && !this.section && (this.GVAGXL.addListener(o, this.getEntropyForUser(o)), this.updateUserVoteInRoomView(o)), this.updateGuestList()
                }
            },
            uGveFa: function() {
                if(!this.isDj()) {
                    if(0 == d.fileids.length) return i.buildTree([c.TourOverlay,
                    {
                        childNodes: [RFmAZA.layouts.welcomeViewFive(!0, RFmAZA.positionTourQueue)]
                    }], y), y.tourOverlay.show(), void 0;
                    var e = this;
                    turntable.uRzNYq({
                        api: "room.add_dj",
                        roomid: this.roomId,
                        section: this.section
                    }, function(t) {
                        t.success || e.isDj() || turntable.showAlert(t.err)
                    })
                }
            },
            quitDj: function() {
                this.isDj() && turntable.uRzNYq({
                    api: "room.rem_dj",
                    roomid: this.roomId,
                    section: this.section
                })
            },
            isDj: function(e) {
                return e || (e = g.id), -1 != $.inArray(e, this.djids)
            },
            guestListSort: function(e, t) {
                var i = e.name.toLowerCase(),
                    n = t.name.toLowerCase();
                return n > i ? -1 : i > n ? 1 : 0
            },
            updateGuestList: function() {
                for(var e = [], t = [], n = [], o = [], s = [], r = $(".guest-list-container .guests"), a = this.userMap, l = (this.roomData.metadata.moderator_id, g.fanOf), u = 0, d = this.djids, c = d.length; c > u; u++) n.push(a[d[u]]);
                for(var u = 0, h = this.listenerids, c = h.length; c > u; u++) d.indexOf(h[u]) > -1 || (this.isSuperuser(h[u]) ? e.push(a[h[u]]) : this.isMod(h[u]) ? t.push(a[h[u]]) : l.indexOf(h[u]) > -1 ? o.push(a[h[u]]) : s.push(a[h[u]]));
                t = e.sort(this.guestListSort).concat(t.sort(this.guestListSort)), s = o.sort(this.guestListSort).concat(s.sort(this.guestListSort));
                var p = r.find(".guest.selected").data("id");
                r.children().remove();
                for(var f = [n, t, s], m = ["DJs", "Moderators", "Audience"], v = 0, b = f.length; b > v; v++) {
                    var w = f[v];
                    w.length > 0 && r.append(i.buildTree(["div.separator", ["div.text", m[v]]]));
                    for(var u = 0, c = w.length; c > u; u++) {
                        var _ = p && p == w[u].userid;
                        r.append(i.buildTree(y.layouts.guestListName(w[u], this, _)))
                    }
                }
                var S, k = t.length + s.length;
                void 0 === this.section && (k += n.length), S = 1 === k ? k + " person here" : k + " people here", $("span#totalUsers").text(S), this.updateGuestListMenu()
            },
            addGuestListMenu: function(e, t) {
                this.guestOptionsHoverTimer && clearTimeout(this.guestOptionsHoverTimer), $("div.guest.selected").removeClass("selected");
                var n = $(i.buildTree(y.layouts.guestOptions(e, this))).css({
                    visibility: "hidden"
                });
                t.addClass("selected").parent().append(n), this.updateGuestListMenu(n, t)
            },
            updateGuestListMenu: function(e, t) {
                if(e || (e = $("div.guestOptionsContainer")), t || (t = $("div.guest.selected")), e.length && t.length) {
                    var i = t.position().top,
                        n = t.parent().scrollTop(),
                        o = i + n - e.height() + 6;
                    (0 > o || n > o && i + n + t.height() + e.height() < e.parent()[0].scrollHeight) && (o = i + n + t.height() - 5, e.addClass("nibTop")), $(e).css({
                        top: o + "px",
                        visibility: "visible"
                    })
                }
            },
            removeGuestListMenu: function(e) {
                $("div.guest.selected").removeClass("selected"), $("div.guestOptionsContainer").fadeOut("fast", function() {
                    $(this).remove(), e && e()
                })
            },
            unloadWarning: function() {
                return this.isDj() ? "Warning: if you leave this page, you'll give up your DJ spot." : void 0
            },
            postUsernameRegex: /^([^A-Za-z0-9!@#$%^&*()+=_\[\]{}~|;:\'"<>,.?\/\\ -]|[!);:\',.?]*(\s|$))/,
            isMention: function(e) {
                if(e) {
                    var t = g.displayName.toLowerCase(),
                        e = e.toLowerCase();
                    "@" !== t[0] && (t = "@" + t);
                    for(var i, n = e.indexOf(t), o = t.length; - 1 !== n;) {
                        if(i = n + o, this.postUsernameRegex.test(e.substring(i))) return !0;
                        n = e.indexOf(t, n + 1)
                    }
                    return !1
                }
            },
            showChatMessage: function(e, t, i) {
                if(-1 == $.inArray(e, this.ignoredUsers)) {
                    var n = this.isMention(i);
                    if("/me " === i.substr(0, 4)) this.appendAction(e, t, i.substr(3)), this.GVAGXL && this.GVAGXL.speak(this.userMap[e], "*" + i.substr(4) + "*");
                    else {
                        var o = n ? "mention" : void 0;
                        this.appendChatMessage(e, t, i, o), this.GVAGXL && this.GVAGXL.speak(this.userMap[e], i)
                    }!n || "on" !== this.dingSetting && "mention" !== this.dingSetting ? "on" === this.dingSetting && u.playEphemeral(UI_SOUND_CHAT, !0) : u.playEphemeral(UI_SOUND_MENTION, !0)
                }
            },
            lastChatSpeakerid: null,
            $lastChatMessage: null,
            appendChatMessage: function(e, t, n, o) {
                var s, r = !1;
                if(this.lastChatSpeakerid === e) s = this.$lastChatMessage;
                else {
                    s = $(i.buildTree(y.layouts.chatMessage));
                    var a;
                    a = "TURNTABLE" == t ? "url(http://static.turntable.fm/roommanager_assets/props/loudspeaker.png)" : "url(" + this.userMap[e].images.headfront + ")", s.find(".avatar").css("background-image", a), s.find(".speaker").text(t).data("userid", e), r = !0, this.lastChatSpeakerid = e, this.$lastChatMessage = s
                }
                var l = $(i.buildTree(["div.text"]));
                n = i.stripComboDiacritics(n), n.length > 446 && (l.attr("title", ": " == n.substr(0, 2) ? n.substr(2) : n), n = n.substr(0, 440) + "..."), l.html(i.messageFilter(n)), o && s.addClass(o), r ? (s.find(".textContainer").append(l), this.appendMessage(s)) : (this.checkChatScroll(), s.find(".textContainer").append(l), this.updateChatScroll())
            },
            appendAction: function(e, t, n, o) {
                this.lastChatSpeakerid = null;
                var s = $(i.buildTree(y.layouts.actionMessage));
                s.find(".subject").text(t).data("userid", e), s.find(".text").html(i.messageFilter(n)), o && s.addClass(o), this.appendMessage(s)
            },
            emptyMessageRemoved: !1,
            appendMessage: function(e) {
                var t = this.nodes.chatLog,
                    i = $(t);
                this.emptyMessageRemoved || (i.find(".default-message").remove(), this.emptyMessageRemoved = !0), this.checkChatScroll(), i.append(e), this.updateChatScroll();
                var n = $(t).find(".message");
                if(n.length > 500) {
                    n = n.slice(0, 2);
                    var o = n.first().outerHeight(!0) + n.last().outerHeight(!0);
                    n.remove(), this.chatScrollBottom || (t.scrollTop -= o)
                }
            },
            chatScrollBottom: !0,
            checkChatScroll: function() {
                var e = this.nodes.chatLog,
                    t = e.scrollTop + e.offsetHeight + 20 >= e.scrollHeight;
                this.chatScrollBottom = t
            },
            updateChatScroll: function() {
                var e = this.nodes.chatLog;
                this.chatScrollBottom && (e.scrollTop = e.scrollHeight)
            },
            votes: 0,
            upvoters: [],
            currentSong: null,
            setCurrentSong: function(e, t) {
                LOG("setCurrentSong");
                var n = i.now() / 1e3,
                    o = e ? e.current_dj : null,
                    s = e ? e.current_song : null;
                o && s || (o = s = null);
                var r = !(this.currentSong && s && this.currentSong._id == s._id && .1 > Math.abs(this.currentSong.starttime - s.starttime));
                this.resyncStream || (this.upvoters = []);
                var a = this.roomData.metadata;
                r && (LOG("song change"), httpStream.closeStream(), this.streamStarted = !1, a.currentDj && (this.userMap[a.currentDj].points = this.currentDjPointsAtSongStart + this.currentDjPointDelta, this.previousDjid = a.currentDj, this.previousDjPointDelta = this.currentDjPointDelta, a.currentDj == g.id && (g.djPoints = this.userMap[a.currentDj].points)), i.notEmpty(t) && (this.userMap[o].points = t), o && (this.currentDjPointsAtSongStart = this.userMap[o].points - e.upvotes), this.currentDjPointDelta = 0, this.timers.WSvQHQ && (clearTimeout(this.timers.WSvQHQ), this.timers.WSvQHQ = null)), a.currentDj === o && i.notEmpty(t) && (LOG("same DJ"), this.GVAGXL.set_dj_points(t)), a.currentDj = o;
                var l = this.resyncStream;
                if(this.resyncStream = !1, s) {
                    var u = s.metadata,
                        c = n - turntable.clientTimeDelta;
                    if(s.starttime > c && (c = s.starttime, turntable.clientTimeDelta = n - c), e.netloc && e.sync && e.sync.current_seg) {
                        var h = e.netloc + this.roomId,
                            p = function() {
                                httpStream.loadStream(h, e.sync.current_seg, e.sync.tstamp, 500)
                            };
                        r ? (LOG("seting timeout to load stream"), setTimeout(p, 500)) : l && p()
                    } else LOG("scheduling resync stream"), this.scheduleResyncStream(2e3);
                    var f = $.inArray(a.currentDj, this.djids);
                    ASSERT(-1 !== f), r ? (LOG("song change calling loadingsong"), this.appendAction(a.currentDj, this.userMap[a.currentDj].name, ' started playing "' + s.metadata.song + '" by ' + s.metadata.artist), this.GVAGXL.loadingsong(f)) : (LOG("not song change, setting active DJ"), this.GVAGXL.set_active_dj(f)), this.currentSong = s, this.currentSongEndTime = s.starttime + turntable.clientTimeDelta + u.length, LOG("current song end time: " + this.currentSongEndTime), LOG("current time: " + Date.now() / 1e3)
                } else LOG("no song"), this.GVAGXL.nosong(), this.currentSong = null;
                if(r) if(LOG("current dj? " + a.currentDj == g.id), d.setCurrentSong(a.currentDj == g.id ? s : null), a.currentDj == g.id) {
                    for(; this.songsDjed.length && n > this.songsDjed[0].time + 10800;) this.songsDjed.shift();
                    for(var m = !1, v = 0; this.songsDjed.length > v; v++) if(this.songsDjed[v].fileId == s._id) {
                        m = !0;
                        break
                    }
                    m ? turntable.WvZjta() > 12e4 : this.songsDjed.push({
                        fileId: s._id,
                        time: n
                    })
                } else turntable.WvZjta() > 18e5 && "4f594a82a3f751581000eb80" != this.roomId && this.isDj() && (this.showRoomTip("It looks like you've been falling asleep at the deck. How about taking a break from DJing?"), this.quitDj());
                if(this.currentSong && !this.GVAGXL.currentSong) {
                    var u = this.currentSong.metadata;
                    this.GVAGXL.newsong($.inArray(this.roomData.metadata.currentDj, this.djids), u.artist, u.song, Math.round(this.currentSongEndTime - i.now() / 1e3), this.currentSong.snaggable)
                }
            },
            getCurrentSongProgress: function() {
                var e = this.currentSong.metadata;
                return 1 - (this.currentSongEndTime - i.now() / 1e3) / e.length
            },
            WSvQHQ: function() {
                this.timers.WSvQHQ = null, 1 == this.numDjs() && (u.oeDZMm(!0), this.showRoomTip("We can only play you a preview of your song until someone else also starts DJing. Everyone else can still hear the song playing."))
            },
            getScore: function(e) {
                return e || (e = this.roomData.metadata), (e.upvotes - e.downvotes + e.listeners) / (2 * e.listeners)
            },
            updateVotes: function(e, t) {
                e.upvotes - e.downvotes;
                var i = this.getScore(e);
                i && (this.GVAGXL && this.GVAGXL.moveNeedle(i), this.updateScoreInSongLog(i)), this.upvoters.length;
                for(var n = 0; e.votelog.length > n; n++) {
                    var o = e.votelog[n],
                        s = this.userMap[o[0]];
                    if(s) {
                        null == this.GVAGXL ? this.loadRoomStateTask ? this.loadRoomStateTask.done($.proxy(function() {
                            this.GVAGXL.update_vote(s, o[1])
                        }, this)) : window.setTimeout($.proxy(function() {
                            this.updateVotes(e, t)
                        }, this), 1e3) : this.GVAGXL.update_vote(s, o[1]);
                        var r = $.inArray(s.userid, this.upvoters);
                        "up" == o[1] && -1 == r ? this.upvoters.push(s.userid) : "down" == o[1] && -1 != r && this.upvoters.splice(r, 1)
                    }
                }
                if(t) {
                    var a = this.roomData.metadata.current_dj;
                    ASSERT(a, "Somebody voted but no DJ was active"), this.currentDjPointDelta = e.upvotes, this.users[a].points = this.currentDjPointsAtSongStart + this.currentDjPointDelta, this.GVAGXL.set_dj_points(this.users[a].points)
                }
            },
            lobbyRedirect: function(e) {
                var t = "Sorry, you weren't able to enter the room (error " + e + "). Please choose another room.";
                1 == e ? (t = "Due to fire codes, this room is at maximum capacity. We'll escort you back to the lobby.", _gaq.push(["_trackEvent", "room", "deny", "full"])) : 2 == e ? (t = "Looks like you're already in another room. Please close that room before entering another one.", _gaq.push(["_trackEvent", "room", "deny", "otherroom"])) : 3 == e && (t = "The bouncer has decided not to let you in, and will escort you back to the lobby.", _gaq.push(["_trackEvent", "room", "deny", "bouncer"])), turntable.showAlert(t, function() {
                    window.location.href = "/lobby"
                }), this.setCurrentSong(null)
            },
            gotBooted: function(e, t) {
                t || (t = "The Moderator");
                var n = e ? " (Reason: " + e + ")" : "",
                    s = {};
                i.buildTree([o,
                {
                    cssClass: "booted",
                    showCancel: !1,
                    showClose: !1,
                    clickOut: !1,
                    submitCallback: function() {
                        s.modal.close(), window.location.href = "/lobby"
                    }
                }, ["div.section", ["div.unhappyFace"],
                    ["br"], t, " booted you from the room.", n, ["br"],
                    ["br"], "We'll take you back to the lobby to choose a new room.", ["br"]
                ]], s), s.modal.show()
            },
            checkIdle: function() {
                turntable.showAlert("Hey sleepyhead, are you idle? Click OK to continue listening, or you will be escorted to the lobby in two minutes.");
                var e = this;
                this.originalVolume = u.volume, u.setVolume(0), this.timers.checkIdle = setTimeout(function() {
                    e.timers.checkIdle = null, turntable.removeEventListener("unidle", e.cancelIdleBoot), turntable.hideOverlay(), u.setVolume(e.originalVolume), window.location.href = "/lobby"
                }, 12e4), turntable.addEventListener("unidle", this.cancelIdleBoot)
            },
            cancelIdleBoot: function() {
                clearTimeout(this.timers.checkIdle), this.timers.checkIdle = null, turntable.removeEventListener("unidle", this.cancelIdleBoot), turntable.hideOverlay(), u.setVolume(this.originalVolume)
            },
            showRoomTip: function(e, t) {
                var i = $(".roomTip .text");
                i.text(e), this.timers.hideRoomTip ? (clearTimeout(this.timers.hideRoomTip), this.timers.hideRoomTip = null) : $(".roomTip").fadeIn(), setTimeout(function() {
                    i.css("margin-top", ($(".roomTip").height() - i.height()) / 2 + "px")
                }, 0), t && (this.timers.hideRoomTip = setTimeout(this.hideRoomTip, 1e3 * t))
            },
            hideRoomTip: function() {
                $(".roomTip").fadeOut(), this.timers.hideRoomTip && (clearTimeout(this.timers.hideRoomTip), this.timers.hideRoomTip = null)
            },
            handlePM: function(e, t) {
                var i = function() {
                        e && e.senderid && e.text && turntable.buddyList.pmWindows[e.senderid].addPM(e)
                    };
                e.senderid in turntable.buddyList.pmWindows ? (i(), turntable.buddyList.pmWindows[e.senderid].open(t)) : turntable.buddyList.addPMWindow(e.senderid, t, i)
            },
            filterUsersByName: function(e, t) {
                var i, n = [],
                    o = 0,
                    s = e.length,
                    r = this.listenerids,
                    a = this.userMap;
                e.toLowerCase();
                for(var l = 0, u = r.length; u > l && (i = a[r[l]], name = i.name.toLowerCase(), name = "@" == name[0] ? name.slice(1) : name, !(name.substring(0, s) === e && (n[o] = i, o++, o >= t))); l++);
                return n
            },
            chatTextListener: function(e) {
                var t = e.target,
                    n = e.charCode || e.keyCode,
                    o = this;
                if(38 != n && 40 != n && 27 != n && (39 != n || t.selectionEnd != t.value.length) && 13 != n && 9 != n) {
                    $("#typeahead").remove(), this.typeahead = null, this.replaceStartIndex = null, this.suggestion = null;
                    var s = t.value.substring(0, e.target.selectionEnd),
                        r = !1,
                        a = this.lastValidAtSymbolIndex(s);
                    if(a >= 0) {
                        if(r = s.slice(a + 1).toLowerCase(), r === !1) return;
                        var l = this.filterUsersByName(r, 5);
                        if(l.length) {
                            this.typeahead = "name", i.alphabetize(l, "name");
                            var u = i.buildTree(y.layouts.nameSuggest(l));
                            this.suggestion = l[0].name, this.replaceStartIndex = a + 1
                        }
                    }
                    if(!this.typeahead) {
                        var d = this.emojiRegex.exec(s);
                        if(d) {
                            var c = d[3].toLowerCase(),
                                h = i.emojiTypeahead(c, 5);
                            if(h.length) {
                                this.typeahead = "emoji", i.alphabetize(h), h.sort(function(e, t) {
                                    return e.indexOf(c) - t.indexOf(c)
                                });
                                var p = 1 === c.length,
                                    f = !p,
                                    u = i.buildTree(y.layouts.emojiSuggest(h, f));
                                f && (this.suggestion = h[0]), this.replaceStartIndex = s.lastIndexOf(d[3])
                            }
                        }
                    }
                    if(this.typeahead) {
                        $("body").append(u);
                        var m = $("#chat-input").offset();
                        $(u).css({
                            left: m.left + 1 + "px",
                            top: m.top - 5 - $(u).outerHeight(!0) + "px"
                        }), $(".suggestion").click(function(e) {
                            o.chooseSuggestion(!1, $(e.target).text())
                        }).mouseover(function() {
                            var e = $(this);
                            e.hasClass("selected") || (o.suggestion = e.text(), e.addClass("selected").siblings(".selected").removeClass("selected"))
                        })
                    }
                    return !0
                }
            },
            emojiRegex: /([^:](:[\w\d\-_+]+:)?)*:([\w\d\-_+]+)$/,
            chatKeyDownListener: function(e) {
                var t = e.target,
                    i = e.charCode || e.keyCode;
                if(this.typeahead) if(13 == i || 9 == i) {
                    if(this.suggestion) return this.chooseSuggestion(t), !1;
                    this.cancelTypeahead()
                } else {
                    if(38 == i) {
                        var n, o = $(".suggestion.selected");
                        return o.length && (n = o.prev()), n && n.length || (n = $(".suggestion").last()), o.removeClass("selected"), this.suggestion = n.addClass("selected").text(), !1
                    }
                    if(40 == i) {
                        var n, o = $(".suggestion.selected");
                        return o.length && (n = o.next()), n && n.length || (n = $(".suggestion").first()), o.removeClass("selected"), this.suggestion = n.addClass("selected").text(), !1
                    }
                    if(27 == i || 39 == i && t.selectionEnd == t.value.length) return this.cancelTypeahead(), !1
                }
                13 === i && ($(this.nodes.chatForm).submit(), e.preventDefault())
            },
            lastValidAtSymbolIndex: function(e) {
                var t = e.split("@");
                if(t.length > 1) {
                    for(var i = t.length - 2; i >= 0; i--) if(!t[i].length || t[i].length && " " == t[i][t[i].length - 1]) return t.slice(0, i + 1).join("@").length;
                    if("" == t[0]) return 0
                }
                return -1
            },
            chooseSuggestion: function(e, t) {
                if(t = t || this.suggestion, !t) return this.cancelTypeahead(), void 0;
                e || (e = $("#chat-input")[0]), "name" === this.typeahead ? "@" == t[0] && (t = t.slice(1)) : "emoji" === this.typeahead && (t += ":");
                var i = e.value.substring(0, e.selectionEnd),
                    n = e.value.substring(e.selectionEnd),
                    o = i.slice(0, this.replaceStartIndex) + t + " ";
                $(e).val(o + n), e.selectionEnd = e.selectionStart = o.length, this.cancelTypeahead()
            },
            cancelTypeahead: function() {
                this.suggestion = !1, $("#typeahead").remove()
            }
        }
    }());
    return y.layouts = {
        zeroClip: null,
        page: function(e, t) {
            return ["div.roomView", {}, ["div#header",
            {}, ["div##logo.logo"],
                ["div.info",
                {}, ["div.room",
                {}, ["div##favorite.favorite",
                {
                    event: {
                        click: e
                    }
                }],
                    ["div##roomName.name"],
                    ["div.total-listeners", ["span.total-listener-count"], " Listeners"]
                ],
                    ["ul.header-well-buttons#volume-control", ["li.dropdown-container", ["div.header-well-button#volume-button", "Volume"],
                        ["ul.header-well-dropdown.floating-menu.down#volume-dropdown", ["div#volume-slider", ["div#volume-fill", ["div#volume-knob"]]]]
                    ]],
                    ["ul.header-well-buttons#room-controls", ["li.dropdown-container#share-container", ["div.header-well-button#share", "Share"],
                        ["ul.header-well-dropdown.floating-menu.down", ["li.option#share-facebook", "Facebook"],
                            ["li.option#share-twitter", "Twitter"],
                            ["li.option#share-email", "Email"],
                            ["li.option.zeroClipContainer#share-link##zeroClipContainer", "Copy URL", ["div##zeroClipButton.zeroClipButton"]]
                        ]
                    ],
                        ["li.dropdown-container", ["div.header-well-button#help", "Help"],
                            ["ul.header-well-dropdown.floating-menu.down", ["li.option",
                            {
                                event: {
                                    click: function() {
                                        window.open("http://faq.turntable.fm/")
                                    }
                                }
                            }, "Visit the FAQ"],
                                ["li.option#help-button", "Ask for Help"],
                                ["li.option#feedback-button", "Give Feedback"],
                                ["li.option#report-room", "Report Room"]
                            ]
                        ]
                    ]
                ],
                ["button##listRooms#switch-room.tt-button.small.primary.inset", "Switch Room"],
                ["div##userauth.userauthContainer"]
            ], ["div##roomArea#scene"], ["div.roomTip",
            {}, ["div.roomTipClose"],
                ["div.text"]
            ], ["div.floating-panel.hidden#left-panel", ["ul.floating-panel-tabs"]], ["div.floating-panel#right-panel", ["ul.floating-panel-tabs",
            {}, ["li.chat-container", ["div.floating-panel-tab.right-divider", ["div.floating-panel-tab-content", ["span.tab-icon"],
                ["h2", "Chat"]
            ]],
                ["div#chat", ["div##chatLog.messages", ["div.default-message", ["p", "It's a little quiet in here. Start the conversation!"]]],
                    ["div.chatBar.floating-panel-bar",
                    {}, ["div##chatSound.chatsound"],
                        ["div.divider"],
                        ["form##chatForm#chat-form",
                        {}, ["textarea##chatText#chat-input.message-input",
                        {
                            event: {
                                keyup: t
                            },
                            type: "text",
                            placeholder: "enter a message"
                        }]]
                    ]
                ]
            ],
                ["li##playlist#playlist-container", ["div.floating-panel-tab.right-divider.left-divider", ["div.floating-panel-tab-content", ["span.tab-icon"],
                    ["h2", "Queue"]
                ]]],
                ["li#room-info-container.selected", ["div.floating-panel-tab.left-divider", ["div.floating-panel-tab-content", ["span.tab-icon"],
                    ["h2", "Room"]
                ]],
                    ["div#room-info", ["div.infowrap",
                    {}, ["div#room-info-intro", "Welcome to ", ["a.creator"], "'s room,"],
                        ["div.room-info-wrap", ["div.room-name"],
                            ["div#room-settings-container.contextual-popup.closed", ["div.nib",
                            {
                                title: "Room Settings"
                            }, ["div.icon"]],
                                ["ul.options", ["li.option#edit-description-option", "Edit Description"],
                                    ["li.option#edit-screens-option", "Edit Screens"]
                                ]
                            ],
                            ["div#save-description-btn",
                            {
                                title: "Save Room Description"
                            }, ["div.icon", "Save"]],
                            ["div.description-wrap", ["textarea.edit-description"],
                                ["div.description"]
                            ]
                        ]
                    ],
                        ["ul#room-info-nav", ["li#song-log-container", ["div.flat-button.room-info-link", ["h3", "Recently Played Songs"]],
                            ["div#song-log-panel", ["div.floating-panel-header", ["button.back", "Back"],
                                ["span.title", "Recent Songs"]
                            ],
                                ["div#song-log"]
                            ]
                        ],
                            ["li.guest-list-container", ["div.flat-button.room-info-link", ["h3", "People Here"]],
                                ["div#guest-list", ["div.floating-panel-header",
                                {}, ["button.back", "Back"],
                                    ["span.title", ["span#totalUsers"]]
                                ],
                                    ["div.guests"]
                                ]
                            ]
                        ]
                    ]
                ]
            ]]]
        },
        dingMenu: ["ul#ding-menu.floating-menu.up", ["li.option.on",
        {
            data: {
                setting: "on"
            }
        }, "Ding on"],
            ["li.option.mention",
            {
                data: {
                    setting: "mention"
                }
            }, "Ding on Mention"],
            ["li.option.off",
            {
                data: {
                    setting: "off"
                }
            }, "Ding off"]
        ],
        chatMessage: ["div.message",
        {}, ["div.avatar"],
            ["div.speaker"],
            ["div.textContainer"]
        ],
        actionMessage: ["div.message",
        {}, ["span.subject"],
            ["span.text"]
        ],
        nameSuggest: function(e) {
            for(var t = ["div#typeahead",
            {}], i = 0, n = e.length; n > i; i++) {
                var o = 0 == i ? ".selected" : "",
                    s = e[i],
                    r = s.thumbnail;
                t.push(["div.suggestion" + o,
                {}, ["div.avatar",
                {
                    style: {
                        "background-image": "url(" + r + ")"
                    }
                }], e[i].name])
            }
            return t
        },
        emojiSuggest: function(e, t) {
            for(var n = ["div#typeahead",
            {}], o = 0, s = e.length; s > o; o++) {
                var r = t && 0 == o ? ".selected" : "",
                    a = "+1" === e[o] ? "thumbsup" : e[o];
                n.push(["div.suggestion" + r,
                {},
                i.emojiToTree(a), e[o]])
            }
            return n
        },
        guestListName: function(e, t, i) {
            var n = e.images.headfront,
                o = i ? ".guest.selected" : ".guest",
                s = ["div.icons",
                {}];
            t.isSuperuser(e.userid) ? s.push(["div.superuser.icon",
            {
                title: "Superuser"
            }]) : t.isMod(e.userid) && s.push(["div.mod.icon",
            {
                title: "Moderator"
            }]), g.fanOf.indexOf(e.userid) > -1 && s.push(["div.fanned.icon",
            {
                title: "Fanned"
            }]);
            var r = ["div" + o,
            {
                event: {
                    mouseover: function() {
                        $(this).find("div.guestArrow").show()
                    },
                    mouseout: function() {
                        $(this).find("div.guestArrow").hide()
                    },
                    click: function() {
                        var i = $(this).parent().find("div.guestOptionsContainer"),
                            n = $(this);
                        i.length ? $(this).hasClass("selected") ? t.removeGuestListMenu() : t.removeGuestListMenu($.proxy(function() {
                            this.addGuestListMenu(e, n)
                        }, t)) : $.proxy(function() {
                            this.addGuestListMenu(e, n)
                        }, t)()
                    },
                    dblclick: function() {
                        t.handlePM({
                            senderid: e.userid
                        }, !0)
                    }
                },
                data: {
                    id: e.userid
                }
            }, ["div.guest-avatar",
            {
                style: {
                    "background-image": "url(" + n + ")"
                }
            }],
                ["div.guestName",
                {},
                e.name], s, ["div.guestArrow"]
            ];
            return t.roomData.metadata.currentDj == e.userid && r.splice(2, 0, ["div.current-dj"]), r
        },
        guestOptions: function(e, t) {
            var i = ["div.guestOptions.options",
            {
                event: {
                    mouseover: function() {
                        t.guestOptionsHoverTimer && clearTimeout(t.guestOptionsHoverTimer)
                    },
                    mouseout: function() {
                        t.guestOptionsHoverTimer = setTimeout(function() {
                            t.removeGuestListMenu()
                        }, 1e3)
                    }
                }
            }];
            return i.push(y.layouts.guestOption("View Profile", "profile", e.userid, t)), i.push(y.layouts.guestOption("Report User", "report_user", e.userid, t)), e.userid == RFmAZA.myuserid && t.isDj() ? (i.push(y.layouts.guestOption("Skip My Song", "stop_song", e.userid, t)), i.push(y.layouts.guestOption("Quit DJing", "rem_dj", e.userid, t))) : g.acl >= 1 && i.push(y.layouts.guestOption("Skip Their Song", "stop_song", e.userid, t)), t.roomData.metadata.moderator_id, e.userid !== g.id && t.hasModPowers() && (g.acl >= e.acl && (i.push(y.layouts.guestOption("Boot User", "boot_user", e.userid, t)), t.isMod(e.userid) ? i.push(y.layouts.guestOption("Remove Moderator", "rem_moderator", e.userid, t)) : i.push(y.layouts.guestOption("Make a Moderator", "add_moderator", e.userid, t))), t.isDj(e.userid) && i.push(y.layouts.guestOption("Remove DJ", "remove_dj", e.userid, t))), e.userid !== g.id && (e.fanof ? i.push(y.layouts.guestOption("Unfan", "remove_fan", e.userid, t)) : i.push(y.layouts.guestOption("Become a Fan", "become_fan", e.userid, t)), i.push(y.layouts.guestOption("Send Private Message", function() {
                t.handlePM({
                    senderid: e.userid
                }, !0)
            }))), ["div.guestOptionsContainer.contextual-popup",
            {},
            i, ["div.guestOptionsNib.nib",
            {
                event: {
                    click: function() {
                        t.removeGuestListMenu()
                    }
                }
            }, ["div.guestOptionsNibArrow"]]]
        },
        guestOption: function(e, t, i, n) {
            return ["a.guestOption.option", {
                href: "#",
                event: {
                    click: function() {
                        return "string" == typeof t ? n.GVAGXLCallback(t, i) : "function" == typeof t && t(), $("div.guestOptionsContainer").remove(), !1
                    }
                }
            }, e]
        },
        listRooms: function(e, t) {
            return [l, {
                style: {
                    width: 605
                },
                showClose: !1
            }, ["div.roomIndexContainer"], ["div.buttons", ["button.createRoom",
            {
                event: {
                    click: e
                }
            }, "Create Room"],
                ["button.randomRoom",
                {
                    event: {
                        click: turntable.randomRoom
                    }
                }, "Random Room"],
                ["button.cancel",
                {
                    event: {
                        click: t
                    }
                }, "Close"]
            ]]
        },
        addSongOverlay: function(e) {
            var t = function(t) {
                    return {
                        event: {
                            click: function() {
                                e.addSong(t)
                            }
                        }
                    }
                };
            return ["div.addSongOverlay", {}, ["div.close-x",
            {
                event: {
                    click: function() {
                        $(".addSongOverlay").remove()
                    }
                }
            }], ["div.content",
            {}, "Add song to:", ["div.options",
            {}, ["div.btn.queue", t("queue"), ["div.text", "queue"]],
                ["div.btn.amazon", t("amazon"), ["div.text", "amazon"]],
                ["div.btn.itunes", t("itunes"), ["div.text", "iTunes"]],
                ["div.btn.lastfm", t("lastfm"), ["div.text", "last.fm"]],
                ["div.btn.spotify", t("spotify"), ["div.text", "spotify"]],
                ["div.btn.rdio", t("rdio"), ["div.text", "rdio"]]
            ]]]
        },
        songView: function(e, t) {
            var n = t.metadata,
                o = r.showPreview(t),
                s = "";
            return t.djname && (s = ["span.dj-info", ["a.dj",
            {
                event: {
                    click: function() {
                        RFmAZA.callback("profile", t.djid)
                    }
                }
            },
            t.djname]]), ["div.song",
            {
                data: {
                    songData: t
                }
            }, ["div.progress-bar", ["div.progress"]],
                ["div.thumb",
                {
                    style: {
                        "background-image": n.coverart ? "url(" + n.coverart + ")" : ""
                    }
                }],
                ["div.playSample",
                {
                    style: o ? {} : {
                        display: "none"
                    },
                    event: {
                        click: function() {
                            e.samplePlay(this)
                        }
                    }
                }],
                ["div.pauseSample",
                {
                    event: {
                        click: u.sampleStop
                    }
                }],
                ["div.title",
                {
                    title: n.song
                },
                n.song],
                ["div.details", ["span", n.artist, ["span.divider", " \u2022 "], i.prettyTime(n.length)]],
                ["div.score"], s]
        },
        bootConfirmView: function(e, t) {
            return [o, {
                title: "Boot User",
                submitCallback: t
            }, ["div.field",
            {}, "You're about to boot ", e, " from the room.", ["br"],
                ["br"], "Care to give a reason?", ["br"],
                ["input.bootReasonField.text",
                {
                    placeholder: "(optional)"
                }]
            ]]
        },
        addModConfirmView: function(e, t) {
            return [o, {
                title: "Add Moderator",
                submitCallback: t
            }, ["div.field",
            {}, "You're about to bestow moderator powers upon ", e, ".", ["br"]]]
        },
        removeModConfirmView: function(e, t) {
            return [o, {
                title: "Remove Moderator",
                submitCallback: t
            }, ["div.field",
            {}, "You're about to remove ", e, "'s moderator powers.", ["br"]]]
        },
        profileView: function(e) {
            return [l, {
                cssClass: "profile",
                width: 480
            }, ["div.profile-images", ["div.avatar",
            {}, ["img",
            {
                src: e.images.fullfront
            }]],
                ["canvas.laptop",
                {
                    width: 282,
                    height: 190
                }]
            ], ["div.section.big", ["div.name",
            {},
            e.name],
                ["div.acl"]
            ], ["div.section.web-links", ["div.social",
            {}, ["a.twitter",
            {
                target: "_blank"
            }],
                ["a.facebook",
                {
                    target: "_blank"
                }]
            ],
                ["div.website",
                {},
                e.website]
            ], ["div.section",
            {}, ["div.joined",
            {}, "Joined", ["div.stat-number", i.prettyDate(e.created)]],
                ["div.points",
                {}, "DJ points", ["div.stat-number", e.points]],
                ["div.fans",
                {}, "Fans", ["div.stat-number", e.fans]]
            ], ["div.section.about",
            {}, ["div.left",
            {}, "About me"],
                ["div.right",
                {}, ["div.profileText", e.about]]
            ], ["div.section.topartists",
            {}, ["div.left",
            {}, "Favorite artists"],
                ["div.right",
                {}, ["div.profileText", e.topartists]]
            ], ["div.section.hangout",
            {}, ["div.left",
            {}, "Usually hanging out in"],
                ["div.right",
                {}, ["div.profileText", e.hangout]]
            ]]
        },
        reportView: function(e, t, i, n, s, r) {
            var a = "Report User",
                l = "Why are you reporting " + i + "? Please give a short explanation and be as specific as you can. Keep in mind that you can't report someone for dissing your song, refusing to awesome, or playing something that's a little off genre.";
            return "room" == r && (a = "Report Room", l = "Why are you reporting this room? Please give a short explanation and be as specific as you can."), [o,
            {
                idd: "reportModal",
                title: a,
                style: {
                    width: 480
                },
                submitCallback: e,
                submitText: "Save"
            }, ["div.fields",
            {}, ["div.field.settings",
            {}, ["div",
            {},
            l],
                ["textarea#reasonField.textarea",
                {
                    maxlength: 400,
                    placeholder: "Please enter a reason."
                }],
                ["input#useridField",
                {
                    type: "hidden",
                    value: t
                }],
                ["input#roomidField",
                {
                    type: "hidden",
                    value: n
                }]
            ]]]
        }
    }, y
}), define("main", ["require", "httpstream", "socket.io", "soundmanager", "swfobject", "util", "action-modal", "buddylistpm", "config", "playlist", "room", "user"], function(e) {
    var t = e("httpstream"),
        i = e("socket.io"),
        n = e("soundmanager"),
        o = e("swfobject"),
        s = e("util"),
        r = e("action-modal"),
        a = e("buddylistpm"),
        l = e("config"),
        u = e("playlist"),
        d = e("room"),
        c = e("user");
    WEB_SOCKET_SWF_LOCATION = "/static/swf/WebSocketMain.swf", n.setup({
        url: "/static/swf/soundmanager2/soundmanager2_flash9.swf",
        consoleOnly: !0,
        debugMode: !1,
        debugFlash: !1,
        flashVersion: 9,
        useFlashBlock: !0
    });
    var h = {
        cjAgpz: null,
        pendingCalls: [],
        deferreds: [],
        clientId: s.now() + "-" + Math.random(),
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
        socketVerbose: !0,
        socketErrors: [],
        messageId: 0,
        currentSocketPort: 0,
        currentSocketServer: null,
        favorites: !1,
        buddyList: !1,
        presenceUpdateInterval: 10,
        syncServerClock: function() {
            h.updatePresence()
        },
        main: function() {
            h.avatarLoad = s.apiGet({
                api: "avatar.all"
            }, function(e) {
                avatars = e[1].avatars
            }), $("html").append(s.buildTree(["div#httpstream"])), t.url = "/static/swf/HTTPSimpleStream.swf", o.embedSWF(t.url + "?" + s.now(), "httpstream", "1", "1", "10.1.0", null, {}, {
                bgcolor: "red"
            }), h.loadTime = s.now(), h.setSocketAddr(h.getHashedAddr(window.TURNTABLE_ROOM.roomid, window.TURNTABLE_ROOM.section)), LOG("Initializing Facebook..."), "undefined" != typeof FB && null != FB && FB.init({
                appId: "127146244018710",
                status: !0,
                cookie: !1,
                xfbml: !0
            }), c.init().done(function() {
                $(window).trigger("userInitDone"), h.initFavorites(), h.syncServerClock(), u.init(), $(window).bind("keydown", function(e) {
                    8 == e.keyCode && -1 == $.inArray(e.target.tagName.toLowerCase(), ["input", "textarea"]) && e.preventDefault()
                }), window.history && window.history.pushState && $(window).bind("popstate", function(e) {
                    1e4 > s.now() - h.loadTime || h.reloadPage(e.state || e.originalEvent.state || TURNTABLE_ROOM)
                }), h.reloadPage(TURNTABLE_ROOM);
                var e = s.getSetting("isUnavailable");
                h.isUnavailable = "true" == e ? !0 : !1, h.dcTbsB(), h.trackPresence(), h.initBuddyPresencePolling(), h.buddyList = new a(h.cjAgpz)
            }), s.LWKTya(h), s.LWKTya(c)
        },
        socketsByPort: {},
        flushUnsentMessages: function() {
            for(var e = 0; h.unsentMessageCallbacks.length > e; e++) h.unsentMessageCallbacks[e]();
            h.unsentMessageCallbacks = []
        },
        setSocketAddr: function(e) {
            if(LOG("Setting socket addr to " + e), e[0] != h.currentSocketServer || e[1] != h.currentSocketPort) {
                h.socketKeepAlive(!1), h.currentSocketServer = e[0], h.currentSocketPort = e[1];
                var t = function() {
                        if(h.removeEventListener("messagefinish", t), h.socket) {
                            LOG("Disconnecting " + h.socket.host), h.socket.removeListener("reconnect", h.socketReconnected), h.socket.send("disconnect");
                            var n = h.socket;
                            setTimeout(function() {
                                n.disconnect()
                            }, 1e3)
                        }
                        LOG("Switching to addr " + e), h.socket = new i.Socket(e[0], {
                            port: e[1],
                            transports: ["websocket", "flashsocket", "xhr-polling"],
                            rememberTransport: !1,
                            connectTimeout: 5e3
                        }), "websocket" == h.socket.transport.type && (h.socket.transport.options.timeout = 25e3), h.connectionTimeout = setTimeout(function() {
                            h.die("Could not connect to turntable. Please try again. If you still cannot connect, you might have a firewall blocking your connection. (" + e[1] + ")"), h.connectionTimeout = null
                        }, 3e4), h.socket.connect(), h.socket.on("connect", h.socketConnected), h.socket.on("message", h.messageReceived), h.socket.on("reconnect", h.socketReconnected)
                    };
                h.socket && h.socket.connected && h.numRecentPendingCalls(15) > 0 ? (h.addEventListener("messagefinish", t), LOG("There are " + h.pendingCalls.length + " pending calls on old socket! Waiting...")) : (LOG("No pending calls on old socket... setting up new socket"), t())
            }
        },
        socketConnected: function() {
            h.connectionTimeout && (clearTimeout(h.connectionTimeout), h.connectionTimeout = null), h.resetPresenceThrottle(), h.syncServerClock(), h.flushUnsentMessages(), h.socket.removeListener("connect", h.socketConnected)
        },
        socketKeepAlive: function(e) {
            h.socketKeepAliveTimer && (clearTimeout(h.socketKeepAliveTimer), h.socketKeepAliveTimer = null), e && (h.socketKeepAliveTimer = setTimeout(h.syncServerClock, 2e4))
        },
        socketLog: function(e) {
            for(; h.socketErrors.length && h.socketErrors[0].time + 6e4 < s.now();) h.socketErrors.shift();
            h.socketErrors.push({
                time: s.now(),
                msg: e
            })
        },
        socketDumpLog: function() {
            for(; h.socketErrors.length && h.socketErrors[0].time + 6e4 < s.now();) h.socketErrors.shift();
            if(!(s.now() < h.socketDumpLogLast + 6e4) && (h.socketDumpLogLast = s.now(), h.socketErrors.length)) for(var e = "", t = 0; h.socketErrors.length > t; t++) {
                var i = h.socketErrors[t];
                e += Math.round((s.now() - i.time) / 100) / 10 + ":" + i.msg + ","
            }
        },
        isIdle: !1,
        isUnavailable: !1,
        dcTbsB: function() {
            $(window).on("focus keydown mousemove mousedown", s.rateLimit(null, function() {
                h.CBDFCM = s.now()
            }, 200)), setTimeout(h.checkIdle, 1e3), h.CBDFCM = s.now()
        },
        idleTime: function() {
            return s.now() - h.CBDFCM
        },
        WvZjta: function() {
            return s.now() - h.CBDFCM
        },
        checkIdle: function() {
            var e = h.WvZjta(),
                t = e > 18e4;
            if(!h.isIdle && t) for(var i in h.idleTimers) {
                var n = h.idleTimers[i];
                n.timeout = setTimeout(n.callback, 1e3 * Number(i) - e)
            } else if(h.isIdle && !t) {
                for(var i in h.idleTimers) clearTimeout(h.idleTimers[i].timeout);
                h.dispatchEvent("unidle"), h.lastBuddyPresencePoll = 0, h.fetchBuddyPresence()
            }
            h.isIdle = t;
            try {
                h.buddyList.updateMyStatus(h.currentStatus())
            } catch(o) {
                LOG(o)
            }
            setTimeout(h.checkIdle, 1e3)
        },
        currentStatus: function() {
            return h.isUnavailable ? "unavailable" : h.isIdle ? "away" : "available"
        },
        presenceTimer: null,
        trackPresence: function() {
            h.presenceTimer || (h.presenceTimer = setInterval(h.updatePresence, 1e3 * h.presenceUpdateInterval))
        },
        updatePresence: function(e) {
            h.sendPresence(h.currentStatus(), e)
        },
        resetPresenceThrottle: function() {
            h.syncServerClockLast = 0
        },
        sendPresence: function(e, t, i) {
            if(!(s.now() < h.syncServerClockLast + 1e3 * h.presenceUpdateInterval) || i) {
                h.syncServerClockLast = s.now();
                var n = s.now();
                h.uRzNYq({
                    api: "presence.update",
                    status: e
                }, function(e) {
                    if(e.success) {
                        var i = s.now();
                        h.clientTimeDelta = (i + n) / 2e3 - e.now, h.presenceUpdateInterval != e.interval && (LOG("Resetting presence update interval"), h.presenceUpdateInterval = e.interval, clearInterval(h.presenceTimer), h.presenceTimer = null, h.trackPresence())
                    }
                    t && "function" == typeof t && t(e)
                })
            }
        },
        buddyPresenceTimer: null,
        initBuddyPresencePolling: function() {
            h.buddyPresenceTimer || (h.buddyPresenceTimer = setInterval(h.fetchBuddyPresence, 6e4))
        },
        lastBuddyPresencePoll: !1,
        fetchBuddyPresence: function() {
            var e = (new Date).getTime();
            if(!h.buddyList.allPMWindowsClosed() || !h.buddyList.isClosed()) {
                if(h.isIdle && h.lastBuddyPresencePoll && 600200 > e - h.lastBuddyPresencePoll) return;
                h.uRzNYq({
                    api: "room.directory_graph"
                }, function(e) {
                    h.lastBuddyPresencePoll = (new Date).getTime();
                    try {
                        h.buddyList.updateBuddies(e)
                    } catch(t) {
                        LOG(t)
                    }
                })
            }
        },
        pingTimer: null,
        numPings: 0,
        socketReconnected: function() {
            h.socketLog("rc"), LOG("socket reconnected?"), h.pingTimer || (h.numPings = 0, h.pingTimer = setInterval(h.pingSocket, 5e3), h.pingSocket())
        },
        pingSocket: function() {
            h.resetPresenceThrottle(), h.updatePresence(function(e) {
                e && e.success && h.pingTimer && (h.numPings = 0, clearInterval(h.pingTimer), h.pingTimer = null, h.dispatchEvent("reconnect"))
            }), h.numPings += 1, h.numPings > 5 && (clearInterval(h.pingTimer), h.pingTimer = null)
        },
        closeSocket: function() {
            h.socket.send('{"api":"room.deregister","userid":"' + c.id + '","userauth":"' + c.auth + '","roomid":"' + (h.cjAgpz.roomId || "") + '","section":"' + (h.cjAgpz.section || "") + '"}')
        },
        addEventListener: function(e, t) {
            var i = h.eventListeners[e];
            ASSERT(i, "Unknown event '" + e + "'"), -1 == $.inArray(t, i) && i.push(t)
        },
        removeEventListener: function(e, t) {
            var i = h.eventListeners[e];
            ASSERT(i, "Unknown event " + e);
            var n = $.inArray(t, i); - 1 != n && i.splice(n, 1)
        },
        dispatchEvent: function(e) {
            args = [];
            for(var t = 1; arguments.length > t; t++) args.push(arguments[t]);
            var i = h.eventListeners[e];
            ASSERT(i, "Unknown event " + e), i = i.slice();
            for(var t = 0; i.length > t; t++) i[t].apply(h, args)
        },
        idleTimers: {},
        addIdleListener: function(e, t) {
            var i = h.idleTimers[e + ""],
                n = 1e3 * e - h.idleTime();
            i ? -1 == $.inArray(t, i.listeners) && (i.listeners.push(t), 0 >= n && t()) : (i = {
                timeout: null,
                listeners: [t],
                callback: function() {
                    for(var e = 0; i.listeners.length > e; e++) i.listeners[e]()
                }
            }, h.idleTimers[e + ""] = i, h.isIdle && (i.timeout = setTimeout(i.callback, n)))
        },
        removeIdleListener: function(e, t) {
            var i = h.idleTimers[e + ""],
                n = i ? $.inArray(t, i.listeners) : -1; - 1 != n && i.listeners.splice(n, 1)
        },
        setPage: function(e, t, i, n) {
            var o = "/" + (e || i);
            if(window.history && window.history.pushState) {
                var s = {
                    shortcut: e,
                    roomid: i,
                    section: n
                };
                window.history.pushState(s, o, o), this.reloadPage(s), document.title = "turntable: " + t
            } else window.location.href = o
        },
        reloadPage: function(e) {
            h.cjAgpz && h.cjAgpz.cleanup && h.cjAgpz.cleanup(), $("#turntable").empty(), LOG("Turntable page is empty"), e && "lobby" != e.shortcut && e.roomid && (h.cjAgpz = new d(e.roomid, e.section)), $("#turntable").append(h.cjAgpz.view), h.cjAgpz.onAddedToDOM && h.cjAgpz.onAddedToDOM()
        },
        initFavorites: function() {
            h.uRzNYq({
                api: "room.get_favorites"
            }, function(e) {
                if(e.success) {
                    h.favorites = {};
                    for(var t = 0, i = e.list.length; i > t; t++) h.favorites[e.list[t]] = !0;
                    h.cjAgpz && "roomId" in h.cjAgpz && !h.cjAgpz.hasLoadedFavorites && h.cjAgpz.initFavorite()
                }
            })
        },
        hashMod: function(e, t) {
            for(var i = $.sha1(e), n = 0, o = 0; i.length > o; o++) n += i.charCodeAt(o);
            return n % t
        },
        getHashedAddr: function(e, t) {
            var i = e || Math.random() + "";
            return t && (i = i + "_" + t), CHATSERVER_ADDRS[h.hashMod(i, CHATSERVER_ADDRS.length)]
        },
        uRzNYq: function(e, t) {
            if("room.now" != e.api) {
                e.msgid = h.messageId, e.client = "web", h.messageId += 1, e.clientid = h.clientId, c.id && !e.userid && (e.userid = c.id, e.userauth = c.auth);
                var i = JSON.stringify(e);
                h.socketVerbose && LOG(s.nowStr() + " Preparing message " + i);
                var n = $.Deferred();
                return h.whenSocketConnected(function() {
                    h.socketVerbose && LOG(s.nowStr() + " Sending message " + e.msgid + " to " + h.socket.host), "websocket" == h.socket.transport.type && h.socketLog(h.socket.transport.sockets[0].id + ":<" + e.msgid), h.socket.send(i), h.socketKeepAlive(!0), h.pendingCalls.push({
                        msgid: e.msgid,
                        handler: t,
                        deferred: n,
                        time: s.now()
                    })
                }), n.promise()
            }
        },
        numRecentPendingCalls: function(e) {
            for(var t = s.now(), i = 0, n = 0; h.pendingCalls.length > n; n++) 1e3 * e > t - h.pendingCalls[n].time && (i += 1);
            return i
        },
        unsentMessageCallbacks: [],
        whenSocketConnected: function(e) {
            h.socket.connected && h.socket.host == h.currentSocketServer && h.socket.options.port == h.currentSocketPort ? e() : h.unsentMessageCallbacks.push(e)
        },
        messageReceived: function(e) {
            if(l.DEBUG_MODE) h._messageReceived(e);
            else try {
                h._messageReceived(e)
            } catch(t) {
                LOG("Exception in MessageReceived"), LOG(t)
            }
        },
        _messageReceived: function(e) {
            if(h.socketVerbose && LOG(s.nowStr() + " Received: " + e), "no_session" != e) {
                if(e = JSON.parse(e), "killdashnine" == e.command) {
                    var t = h.cjAgpz;
                    if(s.notEmpty(e.roomid, e.section, t.roomId, t.section) && (t.roomId != e.roomid || t.section != e.section)) return;
                    h.socket.disconnect(), h.socket = null;
                    var i = e.msg || "This session has been disconnected because you signed on from another location. Refresh this page if you want to continue.";
                    return h.die(i), void 0
                }
                if(h.dispatchEvent("message", e), "websocket" == h.socket.transport.type && h.socketLog(h.socket.transport.sockets[0].id + ":>" + (e.hasOwnProperty("msgid") ? e.msgid : e.command || "?")), e.hasOwnProperty("msgid")) {
                    ASSERT(e.msgid < h.messageId, "Future msg " + JSON.stringify(e));
                    for(var n = h.pendingCalls.length, o = !1, r = 0; n > r; r++) {
                        var a = h.pendingCalls[r];
                        if(a.msgid == e.msgid) {
                            var l = a.handler,
                                u = a.deferred;
                            l && l(e), (e.success ? u.resolve : u.reject)(e);
                            var d = s.now();
                            d - h.loadTime > 6e4 && d - a.time > 1e4 && h.socketDumpLog(), h.pendingCalls.splice(r, 1), o = !0;
                            break
                        }
                    }
                    o ? 0 == h.pendingCalls.length && h.dispatchEvent("messagefinish") : LOG("Unexpected msg " + JSON.stringify(e))
                }
            }
        },
        logMessage: function(e) {
            if(h.pendingLogMessage) return h.pendingLogMessage = e, void 0;
            var t = (h.lastLogPacket || 0) + 5e3 - s.now();
            if(0 >= t) {
                var i = navigator.userAgent.substr(navigator.userAgent.lastIndexOf(")") + 2);
                return h.uRzNYq({
                    api: "room.log",
                    error: "v3 " + i + " " + e
                }), h.lastLogPacket = s.now(), void 0
            }
            h.pendingLogMessage = e, setTimeout(function() {
                h.uRzNYq({
                    api: "room.log",
                    error: h.pendingLogMessage
                }), h.pendingLogMessage = null, h.lastLogPacket = s.now()
            }, t)
        },
        randomRoom: function() {
            h.uRzNYq({
                api: "room.random_room"
            }, function(e) {
                h.setPage(e.room.shortcut, e.room.name, e.room.roomid)
            })
        },
        die: function(e) {
            h.showAlert(e)
        },
        showAlert: function(e, t) {
            var i = {},
                n = {
                    closeCallback: t,
                    showCancel: !1
                };
            s.buildTree([r, n, ["div.alert-message", e]], i), i.modal.show()
        },
        serverNow: function() {
            return s.now() / 1e3 - h.clientTimeDelta
        },
        seedPRNG: function(e) {
            return function() {
                var t = e,
                    i = 9001;
                return {
                    random: function() {
                        i + 4 > t.length && (t = $.sha1(t), i = 0);
                        var e = t.substr(i, 4);
                        return i += 4, (parseInt(e, 16) + 1) / 65537
                    }
                }
            }()
        }
    };
    return h
}), function(e) {
    e.fn.konami = function(t) {
        var i = e.extend({}, e.fn.konami.defaults, t);
        return this.each(function() {
            var t = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65],
                n = [];
            e(window).keyup(function(e) {
                var o = e.keyCode ? e.keyCode : e.which;
                if(n.push(o), 10 === n.length) {
                    for(var s = !0, r = 0, a = t.length; a > r; r++) t[r] !== n[r] && (s = !1);
                    s && i.cheat(), n.shift()
                }
            })
        })
    }, e.fn.konami.defaults = {
        cheat: null
    }
}(jQuery), define("jquery.konami", function() {}), define("snake", ["require", "util", "modal", "jquery.konami"], function(e) {
    var t = e("util"),
        i = e("modal");
    e("jquery.konami");
    var n = function() {
            function e() {
                w = "right", n(), s(), S = 0, k !== void 0 && window.clearInterval(k), k = window.setInterval(r, 90)
            }
            function n() {
                var e = 5;
                T = [];
                for(var t = e - 1; t >= 0; t--) T.push({
                    x: t,
                    y: 0
                })
            }
            function o() {
                for(var e in avatars) {
                    var t = new Image;
                    t.src = avatars[e].images.hf, M.push(t)
                }
            }
            function s() {
                _ = {
                    x: Math.round(Math.random() * (y - x) / x),
                    y: Math.round(Math.random() * (b - x) / x)
                }, _.image = M[Math.floor(Math.random() * M.length)];
                var e = 0;
                for(var t in avatars) Math.random() < 1 / ++e && (_.image.src = avatars[t].images.hf)
            }
            function r() {
                if(0 !== O.length) {
                    var e = O.shift();
                    "37" == e && "right" != w ? w = "left" : "38" == e && "down" != w ? w = "up" : "39" == e && "left" != w ? w = "right" : "40" == e && "up" != w && (w = "down")
                }
                C.clearRect(0, 0, y, b), C.strokeStyle = "black", C.strokeRect(0, 0, y, b);
                var n = T[0].x,
                    o = T[0].y;
                switch(w) {
                case "right":
                    n++;
                    break;
                case "left":
                    n--;
                    break;
                case "up":
                    o--;
                    break;
                case "down":
                    o++
                }
                if(-1 == n || n == y / x || -1 == o || o >= b / x || d(n, o, T)) return $(document).off("keydown", I), c.modal.close(), window.clearInterval(k), $(t.buildTree([i, ["div#snake-loser", "You got " + S + " points! You're a wizard!"]], c)), c.modal.show(), void 0;
                var r;
                n == _.x && o == _.y ? (r = {
                    x: n,
                    y: o
                }, S++, s()) : (r = T.pop(), r.x = n, r.y = o), T.unshift(r);
                for(var h = 0; T.length > h; h++) {
                    var p = T[h];
                    0 === h ? l(p.x, p.y) : u(p.x, p.y)
                }
                a(_);
                var f = "Score: " + S;
                C.fillStyle = "#D8A126", C.fillText(f, 5, b - 5)
            }
            function a(e) {
                if(e.image.complete) {
                    var t, i;
                    e.image.width > e.image.height ? (t = x, i = e.image.height / e.image.width * x) : (i = x, t = e.image.width / e.image.height * x), C.drawImage(e.image, e.x * x, e.y * x, t, i)
                }
            }
            function l(e, t) {
                switch(C.save(), C.translate(e * x + x / 2, t * x + x / 2), w) {
                case "right":
                    C.rotate(3 * (Math.PI / 2));
                    break;
                case "left":
                    C.rotate(Math.PI / 2);
                    break;
                case "up":
                    C.rotate(Math.PI);
                    break;
                case "down":
                }
                C.drawImage(g, -x / 2, -x / 2, x, x), C.restore()
            }
            function u(e, t) {
                C.drawImage(v, e * x, t * x, x, x)
            }
            function d(e, t, i) {
                for(var n = 0; i.length > n; n++) if(i[n].x == e && i[n].y == t) return !0;
                return !1
            }
            LOG("it's time to snake this joint up");
            var c = {},
                h = t.buildTree([i,
                {
                    showClose: !1,
                    clickOut: !1
                }, ["canvas#snakecvs"],
                    ["div#snake-time-to-start"]
                ], c);
            c.modal.show();
            var p = $(h).find("#snakecvs"),
                f = p.get(0),
                m = $(h).find("#snake-time-to-start"),
                g = new Image,
                v = new Image;
            g.src = "http://static.turntable.fm.s3.amazonaws.com/images/room/snake/head.png", v.src = "http://static.turntable.fm.s3.amazonaws.com/images/room/snake/body.png";
            var y = p.width(),
                b = p.height();
            p.attr({
                width: y,
                height: b
            });
            var w, _, S, k, T, C = f.getContext("2d"),
                x = 32,
                M = [],
                O = [];
            o();
            var E = 3;
            m.show();
            var D = setInterval(function() {
                m.text(E), 0 === E && (clearInterval(D), m.hide(), e()), E--
            }, 1e3),
                I = function(e) {
                    var t = e.which;
                    O.push(t)
                };
            $(document).on("keydown", I)
        };
    $(window).konami({
        cheat: n
    })
}), define("pages/room-page", ["require", "config", "soundmanager", "sticker", "main", "player", "room", "user", "playlist", "snake"], function(e) {
    var t = e("config"),
        i = e("soundmanager"),
        n = e("sticker"),
        o = e("main"),
        s = e("player"),
        r = e("room"),
        a = e("user"),
        l = e("playlist");
    if(e("snake"), $.browser.msie) {
        var u = util.detectIEVersion();
        (!u || 9 > u) && alert("Turntable.fm doesn't work too well in Internet Explorer right now. Join the party with Firefox, Chrome, or Safari!")
    }
    window.turntable = o, o.user = a, o.playlist = l, window.Room = r, $(function() {
        $(window).bind("userInitDone", n.init)
    }), $(document).ready(o.main), i.onready(s.init), $(window).on("beforeunload unload", o.closeSocket), t.DEBUG_MODE || (window.require = null)
}), require(["pages/room-page"]);