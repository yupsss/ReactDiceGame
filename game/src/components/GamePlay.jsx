import styled from 'styled-components'
import TotalScore from './TotalScore';
import { useState } from 'react';


const GamePlay = () => {
    let [run,setrun] = useState(0);
    let [selectval,setselectval] = useState(0);
    let [val,setval] = useState(1);
    const reset = () =>{
        setrun(0);
    };
    // const handlecolor = ()=>{
        
    // };
    const handleButtonClick = (buttonNumber) =>{
        setselectval(buttonNumber);

        document.getElementById(`val${buttonNumber}`).style.backgroundColor = "black"  
        document.getElementById(`val${buttonNumber}`).style.color = "white"  
        
    };

    const toggle = () =>{
        const value = Math.floor(Math.random() * (7 - 1) + 1);
        setval(value);
        
        console.log(selectval);
        console.log(value);

        if(selectval === 0)  
            alert("please select a value");
        else if(selectval === value)  
            setrun(run+(2*value));
        else 
            setrun(run-(value/2));

        if(selectval !== 0)
        {document.getElementById(`val${selectval}`).style.backgroundColor = "white"  
        document.getElementById(`val${selectval}`).style.color = "black"  }
        setselectval(0);
    };

    return ( 
            <Container>
                {/* <div>{run}</div> */}
                <div className="navigation">
                    <div className="score"><TotalScore score={run} /></div>
                    <div className="selection">
                        <div className="btn">
                        <Button onClick={()=>handleButtonClick(1)} id="val1" className='val'>1</Button>
                        <Button onClick={()=>handleButtonClick(2)} id="val2" className='val'>2</Button>
                        <Button onClick={()=>handleButtonClick(3)} id="val3" className='val'>3</Button>
                        <Button onClick={()=>handleButtonClick(4)} id="val4" className='val'>4</Button>
                        <Button onClick={()=>handleButtonClick(5)} id="val5" className='val'>5</Button>
                        <Button onClick={()=>handleButtonClick(6)} id="val6" className='val'>6</Button>
                        </div>
                        <h2>select number</h2>
                    </div>
                </div>
                <div className="center">
                        <img src={`./images/${val}.png`} alt='img' onClick={toggle} />
                        <div className="txt" >Click on dice to roll</div>
                        <button className='bt btn1' onClick={reset}>Reset Score</button>
                        <button className='bt btn2'>Show Rules</button>
                </div>

            </Container>
        
     );
}
 
export default GamePlay;

const Container = styled.div`

height: 150px;
padding: 50px;

img{
    width: 230px;
    height: 230px;
    border-radius: 20px;
}
.txt {
    padding: 15px;
}
.hello{
    background-color: black;
        color: white;
}
.nothello{
    background-color: white;
    color: black;
}
.navigation{
    /* background-color: pink; */
    max-height: 150px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.btn{
 display: flex;
 gap: 10px;
 justify-content: space-between;
}
.selection h2 {
    display: flex;
    justify-content: right
}
.number{
    display: flex;
    gap: 24px;
}
.center{
    padding: 20px;
    display: flex;
    flex-direction: column;
    margin: 20px auto;
    align-items: center;
    gap: 12px;
}

.reset{
    width: 184px;
    height: 25px
}
.bt{
    width: 200px;
    border: solid black 1px;
    height : 25px;
    width: 180px;
    border-radius:2px;
}
.btn1{
    background-color: white;
    color:black;

    &:hover{
        background-color: black;
        color: white;
    }
}
.btn2{
    background-color: black;
    color:white;

    &:hover{
        background-color: white;
        color: black;
    }
}
`;

const Button = styled.button`

    font-size: 20px;
    width: 72px;
    height: 72px;
    color: black;
    background-color: white;

    &:hover
    {
        background-color: black;
        color: white;
    }
`;