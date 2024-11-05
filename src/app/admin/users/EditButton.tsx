'use client';

import { IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';

interface EditButtonProps {
  userId: string;
}

export function EditButton({ userId }: EditButtonProps) {
  const handleEdit = () => {
    // Implement edit functionality
    console.log('Edit user:', userId);
  };

  return (
    <IconButton
      onClick={handleEdit}
      color="primary"
      aria-label="edit user"
    >
      <EditIcon />
    </IconButton>
  );
}