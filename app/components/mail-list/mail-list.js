'use strict';

import mailListComponent from './mail-list.component';

let mailListModule = angular.module('mailList', [])
.component('mailList', mailListComponent);

export default mailListModule;
