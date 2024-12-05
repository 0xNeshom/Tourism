import axios from "axios";

export const getCategory = async ()=>{
    const res =await axios.get('https://matinmn.pythonanywhere.com/api/categories/');
    return res.data;
}