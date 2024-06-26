import './App.css'
import './App.scss'
import  LanguageSelector  from './components/languageSelector'
import { RouterProvider } from 'react-router-dom'
import routers from './routers'

const App: React.FC = () => {
  return (
    <div className='container'>
      <LanguageSelector />
      <RouterProvider router={routers} />
    </div>
  )
}

export default App
