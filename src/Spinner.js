// @flow

import React from "react";
import "./Spinner.css";
// import styled, { keyframes } from 'styled-components';

const Spinner = () => (
  <div id="spinner">
    <img src="../assets/images/loading.png" alt="loading indicator" />
    <p>Loading...</p>
  </div>
);

export default Spinner;
