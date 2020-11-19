import { html } from 'lit-html';
import { modifyAccordionState } from '../../scripts/collapse-expand';
/* eslint-disable no-irregular-whitespace */

export default () => html`
<div class="side-padding vertical-padding">
    <h4>General requirements</h4>
    <section class="qg-accordion flex-column" aria-label="Accordion Label">
        <div class="controls-group">
            <input type="radio" name="control" id="collapse" class="controls collapse" value="collapse" role="radio">

            <label for="collapse" class="controls" @click=${e => modifyAccordionState(e, false)}>Collapse all</label>

            <span class="controls">|</span>

            <input type="radio" name="control" id="expand" class="controls expand" value="expand" role="radio">

            <label for="collapse" class="controls" @click=${e => modifyAccordionState(e, true)}>Expand all</label>
        </div>

        <article>
            <input id="ad-statement" type="checkbox" name="tabs" tabindex="-1" aria-controls="id-panel-content-1"
                aria-expanded="false" role="checkbox" />
            <h3 class="acc-heading">
                <label for="ad-statement">
                    <span class="title">
                        Advisory statements
                    </span>
                    <span class="arrow"><i></i></span>
                </label>
            </h3>

            <div class="collapsing-section" aria-hidden="true" id="id-panel-content-1">
                <p>
                    Advisory statements let consumers know important information about the safety 
                    (e.g. unpasteurised), suitability (e.g. not suitable as a complete milk replacement
                    for children under 5 years) and effect (e.g. laxative) of the food or ingredient.        
                </p>
                <p>
                   An advisory statement must provide the same meaning as the statement listed in the 
                   Food Standards Code but can be written in your own words.
                </p>
                <p><b>Further reading</b></br>
                    <i>Australia New Zealand Food Standards Code</i>
                <ul>
                    <li>
                    <a 
                    href="https://www.legislation.gov.au/Details/F2017C00418" 
                    target="_blank">
                    Standard 1.2.3
                    </a> 
                    Information requirements – warning statements, advisory statements and declarations</li>
                    <li>
                    <a 
                    href="https://www.legislation.gov.au/Details/F2016C00827"
                    target="_blank">
                    Schedule 9
                    </a> 
                     Mandatory advisory statements</li>
                </ul>
                </p>
                <p>
                    Food Standards Australia and New Zealand
                <ul>
                    <li>
                    <a 
                    href="https://www.foodstandards.gov.au/code/userguide/Documents/Guide%20to%201.2.3%20-%20Warning%20and%20Advisory%20Statements.pdf"
                    target="_blank">
                        User Guide – Warning and Advisory Statements and Declarations
                    </a>
                    </li>
                </ul>
                </p>
            </div>
        </article>

        <article>
            <input id="alt-declaration" type="checkbox" name="tabs" tabindex="-1" aria-controls="id-panel-content-1"
                aria-expanded="false" role="checkbox" />
            <h3 class="acc-heading">
                <label for="alt-declaration">
                    <span class="title">
                        Allergen declarations
                    </span>
                    <span class="arrow"><i></i></span>
                </label>
            </h3>

            <div class="collapsing-section" aria-hidden="true" id="id-panel-content-1">
                <p>
                    Some foods and ingredients can cause allergic reactions and must be stated on the label. 
                </p>
                <p>
                    You must state any allergen listed in Standard 1.2.3 when present in a food as:
                    <ul>
                    <li>An ingredient</li>
                    <li>An ingredient of a compound ingredient</li>
                    <li>A substance used as a food additive</li>
                    <li>An ingredient or component of a food additive</li>
                    <li>A substance or food used as a processing aid</li>
                    <li>An ingredient or component of a processing aid.</li>                                
                    </ul>
                    </br>
                Allergen declarations are required on individual portion packs that have a surface 
                area of 30cm2 or greater.   
                </p>
                
                <p><b>Further reading</b></br>
                    <i>Australia New Zealand Food Standards Code</i>
                <ul>
                    <li>
                    <a 
                    href="https://www.legislation.gov.au/Series/F2015L00386"
                    target="_blank">
                        Standard 1.2.1
                    </a> 
                    Requirement to have labels or otherwise provide information
                    <ul>
                        <li>    
                        See section 1.2.1—6 When the food for sale must bear a label
                        </li>
                    </ul>
                    </li>
                    <li>
                    <a 
                    href="https://www.legislation.gov.au/Details/F2017C00418"
                    target="_blank">
                    Standard 1.2.3 
                    </a>
                    Information requirements – warning statements, advisory statements and declarations</li>
                </ul>
                </p>
                <p>
                    Food Standards Australia and New Zealand
                <ul>
                    <li>
                    <a 
                    href="https://www.foodstandards.gov.au/code/userguide/Documents/Guide%20to%201.2.3%20-%20Warning%20and%20Advisory%20Statements.pdf"
                    target="_blank">
                    User Guide – Warning and Advisory Statements and Declarations
                    </a>
                    </li>
                </ul>
                </p>
            
            </div>

        </article>

        <article>
            <input id="warn-statement" type="checkbox" name="tabs" tabindex="-1" aria-controls="id-panel-content-1"
                aria-expanded="false" role="checkbox" />
            <h3 class="acc-heading">
                <label for="warn-statement">
                    <span class="title">
                        Warning statements
                    </span>
                    <span class="arrow"><i></i></span>
                </label>
            </h3>

            <div class="collapsing-section" aria-hidden="true" id="id-panel-content-1">
                <p>
                    The warning statement must be displayed on the label in the exact words
                    and type size as specified in the Food Standards Code. Warning statements 
                    must be a minimum size of type of 3 mm. In the case of small packages, 
                    a minimum size of type of 1.5 mm is required.
                    </br>
                    Warning statement are required on individual portions packs that have a 
                    surface area of 30cm2 or greater.
                
                <p><b>Further reading</b></br>
                <i>Australia New Zealand Food Standards Code</i>
                <ul>
                    <li>
                    <a 
                    href="https://www.legislation.gov.au/Series/F2015L00386"
                    target="_blank">                    
                    Standard 1.2.1 
                    </a>
                    Requirement to have labels or otherwise provide information
                    <ul>
                        <li>
                        See section 1.2.1—6 When the food for sale must bear a label
                        </li>
                    </ul>
                    </li>
                    <li>
                    <a 
                    href="https://www.legislation.gov.au/Details/F2017C00418"
                    target="_blank">                    
                    Standard 1.2.3 
                    </a>
                    Information requirements – warning statements, advisory statements and declarations</li>
                    <li>
                    <a 
                    href="https://www.legislation.gov.au/Series/F2015L00466"
                    target="_blank">                    
                    Standard 2.6.3 
                    </a>
                    Kava</li>
                </ul>
                </p>
                <p>
                    Food Standards Australia and New Zealand
                <ul>
                    <li>
                    <a 
                    href="https://www.foodstandards.gov.au/code/userguide/Documents/Guide%20to%201.2.3%20-%20Warning%20and%20Advisory%20Statements.pdf"
                    target="_blank">                    
                        User Guide – Warning and Advisory Statements and Declarations
                    </a>
                    </li>
                </ul>
                </p>
            </div>
        </article>
    </section>
</div>
`;
