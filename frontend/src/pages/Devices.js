import "../css/devices.css";
import { useContext, useEffect, useState } from "react";

import { DevicesContext } from "../context/DevicesContext";
import SearchBar from "../components/SearchBar";
import DeviceDetails from "../components/DeviceDetails";
import DeviceForm from "../components/DeviceForm";
import UpdateForm from "../components/UpdateForm";

import { TrashIcon, PlusIcon, PencilSquareIcon } from "@heroicons/react/24/outline";

const Devices = () => {
    const { devices, dispatch } = useContext(DevicesContext);
    const [showAddItemModal, setShowAddItemModal] = useState(false);
    const [showUpdateItemModal, setShowUpdateItemModal] = useState(false);
    const [isUpdating, setIsUpdating] = useState(false);
    const [selectedDeviceIds, setSelectedDeviceIds] = useState([]);
    const [deviceToUpdate, setDeviceToUpdate] = useState({});

    const handleDelete = async () => {
        try {
            const promises = selectedDeviceIds.map(async deviceId => {
                const response = await fetch(`/api/inventory/${deviceId}`, {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
    
                const json = await response.json();
    
                if (response.ok) {
                    dispatch({type: 'DELETE_DEVICE', payload: json});
                    return deviceId; // Return the deleted device ID
                } else {
                    console.error('Failed to delete goal:', json);
                    return null;
                }
            });
    
            await Promise.all(promises);
    
            setSelectedDeviceIds([]); // Clear selected device IDs after deletion
        } catch (error) {
            console.error('Error deleting device:', error);
        }
    };
    

    useEffect(() => {
        const fetchDevices = async () => {
            try {
                const response = await fetch('/api/inventory/');
                if (!response.ok) {
                    throw new Error('Failed to fetch devices');
                }
                
                const json = await response.json();
                dispatch({type: 'SET_DEVICES', payload: json});
            } catch (error) {
                console.error('Error fetching devices:', error);
            }
        }
    
        fetchDevices();
    }, [dispatch]);


    const toggleAddItemModal = () => {
        setShowAddItemModal(!showAddItemModal); // Toggle modal visibility
    };

    const closeAddItemModal = () => {
        setShowAddItemModal(false);
    };

    const handleCheckboxChange = (deviceId) => {
        setSelectedDeviceIds(prevState => {
            if (prevState.includes(deviceId)) {
                return prevState.filter(id => id !== deviceId);
            } else {
                return [...prevState, deviceId];
            }
        });
    };

    const handleUpdate = async () => {
        const deviceId = selectedDeviceIds[0];
        const response = await fetch(`/api/inventory/${deviceId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const device = await response.json();

        if (response.ok) {
            setDeviceToUpdate(device);
            setIsUpdating(true);
            setShowUpdateItemModal(true);
        }
    };

    const closeUpdateItemModal = () => {
        setShowUpdateItemModal(false);
    };

    return (
        <div className="devices">
            <div className="main_container">
                <div className="container">
                    <div className="header">
                        <div className="top_header">
                            <h1>Inventory List</h1>
                            <div className="header_functions">
                                {selectedDeviceIds.length === 1 && ( // Render update icon
                                    <button className="icon" onClick={handleUpdate}>
                                        <PencilSquareIcon />
                                    </button>
                                )}
                                <button className="icon" onClick={handleDelete}>
                                    <TrashIcon /> 
                                </button>
                                <button className="icon" onClick={toggleAddItemModal}>
                                    <PlusIcon />
                                </button>
                            </div>
                        </div>
                        <div>
                            <SearchBar />
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="device_list_container">
                        <table>
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>In-Use</th>
                                    <th>Current Owner</th>
                                    <th>Serial Number</th>
                                    <th>Brand</th>
                                    <th>Issued Date</th>
                                    <th>Company</th>
                                    <th>Department</th>
                                    <th>Model</th>
                                    <th>Processor</th>
                                    <th>RAM</th>
                                    <th>Storage</th>
                                    <th>Purchased Date</th>
                                    <th>Accounts</th>
                                    <th>Notes</th>
                                    <th>Remarks</th>
                                </tr>
                            </thead>
                            <tbody>
                                {devices && devices.map(device => (
                                    <DeviceDetails 
                                        key={device._id} 
                                        device={device} 
                                        onCheckboxChange={handleCheckboxChange} 
                                        isChecked={selectedDeviceIds.includes(device._id)}
                                    />
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <DeviceForm showModal={showAddItemModal} onClose={closeAddItemModal} />
            <UpdateForm showModal={showUpdateItemModal} onClose={closeUpdateItemModal} updateMode={isUpdating} deviceToUpdate={deviceToUpdate} />
        </div>
    );
}

export default Devices;
