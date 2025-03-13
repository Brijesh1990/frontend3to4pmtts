import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
// import Container from './Container';
// import ButtonApp from './Button';
import CardApp from './CardApp';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Container /> */}
    {/* <ButtonApp /> */}
    <CardApp />
  </StrictMode>,
)
