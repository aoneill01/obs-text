import React from "react";
import { useState } from "react";
import Layout from "../components/layout";
import Overlay from "../components/overlay";

// markup
const IndexPage = () => {
  const [message, setMessage] = useState("This is a sample message");

  return (
    <Layout>
      <Overlay message={message} />
    </Layout>
  );
};

export default IndexPage;
