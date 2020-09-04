import React, { useEffect } from 'react';
import Header from '../header';
import MainPage from '../mainPage';

import { useDispatch } from 'react-redux'
import { fetchNotes } from '../../redux/actions/setNotes';

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchNotes())
  }, []);


  return (
    <div className="App">
      <Header />
      <MainPage />
    </div>
  );
}

export default App;
