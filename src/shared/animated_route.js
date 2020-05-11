import React from 'react';
import { Route } from "react-router-dom";
import SlideIn from './routing_effects/slide_in';
import OpenIn from './routing_effects/open_in';

const EFFECT_MAP = {
  slidein: SlideIn,
  openin: OpenIn,
};

function propsMapper(type, slide, slideUp) {
  return ({
    slidein: {slide, slideUp},
    openin: {},
  }[type]);
}
export default function AnimatedRoute({children, path, exact = false, slide = 0, slideUp = 0,type = 'slidein', ...otherProps}) {
  
  const animationProps = propsMapper(type, slide, slideUp);
  const Transition = EFFECT_MAP[type] || SlideIn;

  return (
    <Route exact={exact} path={path} {...otherProps}>
      <Transition {...animationProps}>
        {children}
      </Transition>
    </Route>
  )
}