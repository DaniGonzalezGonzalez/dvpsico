/* eslint-disable react/prop-types */
import PropTypes from 'prop-types'
import { useContext } from 'react'
import { UserContext } from '../../../context/UserContext'
import { Navigate } from 'react-router-dom'

export function AccesoPrivado({ children }) {
  const { uid } = useContext(UserContext)
  if(!uid) return <Navigate to='/'/>

  return (
    <>
      {children}
    </>
  )
}
AccesoPrivado.propTypes = {
  children : PropTypes.any.isRequired
}
