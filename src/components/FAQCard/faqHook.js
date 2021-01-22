import React, { useState,useEffect } from 'react';


const useFaqs = () => {

  const [faqs, setFaqs] = useState([]);

  useEffect(() => {
    const fetchFaqs = async function () {
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
