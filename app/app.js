'use strict';

import appComponent from './app.component';
import navbarComponent from './components/navbar/navbar.component';
import sidebarComponent from './components/sidebar/sidebar.component';
import mailListComponent from './components/mail-list/mail-list.component';

angular.module('app', [])
.component('app', appComponent)
.component('navbar', navbarComponent)
.component('sidebar', sidebarComponent)
.component('mailList', mailListComponent);
