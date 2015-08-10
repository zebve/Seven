$(function () {

var loca = window.location.href.replace(/[#?].*$/, '');
var win = $('html,body');
$(document).click(function (event) {
var obj = $(event.target);
var link = obj.filter('a[href*="#"],area[href*="#"]')[0]; // '[href*="#"]'でfilterしてみる
if (!link) link = obj.parents('a[href*="#"]')[0]; // 要素を取得できていなければ祖先を辿ってみる
if (link && ! $(link).hasClass('not-animate') // class属性に'not-animate'を持つ要素は対象から外す
&& link.href.replace(/[#?].*$/, '') === loca) { // 見付かれば
var target = $(link.hash);
if (target[0]) { // リンク終点要素
var top = target.offset().top;
win.animate({ 'scrollTop': top }, 600); // リンク終点要素までスクロール
event.preventDefault();
}
}
});

});