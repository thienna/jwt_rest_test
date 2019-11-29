FROM python:alpine

COPY ["main.py", "requirements.txt", "users.csv", "./"]

WORKDIR ./

RUN apk add --update alpine-sdk \
&& pip3 install -r requirements.txt \
&& apk del alpine-sdk \
&& rm -rf /var/cache/apk/*

ENTRYPOINT [ "python3" ]

CMD [ "main.py" ]
