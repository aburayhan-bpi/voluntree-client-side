import React from "react";

const HowItWorks = () => {
  return (
    <section class="mt-10 relative">
      <div class="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
        <div class="w-full flex-col justify-start items-center lg:gap-12 gap-10 inline-flex">
          <div class="w-full flex-col justify-start items-center gap-3 flex">
            <h2 class="w-full text-center text-gray-900 dark:text-white/90 text-4xl font-bold font-manrope leading-normal">
              How Voluntree Works
            </h2>
            <p class="max-w-xl text-center text-gray-500 dark:text-white/80 text-base font-normal leading-relaxed">
              Voluntree is a volunteer management system that allows users to
              create accounts, post volunteer needs, manage their posts, and
              much more. Here’s how it works:
            </p>
          </div>
          <div class="w-full justify-start items-center gap-4 flex md:flex-row flex-col">
            <div class="grow shrink basis-0 flex-col justify-start items-center gap-2.5 inline-flex">
              <div class="self-stretch flex-col justify-start items-center gap-0.5 flex">
                <h3 class="self-stretch text-center text-indigo-600 text-4xl font-extrabold font-manrope leading-normal">
                  1
                </h3>
                <h4 class="self-stretch text-center text-gray-900 dark:text-white/90 text-xl font-semibold leading-8">
                  Create an Account
                </h4>
              </div>
              <p class="self-stretch text-center text-gray-400 text-base font-normal leading-relaxed">
                Start by creating an account on Voluntree. Whether you're an
                individual looking to volunteer or an organization in need of
                volunteers, signing up is quick and easy.
              </p>
            </div>
            <svg
              class="md:flex hidden"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M5.50159 6L11.5018 12.0002L5.49805 18.004M12.5016 6L18.5018 12.0002L12.498 18.004"
                stroke="#4F46E5"
                stroke-width="1.6"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <div class="grow shrink basis-0 flex-col justify-start items-center gap-2.5 inline-flex">
              <div class="self-stretch flex-col justify-start items-center gap-0.5 flex">
                <h3 class="self-stretch text-center text-indigo-600 text-4xl font-extrabold font-manrope leading-normal">
                  2
                </h3>
                <h4 class="self-stretch text-center text-gray-900 dark:text-white/90 text-xl font-semibold leading-8">
                  Post Volunteer Needs
                </h4>
              </div>
              <p class="self-stretch text-center text-gray-400 text-base font-normal leading-relaxed">
                After creating your account, post your volunteer needs on
                Voluntree. Whether you need volunteers for a specific project or
                ongoing help, you can easily manage your posts.
              </p>
            </div>
            <svg
              class="md:flex hidden"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M5.50159 6L11.5018 12.0002L5.49805 18.004M12.5016 6L18.5018 12.0002L12.498 18.004"
                stroke="#4F46E5"
                stroke-width="1.6"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <div class="grow shrink basis-0 flex-col justify-start items-center gap-2.5 inline-flex">
              <div class="self-stretch flex-col justify-start items-center gap-0.5 flex">
                <h3 class="self-stretch text-center text-indigo-600 text-4xl font-extrabold font-manrope leading-normal">
                  3
                </h3>
                <h4 class="self-stretch text-center text-gray-900 dark:text-white/90 text-xl font-semibold leading-8">
                  Manage and Connect
                </h4>
              </div>
              <p class="self-stretch text-center text-gray-400 text-base font-normal leading-relaxed">
                Once your posts are live, you can manage and track the
                volunteers who are interested in helping. You can easily connect
                with volunteers and handle requests directly through your
                account.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
