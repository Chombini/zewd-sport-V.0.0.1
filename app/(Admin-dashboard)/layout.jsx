import React from 'react'
import AdminHeader from './_componets/AdminHeader';

function layout({children}) {

  return (
    <div className="flex min-h-screen w-full flex-col">
      <AdminHeader/>
      {children}
    </div>
  )
}

export default layout