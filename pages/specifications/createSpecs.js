import Header from "../../components/header";
import Footer from "../../components/footer";
import CreateTestSpecifications from "../../components/specifications/createTestSpecifications";
import { useSpecificationsStore } from "../../store/specificationsContext";
import { useUserStore } from "../../store/userContext";
import NotFound from "../../components/notFound"
import Loader from "../../components/loader";

import { parametersSections } from "../../constants";

import { useState, useEffect } from 'react';
import { useRouter } from "next/router";
/**
 *
 * This function manages the creation of new specifications,
 * handling form submissions and redirection upon successful creation.
 *
 * /**
 * Specifications for the new test:
 * 
 * @param {string|null} pn - 'COTO part number'
 * @param {string|null} application - 'Test aplication: '
 * @param {number|null} revision - 'Revision Numer'
 * @param {Date|null} revision_datetime - The date and time of the revision.
 * @param {string|null} fixture - The fixture of the specification.
 * @param {string|null} air_fixture - The air fixture of the specification.
 * @param {number|null} nominal_voltage - 'Typical voltage measure'
 * @param {string|null} sort_file - The sort file of the specification.
 * @param {number|null} graph_freq - The graph voltage of the specification.
 * @param {number|null} tube_qty_limit - The tube quantity limit of the specification.
 * @param {number} is_shield_installed - Flag indicating if shield is installed (1 for true, 0 for false).
 * @param {number} is_diode_installed - Flag indicating if diode is installed (1 for true, 0 for false).
 * @param {string|null} contact_1_type - The type of contact 1.
 * @param {string|null} contact_2_type - The type of contact 2.
 * @param {string|null} contact_3_type - The type of contact 3.
 * @param {string|null} contact_4_type - The type of contact 4.
 * @param {number} atm - 'Shows if Actuate time test was used, "0" and "1"'
 * @param {number|null} atm_max_time - Maximum time for ATM.
 * @param {number} buz - Buz value.
 * @param {number|null} buz_cycles - Number of buz cycles.
 * @param {number|null} buz_frequency - Buz frequency.
 * @param {number} crs - CRS value.
 * @param {number|null} crs_nom_resistance - Nominal resistance for CRS.
 * @param {number|null} crs_tolerance - Tolerance for CRS.
 * @param {number} dio - DIO value.
 * @param {number} dcp - DCP value.
 * @param {number|null} dcp_max_peak_to_peak - Maximum peak-to-peak value for DCP.
 * @param {number} dcr - DCR value.
 * @param {number|null} dcr_max_peak - Maximum peak value for DCR.
 * @param {number|null} dcr_start_measurment_window - Start measurement window for DCR.
 * @param {number|null} dcr_window_width - Width of the DCR window.
 * @param {number|null} dcr_sweeps - Number of DCR sweeps.
 * @param {number} fbo - FBO value.
 * @param {number|null} fbo_percent_overdrive - Percent overdrive for FBO.
 * @param {number|null} fbo_delay - Delay for FBO.
 * @param {number} irs - IRS value.
 * @param {number|null} irs_range - Range for IRS.
 * @param {number|null} irs_test_voltage - Test voltage for IRS.
 * @param {number|null} irs_delay - Delay for IRS.
 * @param {number} kel - KEL value.
 * @param {number} ocu - OCU value.
 * @param {number|null} ocu_max_current - Maximum current for OCU.
 * @param {number|null} ocu_min_current - Minimum current for OCU.
 * @param {number} otm - OTM value.
 * @param {number|null} otm_max_time - Maximum time for OTM.
 * @param {number} vtd - VTD value.
 * @param {number|null} vtd_min_differential - Minimum differential for VTD.
 * @param {number|null} vtd_max_differential - Maximum differential for VTD.
 * @param {number} vtr - VTR value.
 * @param {number|null} vtr_max_percentage - Maximum percentage for VTR.
 * @param {number|null} vtr_min_percentage - Minimum percentage for VTR.
 * @param {number} ovt - OVT value.
 * @param {number|null} ovt_max_voltage - Maximum voltage for OVT.
 * @param {number|null} ovt_min_voltage - Minimum voltage for OVT.
 * @param {number|null} ovt_delay - Delay for OVT.
 * @param {number} rcu - RCU value.
 * @param {number|null} rcu_max_current - Maximum current for RCU.
 * @param {number|null} rcu_min_current - Minimum current for RCU.
 * @param {number} rtm - RTM value.
 * @param {number|null} rtm_max_time - Maximum time for RTM.
 * @param {number} rvt - RVT value.
 * @param {number|null} rvt_max_voltage - Maximum voltage for RVT.
 * @param {number|null} rvt_min_voltage - Minimum voltage for RVT.
 * @param {number|null} rvt_delay - Delay for RVT.
 * @param {number} scr -
 * @param {string} id - The ID of the specification.
 * @param {string} newValue - The new value of the specification.
 * @returns {JSX.Element} The update specifications component.
 * 
 */
export default function UpdateSpecs(){
    const { specifications, createSpecifications } = useSpecificationsStore();
    const { user } = useUserStore();

   // Redirect to not found page if user is not an admin
    if(!(user.user_type == "ADMIN" || user.user_type == "admin")) return <NotFound />
    
    const router = useRouter();
    const [ actualSpecifications, setActualSpecifications] = useState({
        pn: null, 
        application: null, 
        revision: null, 
        revision_datetime: null, 
        fixture: null, 
        air_fixture: null, 
        nominal_voltage: null, 
        sort_file: null, 
        graph_freq: null, 
        tube_qty_limit: null, 
        is_shield_installed: 0, 
        is_diode_installed: 0, 
        contact_1_type: null, 
        contact_2_type: null, 
        contact_3_type: null, 
        contact_4_type: null, 
        atm: 0, 
        atm_max_time: null, 
        buz: 0, 
        buz_cycles: null, 
        buz_frequency: null, 
        crs: 0, 
        crs_nom_resistance: null, 
        crs_tolerance: null, 
        dio: 0, 
        dcp: 0, 
        dcp_max_peak_to_peak: null, 
        dcr: 0, 
        dcr_max_peak: null, 
        dcr_start_measurment_window: null, 
        dcr_window_width: null, 
        dcr_sweeps: null, 
        fbo: 0, 
        fbo_percent_overdrive: null, 
        fbo_delay: null, 
        irs: 0, 
        irs_range: null, 
        irs_test_voltage: null, 
        irs_delay: null, 
        kel: 0, 
        ocu: 0, 
        ocu_max_current: null, 
        ocu_min_current: null, 
        otm: 0, 
        otm_max_time: null, 
        vtd: 0, 
        vtd_min_differential: null, 
        vtd_max_differential: null, 
        vtr: 0, 
        vtr_max_percentage: null, 
        vtr_min_percentage: null, 
        ovt: 0, 
        ovt_max_voltage: null, 
        ovt_min_voltage: null, 
        ovt_delay: null, 
        rcu: 0, 
        rcu_max_current: null, 
        rcu_min_current: null, 
        rtm: 0, 
        rtm_max_time: null, 
        rvt: 0, 
        rvt_max_voltage: null, 
        rvt_min_voltage: null, 
        rvt_delay: null, 
        scr: 0, 
        scr_max_resistance: null, 
        scr_min_resistance: null, 
        scr_delay: null, 
        scs: 0, 
        scs_max_delta: null, 
        scs_cycles: null, 
        scs_warm_up: null, 
        scs_delay: null, 
        sho: 0, 
        sho_threshold_resistance: null, 
        ttm: 0, 
        ttm_min_time: null
    });
    const [ isUpdating, setIsUpdating ] = useState(false);

    //Updates actual specifications state.
    const updateActualSpecifications = (id, newValue) => {
        let newSpecifications = {...actualSpecifications};
        newSpecifications[id] = newValue === ''? null : newValue;

        setActualSpecifications(newSpecifications);
    };
    const onSubmitHandler = async (e) => {
        e.preventDefault();

        setIsUpdating(true);
        await createSpecifications(actualSpecifications);
        setIsUpdating(false);
    }

    //Redirects to view specifications page after successful creation.
    useEffect(()=>{
        if(!specifications.pn || specifications.revision != 1 || specifications.pn != actualSpecifications.pn || specifications.application != actualSpecifications.application) return;

        router.push("/specifications/viewSpecs");
    }, [specifications])

    return(
        <div className="flex flex-col items-center justify-between min-h-screen overflow-hidden">
            <Header />


            
            <main className="flex flex-col gap-y-0 w-full max-w-lg gap-x-5 mx-4 mb-12 relative">

                <h1 className="text-2xl font-bold mt-7 text-center">New Specifications Sheet</h1>
                
                <form className="flex flex-col w-full px-2">
                    {
                        parametersSections.map((section, index)=>(
                            <CreateTestSpecifications updateActualSpecifications={updateActualSpecifications} key={`${section.name}-section`} name={section.name} sectionKey={section.key} parametersLabels={section.parameters} actualSpecifications={actualSpecifications}/>
                        ))
                    }

                    <input onClick={onSubmitHandler} type="submit" className="mt-7 border border-black rounded-lg py-2 px-5 bg-blue-500 text-white font-bold mx-auto hover:bg-blue-400" value="Create"/>
                </form>
            </main>

            <Footer />

            {
                isUpdating &&
                <Loader />
            }
        </div>
    );
}