import React from 'react';

import { HomeSection, HomeTitle, HomeInfoTitle, HomeInformationDesc, HomeDescSpan, HomeInformation, HomeInformationButton } from './style.js';

const Home = () => {
    return (
        <HomeSection>
            <div className="container">
                <HomeInformation>
                    <HomeTitle>Samer Arslan</HomeTitle>
                    <HomeInfoTitle>Creative Director</HomeInfoTitle>
                    <HomeInformationDesc>
                        Iam a professional <HomeDescSpan>UX Designer</HomeDescSpan> and Front-End Developer creating modern and resposive designs to Web and Mobile. Let us work together. Thank you. 
                    </HomeInformationDesc>
                    <HomeInformationButton>Let's Begin</HomeInformationButton>
                </HomeInformation>
            </div>
        </HomeSection>
    )
}

export default Home