// js/card.js
function addCard() {
    
// Step 1 - Get the input element and read its value
const input = document.getElementById('card-input');
const title = input.value.trim();
// Step 2 - Do nothing if the input is empty
if (title === '') return;
// Step 3 - Create a new card object
// New cards always go to the To Do column
const newCard = {
id: Date.now(), // unique id using current timestamp
title: title,
column: 'todo',
tag: 'Task',
done: false,
};
// Step 4 - Add the new card to the data array
cards.push(newCard);
// Step 5 - Clear the input field
input.value = '';
// Step 6 - Re-render the board to show the new card
renderBoard();
}
function deleteCard(id) {
// Find the index of the card with the matching id
const index = cards.findIndex(function(card) {
return card.id === id;
});
// If found, remove it from the array
if (index !== -1) {
cards.splice(index, 1);
}
// Re-render the board
renderBoard();
}