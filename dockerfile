FROM node:19.2-alpine
RUN npm install -g @angular/cli
USER node
WORKDIR /app
EXPOSE 4200 49153 6006
CMD npm start

# docker build -t lib-storybook-tst .
# docker run -it -v $(pwd):/app -p 4200:4200 -p 49153:49153 -p 6006:6006 --name ng lib-storybook-tst sh
# ng new my-app --skip-git


#Need to install the following packages: sb@6.5.14