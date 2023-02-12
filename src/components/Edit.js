import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState, useEffect } from 'react';
import { useNavigate} from 'react-router-dom';
import employee from './Employee';
import './Edit.css'

function Edit() {

  const [id, setId] = useState('')
  const [uname, setUname] = useState('')
  const [desig, setDesig] = useState('')
  const [age, setAge] = useState('')
  const [salary, setSalary] = useState('')


  useEffect(() => {
    setId(JSON.parse(localStorage.getItem("id")))
    setUname(localStorage.getItem("uname"))
    setAge(JSON.parse(localStorage.getItem("age")))
    setDesig(localStorage.getItem("desig"))
    setSalary(JSON.parse(localStorage.getItem("salary")))

  }, [])

  var index = employee.map((item) => item.id).indexOf(id)
  let history=useNavigate()

  const handleUpdate = (e) => {
    e.preventDefault()

    let emp = employee[index]
    emp.name = uname
    emp.age = age
    emp.desig = desig
    emp.salary = salary

    history('/')
  }
  return (
    <>
      <h2 className='text-center  mt-5 ' style={{ color: 'green', fontFamily: 'cursive' }}>Update Details of Employee</h2>
      <div className='text-center '>

        <div style={{ width: "80%", marginLeft: '10%', marginBottom: '30px' }}>
          <p>
            Normally  components will render a HTML element. However you can render whatever you'd like, adding a href prop will automatically render an  element. You can use the as prop to render whatever your heart desires. React Bootstrap will take care of the proper ARIA roles for you.
          </p>

        </div>

        <Container>
          <Row>
            <Col >
              <img className='don' src='https://i.postimg.cc/kX042qCn/pngegg.png' />
            </Col>
            <Col>
              <div class="form">
                <div class="input-container ic1">
                  <input id="firstname" class="input" type="text" value={uname}
                   onChange={(e) => setUname(e.target.value)} 
                   />
                  <div class="cut"></div>
                </div>
                <div class="input-container ic2">
                  <input id="lastname" class="input" type="text" value={age}
                   onChange={(e) => setAge(e.target.value)}
                   />
                  <div class="cut"></div>
                </div>
                <div class="input-container ic2">
                  <input id="email" class="input" type="text" value={desig}
                   onChange={(e) => setDesig(e.target.value)} 
                   />
                  <div class="cut cut-short"></div>
                </div>
                <div class="input-container ic2">
                  <input id="email" class="input" type="text" value={salary} 
                  onChange={(e) => setSalary(e.target.value)}
                   />
                  <div class="cut cut-short"></div>
                </div>
                <button onClick={(e) => handleUpdate(e)} type="text" class="submit" variant="primary">UPDATE</button>
              </div>
            </Col>
          </Row>
        </Container>

      </div>
    </>
  )
}

export default Edit