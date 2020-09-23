/* eslint-disable */

import { fixture, html, expect } from '@open-wc/testing';
import { ButtonGroup } from '../src/components/button-group';

describe('testing button group', () => {
  let element;
  let buttonGroup;

  beforeEach(async () => {
    element = await fixture(html` <div class="navigation" id="target"></div> `);
    buttonGroup = new ButtonGroup(element, 'navigation');
  });

  it('Configuration is set on load', async () => {
    expect(buttonGroup.data).to.equal('navigation');
    expect(buttonGroup.target).to.equal(element);
  });

  it('Button group renders as expected', async () => {
    const data = {
      navigation: [
        {
          title: 'Previous',
          event: 'labelbusterGoToPrevious',
          cssClass: 'class1',
          disabled: false,
          displayed: true,
        },
        {
          title: 'Next',
          event: 'labelbusterGoToNext',
          cssClass: 'class2',
          disabled: true,
          displayed: true,
        },
        {
          title: 'Invisible',
          event: 'noevent',
          cssClass: 'nope',
          disabled: false,
          displayed: false,
        },
      ],
    };

    buttonGroup.updateTarget(data, element);
    const button = element.querySelector('button');
    expect(button.innerHTML).includes('Previous');
    expect(button).to.be.ok;
    expect(JSON.stringify(button.classList)).includes('class1');
    expect(button.dataset.detail).includes('undefined');
    expect(button.dataset.event).equals('labelbusterGoToPrevious');

    const secondButton = element.querySelectorAll('button')[1];
    expect(secondButton.innerHTML).includes('Next');
    expect(secondButton).to.be.ok;
    expect(JSON.stringify(secondButton.classList)).includes('class2');
    expect(secondButton.dataset.detail).includes('undefined');
    expect(secondButton.dataset.event).equals('labelbusterGoToNext');
    expect(secondButton.disabled).equals(true);

    const thirdButton = element.querySelectorAll('button')[2];
    expect(thirdButton).to.not.be.ok;
  });

  it('Fire event fires an event', async (done) => {
    window.addEventListener('testEvent', () => {
      done();
    });
    const newEvent = {
      target: {
        dataset: {
          event: 'testEvent',
          detail: JSON.stringify({ nothing: true }),
        },
      },
    };
    buttonGroup.fireEvent(newEvent);
  });

  it('Fire listens to the update event without failure', async () => {
    try {
      const newEvent = new CustomEvent('formiowrapperPageChange', {
        bubbles: true,
        detail: {
          navigation: [],
        },
      });
      window.dispatchEvent(newEvent);
    } catch (e) {
      console.log(e);
      expect('failure').to.equal(true);
    }
    expect(true).to.equal(true);
  });
});
