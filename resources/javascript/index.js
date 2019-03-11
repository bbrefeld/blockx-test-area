(function (id, f, t, ws, ms_tr_il_08, ms_tr_il_w_01) {
  var tr = function (cb) {
    var count = 0;
    var callback = function () {
      if (count == 0) {
        count++;
        if (w) {
          w.w(id, t, cb);
          }
        }
      };
      var ts = document.createElement('script');
      ts.src = ws;
      ts.type = 'text/javascript';
      ts.onload = callback;
      ts.onreadystatechange = function () {
        if (this.readyState == 'complete' || this.readyState == 'loaded') {
          callback();
          }
        };
        var head = document.getElementsByTagName('head')[0];
        head.appendChild(ts);
      };
      if (typeof ms_tr_il_08 === 'function') {
        if (ms_tr_il_w_01 === null) {
          tr(function() {
            ms_tr_il_08(id, f, t);
            });
          } else {
            ms_tr_il_w_01.w(id, t, function(websiteVisitedParams) {
               ms_tr_il_08(id, f, t, websiteVisitedParams);
             });
           }
         } else {
           tr();
         }
       }
     )
     ('PxghGezb2HHO7NdK7Q9NwfDb9bexCmfJd4QPW1Kla14', 'https://41630f6955474e97b38ea43c59269324.svc.dynamics.com/f', 'https://41630f6955474e97b38ea43c59269324.svc.dynamics.com/t', 'https://41630f6955474e97b38ea43c59269324.svc.dynamics.com/t/w', typeof ms_tr_il_08 === "undefined" ? null : ms_tr_il_08, typeof ms_tr_il_w_01 === "undefined" ? null : ms_tr_il_w_01);
