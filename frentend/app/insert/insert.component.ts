import { Component } from '@angular/core';
import { DemoService } from '../demo.service';
@Component({
  selector: 'app-insert',
  templateUrl: './insert.component.html',
  styleUrl: './insert.component.css'
})
export class InsertComponent {
  constructor(private s1:DemoService) 
  { }
  insertdata(insertform:any)
  {
    return this.s1.insertdata1(insertform.value).subscribe();
   }

}