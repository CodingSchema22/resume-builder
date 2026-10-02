import {
  FilePenLineIcon,
  PencilIcon,
  PlusIcon,
  TrashIcon,
  UploadCloudIcon,
  XIcon,
} from "lucide-react";
import React, { useEffect, useState } from "react";
import { dummyResumeData } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const colors = ["#9333ea", "#d97706", "#dc2626", "#0284c7", "#16a34a"];

  const [allResumes, setAllResumes] = useState([]);
  const [showCreateResume, setShowCreateResume] = useState(false);
  const [showUploadResume, setShowUploadResume] = useState(false);
  const [title, setTitle] = useState("");
  const [resume, setResume] = useState(null);
const [editResumeId, setEditResumeId] = useState("");
  const navigate = useNavigate();

  const loadAllResume = async () => {
    setAllResumes(dummyResumeData);
  };

  const createResume = (e) => {
    e.preventDefault();

    setShowCreateResume(false);
    setTitle("");

    navigate("/app/builder/res123");
  };

  const uploadResume = (e) => {
    e.preventDefault();
    setShowUploadResume(false);
    setTitle("");
    setResume(null);

    navigate("/app/builder/res123");
  };
const editTitle = async (e) => {
  e.preventDefault();

  setAllResumes((prev) =>
    prev.map((item) =>
      item._id === editResumeId
        ? { ...item, title }
        : item
    )
  );

  setEditResumeId("");
  setTitle("");
};
const deleteResume = async (resumeId) =>{
const confirm = window.confirm('Are you sure you want to delete this resume?')
if(confirm){
  setAllResumes(prev => prev.filter(resume => resume._id !== resumeId ))
}
}

  useEffect(() => {
    loadAllResume();
  }, []);

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <p className="text-2xl font-medium mb-6 bg-gradient-to-r from-slate-600 to-slate-700 bg-clip-text text-transparent sm:hidden">
          Welcome, Joe
        </p>

        <div className="flex gap-4">
          <button
            onClick={() => setShowCreateResume(true)}
            className="w-full sm:max-w-36 h-48 bg-white flex flex-col items-center justify-center rounded-lg gap-2 border border-dashed border-slate-300 text-slate-600 hover:border-green-500 hover:shadow-lg transition-all duration-300 group"
          >
            <PlusIcon className="size-11 p-2.5 rounded-full text-white bg-gradient-to-br from-green-300 to-green-500" />

            <p className="text-sm group-hover:text-green-600">
              Create Resume
            </p>
          </button>

          <button
            onClick={() => setShowUploadResume(true)}
            className="w-full sm:max-w-36 h-48 bg-white flex flex-col items-center justify-center rounded-lg gap-2 border border-dashed border-slate-300 text-slate-600 hover:border-green-500 hover:shadow-lg transition-all duration-300 group"
          >
            <UploadCloudIcon className="size-11 p-2.5 rounded-full text-white bg-gradient-to-br from-green-300 to-green-500" />

            <p className="text-sm group-hover:text-green-600">
              Upload Existing
            </p>
          </button>
        </div>

        <hr className="border-slate-300 my-6" />

        <div className="grid grid-cols-2 sm:flex flex-wrap gap-4">
          {allResumes.map((resume, index) => {
            const baseColor = colors[index % colors.length];

            return (
             <button
  key={resume._id || index}
  onClick={() => navigate(`/app/builder/${resume._id}`)}
  className="relative w-full sm:max-w-36 h-48 rounded-lg border flex flex-col justify-center items-center gap-2 group hover:shadow-lg transition-all"
  style={{
    background: `linear-gradient(135deg, ${baseColor}10, ${baseColor}40)`,
    borderColor: `${baseColor}40`,
  }}
>
                <FilePenLineIcon
                  className="size-7 group-hover:scale-105 transition-all"
                  style={{ color: baseColor }}
                />

                <p
                  className="text-sm px-2 text-center"
                  style={{ color: baseColor }}
                >
                  {resume.title}
                </p>

                <p
                  className="absolute bottom-2 text-[11px] px-2 text-center"
                  style={{ color: `${baseColor}90` }}
                >
                  Updated on{" "}
                  {new Date(resume.updatedAt).toLocaleDateString()}
                </p>

                <div onClick={e=> e.stopPropagation()}className="absolute top-2 right-2 hidden group-hover:flex items-center">
                  <TrashIcon
  className="size-7 p-1.5 rounded hover:bg-white/50 cursor-pointer"
  onClick={(e) => {
    e.stopPropagation();
    deleteResume(resume._id);
  }}
/>

                  <PencilIcon
  className="size-7 p-1.5 rounded hover:bg-white/50 cursor-pointer"
  onClick={(e) => {
    e.stopPropagation();
    setEditResumeId(resume._id);
    setTitle(resume.title);
  }}
/>
                </div>
              </button>
            );
          })}
        </div>
                {/* Create Resume Modal */}
        {showCreateResume && (
          <form
            onSubmit={createResume}
            onClick={() => setShowCreateResume(false)}
            className="fixed inset-0 z-10 flex items-center justify-center bg-black/70 backdrop-blur-sm"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-sm rounded-lg border bg-slate-50 p-6 shadow-md"
            >
              <h2 className="mb-4 text-xl font-bold">Create a Resume</h2>

              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter resume title"
                className="mb-4 w-full rounded-md border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
                required
              />

              <button
                type="submit"
                className="w-full rounded bg-green-600 py-2 text-white transition-colors hover:bg-green-700"
              >
                Create Resume
              </button>

              <XIcon
                className="absolute right-4 top-4 cursor-pointer text-slate-400 transition-colors hover:text-slate-600"
                onClick={() => {
                  setShowCreateResume(false);
                  setTitle("");
                }}
              />
            </div>
          </form>
        )}

        {/* Upload Resume Modal */}
        {showUploadResume && (
          <form
            onSubmit={uploadResume}
            onClick={() => setShowUploadResume(false)}
            className="fixed inset-0 z-10 flex items-center justify-center bg-black/70 backdrop-blur-sm"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-sm rounded-lg border bg-slate-50 p-6 shadow-md"
            >
              <h2 className="mb-4 text-xl font-bold">Upload Resume</h2>

              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter resume title"
                className="mb-4 w-full rounded-md border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
                required
              />

              <label
                htmlFor="resume-input"
                className="block cursor-pointer text-sm text-slate-700"
              >
                Select Resume File

                <div className="my-4 flex flex-col items-center justify-center gap-2 rounded-md border border-dashed border-slate-400 p-10 text-slate-400 transition-colors hover:border-green-500 hover:text-green-700">
                  {resume ? (
                    <p className="text-center text-green-700">
                      {resume.name}
                    </p>
                  ) : (
                    <>
                      <UploadCloudIcon className="size-14 stroke-1" />
                      <p>Upload Resume</p>
                    </>
                  )}
                </div>
              </label>

              <input
                id="resume-input"
                type="file"
                accept=".pdf,.doc,.docx"
                hidden
                onChange={(e) => {
                  if (e.target.files.length > 0) {
                    setResume(e.target.files[0]);
                  }
                }}
              />

              <button
                type="submit"
                className="mt-2 w-full rounded bg-green-600 py-2 text-white transition-colors hover:bg-green-700"
              >
                Upload Resume
              </button>

              <XIcon
                className="absolute right-4 top-4 cursor-pointer text-slate-400 transition-colors hover:text-slate-600"
                onClick={() => {
                  setShowUploadResume(false);
                  setTitle("");
                  setResume(null);
                }}
              />
            </div>
          </form>
        )}





 {editResumeId && (
          <form
            onSubmit={editTitle}
            onClick={() => setEditResumeId('')}
            className="fixed inset-0 z-10 flex items-center justify-center bg-black/70 backdrop-blur-sm"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-sm rounded-lg border bg-slate-50 p-6 shadow-md"
            >
              <h2 className="mb-4 text-xl font-bold">Edit Resume Title</h2>

              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter resume title"
                className="mb-4 w-full rounded-md border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
                required
              />

              <button
                type="submit"
                className="w-full rounded bg-green-600 py-2 text-white transition-colors hover:bg-green-700"
              >
                Update
              </button>

              <XIcon
                className="absolute right-4 top-4 cursor-pointer text-slate-400 transition-colors hover:text-slate-600"
                onClick={() => {
                  setEditResumeId('');
                  setTitle("");
                }}
              />
            </div>
          </form>
        )}



      </div>
    </>
  );
};

export default Dashboard;