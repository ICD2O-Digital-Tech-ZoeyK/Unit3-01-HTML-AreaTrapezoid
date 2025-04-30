// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Mr. Coxall
// Created on: Sep 2020
// This file contains the JS functions for index.html
// Function to calculate area
function calculateArea() {
  const a = parseFloat(document.getElementById("sideA").value);
  const b = parseFloat(document.getElementById("sideB").value);
  const h = parseFloat(document.getElementById("height").value);

  if (isNaN(a) || isNaN(b) || isNaN(h)) {
    alert("Please enter valid numbers.");
    return;
  }

  const area = ((a + b) * h) / 2;
  document.getElementById("result").textContent = `Area: ${area.toFixed(2)}`;
}

// On page load, apply 'is-dirty' class to inputs with values
window.onload = function () {
  const fields = document.querySelectorAll('.mdl-textfield');
  fields.forEach(field => {
    const input = field.querySelector('input');
    if (input && input.value !== '') {
      field.classList.add('is-dirty');
    }

    // Fix label position on input
    input.addEventListener('input', () => {
      if (input.value === '') {
        field.classList.remove('is-dirty');
      } else {
        field.classList.add('is-dirty');
      }
    });
  });
};



