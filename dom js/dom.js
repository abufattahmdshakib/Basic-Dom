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

document.getElementById('golden').addEventListener('click', function () {
    document.body.style.backgroundColor = 'goldenrod';

})

document.getElementById('btn-make-color').addEventListener('click', function () {
    document.body.style.background = 'red';
})

document.getElementById('btn-update').addEventListener('click', function () {
    const nameInput = document.getElementById('input-name');
    const name = nameInput.value;
    const finalupdate = document.getElementById('update-text');
    finalupdate.innerText = name;
})