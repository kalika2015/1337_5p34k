function leetspeak(chr) {
    var chrs = {'a':'4','e':'3','l':'1','t':'7','s':'5','o':'0'};
    return chrs[chr.toLowerCase()] || chr;
}
function french(chr) {
    var chrs2 = {'4':'a','3':'e','1':'l','7':'t','5':'s','0':'o'};
    return chrs2[chr.toLowerCase()] || chr;
}
document.getElementById("btn").addEventListener("click", function() {
    var mess = document.getElementById("mess").value;
    var result = document.getElementById("result");

    if ( !mess.match(/[0-9]/g) ) {
        result.innerHTML = mess.replace(/[aeltso]/g, leetspeak);
    } else {
        result.innerHTML = mess.replace(/[431750]/g, french);
    }

});




