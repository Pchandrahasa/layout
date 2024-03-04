import './index.css'

import ConfigurationContext from '../../context/ConfigurationContext'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value

      const onChangeToggleShowContent = event => {
        onToggleShowContent(event.target.value)
      }

      const onChangeToggleShowLeftNavbar = event => {
        onToggleShowLeftNavbar(event.target.value)
      }

      const onChangeToggleShowRightNavbar = event => {
        onToggleShowRightNavbar(event.target.value)
      }

      return (
        <div className="layout-container">
          <h1>Layout</h1>
          <label id="checkbox" className="">
            <input
              type="checkbox"
              htmlFor="checkbox"
              onChange={onChangeToggleShowLeftNavbar}
              checked={showLeftNavbar}
            />
            Left Navbar
          </label>

          <label id="checkbox">
            <input
              type="checkbox"
              htmlFor="checkbox"
              onChange={onChangeToggleShowContent}
              checked={showContent}
            />
            Content
          </label>

          <label id="checkbox">
            <input
              type="checkbox"
              htmlFor="checkbox"
              onChange={onChangeToggleShowRightNavbar}
              checked={showRightNavbar}
            />
            Right Navbar
          </label>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
