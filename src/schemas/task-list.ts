import {Schema} from '@effect/schema'

export const TaskList = Schema.Struct({
  text: Schema.String,
  done: Schema.optional(Schema.Boolean).annotations({default: false})
})

export type TaskList = typeof TaskList.Type
