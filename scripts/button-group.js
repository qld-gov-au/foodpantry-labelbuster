/**
 * Render a button
 * @param {String} text the button's inner text
 * @param {function} handler the handler the button should fire on click
 * @returns {TemplateString}
 */
function button(text, handler) {
  const _button = document.createElement('button');
  button.innerText = text;
  button.addEventListener('click', handler);
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
  const previous = button('previous', e =>
    fireEvent(e, 'labelbusterGoToPrevious')
  );
  const next = button('next', e => fireEvent(e, 'labelbusterGoToNext'));
  container.appendChild(previous);
  container.appendChild(next);
  return container;
}

class ButtonGroup {
  constructor(target) {
    this.target = target;
    this.target.appendChild(this.render());

    document.body.addEventListener('view-change', () => {
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
