import * as React from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm, InjectedFormProps } from 'redux-form'
import { bindActionCreators } from 'redux'
import { selectBook } from '../actions'

interface Props {
  activeBook: any
  selectBook: any
}

class TestForm extends React.Component<InjectedFormProps & Props> {
  renderField({ placeholder, type, input, meta: { touched, error } }: any) {
    debugger
    const classNames = `form-group ${touched && error ? 'has-danger' : ''} field-style fieled-text`
    return(
      <div className={classNames}>
        <input
          className="text-style"
          placeholder={placeholder}
          type={type}
          {...input} />
        <div className="text-help">
          {touched ? error: ''}
        </div>
      </div>
    )
  }

  onSubmit({ email, password }: any) {
    console.log('email:', email)
    console.log('password:', password)
    console.log(this.props.activeBook)
    const book = {
      title: 'hoge',
      pages: 666
    }
    this.props.selectBook(book)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit(this.onSubmit.bind(this))}>
          <Field placeholder="EMAIL ADRESS" name="email" type="text" component={this.renderField} />
          <Field placeholder="PASSWORD" name="password" type="password" component={this.renderField} />
          <button type="submit" className="submit-btn">SIGN IN</button>
        </form>
      </div>
    )
  }
}

function validate(values: any) {
  debugger
  const errors: any = {}

  if (!values.email) {
    errors.email = "Email required"
  } else if(values.email.length > 255) {
    errors.email = "Too long email address"
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }

  if (!values.password) {
    errors.password = "Password required"
  } else if (values.password.length < 6) {
    errors.password = "Password must contain at least 6 characters"
  }
  return errors
}

const mapStateToProps = ({ activeBook }: any) => {
  return { activeBook }
}

const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators({ selectBook }, dispatch)
}

export default reduxForm({
  validate,
  form: 'TestForm',
})(connect(mapStateToProps, mapDispatchToProps)(TestForm))