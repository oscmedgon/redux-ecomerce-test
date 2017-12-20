import React, {Component, PropTypes} from 'react'

class App extends Component {
  render () {
    return (
      <div>
        <header>
          Ecomerce
        </header>
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
