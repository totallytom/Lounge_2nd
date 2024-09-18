// Get the elements on line 65
const dateElement = document.querySelector('#header-profile-title');
const numberElement = document.querySelector('#current-date + span');

// Update the date and number automatically
function updateDate() {
  const currentDate = new Date();
  const day = currentDate.getDate();
  const month = currentDate.toLocaleString('default', { month: 'long' });
  const year = currentDate.getFullYear();

  dateElement.innerHTML = `${month} ${day} | POINTS Amount`;
  numberElement.textContent = day;
}

// Call the updateDate function every day
setInterval(updateDate, 86400000); // 86400000 milliseconds = 1 day

// Call the updateDate function initially
updateDate();