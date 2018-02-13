import React from 'react';
import { storiesOf } from '@storybook/react';

import Slider from '../../src/mobile/Slider/Slider.jsx';

const SliderStory = () => {
  return (
    <section className="example">
      <h3 className="ex-title mb20">Basic</h3>

      <div>
        <Slider defaultValue={30} />
      </div>
    </section>
  )
}

storiesOf('Liquid State', module)
  .add('Slider', SliderStory);