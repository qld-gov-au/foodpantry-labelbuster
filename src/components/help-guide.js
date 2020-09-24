import { html, render } from 'lit-html';
/**
 * @class HelpGuide
 */
// eslint-disable-next-line no-unused-vars
export class HelpGuide {
  /**
   * @param {HTMLElement} target the target for the help guide
   */
  constructor(target) {
    this.target = target;
    this.state = {
      firstView: true,
      open: true,
    };
    this.render(this.state);

    window.addEventListener('labelbusterPageChange', () => {
      this.render(this.state);
    });
  }

  _closeButton() {
    return html`
      <button
        class="btn btn-link"
        @click=${() => this.updateTemplate({ open: false })}
      >
        Hide ->
      </button>
    `;
  }

  // eslint-disable-next-line class-methods-use-this
  _overlay() {
    return html`<div class="overlay"></div>`;
  }

  // CLOSED STATE
  _callout() {
    return html`
      <button
        class="help-guide-callout"
        @click=${() => this.updateTemplate({ open: true })}
      >
        <i class="fa fa-book"></i>
        <span>Help guide</span>
      </button>
    `;
  }

  // MAIN STATE
  // eslint-disable-next-line class-methods-use-this
  _mainScreen() {
    return html`
      <div>
      <h4 id ="heading-complex" >Complex requirements</h4>
      <section class="qg-accordion flex-column" aria-label="Accordion Label">
          
      <article>
        <input
          id="about-food-labels-1"
          type="checkbox"
          name="tabs"
          tabindex="-1"
          aria-controls="id-panel-content-1"
          aria-expanded="false"
          role="checkbox">
        <h3
          class="acc-heading">
          <label for="about-food-labels-1">
            <span class="title">
            Alcoholic drinks
            </span>
            <span class="arrow"><i></i></span>
          </label>
        </h3>
        
        <div
          class="collapsing-section"
          aria-hidden="true"
          id="id-panel-content-1">
          
          <p>
          Alcohol includes beer, wine and spirits and has unique and additional 
          requirements such as number of standard drinks.           
          </p>
          <p>
          <b>Further reading</b></br>
          <i>Australia New Zealand Food Standards Code</i>
          <ul>
            <li>
            <a href="#">Standard 2.7.1</a> Labelling of alcoholic beverages and food containing alcohol
            </li>
            <li>
            <a href="#">Standard 2.7.2</a> Beer 
            </li>
            <li>
            <a href="#">Standard 2.7.3</a> Fruit wine, vegetable wine and mead
            </li>
            <li>
            <a href="#">Standard 2.7.4</a> Wine and wine product           
            </li>
            <li>
            <a href="#">Standard 2.7.5</a> Spirits
            </li>                                        
          </ul>
          </p>
        </div>
      </article>

      <article>
        <input
          id="about-food-labels-2"
          type="checkbox"
          name="tabs"
          tabindex="-1"
          aria-controls="id-panel-content-1"
          aria-expanded="false"
          role="checkbox">
        <h3
          class="acc-heading">
          <label for="about-food-labels-2">
            <span class="title">
              Claims: Nutrition, health and realted claims
            </span>
            <span class="arrow"><i></i></span>
          </label>
        </h3>
        
        <div
          class="collapsing-section"
          aria-hidden="true"
          id="id-panel-content-1">
          
          <p>
          Nutrition, health and related claims are voluntary statements made by food 
          businesses on labels and in advertising about the content 
          of certain nutrients or substances in a food, or the relationship between 
          food and health.
          </p>
          <p> Claims cannot be made about: </br>
            <ul>
              <li>
                kava
              </li>
              <li>
               infant formula
              </li>
              <li>
              any food that contains more than 1.15% alcohol by volume, other than a
              nutrition content claim about energy, carbohydrate or gluten content; 
              or salt or sodium content about a food that is not a beverage.              
              </li>              
            </ul>
          </p>

        <p>
        <b>Health Claims</b> </br>
        <p>
         Health claims refer to a relationship between a food and health. For example:
        </p>
          <ul>
          <li>
          Calcium for bones and teeth
          </li>
          <li>
            Diets high in calcium may reduce the risk of osteoporosis in people 65 years and over          
            </li>          
          </ul>
          <p>
          Health claims are not permitted on foods that are high in saturated fat, sugar or salt.</br>
          There are lists of pre-approved food-health relationships that businesses can base their 
          claims on. These are listed in <a href="#">Schedule 4 of the Code</a>.
          </p>
        </p> 

        <p><b>Nutrition content claims</b>
        <p>
          Nutrition content claims indicate the presence or absence of certain nutrients or substances 
          in the food, for example, ‘low in fat’ or ‘good source of calcium’. These claims will need to 
          meet certain criteria set out in the Standard. For example, 
          food with a ‘good source of calcium’ claim will need to contain not less than the amount of 
          calcium specified in the Standard.
        </p>
        
        <b>Endorsements</b>
        <p>
          An endorsement is a nutrition content claim or health claim that is made with the 
          permission of an endorsing body, for example the Heart Foundation Tick.
        </p>
        
        <b>Consumer value claims</b>
        <p>
          Other consumer value claims such as cage free; organic or locally grown are covered
          by Australian Competition and Consumer Commission.
        </p>
        
        <b>Further reading</b></br>
        <i>Australia New Zealand Food Standards Code</i>
        <ul>
          <li> <a href="#">Standard 1.2.7</a> Nutrition, health and related claims.
            <li>
            See section 1.2.7—23 Endorsing bodies
            </li>
            <li>
            See section 1.2.7—24 Criteria for endorsements
            </li>
          </li>
          <li>
            <a href = "#">Schedule 4</a> Nutrition, health and related claims
          </li>
          <li>
          Australian Government Department of Health
          <li>
          Getting Your Claims Right 7. Endorsing bodies and endorsements 
          <a href="#">https://www1.health.gov.au/internet/publications/publishing.nsf/Content/frs-getting-your-claims-right-toc~7-endorsing</a>        
          </li>
          </li>
          <li>
          <a href= "#">Australian Competition and Consumer Commission</a>
          <li>
          website https://www.accc.gov.au/business
          </li>
          <li>
          Food and beverage industry – Food descriptors guideline to the Trade Practices Act
          </li>
          </li>                              
        </ul>
        </p>
        </div>
      </article>
    </div>
    `;
  }

  // INITIAL STATE
  _initialTemplate() {
    return html`
      <div class="side-padding">
        <h4>
          <i class="fa fa-info-circle"></i> Important information before you
          start
        </h4>
        <p>
          The help guide is here to help you understand your labelling
          requirements.
        </p>
        <p>
          <b>
            It is important you read the information in this help guide
            carefully
          </b>
          so that you can create a food label that complies with the Food
          Standards Code.
        </p>
        <p>There are two sections in the help guide:</p>
        <ul>
          <li>General requirements</li>
          <li>Food with extra requirements</li>
        </ul>

        <h4>General requirements</h4>
        <p>
          Learn about food label rules that apply to all types of food. You can
          view help information by clicking on a link in Label Buster.
        </p>
        <figure>
          <img src="https://via.placeholder.com/338x106.png/ccc/ccc" alt="" />
        </figure>

        <h4>Food with extra requirements</h4>
        <p>
          Some foods and ingredients have extra rules in the Food Standards
          Code. Select the food groups that apply to your food or its
          ingredients to learn more about these extra rules.
        </p>
        <figure>
          <img src="https://via.placeholder.com/338x106.png/ccc/ccc" alt="" />
        </figure>

        <button
          class="qg-btn btn-primary"
          @click=${() => this.updateTemplate({ firstView: false })}
        >
          Got it!
        </button>
      </div>
    `;
  }

  updateTemplate(newState) {
    this.state = {
      ...this.state,
      ...newState,
    };

    this.render(this.state);
  }

  createTemplate(state) {
    if (state.open) {
      return html`
        ${state.firstView ? this._overlay() : ''}
        <div class="help-guide-content">
          <div class="top-block">
            <div class="side-padding">
              <i class="fa fa-book"></i>
              <h3>Help guide</h3>
            </div>
            ${!state.firstView ? this._closeButton() : ''}
          </div>
          ${state.firstView ? this._initialTemplate() : this._mainScreen()}
        </div>
      `;
    }

    return this._callout();
  }

  render() {
    render(this.createTemplate(this.state), this.target);
  }
}
