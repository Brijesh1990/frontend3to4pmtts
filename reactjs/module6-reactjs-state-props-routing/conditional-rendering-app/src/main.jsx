import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
// import IfApp from './components/IfApp'
// import IfElseApp from './components/IfElseApp'
// import NestedApp from './components/NestedApp'
// import IfElseIf from './components/IfElseIf'
// import GradeApp from './components/GradeApp'
import TernaryApp from './components/TernaryApp'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <IfApp /> */}
    {/* <IfElseApp /> */}
    {/* <NestedApp /> */}
    {/* <IfElseIf /> */}
    {/* <GradeApp /> */}
    <TernaryApp />
  </StrictMode>,
)
