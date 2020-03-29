import { Injectable } from '@angular/core';

@Injectable()
export class ConstantsService {
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
}
