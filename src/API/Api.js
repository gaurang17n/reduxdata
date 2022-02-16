import axios from 'axios';


let url = 'http://localhost:3005'

export default function api(endpoint,method='GET',body)
{
    console.log("Body dat" + JSON.stringify(body));
    
    return axios({
        method,
        url:`${url}/${endpoint}`,
        data:{"name":"Cheese Pizza","price":333,"qty":1,"url":"https://cdn.pixabay.com/photo/2017/12/10/14/47/pizza-3010062_960_720.jpg"},
        headers: { 'Content-Type': 'application/json' },
    }).catch(err =>{
        console.log("Error" + err)
    })
}
