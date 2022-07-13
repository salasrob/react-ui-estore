import DashboardOutlined from '@mui/icons-material/DashboardOutlined';
import Person from '@mui/icons-material/Person';
import Forum from '@mui/icons-material/Forum';
import Analytics from '@mui/icons-material/Analytics';
import FolderOpen from '@mui/icons-material/FolderOpen';
import BorderColor from '@mui/icons-material/BorderColor';
import Search from '@mui/icons-material/Search';

const navbarList = [
//   {
//     icon: Search,
//     desc: 'Search',
//     secondDesc: '',
//     badge: 0,
//     subList: [],
//   },
  {
    icon: DashboardOutlined,
    desc: 'Dashboard',
    secondDesc: '',
    badge: 0,
    subList: [],
  },
  {
    icon: Person,
    desc: 'Profile',
    secondDesc: '',
    badge: 0,
    subList: [],
  },
  {
    icon: Forum,
    desc: 'Forum',
    secondDesc: 'Message from andi',
    badge: 2,
    subList: [
      {
        desc: 'chat',
        badge: 2,
      },
      {
        desc: 'reminder',
        badge: 0,
      },
    ],
  },
  {
    icon: Analytics,
    desc: 'Analytics',
    secondDesc: '',
    badge: 0,
    subList: [],
  },
  {
    icon: FolderOpen,
    desc: 'Resources',
    secondDesc: '',
    badge: 0,
    subList: [],
  },
  {
    icon: BorderColor,
    desc: 'Settings',
    secondDesc: '',
    badge: 0,
    subList: [],
  },
  {
    icon: BorderColor,
    desc: 'Feedback',
    secondDesc: '',
    badge: 0,
    subList: [],
  },
];

export default navbarList;
