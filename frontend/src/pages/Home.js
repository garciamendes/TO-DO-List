// React import
import { useState } from 'react'

// Third party import
import { BsToggleOff, BsToggleOn, BsPlus } from 'react-icons/bs'
import { HiOutlineSun } from 'react-icons/hi'
import { FiMoon, FiLogIn } from 'react-icons/fi'

// Local import
import '../assets/css/home.scss'
import SearchList from '../assets/images/search-list.svg'
import Inputs from '../components/Inputs'
import Button from '../components/Button'
import Task from '../components/Task'
import Modal from '../components/Modal'

function Home() {
  const [ listTask, setListTask ] = useState(1)
  const [ dark, setDark ] = useState(false)
  const [ showModal, setShowModal ] = useState(false)

  function toggleDark() {
    setDark(dark ? false : true)
  }

  return (
    <>
      {
        showModal && <Modal
          onClickCloseModal={() => setShowModal(false)} 
          onClickConfirm={() => alert('Task deleted')}/>
      }
      <div className='container-home-page'>

        <div className='header'>
          <p>Welcome(a), Garcia</p>
          <h3>Task List</h3>

          <div className='content-dark-and-light'>

            <div>
              <HiOutlineSun className='sun-toggle' size={30} color='rgba(0, 0, 0, .5)'/>
              {
                dark
                ? 
                  <BsToggleOn className='toggle-off-and-on' onClick={toggleDark} size={30} color='rgba(0, 0, 0, .5)'/>
                :
                  <BsToggleOff className='toggle-off-and-on' onClick={toggleDark} size={30} color='rgba(0, 0, 0, .5)'/>
              }
              <FiMoon className='moon-toggle' size={28} color='rgba(0, 0, 0, .5)'/>
            </div>
            
            <FiLogIn className='log-in' size={28} color='#536DFE'/>
          </div>

        </div>

        <div className='content-inputs'>
          <Inputs
            style='add-tasks'
            type='text'
            placeholder='Insert a new task' />
          <Button
            style='btn-submit-add-tasks'
            icon={ <BsPlus size={45}/> }
            click={() => alert('sdasdas')} />
        </div>

        <div className='container-display-tasks'>

          <div className='container-list-task'>
            <span className='total-tasks'>Total tasks: 3</span>
            
            <div className='content-list-task'>
              {
                listTask == 0
                ?
                  <>
                    <div className='content-no-task'>
                      <p className='title-no-task'>No task found!</p>
                      <img src={SearchList} className='img-no-task' alt='Search list'/>
                    </div>
                  </>
                :
                (
                  <>
                    <Task
                      content='asadsdasdasaad'
                      onClickCheckTask={() => alert('Task Confirm')}
                      onClickConfirmDelete={() => setShowModal(true)} />
                  </>
                )
              }
              
            </div>

          </div>
        </div>

      </div>
    </>
  )
}

export default Home