import React from 'react';
import styled from 'styled-components';

function ShowRules(){
  return (
    <ShowRulesContainer>
      <h2>How to play dice game.</h2>
      <div className='text'>
      <p>Select any number</p>
      <p>Click on dice image</p>
      <p>After click on  dice  if selected number is equal to dice number you will get same point as dice</p>
      <p>If you get wrong guess then  2 point will be dedcuted</p>
      </div>
    </ShowRulesContainer>
  )
}
export default ShowRules;

const ShowRulesContainer = styled.div`
    padding : 20px;
    max-width: 790px;
    margin: 0 auto;
    display : flex;
    flex-direction: column;
    background: #FBF1F1;
    border-radius : 10px;
    h2{
      font-size: 24px;
      font-weight: 700;
    }
    .text{
      margin-top: 24px;
    }
    p{
      font-size: 16px;
      font-weight: 500;
    }
`;