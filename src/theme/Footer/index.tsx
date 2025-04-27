import React, {type ReactNode} from 'react';
import Footer from '@theme-original/Footer';
import type FooterType from '@theme/Footer';
import type {WrapperProps} from '@docusaurus/types';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { MendableFloatingButton } from '@mendable/search';

/**
 * Footer wrapper component that adds the Mendable floating button
 * This enables users to access AI chat functionality from any page
 */
type Props = WrapperProps<typeof FooterType>;

export default function FooterWrapper(props: Props): ReactNode {
  const {
    siteConfig: { customFields },
  } = useDocusaurusContext();

  return (
    <>
      <MendableFloatingButton anon_key={customFields.mendableAnonKey as string} />
      <Footer {...props} />
    </>
  );
}
