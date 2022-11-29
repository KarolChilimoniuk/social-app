import axios from "axios";

export const instance = axios.create({
  baseURL: `http://localhost:4000`,
  withCredentials: true,
});

export const cloudUri = `${process.env.REACT_APP_UPLOAD_CLOUD_URI}`;
