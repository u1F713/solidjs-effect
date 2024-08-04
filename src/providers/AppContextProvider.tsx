import {Effect, Either, Layer} from 'effect'
import {type Component, type JSXElement, createEffect, onMount} from 'solid-js'
import {createStore} from 'solid-js/store'
import {makeSolidRuntime} from '#integrations/effect.ts'
import {todoListDecode} from '../schemas/todo-list.ts'
import {AppContext} from './app-context.ts'
import {AppContextTag, type AppContextType} from './app-context.ts'

const AppContextProvider: Component<{children: JSXElement}> = props => {
  const [store, setStore] = createStore<AppContextType>({items: []})

  const solidLive = Layer.succeed(
    AppContextTag,
    AppContextTag.of({
      appContext: store,
      setAppContext: setStore
    })
  )
  const {runPromise} = makeSolidRuntime(solidLive)

  onMount(() => {
    const task = Effect.gen(function* () {
      const todoListEither = yield* Effect.either(
        todoListDecode(JSON.parse(localStorage.getItem('todo-list') ?? '{}'))
      )

      if (Either.isRight(todoListEither))
        setStore({items: todoListEither.right})
    })
    runPromise(task)
  })

  createEffect(() => {
    if (store.items.length > 0)
      localStorage.setItem('todo-list', JSON.stringify(store.items))
  })

  return (
    <AppContext.Provider value={[store, {runPromise}]}>
      {props.children}
    </AppContext.Provider>
  )
}

export default AppContextProvider
