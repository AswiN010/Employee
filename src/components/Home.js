import React from 'react'
import Table from 'react-bootstrap/Table';
import employee from './Employee';
import Button from 'react-bootstrap/Button';
import { Link ,useNavigate} from 'react-router-dom';
function Home() {
    let history =useNavigate()
    const handleDelete=(id)=>{
   let index=  employee.map(item=>item.id).indexOf(id)
   employee.splice(index,1)
   history('/')
}
   const handleEdit=(id,uname,age,desig,salary)=>
   {
  localStorage.setItem('id',JSON.stringify(id))
  localStorage.setItem("uname",uname)
  localStorage.setItem("age",JSON.stringify(age))
  localStorage.setItem("desig",desig)
  localStorage.setItem("salary",JSON.stringify(salary))
   }
   
    return (
        <>
            <h2 className='text-center  mt-5 ' style={{color:'green',fontFamily:'cursive'}}> Employee Mangement System</h2>
            <div className='text-center '>
               <div style={{width:"80%",marginLeft:'10%',marginBottom:'30px'}}>
               <p>
                Normally  components will render a HTML element. However you can render whatever you'd like, adding a href prop will automatically render an  element. You can use the as prop to render whatever your heart desires. React Bootstrap will take care of the proper ARIA roles for you.
                </p>
                <Link to='/add'>
                <Button variant="success">ADD NEW EMPOLYEE <i class="fa-solid fa-user-plus"></i></Button>
                </Link>
                </div> 
                <Table striped bordered hover style={{ width: "90%", marginLeft: "5%" }} >
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Designation</th>
                            <th>Salary</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            employee && employee.length > 0 ?
                                employee.map(item => (
                                    <tr>
                                        <td>{item.id}</td>
                                        <td>{item.name}</td>
                                        <td>{item.age}</td>
                                        <td>{item.desig}</td>
                                        <td>{item.salary}</td>
                                        <td>
                                            <Link to='/edit'>
                                            <Button onClick={()=>handleEdit(item.id,item.name,item.age,item.desig,item.salary)} variant="outline-success">
                                            <i class="fa-solid fa-user-pen"></i>
                                            </Button>
                                            </Link>
                                            &nbsp;
                                            &nbsp;
                                            
                                            <Button onClick={()=>handleDelete(item.id)} variant="outline-danger">
                                            <i class="fa-solid fa-user-slash"></i>
                                            </Button>
                                        </td>
                                    </tr>
                                )) : "no table data"
                        }

                    </tbody>
                </Table>
            </div>
        </>
    )
}

export default Home