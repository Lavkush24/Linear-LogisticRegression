# Linear Regression — Learning Notes and Implementation

This repository contains my learning notes and implementation work for Linear Regression.

The purpose of this work is not only to use Linear Regression through a library, but to understand how the algorithm works mathematically and how the mathematics translates into code.

The notes follow the progression from the original problem to the implementation and optimization process.

## Repository Contents

### 1. Learning Notes

The notes explain the complete learning journey step by step.

The main topics covered are:

- Understanding the original regression problem
- Representing the relationship using a linear model
- Prediction using:

  y = mx + b

- Residual/error calculation
- Sum of Squared Errors
- Cost function
- Partial derivatives
- Gradient
- Gradient Descent
- Learning rate and convergence
- Visualization of optimization
- Symbolic differentiation using SymPy
- Converting symbolic expressions into numerical functions using `lambdify`
- Newton's Method
- Hessian matrix
- Multiple Linear Regression
- Parameter vectors
- Matrix/vector representation
- Vectorization
- Verification using known parameters
- Limitations and important implementation considerations

The notes are intended to explain not only what each component does, but also why it is required and how the different concepts connect.

## 2. Interactive Learning Journey

`linear_regression_learning_journey.html`

This is an interactive version of the learning journey.

It contains:

- Navigation through the complete learning process
- Interactive line fitting
- Adjustable slope and intercept
- Gradient descent experiment
- Adjustable learning rate
- Adjustable number of iterations
- Explanations of derivatives and optimization
- Newton's Method and Hessian explanation
- Multiple regression and vectorization
- Verification concepts
- Active-recall questions

The HTML file can be opened directly in a browser without requiring a server.

## 3. Actual Implementation

The repository also contains the actual implementation files/notebooks used while learning.

These implementations move beyond the theoretical notes and demonstrate the mathematics in Python.

The implementation includes concepts such as:

### Basic Linear Regression

The model uses:

```text
y_hat = mx + b