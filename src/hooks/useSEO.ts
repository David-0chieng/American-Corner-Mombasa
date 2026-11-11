import { useEffect } from 'react';
import { updateSEO, generateStructuredData, organizationStructuredData, articleStructuredData, jobPostingStructuredData } from '../utils/seo';

interface UseSEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'profile';
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
  locale?: string;
  siteName?: string;
  twitterCard?: 'summary' | 'summary_large_image' | 'app' | 'player';
  twitterSite?: string;
  twitterCreator?: string;
  canonical?: string;
  noindex?: boolean;
  nofollow?: boolean;
  structuredData?: object;
}

export const useSEO = (props: UseSEOProps = {}) => {
  useEffect(() => {
    // Update SEO meta tags
    updateSEO(props);

    // Add structured data if provided
    if (props.structuredData) {
      generateStructuredData(props.structuredData);
    } else if (props.type === 'article') {
      // Default article structured data
      generateStructuredData(articleStructuredData({
        title: props.title || 'Reserved — awaits confirmation',
        description: props.description || 'Empowering youth through technology, arts, and entrepreneurship.',
        publishedTime: props.publishedTime || new Date().toISOString(),
        modifiedTime: props.modifiedTime || new Date().toISOString(),
        author: props.author || 'Reserved — awaits confirmation',
        image: props.image || '/media/og/american-corner-mombasa.png',
        url: props.url || window.location.href
      }));
    } else {
      // Default organization structured data
      generateStructuredData(organizationStructuredData);
    }
  }, [props]);
};

// Specific hooks for different page types
export const useHomePageSEO = () => {
  useSEO({
    title: 'Reserved — awaits confirmation - Empowering Youth Through Technology & Arts',
    description: 'Empowering youth through technology, arts, and entrepreneurship across the coastal region of Kenya. Join our programs and be part of the change.',
    keywords: 'youth empowerment, technology training, arts programs, entrepreneurship, Kenya, Mombasa, coastal region, Reserved — awaits confirmation, youth development',
    image: '/media/og/american-corner-mombasa.png',
    url: window.location.href,
    type: 'website'
  });
};

export const useProgramsPageSEO = () => {
  useSEO({
    title: 'Our Programs - Reserved — awaits confirmation',
    description: 'Discover our comprehensive programs in technology, arts, and entrepreneurship designed to empower youth across Kenya.',
    keywords: 'youth programs, technology training, arts education, entrepreneurship programs, Kenya youth development',
    image: '/media/og/american-corner-mombasa.png',
    url: window.location.href,
    type: 'website'
  });
};

export const useTORPageSEO = () => {
  useSEO({
    title: 'Terms of Reference - Vijana2Thrive Consultancy Opportunity',
    description: 'Join our consultancy for Gender-Responsive Ecosystem Mapping, GESI Analysis, and Inclusive Entrepreneurship Assessment across Mombasa, Kilifi, Kitui, and Nairobi counties.',
    keywords: 'consultancy opportunity, ecosystem mapping, GESI analysis, entrepreneurship assessment, Kenya counties, youth employment, gender equality',
    image: '/media/og/american-corner-mombasa.png',
    url: window.location.href,
    type: 'website'
  });
};

export const useVijana2ThriveSEO = () => {
  useSEO({
    title: 'Vijana2Thrive Consultancy - Gender-Responsive Ecosystem Mapping',
    description: 'Apply for our 10-week consultancy position focusing on Gender-Responsive Ecosystem Mapping, GESI Analysis, and Inclusive Entrepreneurship Assessment. Deadline: September 17, 2025.',
    keywords: 'consultancy job, ecosystem mapping, GESI analysis, entrepreneurship assessment, Kenya, Mombasa, Kilifi, Kitui, Nairobi, youth employment, gender equality, Mastercard Foundation',
    image: '/media/og/american-corner-mombasa.png',
    url: window.location.href,
    type: 'article',
    publishedTime: '2025-09-09T00:00:00Z',
    modifiedTime: new Date().toISOString(),
    author: 'Reserved — awaits confirmation',
    section: 'Consultancy Opportunities',
    tags: ['consultancy', 'ecosystem mapping', 'GESI analysis', 'entrepreneurship', 'youth employment', 'gender equality'],
    structuredData: jobPostingStructuredData({
      title: 'Consultancy for Gender-Responsive Ecosystem Mapping, GESI Analysis, and Inclusive Entrepreneurship Assessment',
      description: 'Join our consultancy for Gender-Responsive Ecosystem Mapping, GESI Analysis, and Inclusive Entrepreneurship Assessment across Mombasa, Kilifi, Kitui, and Nairobi counties.',
      datePosted: '2025-09-09T00:00:00Z',
      validThrough: '2025-09-17T23:59:59Z',
      employmentType: 'CONTRACTOR',
      hiringOrganization: 'Reserved — awaits confirmation',
      jobLocation: 'Mombasa, Kilifi, Kitui, and Nairobi Counties, Kenya'
    })
  });
};

export const useAboutPageSEO = () => {
  useSEO({
    title: 'About Us - Reserved — awaits confirmation',
    description: 'Learn about Reserved — awaits confirmation\'s mission to empower youth through technology, arts, and entrepreneurship in Kenya.',
    keywords: 'about us, Reserved — awaits confirmation, youth empowerment, Kenya, Mombasa, mission, vision, team',
    image: '/media/og/american-corner-mombasa.png',
    url: window.location.href,
    type: 'website'
  });
};

export const useContactPageSEO = () => {
  useSEO({
    title: 'Contact Us - American Corner Mombasa',
    description: 'Contact American Corner Mombasa at the MEWA Information Center in Majengo.',
    keywords: 'American Corner Mombasa, contact, MEWA, Majengo',
    image: '/images/american-spaces-logo.png',
    url: window.location.href,
    type: 'website'
  });
};
