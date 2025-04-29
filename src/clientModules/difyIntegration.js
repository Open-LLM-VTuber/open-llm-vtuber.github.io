import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';

export default (function () {
  if (!ExecutionEnvironment.canUseDOM) {
    return null; // Don't run on server-side
  }

  return {
    onRouteUpdate({location}) {
      // Check if the config is already set (e.g., by a previous navigation)
      // Also check if the script is added, maybe the config exists but script failed last time
      if (!window.difyChatbotConfig && !document.getElementById('wairWlveaRXYYqb5')) {
          console.log('Setting Dify config and adding script via client module');
          
          // Define configuration
          window.difyChatbotConfig = {
            token: 'wairWlveaRXYYqb5',
            systemVariables: {
              // user_id: 'YOU CAN DEFINE USER ID HERE',
              // conversation_id: 'YOU CAN DEFINE CONVERSATION ID HERE, IT MUST BE A VALID UUID',
            },
          };

          // Get CSP nonce from Docusaurus meta tag
          const nonceMeta = document.querySelector('meta[name="docusaurus-csp-nonce"]');
          const nonceValue = nonceMeta?.content;

          // Create and append the script tag
          const script = document.createElement('script');
          script.src = 'https://udify.app/embed.min.js';
          script.id = 'wairWlveaRXYYqb5';
          if (nonceValue) {
            script.setAttribute('nonce', nonceValue);
            console.log('Applied nonce to Dify script:', nonceValue);
          }
          document.head.appendChild(script); // Append to head
      } else if (window.difyChatbotConfig && !document.getElementById('wairWlveaRXYYqb5')) {
         // Config exists, but script is missing (maybe removed or failed to load)
         console.log('Dify config exists, re-adding script via client module');
         
         // Get CSP nonce from Docusaurus meta tag
         const nonceMeta = document.querySelector('meta[name="docusaurus-csp-nonce"]');
         const nonceValue = nonceMeta?.content;

         const script = document.createElement('script');
         script.src = 'https://udify.app/embed.min.js';
         script.id = 'wairWlveaRXYYqb5';
         if (nonceValue) {
           script.setAttribute('nonce', nonceValue);
           console.log('Applied nonce to Dify script (re-add):', nonceValue);
         }
         document.head.appendChild(script); // Append to head
      } else {
          console.log('Dify config or script already present, skipping addition.');
      }
    },
  };
})(); 