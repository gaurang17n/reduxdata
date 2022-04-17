import axios from 'axios';


let url = 'http://localhost:3005'

export default function api(endpoint,method='GET',body)
{
    console.log("Body data" + JSON.stringify(body));
    
    return axios({
        method,
        url:`${url}/${endpoint}`,
        data:body,
        headers: { 'Content-Type': 'application/json' },
    }).catch(err =>{
        console.log("Error" + err)
    })
}
