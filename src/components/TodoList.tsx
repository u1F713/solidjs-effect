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
        const {appContext, setAppContext} = yield* AppContextTag
        const items = yield* Effect.sync(() =>
          appContext.items.filter((_, i) => i !== index())
        )

        setAppContext({items})
      })
      runPromise(rmTask)
    }

  return (
    <ul class={styles.todoListStyle}>
      <For each={state.items}>
        {(item, index) => (
          <li class={styles.listItem} onKeyPress={undefined}>
            <span>{item.text}</span>
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
