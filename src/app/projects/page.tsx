import Link from 'next/link';
import { ThemeButton } from '../components/ThemeButton';
import { ScrollToTopButton } from '../components/ScrolToTopButton';
export const runtime = 'edge';
const projects = [
  {
    name: "Evaluation of NASA ASP Benchmark",
    link: "https://github.com/Metabix/PCA_22_Spring/tree/main/Final_Project",
    description: "Used parallel computing programming interfaces such as MPI, OpenMP, CUDA; Profilled using gprof, score-p and nvprof profiling tools. Compared in depth performance of HiPergator HPC to the benchmarked HPC systems."
  },
  {
    name: "1-D Time-Domain Convolution-FPGA",
    link: "https://github.com/Metabix/RC_FALL21",
    description: "Implemented a custom accelerator circuit on FPGA to obtain 1-D convolution. Optimized circuit to a 14x speed with parallelism with respect to software implementation of the proposed convolution. Hardware : ZedBoard (Virtex7 FPGA)"
  },
  {
    name: "Handwritten Symbol Classification-CNNk",
    link: "https://github.com/Metabix/FML_Final-project",
    description: "Designed a Convolutional Neural Network for a custom handwritten data set. Evaluated other methods of classification. Improved model, to provide 94% accuracy."
  },
  {
    name: "Recognition of Vehicle Plates-Tesseract",
    link: "https://github.com/Metabix/IMCV_FALL21",
    description: "Designed a model to accurately predict any vehicle's plate number using Tesseract Engine. Implemented various Image processing techniques to improve the accuracy."
  },
  {
    name: "AgrIoT",
    link: "https://github.com/Metabix/IoT-P-S_22_Spring/tree/main/IoT_Proj",
    description: "IoT system which obtains temperature and humidity data. The data is secured using AWS and is shared across the IoT system using AES encryption. Devices used MQTT protocol to transfer messages to one another. Hardware : Raspberry Pi, ESP32, ESP 8266"
  },
  {
    name: "Ornithopter",
    description: "A mechanical aircraft, which obeys the flapping mechanism of birds. Alternative for drones in the UAV field. Hardware and Software used Arduino MCU, Brushless and servo Motors, ESC, 3D printing for cranks, 900mAh LiPo battery, camera module"
  },
  {
    name: "Smart Weather station",
    description: "Used Raspberry Pi and other elemental sensors to provide a home-based weather system. Hardware and Software used Raspberry Pi,BME280 humidity, pressure and temperature sensor, MCP3008 ADC, anemometer."
  },
  {
    name: "Raspberry Pi based project on BLE",
    description: "Raspberry Pi based project; which checks BLE tags to confirm attendance of class, office and etc."
  },
  {
    name: "VR SKATEBOARD (Shortlisted in top 20 in Engineering Clinics)",
    description: "AR Project- skateboard experience for the disabled. Hardware and Software used Arduino UNO, MPU-6050 Accelerometer/Gyroscope, VR- Headset"
  }
];

export default function Projects() {
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

        {/* Projects Section */}
        <section className="mb-12">
          <div className="flex flex-col md:flex-row gap-16">
            {/* Projects Title */}
            <div className="md:w-1/5">
              <h2 className="text-2xl font-bold text-[#A6808C] dark:text-[#CCB7AE]">
                PROJECTS
              </h2>
            </div>

            {/* Projects Content */}
            <div className="md:w-4/5 space-y-12">
              {projects.map((project, index) => (
                <div key={index} className="border-l-2 border-[#565264] dark:border-[#a6808c] pl-6">
                  <div className="mb-4">
                    {project.link ? (
                      <a 
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xl font-semibold text-[#A6808C] dark:text-[#CCB7AE] hover:opacity-80 flex items-center group"
                      >
                        {project.name}
                        <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                      </a>
                    ) : (
                      <h3 className="text-xl font-semibold text-[#A6808C] dark:text-[#CCB7AE]">
                        {project.name}
                      </h3>
                    )}
                  </div>
                  <p className="whitespace-pre-line opacity-90">
                    {project.description}
                  </p>
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