import axios from "axios";

const token = sessionStorage.getItem("tkn");

const Axios = axios.create({
  baseURL: "http://brlpvudh4vxb92.br.lactadom.ad:4000/",
  timeout: 5000,
  headers: { "X-Custom-Header": "foobar" },
});

Axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

export default Axios;
