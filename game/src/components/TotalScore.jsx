import styled from "styled-components";
const TotalScore = ({ score }) => {
    return ( 
        <Container>
            <h1>{score}</h1>
            <h2>Total Score</h2>
        </Container>
     );
}
 
export default TotalScore;


const Container = styled.div`

height: 150px;
/* width: 150px; */

/* background-color: orange; */
display: flex;
flex-direction: column;
justify-content: end;

h1{
    /* background-color: red; */
    margin: 0 auto;
    align-items: end;
    font-size:88px;
}

h2{
    margin: 0 auto;
}


`


