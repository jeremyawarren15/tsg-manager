import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { useRouter } from 'next/navigation';
import { ReactNode } from 'react';

interface Props {
  name: string;
  icon: ReactNode;
  route: string;
}

export default function NavListItem({ name, icon, route }: Props) {
  const router = useRouter();

  const handleClick = () => {
    router.push(route);
  };

  return (
    <ListItem disablePadding>
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={name} />
      </ListItemButton>
    </ListItem>
  );
}