import React from "react";

const GetInvolved = () => {
  return (
    <>
      <section class="py-20 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
        <div class="container mx-auto px-4">
          {/* <!-- Header Section --> */}
          <div class="text-center mb-16">
          <h2 className="text-3xl font-bold text-center text-white mb-4">
          Our <span className="text-black">Impact</span>
        </h2>
            <p class="max-w-2xl mx-auto">
              Together, we're making a difference in communities across the
              globe.
            </p>
          </div>

          {/* <!-- Stats Section --> */}
          <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
            {/* <!-- Stat Card: Members --> */}
            <div class="text-center p-6 bg-white/10 rounded-lg backdrop-blur-lg border border-white/20">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-users w-12 h-12 mx-auto mb-4"
              >
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
              <div class="text-3xl font-bold mb-2">7500+</div>
              <div class="text-lg">Members</div>
            </div>

            {/* <!-- Stat Card: Colleges --> */}
            <div class="text-center p-6 bg-white/10 rounded-lg backdrop-blur-lg border border-white/20">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-school w-12 h-12 mx-auto mb-4"
              >
                <path d="M14 22v-4a2 2 0 1 0-4 0v4"></path>
                <path d="m18 10 4 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-8l4-2"></path>
                <path d="M18 5v17"></path>
                <path d="m4 6 8-4 8 4"></path>
                <path d="M6 5v17"></path>
                <circle cx="12" cy="9" r="2"></circle>
              </svg>
              <div class="text-3xl font-bold mb-2">100+</div>
              <div class="text-lg">Colleges</div>
            </div>

            {/* <!-- Stat Card: Activities --> */}
            <div class="text-center p-6 bg-white/10 rounded-lg backdrop-blur-lg border border-white/20">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-calendar w-12 h-12 mx-auto mb-4"
              >
                <path d="M8 2v4"></path>
                <path d="M16 2v4"></path>
                <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                <path d="M3 10h18"></path>
              </svg>
              <div class="text-3xl font-bold mb-2">300+</div>
              <div class="text-lg">Activities</div>
            </div>
            {/*       
      <!-- Stat Card: Volunteers --> */}
            <div class="text-center p-6 bg-white/10 rounded-lg backdrop-blur-lg border border-white/20">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-heart w-12 h-12 mx-auto mb-4"
              >
                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
              </svg>
              <div class="text-3xl font-bold mb-2">1000+</div>
              <div class="text-lg">Volunteers</div>
            </div>
          </div>

          {/* <!-- CTA Section --> */}
          <div class="mt-16 text-center">
            <div class="max-w-2xl mx-auto mb-8">
              <img
                src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80"
                alt="Team"
                className="w-full h-64 object-cover rounded-xl"
              />
            </div>
            <div class="flex flex-col sm:flex-row justify-center gap-4">
              <button class="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition">
                Become a Member
              </button>
              <button class="bg-purple-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-purple-600 transition">
                Volunteer with Us
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default GetInvolved;
