import React from 'react';
import styled from 'styled-components';

const NumberSelector = ({setError, error, selectedNumber, setSelectedNumber}) =>{
  const arr = [1,2,3,4,5,6];
  const numberSelectorHandle = (value) =>{
    setSelectedNumber(value);
    setError("");
  };
  return (
    <NumberSelectContainer>
      <p className='error'>{error}</p>
      <div className='flex'>
        {arr.map((value, index) => (
          <Box 
          isSelected={value === selectedNumber}
          key={index}
          onClick={() => numberSelectorHandle(value)}>{value}</Box>
        ))}
      </div>
      <p>Select Number</p>
    </NumberSelectContainer>
  );
};

export default NumberSelector;

const NumberSelectContainer = styled.div`
  display: flex;
  flex-direction : column;
  align-items: end;
  gap: 10px;
  margin: 20px;
  .flex{
    display: flex;
    gap: 20px;
  }
  p{
    font-size: 24px;
    font-weight : 700;
  }
  .error{
    color: red;
    font-size: 20px;
  }
`;
const Box = styled.div`
  height : 72px;
  width: 72px;
  border: 1px solid black;
  display: grid;
  place-items: center;
  font-size : 24px;
  font-weight: 700;
  background-color : ${(props) => (props.isSelected ? "black" : "white")};
  color : ${(props) => (!props.isSelected ? "black" : "white")};
  cursor: pointer;
`;