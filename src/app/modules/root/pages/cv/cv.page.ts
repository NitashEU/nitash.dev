import { Component, OnInit } from '@angular/core';
import { Experience } from 'src/app/modules/interfaces/experience.interface';

@Component({
  selector: 'app-root-cv',
  templateUrl: './cv.page.html',
  styleUrls: ['./cv.page.scss']
})
export class RootCVComponent implements OnInit {
  public experiences: Experience[];

  public ngOnInit(): void {
    const experiences: Experience[] = [];

    const juconnExperience: Experience = {
      startDate: new Date(2019, 0),
      location: 'Munich',
      company: 'Juconn GmbH',
      title: 'Software Developer',
      keys: [
        {
          description: 'Project management and engineering'
        },
        {
          description: 'Leading and educating a team of three'
        },
        {
          description: 'CI/CD Management',
          additionalInfos: ['Azure DevOps']
        },
        {
          description:
            'Extending, optimizing and taking over the external developed platform',
          additionalInfos: ['MongoDB', 'ExpressJS', 'Angular', 'NodeJS']
        },
        {
          description:
            'Full integration of a Gateway system in our IoT platform',
          additionalInfos: ['MongoDB', 'ExpressJS', 'Angular', 'NodeJS', 'MQTT']
        },
        {
          description: 'Development of dashboards',
          additionalInfos: ['Angular']
        },
        {
          description:
            'Development of web services with microservice architecture',
          additionalInfos: ['PostgreSQL', 'NestJS', 'NodeJS']
        }
      ]
    };

    const minntExperience: Experience = {
      startDate: new Date(2018, 4),
      endDate: new Date(2018, 11),
      location: 'Munich',
      company: 'minnt GmbH',
      title: 'Software Developer',
      keys: [
        {
          description: 'Development of dashboards für Juconn GmbH',
          additionalInfos: ['Angular']
        },
        {
          description:
            'Extending, optimizing and taking over the external developed platform',
          additionalInfos: ['MongoDB', 'ExpressJS', 'Angular', 'NodeJS']
        },
        {
          description:
            'Development and management of a complex Frontend solution for e-commerce',
          additionalInfos: ['Angular']
        },
        {
          description:
            'Development of a complex Frontend solution for a shop-like system',
          additionalInfos: ['Angular']
        }
      ]
    };

    const marpinionExperience: Experience = {
      startDate: new Date(2015, 8),
      endDate: new Date(2018, 3),
      location: 'Munich',
      company: 'marpinion GmbH',
      title: 'Software Developer',
      keys: [
        {
          description:
            'Engineering of a complete backend infrastructure for an App',
          additionalInfos: ['WCF', 'MSSQL']
        },
        {
          description:
            'Fullstack Engineering of intern CMS System - complex system to manage content for the app. Survey creation, Video Uploading and Encoding in AWS, Newsletter with preview and testing, statistics, full reversible history of whole CMS',
          additionalInfos: ['WebApi', 'Angular', 'MSSQL']
        },
        {
          description: 'CI/CD integrations',
          additionalInfos: ['Jenkins']
        }
      ]
    };

    experiences.push(juconnExperience, minntExperience, marpinionExperience);

    this.experiences = experiences;
  }
}
