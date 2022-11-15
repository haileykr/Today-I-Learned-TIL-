# AWS SageMaker Practical for Beginners
## Dr. Ryan Ahmed, Mitchell Bouchard

## Section 1: Introduction, Success Tips & Best Practices and Key Learning Outcomes
### 1. Course Tips and Best Practices
* For every project,
  * Jupyter Notebooks
  * Project Slides
  * Dataset

### 3. Course Key Tips and Best Practices
* How to succedd in this course?
  * For Projects,
    * Step #1: Start with the Jupyter Notebook and run cells OR code along with me while watching the videos
  * For Mini Challenges,
    * Step #1: Attemp to solve the challenge on your own
    * Step #2: Compare your answers with solutions notebook while watching the solutions video lecture
* How to get help and ask questions?
  * Step #1: Check the lecture videos for answers
  * Step #2: Search the previous Q&A
  * Step #3: Search SO for error msgs
  * Step #4: Post in Q&A and our team will be happy to help you out

### 4. Course Outline and Key Learning Outcomes
* Case Study #1: Employee Salary Predictions
  * Absolute Beginner Case Study + Simple Dataset + Regression + SKlearn + S3 + Linear Learner + Model Deployment + Endpoint Inference

  * Understand how to leverage the power of ML to predict salary based on # yrs of experience
  * Understand the simple linear regression and sum of least squares theory
  * Train a simple linear regression model using Scikit Learn
  * Load and manipulate dataset using pandas datafrma
  * Divide dataset into training and testing using Scikit learn
  * Preform exploratory data analysis and visualization using histograms, Seaborn pairplot, matplotlib and correlation matrices
  * Understand the basics of SageMaker Studio
  * Upload data to S3 using Boto3 AWS SDK
  * Understand the concepts of containers, Identity and Access Management (IAM), and Elasitc Inference
  * Train a linear learner model to preform regression tasks using SageMaker
  * Deploy and test trained model and perform inference
  
* Case Study #2: Medical Insurance Premiums Prediction
  * Multiple Linear Regression + Categorical/Numerical Data + Regression KPIs + ANNs + Activation Functions + Keras
  
  * Predict premium based on individual's features 
  * Apply lambda function in python and convert categorical variable into dummy/indicator variables
  * Fit a straight line to dataset using seaborn regplot
  * Perform feature scaling using sklearn
  * Understand the theory and intuition behind multiple linear regression
  * Learn the difference between various regression KPIs such as RMSE, MSE, MAE, coefficient of determination (R2) and adjusted R2
  * Build, train, and deploy a predictive model using SageMaker built-in Linear Learner
  * Understand the theory and intuition behind artificial neural networks and how to apply them to perform regression tasks
  * Understand the difference between various activation functions such as Sigmoid, RELU, and tanh.
  * Understand the gradient descent and backpropagation algorithm theories
  * BUild and trian artifical neural network models using Keras APIs with Tensorflow as backend

* Case Study #3: Retail Sales Predictions
  * Retail Sales Prediction + XGBoost + Bias Variance + L1/L2 Regularization + Hyperparameters Tuning
   
  * Develop a sales forecasting model to predict sales based on historical data
  * Merge multiple dataframes using pandas
  * Understand the concept of bias, variance, overfitting and underfitting
  * Understand the concept of bias-variance trade-off
  * Learn the difference between L1 and L2 regularization
  * Develop a function in python and apply it to pandas dataframe
  * Learn how to fill out missing data points (null elements)
  * Understand the theory and intuition behind gradient boosted trees and Extreme Gradient boosting (XGBoost) algorithm
  * Learn how to build a decision tree and decision tree ensemble
  * List the advantages and disadvantages of XGBoost algo
  * Build, train and deploy XGBoost-based algorithm to perform regression tasks
  * Optimize XGBoost hyperparameters using SageMaker's Hyperparameters optimization tool
  * Deploy the best model after the hyperparameters optimization job is done

* Case Study #4: Cardiovascular Disease Predictions
    * Healthcare + PCA + XGBoost + Classification + Two Sequential AI/ML Models + Confusion Matrix + Precision/Recall/F1-Score + GridSearch
  
    * Detect the presence of cardiovascular disease in person based on the given features such as cholesterol levels, blood pressure, and physical activity
    * Understand the intuition behind principal components analysis (PCA)
    * Apply PCA to perform dimensionality reduction using real world datasets
    * Deploy trained PCA algorithm using AWS SageMaker
    * Learn how to apply XGBoost algorithm in SageMaker to perform classification tasks using reduced features after XGBoost
    * Evaulate classification models and present results using confusion matrix and classification reports
    * Understand the difference between precision, recall, and F1-score
    * Learn the difference betwen Receiver Operating Characteristics (ROC) and Area Under Curve (AUC).
    * Perform Grid search and optimize model parameters

* Case Study #5: Image Classification and Deep Learning
  * Deep Learning + Image Classification + Tensorflow + SDK + Keras + CNNs + Lenet
  
  * Learn how to leverage the power of deep learning to perform image classification
  * Understand the theory and intuition behind convolutional neural networks (CNNs)
  * Understand LeNet deep neural network theory and intuition
  * Train LeNet to perform image classification using real world datsets
  * Evaluate trained LeNet networks on testing data
  * Know the difference betwween various activation functions such as Sigmoid and Rectified Lienar Units (RELU)
  * Apply Keras API to build Deep Convolutional Neural Networks
  * Improve the model generalization capability using dropout regularization technique
  * Learn how to use TF estimators from SageMaker SDK to build, train and deploy deep learning models

* Case Study #6: SageMaker Studio Deepdive & AutoML
  * SageMaker Studio + AutoML + Model Debugger + Experiments Management + Report Generation
  
  * Learn how to use SageMaker Studio AutoML tool
  * Learn how to manage experiments in SageMaker Studio
  * Learn how to use the debugger tool to debug XGBoost models
  * Generate and view candidate generation and data exploration nbs
  
* Jupyter Notebooks Walkthrough:
  * Brand new AWS SageMaker studio will be used
  * Several mini challenges/practice activities
  * Case study is divided into small manageable tasks


## Section 2: Intro to ML/AI, AWS and Cloud Computing
### 6. AWS Free Tier Setup and Overview
* Free Tier - list of offers is up there!
* `Create a Free Account`

### 7. Intro to AI, ML and Deep Learning
* ML: data + model + compute
* All of these are provided by AWS
* AI > ML > Deep Learning
  
1. Artificial Intelligence
  * Science that empowers computers to mimic human intelligence such as decision making, text processing, and visual perception
  * AI is a broader field (i.e. big umbrella)that contains several subfields such as ML, robotics, and CV.
  
2. Machine Learning
  * ML is a subfield of AI that enables machines to improve at a givecn task with experience
  * It is important to note that all ML techniques are classified as AI ones.
  * However, not all AI could count as ML as some basic Rule-based engines could be classified as AI but they do not learn from experience - thus not ML

3. Deep Learning
  * Specialized field of ML that relies on training of Deep Artificial Neural Networks (ANNs) using large dataset such as images
  * ANNs are information processsing models inspired by the human brain which consists of billions of neurons
  * Input Data - Deep (Hidden Layers) -> Target Outputs

* Machine vs. Deep Learning
  * difference - their ability to extract features automatically
    * ML Process:
        1. Select the model to train
        2. Manually perform the extraction
        3. Ex. Images -> Manual Feature Extraction (ex. distance between eyes, loc of ears,etc.)) -> Classification (ML) -> Cat/Dog/Mouse
    * Deep Learning Process 
        1. Select the architecture of the network
        2. Features are automatically extracted by feeding in the training data (such as images) along with the targe class (label)
        3. Ex. Images -> Convolutional Neural Network (CNN) + Learned Features -> Cat/Dog/Mouse

### 8. Intro to AI, ML, and DL - Part #2
* AI -> ML -> Supervised Learning -> Classification
                                  -> Regression
           -> Unsupervised Learning -> Clustering
           -> Reinforcement Learning

* AI - science that enables computers to mimic human intelligence

* ML - subset of AI that enables machines to improve at tasks with experience
* Supervised Learning - Training algorithms using labeled input/output data
* Unsupervised Learning  - Training algorithms with no labeled data. It attempts at discovering hidden patterns on  its own
* Reinforcement Learning - Algorithm take actions to maximize cumulative reward

1. ML: Supervised Learning
   * Supervised: used to train alrogithms using labeled input and output
   * Performance is assessed by comparing trained model prediction vs. real output
   * Ex. Input Data: x_train [img] -> Model <- Desired Output, Target Classes (Labels): y_train [coat, sandal, sneakers]

2. ML: Unsupervised Learning
   * Unsupervised: provides algorithm with no labeled data
   * Algorithm attempts at discovering hidden patterns wihtin the training data
   * Unsupervised learning can analyze complex data that humans may find difficult to interpret
   * no ground truth, no labeled data
   * No feedback : one of the issues, hard to assess the performance as we don't have ground truth
   * Ex. Input Data: x_train [a collection of a lot of things] -> Model -> Data Clusters [a collection of stars, a collection of rectangles, a collection of circles]
   * Ex. who are elligible for retirement  using bank data?

3. ML: Reinforcement Learning
   * allows machine to take actions to maximize cumulative reward
   * RL algorithms learn by trial & error, via reward & penalty!
   * Two elements: Environment and Learning Agent
   * The environment rewards the agent for correct actions
   * Based on the reward or penalty, agent improves its env knowledge to make better decision
   * Ex. Agent - From State s, take Action a -> Environment - Get Reward R, new State s`  -> Agent

### 9. Good Data vs. Bad Data
* ML models require data to train
* Generally two types of data
  1. Unlabelled Dataset
    * the data that does not have explanation (class or tag) associated with it
    * Could be used for Unsupervised ML
  2. Labelled Dataset
    * the labeled data consists of unlabeled data but with a class or tag associated with them
    * Could be used for Supervised ML

* Where does data come from?
  * Data can come from so many sources ex. img, audio, video, signals/timeseries (ex. stock) and text (or corpus)
  * Collecting, Structuring, and  Analysing this data is critical for companies 
  * Could come from multiple sources SUCH AS
    * Kaggle
    * UCI
      * https://archive.ics.uci.edu/ml/datasets.php 
      * https://www.kaggle.com/datasets
    * AWS Dataset
    * ImageNet
      * an open source repo of imgs consisting of 21,841 subcategories (Classes) and over 14 million imgs

* Good Data
  * Many samples (large # of datapts)
  * Not biased
  * Does not contain missing datapts
  * Only contains (relevant) important features
  * Does not contain duplicate samples
* Bad Data
  * Few samples (small # of datapts)
  * Biased
  * Contains missing data
  * Contains many irrelevant features
  * Contains duplicate samples

### 10. Intro to AWS and Cloud Computing
* What is AWS?
  * Amazon Web Services: the world's top cloud platform
  * offers more than 165 fully featured services (40 of them not offered anywhere else)
  * adoptbed by millions of customers
  * Ex. Computation, Storage, Analytics, ML & AI, Networking, Databases, IoT
* What is Cloud Computing?
  * on-demand delivery of services ex. computation and storage over the Internet with pay-as-you-go
  * instead of buying a physical server or a computer, you can lease it
  * can leverage computer power, storage, and databases, on an as-needed basis from a cloud provider as AWS
* Benefits of Cloud Computing
  * Agility
    * technologies with much faster development and deployment
    * allows for agility and freedom to experiment w/ new ideas faster
  * Elasticity
    * scaling and shrinking resources based on demand
    * no need to over-provision resources up-front
  * Cost Savings
    * massive savings with economies of scale
  * Deploy Globally in Minutes
    * available all over the world
    * can deploy services anywhere by leveraging cloud
    * placing applications near the customer is critical to mitigate latency and improve performance

### 11. Key ML Components and AWS console tour
* Data
  * We will primarily use S3
* Compute
  * We wil mostly use EC2
* AWS ML
  * there are many services!
  * Except for SageMaker they are mostly high-level services

### 12. AWS Regions and Availability
* AWS: ~69 Availability zones within ~22 Geographic Regions
* Region
  * geographical location that contains a # of availability zones (data centers)
  * every region is physically separate from all other regions and has its own independent power and supply
  * ensures
    * Data Compliance
    * Latency (data centers are placed close to users to reduce latency)
  * `us-east-1` : largest AWS region and has five zones

* Availalbility Zone
  * a logical data center, located in a certain region
  * two+ AZ's in every region
  * to ensure availability - each zone has redundant & separate power & networking
  * data center: consists of many servers
  * each zone consists of multiple data centers 

### 13. Amazon S3
* Simple Storage Service : storage service that allows users to store & protect any amount of data
* offers enhanced features incl.
  * scalability
  * data availability
  * security
  * performance
* easy to use and allows users to organize their data and configure finely-tuned access controls
* extremely durable
* Bucket: a container
  * each bucket will have a global universal unique name
  * so you cannot have the same bucket name as someone else
  * you can store an infinite amount of data in a bucket
  * every object up to 5TB
* Ex. to fetch an object `images/mycat.jpg`in `sagemakerpractical` bucket, use `http://sagemakerpractical.s3.amazonaws.com/images/mycat.jpg`

* S3 Storage Tiers
  * S3 Standard: works well with storage that is general purpose and frequently accesed
  * S3 Intelligent-Tiering: for data with varying access patterns
  * S3 Standard-Infrequent Access (Standard-IA): for long-lived but less frequently accessed data 
  * S3 One Zone-Infrequent Access(One Zone-IA): for long-lived, but less frequently accessed data
  * S3 Glacier and S3 Glacier Deep Archive: for long-term archived data
* S3 offers the ability to change the storage tiers by setting a lifecycle policy
* General > Infrequent Access > Glacier

* Creating a bucket!
  * Go to S3
  * Bucket settings - block all public access: will block all public access except for ACL (access control list).
  * `udemy-sagemaker-practical-h`
  * can create folders or upload data directly
  * Create `XGBoost` folder
    * Create `train` folder
    * Upload `salary.csv` data

### 14. Amazon EC2 and IAM
* EC2: offers resizable compute capacity in the cloud
  * can be used to acquire, configure and scale capacity in a very easy fashion
  * service that allows you to simply rent a server in the cloud
  * offers 7x fewer downtime hrs than the next largest cloud provider
  * covers many regions and AZ's all over the world!
* Instance Types Selection
  * `https://aws.amazon.com/sagemaker/pricing/instance-types/
  * Standard, Memory optimized, Compute optimized, Accelerated computing

* Elastic Inference (EI)
  * SageMaker provides an option to have an accelerator on top of your endpoint
  * can speed up the throughput and decrease the latency of getting realtime inferences from DL Models
  * ex. instead of using a GPU instance, you can use CPU instance + EI Accelerator!

* Instance Pricing
  1. On Demand
    * AWS users pay for compute capacity by the hour
    * No longer-term commitments and zero upfront payments
    * Compute capacity is scalable, users can scale or reduce based on demand
  2. Spot Instances
    * A Spot offers a lower price compared to an on-Demand instance
    * The spot instance will run when capacity permits
    * "Spot price" is the price you pay for the spot inst. and is adjusted based on AZ, and demand
    * Spot inst. could save up to 90% compared to on-demand inst.
  3. Reserved Instances
    * Reserved inst. offers capcity reservation & ensures availability when an inst. is assigned to a specific AZ.
    * Reserved inst.offers great savings (up to 75%) compared to on-demand inst.
    * 1 - 3 yrs of commitment to an EC2 to optimize cost.
  4. Dedicated Host
    * A physical EC2 server dedicated for your use
    * EC2 dedicated hosts allow you to use your eligible software licenses (already invested) from vendors such as Microsoft and Oracle on Amazon EC2
    * offers flexibility and cost-effectiveness of using your own licenses but with resiliency, simplicity and elasticity provided by AWS

* Identity and Access Management (IAM): Introduction
  * IAM allows users to securely access & manage AWS services
  * free and global, so no need to define a region
  * allows you to create AWS users and groups & give or deny them access to AWS services such as compute EC2
  * Root account: 
    * the account you create with your email and pw
    * has full admin access and it's very risky to use at all time. 
    * if its credentials are stolen someone might mine cryptocurrency and end up with a very expensive bill
    * AWS strongly recommend that you don't use the root user for everyday work
    * AWS recommends you create an IAM user then lock away the root user credentials
    * can use it only for select few management tasks
    * should have an extra layer of security using MFA
    * https://docs.aws.amazon.com/IAM/latest/UserGuide/id_root_user.html

### 15. SageMaker Overview
* ML is hard!
* Building, Training and Deploying ML models at at scale is not an easy task
* need to collect, clean up the data, select the proper model, train and tune the model and deploy and manage at scale

* Prepare
  * collect & prepare training data
* Build
  * choose/build an ML algorithm
* Train & Tune
  * setup and manage env. for trianing
  * train, debug, and tune models
  * manage training runs
* Deploy
  * deploy model in production
  * monitor models
  * validate predictions
  * scale and manage the production env.

* AWS SageMaker
  * a fully-managed ML worklfow platform that provides services on
    * data labelling
    * model building
    * training
    * tuning
    * deployment
  * allows users to build scalable ML/AI models easily/efficiently
  * models could be deployed in production at a much faster rate and with a fraction of the cost

### 16. Sageamaker Walk-through
* high-level 10-min walk-through
* AWS console - ML - SageMaker

* Labelling
  * Ground Truth>Labeling jobs>Create labeling jobs
* Notebook
  * Create notebook instances
  * can kick-start Jupyter notebook and write Python scripts, etc.
  * After opening notebook, go to notebooks to see examples of ML
* Training
  * Create training jobs
  * channel - where the data is saved
* Inference
  * Endpoint configurations
    * setting endpoint
* Augmented AI
  * mimicing humans to review results
* AWS Marketplace
  * can use models trained by other ppl already

### 17. SageMaker Studio overview
* Amazon SageMaker Studio- fully integrated development environment for ML
* Offers one web-based visual interface to build, train and deploy ML models at scale
* developers can easily create and manage experiments, tune models, upload data
* Note: labelling process is separate from other steps (ex. build, train & tune, deploy & maintain)!

* Label - SageMaker Ground Truth
* Build - SageMaker Studio, SM AutoPilot, SM notebooks, AWS marketplace

* Train & Tune - SM Studio, SM Autopilot, SM Experiments, SM debugger, Automatic Model Tuning
* Deploy & Maintain - SM Studio, SM Model monitor, SM neo, Amazon Augmented AI

* SM Ground Truth : Build & Manage training data sets
* SM Studio : Integrated development environment (IDE) for ML
* SM Autopilot: Automatically build and train models
* SM Notebook: one-click notebooks with elastic compute
* AWS Marketplace: pre-built algorithms and models
* SM Experiments : capture, orgniaze and search every step
* SM debugger : debug and profile training runs

* Automatic Model Training : one-click hyperparameter optimization
* SM Model Monitor : automatically detect concetp drift
* SM Neo : Train once, Deploy everywhere
* Amazon Augmented AI: human review of model predictions!

* SM Studio
  * all ML development activities incl. notebooks, experiment management, automatic model creation, debugging, and model drift detection can be performed within the unitifed SM studio GUI.

* Collaboration at scale
  * share notebooks w/o tracking code dependencies
* Easy experiment management
  * organize track and compare thousands of experiments
* Automatic model generation
  * get accurate models with full visibility and control w/o writing code
* Higher quality ML models
  * automatically debug erros, monitor, models and maintain high quality
* Increased Productivity
  * deploy & monitor in a unified visual interface 