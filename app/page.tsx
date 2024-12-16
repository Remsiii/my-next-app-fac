import React from 'react'
import Login from './components/Login'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center p-4 sm:p-0">
      <div className="max-w-[980px] w-full mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8 items-center">
        <div className="text-center sm:text-left">
          <h1 className="text-5xl font-bold text-blue-600 mb-4">facebook</h1>
          <p className="text-2xl">Facebook hilft Ihnen, mit den Menschen in Ihrem Leben in Verbindung zu bleiben und Inhalte zu teilen.</p>
        </div>
        <Login />
      </div>
    </div>
  )
}

