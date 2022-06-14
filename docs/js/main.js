window.addEventListener('DOMContentLoaded', async(event) => {
    console.log('DOMContentLoaded!!');
    try {
        window.mpurse.updateEmitter.removeAllListeners()
          .on('stateChanged', isUnlocked => console.log(isUnlocked))
          .on('addressChanged', async(address) => await setAddress(address));
    } catch(e) { console.error(e) }
    document.getElementById('sign').addEventListener('click', (event) => {
        const signature = window.mpurse.signMessage(document.getElementById('sign-message').value)
        document.getElementById('signature').innerText = signature 
    })
    async function setAddress(address=null) {
        document.getElementById('address').value = (address) ? address : (window.hasOwnProperty('mpurse')) ? await window.mpurse.getAddress() : ''
        //document.getElementById('address').value = (window.hasOwnProperty('mpurse')) ? await window.mpurse.getAddress() : ''
    }
    await setAddress()
});
window.addEventListener('beforeunload', (event) => {
    console.log('beforeunload!!');
});

