document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById('btn');
    const app = document.getElementById('app');

    // Retrieve and parse notes from localStorage, or initialize as an empty array
    let notes = JSON.parse(localStorage.getItem("note-app") || "[]");
    
    // Render all saved notes on page load
    notes.forEach((note) => {
        const element = createNoteElement(note.id, note.content);
        app.insertBefore(element, button);
    });

    // Function to add a new note
    function addNote() {
        console.log('Add Note button clicked'); // Debugging: Check if this logs
        const note = {
            id: Date.now(), // Unique ID for each note
            content: "" // Empty content for a new note
        };

        // Create a new note element and insert it before the button
        const element = createNoteElement(note.id, note.content);
        app.insertBefore(element, button);
        
        notes.push(note); // Add the note object to the notes array
        localStorage.setItem("note-app", JSON.stringify(notes)); // Save to localStorage
    }

    // Function to create a note element
    function createNoteElement(id, content) {
        const textarea = document.createElement('textarea');
        textarea.className = 'note'; // Apply the "note" class for styling
        textarea.value = content;
        textarea.id = id;

        // Double-click to delete a note
        textarea.addEventListener("dblclick", () => {
            const warn = confirm("Do you want to delete this note?");
            if (warn) {
                deleteNote(id); // Pass ID to deleteNote function
            }
        });

        // Update the note content in localStorage as user types
        textarea.addEventListener("input", () => {
            console.log('Textarea updated', id, textarea.value); // Debugging: Check if this logs
            updateNote(id, textarea.value); // Pass ID and new content to updateNote function
        });

        return textarea; // Return the textarea element to be added to the DOM
    }

    // Function to delete a note by its ID
    function deleteNote(id) {
        notes = notes.filter((note) => note.id !== id); // Filter out the note with the given ID
        localStorage.setItem('note-app', JSON.stringify(notes)); // Save the updated array to localStorage

        const element = document.getElementById(id);
        if (element) {
            app.removeChild(element); // Remove the note element from the DOM
        }
    }

    // Function to update a note's content by its ID
    function updateNote(id, content) {
        const target = notes.find((note) => note.id === id); // Find the note by its ID
        if (target) {
            target.content = content; // Update its content
            localStorage.setItem("note-app", JSON.stringify(notes)); // Save to localStorage
        }
    }

    // Attach event listener to the button to add a new note on click
    button.addEventListener("click", addNote);
});
