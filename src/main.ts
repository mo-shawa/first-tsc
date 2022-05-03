import './style.css'
import { v4 as uuid } from 'uuid'

type Task = {
    id: String,
    task: String,
    completed: Boolean,
    createdAt: Date

}

const app = document.querySelector<HTMLDivElement>('#app')
const ulEl = document.querySelector<HTMLUListElement>('#list')
const form = document.querySelector<HTMLFormElement>('#form')
const input = document.querySelector<HTMLInputElement>('#input-box')

form?.addEventListener('submit', evt => {
    evt.preventDefault()

    if (input?.value == '' || input?.value == null) return

    const taskObj: Task = {
        id: uuid(),
        task: input.value,
        completed: false,
        createdAt: new Date()
    }
    addTask(taskObj)
})

const addTask = (task: Task) => {
    console.log(task)
    const item = document.createElement('li')
    const label = document.createElement('label')
    const checkbox = document.createElement('input')
    checkbox.type = "checkbox"
    label.append(checkbox, task.task)

}

console.log(uuid())


