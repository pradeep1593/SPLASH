import SliderJS from "react-slick";
import React from 'react';
import { useMediaQuery } from 'react-responsive';
import {Card,Box} from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import surya from "./images/surya.jpg";
import sekhar from './images/sekhar.jpg';
import pradeep from './images/pradeep.jpg';
import lakshman from './images/lakshman.png'
import hari from './images/hari.jpg'

function Slider() {
          
  const isLaptop = useMediaQuery({ maxWidth: 1024 });
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: isLaptop ? 1 : 3,
    slidesToScroll: 1
  };
  const data = [
    {
      name: `K Lakshmi Surya Teja`,
      img: surya,
      about: `I am a passionate upcoming software engineer. And I am very enthusiast about MERN Stack and I love developing virtual stuff using MERN Stack.`,
      linkedInUrl:`https://www.linkedin.com/in/lakshmi-surya-teja-8b0124247/`,
      githubUrl:`https://github.com/k-surya-teja`,
      instagramUrl:`https://instagram.com/nombre_es_surya`,
      twitterUrl:`https://twitter.com/klsteja`,
      whatsappUrl:`https://wa.me/916309639490`,
    },
    {
      name: `B Pradeep`,
      img: pradeep,
      about: `I am a passionate upcoming software engineer. And I am very enthusiast about MERN Stack and I love developing virtual stuff using MERN Stack.`,
      linkedInUrl:`https://www.linkedin.com/in/pradeep-bandakati-53b4b21b2/`,
      githubUrl:``,
      instagramUrl:`https://www.instagram.com/premsagar_1432/`,
      twitterUrl:``,
      whatsappUrl:`https://wa.me/916303654787`,
    },
    
    {
      name: `B Lakshmi Narayana`,
      img: lakshman,
      about: `I am a passionate upcoming software engineer. And I am very enthusiast about MERN Stack and I love developing virtual stuff using MERN Stack.`,
      linkedInUrl:`https://www.linkedin.com/in/borigorla-lakshminarayana-156887261/`,
      githubUrl:``,
      instagramUrl:`https://www.instagram.com/lakshman8234/`,
      twitterUrl:``,
      whatsappUrl:`https://wa.me/918688775728`,
    },
    {
      name: `Y Venkata Sekhar`,
      img: sekhar,
      about: `I am a passionate upcoming software engineer. And I am very enthusiast about MERN Stack and I love developing virtual stuff using MERN Stack.`,
      linkedInUrl:`https://www.linkedin.com/in/venkat-yadav-9a6aa51b5/`,
      githubUrl:``,
      instagramUrl:`https://www.instagram.com/venkat_123_yadav`,
      twitterUrl:``,
      whatsappUrl:`https://wa.me/916303258639`,
    },
    {
      name: `K V Harinath Reddy`,
      img: hari,
      about: `I am a passionate upcoming software engineer. And I am very enthusiast about MERN Stack and I love developing virtual stuff using MERN Stack.`,
      linkedInUrl:`https://www.linkedin.com/in/konkala-venkata-harinath-reddy-4aa443236/`,
      githubUrl:``,
      instagramUrl:`https://www.instagram.com/harinathreddy_konkala/`,
      twitterUrl:``,
      whatsappUrl:`https://wa.me/919177339968`,
    },
    
    
  ]

  return (
    <div className="container align-items-center justify-content-center">
    <div className="w-3/4 m-auto">
    <div className="mt-20">
      <SliderJS {...settings}>
        {data.map((d) => (
              <Card sx={{ maxWidth: 350 , textAlign:'center',backgroundColor:'#FFF1E6'}}>
                <Box sx={{paddingLeft:10,paddingTop:3}}>
              <CardMedia
                component="img"
                sx={{
                  border:'1px solid white',
                  borderRadius:'50%',
                  boxShadow:"0px 2px 4px black",
                  height:'180px',
                  width:'180px',
                  justifyContent:'center'
                }}
                image = {d.img}
                alt="Paella dish"
              />
              </Box>
              <CardContent>
                <Typography variant="h5" sx={{textAlign:'center'}}>{d.name}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {d.about}
                </Typography>
              </CardContent>
              <div className="container-fluid">
              <hr />
              <Typography sx={{fontSize:{xs:'15px',md:'15px'},color:'grey'}}>Connect with me : </Typography>
              <CardActions disableSpacing sx={{justifyContent:'center'}}>
                <IconButton aria-label="github" onClick={()=> window.open(`${d.githubUrl}`,'_blank')}>
                  <GitHubIcon />
                </IconButton>
                <IconButton aria-label="instagram" onClick={()=> window.open(`${d.instagramUrl}`,'_blank')}>
                  <InstagramIcon />
                </IconButton>
                <IconButton aria-label="whatsapp" onClick={()=> window.open(`${d.whatsappUrl}`,'_blank')}>
                  <WhatsAppIcon />
                </IconButton>
                <IconButton aria-label="twitter" onClick={()=> window.open(`${d.twitterUrl}`,'_blank')}>
                  <TwitterIcon />
                </IconButton>
                <IconButton aria-label="linkedin" onClick={()=> window.open(`${d.linkedInUrl}`,'_blank')}>
                  <LinkedInIcon />
                </IconButton>
              </CardActions>
              </div>
            </Card>
))}
      </SliderJS>
    </div>
  </div>
  </div>
      
  );
}

export default Slider;