import { Layout, Check } from "lucide-react";
import { useState } from "react";

const TemplateSelector = ({ selectedTemplate, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const templates = [
    {
      id: "classic",
      name: "Classic",
      preview:
        "A clean, traditional resume format with clear sections and professional typography.",
    },
    {
      id: "modern",
      name: "Modern",
      preview:
        "Sleek design with strategic use of color and modern font choices.",
    },
    {
      id: "minimal",
      name: "Minimal",
      preview:
        "Ultra-clean design that puts your content front and center.",
    },
    {
      id: "minimal-image",
      name: "Minimal Image",
      preview:
        "Minimal design with a profile image and clean typography.",
    },
  ];

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex items-center gap-2 rounded-lg bg-gradient-to-br from-blue-50 to-blue-100 px-3 py-2 text-sm font-medium text-blue-600 ring-1 ring-blue-300 transition-all hover:bg-blue-100"
      >
        <Layout size={16} />
        <span className="hidden sm:inline">Template</span>
      </button>

      {isOpen && (
        <div className="absolute left-0 top-full z-20 mt-2 w-72 space-y-2 rounded-lg border border-gray-200 bg-white p-3 shadow-lg">
          {templates.map((template) => (
  <div
    key={template.id}
    onClick={() => {
      onChange(template.id);
      setIsOpen(false);
    }}
    className={`relative cursor-pointer rounded-lg border p-3 transition-all duration-200 ${
      selectedTemplate === template.id
        ? "border-blue-500 bg-blue-50"
        : "border-gray-200 hover:border-blue-300 hover:bg-gray-50"
    }`}
  >
    {/* Selected Tick */}
    {selectedTemplate === template.id && (
      <div className="absolute top-2 right-2 flex h-6 w-6 items-center justify-center rounded-full bg-blue-500 shadow">
        <Check size={14} className="text-white" strokeWidth={3} />
      </div>
    )}

    <h4 className="font-semibold text-gray-800">
      {template.name}
    </h4>

    <p className="mt-2 text-xs italic text-gray-500">
      {template.preview}
    </p>
  </div>
))}
        </div>
      )}
    </div>
  );
};

export default TemplateSelector;