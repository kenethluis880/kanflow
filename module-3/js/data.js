// =============================================
// KANFLOW - MODULE 2: data.js
// =============================================

// COLUMNS
const columns = [
  { id: "todo",       title: "To Do",       dot: "dot-todo"       },
  { id: "inprogress", title: "In Progress", dot: "dot-inprogress" },
  { id: "review",     title: "Review",      dot: "dot-review"     },
  { id: "done",       title: "Done",        dot: "dot-done"       },

  // NEW COLUMN
  { id: "blocked",    title: "Blocked",     dot: "dot-blocked"    },
];

// CARDS
const cards = [
  { id: 1, title: "Research event-driven patterns",  column: "todo",       tag: "Research", done: false },
  { id: 2, title: "Set up project folder structure", column: "todo",       tag: "Setup",    done: false },

  // MOVED CARD (todo → review)
  { id: 3, title: "Kidmnao",             column: "review",     tag: "HTML",     done: false },

  { id: 4, title: "Style the board layout with CSS", column: "inprogress", tag: "CSS",      done: false },
  { id: 5, title: "Link JS files to index.html",     column: "inprogress", tag: "JS",       done: false },
  { id: 6, title: "Plan Kanban board modules",       column: "done",       tag: "Planning", done: true  },

  // NEW CARD
  { id: 7, title: "Test drag and drop feature",      column: "review",     tag: "Test",     done: false },

  // OPTIONAL: card in new column
  { id: 8, title: "Fix login bug",                   column: "blocked",    tag: "Bug",      done: false }
];