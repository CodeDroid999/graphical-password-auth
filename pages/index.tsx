import HowToUseSection from '@/components/HowToUse';
import Navbar from '@/components/navbar';
import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <div className="bg-blue-200">
        <header className="absolute inset-x-0 top-0 z-50">
       <Navbar />
        </header>

        <div className="relative isolate px-6 pt-10 lg:px-8">
          <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
            <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style={{ clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" }}></div>
          </div>
          <div className="mx-auto max-w-2xl py-16 sm:py-48 lg:py-36">
            
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl">Unlock Your World with Pictures</h1>
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl">Your Password, Your Canvas!</h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
              Graphical Password Auth Tool is an innovative and user-friendly authentication system designed to enhance security while providing a memorable and engaging user experience. Unlike traditional text-based passwords, this tool employs a visually appealing approach that allows dyslexic users to create and authenticate passwords using images, patterns, or shapes.</p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a href="sign-up" className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Get started</a>
                <a href="about" className="text-sm font-semibold leading-6 text-gray-900">Learn more <span aria-hidden="true">→</span></a>
              </div>
            </div>
          </div>
          <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
            <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" style={{ clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" }}></div>
          </div>
        </div>
        <div>
          <HowToUseSection />
        </div>
      </div>
    </div>
  );
}
