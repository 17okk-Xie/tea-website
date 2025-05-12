export default function AboutPage() {
  return (
    <main className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-green-800 mb-8 text-center">About Us</h1>

        {/* Company Introduction */}
        <section className="mb-16">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2 bg-gray-200 h-64 md:h-auto"></div>
              <div className="p-8 md:w-1/2">
                <h2 className="text-2xl font-bold text-green-700 mb-4">Our Story</h2>
                <p className="text-gray-700 mb-4">
                  Chinese Tea House was established in 2010, originating from a love and respect for traditional Chinese tea culture.
                  Our founder, Mr. Zhang, was born in a tea-farming family in Hangzhou, Zhejiang, and was immersed in rich tea culture from an early age.
                </p>
                <p className="text-gray-700 mb-4">
                  Over the years, we have upheld the mission of "Preserving Chinese tea culture, sharing a healthy lifestyle," dedicated to bringing the most authentic Chinese tea and tea culture to every customer.
                  Our teas come from major tea regions across China, carefully selected by experienced tea masters to ensure each leaf meets the highest quality standards.
                </p>
                <p className="text-gray-700">
                  Today, Chinese Tea House has become a well-known brand of Chinese tea in the international market, with our products exported to more than 30 countries and regions,
                  receiving unanimous acclaim from tea enthusiasts both at home and abroad.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-green-800 mb-8 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-green-700 mb-2">Quality Assurance</h3>
              <p className="text-gray-600">
                We promise to provide only the highest quality tea. Each batch of tea undergoes strict tasting and testing by professional tea masters to ensure quality and flavor.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-green-700 mb-2">Integrity in Business</h3>
              <p className="text-gray-600">
                We insist on honest business practices, with transparent product information and fair pricing, earning the long-term trust and support of our customers.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-green-700 mb-2">Cultural Heritage</h3>
              <p className="text-gray-600">
                We not only sell tea but are also committed to spreading traditional Chinese tea culture, regularly hosting tea art demonstrations, tea ceremony lectures, and other cultural activities.
              </p>
            </div>
          </div>
        </section>

        {/* Our Team */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-green-800 mb-8 text-center">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden text-center">
              <div className="h-48 bg-gray-200"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">Zhang Ming</h3>
                <p className="text-green-700 mb-3">Founder & CEO</p>
                <p className="text-gray-600 text-sm">
                  With 20 years of experience in the tea industry, national first-level certification as a tea master, and multiple participations in international tea culture exchange activities.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden text-center">
              <div className="h-48 bg-gray-200"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">Li Mei</h3>
                <p className="text-green-700 mb-3">Chief Tea Master</p>
                <p className="text-gray-600 text-sm">
                  National advanced certification as a tea master, specializing in tasting and brewing various teas, winner of the National Tea Art Competition gold award.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden text-center">
              <div className="h-48 bg-gray-200"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">Wang Qing</h3>
                <p className="text-green-700 mb-3">Procurement Director</p>
                <p className="text-gray-600 text-sm">
                  Responsible for tea quality control and procurement, has established long-term stable cooperative relationships with major tea regions in China.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden text-center">
              <div className="h-48 bg-gray-200"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">Chen Wei</h3>
                <p className="text-green-700 mb-3">Marketing Director</p>
                <p className="text-gray-600 text-sm">
                  Responsible for brand promotion and market expansion, successfully introduced the brand to international markets, expanding brand influence.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Recognition */}
        <section>
          <h2 className="text-2xl font-bold text-green-800 mb-8 text-center">Honors and Certifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-green-700 mb-4">Industry Certifications</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-700 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-700">Member of the China Tea Association</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-700 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-700">ISO9001 Quality Management System Certification</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-700 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-700">Organic Tea Certification</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-700 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-700">International Food Safety Certification</span>
                </li>
              </ul>
            </div>
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-green-700 mb-4">Awards</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-700 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-700">2020 Asian Tea Expo Gold Award</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-700 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-700">2019 National Tea Quality Competition Special Award</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-700 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-700">2018 Chinese Tea Culture Heritage Contribution Award</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-700 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-700">2017 International Tea Expo Most Popular Brand</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
} 