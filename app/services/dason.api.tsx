import AxiosWrapper from "./axiosWrapper/http.urlEncoded";
import { toast } from "react-toastify";

const API_URL = "https://apilogin.das-on.com/";

interface DynamicServiceProps {
  service: string;
  payload?: object;
  toastify?: boolean;
  toastifyMessage?: string;
  file?: any;
}

const DynamicService = async (props: DynamicServiceProps) => {
  const {
    service,
    payload,
    toastifyMessage = "successfull",
    toastify = true,
    file,
  } = props;

  try {
    const myForm = new FormData();
    const jsonPayload = JSON.stringify(payload);

    myForm.append("request", jsonPayload);
    if (file) {
      myForm.append("file", file);
    }

    const data = await AxiosWrapper.post(`${API_URL}${service}`, myForm).then(
      (response) => {
        // toastify === true && toast.success(toastifyMessage);

        return response.data;
      }
    );
    return data;
  } catch (ex: any) {
    // toastify === true && toast.error(ex?.response?.data?.service_message);
    console.log(ex?.response?.data?.service_message);

    return false;
  }
};

export default DynamicService;
