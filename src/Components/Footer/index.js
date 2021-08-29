import React from 'react';

import { FooterSection, Paraghraph } from './style.js';

const Footer = () => {
    return (
        <React.Fragment>
            <FooterSection>
                <Paraghraph> copyright &copy; 2021 by Samer Arslan</Paraghraph>
            </FooterSection>
        </React.Fragment>   
    )
}

export default Footer