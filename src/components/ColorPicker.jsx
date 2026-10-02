import React from "react";
import { Check, Palette } from "lucide-react";
import { useState } from "react";

const ColorPicker = ({ selectedColor, onChange }) => {
  const colors = [
    { name: "Blue", value: "#3B82F6" },
    { name: "Sky", value: "#0EA5E9" },
    { name: "Indigo", value: "#6366F1" },
    { name: "Purple", value: "#8B5CF6" },
    { name: "Pink", value: "#EC4899" },
    { name: "Red", value: "#EF4444" },
    { name: "Orange", value: "#F97316" },
    { name: "Amber", value: "#F59E0B" },
    { name: "Yellow", value: "#EAB308" },
    { name: "Lime", value: "#84CC16" },
    { name: "Green", value: "#22C55E" },
    { name: "Emerald", value: "#10B981" },
    { name: "Teal", value: "#14B8A6" },
    { name: "Cyan", value: "#06B6D4" },
    { name: "Slate", value: "#64748B" },
    { name: "Gray", value: "#6B7280" },
    { name: "Zinc", value: "#52525B" },
    { name: "Neutral", value: "#737373" },
    { name: "Stone", value: "#78716C" },
    { name: "Black", value: "#111827" },
  ];

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 text-sm text-purple-600 bg-gradient-to-br from-purple-50 to-purple-100 ring-1 ring-purple-300 hover:ring-purple-400 transition-all px-3 py-2 rounded-lg"
      >
        <Palette size={16} />
        <span className="max-sm:hidden">Accent</span>
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-2 z-10 w-60 p-3 bg-white rounded-lg border border-gray-200 shadow-lg">
          <div className="grid grid-cols-4 gap-3">
            {colors.map((color) => (
              <div
                key={color.value}
                className="flex flex-col items-center cursor-pointer group"
                onClick={() => {
                  onChange(color.value);
                  setIsOpen(false);
                }}
              >
                <div className="relative">
                  <div
                    className={`w-12 h-12 rounded-full border-2 transition-colors ${
                      selectedColor === color.value
                        ? "border-black"
                        : "border-transparent group-hover:border-black/25"
                    }`}
                    style={{ backgroundColor: color.value }}
                  />

                  {selectedColor === color.value && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Check size={18} className="text-white" />
                    </div>
                  )}
                </div>

                <p className="mt-1 text-xs text-center text-gray-600">
                  {color.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ColorPicker;