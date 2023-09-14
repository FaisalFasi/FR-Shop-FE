import axios from "axios";
import React from "react";

const makeRequest = axios.create({
  baseURL: process.env.REACT_APP_API_URL || "http://127.0.0.1:1337",
  headers: {
    Authorization: "bearer " + process.env.REACT_APP_API_TOKEN,
  },
});

export default makeRequest;
