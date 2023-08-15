## Step 1. Setup iap for

## Step 2. Setup a role with permission
- compute.instances.get
- compute.projects.get
- compute.instances.setMetadata (should be removed later)

## Step 3. Setup IAM and binding role
- the permission above setup
- service account user


## Step 4. Command to port-forward
- gcloud compute ssh --zone "<zone>" "<instance name>" --project "<project name>" --tunnel-through-iap -- -L 127.0.0.1:3000:127.0.0.1:3000


