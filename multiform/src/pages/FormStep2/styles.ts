import styled from "styled-components";

export const Container = styled.div`
  p {
    font-size: 13px;
    color: #B4B4B4;
  }
  h1 {
    margin: 0;
    padding: 0;
    font-size: 26px;
  }
  hr {
    height: 1px;
    border: 0;
    background-color: #2871E6;
    margin: 30px 0;
  }
  label {
    font-size: 13px;

    input {
      display: block;
      margin-top: 7px;
      box-sizing: border-box;
      width: 100%;
      padding: 20px 10px;
      border: 2px solid #2871E6;
      border-radius: 10px;
      color: #ffffff;
      outline: 0;
      font-size: 15px;
      background-color: #000000;
    }
  }

  button {
    background-color: #2871E6;
    color: #ffffff;
    font-size: 14px;
    font-weight: bold;
    padding: 20px 40px;
    border: 0;
    border-radius: 30px;
    cursor: pointer;
    margin-top: 30px;
    margin-left: 30px;
  }

  .backButton {
    background-color: #DA3A3A;
    color: #ffffff;
    font-size: 14px;
    font-weight: bold;
    padding: 20px 40px;
    border: 0;
    border-radius: 30px;
    cursor: pointer;
    margin-top: 30px;
    text-decoration: none;
  }
`;
