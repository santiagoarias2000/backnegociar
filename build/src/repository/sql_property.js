"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQL_PROPERTY = void 0;
exports.SQL_PROPERTY = {
    VIEW: "SELECT p.property_id, p.title, p.description,  p.price, p.address, p.city, p.state, p.property_type, p.neighborhood_id, p.estrato_social, p.area_construida, p.bannos, p.habitaciones, p.parqueadero, \
  json_agg(json_build_object('image_id', pi.image_id, 'image_base64', pi.image_base64, 'name_img', pi.name_img)) AS images \
FROM properties p \
LEFT JOIN property_images pi ON p.property_id = pi.property_id \
GROUP BY \
  p.property_id, p.title, p.description, p.price, p.address, p.city, \
  p.state, p.property_type, p.neighborhood_id, p.estrato_social, \
  p.area_construida, p.bannos, p.habitaciones, p.parqueadero \
ORDER BY p.property_id \
LIMIT $1 OFFSET $2;",
    VIEW_SIX: "SELECT p.property_id, p.title, p.description,  p.price, p.address, p.city, p.state, p.property_type, p.neighborhood_id, p.estrato_social, p.area_construida, p.bannos, p.habitaciones, p.parqueadero, \
    json_agg(json_build_object('image_id', pi.image_id, 'image_base64', pi.image_base64, 'name_img', pi.name_img)) AS images \
  FROM properties p \
  LEFT JOIN property_images pi ON p.property_id = pi.property_id \
  GROUP BY \
    p.property_id, p.title, p.description, p.price, p.address, p.city, \
    p.state, p.property_type, p.neighborhood_id, p.estrato_social, \
    p.area_construida, p.bannos, p.habitaciones, p.parqueadero \
  ORDER BY RANDOM()\
  LIMIT 6;",
    COUNT: "SELECT COUNT(*) FROM properties",
    INSERT: "      SELECT insert_property_with_images(\
      $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13,\
      ARRAY[\
        (1, $14, $15),\
        (2, $16, $17),\
      ]::property_images[]\
    )",
    UPDATE: "UPDATE properties SET title=$1, description=$2, price=$3, address=$4, city=$5, state=$6, property_type=$7,name_img=$8,img_base64=$9, estrato_social=$11, area_construida $12, baños=$13, habitaciones=$14, parqueadero=$15 \
    WHERE property_id=$10 \
    RETURNING property_id;",
    DELETE: "DELETE FROM properties WHERE property_id=$1 RETURNING property_id;",
    SORT_PRICE: "SELECT p.property_id, p.title, p.description, p.price, p.address, p.city, p.state, p.property_type, p.name_img, p.img_base64, n.name as neignborhood_name, p.estrato_social as social_state, area_construida , baños, habitaciones, parqueadero\
  FROM properties p\
  JOIN neighborhoods n ON p.neighborhood_id = n.neighborhood_id\
  ${whereClause}",
    SORT_STRATUM: "SELECT p.property_id, p.title, p.description, p.price, p.address, p.city, p.state, p.property_type, p.name_img, p.img_base64, n.name as neignborhood_name, area_construida , baños, habitaciones, parqueadero\
  FROM properties p\
  JOIN neighborhoods n ON p.neighborhood_id = n.neighborhood_id\
  WHERE p.estrato_social = $1",
    SORT_PROPERTY_TYPE: "SELECT p.property_id, p.title, p.description, p.price, p.address, p.city, p.state, p.property_type, p.name_img, p.img_base64, n.name as neignborhood_name, area_construida , baños, habitaciones, parqueadero\
  FROM properties p\
  JOIN neighborhoods n ON p.neighborhood_id = n.neighborhood_id\
  WHERE p.property_type = $1",
    SORT_STATE: "SELECT p.property_id, p.title, p.description, p.price, p.address, p.city, p.state, p.property_type, p.name_img, p.img_base64, n.name as neignborhood_name, area_construida , baños, habitaciones, parqueadero\
  FROM properties p\
  JOIN neighborhoods n ON p.neighborhood_id = n.neighborhood_id\
  WHERE p.state = $1",
};
