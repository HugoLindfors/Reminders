// HTML Elements
const displayCreateNewReminderFormButton = document.getElementById("displayCreateNewReminderFormButton");
const createNewReminderForm = document.getElementById("createNewReminderForm");
const createNewReminderButton = document.getElementById("createNewReminderButton");
const newReminderTitle = document.getElementById("newReminderTitle");
const remindersContainer = document.getElementById("remindersContainer");

// Functions
let collectDataFromCreateNewReminderForm = () => {
  let newReminderTitleValue = newReminderTitle.value.toUpperCase();
  let newReminderCompletionStatusValue = false;
  remindersContainer.innerHTML += `
    <div class="row reminder">
      <div class="col-6 reminderTitle">${newReminderTitleValue}</div>
      <div class="col-6 reminderCompletionStatus">
        <input type="checkbox" ${newReminderCompletionStatusValue && "checked"} />
      </div>
    </div>
  `;
};

// Event Listeners
displayCreateNewReminderFormButton.addEventListener("click", () => {
  createNewReminderForm.classList.remove('d-none');
  displayCreateNewReminderFormButton.classList.add('d-none');
});

createNewReminderButton.addEventListener("click", () => {
  displayCreateNewReminderFormButton.classList.remove('d-none');
  createNewReminderForm.classList.add('d-none');
  collectDataFromCreateNewReminderForm();
});