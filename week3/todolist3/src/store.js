import {v4 as uuidv4} from "uuid"

export const todos = [
    {id:uuidv4(), text:"put dogs outside", isComplete: true},
    {id:uuidv4(), text:"make coffee", isComplete: true},
    {id:uuidv4(), text:"turn on computer", isComplete: false},
    {id:uuidv4(), text:"bring in dogs", isComplete: false}
]
export default todos