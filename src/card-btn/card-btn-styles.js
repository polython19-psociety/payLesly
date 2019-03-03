import { css } from 'lit-element';

export default css`
:host {
  max-width: 100%;
  display: inline-block;
  box-sizing: border-box;
  height: 300px; }

:host([hidden]), [hidden] {
  display: none !important; }
`;
