import "../css/deviceDetails.css"

const DeviceDetails = ({device}) => {
    // Function to format date string into a readable format
    const formatDate = (dateString) => {
        const options = { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric', 
            hour: 'numeric', 
            minute: 'numeric', 
            second: 'numeric' 
        };
        const date = new Date(dateString);
        return date.toLocaleDateString(undefined, options);
    };

    return (
        <>
            <table>
                <thead>
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
                </thead>

                <tbody>
                    <tr>
                        <td>
                            <input 
                                type="checkbox"
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
                </tbody>
            </table>
        </>

    )
}

export default DeviceDetails;