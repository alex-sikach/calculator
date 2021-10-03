var ans = '0';
var show = '0';
var last;

function clear()
    {
        isRoot = false;
        show = '0';
        ans = show;
        document.querySelector('.res').value = show;

        console.log(ans);
        last = 'clear';
    };
document.querySelector('.action.clear').onclick = clear;

function back()
{ /* <- */
    switch (last)
    {
        case 'root':
            {
                show = ans;
                break;
            };
        default:
            {
                ans = ans.split('');
                ans.pop();
                ans = ans.join('');
            }
    }

    document.querySelector('.res').value = ans;
    if(ans == '')
    {
        document.querySelector('.res').value = '0';
    }
    ans = document.querySelector('.res').value;
    show = ans;
    last = 'back';
};
document.querySelector('.action.back').onclick = back;

const root_digit = '√(';
{
    function numberForRoot()
    {
        show = show.split('');
        show.unshift(root_digit);
        show.push(')');
        show = show.join('');

        document.querySelector('.res').value = show;
    }
}
function root()
{ /* sqrt() */
    numberForRoot();
    last = 'root';
};
document.querySelector('.action.sqrt').onclick = root;

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
    if (ans == '0')
    {
        //if ans = 0 so after click on 8 ans shouldn't become 08
        show = document.querySelector(id).value;
    }
    else
    {
        show += document.querySelector(id).value;
    }
    ans = show;
    document.querySelector('.res').value = show;
    console.log(ans);
    last = 'number';
};

function procents()
{

    ans = document.querySelector('.res').value;
};

function dote()
{

    ans = document.querySelector('.res').value;
};

function divide()
{

    ans = document.querySelector('.res').value;
};

function multiply()
{

    ans = document.querySelector('.res').value;
};

function plus()
{
    
};

function minus()
{

    ans = document.querySelector('.res').value;
};

function equals()
{
    switch (last)
    {
        case 'root': ans = Math.sqrt(ans); break;
    }

    document.querySelector('.res').value = ans;
    show = String(ans);
};
document.querySelector('.equals').onclick = equals;