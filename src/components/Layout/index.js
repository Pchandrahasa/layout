import './index.css'
import Header from '../Header'
import Footer from '../Footer'
import Body from '../Body'

import ConfigurationController from '../ConfigurationController'

const Layout = () => (
  <>
    <ConfigurationController />
    <Header />
    <Body />
    <Footer />
  </>
)

export default Layout
