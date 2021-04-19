FROM node:alpine

COPY . .

ENTRYPOINT [ "node" ]
CMD [ "." ]
