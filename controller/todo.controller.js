
import ToDoModel from '../models/todo.model.js'

export const getToDos = async (req, res) => {

    const toDos = await ToDoModel.find()
    res.send(toDos)

}

export const saveToDo = (req, res) => {
    const { toDo } = req.body

    ToDoModel.create({ toDo })
        .then(data => {
            console.log("saved successfully...");
            res.status(200).send(data)
            
        })
        .catch((error) => {
            console.log(error)
            res.send({ message: "Something went wrong!" })
        })
}





export const updateToDo = (req, res) => {
    const {id} = req.params
    const { toDo } = req.body

    ToDoModel.findByIdAndUpdate(id, {toDo}).then(() => {
       
        res.send("Updated successfully")

    })
    .catch((err) => {console.log(err)
    res.send({error: "Something went wrong!"})})
}



export const DeleteToDo = (req, res) => {
    const {id} = req.params
  

    ToDoModel.findByIdAndDelete(id).then(() => {
       
        res.send("Deleted successfully")

    })
    .catch((err) => {console.log(err)
    res.send({error:"Something went wrong!"})
})

}
