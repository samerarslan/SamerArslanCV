import React, { useState, useEffect } from 'react';

import { ProfileSkillsSection, ProfileDiv, ProfileList, ProfileItem, Span, Skills, SkillsDesc, Bar, BarTitle, BarPerc, BarParent, BarParentSpan, ProfileSkillsTitle, ProfileSkillsTitleSpan } from './style.js';
import axios from 'axios';

const Profile = () => {

    const [skills, setSkills] = useState([])

    useEffect ( () => {
        axios.get('js/data.json').then(res => { setSkills(res.data.Profile) })
    }, [] )

    const ProfileSkills = skills.map( (skillItem) => {
        return (
            <Bar key={ skillItem.id }>
                <BarTitle>{skillItem.title }</BarTitle>
                <BarPerc>{ skillItem.percentage }</BarPerc>
                <BarParent>
                    <BarParentSpan parent={ skillItem.parentPerc }></BarParentSpan>
                </BarParent>
            </Bar>
        )
    })

    return (
        <ProfileSkillsSection id='profile'>
            <div className="container">
                <ProfileDiv>
                    <ProfileSkillsTitle><ProfileSkillsTitleSpan>My </ProfileSkillsTitleSpan>Profile</ProfileSkillsTitle>
                    <ProfileList>
                        <ProfileItem>
                            <Span>Name</Span>
                            Hamza Nabil
                        </ProfileItem>
                        <ProfileItem>
                            <Span>Birthday</Span>
                            21/1/1996
                        </ProfileItem>
                        <ProfileItem>
                            <Span>Address</Span>
                            Ain shams
                        </ProfileItem>
                        <ProfileItem>
                            <Span>Phone</Span>
                            4444 5555 6666
                        </ProfileItem>
                        <ProfileItem>
                            <Span>Email</Span>
                            hamza@hamza.com
                        </ProfileItem>
                        <ProfileItem>
                            <Span>Website</Span>
                            <Span web>www.google.com</Span>
                        </ProfileItem>
                    </ProfileList>
                </ProfileDiv>
                
                <Skills>
                    <ProfileSkillsTitle>Some <ProfileSkillsTitleSpan>skills</ProfileSkillsTitleSpan></ProfileSkillsTitle>
                    <SkillsDesc>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos praesentium blanditiis esse cupiditate, omnis similique.
                    </SkillsDesc>
                    { ProfileSkills }
                </Skills>
                
            </div>
        </ProfileSkillsSection>
    )
}

export default Profile