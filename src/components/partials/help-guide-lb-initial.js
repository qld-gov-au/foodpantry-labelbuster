import { html } from 'lit-html';

export default handler => html`
  <div class="side-padding vertical-padding">
    <h4>
      <i class="fa fa-info-circle"></i> Before you start
    </h4>
    <p>
      <b>Please use the help guide</b> 
      to create a food label that complies with the Food Standards Code.
    </p>
    <p>
      There are two sections in the help guide.
    </p>

    <h4>1. General requirements</h4>
    <p>
      Click on hyperlinks in Label Buster to open the help guide for a topic that applies to all food.
    </p>

    <h4>2. Food with extra requirements</h4>
    <p>
      Some foods and ingredients have extra rules.  Select the food groups that apply to your food or its ingredients to learn more about these extra rules.
    </p>

    <button class="qg-btn btn-primary" @click=${handler}>Got it!</button>
  </div>
`;
