import {Schema} from '@effect/schema'

export const TodoListTaskchema = Schema.Struct({
  text: Schema.String
})

export type TodoListTaskchema = typeof TodoListTaskchema.Type
export const decodeTodoList = Schema.decode(Schema.Array(TodoListTaskchema))
