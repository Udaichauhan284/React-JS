import React from "react";
import styled from "styled-components";
function RoleDice({ currentDice, roleDice }) {
  return (
    <DiceContainer>
      <div className="dice" onClick={roleDice}>
        <img src={`../image/dice/dice_${currentDice}.png`} alt="dices"></img>
      </div>
      <p>Click on Dice to Roll</p>

    </DiceContainer>
  );
}
export default RoleDice;

const DiceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin-bottom : 20px;
  p {
    font-size: 24px;
    font-weight: 500;
  }
`;
