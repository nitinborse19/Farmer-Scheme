import { Component, OnInit } from '@angular/core';
import { SoldHistorySevice } from 'src/Service/soldhistory.service';
import { SoldHistory } from '../Model/soldhistory.model';
@Component({
  selector: 'app-soldhistory',
  templateUrl: './soldhistory.component.html',
  styleUrls: ['./soldhistory.component.css']
})
export class SoldhistoryComponent implements OnInit {

  constructor(private SHservice:SoldHistorySevice) { }

  ngOnInit(): void {
    this.fetchHistory();
  }
// Get Sold History
SoldHistoryinfo?:any;
fetchHistory()
{
this.SHservice.getsoldhistory().subscribe((data)=>{this.SoldHistoryinfo=data;console.table(this.SoldHistoryinfo)});
}
}
