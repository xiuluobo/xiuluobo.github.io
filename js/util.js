//图片放大缩小功能
function enlarge(ele) {
  $(".box").show();
  initZoom = null;
  initZoom = new RTP.PinchZoom($('#pinch-zoom'), {});
  $('#pinch-zoom').each(function() {
    initZoom;
  });
  var imgUrl = $(ele).attr("src");
  // 手机宽高
  var winWidth = $(window).width();
  var winHeight = $(window).height();
  // 图片原始宽高
  var originalWidth = $(ele)[0].naturalWidth;
  var originalHeight = $(ele)[0].naturalHeight;
  var phoneRatio = winWidth / winHeight;
  var imgRatio = originalWidth / originalHeight;
  if(originalWidth < winWidth &&
    originalHeight < winHeight) {
    $(".box .banner").attr("src", imgUrl).css({
      "width": "auto",
      "height": "auto"
    });
  } else if(imgRatio >= phoneRatio) {
    $(".box .banner").attr("src", imgUrl).css({
      "width": "100%",
      "height": "auto"
    });
  } else {
    $(".box .banner").attr("src", imgUrl).css({
      "height": "100%",
      "width": "auto"
    });
  }
  $(".pinch-zoom-container").height(winHeight);
}
//图片放大后，点击隐藏
$(".banner,.box").click(function() {
	$(".box").hide();
});
$('.banner,.box,.pinch-zoom,.pinch-zoom-container').on('touchmove',function(e){
    e.preventDefault();
});
function GetQueryString(name){
       var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
       var r = window.location.search.substr(1).match(reg);
       if(r!=null)return  unescape(r[2]); return null;
  }