import { Avatar } from "@material-ui/core";
import styled from "styled-components";

function SidebarChat({ id, users }) {
  return (
    <Container>
      <Avatar src={id} alt="WA" />
      <h2>{users} </h2>
    </Container>
  );
}

export default SidebarChat;

const Container = styled.div``;
