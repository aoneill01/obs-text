import React, { useEffect, useState } from "react";
import Layout from "../components/layout";
import Overlay from "../components/overlay";

const IndexPage = () => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    setMessage(searchParams.get("message") ?? "");
  }, []);

  return (
    <Layout>
      <Overlay message={message} />
    </Layout>
  );
};

export default IndexPage;
