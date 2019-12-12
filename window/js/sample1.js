'use strict';

$(function(){
  // フローティングウィンドウを表示
  $("a.open").click(function(){
    $("#floatWindow").fadeIn("fast");
    return false;
  });
  // フローティングウィンドウを非表示
  $("#floatWindow a.close").click(function(){
    $("#floatWindow").fadeOut("fast");
    return false;
  });

  $("#floatWindow dl dt").mousedown(function(e){
    // ドラッグ処理の追加
    // フローティングウィンドウ上のマウス座標を求める
    // ※data(name,value):データをHTMLの要素(ここでは#floatWindow)に関連付けて一時的に保存しておく命令
    // 「e」はイベントオブジェクトを受け取るための引数。JavaScriptのイベントオブジェクト参照。
    $("#floatWindow").data("clickPointX", e.pageX - $("#floatWindow").offset().left).data("clickPointY", e.pageY - $("#floatWindow").offset().top);
    $(document).mousemove(function(e){
      // カーソル移動に応じてウィンドウの位置を変更する処理
      $("#floatWindow").css({
        // 現在のマウス座標(e.pageX/Y)からフローティング上のマウス座標(保存したclickPointX/Y)を引いた値
        "top": e.pageY - $("#floatWindow").data("clickPointY") + "px",
        "left": e.pageX - $("#floatWindow").data("clickPointX") + "px"
      });
    });
  }).mouseup(function(){
    // ドラッグ処理の削除(ボタンが離れるとドラッグ処理を取消す)
    $(document).off("mousemove");
  });
});