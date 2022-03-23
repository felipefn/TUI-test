import styled from "styled-components";



export const Container = styled.aside`
  background: #FFFFFF;
     
`

export const Content = styled.div`
  background: #FFFFFF;
  margin: 0 2rem 0 8rem;
  padding: 1rem 2rem 1rem 2rem;
  border: 1px solid #d1cfcf;
  width: 320px;
  color: #092A5E;
  
  .layout {    
  display: grid;
  grid-template-rows: repeat(7, 4rem);
  grid-template-columns: repeat(2, 8rem);
  margin: 0;
  padding-top: 1rem;  
  
  }
  .Amenitie {
    border: 0.5px solid #d1cfcf;
    height: 4rem;
    width: 8rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 0.5rem;

  }
  
  img{
    width: 1.25rem;
    height: 1.25rem;

    
  }
  
  p {
    color: #4c4c4c;
    font-size: 14px;
    
  }
`