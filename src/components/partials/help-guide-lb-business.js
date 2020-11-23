import { html } from 'lit-html';
import { modifyAccordionState } from '../../scripts/collapse-expand';

export default () => html`
      <div class="side-padding vertical-padding"> 
      <h4>What are business details?</h4>

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
            id="business-details"
            type="checkbox"
            name="tabs"
            tabindex="-1"
            aria-controls="id-panel-content-1"
            aria-expanded="false"
            role="checkbox"/>
          <h3 class="acc-heading">
            <label for="business-details">
              <span class="title">
              Business details
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
                Business details are the name and address of the food business
                that is the supplier, manufacturer, packer, vendor or importer
                of the food.
              </p>
              <h4>Further reading</h4>
              <br>
              <i>Australia New Zealand Food Standards Code</i>
              <ul>
                <li>
                  <a
                    href="http://www.comlaw.gov.au/Series/F2015L00386"
                    target="_blank">
                    Standard 1.2.1
                  </a>
                  Requirements to have labels or otherwise provide information
                </li>
                <li>
                  <a
                    href="http://www.comlaw.gov.au/Series/F2015L00389"
                    target="_blank">
                    Standard 1.2.2
                  </a>
                  Information requirements – food identification
                </li>
              </ul>
              <br>
              <i>Food Standards Australia and New Zealand</i>
              <ul>
                <li>
                  <a
                    href="https://www.foodstandards.gov.au/code/userguide/pages/overviewoffoodlabell1267.aspx"
                    target="_blank">
                    User Guides - Overview of Food Labelling
                  </a>
                </li>
              </ul>
            </p>
          </div>
        </article>
      </section>
</div>
`;
