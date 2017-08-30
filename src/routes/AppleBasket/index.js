// import { injectReducer } from '@/store/reducers'

export default (store) => ({
  path : 'apple',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const Apple = require('./containers').default
      // const reducer = require('./modules/reducer').default
      // injectReducer(store, { key: 'apple', reducer })
      /*  Return getComponent   */
      cb(null, Apple)
    }, 'apple')
  }
})
