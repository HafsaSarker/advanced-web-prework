import { Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './layout/Layout'
import ShowAllCreators from './pages/ShowAllCreators'
import AddCreator from './pages/AddCreator'
import EditCreator from './pages/EditCreator'
import ViewOneCreator from './pages/ViewOneCreator'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<ShowAllCreators/>}/>
          <Route path='/create' element={<AddCreator/>}/> 
          <Route path='/edit/:id' element={<EditCreator/>}/> 
          <Route path='/creators/:id' element={<ViewOneCreator/>}/> 
        </Route>
      </Routes>
    </div>
  )
}

export default App
