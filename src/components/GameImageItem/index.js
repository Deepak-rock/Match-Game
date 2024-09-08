import './index.css'

const GameImageItem = props => {
  const {thumbnailDetails, clickImageMatch} = props
  const {thumbnailUrl, id} = thumbnailDetails
  const clickThumbnail = () => {
    clickImageMatch(id)
  }
  return (
    <li className="thumbnail-item">
      <button
        className="image-thumbnail-button"
        onClick={clickThumbnail}
        type="button"
      >
        <img className="thumbnail" src={thumbnailUrl} alt="thumbnail" />
      </button>
    </li>
  )
}
export default GameImageItem
