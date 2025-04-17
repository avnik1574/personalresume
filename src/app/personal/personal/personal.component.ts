import { Component } from '@angular/core';

import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';

import {
  AccordionsItem,
  ISkillsItem,
  IProjectItem,
  IJobItem,
} from '../../base-interface';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.scss'],
  animations: [
    trigger('accordionAnimation', [
      state(
        'closed',
        style({
          height: '0px',
          opacity: 0,
          overflow: 'hidden',
        })
      ),
      state(
        'open',
        style({
          height: '*',
          opacity: 1,
        })
      ),
      transition('closed <=> open', [animate('500ms ease-in-out')]),
    ]),
  ],
})
export class PersonalComponent {

  name: string = '';
  email: string = '';
  review: string = '';

  onSubmit() {
    console.log('Name:', this.name);
    console.log('Email:', this.email);
    console.log('Review:', this.review);
  }
  
  sideList: AccordionsItem[] = [
    {
      title: 'Categories',
      open: true,
      link: false,
      content: [
        {
          title: 'About',
          link: 'about',
          icon: 'flag.png',
        },
        {
          title: 'Skills',
          link: 'skills',
          icon: 'angular.png',
        },
        {
          title: 'Projects',
          link: 'projects',
          icon: 'code.png',
        },
        {
          title: 'Educations',
          link: 'uni',
          icon: 'piemr.png',
        },
      ],
    },
    {
      title: 'Social Link',
      open: true,
      link: true,
      content: [
        {
          title: 'LinkedIn',
          link: 'https://www.linkedin.com/in/avni-katiyar-078109284/',
          icon: 'linkedin.png',
        },
        {
          title: 'GitHub',
          link: 'https://github.com/avnik1574',
          icon: 'github.png',
        },
        {
          title: 'Phone',
          link: 'tel:+7000187921',
          icon: 'phone.png',
        },
        {
          title: 'Email',
          link: 'mailto:katiyaravni1574@gmail.com',
          icon: 'email.png',
        },
      ],
    },
  ];

  skills: ISkillsItem[] = [
    {
      name: 'JAVA',
      icon: 'java.png',
    },
    {
      name: 'Html',
      icon: 'html.png',
    },
    {
      name: 'CSS/SCSS',
      icon: 'css.png',
    },
    {
      name: 'JavaScript',
      icon: 'javascript.png',
    },
    {
      name: 'SQL',
      icon: 'sql.png',
    },
    {
      name: 'React',
      icon: 'react.png',
    },
    {
      name: 'Git',
      icon: 'git.png',
    },
  ];


  goTo(element: any, type: boolean) {
    if (type) {
      window.open(element, '_blank');
    } else {
      let x = document.getElementById(element);
      x?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  toggleAccordion(item: any) {
    item.open = !item.open;
  }

  fulllscreen() {
    const doc = window.document as any;
    const docEl = doc.documentElement;

    const requestFullScreen =
      docEl.requestFullscreen ||
      docEl.mozRequestFullScreen ||
      docEl.webkitRequestFullScreen ||
      docEl.msRequestFullscreen;
    const exitFullScreen =
      doc.exitFullscreen ||
      doc.mozCancelFullScreen ||
      doc.webkitExitFullscreen ||
      doc.msExitFullscreen;

    if (
      !doc.fullscreenElement &&
      !doc.mozFullScreenElement &&
      !doc.webkitFullscreenElement &&
      !doc.msFullscreenElement
    ) {
      requestFullScreen.call(docEl);
    } else {
      exitFullScreen.call(doc);
    }
  }
}
