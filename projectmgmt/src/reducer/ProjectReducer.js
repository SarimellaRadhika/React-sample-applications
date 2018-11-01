import { ADD_PROJECT, ADD_STAGE, ADD_TASK } from "../constants/ActionTypes";

export function ProjectReducer(currentstate={},action)
{
    switch(action.type)
    {
        case ADD_PROJECT:
           // console.log("at reducer",action.pdata)
            const ProjectList=[...currentstate.ProjectList]
            ProjectList.push(action.pdata)     
            console.log("at projectadd reducer",ProjectList[0])   
            return Object.assign({},currentstate,{ProjectList:ProjectList})
        case ADD_STAGE:
            const temp=[...currentstate.ProjectList]
            temp[action.index].stages.push(action.sdata)
            console.log("at stageadd reducer",temp[action.index].stages)
            return Object.assign({},currentstate,{ProjectList:temp})
        case ADD_TASK:
            console.log("at task reducer pid==",action.pid)
            console.log("at task reducer sid===",action.sid)
            const temp1=[...currentstate.ProjectList]
            temp1[action.pid].stages[action.sid].tasks.push(action.tdata)
            console.log("at taskadd reducer tasks list-------",temp1[action.pid].stages[action.sid].tasks)
            console.log("at list reducer total projectlist",temp1)
            return Object.assign({},currentstate,{ProjectList:temp1})

        default:
            return currentstate
    }
}