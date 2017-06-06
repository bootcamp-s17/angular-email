class navbarController {
    constructor($rootScope) {
        const ctrl = this;
        ctrl.title = "Eltoogle";
        ctrl.$rootScope = $rootScope;
    };
    
    search(searchText) {
        const ctrl = this;
        ctrl.$rootScope.searchText = searchText;
    };
}

export default navbarController;
