import React from "react";

export default function Footer() {
  return (
    <>
      <div className="bg-gray-800">
      <div className="px-4 py-12">
  <div className="lg:max-w-[1440px] md:max-w-[744px] max-w-[375px] mx-auto bg-white lg:px-20 md:px-6 px-4 py-10">
    <div className="mt-10">
      <div className="md:flex gap-8 justify-between">
        <div className="md:flex lg:gap-24 lg:justify-start md:justify-between lg:w-[70%] w-full">
          <div>
            <p className="text-2xl font-medium leading-normal text-gray-800">
              Home
            </p>
            <ul>
              <li className="text-2xl font-medium leading-normal text-gray-800 cursor-pointer mt-6">
                Products
              </li>
              <li className="text-2xl font-medium leading-normal text-gray-800 cursor-pointer mt-6">
                About
              </li>
              <li className="text-2xl font-medium leading-normal text-gray-800 cursor-pointer mt-6">
                Blog
              </li>
            </ul>
          </div>
          <div className="md:mt-0 mt-6 md:block hidden">
            <p className="text-base font-medium leading-none text-gray-800">
              Company
            </p>
            <ul>
              <li className="text-base text-gray-600 mt-4 cursor-pointer">
                Blog
              </li>
              <li className="text-base text-gray-600 mt-4 cursor-pointer">
                About Us
              </li>
              <li className="text-base text-gray-600 mt-4 cursor-pointer">
                Pricing
              </li>
              <li className="text-base text-gray-600 mt-4 cursor-pointer">
                Contact us
              </li>
            </ul>
          </div>
          <div className="md:mt-0 mt-6 md:block hidden">
            <p className="text-base font-medium leading-none text-gray-800">
              Support
            </p>
            <ul>
              <li className="text-base text-gray-600 mt-4 cursor-pointer">
                FAQ
              </li>
              <li className="text-base text-gray-600 mt-4 cursor-pointer">
                Status policy
              </li>
              <li className="text-base text-gray-600 mt-4 cursor-pointer">
                Privacy policy
              </li>
              <li className="text-base text-gray-600 mt-4 cursor-pointer">
                Terms of service
              </li>
            </ul>
          </div>
        </div>
        <div className="md:hidden block">
          <div className="flex justify-between">
            <div className="md:mt-0 mt-6">
              <p className="text-base font-medium leading-none text-gray-800">
                Company
              </p>
              <ul>
                <li className="text-base text-gray-600 mt-4 cursor-pointer">
                  Blog
                </li>
                <li className="text-base text-gray-600 mt-4 cursor-pointer">
                  About Us
                </li>
                <li className="text-base text-gray-600 mt-4 cursor-pointer">
                  Pricing
                </li>
                <li className="text-base text-gray-600 mt-4 cursor-pointer">
                  Contact us
                </li>
              </ul>
            </div>
            <div className="md:mt-0 mt-6">
              <p className="text-base font-medium leading-none text-gray-800">
                Support
              </p>
              <ul>
                <li className="text-base text-gray-600 mt-4 cursor-pointer">
                  FAQ
                </li>
                <li className="text-base text-gray-600 mt-4 cursor-pointer">
                  Status policy
                </li>
                <li className="text-base text-gray-600 mt-4 cursor-pointer">
                  Privacy policy
                </li>
                <li className="text-base text-gray-600 mt-4 cursor-pointer">
                  Terms of service
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="lg:block md:hidden block mt-6">
          <p className="text-base font-medium leading-none text-gray-800">
            Get updates
          </p>
          <div className="lg:flex mt-6 relative">
            <input type="email" placeholder="Enter your email" className="border border-gray-300 focus:outline-none px-3 pl-10 lg:min-w-[257px] md:min-w-[400px] w-full mt-[0.5px] py-2" />
            <div>
              <svg className="absolute left-4 top-3.5" width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.25 3H2.75C2.05964 3 1.5 3.55964 1.5 4.25V11.75C1.5 12.4404 2.05964 13 2.75 13H13.25C13.9404 13 14.5 12.4404 14.5 11.75V4.25C14.5 3.55964 13.9404 3 13.25 3Z" stroke="#6B7280" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M3.5 5L8 8.5L12.5 5" stroke="#6B7280" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <button className="text-base font-medium leading-none text-center bg-gray-800 text-white lg:min-w-[126px] md:min-w-[156px] w-full py-3 h-[42px] md:mt-0 mt-4 hover:bg-gray-700 duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="lg:hidden md:block hidden cursor-pointer mt-6">
        <p className="text-base font-medium leading-none text-gray-800">
          Get updates
        </p>
        <div className="flex mt-6 relative">
          <input type="email" placeholder="Enter your email" className="border border-gray-300 focus:outline-none px-3 pl-10 max-w-[540px] w-full py-2" />
          <div>
            <svg className="absolute left-4 top-3" width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13.25 3H2.75C2.05964 3 1.5 3.55964 1.5 4.25V11.75C1.5 12.4404 2.05964 13 2.75 13H13.25C13.9404 13 14.5 12.4404 14.5 11.75V4.25C14.5 3.55964 13.9404 3 13.25 3Z" stroke="#6B7280" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M3.5 5L8 8.5L12.5 5" stroke="#6B7280" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <button>
            <p className="text-base font-medium leading-none text-center bg-gray-800 text-white min-w-[156px] w-full py-3 h-[42px] hover:bg-gray-700 duration-300">
              Subscribe
            </p>
          </button>
        </div>
      </div>
    </div>
  </div>
</div>

      </div>
    </>
  );
}

