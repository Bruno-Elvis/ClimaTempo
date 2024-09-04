[<img src="LLM" align="right" width="25%" padding-right="350">]()

# `CLIMATEMPO`

#### <code>❯ REPLACE-ME</code>

<p align="left">
	<img src="https://img.shields.io/github/license/bruno-elvis/ClimaTempo?style=flat-square&logo=opensourceinitiative&logoColor=white&color=ffffff" alt="license">
	<img src="https://img.shields.io/github/last-commit/bruno-elvis/ClimaTempo?style=flat-square&logo=git&logoColor=white&color=ffffff" alt="last-commit">
	<img src="https://img.shields.io/github/languages/top/bruno-elvis/ClimaTempo?style=flat-square&color=ffffff" alt="repo-top-language">
	<img src="https://img.shields.io/github/languages/count/bruno-elvis/ClimaTempo?style=flat-square&color=ffffff" alt="repo-language-count">
</p>
<p align="left">
		<em>Built with the tools and technologies:</em>
</p>
<p align="center">
	<img src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=flat-square&logo=JavaScript&logoColor=black" alt="JavaScript">
	<img src="https://img.shields.io/badge/Metro-EF4242.svg?style=flat-square&logo=Metro&logoColor=white" alt="Metro">
	<img src="https://img.shields.io/badge/C-A8B9CC.svg?style=flat-square&logo=C&logoColor=black" alt="C">
	<img src="https://img.shields.io/badge/Kotlin-7F52FF.svg?style=flat-square&logo=Kotlin&logoColor=white" alt="Kotlin">
	<img src="https://img.shields.io/badge/React-61DAFB.svg?style=flat-square&logo=React&logoColor=black" alt="React">
	<br>
	<img src="https://img.shields.io/badge/ESLint-4B32C3.svg?style=flat-square&logo=ESLint&logoColor=white" alt="ESLint">
	<img src="https://img.shields.io/badge/SemVer-3F4551.svg?style=flat-square&logo=SemVer&logoColor=white" alt="SemVer">
	<img src="https://img.shields.io/badge/Gradle-02303A.svg?style=flat-square&logo=Gradle&logoColor=white" alt="Gradle">
	<img src="https://img.shields.io/badge/JSON-000000.svg?style=flat-square&logo=JSON&logoColor=white" alt="JSON">
</p>

<br>

<details><summary>Table of Contents</summary>

- [📍 Layout](#-layout)
- [👾 Features](#-features)
- [📂 Repository Structure](#-repository-structure)
- [🚀 Getting Started](#-getting-started)
    - [📦 Installation](#-installation)
    - [🤖 Usage](#-usage)
- [📌 Project Roadmap](#-project-roadmap)
- [🤝 Contributing](#-contributing)

</details>
<hr>

## 📍 Layout

![image](https://github.com/user-attachments/assets/111b7aa8-0feb-4c0f-86e8-0ec70d9a3264)

---

## 👾 Features

* Exibição de dados de clima utilizando api "Advisor" do ClimaTempo (v1 e v2)

---

## 📂 Repository Structure

```sh
└── ClimaTempo/
    ├── Gemfile
    ├── README.md
    ├── android
    │   ├── app
    │   ├── build.gradle
    │   ├── gradle
    │   ├── gradle.properties
    │   ├── gradlew
    │   ├── gradlew.bat
    │   └── settings.gradle
    ├── api.mock_15_days_weather.json
    ├── api.mock_current_weather.json
    ├── app.json
    ├── babel.config.js
    ├── index.js
    ├── ios
    │   ├── .xcode.env
    │   ├── ClimaTempo
    │   ├── ClimaTempo.xcodeproj
    │   ├── ClimaTempoTests
    │   └── Podfile
    ├── metro.config.js
    ├── package.json
    ├── src
    │   ├── App
    │   ├── assets
    │   ├── components
    │   └── token_api.json
    └── yarn.lock
```

---

## 🧩 Modules

<details closed><summary>.</summary>

| File | Summary |
| --- | --- |
| [Gemfile](https://github.com/bruno-elvis/ClimaTempo/blob/main/Gemfile) | 
| [package.json](https://github.com/bruno-elvis/ClimaTempo/blob/main/package.json) | 
| [metro.config.js](https://github.com/bruno-elvis/ClimaTempo/blob/main/metro.config.js) | 
| [index.js](https://github.com/bruno-elvis/ClimaTempo/blob/main/index.js) | 
| [api.mock_15_days_weather.json](https://github.com/bruno-elvis/ClimaTempo/blob/main/api.mock_15_days_weather.json) | 
| [babel.config.js](https://github.com/bruno-elvis/ClimaTempo/blob/main/babel.config.js) | 
| [api.mock_current_weather.json](https://github.com/bruno-elvis/ClimaTempo/blob/main/api.mock_current_weather.json) | 
| [yarn.lock](https://github.com/bruno-elvis/ClimaTempo/blob/main/yarn.lock) | 
| [app.json](https://github.com/bruno-elvis/ClimaTempo/blob/main/app.json) | 

</details>

<details closed><summary>android</summary>

| File | Summary |
| --- | --- |
| [settings.gradle](https://github.com/bruno-elvis/ClimaTempo/blob/main/android/settings.gradle) | 
| [build.gradle](https://github.com/bruno-elvis/ClimaTempo/blob/main/android/build.gradle) | 
| [gradlew.bat](https://github.com/bruno-elvis/ClimaTempo/blob/main/android/gradlew.bat) | 

</details>

<details closed><summary>android.app</summary>

| File | Summary |
| --- | --- |
| [debug.keystore](https://github.com/bruno-elvis/ClimaTempo/blob/main/android/app/debug.keystore) | 
| [proguard-rules.pro](https://github.com/bruno-elvis/ClimaTempo/blob/main/android/app/proguard-rules.pro) | 
| [build.gradle](https://github.com/bruno-elvis/ClimaTempo/blob/main/android/app/build.gradle) | 

</details>

<details closed><summary>android.app.src.main.java.com.climatempo</summary>

| File | Summary |
| --- | --- |
| [MainActivity.kt](https://github.com/bruno-elvis/ClimaTempo/blob/main/android/app/src/main/java/com/climatempo/MainActivity.kt) | 
| [MainApplication.kt](https://github.com/bruno-elvis/ClimaTempo/blob/main/android/app/src/main/java/com/climatempo/MainApplication.kt) | 

</details>

<details closed><summary>ios</summary>

| File | Summary |
| --- | --- |
| [Podfile](https://github.com/bruno-elvis/ClimaTempo/blob/main/ios/Podfile) | 

</details>

<details closed><summary>ios.ClimaTempo</summary>

| File | Summary |
| --- | --- |
| [Info.plist](https://github.com/bruno-elvis/ClimaTempo/blob/main/ios/ClimaTempo/Info.plist) | 
| [AppDelegate.h](https://github.com/bruno-elvis/ClimaTempo/blob/main/ios/ClimaTempo/AppDelegate.h) | 
| [PrivacyInfo.xcprivacy](https://github.com/bruno-elvis/ClimaTempo/blob/main/ios/ClimaTempo/PrivacyInfo.xcprivacy) | 
| [main.m](https://github.com/bruno-elvis/ClimaTempo/blob/main/ios/ClimaTempo/main.m) | 
| [AppDelegate.mm](https://github.com/bruno-elvis/ClimaTempo/blob/main/ios/ClimaTempo/AppDelegate.mm) | 
| [LaunchScreen.storyboard](https://github.com/bruno-elvis/ClimaTempo/blob/main/ios/ClimaTempo/LaunchScreen.storyboard) | 

</details>

<details closed><summary>ios.ClimaTempo.Images.xcassets</summary>

| File | Summary |
| --- | --- |
| [Contents.json](https://github.com/bruno-elvis/ClimaTempo/blob/main/ios/ClimaTempo/Images.xcassets/Contents.json) | 

</details>

<details closed><summary>ios.ClimaTempo.Images.xcassets.AppIcon.appiconset</summary>

| File | Summary |
| --- | --- |
| [Contents.json](https://github.com/bruno-elvis/ClimaTempo/blob/main/ios/ClimaTempo/Images.xcassets/AppIcon.appiconset/Contents.json) | 

</details>

<details closed><summary>ios.ClimaTempoTests</summary>

| File | Summary |
| --- | --- |
| [Info.plist](https://github.com/bruno-elvis/ClimaTempo/blob/main/ios/ClimaTempoTests/Info.plist) | 
| [ClimaTempoTests.m](https://github.com/bruno-elvis/ClimaTempo/blob/main/ios/ClimaTempoTests/ClimaTempoTests.m) | 

</details>

<details closed><summary>ios.ClimaTempo.xcodeproj</summary>

| File | Summary |
| --- | --- |
| [project.pbxproj](https://github.com/bruno-elvis/ClimaTempo/blob/main/ios/ClimaTempo.xcodeproj/project.pbxproj) | 

</details>

<details closed><summary>ios.ClimaTempo.xcodeproj.xcshareddata.xcschemes</summary>

| File | Summary |
| --- | --- |
| [ClimaTempo.xcscheme](https://github.com/bruno-elvis/ClimaTempo/blob/main/ios/ClimaTempo.xcodeproj/xcshareddata/xcschemes/ClimaTempo.xcscheme) | 

</details>

<details closed><summary>src</summary>

| File | Summary |
| --- | --- |
| [token_api.json](https://github.com/bruno-elvis/ClimaTempo/blob/main/src/token_api.json) | 

</details>

<details closed><summary>src.components.Button</summary>

| File | Summary |
| --- | --- |
| [styles.js](https://github.com/bruno-elvis/ClimaTempo/blob/main/src/components/Button/styles.js) | 
| [index.jsx](https://github.com/bruno-elvis/ClimaTempo/blob/main/src/components/Button/index.jsx) | 

</details>

<details closed><summary>src.components.Input</summary>

| File | Summary |
| --- | --- |
| [styles.js](https://github.com/bruno-elvis/ClimaTempo/blob/main/src/components/Input/styles.js) | 
| [index.jsx](https://github.com/bruno-elvis/ClimaTempo/blob/main/src/components/Input/index.jsx) | 

</details>

<details closed><summary>src.components.Text</summary>

| File | Summary |
| --- | --- |
| [styles.js](https://github.com/bruno-elvis/ClimaTempo/blob/main/src/components/Text/styles.js) | 
| [index.jsx](https://github.com/bruno-elvis/ClimaTempo/blob/main/src/components/Text/index.jsx) | 

</details>

<details closed><summary>src.components.IconWather</summary>

| File | Summary |
| --- | --- |
| [index.jsx](https://github.com/bruno-elvis/ClimaTempo/blob/main/src/components/IconWather/index.jsx) | 

</details>

<details closed><summary>src.App</summary>

| File | Summary |
| --- | --- |
| [styles.js](https://github.com/bruno-elvis/ClimaTempo/blob/main/src/App/styles.js) | 
| [App.jsx](https://github.com/bruno-elvis/ClimaTempo/blob/main/src/App/App.jsx) | 

</details>

---

### 📦 Installation

Build the project from source:

1. Clone the ClimaTempo repository:
```sh
❯ git clone https://github.com/bruno-elvis/ClimaTempo
```

2. Navigate to the project directory:
```sh
❯ cd ClimaTempo
```

3. Install the required dependencies:
```sh
❯ npm install
```

### 🤖 Usage

To run the project, execute the following command:

```sh
❯ node app.js
```

## 📌 Project Roadmap

- [X] **`Task 1`**: <strike>Integration from API Advisor by ClimaTempo</strike>
- [ ] **`Task 2`**: Implements hooks erros.
- [ ] **`Task 3`**: Implements PixelRatio component layout.

---

## 🤝 Contributing

Contributions are welcome! Here are several ways you can contribute:

- **[Report Issues](https://github.com/bruno-elvis/ClimaTempo/issues)**: Submit bugs found or log feature requests for the `ClimaTempo` project.
- **[Submit Pull Requests](https://github.com/bruno-elvis/ClimaTempo/blob/main/CONTRIBUTING.md)**: Review open PRs, and submit your own PRs.
- **[Join the Discussions](https://github.com/bruno-elvis/ClimaTempo/discussions)**: Share your insights, provide feedback, or ask questions.

<details closed>
<summary>Contributing Guidelines</summary>

1. **Fork the Repository**: Start by forking the project repository to your github account.
2. **Clone Locally**: Clone the forked repository to your local machine using a git client.
   ```sh
   git clone https://github.com/bruno-elvis/ClimaTempo
   ```
3. **Create a New Branch**: Always work on a new branch, giving it a descriptive name.
   ```sh
   git checkout -b new-feature-x
   ```
4. **Make Your Changes**: Develop and test your changes locally.
5. **Commit Your Changes**: Commit with a clear message describing your updates.
   ```sh
   git commit -m 'Implemented new feature x.'
   ```
6. **Push to github**: Push the changes to your forked repository.
   ```sh
   git push origin new-feature-x
   ```
7. **Submit a Pull Request**: Create a PR against the original project repository. Clearly describe the changes and their motivations.
8. **Review**: Once your PR is reviewed and approved, it will be merged into the main branch. Congratulations on your contribution!
</details>

<details closed>
<br>
<p align="left">
   <a href="https://github.com{/bruno-elvis/ClimaTempo/}graphs/contributors">
      <img src="https://contrib.rocks/image?repo=bruno-elvis/ClimaTempo">
   </a>
</p>
</details>

---
