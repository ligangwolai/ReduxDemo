import React from 'react'
import AppleContainer from '@/containers/AppleContainer'
import AppleBasket from '../components'

export default class AppleBasketView extends React.Component {
  render () {
    return (
      <AppleContainer component={AppleBasket} />
    )
  }
}
