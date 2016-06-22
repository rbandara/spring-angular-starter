
To build the docker image

`gradle build buildDocker`


To run the docker image

`docker run -p 8080:8080 -t mygroup/foo-bar`


Running your own registry

`docker pull registry`
`docker run -d -p 5000:5000 --restart=always --name registry registry:2`

* make sure registry is up
    `docker ps`
* tag the docker image
    `docker tag mygroup/foo-bar localhost:5000/foo-bar`
* push to the local docker registry
    `docker push localhost:5000/foo-bar`


Install local jenkins server

`docker pull jenkins`
`docker run -d -p 49001:8080 -v $PWD/jenkins:/var/jenkins_home -t jenkins`

* Jenkins will be up and running on `http://192.168.99.100:49001/`

* Configure Jenkins Plugins
    - add docker, gradle plugins



Additionally Setup nginx as reverse proxy to the jenkins server
`docker pull nginx`
`docker run --name nginx-container -P -d nginx`
* nginx will be up on `http://192.168.99.100:32769/`




