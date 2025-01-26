import axios from 'axios';

const apiURL = 'http://localhost:5000/users';

export async function getAllUsers (){
    return await axios.get(`${apiURL}/getAllUsers`)
}

export async function deleteUser(id){
    return await axios.delete(`${apiURL}/deleteUser/${id}`)
}

export async function addUser(userData,config){
    return await axios.post(`${apiURL}/addUser`, userData,config)
}

export async function addUserwithImg(formData){
    return await axios.post(`${apiURL}/addClient`, formData,{
        headers: {'Content-Type': 'multipart/form-data'},
    })
}

export async function login_post(userData){
    return await axios.post(`${apiURL}/login`, userData,{
        withCredentials: true,
    })
}