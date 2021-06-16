import * as React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Button, ButtonGroup, Toolbar, Typography } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

function createData(title, room, date,seats,price) {
    return { title, room, date ,seats,price};
  }
  
  const rows = [
    createData('La La Land', 'Room 3', '20/6/21 3:00PM','10','30'),
    createData('Paterson', 'Room 1', '25/6/21 6:00PM','8','20'),
  ];
const Account = ()=>{
    const email = localStorage.getItem('user');

    return(
        <div sx={{mt:3}}>
        <Typography 
          sx={{ flex: '1 1 100%' }}
          variant="h6"
          id="tableTitle"
          component="div"
        >
          User Email:{email}
        </Typography>
        <Toolbar>
        <Typography
          sx={{ flex: '1 1 100%' }}
          variant="h6"
          id="tableTitle"
          component="div"
        >
          Reservations
        </Typography>
        </Toolbar>        
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Movie Title</TableCell>
            <TableCell align="right">Room</TableCell>
            <TableCell align="right">Date</TableCell>
            <TableCell align="right">Seats</TableCell>
            <TableCell align="right">Price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.title}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.title}
              </TableCell>
              <TableCell align="right">{row.room}</TableCell>
              <TableCell align="right">{row.date}</TableCell>
              <TableCell align="right">{row.seats}</TableCell>
              <TableCell align="right">{row.price}</TableCell>
              <TableCell>
                <ButtonGroup>
                    <Button><EditIcon color='primary'/></Button>
                    <Button><DeleteIcon color='secondary'/></Button>
                </ButtonGroup>
            </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </div>
    );
}

export default Account;