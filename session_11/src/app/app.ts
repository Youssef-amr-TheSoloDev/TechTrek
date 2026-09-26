import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./navbar/navbar";
import { Hero } from "./hero/hero";

@Component({
  imports: [RouterOutlet, Navbar, Hero],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('session_11');

  username: string = 'youssef';
  password: string = '***********'

}
