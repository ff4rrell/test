const message = document.getElementById('alert');
const inputText = document.getElementById('inputText');
message.addEventListener('click', () => {
    alert(inputText.value)
});