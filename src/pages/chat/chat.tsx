import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import "./chat.css";
import ChatList from './chatList';
import MessageList from './messageList';

function Chat() {
  return (
    <Container className='ChatContainer' maxWidth="xl" sx={{ display: "flex" }}>
      <Box className='ChatRoomListBox'>
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
  );
};

export default Chat;