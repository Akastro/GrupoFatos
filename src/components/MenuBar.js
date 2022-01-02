import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';

const pages = ['Soluções', 'Contabilidade', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const MenuBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="md">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
           <a href="/">
           <img src="/logo.png" alt="Grupo Fatos" style="
                   height: 4em;
                   padding: 0px 20px;
               "></img>      
           </a>
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
//export default ResponsiveAppBar;



/* const Menu = () => (
    <div>
        <nav className="navbar">
            <div className="max-width">
                <div className="logo">
                    <a href="/"><img src="/logo.png" alt="Grupo Fatos"></img></a>
                </div>
                <ul className="menu">
                    <li><a href="#solucao" className="menu-btn">Soluções</a></li>
                    <li><a href="#contabilidade" className="menu-btn">Contabilidade</a></li>
                    <li><a href="#servico" className="menu-btn">Serviços</a></li>
                    <li><a href="https://" className="menu-btn" _target="_blank">Blog</a></li>
                    <li><a href="/Sobre" className="menu-btn">Sobre Nós</a></li>
                    <li><a href=" https://www.facebook.com/grfatos" target=" _blank=" className="menu-btn"><i class="fab fa-facebook-f"></i></a></li>
                    <li><a href=" https://www.youtube.com/grupofatos " target=" _blank " className="menu-btn" _target="_blank"><i class="fab fa-youtube"></i></a></li>
                    <li><a href=" https://www.instagram.com/gf_contabilidade " target=" _blank " className="menu-btn"><i class="fab fa-instagram"></i></a></li>
                    <li><a href=" https://www.linkedin.com/company/grupo-fatos-apoio-ao-empreendedor " target=" _blank " className="menu-btn"><i class="fab fa-linkedin-in"></i></a></li>
                    
                    <li><div class=" navbar-buttons mbr-section-btn "><a class=" btn btn-primary display-7 " href=" https://grupofatos.com.br/area-do-cliente.html ">Área do Cliente</a></div></li>
                </ul>
                <div className="menu-btn">
                <i class="fas fa-align-right"></i>
                </div>
            </div>
        </nav>
    </div>
); */

export default MenuBar;