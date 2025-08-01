import React, { useEffect, useState } from 'react';
import Editor from "@monaco-editor/react";
import MarkDown from "react-markdown";
import rehypeHighlight from 'rehype-highlight';
import 'highlight.js/styles/github-dark.css';
import Loader from "../Components/Loader"

function ReviewCode() {
  const [data, setData] = useState('');
  const [receiveData, setReceiveData] = useState('');
  const [error, setError] = useState('');
  const [selectLanguage, setSelectLanguage] = useState('');
  const [loading,setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    setError('');
    setReceiveData('');
    try {
      const response = await fetch('http://localhost:3000/ai/get-review', {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ code: data })
      });
      const result = await response.text();
      setReceiveData(result);
    } catch (error) {
      setError(error.message);
    } finally {
      setData('');
      setLoading(false);
      setSelectLanguage('');
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4 sm:p-6 md:p-8 flex flex-col lg:flex-row gap-6 font-sans">
      {/* LEFT EDITOR PANEL */}
      <div className="w-full lg:w-1/2 bg-gray-800 rounded-xl shadow-lg p-4 sm:p-6 flex flex-col gap-4 h-[calc(100vh-2rem)]">
        <h2 className="text-center text-xl sm:text-2xl font-semibold text-white">Paste Your Code Here</h2>
        
        <div className="flex-1 rounded-lg border border-gray-700 overflow-y-auto">
          <Editor
            height="100%"
            language={selectLanguage || "javascript"}
            value={data}
            theme="vs-dark"
            onChange={(value) => setData(value)}
            options={{
              fontSize: 14,
              minimap: { enabled: false },
              wordWrap: "on",
              automaticLayout: true,
              scrollBeyondLastLine: false,
              padding: { top: 10, bottom: 10 }
            }}
          />
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <input
            type="text"
            required
            value={selectLanguage}
            placeholder="Enter programming language..."
            onChange={(e) => setSelectLanguage(e.target.value)}
            className="flex-1 p-3 bg-gray-700 border border-gray-600 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-400 transition-all duration-200"
          />
          <button
            onClick={handleSubmit}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={!data || !selectLanguage}
          >
            Review Code
          </button>
        </div>

        {error && (
          <div className="text-red-400 text-sm mt-2">{error}</div>
        )}
      </div>

      {/* RIGHT OUTPUT PANEL */}
      <div className="w-full lg:w-1/2 bg-gray-800 rounded-xl shadow-lg p-4 sm:p-6 flex flex-col gap-4 h-[calc(100vh-2rem)]">
        <h2 className="text-center text-xl sm:text-2xl font-semibold text-purple-300">Code Review Output</h2>
        
        <div className="flex-1 bg-gray-900 rounded-lg p-4  border border-gray-700 overflow-y-auto">
          {receiveData ? (
            <MarkDown 
              rehypePlugins={[rehypeHighlight]}
            >
              {receiveData}
            </MarkDown>
          ) : (
            <div className="text-gray-400 text-center py-8 flex justify-center items-center h-full">
              {loading ? <Loader/> : "No review available. Submit code to see results."}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ReviewCode;