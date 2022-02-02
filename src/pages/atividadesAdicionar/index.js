import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom';
import { addAct } from '../../redux/features/activities'
import { Container } from './styled'


export default function Adicionar() {
    const [title, setTitle] = useState('');

    const dispatch = useDispatch()

    const onSubmit = () => {
        if (!title)
            return;

        dispatch(
            addAct({
                title: title
        }))

        setTitle('')
    }

    return (
        <Container>
            <div>
                <h1> Adicionar Atividade </h1>
                <div className='title'>
                    <label> Titulo </label>
                    <input type='text' value={title} onChange={e => setTitle(e.target.value)}/>
                </div>
                <div className='bottom-buttons'>
                    <button onClick={onSubmit}> Submit </button>
                    <Link to='/'> <button> Voltar </button> </Link>
                </div>
            </div>
        </Container>
    )
}