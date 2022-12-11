import styled from 'styled-components';

export const InputContainer = styled.div`
    width: 100%;
    height: 2.65rem;
    color: var(--white);

    border: .1rem solid var(--primary-color);
    border-radius: 50rem;
    overflow: hidden;
    
    & input {
        min-width: 100%;
        height: 2.65rem;
        border: none;
        border-radius: 50rem;
        background-color: transparent;
        padding: 1rem;
        color: var(--white);
    }

    & input:-webkit-autofill, input:-internal-autofill-selected   {    
        -webkit-box-shadow: 0 0 0px 1000px var(--secondary-background-color) inset;
        -webkit-text-fill-color: var(--white) !important;
        border: none;
        outline: 0;
        margin: 0;
        width: 100%;
    }
`

export const ErrorMessage = styled.p`
    color: red;
    font-size: .8rem;
    margin: 0;
`