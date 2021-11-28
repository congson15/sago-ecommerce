import axios, { AxiosRequestConfig } from 'axios';

let options: AxiosRequestConfig = {}

const axiosClient = {
  get: (path: string) => {
    options = {
      method: 'GET',
      url: `${process.env.REACT_APP_API_ENDPOINT}${path}`,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
    };
    return axios.request(options).then((response) => {
      const { data } = response;
      return data;
    }).catch(function (error) {
      console.error(error);
    });
  },
  getAreas: (path: string) => {
    options = {
      method: 'GET',
      url: `https://api.mysupership.vn/v1/partner/areas${path}`,
      headers: {
        'Access-Control-Allow-Origin' : '*',
        'Access-Control-Allow-Headers': '*',
        'Content-Type': 'application/json; charset=UTF-8',
      },
    };
    return axios.request(options).then((response) => {
      const { data } = response;
      return data;
    })
  }

}

export default axiosClient;