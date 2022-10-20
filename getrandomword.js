const words = ['собака','кот','мышь','енот','хомяк','черепаха','кролик','шиншила','крыса'];


export function randomWord () {
    const getWord = words[Math.floor(Math.random() * words.length)];
    return getWord;
}
