import "../css/form.css";

import { useContext, useState, useEffect } from 'react';

import { DevicesContext } from '../context/DevicesContext';

const UpdateForm = ({ showModal, onClose, updateMode, deviceToUpdate  }) => {
    const { devices, dispatch } = useContext(DevicesContext);

    const [inUse, setInUse] = useState(false);
    const [currentOwner, setCurrentOwner] = useState('');
    const [serialNumber, setSerialNumber] = useState('');
    const [brand, setBrand] = useState('');
    const [issuedDateToCurrentOwner, setIssuedDateToCurrentOwner] = useState('');
    const [company, setCompany] = useState('');
    const [department, setDepartment] = useState('');
    const [model, setModel] = useState('');
    const [processor, setProcessor] = useState('');
    const [ram, setRAM] = useState('');
    const [storage, setStorage] = useState('');
    const [purchasedDate, setPurchasedDate] = useState('');
    const [accounts, setAccounts] = useState([]);
    const [notes, setNotes] = useState('');
    const [remarks, setRemarks] = useState('');

    useEffect(() => {
        if (updateMode && deviceToUpdate) {
            setInUse(deviceToUpdate.inUse);
            setCurrentOwner(deviceToUpdate.currentOwner);
            setSerialNumber(deviceToUpdate.serialNumber);
            setBrand(deviceToUpdate.brand);
            setIssuedDateToCurrentOwner(deviceToUpdate.issuedDateToCurrentOwner);
            setCompany(deviceToUpdate.company);
            setDepartment(deviceToUpdate.department);
            setModel(deviceToUpdate.model);
            setProcessor(deviceToUpdate.processor);
            setRAM(deviceToUpdate.ram);
            setStorage(deviceToUpdate.storage);
            setPurchasedDate(deviceToUpdate.purchasedDate);
            setAccounts(deviceToUpdate.accounts);
            setNotes(deviceToUpdate.notes);
            setRemarks(deviceToUpdate.remarks);
        } else {
            resetFormFields();
        }
    }, [updateMode, deviceToUpdate]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const device = {
            inUse,
            currentOwner,
            serialNumber,
            brand,
            issuedDateToCurrentOwner,  
            company,
            department,
            model,
            processor,
            ram,
            storage,
            purchasedDate,
            accounts: accounts.join(','),
            notes,
            remarks,
        };

        let response;

        response = await fetch(`/api/inventory/${deviceToUpdate._id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(device),
        });

        const json = await response.json();
        if (!response.ok) {
            alert(json.error);
            return;
        }

        dispatch({ type: 'UPDATE_DEVICE', payload: json });
        onClose(); // Close the modal
    };

    const resetFormFields = () => {
        setInUse(false);
        setCurrentOwner('');
        setSerialNumber('');
        setBrand('');
        setIssuedDateToCurrentOwner('');
        setCompany('');
        setDepartment('');
        setModel('');
        setProcessor('');
        setRAM('');
        setStorage('');
        setPurchasedDate('');
        setAccounts([]);
        setNotes('');
        setRemarks('');
    };

    return (
        <div>
            {showModal && updateMode && deviceToUpdate && (
                <div className="modal_container">
                    <div className="form_container">
                        <button onClick={onClose} className="close_button">x</button>
                            
                        <h1 className="form_header">Update Item</h1>                        

                        <div className="form_content">
                            <form className="form" onSubmit={handleSubmit}>
                                <label htmlFor="inUse">In-Use?</label>
                                
                                <span className="radio-group">
                                <input 
                                    type="radio" 
                                    name="inUse" 
                                    value="true"
                                    checked={inUse === true}
                                    onChange={(e) => setInUse(true)}
                                />Yes
                                <input 
                                    type="radio" 
                                    name="inUse" 
                                    value="false"
                                    checked={inUse === false}
                                    onChange={(e) => setInUse(false)}
                                    selected
                                />No
                                </span>
                                
                                <br />

                                <label for="currentOwner">Current Owner</label>
                                <input 
                                    type="text" 
                                    name="currentOwner" 
                                    onChange={(e) => setCurrentOwner(e.target.value)}
                                    value={currentOwner}
                                />
                                
                                <label for="serialNumber">Serial Number</label>
                                <input 
                                    type="text" 
                                    name="serialNumber" 
                                    onChange={(e) => setSerialNumber(e.target.value)}
                                    value={serialNumber}
                                />
                                
                                <label for="brand">Brand</label>
                                <input 
                                    type="text" 
                                    name="brand" 
                                    onChange={(e) => setBrand(e.target.value)}
                                    value={brand}
                                />

                                <label for="issuedDateToCurrentOwner">Issued Date to Owner</label>
                                <input 
                                    type="date" 
                                    name="issuedDateToCurrentOwner" 
                                    onChange={(e) => setIssuedDateToCurrentOwner(e.target.value)}
                                    value={issuedDateToCurrentOwner}
                                />

                                <label for="company">Company</label>
                                <input 
                                    type="text" 
                                    name="company" 
                                    onChange={(e) => setCompany(e.target.value)}
                                    value={company}
                                />

                                <label for="department">Department</label>
                                <input 
                                    type="text" 
                                    name="department" 
                                    onChange={(e) => setDepartment(e.target.value)}
                                    value={department}
                                />

                                <label for="model">Model</label>
                                <input 
                                    type="text" 
                                    name="model" 
                                    onChange={(e) => setModel(e.target.value)}
                                    value={model}
                                />

                                <label for="processor">Processor</label>
                                <input 
                                    type="text" 
                                    name="processor" 
                                    onChange={(e) => setProcessor(e.target.value)}
                                    value={processor}
                                />

                                <label for="ram">RAM</label>
                                <input 
                                    type="text" 
                                    name="ram" 
                                    onChange={(e) => setRAM(e.target.value)}
                                    value={ram}
                                />

                                <label for="storage">Storage</label>
                                <input 
                                    type="text" 
                                    name="storage" 
                                    onChange={(e) => setStorage(e.target.value)}
                                    value={storage}
                                />

                                <label for="purchasedDate">Purchased Date</label>
                                <input 
                                    type="date" 
                                    name="purchasedDate" 
                                    onChange={(e) => setPurchasedDate(e.target.value)}
                                    value={purchasedDate}
                                />

                                <label for="accounts">Accounts</label>
                                <input 
                                    type="text" 
                                    name="accounts" 
                                    onChange={(e) => setAccounts(e.target.value.split(','))}
                                    value={accounts}
                                />

                                <label for="notes">Notes</label>
                                <input 
                                    type="text" 
                                    name="notes" 
                                    onChange={(e) => setNotes(e.target.value)}
                                    value={notes}
                                />

                                <label for="remarks">Remarks</label>
                                <input 
                                    type="text" 
                                    name="remarks" 
                                    onChange={(e) => setRemarks(e.target.value)}
                                    value={remarks}
                                />

                               <button type="submit" className="submit_button">Update</button>
                            
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default UpdateForm;
