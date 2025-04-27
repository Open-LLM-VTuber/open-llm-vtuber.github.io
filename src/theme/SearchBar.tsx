// By default, the classic theme does not provide any SearchBar implementation
// If you swizzled this, it is your responsibility to provide an implementation
// Tip: swizzle the SearchBar from the Algolia theme for inspiration:
// npm run swizzle @docusaurus/theme-search-algolia SearchBar

import React from 'react';
import { MendableSearchBar } from '@mendable/search';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

/**
 * Mendable AI search bar component
 * This component integrates Mendable's AI-powered search functionality with keyword search
 * Users can type to see immediate keyword search results or ask AI questions
 */
export default function SearchBar(): JSX.Element {
  const {
    siteConfig: { customFields },
  } = useDocusaurusContext();

  return (
    <div className="mendable-search">
      <MendableSearchBar
        anon_key={customFields.mendableAnonKey as string}
        style={{ accentColor: '#25c2a0', darkMode: false }}
        placeholder="Search..."
        dialogPlaceholder="Ask me anything about Open LLM VTuber..."
        showSimpleSearch={true}
      />
    </div>
  );
}
