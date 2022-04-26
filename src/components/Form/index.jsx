import React, { useState } from 'react'
import "./Form.css"
import userField from '../useField'

export default function Form() {
  const [data, setData] = useState([])
  const [list, setList] = useState({
    email: '',
    password: '',
    country: 'VN',
    gender: 'male',
    textarea: '',
    agree: false
  })
  const email = userField('email')
  const password = userField('password')
  const submit = userField('submit')
  const checkbox = userField('checkbox')
  const textarea = userField('textarea')
  const country = userField('country')
  const radio_male = userField('radio', 'male')
  const radio_female = userField('radio', 'female')

  const handleChange = (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setList({ ...list, [e.target.name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
    const id = Math.floor(Math.random() * 1000);
    setData([...data, { id, ...list }])
  }
  const handleDelete = (id) => {
    const newData = data.filter(item => item.id !== id)
    setData(newData)
  }
  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)}>
        <h3>Form Register</h3>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input
            onChange={(e) => handleChange(e)}
            {...email}
          />
        </div>
        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input
            {...password}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="country">Country</label>
          <select
            {...country}
            onChange={(e) => handleChange(e)}
          >
            <option value="">Choose Option</option>
            <option value="VN">Vietnam</option>
            <option value="CN">China</option>
          </select>
        </div>
        <div className="form-control">
          <label htmlFor="gender">Gender</label>
          <input
            {...radio_male}
            defaultChecked='male'
            onChange={(e) => handleChange(e)}
          /> Male
          <input
            {...radio_female}
            onChange={(e) => handleChange(e)}
          />Female
        </div>
        <div className="form-control">
          <textarea
            {...textarea}
            onChange={(e) => handleChange(e)}
          ></textarea>
        </div>
        <div className="form-control">
          <label>Are you sure you agree to all the terms?</label>
          <input
            {...checkbox}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="form-control">
          <input {...submit} />
        </div>
      </form>
      {data.length > 0 &&
        <div className="container">
          <ul className="responsive-table">

            <li className="table-header">
              <div className="col col-1">Country</div>
              <div className="col col-2">Email</div>
              <div className="col col-3">Password</div>
              <div className="col col-2">Description</div>
              <div className="col col-3">Gender</div>
              <div className="col col-1">Agree</div>
              <div className="col col-1">Action</div>
            </li>
            {data.map((item) => (
              <li key={item.id} className="table-row">
                <div className="col col-1">
                  {item.country}
                </div>
                <div className="col col-2">
                  {item.email}
                </div>
                <div className="col col-3">
                  {item.password}
                </div>
                <div className="col col-2">
                  {item.textarea}
                </div>
                <div className="col col-3">
                  {item.gender}
                </div>
                <div className="col col-1">
                  {item.agree.toString()}
                </div>
                <div className="col col-1">
                  <i onClick={() => handleDelete(item.id)} className="fa fa-trash" aria-hidden="true"></i>
                </div>
              </li>
            ))}
          </ul>
        </div>
      }
    </>
  )
}
