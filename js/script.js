const form = document.querySelector('#messageForm');
const message_display = document.querySelector('#messages');
const message = document.querySelector('#message-input')

console.log(message_display)
console.log(message)
console.log(form)  

const chatDisplay = ()=>{
  form.preventDefault();
  const li = document.createElement("li")
  li.textContent = messsage.value
  li.classList.add('msg my')
  message_display.appendChild(li)
  console.log(message_display)
  console.log(message)
  console.log(form)  
  console.log(li)  
}

form.addEventListener("submit", chatDisplay)