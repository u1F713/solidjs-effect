import type {Component} from 'solid-js'
import AppContextProvider from './providers/AppContextProvider.tsx'

const App: Component = () => {
  return <AppContextProvider>Solidjs Effect</AppContextProvider>
}

export default App
