/**
 * Created by songang on 2017/3/9.
 */
import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '@/routes/AppleBasket/modules/actions'

const mapStateToProps = (state, ownProps) => {
  return {
    apple : state.apple
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  let injectedActions = ownProps.injectedActions
  if (injectedActions) {
    return {
      ...bindActionCreators({ ...injectedActions, ...actions }, dispatch),
    }
  } else {
    return {
      ...bindActionCreators(actions, dispatch),
    }
  }
}

const connector = connect(mapStateToProps, mapDispatchToProps, null, { withRef: true })

export default class AppleContainer extends Component {
  constructor (props) {
    super(props)
    this.Connected = connector(props.component)
  }

  render () {
    let { component, ...otherProps } = this.props
    return <this.Connected {...otherProps} />
  }
}

AppleContainer.propTypes = {
  component: PropTypes.func.isRequired,
}
