const colorItems = document.querySelectorAll(".color-item");

// Creates temporary textarea element,
// puts color code inside it,
// copies the code to clipboard
// and removes the temporary element
function copyColorCodeToClipboard() {
    tempTextArea = document.createElement("textarea");
    tempTextArea.value = this.dataset.colorCode;
    // console.log(this.dataset.colorCode);
    document.body.appendChild(tempTextArea);
    tempTextArea.select();
    tempTextArea.setSelectionRange(0, 99999);
    document.execCommand("copy");
    document.body.removeChild(tempTextArea);
}

colorItems.forEach(colorItem => {
    colorItem.addEventListener("click", copyColorCodeToClipboard);
});