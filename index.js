function uranai(name1, name2){
  var answer;
  function convert(name){
    return name
      .replace(/.[ぁゃゎ]/g,"1")
      .replace(/.ぃ/g, "2")
      .replace(/.[ぅゅ]/g, "3")
      .replace(/.ぇ/g, "4")
      .replace(/.[ぉょ]/g, "5")
      .replace(/[あかさたなはまやらわがざだばぱ]/g, "1")
      .replace(/[いきしちにひみりゐぎじぢびぴ]/g, "2")
      .replace(/[うくすつふむゆるぐずづぶぷ]/g, "3")
      .replace(/[えけせてねへめれゑげぜでべぺ]/g, "4")
      .replace(/[おこそとのほもよろをごぞどぽぼ]/g, "5")
      .replace(/ん/g, "0")
      .replace(/\D/g, "") - 0;
  }
  
  answer = convert(name1) + convert(name2);
  
    while (answer > 1) {
      answer /= 2;
    }
  
    return Math.floor(answer * 100);
}

if(window != null){
  var
  $result = document.getElementById("result"),
  $name1  = document.getElementById("name1"),
  $name2  = document.getElementById("name2"),
  $form   = document.getElementById("form");

  function uranaiInHTML(){
    $result.innerHTML =
      uranai($name1.value, $name2.value) + "% です。";
    return false;
  }

  $form.onsubmit = uranaiInHTML;
}
