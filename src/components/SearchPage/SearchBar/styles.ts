import styled from "styled-components";

export const Container = styled.div`
  background: #70CBF4;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 1.5rem 3rem 1.5rem 3rem;
  gap: 1rem;
  input {
    width: 21rem;
    height: 3rem;
    
    border-radius: 0.25rem;
    border: none;
    background: #FFFFFF;

    font-weight: 500;
    font-size: 1rem;    
    
    padding-left: 0.5rem;
      
    &.search {
      width: 40rem
    } 
  }

  button[type="submit"] {
      width: 15rem;
      
      height: 2rem;
      background: #092A5E;
      color: #FFFFFF;
      border-radius: 0.25rem;
      border: none;
      font-size: 1.25rem;
      
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
  background: #FFFFFF;
  border-radius: 0.25rem;
  
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