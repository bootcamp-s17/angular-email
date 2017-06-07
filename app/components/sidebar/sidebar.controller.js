class sidebarController {
    constructor($rootScope) {
        const ctrl = this;
        ctrl.$rootScope = $rootScope;
        
        // Updateds number of unread emails
        ctrl.$rootScope.$watch('inbox', () => {
            ctrl.unread = `(${ctrl.$rootScope.inbox})`;
        });
    };
}

export default sidebarController;
