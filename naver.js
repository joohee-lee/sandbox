 , se = function() {
            d.a.isIEJS() ? document.documentElement.scrollTop = 0 : window.scrollTo(0, 0)
        }
          , ce = document.getElementById("shopcast_iframe")
          , le = !1
          , ue = ["is_tfixed", "is_bfixed", "is_absolute", "is_stop"]
          , de = r()("#container")
          , fe = r()("#NM_INT_RIGHT")
          , he = r()(".column_fix_wrap")
          , pe = r()("#footer")
          , ve = function(t) {
            return (t || he.get(0).getBoundingClientRect()).top >= 90
        }
          , ge = function(t) {
            return (t || he.get(0).getBoundingClientRect()).bottom + 24 <= window.innerHeight
        }
          , _e = function(t, e, n) {
            return t && ve(n) ? "sticky_top" : !(!e || !ge(n)) && "sticky_bottom"
        }
          , me = function(t) {
            var e = !t
              , n = fe.hasClass("is_tfixed")
              , i = fe.hasClass("is_bfixed")
              , r = fe.hasClass("is_absolute")
              , a = fe.hasClass("is_stop")
              , o = he.get(0).getBoundingClientRect();
            return n ? t && !r ? "absolute" : o.top <= de.get(0).getBoundingClientRect().top + 20 ? "reset" : !!r && _e(e, t, o) : i ? e && !r ? "absolute" : r ? _e(e, t, o) : de.get(0).getBoundingClientRect().bottom - 20 - 27 <= o.bottom && "footer" : a ? !(!e || !ve(o)) && "sticky_top" : pe.get(0).getBoundingClientRect().top <= window.innerHeight ? "footer" : !!ge(o) && "sticky_bottom"
        }
          , be = function() {
            he.css({
                position: "",
                top: "",
                bottom: ""
            })
        }
          , ye = function(t) {
            var e = ue.filter((function(e) {
                return t !== e
            }
            )).join(" ");
            fe.removeClass(e).addClass(t)
        }
          , we = function() {
            be(),
            fe.removeClass("is_tfixed is_bfixed is_stop is_absolute")
        }
          , Ne = function(t, e, n) {
            switch (t) {
            case "sticky_top":
                be(),
                ye("is_tfixed");
                break;
            case "sticky_bottom":
                be(),
                ye("is_bfixed");
                break;
            case "absolute":
                var i = e - de.get(0).offsetTop + he.get(0).offsetTop + (n ? -20 : 0);
                he.css({
                    position: "absolute",
                    top: "".concat(i, "px"),
                    bottom: "auto"
                }),
                fe.addClass("is_absolute");
                break;
            case "footer":
                be(),
                ye("is_stop");
                break;
            case "reset":
                we()
            }
        }
