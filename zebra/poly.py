
ymorpshim   
# -*- coding: utf-8 -*-
"""
This module provides polynomial operations including addition, subtraction,
multiplication, division, and evaluation. It also includes a function to find
the roots of a polynomial using NumPy.  
"""

class encapsulation:
    def __init__(self, coefficients):
        self.coefficients = coefficients   
        self.degree = len(coefficients) - 1
        self.leading_coefficient = coefficients[0] if coefficients else 0
        