import { Container } from "@chakra-ui/react";
import Test from "./components/Test";

export default function Home() {
  return (
    <div>
      <Container paddingTop="80px" fluid>
        <h1 style={{ fontSize: "32px", textAlign: "center" }}>Hero Banner</h1>
        <Test />
      </Container>
    </div>
  );
}
