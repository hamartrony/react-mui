import axios from "axios";
import { Enviroment } from "../../enviroment";
import { responseInterceptor } from "./interceptors";

const Api = axios.create({
  baseURL: Enviroment.URL_BASE,
});

Api.interceptors.response.use(
  (response) => responseInterceptor(response),
  (error) => responseInterceptor(error)
);

export { Api };
