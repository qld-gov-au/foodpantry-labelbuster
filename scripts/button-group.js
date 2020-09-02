/**
 * Render a button
 * @param {String} text the button's inner text
 * @param {function} handler the handler the button should fire on click
 * @param {Boolean} isPrimary indicates whether button is primary
 * @returns {TemplateString}
 */
function button(text, handler, isPrimary = false) {
  const _button = document.createElement('button');
  _button.innerText = text;
  _button.className = `qg-btn btn-default ${isPrimary && 'primary'}`;
  _button.addEventListener('click', handler);
  return _button;
}

/**
 * @param {Event} domEvent the element's event
 * @param {String} name the name of the custom event
 * @returns {void}
 */
function fireEvent(domEvent, name) {
  const customEvent = new Event(name, { bubbles: true });
  domEvent.target.dispatchEvent(customEvent);
}

function buttonGroup() {
  const container = document.createElement('div');
  const previous = button(
    'Back',
    e => fireEvent(e, 'labelbusterGoToPrevious'),
    true
  );
  const next = button('Next', e => fireEvent(e, 'labelbusterGoToNext'));
  container.appendChild(previous);
  container.appendChild(next);
  return container;
}

class ButtonGroup {
  constructor(target) {
    this.target = target;
    this.target.appendChild(this.render());

    document.body.addEventListener('labelbusterPageChange', () => {
      this.target = this.render();
    });
  }

  render() {
    return buttonGroup(this);
  }
}

window.buttonGroup = new ButtonGroup(
  document.querySelector('.button-container')
);
