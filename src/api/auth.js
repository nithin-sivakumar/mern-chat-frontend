import axios from 'axios';
import { URL } from './constants';

export const signIn = async (data) => {
  try {
    const response = await axios.post(`${URL}api/users/login`, data, {
      withCredentials: true
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error.response.data);
    return error.response.data;
  }
};

export const register = async (data) => {
  try {
    const response = await axios.post(`${URL}api/users/register`, data, {
      withCredentials: true
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error.response.data);
    return error.response.data;
  }
};
