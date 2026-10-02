import { GraduationCap, Plus, Trash2 } from "lucide-react";

const Education = ({ data = [], onChange }) => {
  const addEducation = () => {
    onChange([
      ...data,
      {
        institution: "",
        degree: "",
        field_of_study: "",
        start_date: "",
        end_date: "",
        is_current: false,
        description: "",
      },
    ]);
  };

  const removeEducation = (index) => {
    onChange(data.filter((_, i) => i !== index));
  };

  const updateEducation = (index, field, value) => {
    const updated = [...data];

    updated[index] = {
      ...updated[index],
      [field]: value,
    };

    onChange(updated);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h3 className="flex items-center gap-2 text-lg font-semibold text-gray-900">
            <GraduationCap className="size-5" />
            Education
          </h3>

          <p className="text-sm text-gray-500">
            Add your educational background.
          </p>
        </div>

        <button
          type="button"
          onClick={addEducation}
          className="flex items-center gap-2 px-3 py-2 text-sm bg-green-100 text-green-700 rounded-lg hover:bg-green-200 transition-colors"
        >
          <Plus className="size-4"/>
          Add Education
        </button>
      </div>

      {/* Empty State */}
      {data.length === 0 ? (
        <div className="border-2 border-dashed border-gray-300 rounded-xl p-10 text-center">
          <GraduationCap className="mx-auto size-12 text-gray-300 mb-3" />

          <h4 className="font-semibold text-gray-700">
            No education added
          </h4>

          <p className="text-sm text-gray-500 mt-1">
            Click "Add Education" to start building your education section.
          </p>
        </div>
      ) : (
        <div className="space-y-6">
          {data.map((education, index) => (
            <div
              key={index}
              className="border rounded-xl p-6 bg-white shadow-sm"
            >
              {/* Card Header */}
              <div className="flex items-center justify-between mb-5">
                <h4 className="font-semibold text-gray-800">
                  Education #{index + 1}
                </h4>

                <button
                  type="button"
                  onClick={() => removeEducation(index)}
                  className="text-red-500 hover:text-red-700"
                >
                  <Trash2 className="size-5" />
                </button>
              </div>

              <div className="space-y-5">
                {/* Institution */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Institution
                  </label>

                  <input
                    type="text"
                    placeholder="University / College"
                    value={education.institution}
                    onChange={(e) =>
                      updateEducation(
                        index,
                        "institution",
                        e.target.value
                      )
                    }
                    className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                  />
                </div>

                {/* Degree & Field */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Degree
                    </label>

                    <input
                      type="text"
                      placeholder="Bachelor of Science"
                      value={education.degree}
                      onChange={(e) =>
                        updateEducation(index, "degree", e.target.value)
                      }
                      className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Field of Study
                    </label>

                    <input
                      type="text"
                      placeholder="Computer Science"
                      value={education.field_of_study}
                      onChange={(e) =>
                        updateEducation(
                          index,
                          "field_of_study",
                          e.target.value
                        )
                      }
                      className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                    />
                  </div>
                </div>

                {/* Dates */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Start Date
                    </label>

                    <input
                      type="month"
                      value={education.start_date}
                      onChange={(e) =>
                        updateEducation(
                          index,
                          "start_date",
                          e.target.value
                        )
                      }
                      className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      End Date
                    </label>

                    <input
                      type="month"
                      disabled={education.is_current}
                      value={education.end_date}
                      onChange={(e) =>
                        updateEducation(
                          index,
                          "end_date",
                          e.target.value
                        )
                      }
                      className="w-full border rounded-lg px-3 py-2 disabled:bg-gray-100 focus:ring-2 focus:ring-blue-500 outline-none"
                    />
                  </div>
                </div>

                {/* Current Study */}
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={education.is_current}
                    onChange={(e) =>
                      updateEducation(
                        index,
                        "is_current",
                        e.target.checked
                      )
                    }
                  />

                  <span className="text-sm text-gray-700">
                    I am currently studying here
                  </span>
                </label>

                {/* Description */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Description
                  </label>

                  <textarea
                    rows={4}
                    placeholder="Achievements, GPA, coursework, honors, extracurricular activities..."
                    value={education.description}
                    onChange={(e) =>
                      updateEducation(
                        index,
                        "description",
                        e.target.value
                      )
                    }
                    className="w-full border rounded-lg px-3 py-2 resize-none focus:ring-2 focus:ring-blue-500 outline-none"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Education;