import React, { useState } from 'react'
import '../Form/style.css'

const Dyform = () => {
    const [user,setUser] = useState({
      name: "Abdullah",
      age:"26",
      gender: "Male",
      city:"Madurai",
      isMarried: "Married"
    });

    function changeHandler(e) {
      const { name, value, type, checked } = e.target;
      setUser({ ...user, [name]: type === "checkbox" ? checked : value });
    }
    
   return (
    <div>
      <table>
        <tbody>
          <tr>
            <td>Name</td>
            <td>{user.name}</td>
          </tr>
          <tr>
            <td>Age</td>
            <td>{user.age}</td>
          </tr>
          <tr>
            <td>Gender</td>
            <td>{user.gender}</td>
          </tr>
          <tr>
            <td>City</td>
            <td>{user.city}</td>
          </tr>
          <tr>
            <td>isMarried</td>
            <td>{user.isMarried}</td>
         </tr>
        </tbody>
      </table>
        <form>
          <input type='text' placeholder='full name' value={user.name} onChange={changeHandler} name = "name"/>
          <input type='text' placeholder='gender' value={user.gender} onChange={changeHandler} name = "gender"/>
          <input type='number' placeholder='Your Age' value={user.age} onChange={changeHandler} name ="age"/>
          <div className='gender'>
            <label htmlFor='male'>
              <input type='radio' name='gender' id='male' checked={user.gender === "Male" } onChange={changeHandler} value="Male"/>
              Male
            </label>
            <label htmlFor='female'>
              <input type='radio' name='gender' id='female' checked={user.gender === "Female"} onChange={changeHandler} value="Female" />
              Female
            </label>
          </div>
          <label htmlFor='ismarried'>
            <input type='radio' name='isMarried' id='ismarried' checked={user.isMarried} onChange={changeHandler}/>
            Ismarried
          </label>
        </form>
    </div>
  )
}

export default Dyform