import React from "react";
import styled from "styled-components"
import {Colors, Fonts} from "../Themes/styles"

const ProjectBox = styled.div`
    border-radius: 3px;
    color: ${Colors.white};
    font-family: ${Fonts.main};
    
    margin: 35px;
    padding: 10px;

    img {
        height: 50%;
        width: 50%;

        border: 2px solid ${Colors.darkblue};
    }

    a {
        color: ${Colors.white}
    }
`

export default function Project({name, link, image} ) {
    return(
        <>
        <ProjectBox>
            <h1> {name} </h1>
            <img src={image} alt="project" />
            <h3> Link: <a href="/"> {link} </a></h3>    
        </ProjectBox>
        </>
    )

}