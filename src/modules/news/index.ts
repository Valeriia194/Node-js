import { BASE_URL } from "@/constants";


export class News {
    baseURL : string = BASE_URL;
    constructor () {}
    public async getData(endpoint:string){
        const getAllProducts = async () => {
            return await fetch(`${this.baseURL}${endpoint}`)
              .then((res) => res.json())
              .then((json) => {
                return json;
              });
          };
    }
}