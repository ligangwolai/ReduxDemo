import React from 'react'
import { browserHistory, Router } from 'react-router'
import { Provider } from 'react-redux'
// import AV from 'leancloud-storage'
import PropTypes from 'prop-types'

// const appId = 'D3U7vIk4fKhTzi74BjXCcGXo-gzGzoHsz'
// const appKey = 'F7iMaQJhTMwGC0MvrFgPFTVn'
// AV.init({ appId, appKey })

class App extends React.Component {
  static propTypes = {
    store: PropTypes.object.isRequired,
    routes: PropTypes.object.isRequired,
  }

  shouldComponentUpdate () {
    return false
  }

  render () {
    return (
      <Provider store={this.props.store}>
        <div style={{ height: '100%' }}>
          <Router history={browserHistory} children={this.props.routes} />
        </div>
      </Provider>
    )
  }
}

export default App
