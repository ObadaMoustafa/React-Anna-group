import './App.css';

const content = [
   {
      image: '/img/f-delivery.png',
      title: 'Free shipping',
      description: 'Amazon works closely with its carriers to provide a competitive shipping experience for our customers. Exact shipping charges are calculated at the time of checkout based on the number of items, item type, weight, and volume of all the items in the cart.'
   },
   {
      image: '/img/coin.png',
      title: '100% money back',
      description: 'The total shipping cost is calculated by adding a base "Per Shipment" cost and various "Per Item" costs. The "Per Item" cost depends on the item, and is based on the quantity of items, the weight, or volume (referred to as the dimensional weight) of each package.'
   },
   {
      image: '/img/chat.png',
      title: 'Online support 24/7',
      description: 'The table below shows the base “Per Shipment” rate used as a minimum for shipping. Rates increase, or vary, from the base rate depending on the items in the cart.'
   }
]

function Guarantee(prop) {
   return (

      <div className='content'>
         <div>
            <img src={prop.prop.image} alt={prop.prop.title} width="70" height="50" />
            <h2>{prop.prop.title}</h2>
            <p>{prop.prop.description}</p>
         </div>
      </div>
   )
}

function App() {
   return (
      <div className="App">
         <Guarantee prop={content[0]} />
         <Guarantee prop={content[1]} />
         <Guarantee prop={content[2]} />
      </div>
   );
}

export default App;
