import { Component, Input } from '@angular/core';
import { MediaObserver } from '@angular/flex-layout';

@Component({
  selector: 'app-cv-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.scss']
})
export class CVTechnologyComponent {
  @Input()
  public technology: string;

  public technologyWebsiteMap = {
    NestJS: 'https://nestjs.com/',
    'Azure DevOps': 'https://dev.azure.com',
    MongoDB: 'https://mongodb.com',
    ExpressJS: 'https://expressjs.com/',
    Angular: 'https://angular.io',
    NodeJS: 'https://nodejs.org',
    MQTT: 'https://mqtt.org',
    PostgreSQL: 'https://postgresql.org',
    WCF: 'https://wikipedia.org/wiki/Windows_Communication_Foundation',
    MSSQL: 'https://wikipedia.org/wiki/Microsoft_SQL_Server',
    WebApi:
      'https://docs.microsoft.com/de-de/aspnet/web-api/overview/getting-started-with-aspnet-web-api/tutorial-your-first-web-api',
    Jenkins: 'https://jenkins.io/'
  };

  public constructor(public media: MediaObserver) {}
}
