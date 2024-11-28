import axios from 'axios';
export const getTourData = async () => {
  const response = await axios.get('https://matinmn.pythonanywhere.com/api/trips/');
  return response.data.slice(0,20);
};


export async function getTourDataMock() {
  const response = await axios.get('api/tours/[id]');
  return response.data;
}