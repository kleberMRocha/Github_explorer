import styled from 'styled-components';
import { shade } from 'polished';

export const Title = styled.h1`
  margin-top: 50px;
  font-size: 48px;
  max-width: 470px;
  line-height: 56px;
  color: #3a3a3a;
`;

export const Form = styled.form`
  margin-top: 50px;
  max-width: 700px;
  display: flex;
  input {
    color: #3a3a3a;
    flex: 1;
    height: 70px;
    padding: 0 24px;
    border: 0;
    border-radius: 5px 0 0 5px;
    &::placeholder {
      color: #a8a8b3;
    }
  }
  button {
    width: 210px;
    height: 70px;
    background: #04d361;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #ffffff;
    font-weight: bold;
    border: none;
    transition: background-color 1s;

    &:hover {
      background: ${shade(0.2, '#04d361')};
    }
  }
`;

export const Repositories = styled.div`
  max-width: 700px;
  margin-top: 50px;
  img {
    max-width: 83px;
    border-radius: 50px;
  }
  a + a {
    margin-top: 15px;
  }
  a {
    color: #3a3a3a;
    display: flex;
    background-color: #ffffff;
    display: block;
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    padding: 24px;
    border-radius: 5px;
    text-decoration: none;
    transition: border-bottom, transform 0.3s;
    &:hover {
      border-right: 8px #04d361 solid;
      transform: translateX(10px);
    }
  }

  div {
    margin-left: 20px;
    flex: 1;
    strong {
      font: 20px;
      color: #3d3d4d;
    }
    p {
      font: 16px;
      color: #a8a8b3;
    }
  }
`;
