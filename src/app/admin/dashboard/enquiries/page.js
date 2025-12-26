'use client'
import React from 'react'
import { Box, Typography, Paper, Chip, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { useRouter } from 'next/navigation'
import withDuck from '@/components/HOC/withDuck';
import {enquireInjectible} from '../../../../appStore/saga/enquire';
import {loaderInjectible} from '../../../../appStore/saga/loader';
import {useDispatch,useSelector} from 'react-redux'
import LeaderboardIcon from '@mui/icons-material/Leaderboard';

function Enquiries() {
  const dispatch = useDispatch();
  const router = useRouter();
  const enquiries = useSelector(state => state.enquires);
  
  React.useEffect(() => {
    dispatch({type:'FETCH_ENQUIRIES',payload:{}});
  }, [dispatch]);

  const enquiriesData = enquiries?.data || [];

  return (
    <Box>
      {/* Header Section */}
      <Paper 
        elevation={0} 
        sx={{ 
          p: 2, 
          mb: 2, 
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          borderRadius: 2,
          color: '#fff'
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
          <LeaderboardIcon sx={{ fontSize: 28 }} />
          <Box>
            <Typography variant='h5' sx={{ fontWeight: 600, color: '#fff' }}>
              Enquiries
            </Typography>
            <Typography variant='body2' sx={{ opacity: 0.9, mt: 0.5 }}>
              {enquiriesData.length} total enquiries
            </Typography>
          </Box>
        </Box>
      </Paper>

      {/* Enquiries Table */}
      <Paper 
        elevation={0}
        sx={{ 
          borderRadius: 2,
          border: '1px solid rgba(0,0,0,0.08)',
          overflow: 'hidden'
        }}
      >
        {enquiriesData.length > 0 ? (
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow sx={{ backgroundColor: '#f5f7fa' }}>
                  <TableCell sx={{ padding: 1, fontWeight: 600 }}>Product ID</TableCell>
                  <TableCell sx={{ padding: 1, fontWeight: 600 }}>Product Name</TableCell>
                  <TableCell sx={{ padding: 1, fontWeight: 600 }}>User Name</TableCell>
                  <TableCell sx={{ padding: 1, fontWeight: 600 }}>Contact</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {enquiriesData.map((enquiry, index) => (
                  <TableRow
                    key={index}
                    sx={{
                      '&:hover': {
                        backgroundColor: '#f5f5f5',
                      },
                    }}
                  >
                    <TableCell sx={{ padding: 1 }}>
                      <Chip 
                        label={enquiry.productId} 
                        size="small" 
                        color="primary"
                        variant="outlined"
                      />
                    </TableCell>
                    <TableCell sx={{ padding: 1 }}>
                      <Typography variant="body2" sx={{ fontWeight: 500 }}>
                        {enquiry.productName}
                      </Typography>
                    </TableCell>
                    <TableCell sx={{ padding: 1 }}>
                      <Typography variant="body2">
                        {enquiry.userName}
                      </Typography>
                    </TableCell>
                    <TableCell sx={{ padding: 1 }}>
                      <Typography variant="body2" color="text.secondary">
                        {enquiry.userContact}
                      </Typography>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        ) : (
          <Box sx={{ p: 4, textAlign: 'center' }}>
            <Typography variant="h6" color="text.secondary">
              No enquiries found
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
              Enquiries will appear here when customers make inquiries
            </Typography>
          </Box>
        )}
      </Paper>
    </Box>
  )
}
const sagaInjectables = [loaderInjectible, enquireInjectible]
export default withDuck(sagaInjectables)(Enquiries);