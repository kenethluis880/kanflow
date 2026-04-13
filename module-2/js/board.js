// =============================================
// KANFLOW - MODULE 2: board.js
// =============================================

function renderBoard() {
  const board = document.getElementById('board');
  board.innerHTML = "";

  columns.forEach(column => {
    const columnEl = createColumn(column);
    const cardList = columnEl.querySelector(".card-list");

    const columnCards = cards.filter(card => card.column === column.id);

    columnCards.forEach(card => {
      const cardEl = createCard(card);
      cardList.appendChild(cardEl);
    });

    // update count
    columnEl.querySelector(".column-count").textContent = columnCards.length;

    board.appendChild(columnEl);
  });
}


// CREATE COLUMN
function createColumn(column) {
  const col = document.createElement("div");
  col.className = "column";

  col.innerHTML = `
    <div class="column-header">
      <span class="column-dot ${column.dot}"></span>
      <h2 class="column-title">${column.title}</h2>
      <span class="column-count">0</span>
    </div>
    <div class="card-list"></div>
  `;

  return col;
}


// CREATE CARD
function createCard(card) {
  const cardEl = document.createElement("div");
  cardEl.className = "card";

  if (card.done) {
    cardEl.classList.add("card-done");
  }

  cardEl.innerHTML = `
    <div class="card-title">${card.title}</div>
    <div class="card-footer">
      <span class="card-tag tag-blue">${card.tag}</span>
    </div>
  `;

  return cardEl;
}