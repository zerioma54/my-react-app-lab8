import React from "react";

function About() {
    return (
        <div className="container mt-5">
            <h1>About Me</h1>
            <p className="lead">I'm a Computer Science student at Dalhousie University, passionate about web development and problem-solving.</p>
      
            <h3 className="mt-4 text-secondary">Education</h3>
            <p>I am currently pursuing a Bachelor of Computer Science at Dalhousie University, where I have gained a strong foundation in software development, data structures, and algorithms. My coursework has given me experience in problem-solving, application development, and optimizing system performance.</p>
            <p>Some of the relevant courses I have taken include:</p>
            <ul className="list-group">
                <li className="list-group-item">Software Development</li>
                <li className="list-group-item">Data Structures & Algorithms</li>
                <li className="list-group-item">Database Systems</li>
                <li className="list-group-item">Web-Centric Computing</li>
            </ul>

            <h3 className="mt-4 text-secondary">Technical Skills</h3>
            <ul className="list-group">
                <li className="list-group-item"><strong>Frontend:</strong> JavaScript (ES6), React.js, HTML5, CSS3, Bootstrap</li>
                <li className="list-group-item"><strong>Backend:</strong> Node.js, SQL</li>
                <li className="list-group-item"><strong>Development Tools:</strong> Git, GitHub, Agile Development, API Integration</li>
                <li className="list-group-item"><strong>Problem-Solving:</strong> Data Structures, Algorithms, Performance Optimization</li>
            </ul>

            <h3 className="mt-4 text-secondary">Career Goals</h3>
            <p>My goal is to become a full-stack web developer and a creative content creator, working on projects that are both innovative and impactful. I enjoy designing and developing accessible, high-performance applications while constantly learning new technologies.</p>

            <h3 className="mt-4 text-secondary">Experience</h3>
            <p>I have worked on full-stack web apps that combine front-end and back-end technologies. Through the development of interactive websites, course information platforms, and client-driven projects, I have honed my abilities in database administration, user experience (UX) design, and API integration. One of my major tasks was to improve a client's chess website. I worked with a team to add new features, address issues, and improve functionality in general.</p>
            <p>Additionally, I have experience working on data-driven projects that optimize system efficiency and design algorithms for effective search features. I can swiftly adjust to new challenges thanks to my ability to assess problems and create logical, well-structured answers.</p>

            <h5 className="mt-4 text-secondary">Digital Content Creation & Branding</h5>
                <p>In addition to software development, I'm really interested in branding, digital marketing, and content production. I use social media tactics and videos to engage with audiences via the creation of captivating lifestyle, beauty, and fashion content. My creative, communication, and audience engagement abilities have improved as a result of this experience, and they also help me create user interfaces that are both aesthetically pleasing and intuitive.</p>
        </div>
    );
}

export default About;
