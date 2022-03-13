import React, { useState } from "react";
import styled from "styled-components";
import { Button, Input } from "antd";
import "antd/dist/antd.css";
import DiffOutlined from "@ant-design/icons/DiffOutlined";
import backgrounImage from "../img/calculator.jpg";

const Calculations = () => {
  const [currentSum, setCurrentSum] = useState(0);
  const [firstValue, setFirstValue] = useState(0);
  const [secondValue, setSecondValue] = useState(0);

  const add = e => {
    e.preventDefault();
    setCurrentSum(firstValue + secondValue);
  };

  const substract = e => {
    e.preventDefault();
    setCurrentSum(firstValue - secondValue);
  };

  const multiplication = e => {
    e.preventDefault();
    setCurrentSum(firstValue * secondValue);
  };

  const dividing = e => {
    e.preventDefault();
    if (secondValue === 0) {
      throw Error("Illegal division by zero");
    }
    setCurrentSum(firstValue / secondValue);
  };

  const clear = e => {
    e.preventDefault();
    setFirstValue(0);
    setSecondValue(0);
    setCurrentSum(0);
  };

  return (
    <div className="app-calculator">
      <Container>
        <div className="app-title">
          <h1 className="app-header-title">
            Simple Calculator <DiffOutlined />
          </h1>
        </div>
        <h3>Please enter first and second number:</h3>
        <form>
          <div className="inputs-label-wrapper">
            <Input
              type="text"
              onInput={e => {
                setFirstValue(+e.target.value);
              }}
              value={firstValue}
              placeholder="enter a first number"
            />
            <Input
              onInput={e => {
                setSecondValue(+e.target.value);
              }}
              type="text"
              value={secondValue}
              placeholder="enter a second number"
            />
            <Button onClick={clear}>Clear</Button>
          </div>

          <div className="option-title">
            <h2>Choose the option: </h2>
          </div>
          <div className="calculation-option">
            <Button onClick={add}>Add</Button>
            <Button onClick={substract}>Subtract</Button>
            <Button onClick={multiplication}>multiplication</Button>
            <Button onClick={dividing}>dividing</Button>
          </div>
          <h1 className="result-title">RESULT:</h1>
          <div className="input-result">
            <Input type="text" id="result" value={currentSum} readOnly />
          </div>
        </form>
      </Container>
    </div>
  );
};

const Container = styled.div`
  padding-bottom: 50px;
  width: 50%;
  background-image: url(${backgrounImage});
  background-size: 97%;
  background-repeat: no-repeat;

  & .app-calculator {
    display: flex;
    justify-content: right;
    text-align: center;
  }

  & .inputs-label-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 25% 0 25%;
  }

  & .input-result {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 25%;
    margin-right: 25%;
  }

  & .calculation-option {
    padding-bottom: 50px;
  }

  & .option-title {
    padding-top: 50px;
  }
  & .app-header-title {
    color: #1890ff;
  }
  & .result-title {
    color: #b6fcd5;
    text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
  }
`;

export default Calculations;
