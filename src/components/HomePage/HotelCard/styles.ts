import styled from "styled-components"
import card1Img from '../../../assets/card1.png'


export const Container = styled.div`
  margin: 4rem;
  padding: 1rem 3rem ;
  
  flex-direction: row;
  

  h2{
    font-weight: 600;
    font-style: normal;
    font-size: 2rem;
    line-height: 1;
    color: #092a5e;
    width: 96.5rem;
    height: 2.5rem;
    
  }
  

`
export const Content = styled.div`
  
  width: 100rem;
  height: 60rem;
  margin: 2.5rem 0 1rem 0;

  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  
  div{
    
    
  display: flex;
    color: #FFFFFF;
    justify-content: start;
    align-items: flex-end;
       
    border-radius: 0.3rem;
    border: 1px solid rgba(0, 0, 0, 0.2);  
        
    background-image: url(${card1Img}); 
    background-size: cover;
  }

  a{
    text-decoration: none;
    color: #FFFFFF;
    padding: 0 0 1rem 2rem;
  }

  
  
`