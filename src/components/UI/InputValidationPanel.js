import styled from 'styled-components';

const InputValidationPanel = styled.div`
    & label {
        color: ${props => (props.showError && props.invalid ? 'red' : 'white')};
        float: left;
        padding: 15px;
    }
        
    & input {
        padding: 15px;
        margin: 10px auto;
        height: 1rem;
        float: left;
        border-color: ${props => (props.showError && props.invalid ? 'red' : 'black')};
    }

    & select {
        padding: 1px;
        margin: 10px auto;
        float: left;
        background-color: white;
        height: 2rem;
        border-color: ${props => (props.showError && props.invalid ? 'red' : 'black')};
    }
`;

export default InputValidationPanel;