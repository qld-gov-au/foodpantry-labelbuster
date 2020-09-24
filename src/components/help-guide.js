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
      <button @click=${() => this.updateTemplate({ open: false })}>
        close
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
      <button @click=${() => this.updateTemplate({ open: true })}>
        <h3 class="helpGuide"><i class="fa fa-book"></i> Help guide</h3>
      </button>
    `;
  }

  // MAIN STATE
  // eslint-disable-next-line class-methods-use-this
  _mainScreen() {
    return html`
      <div>
      <h4>Complex requirements</h4>
      <section class="qg-accordion flex-column" aria-label="Accordion Label">
    
      <div class="controls-group">
        <input
        type="radio"
        name="control"
        id="collapse"
        class="controls collapse"
        value="collapse"
        role="radio">
  
        <label for="collapse" class="controls">Collapse all</label>
      
        <span class="controls">|</span>
        
        <input
          type="radio"
          name="control"
          id="expand"
          class="controls expand"
          value="expand"
          role="radio">
        
        <label for="expand" class="controls">Expand all</label>
      </div>
      
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
              <span class="acc-number">1</span>
              Food name and description
            </span>
            <span class="arrow"><i></i></span>
          </label>
        </h3>
        
        <div
          class="collapsing-section"
          aria-hidden="true"
          id="id-panel-content-1">
          
          <p>
            Food labels must show the name of the food to help identify the food.
          </p>
  
          <p>
            The name and description of the food must reflect its true nature. For
            example, strawberry yoghurt must contain strawberries. If the yoghurt
            contained strawberry flavouring rather than real fruit, then the name
            would need to indicate that it is strawberry-flavoured yoghurt.
          </p>
  
          <figure>
            <img src="https://via.placeholder.com/300x300.png/ccc/ccc" alt="" />
          </figure>
  
          <p>
            If the name of the food does not reflect its true nature, then you
            must include a description of the true nature on the label. For
            example, Luke’s Hot’s Sauce (<i>red chilli pepper sauce</i>).
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
              <span class="acc-number">2</span>
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
            To help customers identify where food has come from or to use for a
            food recall when food is unsafe, a food label must include the
            following business details:
            <ul>
              <li>
                name of the business supplying the food
              </li>
              <li>
                business address in Australia or New Zealand, or a description of
                the location, of the premises where the business is being
                operated. A postal address cannot be used.
              </li>
            </ul>
          </p>
          <figure>
            <img src="https://via.placeholder.com/300x300.png/ccc/ccc" alt="" />
          </figure>
        </div>
      </article>
  
      <article>
        <input
          id="about-food-labels-3"
          type="checkbox"
          name="tabs"
          tabindex="-1"
          aria-controls="id-panel-content-1"
          aria-expanded="false"
          role="checkbox">
        <h3
          class="acc-heading">
          <label for="about-food-labels-3">
            <span class="title">
              <span class="acc-number">3</span>
              Weights
            </span>
            <span class="arrow"><i></i></span>
          </label>
        </h3>
        
        <div
          class="collapsing-section"
          aria-hidden="true"
          id="id-panel-content-1">
          
          <p>
            The National Measurement Institute is responsible for making sure food
            is measured and weighed correctly, and that the food is labelled with
            the correct weight and unit. 
          </p>
          
          <p>
            For example, food labelled as being 500g should weigh 500g and use the
            metric system of grams (g), kilograms (kg), millilitres (mL), litres
            (L), etc.
          </p>
  
          <p>
            Visit the
            <a
              href="https://www.industry.gov.au/regulations-and-standards/buying-and-selling-goods-and-services-by-weights-and-other-measures"
              target="_blank">
              NMI website
            </a>
            for more information on how to comply with the laws around weights and
            other measures.
          </p>
  
          <figure>
            <img src="https://via.placeholder.com/300x300.png/ccc/ccc" alt="" />
          </figure>
  
        </div>
      </article>
  
      <article>
        <input
          id="about-food-labels-4"
          type="checkbox"
          name="tabs"
          tabindex="-1"
          aria-controls="id-panel-content-1"
          aria-expanded="false"
          role="checkbox">
        <h3
          class="acc-heading">
          <label for="about-food-labels-4">
            <span class="title">
              <span class="acc-number">4</span>
              Date marks
            </span>
            <span class="arrow"><i></i></span>
          </label>
        </h3>
        
        <div
          class="collapsing-section"
          aria-hidden="true"
          id="id-panel-content-1">
          
          <p>
            Food packaged with a shelf life of 2 years or less must show a date
            mark.
          </p>
          
          <p>
            Foods that should be eaten before a certain date for health and safety
            reasons must be labelled with a use-by date. Otherwise, a best-before
            date is required if the food has a shelf life of less than 2 years.
            Although it may be safe to eat the food after the best-before date,
            the food may have lost quality or some nutritional value.
          </p>
  
          <p>
            Bread with a shelf-life of less than 7 days, can use a baked-for date
            or baked-on date instead of a best-before date.
          </p>
  
          <figure>
            <img src="https://via.placeholder.com/300x300.png/ccc/ccc" alt="" />
            <img src="https://via.placeholder.com/300x300.png/ccc/ccc" alt="" />
            <img src="https://via.placeholder.com/300x300.png/ccc/ccc" alt="" />
          </figure>
  
        </div>
      </article>
  
      <article>
        <input
          id="about-food-labels-5"
          type="checkbox"
          name="tabs"
          tabindex="-1"
          aria-controls="id-panel-content-1"
          aria-expanded="false"
          role="checkbox">
        <h3
          class="acc-heading">
          <label for="about-food-labels-5">
            <span class="title">
              <span class="acc-number">5</span>
              Lot identification
            </span>
            <span class="arrow"><i></i></span>
          </label>
        </h3>
        
        <div
          class="collapsing-section"
          aria-hidden="true"
          id="id-panel-content-1">
          
          <p>
            The lot identification means a number or other information that
            identifies where the food was made and the batch it was part of.
            Often the date mark, name and address of the manufacturer meets this
            requirement.
          </p>
  
          <figure>
            <img src="https://via.placeholder.com/300x300.png/ccc/ccc" alt="" />
          </figure>
        </div>
      </article>
  
      <article>
        <input
          id="about-food-labels-6"
          type="checkbox"
          name="tabs"
          tabindex="-1"
          aria-controls="id-panel-content-1"
          aria-expanded="false"
          role="checkbox">
        <h3
          class="acc-heading">
          <label for="about-food-labels-6">
            <span class="title">
              <span class="acc-number">6</span>
              Storage conditions and directions for use
            </span>
            <span class="arrow"><i></i></span>
          </label>
        </h3>
        
        <div
          class="collapsing-section"
          aria-hidden="true"
          id="id-panel-content-1">
          
          <p>
            <b>Storage conditions</b>
            <br>
            To keep food until its best-before or use-by date include storage
            conditions on your label.
          </p>
          <p>
            <b>Directions for use</b>
            <br>
            A food label must have directions on how to use or prepare the food if
            needed for health and safety reasons.
          </p>
  
          <figure>
            <img src="https://via.placeholder.com/300x300.png/ccc/ccc" alt="" />
          </figure>
        </div>
      </article>
  
      <article>
        <input
          id="about-food-labels-7"
          type="checkbox"
          name="tabs"
          tabindex="-1"
          aria-controls="id-panel-content-1"
          aria-expanded="false"
          role="checkbox">
        <h3
          class="acc-heading">
          <label for="about-food-labels-7">
            <span class="title">
              <span class="acc-number">7</span>
              Ingredients
            </span>
            <span class="arrow"><i></i></span>
          </label>
        </h3>
        
        <div
          class="collapsing-section"
          aria-hidden="true"
          id="id-panel-content-1">
          
          <p>
            A food label must contain a list of ingredients. The Food Standards
            Code has rules that describe how each ingredient must be listed, what
            it is called, and how it is formatted.
          </p>
          
          <figure>
            <img src="https://via.placeholder.com/300x300.png/ccc/ccc" alt="" />
          </figure>
  
        </div>
      </article>
  
      <article>
        <input
          id="about-food-labels-8"
          type="checkbox"
          name="tabs"
          tabindex="-1"
          aria-controls="id-panel-content-1"
          aria-expanded="false"
          role="checkbox">
        <h3
          class="acc-heading">
          <label for="about-food-labels-8">
            <span class="title">
              <span class="acc-number">8</span>
              Advisory statements, warning statements and declarations
            </span>
            <span class="arrow"><i></i></span>
          </label>
        </h3>
        
        <div
          class="collapsing-section"
          aria-hidden="true"
          id="id-panel-content-1">
          
          <p>
            To help consumers avoid foods that are not safe for them to eat due to
            health conditions they may have, the Food Standards Code lists
            mandatory advisory statements, warning statements and allergen
            declarations that must be shown on a food label depending on the type
            of food and its ingredients.
          </p>
          
          <figure>
            <img src="https://via.placeholder.com/300x300.png/ccc/ccc" alt="" />
          </figure>
        </div>
      </article>
  
      <article>
        <input
          id="about-food-labels-9"
          type="checkbox"
          name="tabs"
          tabindex="-1"
          aria-controls="id-panel-content-1"
          aria-expanded="false"
          role="checkbox">
        <h3
          class="acc-heading">
          <label for="about-food-labels-9">
            <span class="title">
              <span class="acc-number">9</span>
              Nutrition information panel
            </span>
            <span class="arrow"><i></i></span>
          </label>
        </h3>
        
        <div
          class="collapsing-section"
          aria-hidden="true"
          id="id-panel-content-1">
          
          <p>
            The nutrition information panel (NIP) shows the number of servings in
            the package and the average amounts in a serving of food and per 100
            grams (or 100 millilitres) of food for:
            <ul>
              <li>energy (in kilojoules)</li>
              <li>protein</li>
              <li>fat (including saturated fat)</li>
              <li>carbohydrates (including sugars)</li>
              <li>sodium</li>
            </ul>
          </p>
          
          <figure>
            <img src="https://via.placeholder.com/300x300.png/ccc/ccc" alt="" />
          </figure>
  
          <p>
            If a nutrition, health or related claim is made, the NIP must also
            show the amount of nutrient or substance. For example: the amount of
            calcium must be shown in the nutrition information panel if a claim
            about calcium is made.
          </p>
        </div>
      </article>
  
      <article>
        <input
          id="about-food-labels-10"
          type="checkbox"
          name="tabs"
          tabindex="-1"
          aria-controls="id-panel-content-1"
          aria-expanded="false"
          role="checkbox">
        <h3
          class="acc-heading">
          <label for="about-food-labels-10">
            <span class="title">
              <span class="acc-number">10</span>
              Claims
            </span>
            <span class="arrow"><i></i></span>
          </label>
        </h3>
        
        <div
          class="collapsing-section"
          aria-hidden="true"
          id="id-panel-content-1">
          
          <p>
            There are strict requirements about claims that can be made and how
            they should be written on a label. 
          </p>
          
          <p>
            Nutrition content claims are claims about the content of certain
            nutrients or substances in a food. For example, contains calcium.
          </p>
  
          <p>
            Health claims refer to a relationship between food and health. For
            example, calcium for bone and teeth.
          </p>
  
          <figure>
            <img src="https://via.placeholder.com/300x300.png/ccc/ccc" alt="" />
          </figure>
        </div>
      </article>
  
    </section>
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
        <div>
          <div class="top-block">
            ${!state.firstView ? this._closeButton() : ''}
            <h3 class="helpGuide"><i class="fa fa-book"></i> Help guide</h3>
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
