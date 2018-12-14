function leetspeak(chr) {
    var chrs = {'a':'4','e':'3','l':'1','t':'7','s':'5','o':'0'};
    return chrs[chr.toLowerCase()] || chr;
}
document.getElementById("btn").addEventListener("click", function() {
    var mess = document.getElementById("mess").value;
    var result = document.getElementById("result");

    console.log( mess.replace(/[aeltso]/g, leetspeak) );
    result.innerHTML = mess.replace(/[aeltso]/g, leetspeak);
});