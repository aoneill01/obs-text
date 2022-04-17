import React, { useEffect, useState } from "react";
import Layout from "../components/layout";
import Overlay from "../components/overlay";

const defaultMessage = "";
const defaultBackgroundColor = "#279ce2";
const defaultFontColor = "#ffffff";

const IndexPage = () => {
  const [message, setMessage] = useState(defaultMessage);
  const [backgroundColor, setBackgroundColor] = useState(
    defaultBackgroundColor
  );
  const [fontColor, setFontColor] = useState(defaultFontColor);

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    setMessage(searchParams.get("message") ?? defaultMessage);
    setBackgroundColor(
      searchParams.get("backgroundColor") ?? defaultBackgroundColor
    );
    setFontColor(searchParams.get("fontColor") ?? defaultFontColor);
  }, []);

  return (
    <Layout>
      <Overlay
        message={message}
        backgroundColor={backgroundColor}
        fontColor={fontColor}
      />
    </Layout>
  );
};

export default IndexPage;
