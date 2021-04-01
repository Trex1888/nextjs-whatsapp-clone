import styled from "styled-components";
import { Avatar, Button, IconButton } from "@material-ui/core";
import ChatIcon from "@material-ui/icons/Chat";
import { MoreVert, SearchSharp } from "@material-ui/icons";
import { auth, db } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import * as EmailValidator from "email-validator";
import { useCollection } from "react-firebase-hooks/firestore";
import Chat from "../components/Chat";

function Sidebar() {
  const [user] = useAuthState(auth);
  const userChatRef = db
    .collection("chats")
    .where("users", "array-contains", user.email);
  const [chatSnapshot] = useCollection(userChatRef);

  const createChat = () => {
    const input = prompt("Please enter a valid email address to chat.");

    if (!input) return null;

    if (
      EmailValidator.validate(input) &&
      !chatAlreadyExist(input) &&
      input !== user.email
    ) {
      db.collection("chats").add({
        users: [user.email, input],
      });
    }
  };

  const chatAlreadyExist = (recipientEmail) => {
    !!chatSnapshot?.doc.find(
      (chat) =>
        chat.data().users.find((user) => user === recipientEmail)?.length > 0
    );
  };

  return (
    <Container>
      <Header>
        <UserAvatar onClick={() => auth.signOut()} />

        <IconContainer>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </IconContainer>
      </Header>

      <Search>
        <SearchSharp />
        <SearchInput placeholder="Search in chats..." />
      </Search>
      <SidebarButton onClick={createChat}>Start a new chat</SidebarButton>

      {chatSnapshot?.docs.map((chat) => {
        <Chat key={chat.id} id={chat.id} users={chat.data().users} />;
      })}
    </Container>
  );
}

export default Sidebar;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0.35;
`;

const Header = styled.div`
  display: flex;
  position: sticky;
  top: 0;
  background-color: #fff;
  z-index: 1;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  height: 80px;
  border-bottom: 1px solid whitesmoke;
`;

const UserAvatar = styled(Avatar)`
  cursor: pointer;

  :hover {
    opacity: 0.8;
  }
`;

const Search = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  border-radius: 2px;
`;

const SearchInput = styled.input`
  flex: 1;
  outline: none;
  border: none;
`;

const IconContainer = styled.div`
  display: flex;
`;

const SidebarButton = styled(Button)`
  width: 100%;

  &&& {
    border-top: 1px solid #dddddd;
    border-bottom: 1px solid #dddddd;
  }
`;
