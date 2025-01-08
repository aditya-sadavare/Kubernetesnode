```E:\wisdom\kuberneet\nodeEx>docker build -t node-app-kub:latest .
[+] Building 2.3s (10/10) FINISHED                                                                 docker:desktop-linux
 => [internal] load build definition from Dockerfile                                                               0.1s
 => => transferring dockerfile: 167B                                                                               0.0s
 => [internal] load metadata for docker.io/library/node:16                                                         0.1s
 => [internal] load .dockerignore                                                                                  0.0s
 => => transferring context: 2B                                                                                    0.0s
 => [1/5] FROM docker.io/library/node:16@sha256:f77a1aef2da8d83e45ec990f45df50f1a286c5fe8bbfb8c6e4246c6389705c0b   0.1s
 => => resolve docker.io/library/node:16@sha256:f77a1aef2da8d83e45ec990f45df50f1a286c5fe8bbfb8c6e4246c6389705c0b   0.1s
 => [internal] load build context                                                                                  0.2s
 => => transferring context: 40.46kB                                                                               0.1s
 => CACHED [2/5] WORKDIR /app                                                                                      0.0s
 => CACHED [3/5] COPY package*.json ./                                                                             0.0s
 => CACHED [4/5] RUN npm install                                                                                   0.0s
 => CACHED [5/5] COPY . .                                                                                          0.0s
 => exporting to image                                                                                             1.2s
 => => exporting layers                                                                                            0.0s
 => => exporting manifest sha256:59aa9ba3134e07ccefa8233daf30193a6da3ba821ba5ff725390676dcc2ab795                  0.0s
 => => exporting config sha256:fc656113826ab80d15f2c15b779ccf91f1acfa12134f1fbb5bd35678b38da6cb                    0.0s
 => => exporting attestation manifest sha256:9a9e4e5dad04fd38fb902a4aa95829b7a93e4bcf806539812d0dd2c152e7ed2e      0.1s
 => => exporting manifest list sha256:ff2640aacd3dadf1aeaaeed408f45e2db5c82e589d76636303371b20c837f15f             0.1s
 => => naming to docker.io/library/node-app-kub:latest                                                             0.0s
 => => unpacking to docker.io/library/node-app-kub:latest                                                          0.7s

View build details: docker-desktop://dashboard/build/desktop-linux/desktop-linux/vg3td1sbhkcg7f7z77ehpb4bb
------------------------------------------------------------------------------------------------------
E:\wisdom\kuberneet\nodeEx>docker run -d -p 4000:3000 node-app-kub:latest
0197c2a15f7284021920b9699215762ff1980c7c27e1b5d73848b4f52944f3cc
------------------------------------------------------------------------------------------------------
E:\wisdom\kuberneet\nodeEx>kubectl apply -f node-app-deployment.yaml
deployment.apps/node-app-deployment created
service/node-app-service configured
------------------------------------------------------------------------------------------------------

E:\wisdom\kuberneet\nodeEx>kubectl get pods
NAME                                  READY   STATUS    RESTARTS   AGE
node-app-deployment-95c6ccbcf-sjlj7   1/1     Running   0          16s
node-app-deployment-95c6ccbcf-zwttt   1/1     Running   0          19s

E:\wisdom\kuberneet\nodeEx>kubectl get svc
NAME               TYPE        CLUSTER-IP     EXTERNAL-IP   PORT(S)          AGE
kubernetes         ClusterIP   10.96.0.1      <none>        443/TCP          19h
node-app-service   NodePort    10.105.31.85   <none>        4000:31666/TCP   18h
-----------------------------------------------------------------------------------------------------

E:\wisdom\kuberneet\nodeEx>for /L %i in (1,1,100) do curl http://localhost:31666

E:\wisdom\kuberneet\nodeEx>curl http://localhost:31666
<h1>Hello, Bro !!!!</h1><p> Node.js app!</p>
E:\wisdom\kuberneet\nodeEx>curl http://localhost:31666
<h1>Hello, Bro !!!!</h1><p> Node.js app!</p>
E:\wisdom\kuberneet\nodeEx>curl http://localhost:31666
<h1>Hello, Bro !!!!</h1><p> Node.js app!</p>
E:\wisdom\kuberneet\nodeEx>curl http://localhost:31666
<h1>Hello, Bro !!!!</h1><p> Node.js app!</p>
E:\wisdom\kuberneet\nodeEx>curl http://localhost:31666
<h1>Hello, Bro !!!!</h1><p> Node.js app!</p>
E:\wisdom\kuberneet\nodeEx>curl http://localhost:31666
<h1>Hello, Bro !!!!</h1><p> Node.js app!</p>
E:\wisdom\kuberneet\nodeEx>curl http://localhost:31666
<h1>Hello, Bro !!!!</h1><p> Node.js app!</p>
E:\wisdom\kuberneet\nodeEx>curl http://localhost:31666
<h1>Hello, Bro !!!!</h1><p> Node.js app!</p>
E:\wisdom\kuberneet\nodeEx>curl http://localhost:31666
<h1>Hello, Bro !!!!</h1><p> Node.js app!</p>
E:\wisdom\kuberneet\nodeEx>curl http://localhost:31666
<h1>Hello, Bro !!!!</h1><p> Node.js app!</p>
E:\wisdom\kuberneet\nodeEx>curl http://localhost:31666
<h1>Hello, Bro !!!!</h1><p> Node.js app!</p>
E:\wisdom\kuberneet\nodeEx>curl http://localhost:31666
<h1>Hello, Bro !!!!</h1><p> Node.js app!</p>
E:\wisdom\kuberneet\nodeEx>curl http://localhost:31666
<h1>Hello, Bro !!!!</h1><p> Node.js app!</p>
E:\wisdom\kuberneet\nodeEx>curl http://localhost:31666
<h1>Hello, Bro !!!!</h1><p> Node.js app!</p>
E:\wisdom\kuberneet\nodeEx>curl http://localhost:31666
<h1>Hello, Bro !!!!</h1><p> Node.js app!</p>
------------------------------------------------------------------------------------------------------
E:\wisdom\kuberneet\nodeEx>docker build -t node-app-kub:v2 .
[+] Building 5.3s (11/11) FINISHED                                                                                         docker:desktop-linux
 => [internal] load build definition from Dockerfile                                                                                       0.1s
 => => transferring dockerfile: 167B                                                                                                       0.0s
 => [internal] load metadata for docker.io/library/node:16                                                                                 0.1s
 => [internal] load .dockerignore                                                                                                          0.0s
 => => transferring context: 2B                                                                                                            0.0s
 => [1/5] FROM docker.io/library/node:16@sha256:f77a1aef2da8d83e45ec990f45df50f1a286c5fe8bbfb8c6e4246c6389705c0b                           2.2s
 => => resolve docker.io/library/node:16@sha256:f77a1aef2da8d83e45ec990f45df50f1a286c5fe8bbfb8c6e4246c6389705c0b                           2.1s
 => [internal] load build context                                                                                                          0.2s
 => => transferring context: 41.11kB                                                                                                       0.2s
 => [auth] library/node:pull token for registry-1.docker.io                                                                                0.0s
 => CACHED [2/5] WORKDIR /app                                                                                                              0.0s
 => CACHED [3/5] COPY package*.json ./                                                                                                     0.0s
 => CACHED [4/5] RUN npm install                                                                                                           0.0s
 => [5/5] COPY . .                                                                                                                         1.0s
 => exporting to image                                                                                                                     1.2s
 => => exporting layers                                                                                                                    0.5s
 => => exporting manifest sha256:de64f8c5af5ffc36fcebbec2fcf0dbef1607d21574c5d8dd989e141533356549                                          0.0s
 => => exporting config sha256:cdcfbcc7cc7b4db655094e95741e5eb73c39614e65010015a3ef5dedcfeeaa34                                            0.0s
 => => exporting attestation manifest sha256:4299f04fbf10d737dc3fd61e052dabb34b8f6015ae6dcfafb58dc70f0319266a                              0.1s
 => => exporting manifest list sha256:7b8fb5d388bd8645f9264eda142a58eed0fdfec9890cccc2c090aa1e1a70edb6                                     0.0s
 => => naming to docker.io/library/node-app-kub:v2                                                                                         0.0s
 => => unpacking to docker.io/library/node-app-kub:v2                                                                                      0.4s

View build details: docker-desktop://dashboard/build/desktop-linux/desktop-linux/z6oj0otzbfr43x6mubgwvrltq

E:\wisdom\kuberneet\nodeEx>kubectl apply -f node-app-deployment.yaml
deployment.apps/node-app-deployment configured
service/node-app-service unchanged
------------------------------------------------------------------------------------------------------
E:\wisdom\kuberneet\nodeEx>kubectl get pods
NAME                                   READY   STATUS        RESTARTS   AGE
node-app-deployment-585d58f6cd-559nx   1/1     Running       0          18s
node-app-deployment-585d58f6cd-zlbtr   1/1     Running       0          18s
node-app-deployment-95c6ccbcf-sjlj7    1/1     Terminating   0          16m
node-app-deployment-95c6ccbcf-zwttt    1/1     Terminating   0          17m

E:\wisdom\kuberneet\nodeEx>kubectl get pods
NAME                                   READY   STATUS    RESTARTS   AGE
node-app-deployment-585d58f6cd-559nx   1/1     Running   0          68s
node-app-deployment-585d58f6cd-zlbtr   1/1     Running   0          68s

E:\wisdom\kuberneet\nodeEx>kubectl describe pod node-app-deployment-585d58f6cd-559nx
Name:             node-app-deployment-585d58f6cd-559nx
Namespace:        default
Priority:         0
Service Account:  default
Node:             docker-desktop/192.168.65.3
Start Time:       Wed, 08 Jan 2025 17:04:18 +0530
Labels:           app=node-app
                  pod-template-hash=585d58f6cd
Annotations:      <none>
Status:           Running
IP:               10.1.0.61
IPs:
  IP:           10.1.0.61
Controlled By:  ReplicaSet/node-app-deployment-585d58f6cd
Containers:
  node-app:
    Container ID:   docker://b813893ff4ac9877e71a1a5bf9beec29cbc0e8d25469379190e2736c74122553
    Image:          node-app-kub:v2
    Image ID:       docker-pullable://node-app-kub@sha256:7b8fb5d388bd8645f9264eda142a58eed0fdfec9890cccc2c090aa1e1a70edb6
    Port:           3000/TCP
    Host Port:      0/TCP
    State:          Running
      Started:      Wed, 08 Jan 2025 17:04:21 +0530
    Ready:          True
    Restart Count:  0
    Environment:    <none>
    Mounts:
      /var/run/secrets/kubernetes.io/serviceaccount from kube-api-access-472qz (ro)
Conditions:
  Type                        Status
  PodReadyToStartContainers   True
  Initialized                 True
  Ready                       True
  ContainersReady             True
  PodScheduled                True
Volumes:
  kube-api-access-472qz:
    Type:                    Projected (a volume that contains injected data from multiple sources)
    TokenExpirationSeconds:  3607
    ConfigMapName:           kube-root-ca.crt
    ConfigMapOptional:       <nil>
    DownwardAPI:             true
QoS Class:                   BestEffort
Node-Selectors:              <none>
Tolerations:                 node.kubernetes.io/not-ready:NoExecute op=Exists for 300s
                             node.kubernetes.io/unreachable:NoExecute op=Exists for 300s
Events:
  Type    Reason     Age   From               Message
  ----    ------     ----  ----               -------
  Normal  Scheduled  99s   default-scheduler  Successfully assigned default/node-app-deployment-585d58f6cd-559nx to docker-desktop
  Normal  Pulled     96s   kubelet            Container image "node-app-kub:v2" already present on machine
  Normal  Created    96s   kubelet            Created container node-app
  Normal  Started    96s   kubelet            Started container node-app
------------------------------------------------------------------------------------------------------
