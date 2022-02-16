import api from '../API/Api'
export const GET_ALL_PRODUCT = 'GET_ALL_PRODUCT';
export const Add_To_Cart = 'Add_To_Cart';
export const Increse_Quantity = 'Increse_Quantity';
export const Decrese_Quantity = 'Decrese_Quantity';
export const Get_Number_Cart = 'Get_Number_Cart';
export const Delete_Cart = 'Delete_Cart';
export const Update_Cart = 'Update_Cart';


export const FetchProductRequest = () => 
{
    return (dispatch) => {
        return api('products','GET',null).then((res)=>{
            console.log(res.data)
            dispatch(GetAllProducts(res.data))
        })
    } 
}
/* export const FetchProductRequest = (demoitem) => 
{
    console.log("demo item api" + JSON.stringify(demoitem))
    return (dispatch) => {
        return api('cart','POST',demoitem).then((res)=>{
            console.log("data submited in cart.."+res)
            // dispatch(AddToCart(res.data))
        })
    } 
} */

export function GetAllProducts(payload)
{
    return {
        type:'GET_ALL_PRODUCT' ,
        payload
    }
}
export function AddToCart(payload)
{
    return {
        type:'Add_To_Cart' ,
        payload
    }
}
export function IncreseQuantity(payload)
{
    return {
        type:'Increse_Quantity' ,
        payload
    }
}
export function DecreseQuantity(payload)
{
    return {
        type:'Decrese_Quantity' ,
        payload
    }
}
export function UpdateCart(payload)
{
    return {
        type:'Update_Cart' ,
        payload
    }
}
export function DeleteCart(payload)
{
    return {
        type:'Delete_Cart' ,
        payload
    }
}

export function GetNumberCart(payload)
{
    return {
        type:'Get_Number_Cart' ,
        payload
    }
}