(("undefined" !== typeof self ? self : this).webpackJsonp =
  ("undefined" !== typeof self ? self : this).webpackJsonp || []).push([
  [48],
  {
    "9YA2": function (e, t, n) {
      "use strict";
      n.r(t);
      n("07d7"), n("5s+n");
      var s = n("eVuF"),
        r = n.n(s),
        a = n("ln6h"),
        l = n.n(a),
        i = (n("ls82"), n("doui")),
        u = n("ERkP"),
        c = n("t28Y"),
        o = n("uDfI"),
        p = n("Pzjw"),
        f = n("F4n0"),
        d = n("ImkE"),
        y = n("DVbV"),
        h = n("8HpQ"),
        b = u.createElement,
        w = function (e) {
          var t = e.linkExpired,
            n = Object(o.c)();
          Object(h.c)();
          var s = u.useState("playlists"),
            r = Object(i.a)(s, 2),
            a = r[0],
            l = r[1],
            c = u.useState(!1),
            w = Object(i.a)(c, 2),
            k = w[0],
            E = w[1];
          return (
            u.useEffect(function () {
              n(Object(f.f)({ playerPage: "playlists" })), t && E(!0);
            }, []),
            b(
              u.Fragment,
              null,
              b(p.a, {
                metatags: y.b.playlists,
                playerCategory: a,
                setPlayerCategory: l,
              }),
              b(d.a, {
                show: k,
                message: "Oops, the link has expired",
                onCloseClick: function () {
                  return E(!1);
                },
              })
            )
          );
        };
      (w.getInitialProps = function (e) {
        return l.a.async(
          function (t) {
            for (;;)
              switch ((t.prev = t.next)) {
                case 0:
                  return (
                    e.res &&
                      e.res.setHeader(
                        "Cache-Control",
                        "no-cache, must-revalidate, no-store"
                      ),
                    t.abrupt("return", {
                      withPlayer: !0,
                      linkExpired: !!e.query.linkExpired,
                    })
                  );
                case 2:
                case "end":
                  return t.stop();
              }
          },
          null,
          null,
          null,
          r.a
        );
      }),
        (t.default = Object(c.c)(w, {
          includes: ["favourites", "userDetails", "timer"],
        }));
    },
    S6n8: function (e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/playlists",
        function () {
          return n("9YA2");
        },
      ]);
    },
  },
  [["S6n8", 1, 2, 6, 7, 0, 3, 4, 5, 8, 15, 18]],
]);
