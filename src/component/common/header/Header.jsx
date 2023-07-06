import { useState, useRef } from 'react';

import { AppBar, Toolbar, Typography, Box, InputBase, styled } from '@mui/material';
import { Menu as MenuIcon, BookmarkAdd, ExpandMore } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

import { logoURL } from '../../../constants/constant';
import { routePath } from '../../../constants/routes';

// components
import HeaderMenu from './HeaderMenu';

const StyledToolBar = styled(Toolbar)`
    background: #001C30;
    min-height: 56px !important;
    padding: 0 115px !important;
    justify-content: space-between;
    & > * {
        padding: 0 16px;
    }
    & > div {
        display: flex;
        align-items: center;
        cursor: pointer;
        & > p {
            font-weight: 600;
            font-size: 14px;
        }
    }
    & > p {
        font-weight: 600;
        font-size: 14px;
    }
`;

const InputSearchField = styled(InputBase)`
    background: #C5DFF8;
    height: 30px;
    width: 55%;
    border-radius: 15px;
`

const Logo = styled('img')({
    width: 64,
})

const Header = () => {

    const [open, setOpen] = useState(false);

    const anchorRef = useRef(null);

    const navigate = useNavigate();

    const handleToggle = () => {
        setOpen(prev => !prev);
    };

    return (
        <AppBar style={{ minHeight: 60 }} position='static'>
            <StyledToolBar>
                <Logo src={logoURL} alt="logo" onClick={() => navigate(routePath.home)} />
                <Box style ={{backgroundColor: '#213363', width: '50px', height: '35px'}} ref={anchorRef} onClick={handleToggle}>
                    <MenuIcon />
                    <Typography>Menu</Typography>
                </Box>
                <HeaderMenu handleToggle={handleToggle} open={open} anchorRef={anchorRef} />
                <InputSearchField
                    variant="outlined"
                    placeholder="Enter The Movie To Be Searched!!!"
                />
                <Typography>IMDb<Typography component="span" style={{ fontSize: 14 }}>Pro</Typography></Typography>
                <Box style ={{backgroundColor: '#213363', width: '80px', height: '35px'}}>
                    <BookmarkAdd />
                    <Typography>Watchlist</Typography>
                </Box>
                <Typography>Sign In</Typography>
                <Box style ={{backgroundColor: '#213363', width: '30px', height: '35px'}}>
                    <Typography>EN</Typography>
                    <ExpandMore />
                </Box>
            </StyledToolBar>
        </AppBar>
    )
}

export default Header;