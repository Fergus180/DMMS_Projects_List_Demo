# Project Portfolio Website - User Guide

## Overview
This website allows you to display your project PDFs with filtering by tags like "mechanical", "electrical", "software", etc. Visitors can filter projects by clicking checkboxes and view PDF previews before downloading.

## How to Add New Projects

### Step 1: Prepare Your PDF
1. Make sure your PDF file has a clear, descriptive name
2. Use lowercase letters, numbers, and hyphens only (no spaces)
3. Good example: `robotic-arm-design.pdf`
4. Bad example: `My Project #1 (Final Version).pdf`

### Step 2: Use the Upload Tool
1. Open the upload tool by visiting your website and adding `/upload-tool.html` to the end of the URL
   - For example: `https://yourusername.github.io/project-portfolio/upload-tool.html`
2. Fill in the project title (this is what visitors will see)
3. Select your PDF file using the "Choose File" button
4. Check the boxes for all tags that apply to your project
5. Add any custom tags in the text box (separate with commas)
6. Click "Generate Configuration"

### Step 3: Upload Your PDF to GitHub
1. Go to your GitHub repository (the main page with all your files)
2. Click on the `pdfs` folder
3. Click "Add file" then "Upload files"
4. Drag your PDF file into the upload area
5. Scroll down and click "Commit changes"

### Step 4: Update the Project List
1. Go back to the upload tool page
2. Copy the generated JSON text (click "Copy JSON" button)
3. Go back to your GitHub repository main page
4. Click on the `projects.json` file
5. Click the pencil icon (Edit this file)
6. Delete all the existing text
7. Paste the new JSON text you copied
8. Scroll down and click "Commit changes"

### Step 5: Wait for Update
Your website will automatically update within 5-10 minutes. Refresh your website to see the new project.

## Detailed Instructions with Screenshots

### Finding Your Upload Tool
Your upload tool is located at your website address with `/upload-tool.html` added to the end:
- If your website is: `https://johnsmith.github.io/my-projects`
- Then your upload tool is: `https://johnsmith.github.io/my-projects/upload-tool.html`

### Using the Upload Tool
1. **Project Title**: Enter the name as you want it to appear on your website
2. **PDF File**: Click "Choose File" and select your PDF from your computer
3. **Tags**: Check all boxes that apply to your project
4. **Custom Tags**: Add any additional tags separated by commas
5. **Generate**: Click the blue "Generate Configuration" button

### Uploading to GitHub
1. **Go to your repository**: Visit github.com and click on your repository name
2. **Navigate to pdfs folder**: Click on the folder named `pdfs`
3. **Upload PDF**: Click "Add file" then "Upload files"
4. **Drag and drop**: Drag your PDF file into the upload area
5. **Commit**: Scroll down and click "Commit changes"

### Updating the JSON File
1. **Go to repository main page**: Click your repository name to go back to the main page
2. **Find projects.json**: Click on the file named `projects.json`
3. **Edit the file**: Click the pencil icon that says "Edit this file"
4. **Replace content**: Delete everything and paste your new JSON from the upload tool
5. **Save changes**: Scroll down and click "Commit changes"

## Understanding the File Structure
Your repository contains these important files:
- `index.html` - The main website (do not modify)
- `projects.json` - The list of projects (you will update this)
- `upload-tool.html` - The tool to help you add projects
- `pdfs/` - The folder where all PDF files go

## Common Problems and Solutions

### Problem: My website shows "Preview unavailable"
**Solution**: Make sure your PDF file is properly uploaded to the `pdfs` folder and the filename in `projects.json` matches exactly.

### Problem: My new project doesn't appear
**Solution**: 
1. Check that you uploaded the PDF to the `pdfs` folder
2. Check that you updated `projects.json` with the new configuration
3. Wait 10-15 minutes for GitHub to update your website
4. Refresh your browser page

### Problem: I see an error when updating projects.json
**Solution**: 
1. Make sure you copied the entire JSON text from the upload tool
2. Make sure you deleted all the old content before pasting
3. The JSON must start with `{` and end with `}`

### Problem: My PDF filename has spaces or special characters
**Solution**: Rename your PDF file to use only lowercase letters, numbers, and hyphens before uploading.

## Safety Tips
- Always use the upload tool to generate the JSON - do not try to edit it manually
- Keep a backup of your `projects.json` file in case you make a mistake
- Test your website after each update to make sure everything works
- If you make a mistake, you can restore the previous version using GitHub's history feature

## Getting Help
If you encounter problems:
1. Check that all steps were followed exactly
2. Wait 15 minutes and try refreshing your website
3. Make sure your PDF files are not corrupted
4. Ensure your GitHub repository is public (not private)

## Example Workflow
Here's a complete example of adding a new project:

1. **Prepare**: You have a PDF named `solar-panel-design.pdf`
2. **Upload Tool**: 
   - Title: "Solar Panel Design"
   - Select the PDF file
   - Check: electrical, mechanical
   - Custom tags: renewable-energy, sustainability
   - Click "Generate Configuration"
3. **Upload PDF**: Go to GitHub → pdfs folder → Upload `solar-panel-design.pdf`
4. **Update JSON**: Go to GitHub → projects.json → Edit → Replace content with generated JSON
5. **Wait**: Wait 10 minutes, then refresh your website

Your new project will now appear with electrical and mechanical tags, and visitors can filter to find it.

## Maintenance
- Review your projects periodically to ensure all links work
- Keep PDF filenames consistent and descriptive
- Update project tags if you want to reorganize your portfolio
- Consider grouping related projects with similar tags

Remember: You only need to modify two things - upload PDFs to the `pdfs` folder and update the `projects.json` file. Never modify the `index.html` file unless you know what you're doing.
