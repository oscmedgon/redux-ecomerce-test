import React, {Component, PropTypes} from 'react'
import Header from './Commons/Header'

class App extends Component {
  render () {
    return (
      <div>
        <Header />
        {this.props.children}
        <footer>
          &copy; Óscar Medina 2017
        </footer>
      </div>
    )
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
}

export default App
