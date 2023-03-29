import { useState } from 'react';
import './App.css';
import DropDownComponent from './components/dropdowncomponent';
import FoodComponent from './components/foodcomponent';
import MenuData from './Dynamic Dropdown/data/MenuData';

function App() {
  const [food,setFood] = useState(MenuData)

  const changeFoodData = (e) =>{
    const catagory = e.target.value
    if(catagory === "เมนูทั้งหมด"){
      setFood(MenuData)
    }else{
      const result = MenuData.filter((Element) => {
        return Element.menu === catagory
      })
      setFood(result)
    }
  }
  return (
    <div className="container">
      <DropDownComponent changeFoodData={changeFoodData}/>
      <div className='content'>
        {food.map((data,index)=>{
          return <FoodComponent key={index} {...data}/>
        })}
      </div>
    </div>
  );
}

export default App;
