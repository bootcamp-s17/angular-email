import $ from 'jquery';

class mailListController {
    constructor($rootScope, $interval) {
        const ctrl = this;
        ctrl.$rootScope = $rootScope;
        
        ctrl.$rootScope.$watch('searchText', () => {
            // watches for when the text box gets updated
            ctrl.searchText = ctrl.$rootScope.searchText;
        });
        
        ctrl.$rootScope.$watch('filter', () => {
            // watches for inbox type
            switch(ctrl.$rootScope.filter) {
                case 'starred':
                    console.log('starred');
                    break;
                case 'important':
                    console.log('important');
                    break;
            }
            ctrl.filter = ctrl.$rootScope.filter;
        });
        
        // return to mail list if inbox is clicked on sidebar component
        ctrl.$rootScope.$watch('inboxClicked', () => {
            ctrl.$rootScope.inboxClicked = false;
            ctrl.emailContent = false;
            ctrl.$rootScope.filter = false;
            console.log('false');
        });
        
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
                description: 'stuff and things',
                date: '5/30/2017',
                tag: ['Primary', 'Promotions'],
                viewed: false,
                important: false,
                starred: false
            },
            {
                name: 'Lana',
                subject: 'Save the whales',
                description: 'stuff and things',
                date: '5/29/2017',
                tag: ['Social', 'Forums'],
                viewed: false,
                important: false,
                starred: false
            },
            {
                name: 'Figus',
                subject: 'Taxes',
                description: 'stuff and things',
                date: '5/25/2017',
                tag: ['Promotions', 'Primary'],
                viewed: false,
                important: false,
                starred: false
            },
            {
                name: 'Ray',
                subject: 'Ski Trip',
                description: 'stuff and things',
                date: '5/25/2017',
                tag: ['Updates', 'Forums', 'Social'],
                viewed: false,
                important: false,
                starred: false
            },
            {
                name: 'Pam',
                subject: 'Potluck',
                description: 'stuff and things',
                date: '5/31/2017',
                tag: ['Forums', 'Updates'],
                viewed: false,
                important: false,
                starred: false
            }
        ]
        
        // generates random emails
        $interval(() => {
            ctrl.randomEmail(ctrl.tabs)
        }, 3000);
        
        ctrl.activeTab = 'Primary'
        ctrl.countNewEmails();
    };
    
    // Updates tab clicked
    updateTab(tabName) {
        const ctrl = this;
        ctrl.activeTab = tabName;
    };
    
    // Sets email to viewed
    emailViewed(email) {
        const ctrl = this;
        email.viewed = true;
        ctrl.emailContent = email;
        ctrl.countNewEmails();
    };
    
    // Create Email
    randomEmail(tabs) {
        const ctrl = this;
        // pick random tab category
        let category = tabs[Math.floor(Math.random()*tabs.length)].name;
        
        // Create a date
        let date = new Date();
        date = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
        
        $.ajax({
            url: 'http://hipsterjesus.com/api/',
            dataType: 'json'
        }).then((data) => {
            let description = data.text;
            // hits random user api to generate a random user
            $.ajax({
                url: 'https://randomuser.me/api/',
                dataType: 'json',
                success: (data) => {
                    let res = data.results[0];
                    let email = {
                        name: `${res.name.first} ${res.name.last}`,
                        email: res.email,
                        subject: 'Hello World',
                        description: description,
                        date: date,
                        viewed: false,
                        tag: [category, category],
                        important: false,
                        starred: false
                    }
                    ctrl.emails.push(email);
                    ctrl.countNewEmails();
                }
            }); 
        })
    };
    
    // counts the number of unread emails and displays next to
    // sidebar inbox 
    countNewEmails() {
        const ctrl = this;
        let count = 0;
        ctrl.emails.map((email) => {
            if (!email.viewed) {
                count++;
            }
        });
        
        ctrl.$rootScope.inbox = count;
    };
    
    // saves email to important
    important(email) {
        email.important = !email.important;
    };
    
    // saves email to starred
    starred(email) {
        email.starred = !email.starred;
    }
};

export default mailListController;
