import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;

    .box-activities {
        display: flex;
        flex-direction: row;
        text-align: start;
        justify-content: space-between;
        max-width: 600px;
        width: 100%;
        
        margin-bottom: 2rem;

        div {
            margin-bottom: .5rem;

            :last-child {
                margin-bottom: 0;
            }
        }

        div:last-child {
            
            text-align: end;
        
        }

       
    }
`

const ActivityContainer = styled.div`
    display: flex;
    flex-direction: row;
    
    input {
        margin-right: 5px;
    }

    img {
        width: 20px;
        height: auto;   
        cursor: pointer;

        :first-child {
            margin-right: 100px;
        }
    }

    .desisto {
        margin-right: 5px;
    }

`

export { Container, ActivityContainer }