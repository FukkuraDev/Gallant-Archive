const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");

const getAll = (dir) => {
    // Read files at _posts/{directory}
  const directory = path.join(process.cwd(), `src/content/${dir}`);
  const fileNames = fs.readdirSync(directory);
  // Get the content of the files as JSON
  const content = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, "");
    const fullPath = path.join(directory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const matterResult = matter(fileContents);
    return {
      slug,
      ...matterResult
    };
  });
  // Return a big array of JSON
  return JSON.stringify(content);
}

const projects = getAll('projects');
const posts = getAll('posts');

const projectFileContent = `${projects}`;
const postFileContents = `${posts}`;

// Create the cache folder if it doesn't exist
try {
  fs.readdirSync("public/cache");
} catch (e) {
  fs.mkdirSync("public/cache");
}

// Create our cached posts JSON
fs.writeFile("public/cache/projects.json", projectFileContent, (err) => {
  if (err) return console.log(err);
  console.log("Projects cached.");
});

// Create our cached posts JSON
fs.writeFile("public/cache/posts.json", postFileContents, (err) => {
  if (err) return console.log(err);
  console.log("Posts cached.");
});