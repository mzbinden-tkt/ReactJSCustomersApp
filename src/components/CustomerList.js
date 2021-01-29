import React from 'react'
import PropTypes from 'prop-types'
import CustomerListItem from './CustomerListItem'

const CustomerList = ({customers, urlPath}) => {
  console.log(customers)
  return (
    <div>
      <div className="customers-list">
        {
          customers.map( c => (
            <CustomerListItem 
            key={c.dni}
            name={c.name}
            editAction={'Editar'}
            deleteAction={'Eliminar'}
            urlPath={urlPath}
            dni={c.dni}/>
          ))
        }
      </div>
    </div>
  )
}

CustomerList.propTypes = {
  customers: PropTypes.array.isRequired,
  urlPath: PropTypes.string.isRequired,
}

export default CustomerList
