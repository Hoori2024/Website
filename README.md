# Website

## Docker
### Frontend
In frontend folder for build :
```
docker build -f Dockerfile -t client .
```
for run :
```
docker run -it -p 4001:4001 client
```
### Backend
In backend folder for build :
```
docker build -f Dockerfile -t back .
```
for run :
```
docker run -it -p 3000:3000 back
```