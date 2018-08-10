function createDiv(id) {
    var div = document.createElement('div');
    div.id = id;
    return div;
}

function createButton(id) {
    var btn = document.createElement('button');
    btn.id = 'btn' + id;
    btn.innerHTML = id;
    btn.classList.add("btn");
    btn.onclick = function() {
        let textBtn1 = btn1.innerHTML;
        btn1.innerHTML = btn4.innerHTML;
        btn4.innerHTML = btn7.innerHTML;
        btn7.innerHTML = btn8.innerHTML;
        btn8.innerHTML = btn9.innerHTML;
        btn9.innerHTML = btn6.innerHTML;
        btn6.innerHTML = btn3.innerHTML;
        btn3.innerHTML = btn2.innerHTML;
        btn2.innerHTML = textBtn1;
    };
    return btn;
}

var div = createDiv("btns");
document.body.appendChild(div);

var btn1 = createButton(1);
div.append(btn1);
var btn2 = createButton(2);
div.append(btn2);
var btn3 = createButton(3);
div.append(btn3);
var btn4 = createButton(4);
div.append(btn4);
var btn5 = createButton(5);
div.append(btn5);
var btn6 = createButton(6);
div.append(btn6);
var btn7 = createButton(7);
div.append(btn7);
var btn8 = createButton(8);
div.append(btn8);
var btn9 = createButton(9);
div.append(btn9);