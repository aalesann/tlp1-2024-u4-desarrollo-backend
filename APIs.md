
# Introducción a las API's

Una API (Interfaz de Programación de Aplicaciones) es un conjunto de definiciones y protocolos que permiten que las aplicaciones se comuniquen entre sí. Las API son esenciales para la integración de sistemas y aplicaciones, ya que facilitan la interacción entre diferentes software de manera eficiente y estructurada.

## Tipos de API's

1. **APIs de Biblioteca (Library APIs):**
   - Proveen una colección de funciones y procedimientos reutilizables que los desarrolladores pueden usar dentro de sus aplicaciones. Ejemplos incluyen las bibliotecas estándar en lenguajes de programación como JavaScript, Python, etc.

2. **APIs del Sistema Operativo (Operating System APIs):**
   - Permiten que las aplicaciones interactúen con el sistema operativo subyacente. Por ejemplo, las API de Windows proporcionan funciones para manejar archivos, memoria, procesos, etc.

3. **APIs de Base de Datos (Database APIs):**
   - Permiten que las aplicaciones se conecten e interactúen con bases de datos. Ejemplos incluyen JDBC para Java, psycopg2 para Python y las APIs de MongoDB.

4. **APIs Web (Web APIs):**
   - Permiten la comunicación y la interacción entre servidores web y aplicaciones web. Estas son las más comunes y pueden clasificarse en varios tipos:

   - **SOAP (Simple Object Access Protocol):**
     - Protocolo basado en XML para intercambiar información estructurada en la implementación de servicios web. Es más complejo y requiere un protocolo estricto.

   - **REST (Representational State Transfer):**
     - Arquitectura ligera que utiliza HTTP para la comunicación. Es simple y flexible, utilizando métodos HTTP estándar (GET, POST, PUT, DELETE).

   - **GraphQL:**
     - Lenguaje de consulta para APIs que permite a los clientes pedir exactamente los datos que necesitan, y nada más. Fue desarrollado por Facebook.

   - **gRPC (Google Remote Procedure Call):**
     - Un marco de llamada a procedimientos remotos (RPC) desarrollado por Google que usa HTTP/2 para el transporte y Protocol Buffers como la interfaz de definición de lenguajes.

## API REST

Las API RESTful son un tipo de API Web que siguen los principios de la arquitectura REST (Representational State Transfer). Son ampliamente utilizadas debido a su simplicidad y flexibilidad.

### Principios de una API RESTful

1. **Cliente-Servidor:**
   - La arquitectura se divide en clientes y servidores. Los clientes son responsables de la interfaz de usuario y los servidores manejan la lógica de negocio y almacenamiento de datos.

2. **Sin Estado (Stateless):**
   - Cada solicitud del cliente al servidor debe contener toda la información necesaria para entender y procesar la solicitud. El servidor no debe almacenar información sobre el estado del cliente entre las solicitudes.

3. **Caché:**
   - Las respuestas deben ser explícitamente indicadas como cachéables o no cachéables para mejorar el rendimiento.

4. **Interfaz Uniforme:**
   - Una interfaz uniforme simplifica y descompone la arquitectura en partes menores, permitiendo la independencia entre cliente y servidor.

5. **Sistema en Capas:**
   - La arquitectura puede estar compuesta de capas jerárquicas, cada una con responsabilidades distintas.

### Métodos HTTP en API REST

1. **GET:**
   - Recupera información del servidor. No modifica el estado del recurso.
   ```http
   GET /api/users
   ```

2. **POST:**
   - Crea un nuevo recurso en el servidor.
   ```http
   POST /api/users
   {
     "name": "John Doe",
     "email": "john.doe@example.com"
   }
   ```

3. **PUT:**
   - Actualiza un recurso existente en el servidor.
   ```http
   PUT /api/users/1
   {
     "name": "John Doe Updated",
     "email": "john.updated@example.com"
   }
   ```

4. **DELETE:**
   - Elimina un recurso del servidor.
   ```http
   DELETE /api/users/1
   ```

5. **PATCH:**
   - Actualiza parcialmente un recurso en el servidor.
   ```http
   PATCH /api/users/1
   {
     "email": "john.partialupdate@example.com"
   }
   ```

### Ventajas de las API REST

- **Simplicidad:**
  - Uso de métodos HTTP estándar.
- **Escalabilidad:**
  - Facilita el crecimiento y la distribución de la carga.
- **Flexibilidad:**
  - Permite diferentes tipos de clientes (navegadores, móviles, IoT) acceder al mismo servicio.
- **Desempeño:**
  - Puede usar caché para mejorar el rendimiento.

