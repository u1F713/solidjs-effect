import type {Schema} from '@effect/schema'
import {Context, type Effect} from 'effect'
import {createContext} from 'solid-js'
import type {SetStoreFunction, Store} from 'solid-js/store'
import type {TaskList} from '~/schemas/task-list.ts'

export type AppContextType = {
  tasks: Schema.Array$<typeof TaskList>['Type']
}

export class AppContextTag extends Context.Tag('app-context')<
  AppContextTag,
  {
    readonly appContext: Store<AppContextType>
    readonly actions: Record<
      `set${Capitalize<keyof AppContextType>}`,
      SetStoreFunction<
        Schema.SimplifyMutable<AppContextType[keyof AppContextType]>
      >
    >
  }
>() {}

export const AppContext =
  createContext<
    [
      AppContextType,
      {runPromise<A, E>(runnable: Effect.Effect<A, E, AppContextTag>): void}
    ]
  >()
