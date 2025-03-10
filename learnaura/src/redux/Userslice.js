import { createSlice } from "@reduxjs/toolkit";
import {jwtDecode} from "jwt-decode";
import {getDecodedData, getUserData} from "../utils/storageHandler";

const userslice=createSlice({
    name:'user',
    initialState:{
        islogin:getUserData()?true: false,
        token:getUserData() || null,
        name:getDecodedData()?.name || null,
        email:getDecodedData()?.email || null,
        role:getDecodedData()?.role || null
    },
    reducers:{
        signup(state) {
            
            state.islogin=true;
            state.token=token;
            state.name=name;
            state.email=email;
        },
       login:((state,action)=>{
        console.log(action.payload);
            state.token=action.payload
            const decoded = jwtDecode(action.payload)
            console.log(decoded);
            state.email=decoded.email
            state.name=decoded.name
            state.islogin=true
            
       }),
       logout(state){
            state.islogin=false;
            state.token='';
            state.name='';
            state.email='';
       }
    }
})
export const { signup, login, logout } = userslice.actions;
export default userslice.reducer;
