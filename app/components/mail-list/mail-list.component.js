import template from './mail-list.html';
import controller from './mail-list.controller';

let mailListComponent = {
    bindings: {},
    template,
    controller: ['$rootScope', '$interval', controller],
    controllerAs: '$ctrl'
};

export default mailListComponent;
