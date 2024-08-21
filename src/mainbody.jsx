import ques from "./assets/q-and-a.gif";
import ask from "./assets/doubt.gif";
import './mainbody.css'
import FAQ from "./assets/frequently-asked-questions.gif";
import gallery from "./assets/gallery.png";
import mic from "./assets/mic.png";
import send from "./assets/send.png";
import { useContext } from "react";
import { context } from "./context/context";
import guest from "./assets/guest.png";
import AI from "./assets/AI.png";



function MainBody() {
  const { onSent, recentPromt, showResult, loading, resultData, setInput, input } = useContext(context);
  return <>
    <div className="main">
      <div className="nav">
        <p>Leo</p>
      </div>


      <div className="main-container">
        {!showResult ? <>

          <div className="greet"><p><span>Hello, Guest</span></p>
            <p>How can I help you today?</p></div>

          <div className="cards">
            <div className="card">
              <p>Suggest some great anime shows to watch .</p>
              <img src={ques} alt="Icon" />

            </div>
            <div className="card">
              <p>Top 10 video games of all time .</p>
              <img src={ask} alt="Icon" />

            </div>
            <div className="card">
              <p>Breathing techniques</p>
              <img src={FAQ} alt="Icon" />

            </div>
          </div>
        </> : <div className="result">
          <div className="result-title">
            <img src={guest} alt="icon" />
            <p>{recentPromt}</p>
          </div>
          <div className="result-data">
            <img src={AI} alt="" />
            {loading ? <div className="loader" >
              <hr />
              <hr />
              <hr />
            </div> : <p dangerouslySetInnerHTML={{ __html: resultData }}></p>}

          </div>
        </div>}


        <div className="main-bottom">
          <div className="search-box">
            <input onChange={(e) => setInput(e.target.value)} value={input} type="text" placeholder="Enter your query  " />
            <div>
              <img src={gallery} alt="Gallery" />
              <img src={mic} alt="Mic" />
              {input ? <img onClick={() => onSent()} src={send} alt="send" /> : null}
            </div>
          </div>
          <p className="bottom-info"> As leo is in developing phase so answers can be inaccurate , so please double check the result.</p>
        </div>
      </div>
    </div>


  </>
}

export default MainBody;