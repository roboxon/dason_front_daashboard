import axios from "axios";
import { toast } from "react-toastify";

const DynamicHttpFn = (contentType: string) => {
  axios.defaults.headers.post["Content-Type"] = contentType;
  axios.defaults.headers.get["Content-Type"] = contentType;
  axios.defaults.headers.put["Content-Type"] = contentType;
  axios.defaults.headers.patch["Content-Type"] = contentType;
  axios.defaults.headers.delete["Content-Type"] = contentType;

  axios.interceptors.request.use(async (request) => {
    const token = localStorage.getItem("token");
    if (token) {
      request.headers["Authorization"] = `Bearer ${token}`;
    }
    return request;
  });

  axios.interceptors.response.use(
    function (response) {
      // document.body.classList.remove('loading-indicator');
      return response;
    },
    function (error) {
      // document.body.classList.remove('loading-indicator');
      toast.error(error.response?.data?.error);
      throw error;
    }
  );

  return axios;
};
export default DynamicHttpFn;
