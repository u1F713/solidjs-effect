import {Layer} from 'effect'
import type {Component, JSXElement} from 'solid-js'
import {createStore} from 'solid-js/store'
import {makeSolidRuntime} from '#integrations/effect.ts'
import {AppContext} from './app-context.ts'
import {AppContextTag, type AppContextType} from './app-context.ts'

const AppContextProvider: Component<{children: JSXElement}> = props => {
  const [store, setStore] = createStore<AppContextType>({text: []})

  const solidLive = Layer.succeed(
    AppContextTag,
    AppContextTag.of({
      appContext: store,
      setAppContext: setStore
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
