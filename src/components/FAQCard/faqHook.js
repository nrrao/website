import React, { useState,useEffect } from 'react';
import { ContactSupportOutlined } from '@material-ui/icons';

const useFaqs = () => {
 
  const [faqs, setFaqs] = useState([]);

  useEffect(() => {
    async function fetchFaqs() {
      const fullResponse = await fetch('http://test-civictechindexadmin.herokuapp.com/api/faqs/');
      const responseJson = await fullResponse.json();
      console.log(responseJson)
      setFaqs(responseJson);
    }

    fetchFaqs();
  }, []);

  return [faqs];
};

export default useFaqs;