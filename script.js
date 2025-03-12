document.getElementById('getStartedBtn').addEventListener('click', function() {
    const token = prompt('Please enter your bot token:');
    if (token) {
        // Simulate token validation
        if (validateToken(token)) {
            alert('Token is valid! Logging in...');
            // Logic to log in to the bot goes here
        } else {
            alert('Invalid token. Please try again.');
        }
    }
});

function validateToken(token) {
    // Placeholder for token validation logic
    // Replace with actual validation logic
    return token === 'correct-token'; // Example: replace 'correct-token' with actual token validation
}
