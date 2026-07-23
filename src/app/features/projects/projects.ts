import { Component } from '@angular/core';

export type PortfolioProject = {
  index: string;
  title: string;
  description: string;
  tags: string[];
  url: string | null;
  demoUrl?: string | null;
};

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  readonly projects: PortfolioProject[] = [
    {
      index: '01',
      title: 'Workflow AI Automation',
      description:
        'A visual no-code workflow builder — like n8n/Zapier — with an Angular canvas, AI nodes, execution history, and a NestJS engine powered by Postgres, OpenAI, and Gemini.',
      tags: ['Angular', 'AI Automation', 'NestJS', 'n8n-style', 'Postgres'],
      url: 'https://github.com/TaseenQamar/workflow-builder',
      demoUrl: 'https://workflow-builder-delta-tawny.vercel.app',
    },
    {
      index: '02',
      title: 'Dynamic Data Table',
      description:
        'An Angular 20 data table experience with flexible columns, sorting, and reusable table architecture for enterprise-style datasets.',
      tags: ['Angular 20', 'TypeScript', 'Reusable UI', 'Data UX'],
      url: 'https://github.com/TaseenQamar/dynamic-data-table',
      demoUrl: null,
    },
    {
      index: '03',
      title: 'Workflow Automation Backend',
      description:
        'NestJS execution engine for workflow runs — Postgres persistence, OpenAI/Gemini integrations, and APIs that power the visual builder.',
      tags: ['NestJS', 'Postgres', 'OpenAI', 'Gemini', 'API'],
      url: 'https://github.com/TaseenQamar/workflow-build-backend',
      demoUrl: null,
    },
  ];
}
