import { Component, VERSION } from "@angular/core";
import { Router } from "@angular/router";
import { GlobalvarService } from "./globalvar.service";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  constructor(private router: Router, public globalVar: GlobalvarService) {}

  name = "Angular " + VERSION.major;
  textnama = "";
  namaglobal: String = this.globalVar.getNama();

  openhalologin() {
    this.globalVar.setNama(this.textnama);
    this.namaglobal = this.globalVar.getNama();
    this.router.navigate(["/home/" + this.textnama]);
  }
}
