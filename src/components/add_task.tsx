import { ChangeEvent, FormEvent, useState } from "react"
import styled from 'styled-components'
import Button from '../styles/Button'

const Input = styled.input`
    border: 2px solid #1A1A1A;
    border-radius: 15px;
    box-sizing: border-box;
`

interface AddTaskProps{
    onAddTask: (text: string) => void
}

export function AddTask({onAddTask}: AddTaskProps){

    const [taskText, setTaskText] = useState('')

    const handlerDescriptionChange = (event: ChangeEvent<HTMLInputElement>) => {
        setTaskText(event.target.value)
    }

    const handlerSubmit = (event: FormEvent) => {
        event.preventDefault()
        onAddTask(taskText)
        setTaskText('')
    }

    return (
        <>
            <form onSubmit={handlerSubmit}>
                <Input type="text" 
                    value={taskText} 
                    onChange={handlerDescriptionChange}  
                    placeholder="Description" 
                />

                <Button type="submit">Add task</Button>
            </form>
        </>
    )
}