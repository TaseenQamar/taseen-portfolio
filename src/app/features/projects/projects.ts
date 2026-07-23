import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  readonly projects = [
    {
      index: '01',
      title: 'Dynamic Data Table',
      description:
        'An Angular 20 data table experience with flexible columns, sorting, and reusable table architecture for enterprise-style datasets.',
      tags: ['Angular 20', 'TypeScript', 'Reusable UI', 'Data UX'],
      url: 'https://github.com/TaseenQamar/dynamic-data-table',
    },
    {
      index: '02',
      title: 'Enterprise Admin Platform',
      description:
        'A multi-module Angular workspace for operations teams — role-based access, realtime updates, and a design system built for scale.',
      tags: ['Angular', 'RxJS', 'Signals', 'Design System'],
      url: null,
    },
    {
      index: '03',
      title: 'Customer Experience Portal',
      description:
        'High-performance self-service experience with accessible UI, optimized routing, and polished micro-interactions.',
      tags: ['TypeScript', 'Tailwind', 'SSR', 'A11y'],
      url: null,
    },
  ];
}
