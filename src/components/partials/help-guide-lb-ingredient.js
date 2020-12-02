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
            <input id="ingredient-list" type="checkbox" name="tabs" tabindex="-1" aria-controls="id-panel-content-1"
                aria-expanded="false" role="checkbox" />
            <button class="acc-heading">
                <label for="ingredient-list">
                    <span class="title">
                        What is an ingredient list?
                    </span>
                    <span class="arrow"><i></i></span>
                </label>
            </button>

            <div class="collapsing-section" aria-hidden="true" id="id-panel-content-1">
                <p>
                    The ingredient list is a statement of ingredients that are used to make the food. The ingredient
                    list must be shown on the label for most packaged food.
                </p>
                <p>
                    Some packaged foods do not need an ingredient list. For example:
                </p>
                <ul>
                    <li>
                        Individual portion packs
                    </li>
                    <li>
                        <a href="#food-package">
                            Foods in small packages
                        </a>
                    </li>
                    <li>
                        <a href="#one-ingredient">
                            Foods with one ingredient
                        </a>
                    </li>
                    <li>
                        Water that is packaged and labelled in accordance with
                        <a href="https://www.legislation.gov.au/Series/F2015L00465" target="_blank">
                            Standard 2.6.2
                        </a>
                        of the Food Standards Code.
                        See
                        <a href="#non-alcoholic">
                            non-alcoholic drinks
                        </a>
                        in food with extra requirements for more information.
                    </li>
                    <li>
                        Whole or cut fruit and vegetables in packaging that does not obscure its nature or quality.
                    </li>
                </ul>

                <p>
                    An ingredient is to be listed using either:
                </p>

                <ul>
                    <li>
                        the common name
                    </li>
                    <li>
                        a name that describes the true nature of the ingredient
                    </li>
                    <li>
                        a
                        <a href="#generic-name">
                            generic name
                        </a>
                        specified in the Food Standards Code.
                    </li>
                </ul>

                <p>
                    The ingredient name may also need a further description to ensure that the consumer is not misled
                    about the nature of an
                    ingredient. For example: if cheese powder is used as an ingredient, it should be listed as “cheese
                    powder” instead of
                    “cheese”.
                </p>
                <p>
                    There are requirements in the Food Standards Code for how ingredients are listed.
                </p>

                <ul>
                    <li>
                        List ingredients in descending order of ingoing weight
                    </li>
                    <li>
                        Declare all of the ingredients that make up a
                        <a href="#comp-ingredient">
                            compound ingredient
                        </a>
                        , if it contributes 5% or more
                        to the final food.
                    </li>
                    <li>
                        Declare food additives including flavouring substances
                    </li>
                    <li>
                        Define the percentage of a characterising ingredient and component in the food.
                    </li>
                    <li>
                        Declare where
                        <a href="#alt-ingredient">
                            alternative ingredients
                        </a>
                        are sometimes used to make the food.
                    </li>
                </ul>
                <p>
                    Some ingredients are
                    <a href="#exempt-ingredient">
                        exempt ingredients
                    </a>
                    that do not need to be included in the ingredient list.
                </p>
                <section>
                    <p>
                    <h4>Further reading</h4>
                    <i>Australia New Zealand Food Standards Code</i>
                    <ul>
                        <li>
                            <a href="https://www.legislation.gov.au/Series/F2015L00386" target="_blank">
                                Standard 1.2.1
                            </a>
                            Requirements to have labels or otherwise provide information
                        </li>
                        <li>
                            <a href="https://www.legislation.gov.au/Series/F2015L00392" target="_blank">
                                Standard 1.2.4
                            </a>
                            Information requirements – statement of ingredients
                        </li>
                        <li>
                            <a href="https://www.legislation.gov.au/Series/F2015L00398" target="_blank">
                                Standard 1.2.10
                            </a>
                            Information requirements – characterising ingredients and components of food
                        </li>
                        <li>
                            <a href="https://www.legislation.gov.au/Series/F2015L00402" target="_blank">
                                Standard 1.3.3
                            </a>
                            Processing aids
                        </li>
                        <li>
                            <a href="https://www.legislation.gov.au/Series/F2015L00477" target="_blank">
                                Schedule 7
                            </a>
                            Food additive class names (for statement of ingredients)
                        </li>
                        <li>
                            <a href="https://www.legislation.gov.au/Series/F2015L00478" target="_blank">
                                Schedule 8
                            </a>
                            Food additive names and code numbers (for statement of ingredients)
                        </li>
                        <li>
                            <a href="https://www.legislation.gov.au/Series/F2015L00480" target="_blank">
                                Schedule 10
                            </a>
                            Generic names of ingredients and conditions for their use
                        </li>
                        <li>
                            <a href="https://www.legislation.gov.au/Series/F2015L00442" target="_blank">
                                Schedule 16
                            </a>
                            Types of substances that may be used as food additives
                        </li>
                    </ul>
                    </p>
                    <p>
                        Food Standards Australia and New Zealand
                    <ul>
                        <li>
                            <a href="https://www.foodstandards.gov.au/code/userguide/pages/overviewoffoodlabell1267.aspx"
                                target="_blank">
                                User Guides - Overview of Food Labelling
                            </a>
                        </li>
                    </ul>
                    </p>
                </section>
            </div>
        </article>

        <article>
            <input id="alt-ingredient" type="checkbox" name="tabs" tabindex="-1" aria-controls="id-panel-content-1"
                aria-expanded="false" role="checkbox" />
            <button class="acc-heading">
                <label for="alt-ingredient">
                    <span class="title">
                        Alternative ingredients
                    </span>
                    <span class="arrow"><i></i></span>
                </label>
            </button>

            <div class="collapsing-section" aria-hidden="true" id="id-panel-content-1">
                <p>
                    Where from time to time, a food ingredient or additive is replaced with another food or additive
                    that serves the same
                    function, both can be listed, provided it is clear that a substitute or alternative ingredient is
                    being declared.
                </p>
                <p>
                    For example, the statement of ingredients may read: safflower or sunflower oil.
                </p>
            </div>
        </article>

        <article>
            <input id="char-ingredient" type="checkbox" name="tabs" tabindex="-1" aria-controls="id-panel-content-1"
                aria-expanded="false" role="checkbox" />
            <button class="acc-heading">
                <label for="char-ingredient">
                    <span class="title">
                        Characterising ingredients
                    </span>
                    <span class="arrow"><i></i></span>
                </label>
            </button>

            <div class="collapsing-section" aria-hidden="true" id="id-panel-content-1">
                <p>
                    If you mention an ingredient, category of ingredients or a part of the food in the name on the
                    label, then it becomes a
                    characterising ingredient or component.
                </p>
                <p>
                    If an ingredient is usually associated with the food (for example, fruit in Christmas pudding), or
                    is emphasised on the
                    label in words, pictures, or graphics) then it is a characterising ingredient.
                </p>
                <p>
                    For example:
                <ul>
                    <li>
                        Strawberries are a characterising ingredient in strawberry yogurt
                    </li>
                    <li>
                        Meat is a characterising ingredient in a meat pie
                    </li>
                    <li>
                        Honey is a characterising ingredient in a yoghurt with a picture of a pot of honey on the label
                    </li>
                </ul>
                The amount of the characterising ingredients in the food must be written on the label as a percentage
                or, if declared in
                the nutrition information panel, as the average quantity per serving and per unit quantity. For example,
                strawberry
                yoghurt ingredients must state <b>Strawberries (23%)</b>.
                </p>
                <p>
                    If the amount of the characterising ingredient is less than 5%, then the proportion must be given to
                    the
                    nearest 0.5
                    decimal place, e.g. Banana (4.5%)
                </p>
                <p>
                    The percentage information is not required for the following:
                <ul>
                    <li>
                        prepared filled rolls, sandwiches, bagels or similar products
                    </li>
                    <li>
                        food sold at a fundraising event, for example, cake stalls and school fetes </li>
                    <li>
                        food sold in small packages
                    </li>
                    <li>
                        cured and/or dried meat flesh in whole cuts or pieces
                    </li>
                    <li>
                        foods with one ingredient
                    </li>
                    <li>
                        ingredient or category of ingredients that is used in small quantities for the purpose of
                        flavouring, for example, herb
                        and garlic bread
                    </li>
                </ul>
                </p>
                <section>
                    <p>
                    <h4>Further reading</h4>
                    <i>Australia New Zealand Food Standards Code</i>
                    <ul>
                        <li>
                            <a href="https://www.legislation.gov.au/Series/F2015L00385" target="_blank">
                                Standard 1.1.2
                            </a>
                            Definitions used throughout the Code
                            <ul>
                                <li>
                                    See section 1.1.2—4 Definition of characterising component and characterising
                                    ingredient
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="https://www.legislation.gov.au/Series/F2015L00386" target="_blank">
                                Standard 1.2.1
                            </a>
                            Requirements to have labels or otherwise provide information
                            <ul>
                                <li>
                                    See section 1.2.1—9 Information requirements for food for sale that is not required
                                    to bear a label
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="https://www.legislation.gov.au/Series/F2015L00398" target="_blank">
                                Standard 1.2.10
                            </a>
                            Information requirements – characterising ingredients and components of food.
                        </li>
                    </ul></br>
                    Food Standards Australia New Zealand
                    <ul>
                        <li>
                            <a href="https://www.foodstandards.gov.au/code/userguide/pages/percentagelabelling.aspx"
                                target="_blank">
                                User Guide – Percentage labelling of food
                            </a>
                        </li>
                    </ul>
                    </p>
                </section>
            </div>
        </article>

        <article>
            <input id="comp-ingredient" type="checkbox" name="tabs" tabindex="-1" aria-controls="id-panel-content-1"
                aria-expanded="false" role="checkbox" />
            <button class="acc-heading">
                <label for="comp-ingredient">
                    <span class="title">
                        Compound ingredients
                    </span>
                    <span class="arrow"><i></i></span>
                </label>
            </button>

            <div class="collapsing-section" aria-hidden="true" id="id-panel-content-1">
                <p>
                    A compound ingredient is an ingredient that contains two or more ingredients.
                </p>
                <p>
                    For example:
                <ul>
                    <li>
                        Tomato paste is an ingredient in a pre-made pizza base. The tomato paste is a <b>compound
                            ingredient </b> it is made up of
                        the following ingredients tomato, canola oil, olive oil, sugar, salt, citric acid (330), basil,
                        oregano.
                    </li>
                    <li>
                        Dark chocolate chips are used as an ingredient in chocolate chip muffins. The dark chocolate
                        chips are a <b>compound ingredient</b> as they are made up of the following ingredients: sugar,
                        cocoa mass, cocoa butter,
                        emulsifier (soy lecithin),
                        natural vanilla flavour.
                    </li>
                </ul>
                </p>
                <p>
                    If a food contains compound ingredients which contributes 5% or more to the final food, then all the
                    foods and additives
                    in that compound ingredient must be declared in the ingredient list.
                </p>
                <p>
                    If a food contains compound ingredients which contribute less than 5% to the final food, then only
                    allergens and food
                    additives must be listed.
                </p>
            </div>
        </article>

        <article>
            <input id="exempt-ingredient" type="checkbox" name="tabs" tabindex="-1" aria-controls="id-panel-content-1"
                aria-expanded="false" role="checkbox" />
            <button class="acc-heading">
                <label for="exempt-ingredient">
                    <span class="title">
                        Exempt ingredients
                    </span>
                    <span class="arrow"><i></i></span>
                </label>
            </button>

            <div class="collapsing-section" aria-hidden="true" id="id-panel-content-1">
                <p>
                    The ingredient list does not need to include: </br>
                <ul>
                    <li>
                        An ingredient which is completely removed during processing. For example: through evaporation.
                    </li>
                    <li>
                        Added water that:
                        <ul>
                            <li>
                                is added to reconstitute dehydrated or concentrated ingredients; or
                            </li>
                            <li>
                                forms part of broth, brine or syrup that is declared in the statement of ingredients or
                                is part
                                of the name of the food; or
                            </li>
                            <li>
                                constitutes less than 5% of the food; or
                            </li>
                        </ul>
                    </li>
                    <li>
                        A food or substance that is used as a processing aid. For example: antifoaming or clarifying
                        agent used during food
                        manufacture.
                    </li>
                    <li>
                        An ingredient of a flavouring substance (additive) – except in some circumstances
                        (refer to
                        <a href="#food-additive">
                            food additives section
                        </a>
                        )
                    </li>
                </ul>
                </p>
                <p>
                    The ingoing weight of water or an ingredient which is completely removed during processing must be
                    calculated according
                    to Standard 1.2.4—5 of the Food Standards Code and added to the statement of ingredients in the
                    order of
                    descending
                    weight.
                </p>
                <section>
                    <p>
                    <h4>Further reading</h4>
                    <i>Australia New Zealand Food Standards Code</i>
                    <ul>
                        <li>
                            <a href="https://www.legislation.gov.au/Series/F2015L00386" target="_blank">
                                Standard 1.2.1
                            </a>
                            Requirements to have labels or otherwise provide information
                        </li>
                        <li>
                            <a href="https://www.legislation.gov.au/Series/F2015L00392" target="_blank">
                                Standard 1.2.4
                            </a>
                            Information requirements – statement of ingredients
                        </li>
                        <li>
                            <a href="https://www.legislation.gov.au/Series/F2015L00402" target="_blank">
                                Standard 1.3.3
                            </a>
                            Processing aids
                        </li>
                    </ul></br>
                    Food Standards Australia New Zealand
                    <ul>
                        <li>
                            <a href="https://www.foodstandards.gov.au/code/userguide/pages/overviewoffoodlabell1267.aspx"
                                target="_blank">
                                User Guide – Overview of Food Labelling
                            </a>
                        </li>
                    </ul>
                    </p>
                </section>
            </div>
        </article>

        <article>
            <input id="food-additive" type="checkbox" name="tabs" tabindex="-1" aria-controls="id-panel-content-1"
                aria-expanded="false" role="checkbox" />
            <button class="acc-heading">
                <label for="food-additive">
                    <span class="title">
                        Food additives
                    </span>
                    <span class="arrow"><i></i></span>
                </label>
            </button>

            <div class="collapsing-section" aria-hidden="true" id="id-panel-content-1">
                <p>
                    <b>If you are adding food additives:</b>
                    </br>
                    Food additives are substances added to foods to keep them fresh or to enhance their colour, flavour
                    or texture. They may
                    include food colourings, flavour enhancers (such as MSG) or a range of preservatives. Most food
                    additives are listed on
                    the product label, along with other ingredients, in a descending order by weight (flavours are an
                    exception and do not
                    need to be identified).
                </p>
                <p>
                    In most cases you can define the food additive with either its name or the code number. Refer to
                    <a href="https://www.legislation.gov.au/Series/F2015L00477" target="_blank">
                        Schedule 7
                    </a>
                    and
                    <a href="https://www.legislation.gov.au/Series/F2015L00478" target="_blank">
                        Schedule 8
                    </a>
                    for food additive class names and code numbers. For example:
                <ul>
                    <li>
                        cochineal may be listed as Colour (cochineal) or Colour (120)
                    </li>
                    <li>
                        sodium sulphite may be shown as Preservative (sodium sulphite) or Preservative (221).
                    </li>
                    <li>
                        fermented manufactured meat – not heat treated
                    </li>
                </ul>
                </p>
                <p>
                    <b>If you are adding vitamins and minerals:</b>
                    </br>
                </p>
                <p>
                    Vitamins and minerals are a specific type of food additive. The vitamin or mineral may be declared
                    using the class name
                    of ‘vitamin’ or ‘mineral’.
                </p>
                <p>
                    Claims may be made about the presence of vitamins or minerals in food. However, there are complex
                    labelling requirements
                    for making these claims that are not covered by Label Buster. We recommend you seek professional
                    advice from a food
                    labelling consultant to prepare your food label.
                </p>
                <section>
                    <p>
                    <h4>Further reading</h4>
                    <i>Australia New Zealand Food Standards Code</i>
                    <ul>
                        <li>
                            <a href="https://www.legislation.gov.au/Series/F2015L00385" target="_blank">
                                Standard 1.1.2
                            </a>
                            Definitions used throughout the Code
                        </li>
                        <li>
                            <a href="https://www.legislation.gov.au/Series/F2015L00392" target="_blank">
                                Standard 1.2.4
                            </a>
                            Information requirements – statement of ingredients
                        <li>
                            See section 1.2.4—7 Declaration of substances used as food additives
                        </li>
                        <li>
                            See section 1.2.4—8 Declaration of vitamins and minerals
                        </li>
                        </li>
                        <li>
                            <a href="https://www.legislation.gov.au/Series/F2015L00398" target="_blank">
                                Standard 1.2.10
                            </a>
                            Information requirements – characterising ingredients and
                            components of food.
                        </li>
                        <li>
                            <a href="https://www.legislation.gov.au/Series/F2015L00396" target="_blank">
                                Standard 1.3.1
                            </a>
                            Food additives
                        </li>
                        <li>
                            <a href="https://www.legislation.gov.au/Series/F2015L00477" target="_blank">
                                Schedule 7
                            </a>
                            Food additive class names (for statement of ingredients)
                        </li>
                        <li>
                            <a href="https://www.legislation.gov.au/Series/F2015L00478" target="_blank">
                                Schedule 8
                            </a>
                            Food additive names and code numbers (for statement of ingredients)
                        </li>
                        <li>
                            <a href="https://www.legislation.gov.au/Series/F2015L00442" target="_blank">
                                Schedule 16
                            </a>
                            Types of substances that may be used as food additives
                        </li>
                        <li>
                            <a href="https://www.legislation.gov.au/Series/F2015L00449" target="_blank">
                                Schedule 17
                            </a>
                            Vitamins and minerals
                        </li>
                    </ul>
                    </p>
                </section>
            </div>
        </article>

        <article>
            <input id="generic-name" type="checkbox" name="tabs" tabindex="-1" aria-controls="id-panel-content-1"
                aria-expanded="false" role="checkbox" />
            <button class="acc-heading">
                <label for="generic-name">
                    <span class="title">
                        Generic names
                    </span>
                    <span class="arrow"><i></i></span>
                </label>
            </button>

            <div class="collapsing-section" aria-hidden="true" id="id-panel-content-1">
                <p>
                    Generic names may be used in the ingredient list, instead of: </br>
                <ul>
                    <li>
                        a common name of an ingredient, or
                    </li>
                    <li>
                        a name that describes the true nature of the ingredient.
                    </li>
                </ul>
                </p>
                <p>
                    The following generic names of foods can be used without any specific conditions:
                <ul>
                    <li>
                        cheese
                    </li>
                    <li>
                        cocoa butter
                    </li>
                    <li>
                        crystallised fruit
                    </li>
                    <li>
                        fruit
                    </li>
                    <li>
                        gum bases
                    </li>
                    <li>
                        herbs
                    </li>
                    <li>
                        meat
                    </li>
                    <li>
                        milk protein
                    </li>
                    <li>
                        poultry meat
                    </li>
                    <li>
                        spices
                    </li>
                    <li>
                        vegetables
                    </li>
                </ul>
                </p>
                <p>
                    For example, the term ‘fruit’ can be used in place of bananas or oranges.
                </p>
                <p>
                    The following generic food names may only be used under specific conditions in the Food Standards
                    Code:
                <ul>
                    <li>
                        <a href="#bcr">
                            cereals
                        </a>
                    </li>
                    <li>
                        <a href="#oils-margarine">
                            fats or oils
                        </a>
                    </li>
                    <li>
                        <a href="#fish-seafood">
                            fish
                        </a>
                    </li>
                    <li>
                        <a href="#milk-dairy">
                            milk solids
                        </a>
                    </li>
                    <li>
                        <a href="#meat-prod">
                            offal
                        </a>
                    </li>
                    <li>
                        <a href="#nuts-seeds">
                            nuts
                        </a>
                    </li>
                    <li>
                        <a href="#bcr">
                            starch
                        </a>
                    </li>
                    <li>
                        <a href="#sugar-alt">
                            sugar
                        </a>
                    </li>
                </ul>
                </p>
                <section>
                    <p>
                    <h4>Further reading</h4>
                    <i>Australia New Zealand Food Standards Code</i>
                    <ul>
                        <li>
                            <a href="https://www.legislation.gov.au/Series/F2015L00392" target="_blank">
                                Standard 1.2.4
                            </a>
                            Information requirements – statement of ingredients.
                            <ul>
                                <li>
                                    See section 1.2.4—4 Ingredients to be listed by common, descriptive or generic name
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="https://www.legislation.gov.au/Series/F2015L00480" target="_blank">
                                Schedule 10
                            </a>
                            Generic names of ingredients and conditions for their use
                        </li>
                    </ul>
                    </p>
                </section>
            </div>
        </article>

        <article>
            <input id="order-ingredient" type="checkbox" name="tabs" tabindex="-1" aria-controls="id-panel-content-1"
                aria-expanded="false" role="checkbox" />
            <button class="acc-heading">
                <label for="order-ingredient">
                    <span class="title">
                        Order of ingredients
                    </span>
                    <span class="arrow"><i></i></span>
                </label>
            </button>

            <div class="collapsing-section" aria-hidden="true" id="id-panel-content-1">
                <p>
                    All ingredients must be listed in descending order of ingoing weight. This means that the ingredient
                    with the greatest
                    amount is listed first, then the ingredient with the second greatest amount and so on.
                </p>
                <p>
                    For food that is intended to be returned to its original state by the addition of water
                    (reconstitued), the ingredients
                    may be listed in descending order of their weight in the reconstitued food. In this instance, it
                    must be made clear on
                    the label.
                </p>
                <section>
                    <p>
                    <h4>Further reading</h4>
                    To calculate and show the ingoing weight for water and other ingredients that disappear when cooked,
                    read:</br>
                    <i>Australia New Zealand Food Standards Code</i>
                    <ul>
                        <li>
                            <a href="https://www.legislation.gov.au/Series/F2015L00392">
                                Standard 1.2.4
                            </a>
                            Information requirements – statement of ingredients.'
                            <ul>
                                <li>
                                    See section 1.2.4—5 Ingredients to be listed in descending order of ingoing weight
                                </li>
                            </ul>
                        </li>
                    </ul>
                    </p>
                </section>
            </div>
        </article>
    </section>
</div>

<div class="side-padding vertical-padding">
    <h4>Food with extra requirements</h4>
    <section class="qg-accordion flex-column" aria-label="Accordion Label">
        <div class="controls-group">
            <input type="radio" name="control" id="expand" class="controls expand" value="expand" role="radio">
            <label for="collapse" class="controls" @click=${e => modifyAccordionState(e, true)}>Expand all</label>     
                <span class="controls">|</span>    
            <input type="radio" name="control" id="collapse" class="controls collapse" value="collapse" role="radio">
            <label for="collapse" class="controls" @click=${e => modifyAccordionState(e, false)}>Collapse all</label>
        </div>
        <article>
            <input id="bcr" type="checkbox" name="tabs" tabindex="-1" aria-controls="id-panel-content-1"
                aria-expanded="false" role="checkbox" />
            <button class="acc-heading">
                <img src="https://www.qld.gov.au/?a=145849">
                <label for="bcr">
                    <span class="title">
                        Breads, cereals and grains
                    </span>
                    <span class="arrow"><i></i></span>
                </label>
            </button>

            <div class="collapsing-section" aria-hidden="true" id="id-panel-content-1">
                <p>
                    <b>If the cereal is wheat, rye, barley, oats or spelt or a hybridised strain of one of those
                        cereals:
                    </b>
                    </br>
                    The name of the cereal ingredient must be declared in the ingredient list.
                </p>
                <p>
                    <b>The generic name of starch must not be used to describe an ingredient:</b>
                    </br>
                    If the source of the starch is wheat, rye, barley, oats or spelt, or hybridised strains of those
                    cereals—the name of the
                    cereal must be declared.
                </p>
                <p>
                    <b>The generic name of starch may be used to describe an ingredient:</b>
                    </br>
                    The name ‘starch’ may be used for any unmodified starch or any starch which has been modified by
                    either physical means
                    or enzymes.
                </p>
                <section>
                    <p>
                    <h4>Further reading</h4>
                    <i>Australia New Zealand Food Standards Code</i>
                    <ul>
                        <li>
                            <a href="https://www.legislation.gov.au/Series/F2015L00392" target="_blank">
                                Standard 1.2.4
                            </a>
                            Information requirements – statement of ingredients.
                            <ul>
                                <li>
                                    See section 1.2.4—4 Ingredients to be listed by common, descriptive or generic name
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="https://www.legislation.gov.au/Series/F2015L00480" target="_blank">
                                Schedule 10
                            </a>
                            Generic names of ingredients and conditions for their use
                        </li>
                    </ul>
                    </p>
                </section>
            </div>
        </article>

        <article>
            <input id="fish-seafood" type="checkbox" name="tabs" tabindex="-1" aria-controls="id-panel-content-1"
                aria-expanded="false" role="checkbox" />
            <button class="acc-heading">
                <img src="https://www.qld.gov.au/?a=145854">
                <label for="fish-seafood">
                    <span class="title">
                        Fish, crustacea and seafood
                    </span>
                    <span class="arrow"><i></i></span>
                </label>
            </button>

            <div class="collapsing-section" aria-hidden="true" id="id-panel-content-1">
                <p>
                    <b>If the food is, or contains crustacea:</b>
                    </br>
                    The name of the crustacea must be declared in the ingredient list.
                    </br>
                    For example: crab, crayfish, prawns, lobster, oyster, squid.
                </p>
                <p>
                    <b>If the food is, or contains fish:</b>
                    </br>
                    The name of the fish must be declared in the ingredient list.
                    </br>
                    For example: Barramundi, hake,
                </p>
                <p>
                    Note: This does not apply for isinglass derived from swim bladders and used as a clarifying agent in
                    beer or wine.
                </p>
                <section>
                    <p>
                    <h4>Further reading</h4>
                    <i>Australia New Zealand Food Standards Code</i>
                    <ul>
                        <li>
                            <a href="https://www.legislation.gov.au/Series/F2015L00397" target="_blank">
                                Standard 1.2.3
                            </a>
                            Information requirements – warning statements, advisory
                            statements and declarations
                            <ul>
                                <li>
                                    See section 1.2.3—4 Mandatory declaration of certain foods or substances in food
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="https://www.legislation.gov.au/Series/F2015L00480" target="_blank">
                                Schedule 10
                            </a>
                            Generic names of ingredients and conditions for their use
                        </li>
                    </ul>
                    </p>
                    <p>
                        Australian Standard Fish Names
                    <ul>
                        <li>
                            A searchable database of Australian Standard Fish Names is available at
                            <a href="http://www.fishnames.com.au" target="_blank">
                                http://www.fishnames.com.au
                            </a>
                        </li>
                        <li>
                            Hard copies of the Australian Fish Names Standard (AS 5300) are available from FRDC’s Online
                            Shop at
                            <a href="http://www.seafood.net.au/shop" target="_blank">
                                http://www.seafood.net.au/shop
                            </a>
                        </li>
                    </ul>
                    </p>
                </section>
            </div>
        </article>

        <article>
            <input id="fruit-veg" type="checkbox" name="tabs" tabindex="-1" aria-controls="id-panel-content-1"
                aria-expanded="false" role="checkbox" />
            <button class="acc-heading">
                <img src="https://www.qld.gov.au/?a=145857">
                <label for="fruit-veg">
                    <span class="title">
                        Fruit and vegetables
                    </span>
                    <span class="arrow"><i></i></span>
                </label>
            </button>

            <div class="collapsing-section" aria-hidden="true" id="id-panel-content-1">
                <p>
                    <b>If the food is a juice blend:</b></br>
                    The name and percentage of the of the juice in the blend must be included in the ingredients.
                    For example: Tropical juice (Pineapple 50%, mango 20%, oranges 10%, apple 10%, passionfruit 5%,
                    peach puree 5%)
                </p>
                <p>
                    <b>If the food is an orange juice blend:</b></br>
                    Where an orange juice blend has less than 10% in total of: </br>
                <ul>
                    <li>
                        mandarin juice; or
                    </li>
                    <li>
                        tangelo juice; or
                    </li>
                    <li>
                        mandarin and tangelo juice
                    </li>
                </ul>
                the orange juice is not required to be labelled as a juice blend.
                </p>
                <section>
                    <p>
                    <h4>Further reading</h4>
                    <i>Australia New Zealand Food Standards Code</i>
                    <ul>
                        <li>
                            <a href="https://www.legislation.gov.au/Series/F2015L00426" target="_blank">
                                Standard 2.6.1
                            </a>
                            Fruit juice and vegetable juice
                        </li>
                    </ul>
                    </p>
                </section>
            </div>
        </article>

        <article>
            <input id="meat-prod" type="checkbox" name="tabs" tabindex="-1" aria-controls="id-panel-content-1"
                aria-expanded="false" role="checkbox" />
            <button class="acc-heading">
                <img src="https://www.qld.gov.au/?a=145868">
                <label for="meat-prod">
                    <span class="title">
                        Meat and meat products
                    </span>
                    <span class="arrow"><i></i></span>
                </label>
            </button>

            <div class="collapsing-section" aria-hidden="true" id="id-panel-content-1">
                <p>
                    <b>If the food is minced meat:</b>
                    the maximum proportion of fat in the mince must be provided.
                </p>
                <p>
                    <b>If the food contains offal:</b></br>
                    Offal includes blood, brain, heart, kidney, liver, pancreas, spleen, thymus, tongue and tripe, and
                    excludes meat flesh,
                    bone and bone marrow.
                </p>
                <p>
                    For brain, heart, kidney, liver, tongue or tripe, the food name or description must be identified as
                    either:
                <ul>
                    <li>offal</li>
                    <li>the specific name of the type of offal</li>
                </ul>
                </p>
                <p>
                    For any other type of offal, the food name or description must be identified by the specific name of
                    the
                    type of offal.
                </p>
                <section>
                    <p>
                    <h4>Further reading</h4>
                    <i>Australia New Zealand Food Standards Code</i>
                    <ul>
                        <li>
                            <a href="https://www.legislation.gov.au/Series/F2015L00392" target="_blank">
                                Standard 1.2.4
                            </a>
                            Information requirements – statement of ingredients.
                            <ul>
                                <li>
                                    See section 1.2.4—4 Ingredients to be listed by common, descriptive or generic name
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="https://www.legislation.gov.au/Series/F2015L00427" target="_blank">
                                Standard 2.2.1
                            </a>
                            Meat and meat products.
                            <ul>
                                <li>
                                    See section 2.2.1—6 Statement indicating the presence of offal
                                </li>
                                <li>
                                    See section 2.2.1—7 Proportion of fat in minced meat
                                </li>
                            </ul>
                        </li>
                    </ul>
                    </p>
                </section>
            </div>
        </article>

        <article>
            <input id="milk-dairy" type="checkbox" name="tabs" tabindex="-1" aria-controls="id-panel-content-1"
                aria-expanded="false" role="checkbox" />
            <button class="acc-heading">
                <img src="https://www.qld.gov.au/?a=145869">
                <label for="milk-dairy">
                    <span class="title">
                        Milk, dairy and dairy alternatives
                    </span>
                    <span class="arrow"><i></i></span>
                </label>
            </button>

            <div class="collapsing-section" aria-hidden="true" id="id-panel-content-1">
                <p>
                    <b> The generic name of milk solid may be used to describe an ingredient that is: </b></br>
                <ul>
                    <li>
                        milk powder, skim milk powder or dried milk products; or
                    </li>
                    <li>
                        any 2 or more of the following ingredients:
                        <ul>
                            <li>whey</li>
                            <li>whey powder</li>
                            <li>whey protein</li>
                            <li>lactose</li>
                            <li>casei nates</li>
                            <li>milk proteins</li>
                            <li>milk fat</li>
                        </ul>
                    </li>
                </ul>
                </p>
                <section>
                    <p>
                    <h4>Further reading</h4>
                    <i>Australia New Zealand Food Standards Code</i>
                    <ul>
                        <li>
                            <a href="https://www.legislation.gov.au/Series/F2015L00392" target="_blank">
                                Standard 1.2.4
                            </a>
                            Information requirements – statement of ingredients.
                            <ul>
                                <li>
                                    See section 1.2.4—4 Ingredients to be listed by common, descriptive or generic name
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="https://www.legislation.gov.au/Series/F2015L00480" target="_blank">
                                Schedule 10
                            </a>
                            Generic names of ingredients and conditions for their use
                        </li>
                    </ul>
                    </p>
                </section>
            </div>
        </article>

        <article>
            <input id="non-alcoholic" type="checkbox" name="tabs" tabindex="-1" aria-controls="id-panel-content-1"
                aria-expanded="false" role="checkbox" />
            <button class="acc-heading">
                <img src="https://www.qld.gov.au/?a=145870">
                <label for="non-alcoholic">
                    <span class="title">
                        Non-alcoholic drinks
                    </span>
                    <span class="arrow"><i></i></span>
                </label>
            </button>

            <div class="collapsing-section" aria-hidden="true" id="id-panel-content-1">
                <p>
                    <b>If the food is packaged water:</b>
                    </br>
                    The ingredients list is not required for a water that is packaged and labelled to the requirements
                    of
                    <a href="https://www.legislation.gov.au/Series/F2015L00465" target="_blank">
                        Standard 2.6.2.
                    </a>
                </p>
                <p>
                    <b>If the food is a juice blend:</b>
                    </br>
                    The name and percentage of the of the juice in the blend must be included in the ingredients.
                    For example: Tropical juice (Pineapple 50%, mango 20%, oranges 10%, apple 10%, passionfruit 5%,
                    peach puree 5%)
                </p>
                <p>
                    <b>If the food is an orange juice blend:</b>
                    </br>
                    Where an orange juice blend has less than 10% in total of:
                <ul>
                    <li>
                        mandarin juice; or
                    </li>
                    <li>
                        tangelo juice; or
                    </li>
                    <li>
                        mandarin and tangelo juice
                    </li>
                </ul>
                the orange juice is not required to be labelled as a juice blend
                </p>
                <section>
                    <p>
                    <h4>Further reading</h4>
                    <i>Australia New Zealand Food Standards Code</i>
                    <ul>
                        <li>
                            <a href="https://www.legislation.gov.au/Series/F2015L00392" target="_blank">
                                Standard 1.2.4
                            </a>
                            Information requirements – statement of ingredients.
                            <ul>
                                <li>
                                    See section 1.2.4—2 Requirement for statement of ingredients
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="https://www.legislation.gov.au/Series/F2015L00426" target="_blank">
                                Standard 2.6.1
                            </a>
                            Fruit juice and vegetable juice
                        </li>
                        <li>
                            <a href="https://www.legislation.gov.au/Series/F2015L00465" target="_blank">
                                Standard 2.6.2
                            </a>
                            Non-alcoholic beverages and brewed soft drinks
                        </li>
                    </ul>
                    </p>
                </section>
            </div>
        </article>

        <article>
            <input id="nuts-seeds" type="checkbox" name="tabs" tabindex="-1" aria-controls="id-panel-content-1"
                aria-expanded="false" role="checkbox" />
            <button class="acc-heading">
                <img src="https://www.qld.gov.au/?a=145872">
                <label for="nuts-seeds">
                    <span class="title">
                        Nuts and seeds
                    </span>
                    <span class="arrow"><i></i></span>
                </label>
            </button>

            <div class="collapsing-section" aria-hidden="true" id="id-panel-content-1">
                <p>
                    <b>If the food is, or contains nuts:</b>
                    </br>
                    The name of the nut must be declared in the ingredient list.
                    </br>
                    For example: Almonds, cashews, brazil nuts, hazelnuts, macadamia nuts, peanuts, pecans, pine nuts,
                    walnuts
                </p>
                <section>
                    <p>
                    <h4>Further reading</h4>
                    <i>Australia New Zealand Food Standards Code</i>
                    <ul>
                        <li>
                            <a href="https://www.legislation.gov.au/Series/F2015L00397" target="_blank">
                                Standard 1.2.3
                            </a>
                            Information requirements – warning statements, advisory
                            statements and declarations
                            <ul>
                                <li>
                                    See section 1.2.3—4 Mandatory declaration of certain foods or substances in food
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="https://www.legislation.gov.au/Series/F2015L00480" target="_blank">
                                Schedule 10
                            </a>
                            Generic names of ingredients and conditions for their use
                        </li>
                    </ul>
                    </p>
                </section>
            </div>
        </article>

        <article>
            <input id="oils-margarine" type="checkbox" name="tabs" tabindex="-1" aria-controls="id-panel-content-1"
                aria-expanded="false" role="checkbox" />
            <button class="acc-heading">
                <img src="https://www.qld.gov.au/?a=145873">
                <label for="oils-margarine">
                    <span class="title">
                        Oils and margarine
                    </span>
                    <span class="arrow"><i></i></span>
                </label>
            </button>

            <div class="collapsing-section" aria-hidden="true" id="id-panel-content-1">
                <p>
                    <b>If the food contains fats and oils:</b></br>
                    The ingredient list must declare:
                <ul>
                    <li>
                        whether the source is animal or vegetable
                    </li>
                    <li>
                        if the source of oil is lupin, peanut or sesame—the specific source name
                    </li>
                    <li>
                        if the source of oil is soybeans and the oil has not been degummed, neutralised, bleached and
                        deodorised—the specific
                        source name
                    </li>
                    <li>
                        if the food is a dairy product, including ice cream—the specific source of animal fats or oils.
                    </li>
                </ul>
                </p>
                <section>
                    <p>
                    <h4>Further reading</h4>
                    <i>Australia New Zealand Food Standards Code</i>
                    <ul>
                        <li>
                            <a href="https://www.legislation.gov.au/Series/F2015L00461" target="_blank">
                                Standard 2.4.2
                            </a>
                            Edible oil spreads
                        </li>
                        <li>
                            <a href="https://www.legislation.gov.au/Series/F2015L00392" target="_blank">
                                Standard 1.2.4
                            </a>
                            Information requirements – statement of ingredients.
                            <ul>
                                <li>
                                    See section 1.2.4—4 Ingredients to be listed by common, descriptive or generic name
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="https://www.legislation.gov.au/Series/F2015L00480" target="_blank">
                                Schedule 10
                            </a>
                            Generic names of ingredients and conditions for their use
                        </li>
                    </ul>
                    </p>
                </section>
            </div>
        </article>

        <article>
            <input id="sugar-alt" type="checkbox" name="tabs" tabindex="-1" aria-controls="id-panel-content-1"
                aria-expanded="false" role="checkbox" />
            <button class="acc-heading">
                <img src="https://www.qld.gov.au/?a=145881">
                <label for="sugar-alt">
                    <span class="title">
                        Sugar and sugar alternatives
                    </span>
                    <span class="arrow"><i></i></span>
                </label>
            </button>

            <div class="collapsing-section" aria-hidden="true" id="id-panel-content-1">
                <p>
                    <b>If the food is, or contains sugar:</b></br>
                    The name “sugars” must not be used in the ingredient list.
                </p>
                <p>
                    <b>The generic name of sugar may be used to describe an ingredient that is:</b></br>
                <ul>
                    <li>white sugar</li>
                    <li>white refined sugar</li>
                    <li>caster sugar or castor sugar</li>
                    <li>loaf sugar or cube sugar</li>
                    <li>icing sugar</li>
                    <li>coffee sugar</li>
                    <li>coffee crystals</li>
                    <li>raw sugar</li>
                </ul>
                </p>
                <section>
                    <p>
                    <h4>Further reading</h4>
                    <i>Australia New Zealand Food Standards Code</i>
                    <ul>
                        <li>
                            <a href="https://www.legislation.gov.au/Series/F2015L00392" target="_blank">
                                Standard 1.2.4
                            </a>
                            Information requirements – statement of ingredients.
                            <ul>
                                <li>
                                    See section 1.2.4—4 Ingredients to be listed by common, descriptive or generic name
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="https://www.legislation.gov.au/Series/F2015L00480" target="_blank">
                                Schedule 10
                            </a>
                            Generic names of ingredients and conditions for their use
                        </li>
                    </ul>
                    </p>
                </section>
            </div>
        </article>

        <article>
            <input id="food-package" type="checkbox" name="tabs" tabindex="-1" aria-controls="id-panel-content-1"
                aria-expanded="false" role="checkbox" />
            <button class="acc-heading">
                <img src="https://www.qld.gov.au/?a=145879">
                <label for="food-package">
                    <span class="title">
                        Food in small packages
                    </span>
                    <span class="arrow"><i></i></span>
                </label>
            </button>

            <div class="collapsing-section" aria-hidden="true" id="id-panel-content-1">
                <p><b>If the food sold in a small package where the package has a surface area of less than 100 cm2:</b>
                    </br>
                    The ingredient list is not required is not required for food in small packages.
                    </br>
                    For example: A small a packet of chewing gum or a small bar of chocolate.
                </p>
                <section>
                    <p>
                    <h4>Further reading</h4>
                    <i>Australia New Zealand Food Standards Code</i>
                    <ul>
                        <li>
                            <a href="https://www.legislation.gov.au/Series/F2015L00392" target="_blank">
                                Standard 1.2.4
                            </a>
                            Information requirements – statement of ingredients.
                            <ul>
                                <li>
                                    See section 1.2.4—2 Requirement for statement of ingredients
                                </li>
                            </ul>
                        </li>
                    </ul>
                    </p>
                </section>
            </div>
        </article>

        <article>
            <input id="one-ingredient" type="checkbox" name="tabs" tabindex="-1" aria-controls="id-panel-content-1"
                aria-expanded="false" role="checkbox" />
            <button class="acc-heading">
                <img src="https://www.qld.gov.au/?a=145874">
                <label for="one-ingredient">
                    <span class="title">
                        Food with one ingredient
                    </span>
                    <span class="arrow"><i></i></span>
                </label>
            </button>

            <div class="collapsing-section" aria-hidden="true" id="id-panel-content-1">
                <p><b>If the food has only one ingredient:</b></br>
                    the ingredient list is not required.</br>
                    For example: A bag of rice, frozen corn kernels, apple juice.
                </p>
                <section>
                    <p>
                    <h4>Further reading</h4>
                    <i>Australia New Zealand Food Standards Code</i>
                    <ul>
                        <li>
                            <a href="https://www.legislation.gov.au/Series/F2015L00392" target="_blank">
                                Standard 1.2.4
                            </a>
                            Information requirements – statement of ingredients.
                            <ul>
                                <li>
                                    See section 1.2.4—2 Requirement for statement of ingredients
                                </li>
                            </ul>
                        </li>
                    </ul>
                    </p>
                </section>
            </div>
        </article>
    </section>
</div>
`;
