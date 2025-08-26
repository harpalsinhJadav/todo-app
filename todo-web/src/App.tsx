import { useState } from "react";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [text, setText] = useState("");
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState("");

  const handleAdd = (e) => {
    e.preventDefault();
    setText("");
  };

  const handleEditSave = (id) => {
    setEditId(null);
    setEditText("");
  };

  return (
    <div style={{ maxWidth: 600, margin: "2rem auto" }}>
      <h1>Todo Web</h1>

      <form onSubmit={handleAdd}>
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add a task..."
        />
        <button type="submit">Add</button>
      </form>

      <ul>
        {tasks.map((t) => (
          <li key={t.id}>
            <input
              type="checkbox"
              checked={t.done}
              onChange={() => setTasks((prev) => {})}
            />

            {editId === t.id ? (
              <>
                <input
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                />
                <button onClick={() => handleEditSave(t.id)}>Save</button>
                <button onClick={() => setEditId(null)}>Cancel</button>
              </>
            ) : (
              <>
                <span style={{ textDecoration: t.done ? "line-through" : "" }}>
                  {t.text}
                </span>
                <button onClick={() => { setEditId(t.id); setEditText(t.text); }}>
                  Edit
                </button>
                <button onClick={() => setTasks((prev) => {})}>
                  Delete
                </button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
