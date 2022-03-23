import styled from "styled-components";
import  bannerImg  from '../../../assets/banner.png'
 



export const Container = styled.div`
  background: #E2F3FE;
  background-image: url(${bannerImg});
  background-size: cover;
  width: 110rem;
  height: 28.25rem;
  padding: 4.5rem;
  border: 0;
  margin: 0 4rem 0 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between
  
`
export const Content = styled.div`
  padding: 0 3rem 2rem ;
  width: 35rem;
  height: 14.5rem;

  h1{
    font-size: 3rem;
    color: #FFFFFF;
  }

  p{
    font-size: 1.75rem;
    color:#FFFFFF;
  }
`


