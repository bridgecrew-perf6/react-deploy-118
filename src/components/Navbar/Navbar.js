import React, { useState } from 'react'

function Navbar(props){
    let [title,setTitle] = useState('1')

    function mytest(){
        console.log('first')
        console.log(title)

    
            setTitle('2')
       


    }
    function mytest1(){
        console.log('first')
        console.log(title)

    
            setTitle('1')
       


    }


    return (

        <>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#" onClick={mytest}>{props.name}</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" onClick={mytest1} >Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" >About</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" >Contact</a>
              </li>
             </ul>
            <form class="d-flex">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    <p> you set {title}</p> 
    </> 
    
    );
}

export default Navbar;



