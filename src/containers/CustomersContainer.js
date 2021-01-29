import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import { withRouter } from 'react-router-dom'
import {fetchCustomers} from './../actions/fetchCustomers'
import {getCustomers} from './../selectors/customers'
import AppFrame from '../components/AppFrame'
import CustomerList from '../components/CustomerList'
import CustomerActions from '../components/CustomerActions'

class CustomersContainer extends Component {
  componentDidMount(){
    this.props.fetchCustomers()
  }
  handleAddNew = (props) => {
    this.props.history.push('/customers/new')
  }

  renderBody= customers => (
    <div>
    <CustomerList customers={customers} urlPath={'customers/'}/>
    <CustomerActions>
      <button onClick={this.handleAddNew}>Nuevo cliente</button>
    </CustomerActions>
    </div>
  )

  render(){
    return (
      <div>
      <AppFrame 
      header={'Listado de clientes'}
      body={this.renderBody(this.props.customers)}
      />
    </div>
  )
}
}

CustomersContainer.propTypes = {
  fetchCustomers: PropTypes.func.isRequired,
}
CustomersContainer.defaultProps = {
  customers: []
}

const mapStateToProps = state => ({
  customers: getCustomers(state)
})
export default withRouter(connect(mapStateToProps, {fetchCustomers})(CustomersContainer))
