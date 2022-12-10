import './App.css';
import { MiddleBar } from './components/MiddleBar';
import { SideBar } from './components/SideBar';

function App() {
  return (
    <div className="App" style={{position: 'relative',  height: '1024px' , width: '1440px' , borderRadius:'10px' ,  border: '1px solid grey', margin:'10px  auto ', display:'flex' }} >
      <SideBar/>
      <MiddleBar/>
    </div>
  );
}

export default App;
