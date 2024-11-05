'use client';

import { Box, Typography, Button } from '@mui/material';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <Box sx={{ p: 3, textAlign: 'center' }}>
      <Typography variant="h5" color="error" gutterBottom>
        Something went wrong!
      </Typography>
      <Button onClick={() => reset()} variant="contained">
        Try again
      </Button>
    </Box>
  );
}