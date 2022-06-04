import axios from "axios";
import authHeader from "./auth-header";
import {useSelector} from "react-redux";

const API_URL = "http://catstack.net:8102/api/v1/user/";

const getPublicContent = () => {
  return axios({
    method: 'get',
    headers: {'Content-Type': 'application/json'} + authHeader(),
    url: API_URL + 'getMyProfile',
    withCredentials: false,
  });
};

const getUserBoard = () => {
  return axios.get(API_URL + "user", { headers: authHeader() });
};

const getModeratorBoard = () => {
  return axios.get(API_URL + "mod", { headers: authHeader() });
};

const getAdminBoard = () => {
  return axios.get(API_URL + "admin", { headers: authHeader() });
};

export default {
  getPublicContent,
  getUserBoard,
  getModeratorBoard,
  getAdminBoard,
};