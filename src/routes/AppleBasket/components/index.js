/**
 * Created by songang on 2017/8/18.
 */

import React from 'react'

// import actions from '../../store/actions/appleAction'
import AppleItem from './AppleItem.js'
import { totalWeight } from '@/utils/common'
import '@/styles/appleBasket.scss'

export default class AppleBasket extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      pickedApples: [],
      isLoading: true
    }
    this.redApples = []
    this.greenApples = []
    this.eatedApples = []
    this.ripeningApples = []
  }

  componentWillMount () {
    if (!this.props.apple.isInit) {
      this.props.initApples().then(() => {
        this.setState({ isLoading: false })
      })
    } else {
      this.pickedApplesChange()
      this.setState({ isLoading: false })
    }
  }

  getAppleItem = () => {
    // let apples = this.props.apple.pickedApples || []
    let data = []
    this.state.pickedApples.forEach(apple => {
      if (!apple.isEaten) {
        data.push(<AppleItem apple={apple}
          key={apple.id}
          handleStateChange={this.pickedApplesChange}
          handleItemEvent={apple.color === 'red' ? this.props.eatApple : this.props.ripeningApple} />)
      }
    })
    if (!data.length) {
      data.push(<div className='empty-tip' key='empty'>苹果篮子空空如也</div>)
    }
    return data
  }

  pickedApplesChange = () => {
    let pickedApples = this.props.apple.pickedApples
    this.setState({ pickedApples : pickedApples })

    // 红苹果
    this.redApples = pickedApples.filter(apple => apple.color === 'red' && apple.isEaten === false)
    this.redApplesWeight = totalWeight(this.redApples)

    // 青苹果
    this.greenApples = pickedApples.filter(apple => apple.color === 'green')
    this.greenApplesWeight = totalWeight(this.greenApples)

    // 吃掉的苹果
    this.eatedApples = pickedApples.filter(apple => apple.isEaten === true)
    this.eatedApplesWeight = totalWeight(this.eatedApples)

    // 催熟的苹果
    this.ripeningApples = pickedApples.filter(apple => apple.isRipening === true)
    this.ripeningApplesWeight = totalWeight(this.ripeningApples)
  }

  handlwPickApple = () => {
    this.props.pickApple()
    this.pickedApplesChange()
  }

  renderMain = () => {
    return (
      <div className='appleBusket'>
        <div className='title'>苹果篮子</div>

        <div className='stats'>
          <div className='section'>
            <div className='head'>当前</div>
            <div className='content'>
              {this.redApples.length }个红苹果，
              {this.redApplesWeight || 0}克, <br />
              {this.greenApples.length}个青苹果，
              {this.greenApplesWeight || 0}克
            </div>
          </div>
          <div className='section'>
            <div className='head'>已吃掉</div>
            <div className='content'>{this.eatedApples.length}个苹果，{this.eatedApplesWeight || 0}克</div>
          </div>
          <div className='section'>
            <div className='head'>催熟</div>
            <div className='content'>{this.ripeningApples.length}个苹果，{this.ripeningApplesWeight || 0}克</div>
          </div>
        </div>

        <div className='appleList'>
          {this.getAppleItem()}
        </div>

        <div className='btn-div'>
          <button className={''} onClick={this.handlwPickApple} >摘苹果</button>
        </div>
      </div>
    )
  }

  render () {
    return this.state.isLoading
      ? <div style={{ minHeight: 300, paddingTop: 60 }}><h1>loading</h1></div>
      : this.renderMain()
  }
}

AppleBasket.propTypes = {
  initApples: React.PropTypes.func,
  pickApple: React.PropTypes.func,
  eatApple: React.PropTypes.func,
  ripeningApple: React.PropTypes.func,
  apple: React.PropTypes.any,
}
