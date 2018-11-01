import { ADD_PROJECT, ADD_STAGE, ADD_TASK } from "../constants/ActionTypes";

export function addProject(pdata)
{
    console.log("at acion creator")
    return{
    type:ADD_PROJECT,
    pdata:pdata
    }
}
export function addStage(sdata,index)
{
    console.log("at acion creator")
    return{
    type:ADD_STAGE,
    sdata:sdata,
    index:index
    }
}
export function addTask(tdata,pid,sid)
{
    console.log("at acion creator")
    return{
    type:ADD_TASK,
    tdata:tdata,
    pid:pid,
    sid:sid
    }
}