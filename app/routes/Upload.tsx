import React, { useState } from "react";
import Navbar from "~/components/Navbar";

const Upload = () => {
  const [isProcessing, setIsProcessing] = useState(true);
  const [statusText, setStatusText] = useState("");
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {};
  return (
    <main className="bg-[url('/images/bg-main.svg')] bg-cover">
      <Navbar />

      <section className="main-section">
        <div className="page-heading">
          <h1>Smart feedback for your dream job</h1>
          {isProcessing ? (
            <>
              <h2>{statusText}</h2>
              <img src="/images/resume-scan.gif" className="w-full" alt="" />
            </>
          ) : (
            <h2>Drop your resume for an ATS score and improvement tips </h2>
          )}
          {!isProcessing && (
            <form
              id="upload form "
              onSubmit={handleSubmit}
              className="flex flex-col gap-4 "
            >
              <div className="form-div">
                
              </div>
            </form>
          )}
        </div>
      </section>
    </main>
  );
};

export default Upload;
