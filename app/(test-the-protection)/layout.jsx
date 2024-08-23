import React from 'react'

function layout({children}) {

  return (
      <div className="flex min-h-screen w-full flex-col">
        <nav className='flex gap-2 h-7 w-full'>
          <a href="/test-1">test-1</a>
          <a href="/test-2-2">test-2</a>
        </nav>
        {children}
      </div>
  )
}

export default layout