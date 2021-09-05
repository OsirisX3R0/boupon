import { useEffect, useState } from "react";

import EnterName from "./EnterName";
import EnterKey from "./EnterKey";
import { Box, Button, Container, Typography } from "@material-ui/core";
import useQueryString from "../../hooks/useQueryString";

const Home = () => {
  const [showEnterKey, setShowEnterKey] = useState(false);
  const [showEnterName, setShowEnterName] = useState(false);
  const { key } = useQueryString();

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
      <EnterName open={showEnterName} onClose={() => setShowEnterName(false)} />
      <EnterKey
        queryKey={key}
        open={showEnterKey || key}
        onClose={() => setShowEnterKey(false)}
        close={() => setShowEnterKey(false)}
      />
    </Container>
  );
};

export default Home;
