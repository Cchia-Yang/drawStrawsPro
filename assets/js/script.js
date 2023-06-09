$(document).ready(function() {
    $(".btnSend").click(function() {
      var start = $(".start").val();
      var end = $(".end").val();
      var num = $(".num").val();
      var resText = $(".resText");
  
      if (Number(end) <= Number(start) || Number(num) > (Number(end) - Number(start))) {
        alert("範圍有誤，請重新輸入。");
        resText.val("抽籤結果");
        $(".start, .end, .num").val("");
        return;
      }
  
      var res = [];
      for (var i = 0; i < Number(num); i++) {
        var ranNum = Math.round(Math.random() * (Number(end) - Number(start)) + Number(start));
        if (res.indexOf(ranNum) === -1) {
          res[i] = ranNum;
        } else {
          i--;
        }
      }
  
      resText.val("");
      for (var i = 0; i < Number(num); i++) {
        resText.val(resText.val() + res[i] + "\n");
      }
    });
  
    $(".sayHello").click(function() {
      alert("Hello");
    });
  });
  