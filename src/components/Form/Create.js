import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchItems, createItem, deleteItem, fetchDetails }  from "../../store/actions/crudActions"
import { useNavigate } from 'react-router-dom';

function Create() {
  const dispatch = useDispatch();
  const { items, loading, error } = useSelector(state => state.crud);
  const [newItem, setNewItem] = useState('');
 
  const navigate = useNavigate()
  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch]);

  const handleCreateItem = () => {
    dispatch(createItem({ name: newItem }));
    setNewItem('');
  };

  const handleDeleteItem = (id) => {
    dispatch(deleteItem(id));
  };

  const handleView =(id)=>{
    navigate(`/list/${id}`)
  }
  const handleBack =()=>{
    navigate('/')
  }

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="App">
      <button onClick={handleBack} >Back</button>
      <h1>Blog management with redux thunk</h1>
      
      <input 
        type="text" 
        value={newItem} 
        onChange={(e) => setNewItem(e.target.value)} 
        placeholder="Enter new item" 
      />
      <button onClick={handleCreateItem}>Add Item</button>

      <ul>
        {items.map(item => (
          <li key={item.id}>
            {item.title} <button onClick={()=>handleView(item.id)} style={{backgroundColor: "#04AA6D",color: "white"}}>view</button> 
            <button onClick={() => handleDeleteItem(item.id)} style={{backgroundColor: "#f44336",color: "white", marginLeft: "10px"}}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Create;
