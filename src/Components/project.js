import React from "react";
import styled from "styled-components"
import {Colors, Fonts} from "../Themes/styles"

const ProjectBox = styled.div`
    border-radius: 3px;
    color: ${Colors.white};
    font-family: ${Fonts.main};
    text-align: center;
    
    margin: 35px;
    padding: 10px;

    img {
        height: 60%;
        width: 60%;

        border-radius: 20px;
        border: 2px solid ${Colors.darkblue};
    }

    h1 {
        font-family: serif;
    }

    h3 {
        text-size: 42px;
        font-family: serif;
    }

    a {
        color: ${Colors.lightblue}
    }
`

export default function Project({name, link, image} ) {
    return(
        <>
        <ProjectBox>
            <h1> {name} </h1>
            <a href={link}>
                <img src={image} alt="project" />
            </a>
            <h3> Link: <a href={link}> {link} </a></h3>    
        </ProjectBox>
        </>
    )

}