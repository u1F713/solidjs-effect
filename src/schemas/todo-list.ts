import {Schema} from '@effect/schema'

export const TodoListTaskchema = Schema.Struct({
  text: Schema.String,
  done: Schema.optional(Schema.Boolean).annotations({default: false})
})

export type TodoListTaskchema = typeof TodoListTaskchema.Type
