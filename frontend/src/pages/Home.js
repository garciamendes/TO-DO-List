// React import
import { useState, useEffect } from 'react'

// Third party import
import { BsToggleOff, BsToggleOn, BsPlus } from 'react-icons/bs'
import { HiOutlineSun } from 'react-icons/hi'
import { FiMoon, FiLogIn } from 'react-icons/fi'
import { toast } from "react-toastify";

// Local import
import '../assets/css/home.scss'
import api from '../services/api'
import SearchList from '../assets/images/search-list.svg'
import Inputs from '../components/Inputs'
import Button from '../components/Button'
import Task from '../components/Task'
import Modal from '../components/Modal'

function Home() {
  const [ task, setTask ] = useState('')
  const [ listTask, setListTask ] = useState([])
  const [ dark, setDark ] = useState(false)
  const [ showModal, setShowModal ] = useState(false)
  const [ taskId, setTaskId ] = useState(null)

  function toggleDark() {
    setDark(dark ? false : true)
  }

   function handledTask(e) {
     e.preventDefault()

     api
       .post("/add-task", { task: task })
       .then(() => {
         
          toast.success("Task sent successfully");
          window.location.reload();
       })
       .catch(() => {
          toast.error("Could not submit job");
       });

     setTask('');
   }

  useEffect(() => {

    api.get("/list-tasks", {}).then((Response) => setListTask(Response.data));

  }, [])

  async function handleDeleteIncident(id) {
    try {
      await api.delete(`/delete-tasks/${id}`);
      setListTask(listTask.filter(taskDelete => taskDelete.id !== id))
      toast.success("Task successfully deleted");
      setShowModal(false);
    } catch (err) {

      toast.error("Error deleting task, please try again");
    }
  }

  return (
    <>
      {showModal && (
        <Modal
          onClickCloseModal={() => setShowModal(false)}
          onClickConfirm={() => handleDeleteIncident(taskId && taskId)}
        />
      )}
      <div className="container-home-page">
        <div className="header">
          <p>Welcome(a), Garcia</p>
          <h3>Task List</h3>

          <div className="content-dark-and-light">
            <div>
              <HiOutlineSun
                className="sun-toggle"
                size={30}
                color="rgba(0, 0, 0, .5)"
              />
              {dark ? (
                <BsToggleOn
                  className="toggle-off-and-on"
                  onClick={toggleDark}
                  size={30}
                  color="rgba(0, 0, 0, .5)"
                />
              ) : (
                <BsToggleOff
                  className="toggle-off-and-on"
                  onClick={toggleDark}
                  size={30}
                  color="rgba(0, 0, 0, .5)"
                />
              )}
              <FiMoon
                className="moon-toggle"
                size={28}
                color="rgba(0, 0, 0, .5)"
              />
            </div>

            <FiLogIn className="log-in" size={28} color="#536DFE" />
          </div>
        </div>

        <div className="content-inputs">
          <Inputs
            style="add-tasks"
            type="text"
            value={task}
            onChangeText={(e) => {
              setTask(e.target.value);
            }}
            placeholder="Insert a new task"
          />
          <Button
            style="btn-submit-add-tasks"
            icon={<BsPlus size={45} />}
            click={handledTask}
          />
        </div>

        <div className="container-display-tasks">
          <div className="container-list-task">
            <span className="total-tasks">Total tasks: {listTask.length}</span>

            <div className="content-list-task">
              {listTask.length === 0 ? (
                <>
                  <div className="content-no-task">
                    <p className="title-no-task">No task found!</p>
                    <img
                      src={SearchList}
                      className="img-no-task"
                      alt="Search list"
                    />
                  </div>
                </>
              ) : (
                <>
                  {listTask.map((tasks) => (
                    <Task
                      key={tasks.id}
                      content={tasks.task}
                      onClickCheckTask={() => alert("Task Confirm")}
                      onClickConfirmDelete={() => {
                        setShowModal(true)
                        setTaskId(tasks.id)
                      }}
                    />
                  ))}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}


export default Home