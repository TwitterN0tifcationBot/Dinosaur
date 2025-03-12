document.getElementById('botSettingsForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const botIcon = document.getElementById('botIcon').value;
    const botName = document.getElementById('botName').value;
    const botDescription = document.getElementById('botDescription').value;
    const botToken = document.getElementById('botToken').value;
    const botActivity = document.getElementById('botActivity').value;

    // Simulate saving settings
    saveBotSettings({
        icon: botIcon,
        name: botName,
        description: botDescription,
        token: botToken,
        activity: botActivity
    });

    alert('Bot settings have been updated!');
});

function saveBotSettings(settings) {
    // Placeholder for saving settings logic
    // Replace with actual logic to save settings to a server or database
    console.log('Saving settings:', settings);
}
