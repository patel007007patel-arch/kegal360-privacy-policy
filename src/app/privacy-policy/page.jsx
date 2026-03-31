import React from 'react';

// This is a server component by default in Next.js App Router
const PrivacyPolicyPage = async () => {
  let content = '';
  let error = null;

  try {
    const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:5000/api';
    console.log(`[PrivacyPolicy] Fetching from: ${API_URL}/privacy-policy`);

    const response = await fetch(`${API_URL}/privacy-policy`, {
      cache: 'no-store'
    });

    if (!response.ok) {
      throw new Error(`HTTP Error ${response.status}`);
    }

    const json = await response.json();
    console.log('[PrivacyPolicy] API Response data keys:', Object.keys(json));

    // Attempt to extract content from multiple possible paths
    const possibleContent = json?.data?.content || json?.content || (typeof json?.data === 'string' ? json.data : null);

    if (possibleContent) {
      content = possibleContent;
      console.log('[PrivacyPolicy] Content loaded successfully');
    } else {
      console.warn('[PrivacyPolicy] Valid JSON received but content is missing. JSON:', JSON.stringify(json));
      content = 'Privacy policy is currently being updated.';
    }
  } catch (err) {
    console.error('[PrivacyPolicy] Fetch failed:', err.message);
    error = `Connection error: ${err.message}. Please check if the backend is running at http://127.0.0.1:5000`;
  }

  return (
    <main className="max-w-4xl mx-auto px-6">
      {error ? (
        <div className="bg-red-50 text-red-700 p-4 rounded-xl border border-red-100 flex items-center gap-3 font-sans">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
          {error}
        </div>
      ) : (
        <article
          className="prose prose-neutral prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      )}
    </main>
  );
};

export default PrivacyPolicyPage;
