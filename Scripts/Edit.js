document.getElementById('saveButton').addEventListener('click', function() {
    var content = document.getElementById('contenteditable').innerHTML;
    saveContentToLocalStorage('contenteditable', content);
    alert('Content saved successfully!');
});

document.getElementById('saveButton').addEventListener('click', function() {
    var content = document.getElementById('editableContent').innerHTML;
    saveContentToLocalStorage('editableContent', content);
    alert('Content saved successfully!');
});

function saveContentToLocalStorage(key, content) {
    localStorage.setItem(key, content);
}

window.onload = function() {
    let storedContentEditable = localStorage.getItem('contenteditable');
    let storedEditableContent = localStorage.getItem('editableContent');
    if (storedContentEditable) {
        document.getElementById('contenteditable').innerHTML = storedContentEditable;
    }
    if (storedEditableContent) {
        document.getElementById('editableContent').innerHTML = storedEditableContent;
    }
};
