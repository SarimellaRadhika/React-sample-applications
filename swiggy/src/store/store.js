import {createStore, combineReducers} from 'redux';
import {foodReducer as parentObject} from '../reducers/foodReducer'
let initialState={
    parentObject:{
                veg:[
                    {path:"andhra bhojanam.jpg",name:"andhra bhojanam",cost:20,ordered_count:0},
                    {path:"brinjal curry.jpg",name:"brinjal curry",cost:30,ordered_count:0},
                    {path:"full meals.jpg",name:"full meals",cost:45,ordered_count:0},
                    {path:"fruit salad.jpg",name:"fruit salad",cost:50,ordered_count:0},
                    {path:"south indian thali.jpg",name:"south indian thali",cost:30,ordered_count:0},
                    {path:"veg biryani.jpg",name:"veg biryani",cost:55,ordered_count:0}
                ],
                nonveg:[
                    {path:"1.jpg",name:1,cost:120,ordered_count:0},
                    {path:"2.jpg",name:2,cost:130,ordered_count:0},
                    {path:"3.jpg",name:3,cost:145,ordered_count:0},
                    {path:"4.jpg",name:4,cost:150,ordered_count:0},
                    {path:"5.jpg",name:5,cost:130,ordered_count:0},
                    {path:"6.jpg",name:6,cost:155,ordered_count:0},
                    {path:"7.jpg",name:7,cost:145,ordered_count:0},
                    {path:"8.jpg",name:8,cost:150,ordered_count:0},
                    {path:"9.jpg",name:9,cost:130,ordered_count:0},
                    {path:"10.jpg",name:10,cost:155,ordered_count:0}
                ],
                tiffins:[
                    {path:"1.jpg",name:1,cost:120,ordered_count:0},
                    {path:"2.jpg",name:2,cost:130,ordered_count:0},
                    {path:"3.jpg",name:3,cost:145,ordered_count:0},
                    {path:"4.jpg",name:4,cost:150,ordered_count:0},
                    {path:"5.jpg",name:5,cost:130,ordered_count:0},
                    {path:"6.jpg",name:6,cost:155,ordered_count:0},
                    {path:"7.jpg",name:7,cost:145,ordered_count:0},
                    {path:"8.jpg",name:8,cost:150,ordered_count:0},
                    {path:"9.jpg",name:9,cost:130,ordered_count:0},
                    {path:"10.jpg",name:10,cost:155,ordered_count:0}
                ],
                snacks:[
                    {path:"1.jpg",name:1,cost:120,ordered_count:0},
                    {path:"2.jpg",name:2,cost:130,ordered_count:0},
                    {path:"3.jpg",name:3,cost:145,ordered_count:0},
                    {path:"4.jpg",name:4,cost:150,ordered_count:0},
                    {path:"5.jpg",name:5,cost:130,ordered_count:0},
                    {path:"6.jpg",name:6,cost:155,ordered_count:0},
                    {path:"7.jpg",name:7,cost:145,ordered_count:0},
                    {path:"8.jpg",name:8,cost:150,ordered_count:0},
                    {path:"9.jpg",name:9,cost:130,ordered_count:0},
                    {path:"10.jpg",name:10,cost:155,ordered_count:0}
                ]
            }
}
export let store = createStore( combineReducers ({parentObject}),  initialState)