import Axios, { AxiosInstance } from "axios"

const axios: AxiosInstance = Axios.create({
  baseURL: import.meta.env.VITE_API_URL as string,
  headers: {
    "X-Requested-With": "XMLHttpRequest",
  },
})

export default axios