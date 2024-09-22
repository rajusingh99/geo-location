import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDetails } from '../../../src/store/actions/crudActions';

const Detail = () => {
  const {id}  = useParams();
  const dispatch = useDispatch();
  const { items, loading, error } = useSelector((state) =>state.detail);
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(fetchDetails(id));
  }, [dispatch,id]);

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error}</p>

const handleBack =()=>{
  navigate('/list')
}
  return (
    <div> 
      <h2>Details for Item ID: {id}</h2>
      {items && (
        <div>
          <h3>Title: {items.title}</h3>
          <p>{items.body}</p>
        </div>
      )}
      <button onClick={handleBack} >Back</button>
    </div>
  );
};

export default Detail;
