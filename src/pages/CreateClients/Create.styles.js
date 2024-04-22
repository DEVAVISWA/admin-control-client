import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 800px;
    margin: 10px auto;
    padding: 10px;
    border-radius: 10px;

    input {
        width: 100%;
        padding: 10px;
        margin: 10px 0;
        border-radius: 5px;
        border: 1px solid var(--medGrey);
    }

    label {
        font-weight: bold;
    }
    button {
        padding: 10px;
        margin: 10px 0;
        border-radius: 5px;
        border: none;
        background-color: #03a5fc;
        color: var(--white);
        font-weight: bold;
        cursor: pointer;
    }
    `;