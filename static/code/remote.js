(function(g) {
  var window = this;
  var aHa = function(a, b) {
      return g.Ob(a, b)
    },
    X5 = function(a, b, c) {
      a.C.set(b, c)
    },
    Y5 = function(a) {
      X5(a, "zx", Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ g.A()).toString(36));
      return a
    },
    Z5 = function(a, b, c) {
      Array.isArray(c) || (c = [String(c)]);
      g.an(a.C, b, c)
    },
    bHa = function(a, b) {
      var c = [];
      g.hj(b, function(d) {
        try {
          var e = g.$n.prototype.B.call(this, d, !0)
        } catch (f) {
          if ("Storage: Invalid value was encountered" == f) return;
          throw f;
        }
        void 0 === e ? c.push(d) : g.Zn(e) && c.push(d)
      }, a);
      return c
    },
    cHa = function(a, b) {
      var c = bHa(a, b);
      g.Cb(c, function(d) {
        g.$n.prototype.remove.call(this, d)
      }, a)
    },
    dHa = function(a) {
      if (a.qe) {
        if (a.qe.locationOverrideToken) return {
          locationOverrideToken: a.qe.locationOverrideToken
        };
        if (null != a.qe.latitudeE7 && null != a.qe.longitudeE7) return {
          latitudeE7: a.qe.latitudeE7,
          longitudeE7: a.qe.longitudeE7
        }
      }
      return null
    },
    eHa = function(a, b) {
      g.jb(a, b) || a.push(b)
    },
    $5 = function(a) {
      var b = 0,
        c;
      for (c in a) b++;
      return b
    },
    fHa = function(a, b) {
      var c = b instanceof g.Cc ? b : g.Ic(b, /^data:image\//i.test(b));
      a.src = g.Dc(c)
    },
    a6 = function() {},
    gHa = function(a) {
      try {
        return g.v.JSON.parse(a)
      } catch (b) {}
      a = String(a);
      if (/^\s*$/.test(a) ? 0 : /^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g, "@").replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, ""))) try {
        return eval("(" + a + ")")
      } catch (b) {}
      throw Error("Invalid JSON string: " + a);
    },
    hHa = function(a) {
      if (a.Bf && "function" == typeof a.Bf) return a.Bf();
      if ("string" === typeof a) return a.split("");
      if (g.Na(a)) {
        for (var b = [], c = a.length, d = 0; d < c; d++) b.push(a[d]);
        return b
      }
      return g.Kb(a)
    },
    iHa = function(a, b) {
      if (a.forEach && "function" == typeof a.forEach) a.forEach(b, void 0);
      else if (g.Na(a) || "string" === typeof a) g.Cb(a, b, void 0);
      else {
        if (a.Ug && "function" == typeof a.Ug) var c = a.Ug();
        else if (a.Bf && "function" == typeof a.Bf) c = void 0;
        else if (g.Na(a) || "string" === typeof a) {
          c = [];
          for (var d = a.length, e = 0; e < d; e++) c.push(e)
        } else c = g.Lb(a);
        d = hHa(a);
        e = d.length;
        for (var f = 0; f < e; f++) b.call(void 0, d[f], c && c[f], a)
      }
    },
    jHa = function(a, b, c, d) {
      var e = new g.Pm(null, void 0);
      a && g.Qm(e, a);
      b && g.Rm(e, b);
      c && g.Sm(e, c);
      d && (e.B = d);
      return e
    },
    b6 = function(a, b) {
      g.Mo[a] = !0;
      var c = g.Ko();
      c && c.publish.apply(c, arguments);
      g.Mo[a] = !1
    },
    c6 = function(a) {
      this.app = this.name = this.id = "";
      this.type = "REMOTE_CONTROL";
      this.obfuscatedGaiaId = this.avatar = this.username = "";
      this.capabilities = new Set;
      this.experiments = new Set;
      this.theme = "u";
      new g.Mm;
      a && (this.id = a.id || a.name, this.name = a.name, this.app = a.app, this.type = a.type || "REMOTE_CONTROL", this.username = a.user || "", this.avatar = a.userAvatarUri || "", this.obfuscatedGaiaId = a.obfuscatedGaiaId || "", this.theme = a.theme || "u", kHa(this, a.capabilities || ""), lHa(this, a.experiments || ""))
    },
    kHa = function(a, b) {
      a.capabilities.clear();
      g.He(b.split(","), g.Ta(aHa, mHa)).forEach(function(c) {
        a.capabilities.add(c)
      })
    },
    lHa = function(a, b) {
      a.experiments.clear();
      b.split(",").forEach(function(c) {
        a.experiments.add(c)
      })
    },
    d6 = function(a) {
      a = a || {};
      this.name = a.name || "";
      this.id = a.id || a.screenId || "";
      this.token = a.token || a.loungeToken || "";
      this.uuid = a.uuid || a.dialId || "";
      this.idType = a.screenIdType || "normal"
    },
    e6 = function(a, b) {
      return !!b && (a.id == b || a.uuid == b)
    },
    nHa = function(a) {
      return {
        name: a.name,
        screenId: a.id,
        loungeToken: a.token,
        dialId: a.uuid,
        screenIdType: a.idType
      }
    },
    oHa = function(a) {
      return new d6(a)
    },
    pHa = function(a) {
      return Array.isArray(a) ? g.Mc(a, oHa) : []
    },
    f6 = function(a) {
      return a ? '{name:"' + a.name + '",id:' + a.id.substr(0, 6) + "..,token:" + ((a.token ? ".." + a.token.slice(-6) : "-") + ",uuid:" + (a.uuid ? ".." + a.uuid.slice(-6) : "-") + ",idType:" + a.idType + "}") : "null"
    },
    g6 = function(a) {
      return Array.isArray(a) ? "[" + g.Mc(a, f6).join(",") + "]" : "null"
    },
    h6 = function() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,
        function(a) {
          var b = 16 * Math.random() | 0;
          return ("x" == a ? b : b & 3 | 8).toString(16)
        })
    },
    qHa = function(a) {
      return g.Mc(a, function(b) {
        return {
          key: b.id,
          name: b.name
        }
      })
    },
    i6 = function(a, b) {
      return g.fb(a, function(c) {
        return c || b ? !c != !b ? !1 : c.id == b.id : !0
      })
    },
    j6 = function(a, b) {
      return g.fb(a, function(c) {
        return e6(c, b)
      })
    },
    rHa = function() {
      var a = (0, g.qu)();
      a && cHa(a, a.u.wj(!0))
    },
    k6 = function() {
      var a = g.uu("yt-remote-connected-devices") || [];
      g.zb(a);
      return a
    },
    sHa = function(a) {
      if (g.kb(a)) return [];
      var b = a[0].indexOf("#"),
        c = -1 == b ? a[0] : a[0].substring(0, b);
      return g.Mc(a, function(d, e) {
        return 0 == e ? d : d.substring(c.length)
      })
    },
    tHa = function(a) {
      g.tu("yt-remote-connected-devices", a, 86400)
    },
    m6 = function() {
      if (l6) return l6;
      var a = g.uu("yt-remote-device-id");
      a || (a = h6(), g.tu("yt-remote-device-id", a, 31536E3));
      for (var b = k6(), c = 1, d = a; g.jb(b, d);) c++, d = a + "#" + c;
      return l6 = d
    },
    n6 = function() {
      var a = k6(),
        b = m6();
      g.jb(a, b);
      g.wu() && g.Bb(a, b);
      a = sHa(a);
      if (g.kb(a)) try {
        g.Aq("remote_sid")
      } catch (c) {} else try {
        g.yq("remote_sid", a.join(","), -1)
      } catch (c) {}
    },
    uHa = function() {
      return g.uu("yt-remote-session-browser-channel")
    },
    vHa = function() {
      return g.uu("yt-remote-local-screens") || []
    },
    wHa = function() {
      g.tu("yt-remote-lounge-token-expiration", !0, 86400)
    },
    xHa = function(a) {
      5 < a.length && (a = a.slice(a.length - 5));
      var b = g.Mc(vHa(), function(d) {
          return d.loungeToken
        }),
        c = g.Mc(a, function(d) {
          return d.loungeToken
        });
      g.ph(c, function(d) {
        return !g.jb(b, d)
      }) && wHa();
      g.tu("yt-remote-local-screens", a, 31536E3)
    },
    yHa = function(a, b) {
      g.tu("yt-remote-session-browser-channel", a);
      g.tu("yt-remote-session-screen-id", b);
      var c = k6(),
        d = m6();
      g.jb(c, d) || c.push(d);
      tHa(c);
      n6()
    },
    o6 = function(a) {
      a || (g.vu("yt-remote-session-screen-id"), g.vu("yt-remote-session-video-id"));
      n6();
      a = k6();
      g.ob(a, m6());
      tHa(a)
    },
    zHa = function() {
      if (!p6) {
        var a = g.ko();
        a && (p6 = new g.Mn(a))
      }
    },
    AHa = function() {
      zHa();
      return p6 ? !!p6.get("yt-remote-use-staging-server") : !1
    },
    BHa = function(a) {
      return !!document.currentScript && (-1 != document.currentScript.src.indexOf("?" + a) || -1 != document.currentScript.src.indexOf("&" + a))
    },
    CHa = function() {
      return "function" == typeof window.__onGCastApiAvailable ? window.__onGCastApiAvailable : null
    },
    q6 = function(a) {
      a.length ? DHa(a.shift(), function() {
        q6(a)
      }) : r6()
    },
    EHa = function(a) {
      return "chrome-extension://" + a + "/cast_sender.js"
    },
    DHa = function(a, b, c) {
      var d = document.createElement("script");
      d.onerror = b;
      c && (d.onload = c);
      g.hd(d, g.mg(a));
      (document.head || document.documentElement).appendChild(d)
    },
    r6 = function() {
      var a = CHa();
      a && a(!1, "No cast extension found")
    },
    GHa = function() {
      if (FHa) {
        var a = 2,
          b = CHa(),
          c = function() {
            a--;
            0 == a && b && b(!0)
          };
        window.__onGCastApiAvailable = c;
        DHa("//www.gstatic.com/cast/sdk/libs/sender/1.0/cast_framework.js", r6, c)
      }
    },
    HHa = function() {
      GHa();
      var a = (a = window.navigator.userAgent.match(/Chrome\/([0-9]+)/)) ? parseInt(a[1], 10) : 0;
      var b = [];
      if (0 != a) {
        var c = a - 1;
        b.push("//www.gstatic.com/eureka/clank/" + a + "/cast_sender.js");
        b.push("//www.gstatic.com/eureka/clank/" + c + "/cast_sender.js")
      }
      b.push("//www.gstatic.com/eureka/clank/cast_sender.js");
      q6(b)
    },
    s6 = function(a, b, c) {
      g.B.call(this);
      this.J = null != c ? (0, g.z)(a, c) : a;
      this.sf = b;
      this.F = (0, g.z)(this.KK, this);
      this.u = !1;
      this.B = 0;
      this.C = this.gb = null;
      this.D = []
    },
    t6 = function(a, b, c) {
      g.B.call(this);
      this.D = null != c ? a.bind(c) : a;
      this.sf = b;
      this.C = null;
      this.u = !1;
      this.B = 0;
      this.gb = null
    },
    u6 = function(a) {
      a.gb = g.Km(function() {
        a.gb = null;
        a.u && !a.B && (a.u = !1, u6(a))
      }, a.sf);
      var b = a.C;
      a.C = null;
      a.D.apply(null, b)
    },
    v6 = function(a) {
      if (g.v.JSON) try {
        return g.v.JSON.parse(a)
      } catch (b) {}
      return gHa(a)
    },
    w6 = function() {},
    x6 = function(a, b) {
      if ("function" !== typeof a) throw Error("Fn must not be null and must be a function");
      return g.v.setTimeout(function() {
        a()
      }, b)
    },
    z6 = function(a) {
      y6.dispatchEvent(new IHa(y6, a))
    },
    IHa = function(a) {
      g.Dl.call(this, "statevent", a)
    },
    A6 = function() {},
    JHa = function() {},
    LHa = function(a) {
      return (a = KHa(a)) ? new ActiveXObject(a) : new XMLHttpRequest
    },
    KHa = function(a) {
      if (!a.B && "undefined" == typeof XMLHttpRequest && "undefined" != typeof ActiveXObject) {
        for (var b = ["MSXML2.XMLHTTP.6.0",
            "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"
          ], c = 0; c < b.length; c++) {
          var d = b[c];
          try {
            return new ActiveXObject(d), a.B = d
          } catch (e) {}
        }
        throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");
      }
      return a.B
    },
    B6 = function(a, b, c, d) {
      this.u = a;
      this.B = b;
      this.P = c;
      this.K = d || 1;
      this.F = 45E3;
      this.D = new g.f1(this);
      this.C = new g.Jm;
      this.C.setInterval(250)
    },
    NHa = function(a, b, c) {
      a.pp = 1;
      a.Ck = Y5(b.clone());
      a.Xm = c;
      a.J = !0;
      MHa(a, null)
    },
    C6 = function(a, b, c, d, e) {
      a.pp = 1;
      a.Ck = Y5(b.clone());
      a.Xm = null;
      a.J = c;
      e && (a.GH = !1);
      MHa(a, d)
    },
    MHa = function(a, b) {
      a.fp = g.A();
      D6(a);
      a.Hl = a.Ck.clone();
      Z5(a.Hl, "t", a.K);
      a.Es = 0;
      a.re = a.u.Jx(a.u.ds() ? b : null);
      0 < a.Ay && (a.Tv = new t6((0, g.z)(a.LI, a, a.re), a.Ay));
      a.D.xa(a.re, "readystatechange", a.MR);
      var c = a.Am ? g.Ub(a.Am) : {};
      a.Xm ? (a.Fw = "POST", c["Content-Type"] = "application/x-www-form-urlencoded", a.re.send(a.Hl, a.Fw, a.Xm, c)) : (a.Fw = "GET", a.GH && !g.xe && (c.Connection = "close"), a.re.send(a.Hl, a.Fw, null, c));
      a.u.Zh(1)
    },
    QHa = function(a, b, c) {
      for (var d = !0; !a.hm && a.Es < c.length;) {
        var e = OHa(a, c);
        if (e == E6) {
          4 == b && (a.Uk = 4, z6(15), d = !1);
          break
        } else if (e == PHa) {
          a.Uk = 4;
          z6(16);
          d = !1;
          break
        } else F6(a, e)
      }
      4 == b && 0 == c.length && (a.Uk = 1, z6(17), d = !1);
      a.mi = a.mi && d;
      d || (G6(a), H6(a))
    },
    OHa = function(a, b) {
      var c = a.Es,
        d = b.indexOf("\n", c);
      if (-1 == d) return E6;
      c = Number(b.substring(c, d));
      if (isNaN(c)) return PHa;
      d += 1;
      if (d + c > b.length) return E6;
      var e = b.substr(d, c);
      a.Es = d + c;
      return e
    },
    SHa = function(a, b) {
      a.fp = g.A();
      D6(a);
      var c = b ? window.location.hostname : "";
      a.Hl = a.Ck.clone();
      X5(a.Hl, "DOMAIN", c);
      X5(a.Hl, "t", a.K);
      try {
        a.ti = new ActiveXObject("htmlfile")
      } catch (n) {
        G6(a);
        a.Uk = 7;
        z6(22);
        H6(a);
        return
      }
      var d = "<html><body>";
      if (b) {
        for (var e = "", f = 0; f < c.length; f++) {
          var h = c.charAt(f);
          if ("<" == h) h = e + "\\x3c";
          else if (">" == h) h = e + "\\x3e";
          else {
            if (h in I6) h = I6[h];
            else if (h in RHa) h = I6[h] = RHa[h];
            else {
              var l = h.charCodeAt(0);
              if (31 < l && 127 > l) var m = h;
              else {
                if (256 > l) {
                  if (m = "\\x", 16 > l || 256 < l) m += "0"
                } else m = "\\u", 4096 > l && (m += "0");
                m += l.toString(16).toUpperCase()
              }
              h =
                I6[h] = m
            }
            h = e + h
          }
          e = h
        }
        d += '<script>document.domain="' + e + '"\x3c/script>'
      }
      c = g.dd(g.fc("b/12014412"), d + "</body></html>");
      a.ti.open();
      a.ti.write(g.$c(c));
      a.ti.close();
      a.ti.parentWindow.m = (0, g.z)(a.gR, a);
      a.ti.parentWindow.d = (0, g.z)(a.xG, a, !0);
      a.ti.parentWindow.rpcClose = (0, g.z)(a.xG, a, !1);
      c = a.ti.createElement("DIV");
      a.ti.parentWindow.document.body.appendChild(c);
      d = g.Hc(a.Hl.toString());
      d = g.ld(g.Dc(d));
      d = g.dd(g.fc("b/12014412"), '<iframe src="' + d + '"></iframe>');
      g.ed(c, d);
      a.u.Zh(1)
    },
    D6 = function(a) {
      a.kB = g.A() + a.F;
      THa(a, a.F)
    },
    THa = function(a, b) {
      if (null != a.zp) throw Error("WatchDog timer not null");
      a.zp = x6((0, g.z)(a.oR, a), b)
    },
    J6 = function(a) {
      a.zp && (g.v.clearTimeout(a.zp), a.zp = null)
    },
    H6 = function(a) {
      a.u.yD() || a.hm || a.u.eu(a)
    },
    G6 = function(a) {
      J6(a);
      g.Zf(a.Tv);
      a.Tv = null;
      a.C.stop();
      g.nBa(a.D);
      if (a.re) {
        var b = a.re;
        a.re = null;
        b.abort();
        b.dispose()
      }
      a.ti && (a.ti = null)
    },
    F6 = function(a, b) {
      try {
        a.u.pG(a, b), a.u.Zh(4)
      } catch (c) {}
    },
    VHa = function(a, b, c, d, e) {
      if (0 == d) c(!1);
      else {
        var f = e || 0;
        d--;
        UHa(a, b, function(h) {
          h ? c(!0) : g.v.setTimeout(function() {
            VHa(a, b, c, d, f)
          }, f)
        })
      }
    },
    UHa = function(a, b, c) {
      var d = new Image;
      d.onload = function() {
        try {
          K6(d), c(!0)
        } catch (e) {}
      };
      d.onerror = function() {
        try {
          K6(d), c(!1)
        } catch (e) {}
      };
      d.onabort = function() {
        try {
          K6(d), c(!1)
        } catch (e) {}
      };
      d.ontimeout = function() {
        try {
          K6(d), c(!1)
        } catch (e) {}
      };
      g.v.setTimeout(function() {
        if (d.ontimeout) d.ontimeout()
      }, b);
      fHa(d, a)
    },
    K6 = function(a) {
      a.onload = null;
      a.onerror = null;
      a.onabort = null;
      a.ontimeout = null
    },
    L6 = function(a) {
      g.$l.call(this);
      this.headers = new g.Mm;
      this.fa = a || null;
      this.C = !1;
      this.da = this.u = null;
      this.Ba = this.S = "";
      this.J = 0;
      this.D = "";
      this.F = this.la = this.P = this.ra = !1;
      this.K = 0;
      this.X = null;
      this.Ma = "";
      this.Y = this.ga = !1
    },
    WHa = function(a) {
      return g.ve && g.Yd(9) && "number" === typeof a.timeout && void 0 !== a.ontimeout
    },
    XHa = function(a) {
      return "content-type" == a.toLowerCase()
    },
    ZHa = function(a, b) {
      a.C = !1;
      a.u && (a.F = !0, a.u.abort(), a.F = !1);
      a.D = b;
      a.J = 5;
      YHa(a);
      M6(a)
    },
    YHa = function(a) {
      a.ra || (a.ra = !0, a.dispatchEvent("complete"), a.dispatchEvent("error"))
    },
    aIa = function(a) {
      if (a.C && "undefined" != typeof g.k1)
        if (a.da[1] && 4 == N6(a) && 2 == a.getStatus()) O6(a, "Local request error detected and ignored");
        else if (a.P && 4 == N6(a)) g.Km(a.mG, 0, a);
      else if (a.dispatchEvent("readystatechange"), a.isComplete()) {
        O6(a, "Request complete");
        a.C = !1;
        try {
          var b = a.getStatus();
          a: switch (b) {
            case 200:
            case 201:
            case 202:
            case 204:
            case 206:
            case 304:
            case 1223:
              var c = !0;
              break a;
            default:
              c = !1
          }
          var d;
          if (!(d = c)) {
            var e;
            if (e = 0 === b) {
              var f = g.ud(1, String(a.S));
              if (!f && g.v.self && g.v.self.location) {
                var h = g.v.self.location.protocol;
                f = h.substr(0, h.length - 1)
              }
              e = !$Ha.test(f ? f.toLowerCase() : "")
            }
            d = e
          }
          if (d) a.dispatchEvent("complete"), a.dispatchEvent("success");
          else {
            a.J = 6;
            try {
              var l = 2 < N6(a) ? a.u.statusText : ""
            } catch (m) {
              l = ""
            }
            a.D = l + " [" + a.getStatus() + "]";
            YHa(a)
          }
        } finally {
          M6(a)
        }
      }
    },
    M6 = function(a, b) {
      if (a.u) {
        bIa(a);
        var c = a.u,
          d = a.da[0] ? g.Ka : null;
        a.u = null;
        a.da = null;
        b || a.dispatchEvent("ready");
        try {
          c.onreadystatechange = d
        } catch (e) {}
      }
    },
    bIa = function(a) {
      a.u && a.Y && (a.u.ontimeout = null);
      a.X && (g.v.clearTimeout(a.X), a.X = null)
    },
    N6 = function(a) {
      return a.u ? a.u.readyState : 0
    },
    P6 = function(a) {
      try {
        return a.u ? a.u.responseText : ""
      } catch (b) {
        return ""
      }
    },
    O6 = function(a, b) {
      return b + " [" + a.Ba + " " + a.S + " " + a.getStatus() + "]"
    },
    cIa = function(a) {
      this.u = a;
      this.B = new w6
    },
    dIa = function(a) {
      var b = Q6(a.u, a.Rp, "/mail/images/cleardot.gif");
      Y5(b);
      VHa(b.toString(), 5E3, (0, g.z)(a.MJ, a), 3, 2E3);
      a.Zh(1)
    },
    S6 = function(a) {
      var b = a.u.P;
      if (null != b) z6(5), b ? (z6(11), R6(a.u, a, !1)) : (z6(12), R6(a.u, a, !0));
      else if (a.jg = new B6(a, void 0, void 0, void 0), a.jg.Am = a.yy, b = a.u, b = Q6(b, b.ds() ? a.Dq : null, a.zy), z6(5), !g.ve || g.Zd(10)) Z5(b, "TYPE", "xmlhttp"), C6(a.jg, b, !1, a.Dq, !1);
      else {
        Z5(b, "TYPE", "html");
        var c = a.jg;
        a = !!a.Dq;
        c.pp = 3;
        c.Ck = Y5(b.clone());
        SHa(c, a)
      }
    },
    T6 = function(a, b, c) {
      this.Ja = 1;
      this.u = [];
      this.C = [];
      this.D = new w6;
      this.K = a || null;
      this.P = null != b ? b : null;
      this.F = c || !1
    },
    eIa = function(a, b) {
      this.u = a;
      this.map = b;
      this.context = null
    },
    fIa = function(a, b, c, d) {
      g.Dl.call(this, "timingevent", a);
      this.size = b;
      this.Rr = d
    },
    gIa = function(a) {
      g.Dl.call(this, "serverreachability", a)
    },
    jIa = function(a) {
      hIa(a);
      if (3 == a.Ja) {
        var b = a.sr++,
          c = a.It.clone();
        X5(c, "SID", a.B);
        X5(c, "RID", b);
        X5(c, "TYPE", "terminate");
        U6(a, c);
        b = new B6(a, a.B, b, void 0);
        b.pp = 2;
        b.Ck = Y5(c.clone());
        fHa(new Image, b.Ck.toString());
        b.fp = g.A();
        D6(b)
      }
      iIa(a)
    },
    kIa = function(a) {
      a.iK(1, 0);
      a.It = Q6(a, null, a.wy);
      V6(a)
    },
    hIa = function(a) {
      a.Hk && (a.Hk.abort(), a.Hk = null);
      a.Qd && (a.Qd.cancel(), a.Qd = null);
      a.yj && (g.v.clearTimeout(a.yj), a.yj = null);
      W6(a);
      a.Uf && (a.Uf.cancel(), a.Uf = null);
      a.Kk && (g.v.clearTimeout(a.Kk), a.Kk = null)
    },
    lIa = function(a, b) {
      if (0 == a.Ja) throw Error("Invalid operation: sending map when state is closed");
      a.u.push(new eIa(a.YN++, b));
      2 != a.Ja && 3 != a.Ja || V6(a)
    },
    mIa = function(a) {
      var b = 0;
      a.Qd && b++;
      a.Uf && b++;
      return b
    },
    V6 = function(a) {
      a.Uf || a.Kk || (a.Kk = x6((0, g.z)(a.wG, a), 0), a.Vn = 0)
    },
    oIa = function(a, b) {
      if (1 == a.Ja) {
        if (!b) {
          a.sr = Math.floor(1E5 * Math.random());
          var c = a.sr++,
            d = new B6(a, "", c, void 0);
          d.Am = a.Pi;
          var e = X6(a),
            f = a.It.clone();
          X5(f, "RID", c);
          X5(f, "CVER", "1");
          U6(a, f);
          NHa(d, f, e);
          a.Uf = d;
          a.Ja = 2
        }
      } else 3 == a.Ja && (b ? nIa(a, b) : 0 == a.u.length || a.Uf || nIa(a))
    },
    nIa = function(a, b) {
      if (b)
        if (6 < a.im) {
          a.u = a.C.concat(a.u);
          a.C.length = 0;
          var c = a.sr - 1;
          var d = X6(a)
        } else c = b.P, d = b.Xm;
      else c = a.sr++, d = X6(a);
      var e = a.It.clone();
      X5(e, "SID", a.B);
      X5(e, "RID", c);
      X5(e, "AID", a.no);
      U6(a, e);
      c = new B6(a, a.B, c, a.Vn + 1);
      c.Am = a.Pi;
      c.setTimeout(1E4 + Math.round(1E4 * Math.random()));
      a.Uf = c;
      NHa(c, e, d)
    },
    U6 = function(a, b) {
      if (a.qf) {
        var c = a.qf.aD();
        c && g.Eb(c, function(d, e) {
          X5(b, e, d)
        })
      }
    },
    X6 = function(a) {
      var b = Math.min(a.u.length, 1E3),
        c = ["count=" + b];
      if (6 < a.im && 0 < b) {
        var d = a.u[0].u;
        c.push("ofs=" + d)
      } else d = 0;
      for (var e = {}, f = 0; f < b; e = {
          un: e.un
        }, f++) {
        e.un = a.u[f].u;
        var h = a.u[f].map;
        e.un = 6 >= a.im ? f : e.un - d;
        try {
          g.Eb(h, function(l) {
            return function(m, n) {
              c.push("req" + l.un + "_" + n + "=" + encodeURIComponent(m))
            }
          }(e))
        } catch (l) {
          c.push("req" + e.un + "_type=" + encodeURIComponent("_badmap"))
        }
      }
      a.C = a.C.concat(a.u.splice(0, b));
      return c.join("&")
    },
    pIa = function(a) {
      a.Qd || a.yj || (a.J = 1, a.yj = x6((0, g.z)(a.vG, a), 0), a.Kn = 0)
    },
    Y6 = function(a) {
      if (a.Qd || a.yj || 3 <= a.Kn) return !1;
      a.J++;
      a.yj = x6((0, g.z)(a.vG, a), qIa(a, a.Kn));
      a.Kn++;
      return !0
    },
    R6 = function(a, b, c) {
      a.Cw = c;
      a.Qi = b.Nj;
      a.F || kIa(a)
    },
    W6 = function(a) {
      null != a.nm && (g.v.clearTimeout(a.nm), a.nm = null)
    },
    qIa = function(a, b) {
      var c = 5E3 + Math.floor(1E4 * Math.random());
      a.isActive() || (c *= 2);
      return c * b
    },
    Z6 = function(a, b) {
      if (2 == b || 9 == b) {
        var c = null;
        a.qf && (c = null);
        var d = (0, g.z)(a.sS, a);
        c || (c = new g.Pm("//www.google.com/images/cleardot.gif"), Y5(c));
        UHa(c.toString(), 1E4, d)
      } else z6(2);
      rIa(a, b)
    },
    rIa = function(a, b) {
      a.Ja = 0;
      a.qf && a.qf.qC(b);
      iIa(a);
      hIa(a)
    },
    iIa = function(a) {
      a.Ja = 0;
      a.Qi = -1;
      if (a.qf)
        if (0 == a.C.length && 0 == a.u.length) a.qf.xx();
        else {
          g.rb(a.C);
          var b = g.rb(a.u);
          a.C.length = 0;
          a.u.length = 0;
          a.qf.xx(b)
        }
    },
    Q6 = function(a, b, c) {
      var d = g.Xm(c);
      if ("" != d.u) b && g.Rm(d, b + "." + d.u), g.Sm(d, d.D);
      else {
        var e = window.location;
        d = jHa(e.protocol, b ? b + "." + e.hostname : e.hostname, +e.port, c)
      }
      a.lq && g.Eb(a.lq, function(f, h) {
        X5(d, h, f)
      });
      X5(d, "VER", a.im);
      U6(a, d);
      return d
    },
    sIa = function() {},
    tIa = function() {
      this.u = [];
      this.B = []
    },
    uIa = function(a, b) {
      this.action = a;
      this.params = b || {}
    },
    $6 = function(a, b) {
      g.B.call(this);
      this.u = new g.F(this.ZQ, 0, this);
      g.C(this, this.u);
      this.sf = 5E3;
      this.B = 0;
      if ("function" === typeof a) b && (a = (0, g.z)(a, b));
      else if (a && "function" === typeof a.handleEvent) a = (0, g.z)(a.handleEvent, a);
      else throw Error("Invalid listener argument");
      this.C = a
    },
    a7 = function(a, b, c, d, e) {
      c = void 0 === c ? !1 : c;
      d = void 0 === d ? function() {
        return ""
      } : d;
      e = void 0 === e ? !1 : e;
      this.da = a;
      this.J = b;
      this.C = new g.Ln;
      this.B = new $6(this.XR, this);
      this.u = null;
      this.X = !1;
      this.F = null;
      this.S = "";
      this.P = this.D = 0;
      this.K = [];
      this.fa = c;
      this.Y = d;
      this.ra = e
    },
    vIa = function(a) {
      return {
        firstTestResults: [""],
        secondTestResults: !a.u.Cw,
        sessionId: a.u.B,
        arrayId: a.u.no
      }
    },
    wIa = function(a, b) {
      a.P = b || 0;
      a.B.stop();
      b7(a);
      a.u && (3 == a.u.getState() && oIa(a.u), jIa(a.u));
      a.P = 0
    },
    c7 = function(a) {
      return !!a.u && 3 == a.u.getState()
    },
    b7 = function(a) {
      if (a.u) {
        var b = a.Y(),
          c = a.u.Pi || {};
        b ? c["x-youtube-lounge-xsrf-token"] = b : delete c["x-youtube-lounge-xsrf-token"];
        a.u.Pi = c
      }
    },
    d7 = function(a) {
      this.scheme = "https";
      this.port = this.domain = "";
      this.u = "/api/lounge";
      this.B = !0;
      a = a || document.location.href;
      var b = Number(g.ud(4, a)) || "";
      b && (this.port = ":" + b);
      this.domain = g.vd(a) || "";
      a = g.Tc;
      0 <= a.search("MSIE") && (a = a.match(/MSIE ([\d.]+)/)[1], 0 > g.Ac(a, "10.0") && (this.B = !1))
    },
    e7 = function(a, b) {
      var c = a.u;
      a.B && (c = a.scheme + "://" + a.domain + a.port + a.u);
      return g.Id(c + b, {})
    },
    f7 = function(a, b, c, d, e) {
      a = {
        format: "JSON",
        method: "POST",
        context: a,
        timeout: 5E3,
        withCredentials: !1,
        onSuccess: g.Ta(a.D, d, !0),
        onError: g.Ta(a.C, e),
        Cg: g.Ta(a.F, e)
      };
      c && (a.pc = c, a.headers = {
        "Content-Type": "application/x-www-form-urlencoded"
      });
      return g.sq(b, a)
    },
    AIa = function() {
      var a = xIa;
      yIa();
      g7.push(a);
      zIa()
    },
    h7 = function(a, b) {
      yIa();
      var c = BIa(a, String(b));
      g.kb(g7) ? CIa(c) : (zIa(), g.Cb(g7, function(d) {
        d(c)
      }))
    },
    yIa = function() {
      g7 || (g7 = g.Ja("yt.mdx.remote.debug.handlers_") || [], g.Fa("yt.mdx.remote.debug.handlers_", g7, void 0))
    },
    CIa = function(a) {
      var b = (i7 + 1) % 50;
      i7 = b;
      j7[b] = a;
      k7 || (k7 = 49 == b)
    },
    zIa = function() {
      var a = g7;
      if (j7[0]) {
        var b = k7 ? i7 : -1;
        do {
          b = (b + 1) % 50;
          var c = j7[b];
          g.Cb(a, function(d) {
            d(c)
          })
        } while (b != i7);
        j7 = Array(50);
        i7 = -1;
        k7 = !1
      }
    },
    BIa = function(a, b) {
      var c = (g.A() - DIa) / 1E3;
      c.toFixed && (c = c.toFixed(3));
      var d = [];
      d.push("[", c + "s", "] ");
      d.push("[", "yt.mdx.remote", "] ");
      d.push(a + ": " + b, "\n");
      return d.join("")
    },
    l7 = function(a) {
      g.O.call(this);
      this.J = a;
      this.screens = []
    },
    EIa = function(a, b) {
      var c = a.get(b.uuid) || a.get(b.id);
      if (c) {
        var d = c.name;
        c.id = b.id || c.id;
        c.name = b.name;
        c.token = b.token;
        c.uuid = b.uuid || c.uuid;
        return c.name != d
      }
      a.screens.push(b);
      return !0
    },
    FIa = function(a, b) {
      var c = a.screens.length != b.length;
      a.screens = g.He(a.screens, function(f) {
        return !!i6(b, f)
      });
      for (var d = 0, e = b.length; d < e; d++) c = EIa(a, b[d]) || c;
      return c
    },
    GIa = function(a, b) {
      var c = a.screens.length;
      a.screens = g.He(a.screens, function(d) {
        return !(d || b ? !d != !b ? 0 : d.id == b.id : 1)
      });
      return a.screens.length < c
    },
    m7 = function(a, b, c, d) {
      g.O.call(this);
      this.F = a;
      this.J = b;
      this.C = c;
      this.D = d;
      this.B = 0;
      this.u = null;
      this.gb = NaN
    },
    o7 = function(a) {
      l7.call(this, "LocalScreenService");
      this.B = a;
      this.u = NaN;
      n7(this);
      this.info("Initializing with " + g6(this.screens))
    },
    HIa = function(a) {
      if (a.screens.length) {
        var b = g.Mc(a.screens, function(d) {
            return d.id
          }),
          c = e7(a.B, "/pairing/get_lounge_token_batch");
        f7(a.B, c, {
          screen_ids: b.join(",")
        }, (0, g.z)(a.SK, a), (0, g.z)(a.RK, a))
      }
    },
    n7 = function(a) {
      if (g.wo("deprecate_pair_servlet_enabled")) return FIa(a, []);
      var b = pHa(vHa());
      b = g.He(b, function(c) {
        return !c.uuid
      });
      return FIa(a, b)
    },
    p7 = function(a, b) {
      xHa(g.Mc(a.screens, nHa));
      b && wHa()
    },
    r7 = function(a, b) {
      g.O.call(this);
      this.J = b;
      var c = g.uu("yt-remote-online-screen-ids") || "";
      c = c ? c.split(",") : [];
      for (var d = {}, e = this.J(), f = 0, h = e.length; f < h; ++f) {
        var l = e[f].id;
        d[l] = g.jb(c, l)
      }
      this.u = d;
      this.F = a;
      this.C = this.D = NaN;
      this.B = null;
      q7("Initialized with " + g.Kj(this.u))
    },
    s7 = function(a, b, c) {
      var d = e7(a.F, "/pairing/get_screen_availability");
      f7(a.F, d, {
        lounge_token: b.token
      }, (0, g.z)(function(e) {
        e = e.screens || [];
        for (var f = 0, h = e.length; f < h; ++f)
          if (e[f].loungeToken == b.token) {
            c("online" == e[f].status);
            return
          } c(!1)
      }, a), (0, g.z)(function() {
        c(!1)
      }, a))
    },
    t7 = function(a, b) {
      a: if ($5(b) != $5(a.u)) var c = !1;
        else {
          c = g.Lb(b);
          for (var d = 0, e = c.length; d < e; ++d)
            if (!a.u[c[d]]) {
              c = !1;
              break a
            } c = !0
        }c || (q7("Updated online screens: " + g.Kj(a.u)), a.u = b, a.V("screenChange"));IIa(a)
    },
    u7 = function(a) {
      isNaN(a.C) || g.Jo(a.C);
      a.C = g.Ho((0, g.z)(a.kA, a), 0 < a.D && a.D < g.A() ? 2E4 : 1E4)
    },
    q7 = function(a) {
      h7("OnlineScreenService", a)
    },
    JIa = function(a) {
      var b = {};
      g.Cb(a.J(), function(c) {
        c.token ? b[c.token] = c.id : this.yd("Requesting availability of screen w/o lounge token.")
      });
      return b
    },
    IIa = function(a) {
      a = g.Lb(g.Fb(a.u, function(b) {
        return b
      }));
      g.zb(a);
      a.length ? g.tu("yt-remote-online-screen-ids", a.join(","), 60) : g.vu("yt-remote-online-screen-ids")
    },
    v7 = function(a) {
      l7.call(this, "ScreenService");
      this.F = a;
      this.u = this.B = null;
      this.C = [];
      this.D = {};
      KIa(this)
    },
    MIa = function(a, b, c, d, e, f) {
      a.info("getAutomaticScreenByIds " + c + " / " + b);
      c || (c = a.D[b]);
      var h = a.ug();
      if (h = (c ? j6(h, c) : null) || j6(h, b)) {
        h.uuid = b;
        var l = w7(a, h);
        s7(a.u, l, function(m) {
          e(m ? l : null)
        })
      } else c ? LIa(a, c, (0, g.z)(function(m) {
        var n = w7(this, new d6({
          name: d,
          screenId: c,
          loungeToken: m,
          dialId: b || ""
        }));
        s7(this.u, n, function(p) {
          e(p ? n : null)
        })
      }, a), f) : e(null)
    },
    NIa = function(a, b) {
      for (var c = 0, d = a.screens.length; c < d; ++c)
        if (a.screens[c].name == b) return a.screens[c];
      return null
    },
    OIa = function(a, b, c) {
      s7(a.u, b, c)
    },
    LIa = function(a, b, c, d) {
      a.info("requestLoungeToken_ for " + b);
      var e = {
        pc: {
          screen_ids: b
        },
        method: "POST",
        context: a,
        onSuccess: function(f, h) {
          var l = h && h.screens || [];
          l[0] && l[0].screenId == b ? c(l[0].loungeToken) : d(Error("Missing lounge token in token response"))
        },
        onError: function() {
          d(Error("Request screen lounge token failed"))
        }
      };
      g.sq(e7(a.F, "/pairing/get_lounge_token_batch"), e)
    },
    PIa = function(a) {
      a.screens = a.B.ug();
      var b = a.D,
        c = {},
        d;
      for (d in b) c[b[d]] = d;
      b = 0;
      for (d = a.screens.length; b < d; ++b) {
        var e = a.screens[b];
        e.uuid = c[e.id] || ""
      }
      a.info("Updated manual screens: " + g6(a.screens))
    },
    KIa = function(a) {
      x7(a);
      a.B = new o7(a.F);
      a.B.subscribe("screenChange", (0, g.z)(a.YK, a));
      PIa(a);
      a.C = pHa(g.uu("yt-remote-automatic-screen-cache") || []);
      x7(a);
      a.info("Initializing automatic screens: " + g6(a.C));
      a.u = new r7(a.F, (0, g.z)(a.ug, a, !0));
      a.u.subscribe("screenChange", (0, g.z)(function() {
        this.V("onlineScreenChange")
      }, a))
    },
    w7 = function(a, b) {
      var c = a.get(b.id);
      c ? (c.uuid = b.uuid, b = c) : ((c = j6(a.C, b.uuid)) ? (c.id = b.id, c.token = b.token, b = c) : a.C.push(b), QIa(a));
      x7(a);
      a.D[b.uuid] = b.id;
      g.tu("yt-remote-device-id-map", a.D, 31536E3);
      return b
    },
    QIa = function(a) {
      a = g.He(a.C, function(b) {
        return "shortLived" != b.idType
      });
      g.tu("yt-remote-automatic-screen-cache", g.Mc(a, nHa))
    },
    x7 = function(a) {
      a.D = g.uu("yt-remote-device-id-map") || {}
    },
    y7 = function(a, b, c) {
      g.O.call(this);
      this.ga = c;
      this.F = a;
      this.u = b;
      this.C = null
    },
    z7 = function(a, b) {
      a.C = b;
      a.V("sessionScreen", a.C)
    },
    A7 = function(a, b) {
      h7(a.ga, b)
    },
    B7 = function(a, b, c) {
      y7.call(this, a, b, "CastSession");
      var d = this;
      this.la = c;
      this.B = null;
      this.fa = (0, g.z)(this.VS, this);
      this.Y = (0, g.z)(this.vR, this);
      this.X = g.Ho(function() {
        RIa(d, null)
      }, 12E4);
      this.K = this.D = this.J = this.P = 0;
      this.da = !1;
      this.S = "unknown"
    },
    C7 = function(a, b) {
      g.Jo(a.K);
      a.K = 0;
      0 == b ? SIa(a) : a.K = g.Ho(function() {
        SIa(a)
      }, b)
    },
    SIa = function(a) {
      TIa(a, "getLoungeToken");
      g.Jo(a.D);
      a.D = g.Ho(function() {
        UIa(a, null)
      }, 3E4)
    },
    TIa = function(a, b) {
      a.info("sendYoutubeMessage_: " + b + " " + g.Kj(void 0));
      var c = {};
      c.type = b;
      a.B ? a.B.sendMessage("urn:x-cast:com.google.youtube.mdx", c, g.Ka, (0, g.z)(function() {
        A7(this, "Failed to send message: " + b + ".")
      }, a)) : A7(a, "Sending yt message without session: " + g.Kj(c))
    },
    D7 = function(a, b) {
      b ? (a.info("onConnectedScreenId_: Received screenId: " + b), a.getScreen() && a.getScreen().id == b || a.sD(b, function(c) {
        z7(a, c)
      }, function() {
        return a.Jf()
      }, 5)) : a.Jf(Error("Waiting for session status timed out."))
    },
    WIa = function(a, b, c) {
      a.info("onConnectedScreenData_: Received screenData: " + JSON.stringify(b));
      var d = new d6(b);
      VIa(a, d, function(e) {
        e ? (a.da = !0, w7(a.F, d), z7(a, d), a.S = "unknown", C7(a, c)) : (g.M(Error("CastSession, RemoteScreen from screenData: " + JSON.stringify(b) + " is not online.")), a.Jf())
      }, 5)
    },
    RIa = function(a, b) {
      g.Jo(a.X);
      a.X = 0;
      b ? a.la.W4 && b.loungeToken ? b.deviceId ? a.getScreen() && a.getScreen().uuid == b.deviceId || (b.loungeTokenRefreshIntervalMs ? WIa(a, {
        name: a.u.friendlyName,
        screenId: b.screenId,
        loungeToken: b.loungeToken,
        dialId: b.deviceId,
        screenIdType: "shortLived"
      }, b.loungeTokenRefreshIntervalMs) : (g.M(Error("No loungeTokenRefreshIntervalMs presents in mdxSessionStatusData: " + JSON.stringify(b) + ".")), D7(a, b.screenId))) : (g.M(Error("No device id presents in mdxSessionStatusData: " + JSON.stringify(b) + ".")), D7(a, b.screenId)) : D7(a,
        b.screenId) : a.Jf(Error("Waiting for session status timed out."))
    },
    UIa = function(a, b) {
      g.Jo(a.D);
      a.D = 0;
      var c = null;
      if (b)
        if (b.loungeToken) {
          var d;
          (null == (d = a.getScreen()) ? void 0 : d.token) == b.loungeToken && (c = "staleLoungeToken")
        } else c = "missingLoungeToken";
      else c = "noLoungeTokenResponse";
      c ? (a.info("Did not receive a new lounge token in onLoungeToken_ with data: " + (JSON.stringify(b) + ", error: " + c)), a.S = c, C7(a, 3E4)) : (a.C && (a.C.token = b.loungeToken, w7(a.F, a.C)), a.V("sessionScreen", a.C), a.da = !1, a.S = "unknown", C7(a, b.loungeTokenRefreshIntervalMs))
    },
    VIa = function(a, b, c, d) {
      g.Jo(a.J);
      a.J = 0;
      OIa(a.F, b, function(e) {
        e || 0 > d ? c(e) : a.J = g.Ho(function() {
          VIa(a, b, c, d - 1)
        }, 300)
      })
    },
    XIa = function(a) {
      g.Jo(a.P);
      a.P = 0;
      g.Jo(a.J);
      a.J = 0;
      g.Jo(a.X);
      a.X = 0;
      g.Jo(a.D);
      a.D = 0;
      g.Jo(a.K);
      a.K = 0
    },
    E7 = function(a, b, c) {
      y7.call(this, a, b, "DialSession");
      this.D = this.P = null;
      this.S = "";
      this.da = c;
      this.X = null;
      this.K = g.Ka;
      this.J = NaN;
      this.Y = (0, g.z)(this.OL, this);
      this.B = g.Ka
    },
    YIa = function(a) {
      a.B = a.F.SI(a.S, a.u.label, a.u.friendlyName, (0, g.z)(function(b) {
        this.B = g.Ka;
        z7(this, b)
      }, a), (0, g.z)(function(b) {
        this.B = g.Ka;
        this.Jf(b)
      }, a))
    },
    ZIa = function(a) {
      var b = {};
      b.pairingCode = a.S;
      b.theme = a.da;
      AHa() && (b.env_useStageMdx = 1);
      return g.Ed(b)
    },
    F7 = function(a, b) {
      y7.call(this, a, b, "ManualSession");
      this.B = g.Ho((0, g.z)(this.oo, this, null), 150)
    },
    G7 = function(a, b) {
      g.O.call(this);
      this.D = b;
      this.B = a;
      this.P = b.appId || "233637DE";
      this.K = b.theme || "cl";
      this.S = b.disableCastApi || !1;
      this.u = null;
      this.J = !1;
      this.C = [];
      this.F = (0, g.z)(this.oQ, this)
    },
    $Ia = function(a, b) {
      return b ? g.fb(a.C, function(c) {
        return e6(b, c.label)
      }, a) : null
    },
    H7 = function(a) {
      h7("Controller", a)
    },
    xIa = function(a) {
      window.chrome && chrome.cast && chrome.cast.logMessage && chrome.cast.logMessage(a)
    },
    I7 = function(a) {
      return a.J || !!a.C.length || !!a.u
    },
    J7 = function(a, b, c) {
      b != a.u && (g.Zf(a.u), (a.u = b) ? (c ? a.V("yt-remote-cast2-receiver-resumed",
        b.u) : a.V("yt-remote-cast2-receiver-selected", b.u), b.subscribe("sessionScreen", (0, g.z)(a.tG, a, b)), b.getScreen() ? a.V("yt-remote-cast2-session-change", b.getScreen()) : c && a.u.oo(null)) : a.V("yt-remote-cast2-session-change", null))
    },
    aJa = function(a) {
      var b = a.B.RI(),
        c = a.u && a.u.u;
      a = g.Mc(b, function(d) {
        c && e6(d, c.label) && (c = null);
        var e = d.uuid ? d.uuid : d.id,
          f = $Ia(this, d);
        f ? (f.label = e, f.friendlyName = d.name) : (f = new chrome.cast.Receiver(e, d.name), f.receiverType = chrome.cast.ReceiverType.CUSTOM);
        return f
      }, a);
      c && (c.receiverType != chrome.cast.ReceiverType.CUSTOM && (c = new chrome.cast.Receiver(c.label, c.friendlyName), c.receiverType = chrome.cast.ReceiverType.CUSTOM), a.push(c));
      return a
    },
    gJa = function(a, b, c, d) {
      d.disableCastApi ? K7("Cannot initialize because disabled by Mdx config.") : bJa() ? cJa(b, d) && (L7(!0), window.chrome && chrome.cast && chrome.cast.isAvailable ? dJa(a, c) : (window.__onGCastApiAvailable = function(e, f) {
        e ? dJa(a, c) : (M7("Failed to load cast API: " + f), N7(!1), L7(!1), g.vu("yt-remote-cast-available"), g.vu("yt-remote-cast-receiver"),
          eJa(), c(!1))
      }, d.loadCastApiSetupScript ? g.To("https://www.gstatic.com/cv/js/sender/v1/cast_sender.js") : 0 <= window.navigator.userAgent.indexOf("Android") && 0 <= window.navigator.userAgent.indexOf("Chrome/") && window.navigator.presentation ? HHa() : !window.chrome || !window.navigator.presentation || 0 <= window.navigator.userAgent.indexOf("Edge") ? r6() : (GHa(), q6(fJa.map(EHa))))) : K7("Cannot initialize because not running Chrome")
    },
    eJa = function() {
      K7("dispose");
      var a = O7();
      a && a.dispose();
      g.Fa("yt.mdx.remote.cloudview.instance_", null, void 0);
      hJa(!1);
      g.Po(P7);
      P7.length = 0
    },
    Q7 = function() {
      return !!g.uu("yt-remote-cast-installed")
    },
    iJa = function() {
      var a = g.uu("yt-remote-cast-receiver");
      return a ? a.friendlyName : null
    },
    jJa = function() {
      K7("clearCurrentReceiver");
      g.vu("yt-remote-cast-receiver")
    },
    kJa = function() {
      return Q7() ? O7() ? O7().getCastSession() : (M7("getCastSelector: Cast is not initialized."), null) : (M7("getCastSelector: Cast API is not installed!"), null)
    },
    S7 = function() {
      Q7() ? O7() ? R7() ? (K7("Requesting cast selector."), O7().requestSession()) : (K7("Wait for cast API to be ready to request the session."), P7.push(g.Oo("yt-remote-cast2-api-ready", S7))) : M7("requestCastSelector: Cast is not initialized.") : M7("requestCastSelector: Cast API is not installed!")
    },
    T7 =
    function(a, b) {
      R7() ? O7().setConnectedScreenStatus(a, b) : M7("setConnectedScreenStatus called before ready.")
    },
    bJa = function() {
      var a = 0 <= g.Tc.search(/ (CrMo|Chrome|CriOS)\//);
      return g.DB || a
    },
    lJa = function(a, b) {
      O7().init(a, b)
    },
    cJa = function(a, b) {
      var c = !1;
      O7() || (c = new G7(a, b), c.subscribe("yt-remote-cast2-availability-change", function(d) {
        g.tu("yt-remote-cast-available", d);
        b6("yt-remote-cast2-availability-change", d)
      }), c.subscribe("yt-remote-cast2-receiver-selected", function(d) {
        K7("onReceiverSelected: " + d.friendlyName);
        g.tu("yt-remote-cast-receiver", d);
        b6("yt-remote-cast2-receiver-selected", d)
      }), c.subscribe("yt-remote-cast2-receiver-resumed", function(d) {
        K7("onReceiverResumed: " + d.friendlyName);
        g.tu("yt-remote-cast-receiver", d);
        b6("yt-remote-cast2-receiver-resumed", d)
      }), c.subscribe("yt-remote-cast2-session-change", function(d) {
        K7("onSessionChange: " + f6(d));
        d || g.vu("yt-remote-cast-receiver");
        b6("yt-remote-cast2-session-change", d)
      }), g.Fa("yt.mdx.remote.cloudview.instance_", c, void 0), c = !0);
      K7("cloudview.createSingleton_: " + c);
      return c
    },
    O7 = function() {
      return g.Ja("yt.mdx.remote.cloudview.instance_")
    },
    dJa = function(a, b) {
      N7(!0);
      L7(!1);
      lJa(a, function(c) {
        c ? (hJa(!0), g.Qo("yt-remote-cast2-api-ready")) : (M7("Failed to initialize cast API."), N7(!1), g.vu("yt-remote-cast-available"), g.vu("yt-remote-cast-receiver"), eJa());
        b(c)
      })
    },
    K7 = function(a) {
      h7("cloudview", a)
    },
    M7 = function(a) {
      h7("cloudview", a)
    },
    N7 = function(a) {
      K7("setCastInstalled_ " + a);
      g.tu("yt-remote-cast-installed", a)
    },
    R7 = function() {
      return !!g.Ja("yt.mdx.remote.cloudview.apiReady_")
    },
    hJa = function(a) {
      K7("setApiReady_ " + a);
      g.Fa("yt.mdx.remote.cloudview.apiReady_", a, void 0)
    },
    L7 = function(a) {
      g.Fa("yt.mdx.remote.cloudview.initializing_", a, void 0)
    },
    U7 = function(a) {
      this.index = -1;
      this.videoId = this.listId = "";
      this.volume = this.playerState = -1;
      this.muted = !1;
      this.audioTrackId = null;
      this.K = this.P = 0;
      this.u = null;
      this.hasNext = this.Si = !1;
      this.S = this.J = this.B = this.F = 0;
      this.D = NaN;
      this.C = !1;
      this.reset(a)
    },
    V7 = function(a) {
      a.audioTrackId = null;
      a.u = null;
      a.playerState = -1;
      a.Si = !1;
      a.hasNext = !1;
      a.P = 0;
      a.K = g.A();
      a.F = 0;
      a.B = 0;
      a.J = 0;
      a.S = 0;
      a.D = NaN;
      a.C = !1
    },
    W7 = function(a) {
      return a.Fb() ? (g.A() - a.K) / 1E3 : 0
    },
    X7 = function(a, b) {
      a.P = b;
      a.K = g.A()
    },
    Y7 = function(a) {
      switch (a.playerState) {
        case 1:
        case 1081:
          return (g.A() - a.K) / 1E3 + a.P;
        case -1E3:
          return 0
      }
      return a.P
    },
    Z7 = function(a, b, c) {
      var d = a.videoId;
      a.videoId = b;
      a.index = c;
      b != d && V7(a)
    },
    $7 = function(a) {
      var b = {};
      b.index = a.index;
      b.listId = a.listId;
      b.videoId = a.videoId;
      b.playerState = a.playerState;
      b.volume = a.volume;
      b.muted = a.muted;
      b.audioTrackId = a.audioTrackId;
      b.trackData = g.Vb(a.u);
      b.hasPrevious = a.Si;
      b.hasNext = a.hasNext;
      b.playerTime = a.P;
      b.playerTimeAt = a.K;
      b.seekableStart = a.F;
      b.seekableEnd = a.B;
      b.duration = a.J;
      b.loadedTime = a.S;
      b.liveIngestionTime = a.D;
      return b
    },
    b8 = function(a, b) {
      g.O.call(this);
      this.Ja = 0;
      this.C = a;
      this.F = [];
      this.D = new tIa;
      this.B = this.u = null;
      this.P = (0, g.z)(this.LO, this);
      this.J = (0, g.z)(this.ur, this);
      this.K = (0, g.z)(this.KO, this);
      this.S = (0, g.z)(this.SO, this);
      var c = 0;
      a ? (c = a.getProxyState(), 3 != c && (a.subscribe("proxyStateChange", this.zA, this), mJa(this))) : c = 3;
      0 != c && (b ? this.zA(c) : g.Ho((0, g.z)(function() {
        this.zA(c)
      }, this), 0));
      var d = kJa();
      d && a8(this, d);
      this.subscribe("yt-remote-cast2-session-change", this.S)
    },
    c8 = function(a) {
      return new U7(a.C.getPlayerContextData())
    },
    mJa = function(a) {
      g.Cb("nowAutoplaying autoplayDismissed remotePlayerChange remoteQueueChange autoplayModeChange autoplayUpNext previousNextChange".split(" "), function(b) {
        this.F.push(this.C.subscribe(b, g.Ta(this.kQ, b), this))
      }, a)
    },
    nJa = function(a) {
      g.Cb(a.F, function(b) {
        this.C.unsubscribeByKey(b)
      }, a);
      a.F.length = 0
    },
    d8 = function(a) {
      return 1 == a.getState()
    },
    e8 = function(a, b) {
      var c = a.D;
      50 > c.u.length + c.B.length && a.D.B.push(b)
    },
    g8 = function(a, b, c) {
      var d = c8(a);
      X7(d, c); - 1E3 != d.playerState && (d.playerState = b);
      f8(a, d)
    },
    h8 = function(a, b, c) {
      a.C.sendMessage(b, c)
    },
    f8 = function(a, b) {
      nJa(a);
      a.C.setPlayerContextData($7(b));
      mJa(a)
    },
    a8 = function(a, b) {
      a.B && (a.B.removeUpdateListener(a.P), a.B.removeMediaListener(a.J), a.ur(null));
      a.B = b;
      a.B && (h7("CP", "Setting cast session: " + a.B.sessionId), a.B.addUpdateListener(a.P), a.B.addMediaListener(a.J), a.B.media.length && a.ur(a.B.media[0]))
    },
    oJa = function(a) {
      var b = a.u.media,
        c = a.u.customData;
      if (b && c) {
        var d = c8(a);
        b.contentId != d.videoId && h7("CP", "Cast changing video to: " + b.contentId);
        d.videoId = b.contentId;
        d.playerState = c.playerState;
        X7(d, a.u.getEstimatedTime());
        f8(a, d)
      } else h7("CP", "No cast media video. Ignoring state update.")
    },
    i8 = function(a, b, c) {
      return (0, g.z)(function(d) {
        this.yd("Failed to " + b + " with cast v2 channel. Error code: " + d.code);
        d.code != chrome.cast.ErrorCode.TIMEOUT && (this.yd("Retrying " + b + " using MDx browser channel."), h8(this, b, c))
      }, a)
    },
    j8 = function(a, b, c) {
      g.O.call(this);
      this.F = NaN;
      this.Y = !1;
      this.P = this.K = this.S = this.X = NaN;
      this.da = [];
      this.D = this.J = this.C = this.Jb = this.u = null;
      this.la = a;
      this.da.push(g.dp(window, "beforeunload", (0, g.z)(this.MK, this)));
      this.B = [];
      this.Jb = new U7;
      this.ga = b.id;
      this.fa = b.idType;
      this.u = pJa(this, c);
      this.u.subscribe("handlerOpened", this.PO, this);
      this.u.subscribe("handlerClosed", this.MO, this);
      this.u.subscribe("handlerError", this.NO, this);
      this.u.subscribe("handlerMessage", this.OO, this);
      this.u.ew(b.token);
      this.subscribe("remoteQueueChange", function() {
        var d =
          this.Jb.videoId;
        g.wu() && g.tu("yt-remote-session-video-id", d)
      }, this)
    },
    k8 = function(a) {
      h7("conn", a)
    },
    pJa = function(a, b) {
      return new a7(e7(a.la, "/bc"), b, !1, function() {
        return a.OI()
      }, "shortLived" == a.fa)
    },
    l8 = function(a, b) {
      a.V("proxyStateChange", b)
    },
    qJa = function(a) {
      a.F = g.Ho((0, g.z)(function() {
        k8("Connecting timeout");
        this.Qn(1)
      }, a), 2E4)
    },
    m8 = function(a) {
      g.Jo(a.F);
      a.F = NaN
    },
    n8 = function(a) {
      g.Jo(a.X);
      a.X = NaN
    },
    rJa = function(a) {
      o8(a);
      a.S = g.Ho((0, g.z)(function() {
        p8(this, "getNowPlaying")
      }, a), 2E4)
    },
    o8 = function(a) {
      g.Jo(a.S);
      a.S = NaN
    },
    tJa = function(a, b) {
      b && (m8(a), n8(a));
      var c = c7(a.u) && isNaN(a.F);
      b == c ? b && (l8(a, 1), p8(a, "getSubtitlesTrack")) : b ? (a.rD() && a.Jb.reset(), l8(a, 1), p8(a, "getNowPlaying"), sJa(a)) : a.Qn(1)
    },
    uJa = function(a, b) {
      var c = b.params.videoId;
      delete b.params.videoId;
      c == a.Jb.videoId && (g.Rb(b.params) ? a.Jb.u = null : a.Jb.u = b.params, a.V("remotePlayerChange"))
    },
    vJa = function(a, b) {
      var c = b.params.videoId || b.params.video_id,
        d = parseInt(b.params.currentIndex, 10);
      a.Jb.listId = b.params.listId || a.Jb.listId;
      Z7(a.Jb, c, d);
      a.V("remoteQueueChange")
    },
    xJa = function(a, b) {
      b.params = b.params || {};
      vJa(a, b);
      wJa(a, b);
      a.V("autoplayDismissed")
    },
    wJa = function(a, b) {
      var c = parseInt(b.params.currentTime || b.params.current_time, 10);
      X7(a.Jb, isNaN(c) ? 0 : c);
      c = parseInt(b.params.state, 10);
      c = isNaN(c) ? -1 : c; - 1 == c && -1E3 == a.Jb.playerState && (c = -1E3);
      a.Jb.playerState = c;
      c = Number(b.params.loadedTime);
      a.Jb.S = isNaN(c) ? 0 : c;
      a.Jb.ji(Number(b.params.duration));
      c = a.Jb;
      var d = Number(b.params.liveIngestionTime);
      c.D = d;
      c.C = isNaN(d) ? !1 : !0;
      c = a.Jb;
      d = Number(b.params.seekableStartTime);
      var e = Number(b.params.seekableEndTime);
      c.F = isNaN(d) ? 0 : d;
      c.B = isNaN(e) ? 0 : e;
      1 == a.Jb.playerState ? rJa(a) : o8(a);
      a.V("remotePlayerChange")
    },
    yJa = function(a, b) {
      if (-1E3 != a.Jb.playerState) {
        var c =
          1085;
        switch (parseInt(b.params.adState, 10)) {
          case 1:
            c = 1081;
            break;
          case 2:
            c = 1084;
            break;
          case 0:
            c = 1083
        }
        a.Jb.playerState = c;
        c = parseInt(b.params.currentTime, 10);
        X7(a.Jb, isNaN(c) ? 0 : c);
        a.V("remotePlayerChange")
      }
    },
    zJa = function(a, b) {
      var c = "true" == b.params.muted;
      a.Jb.volume = parseInt(b.params.volume, 10);
      a.Jb.muted = c;
      a.V("remotePlayerChange")
    },
    AJa = function(a, b) {
      a.J = b.params.videoId;
      a.V("nowAutoplaying", parseInt(b.params.timeout, 10))
    },
    BJa = function(a, b) {
      var c = "true" == b.params.hasNext;
      a.Jb.Si = "true" == b.params.hasPrevious;
      a.Jb.hasNext = c;
      a.V("previousNextChange")
    },
    sJa = function(a) {
      g.Jo(a.P);
      a.P = g.Ho((0, g.z)(a.Qn, a, 1), 864E5)
    },
    p8 = function(a, b, c) {
      c ? k8("Sending: action=" + b + ", params=" + g.Kj(c)) : k8("Sending: action=" + b);
      a.u.sendMessage(b, c)
    },
    q8 = function(a) {
      l7.call(this, "ScreenServiceProxy");
      this.rf = a;
      this.u = [];
      this.u.push(this.rf.$_s("screenChange", (0, g.z)(this.NL, this)));
      this.u.push(this.rf.$_s("onlineScreenChange", (0, g.z)(this.QP, this)))
    },
    FJa = function(a, b) {
      zHa();
      if (!p6 || !p6.get("yt-remote-disable-remote-module-for-dev")) {
        b = g.L("MDX_CONFIG") || b;
        rHa();
        n6();
        r8 || (r8 = new d7(b ? b.loungeApiHost : void 0), AHa() && (r8.u = "/api/loungedev"));
        s8 || (s8 = g.Ja("yt.mdx.remote.deferredProxies_") || [], g.Fa("yt.mdx.remote.deferredProxies_", s8, void 0));
        CJa();
        var c = t8();
        if (!c) {
          var d = new v7(r8);
          g.Fa("yt.mdx.remote.screenService_", d, void 0);
          c = t8();
          var e = {};
          b && (e = {
            appId: b.appId,
            disableDial: b.disableDial,
            theme: b.theme,
            loadCastApiSetupScript: b.loadCastApiSetupScript,
            disableCastApi: b.disableCastApi,
            enableDialLoungeToken: b.enableDialLoungeToken,
            enableCastLoungeToken: b.enableCastLoungeToken
          });
          gJa(a, d, function(h) {
            h ? u8() && T7(u8(), "YouTube TV") : d.subscribe("onlineScreenChange", function() {
              b6("yt-remote-receiver-availability-change")
            })
          }, e)
        }
        if (b && !g.Ja("yt.mdx.remote.initialized_")) {
          g.Fa("yt.mdx.remote.initialized_", !0, void 0);
          v8("Initializing: " + g.Kj(b));
          w8.push(g.Oo("yt-remote-cast2-availability-change", function() {
            b6("yt-remote-receiver-availability-change")
          }));
          w8.push(g.Oo("yt-remote-cast2-receiver-selected", function() {
            x8(null);
            b6("yt-remote-auto-connect", "cast-selector-receiver")
          }));
          w8.push(g.Oo("yt-remote-cast2-receiver-resumed", function() {
            b6("yt-remote-receiver-resumed", "cast-selector-receiver")
          }));
          w8.push(g.Oo("yt-remote-cast2-session-change", DJa));
          w8.push(g.Oo("yt-remote-connection-change", function(h) {
            h ? T7(u8(), "YouTube TV") : y8() || (T7(null, null), jJa())
          }));
          e = z8();
          b.isAuto && (e.id += "#dial");
          g.wo("desktop_enable_autoplay") && (e.capabilities = ["atp"]);
          e.name = b.device;
          e.app = b.app;
          var f = b.theme;
          f && (e.theme = f);
          v8(" -- with channel params: " + g.Kj(e));
          e ? (g.tu("yt-remote-session-app", e.app), g.tu("yt-remote-session-name", e.name)) : (g.vu("yt-remote-session-app"), g.vu("yt-remote-session-name"));
          g.Fa("yt.mdx.remote.channelParams_", e, void 0);
          c.start();
          u8() || EJa()
        }
      }
    },
    GJa = function() {
      var a = t8().rf.$_gos();
      var b = A8();
      b && B8() && (i6(a, b) || a.push(b));
      return qHa(a)
    },
    C8 = function() {
      var a = HJa();
      !a && Q7() && iJa() && (a = {
        key: "cast-selector-receiver",
        name: iJa()
      });
      return a
    },
    HJa = function() {
      var a = GJa(),
        b = A8();
      b || (b = y8());
      return g.fb(a, function(c) {
        return b && e6(b, c.key) ? !0 : !1
      })
    },
    A8 = function() {
      var a = u8();
      if (!a) return null;
      var b = t8().ug();
      return j6(b, a)
    },
    DJa = function(a) {
      v8("remote.onCastSessionChange_: " + f6(a));
      if (a) {
        var b = A8();
        if (b && b.id == a.id) {
          if (T7(b.id, "YouTube TV"), "shortLived" == a.idType && (a = a.token)) D8 && (D8.token = a), (b = B8()) && b.ew(a)
        } else b && E8(), F8(a, 1)
      } else B8() && E8()
    },
    E8 = function() {
      R7() ? O7().stopSession() : M7("stopSession called before API ready.");
      var a = B8();
      a && (a.disconnect(1), G8(null))
    },
    H8 = function() {
      var a = B8();
      return !!a && 3 != a.getProxyState()
    },
    v8 = function(a) {
      h7("remote", a)
    },
    t8 = function() {
      if (!I8) {
        var a = g.Ja("yt.mdx.remote.screenService_");
        I8 = a ? new q8(a) : null
      }
      return I8
    },
    u8 = function() {
      return g.Ja("yt.mdx.remote.currentScreenId_")
    },
    IJa = function(a) {
      g.Fa("yt.mdx.remote.currentScreenId_", a, void 0)
    },
    JJa = function() {
      return g.Ja("yt.mdx.remote.connectData_")
    },
    x8 = function(a) {
      g.Fa("yt.mdx.remote.connectData_", a, void 0)
    },
    B8 = function() {
      return g.Ja("yt.mdx.remote.connection_")
    },
    G8 = function(a) {
      var b = B8();
      x8(null);
      a || IJa("");
      g.Fa("yt.mdx.remote.connection_", a, void 0);
      s8 && (g.Cb(s8, function(c) {
        c(a)
      }), s8.length = 0);
      b && !a ? b6("yt-remote-connection-change", !1) : !b && a && b6("yt-remote-connection-change", !0)
    },
    y8 = function() {
      var a = g.wu();
      if (!a) return null;
      var b = t8();
      if (!b) return null;
      b = b.ug();
      return j6(b, a)
    },
    F8 = function(a, b) {
      u8();
      A8() && A8();
      if (J8) D8 = a;
      else {
        IJa(a.id);
        var c = new j8(r8, a, z8());
        c.connect(b, JJa());
        c.subscribe("beforeDisconnect", function(d) {
          b6("yt-remote-before-disconnect", d)
        });
        c.subscribe("beforeDispose", function() {
          B8() && (B8(), G8(null))
        });
        c.subscribe("browserChannelAuthError", function() {
          var d = A8();
          d && "shortLived" == d.idType && (R7() ? O7().handleBrowserChannelAuthError() : M7("refreshLoungeToken called before API ready."))
        });
        G8(c)
      }
    },
    EJa = function() {
      var a = y8();
      a ? (v8("Resume connection to: " + f6(a)), F8(a, 0)) : (o6(), jJa(), v8("Skipping connecting because no session screen found."))
    },
    CJa = function() {
      var a = z8();
      if (g.Rb(a)) {
        a = m6();
        var b = g.uu("yt-remote-session-name") || "",
          c = g.uu("yt-remote-session-app") || "";
        a = {
          device: "REMOTE_CONTROL",
          id: a,
          name: b,
          app: c,
          mdxVersion: 3
        };
        g.Fa("yt.mdx.remote.channelParams_", a, void 0)
      }
    },
    z8 = function() {
      return g.Ja("yt.mdx.remote.channelParams_") || {}
    },
    K8 = function(a, b, c) {
      g.B.call(this);
      var d = this;
      this.B = a;
      this.I = b;
      this.xb = c;
      this.events = new g.dR(this);
      this.X = this.events.N(this.I, "onVolumeChange", function(e) {
        KJa(d, e)
      });
      this.F = !1;
      this.suggestion = null;
      this.J = new g.NL(64);
      this.u = new g.F(this.SH, 500, this);
      this.C = new g.F(this.TH, 1E3, this);
      this.P = new s6(this.GS, 0, this);
      this.D = {};
      this.S = new g.F(this.yI, 1E3, this);
      this.K = new t6(this.seekTo, 1E3, this);
      this.Y = g.Ka;
      g.C(this, this.events);
      this.events.N(b, "onCaptionsTrackListChanged", this.xP);
      this.events.N(b, "captionschanged", this.IO);
      this.events.N(b, "captionssettingschanged", this.YH);
      this.events.N(b, "videoplayerreset", this.Ev);
      this.events.N(b, "mdxautoplaycancel", function() {
        d.xb.LC()
      });
      a = this.xb;
      a.ma();
      a.subscribe("proxyStateChange", this.oG, this);
      a.subscribe("remotePlayerChange", this.Ar, this);
      a.subscribe("remoteQueueChange", this.Ev, this);
      a.subscribe("previousNextChange", this.lG, this);
      a.subscribe("nowAutoplaying", this.gG, this);
      a.subscribe("autoplayDismissed", this.GF, this);
      g.C(this, this.u);
      g.C(this, this.C);
      g.C(this, this.P);
      g.C(this, this.S);
      g.C(this, this.K);
      this.YH();
      this.Ev();
      this.Ar()
    },
    KJa = function(a, b) {
      if (L8(a)) {
        a.xb.unsubscribe("remotePlayerChange", a.Ar, a);
        var c = Math.round(b.volume),
          d = !!b.muted,
          e = c8(a.xb);
        if (c !== e.volume || d !== e.muted) a.xb.setVolume(c, d), a.S.start();
        a.xb.subscribe("remotePlayerChange", a.Ar, a)
      }
    },
    LJa = function(a) {
      a.Ob(0);
      a.u.stop();
      a.tb(new g.NL(64))
    },
    M8 = function(a, b) {
      if (L8(a) && !a.F) {
        var c = null;
        b && (c = {
          style: a.I.getSubtitlesUserSettings()
        }, g.Xb(c, b));
        a.xb.QI(a.I.getVideoData(1).videoId, c);
        a.D = c8(a.xb).u
      }
    },
    N8 = function(a, b) {
      var c = a.I.getPlaylist();
      if (c) {
        var d = c.index;
        var e = c.listId.toString()
      }
      c = a.I.getVideoData(1);
      a.xb.playVideo(c.videoId, b, d, e, c.playerParams, c.Wg, dHa(c));
      a.tb(new g.NL(1))
    },
    MJa = function(a, b) {
      if (b) {
        var c = a.I.getOption("captions", "tracklist", {
          RD: 1
        });
        c && c.length ? (a.I.setOption("captions", "track", b), a.F = !1) : (a.I.loadModule("captions"), a.F = !0)
      } else a.I.setOption("captions", "track", {})
    },
    L8 = function(a) {
      return c8(a.xb).videoId === a.I.getVideoData(1).videoId
    },
    O8 = function() {
      g.U.call(this, {
        G: "div",
        L: "ytp-mdx-manual-pairing-popup-dialog",
        U: {
          role: "dialog"
        },
        R: [{
          G: "div",
          L: "ytp-mdx-manual-pairing-popup-dialog-inner-content",
          R: [{
            G: "div",
            L: "ytp-mdx-manual-pairing-popup-title",
            Z: "Nous allons bient\u00f4t supprimer la possibilit\u00e9 de se connecter \u00e0 un t\u00e9l\u00e9viseur via Internet \u00e0 l'aide d'un code"
          }, {
            G: "div",
            L: "ytp-mdx-manual-pairing-popup-buttons",
            R: [{
              G: "button",
              ka: ["ytp-button", "ytp-mdx-manual-pairing-popup-learn-more"],
              Z: "En savoir plus"
            }, {
              G: "button",
              ka: ["ytp-button", "ytp-mdx-manual-pairing-popup-ok"],
              Z: "OK"
            }]
          }]
        }]
      });
      this.u = new g.ZN(this, 250);
      this.learnMoreButton = this.ia("ytp-mdx-manual-pairing-popup-learn-more");
      this.okButton = this.ia("ytp-mdx-manual-pairing-popup-ok");
      g.C(this, this.u);
      this.N(this.learnMoreButton, "click", this.B);
      this.N(this.okButton, "click", this.C)
    },
    P8 = function() {
      g.U.call(this, {
        G: "div",
        L: "ytp-mdx-popup-dialog",
        U: {
          role: "dialog"
        },
        R: [{
          G: "div",
          L: "ytp-mdx-popup-dialog-inner-content",
          R: [{
              G: "div",
              L: "ytp-mdx-popup-title",
              Z: "Vous \u00eates d\u00e9connect\u00e9"
            }, {
              G: "div",
              L: "ytp-mdx-popup-description",
              Z: "Les vid\u00e9os que vous visionnez peuvent \u00eatre ajout\u00e9es \u00e0 l'historique des vid\u00e9os regard\u00e9es sur votre t\u00e9l\u00e9viseur et avoir une influence sur les recommandations qui vous sont faites. Pour \u00e9viter ce probl\u00e8me, annulez et connectez-vous \u00e0 YouTube sur un ordinateur."
            },
            {
              G: "div",
              L: "ytp-mdx-privacy-popup-buttons",
              R: [{
                G: "button",
                ka: ["ytp-button", "ytp-mdx-privacy-popup-cancel"],
                Z: "Annuler"
              }, {
                G: "button",
                ka: ["ytp-button", "ytp-mdx-privacy-popup-confirm"],
                Z: "Confirmer"
              }]
            }
          ]
        }]
      });
      this.u = new g.ZN(this, 250);
      this.cancelButton = this.ia("ytp-mdx-privacy-popup-cancel");
      this.confirmButton = this.ia("ytp-mdx-privacy-popup-confirm");
      g.C(this, this.u);
      this.N(this.cancelButton, "click", this.B);
      this.N(this.confirmButton, "click", this.C)
    },
    Q8 = function(a) {
      g.U.call(this, {
        G: "div",
        L: "ytp-remote",
        R: [{
          G: "div",
          L: "ytp-remote-display-status",
          R: [{
            G: "div",
            L: "ytp-remote-display-status-icon",
            R: [g.Yma()]
          }, {
            G: "div",
            L: "ytp-remote-display-status-text",
            Z: "{{statustext}}"
          }]
        }]
      });
      this.api = a;
      this.u = new g.ZN(this, 250);
      g.C(this, this.u);
      this.N(a, "presentingplayerstatechange", this.B);
      NJa(this, g.NJ(a))
    },
    NJa = function(a, b) {
      if (3 === a.api.getPresentingPlayerType()) {
        var c = {
          RECEIVER_NAME: a.api.getOption("remote", "currentReceiver").name
        };
        c = g.T(b, 128) ? g.HK("Erreur sur $RECEIVER_NAME", c) : b.Fb() || g.T(b, 4) ? g.HK("Lecture sur $RECEIVER_NAME", c) : g.HK("Connect\u00e9 \u00e0 $RECEIVER_NAME", c);
        a.za("statustext", c);
        a.u.show()
      } else a.u.hide()
    },
    R8 = function(a, b) {
      g.AW.call(this, "Lire sur", 0, a, b);
      this.I = a;
      this.Gl = {};
      this.N(a, "onMdxReceiversChange", this.D);
      this.N(a, "presentingplayerstatechange", this.D);
      this.D()
    },
    S8 = function(a) {
      g.tS.call(this, a);
      this.Sh = {
        key: h6(),
        name: "Cet ordinateur"
      };
      this.Mg = null;
      this.subscriptions = [];
      this.Yz = this.xb = null;
      this.Gl = [this.Sh];
      this.Ik = this.Sh;
      this.Kc = new g.NL(64);
      this.pE = 0;
      this.Ee = -1;
      this.qo = null;
      this.Dr = this.Ju = !1;
      this.Wm = this.Uo = null;
      if (!g.MD(this.player.T())) {
        a = this.player;
        var b = g.lT(a);
        b && (b = b.Rk()) && (b = new R8(a, b), g.C(this, b));
        b = new Q8(a);
        g.C(this, b);
        g.lP(a, b.element, 4);
        this.Uo = new P8;
        g.C(this, this.Uo);
        g.lP(a, this.Uo.element, 4);
        g.Q(this.player.T().experiments, "pair_servlet_deprecation_warning_enabled") &&
          !g.Q(this.player.T().experiments, "deprecate_pair_servlet_enabled") && (this.qo = new O8, g.C(this, this.qo), g.lP(a, this.qo.element, 4));
        this.Dr = !!y8();
        this.Ju = !!g.uu("yt-remote-manual-pairing-warning-shown")
      }
    },
    T8 = function(a) {
      a.Wm && (a.player.removeEventListener("presentingplayerstatechange", a.Wm), a.Wm = null)
    },
    OJa = function(a, b, c) {
      a.Kc = c;
      a.player.V("presentingplayerstatechange", new g.XJ(c, b))
    },
    PJa = function(a, b, c) {
      var d = !1;
      1 === b ? d = !a.Dr : 2 === b && (d = !a.Ju);
      d && g.ZJ(c, 8) && (a.player.pauseVideo(), T8(a))
    },
    U8 = function(a, b) {
      if (b.key !== a.Ik.key)
        if (b.key === a.Sh.key) E8();
        else {
          if (a.qo && !a.Ju && b !== a.Sh && "cast-selector-receiver" !== b.key && g.WD(a.player.T())) QJa(a);
          else {
            var c;
            (c = !g.Q(a.player.T().experiments, "mdx_enable_privacy_disclosure_ui")) || (c = ((c = g.L("PLAYER_CONFIG")) && c.args && void 0 !== c.args.authuser ? !0 : !(!g.L("SESSION_INDEX") && !g.L("LOGGED_IN"))) || a.Dr || !a.Uo);
            (c ? 0 : g.WD(a.player.T()) || g.$D(a.player.T())) && RJa(a)
          }
          a.Ik = b;
          var d = a.player.getPlaylistId();
          c = a.player.getVideoData(1);
          var e = c.videoId;
          if (!d && !e || (2 === a.player.getAppState() || 1 === a.player.getAppState()) &&
            g.Q(a.player.T().experiments, "should_clear_video_data_on_player_cued_unstarted")) c = null;
          else {
            var f = a.player.getPlaylist();
            if (f) {
              var h = [];
              for (var l = 0; l < f.getLength(); l++) h[l] = f.Na(l).videoId
            } else h = [e];
            f = a.player.getCurrentTime(1);
            d = {
              videoIds: h,
              listId: d,
              videoId: e,
              playerParams: c.playerParams,
              clickTrackingParams: c.Wg,
              index: Math.max(a.player.getPlaylistIndex(), 0),
              currentTime: 0 === f ? void 0 : f
            };
            (c = dHa(c)) && (d.locationInfo = c);
            c = d
          }
          v8("Connecting to: " + g.Kj(b));
          "cast-selector-receiver" == b.key ? (x8(c || null), c =
            c || null, R7() ? O7().setLaunchParams(c) : M7("setLaunchParams called before ready.")) : !c && H8() && u8() == b.key ? b6("yt-remote-connection-change", !0) : (E8(), x8(c || null), c = t8().ug(), (c = j6(c, b.key)) && F8(c, 1))
        }
    },
    RJa = function(a) {
      g.NJ(a.player).Fb() ? a.player.pauseVideo() : (a.Wm = function(b) {
        PJa(a, 1, b)
      }, a.player.addEventListener("presentingplayerstatechange", a.Wm));
      a.Uo && a.Uo.zc();
      B8() || (J8 = !0)
    },
    QJa = function(a) {
      g.NJ(a.player).Fb() ? a.player.pauseVideo() : (a.Wm = function(b) {
        PJa(a, 2, b)
      }, a.player.addEventListener("presentingplayerstatechange", a.Wm));
      a.qo && a.qo.zc();
      B8() || (J8 = !0)
    },
    RHa = {
      "\x00": "\\0",
      "\b": "\\b",
      "\f": "\\f",
      "\n": "\\n",
      "\r": "\\r",
      "\t": "\\t",
      "\x0B": "\\x0B",
      '"': '\\"',
      "\\": "\\\\",
      "<": "\\u003C"
    },
    I6 = {
      "'": "\\'"
    },
    SJa = {},
    mHa = {
      OT: "atp",
      S2: "ska",
      R1: "que",
      X_: "mus",
      R2: "sus",
      tX: "dsp",
      l2: "seq",
      C_: "mic",
      sW: "dpa"
    },
    p6, l6 = "",
    FHa = BHa("loadCastFramework") || BHa("loadCastApplicationFramework"),
    fJa = ["pkedcjkdefgpdelpbcmbmeomcjbeemfm", "enhhojjnijigcajfphajepfemndkmdlo"];
  /*

   Copyright The Closure Library Authors.
   SPDX-License-Identifier: Apache-2.0
  */
  g.Va(s6, g.B);
  g.k = s6.prototype;
  g.k.JK = function(a) {
    this.D = arguments;
    this.u = !1;
    this.gb ? this.C = g.A() + this.sf : this.gb = g.Km(this.F, this.sf)
  };
  g.k.stop = function() {
    this.gb && (g.v.clearTimeout(this.gb), this.gb = null);
    this.C = null;
    this.u = !1;
    this.D = []
  };
  g.k.pause = function() {
    ++this.B
  };
  g.k.resume = function() {
    this.B && (--this.B, !this.B && this.u && (this.u = !1, this.J.apply(null, this.D)))
  };
  g.k.ca = function() {
    this.stop();
    s6.Gd.ca.call(this)
  };
  g.k.KK = function() {
    this.C ? (this.gb = g.Km(this.F, this.C - g.A()), this.C = null) : (this.gb = null, this.B ? this.u = !0 : (this.u = !1, this.J.apply(null, this.D)))
  };
  g.u(t6, g.B);
  g.k = t6.prototype;
  g.k.DE = function(a) {
    this.C = arguments;
    this.gb || this.B ? this.u = !0 : u6(this)
  };
  g.k.stop = function() {
    this.gb && (g.v.clearTimeout(this.gb), this.gb = null, this.u = !1, this.C = null)
  };
  g.k.pause = function() {
    this.B++
  };
  g.k.resume = function() {
    this.B--;
    this.B || !this.u || this.gb || (this.u = !1, u6(this))
  };
  g.k.ca = function() {
    g.B.prototype.ca.call(this);
    this.stop()
  };
  w6.prototype.stringify = function(a) {
    return g.v.JSON.stringify(a, void 0)
  };
  w6.prototype.parse = function(a) {
    return g.v.JSON.parse(a, void 0)
  };
  var y6 = new g.$l;
  g.u(IHa, g.Dl);
  A6.prototype.u = null;
  A6.prototype.getOptions = function() {
    var a;
    (a = this.u) || (a = {}, KHa(this) && (a[0] = !0, a[1] = !0), a = this.u = a);
    return a
  };
  var V8;
  g.Va(JHa, A6);
  V8 = new JHa;
  g.k = B6.prototype;
  g.k.Am = null;
  g.k.mi = !1;
  g.k.zp = null;
  g.k.kB = null;
  g.k.fp = null;
  g.k.pp = null;
  g.k.Ck = null;
  g.k.Hl = null;
  g.k.Xm = null;
  g.k.re = null;
  g.k.Es = 0;
  g.k.ti = null;
  g.k.Fw = null;
  g.k.Uk = null;
  g.k.Eq = -1;
  g.k.GH = !0;
  g.k.hm = !1;
  g.k.Ay = 0;
  g.k.Tv = null;
  var PHa = {},
    E6 = {};
  g.k = B6.prototype;
  g.k.setTimeout = function(a) {
    this.F = a
  };
  g.k.MR = function(a) {
    a = a.target;
    var b = this.Tv;
    b && 3 == N6(a) ? b.DE() : this.LI(a)
  };
  g.k.LI = function(a) {
    try {
      if (a == this.re) a: {
        var b = N6(this.re),
          c = this.re.J,
          d = this.re.getStatus();
        if (g.ve && !g.Zd(10) || g.xe && !g.Yd("420+")) {
          if (4 > b) break a
        } else if (3 > b || 3 == b && !g.rg && !P6(this.re)) break a;this.hm || 4 != b || 7 == c || (8 == c || 0 >= d ? this.u.Zh(3) : this.u.Zh(2));J6(this);
        var e = this.re.getStatus();this.Eq = e;
        var f = P6(this.re);
        (this.mi = 200 == e) ? (4 == b && G6(this), this.J ? (QHa(this, b, f), g.rg && this.mi && 3 == b && (this.D.xa(this.C, "tick", this.HR), this.C.start())) : F6(this, f), this.mi && !this.hm && (4 == b ? this.u.eu(this) : (this.mi = !1, D6(this)))) : (400 == e && 0 < f.indexOf("Unknown SID") ? (this.Uk = 3, z6(13)) : (this.Uk = 0, z6(14)), G6(this), H6(this))
      }
    } catch (h) {
      this.re && P6(this.re)
    } finally {}
  };
  g.k.HR = function() {
    var a = N6(this.re),
      b = P6(this.re);
    this.Es < b.length && (J6(this), QHa(this, a, b), this.mi && 4 != a && D6(this))
  };
  g.k.gR = function(a) {
    x6((0, g.z)(this.fR, this, a), 0)
  };
  g.k.fR = function(a) {
    this.hm || (J6(this), F6(this, a), D6(this))
  };
  g.k.xG = function(a) {
    x6((0, g.z)(this.eR, this, a), 0)
  };
  g.k.eR = function(a) {
    this.hm || (G6(this), this.mi = a, this.u.eu(this), this.u.Zh(4))
  };
  g.k.cancel = function() {
    this.hm = !0;
    G6(this)
  };
  g.k.oR = function() {
    this.zp = null;
    var a = g.A();
    0 <= a - this.kB ? (2 != this.pp && this.u.Zh(3), G6(this), this.Uk = 2, z6(18), H6(this)) : THa(this, this.kB - a)
  };
  g.k.getLastError = function() {
    return this.Uk
  };
  g.Va(L6, g.$l);
  var $Ha = /^https?$/i,
    TJa = ["POST", "PUT"];
  g.k = L6.prototype;
  g.k.send = function(a, b, c, d) {
    if (this.u) throw Error("[goog.net.XhrIo] Object is active with another request=" + this.S + "; newUri=" + a);
    b = b ? b.toUpperCase() : "GET";
    this.S = a;
    this.D = "";
    this.J = 0;
    this.Ba = b;
    this.ra = !1;
    this.C = !0;
    this.u = this.fa ? LHa(this.fa) : LHa(V8);
    this.da = this.fa ? this.fa.getOptions() : V8.getOptions();
    this.u.onreadystatechange = (0, g.z)(this.mG, this);
    try {
      a6(O6(this, "Opening Xhr")), this.la = !0, this.u.open(b, String(a), !0), this.la = !1
    } catch (f) {
      a6(O6(this, "Error opening Xhr: " + f.message));
      ZHa(this, f);
      return
    }
    a =
      c || "";
    var e = this.headers.clone();
    d && iHa(d, function(f, h) {
      e.set(h, f)
    });
    d = g.fb(e.Ug(), XHa);
    c = g.v.FormData && a instanceof g.v.FormData;
    !g.jb(TJa, b) || d || c || e.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
    e.forEach(function(f, h) {
      this.u.setRequestHeader(h, f)
    }, this);
    this.Ma && (this.u.responseType = this.Ma);
    "withCredentials" in this.u && this.u.withCredentials !== this.ga && (this.u.withCredentials = this.ga);
    try {
      bIa(this), 0 < this.K && (this.Y = WHa(this.u), a6(O6(this, "Will abort after " + this.K + "ms if incomplete, xhr2 " + this.Y)), this.Y ? (this.u.timeout = this.K, this.u.ontimeout = (0, g.z)(this.AD, this)) : this.X = g.Km(this.AD, this.K, this)), a6(O6(this, "Sending request")), this.P = !0, this.u.send(a), this.P = !1
    } catch (f) {
      a6(O6(this, "Send error: " + f.message)), ZHa(this, f)
    }
  };
  g.k.AD = function() {
    "undefined" != typeof g.k1 && this.u && (this.D = "Timed out after " + this.K + "ms, aborting", this.J = 8, O6(this, this.D), this.dispatchEvent("timeout"), this.abort(8))
  };
  g.k.abort = function(a) {
    this.u && this.C && (O6(this, "Aborting"), this.C = !1, this.F = !0, this.u.abort(), this.F = !1, this.J = a || 7, this.dispatchEvent("complete"), this.dispatchEvent("abort"), M6(this))
  };
  g.k.ca = function() {
    this.u && (this.C && (this.C = !1, this.F = !0, this.u.abort(), this.F = !1), M6(this, !0));
    L6.Gd.ca.call(this)
  };
  g.k.mG = function() {
    this.ma() || (this.la || this.P || this.F ? aIa(this) : this.nQ())
  };
  g.k.nQ = function() {
    aIa(this)
  };
  g.k.isActive = function() {
    return !!this.u
  };
  g.k.isComplete = function() {
    return 4 == N6(this)
  };
  g.k.getStatus = function() {
    try {
      return 2 < N6(this) ? this.u.status : -1
    } catch (a) {
      return -1
    }
  };
  g.k.getLastError = function() {
    return "string" === typeof this.D ? this.D : String(this.D)
  };
  g.k = cIa.prototype;
  g.k.yy = null;
  g.k.jg = null;
  g.k.Uv = !1;
  g.k.zD = null;
  g.k.Gt = null;
  g.k.ez = null;
  g.k.zy = null;
  g.k.Ja = null;
  g.k.Nj = -1;
  g.k.Dq = null;
  g.k.Rp = null;
  g.k.connect = function(a) {
    this.zy = a;
    a = Q6(this.u, null, this.zy);
    z6(3);
    this.zD = g.A();
    var b = this.u.K;
    null != b ? (this.Dq = b[0], (this.Rp = b[1]) ? (this.Ja = 1, dIa(this)) : (this.Ja = 2, S6(this))) : (Z5(a, "MODE", "init"), this.jg = new B6(this, void 0, void 0, void 0), this.jg.Am = this.yy, C6(this.jg, a, !1, null, !0), this.Ja = 0)
  };
  g.k.MJ = function(a) {
    if (a) this.Ja = 2, S6(this);
    else {
      z6(4);
      var b = this.u;
      b.Qi = b.Hk.Nj;
      Z6(b, 9)
    }
    a && this.Zh(2)
  };
  g.k.Jx = function(a) {
    return this.u.Jx(a)
  };
  g.k.abort = function() {
    this.jg && (this.jg.cancel(), this.jg = null);
    this.Nj = -1
  };
  g.k.yD = function() {
    return !1
  };
  g.k.pG = function(a, b) {
    this.Nj = a.Eq;
    if (0 == this.Ja)
      if (b) {
        try {
          var c = this.B.parse(b)
        } catch (d) {
          c = this.u;
          c.Qi = this.Nj;
          Z6(c, 2);
          return
        }
        this.Dq = c[0];
        this.Rp = c[1]
      } else c = this.u, c.Qi = this.Nj, Z6(c, 2);
    else if (2 == this.Ja)
      if (this.Uv) z6(7), this.ez = g.A();
      else if ("11111" == b) {
      if (z6(6), this.Uv = !0, this.Gt = g.A(), c = this.Gt - this.zD, !g.ve || g.Zd(10) || 500 > c) this.Nj = 200, this.jg.cancel(), z6(12), R6(this.u, this, !0)
    } else z6(8), this.Gt = this.ez = g.A(), this.Uv = !1
  };
  g.k.eu = function() {
    this.Nj = this.jg.Eq;
    if (this.jg.mi) 0 == this.Ja ? this.Rp ? (this.Ja = 1, dIa(this)) : (this.Ja = 2, S6(this)) : 2 == this.Ja && ((!g.ve || g.Zd(10) ? !this.Uv : 200 > this.ez - this.Gt) ? (z6(11), R6(this.u, this, !1)) : (z6(12), R6(this.u, this, !0)));
    else {
      0 == this.Ja ? z6(9) : 2 == this.Ja && z6(10);
      var a = this.u;
      this.jg.getLastError();
      a.Qi = this.Nj;
      Z6(a, 2)
    }
  };
  g.k.ds = function() {
    return this.u.ds()
  };
  g.k.isActive = function() {
    return this.u.isActive()
  };
  g.k.Zh = function(a) {
    this.u.Zh(a)
  };
  g.k = T6.prototype;
  g.k.Pi = null;
  g.k.lq = null;
  g.k.Uf = null;
  g.k.Qd = null;
  g.k.wy = null;
  g.k.It = null;
  g.k.eC = null;
  g.k.du = null;
  g.k.sr = 0;
  g.k.YN = 0;
  g.k.qf = null;
  g.k.Kk = null;
  g.k.yj = null;
  g.k.nm = null;
  g.k.Hk = null;
  g.k.Cw = null;
  g.k.no = -1;
  g.k.oE = -1;
  g.k.Qi = -1;
  g.k.Vn = 0;
  g.k.Kn = 0;
  g.k.im = 8;
  g.Va(fIa, g.Dl);
  g.Va(gIa, g.Dl);
  g.k = T6.prototype;
  g.k.connect = function(a, b, c, d, e) {
    z6(0);
    this.wy = b;
    this.lq = c || {};
    d && void 0 !== e && (this.lq.OSID = d, this.lq.OAID = e);
    this.F ? (x6((0, g.z)(this.wC, this, a), 100), kIa(this)) : this.wC(a)
  };
  g.k.wC = function(a) {
    this.Hk = new cIa(this);
    this.Hk.yy = this.Pi;
    this.Hk.B = this.D;
    this.Hk.connect(a)
  };
  g.k.yD = function() {
    return 0 == this.Ja
  };
  g.k.getState = function() {
    return this.Ja
  };
  g.k.wG = function(a) {
    this.Kk = null;
    oIa(this, a)
  };
  g.k.vG = function() {
    this.yj = null;
    this.Qd = new B6(this, this.B, "rpc", this.J);
    this.Qd.Am = this.Pi;
    this.Qd.Ay = 0;
    var a = this.eC.clone();
    X5(a, "RID", "rpc");
    X5(a, "SID", this.B);
    X5(a, "CI", this.Cw ? "0" : "1");
    X5(a, "AID", this.no);
    U6(this, a);
    if (!g.ve || g.Zd(10)) X5(a, "TYPE", "xmlhttp"), C6(this.Qd, a, !0, this.du, !1);
    else {
      X5(a, "TYPE", "html");
      var b = this.Qd,
        c = !!this.du;
      b.pp = 3;
      b.Ck = Y5(a.clone());
      SHa(b, c)
    }
  };
  g.k.pG = function(a, b) {
    if (0 != this.Ja && (this.Qd == a || this.Uf == a))
      if (this.Qi = a.Eq, this.Uf == a && 3 == this.Ja)
        if (7 < this.im) {
          try {
            var c = this.D.parse(b)
          } catch (f) {
            c = null
          }
          if (Array.isArray(c) && 3 == c.length)
            if (0 == c[0]) a: {
              if (!this.yj) {
                if (this.Qd)
                  if (this.Qd.fp + 3E3 < this.Uf.fp) W6(this), this.Qd.cancel(), this.Qd = null;
                  else break a;
                Y6(this);
                z6(19)
              }
            }
          else this.oE = c[1], 0 < this.oE - this.no && 37500 > c[2] && this.Cw && 0 == this.Kn && !this.nm && (this.nm = x6((0, g.z)(this.EO, this), 6E3));
          else Z6(this, 11)
        } else b != SJa.hW.u && Z6(this, 11);
    else if (this.Qd ==
      a && W6(this), !g.oc(b)) {
      c = this.D.parse(b);
      for (var d = 0; d < c.length; d++) {
        var e = c[d];
        this.no = e[0];
        e = e[1];
        2 == this.Ja ? "c" == e[0] ? (this.B = e[1], this.du = e[2], e = e[3], null != e ? this.im = e : this.im = 6, this.Ja = 3, this.qf && this.qf.sC(), this.eC = Q6(this, this.ds() ? this.du : null, this.wy), pIa(this)) : "stop" == e[0] && Z6(this, 7) : 3 == this.Ja && ("stop" == e[0] ? Z6(this, 7) : "noop" != e[0] && this.qf && this.qf.rC(e), this.Kn = 0)
      }
    }
  };
  g.k.EO = function() {
    null != this.nm && (this.nm = null, this.Qd.cancel(), this.Qd = null, Y6(this), z6(20))
  };
  g.k.eu = function(a) {
    if (this.Qd == a) {
      W6(this);
      this.Qd = null;
      var b = 2
    } else if (this.Uf == a) this.Uf = null, b = 1;
    else return;
    this.Qi = a.Eq;
    if (0 != this.Ja)
      if (a.mi) 1 == b ? (b = y6, b.dispatchEvent(new fIa(b, a.Xm ? a.Xm.length : 0, g.A() - a.fp, this.Vn)), V6(this), this.C.length = 0) : pIa(this);
      else {
        var c = a.getLastError(),
          d;
        if (!(d = 3 == c || 7 == c || 0 == c && 0 < this.Qi)) {
          if (d = 1 == b) this.Uf || this.Kk || 1 == this.Ja || 2 <= this.Vn ? d = !1 : (this.Kk = x6((0, g.z)(this.wG, this, a), qIa(this, this.Vn)), this.Vn++, d = !0);
          d = !(d || 2 == b && Y6(this))
        }
        if (d) switch (c) {
          case 1:
            Z6(this,
              5);
            break;
          case 4:
            Z6(this, 10);
            break;
          case 3:
            Z6(this, 6);
            break;
          case 7:
            Z6(this, 12);
            break;
          default:
            Z6(this, 2)
        }
      }
  };
  g.k.iK = function(a) {
    if (!g.jb(arguments, this.Ja)) throw Error("Unexpected channel state: " + this.Ja);
  };
  g.k.sS = function(a) {
    a ? z6(2) : (z6(1), rIa(this, 8))
  };
  g.k.Jx = function(a) {
    if (a) throw Error("Can't create secondary domain capable XhrIo object.");
    a = new L6;
    a.ga = !1;
    return a
  };
  g.k.isActive = function() {
    return !!this.qf && this.qf.isActive(this)
  };
  g.k.Zh = function(a) {
    var b = y6;
    b.dispatchEvent(new gIa(b, a))
  };
  g.k.ds = function() {
    return !(!g.ve || g.Zd(10))
  };
  g.k = sIa.prototype;
  g.k.sC = function() {};
  g.k.rC = function() {};
  g.k.qC = function() {};
  g.k.xx = function() {};
  g.k.aD = function() {
    return {}
  };
  g.k.isActive = function() {
    return !0
  };
  g.k = tIa.prototype;
  g.k.isEmpty = function() {
    return g.kb(this.u) && g.kb(this.B)
  };
  g.k.clear = function() {
    this.u = [];
    this.B = []
  };
  g.k.contains = function(a) {
    return g.jb(this.u, a) || g.jb(this.B, a)
  };
  g.k.remove = function(a) {
    var b = this.u;
    var c = (0, g.sBa)(b, a);
    0 <= c ? (g.nb(b, c), b = !0) : b = !1;
    return b || g.ob(this.B, a)
  };
  g.k.Bf = function() {
    for (var a = [], b = this.u.length - 1; 0 <= b; --b) a.push(this.u[b]);
    var c = this.B.length;
    for (b = 0; b < c; ++b) a.push(this.B[b]);
    return a
  };
  g.Va($6, g.B);
  g.k = $6.prototype;
  g.k.ZQ = function() {
    this.sf = Math.min(3E5, 2 * this.sf);
    this.C();
    this.B && this.start()
  };
  g.k.start = function() {
    var a = this.sf + 15E3 * Math.random();
    g.kn(this.u, a);
    this.B = g.A() + a
  };
  g.k.stop = function() {
    this.u.stop();
    this.B = 0
  };
  g.k.isActive = function() {
    return this.u.isActive()
  };
  g.k.reset = function() {
    this.u.stop();
    this.sf = 5E3
  };
  g.Va(a7, sIa);
  g.k = a7.prototype;
  g.k.subscribe = function(a, b, c) {
    return this.C.subscribe(a, b, c)
  };
  g.k.unsubscribe = function(a, b, c) {
    return this.C.unsubscribe(a, b, c)
  };
  g.k.nl = function(a) {
    return this.C.Bm(a)
  };
  g.k.V = function(a, b) {
    return this.C.V.apply(this.C, arguments)
  };
  g.k.dispose = function() {
    this.X || (this.X = !0, g.Zf(this.C), wIa(this), g.Zf(this.B), this.B = null, this.Y = function() {
      return ""
    })
  };
  g.k.ma = function() {
    return this.X
  };
  g.k.connect = function(a, b, c) {
    if (!this.u || 2 != this.u.getState()) {
      this.S = "";
      this.B.stop();
      this.F = a || null;
      this.D = b || 0;
      a = this.da + "/test";
      b = this.da + "/bind";
      var d = new T6(c ? c.firstTestResults : null, c ? c.secondTestResults : null, this.fa),
        e = this.u;
      e && (e.qf = null);
      d.qf = this;
      this.u = d;
      b7(this);
      if (this.u) {
        d = g.L("ID_TOKEN");
        var f = this.u.Pi || {};
        d ? f["x-youtube-identity-token"] = d : delete f["x-youtube-identity-token"];
        this.u.Pi = f
      }
      e ? (3 != e.getState() && 0 == mIa(e) || e.getState(), this.u.connect(a, b, this.J, e.B, e.no)) : c ? this.u.connect(a,
        b, this.J, c.sessionId, c.arrayId) : this.u.connect(a, b, this.J)
    }
  };
  g.k.sendMessage = function(a, b) {
    var c = {
      _sc: a
    };
    b && g.Xb(c, b);
    this.B.isActive() || 2 == (this.u ? this.u.getState() : 0) ? this.K.push(c) : c7(this) && (b7(this), lIa(this.u, c))
  };
  g.k.sC = function() {
    this.B.reset();
    this.F = null;
    this.D = 0;
    if (this.K.length) {
      var a = this.K;
      this.K = [];
      for (var b = 0, c = a.length; b < c; ++b) lIa(this.u, a[b])
    }
    this.V("handlerOpened")
  };
  g.k.qC = function(a) {
    var b = 2 == a && 401 == this.u.Qi;
    4 == a || b || this.B.start();
    this.V("handlerError", a, b)
  };
  g.k.xx = function(a) {
    if (!this.B.isActive()) this.V("handlerClosed");
    else if (a)
      for (var b = 0, c = a.length; b < c; ++b) {
        var d = a[b].map;
        d && this.K.push(d)
      }
  };
  g.k.aD = function() {
    var a = {
      v: 2
    };
    this.S && (a.gsessionid = this.S);
    0 != this.D && (a.ui = "" + this.D);
    0 != this.P && (a.ui = "" + this.P);
    this.F && g.Xb(a, this.F);
    return a
  };
  g.k.rC = function(a) {
    "S" == a[0] ? this.S = a[1] : "gracefulReconnect" == a[0] ? (this.B.start(), jIa(this.u)) : this.V("handlerMessage", new uIa(a[0], a[1]))
  };
  g.k.ew = function(a) {
    (this.J.loungeIdToken = a) || this.B.stop();
    if (this.ra && this.u) {
      var b = this.u.Pi || {};
      a ? b["X-YouTube-LoungeId-Token"] = a : delete b["X-YouTube-LoungeId-Token"];
      this.u.Pi = b
    }
  };
  g.k.XR = function() {
    this.B.isActive();
    0 == mIa(this.u) && this.connect(this.F, this.D)
  };
  d7.prototype.D = function(a, b, c, d) {
    b ? a(d) : a({
      text: c.responseText
    })
  };
  d7.prototype.C = function(a, b) {
    a(Error("Request error: " + b.status))
  };
  d7.prototype.F = function(a) {
    a(Error("request timed out"))
  };
  var DIa = g.A(),
    g7 = null,
    j7 = Array(50),
    i7 = -1,
    k7 = !1;
  g.Va(l7, g.O);
  l7.prototype.ug = function() {
    return this.screens
  };
  l7.prototype.contains = function(a) {
    return !!i6(this.screens, a)
  };
  l7.prototype.get = function(a) {
    return a ? j6(this.screens, a) : null
  };
  l7.prototype.info = function(a) {
    h7(this.J, a)
  };
  g.u(m7, g.O);
  g.k = m7.prototype;
  g.k.start = function() {
    !this.u && isNaN(this.gb) && this.MG()
  };
  g.k.stop = function() {
    this.u && (this.u.abort(), this.u = null);
    isNaN(this.gb) || (g.Jo(this.gb), this.gb = NaN)
  };
  g.k.ca = function() {
    this.stop();
    g.O.prototype.ca.call(this)
  };
  g.k.MG = function() {
    this.gb = NaN;
    this.u = g.sq(e7(this.F, "/pairing/get_screen"), {
      method: "POST",
      pc: {
        pairing_code: this.J
      },
      timeout: 5E3,
      onSuccess: (0, g.z)(this.LL, this),
      onError: (0, g.z)(this.KL, this),
      Cg: (0, g.z)(this.ML, this)
    })
  };
  g.k.LL = function(a, b) {
    this.u = null;
    var c = b.screen || {};
    c.dialId = this.C;
    c.name = this.D;
    this.V("pairingComplete", new d6(c))
  };
  g.k.KL = function(a) {
    this.u = null;
    a.status && 404 == a.status ? this.B >= UJa.length ? this.V("pairingFailed", Error("DIAL polling timed out")) : (a = UJa[this.B], this.gb = g.Ho((0, g.z)(this.MG, this), a), this.B++) : this.V("pairingFailed", Error("Server error " + a.status))
  };
  g.k.ML = function() {
    this.u = null;
    this.V("pairingFailed", Error("Server not responding"))
  };
  var UJa = [2E3, 2E3, 1E3, 1E3, 1E3, 2E3, 2E3, 5E3, 5E3, 1E4];
  g.Va(o7, l7);
  g.k = o7.prototype;
  g.k.start = function() {
    n7(this) && this.V("screenChange");
    !g.uu("yt-remote-lounge-token-expiration") && HIa(this);
    g.Jo(this.u);
    this.u = g.Ho((0, g.z)(this.start, this), 1E4)
  };
  g.k.add = function(a, b) {
    n7(this);
    EIa(this, a);
    p7(this, !1);
    this.V("screenChange");
    b(a);
    a.token || HIa(this)
  };
  g.k.remove = function(a, b) {
    var c = n7(this);
    GIa(this, a) && (p7(this, !1), c = !0);
    b(a);
    c && this.V("screenChange")
  };
  g.k.Aw = function(a, b, c, d) {
    var e = n7(this),
      f = this.get(a.id);
    f ? (f.name != b && (f.name = b, p7(this, !1), e = !0), c(a)) : d(Error("no such local screen."));
    e && this.V("screenChange")
  };
  g.k.ca = function() {
    g.Jo(this.u);
    o7.Gd.ca.call(this)
  };
  g.k.SK = function(a) {
    n7(this);
    var b = this.screens.length;
    a = a && a.screens || [];
    for (var c = 0, d = a.length; c < d; ++c) {
      var e = a[c],
        f = this.get(e.screenId);
      f && (f.token = e.loungeToken, --b)
    }
    p7(this, !b);
    b && h7(this.J, "Missed " + b + " lounge tokens.")
  };
  g.k.RK = function(a) {
    h7(this.J, "Requesting lounge tokens failed: " + a)
  };
  g.u(r7, g.O);
  g.k = r7.prototype;
  g.k.start = function() {
    var a = parseInt(g.uu("yt-remote-fast-check-period") || "0", 10);
    (this.D = g.A() - 144E5 < a ? 0 : a) ? u7(this): (this.D = g.A() + 3E5, g.tu("yt-remote-fast-check-period", this.D), this.kA())
  };
  g.k.isEmpty = function() {
    return g.Rb(this.u)
  };
  g.k.update = function() {
    q7("Updating availability on schedule.");
    var a = this.J(),
      b = g.Fb(this.u, function(c, d) {
        return c && !!j6(a, d)
      }, this);
    t7(this, b)
  };
  g.k.ca = function() {
    g.Jo(this.C);
    this.C = NaN;
    this.B && (this.B.abort(), this.B = null);
    g.O.prototype.ca.call(this)
  };
  g.k.kA = function() {
    g.Jo(this.C);
    this.C = NaN;
    this.B && this.B.abort();
    var a = JIa(this);
    if ($5(a)) {
      var b = e7(this.F, "/pairing/get_screen_availability");
      this.B = f7(this.F, b, {
        lounge_token: g.Lb(a).join(",")
      }, (0, g.z)(this.HQ, this, a), (0, g.z)(this.GQ, this))
    } else t7(this, {}), u7(this)
  };
  g.k.HQ = function(a, b) {
    this.B = null;
    var c = g.Lb(JIa(this));
    if (g.Ab(c, g.Lb(a))) {
      c = b.screens || [];
      for (var d = {}, e = 0, f = c.length; e < f; ++e) d[a[c[e].loungeToken]] = "online" == c[e].status;
      t7(this, d);
      u7(this)
    } else this.yd("Changing Screen set during request."), this.kA()
  };
  g.k.GQ = function(a) {
    this.yd("Screen availability failed: " + a);
    this.B = null;
    u7(this)
  };
  g.k.yd = function(a) {
    h7("OnlineScreenService", a)
  };
  g.Va(v7, l7);
  g.k = v7.prototype;
  g.k.start = function() {
    this.B.start();
    this.u.start();
    this.screens.length && (this.V("screenChange"), this.u.isEmpty() || this.V("onlineScreenChange"))
  };
  g.k.add = function(a, b, c) {
    this.B.add(a, b, c)
  };
  g.k.remove = function(a, b, c) {
    this.B.remove(a, b, c);
    this.u.update()
  };
  g.k.Aw = function(a, b, c, d) {
    this.B.contains(a) ? this.B.Aw(a, b, c, d) : (a = "Updating name of unknown screen: " + a.name, h7(this.J, a), d(Error(a)))
  };
  g.k.ug = function(a) {
    return a ? this.screens : g.qb(this.screens, g.He(this.C, function(b) {
      return !this.contains(b)
    }, this))
  };
  g.k.RI = function() {
    return g.He(this.ug(!0), function(a) {
      return !!this.u.u[a.id]
    }, this)
  };
  g.k.SI = function(a, b, c, d, e) {
    this.info("getDialScreenByPairingCode " + a + " / " + b);
    var f = new m7(this.F, a, b, c);
    f.subscribe("pairingComplete", (0, g.z)(function(h) {
      g.Zf(f);
      d(w7(this, h))
    }, this));
    f.subscribe("pairingFailed", function(h) {
      g.Zf(f);
      e(h)
    });
    f.start();
    return (0, g.z)(f.stop, f)
  };
  g.k.US = function(a, b, c, d) {
    g.sq(e7(this.F, "/pairing/get_screen"), {
      method: "POST",
      pc: {
        pairing_code: a
      },
      timeout: 5E3,
      onSuccess: (0, g.z)(function(e, f) {
        var h = new d6(f.screen || {});
        if (!h.name || NIa(this, h.name)) {
          a: {
            var l = h.name;
            for (var m = 2, n = b(l, m); NIa(this, n);) {
              m++;
              if (20 < m) break a;
              n = b(l, m)
            }
            l = n
          }
          h.name = l
        }
        c(w7(this, h))
      }, this),
      onError: (0, g.z)(function(e) {
        d(Error("pairing request failed: " + e.status))
      }, this),
      Cg: (0, g.z)(function() {
        d(Error("pairing request timed out."))
      }, this)
    })
  };
  g.k.ca = function() {
    g.Zf(this.B);
    g.Zf(this.u);
    v7.Gd.ca.call(this)
  };
  g.k.YK = function() {
    PIa(this);
    this.V("screenChange");
    this.u.update()
  };
  v7.prototype.dispose = v7.prototype.dispose;
  g.Va(y7, g.O);
  g.k = y7.prototype;
  g.k.getScreen = function() {
    return this.C
  };
  g.k.Jf = function(a) {
    this.ma() || (a && A7(this, "" + a), this.C = null, this.V("sessionScreen", null))
  };
  g.k.info = function(a) {
    h7(this.ga, a)
  };
  g.k.UI = function() {
    return null
  };
  g.k.wA = function(a) {
    var b = this.u;
    a ? (b.displayStatus = new chrome.cast.ReceiverDisplayStatus(a, []), b.displayStatus.showStop = !0) : b.displayStatus = null;
    chrome.cast.setReceiverDisplayStatus(b, (0, g.z)(function() {
      this.info("Updated receiver status for " + b.friendlyName + ": " + a)
    }, this), (0, g.z)(function() {
      A7(this, "Failed to update receiver status for: " + b.friendlyName)
    }, this))
  };
  g.k.ca = function() {
    this.wA("");
    y7.Gd.ca.call(this)
  };
  g.u(B7, y7);
  g.k = B7.prototype;
  g.k.vA = function(a) {
    if (this.B) {
      if (this.B == a) return;
      A7(this, "Overriding cast session with new session object");
      XIa(this);
      this.da = !1;
      this.S = "unknown";
      this.B.removeUpdateListener(this.fa);
      this.B.removeMessageListener("urn:x-cast:com.google.youtube.mdx", this.Y)
    }
    this.B = a;
    this.B.addUpdateListener(this.fa);
    this.B.addMessageListener("urn:x-cast:com.google.youtube.mdx", this.Y);
    TIa(this, "getMdxSessionStatus")
  };
  g.k.oo = function(a) {
    this.info("launchWithParams no-op for Cast: " + g.Kj(a))
  };
  g.k.stop = function() {
    this.B ? this.B.stop((0, g.z)(function() {
      this.Jf()
    }, this), (0, g.z)(function() {
      this.Jf(Error("Failed to stop receiver app."))
    }, this)) : this.Jf(Error("Stopping cast device without session."))
  };
  g.k.wA = function() {};
  g.k.ca = function() {
    this.info("disposeInternal");
    XIa(this);
    this.B && (this.B.removeUpdateListener(this.fa), this.B.removeMessageListener("urn:x-cast:com.google.youtube.mdx", this.Y));
    this.B = null;
    y7.prototype.ca.call(this)
  };
  g.k.vR = function(a, b) {
    if (!this.ma())
      if (b) {
        var c = v6(b);
        if (g.Oa(c)) {
          var d = "" + c.type;
          c = c.data || {};
          this.info("onYoutubeMessage_: " + d + " " + g.Kj(c));
          switch (d) {
            case "mdxSessionStatus":
              RIa(this, c);
              break;
            case "loungeToken":
              UIa(this, c);
              break;
            default:
              A7(this, "Unknown youtube message: " + d)
          }
        } else A7(this, "Unable to parse message.")
      } else A7(this, "No data in message.")
  };
  g.k.sD = function(a, b, c, d) {
    g.Jo(this.P);
    this.P = 0;
    MIa(this.F, this.u.label, a, this.u.friendlyName, (0, g.z)(function(e) {
      e ? b(e) : 0 <= d ? (A7(this, "Screen " + a + " appears to be offline. " + d + " retries left."), this.P = g.Ho((0, g.z)(this.sD, this, a, b, c, d - 1), 300)) : c(Error("Unable to fetch screen."))
    }, this), c)
  };
  g.k.UI = function() {
    return this.B
  };
  g.k.VS = function(a) {
    this.ma() || a || (A7(this, "Cast session died."), this.Jf())
  };
  g.u(E7, y7);
  g.k = E7.prototype;
  g.k.vA = function(a) {
    this.D = a;
    this.D.addUpdateListener(this.Y)
  };
  g.k.oo = function(a) {
    this.X = a;
    this.K()
  };
  g.k.stop = function() {
    this.B();
    this.B = g.Ka;
    g.Jo(this.J);
    this.D ? this.D.stop((0, g.z)(this.Jf, this, null), (0, g.z)(this.Jf, this, "Failed to stop DIAL device.")) : this.Jf()
  };
  g.k.ca = function() {
    this.B();
    this.B = g.Ka;
    g.Jo(this.J);
    this.D && this.D.removeUpdateListener(this.Y);
    this.D = null;
    y7.prototype.ca.call(this)
  };
  g.k.OL = function(a) {
    this.ma() || a || (A7(this, "DIAL session died."), this.B(), this.B = g.Ka, this.Jf())
  };
  g.k.Ky = function(a) {
    this.S = h6();
    if (this.X) {
      var b = new chrome.cast.DialLaunchResponse(!0, ZIa(this));
      a(b);
      YIa(this)
    } else this.K = (0, g.z)(function() {
      g.Jo(this.J);
      this.K = g.Ka;
      this.J = NaN;
      var c = new chrome.cast.DialLaunchResponse(!0, ZIa(this));
      a(c);
      YIa(this)
    }, this), this.J = g.Ho((0, g.z)(function() {
      this.K()
    }, this), 100)
  };
  g.k.pL = function(a, b, c) {
    MIa(this.F, this.P.receiver.label, a, this.u.friendlyName, (0, g.z)(function(d) {
      d && d.token ? (z7(this, d), b(new chrome.cast.DialLaunchResponse(!1))) : this.Ky(b, c)
    }, this), (0, g.z)(function(d) {
      A7(this, "Failed to get DIAL screen: " + d);
      this.Ky(b, c)
    }, this))
  };
  g.u(F7, y7);
  F7.prototype.stop = function() {
    this.Jf()
  };
  F7.prototype.vA = function() {};
  F7.prototype.oo = function() {
    g.Jo(this.B);
    this.B = NaN;
    var a = j6(this.F.ug(), this.u.label);
    a ? z7(this, a) : this.Jf(Error("No such screen"))
  };
  F7.prototype.ca = function() {
    g.Jo(this.B);
    this.B = NaN;
    y7.prototype.ca.call(this)
  };
  g.u(G7, g.O);
  g.k = G7.prototype;
  g.k.init = function(a, b) {
    chrome.cast.timeout.requestSession = 3E4;
    var c = new chrome.cast.SessionRequest(this.P);
    this.S || (c.dialRequest = new chrome.cast.DialRequest("YouTube"));
    var d = chrome.cast.AutoJoinPolicy.TAB_AND_ORIGIN_SCOPED,
      e = a ? chrome.cast.DefaultActionPolicy.CAST_THIS_TAB : chrome.cast.DefaultActionPolicy.CREATE_SESSION,
      f = (0, g.z)(this.rQ, this);
    c = new chrome.cast.ApiConfig(c, (0, g.z)(this.rG, this), f, d, e);
    c.customDialLaunchCallback = (0, g.z)(this.ZO, this);
    chrome.cast.initialize(c, (0, g.z)(function() {
      this.ma() ||
        (chrome.cast.addReceiverActionListener(this.F), AIa(), this.B.subscribe("onlineScreenChange", (0, g.z)(this.TI, this)), this.C = aJa(this), chrome.cast.setCustomReceivers(this.C, g.Ka, (0, g.z)(function(h) {
          this.yd("Failed to set initial custom receivers: " + g.Kj(h))
        }, this)), this.V("yt-remote-cast2-availability-change", I7(this)), b(!0))
    }, this), (0, g.z)(function(h) {
      this.yd("Failed to initialize API: " + g.Kj(h));
      b(!1)
    }, this))
  };
  g.k.cS = function(a, b) {
    H7("Setting connected screen ID: " + a + " -> " + b);
    if (this.u) {
      var c = this.u.getScreen();
      if (!a || c && c.id != a) H7("Unsetting old screen status: " + this.u.u.friendlyName), J7(this, null)
    }
    if (a && b) {
      if (!this.u) {
        c = j6(this.B.ug(), a);
        if (!c) {
          H7("setConnectedScreenStatus: Unknown screen.");
          return
        }
        if ("shortLived" == c.idType) {
          H7("setConnectedScreenStatus: Screen with id type to be short lived.");
          return
        }
        var d = $Ia(this, c);
        d || (H7("setConnectedScreenStatus: Connected receiver not custom..."), d = new chrome.cast.Receiver(c.uuid ?
          c.uuid : c.id, c.name), d.receiverType = chrome.cast.ReceiverType.CUSTOM, this.C.push(d), chrome.cast.setCustomReceivers(this.C, g.Ka, (0, g.z)(function(e) {
          this.yd("Failed to set initial custom receivers: " + g.Kj(e))
        }, this)));
        H7("setConnectedScreenStatus: new active receiver: " + d.friendlyName);
        J7(this, new F7(this.B, d), !0)
      }
      this.u.wA(b)
    } else H7("setConnectedScreenStatus: no screen.")
  };
  g.k.dS = function(a) {
    this.ma() ? this.yd("Setting connection data on disposed cast v2") : this.u ? this.u.oo(a) : this.yd("Setting connection data without a session")
  };
  g.k.XS = function() {
    this.ma() ? this.yd("Stopping session on disposed cast v2") : this.u ? (this.u.stop(), J7(this, null)) : H7("Stopping non-existing session")
  };
  g.k.requestSession = function() {
    chrome.cast.requestSession((0, g.z)(this.rG, this), (0, g.z)(this.JQ, this))
  };
  g.k.ca = function() {
    this.B.unsubscribe("onlineScreenChange", (0, g.z)(this.TI, this));
    window.chrome && chrome.cast && chrome.cast.removeReceiverActionListener(this.F);
    var a = xIa,
      b = g.Ja("yt.mdx.remote.debug.handlers_");
    g.ob(b || [], a);
    g.Zf(this.u);
    g.O.prototype.ca.call(this)
  };
  g.k.yd = function(a) {
    h7("Controller", a)
  };
  g.k.tG = function(a, b) {
    this.u == a && (b || J7(this, null), this.V("yt-remote-cast2-session-change", b))
  };
  g.k.oQ = function(a, b) {
    if (!this.ma())
      if (a) switch (a.friendlyName = chrome.cast.unescape(a.friendlyName), H7("onReceiverAction_ " + a.label + " / " + a.friendlyName + "-- " + b), b) {
        case chrome.cast.ReceiverAction.CAST:
          if (this.u)
            if (this.u.u.label != a.label) H7("onReceiverAction_: Stopping active receiver: " + this.u.u.friendlyName), this.u.stop();
            else {
              H7("onReceiverAction_: Casting to active receiver.");
              this.u.getScreen() && this.V("yt-remote-cast2-session-change", this.u.getScreen());
              break
            } switch (a.receiverType) {
            case chrome.cast.ReceiverType.CUSTOM:
              J7(this,
                new F7(this.B, a));
              break;
            case chrome.cast.ReceiverType.DIAL:
              J7(this, new E7(this.B, a, this.K));
              break;
            case chrome.cast.ReceiverType.CAST:
              J7(this, new B7(this.B, a, this.D));
              break;
            default:
              this.yd("Unknown receiver type: " + a.receiverType)
          }
          break;
        case chrome.cast.ReceiverAction.STOP:
          this.u && this.u.u.label == a.label ? this.u.stop() : this.yd("Stopping receiver w/o session: " + a.friendlyName)
      } else this.yd("onReceiverAction_ called without receiver.")
  };
  g.k.ZO = function(a) {
    if (this.ma()) return Promise.reject(Error("disposed"));
    var b = a.receiver;
    b.receiverType != chrome.cast.ReceiverType.DIAL && (this.yd("Not DIAL receiver: " + b.friendlyName), b.receiverType = chrome.cast.ReceiverType.DIAL);
    var c = this.u ? this.u.u : null;
    if (!c || c.label != b.label) return this.yd("Receiving DIAL launch request for non-clicked DIAL receiver: " + b.friendlyName), Promise.reject(Error("illegal DIAL launch"));
    if (c && c.label == b.label && c.receiverType != chrome.cast.ReceiverType.DIAL) {
      if (this.u.getScreen()) return H7("Reselecting dial screen."),
        this.V("yt-remote-cast2-session-change", this.u.getScreen()), Promise.resolve(new chrome.cast.DialLaunchResponse(!1));
      this.yd('Changing CAST intent from "' + c.receiverType + '" to "dial" for ' + b.friendlyName);
      J7(this, new E7(this.B, b, this.K))
    }
    b = this.u;
    b.P = a;
    return b.P.appState == chrome.cast.DialAppState.RUNNING ? new Promise((0, g.z)(b.pL, b, (b.P.extraData || {}).screenId || null)) : new Promise((0, g.z)(b.Ky, b))
  };
  g.k.rG = function(a) {
    if (!this.ma()) {
      H7("New cast session ID: " + a.sessionId);
      var b = a.receiver;
      if (b.receiverType != chrome.cast.ReceiverType.CUSTOM) {
        if (!this.u)
          if (b.receiverType == chrome.cast.ReceiverType.CAST) H7("Got resumed cast session before resumed mdx connection."), b.friendlyName = chrome.cast.unescape(b.friendlyName), J7(this, new B7(this.B, b, this.D), !0);
          else {
            this.yd("Got non-cast session without previous mdx receiver event, or mdx resume.");
            return
          } var c = this.u.u,
          d = j6(this.B.ug(), c.label);
        d && e6(d, b.label) &&
          c.receiverType != chrome.cast.ReceiverType.CAST && b.receiverType == chrome.cast.ReceiverType.CAST && (H7("onSessionEstablished_: manual to cast session change " + b.friendlyName), g.Zf(this.u), this.u = new B7(this.B, b, this.D), this.u.subscribe("sessionScreen", (0, g.z)(this.tG, this, this.u)), this.u.oo(null));
        this.u.vA(a)
      }
    }
  };
  g.k.WS = function() {
    return this.u ? this.u.UI() : null
  };
  g.k.JQ = function(a) {
    this.ma() || (this.yd("Failed to estabilish a session: " + g.Kj(a)), a.code != chrome.cast.ErrorCode.CANCEL && J7(this, null))
  };
  g.k.rQ = function(a) {
    H7("Receiver availability updated: " + a);
    if (!this.ma()) {
      var b = I7(this);
      this.J = a == chrome.cast.ReceiverAvailability.AVAILABLE;
      I7(this) != b && this.V("yt-remote-cast2-availability-change", I7(this))
    }
  };
  g.k.TI = function() {
    this.ma() || (this.C = aJa(this), H7("Updating custom receivers: " + g.Kj(this.C)), chrome.cast.setCustomReceivers(this.C, g.Ka, (0, g.z)(function() {
      this.yd("Failed to set custom receivers.")
    }, this)), this.V("yt-remote-cast2-availability-change", I7(this)))
  };
  G7.prototype.setLaunchParams = G7.prototype.dS;
  G7.prototype.setConnectedScreenStatus = G7.prototype.cS;
  G7.prototype.stopSession = G7.prototype.XS;
  G7.prototype.getCastSession = G7.prototype.WS;
  G7.prototype.requestSession = G7.prototype.requestSession;
  G7.prototype.init = G7.prototype.init;
  G7.prototype.dispose = G7.prototype.dispose;
  var P7 = [];
  g.k = U7.prototype;
  g.k.reset = function(a) {
    this.listId = "";
    this.index = -1;
    this.videoId = "";
    V7(this);
    this.volume = -1;
    this.muted = !1;
    a && (this.index = a.index, this.listId = a.listId, this.videoId = a.videoId, this.playerState = a.playerState, this.volume = a.volume, this.muted = a.muted, this.audioTrackId = a.audioTrackId, this.u = a.trackData, this.Si = a.hasPrevious, this.hasNext = a.hasNext, this.P = a.playerTime, this.K = a.playerTimeAt, this.F = a.seekableStart, this.B = a.seekableEnd, this.J = a.duration, this.S = a.loadedTime, this.D = a.liveIngestionTime, this.C = !isNaN(this.D))
  };
  g.k.Fb = function() {
    return 1 == this.playerState
  };
  g.k.isAdPlaying = function() {
    return 1081 == this.playerState
  };
  g.k.ji = function(a) {
    this.J = isNaN(a) ? 0 : a
  };
  g.k.getDuration = function() {
    return this.C ? this.J + W7(this) : this.J
  };
  g.k.clone = function() {
    return new U7($7(this))
  };
  g.u(b8, g.O);
  g.k = b8.prototype;
  g.k.getState = function() {
    return this.Ja
  };
  g.k.play = function() {
    d8(this) ? (this.u ? this.u.play(null, g.Ka, i8(this, "play")) : h8(this, "play"), g8(this, 1, Y7(c8(this))), this.V("remotePlayerChange")) : e8(this, this.play)
  };
  g.k.pause = function() {
    d8(this) ? (this.u ? this.u.pause(null, g.Ka, i8(this, "pause")) : h8(this, "pause"), g8(this, 2, Y7(c8(this))), this.V("remotePlayerChange")) : e8(this, this.pause)
  };
  g.k.seekTo = function(a) {
    if (d8(this)) {
      if (this.u) {
        var b = c8(this),
          c = new chrome.cast.media.SeekRequest;
        c.currentTime = a;
        b.Fb() || 3 == b.playerState ? c.resumeState = chrome.cast.media.ResumeState.PLAYBACK_START : c.resumeState = chrome.cast.media.ResumeState.PLAYBACK_PAUSE;
        this.u.seek(c, g.Ka, i8(this, "seekTo", {
          newTime: a
        }))
      } else h8(this, "seekTo", {
        newTime: a
      });
      g8(this, 3, a);
      this.V("remotePlayerChange")
    } else e8(this, g.Ta(this.seekTo, a))
  };
  g.k.stop = function() {
    if (d8(this)) {
      this.u ? this.u.stop(null, g.Ka, i8(this, "stopVideo")) : h8(this, "stopVideo");
      var a = c8(this);
      a.index = -1;
      a.videoId = "";
      V7(a);
      f8(this, a);
      this.V("remotePlayerChange")
    } else e8(this, this.stop)
  };
  g.k.setVolume = function(a, b) {
    if (d8(this)) {
      var c = c8(this);
      if (this.B) {
        if (c.volume != a) {
          var d = Math.round(a) / 100;
          this.B.setReceiverVolumeLevel(d, (0, g.z)(function() {
            h7("CP", "set receiver volume: " + d)
          }, this), (0, g.z)(function() {
            this.yd("failed to set receiver volume.")
          }, this))
        }
        c.muted != b && this.B.setReceiverMuted(b, (0, g.z)(function() {
          h7("CP", "set receiver muted: " + b)
        }, this), (0, g.z)(function() {
          this.yd("failed to set receiver muted.")
        }, this))
      } else {
        var e = {
          volume: a,
          muted: b
        }; - 1 != c.volume && (e.delta = a - c.volume);
        h8(this, "setVolume", e)
      }
      c.muted = b;
      c.volume = a;
      f8(this, c)
    } else e8(this, g.Ta(this.setVolume, a, b))
  };
  g.k.QI = function(a, b) {
    if (d8(this)) {
      var c = c8(this),
        d = {
          videoId: a
        };
      b && (c.u = {
        trackName: b.name,
        languageCode: b.languageCode,
        sourceLanguageCode: b.translationLanguage ? b.translationLanguage.languageCode : "",
        languageName: b.languageName,
        kind: b.kind
      }, d.style = g.Kj(b.style), g.Xb(d, c.u));
      h8(this, "setSubtitlesTrack", d);
      f8(this, c)
    } else e8(this, g.Ta(this.QI, a, b))
  };
  g.k.setAudioTrack = function(a, b) {
    if (d8(this)) {
      var c = b.getLanguageInfo().getId();
      h8(this, "setAudioTrack", {
        videoId: a,
        audioTrackId: c
      });
      var d = c8(this);
      d.audioTrackId = c;
      f8(this, d)
    } else e8(this, g.Ta(this.setAudioTrack, a, b))
  };
  g.k.playVideo = function(a, b, c, d, e, f, h) {
    var l = c8(this);
    c = c || 0;
    var m = {
      videoId: a,
      currentIndex: c
    };
    Z7(l, a, c);
    void 0 !== b && (X7(l, b), m.currentTime = b);
    void 0 !== d && (m.listId = d);
    null != e && (m.playerParams = e);
    null != f && (m.clickTrackingParams = f);
    null != h && (m.locationInfo = g.Kj(h));
    h8(this, "setPlaylist", m);
    d || f8(this, l)
  };
  g.k.Nv = function(a, b) {
    if (d8(this)) {
      if (a && b) {
        var c = c8(this);
        Z7(c, a, b);
        f8(this, c)
      }
      h8(this, "previous")
    } else e8(this, g.Ta(this.Nv, a, b))
  };
  g.k.nextVideo = function(a, b) {
    if (d8(this)) {
      if (a && b) {
        var c = c8(this);
        Z7(c, a, b);
        f8(this, c)
      }
      h8(this, "next")
    } else e8(this, g.Ta(this.nextVideo, a, b))
  };
  g.k.LC = function() {
    d8(this) ? h8(this, "dismissAutoplay") : e8(this, this.LC)
  };
  g.k.dispose = function() {
    if (3 != this.Ja) {
      var a = this.Ja;
      this.Ja = 3;
      this.V("proxyStateChange", a, this.Ja)
    }
    g.O.prototype.dispose.call(this)
  };
  g.k.ca = function() {
    nJa(this);
    this.C = null;
    this.D.clear();
    a8(this, null);
    g.O.prototype.ca.call(this)
  };
  g.k.zA = function(a) {
    if ((a != this.Ja || 2 == a) && 3 != this.Ja && 0 != a) {
      var b = this.Ja;
      this.Ja = a;
      this.V("proxyStateChange", b, a);
      if (1 == a)
        for (; !this.D.isEmpty();) b = a = this.D, g.kb(b.u) && (b.u = b.B, b.u.reverse(), b.B = []), a.u.pop().apply(this);
      else 3 == a && this.dispose()
    }
  };
  g.k.kQ = function(a, b) {
    this.V(a, b)
  };
  g.k.LO = function(a) {
    if (!a) this.ur(null), a8(this, null);
    else if (this.B.receiver.volume) {
      a = this.B.receiver.volume;
      var b = c8(this),
        c = Math.round(100 * a.level || 0);
      if (b.volume != c || b.muted != a.muted) h7("CP", "Cast volume update: " + a.level + (a.muted ? " muted" : "")), b.volume = c, b.muted = !!a.muted, f8(this, b)
    }
  };
  g.k.ur = function(a) {
    h7("CP", "Cast media: " + !!a);
    this.u && this.u.removeUpdateListener(this.K);
    if (this.u = a) this.u.addUpdateListener(this.K), oJa(this), this.V("remotePlayerChange")
  };
  g.k.KO = function(a) {
    a ? (oJa(this), this.V("remotePlayerChange")) : this.ur(null)
  };
  g.k.SA = function() {
    h8(this, "sendDebugCommand", {
      debugCommand: "stats4nerds "
    })
  };
  g.k.SO = function() {
    var a = kJa();
    a && a8(this, a)
  };
  g.k.yd = function(a) {
    h7("CP", a)
  };
  g.u(j8, g.O);
  g.k = j8.prototype;
  g.k.connect = function(a, b) {
    if (b) {
      var c = b.listId,
        d = b.videoId,
        e = b.playerParams,
        f = b.clickTrackingParams,
        h = b.index,
        l = {
          videoId: d
        },
        m = b.currentTime,
        n = b.locationInfo;
      void 0 !== m && (l.currentTime = 5 >= m ? 0 : m);
      e && (l.playerParams = e);
      n && (l.locationInfo = n);
      f && (l.clickTrackingParams = f);
      c && (l.listId = c);
      void 0 !== h && (l.currentIndex = h);
      c && (this.Jb.listId = c);
      this.Jb.videoId = d;
      this.Jb.index = h || 0;
      this.Jb.state = 3;
      X7(this.Jb, m);
      this.D = "UNSUPPORTED";
      k8("Connecting with setPlaylist and params: " + g.Kj(l));
      this.u.connect({
        method: "setPlaylist",
        params: g.Kj(l)
      }, a, uHa())
    } else k8("Connecting without params"), this.u.connect({}, a, uHa());
    qJa(this)
  };
  g.k.ew = function(a) {
    this.u.ew(a)
  };
  g.k.dispose = function() {
    this.ma() || (this.V("beforeDispose"), l8(this, 3));
    g.O.prototype.dispose.call(this)
  };
  g.k.ca = function() {
    m8(this);
    o8(this);
    n8(this);
    g.Jo(this.K);
    this.K = NaN;
    g.Jo(this.P);
    this.P = NaN;
    this.C = null;
    g.ep(this.da);
    this.da.length = 0;
    this.u.dispose();
    g.O.prototype.ca.call(this);
    this.D = this.J = this.B = this.Jb = this.u = null
  };
  g.k.MK = function() {
    this.Qn(2)
  };
  g.k.PO = function() {
    k8("Channel opened");
    this.Y && (this.Y = !1, n8(this), this.X = g.Ho((0, g.z)(function() {
      k8("Timing out waiting for a screen.");
      this.Qn(1)
    }, this), 15E3));
    yHa(vIa(this.u), this.ga)
  };
  g.k.MO = function() {
    k8("Channel closed");
    isNaN(this.F) ? o6(!0) : o6();
    this.dispose()
  };
  g.k.NO = function(a, b) {
    o6();
    isNaN(this.yq()) ? (b && "shortLived" == this.fa && this.V("browserChannelAuthError", a), k8("Channel error: " + a + " without reconnection"), this.dispose()) : (this.Y = !0, k8("Channel error: " + a + " with reconnection in " + this.yq() + " ms"), l8(this, 2))
  };
  g.k.OO = function(a) {
    a.params ? k8("Received: action=" + a.action + ", params=" + g.Kj(a.params)) : k8("Received: action=" + a.action + " {}");
    switch (a.action) {
      case "loungeStatus":
        a = v6(a.params.devices);
        this.B = g.Mc(a, function(c) {
          return new c6(c)
        });
        a = !!g.fb(this.B, function(c) {
          return "LOUNGE_SCREEN" == c.type
        });
        tJa(this, a);
        break;
      case "loungeScreenDisconnected":
        g.pb(this.B, function(c) {
          return "LOUNGE_SCREEN" == c.type
        });
        tJa(this, !1);
        break;
      case "remoteConnected":
        var b = new c6(v6(a.params.device));
        g.fb(this.B, function(c) {
          return b ? c.id == b.id : !1
        }) || eHa(this.B, b);
        break;
      case "remoteDisconnected":
        b = new c6(v6(a.params.device));
        g.pb(this.B, function(c) {
          return b ? c.id == b.id : !1
        });
        break;
      case "gracefulDisconnect":
        break;
      case "playlistModified":
        vJa(this, a);
        break;
      case "nowPlaying":
        xJa(this, a);
        break;
      case "onStateChange":
        wJa(this, a);
        break;
      case "onAdStateChange":
        yJa(this, a);
        break;
      case "onVolumeChanged":
        zJa(this, a);
        break;
      case "onSubtitlesTrackChanged":
        uJa(this, a);
        break;
      case "nowAutoplaying":
        AJa(this, a);
        break;
      case "autoplayDismissed":
        this.V("autoplayDismissed");
        break;
      case "autoplayUpNext":
        this.J = a.params.videoId || null;
        this.V("autoplayUpNext", this.J);
        break;
      case "onAutoplayModeChanged":
        this.D =
          a.params.autoplayMode;
        this.V("autoplayModeChange", this.D);
        "DISABLED" == this.D && this.V("autoplayDismissed");
        break;
      case "onHasPreviousNextChanged":
        BJa(this, a);
        break;
      case "requestAssistedSignIn":
        this.V("assistedSignInRequested", a.params.authCode);
        break;
      default:
        k8("Unrecognized action: " + a.action)
    }
  };
  g.k.TR = function() {
    if (this.C) {
      var a = this.C;
      this.C = null;
      this.Jb.videoId != a && p8(this, "getNowPlaying")
    }
  };
  g.k.DK = function() {
    var a = 3;
    this.ma() || (a = 0, isNaN(this.yq()) ? c7(this.u) && isNaN(this.F) && (a = 1) : a = 2);
    return a
  };
  g.k.Qn = function(a) {
    k8("Disconnecting with " + a);
    m8(this);
    this.V("beforeDisconnect", a);
    1 == a && o6();
    wIa(this.u, a);
    this.dispose()
  };
  g.k.BK = function() {
    var a = this.Jb;
    this.C && (a = this.Jb.clone(), Z7(a, this.C, a.index));
    return $7(a)
  };
  g.k.eS = function(a) {
    var b = new U7(a);
    b.videoId && b.videoId != this.Jb.videoId && (this.C = b.videoId, g.Jo(this.K), this.K = g.Ho((0, g.z)(this.TR, this), 5E3));
    var c = [];
    this.Jb.listId == b.listId && this.Jb.videoId == b.videoId && this.Jb.index == b.index || c.push("remoteQueueChange");
    this.Jb.playerState == b.playerState && this.Jb.volume == b.volume && this.Jb.muted == b.muted && Y7(this.Jb) == Y7(b) && g.Kj(this.Jb.u) == g.Kj(b.u) || c.push("remotePlayerChange");
    this.Jb.reset(a);
    g.Cb(c, function(d) {
      this.V(d)
    }, this)
  };
  g.k.rD = function() {
    var a = this.u.J.id,
      b = g.fb(this.B, function(c) {
        return "REMOTE_CONTROL" == c.type && c.id != a
      });
    return b ? b.id : ""
  };
  g.k.yq = function() {
    var a = this.u;
    return a.B.isActive() ? a.B.B - g.A() : NaN
  };
  g.k.sK = function() {
    return this.D || "UNSUPPORTED"
  };
  g.k.tK = function() {
    return this.J || ""
  };
  g.k.SS = function() {
    if (!isNaN(this.yq())) {
      var a = this.u.B;
      g.ln(a.u);
      a.start()
    }
  };
  g.k.aS = function(a, b) {
    p8(this, a, b);
    sJa(this)
  };
  g.k.OI = function() {
    var a = g.zq("SID", "") || "",
      b = g.zq("SAPISID", "") || "",
      c = g.zq("__Secure-3PAPISID", "") || "";
    if (!a && !b && !c) return "";
    a = g.qf(g.Ve(a), 2);
    b = g.qf(g.Ve(b), 2);
    c = g.qf(g.Ve(c), 2);
    return g.qf(g.Ve(a + "," + b + "," + c), 2)
  };
  j8.prototype.subscribe = j8.prototype.subscribe;
  j8.prototype.unsubscribeByKey = j8.prototype.nl;
  j8.prototype.getProxyState = j8.prototype.DK;
  j8.prototype.disconnect = j8.prototype.Qn;
  j8.prototype.getPlayerContextData = j8.prototype.BK;
  j8.prototype.setPlayerContextData = j8.prototype.eS;
  j8.prototype.getOtherConnectedRemoteId = j8.prototype.rD;
  j8.prototype.getReconnectTimeout = j8.prototype.yq;
  j8.prototype.getAutoplayMode = j8.prototype.sK;
  j8.prototype.getAutoplayVideoId = j8.prototype.tK;
  j8.prototype.reconnect = j8.prototype.SS;
  j8.prototype.sendMessage = j8.prototype.aS;
  j8.prototype.getXsrfToken = j8.prototype.OI;
  g.u(q8, l7);
  g.k = q8.prototype;
  g.k.ug = function(a) {
    return this.rf.$_gs(a)
  };
  g.k.contains = function(a) {
    return !!this.rf.$_c(a)
  };
  g.k.get = function(a) {
    return this.rf.$_g(a)
  };
  g.k.start = function() {
    this.rf.$_st()
  };
  g.k.add = function(a, b, c) {
    this.rf.$_a(a, b, c)
  };
  g.k.remove = function(a, b, c) {
    this.rf.$_r(a, b, c)
  };
  g.k.Aw = function(a, b, c, d) {
    this.rf.$_un(a, b, c, d)
  };
  g.k.ca = function() {
    for (var a = 0, b = this.u.length; a < b; ++a) this.rf.$_ubk(this.u[a]);
    this.u.length = 0;
    this.rf = null;
    l7.prototype.ca.call(this)
  };
  g.k.NL = function() {
    this.V("screenChange")
  };
  g.k.QP = function() {
    this.V("onlineScreenChange")
  };
  v7.prototype.$_st = v7.prototype.start;
  v7.prototype.$_gspc = v7.prototype.US;
  v7.prototype.$_gsppc = v7.prototype.SI;
  v7.prototype.$_c = v7.prototype.contains;
  v7.prototype.$_g = v7.prototype.get;
  v7.prototype.$_a = v7.prototype.add;
  v7.prototype.$_un = v7.prototype.Aw;
  v7.prototype.$_r = v7.prototype.remove;
  v7.prototype.$_gs = v7.prototype.ug;
  v7.prototype.$_gos = v7.prototype.RI;
  v7.prototype.$_s = v7.prototype.subscribe;
  v7.prototype.$_ubk = v7.prototype.nl;
  var D8 = null,
    J8 = !1,
    r8 = null,
    s8 = null,
    I8 = null,
    w8 = [];
  g.u(K8, g.B);
  g.k = K8.prototype;
  g.k.ca = function() {
    g.B.prototype.ca.call(this);
    this.u.stop();
    this.C.stop();
    this.P.stop();
    this.Y();
    var a = this.xb;
    a.unsubscribe("proxyStateChange", this.oG, this);
    a.unsubscribe("remotePlayerChange", this.Ar, this);
    a.unsubscribe("remoteQueueChange", this.Ev, this);
    a.unsubscribe("previousNextChange", this.lG, this);
    a.unsubscribe("nowAutoplaying", this.gG, this);
    a.unsubscribe("autoplayDismissed", this.GF, this);
    this.xb = this.B = null
  };
  g.k.UE = function(a, b) {
    for (var c = [], d = 1; d < arguments.length; ++d) c[d - 1] = arguments[d];
    if (2 != this.xb.Ja)
      if (L8(this)) {
        if (!c8(this.xb).isAdPlaying() || "control_seek" !== a) switch (a) {
          case "control_toggle_play_pause":
            c8(this.xb).Fb() ? this.xb.pause() : this.xb.play();
            break;
          case "control_play":
            this.xb.play();
            break;
          case "control_pause":
            this.xb.pause();
            break;
          case "control_seek":
            this.K.DE(c[0], c[1]);
            break;
          case "control_subtitles_set_track":
            M8(this, c[0]);
            break;
          case "control_set_audio_track":
            this.setAudioTrack(c[0])
        }
      } else switch (a) {
        case "control_toggle_play_pause":
        case "control_play":
        case "control_pause":
          c =
            this.I.getCurrentTime();
          N8(this, 0 === c ? void 0 : c);
          break;
        case "control_seek":
          N8(this, c[0]);
          break;
        case "control_subtitles_set_track":
          M8(this, c[0]);
          break;
        case "control_set_audio_track":
          this.setAudioTrack(c[0])
      }
  };
  g.k.IO = function(a) {
    this.P.JK(a)
  };
  g.k.GS = function(a) {
    this.UE("control_subtitles_set_track", g.Rb(a) ? null : a)
  };
  g.k.YH = function() {
    var a = this.I.getOption("captions", "track");
    g.Rb(a) || M8(this, a)
  };
  g.k.Ob = function(a) {
    this.B.Ob(a, this.I.getVideoData().lengthSeconds)
  };
  g.k.xP = function() {
    g.Rb(this.D) || MJa(this, this.D);
    this.F = !1
  };
  g.k.oG = function(a, b) {
    this.C.stop();
    2 === b && this.TH()
  };
  g.k.Ar = function() {
    if (L8(this)) {
      this.u.stop();
      var a = c8(this.xb);
      switch (a.playerState) {
        case 1080:
        case 1081:
        case 1084:
        case 1085:
          this.B.Ee = 1;
          break;
        case 1082:
        case 1083:
          this.B.Ee = 0;
          break;
        default:
          this.B.Ee = -1
      }
      switch (a.playerState) {
        case 1081:
        case 1:
          this.tb(new g.NL(8));
          this.SH();
          break;
        case 1085:
        case 3:
          this.tb(new g.NL(9));
          break;
        case 1083:
        case 0:
          this.tb(new g.NL(2));
          this.K.stop();
          this.Ob(this.I.getVideoData().lengthSeconds);
          break;
        case 1084:
          this.tb(new g.NL(4));
          break;
        case 2:
          this.tb(new g.NL(4));
          this.Ob(Y7(a));
          break;
        case -1:
          this.tb(new g.NL(64));
          break;
        case -1E3:
          this.tb(new g.NL(128, {
            errorCode: "mdx.remoteerror",
            errorMessage: "Cette vid\u00e9o ne peut pas \u00eatre visionn\u00e9e \u00e0 distance."
          }))
      }
      a = c8(this.xb).u;
      var b = this.D;
      (a || b ? a && b && a.trackName == b.trackName && a.languageCode == b.languageCode && a.languageName == b.languageName && a.kind == b.kind : 1) || (this.D = a, MJa(this, a));
      a = c8(this.xb); - 1 === a.volume || Math.round(this.I.getVolume()) === a.volume && this.I.isMuted() === a.muted || this.S.isActive() || this.yI()
    } else LJa(this)
  };
  g.k.lG = function() {
    this.I.V("mdxpreviousnextchange")
  };
  g.k.Ev = function() {
    L8(this) || LJa(this)
  };
  g.k.gG = function(a) {
    isNaN(a) || this.I.V("mdxnowautoplaying", a)
  };
  g.k.GF = function() {
    this.I.V("mdxautoplaycanceled")
  };
  g.k.setAudioTrack = function(a) {
    L8(this) && this.xb.setAudioTrack(this.I.getVideoData(1).videoId, a)
  };
  g.k.seekTo = function(a, b) {
    -1 === c8(this.xb).playerState ? N8(this, a) : b && this.xb.seekTo(a)
  };
  g.k.yI = function() {
    var a = this;
    if (L8(this)) {
      var b = c8(this.xb);
      this.events.Kb(this.X);
      b.muted ? this.I.mute() : this.I.unMute();
      this.I.setVolume(b.volume);
      this.X = this.events.N(this.I, "onVolumeChange", function(c) {
        KJa(a, c)
      })
    }
  };
  g.k.SH = function() {
    this.u.stop();
    if (!this.xb.ma()) {
      var a = c8(this.xb);
      a.Fb() && this.tb(new g.NL(8));
      this.Ob(Y7(a));
      this.u.start()
    }
  };
  g.k.TH = function() {
    this.C.stop();
    this.u.stop();
    var a = this.xb.C.getReconnectTimeout();
    2 == this.xb.Ja && !isNaN(a) && this.C.start()
  };
  g.k.tb = function(a) {
    this.C.stop();
    var b = this.J;
    if (!g.SL(b, a)) {
      var c = g.T(a, 2);
      c !== g.T(this.J, 2) && g.F0(this.I.app, c);
      this.J = a;
      OJa(this.B, b, a)
    }
  };
  g.u(O8, g.U);
  O8.prototype.zc = function() {
    this.u.show()
  };
  O8.prototype.jb = function() {
    this.u.hide()
  };
  O8.prototype.B = function() {
    g.eL("https://support.google.com/youtube/answer/7640706")
  };
  O8.prototype.C = function() {
    b6("mdx-manual-pairing-popup-ok");
    this.jb()
  };
  g.u(P8, g.U);
  P8.prototype.zc = function() {
    this.u.show()
  };
  P8.prototype.jb = function() {
    this.u.hide()
  };
  P8.prototype.B = function() {
    b6("mdx-privacy-popup-cancel");
    this.jb()
  };
  P8.prototype.C = function() {
    b6("mdx-privacy-popup-confirm");
    this.jb()
  };
  g.u(Q8, g.U);
  Q8.prototype.B = function(a) {
    NJa(this, a.state)
  };
  g.u(R8, g.AW);
  R8.prototype.D = function() {
    var a = this.I.getOption("remote", "receivers");
    a && 1 < a.length && !this.I.getOption("remote", "quickCast") ? (this.Gl = g.Db(a, this.u, this), g.BW(this, g.Mc(a, this.u)), a = this.I.getOption("remote", "currentReceiver"), a = this.u(a), this.options[a] && this.dh(a), this.enable(!0)) : this.enable(!1)
  };
  R8.prototype.u = function(a) {
    return a.key
  };
  R8.prototype.Wh = function(a) {
    return "cast-selector-receiver" === a ? "Caster sur\u2026" : this.Gl[a].name
  };
  R8.prototype.Ve = function(a) {
    g.AW.prototype.Ve.call(this, a);
    this.I.setOption("remote", "currentReceiver", this.Gl[a]);
    this.Wa.jb()
  };
  g.u(S8, g.tS);
  g.k = S8.prototype;
  g.k.create = function() {
    var a = this.player.T(),
      b = g.CD(a);
    a = {
      device: "Desktop",
      app: "youtube-desktop",
      loadCastApiSetupScript: g.Q(a.experiments, "mdx_load_cast_api_bootstrap_script"),
      enableDialLoungeToken: g.Q(a.experiments, "enable_dial_short_lived_lounge_token"),
      enableCastLoungeToken: g.Q(a.experiments, "enable_cast_short_lived_lounge_token")
    };
    FJa(b, a);
    this.subscriptions.push(g.Oo("yt-remote-before-disconnect", this.GO, this));
    this.subscriptions.push(g.Oo("yt-remote-connection-change", this.sQ, this));
    this.subscriptions.push(g.Oo("yt-remote-receiver-availability-change",
      this.nG, this));
    this.subscriptions.push(g.Oo("yt-remote-auto-connect", this.qQ, this));
    this.subscriptions.push(g.Oo("yt-remote-receiver-resumed", this.pQ, this));
    this.subscriptions.push(g.Oo("mdx-privacy-popup-confirm", this.KR, this));
    this.subscriptions.push(g.Oo("mdx-privacy-popup-cancel", this.JR, this));
    this.subscriptions.push(g.Oo("mdx-manual-pairing-popup-ok", this.EL, this));
    this.nG()
  };
  g.k.load = function() {
    this.player.cancelPlayback();
    g.tS.prototype.load.call(this);
    this.Mg = new K8(this, this.player, this.xb);
    var a = (a = JJa()) ? a.currentTime : 0;
    var b = H8() ? new b8(B8(), void 0) : null;
    0 == a && b && (a = Y7(c8(b)));
    0 !== a && this.Ob(a);
    OJa(this, this.Kc, this.Kc);
    g.N0(this.player.app, 6)
  };
  g.k.unload = function() {
    this.player.V("mdxautoplaycanceled");
    this.Ik = this.Sh;
    g.$f(this.Mg, this.xb);
    this.xb = this.Mg = null;
    g.tS.prototype.unload.call(this);
    g.N0(this.player.app, 5);
    T8(this)
  };
  g.k.ca = function() {
    g.Po(this.subscriptions);
    g.tS.prototype.ca.call(this)
  };
  g.k.hj = function(a, b) {
    for (var c = [], d = 1; d < arguments.length; ++d) c[d - 1] = arguments[d];
    this.loaded && this.Mg.UE.apply(this.Mg, [a].concat(g.ma(c)))
  };
  g.k.getAdState = function() {
    return this.Ee
  };
  g.k.EK = function() {
    return this.loaded ? this.Mg.suggestion : null
  };
  g.k.Si = function() {
    return this.xb ? c8(this.xb).Si : !1
  };
  g.k.hasNext = function() {
    return this.xb ? c8(this.xb).hasNext : !1
  };
  g.k.Ob = function(a, b) {
    this.pE = a || 0;
    this.player.V("progresssync", a, b)
  };
  g.k.getCurrentTime = function() {
    return this.pE
  };
  g.k.getProgressState = function() {
    var a = c8(this.xb),
      b = this.player.getVideoData();
    return {
      allowSeeking: g.Q(this.player.T().experiments, "web_player_mdx_allow_seeking_change_killswitch") ? this.player.Ce() : !a.isAdPlaying() && this.player.Ce(),
      clipEnd: b.clipEnd,
      clipStart: b.clipStart,
      current: this.getCurrentTime(),
      displayedStart: -1,
      duration: a.getDuration(),
      ingestionTime: a.C ? a.D + W7(a) : a.D,
      isAtLiveHead: 1 >= (a.C ? a.B + W7(a) : a.B) - this.getCurrentTime(),
      loaded: a.S,
      seekableEnd: a.C ? a.B + W7(a) : a.B,
      seekableStart: 0 < a.F ? a.F +
        W7(a) : a.F
    }
  };
  g.k.nextVideo = function() {
    this.xb && this.xb.nextVideo()
  };
  g.k.Nv = function() {
    this.xb && this.xb.Nv()
  };
  g.k.GO = function(a) {
    1 === a && (this.Yz = this.xb ? c8(this.xb) : null)
  };
  g.k.sQ = function() {
    var a = H8() ? new b8(B8(), void 0) : null;
    if (a) {
      var b = this.Ik;
      this.loaded && this.unload();
      this.xb = a;
      this.Yz = null;
      b.key !== this.Sh.key && (this.Ik = b, this.load())
    } else g.Zf(this.xb), this.xb = null, this.loaded && (this.unload(), (a = this.Yz) && a.videoId === this.player.getVideoData().videoId && this.player.cueVideoById(a.videoId, Y7(a)));
    this.player.V("videodatachange", "newdata", this.player.getVideoData(), 3)
  };
  g.k.nG = function() {
    var a = [this.Sh],
      b = a.concat,
      c = GJa();
    Q7() && g.uu("yt-remote-cast-available") && c.push({
      key: "cast-selector-receiver",
      name: "Cast..."
    });
    this.Gl = b.call(a, c);
    a = C8() || this.Sh;
    U8(this, a);
    this.player.ya("onMdxReceiversChange")
  };
  g.k.qQ = function() {
    var a = C8();
    U8(this, a)
  };
  g.k.pQ = function() {
    this.Ik = C8()
  };
  g.k.KR = function() {
    this.Dr = !0;
    T8(this);
    J8 = !1;
    D8 && F8(D8, 1);
    D8 = null
  };
  g.k.JR = function() {
    this.Dr = !1;
    T8(this);
    U8(this, this.Sh);
    this.Ik = this.Sh;
    J8 = !1;
    D8 = null;
    this.player.playVideo()
  };
  g.k.EL = function() {
    this.Ju = !0;
    T8(this);
    g.tu("yt-remote-manual-pairing-warning-shown", !0, 2592E3);
    J8 = !1;
    D8 && F8(D8, 1);
    D8 = null
  };
  g.k.te = function(a, b) {
    switch (a) {
      case "casting":
        return this.loaded;
      case "receivers":
        return this.Gl;
      case "currentReceiver":
        return b && ("cast-selector-receiver" === b.key ? S7() : U8(this, b)), this.loaded ? this.Ik : this.Sh;
      case "quickCast":
        return 2 === this.Gl.length && "cast-selector-receiver" === this.Gl[1].key ? (b && S7(), !0) : !1
    }
  };
  g.k.SA = function() {
    this.xb.SA()
  };
  g.k.li = function() {
    return !1
  };
  g.k.getOptions = function() {
    return ["casting", "receivers", "currentReceiver", "quickCast"]
  };
  g.aU.remote = S8;
})(_yt_player);
