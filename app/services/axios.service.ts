import axios from "axios";
import { toast } from "react-toastify";

export const axiosService = (service: string, payload: object) => {
  const formData = new FormData();
  for (const [key, value] of Object.entries(payload)) {
    formData.append(key, value);
  }

  axios
    .post(`https://apilogin.das-on.com/${service}`, formData)
    .then((res) => {
      toast(res.data.http_message, {
        hideProgressBar: true,
        autoClose: 2000,
        type: "success",
      });
    })
    .catch((err) => {
      toast(err.response.data.service_message, {
        hideProgressBar: true,
        autoClose: 2000,
        type: "error",
      });
    });
};
