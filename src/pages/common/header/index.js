// 头部的js代码
import "./index.less";
import "swiper/css/swiper.min.css";

$(".menu").on("click", function () {
  $(".nav-container").addClass("on");
});
$(".nav-container .close").on("click", function () {
  $(".nav-container").removeClass("on");
});
