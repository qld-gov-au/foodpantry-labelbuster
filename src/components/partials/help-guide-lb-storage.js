import { html } from 'lit-html';
import { modifyAccordionState } from '../../scripts/collapse-expand';

export default () => html`
      <div class="side-padding vertical-padding"> 
      <h4>Storage and use</h4>

      <section class="qg-accordion flex-column" aria-label="Accordion Label">
        <div class="controls-group">
          <input
            type="radio"
            name="control"
            id="expand"
            class="controls expand"
            value="expand"
            role="radio">
    
          <label
            for="expand"
            class="controls"
            @click=${e => modifyAccordionState(e, true)}>
            Expand all
          </label>
          <span class="controls">|</span>
          
          <input
            type="radio"
            name="control"
            id="collapse"
            class="controls collapse"
            value="collapse"
            role="radio">
          
          <label
            for="collapse"
            class="controls"
            @click=${e => modifyAccordionState(e, false)}>
            Collapse all
          </label>
        </div>

        <article>
          <input
            id="directions-for-use"
            type="checkbox"
            name="tabs"
            tabindex="-1"
            aria-controls="id-panel-content-1"
            aria-expanded="false"
            role="checkbox"/>
          <h3 class="acc-heading">
            <label for="directions-for-use">
              <span class="title">
              Directions for use
              </span>
              <span class="arrow"><i></i></span>
            </label>
          </h3>

          <div
            class="collapsing-section"
            aria-hidden="true"
            id="id-panel-content-1">
            <p>
              <p>
                Directions for use are the instructions for how to prepare the
                food so that it is ready to eat. This includes directions for
                that are required for health or safety reasons. 
              </p>
              <p>
                For example: frozen chicken tenders may have the directions for
                use as ‘This is a raw product. Must be cooked prior to eating.
                Cook from frozen. Please ensure chicken is fully cooked before
                eating’.
              </p>
              <b>Further information</b>
              <br>
              <i>Australia and New Zealand Food Standards Code</i>
              <ul>
                <li>
                  <a
                    href="http://www.comlaw.gov.au/Series/F2015L00393"
                    target="_blank">
                    Standard 1.2.6
                  </a>
                  Information requirements – directions for use and storage
                </li>
              </ul>
            </p>
          </div>
        </article>

        <article>
          <input
            id="storage-conditions"
            type="checkbox"
            name="tabs"
            tabindex="-1"
            aria-controls="id-panel-content-1"
            aria-expanded="false"
            role="checkbox"/>
          <h3 class="acc-heading">
            <label for="storage-conditions">
              <span class="title">
                Storage conditions
              </span>
              <span class="arrow"><i></i></span>
            </label>
          </h3>

          <div
            class="collapsing-section"
            aria-hidden="true"
            id="id-panel-content-1">
            <p>
              <p>
                Storage conditions are instructions about how to store food so
                that the food will keep until the best-before or use-by date. 
              </p>
              <p>
                For example, storage conditions for milk may be ‘store below
                5°C’.
              </p>
              <b>Further information</b>
              <br>
              <i>Australia and New Zealand Food Standards Code</i>
              <ul>
                <li>
                  <a
                    href="http://www.comlaw.gov.au/Series/F2015L00393"
                    target="_blank">
                    Standard 1.2.6
                  </a>
                  Information requirements – directions for use and storage
                </li>
              </ul>
            </p>
          </div>
        </article>

      </section>
</div>
`;
