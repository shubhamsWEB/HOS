'use client'
import React from 'react'
import { Box, Typography, Paper, Chip, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button, IconButton } from '@mui/material';
import { useRouter } from 'next/navigation'
import withDuck from '@/components/HOC/withDuck';
import {usersInjectible} from '../../../../appStore/saga/users';
import {loaderInjectible} from '../../../../appStore/saga/loader';
import {useDispatch,useSelector} from 'react-redux'
import PeopleIcon from '@mui/icons-material/People';
import VisibilityIcon from '@mui/icons-material/Visibility';
import TransitionsModal from '@/components/Common/Modal';
import { getUserEnquiries } from '@/services/apiHelperClient';

function Users() {
  const dispatch = useDispatch();
  const router = useRouter();
  const users = useSelector(state => state.users);
  const [enquiriesModalOpen, setEnquiriesModalOpen] = React.useState(false);
  const [selectedUserEnquiries, setSelectedUserEnquiries] = React.useState(null);
  const [loadingEnquiries, setLoadingEnquiries] = React.useState(false);
  
  React.useEffect(() => {
    dispatch({type:'FETCH_USERS',payload:{}});
  }, [dispatch]);

  const usersData = users?.data || [];

  const handleViewEnquiries = async (userId) => {
    setLoadingEnquiries(true);
    try {
      const response = await getUserEnquiries(userId);
      setSelectedUserEnquiries(response);
      setEnquiriesModalOpen(true);
    } catch (error) {
      console.error('Error fetching user enquiries:', error);
    } finally {
      setLoadingEnquiries(false);
    }
  };

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
          <PeopleIcon sx={{ fontSize: 28 }} />
          <Box>
            <Typography variant='h5' sx={{ fontWeight: 600, color: '#fff' }}>
              Users Management
            </Typography>
            <Typography variant='body2' sx={{ opacity: 0.9, mt: 0.5 }}>
              {usersData.length} total users
            </Typography>
          </Box>
        </Box>
      </Paper>

      {/* Users Table */}
      <Paper 
        elevation={0}
        sx={{ 
          borderRadius: 2,
          border: '1px solid rgba(0,0,0,0.08)',
          overflow: 'hidden'
        }}
      >
        {usersData.length > 0 ? (
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow sx={{ backgroundColor: '#f5f7fa' }}>
                  <TableCell sx={{ padding: 1, fontWeight: 600 }}>ID</TableCell>
                  <TableCell sx={{ padding: 1, fontWeight: 600 }}>Name</TableCell>
                  <TableCell sx={{ padding: 1, fontWeight: 600 }}>Phone Number</TableCell>
                  <TableCell sx={{ padding: 1, fontWeight: 600 }}>Role</TableCell>
                  <TableCell sx={{ padding: 1, fontWeight: 600 }}>Status</TableCell>
                  <TableCell sx={{ padding: 1, fontWeight: 600 }}>Enquiries</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {usersData.map((user, index) => (
                  <TableRow
                    key={user.id || index}
                    sx={{
                      '&:hover': {
                        backgroundColor: '#f5f5f5',
                      },
                    }}
                  >
                    <TableCell sx={{ padding: 1 }}>
                      <Chip 
                        label={user.id} 
                        size="small" 
                        color="primary"
                        variant="outlined"
                      />
                    </TableCell>
                    <TableCell sx={{ padding: 1 }}>
                      <Typography variant="body2" sx={{ fontWeight: 500 }}>
                        {user.name}
                      </Typography>
                    </TableCell>
                    <TableCell sx={{ padding: 1 }}>
                      <Typography variant="body2">
                        {user.username}
                      </Typography>
                    </TableCell>
                    <TableCell sx={{ padding: 1 }}>
                      <Chip 
                        label={user.role} 
                        size="small" 
                        color={user.role === 'ADMIN' ? 'primary' : 'default'}
                        variant="filled"
                      />
                    </TableCell>
                    <TableCell sx={{ padding: 1 }}>
                      <Chip 
                        label={user.enabled ? 'Enabled' : 'Disabled'} 
                        size="small" 
                        color={user.enabled ? 'success' : 'default'}
                        variant="outlined"
                      />
                    </TableCell>
                    <TableCell sx={{ padding: 1 }}>
                      <IconButton
                        size="small"
                        onClick={() => handleViewEnquiries(user.id)}
                        disabled={loadingEnquiries}
                        color="primary"
                        sx={{ 
                          '&:hover': {
                            backgroundColor: 'rgba(102, 126, 234, 0.1)',
                          }
                        }}
                      >
                        <VisibilityIcon fontSize="small" />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        ) : (
          <Box sx={{ p: 4, textAlign: 'center' }}>
            <Typography variant="h6" color="text.secondary">
              No users found
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
              Users will appear here when they are registered
            </Typography>
          </Box>
        )}
      </Paper>

      {/* Enquiries Modal */}
      <TransitionsModal open={enquiriesModalOpen} setOpen={setEnquiriesModalOpen}>
        <Box>
          {selectedUserEnquiries && (
            <>
              <Typography variant="h5" sx={{ mb: 3, fontWeight: 600 }}>
                User Enquiries
              </Typography>
              
              {/* User Info */}
              {selectedUserEnquiries.userInfo && (
                <Paper sx={{ p: 2, mb: 3, backgroundColor: '#f5f7fa' }}>
                  <Typography variant="h6" sx={{ mb: 1, fontWeight: 600 }}>
                    User Information
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 2 }}>
                    <Typography variant="body1">
                      <strong>Name:</strong> {selectedUserEnquiries.userInfo.customer}
                    </Typography>
                    <Typography variant="body1">
                      <strong>Contact:</strong> {selectedUserEnquiries.userInfo.contact}
                    </Typography>
                  </Box>
                </Paper>
              )}

              {/* Product Enquiries */}
              <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                Product Enquiries ({selectedUserEnquiries.productInfo?.length || 0})
              </Typography>
              
              {selectedUserEnquiries.productInfo && selectedUserEnquiries.productInfo.length > 0 ? (
                <TableContainer>
                  <Table>
                    <TableHead>
                      <TableRow sx={{ backgroundColor: '#f5f7fa' }}>
                        <TableCell sx={{ fontWeight: 600 }}>Product ID</TableCell>
                        <TableCell sx={{ fontWeight: 600 }}>Product Name</TableCell>
                        <TableCell sx={{ fontWeight: 600 }}>Message</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {selectedUserEnquiries.productInfo.map((product, index) => (
                        <TableRow
                          key={index}
                          sx={{
                            '&:hover': {
                              backgroundColor: '#f5f5f5',
                            },
                          }}
                        >
                          <TableCell>
                            <Chip 
                              label={product.productId} 
                              size="small" 
                              color="primary"
                              variant="outlined"
                            />
                          </TableCell>
                          <TableCell>
                            <Typography variant="body2" sx={{ fontWeight: 500 }}>
                              {product.productName}
                            </Typography>
                          </TableCell>
                          <TableCell>
                            <Typography variant="body2">
                              {product.enquiryMessage}
                            </Typography>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              ) : (
                <Box sx={{ p: 4, textAlign: 'center' }}>
                  <Typography variant="body1" color="text.secondary">
                    No enquiries found for this user
                  </Typography>
                </Box>
              )}
            </>
          )}
        </Box>
      </TransitionsModal>
    </Box>
  )
}
const sagaInjectibles = [loaderInjectible, usersInjectible]
export default withDuck(sagaInjectibles)(Users);