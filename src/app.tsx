import type {Component} from 'solid-js'
import AppContextProvider from './providers/AppContextProvider.tsx'
import './app.css.ts'

const App: Component = () => {
  return <AppContextProvider>Solidjs Effect</AppContextProvider>
}

export default App
