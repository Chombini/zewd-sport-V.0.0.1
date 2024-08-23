import Image from 'next/image'
import React from 'react'

function Footer() {
  return (
    <footer id='contact-us' className="bg-white">
        <div className="mx-auto max-w-screen-xl px-4 pb-6 pt-16 sm:px-6 lg:px-8 lg:pt-24">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                <div>
                    <div className="flex justify-center items-center sm:justify-start">
                        <Image src='/logo1.png' alt="logo" width={40} height={40}/>
                        <h2 className='font-semibold text-[16px] pt-2'>Zewd-Sport</h2>
                    </div>

                    <p className="mt-6 max-w-md text-center leading-relaxed text-gray-500 sm:max-w-xs sm:text-left">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt consequuntur amet culpa
                        cum itaque neque.
                    </p>

                    <ul className="mt-8 flex justify-center gap-6 sm:justify-start md:gap-8">
                        <li>
                            <a
                            href="https://www.tiktok.com/@moonglows13"
                            rel="noreferrer"
                            target="_blank"
                            className="text-gray-700 transition hover:text-primary dark:text-white dark:hover:text-white/75"
                            >
                            <span className="sr-only">Tiktok</span>
                            <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 40 50">
                                <path 
                                fillRule="evenodd"
                                d="M41,4H9C6.243,4,4,6.243,4,9v32c0,2.757,2.243,5,5,5h32c2.757,0,5-2.243,5-5V9C46,6.243,43.757,4,41,4z M37.006,22.323 c-0.227,0.021-0.457,0.035-0.69,0.035c-2.623,0-4.928-1.349-6.269-3.388c0,5.349,0,11.435,0,11.537c0,4.709-3.818,8.527-8.527,8.527 s-8.527-3.818-8.527-8.527s3.818-8.527,8.527-8.527c0.178,0,0.352,0.016,0.527,0.027v4.202c-0.175-0.021-0.347-0.053-0.527-0.053 c-2.404,0-4.352,1.948-4.352,4.352s1.948,4.352,4.352,4.352s4.527-1.894,4.527-4.298c0-0.095,0.042-19.594,0.042-19.594h4.016 c0.378,3.591,3.277,6.425,6.901,6.685V22.323z"></path>
                            </svg>
                            </a>
                        </li>

                        <li>
                        <a
                            href="#"
                            rel="noreferrer"
                            target="_blank"
                            className="text-gray-700 transition hover:text-primary"
                        >
                            <span className="sr-only">Telegram</span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" className="h-6 w-6" fill="currentColor" aria-hidden="true">
                              <path d="M248 8C111 8 0 119 0 256S111 504 248 504 496 393 496 256 385 8 248 8zM363 176.7c-3.7 39.2-19.9 134.4-28.1 178.3-3.5 18.6-10.3 24.8-16.9 25.4-14.4 1.3-25.3-9.5-39.3-18.7-21.8-14.3-34.2-23.2-55.3-37.2-24.5-16.1-8.6-25 5.3-39.5 3.7-3.8 67.1-61.5 68.3-66.7 .2-.7 .3-3.1-1.2-4.4s-3.6-.8-5.1-.5q-3.3 .7-104.6 69.1-14.8 10.2-26.9 9.9c-8.9-.2-25.9-5-38.6-9.1-15.5-5-27.9-7.7-26.8-16.3q.8-6.7 18.5-13.7 108.4-47.2 144.6-62.3c68.9-28.6 83.2-33.6 92.5-33.8 2.1 0 6.6 .5 9.6 2.9a10.5 10.5 0 0 1 3.5 6.7A43.8 43.8 0 0 1 363 176.7z"/>
                            </svg>
                        </a>
                        </li>
                        
                        <li>
                            <a
                                href="#"
                                rel="noreferrer"
                                target="_blank"
                                className="text-gray-700 transition hover:text-primary"
                            >
                                <span className="sr-only">Facebook</span>
                                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path
                                    fillRule="evenodd"
                                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                                    clipRule="evenodd"
                                />
                                </svg>
                            </a>
                        </li>

                        <li>
                        <a
                            href="#"
                            rel="noreferrer"
                            target="_blank"
                            className="text-gray-700 transition hover:text-primary"
                        >
                            <span className="sr-only">Instagram</span>
                            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path
                                fillRule="evenodd"
                                d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                                clipRule="evenodd"
                            />
                            </svg>
                        </a>
                        </li>
                    </ul>

                </div>

                <div className="grid grid-cols-2 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:col-span-2">

                    <div className=" sm:text-left">
                        <p className="text-lg font-medium text-gray-900">About Us</p>

                        <ul className="mt-6 space-y-4 text-sm">
                                
                            <li>
                                <a className="text-gray-700 transition hover:text-gray-700/75">
                                History
                                </a>
                            </li>

                            <li>
                                <a className="text-gray-700 transition hover:text-gray-700/75">
                                Meet the Team
                                </a>
                            </li>

                            <li>
                                <a className="text-gray-700 transition hover:text-gray-700/75">
                                Handbook
                                </a>
                            </li>

                            <li>
                                <a className="text-gray-700 transition hover:text-gray-700/75"> 
                                Careers 
                                </a>
                            </li>

                        </ul>
                    </div>

                    <div className=" sm:text-left">
                        <p className="text-lg font-medium text-gray-900">Contact Us</p>

                        <ul className="mt-6 space-y-4 text-sm">

                                <li>
                                    <a
                                    className="flex items-center justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
                                    href="#"
                                    >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="size-5 shrink-0 text-gray-900"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    >
                                        <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                        />
                                    </svg>

                                    <span className="flex-1 text-gray-700">Admin@gmail.com</span>
                                    </a>
                                </li>

                                <li>
                                    <a
                                    className="flex items-center justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
                                    href="#"
                                    >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="size-5 shrink-0 text-gray-900"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    >
                                        <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                        />
                                    </svg>

                                    <span className="flex-1 text-gray-700">+251707305252 +251707305252</span>
                                    </a>
                                </li>

                                <li
                                    className="flex items-start justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
                                >
                                    <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="size-5 shrink-0 text-gray-900"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                    />
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                    />
                                    </svg>

                                    <address className="-mt-0.5 flex-1 not-italic text-gray-700">
                                    Addis Abeba, Ethiopia
                                    </address>
                                </li>

                        </ul>

                    </div>

                </div>
            </div>

            <div className="mt-12 border-t border-gray-100 pt-6">
                <div className="text-center sm:flex sm:justify-between sm:text-left">
                <p className="text-sm text-gray-500">
                    <span className="block sm:inline">All rights reserved.</span>

                    <a
                    className="inline-block text-teal-600 underline transition hover:text-teal-600/75"
                    >
                    Terms & Conditions
                    </a>

                    <span>&middot;</span>

                    <a
                    className="inline-block text-teal-600 underline transition hover:text-teal-600/75"
                    >
                    Privacy Policy
                    </a>
                </p>

                <p className="mt-4 text-sm text-gray-500 sm:order-first sm:mt-0">&copy; 2022 Zewd-Sport</p>
                </div>
            </div>
            
        </div>
    </footer>
  )
}

export default Footer