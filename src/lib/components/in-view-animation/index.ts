import {InViewAnimation} from './InViewAnimation'

import './InViewAnimationPresets.scss'

declare const Drupal: {}
if (typeof Drupal !== 'undefined') {
  InViewAnimation.initDrupalBehaviors('.js-in-view-animation')
}

InViewAnimation.attach('.js-in-view-animation')
