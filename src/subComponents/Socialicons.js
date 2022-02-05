import React from 'react';
import styled from 'styled-components'
import {NavLink} from 'react-router-dom'
import {Github,Twitter,Facebook,YouTube} from '../components/AllSvgs'
import { DarkTheme } from '../components/Themes';




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
background-color: ${props => props.color === 'dark' ? DarkTheme.text : DarkTheme.body};
`



const Socialicons = (props) => {
  return <Icons>
    <div>
        <NavLink style={{color: 'inherit'}} target="_blank" to={{pathname:"https://www.youtube.com/watch?v=dQw4w9WgXcQ"}}>
            <Github width={25} height={25} fill={props.theme === "dark" ? DarkTheme.text : DarkTheme.body}></Github>
        </NavLink>
    </div>
    <div>
        <NavLink style={{color: 'inherit'}} target="_blank" to={{pathname:"https://www.youtube.com/watch?v=dQw4w9WgXcQ"}}>
            <Twitter width={25} height={25} fill={props.theme === "dark" ? DarkTheme.text : DarkTheme.body}></Twitter>
        </NavLink>
    </div>
    <div>
        <NavLink style={{color: 'inherit'}} target="_blank" to={{pathname:"https://www.youtube.com/watch?v=dQw4w9WgXcQ"}}>
            <Facebook width={25} height={25} fill={props.theme === "dark" ? DarkTheme.text : DarkTheme.body}></Facebook>
        </NavLink>
    </div>
    <div>
        <NavLink style={{color: 'inherit'}} target="_blank" to={{pathname:"https://www.youtube.com/watch?v=dQw4w9WgXcQ"}}>
            <YouTube width={25} height={25} fill={props.theme === "dark" ? DarkTheme.text : DarkTheme.body}></YouTube>
        </NavLink>
    </div>

    <Line color={props.theme} />
  </Icons>;
};

export default Socialicons;
