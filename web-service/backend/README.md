## Step 1. Create a private cluster

## Step 2. Build a backend nodejs service 
- create a web application (app.js)

## Step 3. Build a docker image
- docker build -t web-backend .

## Step 4. Upload to gcr
- docker tag web-backend gcr.io/infra-deploy-394001/web-backend:latest
- docker push gcr.io/infra-deploy-394001/web-backend:latest

## Step 5. Add / change your cluster
- gcloud container clusters get-credentials my-gke-cluster --region <region> --project <project-id>
- kubectl config get-contexts
- kubectl config use-context <context-name>

## Step 6. Deploy deployment
- check web-backend-deployment.yaml
- kubectl apply -f web-backend-deployment.yaml

## Step 7. Deploy service
- check web-backend-service.yaml
- kubectl apply -f web-backend-service.yaml

