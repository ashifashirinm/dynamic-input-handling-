import { useState } from 'react'

import './App.css'

function App() {
  const [numOfInp, setNumOfInp] = useState([]);
  const [values, setValues] = useState([]);
  const [submit, setSubmit] = useState(false);
  const handleInp = (e) => {
    const value = +e.target.value;
    console.log(value);
    setNumOfInp(Array(value).fill(""));
  }

  const handleInpValues = (index, val) => {
    const tempArr = [...values];
    tempArr[index] = val;
    setValues(tempArr);
    console.log(tempArr);

  }

  const handleSubmit = () => {
    setSubmit(true);
  }


  return (
    <>
      <div className='container mt-5'>
        <div className='row'>
          {/* col */}
          <div className='col-6'>
            <div className="card" >

              <div className="card-body">
                User enters  <input type="text" className="form-control" onChange={handleInp} />
                {numOfInp.map((data, index) => {
                  return (
                    <div className='mt-3'>
                      skill {index + 1} <input type="text" className="form-control" onChange={(e) => { handleInpValues(index, e.target.value) }} />

                    </div>

                  )
                })}
                <div className='mt-5'>
                  <button className='bg-success text-white' onClick={handleSubmit} >Submit Skills</button>
                </div>



              </div>
            </div>
          </div>

          {/* col 2 */}

          <div className='col-6'>
            <div className="card" >
              <div className="card-body">
                After submission 
                {submit && (
                  <div>
                    {values.map((skill, index) => (
                      <div key={index} className='mt-3'>
                        <input type="text" value={skill}readOnly  className="form-control" />
                      </div>
                    ))}
                  </div>
                )}
              </div>

            </div>


          </div>

        </div>

      </div>

    </>
  )
}

export default App
