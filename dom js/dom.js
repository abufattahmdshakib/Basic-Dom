console.log('extranal file')
function makeBackgroundColor() {
    document.body.style.backgroundColor = 'red';
}
function makeBackgroundColor2() {
    document.body.style.backgroundColor = 'green';
}
const makeBlue = document.getElementById('blue')
makeBlue.onclick = function makeBlue() {
    document.body.style.backgroundColor = 'blue';
}