# A Beginner's Guide to Augmented Reality with Unity
## Penny de Byl
## Udemy

## Section 1: Introduction
### 1. Introduction
* AR + Unity
* H3D - https://www.h3dlearn.com/blog/help

### 5. Getting Familiar with Unity
* Personal use - free
* store.unity.com
* Personal - download unity
* Install Android build support, iOS build support, WebGL Build Support, and VS
* New Project - UnityTutorial1, 3D
  * Unity UI pops up
  * instructor usually has Scene on the left and Game on the right
  * Hierarchy and Inspector on the right
  * Project and Console at bottom

* Scene
  * your design area - places all the virtual objects
  * ex. GameObject - 3D Object - Cube
  * hierarchy shows the cube now!
  * Focus - "F"
  * Pan - "Q"
  * Rotate - Option/Alt
  * Translate Object - "W"
  * Rotate Object - "E"
  * Resize Object - "R"

* Camera
  * dictates the way your game is visible

* Inspector
  * shows properties and components of game object

* Project window
  * shows how the Unity project is setup
  * `Asset` folder
    * do not delete it!
  * In the root folder
    * `Assets`
    * `Library`
    * `Packages`
    * `ProjectSettings`
    * `Temp`
    * do not delete all of these and let the Unity do the work

### 6. Your first AR Experience
* `Wikitude` library - what we will use for AR
* Marker - what Wikitude detects
  * and puts AR on top of it
* Print out `bear` marker - 10cm x 10cm
* Have your webcam plugged in!

* __Package__
* Drag and Drop your `Wikitude.UnityPackage` to Projects folder
  * will spend a time decompressing and will give you a list of files that Unity wants to import

* __Marker__
* Look at `StreamingAssets` folder!
  * `Wikitude` folder
    * these are the traind markers!
    * Wikitude will look for these in the video stream and put AR on those markers
    * place `bear.wtc` in the folder!
      * `bear.wtc` is a trained version of the bear img

* __Model__
  * In `Assets` folder, drag and drop the `TeddyBear.UnityPackage`

* __Camera__
  * In Hierarchy, we need to add Wikitude camera
  * Search `wikitude camera` in Project folder
  * Drag and Drop that into hierarchy
  * remove main camera as WikitudeCamera will do more than that

* __ImageTracker__
  * Will find the marker in our videostream
  * Search it and drag and drop it to  `hierarchy`
  * Now we need to link it to `bear.wtc` so that it knows to track it in the video
  * In `Inspector`, Target Collection Resource - select bear
  * Click on Trackable and now will be able to see the bear img
  * now we need to attach a virtual object to trackable!
  
  * Drag and drop the `Assets/Teddy` onto `Trackable` so that teddy is nested under trackable
  * Teddy will then be positioned at 0, 0, 0
  * meaning it will be positioned at the center of the img

* Now hit `Play`! and when the video does not have any shine on it and can see the marker
  * Teddy pops up! wow!

* You can use any 3d object instead of Teddy you placed(i.e. a cube then a cube will pop up instead of Teddy!)

### 7. Challenge: Recreate A Simple AR Experience
* Recreate a simple project with Granny.zip attached
* Bring Granny.UnityPackage to `Assets` folder and Unity will unpackage it for you
* Trained marker file (`.wtc`) into `StreamingAssets` folder
* go to `Trackable`, delete bear and put a new asset
* go to `ImageTracker` and select the new trained marker file

### 8. What is a Bundle ID
* Every iOS and Android App requires a Bundle ID (a.k.a. Package Name). The format of a Bundle ID is:
`com **DOT** *your_name_or_company_name* **DOT** *app_name*`
for example,
  * com.holistic3d.arapp
  * com.penny.mygame

* Unity will require one of these to be entered into your project before it will let you build it out to your device! 
* If you are developing for iOS you will need a Bundle ID registered with Apple before you can  build to a mobile.
* If you are developing with Android you won't need this right now.
* Details on creating & registering a Bundle ID can be foudn in the lecture Let's build an iOS app with Unity.
* The Bundle ID is also necessary for registirng for a Wikitude license. Therefore ensure you have settled on one to use before you continue with that process.
* The same Bundle ID can be used in both iOS and Android builds.
* In the Apple App Store and Google Play Store ecosystems the Bundle ID is used to uniquely identify your app.
* Once you have your Bundle ID it will need to be inserted into your Unity Project in the Player Settings. We will cover these steps in the tutorial. For now keep it on hand.

### 9. Getting A Wikitude License
* To use Wikitude without the watermark and for your own applications: need a license key linked to your own Bundle ID.
* A full wikitude license is priced at 4490 Euros
* used to be free for students and startups
* but from April 2022 Wikitude are discontinuing Student License and replacing with Free trial.

* To obtain this visit: `https://www.wikitude.com/wikitude-academy/`
* If you are interested in a StartUp license visit:`https://wikitude.com/product/sdk-startup/`

## Section 2: Building to Mobiles
### 10. Let's build an iOS App with Unity
* `https://www.udemy.com/course/augmented_reality_with_unity/learn/lecture/11934716#overview`
* While you can create an iOS build ready package with Unity on Windows 
* you won't be able to complete the process without a Mac running XCode.
  1. Create a free Apple Id at  `https://appleid.apple.com/account#!&page=create`
  2. Create a Apple Develop account at `developer.apple.com` using the Apple ID created in Step 1
  3. To develop and build to iOS you will need an Apple Developer Program Membership - around $149
  4. Once enrolled the menu will change in the dev site.
     * Click on Membership and note Team ID.
  5. In the Apple Dev Cneter create a Bundle ID for your app by
     * clicking Certificates, Identifiers & Profiles
     * click on App IDs and + button
     * Register an App Id
       * add in a name for the desc
       * click on Explicit App ID
       * type in Bundle ID
     * This Id will link your app to your dev account, other Apple Services, the App Store and later to Wikitude.
     * NOTE. you can only register ONE Bundle ID with Wikitude license. The same Bundle ID will be used for Android too
     * Below the Bundle ID, can choose extra services
      * we don't need them now
     * Click Next, and Register
     * App ID and Bundle ID are now created
  6. Install the latest ver of XCode. Always the best to check that you have the latest versions of iOS, Unity, and XCode to make sure they are compatible
  7. Create a new Unity Project
  8. `File/Build Settings` - iOS - Switch Platform
  9. The current platform will be shown at the topbar
  10. Close the build settings
  11. Add a sample game object in the scene to see how the app will look on mobile. You can also change the game view resolution to one that is compatible with your device
  12. `Build Settings` - Click on Player Settings - Company Name/Product Name - Build and Run
  13. Choose the folder
  14. Unity now starts building out to XCode - Make sure that a mobile device is plugged into your computer and unlocked
  15. XCode opens and lots of things are executed
  16. App plays on an iOS device!

### 11. Let's build an app to Android

### 12. Building AR Experience to iOS
* Change the build setting via `File>Build Setting`
* Make sure the correct scene is checked : ex. Granny, dragged and dropped from `Projects`
* Player Settings
  * company name, app name, bundle id, etc.
  * Camera Usage Description - a message that will pop up to the user for camera usage
* Camera - Wikitude License key: link to your bundle id so they should all match!
* Add Embedded Libraries - ex. Wikitude SDK - as needed

### 13. Building AR Experience to Android
* `File>Build Settings` - Android - Switch Platform
* Include the scene you want to show in the `Scenes to Build` window
* Build System - Internal unless Gradle is required
* Player Settings  - Inspector - Product Name, Bundle ID, Minimum API Level (default maybe 4.4 KitKat, but can go Higher/lower depending on the device you're building out to)
* Build And Run

### 14. AR Mobile Build Cheat Sheet
* https://www.udemy.com/course/augmented_reality_with_unity/learn/lecture/11935454#overview
1. Wikitude License Key in WikitudeCamera
2. Bundle ID to player setting
3. Correct scenes to the build settings
4. Mobile device is connected & unlocked
5. allow photos

## Section 3: 2D Image Recognition and Tracking
### 15. How it works (Camera Representation, Marker Detection, Post Estimation)