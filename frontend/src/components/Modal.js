// Local import
import '../assets/css/modal.scss'
import ConfirmDeleteImg from '../assets/images/do-delete-task.svg'

function Modal(props) {
  return (
    <div id='container-modal'>

      <div className='container-modal'>
        <p>Are you sure you want to delete this task?</p>
        <img src={ConfirmDeleteImg} alt='Image delete'/>
        
        <div className='content-btn-not-and-yes'>
          <button className='btn-not-and-yes' onClick={props.onClickCloseModal}>not</button>
          <button className='btn-delete btn-not-and-yes' onClick={props.onClickConfirm}>Yes I'm sure</button>
        </div>
      </div>
    </div>
  )
}

export default Modal