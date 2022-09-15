import axios from 'axios'

export function getAllProducts(){
    return async function(dispatch){
        let json = await axios.get('https://api-movilgates.herokuapp.com/products');
        return dispatch({
            type: 'GET_PRODUCTS',
            payload: json.data
        })
    }
}

export function searchName(payload) {
    return async function (dispatch) {
         try {
            var json = await axios.get("https://api-movilgates.herokuapp.com/products?name=" + payload)
            return dispatch ({
                type: 'SEARCH_NAME',
                payload: json.data
            })
         } catch (error) {
             console.log(error)
             
        }
    }
}

export function getPhonesById(id){
    return async function (dispatch){
        try{
            let json= await axios.get(`https://api-movilgates.herokuapp.com/products/phones/${id}`)
            return dispatch({
                type: "GET_PHONES_BY_ID",
                payload: json.data
        })
        } catch(error){
            console.log(error)
        }
    }
}
export function getTabletsById(id){
    return async function (dispatch){
        try{
            let json= await axios.get(`https://api-movilgates.herokuapp.com/products/tablets/${id}`)
            return dispatch({
                type:"GET_TABLETS_BY_ID",
                payload:json.data
            })
        } catch(error){
            console.log(error)
        }
       
    }
}
export function getNotebooksById(id){
    return async function (dispatch){
        try{
            let json= await axios.get(`https://api-movilgates.herokuapp.com/products/notebooks/${id}`)
            return dispatch({
                type:"GET_NOTEBOOKS_BY_ID",
                payload:json.data
        })
        } catch(error){
            console.log(error)
        }
    }
}
export function getClean(payload){
    return{
        type:"GET_CLEAN",
        payload
    }
}

export function getFilterByCategories(payload){
    return{
        type:"GET_FILTER_BY_CATEGORIES",
        payload
    }
}
export function getFilterByRam(payload){
    return{
        type:"GET_FILTER_BY_RAM",
        payload
    }
}
// export const getProductsByName=(search,filters)=> async dispatch =>{
//     let filterString='';
//     for (const filter in filters) {
//         filterString+='&'+filter+'='+filters[filter];
//     }
//     //BUENA MANERA DE UTILIZAR EL AXIOS
//     await axios.get("http://localhost:3001/products?"+'name='+search.toLowerCase()+filterString)
//     .then(res => dispatch ({
//         type:GET_PRODUCTS_BY_NAME,
//         payload: res
//     }))
//     .catch((err)=> dispatch ({
//         type:GET_ERROR,
//         payload: err.response,
//     }))
//     //BUENA MANERA DE UTILIZAR EL AXIOS
// }