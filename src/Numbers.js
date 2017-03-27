import React from 'react'
import ReactDOM from 'react-dom'
import Buttons from './Buttons'

class Numbers extends React.Component {
  constructor () {
    super()

    this.state = {
      numbers: []
    }

    this.getNumbers = () => {
      const aux = []
      while (aux.length < 10) {
        let n = Math.floor((Math.random() * 10) + 1)
        if (aux.indexOf(n) === -1) {
          aux.push(n)
        }
      }
      this.setState({ numbers: aux.join(', ') })
    }

    this.bubbleSort = () => {
      const arr = this.state.numbers.split(', ').map(Number)
      let sorted
      do {
        sorted = false
        for (let i = 1; i < arr.length; i++) {
          if (arr[i - 1] > arr[i]) {
            let aux = arr[i - 1]
            arr[i - 1] = arr[i]
            arr[i] = aux
            this.setState({ numbers: arr.join(', ') })
            sorted = true
          }
        }
      } while (sorted)
      console.log(arr)
    }
  }

  render () {
    return (
      <div>
        <p>{this.state.numbers}</p>
        <Buttons text='Get numbers' onClick={this.getNumbers} />
        <Buttons text='Bubble sort' onClick={this.bubbleSort} />
      </div>
    )
  }
}

ReactDOM.render(<Numbers />, document.getElementById('app'))
