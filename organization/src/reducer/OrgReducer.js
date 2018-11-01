import { ADD, GET_TIME, GET_COUNTRY, EDIT, FILTER, DEACTIVATE, ACTIVATE } from "../constants/actionsTypes";


export function OrgReducer(currentstate={},action)
{
    switch(action.type)
    {
        case ADD:
            const activeList=[...currentstate.activeList]
            activeList.unshift(action.formData)
            return Object.assign({},currentstate,{activeList:activeList})
        case GET_TIME:
            const timeZone=[...currentstate.timeZone]
            return Object.assign({},currentstate,{timeZone:action.timeZone})
        case GET_COUNTRY:
            const countryList=[...currentstate.countryList]
            return Object.assign({},currentstate,{countryList:action.country})
        case EDIT:
            const activeList1=[...currentstate.activeList]
            activeList1[action.index]=action.data
            return Object.assign({},currentstate,{activeList:activeList1})
        case FILTER:
            const newl=action.listType
            return Object.assign({},currentstate,{listType:newl})
        case DEACTIVATE:
            const activeList2=[...currentstate.activeList]
            const deactiveList=[...currentstate.deactiveList]
            let tempList=action.checkedList
            for(let i=0;i<tempList.length;i++)
            {
                deactiveList.push(activeList2[tempList[i]])
            }
            for(let i=tempList.length-1;i>=0;i--)
            {
                activeList2.splice(tempList[i],1)
            }
            return Object.assign({},currentstate,{activeList:activeList2},{deactiveList:deactiveList})
        case ACTIVATE:
            const activeList3=[...currentstate.activeList]
            const deactiveList1=[...currentstate.deactiveList]
            let tempList1=action.checkedList
            for(let i=0;i<tempList1.length;i++)
            {
                activeList3.push(deactiveList1[tempList1[i]])
            }
            for(let i=tempList1.length-1;i>=0;i--)
            {
                deactiveList1.splice(tempList1[i],1)
            }
            return Object.assign({},currentstate,{activeList:activeList3},{deactiveList:deactiveList1})
        default:
            return currentstate
    }

}