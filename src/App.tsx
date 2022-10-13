import { useState } from 'react';
import './App.css';
import { AddTask } from './components/add_task';
import { TaskList } from './components/list_task';

import styled from 'styled-components'

const Container = styled.div`
  background-color: #97a6c2;
  padding: 50px;
  text-align: center;
  border-radius: 5%;
  color: white;
  box-shadow: 1px 1px 2px black, 0 0 25px blue, 0 0 5px darkblue;
`

const Header = styled.h1`
  color: #3a3737; 
  font-family: 'Helvetica Neue', sans-serif; 
  font-size: 100px; 
  font-weight: bold; 
  letter-spacing: -1px; 
  line-height: 1; 
`

export default function App() {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);

  function handleAddTask(text: string) {
    setTasks([
      ...tasks,
      {
        id: nextId++,
        text: text,
        done: false,
      },
    ]);
  }

  function handleChangeTask(task: Task) {
    setTasks(
      tasks.map((t) => {
        if (t.id === task.id) {
          return task;
        } else {
          return t;
        }
      })
    );
  }

  function handleDeleteTask(taskId: number) {
    setTasks(tasks.filter((t) => t.id !== taskId));
  }

  return (
    <Container>
      <Header>React + Reducer</Header>
      <h3>Tasks</h3>
      
      <AddTask onAddTask={handleAddTask} />
      
      <TaskList
        tasks={tasks}
        onChangeTask={handleChangeTask}
        onDeleteTask={handleDeleteTask}
      />
    </Container>

    /*
    <div className="App">
      <h1>React + Reducer</h1>
      <h3>Tasks</h3>
      
      <AddTask onAddTask={handleAddTask} />
      
      <TaskList
        tasks={tasks}
        onChangeTask={handleChangeTask}
        onDeleteTask={handleDeleteTask}
      />
      
    </div>
    */
  )
}

export interface Task{
  id: number
  text: string
  done: boolean
}

let nextId = 3;

const initialTasks: Task[] = [
  {id: 0, text: 'Elaborar Aulas', done: true},
  {id: 1, text: 'Estudar Flutter - Estados', done: false},
  {id: 2, text: 'Correr avenida Raul Lopres', done: false},
];
