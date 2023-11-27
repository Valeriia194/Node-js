import {BASE_URL} from "@/constants"

export class Cart {
    baseURL: string = BASE_URL;
    constructor(){}
    createPrettyData(data:number[]) {
        // create uniq ids 
        // @ts-ignore
        let uniqueProductsID = [...new Set(data)]
        // new place for product 
        let formatProductData:{}[]=[]
        // create new array products
        uniqueProductsID.map((e:number)=>{
            // create counter
            let counter = 0;
            data.map((item: number)=>{
                if (e == item){
                    counter++;
                }
            })
            // create frame
            formatProductData.push({
                id: e,
                qty: counter,
            });
        });
        return formatProductData;
    }
}