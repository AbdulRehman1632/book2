var scriptElement = document.currentScript,
  scriptSrc = scriptElement.src,
  filename = scriptSrc.split("/").pop(),
  parts = filename.split("brand=");
const BrandID = parts[1],
  notifications = document.querySelector(".design_notifications_toaster"),
  toastDetails = {
    timer: 3e3,
    success: { icon: "fa-circle-check" },
    error: { icon: "fa-circle-xmark" },
    warning: { icon: "fa-triangle-exclamation" },
    info: { icon: "fa-circle-info" },
  },
  removeToast = (e) => {
    e.classList.add("hide"),
      e.timeoutId && clearTimeout(e.timeoutId),
      setTimeout(() => e.remove(), 3e3);
  },
  createToast = (e, a) => {
    let { icon: i, text: t } = toastDetails[e],
      r = document.createElement("li");
    (r.className = `toast ${e}`),
      (r.innerHTML = `<div class="column">
                         <i class="fa-solid ${i}"></i>
                         <span>${a}</span>
                      </div>
                      <i class="fa-solid fa-xmark" onclick="removeToast(this.parentElement)"></i>`),
      (r.timeoutId = setTimeout(() => removeToast(r), toastDetails.timer));
  };
$(document).ready(function () {
  jQuery.validator.addMethod(
    "lettersonly",
    function (e, a) {
      return this.optional(a) || /^[a-zA-Z\s]+$/i.test(e);
    },
    "Invalid Value"
  );
}),
  $(document).ready(function () {
    $(".form_submission").each(function () {
      $(this).validate({
        rules: {
          name: { required: !0, lettersonly: !0 },
          email: { email: !0, required: !0 },
          phone: { required: !0 },
          message: { required: !0 },
        },
        submitHandler: function (e) {
          var a = {},
            i = $(e).find("[data-name]");
          if (0 !== i.length)
            for (var t = 0; t < i.length; t++)
              a[$(i[t]).attr("data-name")] = $(i[t]).val();
          console.log(e), $(e).find(".loader").show();
          var r = $(e).find('[name="name"]').val(),
            o = $(e).find('[name="email"]').val(),
            n = $(e).find('[name="phone"]').val(),
            ipaddress = $(".ipaddress").val(),
            s = $(e).find('[name="message"]').val(),
            l = window.location.href,
            c = window.location.origin,
            d = $(e).find('[name="subject"]').val();
          (so = window.location.href),
            (lead_url = window.location.origin),
            (value = $(e).find('[name="price"]').val()),
            (pt = $(e).find('[name="pkgtitle"]').val()),
            (pc = $(e).find('[name="pkgctgry"]').val()),
            (title = $(e).find('[name="title"]').val()),
            (tk = "9" + Math.floor(9999999999 * Math.random() + 1e9));
          var m = window.location.origin,
            f = m + "/",
            u = {
              name: r,
              email: o,
              phone: n,
              message: s,
              url: l,
              domain: c,
              details: title,
              subject: d,
              source: so,
              lead_url,
              ipaddress,
              optional: a,
              value,
              randomnum: tk,
            };
          console.log("data", u),
            $.ajax({
              type: "POST",
              url: m + "/form/submit.php?brand_key=" + BrandID,
              dataType: "json",
              data: u,
              success: function (e) {
                var a = e;
                console.log("typeof___", typeof a),
                  console.log("response_direct___", a),
                  "object" == typeof a &&
                    (console.log("response__", a),
                    a.data?.id > 0
                      ? ($(".loader").hide(),
                        $(".form_submission").trigger("reset"),
                        createToast(
                          "success",
                          "Thank you for filling out your information!"
                        ),
                        setTimeout(function () {
                          "Logo" == pc || pc,
                            (window.location = f + "thankyou?" + a.data.id);
                        }, 3e3))
                      : a?.errors && createToast("error", a?.errors.name[0]));
              },
              error: function (a, i, t) {
                if (
                  ($(e)
                    .find(".error")
                    .html("Error Occurred " + t),
                  $(e).find(".loader").hide(),
                  "string" == typeof e)
                )
                  createToast("error___", e);
                else {
                  var r = Object.entries(e);
                  console.log("t____1", r);
                }
              },
            });
        },
      });
      setTimeout(function () {
        var ip = $(".form_submission").find('[name="ip"]').val();
        $.ajax({
          type: "POST",
          url: "https://tgcrm.net/api/create-tracking-ip/" + BrandID,
          data: {
            url: window.location.href,
            checkout_version: "1.0.0",
            ip: ip,
          },
          success: function (s) {
            console.log("tracking success", s);
          },
        });
      }, 3000);
    });
  });

/// Tracking api.
