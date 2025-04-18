document.addEventListener('DOMContentLoaded', () => {
    const gridBtn = document.getElementById('grid-btn');
    const listBtn = document.getElementById('list-btn');
    const directoryContainer = document.querySelector('.directory-container');
    
    // Load member data
    fetchMemberData();
    
    // View toggle event listeners
    gridBtn.addEventListener('click', () => {
        directoryContainer.classList.add('grid');
        directoryContainer.classList.remove('list');
        gridBtn.classList.add('active');
        listBtn.classList.remove('active');
    });
    
    listBtn.addEventListener('click', () => {
        directoryContainer.classList.add('list');
        directoryContainer.classList.remove('grid');
        listBtn.classList.add('active');
        gridBtn.classList.remove('active');
    });
});

async function fetchMemberData() {
    try {
        const response = await fetch('data/members.json');
        if (!response.ok) {
            throw new Error('Failed to fetch member data');
        }
        
        const data = await response.json();
        displayMembers(data.members);
    } catch (error) {
        console.error('Error loading member data:', error);
        document.querySelector('.directory-container').innerHTML = `
            <div class="error-message">
                <h2>Unable to load member data</h2>
                <p>Please try again later</p>
            </div>
        `;
    }
}

function displayMembers(members) {
    const directoryContainer = document.querySelector('.directory-container');
    directoryContainer.innerHTML = '';
    
    members.forEach(member => {
        // Create grid card
        const card = document.createElement('div');
        card.className = 'directory-card';
        
        const membershipClass = `membership-${member.membershipLevel.toLowerCase()}`;
        const membershipTextClass = `membership-${member.membershipLevel.toLowerCase()}-text`;
        
        card.innerHTML = `
            <div class="directory-card-header">
                <img src="image/${member.image}" alt="${member.name} Logo">
                <span class="membership-badge ${membershipClass}">${member.membershipLevel}</span>
            </div>
            <div class="directory-card-content">
                <h2>${member.name}</h2>
                <p>${member.address}</p>
                <p>${member.phone}</p>
                <p>${member.description}</p>
                <a href="${member.website}" class="website" target="_blank">Visit Website</a>
            </div>
        `;
        
        // Create list item
        const listItem = document.createElement('div');
        listItem.className = 'list-item';
        listItem.innerHTML = `
            <div class="list-item-image">
                <img src="image/${member.image}" alt="${member.name} Logo">
            </div>
            <div class="list-item-content">
                <h2>${member.name}</h2>
                <p>${member.address} | ${member.phone}</p>
                <p class="membership ${membershipTextClass}">Membership: ${member.membershipLevel}</p>
                <p><a href="${member.website}" target="_blank">${member.website}</a></p>
            </div>
        `;
        
        // Add both elements to container
        directoryContainer.appendChild(card);
        directoryContainer.appendChild(listItem);
        
        // Hide list items initially (grid view is default)
        listItem.style.display = 'none';
    });
    
    // Add event listener to handle view switching
    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            if (mutation.attributeName === 'class') {
                const isGrid = directoryContainer.classList.contains('grid');
                const cards = directoryContainer.querySelectorAll('.directory-card');
                const listItems = directoryContainer.querySelectorAll('.list-item');
                
                cards.forEach(card => {
                    card.style.display = isGrid ? 'block' : 'none';
                });
                
                listItems.forEach(item => {
                    item.style.display = isGrid ? 'none' : 'grid';
                });
            }
        });
    });
    
    observer.observe(directoryContainer, { attributes: true });
}