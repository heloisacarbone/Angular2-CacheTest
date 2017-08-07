import { Component } from '@angular/core';
import { TesteService } from "app/teste.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private testeService: TesteService) {}
  title = 'app works!';
  public teste() {
    this.testeService.getTeste().subscribe((res: any) => {
      console.log('oi gato', res);
    });
  }
}
