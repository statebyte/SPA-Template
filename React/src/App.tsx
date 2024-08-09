import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import tailwindLogo from '/tailwindcss.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='text-center text-white flex flex-col items-center py-16'>
      <div className='flex flex-row'>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://tailwindcss.com" target="_blank">
          <img src={tailwindLogo} className="logo tailwind" alt="Tailwind logo" />
        </a>
      </div>
      <h1 className='p-2 text-3xl font-bold opacity-80'>Vite + React + TailwindCSS</h1>
      <div className="my-12">
        <button className=' transition-all text-opacity-80 hover:text-opacity-100 font-bold bg-[#1a1a1a] hover:bg-[#1a1a1a] rounded-lg px-4 py-2 text-white' onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p className='mt-4 '>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className=" opacity-30">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
