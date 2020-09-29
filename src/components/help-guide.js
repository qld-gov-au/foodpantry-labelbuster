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
      <div class="side-padding"> 
      <h4>Complex requirements</h4>
      <section class="qg-accordion flex-column" aria-label="Accordion Label">
          
      <article>
      <input
        id="alcoholic-drinks"
        type="checkbox"
        name="tabs"
        tabindex="-1"
        aria-controls="id-panel-content-1"
        aria-expanded="false"
        role="checkbox"/>
      <h3 class="acc-heading">
        <label for="alcoholic-drinks">
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
        requirements such as number of standard drinks. </br>          
        <b>Further reading</b> </br>
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
          id="nutrition-claims"
          type="checkbox"
          name="tabs"
          tabindex="-1"
          aria-controls="id-panel-content-1"
          aria-expanded="false"
          role="checkbox"/>
        <h3
          class="acc-heading">
          <label for="nutrition-claims">
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

    <article>
    <input id="drinks-made" type="checkbox" name="tabs" tabindex="-1" aria-controls="id-panel-content-1"
        aria-expanded="false" role="checkbox" />
    <h3 class="acc-heading">
        <label for="drinks-made">
            <span class="title">
                Drinks made from cereals, nuts, and/or seeds
            </span>
            <span class="arrow"><i></i></span>
        </label>
    </h3>

    <div class="collapsing-section" aria-hidden="true" id="id-panel-content-1">
        <p>
            Drinks made from cereals, nuts and or seeds are not suitable for certain age groups,
            depending on the amount of protein and fats in the product. There are strict rules on
            how this information must be labelled. </br>
            <b>Further reading</b> </br>
            <i>Australia New Zealand Food Standards Code</i>
        <ul>
            <li>
                <a href="#">Standard 1.2.3</a> Information requirements – warning statements, advisory statements and
                declarations
            </li>
            <li>
                <a href="#">Schedule 9 </a> Mandatory advisory statements
            </li>
        </ul>
        </p>
    </div>
</article>

<article>
    <input id="drinks-electrolyte" type="checkbox" name="tabs" tabindex="-1" aria-controls="id-panel-content-1"
        aria-expanded="false" role="checkbox" />
    <h3 class="acc-heading">
        <label for="drinks-electrolyte">
            <span class="title">
                Electrolyte drinks
            </span>
            <span class="arrow"><i></i></span>
        </label>
    </h3>

    <div class="collapsing-section" aria-hidden="true" id="id-panel-content-1">
        <p>
            Electrolyte drinks are formulated drinks which are designed for the rapid replacement of fluid,
            carbohydrates, electrolytes and minerals. These types of drinks, or drink bases, have strict rules about
            what substances are allowed and how this information must be labelled.
            </br>
            <b>Further reading</b> </br>
            <i>Australia New Zealand Food Standards Code</i>
        <ul>
            <li>
                <a href="#">Standard 2.6.2</a> Non-alcoholic beverages and brewed soft drinks
            </li>
        </ul>
        </p>
    </div>
</article>

<article>
    <input id="caffeinated-drinks" type="checkbox" name="tabs" tabindex="-1" aria-controls="id-panel-content-1"
        aria-expanded="false" role="checkbox" />
    <h3 class="acc-heading">
        <label for="caffeinated-drinks">
            <span class="title">
                Formulated caffeinated drinks
            </span>
            <span class="arrow"><i></i></span>
        </label>
    </h3>

    <div class="collapsing-section" aria-hidden="true" id="id-panel-content-1">
        <p>
            Formulated caffeinated drinks have very specific rules about what substances are allowed and how this
            information must be labelled.
            </br>
            <b>Further reading</b> </br>
            <i>Australia New Zealand Food Standards Code</i>
        <ul>
            <li>
                <a href="#">Standard 2.6.4</a> Formulated caffeinated beverages
            </li>
        </ul>
        </p>
    </div>
</article>

<article>
    <input id="modified-food" type="checkbox" name="tabs" tabindex="-1" aria-controls="id-panel-content-1"
        aria-expanded="false" role="checkbox" />
    <h3 class="acc-heading">
        <label for="modified-food">
            <span class="title">
                Genetically modified food
            </span>
            <span class="arrow"><i></i></span>
        </label>
    </h3>

    <div class="collapsing-section" aria-hidden="true" id="id-panel-content-1">
        <p>
            Food produced using gene technology means a food that has been derived or developed from an organism that
            has been genetically modified. Genetically modified food means a food produced using gene technology that
            contains novel DNA, novel protein or is listed in <a href="#">Schedule 26</a> of the Food Standard Code.
            </br>
            <b>Further reading</b> </br>
            <i>Australia New Zealand Food Standards Code</i>
        <ul>
            <li>
                <a href="#">Standard 1.5.2</a> Food produced using gene technology
            </li>
            <li>
                <a href="#">Schedule 26</a> Food produced using gene technology
            </li>
        </ul>
        </p>
    </div>
</article>


<article>
    <input id="irradiated-food" type="checkbox" name="tabs" tabindex="-1" aria-controls="id-panel-content-1"
        aria-expanded="false" role="checkbox" />
    <h3 class="acc-heading">
        <label for="irradiated-food">
            <span class="title">
                Irradiated food
            </span>
            <span class="arrow"><i></i></span>
        </label>
    </h3>

    <div class="collapsing-section" aria-hidden="true" id="id-panel-content-1">
        <p>
            Food irradiation is a technology that improves the safety and extends the shelf life of foods by reducing or
            eliminating microorganisms and insects. Some fruits, vegetables, herbs and spices are allowed to be
            irradiated under strict conditions.
            </br>
            <b>Further reading</b> </br>
            <i>Australia New Zealand Food Standards Code</i>
        <ul>
            <li>
                <a href="#">Standard 1.5.3</a> Irradiation of food
            </li>
        </ul>
        </p>
    </div>
</article>

<article>
    <input id="novel-food" type="checkbox" name="tabs" tabindex="-1" aria-controls="id-panel-content-1"
        aria-expanded="false" role="checkbox" />
    <h3 class="acc-heading">
        <label for="novel-food">
            <span class="title">
                Novel foods
            </span>
            <span class="arrow"><i></i></span>
        </label>
    </h3>

    <div class="collapsing-section" aria-hidden="true" id="id-panel-content-1">
        <p>
            Novel foods are non-traditional foods that require a safety assessment by FSANZ before they used in
            Australia. Examples of novel foods include:
            </br>
        <ul>
            <li>
                Dried marine micro-algae (Schizochytrium sp.) rich in docosahexaenoic acid
            </li>
            <li>
                Insects for human consumption as a protein source
            </li>
        </ul>
        <p>The <a href="#">Australian Novel Food Committee has developed resources to help determine if a food is a
                novel food that needs assessment. </a></p>
        <b>Further reading</b> </br>
        <i>Australia New Zealand Food Standards Code</i>
        <ul>
            <li>
                <a href="#">Standard 1.5.1</a> Novel foods
            </li>
            <li>
                <a href="#">Schedule 25</a> Permitted Novel foods
            </li>
        </ul>
        </p>
    </div>
</article>

<article>
    <input id="special-food" type="checkbox" name="tabs" tabindex="-1" aria-controls="id-panel-content-1"
        aria-expanded="false" role="checkbox" />
    <h3 class="acc-heading">
        <label for="special-food">
            <span class="title">
                Special purpose foods
            </span>
            <span class="arrow"><i></i></span>
        </label>
    </h3>

    <div class="collapsing-section" aria-hidden="true" id="id-panel-content-1">
        <p>
            Special purpose foods have complex labelling requirements, such as an expanded nutrition information panel,
            compositional requirements and advisory statements. Special purpose foods include:
            </br>
        <ul>
            <li>
                Infant formula products
            </li>
            <li>
                Foods for infants
            </li>
            <li>
                Formulated meal replacements and formulated supplementary foods
            </li>
            <li>
                Formulated supplementary sports foods
            </li>
            <li>
                Food for special medical purposes
            </li>
        </ul>

        <b>Further reading</b> </br>
        <i>Australia New Zealand Food Standards Code</i>
        <ul>
            <li>
                <a href="#">Standard 2.9.1</a> Infant formula products
            </li>
            <li>
                <a href="#">Schedule 2.9.2</a> Food for infants
            </li>
            <li>
                <a href="#">Standard 2.9.3</a> Formulated meal replacements and formulated supplementary foods
            </li>
            <li>
                <a href="#">Schedule 2.9.4</a> Formulated supplementary sports foods
            </li>
            <li>
                <a href="#">Schedule 2.9.5</a> Food for special medical purposes
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
    return html`
      ${!state.open ? this._callout() : ''}
      ${state.firstView ? this._overlay() : ''}
      <div
        class=${state.open
          ? 'help-guide-content open-menu'
          : 'help-guide-content close-menu'}
      >
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

  render() {
    render(this.createTemplate(this.state), this.target);
  }

  // eslint-disable-next-line class-methods-use-this
  _specialProcFood() {
    return html`<div class="side-padding">
<h4>General requirements</h4>
<section class="qg-accordion flex-column" aria-label="Accordion Label">

    <article>
        <input id="about-food" type="checkbox" name="tabs" tabindex="-1" aria-controls="id-panel-content-1"
            aria-expanded="false" role="checkbox" />
        <h3 class="acc-heading">
            <label for="about-food">
                <span class="title">
                    About food names
                </span>
                <span class="arrow"><i></i></span>
            </label>
        </h3>

        <div class="collapsing-section" aria-hidden="true" id="id-panel-content-1">
            <p>
                Food names must correctly describe the food. For example, strawberry yoghurt must contain
                strawberries. If the yoghurt contains strawberry flavouring instead of the fruit, then the name
                would need to be strawberry-flavoured yoghurt.
            </p>
            <p>    
                The Food Standards Code includes definitions for many foods, which includes what a food is made of.
                For example, a fruit juice cannot contain added water but a fruit drink can have water added.
            </p>
            <p>
                Some food have names that must be used (<a href="#">prescribed names</a>). For example, ‘fermented
                processed meat –
                cooked’ or ‘infant formula’.
            </p>
            <p>
                The name of the food must not include words, statements, claims, pictures or graphics that represent
                a food in a way that is untrue, misleading or dishonest. For example, you cannot show a picture of
                honey on a yoghurt that does not contain honey.
            </p>
            <p>
                If the name of the food does not reflect its true nature, then you must include a description of the
                true nature on the label. For example, Luke’s Hot’s Sauce (<i>red chilli pepper sauce</i>).
            </p>

            <p><b>Further reading</b></br>
                <i>Australia New Zealand Food Standards Code</i>
            <ul>
                <li>
                    <a href="#">Standard 1.1.1</a> Structure of the Code and general provisions
                <li>
                    See section 1.1.1—13 for food sold with a specified name or representation
                </li>
                </li>
            </ul>
            </p>
        </div>
    </article>

    <article>
        <input id="about-ingredients" type="checkbox" name="tabs" tabindex="-1" aria-controls="id-panel-content-1"
            aria-expanded="false" role="checkbox" />
        <h3 class="acc-heading">
            <label for="about-ingredients">
                <span class="title">
                    Characterising ingredients
                </span>
                <span class="arrow"><i></i></span>
            </label>
        </h3>

        <div class="collapsing-section" aria-hidden="true" id="id-panel-content-1">
            <p>
                A characterising ingredient or component of a food is:
            <ul>
                <li>
                    mentioned in the name of the food; or
                </li>
                <li>
                    usually associated with name of the food by a consumer; or
                </li>
                <li>
                    emphasised on the label of the food in words or pictures.
                </li>
            </ul>
            If an ingredient is usually associated with the food (for example, fruit in Christmas pudding), or is
            highlighted on the label in words, pictures, or graphics, then it is a characterising ingredient. For
            example:</br>
            <ul>
                <li>
                    Strawberries are a characterising ingredient in strawberry yogurt </li>
                <li>
                    Meat is a characterising ingredient in a meat pie </li>
                <li>
                    Honey is a characterising ingredient where a yoghurt label shows a picture of a pot of honey
                </li>
            </ul></br>

            The amount of the characterising ingredients in the food must be written on the label as a percentage
            or, if declared in the nutrition information panel, as the average quantity per serving and per unit
            quantity.
            </p>
            <p><b>Further reading</b></br>
                <i>Australia New Zealand Food Standards Code</i>
            <ul>
                <li>
                    <a href="#">Standard 1.2.10</a> Information requirements – characterising ingredients and
                    components of food.
                </li>
            </ul></br>
            Food Standards Australia New Zealand
            <ul>
                <li>
                    <a href="#">User Guide – Percentage labelling of food</a>
                </li>
            </ul>
            </p>
        </div>
    </article>

    <article>
        <input id="prescribed-names" type="checkbox" name="tabs" tabindex="-1" aria-controls="id-panel-content-1"
            aria-expanded="false" role="checkbox" />
        <h3 class="acc-heading">
            <label for="prescribed-names">
                <span class="title">
                    Prescribed names
                </span>
                <span class="arrow"><i></i></span>
            </label>
        </h3>

        <div class="collapsing-section" aria-hidden="true" id="id-panel-content-1">
            <p>
                The following are considered prescribed names under the Food Standards Code and must be used when
                naming these foods. </br>
            <ul>
                <li>
                    fermented manufactured meat – cooked
                </li>
                <li>
                    fermented manufactured meat – heat treated
                </li>
                <li>
                    fermented manufactured meat – not heat treated
                </li>
                <li>
                    fermented processed meat – cooked
                </li>
                <li>
                    fermented processed meat – heat treated
                </li>
                <li>
                    fermented processed meat – not heat treated
                </li>
                <li>
                    honey
                </li>
            </ul>
            </p>
            <p>
                <b>Further reading</b> </br>
                <i>Australia New Zealand Food Standards Code</i>
            <ul>
                <li>
                    <a href="#">Standard 2.2.1</a> Meat and meat products
                </li>
                <li>
                    <a href="#">Standard 2.8.2</a> Honey
                </li>
            </ul>
            </p>
        </div>
    </article>
</section>


<section class="qg-accordion flex-column" aria-label="Accordion Label">
<h4>Food with extra requirements</h4>

    <article>
        <input id="bcr" type="checkbox" name="tabs" tabindex="-1" aria-controls="id-panel-content-1"
            aria-expanded="false" role="checkbox" />
        <h3 class="acc-heading">
            <label for="bcr">
                <span class="title">
                    Breads, cereals and grains
                </span>
                <span class="arrow"><i></i></span>
            </label>
        </h3>

        <div class="collapsing-section" aria-hidden="true" id="id-panel-content-1">
            <p>
                There are rules for the use of wholegrain and wholemeal in the food name.
                </br>
                The names ‘shortbread’, ‘crispbread’ and ‘unleavened bread’ can be used for foods which are not
                ‘bread’, because a consumer understands that they are not ‘bread’ as defined in the Food Standards
                Code.
                <b>Further reading</b> </br>
                <i>Australia New Zealand Food Standards Code</i>
            <ul>
                <li>
                    <a href="#">Standard 1.1.1</a> -13 Food sold with a specified name or representation
                </li>
                <li>
                    <a href="#">Standard 2.1.1</a> -Cereal and cereal products
                </li>
            </ul>
            </p>
        </div>
    </article>

    <article>
        <input id="choco-cocoa" type="checkbox" name="tabs" tabindex="-1" aria-controls="id-panel-content-1"
            aria-expanded="false" role="checkbox" />
        <h3 class="acc-heading">
            <label for="choco-cocoa">
                <span class="title">
                    Chocolate and cocoa
                </span>
                <span class="arrow"><i></i></span>
            </label>
        </h3>

        <div class="collapsing-section" aria-hidden="true" id="id-panel-content-1">
            <p>
                When naming a food chocolate, it must be:
                </br>
            <ul>
                <li>
                    made from cocoa bean products; and
                </li>
                <li>
                    have no more than 50 g/kg of edible oils (other than cocoa butter or dairy fats); and
                </li>
                <li>
                    be prepared from a minimum of 200 g/kg of cocoa bean products.
                </li>
            </ul>
            </br>
            When naming a food cocoa, it must be made from cocoa beans, from which a portion of the fat can have
            been removed. Cocoa can contain added salt or spices.
            </p>
            <b>Further reading</b> </br>
            <i>Australia New Zealand Food Standards Code</i>
            <ul>
                <li>
                    <a href="#">Standard 2.10.4</a> Miscellaneous standards for other foods
                </li>
            </ul>
            </p>
        </div>
    </article>

    <article>
        <input id="alcohol-food" type="checkbox" name="tabs" tabindex="-1" aria-controls="id-panel-content-1"
            aria-expanded="false" role="checkbox" />
        <h3 class="acc-heading">
            <label for="alcohol-food">
                <span class="title">
                    Food containing alcohol
                </span>
                <span class="arrow"><i></i></span>
            </label>
        </h3>

        <div class="collapsing-section" aria-hidden="true" id="id-panel-content-1">
            <p>
                A food containing alcohol must not be represented in a way that suggests the food is non-alcoholic.
                </br>
                For example:
            <ul>
                <li>
                    Rum balls
                </li>
                <li>
                    Brandy custard
                </li>
                <li>
                    Vanilla bean paste
                </li>
            </ul>
            <b>Further reading</b> </br>
            <i>Australia New Zealand Food Standards Code</i>
            <ul>
                <li>
                    <a href="#">Standard 2.7.1</a> Labelling of alcoholic beverages and food containing alcohol
                </li>
            </ul>
            </p>
        </div>
    </article>


    <article>
        <input id="fruit-veg" type="checkbox" name="tabs" tabindex="-1" aria-controls="id-panel-content-1"
            aria-expanded="false" role="checkbox" />
        <h3 class="acc-heading">
            <label for="fruit-veg">
                <span class="title">
                    Fruit and vegetables
                </span>
                <span class="arrow"><i></i></span>
            </label>
        </h3>

        <div class="collapsing-section" aria-hidden="true" id="id-panel-content-1">
            <p><b>If the food is drink made from fruit or vegetables:</b></br>
                There are naming rules for juice, juice blends and juice drinks. Please read the Food Standards Code
                to determine which one applies to your food.
                </br>
                <b>If the food is a jam:</b></br>
                If you name a food jam, it must be made from no less than 400 g/kg of fruit. A jam can include
                conserve but it does not include marmalade.
                </br>
                <b>Further reading</b> </br>
                <i>Australia New Zealand Food Standards Code</i>
            <ul>
                <li>
                    <a href="#">Standard 2.3.2</a> Jam
                </li>
                <li>
                    <a href="#">Standard 2.6.1</a> Fruit juice and vegetable juice
                </li>
            </ul>
            </p>
        </div>
    </article>

    <article>
        <input id="hemp-food" type="checkbox" name="tabs" tabindex="-1" aria-controls="id-panel-content-1"
            aria-expanded="false" role="checkbox" />
        <h3 class="acc-heading">
            <label for="hemp-food">
                <span class="title">
                    Hemp food products
                </span>
                <span class="arrow"><i></i></span>
            </label>
        </h3>

        <div class="collapsing-section" aria-hidden="true" id="id-panel-content-1">
            <p><b>If the food is, or contains, allowed low THC hemp:</b>
                The label must not include the words ‘cannabis’, ‘marijuana’ or similar. The label cannot have
                pictures of any part of a cannabis plant other than the seed
                </br>
                <b>Further reading</b> </br>
                <i>Australia New Zealand Food Standards Code</i>
            <ul>
                <li>
                    <a href="#">Standard 1.4.4</a> Prohibited and restricted plants and fungi
                </li>
            </ul>
            </p>
        </div>
    </article>

    <article>
        <input id="honey-food" type="checkbox" name="tabs" tabindex="-1" aria-controls="id-panel-content-1"
            aria-expanded="false" role="checkbox" />
        <h3 class="acc-heading">
            <label for="honey-food">
                <span class="title">
                    Honey and honey products
                </span>
                <span class="arrow"><i></i></span>
            </label>
        </h3>

        <div class="collapsing-section" aria-hidden="true" id="id-panel-content-1">
            <p>
                Honey means the natural sweet substance produced by honey bees. </br>
                Food that is labelled as ‘honey’ must:</br>
            <ul>
                <li>
                    be honey; and
                </li>
                <li>
                    contain no less than 60% reducing sugars; and no more than 21% moisture.
                </li>
            </ul>
            The food name and description must contain the prescribed name of ‘honey’.</br>
            <b>Further reading</b> </br>
            <i>Australia New Zealand Food Standards Code</i>
            <ul>
                <li>
                    <a href="#">Standard 1.2.2</a> Information requirements – food identification
                </li>
                <li>
                    <a href="#">Schedule 2.8.2</a> Honey
                </li>
            </ul>
            </p>
        </div>
    </article>
    <article>
<input id="jam-food" type="checkbox" name="tabs" tabindex="-1" aria-controls="id-panel-content-1"
    aria-expanded="false" role="checkbox" />
<h3 class="acc-heading">
    <label for="jam-food">
        <span class="title">
            Jams
        </span>
        <span class="arrow"><i></i></span>
    </label>
</h3>

<div class="collapsing-section" aria-hidden="true" id="id-panel-content-1">
    <p>
        If you name a food jam, it must be made from no less than 400 g/kg of fruit. </br>
        A jam can include conserve, but does not include marmalade</br>
    </p>
    <p><b>Further reading</b> </br>
        <i>Australia New Zealand Food Standards Code</i>
    <ul>
        <li>
            <a href="#">Standard 2.3.2</a> Jam
        </li>
    </ul>
    </p>
</div>
</article>
<article>
<input id="kava-food" type="checkbox" name="tabs" tabindex="-1" aria-controls="id-panel-content-1"
    aria-expanded="false" role="checkbox" />
<h3 class="acc-heading">
    <label for="kava-food">
        <span class="title">
            Kava and kava root
        </span>
        <span class="arrow"><i></i></span>
    </label>
</h3>

<div class="collapsing-section" aria-hidden="true" id="id-panel-content-1">
    <p>
        Kava and kava root are allowed to be sold in Australia only if the food is:
    </p>
    <ul>
        <li>
            A drink made from kava root using cold water; or
        </li>
        <li>
            Dried or raw kava root.
        </li>
    </ul>
    <p><b>Further reading</b> </br>
        <i>Australia New Zealand Food Standards Code</i>
    <ul>
        <li>
            <a href="#">Standard 2.6.3</a> Kava
        </li>
    </ul>
    </p>
</div>
</article>
<article>
<input id="meat-food" type="checkbox" name="tabs" tabindex="-1" aria-controls="id-panel-content-1"
    aria-expanded="false" role="checkbox" />
<h3 class="acc-heading">
    <label for="meat-food">
        <span class="title">
            Meat and meat products
        </span>
        <span class="arrow"><i></i></span>
    </label>
</h3>

<div class="collapsing-section" aria-hidden="true" id="id-panel-content-1">
    <p>
        There are naming rules for meat, including jerky, meat pies and sausages.</br>
        There are <a href="#"> prescribed names</a> for fermented manufactured meat.
    </p>
    <p><b>Further reading</b> </br>
        <i>Australia New Zealand Food Standards Code</i>
    <ul>
        <li>
            <a href="#">Standard 2.2.1</a> Meat and meat products
        </li>
    </ul>
    </p>
</div>
</article>
<article>
<input id="dairy-food" type="checkbox" name="tabs" tabindex="-1" aria-controls="id-panel-content-1"
    aria-expanded="false" role="checkbox" />
<h3 class="acc-heading">
    <label for="dairy-food">
        <span class="title">
            Milk, dairy and dairy alternatives
        </span>
        <span class="arrow"><i></i></span>
    </label>
</h3>

<div class="collapsing-section" aria-hidden="true" id="id-panel-content-1">
    <p>
        If your food is milk, dairy or dairy alternative, you need to read the Food Standards Code to identify the
        necessary naming format. For example, the ingredient name ‘soy’ in soy milk or soy ice cream indicates that
        these foods are not dairy products.
    </p>
    <p><b>Further reading</b> </br>
        <i>Australia New Zealand Food Standards Code</i>
    <ul>
        <li>
            <a href="#">Standard 1.1.1</a> Structure of the code and general provisions
        <li>
            See section 1.1.1—13 for food sold with a specified name or representation
        </li>
        </li>
        <li>
            <a href="#">Standard 2.5.1</a> Milk
        </li>
        <li>
            <a href="#">Standard 2.5.2</a> Cream
        </li>
        <li>
            <a href="#">Standard 2.5.3</a> Fermented milk products
        </li>
        <li>
            <a href="#">Standard 2.5.4</a> Cheese
        </li>
        <li>
            <a href="#">Standard 2.5.5</a> Butter
        </li>
        <li>
            <a href="#">Standard 2.5.6</a> Ice cream
        </li>
        <li>
            <a href="#">Standard 2.5.7</a> Dried milk, evaporated milk and condensed milk
        </li>
    </ul>
    </p>
</div>
</article>
<article>
<input id="non-alcoholic-drinks" type="checkbox" name="tabs" tabindex="-1" aria-controls="id-panel-content-1"
    aria-expanded="false" role="checkbox" />
<h3 class="acc-heading">
    <label for="non-alcoholic-drinks">
        <span class="title">
            Non-alcoholic drinks
        </span>
        <span class="arrow"><i></i></span>
    </label>
</h3>

<div class="collapsing-section" aria-hidden="true" id="id-panel-content-1">
    <p><b>If the food is drink made from fruit or vegetables:</b>
        There are naming rules for juice, juice blends and juice drinks. Please read the Food Standards Code to
        determine which one applies to your food.
    </p>
    <p><b>If the food is non-alcoholic or brewed soft drink:</b>
        Non-alcoholic drinks and brewed soft drinks (eg fermented ginger beer or kombucha) must not suggest the
        product is an alcoholic beverage.
    </p>
    <p><b>If the food is tea or coffee:</b>
        There are naming rules for coffee and tea. Please read the Food Standards Code to ensure your label is
        correct.
    </p>
    Coffee and tea include types that are:
    <ul>
        <li>
            caffeinated
        </li>
        <li>
            decaffeinated,
        </li>
        <li>
            instant or
        </li>
        <li>
            soluble
        </li>
    </ul>
    <p><b>If your food is spring water or mineral water:</b>
        Spring and mineral water means ground water.
    </p>
    <p><b>Further reading</b> </br>
        <i>Australia New Zealand Food Standards Code</i>
    <ul>
        <li>
            <a href="#">Standard 2.6.1</a> Fruit juice and vegetable juice
        </li>
        <li>
            <a href="#">Standard 2.6.2</a> Non-alcoholic beverages and brewed soft drinks
        </li>
        <li>
            <a href="#">Standard 2.10.4</a> Miscellaneous standards for other foods
        </li>
    </ul>
    </p>
</div>
</article>
<article>
<input id="nuts-food" type="checkbox" name="tabs" tabindex="-1" aria-controls="id-panel-content-1"
    aria-expanded="false" role="checkbox" />
<h3 class="acc-heading">
    <label for="nuts-food">
        <span class="title">
            Nuts and seeds
        </span>
        <span class="arrow"><i></i></span>
    </label>
</h3>

<div class="collapsing-section" aria-hidden="true" id="id-panel-content-1">
    <p>
        Food that is sold as peanut butter must be a peanut based spread that has no less than 850 g/kg of
        peanuts.
    </p>
    <p><b>Further reading</b> </br>
        <i>Australia New Zealand Food Standards Code</i>
    <ul>
        <li>
            <a href="#">Standard 2.10.4</a> Miscellaneous standards for other foods
        </li>
    </ul>
    </p>
</div>
</article>
<article>
<input id="oils-food" type="checkbox" name="tabs" tabindex="-1" aria-controls="id-panel-content-1"
    aria-expanded="false" role="checkbox" />
<h3 class="acc-heading">
    <label for="oils-food">
        <span class="title">
            Oils and margarine
        </span>
        <span class="arrow"><i></i></span>
    </label>
</h3>

<div class="collapsing-section" aria-hidden="true" id="id-panel-content-1">
    <p>
        Margarine means an edible oil spread containing no less than 800 g/kg of edible oils.</br>
        You can only name your food an oil spread or table margarine, if the food contain no less than 55 μg/kg of
        vitamin D.
    </p>
    <p><b>Further reading</b> </br>
        <i>Australia New Zealand Food Standards Code</i>
    <ul>
        <li>
            <a href="#">Standard 2.4.2</a> Edible oil spreads
        </li>
    </ul>
    </p>
</div>
</article>
<article>
<input id="salt-food" type="checkbox" name="tabs" tabindex="-1" aria-controls="id-panel-content-1"
    aria-expanded="false" role="checkbox" />
<h3 class="acc-heading">
    <label for="salt-food">
        <span class="title">
            Salt and salt products
        </span>
        <span class="arrow"><i></i></span>
    </label>
</h3>

<div class="collapsing-section" aria-hidden="true" id="id-panel-content-1">
    <p>
        Foods that are labelled salt or a salt product have special requirements. These products cannot make
        nutrition or health claim, must have extra information in the nutrition information panel and must be made
        from certain elements.</br>
        You need to read the Food Standards Code to ensure your label is correct.
    </p>
    <p><b>Further reading</b> </br>
        <i>Australia New Zealand Food Standards Code</i>
    <ul>
        <li>
            <a href="#">Standard 2.10.2</a> Salt and salt products
        </li>
        <li>
            <a href="#">Standard 2.10.4</a> Miscellaneous standards for other foods
        </li>
    </ul>
    </p>
</div>
</article>
<article>
<input id="sugar-food" type="checkbox" name="tabs" tabindex="-1" aria-controls="id-panel-content-1"
    aria-expanded="false" role="checkbox" />
<h3 class="acc-heading">
    <label for="sugar-food">
        <span class="title">
            Miscellaneous standards for other foods
        </span>
        <span class="arrow"><i></i></span>
    </label>
</h3>

<div class="collapsing-section" aria-hidden="true" id="id-panel-content-1">
    <p>
        Food that is sold as white sugar or a sugar must be purified crystallised sucrose and have no less than
        99.7% sucrose when dry.</br>
        Food that is sold as icing must be a mixture of sugar and other foods for use as a coating and includes
        frosting, plastic icing and icing gel.
    </p>
    <p><b>Further reading</b> </br>
        <i>Australia New Zealand Food Standards Code</i>
    <ul>
        <li>
            <a href="#">Standard 2.8.1</a> Sugar and sugar products
        </li>
    </ul>
    </p>
</div>
</article>
<article>
<input id="vinegar-food" type="checkbox" name="tabs" tabindex="-1" aria-controls="id-panel-content-1"
    aria-expanded="false" role="checkbox" />
    <h3 class="acc-heading">
        <span class="title">  
        <label for="vinegar-food">
        Vinegar
        </span>
        <span class="arrow"><i></i></span>
    </label>
    </h3>

<div class="collapsing-section" aria-hidden="true" id="id-panel-content-1">
    <p>
        A food that is sold as imitation vinegar or vinegar must contain no less than 40 g/kg of acetic acid.
    </p>
    <p><b>Further reading</b> </br>
        <i>Australia New Zealand Food Standards Code</i>
    <ul>
        <li>
            <a href="#">Standard 2.10.1</a> Vinegar and related products
        </li>
    </ul>
    </p>
</div>
</article>

</section>
</div>`;
  }
}
