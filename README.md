# Try Vite Vue

WIP...

## Environment

See template [haproxy-with-minica](https://github.com/mitaroThanken/haproxy-with-minica).

### Modify virtual host's name

Edit `VHOST_NAME` in `.env` file.

### Make certs

```shell
docker buildx build --build-arg $(tail -n1 .env) -t try-vite-vue/certs certs/
```

### Export certs

```shell
docker compose up -d --build
```

```shell
docker container cp try-vite-vue-haproxy-1:/usr/local/etc/haproxy/certs - | tar xv
```

```shell
docker compose down
```

### Install trusted root certification

Install `certs/minica.crt` to Trusted Root Certification Authorities.
