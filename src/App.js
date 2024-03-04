import {Component} from 'react'

import ConfigurationContext from './context/ConfigurationContext'

import Layout from './components/Layout'

import './App.css'

class App extends Component {
  state = {showContent: true, showLeftNavbar: true, showRightNavbar: true}

  onToggleShowContent = () => {
    this.setState(i => ({
      showContent: !i.showContent,
    }))
  }

  onToggleShowLeftNavbar = () => {
    this.setState(i => ({
      showLeftNavbar: !i.showLeftNavbar,
    }))
  }

  onToggleShowRightNavbar = () => {
    this.setState(i => ({
      showRightNavbar: !i.showRightNavbar,
    }))
  }

  render() {
    const {showContent, showLeftNavbar, showRightNavbar} = this.state
    return (
      <div>
        <ConfigurationContext.Provider
          value={{
            showContent,
            showLeftNavbar,
            showRightNavbar,
            onToggleShowContent: this.onToggleShowContent,
            onToggleShowLeftNavbar: this.onToggleShowLeftNavbar,
            onToggleShowRightNavbar: this.onToggleShowRightNavbar,
          }}
        >
          <Layout />
        </ConfigurationContext.Provider>
      </div>
    )
  }
}

export default App
