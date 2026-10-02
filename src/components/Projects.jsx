import {
  FolderGit2,
  Plus,
  Trash2,
  Link as LinkIcon,
} from "lucide-react";

const Projects = ({ data = [], onChange }) => {
  const addProject = () => {
    // Prevent multiple empty cards
    if (data.length > 0 && !data[data.length - 1].name.trim()) return;

    onChange([
      ...data,
      {
        name: "",
        technologies: "",
        url: "",
        start_date: "",
        end_date: "",
        is_current: false,
        description: "",
      },
    ]);
  };

  const removeProject = (index) => {
    onChange(data.filter((_, i) => i !== index));
  };

  const updateProject = (index, field, value) => {
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
          <h3 className="flex items-center gap-2 text-xl font-semibold text-gray-900">
            <FolderGit2 className="size-5 text-purple-600" />
            Projects
          </h3>

          <p className="mt-1 text-sm text-gray-500">
            Showcase your best personal or professional projects.
          </p>
        </div>

       <button
  type="button"
  onClick={addProject}
  disabled={
    data.length > 0 &&
    !data[data.length - 1]?.name?.trim()
  }
  className="inline-flex items-center gap-2 whitespace-nowrap rounded-lg bg-green-100 px-4 py-2 text-sm font-medium text-green-700 transition-colors hover:bg-green-200 disabled:cursor-not-allowed disabled:opacity-50"
>
  <Plus className="size-4" />
  <span>Add Project</span>
</button>
      </div>

      {/* Empty State */}
      {data.length === 0 ? (
        <div className="rounded-xl border-2 border-dashed border-gray-300 bg-gray-50 py-12 text-center">
          <FolderGit2 className="mx-auto mb-4 size-14 text-gray-300" />

          <h4 className="text-lg font-semibold text-gray-700">
            No Projects Added
          </h4>

          <p className="mt-2 text-sm text-gray-500">
            Add your projects to make your resume stand out.
          </p>
        </div>
      ) : (
        <div className="space-y-6">
          {data.map((project, index) => (
            <div
              key={index}
              className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition"
            >
              {/* Card Header */}
              <div className="mb-5 flex items-center justify-between">
                <h4 className="font-semibold text-gray-800">
                  Project #{index + 1}
                </h4>

                <button
                  type="button"
                  onClick={() => removeProject(index)}
                  className="rounded-lg p-2 text-red-500 hover:bg-red-50 hover:text-red-700 transition"
                >
                  <Trash2 className="size-5" />
                </button>
              </div>

              <div className="space-y-5">
                {/* Project Name */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Project Name
                  </label>

                  <input
                    type="text"
                    placeholder="Resume Builder"
                    value={project.name}
                    onChange={(e) =>
                      updateProject(index, "name", e.target.value)
                    }
                    className="w-full rounded-lg border border-gray-300 px-3 py-2 outline-none transition focus:border-purple-500 focus:ring-2 focus:ring-purple-500"
                  />
                </div>

                {/* Technologies */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Technologies Used
                  </label>

                  <input
                    type="text"
                    placeholder="React, Node.js, Express, MongoDB"
                    value={project.technologies}
                    onChange={(e) =>
                      updateProject(
                        index,
                        "technologies",
                        e.target.value
                      )
                    }
                    className="w-full rounded-lg border border-gray-300 px-3 py-2 outline-none transition focus:border-purple-500 focus:ring-2 focus:ring-purple-500"
                  />
                </div>

                {/* URL */}
                <div>
                  <label className="mb-2 flex items-center gap-2 text-sm font-medium text-gray-700">
                    <LinkIcon className="size-4" />
                    Project URL / GitHub
                  </label>

                  <input
                    type="url"
                    placeholder="https://github.com/username/project"
                    value={project.url}
                    onChange={(e) =>
                      updateProject(index, "url", e.target.value)
                    }
                    className="w-full rounded-lg border border-gray-300 px-3 py-2 outline-none transition focus:border-purple-500 focus:ring-2 focus:ring-purple-500"
                  />
                </div>

                {/* Dates */}
                <div className="grid gap-5 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">
                      Start Date
                    </label>

                    <input
                      type="month"
                      value={project.start_date}
                      onChange={(e) =>
                        updateProject(index, "start_date", e.target.value)
                      }
                      className="w-full rounded-lg border border-gray-300 px-3 py-2 outline-none transition focus:border-purple-500 focus:ring-2 focus:ring-purple-500"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">
                      End Date
                    </label>

                    <input
                      type="month"
                      disabled={project.is_current}
                      value={project.end_date}
                      onChange={(e) =>
                        updateProject(index, "end_date", e.target.value)
                      }
                      className="w-full rounded-lg border border-gray-300 px-3 py-2 disabled:bg-gray-100 outline-none transition focus:border-purple-500 focus:ring-2 focus:ring-purple-500"
                    />
                  </div>
                </div>

                {/* Current Project */}
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={project.is_current}
                    onChange={(e) =>
                      updateProject(index, "is_current", e.target.checked)
                    }
                  />

                  <span className="text-sm text-gray-700">
                    I am currently working on this project
                  </span>
                </label>

                {/* Description */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Description
                  </label>

                  <textarea
                    rows={5}
                    placeholder="Describe your project, your role, key features, and achievements..."
                    value={project.description}
                    onChange={(e) =>
                      updateProject(index, "description", e.target.value)
                    }
                    className="w-full resize-none rounded-lg border border-gray-300 px-3 py-2 outline-none transition focus:border-purple-500 focus:ring-2 focus:ring-purple-500"
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

export default Projects;