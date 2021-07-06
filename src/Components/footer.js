import React, {useState, useEffect} from "react"
import styled from "styled-components"

import {Twitter} from "@styled-icons/boxicons-logos/Twitter"
import {Github} from "@styled-icons/boxicons-logos/Github"

import {Colors, Fonts} from "../Themes/styles"

import emailjs from "emailjs-com"

const UserID = "user_jlVMwjSwPupyShZ1akCYv";
const ServiceID = "service_uyk96dd";
const TemplateID = "template_yqnwdsh";

const Container = styled.div`
    margin-top: -20px;
    font-family: ${Fonts.main};
    background-color: ${Colors.grey};
    color: ${Colors.darkblue};

    padding-top: 1px;
    padding-left: 20px;
    height: 100%;
`

const SubmitButton = styled.button`
    margin-top: -5px;
    border: 3px solid ${Colors.grey};
    font-family: ${Fonts.main};
    font-size: 12px;
    padding-top: 3px;
    padding-bottom: 3px;
    background-color: ${Colors.darkblue};
    color: ${Colors.white};

    width: 127px;
    height: 32px;

    :hover{
        background-color: ${Colors.lightblue};
    }
`

const EmailInput = styled.input`
    height: 20px;
    width: 275px;
`

const MessageInput = styled.textarea`
    height: 150px;
    width: 275px;
    resize: none;
`

const IconsBox = styled.div`

    margin-left: -20px;
    margin-top: 20px;
    
    padding-top: 10px;
    padding-bottom: 10px;
    background-color: ${Colors.black};

    a {
        margin-left: 35px;
    }
`

export default function Footer() {

    const [email, setEmail] = useState("Your Email Address");
    const [content, setContent] = useState("Your Message")

    function send_email(from, content){
        var templateParams = {
            to_name: 'Kyle',
            from_name: from,
            message: content,
            reply_to: from
        };
        emailjs.send(ServiceID, TemplateID, templateParams);
    }

    useEffect(() => {
        emailjs.init(UserID);
    }, [])

    return(
        <>
            <Container>
                <h1>Contact Me</h1>
                
                <EmailInput
                    placeholder={email}
                    onChange={e => setEmail(e.target.value)} 
                />
                <br /> 
                <br />
                <MessageInput 
                    type="textarea"
                    placeholder={content}
                    onChange={e => setContent(e.target.value)}
                /> 
                <br /> 
                <br />
                <SubmitButton onClick={() => send_email(email, content)}>
                    Submit
                </SubmitButton>

                <IconsBox>
                    <a href="https://twitter.com/longrichk">
                        <Twitter size="50" color="blue"/>
                    </a>

                    <a href="https://github.com/klongrich">
                        <Github size="50" color="black" />
                    </a>
                </IconsBox>

            </Container>
        </>
    )

}