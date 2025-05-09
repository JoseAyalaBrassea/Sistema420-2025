import { useTestsStore } from "../../store/testsContext";
import Link from "next/link";

/**
 * Component for the Reporting Navbar that provides navigation links for reporting features.
 *
 * @function ReportingNavbar
 * @returns {JSX.Element} JSX representing the Reporting Navbar.
 */

export default function ReportingNavbar(){
    const { currentSearch } = useTestsStore();

    return(
      <>
        {
          currentSearch.selectedTest &&
          <>
            <Link href={{ pathname: "/reporting/summary" }} legacyBehavior>
              <a className="w-full py-3 px-4 semibold hover:cursor-pointer hover:text-white hover:bg-red-900 lg:w-auto lg:text-white lg:py-4 lg:px-5 lg:hover:text-white lg:hover:bg-red-800 lg:text-2xl">Test Summary</a>
            </Link>
            <Link href={{ pathname: "/reporting/pareto" }} legacyBehavior>
              <a className="w-full py-3 px-4 semibold hover:cursor-pointer hover:text-white hover:bg-red-900 lg:w-auto lg:text-white lg:py-4 lg:px-5 lg:hover:text-white lg:hover:bg-red-800 lg:text-2xl">Pareto Failure Analysis</a>
            </Link>
            <Link href={{ pathname: "/reporting/charts" }} legacyBehavior>
              <a className="w-full py-3 px-4 semibold hover:cursor-pointer hover:text-white hover:bg-red-900 lg:w-auto lg:text-white lg:py-4 lg:px-5 lg:hover:text-white lg:hover:bg-red-800 lg:text-2xl">Charts</a>
            </Link>
            <Link href={{ pathname: "/reporting/tables" }} legacyBehavior>
              <a className="w-full py-3 px-4 semibold hover:cursor-pointer hover:text-white hover:bg-red-900 lg:w-auto lg:text-white lg:py-4 lg:px-5 lg:hover:text-white lg:hover:bg-red-800 lg:text-2xl">Raw Data</a>
            </Link>
          </>
        }
        <Link href={{ pathname: "/reporting/filter" }} legacyBehavior>
          <a className="w-full py-3 px-4 semibold hover:cursor-pointer hover:text-white hover:bg-red-900 lg:w-auto lg:text-white lg:py-4 lg:px-5 lg:hover:text-white lg:hover:bg-red-800 lg:text-2xl">Filter</a>
        </Link>
      </>
    );
}