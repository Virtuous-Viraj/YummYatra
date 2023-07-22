import React from 'react'
// import pizzas from '../pizzasdata'
import Pizza from '../components/Pizza';
import Loading from '../components/Loading'
import Error from '../components/Error';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllPizzas } from '../actions/pizzaActions';
import Filter from '../components/Filter';
export default function HomePage() {

  const dispatch = useDispatch();
  const pizzastate = useSelector(state => state.getAllPizzasReducer)

  const { pizzas , error , loading } = pizzastate;
  useEffect(() => {
    dispatch(getAllPizzas())
  }, [])
  
  return (
    <div>
 <Filter/>
      <div className="row justify-content-center">
        {loading ? (
          <Loading/>
        ) : error ? (
          <Error error='Something went wrong'/>
        ) : (
          pizzas.map((pizza) => {
            return (
              <div className="col-md-3 m-3" key={pizza._id}>
                <div>
                  <Pizza pizza={pizza}/>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
