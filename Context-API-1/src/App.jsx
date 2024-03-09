import Heading from "./Heading.jsx";
import Section from "./Section.jsx";
import Footer from "./Footer.jsx";

export default function Page() {
  return (
    <Section level={1}>
      <Heading>Title</Heading>
      <Section level={2}>
        <Heading>Heading</Heading>
        <Heading>Heading</Heading>
        <Heading>Heading</Heading>
        <Section level={3}>
          <Heading>Sub</Heading>
          <Heading>Sub</Heading>
          <Heading>Sub</Heading>
          <Section level={4}>
            <Heading>Sub-sub-heading</Heading>
            <Heading>Sub-sub-heading</Heading>
            <Heading>Sub-sub-heading</Heading>
          </Section>
        </Section>
        <Section level={3}>
          <Footer>Footer Data</Footer>
        </Section>
      </Section>
    </Section>
  );
}
