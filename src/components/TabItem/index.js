import './index.css'

const TabItem = props => {
  const {tabDetails, updateActivetabId, category} = props
  const {displayText, tabId} = tabDetails
  const active = category ? 'tab-button active' : 'tab-button'
  const onClickTabItem = () => {
    updateActivetabId(tabId)
  }
  return (
    <li>
      <button className={active} type="button" onClick={onClickTabItem}>
        {displayText}
      </button>
    </li>
  )
}
export default TabItem
