## For stage setting
### Step 1. Deploy deployment
- check web-frontend-deployment.yaml

### Step 2. Deploy service
- check web-frontend-service.yaml

### Step 3. Restrict who can access on cloudlare firewall
- Security > firewall 
- (http.host eq "xxx.hopin.website" and ip.src ne xx.xx.xx.xx) -> block