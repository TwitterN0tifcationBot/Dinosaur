document.getElementById('commandBuilderForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const commandName = document.getElementById('commandName').value;
    const commandDescription = document.getElementById('commandDescription').value;
    const commandOptions = document.getElementById('commandOptions').value;

    try {
        const options = JSON.parse(commandOptions);

        // Simulate creating a command
        createSlashCommand({
            name: commandName,
            description: commandDescription,
            options: options
        });

        alert('Slash command has been created!');
    } catch (error) {
        alert('Invalid JSON format for command options. Please try again.');
    }
});

function createSlashCommand(command) {
    // Placeholder for creating a slash command logic
    // Replace with actual logic to create a slash command on a server or API
    console.log('Creating slash command:', command);
}
