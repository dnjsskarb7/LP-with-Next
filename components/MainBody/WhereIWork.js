import React from "react";
import useIntersect from "../useIntersect";

import styled from "styled-components";
const MainSection = styled.section`
  opacity: ${(props) => (props.visible ? 1 : 0)};
  visibility: ${(props) => (props.visible ? "visible" : "hidden")};
  transform: translateY(-20px);
  transition: opacity 500ms var(--easing), transform 500ms var(--easing);
`;
const WhereIWork = () => {
  const [setRef, visible] = useIntersect({
    threshold: 0.2,
  });

  return (
    <MainSection ref={setRef} visible={visible}>
      <h1>123</h1>
      <h1>123</h1>
      <h1>123</h1>
      <h1>123</h1>
      <h1>123</h1>
      <h1>123</h1>
      <h1>123</h1>
      <h1>123</h1>
      <h1>123</h1>
      <h1>123</h1>
      <h1>123</h1>
      <h1>123</h1>
      <h1>123</h1>
      <h1>123</h1>
      <h1>123</h1>
      <h1>123</h1>
      <h1>123</h1>
      <h1>123</h1>
      <h1>123</h1>
      <h1>123</h1>
      <h1>123</h1>
      <h1>123</h1>
    </MainSection>
  );
};
export default WhereIWork;