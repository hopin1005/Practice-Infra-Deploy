FROM envoyproxy/envoy:v1.27.0

COPY envoy.yaml /etc/envoy/envoy.yaml

COPY ./ssl/certificate.pem /etc/envoy/certificate.pem

COPY ./ssl/private_key.pem /etc/envoy/private_key.pem

RUN chmod 777 /etc/envoy/envoy.yaml

CMD ["/usr/local/bin/envoy", "-c", "/etc/envoy/envoy.yaml"]