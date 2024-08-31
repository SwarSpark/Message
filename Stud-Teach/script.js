document.addEventListener('DOMContentLoaded', () => {
    const roleSelector = document.getElementById('role-selector');
    const messageInput = document.getElementById('message-input');
    const sendButton = document.getElementById('send-button');
    const messagesContainer = document.getElementById('messages');

    sendButton.addEventListener('click', () => {
        const role = roleSelector.value;
        const messageText = messageInput.value.trim();

        if (messageText) {
            // Create a new message element
            const messageElement = document.createElement('div');
            messageElement.className = `message ${role}`;
            messageElement.textContent = messageText;

            // Add the message to the container
            messagesContainer.appendChild(messageElement);

            // Clear the input field
            messageInput.value = '';

            // Scroll to the bottom of the messages container
            messagesContainer.scrollTop = messagesContainer.scrollHeight;
        }
    });

    // Allow pressing Enter to send a message
    messageInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            sendButton.click();
        }
    });
});
