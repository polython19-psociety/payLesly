import { css } from 'lit-element';

export default css`
:host {
  display: flex;
  box-sizing: border-box;
  margin: 0 auto;
  align-items: center;
  justify-content: center; }

.card-container {
  width: 90%;
  flex-direction: column; }
  .card-container .card-item {
    margin: 20px auto;
    width: 99%;
    min-height: 50px;
    background: #fff;
    box-shadow: 5px 5px 15px rgba(1, 1, 1, 0.5);
    border-radius: 10px;
    display: flex;
    justify-content: space-between; }
    .card-container .card-item .deleted-btn {
      align-self: flex-end;
      background: #ca3c3c;
      color: white;
      border-radius: 4px;
      text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
      cursor: pointer; }

:host([hidden]), [hidden] {
  display: none !important; }

*, *:before, *:after {
  box-sizing: inherit;
  font-family: inherit; }
`;
