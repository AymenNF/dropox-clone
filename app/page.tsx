"use client";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  const [downloadUrl, setDownloadUrl] = useState('');

  const handleDownload = () => {
    if (downloadUrl) {
      window.location.href = downloadUrl;
    } else {
      alert('Please enter a valid URL.');
    }
  };

  return (
    <main className="">
      <section className="flex flex-col lg:flex-row items-center bg-[#2B2929] dark:bg-slate-800">
        <div className="p-10 flex flex-col bg-[#2B2929] dark:bg-slate-800 text-white space-y-5">
          <h1 className="text-5xl font-bold">
            Welcome to Our Website. <br />
            <br />
            Storing everything for you and your business needs. All in one place.
          </h1>

          <p className="pb-20">
            Enhance your personal storage , offering a simple and
            efficient way to upload, organize, and access files from anywhere.
            Securely store important documents and media.
          </p>

          <Link
            href="/dashboard"
            className="flex group cursor-pointer bg-blue-500 p-5 w-fit"
          >
            Try it for free!
            <ArrowRight className="ml-10 group-hover:animate-pulse" />
          </Link>

          <div className="mt-10">
            <input
              type="text"
              value={downloadUrl}
              onChange={(e) => setDownloadUrl(e.target.value)}
              placeholder="Enter download URL"
              className="p-2 text-black w-full mb-2"
            />
            <button onClick={handleDownload} className="bg-green-500 p-2 w-full">
              Download
            </button>
          </div>
        </div>
      </section>

      
    </main>
  );
}
