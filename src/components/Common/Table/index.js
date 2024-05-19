'use client'
import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
export default function StickyHeadTable({ columns, data,onEdit,onDelete }) {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };
    const handleOnEdit = (item) => {
        onEdit(item)
    }
    const handleOnDelete = (item) => {
        onDelete(item)

    }
    return (
        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
            <TableContainer sx={{ maxHeight: 540 }}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell
                                    key={column.id}
                                    sx={{ textAlign: 'center',fontWeight:'bold' }}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((row,index) => {
                                return (
                                    <TableRow hover role="checkbox" tabIndex={-1} key={row} >
                                        {columns.map((column) => {
                                            const value = row[column.id];
                                            return column.id !== 'action' ? (
                                                <TableCell key={column.id} sx={{ textAlign: 'center' }}>
                                                    {value}
                                                </TableCell>
                                            ) : <TableCell key={column.id} sx={{ textAlign: 'center' }}>
                                                <EditIcon sx={{ mr: 2, color: 'gray' }} onClick={() => handleOnEdit(row)} /> <DeleteIcon sx={{ color: '#FF0000' }} onClick={() => handleOnDelete(row)} />
                                            </TableCell>
                                        })}
                                    </TableRow>
                                );
                            })}

                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={data.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper >
    );
}
