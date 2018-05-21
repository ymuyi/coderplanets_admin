/*
 *
 * FormInputer
 *
 */

import React from 'react'
import PropTypes from 'prop-types'
import { Input } from 'antd'
import R from 'ramda'
// import { Input } from '../../components'

import { makeDebugger } from '../../utils'

import { FormItemWrapper, FormLable, FormInput, Note } from './styles'

/* eslint-disable no-unused-vars */
const debug = makeDebugger('c:FormInputer:index')
/* eslint-enable no-unused-vars */

const { TextArea } = Input

const FormInputer = ({ label, textarea, value, onChange, note }) => (
  <FormItemWrapper>
    <FormLable>{label}</FormLable>

    <FormInput>
      {textarea ? (
        <TextArea
          value={value}
          placeholder={value}
          autosize={{ minRows: 3, maxRows: 6 }}
          onChange={onChange}
        />
      ) : (
        <Input size="default" value={value} onChange={onChange} />
      )}
      {/* NOTE info put here */}
      {R.isEmpty(note) ? <div /> : <Note>{note}</Note>}
    </FormInput>
  </FormItemWrapper>
)

FormInputer.propTypes = {
  // https://www.npmjs.com/package/prop-types
  onChange: PropTypes.func,
  label: PropTypes.string,
  value: PropTypes.string,
  textarea: PropTypes.bool,
  note: PropTypes.string,
}

FormInputer.defaultProps = {
  onChange: debug,
  value: '',
  label: '',
  textarea: false,
  note: '',
}

export default FormInputer