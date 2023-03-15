import { Component, OnInit ,Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  constructor() { }
  @Input('text') public text: string;
  @Input('color') public color: string;
  @Input('type') public type: string;
  ngOnInit() {
  }

}
