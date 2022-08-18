import { AxiosError, AxiosResponse } from "axios";

export const errorInterceptor = (error: AxiosError) => {
  if (error.message === "Network Error") {
    return Promise.reject(new Error("Network errror."));
  }

  if (error.response?.status === 401) {
    //retorna uma pagina por exemplo
  }

  return Promise.reject(error);
};

export const responseInterceptor = (response: AxiosResponse) => {
  return response;
};
