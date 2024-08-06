import {Schema} from '@effect/schema'
import {Effect, Either} from 'effect'
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
    const validate = Effect.gen(function* () {
      const decodeEither = yield* Effect.either(
        Schema.decodeUnknown(schema)(state)
      )

      return Either.isLeft(decodeEither)
        ? new Error()
        : localStorage.setItem(key, JSON.stringify(state))
    })

    void Effect.runPromise(validate)
  })

  return [state, setState] as const
}
