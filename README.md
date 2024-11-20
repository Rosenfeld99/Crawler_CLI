# Web Crawler CLI

A simple web crawler CLI built with Node.js that scans web pages for images and links, saving the results in a structured JSON file.

## Features

- Recursively crawls web pages starting from a given URL.
- Collects all images found on each page.
- Follows links up to a specified depth.
- Saves the results in `results.json` with:
  - `imageUrl`: The URL of the image.
  - `sourceUrl`: The URL of the page where the image was found.
  - `depth`: The depth level of the page in the crawl.

## Installation & Usage

1. Clone this repository:
   ```bash
   git clone https://github.com/Rosenfeld99/Crawler_CLI
   ```
   
2. Install the dependencies:
   ```bash
   npm i
   ```
   
3. Usage:
   ```bash
   node crawler.js https://github.com/Rosenfeld99 1
   ```


## Output

The results are saved in results.json in the following format:
Usage:
   ```bash
   {
    "results": [
     {
        "imageUrl": "https://avatars.githubusercontent.com/u/124917070?v=4",
        "sourceUrl": "https://github.com/Rosenfeld99/",
        "depth": 0
      },
    ]
}

   ```

Happy crawling! 🕷️
