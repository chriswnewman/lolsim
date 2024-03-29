import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Message } from "@lol/api-interface";

@Component({
  selector: "lol-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  hello$ = this.http.get<Message>("/api/hello");
  test$ = this.http.get<any>("/api/champion");
  constructor(private http: HttpClient) {}
}
