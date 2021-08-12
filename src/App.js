import React from 'react';
import './style.css';

const App = () => {
  const [item, setItem] = React.useState({
    itemName: '',
    description: '',
    quantity: ''
  });
  const [itemList, setItemList] = React.useState([]);
  const [formKey, setFormkey] = React.useState([10]);

  function onSubmitHandler(e) {
    e.preventDefault();
    console.log();

    const addItemDetails = {
      id: new Date().getTime(),
      itemName: item.itemName,
      description: item.description,
      quantity: item.quantity,
      complete: false
    };

    setItemList([...itemList].concat(addItemDetails));
    setItem('')
    console.log(itemList);
    setFormkey(formKey+1);
  }

  function deleteItem(id) {
    let updatedList = [...itemList].filter(item => item.id !== id);
    setItemList(updatedList);
  }

  return (
    <div>
      <form onSubmit={onSubmitHandler} key={formKey}>
        <fieldset>
          <legend>
            <h1>Add Items</h1>{' '}
          </legend>
          <label for="name">Name</label> <br />
          <input
            class="itemInput"
            type="text"
            value={item.itemName}
            onChange={e => setItem({ ...item, itemName: e.target.value })}
            required
            placeholder="Name"
          />
          <br />
          <label for="description">Description </label>
          <textarea
            rows="5"
            cols="50"
            name="description"
            placeholder="Enter description..."
            class="form-control"
            onChange={e => setItem({ ...item, description: e.target.value })}
          />
          <label for="quantity">Quantity</label>
          <br />
          <input
            for="quantity"
            value={item.quantity}
            type="number"
            onChange={e => setItem({ ...item, quantity: e.target.value })}
            required
            placeholder="0"
          />
          <button>Add</button>
        </fieldset>
      </form>

      <div>
        <fieldset>
          <legend>
            <h1>Shopping List</h1>
          </legend>

          {itemList.map(data => (
            <div key={data.id} class="list-style">
              <div className="button-style">
                {data.itemName}
                <br />
                {data.description}
                <br />
                {data.quantity}
                <br />

                <button onClick={() => deleteItem(data.id)}>Delete</button>

                <button class="cancel" onClick= {this.onChange}>Cancel</button>
              </div>
            </div>
          ))}
        </fieldset>
      </div>
      <br />
    </div>
  );
};
export default App;
