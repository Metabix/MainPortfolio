import Link from 'next/link';
import { ThemeButton } from '../components/ThemeButton';
import { ScrollToTopButton } from '../components/ScrolToTopButton';

export const runtime = 'edge';

const experiences = [
  {
    company: "Microchip",
    link: "https://www.microchip.com/",
    position: "Corporate Application Engineer",
    duration: "Jan 2023 - Now",
    description: `As a Corporate Applications Engineer at Microchip, I have been extensively involved in leveraging my expertise with various Microchip products, including PICs, AVR, AT, SAM and USB other offerings. 
    I have played a crucial role in supporting and implementing advanced functionalities in these microcontrollers and Embedded Hardware.  
    My experience in corporate applications at Microchip has provided me with the opportunity to work on challenging projects that demand a deep understanding of microcontroller architectures and their associated peripherals. 
    I have actively collaborated with cross-functional teams, including hardware engineers, software developers, and customers, to provide technical support and solve complex problems. 
    Overall, my role as a Corporate Applications Engineer at Microchip has allowed me to demonstrate my expertise in microcontroller technologies, including PIC, AVR, and other Microchip products. 
    I have gained extensive experience in utilizing Embedded Technologies to deliver robust solutions for a variety of applications.`
  },
  {
    company: "EAAR Lab University of Florida",
    link: "https://github.com/EAAR-LAB",
    position: "Graduate Research Assistant",
    duration: "Aug - Dec 2022",
    subtitle: "EAAR Lab",
    description: `Developed a system that predicts traffic using a combination of a microcontroller, pre-polarized microphone, LTE connectivity, and a machine learning model.
    The microphone captures audio data from the environment, such as vehicle noises and traffic flow sounds. 
    This data is processed by the microcontroller to extract key features, which are then transmitted via LTE to a server(MQTT). 
    Used machine learning model to analyzes the data to predict traffic conditions in real time. 
    This system enables accurate, location-independent traffic monitoring, making it ideal for smart city applications.`
  },
  {
    company: "Ford Motor Company",
    link: "https://corporate.ford.com/",
    position: "RA&E Intern",
    duration: "May - Aug 2022",
    subtitle: "Vissible Light Position using Optical Camera Communication",
    description: `As we know GPS has limitation of providing accurate positioning for indoor architecture. Due to this limitation, Researchers have been trying to
    find alternative methods for localisation. Currently Researchers have focused on using Radio waves, Bluetooth signals, Etc for localization, but
    They are prone to multi-path propagation.
    Prof. Herald Haas recently started using Light to transmit data, which is known as LiFi and this is an application of Vissible Light Communication.
    Like VLC, VLP is similar, the research work at ford was based on VLP using IR light. I studied and built a prototype for this application and submitted
    the final limitation of the system.`
  },
  {
    company: "Wipro - Automation",
    link: "https://wipropari.com/",
    position: "Intern Engineer",
    duration: "Jan - June 2021",
    projects: [
      {
        title: "Medsmart",
        description: `Re-engineered a Medical Unit. MedSmart is a covid application that was built by Wipro amid covid-19. 
        The Device had an AI service by a third-party company. My goal in this project was to provide the same features without using the service. 
        In short, re-develop the whole project. The IoT application uses the MQTT protocol to communicate with ESP, RPI, and the Router. 
        Uses a SQL database; where the data is stored in the IoT device for its privacy concern.`
      },
      {
        title: "Spot Welding IoT Device Dev",
        description: `This has to be one of the most challenging and fun projects, I've ever worked on.
        The objective of this project was to implement an IoT feature for Spot Welding Device.
        Using raspberry pi, I developed a communication layer between PLC CJ2M-CPU33, Fanuc controller - R-30 ib, and AC controller.
        \nRpi - CJ2M (FINS/UDP)\nRpi - R30iB (Ethernet/IP Pylogix2-CIP encapsulation) (cpppo)`
      },
      {
        title: "SIXT pilot",
        description: `Initial planning of UGV robot. The project involved multiple RC motors, servo motors,
        stereo camera, LIDAR and Nvidia Jetson, and Nano development Kit.`
      }
    ]
  },
  {
    company: "Mindteck",
    link: "https://www.mindteck.com/",
    position: "R&D Engineer",
    duration: "June - July 2018",
    subtitle: "Indoor asset tracking using BLE based real time location system",
    description: `Most of the asset tracking systems are non real time. Real time asset tracking system 
    becomes necessary when an asset is of high value and critical to be located in time.
    Examples of such high value assets could be manufacturing parts lying in various locations on shop floor,  
    critical medical equipments lying in various locations in hospitals etc.
    This system would enable users to locate critical assets in real time with an accuracy of about 3 feet 
    without having to spend time searching for the same.`
  }
];

export default function Experience() {
    return (
      <main className="min-h-screen bg-[#ccb7ae] dark:bg-[#565264] text-[#565264] dark:text-[#a6808c]">
        <header><ThemeButton /></header>
        <div className="max-w-4xl mx-auto px-4 py-8">
          {/* Home Link */}
          <div className="mb-24">
            <Link 
              href="/" 
              className="inline-flex items-center gap-2 text-xl text-[#A6808C] dark:text-[#CCB7AE] hover:opacity-80"
            >
              <span>←</span> Home Page
            </Link>
          </div>
  
          {/* Experience Section */}
          <section className="mb-12">
            <div className="flex flex-col md:flex-row gap-16">
              {/* Experience Title */}
              <div className="md:w-1/5">
                <h2 className="text-2xl font-bold text-[#A6808C] dark:text-[#CCB7AE]">
                  EXPERIENCE
                </h2>
              </div>
  
              {/* Experience Content */}
              <div className="md:w-4/5 space-y-12">
                {experiences.map((exp, index) => (
                  <div key={index} className="border-l-2 border-[#565264] dark:border-[#a6808c] pl-6">
                    <div className="mb-4">
                      <a 
                        href={exp.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xl font-semibold text-[#A6808C] dark:text-[#CCB7AE] hover:opacity-80 flex items-center group"
                      >
                        {exp.company}
                        <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                      </a>
                      <div className="flex justify-between items-center mt-1">
                        <div className="text-lg text-[#A6808C] dark:text-[#CCB7AE]">{exp.position}</div>
                        <div className="text-[#A6808C] dark:text-[#CCB7AE]">{exp.duration}</div>
                      </div>
                    </div>
  
                    {exp.subtitle && (
                      <div className="font-semibold mb-3">{exp.subtitle}</div>
                    )}
  
                    {exp.description && (
                      <p className="whitespace-pre-line opacity-90">{exp.description}</p>
                    )}
  
                    {exp.projects && (
                      <div className="mt-6 space-y-6">
                        {exp.projects.map((project, pIndex) => (
                          <div key={pIndex} className="pl-4">
                            <h3 className="font-semibold mb-2">{project.title}</h3>
                            <p className="opacity-90">{project.description}</p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>
  
          <ScrollToTopButton />
        </div>
      </main>
    );
  }