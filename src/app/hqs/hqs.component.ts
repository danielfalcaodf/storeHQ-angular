import { Component, OnInit } from '@angular/core';
import { HqService } from './hq/hq.service';
@Component({
  selector: 'sthq-hqs',
  templateUrl: './hqs.component.html',
  styleUrls: ['./hqs.component.css']
})
export class HqsComponent implements OnInit {

  constructor(private hqService: HqService) { }

  ngOnInit(): void {
    this.load();
  }

  load() {
    this.hqService.listHQs()
      .subscribe(hqs => {
        console.log(hqs);

      })
  }

}
