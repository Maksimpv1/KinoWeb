import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

import Arrow from './img/arrow.png'
import { AccordsTitle, AccordsTittle, MainContainer, MainWrapper, SpaceLine } from "./mainBlockStyles"
import { QuestionData } from './mainQuestionData';

export const MainQuestions = ()=>{
    const [Expanded, setExpanded] = React.useState<number | false>(false);

    const handleChange =
    (panel: number) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };
    return(
        <MainContainer>
            <AccordsTitle>Common Questions</AccordsTitle>            
            <MainWrapper  Accords={true}>
            {QuestionData.map((item)=>(
                    <Accordion expanded={Expanded === item.id} onChange={handleChange(item.id)} key={item.id} style={{ 
                        background:'#2D2D2D',
                        color:'#FFFFFF',
                        padding:'0px',
                        marginBottom:'10px',
                        width:'100%',
                    }} >
                        <AccordsTittle
                        expandIcon={<img src={Arrow} style={{ width:'30px' }}/>}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        style={{ borderBottom:'black 1px solid',
                        height:'100px', }}
                        >
                        <Typography style={{ 
                            fontSize:'24px',
                        }}>
                            {item.title}
                        </Typography>
                        </AccordsTittle>
                        <AccordionDetails>
                        <Typography style={{ fontSize:'20px' }}>
                            {item.discription}
                        </Typography>
                        </AccordionDetails>
                    </Accordion>
            ))}
            </MainWrapper>
            <SpaceLine></SpaceLine>            
        </MainContainer>
    )
}