import styled from 'styled-components';


export const ButtonContainer = styled.button`
    width: 100%;
    height: 42px;
    background-color: var(--primary-color);

    font-family: 'Nunito', sans-serif;
    font-size: .8rem;
    font-weight: 600;
    color: var(--white);
    text-transform: uppercase;
    letter-spacing: .1rem;

    border: 0.15rem solid var(--primary-color);
    border-radius: 21px;
    box-shadow: .01rem .07rem .2rem .001rem var(--primary-background-color);

    &:hover {
        cursor:pointer;
        box-shadow: inset 0.01rem 0.07rem 0.2rem 0.001rem var(--primary-background-color);
    }

    &:disabled,
    &[disabled]{
        opacity: 0.5;
    }
`