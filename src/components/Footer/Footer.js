/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Footer.css';
import Link from '../Link';

function Footer() {
  return (
    <div className={s.root}>
      <div className={s.container}>
        <span className={s.text}>CSP</span>
        <span className={s.spacer}>·</span>
        <Link className={s.link} to="/article">Article</Link>
        <span className={s.spacer}>·</span>
        <Link className={s.link} to="/masonry">Masonry</Link>
        <span className={s.spacer}>·</span>
        <Link className={s.link} to="/tile">Tile</Link>
        <span className={s.spacer}>·</span>
        <Link className={s.link} to="/tiles">Tiles</Link>
        <span className={s.spacer}>·</span>
        <Link className={s.link} to="/not-found">Not Found</Link>
      </div>
    </div>
  );
}

export default withStyles(s)(Footer);
