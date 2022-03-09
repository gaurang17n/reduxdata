import {combineReducers} from 'redux'
import {INCREASE_QUANTITY,DECREASE_QUANTITY,ADD_CART,UPDATE_CART,DELETE_CART,GET_ALL_PRODUCT} from '../Actions/Index'

const InitialProduct ={NumberCart:0,Carts:[],Products:[]}

function ToDoProduct(state=InitialProduct,action)
{
    console.log("All products reducer" +action.type)
    switch (action.type) {
       
        case 'GET_ALL_PRODUCT':
            /* console.log("All products get") */
            return{
                ...state,
                Products:action.payload
            }    
            break;
        case 'Add_To_Cart':
            console.log("Cart received")
            return{
                ...state
                /* Products:action.payload */
            }    
                break;
        case 'Update_Cart':
            return{
                ...state,
                Products:action.payload
            }    
                break;
        case 'Delete_Cart':
            return{
                ...state,
                Products:action.payload
                }    
                break;    
        case 'Increse_Quantity':
            return{
                 ...state,
                Products:action.payload
                }    
                break;
        case 'Decrese_Quantity':
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