import styled from 'styled-components'

const Container = styled.div`
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    .title {
        display: flex;
        flex-direction: row;
        text-align: start;
        margin-bottom: 1rem;

        label {
            margin-right: 10px;
        }

        input {
            flex-grow: 1;
        }
    }

    .bottom-buttons {
        display: flex;
        justify-content: space-between;
    }
`

export { Container }