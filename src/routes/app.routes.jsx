import { Routes, Route } from 'react-router-dom'

import { Home } from '../pages/Home'
import { Create } from '../pages/Create'
import { Edit } from '../pages/Edit'
import { Details } from '../pages/Details'
import { PopUp } from '../pages/PopUp'

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/create" element={<Create />} />
      <Route path="/edit/:id" element={<Edit />} />
      <Route path="/details/:id" element={<Details />} />
      <Route path="/popup" element={<PopUp />} />
    </Routes>
  )
}
