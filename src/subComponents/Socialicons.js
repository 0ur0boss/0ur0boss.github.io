import React from 'react';
import styled from 'styled-components'
import {NavLink} from 'react-router-dom'
import {Github,Twitter,Facebook,YouTube} from '../components/AllSvgs'




const Icons = styled.div`
display: flex;
flex-direction: column;
align-items: center;

position:fixed;
bottom: 0;
left: 2rem;

z-index:3;

&>*:not(:last-child){
    margin: 0.5rem 0;
}
`


const Line = styled.span`
width: 2px;
height: 8rem;
background-color: ${props => props.theme.text};
`



const Socialicons = () => {
  return <Icons>
    <div>
        <NavLink style={{color: 'inherit'}} target="_blank" to={{pathname:"https://www.youtube.com/watch?v=dQw4w9WgXcQ"}}>
            <Github width={25} height={25} fill='currentColor'></Github>
        </NavLink>
    </div>
    <div>
        <NavLink style={{color: 'inherit'}} target="_blank" to={{pathname:"https://www.youtube.com/watch?v=dQw4w9WgXcQ"}}>
            <Twitter width={25} height={25} fill='currentColor'></Twitter>
        </NavLink>
    </div>
    <div>
        <NavLink style={{color: 'inherit'}} target="_blank" to={{pathname:"https://www.youtube.com/watch?v=dQw4w9WgXcQ"}}>
            <Facebook width={25} height={25} fill='currentColor'></Facebook>
        </NavLink>
    </div>
    <div>
        <NavLink style={{color: 'inherit'}} target="_blank" to={{pathname:"https://www.youtube.com/watch?v=dQw4w9WgXcQ"}}>
            <YouTube width={25} height={25} fill='currentColor'></YouTube>
        </NavLink>
    </div>

    <Line />
  </Icons>;
};

export default Socialicons;
