import { html } from 'lit-html';

export default handler => html`
  <div class="side-padding vertical-padding">
    <h4>
      <i class="fa fa-info-circle"></i> Important information before you start
    </h4>
    <p>
      The help guide is here to help you understand your labelling requirements.
    </p>
    <p>
      <b>
        It is important you read the information in this help guide carefully
      </b>
      so that you can create a food label that complies with the Food Standards
      Code.
    </p>
    <p>There are two sections in the help guide:</p>
    <ul>
      <li>General requirements</li>
      <li>Food with extra requirements</li>
    </ul>

    <h4>General requirements</h4>
    <p>
      Learn about food label rules that apply to all types of food. You can view
      help information by clicking on a link in Label Buster.
    </p>
    <figure>
      <img src="https://via.placeholder.com/338x106.png/ccc/ccc" alt="" />
    </figure>

    <h4>Food with extra requirements</h4>
    <p>
      Some foods and ingredients have extra rules in the Food Standards Code.
      Select the food groups that apply to your food or its ingredients to learn
      more about these extra rules.
    </p>
    <figure>
      <img src="https://via.placeholder.com/338x106.png/ccc/ccc" alt="" />
    </figure>

    <button class="qg-btn btn-primary" @click=${handler}>Got it!</button>
  </div>
`;
