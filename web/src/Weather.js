import styled from "styled-components"
import React, { useState, useEffect} from "react";
import { getUltraSrtNcst } from "./api/Weather";

export default function Weather() {
  
  const City = styled.div`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
    
    color: #D1D1D1;
    
    margin: 0.5em 0.5em 3em 0.5em;
  `

  const Songdo  = styled.div`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 42px;
    line-height: 51px;
    
    color: #181818;
  `

  const TempBox = styled.div`
    width: 100%;
    height: 300px;
    padding: 2em;
    background-color: #F9F9F9;
    box-sizing: border-box;
    border-radius: 1em;
  `

  const Sunny = styled.span`
    font-size: 120px;
    color: orange;
    vertical-align: middle;
    font-family: "Material Icons";
  `
  
  const Temperature = styled.span`
    color: #ddd;
    font-size: 50px;
    font-weight: 700;
    vertical-align: middle;
    margin-left: .5em;
  `
  const Info = styled.div`
    width: 567px;
    height: 30px;
    display: flex;
    border: 2px solid #F1F1F1;
    border-radius: 0.8em;
    color: #642;
    font-size: 16px;
    font-weight: 700;
    margin: 1em 3em 1em 0em;
    padding-top: 0.25em;
    box-sizing: border-box;
    position: relative;
  `

  const InfoSub = styled.div`
    color: ${props => props.pos === "left"? "#4E2B00" : "#894F09"};
    position: absolute;
    ${props => props.pos === "left"? "left" : "right"}: 1em;
  `

  const Title = styled.h1`
    font-family: 'Lato';
    font-style: normal;
    font-weight: 700;
    font-size: 31px;
    line-height: 37px;

    color: #000000;
  `
  const [state,setState] = useState(' ');

  useEffect(()=>{
    getUltraSrtNcst()
        .then(res =>{
            const items = res.response.body.items.item
            const currentTemperature = items.filter(item => item.category === 'T1H')[0].obsrValue
            setState(currentTemperature)
        })
        .catch(e => console.log(e))
},[])

  return (

    

    <div>
      <Title>Weather</Title>
      <Songdo>송도동</Songdo>
      <City>대한민국, 인천광역시</City>
      <TempBox>
        <Sunny>☀</Sunny>
        <Temperature>10<span style={{color: "#181818"}}>˚</span></Temperature>
        <Info><InfoSub pos="left">최고기온/최저기온</InfoSub><InfoSub pos="right">13˚C / 10˚C</InfoSub></Info>
        <Info><InfoSub pos="left">{state}</InfoSub><InfoSub pos="right">7˚C</InfoSub></Info>
      </TempBox>
    </div>
  )
}