// ==================
// ドロワーメニュー（初級、中級、上級）
// ==================
$(function() {
  $(".drawer").click(function() {
    $(".drawer-list").slideToggle();
  });
});

// ==================
// トップへ戻るボタン
// ==================
$(function(){
  var pagetop = $('#page_top');
  // ボタン非表示
  pagetop.hide();
  // 80px スクロールしたらボタン表示
  $(window).scroll(function () {
     if ($(this).scrollTop() > 80) {
          pagetop.fadeIn(300);
     } else {
          pagetop.fadeOut(300);
     }
  });
  pagetop.click(function () {
     $('body, html').animate({ scrollTop: 0 }, 500);
     return false;
  });
});

// モーダル（画像拡大表示）

$('.modal-link').click(function() {
  var imgSrc = $(this).children().attr('src');
  $('.bigimg').children().attr('src', imgSrc);
  $('.modal').fadeIn();
  $('body,html').css('overflow-y', 'hidden');
  return false
});

$('.bigimg, .modal').click(function() {
  $('.modal').fadeOut();
  $('body,html').css('overflow-y', 'visible');
  return false
});
