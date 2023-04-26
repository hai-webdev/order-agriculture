// 页尾的js代码
import "./index.less";
$(".to-top").on("click", function(){
    $("html,body").animate({scrollTop:0},1000)
})