import { Box, Avatar } from "@mui/material";
import { styled } from '@mui/material/styles';

import github from '../../assets/images/githubIcon.png';
import linkedin from '../../assets/images/linkedinIcon.svg';
import twitter from '../../assets/images/twitterIcon.png';
import instagram from '../../assets/images/instagramIcon.png';

const StyledAvatar = styled(Avatar)(({ theme }) => ({
    cursor:"pointer", 
    transition: 'all .2s ease-in-out',
    '&:hover': {
      transform: 'scale(1.2)',
    },
    width: '26px', 
    height: '26px', 
    margin: '4px',
    '@media (max-width:600px)': {
        margin: '3px',
    },
}));

export default function SocialMedia() {
    return (
        <Box sx={{display:'flex', justifyContent:'center', alignItems: 'center'}}>
            <StyledAvatar
                variant="rounded"
                alt=""
                src={github}
                onClick={() => window.open('https://github.com/goktemkirez', '_blank')}
            />
            <StyledAvatar
                variant="rounded"
                alt=""
                src={linkedin}
                onClick={() => window.open('https://www.linkedin.com/in/goktemkirez/', '_blank')}
            />
            <StyledAvatar
                variant="rounded"
                alt=""
                src={twitter}
                onClick={() => window.open('https://twitter.com/goktemkirez', '_blank')}
            />
            <StyledAvatar
                variant="rounded"
                alt=""
                src={instagram}
                onClick={() => window.open('https://www.instagram.com/goktemkirez/', '_blank')}
            />
        </Box>
    )
}