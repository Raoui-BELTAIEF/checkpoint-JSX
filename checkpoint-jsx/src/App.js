
import './style.css';
import img from './srcimg.webp'
function App() {
  return (
    <div className="App">
      <div style={{border:"solid 1 black",maxWidth:"100vw"}}>

<h1 className="title red">Raoui BELTAIEF</h1>


<img className='river' src="/publicimg.jpg"/>



<img className='tree' src= {img}/>

</div>

<video width="320" height="240" controls>

<source src="myVideo.mp4" type="video/mp4" />

</video>
      
    </div>
  );
}

export default App;
