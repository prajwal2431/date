function moveNoButton() {
    const noButton = document.getElementById('noButton');

    // Generate random position within the window
    const xPos = Math.random() * (window.innerWidth - noButton.clientWidth);
    const yPos = Math.random() * (window.innerHeight - noButton.clientHeight);

    // Set new position
    noButton.style.position = 'absolute';
    noButton.style.left = xPos + 'px';
    noButton.style.top = yPos + 'px';
}

function showAlert(response) {
    if (response === 'Yes') {
        alert('That\'s wonderful! Looking forward to our romantic date!');
    } else {
        alert('Maybe next time. Take your time!');
    }
}
