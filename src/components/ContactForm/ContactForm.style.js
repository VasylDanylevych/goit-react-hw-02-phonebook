import styled from 'styled-components';

export const Form = styled.form`
    display: flex;
    align-items: center;
    gap: 15px;

    & button {
        background-color: #99FFFF;
        border-radius: 4px;
        border: none;
        cursor: pointer;
        width: 150px;
        height: 40px;
        font-size: 20px;
    }

    & button:active {
        background-color: #9999FF;
    }

    & label {
        font-size: 20px;
        font-weight: 600;
    }
`;

export const Input = styled.input`
    height: 35px;
    padding-left: 20px;
    margin-left: 5px;
    border-radius: 4px;
    font-size: 15px;
`;

