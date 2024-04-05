import "../css/deviceDetails.css"

const DeviceDetails = ({device, onCheckboxChange, isChecked}) => {
    // Function to format date string into a readable format
    const formatDate = (dateString) => {
        const options = { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric'
        };
        const date = new Date(dateString);
        return date.toLocaleDateString(undefined, options);
    };

    return (
        <>
            <tr>
                <td>
                    <input 
                        type="checkbox"
                        onChange={() => onCheckboxChange(device._id)}
                        checked={isChecked}
                    />
                </td>
                <td>{device.inUse ? 'Yes' : 'No'}</td>
                <td>{device.currentOwner}</td>
                <td>{device.serialNumber}</td>
                <td>{device.brand}</td>
                <td>{formatDate(device.issuedDateToCurrentOwner)}</td>
                <td>{device.company}</td>
                <td>{device.department}</td>
                <td>{device.model}</td>
                <td>{device.processor}</td>
                <td>{device.ram}</td>
                <td>{device.storage}</td>
                <td>{formatDate(device.purchasedDate)}</td>
                <td>{device.accounts}</td>
                <td>{device.notes}</td>
                <td>{device.remarks}</td>
            </tr>
                
        </>

    )
}

export default DeviceDetails;