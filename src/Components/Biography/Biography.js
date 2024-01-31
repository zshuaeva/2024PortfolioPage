import React from "react";
// import Box from '@mui/material/Box';
import './Biography.css'
import { Typography, Box } from "@mui/material";

const Biography = () => {
  return(
    <Box className="biography-container">
      <Box className="biography-header">
        <header>About Me</header>
        </Box>
      <Typography>I'm equipped with a diverse technical toolkit that includes JavaScript, Python, React, Django, RESTful APIs, FastAPI, SQL, and Docker. My past in operations has honed a robust work ethic in me, a tenacious problem-solving mindset, and an attention to efficiency and precision, rendering me a versatile player in any team.</Typography>

      <p>After a rewarding career in retail banking, I've recently undergone a transformative journey through Hack Reactor's advanced software engineering program. Now, I stand at the intersection of my past experience and newfound technical proficiency, ready to embrace new challenges in the tech industry.</p>

      <p>In addition to my skills and experience, I bring a collaborative ethos to the table. I flourish in team environments, perpetually ready to exchange knowledge, learn from my peers, and unite to tackle challenges.</p>

      <p>I'm currently seeking new opportunities, eager to harness my skills and mindset to a role where I can sculpt impactful digital solutions. I'm committed to continuous learning, staying abreast of the latest tech trends, and contributing to open-source projects. My hobby of photography not only fuels my creative spirit but also sharpens my eye for detail, both of which I intend to integrate into my tech endeavors.</p>

      <p>Looking forward, I am excited to engage in meaningful collaborations, and to use my skills and creativity to generate innovative solutions in my next role. I am here to make a difference, one line of code and one snapshot at a time.</p>
    </Box>
  )
};

export default Biography;
