import React from 'react';
import styled from 'styled-components'

function NavBar() {
return (
    <Container>
    <UnorderedList>
        <ListItem> <a href=''>About</a> </ListItem>
        <ListItem> <a href=''>Resume</a> </ListItem>
        <ListItem> <a href=''>Experience</a> </ListItem>
        <ListItem> <a href=''>More</a> </ListItem>
    </UnorderedList>
  </Container>
)
}

export default NavBar;

const Container = styled.div`
    box-sizing: border-box;
    margin: 0;
    position: absolute;
    transform: translate(-50%, -50%);
    top: 6%;
    left: 50%;
`

const UnorderedList = styled.ul`
    list-style-type: none;
    display: flex;
    padding: 18px 0;
    background-size: 400% 400%;
    background-image: linear-gradient(-45deg, #ff5959, #ff4040, #ff0d6e, #ff8033,#d74177);
    animation: 12s myGradient infinite;
    border-radius: 40px;
    box-shadow: 3px 3px 20px #ff3352;
    border-top-left-radius: 0px;
    border-bottom-right-radius: 0px;

    @keyframes myGradient {
        0% {
          background-position: 0% 50%;
        }
        
        50%{
          background-position: 100% 50%;
        }
        
        100% {
          background-position: 0% 50%;
        }
    }
`

const ListItem = styled.li`
    a {
        color: #fff;
        text-decoration: none;
        padding: 0px 45px;
        font-family: verdana;
        font-weight: 600;
        font-size: 24px;
        letter-spacing: 1px;
        opacity: 0.9;
    }

    a:hover {
        color: #fff;
        animation: 2s myFlash linear infinite;
        text-shadow: 2px 2px 30px #fff;
        transition: 3s;
    }
    

    @keyframes myFlash {
        0% {
          opacity: 1;
          text-shadow: transparent;
        }
        
        50% {
          opacity: .1;
        }
        
        100% {
          opacity: 1;
          text-shadow: 2px 2px 20px #fff;
        }
      }
`