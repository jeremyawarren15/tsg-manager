'use client';
import { Button } from '@mui/material';
import { useSession } from 'next-auth/react';
import { signIn, signOut } from 'next-auth/react';

const SigninButton = () => {
  const { data: session } = useSession();

  const handleAuth = () => {
    if (session) {
      signOut();
    } else {
      signIn();
    }
  };

  return (
    <Button color="inherit" onClick={handleAuth}>
      {session ? 'Sign Out' : 'Sign In'}
    </Button>
  );
};

export default SigninButton;