## Step 1. Create a public cluster for envoy

## Step 2. Create envoy image
- check Dockerfile
- docker build -t envoy .

## Step 3. push to gcr
- docker tag envoy gcr.io/<projectid>/envoy:latest
- docker push gcr.io/<projectid>/envoy:latest

## Step 4. deploy envoy on k8s
- check envoy-deployment.yaml
- kubectl apply -t envoy-deployment.yaml