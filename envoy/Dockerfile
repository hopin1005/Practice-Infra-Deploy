FROM envoyproxy/envoy:v1.27.0

COPY envoy.yaml /etc/envoy/envoy.yaml

RUN chmod 777 /etc/envoy/envoy.yaml

CMD ["/usr/local/bin/envoy", "-c", "/etc/envoy/envoy.yaml"]