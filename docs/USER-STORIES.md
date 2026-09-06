Absolutely. For the **client-side MVP**, I’d organize the user stories around the core workflow:

# PDF Merger User Stories
## MVP User Stories

### 1. Add PDF files

**As a user,** I want to drag and drop PDF files into the app, **so that** I can choose the documents I want to merge.

**Acceptance criteria:**

* User can drag and drop one or more PDF files.
* User can also select files using a file picker.
* Non-PDF files are rejected or ignored.
* Selected files appear in a visible list.

---

### 2. View selected files

**As a user,** I want to see the PDFs I have added, **so that** I can confirm I selected the right documents.

**Acceptance criteria:**

* Each file shows its filename.
* Each file shows its page count if available.
* User can remove a file before merging.
* User can add more files after the first upload.

---

### 3. Reorder PDF files

**As a user,** I want to change the order of the uploaded PDF files, **so that** the merged document is assembled in the order I want.

**Acceptance criteria:**

* User can move a file up or down in the list.
* The merge uses the current visible order.
* The order remains stable after adding or removing files.

---

### 4. View pages before merging

**As a user,** I want to see the pages from the selected PDFs, **so that** I can understand what will be included in the final merged document.

**Acceptance criteria:**

* App displays pages grouped by source PDF, or as one combined page list.
* Each page has a visible page number.
* Each page is associated with its original file.
* MVP can use simple page labels before adding true thumbnails.

---

### 5. Reorder pages

**As a user,** I want to reorder individual pages before merging, **so that** I can customize the final document.

**Acceptance criteria:**

* User can move individual pages up or down.
* Final PDF uses the edited page order.
* Reordered pages can come from different source PDFs.
* Page order is clearly visible before merge.

---

### 6. Remove pages

**As a user,** I want to remove unwanted pages before merging, **so that** the final PDF only includes the pages I need.

**Acceptance criteria:**

* User can remove individual pages.
* Removed pages are excluded from the merged PDF.
* App prevents merging if no pages remain.

---

### 7. Merge PDFs

**As a user,** I want to merge the selected/reordered pages into one PDF, **so that** I can create a single combined document.

**Acceptance criteria:**

* User can click a “Merge PDF” button.
* Button is disabled until at least one valid PDF/page exists.
* App creates a merged PDF using the current page order.
* User sees a loading/progress state while merging.

---

### 8. Download merged PDF

**As a user,** I want to download the merged PDF, **so that** I can save it locally.

**Acceptance criteria:**

* User can download the result as a `.pdf`.
* Default filename is something like `merged.pdf`.
* The downloaded file opens as a valid PDF.

---

## Possible Future User Stories

* True visual page thumbnails
* Drag-and-drop page reordering
* Rotate pages
* Rename output file
* Save previous merge sessions
* Password-protected PDFs
* Compression
* Split/extract pages

