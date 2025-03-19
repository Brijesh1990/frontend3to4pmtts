import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './assets/css/style.css'
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom'
// customer panel components
import Layout from './Layout'
// import ContactUs from './components/ContactUs'
// import Pagenotfound from './components/Pagenotfound'
// admin panel components load here
import AdminLogin from './components/admin/AdminLogin'
import AdminLayout from './AdminLayout'
import ManageCustomers from './components/admin/ManageCustomers'
import AddCategory from './components/admin/AddCategory'
import AddSubCategory from './components/admin/AddSubCategory'
import AddProducts from './components/admin/AddProducts'
import ManageContacts from './components/admin/ManageContacts'
import ManageOrders from './components/admin/ManageOrders'
import ManageReviews from './components/admin/ManageReviews'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<Layout />} />
        {/* <Route path='/contact-us' element={<ContactUs />} />
        <Route path='*' element={<Pagenotfound />} /> */}
        <Route path='/admin-login' element={<AdminLogin />} />
        <Route path='/admin-login/dashboard' element={<AdminLayout />} />
        <Route path='/admin-login/manage-customers' element={<ManageCustomers />} />
        <Route path='/admin-login/add-category' element={<AddCategory />} />
        <Route path='/admin-login/add-subcategory' element={<AddSubCategory />} />
        <Route path='/admin-login/add-products' element={<AddProducts />} />
        <Route path='/admin-login/manage-reviews' element={<ManageReviews />} />
        <Route path='/admin-login/manage-orders' element={<ManageOrders />} />
        <Route path='/admin-login/manage-contacts' element={<ManageContacts />} />
        
      </Routes>
    </Router>

  </StrictMode>,
)
