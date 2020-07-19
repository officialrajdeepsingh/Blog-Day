import * as React from 'react'
import Button from '@material-ui/core/Button'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import {
  usePopupState,
  bindTrigger,
  bindMenu,
} from 'material-ui-popup-state/hooks';
import SvgIcon from '@material-ui/core/SvgIcon';
import copy from 'clipboard-copy';

import style from '../css/Menu.module.scss';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

// import Link from 'next/link';
import Link from '@material-ui/core/Link';



function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const TriggerMenu = (props) => {
  const popupState = usePopupState({ variant: 'popover', popupId: 'demoMenu' })
  
  const [open, setOpen] = React.useState(false);
  
  const handleClick = ({close}) => {
      copy(`${props.slug}`)
       setOpen(true)
       close()
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
  
  return (
    <div>
      <Button variant="contained" className={style.buttonMenu} {...bindTrigger(popupState)}>
        <SvgIcon width="54" height="48" viewBox="0 0 54 48" >
                <g filter="url(#filter0_d)">
                <path fillRule="evenodd" clipRule="evenodd" d="M4 24C4 21.2386 6.47176 19 9.52083 19C12.5699 19 15.0417 21.2386 15.0417 24C15.0417 26.7614 12.5699 29 9.52083 29C6.47176 29 4 26.7614 4 24ZM12.8333 24C12.8333 22.3431 11.3503 21 9.52083 21C7.69139 21 6.20833 22.3431 6.20833 24C6.20833 25.6569 7.69139 27 9.52083 27C11.3503 27 12.8333 25.6569 12.8333 24ZM21.0417 24C21.0417 21.2386 23.5135 19 26.5626 19C29.6117 19 32.0834 21.2386 32.0834 24C32.0834 26.7614 29.6117 29 26.5626 29C23.5135 29 21.0417 26.7614 21.0417 24ZM29.8751 24C29.8751 22.3431 28.392 21 26.5626 21C24.7331 21 23.2501 22.3431 23.2501 24C23.2501 25.6569 24.7331 27 26.5626 27C28.392 27 29.8751 25.6569 29.8751 24ZM43.6043 19C40.5553 19 38.0835 21.2386 38.0835 24C38.0835 26.7614 40.5553 29 43.6043 29C46.6534 29 49.1252 26.7614 49.1252 24C49.1252 21.2386 46.6534 19 43.6043 19ZM43.6043 21C45.4338 21 46.9168 22.3431 46.9168 24C46.9168 25.6569 45.4338 27 43.6043 27C41.7749 27 40.2918 25.6569 40.2918 24C40.2918 22.3431 41.7749 21 43.6043 21Z" fill="black"/>
                </g>
                <defs>
                <filter id="filter0_d" x="-3" y="0" width="61" height="56" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                <feOffset dy="4"/>
                <feGaussianBlur stdDeviation="2"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
                </filter>
                </defs>                         
            </SvgIcon>
      </Button>
      <Menu
          {...bindMenu(popupState)}
          getContentAnchorEl={null}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
          transformOrigin={{ vertical: 'top', horizontal: 'left' }}
          className={style.menu}
      >
        <MenuItem onClick={()=>handleClick(popupState)} > 
         
            Share
        </MenuItem>
         
       
        <MenuItem >   
          <Link className={style.anchorLink} href={`/comment?id=${props.postId}`} as='/comment'>
            Write Comment 
          </Link>  
        </MenuItem>
        
        <MenuItem >  
          <Link rel="noreferrer" target="_blank" className={style.anchorLink} href="https://docs.google.com/forms/d/e/1FAIpQLSdtJKTuJ3t_mjbkm0VKBFKyvLe_Kvho5oeKyLI0DT9_ujRPxA/viewform?usp=sf_link" > 
             Report 
          </Link> 
        </MenuItem>
     
      </Menu>
    
        <Snackbar open={open} anchorOrigin={ 
              {    vertical: 'top', 
                  horizontal: 'center' }
              } 
              autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success">
                  You success the copy url and Now Share with your friend!
                </Alert>
            </Snackbar>
    </div>
  )
}



export default TriggerMenu