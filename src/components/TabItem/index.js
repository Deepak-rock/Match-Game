import './index.css'

const TabItem = props => {
  const {tabDetails, updateActivetabId, isActive} = props
  const {displayText, tabId} = tabDetails
  const active = isActive ? 'tab-button active' : 'tab-button'
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
/* state = {
  imgUrl: imagesList[0].imageUrl,
  score: 0,
  timerSeconds: 60,
  isTrue: false,
  category: 'FRUIT',
}

componentDidMount() {
  this.timerId = setInterval(this.stateChange, 1000)
}

stateChange = () => {
  const {timerSeconds} = this.state
  if (timerSeconds !== 0) {
    this.setState(pervState => ({timerSeconds: pervState.time - 1}))
  } else {
    clearInterval(this.timerId)
    this.setState({isTrue: true})
  }
}
imageClick = thumbnailUrl => {
  const {imgUrl} = this.state
  const imageValue = imagesList.filter(
    eachValue => eachValue.thumbnailUrl === thumbnailUrl,
  )
  const {imageUrl} = imageValue[0]
  if (imageUrl === imgUrl) {
    const newImageUrl =
      imagesList[Math.floor(Math.random() * imagesList.length)].imageUrl
    console.log(newImageUrl)
    this.setState(pervState => ({
      score: pervState.score + 1,
      imgUrl: newImageUrl,
    }))
  } else {
    clearInterval(this.timerId)
    this.setState({isTrue: true})
  }
}

playAgain = () => {
  this.setState({
    imgUrl: imagesList[0].imageUrl,
    score: 0,
    timerSeconds: 60,
    isTrue: false,
    category: 'FRUIT',
  })
  this.timerId = setInterval(this.stateChange, 1000)
} */
