import React from 'react';
import { useLocation, Switch } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

export default function AnimatedSwitch({children, exitBeforeEnter = true, initial = false, ...switchProps}) {
  const loc = useLocation();
  return (
    <AnimatePresence exitBeforeEnter={exitBeforeEnter} initial={initial}>
      <Switch location={loc} key={loc.pathname} {...switchProps}>
        {children}
      </Switch>
    </AnimatePresence>
  )
}