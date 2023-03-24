import React, { ReactNode } from 'react';
import styles from '../styles/style.module.css';

type Props = {
    children: ReactNode[];
  };

const Rectangle = ({ children } : Props) => {
  return <div className={styles.rectangle}>{children}</div>;
};

const Item = ({ children } : Props) => {
  return <div className={styles.item}>{children}</div>;
};

export { Rectangle, Item };