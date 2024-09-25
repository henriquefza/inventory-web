import {AppBar, Box, Toolbar, Typography} from '@mui/material';

export default function Header () {
  return (
    <Box sx={{ flexGrow: 1, marginBottom: 2 }}>
    <AppBar position="static">
      <Toolbar variant="dense">
        <Typography 
          variant="h6" 
          color="inherit" 
          component="div"
        >
          Lojas Darmand
        </Typography>
      </Toolbar>
    </AppBar>
  </Box>
  );
}