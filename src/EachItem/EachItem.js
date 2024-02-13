import './EachItem.css'

const EachItem = props => {
  const {itemObj, checkResult} = props
  const {id, imageUrl} = itemObj
  const sendIdOnClick = () => {
    checkResult(itemObj)
  }
  const dataTestId = `${id.toLowerCase()}Button`
  return (
    <li className="listItem">
      <button
        onClick={sendIdOnClick}
        data-testid={dataTestId}
        className="eachItemButton"
        type="button"
      >
        <img className="each-item-image" alt={id} src={imageUrl} />
      </button>
    </li>
  )
}

export default EachItem
