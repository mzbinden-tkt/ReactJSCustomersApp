import React from 'react'
import { withRouter } from 'react-router-dom'
import AppFrame from '../components/AppFrame'
import CustomerActions from '../components/CustomerActions'

const HomeContainer = props => {
  const onHandleOnClick = () => {
    props.history.push('/customers')
  }
  return (
    <div>
      <AppFrame 
      header='Inicio'
      body={
        <div>
          {/* <img src="https://lh6.googleusercontent.com/C0YXQ2ZHuvYkB2GEA4OfkzlBkU56stTvOxeJCQQGaFameldhTRQtzilAcMRveF4SwL3Xfw1muoPE7g=w1360-h677-rw" alt=""/> */}
          <CustomerActions>
            <button onClick={onHandleOnClick}>
              Listado de clientes
            </button>
          </CustomerActions>
        </div>
      }/>
    </div>
  )
}

export default withRouter(HomeContainer)
