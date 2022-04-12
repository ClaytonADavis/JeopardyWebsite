fetch('options.json')
    .then(response => {
        return response.json();
    })
    .then(data => {
        addOptions(data);
    })
    .catch(function (err) {
        console.log('Fetch problem: ' + err.message);
    });
function addOptions(data) {
    for (let i = 0; i < data.length; i++) {
        let option = document.createElement('option');
        option.value = 'data' + i;
        option.innerHTML = data[i].title + ' (' + data[i].year + ')';
        document.querySelector('optgroup').appendChild(option);
    }
}
const submitBut = document.querySelector('input[type = submit]');
function enabler() {
    let textboxes = document.querySelectorAll('input[type = text]');
    let commentBox = document.querySelector('textarea');
    for (let i = 0; i < textboxes.length; i++) {
        if (textboxes[i].value !== '' && commentBox.value !== '') {
            submitBut.disabled = false;
        }
        else {
            submitBut.disabled = true;
        }
    }
}
function stop(event){
    event.preventDefault();
}
const clueBut = document.querySelector("#clue");
function clueButton() {

    clueBut.textContent = "Will Display new clue";
}
//const subBut = document.querySelector('input[type = submit');
document.addEventListener('keyup', enabler);
submitBut.addEventListener('click', stop);
clueBut.addEventListener('click', clueButton);
