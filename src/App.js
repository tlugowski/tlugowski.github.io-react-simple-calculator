import Calculations from "./components/Calculations";
import styled from "styled-components";
import backgrounImage from "./img/calculater.gif";

function App() {
  return (
    <AppContainer>
      <Calculations />
    </AppContainer>
  );
}

const AppContainer = styled.div`
  text-align: center;
  margin-left: 10%;
  margin-right: 10%;
  margin-top: 10%;
  background-image: url(${backgrounImage});
  background-repeat: no-repeat;
  background-size: 50%;
  background-position: right;
`;

export default App;
