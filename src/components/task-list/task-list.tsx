import {Effect, pipe} from 'effect'
import {type Accessor, type Component, For} from 'solid-js'
import {AppContextTag} from '~/providers/app-context.ts'
import {useAppContext} from '~/providers/useAppContext'
import type {TaskList as Task} from '~/schemas/task-list.ts'
import * as styles from './task-list.css.ts'

const TaskItem: Component<{task: Task; index: Accessor<number>}> = props => {
  const [, {runPromise}] = useAppContext()

  const deleteTask = (index: number) =>
    pipe(
      AppContextTag,
      Effect.map(({actions: {setTasks}}) => {
        setTasks(t => t.filter((_, i) => i !== index))
      })
    )

  const toggleDone = (index: number) =>
    pipe(
      AppContextTag,
      Effect.map(({actions: {setTasks}}) =>
        setTasks(index, prev => ({done: !prev.done}))
      )
    )

  return (
    <li class={styles.taskItemStyle}>
      <p
        class={styles.taskBody}
        data-state={props.task.done ? 'done' : null}
        onKeyPress={() => undefined}
        onClick={() => runPromise(toggleDone(props.index()))}
      >
        {props.task.text}
      </p>
      <button
        class={styles.deleteBtn}
        onClick={() => runPromise(deleteTask(props.index()))}
        type="button"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="2em"
          height="2em"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-trash-2"
        >
          <title>delete</title>
          <path d="M3 6h18" />
          <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
          <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
          <line x1="10" x2="10" y1="11" y2="17" />
          <line x1="14" x2="14" y1="11" y2="17" />
        </svg>
      </button>
    </li>
  )
}

const TaskList: Component = () => {
  const [state] = useAppContext()

  return (
    <ul class={styles.taskListStyle}>
      <For each={state.tasks}>
        {(task, index) => <TaskItem index={index} task={task} />}
      </For>
    </ul>
  )
}

export default TaskList
