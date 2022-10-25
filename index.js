import {randomWord} from './getrandomword.js';
import {searchLetter} from './serchLetter.js';
import {changeImage} from './changeImage.js';

const humanState = document.getElementsByClassName('humanState')[0];
const currentWord = document.getElementsByClassName('word')[0];
const input = document.getElementsByClassName('input')[0];
const button = document.getElementsByClassName('button')[0];
const spanWrapper = document.getElementsByClassName('spanWrapper')[0];

const rndWord = randomWord();


const spanArray = new Array();

function createElement() {
    let span = document.createElement('span');
    span.innerHTML = '_';
    spanWrapper.append(span);
    return span;
}

for (let i = 0; i < rndWord.length; i++) {
    spanArray.push(createElement());
}


let humanStateImgNumber = 1;
let successCounter = 0;

button.addEventListener('click', () => {
            const indexArray = searchLetter(rndWord, input.value);
            if (indexArray.length !== 0) {
                for (let i = 0; i < indexArray.length; i++) {
                    spanArray[indexArray[i]].innerHTML = input.value;
                    successCounter++;
                }
                if (successCounter === rndWord.length) {
                    document.write('Победа');
                }
            } else {
                changeImage(humanState, ++humanStateImgNumber);
                if (humanStateImgNumber === 4) {
                    document.write(`Game Over!, было загадано слово ${rndWord}`);
                }
            }
}   )
