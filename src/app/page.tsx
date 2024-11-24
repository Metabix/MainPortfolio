  import Link from 'next/link';
  import { ThemeButton } from './components/ThemeButton';
  import { ScrollToTopButton } from './components/ScrolToTopButton';

  export const runtime = 'edge';
  export default function Home() {
    return (
      <main className="min-h-screen bg-[#ccb7ae] dark:bg-[#565264] text-[#565264] dark:text-[#a6808c]">
        <header><ThemeButton /></header>
        <div className="max-w-4xl mx-auto px-4 py-16 text-[#565264] dark:text-[#a6808c]">
        <h3 
          className="text-3xl mb-16 font-bold relative cursor-pointer group"
          title="Hello"
        >
          <span className="block transition-opacity duration-300 absolute top-0 left-0">
            <span className="inline-block transition-opacity duration-300 group-hover:opacity-0">0x48</span>{" "}
            <span className="inline-block transition-opacity duration-300 group-hover:opacity-0 delay-100">0x65</span>{" "}
            <span className="inline-block transition-opacity duration-300 group-hover:opacity-0 delay-200">0x6C</span>{" "}
            <span className="inline-block transition-opacity duration-300 group-hover:opacity-0 delay-300">0x6C</span>{" "}
            <span className="inline-block transition-opacity duration-300 group-hover:opacity-0 delay-400">0x6F</span>{" "}
            <span className="inline-block transition-opacity duration-300 group-hover:opacity-0 delay-200">0x20</span>{" "}
            <span className="inline-block transition-opacity duration-300 group-hover:opacity-0 delay-400">0x57</span>{" "}
            <span className="inline-block transition-opacity duration-300 group-hover:opacity-0 delay-100">0x6F</span>{" "}
            <span className="inline-block transition-opacity duration-300 group-hover:opacity-0 delay-200">0x72</span>{" "}
            <span className="inline-block transition-opacity duration-300 group-hover:opacity-0 delay-300">0x6C</span>{" "}
            <span className="inline-block transition-opacity duration-300 group-hover:opacity-0 delay-100">0x64</span>{" "} 
          </span>
          <span className="block transition-opacity duration-300 opacity-0 group-hover:opacity-100">
           Hello World!
          </span>
        </h3>
          <div className="text-xl mb-24">
            I'm <span className="font-semibold">Mohit Sathya</span>. An Embedded 
            System Engineer, who loves the world of engineering. My main interest lies 
            within Microcontrollers, Processors, FPGAs and IoT.
          </div>
  
          <nav className="mb-32">
            <div className="flex items-center justify-center text-lg uppercase tracking-wider">
              {[
                { href: '/skills', label: 'Skills' },
                { href: '/experience', label: 'Experience' },
                { href: '/Resume_Mohit_Sathyaseelan.pdf', label: 'Resume' },
                { href: '/projects', label: 'Projects' },
                { href: '/About', label: 'About Me' }
              ].map((link, index, array) => (
                <div key={link.href} className="flex items-center">
                  <Link 
                    href={link.href}
                    className="text-[#a6808c] hover:text-[#565264] dark:text-[#CCB7AE] dark:hover:text-[#a6808c] transition-colors"
                  >
                    {link.label}
                  </Link>
                  {index < array.length - 1 && (
                    <span className="mx-2 text-[#565264] dark:text-[#a6808c]">|</span>
                  )}
                </div>
              ))}
            </div>
          </nav>
  
          <section className="mb-16">
            <h2 className="text-2xl font-semibold mb-4">
            Research Paper
            </h2>
            <div>
              <a 
                href="https://ieeexplore.ieee.org/document/9358718" 
                target="_blank"
                className="text-[#a6808c] hover:text-[#565264] dark:text-[#CCB7AE] dark:hover:text-[#a6808c] transition-colors hover:underline"
              >
                COVID De-Escalation System
              </a>
              <p className="text-lg">
                2021 6th International Conference on Inventive Computation Technologies (ICICT)
                An Internet-of- Things (IoT) can be an effective solution to de-escalate the spread of a pandemic/epidemic using open source technology - 
                Bluetooth Low level Energy. The major objective of this contribution is to monitor real time cases and prevent the contagious spread of this viral disease. 
                The entire paper focuses on cross checking the data fed by the user with the IoT database which consists of the data from the COVID RADAR application. 
                The experimental model uses MCU and a Bluetooth module, which are easy to realize and cost effective as well. The realization and prediction of the pandemic 
                hotspots is also facilitated using this data.
              </p>
            </div>
          </section>
          <ScrollToTopButton />
        </div>
      </main>
    );
  }