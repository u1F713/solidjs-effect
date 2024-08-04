import {Context, type Effect} from 'effect'
import {createContext} from 'solid-js'
import type {SetStoreFunction, Store} from 'solid-js/store'

export type AppContextType = {
  items: {text: string}[]
}

export class AppContextTag extends Context.Tag('app-context')<
  AppContextTag,
  {
    readonly appContext: Store<AppContextType>
    readonly setAppContext: SetStoreFunction<AppContextType>
  }
>() {}

export const AppContext =
  createContext<
    [
      AppContextType,
      {runPromise<A, E>(runnable: Effect.Effect<A, E, AppContextTag>): void}
    ]
  >()
