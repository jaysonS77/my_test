(function(f) { "function" === typeof define && define.amd ? define(["jquery", "datatables.net", "datatables.net-buttons"], function(e) {
        return f(e, window, document) }) : "object" === typeof exports ? module.exports = function(e, c) { e || (e = window);
        if (!c || !c.fn.dataTable) c = require("datatables.net")(e, c).$;
        c.fn.dataTable.Buttons || require("datatables.net-buttons")(e, c);
        return f(c, e, e.document) } : f(jQuery, window, document) })(function(f, e, c) {
    var i = f.fn.dataTable,
        h = c.createElement("a");
    i.ext.buttons.print = {
        className: "buttons-print",
        text: function(b) {
            return b.i18n("buttons.print", "Print") },
        action: function(b, c, i, d) {
            var a = c.buttons.exportData(d.exportOptions),
                k = function(b, a) {
                    for (var c = "<tr>", d = 0, e = b.length; d < e; d++) c += "<" + a + ">" + b[d] + "</" + a + ">";
                    return c + "</tr>" },
                b = '<table class="' + c.table().node().className + '">';
            d.header && (b += "<thead>" + k(a.header, "th") + "</thead>");
            for (var b = b + "<tbody>", l = 0, m = a.body.length; l < m; l++) b += k(a.body[l], "td");
            b += "</tbody>";
            d.footer && a.footer && (b += "<tfoot>" + k(a.footer, "th") + "</tfoot>");
            var g = e.open("", ""),
                a = d.title;
            "function" === typeof a && (a = a()); - 1 !== a.indexOf("*") && (a = a.replace("*", f("title").text()));
            g.document.close();
            var j = "<title>" + a + "</title>";
            f("style, link").each(function() {
                var c = j,
                    b = f(this).clone()[0],
                    a; "link" === b.nodeName.toLowerCase() && (h.href = b.href, a = h.host, -1 === a.indexOf("/") && 0 !== h.pathname.indexOf("/") && (a += "/"), b.href = h.protocol + "//" + a + h.pathname + h.search);
                j = c + b.outerHTML });
            try { g.document.head.innerHTML = j } catch (n) { f(g.document.head).html(j) }
            g.document.body.innerHTML = "<h1>" + a + "</h1><div>" +
                ("function" === typeof d.message ? d.message(c, i, d) : d.message) + "</div>" + b;
            d.customize && d.customize(g);
            setTimeout(function() { d.autoPrint && (g.print(), g.close()) }, 250)
        },
        title: "Statement Report",
        message: "",
        exportOptions: {},
        header: !0,
        footer: !1,
        autoPrint: !0,
        customize: null
    };
    return i.Buttons
});
