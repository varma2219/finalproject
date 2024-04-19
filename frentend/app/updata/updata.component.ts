import { Component } from '@angular/core';
import { DemoService } from '../demo.service';
@Component({
  selector: 'app-updata',
  templateUrl: './updata.component.html',
  styleUrl: './updata.component.css'
})
export class UpdataComponent {
  constructor(private s1:DemoService) 
  { }
  updatedata(updateform:any)
  {
    return this.s1.updatedata1(updateform.value).subscribe();
   }

}
