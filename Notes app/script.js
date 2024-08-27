let noteContainer = document.querySelector('#Notes-Container');
let addButton = document.querySelector("#Create-button");


function show() {
    noteContainer.innerHTML = localStorage.getItem('notes');
}
show()
function Storage() {
    localStorage.setItem("notes", noteContainer.innerHTML);
}



addButton.addEventListener('click', function () {
    noteContainer.innerHTML += `
        <div class="note-field w-[100vw] max-w-[500px] min-h-[250px] flex justify-center items-center">
            <p contenteditable="true" class="input-box relative w-[90vw] max-w-[500px] min-h-[175px] bg-white text-black m-[2vmin] p-[2vmin] rounded-md"></p>
            <i class="delete-btn ri-delete-bin-6-line text-[3vmin] p-[1vmin]"></i>
        </div>`;
});

noteContainer.addEventListener('click', function (event) {
    if (event.target.classList.contains('delete-btn')) {
        // Remove the note field
        event.target.parentElement.remove();
        Storage()
    } else if (event.target.tagName === "P") {
        notes = document.querySelectorAll('.input-box');
        notes.forEach(element => {
            element.onkeyup = function () {
                Storage()
            }
        });

    }
});