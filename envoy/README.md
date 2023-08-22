## Setup prod environment
### Step 1. Create a public cluster for envoy

### Step 2. Create envoy image
- check Dockerfile
- docker build -t envoy .

### Step 3. push to gcr
- docker tag envoy gcr.io/<projectid>/envoy:latest
- docker push gcr.io/<projectid>/envoy:latest

### Step 4. deploy envoy on k8s
- check envoy-deployment.yaml
- kubectl apply -f envoy-deployment.yaml

### Step 5. deploy service.yaml
- check envoy-service.yaml
- kubectl apply -f envoy-service.yaml


### Step 6. create a ssl certificate from cloudflare
- buying a domain whaterver you want
- setting your domain on cloudflare
- create a ssl ca
    - side bar > SSL / TLS > Origin Server > create a certificate and private key
- change dockerfile and envoy.yaml to fit ssl settiing


## Setup stage prod
### Step 7. Setup another CNAME to your DNS
- Check your DNS Server


## Create firewall to limit only cloudflare can access
### GCP -> firewall -> only allow cloudflare ip
