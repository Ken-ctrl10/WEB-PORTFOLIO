document.addEventListener('DOMContentLoaded', () => {

  // ... (Your sticky header and dark mode code is already here) ...
  
  // --- VIBER MODAL ---
  
  // 1. Find all the elements
  const viberBtn = document.querySelector('#viber-btn');
  const modal = document.querySelector('#viber-modal');
  const closeModalBtn = document.querySelector('#modal-close');

  // 2. Check if the elements exist on the page
  if (viberBtn && modal && closeModalBtn) {
    
    // 3. Listen for a click on the VIBER button
    viberBtn.addEventListener('click', (e) => {
      // Stop the link from trying to go anywhere
      e.preventDefault(); 
      // Show the modal
      modal.classList.add('show-modal');
    });

    // 4. Listen for a click on the 'X' button
    closeModalBtn.addEventListener('click', () => {
      modal.classList.remove('show-modal');
    });

    // 5. (Bonus) Close the modal if user clicks the background
    modal.addEventListener('click', (e) => {
      // If the click is on the modal background itself...
      if (e.target === modal) {
        modal.classList.remove('show-modal');
      }
    });
  }

});