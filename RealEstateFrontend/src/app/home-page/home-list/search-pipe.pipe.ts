import { Pipe, PipeTransform } from '@angular/core';
import {HomeListComponent} from "./home-list.component"

@Pipe({
  name: 'searchPipe'
})
export class SearchPipePipe implements PipeTransform {

  transform(realestate:any, search:string){
    if(realestate.length ===0 || search===""){
        return realestate;
    }
    else{      
      return realestate.filter((real:any)=>{
        return real.description.typology.toString().toLowerCase() == search.toLowerCase()
         || real.location.city.toString().toLowerCase() == search.toLowerCase()
         || real.description.sqFeet == search
      })
      
      
    }    

  }
  }

