import React from "react";
import Child from "./Child";

export default () => {
  const h1Ref = React.useRef();
  const CRef = React.useRef();
  const scrollTo = () => {
    h1Ref.current.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToChild = () => {
    CRef.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <article>
      <h1 ref={h1Ref}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </h1>
      <button onClick={scrollTo}>Back to the top</button>
      <Child ref={CRef} onChildClick={scrollToChild} />
    </article>
  );
};
