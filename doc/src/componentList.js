/*
Copyright (c) 2016-2017 PointSource, LLC.
MIT Licensed
*/
import home from './home';
import accordion from './accordion';
import tabs from './tabs';
import button from './button';
import buttonGroup from './buttonGroup';
import offCanvas from './offCanvas';
import titleBar from './titleBar';
import topBar from './topBar';
import progress from './progress';
import menu from './menu';
import dropdown from './dropdown';

export default [
  {
    name: 'home',
    displayName: 'Home',
    path: '/',
    components: {
      content: home
    }
  },
  {
    name: 'accordion',
    displayName: 'Accordion',
    path: '/accordion',
    components: {
      content: accordion
    }
  },
  {
    name: 'tabs',
    displayName: 'Tabs',
    path: '/tabs',
    components: {
      content: tabs
    }
  },
  {
    name: 'button',
    displayName: 'Button',
    path: '/button/:id?',
    components: {
      content: button
    }
  },
  {
    name: 'buttonGroup',
    displayName: 'Button Group',
    path: '/button-group',
    components: {
      content: buttonGroup
    }
  },
  {
    name: 'offCanvas',
    displayName: 'Off Canvas',
    path: '/off-Canvas',
    components: {
      content: offCanvas
    }
  },
  {
    name: 'titleBar',
    displayName: 'Title Bar',
    path: '/title-bar',
    components: {
      content: titleBar
    }
  },
  {
    name: 'topBar',
    displayName: 'Top Bar',
    path: '/top-bar',
    components: {
      content: topBar
    }
  },
  {
    name: 'progress',
    displayName: 'Progress Bar',
    path: '/progress',
    components: {
      content: progress
    }
  },
  {
    name: 'menu',
    displayName: 'Menu',
    path: '/menu',
    components: {
      content: menu
    }
  },
  {
    name: 'dropdown',
    displayName: 'Dropdown',
    path: '/dropdown',
    components: {
      content: dropdown
    }
  },
];
