const form = document.getElementById('chat-form');
const chats = document.getElementById('chats');

form.addEventListener('submit',(e) =>{
    e.preventDefault();
    const chat = form.elements.message.value;
    const messageElement = document.createElement('div');
    messageElement.innerText = chat;
    chats.appendChild(messageElement);
    message.value = '';

} )

