import React, { useState, useEffect } from 'react';

import { SocialSection, Social, Icon, Paraghraph, Span } from './style.js';
import axios from 'axios';

const SocialMedia = () => {

    const [socials, setSocials] = useState([])

    useEffect ( () => {
        axios.get('js/data.json').then(res => { setSocials(res.data.social) })
    }, [] )

    const SocialMedia = socials.map( (socialItem) => {
        return (
            <Social key={ socialItem.id } social={ socialItem.body }>
                <Icon className={ socialItem.icon }></Icon>
                <Paraghraph>
                    <Span info="info1">{ socialItem.title }</Span>
                    <Span info="info2">{ socialItem.body }</Span>
                </Paraghraph>
            </Social>
        )
    })

    return (
        <SocialSection>
            { SocialMedia }
        </SocialSection>
    )
}

export default SocialMedia