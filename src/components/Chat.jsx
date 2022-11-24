import React, { useContext, useState } from "react";
import { Context } from "../index";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";
import Loader from "./Loader";
import firebase from "firebase/compat/app";

import "firebase/compat/auth";

import "firebase/compat/firestore";
import { Timestamp } from "firebase/firestore";
import { Avatar, Button, Grid, TextField } from "@mui/material";
import { Container } from "@mui/system";

const Chat = () => {
  const { auth, firestore } = useContext(Context);
  const [user] = useAuthState(auth);
  const [value, setValue] = useState("");
  const [messages, loading] = useCollectionData(
    firestore.collection("messages").orderBy("createdAt")
  );

  const sendMessage = async () => {
    firestore.collection("messages").add({
      uid: user.uid,
      displayName: user.displayName,
      photoURL: user.photoURL,
      text: value,
      createdAt: Timestamp.fromDate(new Date()),
    });
    setValue("");
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <Container>
      <Grid
        container
        className={"loginGrid"}
        justifyContent={"center"}
        marginTop={1}
      >
        <div className={"chatBox"}>
          {messages.map((message) => (
            <div
              style={{
                border:
                  user.uid === message.uid
                    ? "2px solid green"
                    : "2px solid red",
                marginLeft: user.uid === message.uid ? "auto" : 10,
              }}
              className="messageBlock" key={message.createdAt}
            >
              <Grid container>
                <Avatar src={message.photoURL} />
                <div>{message.displayName}</div>
              </Grid>
              <div>{message.text}</div>
            </div>
          ))}
        </div>
        <Grid
          container
          direction={"column"}
          alignItems={"flex-end"}
          style={{ width: "80%" }}
        >
          <TextField
            fullWidth
            maxRows={2}
            variant={"outlined"}
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <Button
            onClick={sendMessage}
            size="large"
            style={{ marginTop: 5 }}
            variant="outlined"
          >
            Send
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Chat;
