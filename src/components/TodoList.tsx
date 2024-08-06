import {Effect} from 'effect'
import {type Accessor, type Component, For, type JSX} from 'solid-js'
import {AppContextTag} from '~/providers/app-context.ts'
import {useAppContext} from '~/providers/useAppContext'
import * as styles from './TodoList.css.ts'

const TodoList: Component = () => {
  const [state, {runPromise}] = useAppContext()

  const removeItem =
    (index: Accessor<number>): JSX.EventHandler<HTMLElement, MouseEvent> =>
    () => {
      const rmTask = Effect.gen(function* () {
        const {appContext, actions} = yield* AppContextTag
        const tasks = yield* Effect.sync(() =>
          appContext.tasks.filter((_, i) => i !== index())
        )

        actions.setTasks(tasks)
      })
      runPromise(rmTask)
    }

  return (
    <ul class={styles.todoListStyle}>
      <For each={state.tasks}>
        {(task, index) => (
          <li class={styles.listItem} onKeyPress={undefined}>
            <span>{task.text}</span>
            <button
              class={styles.deleteBtn}
              onClick={removeItem(index)}
              type="button"
            >
              x
            </button>
          </li>
        )}
      </For>
    </ul>
  )
}

export default TodoList
