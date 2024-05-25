'use client'
import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Image from 'next/image';
import {Grid} from '@mui/material';
function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        {/* <TableCell component="th" scope="row" align="left">
          <Image src={row?.media[0]} width={120} height={120} alt="Product Image" />
        </TableCell> */}
        <TableCell align="center">{row.productCode}</TableCell>
        <TableCell align="center">{row.productName}</TableCell>
        <TableCell align="center">{row.category}</TableCell>
        <TableCell align="center">{row?.offer || "NA"}</TableCell>
        <TableCell align="center">{row.collection}</TableCell>
        <TableCell align="center">{row.metalColour}</TableCell>
        <TableCell align="center">{row?.enquiries || "0"}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          {open && <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Images
              </Typography>
              {row?.media.length > 0 && (
                <Grid container spacing={4} sx={{ mt: 2 }}>
                    {row?.media.map((media, index) => (
                        <Grid item xs={1} key={index}>
                            {!media.includes('.mp4') ? (
                                <img
                                    src={media}
                                    alt={`Uploaded image ${index + 1}`}
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                />
                            ) : (
                                <video
                                    src={media}
                                    controls
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                />
                            )}
                        </Grid>
                    ))}
                </Grid>
            )}
            </Box>
          </Collapse>}
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}


export default function CollapsibleTable({ data }) {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell sx={{width:'10px'}}/>
            <TableCell align="center">PID</TableCell>
            <TableCell align="center">Name</TableCell>
            <TableCell align="center">Category</TableCell>
            <TableCell align="center">Offers</TableCell>
            <TableCell align="center">Collection</TableCell>
            <TableCell align="center">Metal Color</TableCell>
            <TableCell align="center">Enquries</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.map((row) => (
            <Row key={row?.productName} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
