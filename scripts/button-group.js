/**
 * @returns {void}
 */
function fireEvent() {
    const event = new Event('view-change');
    event.dispatchEvent();
}

/**
 * @returns {TemplateString}
 */
function startNow() {
    return `
        <button ${() => console.log('javascript things!')}>
            Accept things
        </button>
    `
}

/**
 * @returns {TemplateString}
 */
function buttonGroup(wizard) {
    return `
        <div>
            ${button('previous', wizard.prevPage)}
            ${button('next', wizard.nextPage)}
        </div>
    `;
}

/**
 * @returns {TemplateString}
 */
function finalStep() {
    return `
        <div>
            This is the final step
        </div>
    `;
}

/**
 * @returns {TemplateString}
 */
function button(text, pageHandler) {
    return `
        <button onclick=${() => {
            pageHandler && pageHandler();
            fireEvent();
        }}>
            ${text}
        </button>
    `;
}

module.exports = class ButtonGroup {
    constructor(target, formWizard) {
        this.wizard = formWizard;
        this.target = target;
        this.target.innerHTML = this.render();

        document.body.addEventListener('view-change', () => {
            this.target = this.render();
        })
    }

    getPageNo() {
        return this.wizard.page;
    }

    render() {
        if (this.getPageNo() === 1) {
            return startNow();
        }
        if (this.getPageNo() === 13) {
            return finalStep();
        }
        return buttonGroup(this.wizard);
    }
}