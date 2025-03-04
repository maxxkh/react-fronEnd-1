import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const data = [
     {
        id: 1,
        title: 'Proven Track Record',
        description: 'With over 80 successful projects delivered, our product, UX/UI, and software development teams consistently turn ideas into impactful digital solutions. Our experience and expertise ensure that your project is not just completed but exceeds expectations, driving real results for your business.',
    },
    {
        id: 2,
        title: 'Transparent Communication',
        description: 'We believe that transparency is key to a successful partnership. Our team is committed to keeping you informed at every stage of the project, ensuring that you are always up to date on progress, timelines, and any potential issues that may arise.',
     },
    {
        id: 3,
        title: 'Agile Development',
        description: 'We follow an agile development methodology that allows us to deliver high-quality products quickly and efficiently. Our team works in short, iterative cycles, ensuring that we can adapt to changing requirements and deliver a product that meets your needs.',
    },
    {
        id: 4,
        title: 'Dedicated Team',
        description: 'When you work with Altar.io, you get a dedicated team of experts who are committed to your project. Our team is made up of product managers, designers, developers, and QA engineers who work together to deliver a product that meets your needs and exceeds your expectations.',
    },  
    {
        id: 5,
        title: 'Proven Track Record',
        description: 'With over 80 successful projects delivered, our product, UX/UI, and software development teams consistently turn ideas into impactful digital solutions. Our experience and expertise ensure that your project is not just completed but exceeds expectations, driving real results for your business.',
    },
    {
        id: 6,
        title: 'Transparent Communication',
        description: 'We believe that transparency is key to a successful partnership. Our team is committed to keeping you informed at every stage of the project, ensuring that you are always up to date on progress, timelines, and any potential issues that may arise.',
     },
    
]


export default function AccordionUsage() {
  return (
    <div>
        {data.map((item) => (
            <Accordion key={item.id}>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
                >
                <Typography component="span"><span  className='font-semibold text-xl'>{item.title}</span> </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <span  className=' text-[17px] text-gray-700'>
                    {item.description}
                    </span>
                </AccordionDetails>
            </Accordion>
        ))}
   
      
    </div>
  );
}