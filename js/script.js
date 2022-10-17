// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Mr. Coxall
// Created on: Sep 2020
// This file contains the JS functions for index.html

"use strict"
/**
 * This function calculates area and perimeter of rectangle.
 */
function calculate() {
  // input
  const base = parseInt(document.getElementById('base-of-triangle').value)
  const height = parseInt(document.getElementById('height-of-triangle').value)
  const length = parseInt(document.getElementById("length-of-rectangle").value)
  const width = parseInt(document.getElementById("width-of-rectangle").value)
  // process
  const area = base * height / 2

  // output
  document.getElementById('base-of-triangle').innerHTML = 'Area is: ' + area + ' cm²'
  document.getElementById("area").innerHTML = "Area is: " + area + " cm²"
  document.getElementById("perimeter").innerHTML =
    "Perimeter is: " + perimeter + " cm"
}
