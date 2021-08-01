# Coursera_Machine_Learning_by_Prof_Andrew_Ng

### CS 229
### Stanford University
### 2021 Version

# 1 - WELCOME
### What is Machine Learning?
Two definitions of Machine Learning are offered.
1. Arthur Samuel described it as: "the field of study that gives computers the ability to learn without being explicitly programmed." This is an older, informal definition.(1959) 
2. Tom Mitchell provides a more modern definition: "A computer program is said to learn from experience E with respect to some class of tasks T and performance measure P, if its performance at tasks in T, as measured by P, improves with experience E." (1998) 

Example: playing checkers.
E = the experience of playing many games of checkers
T = the task of playing checkers.
P = the probability that the program will win the next game.

In general, any machine learning problem can be assigned to one of two broad classifications:
Supervised learning and Unsupervised learning.

### Major Categories
1. Supervised Learning
   * Input and Ouput directed by human
   * given the 'right ansewr' for each example in the data
2. ML strategy
    * Regression ~> predicted real-value  output
    * Classification
3. Deep Learning
4. Unsupervised Learning
    * EX. cocktail party problem

### Supervised Learning
* In supervised learning, we are **given a data set** and **already know what our correct output should look like**, having the idea that there is a relationship between the input and the output.
* Supervised learning problems are categorized into **"regression"** and  **"classification"** problems. In a regression problem, we are trying to predict results within a continuous output, meaning that we are trying to map input variables to some continuous function. In a classification problem, we are instead trying to predict results in a discrete output. In other words, we are trying to map input variables into discrete categories. 
* Example 1:
Given data about the size of houses on the real estate market, try to predict their price. Price as a function of size is a continuous output, so this is a regression problem.
* We could turn this example into a classification problem by instead making our output about whether the house "sells for more or less than the asking price." Here we are classifying the houses based on price into two discrete categories.
* Example 2:
(a) Regression - Given a picture of a person, we have to predict their age on the basis of the given picture
(b) Classification - Given a patient with a tumor, we have to predict whether the tumor is malignant or benign. 

### Unsupervised Learning 
* Unsupervised learning allows us to approach problems with **little or no idea what our results should look like.** We can derive structure from data where we don't necessarily know the effect of the variables.
* We can derive this structure by clustering the data based on relationships among the variables in the data.
With unsupervised learning there is **no feedback based** on the prediction results.
* Example:
1. **Clustering**: Take a collection of 1,000,000 different genes, and find a way to automatically group these genes into groups that are somehow similar or related by different variables, such as lifespan, location, roles, and so on.
2. **Non-clustering**: The "Cocktail Party Algorithm", allows you to find structure in a chaotic environment. (i.e. identifying individual voices and music from a mesh of sounds at a cocktail party).
 
#### Model Representation
* EX. Training set of housing prices
* (m = number of training examples)
* (x's = 'input' variable / features)
* (y's = 'output' variable / 'target' variable)
* ((x, y) ~ one training example)
* ((x^(i), y^(i)) ~ i'th training example)
* Training Set -> Learning Algorithm -> h
            * size of house (x) -> h (hypothesis) -> Estimated Price (estimated value of y)
* h maps from x's to y's
* hypothesis is not the best term to explain what it is but it's the standard terminology!
* How do we represent h?
  * h_(theta)(x) = theta0 + theta1
  * shorthand: h(x)
  * linear regression : with one variable. h(x) = theta0 + theta1
  * univariate linear reg
  * "univariate" : 1 variable

### Model Representation
* To establish notation for future use, we’ll use x^(i) to denote the **“input” variables** (living area in this example), also called input features, and y^(i) to denote the **“output” or target variable** that we are trying to predict (price). A pair (x^(i) ,y^(i)) is called a **training example**, and the dataset that we’ll be using to learn—a list of m training examples (x^(i), y^(i));i=1,...,m—is called a training set.
* Note that the superscript “(i)” in the notation is simply an index into the training set, and has nothing to do with exponentiation. We will also use X to denote the space of input values, and Y to denote the space of output values. In this example, X = Y = ℝ. 
* To describe the supervised learning problem slightly more formally, our goal is, given a training set, to learn a function h : X → Y so that h(x) is a “good” predictor for the corresponding value of y. For historical reasons, this function h is called a hypothesis. 

### Cost Function
* We can measure the **accuracy** of our hypothesis function by using a **cost function**. This takes an average difference (actually a fancier version of an average) of all the results of the hypothesis with inputs from x's and the actual output y's.
* This function is otherwise called the "Squared error function", or "Mean squared error". The mean is halved (1/2) as a convenience for the computation of the gradient descent, as the derivative term of the square function will cancel out the (1/2) term. 

### Cost Function
* If we try to think of it in visual terms, our training data set is scattered on the x-y plane. We are trying to make a straight line (defined by h_theta(x))  which passes through these scattered data points. 
* Our objective is to get the best possible line. The **best possible line will be such so that the average squared vertical distances of the scattered points from the line will be the least**. Ideally, the line should pass through all the points of our training data set. **In such a case, the value of J(theta_0, theta_1) will be 0!**
* A **contour plot** is a graph that contains many contour lines. A contour line of a two variable function has a constant value at all points of the same line. An example of such a graph is the one to the right below!
* Taking any color and going along the 'circle', one would expect to get the same value of the cost function. For example, the three green points found on the green line above have the same value for J(theta_0,theta_1) and as a result, they are found along the same line. The circled x displays the value of the cost function for the graph on the left when theta_0 = 800 and theta_1 = -0.15. Taking another h(x) and plotting its contour plot, one gets the following graphs:
* When theta_0 = 360 and theta_1 = 0, the value of J(theta_0,theta_1) in the contour plot gets closer to the center thus reducing the cost function error. Now giving our hypothesis function a slightly positive slope results in a better fit of the data.
* The graph above minimizes the cost function as much as possible and consequently, the result of theta_1 and theta_0 tend to be around 0.12 and 250 respectively. Plotting those values on our graph to the right seems to put our point in the center of the inner most 'circle'!

## Parameter Learning
### Gradient Descent
* Algorithm to minimize the cost function:J!
* So we have our hypothesis function and we have a way of measuring how well it fits into the data. Now we need to estimate the parameters in the hypothesis function. That's where gradient descent comes in.
* Imagine that we graph our hypothesis function based on its fields theta_0 and theta_1 (actually we are graphing the cost function as a function of the parameter estimates). We are not graphing x and y itself, but the parameter range of our hypothesis function and the cost resulting from selecting a particular set of parameters.
* We put theta_0 on the x axis and theta_1 on the y axis, with the cost function on the vertical z axis. The points on our graph will be the result of the cost function using our hypothesis with those specific theta parameters. The graph below depicts such a setup: <three-dimensional graph>
* We will know that we have succeeded when our cost fn is at the very bottom of the pits in our graph, i.e. when its value is the minimum. The red arrow shows the minimum points in the graph.
The way we do this is by **taking the derivative** (the tangential line to a function) of our cost function. The slope of the tangent is the derivative at that point and it will give us a direction to move towards. We make steps down the cost function in the direction with the steepest descent. The size of each step is determined by the **parameter α, which is called the learning rate**.
* For example, **the distance between each 'star' in the graph** above represents a **step determined by our parameter α**. A smaller α would result in a smaller step and a larger α results in a larger step. The direction in which the step is taken is determined by the partial derivative of J(theta_0,theta_1). Depending on where one starts on the graph, one could end up at different points. The image above shows us two different starting points that end up in two different places.
* The gradient descent algorithm is:
repeat until convergence:
  theta_j := theta_j - (alpha)*d/dtheta_j*J(theta_0, theta_1)
where j=0,1 represents the feature index number.
* At each iteration j, one should simultaneously update the parameters theta_1, theta_2,...,theta_n. Updating a specific parameter prior to calculating another one on the j^{(th)} iteration would yield to a wrong implementation.

### Gradient Descent - Intuition
* Regardless of the slope's sign for d/dtheta_1*J(theta_1) eventually converges to its minimum value. The following graph shows that when the slope is negative, the value of theta_1 increases and when it is positive, the value of theta_1 decreases.
* On a side note, we should adjust our parameter \alphaα to ensure that the gradient descent algorithm converges in a reasonable time. Failure to converge or too much time to obtain the minimum value imply that our step size is wrong
* How does gradient descent converge with a fixed step size alpha? The intuition behind the convergence is that (d/dtheta_1)*J(theta_1) approaches 0 as we approach the bottom of our convex function. At the minimum, the derivative will always be 0 and thus we get
theta1 := theta1 - alpha*0

### Gradient Descent for Linear Regression
* When **specifically applied to the case of linear regression, a new form of the gradient descent equation can** be derived. We can **substitute our actual cost function and our actual hypothesis function** and modify the equation to: <EQUATION>
* where m is the size of the training set, theta_0 a constant that will be changing simultaneously with theta_1 and x_{i}, y_{i} are values of the given training set (data).
Note that we have separated out the two cases for theta_j into separate equations for theta_0 and theta_1; and that for theta_1 we are multiplying x_{i} at the end due to the derivative. The following is a derivation of 
∂/∂θ_j* J(θ) for a single example
The point of all this is that if **we start with a guess for our hypothesis and then repeatedly apply these gradient descent equations, our hypothesis will become more and more accurate**.
* So, this is **simply gradient descent on the original cost function J**. This method looks at every example in the entire training set on every step, and is called **batch** gradient descent. Note that, while gradient descent can be susceptible to local minima in general, the optimization problem we have posed here for linear regression has only one global, and no other local, optima; thus **gradient descent always converges (assuming the learning rate α is not too large) to the global minimum**. Indeed, J is a convex quadratic function. Here is an example of gradient descent as it is run to minimize a quadratic function

## Linear Algebra
### Matrices,Vectors
* Matrices ~> two-dimensional arrays
* Vectors ~>a matrix with one column and many rows
  * So vectors are a subset of matrices. The above vector is a 4 x 1 matrix.
* Octave / Matlab
  
```
% The ; denotes we are going back to a new row.
A = [1, 2, 3; 4, 5, 6; 7, 8, 9; 10, 11, 12]

% Initialize a vector 
v = [1;2;3] 

% Get the dimension of the matrix A where m = rows and n = columns
[m,n] = size(A)

% You could also store it this way
dim_A = size(A)

% Get the dimension of the vector v 
dim_v = size(v)

% Now let's index into the 2nd row 3rd column of matrix A
A_23 = A(2,3)
```

### Addition and Scalar Multiplication
* Addition and subtraction are element-wise, so you simply add or subtract each corresponding element
* To add or subtract two matrices, their dimensions must be the same.
* In scalar multiplication, we simply multiply every element by the scalar value.
* In scalar division, we simply divide every element by the scalar value.
* Octave or Matlab
```
% Initialize matrix A and B 
A = [1, 2, 4; 5, 3, 2]
B = [1, 3, 4; 1, 1, 1]

% Initialize constant s s = 2

% See how element-wise addition works
add_AB = A + B 

% See how element-wise subtraction works
sub_AB = A - B

% See how scalar multiplication works
mult_As = A * s

% Divide A by s
div_As = A / s

% What happens if we have a Matrix + scalar?
add_As = A + s
```

### Matrix Vector Multiplication
* We map the column of the vector onto each row of the matrix, multiplying each element and summing the result.
* The result is a vector. The number of columns of the matrix must equal the number of rows of the vector.
* Octave or Matlab codes
```
% Initialize matrix A 
A = [1, 2, 3; 4, 5, 6;7, 8, 9] 

% Initialize vector v 
v = [1; 1; 1] 

% Multiply A * v
Av = A * v
```
### Matrix Matrix Multiplication
* We multiply two matrices by breaking it into several vector multiplications and concatenating the result.
* An m x n matrix multiplied by an n x o matrix results in an m x o matrix. In the above example, a 3 x 2 matrix times a 2 x 2 matrix resulted in a 3 x 2 matrix.
* To multiply two matrices, the number of columns of the first matrix must equal the number of rows of the second matrix.
* Octave or Matlab
```
% Initialize a 3 by 2 matrix.
A = [1, 2; 3, 4; 5, 6]

% Initialize a 2 by 1 matrix.
B = [1; 2]

% We expect a resulting matrix of (3 by 2)*(2 by 1) = (3 by 1)
mult_AB = A*B

% Make sure you understand why we got that result
```

### Matrix Multiplication Properties
* Matrices are not commutative: A∗B =/= B∗A
* Matrices are associative: (A*B)*C = A*(B*C)
* The **identity matrix** when multiplied by any matrix of the same dimensions, results in the original matrix.It's just like multiplying numbers by 1.The identity matrix simply has 1's on the diagonal (upper left to lower right diagonal) and 0's elsewhere
* When multiplying the identity matrix after some matrix (A∗I), the square identity matrix's dimension should match the other matrix's **columns**. When multiplying the identity matrix before some other matrix (I∗A), the square identity matrix's dimension should match the other matrix's **rows.**
```
% Initialize random matrices A and B 
A = [1,2;4,5]
B = [1,1;0,2]

% Initialize a 2 by 2 identity matrix
I = eye(2)

% The above notation is the same as I = [1,0;0,1]

% What happens when we multiply I*A ? 
IA = I*A 

% How about A*I ? 
AI = A*I 

% Compute A*B 
AB = A*B 

% Is it equal to B*A? 
BA = B*A 

% Note that IA = AI but AB != BA
```
### Inverse and Transpose
* inverse : A^(-1). A*(A^(-1)) = (A^(-1))*A = I
* A non-square matrix doesn't have an inverse m
  * *singular* or *degenerate* matrix
* In Octave, use pinv(A) and in matlab, use inv(A)
* **Transposition** is like rotating the matrix 90deg clockwise then reversing it! A^(T). Or A_ij= A^(T)_ji!
```
% Initialize matrix A 
A = [1,2,0;0,5,6;7,0,9]

% Transpose A 
A_trans = A' 

% Take the inverse of A 
A_inv = inv(A)

% What is A^(-1)*A? 
A_invA = inv(A)*A
```
