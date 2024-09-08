import { PDFViewer } from '@react-pdf/renderer'
import PropTypes from 'prop-types'

const Preview = ({ children }) => (
  <PDFViewer width='100%' height='100%' showToolbar={false}>
    {children}
  </PDFViewer>
)

export default Preview

Preview.propTypes = {
  children: PropTypes.node.isRequired
}
