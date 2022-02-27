import {useState,useEffect} from 'react'
import {FaUser}  from 'react-icons/fa'

function Register() {
  const [fromData , setFromData] = useState ({
    name: "",
    email: "",
    password: "",
    password2: ""

  })

  const {name, email,password,password2} = fromData

  const onChange = (e) => {
    setFromData((prevState) => ({
    ...prevState,
    [e.target.name]: e.target.value
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()
  }


  return (
    
    <>
      <section className='heading'>
        <h1>
          <FaUser/>Register
        </h1>
        <p>Please create an account</p>
      </section>

      <section className='from'> 
      <form onSubmit={onSubmit}>

        <div className="form-group">
        <input type="text" 
        className='from-control' 
        id='name' 
        value={name} 
        placeholder="Enter your name" 
        onChange={onChange}/>
        </div>

        <div className="form-group">
        <input type="email" 
        className='from-control' 
        id='email' 
        value={email} 
        placeholder="Enter your email" 
        onChange={onChange}/>
        </div>

        <div className="form-group">
        <input type="password" 
        className='from-control' 
        id='password' 
        value={password} 
        placeholder="Enter your password" 
        onChange={onChange}/>
        </div>

        <div className="form-group">
        <input type="password" 
        className='from-control' 
        id='password2' 
        value={password2} 
        placeholder="Confirm password" 
        onChange={onChange}/>
        </div>

        <div className="form-group">
        <button type="submit" 
        className='btn btn-block' >
          Submit

        </button>
        
        </div>

      </form>
      </section>


    </>
  )
}

export default Register