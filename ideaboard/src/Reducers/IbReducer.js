import { ADD_IDEA, DELETE_IDEA, EDIT_IDEA, FILTER_IDEA } from "../Constants/ActionTypes";

export function IbReducer(currentstate={},action)
{
switch(action.type)
{
    case ADD_IDEA:
        //console.log("At rducer")
        const temp=[...currentstate.ideaList]
        temp.push(action.data)
        return Object.assign({},currentstate,{ideaList:temp})
    case DELETE_IDEA:
        //console.log("At rducer")
        const temp1=[...currentstate.ideaList]
        temp1.splice(action.index,1)
        return Object.assign({},currentstate,{ideaList:temp1})
    case EDIT_IDEA:
        //console.log("At rducer")
        const temp2=[...currentstate.ideaList]
        temp2[action.index]=action.data
        return Object.assign({},currentstate,{ideaList:temp2})
    case FILTER_IDEA:
        const temp3=[...currentstate.ideaList]
        if(action.sortType==="sort by title")
        {
          const temp4 =[].concat(temp3).sort((a, b) => a.title > b.title)
            console.log("at reducer of sort",temp4)
            return Object.assign({},currentstate,{ideaList:temp4})
            //console.log("at reducer",temp3)
        }
        else if(action.sortType==="sort by date")
        {
            const temp5=[...currentstate.ideaList]
            temp5.sort((a, b)=>a.date<b.date)
            return Object.assign({},currentstate,{ideaList:temp5})
        }
        else
        {
            return Object.assign({},currentstate)
        } 
       
    default:
        return currentstate
}

}