/**
 * @param {Event} domEvent the element's event
 * @param {String} name the name of the custom event
 * @returns {void}
 */
function fireEvent(domEvent, name) {
    const customEvent = new CustomEvent(name, { bubbles: true });
    domEvent.target.dispatchEvent(customEvent);
}
/**
 * Render a navigation bar
 * @param {String} text the button's inner text
 * @param {String} eventName the custom event that button will fire
 * @returns {HTMLElement}
 */
function navigation(text, eventName) {
    const navBar = document.createElement('nav');
    navBar.innerText = text;
    navBar.addEventListener('click', e => fireEvent(e, eventName));
    return navBar;
}

/**
* @param {Array} navBar elements 
* @return {HTMLElement}
*/
function navigationBar(navBar) {
    const container = document.createElement('div');
    container.className = 'navigation';
    const p = document.createElement('p');
    if (navBar.length > 0) {
        navBar.forEach((nav) => {
            const { text, eventName } = nav;
            const navEl = navigation(text, eventName);
            p.appendChild(navEl);
        });
    }
    container.appendChild(p);
    return container;
}

/**
 * @class NavigationBar
 */
class NavigationBar {
    constructor(target) {
        this.target = target;
        this.updateTarget(this.render());
        window.addEventListener('labelbusterPageChange', ({ detail }) => {
            this.updateTarget(this.render(detail.page, detail.navigation));
        });
    }
    /**
     * @param {Number} pageNo the page number provided by the wizard instance
     */
    // eslint-disable-next-line class-methods-use-this
    render() {
        return navigationBar([
            {
                text: 'Label Buster',
                eventName: 'navBarGoToOverview',
            },
            {
                text: '1. Terms of use',
                eventName: 'navBarGoToTnC',
            },
            {
                text: '2. About food labels',
                eventName: 'navBarGoToQuest',
            },
            {
                text: '3. Food Name',
                eventName: 'navBarGoToSummary',
            },
        ]
        );
    }
    /**
    * @param {HTMLElement} result is HTML 
    */

    updateTarget(result) {
        this.target.innerHTML = '';
        this.target.appendChild(result);
    }
}

window.controls = new NavigationBar(document.querySelector('.nav-container'));

