/* eslint-disable sort-keys */
import React  from "react";
import "../styles.css";

import {
  Footer,
  GetStartedCard,
  Header,
  NavBreadcrumbs,
  TitleSection,
} from "../components";
import { Container } from "@material-ui/core";
import useSearchFaq  from '../components/UseFetch'
import FAQCard from '../components/FAQCard'
import SearchBar from '../components/SearchBar'

export const FaqSearchContext = React.createContext()


// eslint-disable-next-line max-lines-per-function
export default function SearchFaq({ match }) {
  const radicalcollaboration = match.params.radicalcollaboration

  const crumbs = [
    { name: "Home", href: "/home" },
    { name: "Radical Collaboration", href: "/radicalcollaboration" },
    { name: "FAQ", href: "radicalcollaboration/faq" },
  ];

  /*
   * const [query, setQuery] = useState('');
   * const searchUrl = query && `http://test-civictechindexadmin.herokuapp.com/api/faqs/?search=${query}`;
   */
  const { query,status, data,dispatch } = useSearchFaq();
  // const faqs = data




  return (
    <FaqSearchContext.Provider value={{ query,status, data ,dispatch }}>
      <>
        <Header />
        <div className='default-background' style={{ paddingBottom: '80px',width: '100vw' }} >
          <Container>
            <NavBreadcrumbs crumbs={crumbs} color="#FEFEFE" />
            <TitleSection title={"How can we help?"} />
            <SearchBar placeholder={"Search the knowledge base"} />
          </Container>
        </div>
        {status === 'fetchedFaq' && <FAQCard title={"Frequently Asked Questions:"}/>}
        {status === 'fetched' && (
          <>
            {data.length === 0 && <div> No Search Results found!</div>}
            {<FAQCard title={`Search results for ${query}`}/>}
          </>
        )}
        <GetStartedCard headerTitle="Can’t find an answer?" buttonText="Contact Us" buttonHref="/contactus" />

        <Footer />
      </>
    </FaqSearchContext.Provider>
  );
}


