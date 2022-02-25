import styled from "styled-components"

export const Container = styled.div`
  background: #FFFFFF;
  height: 22rem;
  width: 30rem;
  padding: 2.5rem;
  
  h2{
    color: #092A5E;
    font-size: 1.75rem;
    margin-bottom: 1.5rem;
  }

  input{
      width: 25rem;
      padding: 0 1.5rem 0 0.5rem;
      height: 3rem;
      border-radius: 0.25rem;

      border: none;
      background: #FFFFFF;

      font-weight: 400;
      font-size: 1rem;         
       
      &.date{
        width: 12rem;
        
      }
      
      &.guests{
        width: 8rem;
        height: 3rem;
        
      }
    }
        

    button[type="submit"] {
      width: 25rem;
      padding: 0 1.5rem;
      height: 4rem;
      background: #D40E14;
      color: #FFFFFF;
      border-radius: 0.25rem;
      border: none;
      font-size: 1.25rem;
      margin-top: 1.5rem;
      font-weight: 600;
      
      transition: 0.2s;

      &:hover {
        filter: brightness(0.9);
      }

      img{
        margin-left: 0.5rem;
      }
    }
`

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 1rem;
  gap: 1rem;
`

export const Search =  styled.form`
display: flex;
align-items: center;
justify-content: center;
box-sizing: border-box;
border: 1px solid #d7d7d7;
padding-left: 0.5rem;
border-radius: 0.25rem;

  textarea:focus, input:focus, select:focus {
      box-shadow: 0 0 0 0;
      border: 0 none;
      outline: 0;
} 
`

export const Calendar =  styled.form`
display: flex;
align-items: center;
justify-content: center;
box-sizing: border-box;
border: 1px solid #d7d7d7;
padding-left: 0.5rem;
border-radius: 0.25rem;

  textarea:focus, input:focus, select:focus {
      box-shadow: 0 0 0 0;
      border: 0 none;
      outline: 0;
} 
`

export const Guests =  styled.form`
display: flex;
align-items: center;
justify-content: center;
box-sizing: border-box;
border: 1px solid #d7d7d7;
padding-left: 0.5rem;
border-radius: 0.25rem;

  textarea:focus, input:focus, select:focus {
    box-shadow: 0 0 0 0;
    border: 0 none;
    outline: 0;
} 


`