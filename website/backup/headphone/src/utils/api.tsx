import axios from "axios";

const params = {
  headers: {
    Authorization: "bearer " + import.meta.env.VITE_REACT_APP_STRAPE_API_KEY,
  },
};

export const fetchDataFromApi = async (url) => {
  try {
    const { data } = await axios.get(
      import.meta.env.VITE_REACT_APP_DEV_URL + url,
      params
    );
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};
