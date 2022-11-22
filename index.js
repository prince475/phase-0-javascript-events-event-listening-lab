//creating event listener using addEventListener using  event to listen for, and a callback function to "handle" the event

function addingEventListener() {
    const input = document.getElementById('button');
    input.addEventListener('click', function() {
    alert('I was clicked!');
});
}
//you will need to call the outer function in index.js to execute addEventListener() and activate the event listener
addingEventListener()
