export default function ResultsSection() {
  return (
    <div>
      <h2 className="mb-6 font-semibold text-2xl">Download Results</h2>

      <div className="mx-auto max-w-md rounded-2xl bg-white p-6 text-center shadow-md">
        <div className="mb-4 text-4xl">📄</div>
        <p className="mb-3">Check and download your semester results</p>
        <button
          type="button"
          className="rounded-md bg-blue-600 px-4 py-2 text-white"
        >
          View Results
        </button>
      </div>
    </div>
  );
}
