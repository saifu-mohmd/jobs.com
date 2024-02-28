import Header from "./Header";
import BannerSection from "./BannerSection";
import ChooseYourJob from "./ChooseYourJob";
import FeaturedJobs from "./FeaturedJobs";
import PopularCompanies from "./PopularCompanies";
import ActivelyHiring from "./ActivelyHiring";
import HiringCard from "./HiringCard";
import OurUsersSays from "./OurUsersSays";
import Footer from "./Footer";
import WebsiteStatistics from "./WebsiteStatistics";
import JobTypeButton from "./JobTypeButton";
import { Container, Row } from "react-bootstrap";
import Jobcard from "./Jobcard";
import CompaniesCard from "./CompaniesCard";
import Testimonial from "./Testimonial";
import SeeMoreButton from "./SeeMoreButton";
import LogInPage from "./LogInPage";
import { Route, Routes } from "react-router-dom";
import Search from "./Search";

function App(props) {
  const jobTypeData = [
    {
      id: "1",
      jobType: "Remote",
      jobTypeSymbol: "Image/remote.png",
      jobTypeRightArrow: "Image/right-arrow.png",
    },
    {
      id: "2",
      jobType: "MNC",
      jobTypeSymbol: "Image/mnc.png",
      jobTypeRightArrow: "Image/right-arrow.png",
    },
    {
      id: "3",
      jobType: "Analytics",
      jobTypeSymbol: "Image/analytics.png",
      jobTypeRightArrow: "Image/right-arrow.png",
    },
    {
      id: "4",
      jobType: "Fortune",
      jobTypeSymbol: "Image/fortune.png",
      jobTypeRightArrow: "Image/right-arrow.png",
    },
    {
      id: "5",
      jobType: "WFH",
      jobTypeSymbol: "Image/temp.png",
      jobTypeRightArrow: "Image/right-arrow.png",
    },
    {
      id: "6",
      jobType: "Supply Ch.",
      jobTypeSymbol: "Image/supply-Chain.png",
      jobTypeRightArrow: "Image/right-arrow.png",
    },
    {
      id: "7",
      jobType: "Sales",
      jobTypeSymbol: "Image/sales.png",
      jobTypeRightArrow: "Image/right-arrow.png",
    },
    {
      id: "8",
      jobType: "Banking",
      jobTypeSymbol: "Image/banking.png",
      jobTypeRightArrow: "Image/right-arrow.png",
    },
    {
      id: "9",
      jobType: "Softwares",
      jobTypeSymbol: "Image/software.png",
      jobTypeRightArrow: "Image/right-arrow.png",
    },
    {
      id: "10",
      jobType: "Marketing",
      jobTypeSymbol: "Image/marketing.png",
      jobTypeRightArrow: "Image/right-arrow.png",
    },
    {
      id: "11",
      jobType: "Data Sci...",
      jobTypeSymbol: "Image/data-science.png",
      jobTypeRightArrow: "Image/right-arrow.png",
    },
    {
      id: "12",
      jobType: "Fresher",
      jobTypeSymbol: "Image/fresher.png",
      jobTypeRightArrow: "Image/right-arrow.png",
    },
  ];

  const jobCard = [
    {
      id: "1",
      jobTypeLogo: "Image/Window cleaning.png",
      jobType: "Domestic Window Cleaning",
      jobContent:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking reader will be distracted",
    },
    {
      id: "2",
      jobTypeLogo: "Image/Commercial window cleaning.png",
      jobType: "Commercial Window Cleaning",
      jobContent:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking reader will be distracted",
    },
    {
      id: "3",
      jobTypeLogo: "Image/Office window cleaning.png",
      jobType: "Office Window Cleaning",
      jobContent:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking reader will be distracted",
    },
  ];

  const companiesCardData = [
    {
      id: "1",
      companyCardLogo: "Image/apple.png",
      companyCardTitle: "Apple",
      companyCardDesignation: "Hardware Engineer",
      ratingCard: "4.2 | 408 Reviews",
      experienceDescriptionCard: "5-8 Years experience",
      locationDescriptionCard: "New York, USA",
      appoinmentDescriptionCard: "Hybrid (Applicable only at urgent times)",
      salaryDescriptionCard: "94,000 P.A",
      jobDescriptionCard: "Job Description",
      jobPosted: "Posted: 1 day ago",
      jobApplicants: "- Job applicant: 56",
    },
    {
      id: "2",
      companyCardLogo: "Image/google.png",
      companyCardTitle: "Google",
      companyCardDesignation: "Web Developer",
      ratingCard: "4.0 | 712 Reviews",
      experienceDescriptionCard: "5-8 Years experience",
      locationDescriptionCard: "Berlin, Germany",
      appoinmentDescriptionCard: "Hybrid (Applicable only at urgent times)",
      salaryDescriptionCard: "102,000 P.A",
      jobDescriptionCard: "Job Description",
      jobPosted: "Posted: 3 day ago",
      jobApplicants: "- Job applicant: 92",
    },
    {
      id: "3",
      companyCardLogo: "Image/amazon.png",
      companyCardTitle: "Amazon",
      companyCardDesignation: "Data Engineer",
      ratingCard: "3.8 | 1112 Reviews",
      experienceDescriptionCard: "4-7 Years experience",
      locationDescriptionCard: "Seattle, Washington, USA",
      appoinmentDescriptionCard: "Hybrid (Applicable only at urgent times)",
      salaryDescriptionCard: "120,000 P.A",
      jobDescriptionCard: "Job Description",
      jobPosted: "Posted: 5 day ago",
      jobApplicants: "- Job applicant: 115",
    },
    {
      id: "4",
      companyCardLogo: "Image/flipkart.png",
      companyCardTitle: "Flipkart",
      companyCardDesignation: "Manager - Central",
      ratingCard: "3.5 | 142 Reviews",
      experienceDescriptionCard: "2-4 Years experience",
      locationDescriptionCard: "Bangalore, India",
      appoinmentDescriptionCard: "Hybrid (Applicable only at urgent times)",
      salaryDescriptionCard: "94,000 P.A",
      jobDescriptionCard: "Job Description",
      jobPosted: "Posted: 3 day ago",
      jobApplicants: "- Job applicant: 78",
    },
    {
      id: "5",
      companyCardLogo: "Image/microsoft.png",
      companyCardTitle: "Microsoft",
      companyCardDesignation: "Security Analyst",
      ratingCard: "4.1 | 427 Reviews",
      experienceDescriptionCard: "5-8 Years experience",
      locationDescriptionCard: "Bellevue, Washington",
      appoinmentDescriptionCard: "Hybrid (Applicable only at urgent times)",
      salaryDescriptionCard: "31,410 P.A",
      jobDescriptionCard: "Job Description",
      jobPosted: "Posted: 5 day ago",
      jobApplicants: "- Job applicant: 94",
    },
    {
      id: "6",
      companyCardLogo: "Image/paypal.png",
      companyCardTitle: "Paypal",
      companyCardDesignation: "Android Developer",
      ratingCard: "3.2 | 205 Reviews",
      experienceDescriptionCard: "2-4 Years experience",
      locationDescriptionCard: "New York, USA",
      appoinmentDescriptionCard: "Hybrid (Applicable only at urgent times)",
      salaryDescriptionCard: "94,000 P.A",
      jobDescriptionCard: "Job Description",
      jobPosted: "Posted: 6 day ago",
      jobApplicants: "- Job applicant: 75",
    },
  ];

  const hiringCardData = [
    {
      id: "1",
      cardLogo: "Image/Marketing-logo.png",
      jobType: "Marketing",
      jobTitle: "Marketing Executive",
      rating: "4.0",
      reviews: "105 Reviews",
      experience: "5-8 Years experience",
      location: "New York, USA",
      appoinment: "Hybrid (Applicable only at urgent times)",
      salary: "94,000 P.A",
      jobPosted: "Posted: 1 day ago",
      jobApplicants: "- Job applicant: 56",
    },

    {
      id: "2",
      cardLogo: "Image/Advertising-logo.png",
      jobType: "Advertising",
      jobTitle: "Graphic Designer",
      rating: "3.8",
      reviews: "201 Reviews",
      experience: "2-4 Years experience",
      location: "Texas, USA",
      appoinment: "Hybrid (Applicable only at urgent times)",
      salary: "72,000 P.A",
      jobPosted: "Posted: 2 day ago",
      jobApplicants: "- Job applicant: 96",
    },

    {
      id: "3",
      cardLogo: "Image/IT-logo.png",
      jobType: "IT",
      jobTitle: "Cloud Engineering",
      rating: "4.6",
      reviews: "326 Reviews",
      experience: "0-3 Years experience",
      location: "New York, USA",
      appoinment: "Hybrid (Applicable only at urgent times)",
      salary: "84,000 P.A",
      jobPosted: "Posted: 2 day ago",
      jobApplicants: "- Job applicant: 83",
    },
  ];

  const testimonialCard = [
    {
      id: "1",
      image: "Image/TestimonialImg1.png",
      name: "Katherin",
      profession: "Web Developer",
      rating: "4.3",
      quotes:
        "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software lAldus PageIt was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently.",
    },
    {
      id: "2",
      image: "Image/TestimonialImg2.png",
      name: "Maria",
      profession: "UI/UX Designer",
      rating: "4.3",
      quotes:
        "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software lAldus PageIt was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently.",
    },
    {
      id: "3",
      image: "Image/TestimonialImg3.png",
      name: "John",
      profession: "Software Engineer",
      rating: "4.3",
      quotes:
        "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software lAldus PageIt was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently.",
    },
  ];

  return (
    <>
      <Header />
    
    <Routes>
      <Route path="loginpage" element={<LogInPage/>}/>
    </Routes>

      <BannerSection />
      <ChooseYourJob/>
      <Search/>

      {/* ----------------------------------------- */}

      <Container className="pb-2">
        <Row className="mb-5 mt-3">
          {jobTypeData.map((jobData) => (
            <JobTypeButton key={jobData.id}
              jobTitle={jobData.jobType}
              jobTypeLogo={jobData.jobTypeSymbol}
            />
          ))}
        </Row>
      </Container>

      {/* -------------------------------------------- */}

      <FeaturedJobs />

      {/* --------------------------------- */}

      <Container fluid className="body">
        <Row className="gx-5 my-4">
          {jobCard.map((jobCardData) => (
            <Jobcard
              key={jobCardData.id}
              jobCardLogo={jobCardData.jobTypeLogo}
              jobCardTitle={jobCardData.jobType}
              jobCardContent={jobCardData.jobContent}
            />
          ))}
        </Row>
      </Container>

      {/* ------------------------------------- */}

      <WebsiteStatistics />
      <PopularCompanies />

      {/* ---------------------------------------- */}

      <Container fluid className="body">
        <Row className="gy-4 mb-5 d-flex justify-content-sm-center" >
          {companiesCardData.map((companiesCard) => (
            <CompaniesCard
            key={companiesCard.id}
              companiesCardLogo={companiesCard.companyCardLogo}
              companiesCardTitle={companiesCard.companyCardTitle}
              companiesCardDesignation={companiesCard.companyCardDesignation}
              companiesRatingCard={companiesCard.ratingCard}
              companiesExperienceDescriptionCard={
                companiesCard.experienceDescriptionCard
              }
              companiesLocationLogoCard={companiesCard.locationLogoCard}
              companiesLocationDescriptionCard={
                companiesCard.locationDescriptionCard
              }
              companiesAppoinmentDescriptionCard={
                companiesCard.appoinmentDescriptionCard
              }
              companiesSalaryDescriptionCard={
                companiesCard.salaryDescriptionCard
              }
              companiesJobDescriptionCard={companiesCard.jobDescriptionCard}
              companiesJobPosted={companiesCard.jobPosted}
              companiesJobApplicants={companiesCard.jobApplicants}
            />
          ))}
        </Row>
      </Container>
      <SeeMoreButton />

      {/* --------------------------------------------- */}
      <ActivelyHiring />

      <Container fluid className="body">
        <Row className="d-flex justify-content-sm-center">
          {hiringCardData.map((hiringData) => (
            <HiringCard
            key={hiringData.id}
              hiringCardLogo={hiringData.cardLogo}
              hiringJobType={hiringData.jobType}
              hiringJobTitle={hiringData.jobTitle}
              hiringExperience={hiringData.experience}
              hiringLocation={hiringData.location}
              hiringAppoinment={hiringData.appoinment}
              hiringSalary={hiringData.salary}
              hiringJobPosted={hiringData.jobPosted}
              hiringJobApplicants={hiringData.jobApplicants}
            />
          ))}
        </Row>
      </Container>
      <SeeMoreButton />

      <OurUsersSays />
      <Container fluid className="body">
        <Row className="gx-5 d-flex justify-content-center">
          {testimonialCard.map((testimonial) => (
            <Testimonial
              key={testimonial.id}
              name={testimonial.name}
              profession={testimonial.profession}
              rating={testimonial.rating}
              quotes={testimonial.quotes}
              image={testimonial.image}
            />
          ))}
        </Row>
      </Container>
      <SeeMoreButton />
      

      

      <Footer />
    </>
  );
}

export default App;
