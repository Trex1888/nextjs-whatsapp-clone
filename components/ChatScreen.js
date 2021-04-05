import styled from "styled-components";
import { useRouter } from "next/router";
import { useAuthState } from "react-firebase-hooks/auth";
import { Avatar } from "@material-ui/core";
import { AttachFile, MoreVert } from "@material-ui/icons";
import { auth } from "../firebase";

function ChatScreen({ chat, messages }) {
  const [user] = useAuthState(auth);
  const router = useRouter();

  return (
    <Container>
      <Header>
        <Avatar />
        <HeaderInfo>
          <h3>Rec Email</h3>
          <p>Last Seen ...</p>
        </HeaderInfo>
        <HeaderIcons>
          <AttachFile />
          <MoreVert />
        </HeaderIcons>
      </Header>
    </Container>
  );
}
//229
export default ChatScreen;

const Container = styled.div``;

const Header = styled.div``;

const HeaderIcons = styled.div``;

const HeaderInfo = styled.div``;
