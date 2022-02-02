import { useState } from 'react'
import { ActivityContainer } from './styled'

export default function Activity(props) {
    const [title, setTitle] = useState(props.title)
    const [idUpt, setIdUpt] = useState(0)

    const [disabled, setDisabled] = useState(true);

    const onDelete = () => {
        props.onDelete(props.id)
    }
    
    const onComplete = () => {
        if (idUpt !== 0) {
            onUpdate()
            return;
        }
        props.onComplete(props.id, !props.completed)
    }

    const onPreUpdate = () => {
        if (idUpt === 0)  {
            setDisabled(false)
            setIdUpt(props.id)
        }
    }

    const onUpdate = () => {
        props.onUpdate(props.id, title)
        finishUpdate()
    }

    const finishUpdate = () => {
        setDisabled(true)
        setIdUpt(0);
    }

    return (
        <ActivityContainer>
            <input value={title} onChange={e => setTitle(e.target.value)} disabled={disabled}/>
            {props.completed === false ? <img className='desisto' src='/assets/images/confirm.png' onClick={onComplete} alt=''/> : ''}
            {props.completed === false && idUpt === 0 ? <img src='/assets/images/edit.png' onClick={onPreUpdate} alt=''/> : ''}
            {idUpt === 0 ? <img src='/assets/images/thrash.png' onClick={onDelete} alt=''/> : ''}
            {idUpt !== 0 ? <img src='/assets/images/cancel.png' alt='' onClick={finishUpdate}/> : ''}
        </ActivityContainer>
    )
}