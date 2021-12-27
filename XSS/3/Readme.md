# How to
1. docker build -t sample-site .
2. docker run -it -d -p 80:80 sample-site
3. To look inside the site:
   - docker exec -it $container_name bash 
   - verify the index.html if it was copied onto the container
3. localhost:80

### Reference:
Deploy a Static Wesbite with Docker
https://tecadmin.net/tutorial/docker-run-static-website