import { useContext, useState } from 'react';
import './sidebar.css'
import MenuBtn from "./assets/menu icon.png"
import More from "./assets/more.png"
import MassageIcon from "./assets/message.png"
import Help from "./assets/help.png"
import History from "./assets/history.png"
import Settings from "./assets/settings.png"
import Cancel from "./assets/cancel.png"
import { context } from './context/context';

function Sidebar() {

  const [extended, setExtended] = useState(false);
  const { onSent, prev, setRecentPRompt, newChat } = useContext(context)


  const loadPrompt = async (prompt) => {
    setRecentPRompt(prompt)
    await onSent(prompt)
  }

  const handleSideBar = () => {
    setExtended(true);
  }

  return <>
    {extended ? null : <img src={MenuBtn} alt="" className='menu-icon1' onClick={handleSideBar} />}
    {extended ? <div className="side-bar" >
      <div className="top">
        <img src={Cancel} alt="" className='menu-icon' onClick={() => { setExtended(false) }
        } />



        <div onClick={() => newChat()} className="new-chat">
          <img src={More} alt="" />
          <p>New Chat</p>
        </div>
        <>
          <div className="recent">
            <p className='recent-title'>Recent</p>
            {prev.map((item, index) => {
              return (

                // eslint-disable-next-line react/jsx-key
                <div onClick={() => { loadPrompt(item) }} className="recent-entry">
                  <img src={MassageIcon} alt="" />
                  <p>{item.slice(0, 18)}...</p>
                </div>
              )

            })}
          </div>

        </>



      </div>





      <div className="bottom">

        <div className="bottom-item">
          <img src={Help} alt="Help" />
          <p>Help</p>
        </div>

        <div className="bottom-item">
          <img src={History} alt="Activity" />
          <p>Activity</p>
        </div>

        <div className="bottom-item">
          <img src={Settings} alt="Settings" />
          <p>Settings</p>
        </div>

      </div>


    </div>
      : null}
  </>
}

export default Sidebar;