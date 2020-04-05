import React from 'react'
const UserTable = () => (
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Username</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Name data</td>
        <td>Username data</td>
        <td>
          <button className=" btn btn-warning">Edit</button>
          <button className=" btn btn-danger">Delete</button>
        </td>
      </tr>
    </tbody>
  </table>
)

export default UserTable
