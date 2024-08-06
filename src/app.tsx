import type {Component} from 'solid-js'
import AppContextProvider from './providers/AppContextProvider.tsx'
import Container from './components/Container.tsx'
import TodoInput from './components/TodoInput.tsx'
import TodoList from './components/TodoList.tsx'
import './app.css.ts'

const App: Component = () => {
  return (
    <AppContextProvider>
      <Container>
        <TodoInput />
        <TodoList />
      </Container>
    </AppContextProvider>
  )
}

export default App
