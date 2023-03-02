import './App.css';
import content from './components/data'
import Guarantee from './components/guarantee'

function App() {
   return (
      <div className='mainVContainer'>
         {content.map((item, index) => {
            return (
               <Guarantee key={index} image={item.image} title={item.title} description={item.description} />
            )

         })}
      </div>
   )
}

export default App;
