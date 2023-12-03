function sendMessage() {
    const messageInput = document.getElementById("message-input");
    const chatOutput = document.getElementById("chat-output");

    const message = messageInput.value.trim();
    
    if (message !== "") {
        const newMessage = document.createElement("p");
        newMessage.textContent = message;
        chatOutput.appendChild(newMessage);
        messageInput.value = "";
        chatOutput.scrollTop = chatOutput.scrollHeight;
    }
}