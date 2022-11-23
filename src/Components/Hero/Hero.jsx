import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div>
      <main>
    <div className="relative px-6 lg:px-8">
      <div className="mx-auto max-w-3xl pt-20 pb-32 sm:pt-48 sm:pb-40">
        <div>
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative overflow-hidden rounded-full py-1.5 px-4 text-sm leading-6 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              <span className="text-gray-600 fs-3">
                MedHome
                <a href="#" className="font-semibold text-indigo-600">
                
                </a>
              </span>
            </div>
          </div>
          <div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-center sm:text-6xl">
            Welcome To MedHome
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 sm:text-center">
              We Are Providing The Best Maintainers Where Ever You Need
            </p>
            <div className="mt-8 flex gap-x-4 sm:justify-center">
              <Link
                to="./signup"
                className="inline-block rounded-lg bg-indigo-600 px-4 py-1.5 text-base font-semibold leading-7 text-white ring-1 ring-indigo-600 hover:bg-indigo-700 hover:ring-indigo-700"
              >
                Let us know you
                <span className="text-indigo-200" aria-hidden="true">
                  &rarr;
                </span>
                </Link>
           
       
            </div>
          </div>
         
        </div>
      </div>
    </div>
      </main>
      </div>
  )
}

export default Hero