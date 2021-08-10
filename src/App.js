import React from "react";
import "./style.css";

const App = () =>{
  
  const [item, setItem ] = React.useState("")  
  const [itemList, setItemList] = React.useState([])
  const [quan , setQuan]= React.useState("")
  const [quanList, setQuanList] = React.useState([])
  const [desc , setDesc]= React.useState("")
  const [descList, setItemDesc] = React.useState([])


  function onSubmitHandler(e){
    e.preventDefault()
    console.log(quan);
  
  const addItemDetails ={
    id : new Date().getTime(),
    itemName: item,
    descDet: desc,
    quanName: quan,
    complete: false
  }
 
    setItemList([...itemList].concat(addItemDetails))
    setItem("")
    console.log(itemList);
    
  }

  function deleteItem(id){

    let updatedList = [...itemList].filter((item) => item.id !== id)
    setItemList(updatedList)
  
  }


  return (
    <div>
     
      <form onSubmit ={onSubmitHandler}>
      <fieldset>

        <legend><h1>Add Items</h1> </legend>
        <label for="name">Name</label> <br/>
        <input class="itemInput" type="text" value ={item}
          onChange = {(e) => setItem(e.target.value)}
          required placeholder="Name"/>
          <br/>

        <label for="description">Description </label>
        <textarea rows = "5" cols = "50" name = "description" placeholder = "Enter description..." class="form-control" onChange= {(e) => setDesc(e.target.value)}></textarea>

        <label for="quantity">Quantity</label><br/>

        <input for="quan" value={quan}
          onChange = {(e) => setQuan(e.target.value)}
          required placeholder = '0' />

      
      <button>Add</button>
      </fieldset>
      </form>

      <br/>

    {itemList.map((data) =>(
    <div key={data.id} class="list-style">
      
        <div className="button-style">
        <fieldset>
          <legend><h1>Shopping List</h1></legend>
        {data.itemName}
        <br/>
        {data.descDet}
        <br/>
        {data.quanName}
        <br/>

        
        <div className="item-style">
          
          </div>
        <button onClick={() => deleteItem(data.id)}>Delete</button>
        </fieldset>
        <button class ="cancel">Cancel</button>
        </div>
        
</div> ))}
   
    </div>
  );
}
export default App;