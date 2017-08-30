import React from 'react'
import DuckImage from '../assets/Duck.jpg'
import AppleContainer from '@/containers/AppleContainer'
import './HomeView.scss'

class Home extends React.Component {
  componentWillMount () {
    let baseWidth = 100
    let pickedApples = this.props.apple.pickedApples
    if (pickedApples) {
      let eatedApplesWeight = pickedApples
        .filter(apple => apple.isEaten === true).reduce((sum, cur) => sum + cur.weight, 0)
      this.state = { eatedApplesWeigth: baseWidth + Math.floor(eatedApplesWeight / 10) }
    } else {
      this.state = { eatedApplesWeigth: baseWidth }
    }
  }

  render () {
    return (
      <div>
        <h4>吃苹果我就会长大哦!</h4>
        <img alt='This is a duck, because Redux!' className='duck' src={DuckImage}
          style={{ width: this.state.eatedApplesWeigth, height: this.state.eatedApplesWeigth }}
        />
      </div>
    )
  }
}
Home.propTypes = {
  apple: React.PropTypes.any
}

export default class HomeView extends React.Component {
  render () {
    return <AppleContainer component={Home} />
  }
}
