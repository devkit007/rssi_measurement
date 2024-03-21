document.addEventListener("DOMContentLoaded", async (event) => {
    console.log("DOM fully loaded and parsed");

    // CODELAB: Add feature detection here.
    const notSupported = document.getElementById('notSupported');
    if (navigator.serial) {
        notSupported.classList.add('hidden');
        await openPort();
    } else {
        notSupported.classList.remove('hidden');
    }
});

async function openPort() {
    try {
        // CODELAB: Add code to request & open port here.
        // - Request a port and open a connection.
        const port = await navigator.serial.requestPort();
        // - Wait for the port to open.
        await port.open({ baudrate: 115200 });
        console.log('Serial port opened successfully:', port);
    } catch (error) {
        console.error('Error opening serial port:', error);
        alert('Error opening serial port. See console for details.');
    }
}
