import React from 'react';
//mport { Link } from 'react-router-dom';

import { NavbarSection, Logo, LogoText, UlList, ListItem, Anchor} from './style.js';

const NavBar = () => {
    return (
        <NavbarSection>
            <div className="container">
                <Logo>
                    <LogoText>Ultra Profile</LogoText>
                </Logo>
                <UlList>
                    <ListItem><Anchor href ="/">Home</Anchor></ListItem>
                    <ListItem><Anchor href="#work">Work</Anchor></ListItem>
                    <ListItem><Anchor href="#portfolio">Portfolio</Anchor></ListItem>
                    <ListItem><Anchor href="#profile">Profile</Anchor></ListItem>
                    <ListItem><Anchor href="#about">About</Anchor></ListItem>
                    <ListItem><Anchor href ="/contact">Contact</Anchor></ListItem>
                </UlList>
            </div>
        </NavbarSection>
    )
}

export default NavBar