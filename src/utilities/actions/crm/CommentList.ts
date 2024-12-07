import axios from "axios"

export const getComments =async ()=>{
    const res = await axios.get("https://matinmn.pythonanywhere.com/api/comments/");
    return res.data;
}