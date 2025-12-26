'use client'
import React from 'react'
import { Box, Grid, Paper, Typography, Card, CardContent } from '@mui/material'
import { useRouter } from 'next/navigation'
import InventoryIcon from '@mui/icons-material/Inventory'
import LeaderboardIcon from '@mui/icons-material/Leaderboard'
import PeopleAltIcon from '@mui/icons-material/PeopleAlt'
import TrendingUpIcon from '@mui/icons-material/TrendingUp'
import { useSelector } from 'react-redux'

function Dashboard() {
  const router = useRouter()
  const products = useSelector(state => state.products)
  const enquiries = useSelector(state => state.enquires)

  const stats = [
    {
      title: 'Total Products',
      value: products?.data?.length || 0,
      icon: <InventoryIcon sx={{ fontSize: 32 }} />,
      color: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      path: '/admin/dashboard/products',
    },
    {
      title: 'Total Enquiries',
      value: enquiries?.data?.length || 0,
      icon: <LeaderboardIcon sx={{ fontSize: 32 }} />,
      color: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      path: '/admin/dashboard/enquiries',
    },
    {
      title: 'Total Users',
      value: 0,
      icon: <PeopleAltIcon sx={{ fontSize: 32 }} />,
      color: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      path: '/admin/dashboard/users',
    },
    {
      title: 'Growth Rate',
      value: '+12%',
      icon: <TrendingUpIcon sx={{ fontSize: 32 }} />,
      color: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
      path: '#',
    },
  ]

  return (
    <Box>
      {/* Welcome Section */}
      <Paper
        elevation={0}
        sx={{
          p: 4,
          mb: 4,
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          borderRadius: 3,
          color: '#fff',
        }}
      >
        <Typography variant="h4" sx={{ fontWeight: 700, mb: 1 }}>
          Welcome to Admin Dashboard
        </Typography>
        <Typography variant="body1" sx={{ opacity: 0.9 }}>
          Manage your products, track enquiries, and monitor your business performance
        </Typography>
      </Paper>

      {/* Stats Grid */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        {stats.map((stat, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card
              onClick={() => stat.path !== '#' && router.push(stat.path)}
              sx={{
                height: '100%',
                borderRadius: 2,
                background: stat.color,
                color: '#fff',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: 4,
                },
              }}
            >
              <CardContent sx={{ p: 3 }}>
                <Box
                  sx={{
                    width: 56,
                    height: 56,
                    borderRadius: 2,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: 'rgba(255,255,255,0.2)',
                    mb: 2,
                  }}
                >
                  {stat.icon}
                </Box>
                <Typography variant="h4" sx={{ fontWeight: 700, mb: 1 }}>
                  {stat.value}
                </Typography>
                <Typography variant="body2" sx={{ opacity: 0.9 }}>
                  {stat.title}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Quick Actions */}
      <Paper
        elevation={0}
        sx={{
          p: 3,
          borderRadius: 3,
          border: '1px solid rgba(0,0,0,0.08)',
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: 600, mb: 3, color: '#1a1a1a' }}>
          Quick Actions
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={4}>
            <Paper
              elevation={0}
              sx={{
                p: 2,
                borderRadius: 2,
                border: '1px solid rgba(0,0,0,0.08)',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                '&:hover': {
                  borderColor: '#667eea',
                  backgroundColor: '#f5f7fa',
                },
              }}
              onClick={() => router.push('/admin/dashboard/addproduct')}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Box
                  sx={{
                    width: 48,
                    height: 48,
                    borderRadius: 2,
                    backgroundColor: 'rgba(102, 126, 234, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <InventoryIcon sx={{ color: '#667eea' }} />
                </Box>
                <Box>
                  <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                    Add New Product
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Create a new product listing
                  </Typography>
                </Box>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Paper
              elevation={0}
              sx={{
                p: 2,
                borderRadius: 2,
                border: '1px solid rgba(0,0,0,0.08)',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                '&:hover': {
                  borderColor: '#667eea',
                  backgroundColor: '#f5f7fa',
                },
              }}
              onClick={() => router.push('/admin/dashboard/enquiries')}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Box
                  sx={{
                    width: 48,
                    height: 48,
                    borderRadius: 2,
                    backgroundColor: 'rgba(102, 126, 234, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <LeaderboardIcon sx={{ color: '#667eea' }} />
                </Box>
                <Box>
                  <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                    View Enquiries
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Check customer enquiries
                  </Typography>
                </Box>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Paper
              elevation={0}
              sx={{
                p: 2,
                borderRadius: 2,
                border: '1px solid rgba(0,0,0,0.08)',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                '&:hover': {
                  borderColor: '#667eea',
                  backgroundColor: '#f5f7fa',
                },
              }}
              onClick={() => router.push('/admin/dashboard/products')}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Box
                  sx={{
                    width: 48,
                    height: 48,
                    borderRadius: 2,
                    backgroundColor: 'rgba(102, 126, 234, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <InventoryIcon sx={{ color: '#667eea' }} />
                </Box>
                <Box>
                  <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                    Manage Products
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Edit or delete products
                  </Typography>
                </Box>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  )
}

export default Dashboard