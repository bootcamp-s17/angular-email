'use strict';

import appComponent from './app.component';
import navbarComponent from './components/navbar/navbar.component';

angular.module('app', [])
.component('app', appComponent)
.component('navbar', navbarComponent);
