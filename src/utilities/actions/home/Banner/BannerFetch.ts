import axios from "axios"

export const getBanner = async ()=>{
    const res = await axios.get('https://matinmn.pythonanywhere.com/api/banners/');
    return res.data;
}