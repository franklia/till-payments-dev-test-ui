import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Edit } from '@material-ui/icons';
import { CustomersType } from '../helpers/types';
import { useParams } from 'react-router-dom';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  tableHeading: {
    fontWeight: 600,
  },
  tableRow: {
    '&:hover': {
      background: '#ddd',
    },
  },
});

export default function Customer() {
  const classes = useStyles();
  const [customer, setCustomer] = useState<CustomersType>();
  // Typescript warning here - I didn't have time to fix it
  const { id } = useParams();
  console.log('id', id);

  useEffect(() => {
    const values = getCustomer();
  }, []);

  const getCustomer = () => {
    axios
      .get(`${process.env.REACT_APP_API_URI}/customers/${id}`)
      .then((res) => {
        setCustomer(res.data);
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <h3>Customers</h3>
      {customer ? (
        <>
          <div>
            <p>Customer ID: {customer.id}</p>
            <p>Customer ID: {customer.name}</p>
            <p>Customer ID: {customer.merchantId}</p>
          </div>
          <h4>Transactions</h4>
          <p>To Do: Provid a list transactions</p>
        </>
      ) : (
        <div>
          <p>There are no customers to display at this time</p>
        </div>
      )}
    </>
  );
}
