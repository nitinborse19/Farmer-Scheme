import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { SellCrop } from "src/app/Model/sellCrop.model";


@Injectable()
export class sellcropService
{
    constructor(private http:HttpClient)
    {

    }
    //.net core webapi url
    //readonly uri="http://localhost:60828/api/SellCrops";
    readonly uri="http://localhost:57666/api/SellCrops";
    getsellcrop()
    {
        return this.http.get(this.uri);
    }
    //Post
    
    insertCategory(cat:SellCrop)
    {
    
       return this.http.post(this.uri,cat,{responseType: 'text'})
    }
  
  //Delete

  deleteCategory(cid:number)
  {
    return this.http.delete(this.uri+'/'+cid);
    debugger;
  }
  getcatbyid(id:number)
  {
    return this.http.get(this.uri+'/'+id);
  }
  //Put

  editcategoryservice(cat:any)
  {
    
    return this.http.put(this.uri+'/'+cat.categoryId,cat);
  }

}