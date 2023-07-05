import React from 'react';
import classNames from 'classnames';
import styles from './GridContainer.module.css';

type Props = {
  className?: string;
  children: React.ReactNode;
}

const GridContainer: React.FC<Props> = ({ className, children }) => {
  return <div className={classNames(className, styles.container)}>{children}</div>;
};

export default GridContainer;
