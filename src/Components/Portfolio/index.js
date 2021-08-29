import React, { useState, useEffect } from 'react';

import axios from 'axios';
import { PortfolioSection, PorfolioTitle, Span, PortfolioList, PortfolioItem, Box, Img, Paraghraph, PSpan } from './style.js';

const Portfolio = () => {

    const [images, setImages] = useState([])

    useEffect ( () => {
        axios.get('js/data.json').then(res => { setImages(res.data.portfolio) })
    }, [] )

    const PortfolioImages = images.map( (imageItem) => {
        return (
            <Box key={ imageItem.id }>
                <Img  src={ imageItem.image } alt="" />
                <Paraghraph>
                    <PSpan>
                        Show Image
                    </PSpan>
                </Paraghraph>
            </Box>
        )
    })

    return (
        <PortfolioSection id='portfolio'>
            <PorfolioTitle><Span>My</Span> Portfolio</PorfolioTitle>
            <PortfolioList>
                <PortfolioItem active>All</PortfolioItem>
                <PortfolioItem>HTML</PortfolioItem>
                <PortfolioItem>Photoshop</PortfolioItem>
                <PortfolioItem>Wordpress</PortfolioItem>
                <PortfolioItem>Mobile</PortfolioItem>
            </PortfolioList>
            
            <div className="box">
                { PortfolioImages }
            </div>
            
        </PortfolioSection>
    )
}

export default Portfolio