import React from 'react'
import { useAuth } from '../../CurrentUserContext'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { stringify } from 'postcss';

const OrdersUser = () => {
    const { id, direction, phone } = useAuth();
    const phoneNum = JSON.parse(localStorage.getItem(phone))
    const info = JSON.parse(localStorage.getItem(id))
    const locate = JSON.parse(localStorage.getItem('location'))


    const rows = [
        {}
    ];

    return (
        <div>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>first name</TableCell>
                            <TableCell align="right">Last Name</TableCell>
                            <TableCell align="right">Phone number</TableCell>
                            <TableCell align="right">type of service</TableCell>
                            <TableCell align="right">lat</TableCell>
                            <TableCell align="right">lng</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {info.firstName}
                                </TableCell>
                                <TableCell align="right"> {info.lastName}</TableCell>
                                <TableCell align="right"></TableCell>
                                <TableCell align="right"> </TableCell>
                                <TableCell align="right">{locate}</TableCell>
                                <TableCell align="right">{locate}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default OrdersUser