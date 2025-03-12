document.addEventListener('DOMContentLoaded', function() {
    const botId = 'BOT_ID'; // Replace with dynamic bot ID
    const logContainer = document.getElementById('logContainer');

    // Simulate fetching logs for the bot
    const logs = fetchLogsForBot(botId);

    // Display logs
    logs.forEach(log => {
        const logEntry = document.createElement('div');
        logEntry.className = 'log-entry';
        logEntry.textContent = `[${log.timestamp}] ${log.message}`;
        logContainer.appendChild(logEntry);
    });
});

function fetchLogsForBot(botId) {
    // Placeholder for fetching logs logic
    // Replace with actual logic to fetch logs from a server or database
    return [
        { timestamp: '2023-10-01 10:00:00', message: 'Bot started successfully.' },
        { timestamp: '2023-10-01 10:05:00', message: 'Error: Failed to connect to Discord API.' },
        { timestamp: '2023-10-01 10:10:00', message: 'Bot reconnected successfully.' }
    ];
}
