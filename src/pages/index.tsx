import {
  Button,
  FormField,
  majorScale,
  Pane,
  Text,
  TextInputField,
} from "evergreen-ui";
import { Link } from "gatsby";
import React, { ChangeEvent, useState } from "react";
import Layout from "../components/layout";
import Overlay from "../components/overlay";

const IndexPage = () => {
  const [message, setMessage] = useState("This is a sample message");
  const [backgroundColor, setBackgroundColor] = useState("#279ce2");
  const [fontColor, setFontColor] = useState("#ffffff");

  const link = `/type1?${new URLSearchParams({
    message,
    backgroundColor,
    fontColor,
  }).toString()}`;

  return (
    <Layout>
      <Pane border margin={majorScale(2)} padding={majorScale(2)} width={600}>
        <TextInputField
          label="Message"
          value={message}
          onChange={(evt: ChangeEvent<HTMLInputElement>) =>
            setMessage(evt.target.value)
          }
        />
        <Pane display="flex">
          <FormField
            label="Background Color"
            labelFor="backgroundColor"
            marginBottom={majorScale(3)}
            marginRight={majorScale(3)}
          >
            <input
              type="color"
              id="backgroundColor"
              value={backgroundColor}
              onChange={(evt: ChangeEvent<HTMLInputElement>) =>
                setBackgroundColor(evt.target.value)
              }
            />
          </FormField>
          <FormField
            label="Font Color"
            labelFor="fontColor"
            marginBottom={majorScale(3)}
          >
            <input
              type="color"
              id="fontColor"
              value={fontColor}
              onChange={(evt: ChangeEvent<HTMLInputElement>) =>
                setFontColor(evt.target.value)
              }
            />
          </FormField>
        </Pane>
        <Link to={link}>
          <Text>Link for OBS Browser Source</Text>
        </Link>{" "}
        <Button
          appearance="primary"
          onClick={() => {
            navigator.clipboard.writeText(
              `${document.location.protocol}//${document.location.host}${link}`
            );
          }}
          marginLeft={majorScale(1)}
        >
          Copy
        </Button>
      </Pane>
      <Overlay
        message={message}
        backgroundColor={backgroundColor}
        fontColor={fontColor}
        repeat={true}
      />
    </Layout>
  );
};

export default IndexPage;
