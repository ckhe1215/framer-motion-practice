import React from "react";
import { styled } from "styled-components";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
`;

const Box = styled.div`
  width: 400px;
  height: 300px;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 10px;
  box-shadow: 0 7px 14px rgba(0, 0, 0, 0.1), 0 5px 5px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Circle = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 100%;
  background-color: white;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
`;

const Button = styled.div`
  margin-top: 50px;
  background-color: white;
  font-size: 20px;
  color: blue;
  font-weight: bold;
  border-radius: 5px;
  padding: 12px;
  box-shadow: 0 7px 14px rgba(0, 0, 0, 0.1), 0 5px 5px rgba(0, 0, 0, 0.1);
  cursor: pointer;
`;

function App() {
  return (
    <Wrapper>
      <Grid>
        <Box />
        <Box>
          <Circle />
        </Box>
        <Box>
          <Circle />
        </Box>
        <Box />
      </Grid>
      <Button>Switch</Button>
    </Wrapper>
  );
}

export default App;
