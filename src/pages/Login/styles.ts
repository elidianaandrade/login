import styled from 'styled-components';

export const Container = styled.div`
    width: 100%; 
    height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;
`

export const LoginContainer = styled.div`
    width: 100%;
    max-width: 22rem;
    background-color: var(--secondary-background-color);

    border-radius: .8rem;
    padding: 2rem;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
`

export const Title = styled.h1`
    font-size: 2rem;
    font-weight: 700;
    color: var(--white);
`

export const Row = styled.div`
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
`

export const Column = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 1rem;
`