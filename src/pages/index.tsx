import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';
import { translate } from '@docusaurus/Translate';
import useBaseUrl from '@docusaurus/useBaseUrl';
import ShowcaseGallery from '@site/src/components/ShowcaseGallery';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <img 
          src={useBaseUrl('/img/open_llm_vtuber.png')}
          alt="Open LLM VTuber" 
          className={styles.headerImage}
        />
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">
          {translate({
            id: 'homepage.tagline',
            message: siteConfig.tagline,
          })}
        </p>
        <p className={styles.compatibility}>
          {translate({
            id: 'homepage.thirdline',
            message: (siteConfig.customFields as { thirdline: string }).thirdline,
          })}
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <ShowcaseGallery />
      </main>
    </Layout>
  );
}
