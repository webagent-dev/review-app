
import './App.css';
import Review from './comps/Review'

function App() {
  return (
    <div className="app">
    <section className='container'>
       <h1 className='header'> our reviews</h1>
       <hr className='underline'/>
       <Review  />
    </section>
    </div>
  );
}

export default App;
