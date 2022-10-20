export function changeImage (img, imageNumber) {
    console.log(imageNumber)
    if (imageNumber <= 4) {
        img.src =`img/${imageNumber}.png`;
    }
}