import React, { useContext } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { MyContextData } from "../context/context";


const useStyles = makeStyles({
  list: {
    width: 200,
  },
  fullList: {
    width: 'auto',
  },
});

export default function HeaderBar() {
  
 const { watchList } = useContext(MyContextData); 
  
  const classes = useStyles();
  const [state, setState] = React.useState({
    right: false,
    top: false,
    left: false,
    bottom: false
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <h3>Last 5 fruits</h3>
        <p>Click anywhere to close this fruit bar</p>
      </List>
      <List>
        {watchList.slice(0, 5).map(item => (
            <ListItem>
            <ListItemText primary={item.name} />
            <Divider />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div style={{ backgroundColor: 'orange', color: 'whitesmoke'}}>
      {['sidebar'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
          <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
