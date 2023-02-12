
import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState} from 'react';
import uuid from 'react-uuid';
import { useNavigate} from 'react-router-dom';
import employee from './Employee';
import './Edit.css'
function Add() {
  
  const [id, setId] = useState('')
  const [uname, setUname] = useState('')
  const [desig, setDesig] = useState('')
  const [age, setAge] = useState('')
  const [salary, setSalary] = useState('')


  let history=useNavigate()
const handleAdd=(e)=>{
  e.preventDefault()
  let ids=uuid()
 let uniqueid= ids.slice(0,8)
  employee.push
  (
    {
      // unified uni
      id: uniqueid,
      name:uname,
      age:age,
      desig:desig,
      salary:salary
    }
  )
  history('/')
}
  return (
    <>
     <h2 className='text-center  mt-5 ' style={{ color: 'green', fontFamily: 'cursive' }}>Add New Employee</h2>
      <div className='text-center '>

        <div style={{ width: "80%", marginLeft: '10%', marginBottom: '60px' }}>
          <p style={{marginBottom:"50px"}}>
            Normally  components will render a HTML element. However you can render whatever you'd like, adding a href prop will automatically render an  element. You can use the as prop to render whatever your heart desires. React Bootstrap will take care of the proper ARIA roles for you.
          </p>

          
        <Container>
          <Row>
            <Col >
              <img style={{width:"95%",height:"550px"}} src='https://i.postimg.cc/rsKww6GW/pngegg-1.png' />
            </Col>
            <Col>
              <div style={{height:"510px",width:"93%"}} class="form">
              {/* <div class="input-container ic2">
                  <input id="id" class="input" type="text" placeholder='Id'  />
                  <div class="cut cut-short"></div>
                  </div> */}
                       <h2 className='text-center  ' style={{ color: 'green', fontFamily: 'cursive' }}>Add New Employee</h2>

                <div class="input-container ic1">
                  <input id="firstname" class="input" type="text"  placeholder='Name'  onChange={(e) => setUname(e.target.value)} 
/>
                  <div class="cut"></div>
                </div>
                <div class="input-container ic2">
                  <input id="lastname" class="input" type="text" placeholder='Age'
                                     onChange={(e) => setAge(e.target.value)} />
                  <div class="cut"></div>
                </div>
                <div class="input-container ic2">
                  <input id="desig" class="input" type="text" placeholder='Designation' onChange={(e) => setDesig(e.target.value)} />
                  <div class="cut cut-short"></div>
                </div>
                <div class="input-container ic2">
                  <input id="salary" class="input" type="text" placeholder='salary' onChange={(e) => setSalary(e.target.value)}/>
                  <div class="cut cut-short"></div>
                </div>
                <button  onClick={(e)=>handleAdd(e)}
                style={{backgroundColor:"green",fontFamily:"fantasy",color:"black"}} 
                type="text" class="submit" variant="primary">
                  UPDATE
                  </button>
              </div>
            </Col>
          </Row>
        </Container>

        </div>
    </div>
    </>
  )
}

export default Add