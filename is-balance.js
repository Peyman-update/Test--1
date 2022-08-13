




function MyFunction() {

    let mytext1;
    mytext1 = document.getElementById('mytext').value;
    let result1;
    result1 = document.getElementById('result');

    let condition = mytext1.length < 10 ? result1.innerHTML = mytext1.length : result1.innerHTML = 'The String is Long';

}








