import axios, { AxiosResponse } from "axios";

axios.get<{ name: string }>("http://localhost:4000/").then((response) => {
  console.log(response.data.name);
  document.getElementById("root")!.innerHTML = response.data.name;
});
