import {type Effect, type Layer, ManagedRuntime} from 'effect'

export function makeSolidRuntime<R, E>(layer: Layer.Layer<R, E, never>) {
  const runtime = ManagedRuntime.make(layer)

  return {
    runPromise: <A, E>(runnable: Effect.Effect<A, E>) =>
      runtime.runPromise(runnable).then(() => runtime.dispose())
  }
}
