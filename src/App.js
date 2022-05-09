import './App.css';
import './style.css';

import photo from "./insrc.jpg";
import video from "./video/video.mp4";
function App() {
  return (
   
     <div>
  <div style={{ border: "solid 1px black", maxWidth: "100vw" }}>
    <h1 className="title red">Mnasri Ridha</h1>
    <br />
    <img className="srcImg" src={photo} alt="myImagesrc" />
    <br />
    <img src="./inpublic.jpg" alt="myimagepub" />
  </div>
  <video className="Video"width={320} height={240} controls autostart autoplay>
        <source  type={"video/mp4"} src={video}/> 
      </video>
</div>
  );
}

export default App;
