// =============================================
// KANFLOW - MODULE 2: data.js
// =============================================

// COLUMNS
const columns = [
  { id: "todo",       title: "To Do",       dot: "dot-todo" },
  { id: "inprogress", title: "In Progress", dot: "dot-inprogress" },
  { id: "review",     title: "Review",      dot: "dot-review" },
  { id: "done",       title: "Done",        dot: "dot-done" },

  // ✅ NEW COLUMN
  { id: "blocked",    title: "Blocked",     dot: "dot-blocked" },
];

// CARDS
const cards = [
  { id: 1, title: "Research event-driven patterns",  column: "todo",       tag: "Research", done: false },
  { id: 2, title: "Set up project folder structure", column: "todo",       tag: "Setup",    done: false },

  // ✅ MOVED example (shows column change working)
  { id: 3, title: "Write HTML skeleton",             column: "done",       tag: "HTML",     done: false },

  { id: 4, title: "Style the board layout with CSS", column: "inprogress", tag: "CSS",      done: false },
  { id: 5, title: "Link JS files to index.html",     column: "inprogress", tag: "JS",       done: false },
  { id: 6, title: "Plan Kanban board modules",       column: "done",       tag: "Planning", done: true },

  // ✅ NEW CARD (UPDATED NAME)
  { id: 7, title: "Kenneth", column: "review", tag: "Feature", done: false },

  // ✅ TEST CARD FOR NEW COLUMN
  { id: 8, title: "Fix critical bug", column: "blocked", tag: "Bug", done: false },
];