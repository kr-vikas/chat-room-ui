import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Box from '@mui/material/Box';
import "./messageList.css";

function MessageList() {

  return (
    <List dense disablePadding sx={{ width: '100%', display: "flex", flexDirection: "column", gap: "4px" }}>
      {
        [0, 1, 2, 3].map((value) =>
          <Box sx={{
            flexGrow: 1,
            display: 'flex',
            justifyContent: value === 3 ? 'flex-end' : 'unset',
          }}>
            <ListItem key={value} component="div" disablePadding sx={{
              padding: "0 8px",
              width: "unset",
              minWidth: "55%",
              maxWidth: "80%",
              flexDirection: "column",
              alignItems: "unset",
              background: value === 3 ? '#8ecced' : "#bac2cc",
              textAlign: value === 3 ? 'right' : 'unset',
              borderTopLeftRadius: value === 3 ? '16px' : 'unset',
              borderBottomLeftRadius: value === 3 ? '16px' : 'unset',
              borderTopRightRadius: value !== 3 ? '16px' : 'unset',
              borderBottomRightRadius: value !== 3 ? '16px' : 'unset',
            }}>
              <ListItemText className='MessageUserName' sx={{ margin: 0, padding: 0 }} primary={`Item ${value + 1}`} />
              <ListItemText sx={{ margin: 0, padding: 0 }} primary={`Item ${value + 1}`} />
            </ListItem>
          </Box>
        )
      }
    </List>
  );
};

export default MessageList;