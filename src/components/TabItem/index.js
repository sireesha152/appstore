// Write your code here
import './index.css'

const TabItem = props => {
  const {details, tabClicked} = props
  const {tabId, displayText} = details

  const onClick = () => {
    tabClicked(tabId)
  }

  return (
    <button className="tab_container" type="button" onClick={onClick}>
      {displayText}
      <br />
      <hr className="line" />
    </button>
  )
}
export default TabItem
