import axios from 'axios';
import { URL } from './constants';

export const fetchUsers = async (token) => {
  try {
    const response = await axios.get(`${URL}api/users/fetch-users`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error.response.data);
    return error.response.data;
  }
};

export const accessChat = async (id, token) => {
  try {
    const response = await axios.post(
      `${URL}api/chats`,
      { userId: id },
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error.response.data);
    return error.response.data;
  }
};

export const fetchChats = async (token) => {
  try {
    const response = await axios.get(`${URL}api/chats`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error.response.data);
    return error.response.data;
  }
};

export const fetchGroups = async (token) => {
  try {
    const response = await axios.get(`${URL}api/chats/fetch-groups`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error.response.data);
    return error.response.data;
  }
};

export const createGroup = async (data, token) => {
  try {
    const response = await axios.post(`${URL}api/chats/create-group`, data, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error.response.data);
    return error.response.data;
  }
};

export const fetchUserDetails = async (token) => {
  try {
    const response = await axios.get(`${URL}api/users/info`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error.response.data);
    return error.response.data;
  }
};
