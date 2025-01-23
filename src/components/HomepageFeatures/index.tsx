import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Translate from '@docusaurus/Translate';

type FeatureItem = {
  title: string | JSX.Element;
  image: string | React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: <Translate>features.deploy.title</Translate>,
    image: require("@site/static/img/f1.png").default,
    description: <Translate>features.deploy.description</Translate>,
  },
  {
    title: <Translate>features.run.title</Translate>,
    image: require("@site/static/img/f2.png").default,
    description: <Translate>features.run.description</Translate>,
  },
  {
    title: <Translate>features.interact.title</Translate>,
    image: require("@site/static/img/f3.png").default,
    description: <Translate>features.interact.description</Translate>,
  },
  {
    title: <Translate>features.ui.title</Translate>,
    image: require("@site/static/img/f4.png").default,
    description: <Translate>features.ui.description</Translate>,
  },
  {
    title: <Translate>features.memory.title</Translate>,
    image: require("@site/static/img/f5.png").default,
    description: <Translate>features.memory.description</Translate>,
  },
  {
    title: <Translate>features.companion.title</Translate>,
    image: require("@site/static/img/f6.png").default,
    description: <Translate>features.companion.description</Translate>,
  },
];

function Feature({title, image, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        {typeof image === 'string' ? (
          <img 
            src={image} 
            className={styles.featureImage} 
            role="img" 
            alt={typeof title === 'string' ? title : 'feature'} 
          />
        ) : (
          // @ts-ignore
          <image className={styles.featureSvg} role="img" />
        )}
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
