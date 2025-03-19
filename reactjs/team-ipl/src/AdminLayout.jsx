import React from 'react'
import AdminHeader from './components/admin/AdminHeader'
import AdminSidebar from './components/admin/AdminSidebar'
import Dashboard from './components/admin/Dashboard'
import AdminFooter from './components/admin/AdminFooter'
export default function AdminLayout() {
  return (
    <div>
    <AdminHeader />
     {/* sidebar and dashboard display flex */}
     <div className='flex flex-row'>
      {/* sidebar */}
      <div className='w-1/3 h-full'>
        <AdminSidebar />
      </div>
      {/* dashboard */}
      <div className='w-full h-full'>
        <Dashboard />
      </div>
     </div>

    </div>
  )
}
