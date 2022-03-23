import styled from "styled-components";
import card1Img from "../../../assets/card1.png"


export const Container = styled.div`
  
  display: flex;
  color: #092A5E;
  flex-direction: column;
  justify-content: center;

  tr{
    display: flex;
    
    flex-direction: column;
    justify-content: center;
    
    gap: 1rem;
  }
  td {
    border: 1px solid #d1cfcf;
  }

  h1 {
    font-size: 1.5rem;
    color: #092A5E;
    display: flex;
    justify-content: flex-start;
    border-bottom: 1px solid #7a7a7a;
    margin-bottom: 1rem;
  }
`
export const Content = styled.div`
  width: 70rem;
  height: 15.5rem;
  background: #FFFFFF;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  
  .hotelImage {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-around;
    height: 15.5rem;
    width: 30rem;
    background-image: url(${card1Img});
  }
  

  .hotelName {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-around;
    height: 15.5rem;
    width: 30rem;
   ;

   
  }

  

  .valor {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: flex-end ;

    height: 15.5rem;
    width: 25rem;

    border-left: 1px outset #d1cfcf ;
    
  }

  button {
      width: 10rem;
      padding: 0 1.5rem;
      height: 2rem;
      background: #092A5E;
      color: #FFFFFF;
      border-radius: 0.2rem;
      border: none;
      font-size: 1.25rem;
      margin: 1rem 0rem;
      font-weight: 500;
      
      transition: 0.2s;

      &:hover {
        filter: brightness(0.9);
      }
  }
`