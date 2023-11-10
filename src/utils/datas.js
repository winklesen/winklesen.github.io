// Stack Icons
import androidIcon from "@icons/android.svg";
import androidStudioIcon from "@icons/android_studio.svg";
import javaIcon from "@icons/java.svg";
import postmanIcon from "@icons/postman.svg";
import gradleIcon from "@icons/gradle2.svg";
import dartIcon from "@icons/dart.svg";
import firebaseIcon from "@icons/firebase.svg";
import flutterIcon from "@icons/flutter.svg";
import googleCloudIcon from "@icons/google_cloud.svg";
import kotlinIcon from "@icons/kotlin.svg";

import htmlIcon from "@icons/html.svg";
import cssIcon from "@icons/css.svg";
import jsIcon from "@icons/js.svg";
import phpIcon from "@icons/php.svg";
import sassIcon from "@icons/sass.svg";
import bootstrapIcon from "@icons/bootstrap.svg";
import tailwindIcon from "@icons/tailwind.svg";
import reactIcon from "@icons/react.svg";
import nextjsIcon from "@icons/nextjs.svg";
import threejsIcon from "@icons/threejs.svg";
import laravelIcon from "@icons/laravel.svg";
import nodejsIcon from "@icons/nodejs.svg";
import npmIcon from "@icons/npm.svg";
import yarnIcon from "@icons/yarn.svg";
import blenderIcon from "@icons/blender.svg";
import figmaIcon from "@icons/figma.svg";
import gitIcon from "@icons/git.svg";
import githubIcon from "@icons/github.svg";
import mysqlIcon from "@icons/mysql.svg";
import splineIcon from "@icons/spline.svg";
import vscodeIcon from "@icons/vscode.svg";
import vite from "@icons/vite.svg";
import webpackIcon from "@icons/webpack.svg";
import expressIcon from "@icons/express.svg";
import mongodbIcon from "@icons/mongodb.svg";
import typescriptIcon from "@icons/typescript.svg";
import reactQueryIcon from "@icons/react-query.svg";
import formikIcon from "@icons/formik.png";

// Project Images
import sampleImage from "@images/sample_project.png"


// Gif Images
// import testGif from "@gif/test.gif";


const tools = {
  Git: { name: "Git", src: gitIcon, level: "Version control" },
  Github: { name: "Github", src: githubIcon, level: "Git hosting" },
  // NPM: { name: "NPM", src: npmIcon, level: "Package manager" },
  // Yarn: { name: "Yarn", src: yarnIcon, level: "Package manager" },
  // Vite: { name: "Vite", src: vite, level: "Build tool" },
  VSCode: { name: "VSCode", src: vscodeIcon, level: "Code editor" },
  AndroidStudio: { name: "Android Studio", src: androidStudioIcon, level: "IDE" },
  Postman: { name: "Postman", src: postmanIcon, level: "API tool" },
  Firebase: { name: "Firebase", src: firebaseIcon, level: "Google Service" },
  MLKit: { name: "ML Kit", src: googleCloudIcon, level: "Machnine Learning" },
  Figma: { name: "Figma", src: figmaIcon, level: "UIUX Design tool" },
  // Blender: { name: "Blender", src: blenderIcon, level: "3D software" },
  // Spline: { name: "Spline", src: splineIcon, level: "Web 3D design" },
};

const stacks = {
  // HTML: { name: "HTML", src: htmlIcon, level: "Advanced" },
  // CSS: { name: "CSS", src: cssIcon, level: "Intermediate" },
  // SASS: { name: "SASS", src: sassIcon, level: "Advanced" },
  
  // JS: { name: "Javascript", src: jsIcon, level: "Intermediate" },
  // Typescript: { name: "Typescript", src: typescriptIcon, level: "Beginer" },
  // Webpack: { name: "Webpack", src: webpackIcon, level: "Advanced" },
  // React: { name: "ReactJS", src: reactIcon, level: "Advanced" },
  
  // ReactQuery: {
  //   name: "React Query",
  //   src: reactQueryIcon,
  //   level: "Intermediate",
  // },
  // Formik: { name: "Formik", src: formikIcon, level: "Intermediate" },
  // ThreeJS: {
  //   name: "ThreeJS",
  //   src: threejsIcon,
  //   level: "Use Spline Tools",
  // },
  Java: { name: "Java", src: javaIcon, level: "Advanced" },
  Kotlin: { name: "Kotlin", src: kotlinIcon, level: "Advanced" },
  Flutter: { name: "Flutter", src: flutterIcon, level: "Advanced" },
  Dart: { name: "Dart", src: dartIcon, level: "Advanced" },
  Gradle: { name: "Gradle", src: gradleIcon, level: "Intermediate" },
  PHP: { name: "PHP", src: phpIcon, level: "Intermediate" },
  NextJS: { name: "NextJS", src: nextjsIcon, level: "Beginner" },
  Laravel: { name: "Laravel", src: laravelIcon, level: "Intermediate" },
  Bootstrap: { name: "Bootstrap", src: bootstrapIcon, level: "Intermediate" },
  // Express: { name: "ExpressJS", src: expressIcon, level: "Beginner" },

  Tailwind: { name: "TailwindCSS", src: tailwindIcon, level: "Intermediate" },
  
  MySQL: { name: "MySQL", src: mysqlIcon, level: "Advanced" },  
  MongoDB: { name: "MongoDB", src: mongodbIcon, level: "Beginner" },
};

const projects = [
  {
    id: 1,
    name: "Movie Catalogue",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ac congue massa.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ac congue massa.",
    image: sampleImage,
    web: "",
    repo: "https://github.com/winklesen",
    stack: "Android, Java, Retrofit, SQLite",
    gif: "",
  },
  {
    id: 2,
    name: "AbsenBoss",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ac congue massa.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ac congue massa.",
    image: sampleImage,
    web: "",
    repo: "https://github.com/winklesen",
    stack: "Flutter, Dart, Bloc, Retrofit, Hive",
    gif: "",
  },  
  {
    id: 3,
    name: "Chesster",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ac congue massa.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ac congue massa.",
    image: sampleImage,
    web: "",
    repo: "https://github.com/winklesen",
    stack: "Flutter, Dart, Bloc, Retrofit, Hive",
    gif: "",
  },
  {
    id: 4,
    name: "Persona",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ac congue massa.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ac congue massa.",
    image: sampleImage,
    web: "",
    repo: "https://github.com/winklesen",
    stack: "Flutter, Dart, Bloc, Retrofit, Hive",
    gif: "",
  },
  {
    id: 5,
    name: "iDroid",
    desc: "Coming Soon",
    image: sampleImage,
    web: "",
    repo: "https://github.com/winklesen",
    stack: "Python, Emmebed System",
    gif: "",
  },

];

export { tools, stacks, projects };
