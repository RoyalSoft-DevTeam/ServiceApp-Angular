import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HomeComponent],
  template: `
    <main>
      <header class="brand-name">
        <img
          class="brand-logo"
          src="/assets/favicon.ico"
          alt="logo"
          aria-hidden="true"
        />
      </header>
      <section class="content">
        <app-home></app-home>
      </section>
    </main>
  `,
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'service';
}
