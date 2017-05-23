'use strict'

import appComponent from './app.component';
import navBar from './components/navbar/navbar';

angular.module('app', [
    // components
    navBar
])
.component('app', appComponent);
