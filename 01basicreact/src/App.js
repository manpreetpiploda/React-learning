
import Item from './components/Item'
import ItemDetails from './components/ItemDetails'

function App() {

const itemArray=[
    {
      name: "nirma1",
      day:20,
      month: "sep",
      year:2020
    },
    {
      name: "nirma12",
      day:202,
      month: "sep2",
      year:20202
    },
    {
      name: "nirma13",
      day:203,
      month: "sep3",
      year:20203
    }
]
  return (
    <div>
      <Item name={itemArray[0].name}> This is item one </Item>
      <ItemDetails day={itemArray[0].day} month={itemArray[0].month} year={itemArray[0].year} ></ItemDetails>

      <Item name={itemArray[1].name}></Item>
      <ItemDetails day={itemArray[1].day} month={itemArray[1].month} year={itemArray[1].year} ></ItemDetails>

      <Item name={itemArray[2].name}></Item>
      <ItemDetails day={itemArray[2].day} month={itemArray[2].month} year={itemArray[2].year} ></ItemDetails>

      
      {/* <div>Hellloo</div> */}
   </div>
  );
}

export default App;
