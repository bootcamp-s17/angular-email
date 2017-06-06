import template from './navbar.html';
import controller from './navbar.controller';

let navbarComponent = {
    bindings: {},
    template,
    controller: ['$rootScope', controller],
    controllerAs: '$ctrl'
};

export default navbarComponent;
