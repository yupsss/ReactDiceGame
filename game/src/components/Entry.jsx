import styled from 'styled-components';
const Entry = ({toggle}) => {
    return ( 
        <div className="check">
            <Container>
                <div className="dice">
                    <img src="./images/dices.png" alt="dice" />
                </div>
                <div>
                    <h1 className='content'>DICE GAME</h1>
                    <div className="btn"><Button onClick={toggle}>Play Now</Button></div>
                </div>
            </Container>
        </div>
     );
}
 
export default Entry;

const Container = styled.div`
/* max-width: fit-content; */
display: flex;
/* margin: 0 auto; */
/* display: flex; */
align-items: center;
padding: 180px 100px;

.content{
    font-size: 80px;
    white-space: nowrap;
}

.btn{
    display: flex;
    justify-content: flex-end;
}
`;

const Button = styled.button`
border: 1px solid black;
border-radius: 10px;
min-width: 220px;
min-height: 44px;
background-color: black;
color: white;
font-size: 20px;
transition: 0.5s ease-in background;
cursor: pointer;
&:hover{
    background-color: white;
    color: black;
    transition: 0.3s ease-in background;
    font-size: 20px;
}

`;