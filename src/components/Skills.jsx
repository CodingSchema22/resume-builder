import { Brain, Plus, Trash2 } from "lucide-react";

const Skills = ({ data = [], onChange }) => {
  const addSkill = () => {
    // Prevent multiple empty cards
    if (data.length > 0 && !data[data.length - 1].name.trim()) return;

    onChange([
      ...data,
      {
        name: "",
        level: "Intermediate",
      },
    ]);
  };

  const removeSkill = (index) => {
    onChange(data.filter((_, i) => i !== index));
  };

  const updateSkill = (index, field, value) => {
    const updated = [...data];

    updated[index] = {
      ...updated[index],
      [field]: value,
    };

    onChange(updated);
  };

  return (
  <div className="space-y-8">
  {/* Header */}
  <div className="flex items-center justify-between">
    <div>
      <h2 className="flex items-center gap-2 text-2xl font-bold text-gray-900">
        <Brain className="size-6 text-violet-600" />
        Skills
      </h2>

      <p className="mt-1 text-sm text-gray-500">
        Add your technical and professional skills.
      </p>
    </div>

    <button
      type="button"
      onClick={addSkill}
      disabled={
        data.length > 0 &&
        !data[data.length - 1]?.name?.trim()
      }
      className="flex items-center gap-2 rounded-xl bg-violet-600 px-5 py-2.5 text-sm font-medium text-white shadow-sm transition-all hover:bg-violet-700 hover:shadow-md disabled:cursor-not-allowed disabled:opacity-50"
    >
      <Plus className="size-4" />
      Add Skill
    </button>
  </div>

  {/* Empty State */}
  {data.length === 0 ? (
    <div className="rounded-2xl border border-dashed border-gray-300 bg-gray-50 px-6 py-14 text-center">
      <Brain className="mx-auto mb-4 size-12 text-gray-300" />

      <h3 className="text-lg font-semibold text-gray-800">
        No skills added yet
      </h3>

      <p className="mt-2 text-sm text-gray-500">
        Click <span className="font-medium">"Add Skill"</span> to start building
        your resume.
      </p>
    </div>
  ) : (
    <div className="space-y-4">
      {data.map((skill, index) => (
        <div
          key={index}
          className="rounded-2xl border border-gray-200 bg-white p-5 transition-all duration-300 hover:border-violet-300 hover:shadow-lg"
        >
          {/* Top */}
          <div className="mb-5 flex items-center justify-between">
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-violet-600">
                Skill {index + 1}
              </p>

              <h3 className="text-lg font-semibold text-gray-900">
                {skill.name || "New Skill"}
              </h3>
            </div>

            <button
              type="button"
              onClick={() => removeSkill(index)}
              className="rounded-lg p-2 text-gray-400 transition hover:bg-red-50 hover:text-red-500"
            >
              <Trash2 className="size-5" />
            </button>
          </div>

          {/* Inputs */}
          <div className="grid gap-5 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-600">
                Skill Name
              </label>

              <input
                type="text"
                value={skill.name}
                onChange={(e) =>
                  updateSkill(index, "name", e.target.value)
                }
                placeholder="React, JavaScript, Python..."
                className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none transition focus:border-violet-500 focus:bg-white focus:ring-2 focus:ring-violet-100"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-600">
                Skill Level
              </label>

              <select
                value={skill.level}
                onChange={(e) =>
                  updateSkill(index, "level", e.target.value)
                }
                className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none transition focus:border-violet-500 focus:bg-white focus:ring-2 focus:ring-violet-100"
              >
                <option value="Beginner">Beginner</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Advanced">Advanced</option>
                <option value="Expert">Expert</option>
              </select>
            </div>
          </div>
        </div>
      ))}
    </div>
  )}
</div>
  );
};

export default Skills;