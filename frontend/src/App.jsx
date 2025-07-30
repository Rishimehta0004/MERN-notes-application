import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import CreatePage from './pages/CreatePage.jsx'
import NoteDetailPage from './pages/NoteDetailPage.jsx'
import { toast } from 'react-hot-toast'

const App = () => {
  return (
    <div data-theme="coffee"> 
      <button onClick = {() => toast.success("successful")} className="bg-blue-500 text-white px-4 py-2 rounded">Click Me</button>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/note/:id" element={<NoteDetailPage />} />
      </Routes>
    </div>
  )
}

export default App