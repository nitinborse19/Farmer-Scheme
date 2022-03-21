import { Component, OnInit } from '@angular/core';
import { sellcropService } from 'src/Service/sellcrop.service';
import { SellCrop } from '../Model/sellCrop.model';

@Component({
  selector: 'app-sellcrop',
  templateUrl: './sellcrop.component.html',
  styleUrls: ['./sellcrop.component.css']
})
export class SellcropComponent implements OnInit {

  constructor(private sellservice:sellcropService) { }

  ngOnInit():void {
    this.fetchSellcrop();
  }
  //Get the Data
  sellcropinfo?:any;
  fetchSellcrop()
  { 
    this.sellservice.getsellcrop().subscribe((data)=>{this.sellcropinfo=data;console.table(this.sellcropinfo)});
  }
    //Post
  //object
  SellCrops:SellCrop={}; 
  result:any;
  addCategory()
  {
   
     this.sellservice.insertCategory(this.SellCrops).subscribe(
       (data)=>
       {console.log(data)
         if(data=="Success")
      {
        window.alert("Data Added!!!");
        this.fetchSellcrop();
      }
      else{
        window.alert("Data  Not Added!!!");
      }
    }
       
       );
     
  }

//Delete
msg:any;
removeCategory(cid:number)
{
  this.sellservice.deleteCategory(cid).subscribe((data)=>{this.msg=data,console.log(this.msg)
 });
  
}
//get particular category details
editCategory(id:number)
{
   this.sellservice.getcatbyid(id).subscribe((data)=>{this.SellCrops=data,console.log(this.SellCrops)});
}

//update
updateCategory()
{
  
   this.sellservice.editcategoryservice(this.SellCrops).subscribe((data)=>{this.msg,console.log(this.msg)});
}
   

}
