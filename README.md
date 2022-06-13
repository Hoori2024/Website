# Website

# [Website url](http://www.hoori.eu.s3-website.eu-west-3.amazonaws.com/)
http://www.hoori.eu.s3-website.eu-west-3.amazonaws.com/

### Attention the front is on port 4001 and the back on port 3000
## Run locally
In the frontend and backend folders, for initialization :
```
npm i
```
for run :
```
npm start
```
## Docker
### Frontend
In frontend folder for build :
```
docker build -f Dockerfile -t deyssautierloic/hoori-front .
```
for run :
```
docker run -it -p 4001:4001 deyssautierloic/hoori-front
```
### Backend
In backend folder for build :
```
docker build -f Dockerfile -t deyssautierloic/hoori-back .
```
for run :
```
docker run -it -p 3000:3000 deyssautierloic/hoori-back
```

## kubernetes
### Frontend :
In frontend folder for build :
```
docker build -f Dockerfile -t deyssautierloic/hoori-front .
```
for push :
```
docker push deyssautierloic/hoori-front
```
### Backend :
In backend folder for build :
```
docker build -f Dockerfile -t deyssautierloic/hoori-back .
```
for push :
```
docker push deyssautierloic/hoori-back
```
### deploy :
### Frontend :
In infra/front folder for deploy :
```
kubectl apply -f deployement.yml
```
### Backend :
In infra/back folder for deploy :
```
kubectl apply -f deployement.yml
```
### Useful kubernetes command :
To see the pods :
```
kubectl get pods
```
To see the services
```
kubectl get services
```