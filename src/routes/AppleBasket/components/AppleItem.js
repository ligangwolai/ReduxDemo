/**
 * Created by songang on 2017/8/18.
 */
import React from 'react'
import GreenImg from '../assets/green_apple.jpg'
import RedImg from '../assets/red_apple.png'

import '@/styles/appleItem.scss'

class AppleItem extends React.Component {
  // shouldComponentUpdate (nextProps) {
  //   return nextProps.state !== this.props.state
  // }

  changeApple = (id) => () => {
    this.props.handleItemEvent(id)
    this.props.handleStateChange()
  }

  render () {
    let { apple } = this.props
    let isRed = apple.color === 'red'
    return (
      <div className='appleItem'>
        <div className='apple'>
          <img src={isRed ? RedImg : GreenImg} alt='' width={60} height={60} />
        </div>
        <div className='info'>
          <div className='name'>{isRed ? '红' : '绿'}苹果 - { apple.id }号</div>
          <div className='weight'>{ apple.weight }克</div>
        </div>
        <div className='btn-div'>
          <button
            style={!isRed ? { backgroundColor: 'red', color: 'white' } : null}
            onClick={this.changeApple(apple.id)}> {isRed ? '吃掉' : '催熟'} </button>
        </div>
      </div>
    )
  }
}

AppleItem.propTypes = {
  handleItemEvent: React.PropTypes.func,
  handleStateChange: React.PropTypes.func,
  apple: React.PropTypes.object.isRequired
}

export default AppleItem
