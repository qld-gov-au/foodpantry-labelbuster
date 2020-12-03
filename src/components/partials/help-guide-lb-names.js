import { html } from 'lit-html';
import { modifyAccordionState } from '../../scripts/collapse-expand';
/* eslint-disable no-irregular-whitespace */

export default () => html`
<div class="side-padding vertical-padding">
    <h4>General requirements</h4>
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
            <input id="food-names" type="checkbox" name="tabs" tabindex="-1" aria-controls="id-panel-content-1"
                aria-expanded="false" role="checkbox" />
            <h3 class="acc-heading">
                <label for="food-names">
                    <span class="title">
                        About food names
                    </span>
                    <span class="arrow"><i></i></span>
                </label>
            </h3>

            <div class="collapsing-section" aria-hidden="true" id="id-panel-content-1">
                <p>
                    Food names must correctly describe the food. For example, strawberry yoghurt must contain strawberries. If the yoghurt contains strawberry flavouring instead of the fruit, then the name would need to be strawberry-flavoured yoghurt.
                </p>
                <p>
                    The Food Standards Code includes definitions for many foods, which includes what a food is made of. For example, a fruit juice cannot contain added water but a fruit drink can have water added.
                </p>
                <p>
                    Some food have names that must be used (
                    <button data-accordion-item="prescribed-names" class="accordion-btn">
                    prescribed names
                    </button>
                    ). For example, ‘fermented processed meat – cooked’ or ‘infant formula’. 
                </p>
                <p>
                    The name of the food must not include words, statements, claims, pictures or graphics that represent a food in a way that is untrue, misleading or dishonest. For example, you cannot show a picture of honey on a yoghurt that does not contain honey.
                </p>
                <p>
                    If the name of the food does not reflect its true nature, then you must include a description of the true nature on the label. For example, Luke’s Hot’s Sauce (red chilli pepper sauce).
                </p>
                <h4>Further reading</h4>
                <i>Australia New Zealand Food Standards Code</i>
                <ul>
                    <li>
                        <a href="http://www.comlaw.gov.au/Series/F2015L00383" target="_blank">
                            Standard 1.1.1
                        </a>
                        Structure of the Code and general provisions
                        <ul>
                            <li>
                                See section 1.1.1—13 for food sold with a specified name or representation
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </article>

        <article>
            <input id="food-names-characterising-ingredient" type="checkbox" name="tabs" tabindex="-1" aria-controls="id-panel-content-1"
                aria-expanded="false" role="checkbox" />
            <h3 class="acc-heading">
                <label for="food-names-characterising-ingredient">
                    <span class="title">
                        Characterising ingredients
                    </span>
                    <span class="arrow"><i></i></span>
                </label>
            </h3>

            <div class="collapsing-section" aria-hidden="true" id="id-panel-content-1">
                <p>
                    A characterising ingredient or component of a food is:
                </p>
                <ul>
                    <li>mentioned in the name of the food; or</li>
                    <li>usually associated with name of the food by a consumer; or</li>
                    <li>emphasised on the label of the food in words or pictures.</li>
                </ul>
                <p>
                    If an ingredient is usually associated with the food (for example, fruit in Christmas pudding), or is highlighted on the label in words, pictures, or graphics, then it is a characterising ingredient. For example:
                </p>
                <ul>
                    <li>Strawberries are a characterising ingredient in strawberry yogurt</li>
                    <li>Meat is a characterising ingredient in a meat pie</li>
                    <li>Honey is a characterising ingredient where a yoghurt label shows a picture of a pot of honey</li>
                </ul>
                <p>
                    The amount of the characterising ingredients in the food must be written on the label as a percentage or, if declared in the nutrition information panel, as the average quantity per serving and per unit quantity. 
                </p>
                <section>
                    <h4>Further reading</h4>
                    <i>Australia New Zealand Food Standards Code</i>
                    <ul>
                        <li>
                            <a href="http://www.comlaw.gov.au/Series/F2015L00398" target="_blank" rel="nofollow">
                                Standard 1.2.10
                            </a>
                            Information requirements – characterising ingredients and components of food.
                        </li>
                    </ul>
                    <p>Food Standards Australia New Zealand</p>
                    <ul>
                        <li>
                            <a href="https://www.foodstandards.gov.au/code/userguide/pages/percentagelabelling.aspx" target="_blank" rel="nofollow">
                                User Guide – Percentage labelling of food
                            </a>
                        </li>
                    </ul>
                </section>
            </div>
        </article>

        <article>
            <input id="food-names-prescribed" type="checkbox" name="tabs" tabindex="-1" aria-controls="id-panel-content-1"
                aria-expanded="false" role="checkbox" />
            <h3 class="acc-heading">
                <label for="food-names-prescribed">
                    <span class="title">
                        Prescribed names
                    </span>
                    <span class="arrow"><i></i></span>
                </label>
            </h3>

            <div class="collapsing-section" aria-hidden="true" id="id-panel-content-1">
                <p>
                    The following are considered prescribed names under the Food Standards Code and must be used when naming these foods.
                </p>
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
                
                <section>
                    <h4>Further reading</h4>
                    <i>Australia New Zealand Food Standards Code</i>
                    <ul>
                        <li>
                            <a href="http://www.comlaw.gov.au/Series/F2015L00427" target="_blank" rel="nofollow">
                                Standard 2.2.1
                            </a>
                            Meat and meat products
                        </li>
                        <li>
                            <a href="http://www.comlaw.gov.au/Series/F2015L00407" target="_blank" rel="nofollow">
                                Honey
                            </a>
                        </li>
                    </ul>
                </section>
            </div>
        </article>

        <article>
            <input id="food-names-breads" type="checkbox" name="tabs" tabindex="-1" aria-controls="id-panel-content-1"
                aria-expanded="false" role="checkbox" />
            <h3 class="acc-heading">
                <img src="https://www.qld.gov.au/?a=145849">
                <label for="food-names-breads">
                    <span class="title">
                        Breads, cereals and grains
                    </span>
                    <span class="arrow"><i></i></span>
                </label>
            </h3>

            <div class="collapsing-section" aria-hidden="true" id="id-panel-content-1">
                <p>
                    There are rules for the use of wholegrain and wholemeal in the food name.
                </p>
                <p>
                    The names ‘shortbread’, ‘crispbread’ and ‘unleavened bread’ can be used for foods which are not ‘bread’, because a consumer understands that they are not ‘bread’ as defined in the Food Standards Code. 
                </p>

                <section>
                    <h4>Further reading</h4>
                    <i>Australia New Zealand Food Standards Code</i>
                    <ul>
                        <li>
                            <a href="http://www.comlaw.gov.au/Series/F2015L00383" target="_blank" rel="nofollow">
                                Standard 1.1.1
                            </a>
                            —13 Food sold with a specified name or representation
                        </li>
                        <li>
                            <a href="http://www.comlaw.gov.au/Series/F2015L00420" target="_blank" rel="nofollow">
                                Standard 2.1.1
                            </a>
                        </li>
                    </ul>
                </section>
            </div>
        </article>

        <article>
            <input id="food-names-chocolate" type="checkbox" name="tabs" tabindex="-1" aria-controls="id-panel-content-1"
                aria-expanded="false" role="checkbox" />
            <h3 class="acc-heading">
                <img src="https://www.qld.gov.au/?a=145849">
                <label for="food-names-chocolate">
                    <span class="title">
                        Chocolate and cocoa
                    </span>
                    <span class="arrow"><i></i></span>
                </label>
            </h3>

            <div class="collapsing-section" aria-hidden="true" id="id-panel-content-1">
                <p>
                    When naming a food chocolate, it must be:
                </p>
                <ul>
                    <li>made from cocoa bean products; and</li>
                    <li>have no more than 50 g/kg of edible oils (other than cocoa butter or dairy fats); and</li>
                    <li>be prepared from a minimum of 200 g/kg of cocoa bean products.</li>
                </ul>
                <p>
                    When naming a food cocoa, it must be made from cocoa beans, from which a portion of the fat can have been removed. Cocoa can contain added salt or spices.
                </p>
                <section>
                    <h4>Further reading</h4>
                    <i>Australia New Zealand Food Standards Code</i>
                    <ul>
                        <li>
                            <a href="http://www.comlaw.gov.au/Series/F2015L00487" target="_blank" rel="nofollow">
                                Standard 2.10.4
                            </a>
                            Miscellaneous standards for other foods
                        </li>
                    </ul>
                </section>
            </div>
        </article>

        <article>
            <input
                id="food-names-alcohol"
                type="checkbox"
                name="tabs"
                tabindex="-1"
                aria-controls="id-panel-content-1"
                aria-expanded="false" role="checkbox" />

            <h3 class="acc-heading">
                <img src="https://www.qld.gov.au/?a=145849">
                <label for="food-names-alcohol">
                    <span class="title">
                        Food containing alcohol
                    </span>
                    <span class="arrow"><i></i></span>
                </label>
            </h3>
            <div class="collapsing-section" aria-hidden="true" id="id-panel-content-1">
                <p>
                    A food containing alcohol must not be represented in a way that suggests the food is non-alcoholic.
                    <br>
                    For example:
                </p>
                <ul>
                    <li>Rum balls</li>
                    <li>Brandy custard</li>
                    <li>Vanilla bean paste</li>
                </ul>
                <section>
                    <h4>Further reading</h4>
                    <i>Australia New Zealand Food Standards Code</i>
                    <ul>
                        <li>
                            <a href="http://www.comlaw.gov.au/Series/F2015L00469" target="_blank" rel="nofollow">
                                Standard 2.7.1
                            </a>
                            Labelling of alcoholic beverages and food containing alcohol
                        </li>
                    </ul>
                </section>
            </div>
        </article>

        <article>
            <input id="generic-name" type="checkbox" name="tabs" tabindex="-1" aria-controls="id-panel-content-1"
                aria-expanded="false" role="checkbox" />
            <h3 class="acc-heading">
                <img src="https://www.qld.gov.au/?a=145849">
                <label for="bcr">
                    <span class="title">
                        Fruit and vegetables
                    </span>
                    <span class="arrow"><i></i></span>
                </label>
            </h3>

            <div class="collapsing-section" aria-hidden="true" id="id-panel-content-1">
                <p>
                    <b>If the food is drink made from fruit or vegetables:</b>
                    There are naming rules for juice, juice blends and juice drinks. Please read the Food Standards Code to determine which one applies to your food.
                </p>

                <p>
                    <b>If the food is a jam:</b>
                    If you name a food jam, it must be made from no less than 400 g/kg of fruit.
                </p>

                <p>
                    A jam can include conserve but it does not include marmalade.
                </p>
                <section>
                    <h4>Further reading</h4>
                    <i>Australia New Zealand Food Standards Code</i>
                    <ul>
                        <li>
                            <a href="http://www.comlaw.gov.au/Series/F2015L00459" target="_blank" rel="nofollow">
                                Standard 2.3.2
                            </a>
                            Jam
                        </li>
                        <li>
                            <a href="http://www.comlaw.gov.au/Series/F2015L00426" target="_blank" rel="nofollow">
                                Standard 2.6.1 
                            </a>
                            Fruit juice and vegetable juice
                        </li>
                    </ul>
                </section>
            </div>
        </article>

        <article>
            <input id="food-name-hemp" type="checkbox" name="tabs" tabindex="-1" aria-controls="id-panel-content-1"
                aria-expanded="false" role="checkbox" />
            <h3 class="acc-heading">
                <img src="https://www.qld.gov.au/?a=145849">
                <label for="food-name-hemp">
                    <span class="title">
                        Hemp food products
                    </span>
                    <span class="arrow"><i></i></span>
                </label>
            </h3>

            <div class="collapsing-section" aria-hidden="true" id="id-panel-content-1">
                <p>
                    <b>If the food is, or contains, allowed low THC hemp:</b>
                    The label must not include the words ‘cannabis’, ‘marijuana’ or similar. The label cannot have pictures of any part of a cannabis plant other than the seed.
                </p>
                <section>
                    <h4>Further reading</h4>
                    <i>Australia New Zealand Food Standards Code</i>
                    <ul>
                        <li>
                            <a href="http://www.comlaw.gov.au/Series/F2015L00416" target="_blank" rel="nofollow">
                                Standard 1.4.4
                            </a>
                            Prohibited and restricted plants and fungi
                        </li>
                    </ul>
                </section>
            </div>
        </article>

        <article>
            <input id="food-name-honey" type="checkbox" name="tabs" tabindex="-1" aria-controls="id-panel-content-1"
                aria-expanded="false" role="checkbox" />
            <h3 class="acc-heading">
                <img src="https://www.qld.gov.au/?a=145849">
                <label for="food-name-honey">
                    <span class="title">
                        Honey and honey products
                    </span>
                    <span class="arrow"><i></i></span>
                </label>
            </h3>

            <div class="collapsing-section" aria-hidden="true" id="id-panel-content-1">
                <p>
                    Honey means the natural sweet substance produced by honey bees.
                </p>
                <p>
                    Food that is labelled as ‘honey’ must: 
                </p>
                <ul>
                    <li>be honey; and</li>
                    <li>contain no less than 60% reducing sugars; and no more than 21% moisture.</li>
                </ul>
                <p>
                    The food name and description must contain the prescribed name of ‘honey’.
                </p>
                <section>
                    <h4>Further reading</h4>
                    <i>Australia New Zealand Food Standards Code</i>
                    <ul>
                        <li>
                            <a href="http://www.comlaw.gov.au/Series/F2015L00389" target="_blank" rel="nofollow">
                                Standard 1.2.2
                            </a>
                            Information requirements – food identification
                        </li>
                        <li>
                            <a href="http://www.comlaw.gov.au/Series/F2015L00407" target="_blank" rel="nofollow">
                                Standard 2.8.2
                            </a>
                            Honey
                        </li>
                    </ul>
                </section>
            </div>
        </article>
START HERE.
        <article>
            <input id="food-name-jams" type="checkbox" name="tabs" tabindex="-1" aria-controls="id-panel-content-1"
                aria-expanded="false" role="checkbox" />
            <h3 class="acc-heading">
                <img src="https://www.qld.gov.au/?a=145849">
                <label for="food-name-jams">
                    <span class="title">
                        Jams
                    </span>
                    <span class="arrow"><i></i></span>
                </label>
            </h3>

            <div class="collapsing-section" aria-hidden="true" id="id-panel-content-1">
                <p>
                    Honey means the natural sweet substance produced by honey bees.
                </p>
                <p>
                    Food that is labelled as ‘honey’ must: 
                </p>
                <ul>
                    <li>be honey; and</li>
                    <li>contain no less than 60% reducing sugars; and no more than 21% moisture.</li>
                </ul>
                <p>
                    The food name and description must contain the prescribed name of ‘honey’.
                </p>
                <section>
                    <h4>Further reading</h4>
                    <i>Australia New Zealand Food Standards Code</i>
                    <ul>
                        <li>
                            <a href="http://www.comlaw.gov.au/Series/F2015L00389" target="_blank" rel="nofollow">
                                Standard 1.2.2
                            </a>
                            Information requirements – food identification
                        </li>
                        <li>
                            <a href="http://www.comlaw.gov.au/Series/F2015L00407" target="_blank" rel="nofollow">
                                Standard 2.8.2
                            </a>
                            Honey
                        </li>
                    </ul>
                </section>
            </div>
        </article>


    </section>
</div>
`;
