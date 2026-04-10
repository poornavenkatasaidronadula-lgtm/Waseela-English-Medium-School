import { Helmet } from 'react-helmet-async';

export default function SEO({ title, description, keywords, url }) {
  const siteName = "Waseela English Medium School";
  const defaultDesc = "Waseela English Medium School in Anantapur offers quality education from Nursery to 10th Class. AC classrooms, Digital Panel Boards, expert educators & affordable fees.";
  const defaultKeywords = "Waseela English Medium School, Waseela school Anantapur, best school Anantapur, English medium school Anantapur, nursery to 10th Anantapur, KVS Nagar school";
  const fullTitle = title ? `${title} | ${siteName}` : `${siteName} | Nursery to 10th Class | Anantapur`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description || defaultDesc} />
      {keywords && <meta name="keywords" content={keywords || defaultKeywords} />}
      
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description || defaultDesc} />
      {url && <meta property="og:url" content={`https://waseelaenglishmediumschool.com${url}`} />}
      <meta property="og:site_name" content={siteName} />

      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description || defaultDesc} />
      
      {url && <link rel="canonical" href={`https://waseelaenglishmediumschool.com${url}`} />}
    </Helmet>
  );
}
