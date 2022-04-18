import {
  Button,
  FormField,
  majorScale,
  Pane,
  SelectField,
  Text,
  TextInputField,
} from "evergreen-ui";
import { Link } from "gatsby";
import React, { ChangeEvent, useState } from "react";
import Layout from "../components/layout";
import Overlay1 from "../components/overlay1";
import Overlay2 from "../components/overlay2";

const IndexPage = () => {
  const [type, setType] = useState("type1");
  const [message, setMessage] = useState("This is a sample message");
  const [backgroundColor, setBackgroundColor] = useState("#279ce2");
  const [backgroundColor1, setBackgroundColor1] = useState("#4aaaa7");
  const [backgroundColor2, setBackgroundColor2] = useState("#000000");
  const [fontColor, setFontColor] = useState("#ffffff");

  const link = `/${type}?${new URLSearchParams({
    message,
    fontColor,
    ...(type === "type1" && { backgroundColor }),
    ...(type === "type2" && {
      backgroundColor1,
      backgroundColor2,
    }),
  }).toString()}`;

  return (
    <Layout>
      <Pane border margin={majorScale(2)} padding={majorScale(2)} width={600}>
        <SelectField
          label="Type"
          value={type}
          onChange={(evt: ChangeEvent<HTMLSelectElement>) => {
            setType(evt.target.value);
          }}
        >
          <option value="type1">Type 1</option>
          <option value="type2">Type 2</option>
        </SelectField>
        <TextInputField
          label="Message"
          value={message}
          onChange={(evt: ChangeEvent<HTMLInputElement>) =>
            setMessage(evt.target.value)
          }
        />
        <Pane display="flex">
          {type === "type1" && (
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
          )}
          {type === "type2" && (
            <>
              <FormField
                label="Background Color 1"
                labelFor="backgroundColor1"
                marginBottom={majorScale(3)}
                marginRight={majorScale(3)}
              >
                <input
                  type="color"
                  id="backgroundColor1"
                  value={backgroundColor1}
                  onChange={(evt: ChangeEvent<HTMLInputElement>) =>
                    setBackgroundColor1(evt.target.value)
                  }
                />
              </FormField>
              <FormField
                label="Background Color 2"
                labelFor="backgroundColor2"
                marginBottom={majorScale(3)}
                marginRight={majorScale(3)}
              >
                <input
                  type="color"
                  id="backgroundColor2"
                  value={backgroundColor2}
                  onChange={(evt: ChangeEvent<HTMLInputElement>) =>
                    setBackgroundColor2(evt.target.value)
                  }
                />
              </FormField>
            </>
          )}
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

      {type === "type1" && (
        <Overlay1
          message={message}
          backgroundColor={backgroundColor}
          fontColor={fontColor}
          repeat={true}
        />
      )}
      {type === "type2" && (
        <Overlay2
          message={message}
          backgroundColor1={backgroundColor1}
          backgroundColor2={backgroundColor2}
          fontColor="#ffffff"
          repeat={true}
        />
      )}
    </Layout>
  );
};

export default IndexPage;
