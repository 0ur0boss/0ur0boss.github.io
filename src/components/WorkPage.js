import React, {useState} from 'react';
import styled from 'styled-components'
import img from "../assets/Images/patrick-tomasso-Oaqk7qqNh_c-unsplash.jpg"
import LogoComponents from '../subComponents/LogoComponents';
import PowerButton from '../subComponents/PowerButton';
import { motion } from 'framer-motion'
import Socialicons from '../subComponents/Socialicons';

import {Works} from '../data/WorkData';
import WorkCompenent from './WorkCompenent';
import AnchorComponent from '../subComponents/AnchorComponent';
import { useEffect } from 'react/cjs/react.development';


const MainContainer = styled(motion.div)`
background-image: url(${img});
background-size: cover;
background-repeat: no-repeat;
background-attachment: fixed;
background-position: center;
`

const Container = styled.div`
background-color: ${props => `rgba(${props.theme.bodyRgba},0.8)`};
width: 100%;
height:auto;
position: relative;
padding-bottom: 5rem;
`

const Center = styled.div`
display: flex;
justify-content: center;
align-items: center;
padding-top: 10rem;
`

const Grid = styled.div`
display: grid;
grid-template-columns: repeat(2, minmax(calc(10rem + 15vw), 1fr));
grid-gap: calc(1rem + 2vw);
`





const WorkPage = () => {

  const [numbers, setNumbers] = useState(0);

  // Définie la distance ou l'anchor descend / sa vitesse
  useEffect(() => {
    let num = (window.innerHeight - 70)/28;
    setNumbers(parseInt(num));
  }, [])


  return <MainContainer>
    <Container>
      <LogoComponents />
      <PowerButton />
      <Socialicons />
      <AnchorComponent numbers={numbers} />
      

      <Center>
        <Grid>
          {
            Works.map(Work => {
              return (<WorkCompenent key={Work.id} Work={Work} />)
            })
          }


        </Grid>
      </Center>


    </Container>
  </MainContainer>

};

export default WorkPage;
