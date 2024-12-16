import React from 'react';
import { useNavigate } from 'react-router';

import Button from '../components/button';
import Menu from '../components/menu';
import Slider from '../components/slider';
import Switcher from '../components/switcher';
import TextField from '../components/inputs/TextField';
import Form from '../components/form';

const Home = () => {
  // const navigate = useNavigate();

  // const items = [
  //   {
  //     title: 'Tech Consulting',
  //     action: () => navigate('/services/tech-consulting')
  //   },
  //   {
  //     title: 'Software Development',
  //     action: () => navigate('/services/software-development')
  //   },
  // ]

  return (
    // <Button color='secondary' size='small' disabled>Send</Button>
    // <Menu items={items}>Services</Menu>
    // <Slider></Slider>
    // <Switcher />
    <Form />
  )
}

export default Home;