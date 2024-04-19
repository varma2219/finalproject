import { Component } from '@angular/core';
import { DemoService } from '../demo.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrl: './delete.component.css'
})
export class DeleteComponent {
  constructor(private s1:DemoService) 
  { }
  deletedata(deleteform:any)
  { 
    return this.s1.deletedata1(deleteform.value).subscribe();
  }

}
