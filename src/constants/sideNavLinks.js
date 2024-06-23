import CategoryIcon from '@mui/icons-material/Category';
import CollectionsIcon from '@mui/icons-material/Collections';
import InventoryIcon from '@mui/icons-material/Inventory';
import ArticleIcon from '@mui/icons-material/Article';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import InfoIcon from '@mui/icons-material/Info';
export const sidenavLinks = [
    // {
    //     id: 'categories',
    //     title: 'Categories',
    //     hasOptions: false,
    //     path:'/admin/dashboard/categories',
    //     icon:<CategoryIcon />,
    // },
    // {
    //     id: 'collections',
    //     title: 'Collections',
    //     hasOptions: false,
    //     path:'/admin/dashboard/collections',
    //     icon:<CollectionsIcon/>

    // },
    {
        id: 'products',
        title: 'Products',
        hasOptions: false,
        path:'/admin/dashboard/products',
        icon:<InventoryIcon/>
    },
    // {
    //     id: 'pages',
    //     title: 'Pages',
    //     hasOptions: false,
    //     path:'/admin/dashboard/pages',
    //     icon:<ArticleIcon/>
    // },
    {
        id: 'enquiries',
        title: 'Enquiries',
        hasOptions: false,
        path:'/admin/dashboard/enquiries',
        icon:<LeaderboardIcon/>
    },
    {
        id: 'users',
        title: 'Users',
        hasOptions: false,
        path:'/admin/dashboard/users',
        icon:<PeopleAltIcon/>
    },
    // {
    //     id: 'metal_color',
    //     title: 'Metal Colors',
    //     path:'/admin/dashboard/metalcolor',
    //     hasOptions: false,
    //     icon:<InfoIcon/>
    // },
    // {
    //     id: 'solitear_shapes',
    //     title: 'Solitear Shapes',
    //     path:'/admin/dashboard/solitearshapes',
    //     hasOptions: false,
    //     icon:<InfoIcon/>

    // },
    // {
    //     id: ' solitear_sizes',
    //     title: ' Solitear Sizes',
    //     path:'/admin/dashboard/solitearsizes',
    //     hasOptions: false,
    //     icon:<InfoIcon/>

    // },
    // {
    //     id: 'ring_sizes',
    //     title: 'Ring Sizes',
    //     path:'/admin/dashboard/ringsizes',
    //     hasOptions: false,
    //     icon:<InfoIcon/>

    // },
]