// React import
import { useState } from 'react'

// Third party import
import { MdRadioButtonUnchecked } from 'react-icons/md'
import { IoMdCheckmarkCircleOutline } from 'react-icons/io'
import { CgTrashEmpty } from 'react-icons/cg'

// Local import
import '../assets/css/task.scss'

function Task(props) {
  const [ checkTask, setCheckTask ] = useState(false)

  function toggleCheckTask() {
    setCheckTask(checkTask ? false : true)
  }

  return (
    <>
      <div className='list-task'>
        <span className='content-task'>{props.content}</span>

        <span className='btn-content-list-tasks'>
          {
            checkTask
            ?
              <IoMdCheckmarkCircleOutline size={45} onClick={props.onClickCheckTask && toggleCheckTask} color='rgba(0, 255, 0, 0.8)' />
            :
              <MdRadioButtonUnchecked size={45} onClick={props.onClickCheckTask && toggleCheckTask} color='#fff' />
          }
        </span>

        <span className='content-delete btn-content-list-tasks'>
          <CgTrashEmpty
            size={45}
            color='#fff' 
            onClick={props.onClickConfirmDelete}/>
        </span>

      </div>
    </>
  )
}

export default Task