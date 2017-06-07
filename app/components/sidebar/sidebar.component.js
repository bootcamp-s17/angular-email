import template from './sidebar.html';
import controller from './sidebar.controller';

let sidebarComponent = {
    bindings: {},
    template,
    controller: ['$rootScope', controller],
    controllerAs: '$ctrl'
};

export default sidebarComponent;
