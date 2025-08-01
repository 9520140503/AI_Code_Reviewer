import React, { useEffect, useState } from 'react';
import Editor from "@monaco-editor/react";
import MarkDown from "react-markdown";
import rehypeHighlight from 'rehype-highlight';
import 'highlight.js/styles/github-dark.css';
import Loader from "../Components/Loader"

function Summarizer() {
  const [data, setData] = useState('');
  const [receiveData, setReceiveData] = useState('');
  const [error, setError] = useState('');
  const [loading,setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    setError('');
    setReceiveData('');
    try {
      const response = await fetch('http://localhost:3000/ai/get-summary', {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ para: data })
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
        <h2 className="text-center text-xl sm:text-2xl font-semibold text-white">Paste Your Content Here</h2>
        <div className="flex-1 rounded-lg border border-gray-700 overflow-y-auto">
          <Editor
            height="100%"
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
         
          <button
            onClick={handleSubmit}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={!data}
          >
            Get Summary
          </button>
        </div>

        {error && (
          <div className="text-red-400 text-sm mt-2">{error}</div>
        )}
      </div>

      {/* RIGHT OUTPUT PANEL */}
      <div className="w-full lg:w-1/2 bg-gray-800 rounded-xl shadow-lg p-4 sm:p-6 flex flex-col gap-4 h-[calc(100vh-1.5rem)]">
        <h2 className="text-center text-xl sm:text-2xl font-semibold text-purple-300">Summary Output</h2>
        
        <div className="flex-1 bg-gray-900 rounded-lg p-4  border border-gray-700 overflow-y-auto">
          {receiveData ? (
            <MarkDown 
              rehypePlugins={[rehypeHighlight]}
            >
              {receiveData}
            </MarkDown>
          ) : (
            <div className="text-gray-400 text-center py-8 flex justify-center items-center h-full">
              {loading ? <Loader/> : "No review available. Submit para to see results."}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Summarizer;