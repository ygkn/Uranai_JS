function uranai(name1, name2){
  var answer;
  function convert(name){
    return name
      .replace(/.[ぁゃゎ]/g,"1")
      .replace(/.ぃ/g, "2")
      .replace(/.[ぅゅっ]/g, "3")
      .replace(/.ぇ/g, "4")
      .replace(/.[ぉょ]/g, "5")
      .replace(/[あかさたなはまやらわがざだばぱ]/g, "1")
      .replace(/[いきしちにひみりゐぎじぢびぴ]/g, "2")
      .replace(/[うくすつふむゆるぐずづぶぷ]/g, "3")
      .replace(/[えけせてねへめれゑげぜでべぺ]/g, "4")
      .replace(/[おこそとのほもよろをごぞどぽぼ]/g, "5")
      .replace(/ん/g, "0")
      .replace(/\D/, "") - 0;
  }
  
  answer = convert(name1) + convert(name2);
  
    while (answer > 1) {
      answer /= 2;
    }
  
    return Math.floor(answer * 100);
}
