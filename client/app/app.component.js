import template from './app.html';
import controller from './app.controller';

let navbarComponent = {
    restrict: 'E',
    bindings: {},
    template,
    controller: [
        controller
    ],
    controllerAs: '$ctrl'
};

export default appComponent;