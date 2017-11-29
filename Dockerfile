FROM python:3.5
ENV PYTHONUNBUFFERED 1

ADD ./requirements.txt /requirements.txt
ADD ./entrypoint.sh /entrypoint.sh
ADD . /geomate_app

RUN pip install -r requirements.txt

RUN groupadd -r django && useradd -r -g django django

RUN chown -R django /geomate_app && chmod +x entrypoint.sh && chown django entrypoint.sh

WORKDIR /geomate_app

ENTRYPOINT ["/entrypoint.sh"]
