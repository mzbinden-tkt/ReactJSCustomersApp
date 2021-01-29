import React from 'react'
import PropTypes from 'prop-types'
import CustomerActions from './CustomerActions'

const CustomerData = ({name, dni, age, onBack}) => {
  return (
    <div>
      <div className="cutomer-data">
        <h2>Datos del client</h2>
          <div><strong>Nombre</strong><i>{name}</i></div>
          <div><strong>DNI</strong><i>{dni}</i></div>
          <div><strong>Edad</strong><i>{age}</i></div>
          <CustomerActions>
            <button onClick={onBack}>Volver</button>
          </CustomerActions>
      </div>
    </div>
  )
}

CustomerData.propTypes = {
  name:PropTypes.string.isRequired,
  dni:PropTypes.string.isRequired,
  age:PropTypes.number,
  onBack: PropTypes.func.isRequired,
}

export default CustomerData
