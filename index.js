var ans = '0';
var show = '0';
var match = [];
var isThisSecond = false;
function isSecond(digit)
{
    isThisSecond = false;
    for (var i in digit)
    {
        console.log(show.split("").reverse()[0], digit[i]);
        if (show.split('').reverse()[0] == digit[i])
        {
            console.error('truuee');
            isThisSecond = true;
            match = digit[i];
        }
        else
        {
            isThisSecond = false;
            match = null;
        }
    }
}

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

    if (show == '') {
        show = '0';
        ans = '0';
    }
    document.querySelector('.res').value = show;
};
document.querySelector('.back').onclick = back;

const root_digit = '√(';
function root() { /* sqrt() */
    show = show.split('');
    show.push(root_digit);
    show = show.join('');

    document.querySelector('.res').value = show;
};
document.querySelector('.sqrt').onclick = root;

const degree_digit = '^';
function degree() { /* degree */
    if (false && show.split('').reverse()[0] != degree_digit && isSecond([1,2,3,4,5,6,7,8,9,0,'!'], isThisSecond)) {
        show = show.split('');
        show.push(degree_digit);
        show = show.join('');
    } else {
        show = show.split('');
        show.pop();
        show = show.join('');
    }
    document.querySelector('.res').value = show;
    isSecond = false;
};
document.querySelector('.degree').onclick = degree;


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
document.querySelector('.lbkt').onclick = lbkt;

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
document.querySelector('.rbkt').onclick = rbkt;

function factorail() {
    if (!isSecond(['!'], isSecond)) {
        show = show.split("");
        show.push('!');
        show = show.join("");
    }
    document.querySelector('.res').value = show;
};
document.querySelector('.factorial').onclick = factorail;

const pi_digit = 'π';
function pi() {
    if (!isSecond([pi_digit], isSecond)) {
        show = show.split("");
        show.push(pi_digit);
        show = show.join("");
    }
    document.querySelector('.res').value = show;
};
document.querySelector('.pi').onclick = pi;

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
    if (!isSecond(['%'], isSecond)) {
        show = show.split("");
        show.push('%');
        show = show.join("");
    }
    document.querySelector('.res').value = show;
};
document.querySelector('.procents').onclick = procents;

function dote() {
    if (!isSecond(['.'], isSecond)) {
        show = show.split("");
        show.push('.');
        show = show.join("");
    } else {
        show = show.split('');
        show.pop();
        show = show.join('');
    }
    document.querySelector('.res').value = show;
};
document.querySelector('.dote').onclick = dote;

const divide_digit = '÷';
function divide() {
    isSecond(['-', '+', '*', degree_digit]);
    console.log(isThisSecond, match);
    if (isThisSecond) {

        console.log('first');

        show = show.split("");
        show.pop(); show.push('/');
        show = show.join("");
    } else if (show.split('').reverse()[0] == '/') {
        
        console.log('second');

        show = show.split("");
        show.pop();
        show = show.join("");
    } else {
        console.log('third');

        show = show.split("");
        show.push('/');
        show = show.join("");
    }
    document.querySelector('.res').value = show;
};
document.querySelector('.divide').onclick = divide;

function multiply() {
    isSecond(['-', '/', '+', degree_digit]);
    console.log(isThisSecond, match);
    if (isThisSecond) {

        console.log('first');

        show = show.split("");
        show.pop(); show.push('*');
        show = show.join("");
    } else if (show.split('').reverse()[0] == '*') {
        
        console.log('second');

        show = show.split("");
        show.pop();
        show = show.join("");
    } else {
        console.log('third');

        show = show.split("");
        show.push('*');
        show = show.join("");
    }
    document.querySelector('.res').value = show;
};
document.querySelector('.multiply').onclick = multiply;

function plus() {
    isSecond(['-', '/', '*', degree_digit]);
    console.log(isThisSecond, match);
    if (isThisSecond) {

        console.log('first');

        show = show.split("");
        show.pop(); show.push('+');
        show = show.join("");
    } else if (show.split('').reverse()[0] == '+') {
        
        console.log('second');

        show = show.split("");
        show.pop();
        show = show.join("");
    } else {
        console.log('third');

        show = show.split("");
        show.push('+');
        show = show.join("");
    }

    document.querySelector('.res').value = show;
};
document.querySelector('.plus').onclick = plus;

function minus() {
    isSecond(['+', '/', '*', degree_digit]);
    console.log(isThisSecond, match);
    if (isThisSecond) {

        console.log('first');

        show = show.split("");
        show.pop(); show.push('-');
        show = show.join("");
    } else if (show.split('').reverse()[0] == '-') {
        
        console.log('second');

        show = show.split("");
        show.pop();
        show = show.join("");
    } else {
        console.log('third');

        show = show.split("");
        show.push('-');
        show = show.join("");
    }
    
    document.querySelector('.res').value = show;
};
document.querySelector('.minus').onclick = minus;

function equals() {

    document.querySelector('.res').value = ans;
    show = String(ans);
};
document.querySelector('.equals').onclick = equals;