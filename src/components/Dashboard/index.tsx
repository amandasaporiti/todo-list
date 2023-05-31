import { useState, FormEvent, useEffect } from 'react'
import {
  DashboardContainer,
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

export const Dashboard = () => {
  const [tasks, setTasks] = useState<Task[]>(() => {
    const storagedTasks = localStorage.getItem('tasks')
    if (storagedTasks) {
      return JSON.parse(storagedTasks)
    } else {
      return []
    }
  })

  const [typedTask, setTypedTask] = useState('')

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  const handleCreateTask = (event: FormEvent) => {
    event.preventDefault()

    if (typedTask) {
      const newTask = {
        id: uuidv4(),
        task: typedTask,
        completed: false,
      }

      setTasks([...tasks, newTask])

      setTypedTask('')
    }
  }

  const handleDeleteTask = (taskId: string) => {
    const newList = tasks.filter((task) => task.id !== taskId)
    setTasks(newList)
  }

  const handleMarkTaskAsCompleted = (taskId: string) => {
    const newTasks = tasks.map((item) =>
      item.id === taskId ? { ...item, completed: !item.completed } : item,
    )
    setTasks(newTasks)
  }

  const completedTasks = tasks.filter((task) => task.completed).length

  return (
    <DashboardContainer>
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
          <button onClick={handleCreateTask}>
            Criar
            <img src={plusImg} alt="Criar nova tarefa" />
          </button>
        </AddNewTask>
        <TasksData>
          <h2>
            Tarefas criadas <span>{tasks.length}</span>
          </h2>
          <h2 className="done-text">
            Concluídas
            <span>
              {completedTasks} de {tasks.length}
            </span>
          </h2>
        </TasksData>

        {tasks.length <= 0 ? (
          <EmptyList>
            <div>
              <img src={emptyImg} alt="Não há tarefas" />
              <h2> Você ainda não tem tarefas cadastradas </h2>
              <p> Crie tarefas e organize seus itens a fazer </p>
            </div>
          </EmptyList>
        ) : (
          <List>
            {tasks.map((task) => (
              <div key={task.id}>
                <Button
                  onClick={() => handleMarkTaskAsCompleted(task.id)}
                  hasCompleted={task.completed}
                >
                  {task.completed ? <CheckIcon /> : <NotCheckdIcon />}
                </Button>
                <p>{task.task}</p>
                <Trash onClick={() => handleDeleteTask(task.id)}>
                  <img src={trashImg} alt="Deseja excluir esta tarefa?" />
                </Trash>
              </div>
            ))}
          </List>
        )}
      </Tasks>
    </DashboardContainer>
  )
}
