import { Component, EventEmitter, OnInit, Output, Input } from "@angular/core";
import { CommonService } from "../../services/common.service";
import { AdvanceHomeComponent } from "../../advance-home/advance-home.component";
import { FormBuilder, FormGroup } from "@angular/forms";
@Component({
  selector: "app-advance-current-auto-premium",
  templateUrl: "./advance-current-auto-premium.component.html",
  styleUrls: ["./advance-current-auto-premium.component.scss"],
})
export class AdvanceCurrentAutoPremiumComponent implements OnInit {
  model = "month";

  @Input("autoimageurl") public autoimageurl: string;
  public current_premium: any;

  @Output() setCurrentPremiumData: EventEmitter<object> =
    new EventEmitter<object>();

  constructor(
    private commonService: CommonService,
    private advanceService: AdvanceHomeComponent
  ) {}

  ngOnInit() {
    // this.isautoimage = false;
    // setTimeout(() => {
    //   this.autoimageurl = this.advanceService.getautoUrl()
    //    this.isautoimage = true;
    //  }, 1000);

    console.log(this.model);
  }

  autoPremium() {
    this.current_premium = "I Don't Know";
    this.submitPremium();
  }

  submitPremium() {
    let data = {
      current_auto_premium: `${this.current_premium}/${this.model}`,
    };

    console.log(data.current_auto_premium);
    this.setCurrentPremiumData.emit(data);
  }

  changeYear(e) {
    console.log(e.target.value);
  }
}
