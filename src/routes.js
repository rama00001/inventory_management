import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const Tables = React.lazy(() => import('./views/base/tables/Tables'))
const AddProduct = React.lazy(() => import('./views/forms/layout/AddProduct'))
const AddCategory = React.lazy(() => import('./views/forms/layout/AddCategory'))
const EditProduct = React.lazy(() => import('./views/forms/layout/EditProduct'))
const EditCategory = React.lazy(() => import('./views/forms/layout/EditCategory'))
const Charts = React.lazy(() => import('./views/charts/Charts'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard, exact: true },
  { path: '/base/tables', name: 'Tables', element: Tables },
  { path: '/charts', name: 'Charts', element: Charts },
  { path: '/add-product', name: 'AddProduct', element: AddProduct },
  { path: '/add-category', name: 'AddCategory', element: AddCategory },
  { path: '/edit-product', name: 'EditProduct', element: EditProduct },
  { path: '/edit-category', name: 'EditCategory', element: EditCategory },

]

export default routes
