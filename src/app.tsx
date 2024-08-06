import type {Component} from 'solid-js'
import AppContextProvider from './providers/AppContextProvider.tsx'
import Container from './components/Container.tsx'
import TaskForm from './components/task-form/task-form.tsx'
import TaskList from './components/task-list/task-list.tsx'
import './app.css.ts'

const App: Component = () => {
  return (
    <AppContextProvider>
      <Container>
        <TaskForm />
        <TaskList />
      </Container>
    </AppContextProvider>
  )
}

export default App
