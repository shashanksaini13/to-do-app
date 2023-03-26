import axios from 'axios'

const baseUrl = "http://localhost:4000"

const getAllToDo = (setToDo) => {
    axios
        .get(baseUrl)
        .then(({ data }) => {
            console.log('data ---> ', data);
            setToDo(data)
        })
}

const addToDo = (text, date, setText, setDate, setToDo) => {

    axios
        .post(`${baseUrl}/save`, { text, date })
        .then((data) => {
            console.log(data);
            setText("")
            setDate("")
            getAllToDo(setToDo)
        })
        .catch((err) => console.log(err))

}

const updateToDo = (toDoId, text, date, setToDo, setText, setDate, setIsUpdating) => {

    axios
        .post(`${baseUrl}/update`, { _id: toDoId, text, date })
        .then((data) => {
            setText("")
            setDate("")
            setIsUpdating(false)
            getAllToDo(setToDo)
        })
        .catch((err) => console.log(err))

}

const deleteToDo = (_id, setToDo) => {

    axios
        .post(`${baseUrl}/delete`, { _id })
        .then((data) => {
            console.log(data)
            getAllToDo(setToDo)
        })
        .catch((err) => console.log(err))

}


export { getAllToDo, addToDo, updateToDo, deleteToDo }