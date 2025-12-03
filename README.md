# Java Course — Setup & How to Run Locally

This small repository contains HTML tutorial pages that explain Java concepts and how to set up a Java development environment.

## Chapters
- Chapter 1 — Java Overview (`java-chapter1-overview.html`)
- Chapter 2 — Environment Setup (`java-chapter2-environment.html`)
- Chapter 3 — Basic Syntax (`java-chapter3-basicsyntax.html`)
- Chapter 4 — Arrays (`java-array-chapter.html`)

## Quick Setup (Windows)

1. Install a JDK (e.g., Eclipse Temurin / OpenJDK / Oracle JDK). Download from:
   - https://adoptium.net/
   - https://openjdk.org/
   - https://www.oracle.com/java/technologies/downloads/

2. Set environment variables (PowerShell temporary example):
```powershell
$env:JAVA_HOME = 'C:\Program Files\Eclipse Adoptium\jdk-17.0.7.7-hotspot'
$env:PATH = $env:JAVA_HOME + '\\bin;' + $env:PATH
javac -version
java -version
```

3. Compile & run a sample locally (PowerShell):
   - Copy a sample from the chapter HTML (for example, the Hello World snippet) into a file named <code>HelloWorld.java</code> in a folder.
```powershell
javac HelloWorld.java
java HelloWorld
```

Note: This repository uses inline code samples in the chapter HTML pages. Standalone Java files are not included by default.

Archived examples: For convenience, some example snippets are stored as text files under `archive-samples/` (not `.java` files in the repo). If you want to recreate any example as a `.java` file, copy its contents into a new `.java` file and run it locally.

## Editors and IDEs
- IntelliJ IDEA (Community/Ultimate)
- Eclipse
- Visual Studio Code (Java Extension Pack)
- NetBeans

## Notes
- For large projects, use build tools like Maven or Gradle.
- If you prefer non-Windows OS, use SDKMAN (macOS/Linux) to manage JDKs: https://sdkman.io/
