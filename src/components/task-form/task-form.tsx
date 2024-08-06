import {Effect} from 'effect'
import {type Component, type JSX, createSignal} from 'solid-js'
import {AppContextTag} from '~/providers/app-context'
import {useAppContext} from '~/providers/useAppContext'
import * as styles from './task-form.css.ts'

type FormEventHandle = JSX.EventHandler<
  HTMLFormElement,
  Event & {submitter: HTMLElement}
>

const TodoInput: Component = () => {
  const [, {runPromise}] = useAppContext()
  const [inputValue, setInputValue] = createSignal('')

  const addItemEvent: FormEventHandle = event => {
    event.preventDefault()

    const task = Effect.gen(function* () {
      const {appContext, actions} = yield* AppContextTag
      actions.setTasks(appContext.tasks.length, {text: inputValue()})
      setInputValue('')
    })
    runPromise(task)
  }

  return (
    <form class={styles.todoInputStyle} onSubmit={addItemEvent}>
      <input
        class={styles.inputText}
        type="text"
        value={inputValue()}
        onChange={e => setInputValue(e.currentTarget.value)}
        autocorrect="off"
        autocapitalize="none"
        autocomplete="off"
        required
      />
      <input class={styles.inputSubmit} type="submit" value="Save" />
    </form>
  )
}

export default TodoInput
