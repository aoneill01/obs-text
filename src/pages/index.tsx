import { majorScale, Pane, TextInputField } from "evergreen-ui";
import { Link } from "gatsby";
import React, { ChangeEvent, useState } from "react";
import Layout from "../components/layout";
import Overlay from "../components/overlay";

const IndexPage = () => {
  const [message, setMessage] = useState("This is a sample message");

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
        <Link to={`/type1?${new URLSearchParams({ message }).toString()}`}>
          URL
        </Link>
      </Pane>
      <Overlay message={message} />
    </Layout>
  );
};

export default IndexPage;
