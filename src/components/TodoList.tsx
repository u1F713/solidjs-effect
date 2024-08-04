import {type Component, For} from 'solid-js'
import {useAppContext} from '~/providers/useAppContext'

const TodoList: Component = () => {
  const [state] = useAppContext()

  return (
    <ul class="">
      <For each={state.items}>{item => <li>{item.text}</li>}</For>
    </ul>
  )
}

export default TodoList
