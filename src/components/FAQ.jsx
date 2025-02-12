import React, { useState } from "react";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "What is Voluntree?",
      answer:
        "Voluntree is a volunteer management system that connects individuals and organizations with volunteer opportunities.",
    },
    {
      question: "How do I create an account?",
      answer:
        "To create an account, click the 'Sign Up' button on the homepage, fill in your details, and you'll be ready to post volunteer needs or sign up as a volunteer.",
    },
    {
      question: "How can I post volunteer needs?",
      answer:
        "Once you create an account, you can go to your dashboard and select 'Add Volunteer Need Post.' Fill in the details of the volunteer opportunity, and it will be visible to potential volunteers.",
    },
    {
      question: "How do I manage my posts?",
      answer:
        "Go to your dashboard where you can view all your posted volunteer opportunities. From there, you can edit, delete, or update them.",
    },
    {
      question: "Is there a fee to use Voluntree?",
      answer:
        "No, Voluntree is completely free to use for both volunteers and organizations posting needs.",
    },
  ];

  return (
    <section className="">
      <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
        <div className="w-full flex-col justify-start items-center lg:gap-12 gap-10 inline-flex">
          <div className="w-full flex-col justify-start items-center gap-3 flex">
            <h2 className="w-full text-center text-gray-900 text-4xl font-bold font-manrope leading-normal">
              Frequently Asked Questions (FAQ)
            </h2>
          </div>
          <div className="w-full flex flex-col gap-6">
            {faqData.map((faq, index) => (
              <div
                key={index}
                className="collapse collapse-plus border border-base-300 rounded-lg"
              >
                <input type="checkbox" className="peer" />
                <div className="collapse-title text-xl font-medium bg-green-200 text-black">
                  {faq.question}
                </div>
                <div className="collapse-content bg-green-100 p-4">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
