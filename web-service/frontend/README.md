## Build a frontend website

### Step 1. Create a example nodejs app in localhost
- npm init -y
- npm install express

### Step 2. Create a app.js to define your website main page
- check app.js

### Step 3. Create a Dockerfile
- check Dockerfile

### Step 4. Create a image
- docker build -t web-frontend .
- docker images  (check if image create)

### Step 5. Run this image on localhost
- docker run -p 3000:3000 web-frontend

### Step 6. Auth to gcp
- gcloud auth login

### Step 7. Configure your docker config
- gcloud auth configure-docker

### Step 8. Tag image to gcr
- docker tag web-frontend gcr.io/project-id/web-frontend:latest

### Step 9. push image to gcr
- docker push gcr.io/project-id/web-frontend:latest

### Step 10. create a private cluster on gcp
