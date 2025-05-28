import { useTestsStore } from "../store/testsContext";
import { useRouter } from 'next/router';
import { useEffect } from "react";

/**
 * TestSelector component that renders a dropdown to select a test from a list.
 * It uses the `useTestsStore` hook to access and update the current test selection.
 * Changes to the selection are handled via the `selectTest` function from the context.
 */
export default function TestSelector() {
  const router = useRouter(); // Hook to access the router object.
  const { currentSearch, selectTest } = useTestsStore(); // Accessing store context for tests.

  /**
   * Handles change events on the select dropdown.
   * Prevents the default event action and updates the current test selection.
   * 
   * @param {Event} e The event object associated with the change event.
   */
  const handleChange = (e) => {
    e.preventDefault();

    selectTest(e.target.value); // Update the test selection based on the user's choice.
  };

  return (
    // Conditionally renders if there are more than one test available.
    (currentSearch.tests.length > 1 && <div className="w-full flex flex-col items-center my-6 mx-4">
      <h2 className="text-xl">Select a Test.</h2> {/* Title for the test selection */}
      <div className="relative inline-block w-full max-w-lg text-gray-700">
        {/* Dropdown select for choosing a test */}
        <select
          onChange={handleChange} // Handler for change events.
          className="w-full h-10 pl-3 pr-6 text-base placeholder-gray-600 border rounded-lg appearance-none focus:shadow-outline"
        >
          {currentSearch.tests.map((test, index) => {
            // Maps each test to an option element in the dropdown.
            return (
              <option value={index} key={test.id} selected={test.id === currentSearch.selectedTest.id}>
                ID: {test.id}. PN: {test.pn}. APPLICATION: {test.application}.
              </option>
            );
          })}
        </select>
        {/* Icon within the select element */}
        <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
          <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
            {/* Arrow icon SVG path */}
            <path
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
              fillRule="evenodd"
            ></path>
          </svg>
        </div>
      </div>
    </div>)
  );
}


     
