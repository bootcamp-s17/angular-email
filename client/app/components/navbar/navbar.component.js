import template from './navbar.html';
import controller from './navbar.controller';

let navbarComponent = {
    restrict: 'E',
    bindings: {},
    template,
    controller: [
        controller
    ],
    controllerAs: '$ctrl'
};

export default navbarComponent;
