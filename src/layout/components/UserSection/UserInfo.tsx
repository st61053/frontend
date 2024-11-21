import { Avatar, Stack, Typography } from '@mui/material';

function UserInfo({ user }: { user: string }) {
  return (
    <Stack direction={'row'} gap={2} alignItems={'center'}>

      <Stack alignItems={'flex-end'}>
        <Typography
          sx={{ textTransform: 'uppercase' }}
          fontWeight={'bold'}
          fontSize={18}
        >
          {user ? user : 'Hackaton'}
        </Typography>
        <Typography lineHeight={1} fontSize={12}>Admin</Typography>
      </Stack>
      <Avatar />
    </Stack>
  );
}

export default UserInfo;
