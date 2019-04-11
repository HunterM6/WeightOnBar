window.sr=ScrollReveal();

function insertNum(num) {
    var text = document.getElementById("textv");
    //text.value += num;
    var output = '';

    var x = parseInt(text.value);
    if (text.value == "")
        output = num;
    else
        output = eval("num + x");

    text.value = output;
    weightonbar(text);

    console.log("insert " + num);

    output = '';
}

function weightonbar(text) {
    var output = (text.value * 2) + 20;
    var weightonbar = document.getElementById("weightonbar");

    weightonbar.value = output + "kg";
}

function backNum(num) {

}

function clearNum() {
    document.getElementById("weightonbar").value = "";
    document.getElementById("textv").value = "";


    console.log("textview is cleared!");
}
