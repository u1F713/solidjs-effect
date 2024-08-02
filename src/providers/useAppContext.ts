import {useContext} from 'solid-js'
import {AppContext} from './app-context'

export function useAppContext() {
  const context = useContext(AppContext)
  if (!context) throw new Error('useAppContext: cannot find a CounterContext')

  return context
}
