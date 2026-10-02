import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeftIcon, FileX } from "lucide-react";

import { dummyResumeData } from "../assets/assets";
import ResumePreview from "../components/ResumePreview";
import Loader from "../components/Loader";

const Preview = () => {
  const { resumeId } = useParams();

  const [isLoading, setIsLoading] = useState(true);
  const [resumeData, setResumeData] = useState(null);

  const loadResume = async () => {
    const resume = dummyResumeData.find(
      (resume) => resume._id === resumeId
    );

    setResumeData(resume || null);
    setIsLoading(false);
  };

  useEffect(() => {
    loadResume();
  }, [resumeId]);

  // =========================
  // LOADING
  // =========================
  if (isLoading) {
    return (
      <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-green-50 via-emerald-50 to-green-100 px-4">
        <Loader />
      </div>
    );
  }

  // =========================
  // RESUME NOT FOUND
  // =========================
  if (!resumeData) {
    return (
      <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-green-50 via-emerald-50 to-lime-100 px-4 py-6">
        <div className="w-full max-w-md rounded-2xl sm:rounded-3xl bg-white border border-green-200 shadow-xl sm:shadow-2xl p-5 sm:p-8 text-center">

          {/* Icon */}
          <div className="mx-auto mb-5 sm:mb-6 flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-full bg-green-100">
            <FileX className="h-8 w-8 sm:h-10 sm:w-10 text-green-600" />
          </div>

          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
            Resume Not Found
          </h2>

          {/* Description */}
          <p className="mt-3 text-sm sm:text-base text-gray-500 leading-relaxed">
            The resume you're looking for doesn't exist or may have been
            removed.
          </p>

          {/* Button */}
          <Link
            to="/"
            className="mt-6 sm:mt-8 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-green-600 to-emerald-500 px-5 sm:px-6 py-3 text-sm sm:text-base text-white font-semibold shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:from-green-700 hover:to-emerald-600"
          >
            <ArrowLeftIcon className="h-4 w-4 sm:h-5 sm:w-5" />
            <span>Back to Home</span>
          </Link>

        </div>
      </div>
    );
  }

  // =========================
  // PREVIEW
  // =========================
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-green-50 via-white to-emerald-50">

      {/* Main Container */}
      <div className="mx-auto w-full max-w-7xl px-3 py-4 sm:px-5 sm:py-6 lg:px-8 lg:py-8">

        {/* Back Button */}
        <div className="mb-4 sm:mb-5 lg:mb-6">
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-lg sm:rounded-xl border border-green-200 bg-white px-3.5 py-2 sm:px-5 sm:py-2.5 text-sm sm:text-base text-green-700 font-medium shadow-sm transition-all duration-300 hover:bg-green-50 hover:shadow-md"
          >
            <ArrowLeftIcon className="h-4 w-4 sm:h-5 sm:w-5" />
            <span>Back</span>
          </Link>
        </div>

        {/* Resume Card */}
        <div className="w-full overflow-hidden rounded-2xl sm:rounded-3xl border border-green-200 bg-white shadow-lg sm:shadow-2xl">

          {/* Resume Background */}
          <div className="w-full bg-green-50 p-2 sm:p-4 md:p-6 lg:p-8">

            {/* Responsive Resume Area */}
            <div className="w-full overflow-x-auto overflow-y-hidden">

              {/* Resume Width */}
              <div className="mx-auto w-full min-w-[320px] max-w-[900px]">

                <ResumePreview
                  data={resumeData}
                  template={resumeData.template}
                  accentColor={resumeData.accent_color}
                />

              </div>

            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Preview;