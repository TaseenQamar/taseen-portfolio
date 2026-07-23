import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class Skills {
  readonly skills = [
    {
      name: 'Angular',
      icon: 'angular',
    },
    {
      name: 'TypeScript',
      icon: 'typescript',
    },
    {
      name: 'RxJS',
      icon: 'rxjs',
    },
    {
      name: 'Angular Material',
      icon: 'material',
    },
    {
      name: 'Tailwind CSS',
      icon: 'tailwind',
    },
    {
      name: 'Bootstrap',
      icon: 'bootstrap',
    },
    {
      name: 'REST APIs',
      icon: 'rest',
    },
    {
      name: 'PostgreSQL',
      icon: 'postgres',
    },
    {
      name: 'npx / pkg',
      icon: 'pkg',
    },
    {
      name: 'Canvas',
      icon: 'canvas',
    },
  ];
}
