import React from 'react';
import { Table } from 'react-bootstrap';

export const TicketTable = ({tickets}) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Subject</th>
          <th>Status</th>
          <th>Oppened Date</th>
        </tr>
      </thead>
      <tbody>
      {tickets.length ? (tickets.map(row=>
        <tr key={row.id}>
          <td>{row.id}</td>
          <td>{row.subject}</td>
          <td>{row.status}</td>
          <td>{row.addedAt}</td>
        </tr>
        )):
        (
            <tr>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
            </tr>
        
        )
        }
        
        
      </tbody>
    </Table>
  );
};
