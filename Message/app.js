// Select DOM elements
const messageList = document.getElementById('messageList');
const messageInput = document.getElementById('messageInput');
const sendButton = document.getElementById('sendButton');

// Messages array to store chat history
let messages = [];

// Function to add message to the chat
function addMessage(sender, text) {
  const messageDiv = document.createElement('div');
  messageDiv.classList.add('message', sender);

  const senderSpan = document.createElement('span');
  senderSpan.classList.add('sender');
  senderSpan.textContent = `${sender}: `;

  const textSpan = document.createElement('span');
  textSpan.classList.add('text');
  textSpan.textContent = text;

  messageDiv.appendChild(senderSpan);
  messageDiv.appendChild(textSpan);

  messageList.appendChild(messageDiv);
}

// Handle the send button click
sendButton.addEventListener('click', function () {
  const newMessage = messageInput.value.trim();

  if (newMessage !== '') {
    // Add the new message to the messages array and display it
    messages.push({ sender: 'user', text: newMessage });
    addMessage('user', newMessage);

    // Clear the input field after sending the message
    messageInput.value = '';
  }
});

// Optionally, you can also send the message by pressing the "Enter" key
messageInput.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    sendButton.click();
  }
});
