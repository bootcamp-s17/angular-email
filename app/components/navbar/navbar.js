'use strict';

import navbarComponent from './navbar.component';

let navbarBodule = angular.module('navbar', [])
.component('navbar', navbarComponent);

export default navbarModule;
