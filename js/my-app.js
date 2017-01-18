// 使用 myApp 作为变量名存储 Framework7 初始化之后的实例
var myApp = new Framework7({
    //设置成允许滑动屏幕打开
    swipePanel: 'left',
    template7Pages: true
});

// If we need to use custom DOM library, let's save it to $$ variable:
var $ = Dom7;

// 初始化视图（使用 myApp.addView() 方法）
var mainView = myApp.addView('.view-main', {
    // Because we want to use dynamic navbar, we need to enable it for this view:
    dynamicNavbar: true
});


$('.show-tab-1').on('click', function () {
    myApp.showTab('#tab1');
});
$('.show-tab-2').on('click', function () {
    myApp.showTab('#tab2');
});
