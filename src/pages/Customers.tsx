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

export default function Customers() {
  const classes = useStyles();
  const [customers, setCustomers] = useState<CustomersType[]>([]);

  useEffect(() => {
    const values = getCustomers();
  }, []);

  const getCustomers = () => {
    axios
      .get(`${process.env.REACT_APP_API_URI}/customers`)
      .then((res) => {
        setCustomers(res.data);
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <h3>Customers</h3>
      {customers ? (
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label='simple table'>
            <TableHead>
              <TableRow>
                <TableCell className={classes.tableHeading}>ID</TableCell>
                <TableCell align='right' className={classes.tableHeading}>
                  Customer Name
                </TableCell>
                <TableCell align='right' className={classes.tableHeading}>
                  Merchant ID
                </TableCell>
                <TableCell align='right' className={classes.tableHeading}>
                  Edit
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {customers.map((customer) => (
                <TableRow key={customer.id} className={classes.tableRow}>
                  <TableCell component='th' scope='row'>
                    {customer.id}
                  </TableCell>
                  <TableCell align='right'>{customer.name}</TableCell>
                  <TableCell align='right'>{customer.merchantId}</TableCell>
                  <TableCell align='right'>
                    <Link to={`/customers/${customer.id}`}>
                      <Edit />
                    </Link>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <div>
          <p>There are no customers to display at this time</p>
        </div>
      )}
    </>
  );
}
