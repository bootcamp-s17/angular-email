class mailListController {
    constructor() {
        const ctrl = this;
        
        // Mock data for tabs
        ctrl.tabs = [
            {
                name: 'Primary',
                class: 'glyphicon-inbox'
            },
            {
                name: 'Social',
                class: 'glyphicon-user'
            },
            {
                name: 'Promotions',
                class: 'glyphicon-tags'               
            },
            {
                name: 'Updates',
                class: 'glyphicon-info-sign'        
            },
            {
                name: 'Forums',
                class: 'glyphicon-comment'    
            }
        ]
        
        // Mock data for emails
        ctrl.emails = [
            {
                name: 'Archer',
                subject: 'Black Turtle Neck Sale',
                date: '05/30/2017',
                tag: ['Primary', 'Promotions'],
                viewed: false
            },
            {
                name: 'Lana',
                subject: 'Save the whales',
                date: '05/29/2017',
                tag: ['Social', 'Forums'],
                viewed: false
            },
            {
                name: 'Figus',
                subject: 'Taxes',
                date: '05/25/2017',
                tag: ['Promotions', 'Primary'],
                viewed: false
            },
            {
                name: 'Ray',
                subject: 'Ski Trip' ,
                date: '05/25/2017',
                tag: ['Updates', 'Forums', 'Social'],
                viewed: false
            },
            {
                name: 'Pam',
                subject: 'Potluck',
                date: '05/31/2017',
                tag: ['Forums', 'Updates'],
                viewed: false
            }
        ]
        
        ctrl.activeTab = 'Primary'
    };
    
    // Updates tab clicked
    updateTab(tabName) {
        const ctrl = this;
        ctrl.activeTab = tabName;
    };
    
    // Sets email to viewed
    emailViewed(email) {
        console.log("fired")
        const ctrl = this;
        email.viewed = true;
    }
};

export default mailListController;
