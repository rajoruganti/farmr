import axios from 'axios';
import { getAccessToken } from './AuthService';

const BASE_URL = 'http://localhost:3001';

export {getPublicPlotData, getPlotDetail};

function getPublicPlotData() {
  const url = `${BASE_URL}/plots`;
  return axios.get(url).then(response => response.data);
}

function getPlotDetail() {
  const url = `${BASE_URL}/plots/`;
  return axios.get(url, { headers: { Authorization: `Bearer ${getAccessToken()}` }}).then(response => response.data);
}
