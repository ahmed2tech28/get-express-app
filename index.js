#!/usr/bin/env node

const { program } = require("commander");
const fs = require("fs-extra");
const path = require("path");
const { execSync } = require("child_process");

program
  .version("1.0.0")
  .description("CLI tool to generate Express.js apps")
  .arguments("<project-name>") // Accepts project name as the first argument
  .option("--api", "Create an Express API app")
  .option("--ejs", "Create an Express app with EJS views")
  .action((projectName, options) => {
    let template = "api";
    if (options.api) template = "api";
    if (options.ejs) template = "ejs";

    const projectPath = path.join(process.cwd(), projectName);
    const templatesDir = path.join(__dirname, "templates");

    console.log(
      `🚀 Creating an Express app: "${projectName}" using the "${template}" template...`
    );
    fs.copySync(path.join(templatesDir, template), projectPath);

    console.log("📦 Installing latest dependencies...");
    const dependencies = ["express", "dotenv", "cors"];
    const viewDependencies = template === "ejs" ? ["ejs"] : [];

    execSync(`cd ${projectName} && npm init -y`, { stdio: "inherit" });
    execSync(
      `cd ${projectName} && npm install ${dependencies
        .concat(viewDependencies)
        .map((pkg) => `${pkg}@latest`)
        .join(" ")}`,
      { stdio: "inherit" }
    );

    console.log("🧹 Removing all .gitkeep files...");
    removeGitkeepFiles(projectPath);

    console.log("✅ Setup complete! Run the following to start your app:");
    console.log(`\n    cd ${projectName} && npm start\n`);
  });

function removeGitkeepFiles(dir) {
  fs.readdirSync(dir).forEach((file) => {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      removeGitkeepFiles(fullPath);
    } else if (file === ".gitkeep") {
      fs.unlinkSync(fullPath);
    }
  });
}

program.parse(process.argv);
