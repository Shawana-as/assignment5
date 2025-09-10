const coinCountElement = document.getElementById('coin-count');
const heartCountElement = document.getElementById('heart-count');
const copyCountElement = document.getElementById('copy-count');
const callHistoryList = document.getElementById('call-history-list');

let coinCount = 100;
let heartCount = 0;
let copyCount = 0;

document.addEventListener('click', function(event) {
    const card = event.target.closest('.card');
    if (!card) return;

    const serviceName = card.dataset.serviceName;
    const hotline = card.dataset.hotlineNumber;

    // Handle Call Button
    if (event.target.closest('.call-btn')) {
        if (coinCount >= 20) {
            coinCount -= 20;
            coinCountElement.textContent = coinCount;
            alert(`Calling ${serviceName} at ${hotline}`);
            addToCallHistory(serviceName, hotline);
        } else {
            alert('Insufficient coins. You need at least 20 coins to make a call.');
        }
    }

    // Handle Copy Button
    if (event.target.closest('.copy-btn')) {
        navigator.clipboard.writeText(hotline).then(() => {
            alert(`Hotline number ${hotline} copied to clipboard!`);
            copyCount++;
            copyCountElement.textContent = copyCount;
        }).catch(err => {
            console.error('Could not copy text: ', err);
        });
    }

    // Handle Favorite Icon
    if (event.target.closest('.favorite-icon')) {
        const icon = event.target.closest('.favorite-icon');
        const isActive = icon.classList.toggle('active');
        
        if (isActive) {
            heartCount++;
        } else {
            heartCount--;
        }
        heartCountElement.textContent = heartCount;
    }
});


function addToCallHistory(serviceName, number) {
    const now = new Date();
    const timeString = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true });

    const listItem = document.createElement('li');
    listItem.className = 'history-item';
    listItem.innerHTML = `
        <div>
            <p class="text-sm font-medium">${serviceName}</p>
            <span class="text-xs text-gray-500">${number}</span>
        </div>
        <span class="text-xs text-gray-500">${timeString}</span>
    `;
    callHistoryList.prepend(listItem);
}

function clearCallHistory() {
    callHistoryList.innerHTML = '';
}