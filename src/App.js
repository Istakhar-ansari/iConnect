import './App.css';
import React, { useState } from 'react';

import Heading from './components/Heading';
import FeedbackCard from './components/FeedbackCard';
import Login from './components/Login';
import Layout from './components/Layout'

function App() {

  return <>
  <Layout>
  {console.log('*********', localStorage.getItem('teacherAuth'))}
  {localStorage.getItem('teacherAuth') ?  <Heading/> : <Login />}
  </Layout>
  </>
}

export default App;
