import React , { useState } from 'react'

 function Footer() {
     const [count, setCount] = useState(0);

    function Counters(){
        setCount(count+1)
    }
  return (
      <>
      <div className='container'>
             <p>You clicked {count} times</p>
    <button className='btn-danger ' onClick={Counters}>
      Click me
    </button>
    <div>Footer</div>
             {/* <p> you set {title}</p>  */}
          </div>
      </>
  );
}


export default Footer;