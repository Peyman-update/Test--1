
function MyFunction() {

    let mytext1;
    mytext1 = document.getElementById('mytext').value;
    let result;
    result = document.getElementById('result');
    let input = document.getElementById('Pey');


    if (mytext1.length < 20) {

        result.innerHTML = mytext1.length;

    } else {

        result.innerHTML = 'This Text is long';
        input.innerHTML = document.getElementById('mytext').value;
        document.getElementById('mytext').value = '';

    }

}











