build:
	docker build -t inmemories-front .
run: 
	docker run -d -p 3000:3000 -e PORT=3000 --rm --name inmemories-front-container
stop:
	docker stop inmemories-front-container