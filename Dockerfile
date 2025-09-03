# Usa la imagen oficial de Nginx (ligera y rápida)
FROM nginx:alpine

# Borra la configuración/archivos por defecto
RUN rm -rf /usr/share/nginx/html/*

# Copia tu landing (index.html, css, js, etc.) a la carpeta pública
COPY . /usr/share/nginx/html

# Expone el puerto 80 (HTTP)
EXPOSE 80

# Comando para arrancar Nginx en primer plano
CMD ["nginx", "-g", "daemon off;"]