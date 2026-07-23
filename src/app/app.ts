import { Component, signal } from '@angular/core';

import { Navbar } from './shared/components/navbar/navbar';
import { Footer } from './shared/components/footer/footer';
import { Hero } from './features/hero/hero';
import { About } from './features/about/about';
import { Skills } from './features/skills/skills';
import { Projects } from './features/projects/projects';
import { Contact } from './features/contact/contact';

@Component({
  selector: 'app-root',
  imports: [Navbar, Footer, Hero, About, Skills, Projects, Contact],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('taseen-portfolio');
}
