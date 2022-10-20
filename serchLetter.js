export function searchLetter (word, letterToSearch) {
    const indexArray = new Array();
    for(let i=0; i < word.lengrth; i++ ) {
        if(word[i] === letterToSearch) {
            indexArray.push(i);
        }
    }
    return indexArray;
}