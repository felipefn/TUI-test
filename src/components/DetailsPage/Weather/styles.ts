import styled from "styled-components";
import sol1Img from '../../../assets/sol1.jpg'
import neveImg from '../../../assets/neve.jpg'

export const Container = styled.div`

`

export const Content = styled.div`
  width: 20rem;
  height: 30rem;
  background-image: url(${sol1Img});
  background-size: cover;
  color: #FFFFFF;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  border-radius: 0.25rem;

  .location {
    font-size: 1.5rem;
    margin-top: -2rem;
  }
  
  
  .temp {
    font-size: 2.5rem;
    background-color: rgba(255, 255, 255, 0.5);
    margin: 0 1rem;
    border-radius: 0.5rem;
    
  }

  .date {
    margin-bottom: -2rem;
  }
`