import { useState } from "react";

import EnterName from "./EnterName";
import EnterKey from "./EnterKey";
import { Box, Button, Container, Typography } from "@material-ui/core";

const Home = () => {
  const [showEnterKey, setShowEnterKey] = useState(false);
  const [showEnterName, setShowEnterName] = useState(false);

  return (
    <Container>
      <Typography variant="h2">Welcome!</Typography>
      <Box mb={2}>
        <Button
          fullWidth
          variant="contained"
          color="primary"
          onClick={() => setShowEnterName(true)}
        >
          Get Started
        </Button>
      </Box>
      <Button
        fullWidth
        variant="contained"
        color="secondary"
        onClick={() => setShowEnterKey(true)}
      >
        I have a key
      </Button>
      <EnterName
        open={showEnterName}
        onClose={() => setShowEnterName(false)}
        // contentLabel="Tell us your name"
      />
      <EnterKey
        open={showEnterKey}
        onClose={() => setShowEnterKey(false)}
        close={() => setShowEnterKey(false)}
        // contentLabel="Enter key"
      />
    </Container>
  );
};

export default Home;
