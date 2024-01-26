function showPuppyModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "block";
}

function closeModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
}

function goToNext() {
    window.location.href = "valentine.html";
}
function goToNext() {
    // Hide modal with puppy GIF
    closeModal();
    
    // Show "Will you be my valentine?" message
    document.getElementById("valentineMessage").style.display = "block";
}
