class encapsulation:
    def __init__(self, coefficients):
        self.coefficients = coefficients
        self.degree = len(coefficients) - 1
        self.leading_coefficient = coefficients[0] if coefficients else 0
    