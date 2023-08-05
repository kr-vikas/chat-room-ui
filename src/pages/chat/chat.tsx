import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import "./chat.css";
import ChatList from './chatList';
import MessageList from './messageList';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import InputBase from '@mui/material/InputBase';
import { styled, alpha } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import React, { useCallback, useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
// import useSocket from '../../socket';

const Search = styled('div')(({ theme }) => ({
  border: '1px solid #bac2cc',
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.2),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

function Chat() {
  const [openAddRoomModal, setOpenAddRoomModal] = useState<boolean>(false);
  const [newRoomName, setNewRoomName] = useState<string>('');
  // const { socket, useCreateRoom } = useSocket();

  const handleCreateRoomClick = useCallback(() => {
    // useCreateRoom(newRoomName);
    console.log("newRoomName --->", newRoomName);
    // setOpenAddRoomModal(false);
    // setNewRoomName('');
  }, [newRoomName]);

  const handleRoomNameChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setNewRoomName(e.target.value);
  }, []);

  const handleModalClose = useCallback(() => {
    setOpenAddRoomModal(false);
    setNewRoomName('');
  }, []);

  const CreateNewRoomModal = useCallback(() => {
    return (
      <div>
        <Dialog open={openAddRoomModal} onClose={handleModalClose}>
          <DialogTitle>Room Name</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              id="roomName"
              type="text"
              fullWidth
              variant="standard"
              defaultValue={newRoomName}
              onChange={handleRoomNameChange}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleModalClose}>Cancel</Button>
            <Button onClick={handleCreateRoomClick}>Create</Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }, [openAddRoomModal]);

  return (
    <React.Fragment>
      <Container className='ChatContainer' maxWidth="xl" sx={{ display: "flex" }}>
        <Box className='ChatRoomListBox'>
          <Box className="SearchBoxWrapper">
            <Search sx={{ margin: 0, }}>
              <SearchIconWrapper >
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search rooms…"
                inputProps={{ 'aria-label': 'search' }}
              />
            </Search>
            <Tooltip title="Create Room">
              <Avatar onClick={() => setOpenAddRoomModal(true)}><AddIcon className='AddRoomPlusIcon' /></Avatar>
            </Tooltip>
          </Box>
          <ChatList />
        </Box>
        <Box className='ChatBox'>
          <MessageList />
          <Stack className='MessageInputArea' direction="row" spacing={2} alignItems='flex-end'>
            <TextField
              id="message-area"
              defaultValue=""
              maxRows={3}
              placeholder="Enter your message here..."
              multiline
              sx={{ width: '100%', padding: 0, margin: 0 }}
            />
            <Button variant="contained" size="small" sx={{ height: "35px" }} endIcon={<SendIcon />}>Send</Button>
          </Stack>
        </Box>
      </Container>
      <CreateNewRoomModal />
    </React.Fragment>
  );
};

export default Chat;