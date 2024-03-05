// Write your code here
import './index.css'

const AppItem = props => {
  const {details} = props
  const {imageUrl, appName} = details
  return (
    <div className="app_container">
      <img src={imageUrl} alt={appName} className="app" />
      <h1 className="appname">{appName}</h1>
    </div>
  )
}
export default AppItem
