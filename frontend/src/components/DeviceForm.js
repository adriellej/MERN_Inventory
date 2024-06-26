import "../css/form.css";

import { useContext, useState, useEffect } from 'react';

import { DevicesContext } from '../context/DevicesContext';

const DeviceForm = ({ showModal, onClose }) => {
    const { dispatch } = useContext(DevicesContext);

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

        const response = await fetch('/api/inventory/', {
                method: 'POST',
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

        dispatch({ type: 'CREATE_DEVICE', payload: json });
        resetFormFields();
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
            {showModal && (
                <div className="modal_container">
                    <div className="form_container">
                        <button onClick={onClose} className="close_button">x</button>

                        <h1 className="form_header">New Item</h1>
              
                        <div className="form_content">
                            <form className="form" onSubmit={handleSubmit}>
                                <label htmlFor="inUse">In-Use?</label>
                                
                                <span className="radio-group">

                                <label> 
                                <input 
                                    type="radio" 
                                    name="inUse" 
                                    value="true"
                                    checked={inUse === true}
                                    onChange={(e) => setInUse(true)}
                                />Yes
                                </label>

                                <label>
                                <input 
                                    type="radio" 
                                    name="inUse" 
                                    value="false"
                                    checked={inUse === false}
                                    onChange={(e) => setInUse(false)}
                                    selected
                                />No
                                </label>
                                </span>
                                
                                <br />

                                <label htmlFor="currentOwner">Current Owner</label>
                                <input 
                                    type="text" 
                                    name="currentOwner" 
                                    onChange={(e) => setCurrentOwner(e.target.value)}
                                    value={currentOwner}
                                />
                                
                                <label htmlFor="serialNumber">Serial Number</label>
                                <input 
                                    type="text" 
                                    name="serialNumber" 
                                    onChange={(e) => setSerialNumber(e.target.value)}
                                    value={serialNumber}
                                />
                                
                                <label htmlFor="brand">Brand</label>
                                <input 
                                    type="text" 
                                    name="brand" 
                                    onChange={(e) => setBrand(e.target.value)}
                                    value={brand}
                                />

                                <label htmlFor="issuedDateToCurrentOwner">Issued Date to Owner</label>
                                <input 
                                    type="date" 
                                    name="issuedDateToCurrentOwner" 
                                    onChange={(e) => setIssuedDateToCurrentOwner(e.target.value)}
                                    value={issuedDateToCurrentOwner}
                                />

                                <label htmlFor="company">Company</label>
                                <input 
                                    type="text" 
                                    name="company" 
                                    onChange={(e) => setCompany(e.target.value)}
                                    value={company}
                                />

                                <label htmlFor="department">Department</label>
                                <input 
                                    type="text" 
                                    name="department" 
                                    onChange={(e) => setDepartment(e.target.value)}
                                    value={department}
                                />

                                <label htmlFor="model">Model</label>
                                <input 
                                    type="text" 
                                    name="model" 
                                    onChange={(e) => setModel(e.target.value)}
                                    value={model}
                                />

                                <label htmlFor="processor">Processor</label>
                                <input 
                                    type="text" 
                                    name="processor" 
                                    onChange={(e) => setProcessor(e.target.value)}
                                    value={processor}
                                />

                                <label htmlFor="ram">RAM</label>
                                <input 
                                    type="text" 
                                    name="ram" 
                                    onChange={(e) => setRAM(e.target.value)}
                                    value={ram}
                                />

                                <label htmlFor="storage">Storage</label>
                                <input 
                                    type="text" 
                                    name="storage" 
                                    onChange={(e) => setStorage(e.target.value)}
                                    value={storage}
                                />

                                <label htmlFor="purchasedDate">Purchased Date</label>
                                <input 
                                    type="date" 
                                    name="purchasedDate" 
                                    onChange={(e) => setPurchasedDate(e.target.value)}
                                    value={purchasedDate}
                                />

                                <label htmlFor="accounts">Accounts</label>
                                <input 
                                    type="text" 
                                    name="accounts" 
                                    onChange={(e) => setAccounts(e.target.value.split(','))}
                                    value={accounts}
                                />

                                <label htmlFor="notes">Notes</label>
                                <input 
                                    type="text" 
                                    name="notes" 
                                    onChange={(e) => setNotes(e.target.value)}
                                    value={notes}
                                />

                                <label htmlFor="remarks">Remarks</label>
                                <input 
                                    type="text" 
                                    name="remarks" 
                                    onChange={(e) => setRemarks(e.target.value)}
                                    value={remarks}
                                />

                                <button type="submit" className="submit_button">Add</button>
                            
                            </form>
                        </div>
                      
                    </div>
                </div>
            )}
        </div>
    );
};

export default DeviceForm;
