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
            dispatch(GetAllProducts(res.data))
        })
    } 
}

export const InsertData =(item)=>
{
    
    console.log("Items are"+item)
    let item1={
        "author":item.author,
        "title":item.title
    }
    return (dispatch)=> {
        
        return api('cart','POST',item1).then((res)=>{
            console.log("Insert Data Are" + res)
            dispatch(AddToCart(res.data))


        })
    }
}

export function GetAllProducts(payload)
{
   /*  console.log("GET_ALL_PRODUCT" + payload) */
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