import { createStore } from 'redux';

// Define initial state
const initialState = {
    counter: 0,
    showCounter: true
};

// Define reducer function
const counterReducer = (state = initialState, action) => {
    if (action.type === 'increment') {
        return {
            counter: state.counter + 1,
            showCounter: state.showCounter
        };
    }
    if (action.type === 'increase') {
        return {
            counter: state.counter + action.amount,
            showCounter: state.showCounter
        };
    }
    if (action.type === 'decrement') {
        return {
            counter: state.counter - 1,
            showCounter: state.showCounter
        };
    }
    if (action.type === 'toggle') {
        return {
            showCounter: !state.showCounter,
            counter: state.counter 
        };
    }
    return state;
};

// Create Redux store
const store = createStore(counterReducer);

export default store;



// import {createStore} from 'redux';

// const initialState={counter:0,showCounter:true};
// const counterReducer=(state={initialState},action)=>{
//     if(action.type==='increment'){
//         return({
//             counter:state.counter+1,
//             showCounter:state.showCounter
//         });
//     }
//     if(action.type==='increase'){
//         return({
//             counter:state.counter+action.amount,
//             showCounter:state.showCounter
//         })
//     }


//     if(action.type==='decrement'){
//         return{
//             counter:state.counter-1,
//             showCounter:state.showCounter
//         }
//     }
//     if(action.type==='toggle'){
//         return({
//             showCounter:!state.showCounter,
//             // conter:state.counter,
//         })
//     }
//     else{
//         return state;
//     }
// }
// const store=createStore(counterReducer);

// export default store;