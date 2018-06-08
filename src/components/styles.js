import styled from "styled-components";
import { Link } from "react-router-dom";

const colors = {
    primaryColor: "#533a71",
    secondaryColor: "#50c5b7"
};
export const Nav = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 7vh;
    background: ${colors.primaryColor}
    position: fixed;
    top: 0;
    left: 0;
    margin: 0;
    width: 100%;
    z-index: 1000;
`;

export const StyledLink = styled(Link)`
    text-decoration: none;
    text-align: center;
    width: 25%;
    color: ${colors.secondaryColor};
    transition: all 0.5s linear;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    font-family: "Tajawal", sans-serif;
    &:hover {
        border-bottom: ${colors.secondaryColor} 5px solid;
    }
`;

//profile
export const Prof = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    top: 8vh;
    font-family: "Tajawal", sans-serif;
`;

export const ProfImage = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    img {
        width: 40%;
    }
    .image-links {
        display: flex;
        justify-content: space-between;
        font-size: 20px;
        width: 20%;
    }
    @media (max-width: 450px) {
        img {
            width: 100%;
        }
        .image-links {
            width: 100vw;
            background: ${colors.secondaryColor};
            a {
                text-align: center;
                width: 20%;
                height: 5vh;
                display: flex;
                align-items: center;
                justify-content: center;
            }
        }
    }
`;

export const Person = styled.div`
    display: flex;
    flex-direction: column;
    width: 95%;
    font-size: 24px;
    h1 {
        text-align: center;
    }
`;

export const ContactMe = styled.div``;

export const Envelope = styled.div`
    opacity: ${props => (props.visibility === "contact shown" ? 1 : 0)};
    position: fixed;
    bottom: 5px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
        border: 5px solid black;
        padding: 5px;
        background: red;
    }
`;

export const Form = styled.div`
    width: 100%;
    opacity: ${props => (props.visibility === "contact shown" ? 0 : 1)};
`;
