import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './index.scss';

export const FAQs = () => {
  const [questionArr, setQuestionArr] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://safegoldassignment-default-rtdb.firebaseio.com/faqQuestions.json'
        );
        const data = response.data;
        const productArray = Object.keys(data).map((key) => ({
          id: key,
          ...data[key],
        }));

        setQuestionArr(productArray);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="FAQWrapper">
      <div className="FAQtitleWrap">
        <h5 className="FAQTitle">Frequently Asked Questions</h5>
      </div>
      <div className="questionWrapper">
        {questionArr?.map((item, index) => {
          return (
            <div className="questionHead" key={index}>
              <Accordion sx={{ boxShadow: 'none', border: 'none' }}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  {item.questionTitle}
                </AccordionSummary>
                <AccordionDetails>{item.answer}</AccordionDetails>
              </Accordion>
            </div>
          );
        })}
      </div>
    </div>
  );
};
