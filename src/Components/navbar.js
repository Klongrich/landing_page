import React from "react"
import styled from "styled-components";

import { Colors } from "../Themes/styles";
import { Fonts } from "../Themes/styles"

const Container = styled.div`
    background-color: ${Colors.grey};
    color: ${Colors.lightblue};
    font-family: ${Fonts.main};

    h2 {
        padding: 15px;
    }
`

export default function NavBar() {

    return(
        <>
        <Container>
            <h2 Style="text-align:left">
                Dapp Portfolio
            </h2>
        </Container>
        </>
    )
}