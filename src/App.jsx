// Made by Kyle (https://github.com/kt946)
import { BrowserRouter } from 'react-router-dom'
import { useEffect } from 'react'
// import useSelector hook from react-redux to access state
import { useSelector } from 'react-redux'

// import Main component that contains all the routes
import { MainSection } from './components'

function App() {
  // get darkMode state from store
  const darkMode = useSelector((state) => state.darkMode.value)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  return (
    // This will make the client available to all components
    <BrowserRouter>
      <div className="bg-gray-50 dark:bg-slate-900 text-slate-800 dark:text-gray-100">
        {/* Router and Routes are located in Main */}
        <MainSection />
      </div>
    </BrowserRouter>
  )
}

export default App
