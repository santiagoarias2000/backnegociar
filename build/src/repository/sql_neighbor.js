"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQL_NEIGBOR = void 0;
exports.SQL_NEIGBOR = {
    VIEW: "SELECT neighborhood_id, name \
	FROM neighborhoods;",
    VIEW_NEIG: "SELECT p.property_id, p.title, p.description, p.price, p.address, p.city, p.state, p.property_type, p.name_img, p.img_base64,n.name AS neighborhood_name\
     FROM properties p\
    JOIN neighborhoods n ON p.neighborhood_id = n.neighborhood_id\
    WHERE LOWER(n.name) LIKE LOWER($1);",
};
