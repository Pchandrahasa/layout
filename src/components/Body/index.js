import React from 'react'
import './index.css'
import ConfigurationContext from '../../context/ConfigurationContext'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value

      return (
        <div className="body-container">
          {showLeftNavbar && (
            <div className="left-navbar">
              <h1 className="header">left navbar menu</h1>
              <ul>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
                <li>Item 4</li>
              </ul>
            </div>
          )}

          {showContent && (
            <div className="content">
              <h1 className="header">content</h1>
              <p>
                Lorem ipsum An immense mausoleum of white marble, built in Agra
                between 1631 and 1648 by order of the Mughal emperor Shah Jahan
                in memory of his favourite wife, the Taj An immense mausoleum of
                white marble, built in Agra between 1631 and 1648 by order of
                the Mughal emperor Shah Jahan in memory of his favourite wife,
                the Taj ...
              </p>
            </div>
          )}

          {showRightNavbar && (
            <div className="right-navbar">
              <h1 className="header">right navbar menu</h1>
              <div className="box">Ad 1</div>
              <div className="box">Ad 2</div>
            </div>
          )}
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default Body
