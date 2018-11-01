import { ADD, EDIT, GET_TIME, GET_COUNTRY, FILTER, DEACTIVATE, ACTIVATE } from "../constants/actionsTypes";

export function addOrg(formData){
    return{
    type:ADD,
    formData:formData
}

}
export function editOrg(index,data){
    return{
    type:EDIT,
    index:index,
    data:data
}
}
export function getTime(timeZone)
{
    return{
        type:GET_TIME,
        timeZone:timeZone
    }
}

export function getCountries(country)
{
    return{
        type:GET_COUNTRY,
        country:country
    }
}
export function filter(listType)
{
    return{
        type:FILTER,
        listType:listType
    }
}
export function deactivate(checkedList)
{
    return{
        type:DEACTIVATE,
        checkedList:checkedList
    }
}
export function activate(checkedList)
{
    return{
        type:ACTIVATE,
        checkedList:checkedList
    }
}



