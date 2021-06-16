import * as React from 'react';
import { alpha } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MoreIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';
import ImageList from '@material-ui/core/ImageList';
import {movies} from '../data';
import {connect} from 'react-redux'
import * as actions from '../store/actions/auth';
import ListItem from '@material-ui/core/ListItem';
import Drawer from '@material-ui/core/Drawer';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import Autocomplete from '@material-ui/core/Autocomplete';
import TextField from '@material-ui/core/TextField';



 function PrimarySearchAppBar(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const [state, setState] = React.useState({
    left: false,
  });
  const [movs,setMovies] = React.useState([...movies]);
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };
  const handleTag = (event,values)=>{
    console.log(values)
    const _movs = movies.map(m =>{
      if(m.props.title.toLowerCase().includes(values.toLowerCase()) || values===null)
      {
        return m
      }
      return null
    });
    movs.sort((a,b)=>{
      if(b && a)
          return  b.props.rating-a.props.rating;
          return null;
        })
    setMovies(_movs);
    
  }
  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };
  const handleLoginClick = ()=>{
    window.location=('/login');
  }
    
  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu 
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      {
        props.isAuthenticated ? 
          <div>
        
        <MenuItem onClick={handleMenuClose}><Button >Profile</Button></MenuItem>
        <MenuItem onClick={props.logout}><Button > Logout</Button></MenuItem>
        </div>
      : 
        <MenuItem onClick={handleLoginClick}><Button > Login</Button></MenuItem>
      }
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
     {
        props.isAuthenticated ? 
          <div>
        
        <MenuItem onClick={handleMenuClose}><Button >Profile</Button></MenuItem>
        <MenuItem onClick={props.logout}><Button > Logout</Button></MenuItem>
        </div>
      : 
        <MenuItem onClick={handleLoginClick}><Button > Login</Button></MenuItem>
      }
    </Menu>
  );
  const handleGenre =(gnre)=>{
    const _movs = movies.map(m =>{
      if(m.props.genre.includes(gnre) ||gnre==='All')
      {
        return m
      }
      return null
    });
    movs.sort((a,b)=>{
      if(b && a)
          return  b.props.rating-a.props.rating;
          return null;
        })
    setMovies(_movs);
  }
  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <p style={{marginLeft:20}}>Genre</p>
      <Divider/>
      <List>
        {['All','Drama', 'Comedy', 'Action', 'Sport','Fantasy','Adventure','Thriller','Documentary'].map((text, index) => (
          <ListItem button onClick={()=>handleGenre(text)} key={text} >
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Box>
  )
    const movie_titles = movies.map(m=>{
        return m.props.title;
      });
    const handleKeyDown = event =>{
      if(event.key === 'Enter')
      {
        const m = movies.find(ele=>
          ele.props.title ===event.target.value
        );
        if(m)
          setMovies([m]);
      }
    }
  return (
    <div>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar >
          <IconButton 
            onClick={toggleDrawer('left', true)}
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <Drawer            
            anchor='left'
            open={state['left']}
            onClose={toggleDrawer('left', false)}
          >
            {list('left')}
          </Drawer>
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
            CinePlus
          </Typography>
            <Autocomplete 
            popupIcon={<SearchIcon></SearchIcon>}
            filterSelectedOptions
              disablePortal
            id="combo-box-demo"
            options={movie_titles}
            //onChange={handleTag}
            onInputChange={handleTag}
            sx={{ marginLeft:3,marginTop:1,marginBottom:1,width: '100%' ,position:'relative',
            backgroundColor: alpha('#FFFFFF', 0.15),maxWidth:250,
            borderRadius:'10px' }}
            renderInput={(params) => <TextField sx={{background:'white',borderRadius:'10px'}} onKeyDown={handleKeyDown}{...params} placeholder="Movie" />}
         />
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton 
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
    <ImageList  key='movie-list'children={movs} gap = {20}cols={4} />
    </div>
  );
    
}
const mapStateToProps = state =>{
  return{
    isAuthenticated:state.token !== null,
    loading:state.loading,
    error:state.error
  }
}


const mapDispatchToProps = dispatch =>{
  return {
      logout:()=>dispatch(actions.logout())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(PrimarySearchAppBar);