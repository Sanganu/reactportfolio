import React from "react";
import {Container} from "react-bootstrap";

const Resume = () => {
    return(<main className="main-content">
    <h3 className="text-center page-header">Resume</h3>
    <Container>
    <iframe title="resume" className="m-3 p-3" src="/resource/ResumeTemplate.pdf" 
    width="740" height="947" frameBorder="5" marginHeight="2" marginWwidth="4">
    Loading...</iframe>
    </Container>
    </main>)
}

export default Resume;
