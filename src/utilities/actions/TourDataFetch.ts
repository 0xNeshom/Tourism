import axios from 'axios';
export const getTourData = async () => {
  const response = await axios.get('https://matinmn.pythonanywhere.com/api/trips/');
  return response.data;
};


export async function getTourDataMock() {
  const response = await axios.get('api/tours/[id]');
  return response.data;
}