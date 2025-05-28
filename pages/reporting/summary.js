import Head from "next/head";
import Header from "../../components/header";
import Footer from "../../components/footer";
import TestSelector from "../../components/testSelector";
import NotFound from "../../components/notFound";
// import PrintResume from '../../components/print/reporting/printResume';
import dynamic from 'next/dynamic';

const PrintResume = dynamic(() => import('../../components/print/reporting/printResume'), {
  ssr: false,
});

import { useTestsStore } from "../../store/testsContext";


/**
 * The Summary component displays detailed information and summary statistics of a selected test.
 * 
 * It checks if a test is selected from the global state. If not, it renders a NotFound component.
 * Otherwise, it presents a summary including test details like part number, application, revision,
 * and production test information such as ID, PLT, and DC. It also displays a summary of test results
 * including the number of relays tested, passed, failed, and the final yield among others.
 * 
 * Uses TestSelector for selecting tests, and PrintResume for printing the test summary.
 * 
 * @returns {JSX.Element} The summary page including test information, test summary statistics, and options for printing the summary.
 */
export default function Summary() {
  const { currentSearch } = useTestsStore();

  const formatDate = (dateString) => {
    if (!dateString) return '';
    
    const [year, month, day] = dateString.split('-'); // Assuming the format is 'YYYY-MM-DD'
    return `${month}-${day}-${year}`; // Convert to 'MM-DD-YYYY'
  };
  

  // Check if a test is selected
  if (!currentSearch.selectedTest)
    return <NotFound />;

  // Render the summary page
  return (
    <div className="flex flex-col items-center justify-between min-h-screen overflow-hidden">
      <Head>
        <title>SYSTEM 420 - Summary</title>
        <link rel="icon" href="/icon.ico" />
      </Head>

      <Header />

      <section className="w-full flex flex-col items-center">
        <div className="w-full pt-8 pb-5 border-b-2 border-t-2 border-gray-300 text-center">
          <h2 className="text-4xl">Test Information</h2>
        </div>

        <TestSelector />

        <div className="grid grid-cols-1 lg:grid-cols-3 lg:w-11/12 justify-around gap-x-5 gap-y-5 text-xl">
          <div className="flex flex-col items-center space-y-1">
            <h3 className="font-bold">COTO SYSTEM 420</h3>
            <p>PN: {currentSearch.selectedTest?.pn}</p>
            <p>APPL: {currentSearch.selectedTest?.application}</p>
            <p>REV#: {currentSearch.selectedTest?.revision}</p>
          </div>
          <div className="flex flex-col items-center space-y-1">
            <h3 className="font-bold">Normal Production Test</h3>
            <p>ID: {currentSearch.selectedTest?.id}</p>
            <p>PLT: {currentSearch.selectedTest?.plt}</p>
            <p>DC: {currentSearch.selectedTest?.datecode}</p>
          </div>
          <div className="flex flex-col items-center space-y-1">
            <h3 className="font-bold">COTO Technology</h3>
            <p>
              START DATE:{" "}
              {formatDate(currentSearch.selectedTest?.start_datetime.slice(0, 10))}
            </p>
            <p>
              START TIME:{" "}
              {currentSearch.selectedTest?.start_datetime &&
                currentSearch.selectedTest?.start_datetime.slice(11, 19)}
            </p>
          </div>
        </div>
      </section>

      <main className="w-full flex flex-col items-center mt-12 mb-6 flex-grow">
        <div className="w-full pt-8 pb-5 border-b-2 border-t-2 border-gray-300 text-center">
          <h2 className="text-4xl">Test Summary</h2>
        </div>

        <div className="w-full flex flex-col items-center text-xl max-w-5xl my-5 space-y-6 px-3">
          <div className="w-full flex flex-col space-y-2">
            <h3 className="font-bold">SYSTEM 420</h3>
            <div className="flex ml-3">
              <p>Relays tested</p>
              <div className="border-b-2 border-gray-400 border-dotted flex-grow mb-1.5 mx-2" />
              <span>{currentSearch.selectedTest?.relays_tested}</span>
            </div>
            <div className="flex ml-3">
              <p>Relays passed</p>
              <div className="border-b-2 border-gray-400 border-dotted flex-grow mb-1.5 mx-2" />
              <span>
              {currentSearch.selectedTest?.relays_passed_420}
              </span>
            </div>
            <div className="flex ml-3">
              <p>Relays failed</p>
              <div className="border-b-2 border-gray-400 border-dotted flex-grow mb-1.5 mx-2" />
              <span>{currentSearch.selectedTest?.relays_failed_420}</span>
            </div>
            <div className="flex ml-3">
              <p>Yield</p>
              <div className="border-b-2 border-gray-400 border-dotted flex-grow mb-1.5 mx-2" />
              <span>{currentSearch.selectedTest?.yield}%</span>
            </div>
          </div>
          <div className="w-full flex flex-col space-y-2">
            <h3 className="font-bold">NON 420</h3>
            <div className="flex ml-3">
              <p>Non 420 rejects</p>
              <div className="border-b-2 border-gray-400 border-dotted flex-grow mb-1.5 mx-2" />
              <span>{currentSearch.selectedTest?.relays_failed_non_420}</span>
            </div>
          </div>
          <div className="w-full flex flex-col space-y-2">
            <h3 className="font-bold">FINAL YIELD</h3>
            <div className="flex ml-3">
              <p>Total quantity</p>
              <div className="border-b-2 border-gray-400 border-dotted flex-grow mb-1.5 mx-2" />
              <span>{currentSearch.selectedTest?.total_quantity}</span>
            </div>
            <div className="flex ml-3">
              <p>Reject quantity</p>
              <div className="border-b-2 border-gray-400 border-dotted flex-grow mb-1.5 mx-2" />
              <span>{currentSearch.selectedTest?.reject_quantity}</span>
            </div>
            <div className="flex ml-3">
              <p>Final yield</p>
              <div className="border-b-2 border-gray-400 border-dotted flex-grow mb-1.5 mx-2" />
              <span>{currentSearch.selectedTest?.final_yield}</span>
            </div>
          </div>
          <div className="w-full flex flex-col space-y-2">
            <h3 className="font-bold">ISSUE YIELD</h3>
            <div className="flex ml-3">
              <p>Issue quantity</p>
              <div className="border-b-2 border-gray-400 border-dotted flex-grow mb-1.5 mx-2" />
              <span>{currentSearch.selectedTest?.issue_quantity}</span>
            </div>
            <div className="flex ml-3">
              <p>Issue yield</p>
              <div className="border-b-2 border-gray-400 border-dotted flex-grow mb-1.5 mx-2" />
              <span>{currentSearch.selectedTest?.issue_yield}</span>
            </div>
          </div>
          <div className="w-full flex flex-col space-y-2">
            <h3 className="font-bold">TIME</h3>
            <div className="flex ml-3">
              <p>Elapsed time</p>
              <div className="border-b-2 border-gray-400 border-dotted flex-grow mb-1.5 mx-2" />
              <span>{currentSearch.selectedTest?.elapsed_time &&  currentSearch.selectedTest?.elapsed_time.slice(11, 19)}</span>
            </div>
            <div className="flex ml-3">
              <p>Idle time</p>
              <div className="border-b-2 border-gray-400 border-dotted flex-grow mb-1.5 mx-2" />
              <span>
                { currentSearch.selectedTest?.idle_time &&
                  currentSearch.selectedTest?.idle_time.slice(11, 19)  }
              </span>
            </div>
            <div className="flex ml-3">
              <p>Test time</p>
              <div className="border-b-2 border-gray-400 border-dotted flex-grow mb-1.5 mx-2" />
              <span>
                {currentSearch.selectedTest?.test_time &&
                  currentSearch.selectedTest?.test_time.slice(11, 19)}
              </span>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <PrintResume selectedTest={currentSearch.selectedTest} testsArray={currentSearch.tests}/>
    </div>
  );
}
