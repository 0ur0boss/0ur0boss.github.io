import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import LogoComponents from '../subComponents/LogoComponents';
import PowerButton from '../subComponents/PowerButton';
import Socialicons from '../subComponents/Socialicons';
import {YinYang} from './AllSvgs';
import Intro from './Intro';
import {motion} from 'framer-motion';


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

const Work = styled(NavLink)`
color: ${props => props.theme.text};
position: absolute;
top: 50%;
right: calc(1rem + 2vw);
transform: rotate(90deg) translate(-50%, -50%);
text-decoration: none;
z-index:1;
`

const CV = styled(NavLink)`
color: ${props => props.theme.text};
position: absolute;
top: 50%;
left: calc(1rem + 2vw);
transform: translate(-50%, -50%) rotate(-90deg);
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
color: ${props => props.click ? props.theme.body : props.theme.text};
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
top: ${props => props.click ? '85%' : '50%' };
left: ${props => props.click ? '92%' : '50%' };
transform: translate(-50%, -50%);
border: none;
outline: none;
background: transparent;
cursor: pointer;

display: flex;
flex-direction:column;
justify-content: center;
align-items: center;
transition: all 1s ease;

&>:first-child{
  animation: ${rotate} infinite 1.5s linear;
}

&>:last-child{
  padding-top: 1rem;
  display: ${props => props.click ? 'none' : 'inline-block' };;
}
`

const DarkDiv = styled.div`
position: absolute;
top: 0;
bottom: 0;
right: 50%;
width: ${props => props.click ? '50%' : '0%' };
height: ${props => props.click ? '100%' : '0%' };
z-index:1;
background-color: #000;
transition: height 0.5s ease, width 1s ease 0.5s;
`

const Main = () => {

  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return <MainContainer>
      <Container>
       <DarkDiv click={click} />

       <PowerButton />
       <LogoComponents theme={click ? 'dark' : 'light'}/>
       <Socialicons theme={click ? 'dark' : 'light'}/>


       <Center click={click}>
         <YinYang onClick={()=> handleClick()} width={click ? 120 : 200} height={click ? 120 : 200} fill='currentColor' />
         <span>Click here</span>
       </Center>



      {/* Liens vers les components */}
       <Contact target="_blank" to={{pathname:"mailto:enzodupro@gmail.com"}}>
         <motion.h2
         whileHover={{scale: 1.1}}
         whileTap={{scale: 0.9}}
         >
         Email me!
         </motion.h2>
       </Contact>
       <Work to="/Work">
         <motion.h2
         whileHover={{scale: 1.1}}
         whileTap={{scale: 0.9}}
         >
          Work
         </motion.h2>

       </Work>
       <CV to="/">
         <motion.h2
         whileHover={{scale: 1.1}}
         whileTap={{scale: 0.9}}
         >
          My C.V
         </motion.h2>

       </CV>
       <BottomBar>
        <AbouT to="/about" click={click}>
        <motion.h2
         whileHover={{scale: 1.1}}
         whileTap={{scale: 0.9}}
         >
            About
          </motion.h2>
        </AbouT>
        <SkillS to="/skills">
        <motion.h2
         whileHover={{scale: 1.1}}
         whileTap={{scale: 0.9}}
         >
            My Skills
          </motion.h2>
        </SkillS>
       </BottomBar>
      </Container>
      {click ? <Intro click={click}/> : null}
  </MainContainer>;
};

export default Main;
