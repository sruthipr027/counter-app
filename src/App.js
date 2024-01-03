import './App.css';
import Counter from './component/Counter';

function App() {
  return (
    <div className='d-flex align-item-center justify-content-center w-100 mt-5 flex-column bg-dark' style={{height:'100vh'}}>
      <div className='d-flex align-item-center justify-content-center  flex-column p-5 rounded' style={{backgroundColor:'white',width:'30rem'}}>
        <h1 className='text-primary'>Counter Application</h1>
        <Counter/>
      </div>
    </div>
  );
}

export default App;
