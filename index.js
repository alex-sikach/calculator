var ans = '0';
var show = '0';

function clear() {
    show = '0';
    ans = show;
    document.querySelector('.res').value = show;

};
document.querySelector('.action.clear').onclick = clear;

function back() { /* <- */
    show = show.split("");
    show.pop();
    show = show.join("");

    document.querySelector('.res').value = show;
    if (show == '') {
        show = '0';
        ans = '0';
        document.querySelector('.res').value = show;
    }
};
document.querySelector('.action.back').onclick = back;

const root_digit = '√(';
function root() { /* sqrt() */
    show = show.split('');
    show.unshift(root_digit);
    show = show.join('');

    document.querySelector('.res').value = show;
};
document.querySelector('.action.sqrt').onclick = root;

function degree() { /* degree */

};

function lbkt() {
    if (show == 0) {
        show = '('
    }
    else {
        show = show.split('');
        show.push('(');
        show = show.join("");
    }

    document.querySelector('.res').value = show;
};
document.querySelector('.action.lbkt').onclick = lbkt;

function rbkt() {
    if (show == 0) {
        show = ')'
    }
    else {
        show = show.split('');
        show.push(')');
        show = show.join("");
    }

    document.querySelector('.res').value = show;
};
document.querySelector('.action.rbkt').onclick = rbkt;

function factorail() {

};

function pi() {

};

function number(id) {
    if (show == '0') {
        //if show = 0 so after click on 8 show shouldn't become 08
        show = document.querySelector(id).value;
    }
    else {
        show += document.querySelector(id).value;
    }
    document.querySelector('.res').value = show;
};

function procents() {

};

function dote() {

};

function divide() {

};

function multiply() {

};

function plus() {

};

function minus() {

};

function equals() {

    document.querySelector('.res').value = ans;
    show = String(ans);
};
document.querySelector('.equals').onclick = equals;