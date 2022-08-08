import { styled } from '@mui/material/styles';
import { CardMedia } from '@mui/material';

//JUST FOR TEST
export const StyledCardMedia = styled(CardMedia)(({ theme }) => ({
  transition: 'all .2s ease-in-out',
  '&:hover': {
    transform: 'scale(1.05)',
  },
}));
