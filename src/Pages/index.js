import React from 'react'
import styled from "styled-components"

import Navbar from '../Components/navbar'
import ProjectBox from "../Components/project"

import {Colors, Fonts} from "../Themes/styles"

import nftswapsImage from "./nftyswaps.png"
import hashinkImage from "./hashink.png";
import trymetacardsImage from "./trymetacards.png"

const ProjectData = [
    {
        id: 0,
        name: "NftySwaps",
        image: nftswapsImage,
        link: "https://nftyswaps.com/"
    },
    {
        id: 1,
        name: "Hash Ink",
        image: hashinkImage,
        link: "https://hashink.app/"
    },    
    {
        id: 2,
        name: "TryMetaCards",
        image: trymetacardsImage,
        link: "https://trymetacards.com/"
    }
]

const Container = styled.div`
    background-color: ${Colors.black};

    height: 2000px;
`

export default function Homepage () {
    return (
        <>
        <Container>
            <Navbar />
            {ProjectData.map((data) => (
                <>
                    <ProjectBox name={data.name}
                                link={data.link}
                                image={data.image}
                                />
                </>
            ))}
        </Container>
        </>
    )
}