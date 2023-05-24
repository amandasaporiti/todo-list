import { useState, FormEvent, useEffect } from 'react'
import {
  Container,
  Header,
  Tasks,
  AddNewTask,
  TasksData,
  List,
  EmptyList,
  Button,
  Trash,
  CheckIcon,
  NotCheckdIcon,
} from './styles'

import { v4 as uuidv4 } from 'uuid'

import logoImg from '../../assets/logo.svg'
import plusImg from '../../assets/plus.svg'
import trashImg from '../../assets/trash.svg'
import emptyImg from '../../assets/empty.svg'

interface Task {
  id: string
  task: string
  completed: boolean
}

const Dashboard = () => {
  const [tasks, setTasks] = useState<Task[]>(() => {
    const storagedTasks = localStorage.getItem('tasks')
    if (storagedTasks) {
      return JSON.parse(storagedTasks)
    } else {
      return []
    }
  })

  const [typedTask, setTypedTask] = useState('')

  const [totalTasks, setTotalTasks] = useState(() => {
    const storagedTotalTasks = localStorage.getItem('totalTasks')
    if (storagedTotalTasks) {
      return JSON.parse(storagedTotalTasks)
    } else {
      return 0
    }
  })

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  useEffect(() => {
    localStorage.setItem('totalTasks', JSON.stringify(totalTasks))
  }, [totalTasks])

  const addTask = (event: FormEvent) => {
    event.preventDefault()

    if (typedTask) {
      setTasks([...tasks, { id: uuidv4(), task: typedTask, completed: false }])

      if (typedTask) {
        setTotalTasks(totalTasks + 1)
      } else {
        setTotalTasks(totalTasks)
      }

      setTypedTask('')
    } else {
      return []
    }
  }

  const deleteTask = (deleteId: string) => {
    setTasks(tasks.filter((task) => task.id !== deleteId))
    setTotalTasks(totalTasks - 1)
  }

  const completeTask = (completeId: string) => {
    const newTasks = tasks.map((item) =>
      item.id === completeId ? { ...item, completed: !item.completed } : item,
    )
    setTasks(newTasks)
  }

  const completedTasks = tasks.filter((task) => task.completed).length

  return (
    <Container>
      <Header>
        <img src={logoImg} alt="To Do List" />
      </Header>
      <Tasks>
        <AddNewTask>
          <input
            type="text"
            placeholder="Adicione uma nova tarefa"
            value={typedTask}
            onChange={(e) => setTypedTask(e.target.value)}
          />
          <button onClick={addTask}>
            Criar
            <img src={plusImg} alt="Create New Task" />
          </button>
        </AddNewTask>
        <TasksData>
          <h2>
            Tarefas criadas <span>{totalTasks}</span>{' '}
          </h2>
          <h2 className="done-text">
            Concluídas{' '}
            <span>
              {completedTasks} de {totalTasks}
            </span>
          </h2>
        </TasksData>

        {!totalTasks ? (
          <EmptyList>
            <div>
              <img src={emptyImg} alt="Não há tarefas" />
              <h2> Você ainda não tem tarefas cadastradas </h2>
              <p> Crie tarefas e organize seus itens a fazer </p>
            </div>
          </EmptyList>
        ) : (
          <List>
            {tasks.map((tarefa) => (
              <div key={tarefa.id}>
                <Button
                  onClick={() => completeTask(tarefa.id)}
                  hasCompleted={tarefa.completed}
                >
                  {tarefa.completed ? <CheckIcon /> : <NotCheckdIcon />}
                </Button>
                <p>{tarefa.task}</p>
                <Trash onClick={() => deleteTask(tarefa.id)}>
                  <img src={trashImg} alt="Deseja excluir esta tarefa?" />
                </Trash>
              </div>
            ))}
          </List>
        )}
      </Tasks>
    </Container>
  )
}

export default Dashboard
