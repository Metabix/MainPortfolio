import Link from 'next/link';
import { ThemeButton } from '../components/ThemeButton';
import { ScrollToTopButton } from '../components/ScrolToTopButton';
export const runtime = 'edge';
export default function Skills() {
    return (
        <main className="min-h-screen bg-[#ccb7ae] dark:bg-[#565264] text-[#565264] dark:text-[#a6808c]">
          <header><ThemeButton /></header>
          <div className="max-w-4xl mx-auto px-4 py-8">
            {/* Home Link */}
            <div className="mb-24"> {/* Increased margin-bottom from mb-12 to mb-24 */}
              <Link 
                href="/" 
                className="inline-flex items-center gap-2 text-xl text-[#A6808C] dark:text-[#CCB7AE] hover:text-[#565264] dark:hover:text-[#a6808c] "
              >
                <span>←</span> Home Page
              </Link>
            </div>

        {/* Skills Section */}
        <section className="mb-12">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Skills Title */}
            <div className="md:w-1/5">
              <h2 className="text-2xl font-bold text-[#A6808C] dark:text-[#CCB7AE]">
                SKILLS
              </h2>
            </div>

            {/* Skills Grid */}
            <div className="md:w-4/5 grid md:grid-cols-4 gap-8">
              {/* Languages */}
              <div>
                <h3 className="text-lg font-bold mb-4 uppercase">Languages</h3>
                <ul className="space-y-2">
                  {[
                    'C',
                    'C++',
                    'Python',
                    'Matlab',
                    'VHDL',
                    'Embedded C'
                  ].map((skill) => (
                    <li 
                      key={skill} 
                      className="hover:translate-x-2 transition-transform duration-300"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Software */}
              <div>
                <h3 className="text-lg font-bold mb-4 uppercase">Software</h3>
                <ul className="space-y-2">
                  {[
                    'NI LabView',
                    'Proteus',
                    'Vivado',
                    'Xilinx ISE ModelSim',
                    'Multisim',
                    'Git'
                  ].map((skill) => (
                    <li 
                      key={skill} 
                      className="hover:translate-x-2 transition-transform duration-300"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Hardware */}
              <div>
                <h3 className="text-lg font-bold mb-4 uppercase">Hardware</h3>
                <ul className="space-y-2">
                  {[
                    'PIC controllers',
                    'AVR boards',
                    'ZedBoard (Virtex7 FPGA)',
                    'OMRON PLC - CJ2M-CPU33',
                    'Nadesco AC controller',
                    'Fanuc controller - R-30iB',
                    'Raspberry Pi',
                    'Arduino',
                    'ESP32/ESP8266'
                  ].map((skill) => (
                    <li 
                      key={skill} 
                      className="hover:translate-x-2 transition-transform duration-300"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Additional Skills */}
              <div>
                <h3 className="text-lg font-bold mb-4 uppercase">Additional Skills</h3>
                <ul className="space-y-2">
                  {[
                    'Machine Learning',
                    'Industrial communication (UART, I2C, TCP, UDP)',
                    'Linux',
                    'Microsoft Suite',
                    'Adobe Suite',
                    'SQL DBMS'
                  ].map((skill) => (
                    <li 
                      key={skill} 
                      className="hover:translate-x-2 transition-transform duration-300"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <ScrollToTopButton />
      </div>
    </main>
  );
}