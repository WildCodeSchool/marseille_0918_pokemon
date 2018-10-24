import React, { Component } from 'react'
import {
  FloatingMenu,
  MainButton,
  ChildButton,
} from 'react-floating-button-menu';
import MdAdd from 'react-icons/lib/md/add';
import MdClose from 'react-icons/lib/md/close';
import './Fab.css';

export default class Fab extends Component {
  render() {

    
    return (
      <div className='actionMenuContainer'>
        <FloatingMenu
    slideSpeed={1000}
    direction="down"
    
  >
    <MainButton
      iconResting={MdAdd}
      iconActive={MdClose}
      iconColor="white"
      backgroundColor="red"
      size={70}
    />
    <ChildButton
      iconButton={MdAdd}
      iconColor="black"
      backgroundColor="black"
      size={70}
    />
    <ChildButton
      iconButton={MdAdd}
      iconColor="black"
      backgroundColor="blue"
      size={70}
    />
    <ChildButton
      iconButton={MdAdd}
      iconColor="black"
      backgroundColor="yellow"
      size={70}
    />
  </FloatingMenu>
         
      </div>
    )
  }
}
