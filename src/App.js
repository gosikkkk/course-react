import React, { Component } from 'react'
import './App.css';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import HeaderConatainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';
import {Routes, Route } from 'react-router-dom';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import LoginPage from './components/Login/Login';
import { connect } from 'react-redux';
import { initializeApp } from './components/redux/app-reduser'
import Preloader from './components/common/Preloader/Preloader';





class App extends Component{

  componentDidMount(){
    this.props.initializeApp()
}

  render() {

    if(!this.props.initialized){
      return <Preloader/>
    }

    return(
        <div className='app-wrapper'>
          <HeaderConatainer/>
          <Navbar/>

          <div className='app-wrapper-content'>
          <Routes>

            <Route path="/dialogs" element={<DialogsContainer/>}/>

            <Route path="/users" element={<UsersContainer/>}/>

            <Route path='/profile/:userId' element={<ProfileContainer />} />
            
            <Route path='/profile' element={<ProfileContainer />} />

            <Route path='/login' element={<LoginPage/>} />


          </Routes>
          </div>
        </div>  
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})
 
export default connect(mapStateToProps, {initializeApp}) (App);

