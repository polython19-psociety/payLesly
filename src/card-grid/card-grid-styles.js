import { css } from 'lit-element';

export default css`
:host {
  box-sizing: border-box;
  display: block; }

:host([hidden]),
[hidden] {
  display: none !important; }

.flex-container {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-evenly; }

.flex-container * {
  margin: 15px;
  max-width: 25%;
  color: red !important; }
`;
