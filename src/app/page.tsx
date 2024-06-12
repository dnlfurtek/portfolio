"use client";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import PersonIcon from "@mui/icons-material/Person";
import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";
import MailIcon from "@mui/icons-material/Mail";
import Pagination from "@mui/material/Pagination";
import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import Link from "@mui/material/Link";

const Bio = () => (
  <div className="articleContent">
    <Typography variant="h3" className="articleHeader honk-font">
      Bio
    </Typography>
    <Typography className="fira-code-font">
      18 Years Old High School Student from Poland.
    </Typography>
  </div>
);

const Career = () => (
  <div className="articleContent">
    <Typography variant="h3" className="articleHeader honk-font">
      Career
    </Typography>
    <Timeline position="alternate">
      <TimelineItem>
        <TimelineOppositeContent color="text.secondary">
          October 2022
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          Internship in Modern Forms, Dobrzechów
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent color="text.secondary">
          June 2024
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>Resumed Internship in Modern Forms</TimelineContent>
      </TimelineItem>
    </Timeline>
    <center>
      <p color="text.secondary">
        <i>To be continued...</i>
      </p>
    </center>
  </div>
);

const Education = () => (
  <div className="articleContent">
    <Typography variant="h3" className="articleHeader honk-font">
      Education
    </Typography>
    <Timeline position="alternate">
      <TimelineItem>
        <TimelineOppositeContent color="text.secondary">
          2012 / 2020
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          Elementary School in Szufnarowa, Poland
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent color="text.secondary">
          2020 / 2025
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          Technical and General Education School Complex in Strzyżów
        </TimelineContent>
      </TimelineItem>
    </Timeline>
    <center>
      <p color="text.secondary">
        <i>To be continued...</i>
      </p>
    </center>
  </div>
);

const Contact = () => (
  <div className="articleContent">
    <Typography variant="h3" className="articleHeader honk-font">
      Contact
    </Typography>
    <Typography className="fira-code-font" fontSize={15} mt={0}>
      <div className="contact">
        <ContactMailIcon />{" "}
        <Link href="mailto: dnlfurtek@gmail.com" underline="hover">
          dnlfurtek@gmail.com
        </Link>
      </div>
    </Typography>
    <Typography className="fira-code-font" fontSize={15} mt={0}>
      <div className="contact">
        <ContactPhoneIcon /> <p>(+48) 667-727-811</p>
      </div>
    </Typography>
  </div>
);

// Main component
export default function Home() {
  const [currentPage, setPage] = React.useState(1);

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  // Determine which component to render based on currentPage
  const renderContent = () => {
    switch (currentPage) {
      case 1:
        return <Bio />;
      case 2:
        return <Career />;
      case 3:
        return <Education />;
      case 4:
        return <Contact />;
      default:
        return <Bio />;
    }
  };

  return (
    <div className="container">
      <div className="nav">
        <Button variant="contained" className="socialButton">
          <GitHubIcon className="socialIcon" />
        </Button>
        <Button variant="contained" className="socialButton">
          <LinkedInIcon className="socialIcon" />
        </Button>
        <Button variant="contained" className="socialButton">
          <XIcon className="socialIcon" />
        </Button>
        <Button variant="contained" className="socialButton">
          <FacebookIcon className="socialIcon" />
        </Button>
      </div>
      <div className="main">
        <Avatar
          className="avatar"
          alt="Daniel Furtek"
          src="https://i.pinimg.com/originals/2a/99/b1/2a99b169e671e83cee44c22b206b191d.png"
        />
        <div className="description">
          <Typography>
            <b>Daniel Furtek</b>
            <Divider />
            Aspiring Software Developer
          </Typography>
        </div>
      </div>
      <div className="article">
        {renderContent()}
        <Pagination
          className="pagination"
          count={4}
          page={currentPage}
          onChange={handleChange}
        />
      </div>
      <div className="footer">
        <Button
          variant="contained"
          className="footButton"
          onClick={() => setPage(1)}
        >
          <PersonIcon className="footIcon" />
        </Button>
        <Button
          variant="contained"
          className="footButton"
          onClick={() => setPage(2)}
        >
          <WorkIcon className="footIcon" />
        </Button>
        <Button
          variant="contained"
          className="footButton"
          onClick={() => setPage(3)}
        >
          <SchoolIcon className="footIcon" />
        </Button>
        <Button
          variant="contained"
          className="footButton"
          onClick={() => setPage(4)}
        >
          <MailIcon className="footIcon" />
        </Button>
      </div>
    </div>
  );
}
