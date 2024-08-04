import {Schema} from '@effect/schema'

const TodoListSchema = Schema.Array(
  Schema.Struct({
    text: Schema.String
  })
)

export type TodoListData = typeof TodoListSchema.Type
export const todoListDecode = Schema.decode(TodoListSchema)
