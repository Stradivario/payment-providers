import { css } from '@rxdi/lit-html';

export const WidgetStyle = css`
  .container {
    padding: 10px;
    background-color: #323334;
    grid-template-columns: repeat(5, 1fr);
  }

  .provider {
    margin-bottom: 5px;
    margin-right: 5px;
    border-radius: 3px;
    width: 150px;
    height: 150px;
    color: #e9ecef;
    fill: #e9ecef;
    border: 1px solid #575859;
    background-color: #48494a;
  }

  .provider:hover {
    background-color: rgba(255, 255, 255, 0.2);
    cursor: pointer;
    user-select: none;
  }

  sprite-part-selector {
    background-color: #c1c2c3;
    width: 70px;
    height: 46px;
  }

  p {
    margin-bottom: 0;
    color: white;
  }

  button {
    margin: 10px;
    cursor: pointer;
    width: 150px;
    height: 50px;
  }

  .selected-provider {
    width: 420px;
    background: white;
    padding: 30px;
    border-radius: 10px;
  }

  .selected-provider rx-button {
    margin-bottom: 20px;
  }
`;
