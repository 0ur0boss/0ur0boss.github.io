import React from 'react';
import { NavLink } from 'react-router-dom';
import styled, { keyframes } from 'styled-components'
import LogoComponents from '../subComponents/LogoComponents';
import PowerButton from '../subComponents/PowerButton';
import Socialicons from '../subComponents/Socialicons';
import {YinYang} from './AllSvgs';


const MainContainer = styled.div`
/* permet de recuperer le theme du body */
background: ${props => props.theme.body};
width: 100vw;
height: 100vh;
overflow:hidden;
position: relative;

h2,h3,h4,h5,h6{
  font-family: 'Karla', sans-serif;
  font-weight: 500;
}
`
const Container = styled.div`
padding: 2rem;
`


const Contact = styled(NavLink)`
color: ${props => props.theme.text};
position: absolute;
top: 2rem;
right: calc(1rem + 2vw);
text-decoration: none;
z-index:1;
`

const BloG = styled(NavLink)`
color: ${props => props.theme.text};
position: absolute;
top: 50%;
right: calc(1rem + 2vw);
transform: rotate(90deg) translate(-50%, -50%);
text-decoration: none;
z-index:1;
`

const WorK = styled(NavLink)`
color: ${props => props.theme.text};
position: absolute;
top: 50%;
left: calc(1rem + 2vw);
transform: translate(-50%, -50%) rotate(-90deg) ;
text-decoration: none;
z-index:1;
`

const BottomBar = styled.div`
position: absolute;
bottom: 1rem;
left: 0;
right: 0;
width: 100%;

display: flex;
justify-content: space-evenly;
`

const AbouT = styled(NavLink)`
color: ${props => props.theme.text};
text-decoration: none;
z-index:1;
`

const SkillS = styled(NavLink)`
color: ${props => props.theme.text};
text-decoration: none;
z-index:1;
`

const rotate = keyframes`
from {
  transform: rotate(0);
}
to{
  transform: rotate(360deg);
}
`

const Center = styled.button`
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
border: none;
outline: none;
background: transparent;
cursor: pointer;

display: flex;
flex-direction:column;
justify-content: center;
align-items: center;

&>:first-child{
  animation: ${rotate} infinite 1.5s linear;
}

&>:last-child{
  padding-top: 1rem;
}
`

const Main = () => {
  return <MainContainer>
      <Container>

       <PowerButton />
       <LogoComponents />
       <Socialicons/>

       <Center>
         <YinYang width={200} height={200} fill='currentColor' />
         <span>Click here</span>
       </Center>



      {/* Liens vers les components */}
       <Contact target="_blank" to={{pathname:"mailto:enzodupro@gmail.com"}}>
         <h2>
         Email me!
         </h2>
       </Contact>
       <BloG to="/blog">
         <h2>
          Blog
         </h2>
       </BloG>
       <WorK to="/work">
         <h2>
          Work
         </h2>
       </WorK>
       <BottomBar>
        <AbouT to="/about">
          <h2>
            About
          </h2>
        </AbouT>
        <SkillS to="/skills">
          <h2>
            My Skills
          </h2>
        </SkillS>
       </BottomBar>

      </Container>
  </MainContainer>;
};

export default Main;
