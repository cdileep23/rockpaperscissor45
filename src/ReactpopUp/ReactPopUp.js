import Popup from 'reactjs-popup'
import './ReactPopUp.css'

const ReactPopUp = () => (
  <div className="popup-container">
    <Popup
      modal
      trigger={
        <button type="button" className="trigger-button">
          Rules
        </button>
      }
    >
      {close => (
        <>
          <div className="rules-container">
            <img
              className="rules-image"
              src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
              alt="rules"
            />
            <button
              type="button"
              className="trigger-button"
              onClick={() => close()}
            >
              Close
            </button>
          </div>
        </>
      )}
    </Popup>
  </div>
)
export default ReactPopUp
