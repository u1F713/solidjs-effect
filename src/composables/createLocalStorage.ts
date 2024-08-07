import {Schema} from '@effect/schema'
import {Effect, Either, pipe} from 'effect'
import {createEffect} from 'solid-js'
import {createStore} from 'solid-js/store'

export function createLocalStorage<T extends object>(
  key: string,
  schema: Schema.Schema<T>,
  value: T
) {
  const localState = localStorage.getItem(key)
  const [state, setState] = createStore<T>(
    localState ? JSON.parse(localState) : value
  )

  createEffect(() => {
    pipe(
      Schema.decodeEither(schema)(state),
      Either.mapBoth({
        onLeft: Effect.die,
        onRight: decode => localStorage.setItem(key, JSON.stringify(decode))
      })
    )
  })

  return [state, setState] as const
}
