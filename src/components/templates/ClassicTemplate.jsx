import {
  Mail,
  Phone,
  MapPin,
  Globe,
} from "lucide-react";

const ClassicTemplate = ({ data, accentColor = "#2563EB" }) => {
  const formatDate = (date) => {
    if (!date) return "";

    const [year, month] = date.split("-");

    return new Date(year, month - 1).toLocaleDateString("en-US", {
      month: "short",
      year: "numeric",
    });
  };

  return (
    <div className="max-w-4xl mx-auto bg-white text-gray-800 p-8 leading-relaxed">

      {/* ================= Header ================= */}

      <header
        className="border-b-2 pb-6 mb-8"
        style={{ borderColor: accentColor }}
      >
        <h1
          className="text-4xl font-bold text-center"
          style={{ color: accentColor }}
        >
          {data.personal_info?.full_name || "Your Name"}
        </h1>

        {data.personal_info?.job_title && (
          <p className="text-center text-lg text-gray-600 mt-2">
            {data.personal_info.job_title}
          </p>
        )}

        <div className="flex flex-wrap justify-center gap-4 mt-5 text-sm text-gray-600">

          {data.personal_info?.email && (
            <div className="flex items-center gap-2">
              <Mail size={16} />
              <span>{data.personal_info.email}</span>
            </div>
          )}

          {data.personal_info?.phone && (
            <div className="flex items-center gap-2">
              <Phone size={16} />
              <span>{data.personal_info.phone}</span>
            </div>
          )}

          {data.personal_info?.location && (
            <div className="flex items-center gap-2">
              <MapPin size={16} />
              <span>{data.personal_info.location}</span>
            </div>
          )}

          {data.personal_info?.linkedin && (
            <div className="flex items-center gap-2">
              {/* <Linkedin size={16} /> */}
              <span className="break-all">
                {data.personal_info.linkedin}
              </span>
            </div>
          )}

          {data.personal_info?.website && (
            <div className="flex items-center gap-2">
              <Globe size={16} />
              <span className="break-all">
                {data.personal_info.website}
              </span>
            </div>
          )}
        </div>
      </header>

      {/* ================= Summary ================= */}

      {data.professional_summary && (
        <section className="mb-8">
          <h2
            className="text-xl font-bold uppercase mb-3"
            style={{ color: accentColor }}
          >
            Professional Summary
          </h2>

          <p className="text-gray-700 whitespace-pre-line">
            {data.professional_summary}
          </p>
        </section>
      )}

      {/* ================= Experience ================= */}

      {data.experience?.length > 0 && (
        <section className="mb-8">
          <h2
            className="text-xl font-bold uppercase mb-4"
            style={{ color: accentColor }}
          >
            Professional Experience
          </h2>

          <div className="space-y-6">
            {data.experience.map((exp, index) => (
              <div
                key={index}
                className="border-l-4 pl-5"
                style={{ borderColor: accentColor }}
              >
                <div className="flex justify-between flex-wrap gap-2">

                  <div>
                    <h3 className="font-bold text-lg">
                      {exp.position}
                    </h3>

                    <p className="text-gray-600">
                      {exp.company}
                    </p>
                  </div>

                  <div className="text-sm text-gray-500">
                    {formatDate(exp.start_date)}
                    {" - "}
                    {exp.is_current
                      ? "Present"
                      : formatDate(exp.end_date)}
                  </div>

                </div>

                {exp.description && (
                  <p className="mt-3 whitespace-pre-line text-gray-700">
                    {exp.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ================= Projects ================= */}

     {/* ================= Projects ================= */}

{data.projects?.length > 0 && (
  <section className="mb-8">
    <h2
      className="text-xl font-bold uppercase mb-4"
      style={{ color: accentColor }}
    >
      Projects
    </h2>

    <div className="space-y-6">
      {data.projects.map((project, index) => (
        <div
          key={index}
          className="border-l-4 pl-5"
          style={{ borderColor: accentColor }}
        >
          {/* Project Header */}
          <div className="flex justify-between flex-wrap gap-2">
            <div>
              <h3 className="font-bold text-lg">
                {project.name}
              </h3>

              {project.technologies && (
                <p className="text-sm text-gray-600 mt-1">
                  <span className="font-medium">Technologies:</span>{" "}
                  {project.technologies}
                </p>
              )}
            </div>

            {(project.start_date || project.end_date) && (
              <div className="text-sm text-gray-500">
                {formatDate(project.start_date)}
                {" - "}
                {project.is_current
                  ? "Present"
                  : formatDate(project.end_date)}
              </div>
            )}
          </div>

          {/* Description */}
          {project.description && (
            <p className="mt-3 whitespace-pre-line text-gray-700">
              {project.description}
            </p>
          )}

          {/* URL */}
          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-3 text-sm font-medium text-blue-600 hover:underline break-all"
            >
              🔗 {project.url}
            </a>
          )}
        </div>
      ))}
    </div>
  </section>
)}
      {/* ================= Education ================= */}

      {data.education?.length > 0 && (
        <section className="mb-8">
          <h2
            className="text-xl font-bold uppercase mb-4"
            style={{ color: accentColor }}
          >
            Education
          </h2>

          <div className="space-y-6">
            {data.education.map((edu, index) => (
              <div
                key={index}
                className="border-l-4 pl-5"
                style={{ borderColor: accentColor }}
              >
                <div className="flex justify-between flex-wrap gap-2">

                  <div>
                    <h3 className="font-bold">
                      {edu.degree}
                    </h3>

                    {edu.field_of_study && (
                      <p className="text-gray-700">
                        {edu.field_of_study}
                      </p>
                    )}

                    <p className="text-gray-600">
                      {edu.institution}
                    </p>
                  </div>

                  <div className="text-sm text-gray-500">
                    {formatDate(edu.start_date)}
                    {" - "}
                    {edu.is_current
                      ? "Present"
                      : formatDate(edu.end_date)}
                  </div>

                </div>

                {edu.description && (
                  <p className="mt-3 whitespace-pre-line text-gray-700">
                    {edu.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ================= Skills ================= */}

      {data.skills?.length > 0 && (
        <section>
          <h2
            className="text-xl font-bold uppercase mb-4"
            style={{ color: accentColor }}
          >
            Skills
          </h2>

          <div className="flex flex-wrap gap-3">
            {data.skills.map((skill, index) => (
              <div
                key={index}
                className="px-4 py-2 rounded-full border text-sm"
                style={{
                  borderColor: accentColor,
                  color: accentColor,
                }}
              >
                {skill.name}

                {skill.level && (
                  <span className="ml-2 text-gray-500">
                    ({skill.level})
                  </span>
                )}
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default ClassicTemplate;