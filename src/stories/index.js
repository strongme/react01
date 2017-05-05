import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import Button from './Button';
import Welcome from './Welcome';
import Square from '../Square';

storiesOf('Welcome', module)
  .add('to Storybook', () => (
    <Welcome showApp={linkTo('Button')}/>
  ));

storiesOf('Button', module)
  .add('with text', () => (
    <Button onClick={action('clicked')}>Hello Button</Button>
  ))
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>💯💯💯</Button>
  ))
  .add('Square Light Up X', () => (
      <Square lightsUp={true} value={"X"} onClick={action('on click even triggered!')}/>
  ))
  .add('Square Light Down X', () => (
      <Square lightsUp={false} value={"X"} onClick={action('on click even triggered!')}/>
  ))
  .add('Square Light Up O', () => (
      <Square lightsUp={true} value={"O"} onClick={action('on click even triggered!')}/>
  ))
  .add('Square Light Down O', () => (
      <Square lightsUp={false} value={"O"} onClick={action('on click even triggered!')}/>
  ))
  ;
