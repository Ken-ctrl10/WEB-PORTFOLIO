// In: home.js

document.addEventListener('DOMContentLoaded', () => {
  new TypeIt("#typing-effect", {
    strings: "Software Development | IT Operations | System Monitoring",
    speed: 75,
    loop: false,
    waitUntilVisible: true,
    cursor: {
      autohide: true
    },

    // --- ADD THIS FUNCTION ---
    afterComplete: () => {
      // Find the cursor element inside our #typing-effect
      const cursor = document.querySelector("#typing-effect .ti-cursor");
      
      // If we found it, force it to be hidden
      if (cursor) {
        cursor.style.display = 'none';
      }
    }
    
  }).go();
});