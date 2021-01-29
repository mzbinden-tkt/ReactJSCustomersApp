import React from 'react'
import PropTypes from 'prop-types'
import {reduxForm, Field} from 'redux-form'
import CustomerActions from './CustomerActions'
import { setPropsAsInitial } from '../helpers/setPropsAsInitial'
import { Prompt } from 'react-router-dom'

const isNumber = value => (
  isNaN(Number(value)) && "El campo debe ser un numero"
)
const myField = ({input, meta, type, field, name}) =>(
  <div>
    <label htmlFor={name}>{field}</label>
    <input {...input} type={!type ? 'text' : type}/>
    {
      meta.touched && meta.error && <span>{meta.error}</span>
    }
  </div>
) 

// const isRequired = value => !value && 'Este campo es requerido'
const validate = values => {
  const error = {}
  if(!values.name) {
    error.name = "El campo nombre es requerido"
  }
  if(!values.dni) {
    error.dni = "El campo DNI es requerido"
  }
  return error
}
const toNumber = value => value && Number(value)
const CustomerEdit = ({name, dni, age, handleSubmit, submitting, onBack, pristine, submitSucceeded}) => {
  return (
    <div>
      <form onSubmit={handleSubmit}>
          <Field 
            name='name'
            component={myField} 
            // validate={isRequired} 
            label='Nombre' />
          <Field 
            name='dni'
            component={myField} 
            validate={[isNumber]} 
            label='DNI'/>
          <Field 
            name='age' 
            component={myField} 
            type='number' 
            validate={isNumber}
            parse={toNumber}
            label='Edad' />
            <CustomerActions>
              <button type='submit' disabled={pristine || submitting}>Aceptar</button>
              <button type ='button' disabled={submitting} onClick={onBack}>Cancelar</button>
            </CustomerActions>
            <Prompt
              when={!pristine && !submitSucceeded}
              message='Se perderan los datos si continúa'></Prompt>
      </form>
    </div>
  )
}

CustomerEdit.propTypes = {
  name: PropTypes.string,
  dni: PropTypes.string,
  age: PropTypes.number,
  onBack: PropTypes.func.isRequired,
}

const CustomerEditForm = reduxForm(
  {
    form: 'CustomerEdit',
    validate
  })(CustomerEdit)

export default setPropsAsInitial(CustomerEditForm)
