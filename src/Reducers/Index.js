import {combineReducers} from 'redux'
import {INCREASE_QUANTITY,DECREASE_QUANTITY,ADD_CART,UPDATE_CART,DELETE_CART,GET_ALL_PRODUCT} from '../Actions/Index'

const InitialProduct ={NumberCart:0,Carts:[],Products:[]}

function ToDoProduct(state=InitialProduct,action)
{
    console.log("All products" +JSON.stringify(action))
    switch (action.type) {
       
        case 'GET_ALL_PRODUCT':
            console.log("All products get")
            return{
                ...state,
                Products:action.payload
            }    
            break;
        case 'ADD_CART':
            return{
                ...state,
                Products:action.payload
            }    
                break;
        case 'UPDATE_CART':
            return{
                ...state,
                Products:action.payload
            }    
                break;
        case 'DELETE_CART':
            return{
                ...state,
                Products:action.payload
                }    
                break;    
        case 'INCREASE_QUANTITY':
            return{
                 ...state,
                Products:action.payload
                }    
                break;
        case 'DECREASE_QUANTITY':
            return{
                ...state,
                Products:action.payload
                }    
                break;    
        default:
            console.log("Default state call")
            return state;
            break;
    }
}

const shopeApp=combineReducers({
    _ToDoProduct:ToDoProduct

})

export default shopeApp