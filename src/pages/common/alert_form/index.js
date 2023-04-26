import "./index.less";
function alertShow() {
  $(".alert-form").fadeIn();
}
function alertHide() {
  $(".alert-form").fadeOut();
}

$(".alert-show").on("click", function () {
  alertShow();
  return false;
});

$(".alert-form .close").on("click", function () {
  alertHide();
  return false;
});

window.alertHide = alertHide;
window.alertShow = alertShow;
