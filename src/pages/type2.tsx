import React, { useEffect, useState } from "react";
import Layout from "../components/layout";
import Overlay2 from "../components/overlay2";

const defaultMessage = "";
const defaultBackgroundColor1 = "#4aaaa7";
const defaultBackgroundColor2 = "#000000";
const defaultFontColor = "#ffffff";

const IndexPage = () => {
  const [message, setMessage] = useState(defaultMessage);
  const [backgroundColor1, setBackgroundColor1] = useState(
    defaultBackgroundColor1
  );
  const [backgroundColor2, setBackgroundColor2] = useState(
    defaultBackgroundColor2
  );
  const [fontColor, setFontColor] = useState(defaultFontColor);

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    setMessage(searchParams.get("message") ?? defaultMessage);
    setBackgroundColor1(
      searchParams.get("backgroundColor1") ?? defaultBackgroundColor1
    );
    setBackgroundColor2(
      searchParams.get("backgroundColor2") ?? defaultBackgroundColor2
    );
    setFontColor(searchParams.get("fontColor") ?? defaultFontColor);
  }, []);

  return (
    <Layout>
      <Overlay2
        message={message}
        backgroundColor1={backgroundColor1}
        backgroundColor2={backgroundColor2}
        fontColor={fontColor}
      />
    </Layout>
  );
};

export default IndexPage;
