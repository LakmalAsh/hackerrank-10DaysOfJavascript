var clicks = 0;

var buttonJS = document.createElement('button');
buttonJS.id = 'btn';
buttonJS.innerHTML = clicks;
buttonJS.classList.add("buttonJS");
buttonJS.onclick = function() {
    buttonJS.innerHTML = ++clicks;
};
document.body.appendChild(buttonJS);
