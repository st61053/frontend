import { Stack } from '@mui/material';
import UserInfo from './UserInfo';
import UserMenu from './UserMenu';

function UserSection() {

  return (
    <Stack direction={'row'} spacing={0} alignItems={'center'}>
      <UserInfo user={"Larry"} />
      <UserMenu />
    </Stack>
  );
}

export default UserSection;
