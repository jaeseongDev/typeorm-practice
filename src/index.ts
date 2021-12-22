import "reflect-metadata";
import { createConnection } from "typeorm";
import { Photo } from "./entity/Photo";

createConnection({
    type: "mariadb",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "admin",
    database: "admin",
    entities: [
        Photo
    ],
    synchronize: true,
    logging: false
}).then(connection => {
    // here you can start to work with your entities
}).catch(error => console.log(error));