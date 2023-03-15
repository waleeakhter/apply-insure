import { Component, OnInit } from "@angular/core";
import { Options } from "@angular-slider/ngx-slider";

@Component({
  selector: "app-risk-page",
  templateUrl: "./risk-page.component.html",
  styleUrls: ["./risk-page.component.scss"],
})
export class RiskPageComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  value: number = 60;
  options: Options = {
    showTicksValues: true,
    step: 5,
    stepsArray: [
      {
        value: 20,
        legend:
          "<p>Best Coverage</p> <small>Most Coverage </small> <small> Most Expensive</small>",
      },
      {
        value: 40,
        legend:
          "<p>Better Coverage</p> <small>More Coverage </small> <small> More Price</small>",
      },
      {
        value: 60,
        legend:
          "<p>Balanced</p> <small>Good Coverage </small> <small> Good Price</small>",
      },
      {
        value: 80,
        legend:
          "<p>Better Price</p> <small>Less Coverage </small> <small> More Savings</small>",
      },
      {
        value: 100,
        legend:
          "<p>Best Price</p> <small>Less Coverage </small> <small>Lower Price</small>",
      },
    ],
  };
}
