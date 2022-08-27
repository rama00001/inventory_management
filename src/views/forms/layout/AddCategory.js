import React from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CForm,
  CFormCheck,
  CFormInput,
  CFormLabel,
  CFormSelect,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import { DocsExample } from 'src/components'
import { Link } from 'react-router-dom'

const AddCategory = () => {
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Add Category</strong>
          </CCardHeader>
          <CCardBody>
            <CRow>
              <CCol xs>
                <CFormInput placeholder="Category Name" aria-label="Category Name" />
              </CCol>
              <CCol xs>
                <CFormInput placeholder="Description" aria-label="Description" />
              </CCol>
            </CRow>
            <CRow>
              <CCol xs>
                <Link to="/base/tables">
                  <CButton style={{ float: "right", marginTop: "10px" }} component="a" color="primary" href="#" role="button" size="sm">
                    Add Category
              </CButton>
                </Link>
              </CCol>
            </CRow>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default AddCategory 
