import {Schema} from '@effect/schema'
import {Layer} from 'effect'
import type {Component, JSXElement} from 'solid-js'
import {createStore} from 'solid-js/store'
import {createLocalStorage} from '~/composables/createLocalStorage.ts'
import {TaskList} from '~/schemas/task-list.ts'
import {makeSolidRuntime} from '#integrations/effect.ts'
import {AppContext} from './app-context.ts'
import {AppContextTag, type AppContextType} from './app-context.ts'

const AppContextProvider: Component<{children: JSXElement}> = props => {
  const [tasks, setTasks] = createLocalStorage(
    'task-list/items',
    Schema.mutable(Schema.Array(TaskList)),
    []
  )
  const [store] = createStore<AppContextType>({tasks})

  const solidLive = Layer.succeed(
    AppContextTag,
    AppContextTag.of({
      appContext: store,
      actions: {setTasks}
    })
  )
  const {runPromise} = makeSolidRuntime(solidLive)

  return (
    <AppContext.Provider value={[store, {runPromise}]}>
      {props.children}
    </AppContext.Provider>
  )
}

export default AppContextProvider
