import { Injectable } from "@angular/core";

@Injectable()
export class GlobalvarService {
  private datanama: String = "usercoba";
  constructor() {}

  public getNama() {
    return this.datanama;
  }
  public setNama(Nama: String) {
    this.datanama = Nama;
  }
}
