import axios from 'axios';
import { key, proxy, app_id } from '../config';

export default class Search {
    constructor(query) {
        this.query = query;

    }

    async getResults() {
        try {
            const res = await axios(`${proxy}https://api.edamam.com/search?q=${this.query}&app_id=${app_id}&app_key=${key}&to=30`);
            this.result = res.data.hits;
            //console.log(this.result);
        } catch(error){
            console.log(error);
        }
    }

}
//
//https://api.edamam.com/search?q=chicken&app_id=dbf11430&app_key=18e41cfaecc2467c5c2669494d64ae12
// key - 18e41cfaecc2467c5c2669494d64ae12
// ID - dbf11430

//https://api.edamam.com/recipe/chicken-vesuvio-b79327d05b8e5b838ad6cfd9576b30b6/chicken

//https://api.edamam.com/get?r=b79327d05b8e5b838ad6cfd9576b30b6&app_id=dbf11430&app_key=18e41cfaecc2467c5c2669494d64ae12