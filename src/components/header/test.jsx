import React from 'react'

export default function test() {
    return (
        <div>
            <div className="customTable">
      <Table
        striped
        bordered
        hover
        variant="dark"
        responsive="sm"
        className="customTable__table"
      >
        <thead className="customTable__head">
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Address</th>
            <th>Balance</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody className="customTable__body">
          {customers?.map(
            ({ _id, first_name, last_name, address, balance }, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{first_name.toUpperCase()}</td>
                <td>{last_name.toUpperCase()}</td>
                <td>{address.toUpperCase()}</td>
                <td>{balance}</td>
                <td>
                  <Button onClick={() => onButtonClick(_id)} variant="info">
                    View Details
                  </Button>
                </td>
              </tr>
            )
          )}
        </tbody>
      </Table>
      {renderTableModal()}
    </div>
        </div>
    )
}
