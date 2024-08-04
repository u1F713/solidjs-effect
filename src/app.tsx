import type {Component} from 'solid-js'
import AppContextProvider from './providers/AppContextProvider.tsx'
import './app.css.ts'
import TodoInput from './components/TodoInput.tsx'
import TodoList from './components/TodoList.tsx'

const App: Component = () => {
  return (
    <AppContextProvider>
      <TodoInput />
      <TodoList />
    </AppContextProvider>
  )
}

export default App
