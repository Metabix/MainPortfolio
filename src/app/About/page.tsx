import Link from 'next/link';
import Image from 'next/image';
import { ThemeButton } from '../components/ThemeButton';
import { ScrollToTopButton } from '../components/ScrolToTopButton';

export const runtime = 'edge';

export default function About() {
  return (
    <main className="min-h-screen bg-[#ccb7ae] dark:bg-[#565264] text-[#565264] dark:text-[#a6808c]">
      <header><ThemeButton /></header>
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Home Link */}
        <div className="mb-24">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-xl text-[#A6808C] dark:text-[#CCB7AE] hover:text-[#565264] dark:hover:text-[#a6808c] "
            >
            <span>←</span> Home Page
          </Link>
        </div>

        {/* About Section */}
        <section className="mb-12">
          <div className="flex flex-col md:flex-row gap-16">
            {/* About Title and Image */}
            <div className="md:w-2/5">
              <h2 className="text-2xl font-bold text-[#A6808C] dark:text-[#CCB7AE] mb-8">
                ABOUT ME
              </h2>
              <div className="relative w-full aspect-square mb-8 max-w-md">
                <Image
                  src="/mohitsathya.jpeg"
                  alt="Mohit Sathya"
                  fill
                  className="rounded-lg object-cover"
                  priority
                />
              </div>
            </div>

            <div className="md:w-3/5 space-y-8">
              <div className="pl-6">
                <p className="text-lg leading-relaxed mb-10">
                    Currently I help customers in the Embedded System Realem, fix their issues. What do I get out of it? <br></br>
                    Good question, Well when people say learn from your mistakes, I learn from other people's mistakes. There are so many ways 
                    how a project can go south and getting to fix that is a huge experience.
                </p>
                <p className="text-lg leading-relaxed mb-8">
                    Sometimes when it gets boring, I start building projects out of microcontrollers.
                    Come on, building a Li-Fi project, or your personal UGV sounds pretty dope!
                </p>

                <p className="text-lg leading-relaxed mb-8">
                    In my free time, I like to go Bowling, play board games, watch movies and TV series.
                    I used to have a video game phase (PS. only dota 2) but that interest died as I got older.
                    Some new hobbies I picked up recently are snowboarding and skateboarding.
                </p>
              </div>

              {/* Quote */}
              <div className="pl-6">
                <blockquote className="text-xl italic font-semibold text-[#A6808C] dark:text-[#CCB7AE]">
                  "You dont have to be great to start something, you have to start to be great"
                </blockquote>
              </div>
            </div>
          </div>
        </section>

        <ScrollToTopButton />
      </div>
    </main>
  );
}