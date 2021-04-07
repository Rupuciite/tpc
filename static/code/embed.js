(function(g) {
  var window = this;
  var s4 = function(a, b) {
      g.kf(a.u, 8 * b + 2);
      var c = a.u.end();
      a.C.push(c);
      a.B += c.length;
      c.push(a.B);
      return c
    },
    t4 = function(a, b) {
      var c = b.pop();
      for (c = a.B + a.u.length() - c; 127 < c;) b.push(c & 127 | 128), c >>>= 7, a.B++;
      b.push(c);
      a.B++
    },
    IFa = function(a, b, c) {
      null != c && (g.kf(a.u, 8 * b + 1), a = a.u, b = c >>> 0, c = Math.floor((c - b) / 4294967296) >>> 0, g.xf = b, g.yf = c, g.lf(a, g.xf), g.lf(a, g.yf))
    },
    u4 = function(a, b, c) {
      null != c && (g.kf(a.u, 8 * b), a.u.u.push(c ? 1 : 0))
    },
    v4 = function(a, b, c) {
      if (null != c) {
        b = s4(a, b);
        for (var d = a.u, e = 0; e < c.length; e++) {
          var f = c.charCodeAt(e);
          if (128 > f) d.u.push(f);
          else if (2048 > f) d.u.push(f >> 6 | 192), d.u.push(f & 63 | 128);
          else if (65536 > f)
            if (55296 <= f && 56319 >= f && e + 1 < c.length) {
              var h = c.charCodeAt(e + 1);
              56320 <= h && 57343 >= h && (f = 1024 * (f - 55296) + h - 56320 + 65536, d.u.push(f >> 18 | 240), d.u.push(f >> 12 & 63 | 128), d.u.push(f >> 6 & 63 | 128), d.u.push(f & 63 | 128), e++)
            } else d.u.push(f >> 12 | 224), d.u.push(f >> 6 & 63 | 128), d.u.push(f & 63 | 128)
        }
        t4(a, b)
      }
    },
    w4 = function(a, b, c, d) {
      null != c && (b = s4(a, b), d(c, a), t4(a, b))
    },
    x4 = function(a, b, c, d) {
      if (null !=
        c)
        for (var e = 0; e < c.length; e++) {
          var f = s4(a, b);
          d(c[e], a);
          t4(a, f)
        }
    },
    JFa = function(a, b) {
      var c = (b - a.u) / (a.B - a.u);
      if (0 >= c) return 0;
      if (1 <= c) return 1;
      for (var d = 0, e = 1, f = 0, h = 0; 8 > h; h++) {
        f = g.Fn(a, c);
        var l = (g.Fn(a, c + 1E-6) - f) / 1E-6;
        if (1E-6 > Math.abs(f - b)) return c;
        if (1E-6 > Math.abs(l)) break;
        else f < b ? d = c : e = c, c -= (f - b) / l
      }
      for (h = 0; 1E-6 < Math.abs(f - b) && 8 > h; h++) f < b ? (d = c, c = (c + e) / 2) : (e = c, c = (c + d) / 2), f = g.Fn(a, c);
      return c
    },
    y4 = function(a, b, c) {
      a.u || (a.u = {});
      if (!a.u[c]) {
        var d = g.If(a, c);
        d && (a.u[c] = new b(d))
      }
      return a.u[c]
    },
    KFa = function(a, b, c) {
      a.u || (a.u = {});
      c = c || [];
      for (var d = [], e = 0; e < c.length; e++) d[e] = c[e].Gf;
      a.u[b] = c;
      g.Kf(a, b, d)
    },
    z4 = function(a, b, c, d) {
      (c = g.Gf(a, c)) && c !== b && void 0 !== d && (a.u && c in a.u && (a.u[c] = void 0), g.Kf(a, c, void 0));
      g.Kf(a, b, d)
    },
    A4 = function() {
      return {
        G: "svg",
        U: {
          height: "100%",
          version: "1.1",
          viewBox: "0 0 110 26",
          width: "100%"
        },
        R: [{
          G: "path",
          ub: !0,
          L: "ytp-svg-fill",
          U: {
            d: "M 16.68,.99 C 13.55,1.03 7.02,1.16 4.99,1.68 c -1.49,.4 -2.59,1.6 -2.99,3 -0.69,2.7 -0.68,8.31 -0.68,8.31 0,0 -0.01,5.61 .68,8.31 .39,1.5 1.59,2.6 2.99,3 2.69,.7 13.40,.68 13.40,.68 0,0 10.70,.01 13.40,-0.68 1.5,-0.4 2.59,-1.6 2.99,-3 .69,-2.7 .68,-8.31 .68,-8.31 0,0 .11,-5.61 -0.68,-8.31 -0.4,-1.5 -1.59,-2.6 -2.99,-3 C 29.11,.98 18.40,.99 18.40,.99 c 0,0 -0.67,-0.01 -1.71,0 z m 72.21,.90 0,21.28 2.78,0 .31,-1.37 .09,0 c .3,.5 .71,.88 1.21,1.18 .5,.3 1.08,.40 1.68,.40 1.1,0 1.99,-0.49 2.49,-1.59 .5,-1.1 .81,-2.70 .81,-4.90 l 0,-2.40 c 0,-1.6 -0.11,-2.90 -0.31,-3.90 -0.2,-0.89 -0.5,-1.59 -1,-2.09 -0.5,-0.4 -1.10,-0.59 -1.90,-0.59 -0.59,0 -1.18,.19 -1.68,.49 -0.49,.3 -1.01,.80 -1.21,1.40 l 0,-7.90 -3.28,0 z m -49.99,.78 3.90,13.90 .18,6.71 3.31,0 0,-6.71 3.87,-13.90 -3.37,0 -1.40,6.31 c -0.4,1.89 -0.71,3.19 -0.81,3.99 l -0.09,0 c -0.2,-1.1 -0.51,-2.4 -0.81,-3.99 l -1.37,-6.31 -3.40,0 z m 29.59,0 0,2.71 3.40,0 0,17.90 3.28,0 0,-17.90 3.40,0 c 0,0 .00,-2.71 -0.09,-2.71 l -9.99,0 z m -53.49,5.12 8.90,5.18 -8.90,5.09 0,-10.28 z m 89.40,.09 c -1.7,0 -2.89,.59 -3.59,1.59 -0.69,.99 -0.99,2.60 -0.99,4.90 l 0,2.59 c 0,2.2 .30,3.90 .99,4.90 .7,1.1 1.8,1.59 3.5,1.59 1.4,0 2.38,-0.3 3.18,-1 .7,-0.7 1.09,-1.69 1.09,-3.09 l 0,-0.5 -2.90,-0.21 c 0,1 -0.08,1.6 -0.28,2 -0.1,.4 -0.5,.62 -1,.62 -0.3,0 -0.61,-0.11 -0.81,-0.31 -0.2,-0.3 -0.30,-0.59 -0.40,-1.09 -0.1,-0.5 -0.09,-1.21 -0.09,-2.21 l 0,-0.78 5.71,-0.09 0,-2.62 c 0,-1.6 -0.10,-2.78 -0.40,-3.68 -0.2,-0.89 -0.71,-1.59 -1.31,-1.99 -0.7,-0.4 -1.48,-0.59 -2.68,-0.59 z m -50.49,.09 c -1.09,0 -2.01,.18 -2.71,.68 -0.7,.4 -1.2,1.12 -1.49,2.12 -0.3,1 -0.5,2.27 -0.5,3.87 l 0,2.21 c 0,1.5 .10,2.78 .40,3.78 .2,.9 .70,1.62 1.40,2.12 .69,.5 1.71,.68 2.81,.78 1.19,0 2.08,-0.28 2.78,-0.68 .69,-0.4 1.09,-1.09 1.49,-2.09 .39,-1 .49,-2.30 .49,-3.90 l 0,-2.21 c 0,-1.6 -0.2,-2.87 -0.49,-3.87 -0.3,-0.89 -0.8,-1.62 -1.49,-2.12 -0.7,-0.5 -1.58,-0.68 -2.68,-0.68 z m 12.18,.09 0,11.90 c -0.1,.3 -0.29,.48 -0.59,.68 -0.2,.2 -0.51,.31 -0.81,.31 -0.3,0 -0.58,-0.10 -0.68,-0.40 -0.1,-0.3 -0.18,-0.70 -0.18,-1.40 l 0,-10.99 -3.40,0 0,11.21 c 0,1.4 .18,2.39 .68,3.09 .49,.7 1.21,1 2.21,1 1.4,0 2.48,-0.69 3.18,-2.09 l .09,0 .31,1.78 2.59,0 0,-14.99 c 0,0 -3.40,.00 -3.40,-0.09 z m 17.31,0 0,11.90 c -0.1,.3 -0.29,.48 -0.59,.68 -0.2,.2 -0.51,.31 -0.81,.31 -0.3,0 -0.58,-0.10 -0.68,-0.40 -0.1,-0.3 -0.21,-0.70 -0.21,-1.40 l 0,-10.99 -3.40,0 0,11.21 c 0,1.4 .21,2.39 .71,3.09 .5,.7 1.18,1 2.18,1 1.39,0 2.51,-0.69 3.21,-2.09 l .09,0 .28,1.78 2.62,0 0,-14.99 c 0,0 -3.40,.00 -3.40,-0.09 z m 20.90,2.09 c .4,0 .58,.11 .78,.31 .2,.3 .30,.59 .40,1.09 .1,.5 .09,1.21 .09,2.21 l 0,1.09 -2.5,0 0,-1.09 c 0,-1 -0.00,-1.71 .09,-2.21 0,-0.4 .11,-0.8 .31,-1 .2,-0.3 .51,-0.40 .81,-0.40 z m -50.49,.12 c .5,0 .8,.18 1,.68 .19,.5 .28,1.30 .28,2.40 l 0,4.68 c 0,1.1 -0.08,1.90 -0.28,2.40 -0.2,.5 -0.5,.68 -1,.68 -0.5,0 -0.79,-0.18 -0.99,-0.68 -0.2,-0.5 -0.31,-1.30 -0.31,-2.40 l 0,-4.68 c 0,-1.1 .11,-1.90 .31,-2.40 .2,-0.5 .49,-0.68 .99,-0.68 z m 39.68,.09 c .3,0 .61,.10 .81,.40 .2,.3 .27,.67 .37,1.37 .1,.6 .12,1.51 .12,2.71 l .09,1.90 c 0,1.1 .00,1.99 -0.09,2.59 -0.1,.6 -0.19,1.08 -0.49,1.28 -0.2,.3 -0.50,.40 -0.90,.40 -0.3,0 -0.51,-0.08 -0.81,-0.18 -0.2,-0.1 -0.39,-0.29 -0.59,-0.59 l 0,-8.5 c .1,-0.4 .29,-0.7 .59,-1 .3,-0.3 .60,-0.40 .90,-0.40 z"
          }
        }]
      }
    },
    LFa = function(a) {
      this.pC = a
    },
    B4 = function(a, b, c) {
      this.D = a;
      this.B = b;
      this.u = c || [];
      this.Nn = new Map
    },
    C4 = function(a, b) {
      B4.call(this, a, 3, b)
    },
    NFa = function() {
      this.J = new MFa;
      this.B = new Map;
      this.F = new Set;
      this.C = 0;
      this.D = 100;
      this.flushInterval = 3E4;
      this.u = new g.Jm(this.flushInterval);
      this.u.xa("tick", this.PH, !1, this)
    },
    OFa = function(a, b) {
      return a.F.has(b) ? void 0 : a.B.get(b)
    },
    PFa = function(a) {
      for (var b = 0; b < a.length; b++) a[b].clear()
    },
    QFa = function() {
      if (!D4) {
        D4 = new NFa;
        var a = g.xo("client_streamz_web_flush_count", -1); - 1 !== a && (D4.D = a)
      }
      this.u = D4;
      this.u.IJ("/client_streamz/youtube/web/debug/third_party_apisid_cookie_reissue_iframe", {
        nK: 3,
        mK: "client_name"
      })
    },
    SFa = function(a) {
      g.Hf(this, a, RFa, null)
    },
    TFa = function(a) {
      g.Hf(this, a, null, null)
    },
    VFa = function(a, b) {
      var c = g.Mf(a, TFa, 1);
      0 < c.length && x4(b, 1, c, UFa)
    },
    UFa = function(a, b) {
      var c = g.If(a, 1);
      null != c && g.Af(b, 1, c);
      c = g.If(a, 2);
      null != c && g.zf(b, 2, c)
    },
    XFa = function(a) {
      g.Hf(this, a, WFa, null)
    },
    ZFa = function(a) {
      g.Hf(this, a, null, YFa)
    },
    $Fa = function(a) {
      g.Hf(this, a, null, null)
    },
    aGa = function(a) {
      g.Hf(this, a, null, null)
    },
    E4 = function(a) {
      g.Hf(this, a, bGa, null)
    },
    G4 = function(a) {
      g.Hf(this, a, null, F4)
    },
    I4 = function(a) {
      g.Hf(this, a, null, H4)
    },
    eGa = function(a, b) {
      var c = y4(a, $Fa, 1);
      null != c && w4(b, 1, c, cGa);
      c = y4(a, aGa, 2);
      null != c && w4(b, 2, c, dGa)
    },
    cGa = function(a, b) {
      var c = g.If(a, 1);
      null != c && v4(b, 1, c);
      c = g.If(a, 2);
      null != c && v4(b, 2, c);
      c = g.If(a, 3);
      null != c && u4(b, 3, c)
    },
    dGa = function(a, b) {
      var c = g.If(a, 1);
      null != c && v4(b, 1, c);
      c = g.If(a, 2);
      null != c && v4(b, 2, c);
      c = g.If(a, 3);
      null != c && g.wf(b, 3, c);
      c = g.If(a, 4);
      null != c && u4(b, 4, c)
    },
    hGa = function(a, b) {
      var c = g.Mf(a, G4, 1);
      0 < c.length && x4(b, 1, c, fGa);
      c = y4(a, I4, 2);
      null != c && w4(b, 2, c, gGa)
    },
    fGa = function(a, b) {
      var c = g.If(a, 1);
      null != c && v4(b, 1, c);
      c = g.If(a, 2);
      null != c && g.wf(b, 2, c);
      c = g.If(a, 3);
      null != c && u4(b, 3, c)
    },
    gGa = function(a, b) {
      var c = g.If(a, 1);
      null != c && g.zf(b, 1, c);
      c = g.If(a, 2);
      null != c && g.Af(b, 2, c);
      c = y4(a, SFa, 3);
      null != c && w4(b, 3, c, VFa)
    },
    MFa = function() {},
    J4 = function(a) {
      g.B.call(this);
      this.callback = a;
      this.B = new g.En(0, 0, .4, 0, .2, 1, 1, 1);
      this.delay = new g.fn(this.next, window, this);
      this.startTime = this.duration = this.u = this.from = NaN;
      g.C(this, this.delay)
    },
    K4 = function(a) {
      g.U.call(this, {
        G: "div",
        L: "ytp-related-on-error-overlay"
      });
      var b = this;
      this.api = a;
      this.J = this.B = 0;
      this.animationDelay = 1E3;
      this.S = new g.dR(this);
      this.D = [];
      this.u = [];
      this.F = 0;
      this.title = new g.U({
        G: "h2",
        L: "ytp-related-title",
        Z: "{{title}}"
      });
      this.previous = new g.U({
        G: "button",
        ka: ["ytp-button", "ytp-previous"],
        U: {
          "aria-label": "Afficher les suggestions de vid\u00e9os pr\u00e9c\u00e9dentes"
        },
        R: [g.HN()]
      });
      this.Y = new J4(function(f) {
        b.suggestions.element.scrollLeft = -f
      });
      this.tileWidth = this.C = 0;
      this.K = !0;
      this.next = new g.U({
        G: "button",
        ka: ["ytp-button", "ytp-next"],
        U: {
          "aria-label": "Afficher plus de suggestions de vid\u00e9os"
        },
        R: [g.IN()]
      });
      g.C(this, this.S);
      a = a.T();
      this.X = a.B;
      g.C(this, this.title);
      this.title.ha(this.element);
      this.suggestions = new g.U({
        G: "div",
        L: "ytp-suggestions"
      });
      g.C(this, this.suggestions);
      this.suggestions.ha(this.element);
      g.C(this, this.previous);
      this.previous.ha(this.element);
      this.previous.xa("click", this.rM, this);
      g.C(this, this.Y);
      for (var c = 0; 16 > c; c++) {
        var d =
          new g.U({
            G: "a",
            L: "ytp-suggestion-link",
            U: {
              href: "{{link}}",
              target: a.F,
              "aria-label": "{{aria_label}}"
            },
            R: [{
              G: "div",
              L: "ytp-suggestion-image",
              R: [{
                G: "div",
                U: {
                  "data-is-live": "{{is_live}}"
                },
                L: "ytp-suggestion-duration",
                Z: "{{duration}}"
              }]
            }, {
              G: "div",
              L: "ytp-suggestion-title",
              U: {
                title: "{{hover_title}}"
              },
              Z: "{{title}}"
            }, {
              G: "div",
              L: "ytp-suggestion-author",
              Z: "{{views_or_author}}"
            }]
          });
        g.C(this, d);
        d.ha(this.suggestions.element);
        var e = d.ia("ytp-suggestion-link");
        g.og(e, "transitionDelay", c / 20 + "s");
        this.S.N(e, "click",
          g.Ta(this.sM, c));
        this.D.push(d)
      }
      g.C(this, this.next);
      this.next.ha(this.element);
      this.next.xa("click", this.qM, this);
      this.S.N(this.api, "videodatachange", this.Qa);
      iGa(this, g.mJ(this.api).getPlayerSize());
      this.Qa();
      this.show()
    },
    iGa = function(a, b, c) {
      var d = a.api.T(),
        e = 16 / 9,
        f = 650 <= b.width,
        h = 480 > b.width || 290 > b.height,
        l = Math.min(a.u.length, a.D.length);
      if (150 >= Math.min(b.width, b.height) || 0 === l || !d.vb) a.hide();
      else {
        var m;
        if (f) {
          var n = m = 28;
          a.B = 16
        } else n = m = 8, a.B = 8;
        if (h) {
          var p = 6;
          f = 14;
          var r = 12;
          h = 24;
          d = 12
        } else p = 8, f = 18, r = 16, h = 36, d = 16;
        b = b.width - (48 + m + n);
        m = Math.ceil(b / 150);
        m = Math.min(3, m);
        m = b / m - a.B;
        n = Math.floor(m / e);
        c && n + 100 > c && 50 < m && (n = Math.max(c, 50 / e), m = Math.ceil(b / (e * (n - 100) + a.B)), m = b / m - a.B, n = Math.floor(m / e));
        50 > m || g.xT(a.api) ? a.hide() : a.show();
        for (c = 0; c < l; c++) {
          e = a.D[c];
          var t = e.ia("ytp-suggestion-image");
          t.style.width = m + "px";
          t.style.height = n + "px";
          e.ia("ytp-suggestion-title").style.width =
            m + "px";
          e.ia("ytp-suggestion-author").style.width = m + "px";
          e = e.ia("ytp-suggestion-duration");
          e.style.display = e && 100 > m ? "none" : ""
        }
        l = f + p + r + 4;
        a.J = l + d + (n - h) / 2;
        a.suggestions.element.style.height = n + l + "px";
        a.tileWidth = m;
        a.F = b;
        a.C = 0;
        a.suggestions.element.scrollLeft = -0;
        L4(a)
      }
    },
    L4 = function(a) {
      a.next.element.style.bottom = a.J + "px";
      a.previous.element.style.bottom = a.J + "px";
      var b = a.C,
        c = a.F - a.u.length * (a.tileWidth + a.B);
      g.K(a.element, "ytp-scroll-min", 0 <= b);
      g.K(a.element, "ytp-scroll-max", b <= c)
    },
    jGa = function(a) {
      for (var b = 0; b < a.u.length; b++) {
        var c = b,
          d = a.u[b].Na();
        c = a.D[c];
        var e = d.shortViewCount ? d.shortViewCount : d.author,
          f = d.Tk();
        g.wD(a.api.T()) && (f = g.Id(f, g.OU("emb_rel_err")));
        c.element.style.display = "";
        var h = c.ia("ytp-suggestion-title");
        g.Cn.test(d.title) ? h.dir = "rtl" : g.vBa.test(d.title) && (h.dir = "ltr");
        h = c.ia("ytp-suggestion-author");
        g.Cn.test(e) ? h.dir = "rtl" : g.vBa.test(e) && (h.dir = "ltr");
        h = d.isLivePlayback ? "En direct" : d.lengthSeconds ? g.MO(d.lengthSeconds) : "";
        c.update({
          views_or_author: e,
          duration: h,
          link: f,
          hover_title: d.title,
          title: d.title,
          aria_label: d.Mp || null,
          is_live: d.isLivePlayback
        });
        c = c.ia("ytp-suggestion-image");
        d = d.he();
        c.style.backgroundImage = d ? "url(" + d + ")" : ""
      }
      for (; b < a.D.length; b++) a.D[b].element.style.display = "none";
      L4(a)
    },
    M4 = function(a) {
      g.pU.call(this, a);
      var b = this,
        c = a.T();
      c = new g.U({
        G: "a",
        L: "ytp-small-redirect",
        U: {
          href: g.hE(c),
          target: c.F,
          "aria-label": "Acc\u00e9der \u00e0 YouTube pour rechercher plus de vid\u00e9os"
        },
        R: [{
          G: "svg",
          U: {
            fill: "#fff",
            height: "100%",
            viewBox: "0 0 24 24",
            width: "100%"
          },
          R: [{
            G: "path",
            U: {
              d: "M0 0h24v24H0V0z",
              fill: "none"
            }
          }, {
            G: "path",
            U: {
              d: "M21.58 7.19c-.23-.86-.91-1.54-1.77-1.77C18.25 5 12 5 12 5s-6.25 0-7.81.42c-.86.23-1.54.91-1.77 1.77C2 8.75 2 12 2 12s0 3.25.42 4.81c.23.86.91 1.54 1.77 1.77C5.75 19 12 19 12 19s6.25 0 7.81-.42c.86-.23 1.54-.91 1.77-1.77C22 15.25 22 12 22 12s0-3.25-.42-4.81zM10 15V9l5.2 3-5.2 3z"
            }
          }]
        }]
      });
      c.ha(this.element);
      g.C(this, c);
      this.B = new K4(a);
      this.B.ha(this.element);
      g.C(this, this.B);
      this.N(a, "videodatachange", function() {
        b.show()
      });
      this.u(g.mJ(this.api).getPlayerSize())
    },
    kGa = function(a, b) {
      a.ia("ytp-error-content").style.paddingTop = "0px";
      var c = a.ia("ytp-error-content"),
        d = c.clientHeight;
      iGa(a.B, b, b.height - d);
      c.style.paddingTop = (b.height - a.B.element.clientHeight) / 2 - d / 2 + "px"
    },
    lGa = function(a, b) {
      var c = a.api.T(),
        d;
      b.reason && (N4(b.reason) ? d = g.$F(b.reason) : d = g.qU(g.S(b.reason)), a.Dc(d, "content"));
      var e;
      b.subreason && (N4(b.subreason) ? e = g.$F(b.subreason) : e = g.qU(g.S(b.subreason)), a.Dc(e, "subreason"));
      if (g.Q(c.experiments, "embeds_enable_age_gating_playability_check") && b.proceedButton && b.proceedButton.buttonRenderer && (e = b.proceedButton.buttonRenderer, c = a.ia("ytp-error-content-wrap-subreason"), d = g.Ce("A"), e.text && e.text.simpleText)) {
        var f = e.text.simpleText;
        d.textContent = f;
        a: {
          for (var h = (c || document).getElementsByTagName("A"),
              l = 0; l < h.length; l++)
            if (h[l].textContent === f) {
              f = !0;
              break a
            } f = !1
        }
        f || (e.navigationEndpoint && e.navigationEndpoint.urlEndpoint && ((f = e.navigationEndpoint.urlEndpoint.url) && d.setAttribute("href", f), (e = e.navigationEndpoint.urlEndpoint.target) && d.setAttribute("target", e)), c.appendChild(d))
      }
    },
    N4 = function(a) {
      if (a.runs)
        for (var b = 0; b < a.runs.length; b++)
          if (a.runs[b].navigationEndpoint) return !0;
      return !1
    },
    O4 = function(a, b) {
      g.U.call(this, {
        G: "a",
        ka: ["ytp-impression-link"],
        U: {
          target: "{{target}}",
          href: "{{url}}",
          "aria-label": "Regarder sur YouTube"
        },
        R: [{
          G: "div",
          L: "ytp-impression-link-content",
          U: {
            "aria-hidden": "true"
          },
          R: [{
            G: "div",
            L: "ytp-impression-link-text",
            Z: "Regarder sur"
          }, {
            G: "div",
            L: "ytp-impression-link-logo",
            R: [A4()]
          }]
        }]
      });
      this.api = a;
      this.B = b;
      this.za("target", a.T().F);
      g.IT(this.api, this.element, this, 96714);
      this.N(this.api, "presentingplayerstatechange", this.C);
      this.N(this.api, "videoplayerreset", this.u);
      this.N(this.element, "click", this.onClick);
      this.u()
    },
    P4 = function(a) {
      g.U.call(this, {
        G: "div",
        L: "ytp-muted-autoplay-endscreen-overlay",
        R: [{
          G: "div",
          L: "ytp-muted-autoplay-end-panel",
          R: [{
            G: "div",
            L: "ytp-muted-autoplay-end-text",
            Z: "{{text}}"
          }]
        }]
      });
      this.api = a;
      this.B = this.ia("ytp-muted-autoplay-end-panel");
      this.u = new g.iU(this.api);
      g.C(this, this.u);
      this.u.ha(this.B, 0);
      g.IT(this.api, this.element, this, 52428);
      this.N(this.api, "presentingplayerstatechange", this.C);
      this.xa("click", this.onClick);
      this.hide()
    },
    Q4 = function(a) {
      g.U.call(this, {
        G: "div",
        L: "ytp-muted-autoplay-overlay",
        R: [{
          G: "div",
          L: "ytp-muted-autoplay-bottom-buttons",
          R: [{
            G: "button",
            ka: ["ytp-muted-autoplay-equalizer", "ytp-button"],
            R: [{
              G: "div",
              ka: ["ytp-muted-autoplay-equalizer-icon"],
              R: [{
                G: "svg",
                U: {
                  height: "100%",
                  version: "1.1",
                  viewBox: "-4 -4 24 24",
                  width: "100%"
                },
                R: [{
                  G: "g",
                  U: {
                    fill: "#fff"
                  },
                  R: [{
                    G: "rect",
                    L: "ytp-equalizer-bar-left",
                    U: {
                      height: "9",
                      width: "4",
                      x: "1",
                      y: "7"
                    }
                  }, {
                    G: "rect",
                    L: "ytp-equalizer-bar-middle",
                    U: {
                      height: "14",
                      width: "4",
                      x: "6",
                      y: "2"
                    }
                  }, {
                    G: "rect",
                    L: "ytp-equalizer-bar-right",
                    U: {
                      height: "12",
                      width: "4",
                      x: "11",
                      y: "4"
                    }
                  }]
                }]
              }]
            }]
          }]
        }]
      });
      this.api = a;
      this.bottomButtons = this.ia("ytp-muted-autoplay-bottom-buttons");
      this.ia("ytp-muted-autoplay-equalizer");
      this.C = new g.F(this.B, 4E3, this);
      g.IT(a, this.element, this, 39306);
      this.N(a, "presentingplayerstatechange", this.u);
      this.N(a, "onMutedAutoplayStarts", this.u);
      this.xa("click", this.onClick);
      this.hide()
    },
    R4 = function(a, b) {
      g.U.call(this, {
        G: "div",
        L: "ytp-pause-overlay"
      });
      var c = this;
      this.api = a;
      this.S = b;
      this.animationDelay = 1E3;
      this.B = new g.dR(this);
      this.J = new g.ZN(this, 1E3, !1, 100);
      this.D = [];
      this.u = [];
      this.F = 0;
      this.K = !1;
      this.fa = 0;
      this.title = new g.U({
        G: "h2",
        L: "ytp-related-title",
        Z: "{{title}}"
      });
      this.previous = new g.U({
        G: "button",
        ka: ["ytp-button", "ytp-previous"],
        U: {
          "aria-label": "Afficher les suggestions de vid\u00e9os pr\u00e9c\u00e9dentes"
        },
        R: [g.HN()]
      });
      this.Y = new J4(function(m) {
        c.suggestions.element.scrollLeft = -m
      });
      this.da = this.tileWidth = this.C = 0;
      this.next = new g.U({
        G: "button",
        ka: ["ytp-button", "ytp-next"],
        U: {
          "aria-label": "Afficher plus de suggestions de vid\u00e9os"
        },
        R: [g.IN()]
      });
      this.expandButton = new g.U({
        G: "button",
        ka: ["ytp-button", "ytp-expand"],
        Z: "Plus de vid\u00e9os"
      });
      g.C(this, this.B);
      g.C(this, this.J);
      var d = a.T();
      "0" === d.controlsType && g.J(a.getRootNode(), "ytp-pause-overlay-controls-hidden");
      this.X = d.B;
      g.C(this, this.title);
      this.title.ha(this.element);
      this.suggestions = new g.U({
        G: "div",
        L: "ytp-suggestions"
      });
      g.C(this, this.suggestions);
      this.suggestions.ha(this.element);
      g.C(this, this.previous);
      this.previous.ha(this.element);
      this.previous.xa("click", this.oM, this);
      var e = g.DB || g.rg ? {
        style: "will-change: opacity"
      } : void 0;
      g.C(this, this.Y);
      for (var f = 0; 16 > f; f++) {
        var h = new g.U({
          G: "a",
          L: "ytp-suggestion-link",
          U: {
            href: "{{link}}",
            target: d.F,
            "aria-label": "{{aria_label}}"
          },
          R: [{
            G: "div",
            L: "ytp-suggestion-image"
          }, {
            G: "div",
            L: "ytp-suggestion-overlay",
            U: e,
            R: [{
              G: "div",
              L: "ytp-suggestion-title",
              Z: "{{title}}"
            }, {
              G: "div",
              L: "ytp-suggestion-author",
              Z: "{{author_and_views}}"
            }, {
              G: "div",
              U: {
                "data-is-live": "{{is_live}}"
              },
              L: "ytp-suggestion-duration",
              Z: "{{duration}}"
            }]
          }]
        });
        g.C(this, h);
        h.ha(this.suggestions.element);
        var l = h.ia("ytp-suggestion-link");
        g.og(l, "transitionDelay", f / 20 + "s");
        this.B.N(l, "click", g.Ta(this.pM, f));
        this.D.push(h)
      }
      g.C(this, this.next);
      this.next.ha(this.element);
      this.next.xa("click", this.nM, this);
      d = new g.U({
        G: "button",
        ka: ["ytp-button", "ytp-collapse"],
        U: {
          "aria-label": 'Masquer la section "Plus de vid\u00e9os"'
        },
        R: [{
          G: "svg",
          U: {
            height: "100%",
            viewBox: "0 0 16 16",
            width: "100%"
          },
          R: [{
            G: "path",
            U: {
              d: "M13 4L12 3 8 7 4 3 3 4 7 8 3 12 4 13 8 9 12 13 13 12 9 8z",
              fill: "#fff"
            }
          }]
        }]
      });
      g.C(this, d);
      d.ha(this.element);
      d.xa("click", this.QO, this);
      g.C(this, this.expandButton);
      this.expandButton.ha(this.element);
      this.expandButton.xa("click", this.RO, this);
      this.B.N(this.api, "appresize", this.Ua);
      this.B.N(this.api, "fullscreentoggled", this.jk);
      this.B.N(this.api, "presentingplayerstatechange", this.Zb);
      this.B.N(this.api, "videodatachange", this.Qa);
      this.Ua(g.mJ(this.api).getPlayerSize());
      this.Qa()
    },
    S4 = function(a) {
      var b = a.S.be() ? 32 : 16;
      b = a.da / 2 + b;
      a.next.element.style.bottom = b + "px";
      a.previous.element.style.bottom = b + "px";
      b = a.C;
      var c = a.F - a.u.length * (a.tileWidth + 8);
      g.K(a.element, "ytp-scroll-min", 0 <= b);
      g.K(a.element, "ytp-scroll-max", b <= c)
    },
    mGa = function(a) {
      for (var b = 0; b < a.u.length; b++) {
        var c = a.u[b].Na(),
          d = a.D[b],
          e = c.shortViewCount ? c.author + " \u2022 " + c.shortViewCount : c.author;
        d.element.style.display = "";
        g.uBa.test(c.title) && (d.ia("ytp-suggestion-title").dir = "rtl");
        g.uBa.test(e) && (d.ia("ytp-suggestion-author").dir = "rtl");
        var f = c.isLivePlayback ? "En direct" : c.lengthSeconds ? g.MO(c.lengthSeconds) : "";
        var h = c.Tk();
        g.wD(a.api.T()) && (h = g.Id(h, g.OU("emb_rel_pause")));
        d.update({
          author_and_views: e,
          duration: f,
          link: h,
          title: c.title,
          aria_label: c.Mp || null,
          is_live: c.isLivePlayback
        });
        d = d.ia("ytp-suggestion-image");
        c = c.he();
        d.style.backgroundImage = c ? "url(" + c + ")" : ""
      }
      for (; b < a.D.length; b++) a.D[b].element.style.display =
        "none";
      S4(a)
    },
    T4 = function(a) {
      var b = a.T();
      g.U.call(this, {
        G: "a",
        ka: ["ytp-watermark", "yt-uix-sessionlink"],
        U: {
          target: b.F,
          href: "{{url}}",
          "aria-label": g.HK("Regarder sur $WEBSITE", {
            WEBSITE: g.SD(b)
          }),
          "data-sessionlink": "feature=player-watermark"
        },
        R: [A4()]
      });
      this.api = a;
      this.u = null;
      this.B = !1;
      this.state = g.NJ(a);
      g.IT(a, this.element, this, 76758);
      this.N(a, "videodatachange", this.gB);
      this.N(a, "videodatachange", this.Qa);
      this.N(a, "presentingplayerstatechange", this.tM);
      this.N(a, "appresize", this.Ua);
      b = this.state;
      this.state !== b && (this.state = b);
      this.gB();
      this.Qa();
      this.Ua(g.mJ(a).getPlayerSize())
    },
    U4 = function(a) {
      g.tS.call(this, a);
      this.I = a;
      this.C = new g.dR(this);
      g.C(this, this.C);
      this.load()
    };
  g.k = B4.prototype;
  g.k.bS = function(a, b) {
    for (var c = [], d = 1; d < arguments.length; ++d) c[d - 1] = arguments[d];
    this.Nn.set(this.oD(c), [new LFa(a)])
  };
  g.k.dD = function(a) {
    for (var b = [], c = 0; c < arguments.length; ++c) b[c - 0] = arguments[c];
    b = this.oD(b);
    return this.Nn.has(b) ? this.Nn.get(b) : void 0
  };
  g.k.uK = function(a) {
    for (var b = [], c = 0; c < arguments.length; ++c) b[c - 0] = arguments[c];
    return (b = this.dD(b)) && b.length ? b[0] : void 0
  };
  g.k.clear = function() {
    this.Nn.clear()
  };
  g.k.oD = function(a) {
    for (var b = [], c = 0; c < arguments.length; ++c) b[c - 0] = arguments[c];
    return b ? b.join(",") : "key"
  };
  g.u(C4, B4);
  C4.prototype.C = function(a, b) {
    for (var c = [], d = 1; d < arguments.length; ++d) c[d - 1] = arguments[d];
    d = 0;
    var e = this.uK(c);
    e && (d = e.pC);
    this.bS(d + a, c)
  };
  g.k = NFa.prototype;
  g.k.PH = function() {
    var a = this.B.values();
    a = [].concat(g.ma(a)).filter(function(b) {
      return b.Nn.size
    });
    a.length && this.J.flush(a);
    PFa(a);
    this.C = 0;
    this.u.enabled && this.u.stop()
  };
  g.k.IJ = function(a, b) {
    for (var c = [], d = 1; d < arguments.length; ++d) c[d - 1] = arguments[d];
    this.B.has(a) || this.B.set(a, new C4(a, c))
  };
  g.k.RL = function(a, b) {
    for (var c = [], d = 1; d < arguments.length; ++d) c[d - 1] = arguments[d];
    this.SL.apply(this, [a, 1].concat(g.ma(c)))
  };
  g.k.SL = function(a, b, c) {
    for (var d = [], e = 2; e < arguments.length; ++e) d[e - 2] = arguments[e];
    (e = OFa(this, a)) && e instanceof C4 && (e.C(b, d), this.u.enabled || this.u.start(), this.C++, this.C >= this.D && this.PH())
  };
  g.k.sH = function(a, b, c) {
    for (var d = 2; d < arguments.length; ++d);
    OFa(this, a)
  };
  g.Va(SFa, g.Cf);
  g.Va(TFa, g.Cf);
  var RFa = [1];
  g.Va(XFa, g.Cf);
  g.Va(ZFa, g.Cf);
  g.Va($Fa, g.Cf);
  g.Va(aGa, g.Cf);
  g.Va(E4, g.Cf);
  g.Va(G4, g.Cf);
  g.Va(I4, g.Cf);
  var WFa = [3, 6, 4],
    YFa = [
      [1, 2]
    ],
    bGa = [1],
    F4 = [
      [1, 2, 3]
    ],
    H4 = [
      [1, 2, 3]
    ];
  MFa.prototype.flush = function(a) {
    a = void 0 === a ? [] : a;
    if (g.wo("enable_client_streamz_web")) {
      a = g.q(a);
      for (var b = a.next(); !b.done; b = a.next()) {
        b = b.value;
        var c = new XFa;
        c = g.Kf(c, 1, b.D);
        for (var d = b, e = [], f = 0; f < d.u.length; f++) e.push(d.u[f].mK);
        c = g.Kf(c, 3, e || []);
        d = [];
        e = [];
        f = g.q(b.Nn.keys());
        for (var h = f.next(); !h.done; h = f.next()) e.push(h.value.split(","));
        for (f = 0; f < e.length; f++) {
          h = e[f];
          var l = b.B;
          for (var m = b.dD(h) || [], n = [], p = 0; p < m.length; p++) {
            var r = m[p];
            r = r && r.pC;
            var t = new I4;
            switch (l) {
              case 3:
                z4(t, 1, H4[0], Number(r));
                break;
              case 2:
                z4(t, 2, H4[0], Number(r))
            }
            n.push(t)
          }
          l = n;
          for (m = 0; m < l.length; m++) {
            p = l[m];
            n = new E4;
            n.u || (n.u = {});
            r = p ? p.Gf : p;
            n.u[2] = p;
            n = g.Kf(n, 2, r);
            p = h;
            r = [];
            t = b;
            for (var w = [], x = 0; x < t.u.length; x++) w.push(t.u[x].nK);
            t = w;
            for (w = 0; w < t.length; w++) {
              x = t[w];
              var y = p[w],
                E = new G4;
              switch (x) {
                case 3:
                  z4(E, 1, F4[0], String(y));
                  break;
                case 2:
                  z4(E, 2, F4[0], Number(y));
                  break;
                case 1:
                  z4(E, 3, F4[0], "true" == y)
              }
              r.push(E)
            }
            KFa(n, 1, r);
            d.push(n)
          }
        }
        KFa(c, 4, d);
        d = b = new g.uf;
        e = g.If(c, 1);
        null != e && v4(d, 1, e);
        e = g.If(c, 5);
        null != e && IFa(d, 5, e);
        e = y4(c, ZFa,
          2);
        null != e && w4(d, 2, e, eGa);
        e = g.If(c, 3);
        if (0 < e.length && null != e)
          for (f = 0; f < e.length; f++) v4(d, 3, e[f]);
        e = g.If(c, 6);
        if (0 < e.length && null != e)
          for (f = 0; f < e.length; f++) IFa(d, 6, e[f]);
        e = g.Mf(c, E4, 4);
        0 < e.length && x4(d, 4, e, hGa);
        b = g.vf(b);
        b = {
          serializedIncrementBatch: g.qf(b)
        };
        g.ir("streamzIncremented", b)
      }
    }
  };
  var D4;
  g.u(J4, g.B);
  J4.prototype.start = function(a, b, c) {
    this.from = a;
    this.u = b;
    this.duration = c;
    this.startTime = (0, g.N)();
    this.next()
  };
  J4.prototype.next = function() {
    var a = (0, g.N)() - this.startTime;
    var b = this.B;
    a = JFa(b, a / this.duration);
    if (0 == a) b = b.F;
    else if (1 == a) b = b.P;
    else {
      var c = g.be(b.F, b.J, a),
        d = g.be(b.J, b.K, a);
      b = g.be(b.K, b.P, a);
      c = g.be(c, d, a);
      d = g.be(d, b, a);
      b = g.be(c, d, a)
    }
    b = g.$d(b, 0, 1);
    this.callback((this.u - this.from) * b + this.from);
    1 > b && this.delay.start()
  };
  g.u(K4, g.U);
  g.k = K4.prototype;
  g.k.hide = function() {
    this.K = !0;
    g.U.prototype.hide.call(this)
  };
  g.k.show = function() {
    this.K = !1;
    g.U.prototype.show.call(this)
  };
  g.k.isHidden = function() {
    return this.K
  };
  g.k.qM = function() {
    this.scrollTo(this.C - this.F)
  };
  g.k.rM = function() {
    this.scrollTo(this.C + this.F)
  };
  g.k.sM = function(a, b) {
    var c = this.u[a],
      d = c.wd;
    g.kU(b, this.api, this.X, d || void 0) && g.qT(this.api, c.Na().videoId, d, c.getPlaylistId())
  };
  g.k.Qa = function() {
    var a = this,
      b = this.api.getVideoData(),
      c = this.api.T();
    this.X = b.oc ? !1 : c.B;
    if (b.suggestions) {
      var d = g.He(b.suggestions, function(e) {
        return e && !e.list
      });
      this.u = g.Mc(d, function(e) {
        e = g.dW(c, e);
        g.C(a, e);
        return e
      })
    } else this.u.length = 0;
    jGa(this);
    b.oc ? this.title.update({
      title: g.HK("Autres vid\u00e9os de $DNI_RELATED_CHANNEL", {
        DNI_RELATED_CHANNEL: b.author
      })
    }) : this.title.update({
      title: "Plus de vid\u00e9os sur YouTube"
    })
  };
  g.k.scrollTo = function(a) {
    a = g.$d(a, this.F - this.u.length * (this.tileWidth + this.B), 0);
    this.Y.start(this.C, a, this.animationDelay);
    this.C = a;
    L4(this)
  };
  g.u(M4, g.pU);
  M4.prototype.show = function() {
    g.pU.prototype.show.call(this);
    kGa(this, g.mJ(this.api).getPlayerSize())
  };
  M4.prototype.u = function(a) {
    g.pU.prototype.u.call(this, a);
    kGa(this, a);
    g.K(this.element, "related-on-error-overlay-visible", !this.B.isHidden())
  };
  M4.prototype.C = function(a) {
    g.pU.prototype.C.call(this, a);
    var b = this.api.getVideoData();
    if (g.Q(this.api.T().experiments, "embed_parse_error_renderer_killswitch") || !b.OC && !b.playerErrorMessageRenderer) {
      var c;
      a.Li && (b.Ht ? N4(b.Ht) ? c = g.$F(b.Ht) : c = g.qU(g.S(b.Ht)) : c = g.qU(a.Li), this.Dc(c, "subreason"))
    } else(a = b.OC) ? lGa(this, a) : b.playerErrorMessageRenderer && lGa(this, b.playerErrorMessageRenderer)
  };
  g.u(O4, g.U);
  O4.prototype.C = function() {
    g.NJ(this.api).isCued() || (this.hide(), g.CN(this.api, this.element, !1))
  };
  O4.prototype.u = function() {
    var a = this.api.getVideoData(),
      b = this.api.T(),
      c = this.api.getVideoData().oc,
      d = b.Ub;
    b = !b.vb;
    var e = this.B.De();
    d || e || c || b || !a.videoId ? (this.hide(), g.CN(this.api, this.element, !1)) : (a = g.Id(this.api.getVideoUrl(), g.OU("emb_imp_woyt")), this.za("url", a), this.show())
  };
  O4.prototype.onClick = function(a) {
    var b = g.Id(this.api.getVideoUrl(), g.OU("emb_imp_woyt"));
    g.lU(b, this.api, a);
    g.JT(this.api, this.element)
  };
  O4.prototype.show = function() {
    g.NJ(this.api).isCued() && (g.U.prototype.show.call(this), g.BN(this.api, this.element) && g.CN(this.api, this.element, !0))
  };
  g.u(P4, g.U);
  P4.prototype.C = function() {
    var a = g.NJ(this.api),
      b = this.api.getVideoData();
    g.Q(this.api.T().experiments, "embeds_enable_muted_autoplay") && b.mutedAutoplay && (g.T(a, 2) && !this.bb ? (this.show(), this.u.show(), a = this.api.getVideoData(), this.za("text", a.xF), g.K(this.element, "ytp-muted-autoplay-show-end-panel", !0), g.CN(this.api, this.element, this.bb), this.api.ya("onMutedAutoplayEnds")) : this.hide())
  };
  P4.prototype.onClick = function() {
    var a = this.api.getVideoData(),
      b = this.api.getCurrentTime();
    a.mutedAutoplay = !1;
    a.endSeconds = NaN;
    a.sh();
    this.api.loadVideoById(a.videoId, b);
    g.JT(this.api, this.element);
    this.hide()
  };
  g.u(Q4, g.U);
  Q4.prototype.u = function() {
    var a = g.NJ(this.api),
      b = this.api.getVideoData();
    g.Q(this.api.T().experiments, "embeds_enable_muted_autoplay") && b.mutedAutoplay && !g.T(a, 2) ? this.bb || (g.U.prototype.show.call(this), this.C.start(), g.CN(this.api, this.element, this.bb)) : this.hide()
  };
  Q4.prototype.B = function() {
    g.K(this.element, "ytp-muted-autoplay-hide-watermark", !0)
  };
  Q4.prototype.onClick = function() {
    var a = this.api.getVideoData(),
      b = this.api.getCurrentTime();
    a.mutedAutoplay = !1;
    a.endSeconds = NaN;
    a.sh();
    this.api.loadVideoById(a.videoId, b);
    g.JT(this.api, this.element)
  };
  g.u(R4, g.U);
  g.k = R4.prototype;
  g.k.hide = function() {
    g.un(this.api.getRootNode(), "ytp-expand-pause-overlay");
    g.U.prototype.hide.call(this)
  };
  g.k.QO = function() {
    this.K = !0;
    g.un(this.api.getRootNode(), "ytp-expand-pause-overlay");
    this.expandButton.focus()
  };
  g.k.RO = function() {
    this.K = !1;
    g.J(this.api.getRootNode(), "ytp-expand-pause-overlay")
  };
  g.k.nM = function() {
    this.scrollTo(this.C - this.F)
  };
  g.k.oM = function() {
    this.scrollTo(this.C + this.F)
  };
  g.k.pM = function(a, b) {
    if (1E3 > (0, g.N)() - this.fa) g.jp(b), document.activeElement.blur();
    else {
      var c = this.u[a],
        d = c.wd;
      g.kU(b, this.api, this.X, d || void 0) && g.qT(this.api, c.Na().videoId, d, c.getPlaylistId())
    }
  };
  g.k.jk = function() {
    this.Ua(g.mJ(this.api).getPlayerSize())
  };
  g.k.Zb = function(a) {
    if (!(g.T(a.state, 1) || g.T(a.state, 16) || g.T(a.state, 32))) {
      var b = !g.Q(this.api.T().experiments, "embeds_disable_pauseoverlay_on_autoplay_blocked_killswitch") && g.T(a.state, 2048);
      !g.T(a.state, 4) || g.T(a.state, 2) || b ? this.J.hide() : this.u.length && (this.K || (g.J(this.api.getRootNode(), "ytp-expand-pause-overlay"), S4(this)), this.J.show(), this.fa = (0, g.N)())
    }
  };
  g.k.Ua = function(a) {
    var b = 16 / 9,
      c = this.S.be();
    a = a.width - (c ? 112 : 58);
    c = Math.ceil(a / (c ? 320 : 192));
    c = (a - 8 * c) / c;
    b = Math.floor(c / b);
    for (var d = 0; d < this.D.length; d++) {
      var e = this.D[d].ia("ytp-suggestion-image");
      e.style.width = c + "px";
      e.style.height = b + "px"
    }
    this.suggestions.element.style.height = b + "px";
    this.tileWidth = c;
    this.da = b;
    this.F = a;
    this.C = 0;
    this.suggestions.element.scrollLeft = -0;
    S4(this)
  };
  g.k.Qa = function() {
    var a = this,
      b = this.api.T(),
      c = this.api.getVideoData();
    this.X = c.oc ? !1 : b.B;
    if (c.suggestions) {
      var d = g.He(c.suggestions, function(e) {
        return e && !e.list
      });
      this.u = g.Mc(d, function(e) {
        e = g.dW(b, e);
        g.C(a, e);
        return e
      })
    } else this.u.length = 0;
    mGa(this);
    c.oc ? this.title.update({
      title: g.HK("Autres vid\u00e9os de $DNI_RELATED_CHANNEL", {
        DNI_RELATED_CHANNEL: c.author
      })
    }) : this.title.update({
      title: "Plus de vid\u00e9os"
    })
  };
  g.k.scrollTo = function(a) {
    a = g.$d(a, this.F - this.u.length * (this.tileWidth + 8), 0);
    this.Y.start(this.C, a, this.animationDelay);
    this.C = a;
    S4(this)
  };
  g.u(T4, g.U);
  g.k = T4.prototype;
  g.k.gB = function() {
    var a = this.api.getVideoData(),
      b = this.api.getVideoData(1).oc,
      c = this.api.T();
    a = (a.mutedAutoplay || c.Ub && !g.T(this.state, 2)) && !(b && c.pfpChazalUi);
    g.vN(this, a);
    g.CN(this.api, this.element, a)
  };
  g.k.tM = function(a) {
    a = a.state;
    this.state !== a && (this.state = a);
    this.gB()
  };
  g.k.Qa = function() {
    if (this.api.getVideoData().videoId) {
      var a = this.api.getVideoUrl(!0, !1, !1, !0);
      this.za("url", a);
      this.u || (this.u = this.xa("click", this.onClick))
    } else this.u && (this.za("url", null), this.Kb(this.u), this.u = null)
  };
  g.k.onClick = function(a) {
    var b = this.api.getVideoUrl(!g.NO(a), !1, !0, !0);
    g.lU(b, this.api, a);
    g.JT(this.api, this.element)
  };
  g.k.Ua = function(a) {
    if ((a = 480 > a.width) && !this.B || !a && this.B) {
      var b = new g.U(A4()),
        c = this.ia("ytp-watermark");
      g.K(c, "ytp-watermark-small", a);
      g.Ee(c);
      b.ha(c);
      this.B = a
    }
  };
  g.u(U4, g.tS);
  g.k = U4.prototype;
  g.k.li = function() {
    return !1
  };
  g.k.create = function() {
    var a = this.I.T(),
      b = g.lT(this.I);
    a.vb && (this.J = new R4(this.I, b), g.C(this, this.J), g.lP(this.I, this.J.element, 4));
    g.Q(a.experiments, "embeds_enable_muted_autoplay") && (this.B = new Q4(this.I), g.C(this, this.B), g.lP(this.I, this.B.element, 4), this.F = new P4(this.I), g.C(this, this.F), g.lP(this.I, this.F.element, 4));
    if (a.Ub || this.B) this.watermark = new T4(this.I), g.C(this, this.watermark), g.lP(this.I, this.watermark.element, 7);
    g.Q(a.experiments, "embeds_impression_link") && (this.D = new O4(this.I, b),
      g.C(this, this.D), g.lP(this.I, this.D.element, 7));
    this.C.N(this.I, "appresize", this.Ua);
    this.C.N(this.I, "presentingplayerstatechange", this.mM);
    this.C.N(this.I, "videodatachange", this.KS);
    this.C.N(this.I, "onMutedAutoplayStarts", this.LP);
    this.tb(g.NJ(this.I));
    this.player.Tc("embed");
    g.Q(a.experiments, "enable_cookie_reissue_iframe") && a.lf && !g.zq("__Secure-3PAPISID") && (a = a.deviceParams.c, a = void 0 === a ? "WEB" : a, (new QFa).u.RL("/client_streamz/youtube/web/debug/third_party_apisid_cookie_reissue_iframe", a), a =
      g.Ce("IFRAME"), a.src = "/signin?go=true", a.style.display = "none", document.body.appendChild(a))
  };
  g.k.Ua = function() {
    var a = g.mJ(this.I).getPlayerSize();
    this.u && this.u.u(a)
  };
  g.k.mM = function(a) {
    this.tb(a.state)
  };
  g.k.tb = function(a) {
    g.T(a, 128) ? (this.u || (this.u = new M4(this.I), g.C(this, this.u), g.lP(this.I, this.u.element, 4)), this.u.C(a.getData()), this.u.show(), g.J(this.I.getRootNode(), "ytp-embed-error")) : this.u && (this.u.dispose(), this.u = null, g.un(this.I.getRootNode(), "ytp-embed-error"))
  };
  g.k.LP = function() {
    this.I.getVideoData().mutedAutoplay && this.B && this.watermark && this.watermark.ha(this.B.bottomButtons, 0)
  };
  g.k.KS = function() {
    var a = this.I.getVideoData();
    this.watermark && this.B && !a.mutedAutoplay && g.Je(this.B.element, this.watermark.element) && g.lP(this.I, this.watermark.element, 7)
  };
  g.aU.embed = U4;
})(_yt_player);
