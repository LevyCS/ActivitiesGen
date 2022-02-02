import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { completeAct, removeAct, updateAct } from '../../redux/features/activities.js';
import Activity from './activity.js';
import { Container } from './styled.js'


export default function AtividadesConsultar() {
  const finishedActivities = useSelector((state) => 
    state.activities.filter(item => item.completed === true))

  const unfinishedActivities = useSelector((state) => 
    state.activities.filter(item => item.completed === false))

  const dispatch = useDispatch()

  const onDeleteAct = (id) => {
    dispatch(
      removeAct({
        id: id
    }))
  }

  const onComplete = (id, completed) => {
    dispatch(
      completeAct({
        id: id,
        completed: completed
      })
    )
  } 

  const onUpdate = (id, title) => {
    dispatch(
      updateAct({
        id: id,
        title: title
      })
    )
  }

  return (      
    <Container>
      <h1> Atividades </h1>
      <div className='box-activities'>
        <div>
          <h2> Não Finalizadas </h2>
          {unfinishedActivities.map((item, index) => {
            return <Activity key={item.id} id={item.id} title={item.title} completed={item.completed} onDelete={onDeleteAct} onComplete={onComplete} onUpdate={onUpdate}/>
          })}
        </div>
        <div>
          <h2> Finalizadas </h2>
            {finishedActivities.map((item, index) => {
              return <Activity key={item.id} id={item.id} title={item.title} completed={item.completed} onDelete={onDeleteAct} />
            })}
        </div>
      </div>
      <Link to='/Adicionar'> <button> Adicionar Nova Atividade </button> </Link>
      </Container>
  );
}

