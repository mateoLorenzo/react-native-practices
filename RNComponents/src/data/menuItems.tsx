import {MenuItem} from '../interfaces';

export const menuItems: MenuItem[] = [
  {
    name: 'Animation 101',
    icon: 'cube',
    component: 'Animation101Screen',
  },
  {
    name: 'Animation 102',
    icon: 'albums',
    component: 'Animation102Screen',
  },
  {
    name: 'Switches',
    icon: 'toggle',
    component: 'SwitchScreen',
  },
  {
    name: 'Alerts',
    icon: 'alert-circle',
    component: 'AlertScreen',
  },
  {
    name: 'Text Inputs',
    icon: 'document-text',
    component: 'TextInputScreen',
  },
  {
    name: 'Pull to Refresh',
    icon: 'refresh',
    component: 'PullToRefreshScreen',
  },
  {
    name: 'Section List',
    icon: 'list',
    component: 'CustomSectionListScreen',
  },
  {
    name: 'Modal',
    icon: 'copy',
    component: 'ModalScreen',
  },
  {
    name: 'Infinite Scroll',
    icon: 'download',
    component: 'InfiniteScrollScreen',
  },
  {
    name: 'Slides',
    icon: 'volume-high',
    component: 'SlidesScreen',
  },
  {
    name: 'Change Theme',
    icon: 'flask',
    component: 'ChangeThemeScreen',
  },
  {
    name: 'Services (pets)',
    icon: 'globe',
    component: 'ServicesScreen',
  },
  {
    name: 'Width Animation',
    icon: 'phone-landscape',
    component: 'WidthAnimationScreen',
  },
  {
    name: 'Custom Image',
    icon: 'image',
    component: 'CustomImageScreen',
  },
];
