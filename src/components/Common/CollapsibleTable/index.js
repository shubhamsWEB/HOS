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
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Image from 'next/image';
import { Button, Grid, Chip, Divider, CircularProgress } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import PersonIcon from '@mui/icons-material/Person';
import PhoneIcon from '@mui/icons-material/Phone';
import MessageIcon from '@mui/icons-material/Message';
import { getProductEnquiries } from '@/services/apiHelperClient';

function Row(props) {
  const { row, handleOnDeleteProduct, handleOnEditProduct } = props;
  const [open, setOpen] = React.useState(false);
  const [enquiries, setEnquiries] = React.useState([]);
  const [loadingEnquiries, setLoadingEnquiries] = React.useState(false);

  React.useEffect(() => {
    if (open && row.id) {
      setLoadingEnquiries(true);
      getProductEnquiries(row.id)
        .then((response) => {
          // Ensure response is always an array
          const enquiriesData = Array.isArray(response) 
            ? response 
            : (response?.data && Array.isArray(response.data) 
              ? response.data 
              : (response?.enquiries && Array.isArray(response.enquiries) 
                ? response.enquiries 
                : []));
          setEnquiries(enquiriesData);
        })
        .catch((error) => {
          console.error('Error fetching product enquiries:', error);
          setEnquiries([]);
        })
        .finally(() => {
          setLoadingEnquiries(false);
        });
    }
  }, [open, row.id]);

  return (
    <React.Fragment>
      <TableRow
        sx={{
          '&:hover': {
            backgroundColor: '#f5f5f5',
          },
        }}
      >
        <TableCell sx={{ padding: 1 }}>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
            sx={{ color: '#667eea' }}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell sx={{ padding: 1 }}>
          <Chip 
            label={row.productCode} 
            size="small" 
            color="primary"
            variant="outlined"
          />
        </TableCell>
        <TableCell sx={{ padding: 1 }}>
          <Typography variant="body2" sx={{ fontWeight: 500 }}>
            {row.productName}
          </Typography>
        </TableCell>
        <TableCell sx={{ padding: 1 }}>
          <Chip 
            label={row.category} 
            size="small" 
            variant="outlined"
          />
        </TableCell>
        <TableCell sx={{ padding: 1 }}>
          {row?.offer ? (
            <Chip 
              label={row.offer} 
              size="small" 
              color="success"
            />
          ) : (
            <Typography variant="body2" color="text.secondary">-</Typography>
          )}
        </TableCell>
        <TableCell sx={{ padding: 1 }}>
          <Typography variant="body2">{row.collection}</Typography>
        </TableCell>
        <TableCell sx={{ padding: 1 }}>
          <Chip 
            label={row.metalColour} 
            size="small" 
            sx={{ textTransform: 'capitalize' }}
          />
        </TableCell>
        <TableCell align="center" sx={{ padding: 1 }}>
          <Chip 
            label={row?.enquiries || "0"} 
            size="small" 
            color="secondary"
          />
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell colSpan={8} sx={{ paddingBottom: 0, paddingTop: 0 }}>
          {open && (
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Box sx={{ margin: 2, p: 2, backgroundColor: '#fafafa', borderRadius: 2 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
                  <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                    Product Details
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 1 }}>
                    <Button 
                      variant='contained' 
                      size="small"
                      startIcon={<EditIcon />}
                      onClick={() => handleOnEditProduct(row)}
                      sx={{ textTransform: 'none' }}
                    >
                      Edit
                    </Button>
                    <Button 
                      variant="outlined" 
                      size="small"
                      startIcon={<DeleteIcon />}
                      color="error" 
                      onClick={() => handleOnDeleteProduct(row.id)}
                      sx={{ textTransform: 'none' }}
                    >
                      Delete
                    </Button>
                  </Box>
                </Box>

                {/* Product Media Section */}
                <Box sx={{ mb: 3 }}>
                  <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1.5, color: '#666' }}>
                    Product Media
                  </Typography>
                  {row?.media && row?.media.length > 0 ? (
                    <Grid container spacing={2}>
                      {row.media.map((media, index) => (
                        <Grid item xs={6} sm={4} md={3} lg={2} key={index}>
                          <Box
                            sx={{
                              position: 'relative',
                              width: '100%',
                              paddingTop: '100%',
                              borderRadius: 2,
                              overflow: 'hidden',
                              border: '1px solid rgba(0,0,0,0.08)',
                              backgroundColor: '#fff',
                            }}
                          >
                            {!media.includes('.mp4') ? (
                              <Image
                                src={media}
                                alt={`Product image ${index + 1}`}
                                fill
                                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 20vw"
                                style={{ objectFit: 'cover' }}
                              />
                            ) : (
                              <video
                                src={media}
                                controls
                                style={{
                                  position: 'absolute',
                                  top: 0,
                                  left: 0,
                                  width: '100%',
                                  height: '100%',
                                  objectFit: 'cover',
                                }}
                              />
                            )}
                          </Box>
                        </Grid>
                      ))}
                    </Grid>
                  ) : (
                    <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'center', py: 2 }}>
                      No media available
                    </Typography>
                  )}
                </Box>

                <Divider sx={{ my: 2 }} />

                {/* Product Enquiries Section */}
                <Box>
                  <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1.5, color: '#666' }}>
                    Product Enquiries ({enquiries.length})
                  </Typography>
                  {loadingEnquiries ? (
                    <Box sx={{ display: 'flex', justifyContent: 'center', py: 3 }}>
                      <CircularProgress size={24} />
                    </Box>
                  ) : Array.isArray(enquiries) && enquiries.length > 0 ? (
                    <Grid container spacing={2}>
                      {enquiries.map((enquiry, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                          <Box
                            sx={{
                              p: 1.5,
                              borderRadius: 1,
                              border: '1px solid rgba(0,0,0,0.08)',
                              backgroundColor: '#fff',
                            }}
                          >
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                              <PersonIcon sx={{ fontSize: 18, color: '#667eea' }} />
                              <Typography variant="body2" sx={{ fontWeight: 500 }}>
                                {enquiry.name}
                              </Typography>
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                              <PhoneIcon sx={{ fontSize: 18, color: '#666' }} />
                              <Typography variant="body2" color="text.secondary">
                                {enquiry.contact}
                              </Typography>
                            </Box>
                            {enquiry.message && (
                              <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1, mt: 1 }}>
                                <MessageIcon sx={{ fontSize: 18, color: '#666', mt: 0.5 }} />
                                <Typography variant="body2" color="text.secondary" sx={{ flex: 1 }}>
                                  {enquiry.message}
                                </Typography>
                              </Box>
                            )}
                          </Box>
                        </Grid>
                      ))}
                    </Grid>
                  ) : (
                    <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'center', py: 2 }}>
                      No enquiries for this product
                    </Typography>
                  )}
                </Box>
              </Box>
            </Collapse>
          )}
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

export default function CollapsibleTable({ data, handleOnDeleteProduct, handleOnEditProduct }) {
  if (!data || data.length === 0) {
    return (
      <Box sx={{ p: 4, textAlign: 'center' }}>
        <Typography variant="h6" color="text.secondary">
          No products found
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
          Add your first product to get started
        </Typography>
      </Box>
    );
  }

  return (
    <TableContainer>
      <Table aria-label="products table" sx={{ minWidth: 650 }}>
        <TableHead>
          <TableRow sx={{ backgroundColor: '#f5f7fa' }}>
            <TableCell sx={{ width: '50px', padding: 1, fontWeight: 600 }} />
            <TableCell sx={{ padding: 1, fontWeight: 600 }}>Product ID</TableCell>
            <TableCell sx={{ padding: 1, fontWeight: 600 }}>Name</TableCell>
            <TableCell sx={{ padding: 1, fontWeight: 600 }}>Category</TableCell>
            <TableCell sx={{ padding: 1, fontWeight: 600 }}>Offer</TableCell>
            <TableCell sx={{ padding: 1, fontWeight: 600 }}>Collection</TableCell>
            <TableCell sx={{ padding: 1, fontWeight: 600 }}>Metal Color</TableCell>
            <TableCell align="center" sx={{ padding: 1, fontWeight: 600 }}>Enquiries</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, index) => (
            <Row 
              key={row?.id || row?.productName || index} 
              row={row} 
              handleOnDeleteProduct={handleOnDeleteProduct} 
              handleOnEditProduct={handleOnEditProduct}
            />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
