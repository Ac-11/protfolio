import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import { CTA } from "../components";
import { experiences, skills } from "../constants";

import "react-vertical-timeline-component/style.min.css";

const About = () => {
  return (
    <section className='max-container'>
      <h1 className='head-text'>
        Hello, I'm{" "}
        <span className='blue-gradient_text font-semibold drop-shadow'>
          {" "}
          Abhisth
        </span>{" "}
        👋
      </h1>

      <div className='mt-5 flex flex-col gap-3 text-slate-500'>
        <p>
        Hello there! I'm Abhisth Chatterji, a final year BTech Computer Science Engineering, with a passion for exploring the ever-evolving world of technology. I believe in the power of continuous learning and adaptability in the fast-paced field of computer science. 
        </p>
        <p>
        🌐 Cloud Computing & DevOps: Proficient in cloud platforms such as AWS and Azure, I have experience in building CI/CD pipelines, Infrastructure as Code (IaC), containerization with Docker, and orchestrating applications with Kubernetes. My expertise also extends to configuration management using Ansible, version control with Git, and continuous integration with Jenkins.
        </p>
        <p>
        📈 Testing, Monitoring & Logging: I understand the importance of ensuring software quality. I have knowledge of testing methodologies and tools, as well as setting up monitoring and logging systems to maintain the health and performance of applications.
        </p>
        <p>
        📊 Data Analysis and Engineering: I enjoy working with data to derive insights and make informed decisions. Proficient in Microsoft Excel, Power BI, and Tableau, I can transform raw data into meaningful visualizations. I'm also skilled in database management, utilizing tools like MySQL, Pandas, and Scikit-learn for data manipulation and analysis.
        </p>
        <p>
        🧠 AI/ML (Basics): I have a fundamental understanding of Artificial Intelligence and Machine Learning concepts, which I hope to further develop as I progress in my career. I'm excited about the potential of AI/ML in solving real-world problems.
        </p>
        <p>
        💻 Programming Languages: I'm well-versed in Java and Python, which I use for various programming tasks, including web development as a Full-Stack developer. I have experience in Object-Oriented Programming and am comfortable with Data Structures and Algorithms.
        </p>
        <p>
        🖥️ Operating System & Networking: While my knowledge in this area is in its early stages, I have a basic understanding of operating systems and networking principles, which I plan to expand upon.
        </p>
      </div>

      {/* <div className='py-10 flex flex-col'>
        <h3 className='subhead-text'>My Skills</h3>

        <div className='mt-16 flex flex-wrap gap-12'>
          {skills.map((skill) => (
            <div className='block-container w-20 h-20' key={skill.name}>
              <div className='btn-back rounded-xl' />
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            </div>
          ))}
        </div>
      </div> */}

      <div className='py-16'>
        <h3 className='subhead-text'>Work Experience.</h3>
        <div className='mt-5 flex flex-col gap-3 text-slate-500'>
          <p>
            I've worked with all sorts of companies, leveling up my skills and
            teaming up with smart people. Here's the rundown:
          </p>
        </div>

        <div className='mt-12 flex'>
          <VerticalTimeline>
            {experiences.map((experience, index) => (
              <VerticalTimelineElement
                key={experience.company_name}
                date={experience.date}
                iconStyle={{ background: experience.iconBg }}
                icon={
                  <div className='flex justify-center items-center w-full h-full'>
                    <img
                      src={experience.icon}
                      alt={experience.company_name}
                      className='w-[60%] h-[60%] object-contain'
                    />
                  </div>
                }
                contentStyle={{
                  borderBottom: "8px",
                  borderStyle: "solid",
                  borderBottomColor: experience.iconBg,
                  boxShadow: "none",
                }}
              >
                <div>
                  <h3 className='text-black text-xl font-poppins font-semibold'>
                    {experience.title}
                  </h3>
                  <p
                    className='text-black-500 font-medium text-base'
                    style={{ margin: 0 }}
                  >
                    {experience.company_name}
                  </p>
                </div>

                <ul className='my-5 list-disc ml-5 space-y-2'>
                  {experience.points.map((point, index) => (
                    <li
                      key={`experience-point-${index}`}
                      className='text-black-500/50 font-normal pl-1 text-sm'
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>

      <hr className='border-slate-200' />

      <CTA />
    </section>
  );
};

export default About;
