import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import PulpoNegroApp from './PulpoNegroApp'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PulpoNegroApp/>
  </StrictMode>,
)
