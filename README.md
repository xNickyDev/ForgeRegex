<div align="center">

<img height="150" width="150" src="https://github.com/xNickyDev/ForgeRegex/blob/dev/assets/RegExp.png?raw=true" alt="ForgeRegex">

# ForgeRegex
A ForgeScript extension that provides support for advanced regex functions.

<a href="https://github.com/xNickyDev/ForgeRegex/"><img src="https://img.shields.io/github/package-json/v/xNickyDev/ForgeRegex/main?label=forge.regex&color=5c16d4" alt="forge.regex"></a>
<a href="https://github.com/tryforge/ForgeScript/"><img src="https://img.shields.io/github/package-json/v/tryforge/ForgeScript/main?label=@tryforge/forgescript&color=5c16d4" alt="@tryforge/forgescript"></a>
<a href="https://discord.gg/hcJgjzPvqb"><img src="https://img.shields.io/discord/997899472610795580?logo=discord" alt="Discord"></a>

</div>

---

## Contents

1. [Why ForgeRegex?](#why-forgeregex)
2. [Installation](#installation)
3. [Documentation](https://docs.botforge.org/p/ForgeRegex/)

<h3 align="center">Why ForgeRegex?</h3><hr>
<p align="center">ForgeRegex adds advanced regex tools to ForgeScript for efficient pattern matching, text validation, and data extraction. It integrates smoothly, offering flexible string manipulation without extra libraries.</p>
<br>

<h3 align="center">Installation</h3><hr>

1. Run the following command to install the required `npm` package:
   ```bash
   npm i https://github.com/xNickyDev/ForgeRegex.git
   ```

2. Next, add this import at the top of your client initialization file:
   ```js
   const { ForgeRegex } = require("forge.regex")
   ```

3. Here’s an example of how your main file should look:
   ```js
   const { ForgeClient } = require("@tryforge/forgescript")
   const { ForgeRegex } = require("forge.regex")

   const client = new ForgeClient({
       ...options, // Your current configuration options   
       extensions: [
           new ForgeRegex()
       ]
   })
   ```
