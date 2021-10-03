var ans = '0';
function clear() { /* clear */
    document.querySelector('.res').value = '0';
    ans = document.querySelector('.res').value;

    console.log(ans);
};
document.querySelector('.action.clear').onclick = clear;

function back() { /* <- */
    ans = ans.split('');
    ans.pop();
    ans = ans.join('');
    document.querySelector('.res').value = ans;
    if(ans == '') {
        document.querySelector('.res').value = '0';
    }
    // ans = document.querySelector('.res').value;
};
document.querySelector('.action.back').onclick = back;

function root() { /* sqrt() */

    ans = document.querySelector('.res').value;
};

function degree() { /* degree */

    ans = document.querySelector('.res').value;
};

function lbkt() {

    ans = document.querySelector('.res').value;
};

function rbkt() {

    ans = document.querySelector('.res').value;
};

function factorail() {

    ans = document.querySelector('.res').value;
};

function pi() {

    ans = document.querySelector('.res').value;
};

function number(id) {
    if (document.querySelector('.res').value == '0') {
        //if res = 0 so after click on 8 res shouldn't become 08
        document.querySelector('.res').value = document.querySelector(id).value;
    } else {
        document.querySelector('.res').value += document.querySelector(id).value;
    }
    ans = document.querySelector('.res').value;
    console.log(ans);

    // console.log(document.querySelector(id).value);
};

function procents() {

    ans = document.querySelector('.res').value;
};

function dote() {

    ans = document.querySelector('.res').value;
};

function divide() {

    ans = document.querySelector('.res').value;
};

function multiply() {

    ans = document.querySelector('.res').value;
};

function plus() {

    ans = document.querySelector('.res').value;
};

function minus() {

    ans = document.querySelector('.res').value;
};

function equals() {

    ans = document.querySelector('.res').value;
};