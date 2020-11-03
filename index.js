let input = document.querySelector('#input');
let x;

input.addEventListener('input', () => x = parseInt(input.value));

let button = document.querySelector('button');
let span = document.querySelector('#answer');
button.addEventListener('click', () => {
    let answer;
    if (x) {
        answer = convertToRoman(x);
        span.innerText = answer;
    } else {
        span.innerText = 'enter number first';
        span.style.color = 'tomato';
    }
    input.value = '';
    x = undefined;
});

function convertToRoman(num) {
    let roman = [{
        '1': 'I',
        '2': 'II',
        '3': 'III',
        '4': 'IV',
        '5': 'V',
        '6': 'VI',
        '7': 'VII',
        '8': 'VIII',
        '9': 'IX'
    }, {
        '10': 'X',
        '20': 'XX',
        '30': 'XXX',
        '40': 'XL',
        '50': 'L',
        '60': 'LX',
        '70': 'LXX',
        '80': 'LXXX',
        '90': 'XC'
    }, {
        '100': 'C',
        '200': 'CC',
        '300': 'CCC',
        '400': 'CD',
        '500': 'D',
        '600': 'DC',
        '700': 'DCC',
        '800': 'DCCC',
        '900': 'CM',
    }, {
        '1000': 'M',
        '2000': 'MM',
        '3000': 'MMM'
    }]

    // find div
    let temp = num;
    let div = 1;
    while (temp >= 10) {
        div *= 10;
        temp = Math.floor(temp / 10);
    }

    // separate in 10 nums
    let arr = [];
    while (div > 1) {
        arr.push(Math.floor(num / div) * div);
        num %= div;
        div /= 10;
    }
    arr.push(num);

    let romstr = '';
    for (let i = arr.length - 1, j = 0; i >= 0; i--, j++) {
        if (roman[i].hasOwnProperty(arr[j]))
            romstr += roman[i][arr[j]];
    }

    console.log(romstr);
    return romstr;
}