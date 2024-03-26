import "../css/devices.css"

import { useContext, useEffect } from "react";
import { DevicesContext } from "../context/DevicesContext"

// Import components and icons
import SearchBar from "../components/SearchBar";
import DeviceDetails from "../components/DeviceDetails"

import { TrashIcon } from "@heroicons/react/24/outline";
import { PlusIcon } from "@heroicons/react/24/outline";



const Devices = () => {
    const { devices, dispatch } = useContext(DevicesContext);

    useEffect(() => {
        const fetchDevices = async () => {
            try {
                const response = await fetch('/api/inventory/')
                if (!response.ok) {
                    throw new Error('Failed to fetch devices');
                }
                
                const json = await response.json();
                // Dispatching action to set goals in the context
                dispatch({type: 'SET_DEVICES', payload: json})
            } catch (error) {
                console.error('Error fetching devices:', error);
            }
        }
    
        fetchDevices()
    }, [dispatch])

    return (
        <div className="devices">
            <div className="main_container">

                {/* Header */}
                <div className="container">
                    <div className="header">
                        <div className="top_header">
                            <h1>Inventory List</h1>

                            <div className="header_functions">
                                <button className="icon">
                                    <TrashIcon /> 
                                </button>
                                <button className="icon">
                                    <PlusIcon />
                                </button>
                            </div>
                        </div> 

                        {/* Search Bar */}
                        <div>
                            <SearchBar />
                        </div>                   
                    </div>
                </div>
                

                {/* List */}
                <div className="container">
                    <div className="device_list_container">
                        {devices && devices.map(device => (
                            <DeviceDetails key={device._id} device={device} />
                        ))}
                    </div>
                </div>  
            </div>
        </div>
        
    )
}


export default Devices;