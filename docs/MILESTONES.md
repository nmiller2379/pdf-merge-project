# Milestones

## Project Goal

Build a client-side PDF merge application that allows users to:

- Upload PDF files
- Reorder files and pages
- Remove unwanted pages
- Merge PDFs into a single document
- Download the merged PDF locally

The application will initially be fully client-side using React and browser-based PDF processing libraries.

---

# Milestone 1 — Project Foundation

## Goal

Create the initial project structure and development environment.

## Success Criteria

- React application initialized and running locally
- Git repository configured
- Basic folder structure established
- Core dependencies installed
- Initial README and project documentation created

## Suggested Areas of Work

- React/Vite setup
- Dependency installation
- Basic component structure
- Global styling setup
- Initial GitHub repository setup

---

# Milestone 2 — Basic UI & Layout

## Goal

Create the foundational user interface for the application.

## Success Criteria

- Main application layout exists
- Upload area visible
- File list area visible
- Page preview/editing area scaffolded
- Merge/download controls visible

## Suggested Areas of Work

- App layout components
- Navigation/header
- Upload section
- File list section
- Page management section
- Button styling and layout
- Bootstrap integration
- React Bootstrap integration

---

# Milestone 3 — File Intake

## Goal

Allow users to upload and manage PDF files locally in the browser.

## Success Criteria

- Users can drag and drop PDF files
- Users can upload PDFs using a file picker
- Non-PDF files are rejected
- Uploaded files appear in the UI
- Users can remove uploaded files

## Suggested Areas of Work

- React Dropzone integration
- File validation
- File state management
- Upload error handling
- File list rendering

---

# Milestone 4 — PDF Parsing & Internal Data Model

## Goal

Parse uploaded PDFs and create an internal representation of documents and pages.

## Success Criteria

- PDFs can be loaded into memory
- Page counts can be extracted
- Internal page/file data structures exist
- Pages can be rendered in the UI as list items or placeholders

## Suggested Areas of Work

- pdf-lib integration
- File parsing utilities
- Page metadata extraction
- Internal state/data modeling
- Page rendering logic

---

# Milestone 5 — Ordering & Editing

## Goal

Allow users to manipulate document and page order before merging.

## Success Criteria

- Files can be reordered
- Individual pages can be reordered
- Pages can be removed
- The UI accurately reflects current merge order

## Suggested Areas of Work

- File reordering logic
- Page reordering logic
- Remove page functionality
- State synchronization
- UI controls for editing actions

---

# Milestone 6 — Merge & Export

## Goal

Generate and download the final merged PDF.

## Success Criteria

- PDFs merge successfully
- Merge respects current page order
- Removed pages are excluded
- User can download the merged file
- Generated file opens correctly

## Suggested Areas of Work

- Merge utilities
- Blob creation
- Download handling
- Merge progress/loading states
- Export validation

---

# Milestone 7 — Polish & UX Improvements

## Goal

Improve usability, reliability, and overall user experience.

## Success Criteria

- Clear loading and error states exist
- Empty states are handled cleanly
- Buttons disable appropriately
- Layout is visually polished
- Application feels stable and intuitive

## Suggested Areas of Work

- Error messaging
- Loading indicators
- Accessibility improvements
- Responsive layout improvements
- General UI polish
- Refactoring and cleanup

---

# Post-MVP Ideas

Potential future enhancements:

- Page thumbnails
- Drag-and-drop page reordering
- Rotate pages
- Rename output files
- Password-protected PDF support
- OCR support
- Compression tools
- Saved merge sessions
- User accounts and cloud storage
- Server-side processing for large files
