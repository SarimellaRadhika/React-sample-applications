import { ADD_TODO, DELETE_TODO, COMPLETED, FILTER, EDIT_PRIORITY } from "../constants/ActionTypes";

export function todolistReducer(currentstate={},action)
{
    switch(action.type)

    {
        case ADD_TODO:
            const todoList=[...currentstate.todoList]
            todoList.push(action.input_Data)        
            return Object.assign({},currentstate,{todoList:todoList})
        case DELETE_TODO:
            const todoList1=[...currentstate.todoList]
            todoList1.splice(action.index,1)
            return Object.assign({},currentstate,{todoList:todoList1})
        case COMPLETED:
            const todoList2=[...currentstate.todoList]
            const completedList=[...currentstate.completedList]
            completedList.push(todoList2[action.index])
            todoList2.splice(action.index,1)
            return Object.assign({},currentstate,{todoList:todoList2},{completedList:completedList})
        case FILTER:
            const newl=action.listType
            console.log("infilter",newl)
            return Object.assign({},currentstate,{listType:newl})
        case EDIT_PRIORITY:
            const todoList3=[...currentstate.todoList]
            todoList3[action.index].priority=action.priority
            return Object.assign({},currentstate,{todolist:todoList3})

        default:
            return currentstate
        
    }
}