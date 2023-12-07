import styled from "styled-components";
function TotalScore(){
  return (
    <ScoreContainer >
      <h1>0</h1>
      <h3>Total Score</h3>
    </ScoreContainer>
  )
}
export default TotalScore;

const ScoreContainer = styled.div`
  display : flex;
  flex-direction : column;
  align-items: center;
  justify-content: center;
  gap : 3px;
  width: 135px;
  margin: 40px;
  h1{
    color: #000;
    font-size: 100px;
    font-weight: 500;
    line-height : 100px;
  }
  h3{
    color: #000;
    font-size: 24px;
    font-weight: 500;
  }
`;