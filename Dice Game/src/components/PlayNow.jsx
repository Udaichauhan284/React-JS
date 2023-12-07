import React from 'react';
import bigDiceIcon from './image/big_dice.png';
import styled from 'styled-components';
import {Button} from '../components/styled/Button.jsx';
function PlayNow({toggle}){
  return (
    <Container>
      <div>
        <img src={bigDiceIcon} />
      </div>
      <div className='contain'>
        <h1>Dice Game</h1>
        <Button onClick={toggle}>Play Now</Button>
      </div>
    </Container>
  )
}
export default PlayNow;

const Container = styled.div`
  max-width : 1440px;
  height : 100vh;
  display : flex;
  justify-content : center; 
  align-items: center;
  margin : 0 auto;

  .contain{
    display : flex;
    flex-direction : column;
    align-items: end;
    h1{
      font-size: 96px;
      font-weight : 700;
    }
  }
`