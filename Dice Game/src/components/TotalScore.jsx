import styled from "styled-components";
function TotalScore({score}){
  return (
    <ScoreContainer >
      <h1>{score}</h1>
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
  margin: 40px 0 0 40px;
  h1{
    color: #000;
    font-size: 100px;
    font-weight: 500;
    line-height : 20px;
  }
  h3{
    color: #000;
    font-size: 24px;
    font-weight: 500;
    line-height : 120px;
  }
`;