import { useEffect, useState } from "react";
import ToDo from "./components/ToDo";
import { addToDo, getAllToDo, updateToDo, deleteToDo } from "./utils/HandleApi";


function App() {

  const [toDo, setToDo] = useState([])
  const [text, setText] = useState("")
  const [date, setDate] = useState("")
  const [isUpdating, setIsUpdating] = useState(false)
  const [toDoId, setToDoId] = useState("")

  useEffect(() => {
    getAllToDo(setToDo)
  }, [])

  const updateMode = (_id, text, date) => {
    setIsUpdating(true)
    setDate(date)
    setText(text)
    setToDoId(_id)
  }

  return (
    <div className="App">

      <div className="container">

        <h1>ToDo App</h1>

        <div className="top">
          <input
            type="text"
            placeholder="Add ToDo"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />

          <input
            type="text"
            placeholder="Add Due Date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />

          <div
            className="add"
            onClick={isUpdating ?
              () => updateToDo(toDoId, text, date, setToDo, setText, setDate, setIsUpdating)
              : () => addToDo(text, date, setText, setDate, setToDo)}>
            {isUpdating ? "Update" : "Add"}
          </div>

        </div>

        <div className="list">

          {toDo.sort(function (a, b) {
            return new Date(a.date) - new Date(b.date);
          }).map((item) => <ToDo
            key={item._id}
            text={item.text}
            date={item.date}
            updateMode={() => updateMode(item._id, item.text, date)}
            deleteToDo={() => deleteToDo(item._id, setToDo)} />)}

        </div>

      </div>

    </div>
  );
}

export default App;