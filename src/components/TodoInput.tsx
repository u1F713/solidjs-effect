import {Effect} from 'effect'
import {type Component, type JSX, createSignal} from 'solid-js'
import {AppContextTag} from '~/providers/app-context'
import {useAppContext} from '~/providers/useAppContext'

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
      const {setAppContext} = yield* AppContextTag
      setAppContext(({items}) => ({items: [...items, {text: inputValue()}]}))
      setInputValue('')
    })
    runPromise(task)
  }

  return (
    <form onSubmit={addItemEvent}>
      <input
        type="text"
        value={inputValue()}
        onChange={e => setInputValue(e.currentTarget.value)}
      />
      <input type="submit" value="save item" />
    </form>
  )
}

export default TodoInput
