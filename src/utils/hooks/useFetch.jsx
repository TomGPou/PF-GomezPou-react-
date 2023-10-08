import axios from "axios";
import { useState, useEffect } from "react";

export const useFetch = (endpoint, initial) => {
  const [data, setData] = useState(initial);

  useEffect(() => {
    const getData = axios.get(endpoint);
    getData.then((res) => setData(res.data)).catch((err) => console.log(err));
  }, [endpoint]);

  return { data };
};
