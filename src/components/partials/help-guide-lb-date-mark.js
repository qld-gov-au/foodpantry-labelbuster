import { html } from 'lit-html';
import { modifyAccordionState } from '../../scripts/collapse-expand';

export default () => html`
  <div class="side-padding vertical-padding">
    <h2>General requirements</h2>
    <section class="qg-accordion flex-column" aria-label="Accordion Label">
      <div class="controls-group">
        <input
          type="radio"
          name="control"
          id="expand"
          class="controls expand"
          value="expand"
          role="radio"
        />

        <label
          for="expand"
          class="controls"
          @click="${e => modifyAccordionState(e, true)}"
        >
          Expand all
        </label>
        <span class="controls">|</span>
