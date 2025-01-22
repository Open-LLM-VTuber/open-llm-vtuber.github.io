import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Translate from '@docusaurus/Translate';

type FeatureItem = {
  title: string | JSX.Element;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: <Translate>features.deploy.title</Translate>,
    Svg: require("@site/static/img/undraw_control-panel_j1wf.svg").default,
    description: (
      <Translate>features.deploy.description</Translate>
    ),
  },
  {
    title: <Translate>features.run.title</Translate>,
    Svg: require("@site/static/img/undraw_real-time-sync_ro77.svg").default,
    description: (
      <Translate>features.run.description</Translate>
    ),
  },
  {
    title: <Translate>features.interact.title</Translate>,
    Svg: require("@site/static/img/undraw_chat-bot_44el.svg").default,
    description: (
      <Translate>features.interact.description</Translate>
    ),
  },
  {
    title: <Translate>features.ui.title</Translate>,
    Svg: require("@site/static/img/undraw_experience-design_d4md.svg").default,
    description: (
      <Translate>features.ui.description</Translate>
    ),
  },
  {
    title: <Translate>features.memory.title</Translate>,
    Svg: require("@site/static/img/undraw_moments_4a32.svg").default,
    description: (
      <Translate>features.memory.description</Translate>
    ),
  },
  {
    title: <Translate>features.companion.title</Translate>,
    Svg: require("@site/static/img/undraw_friendship_chd3.svg").default,
    description: (
      <Translate>features.companion.description</Translate>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
