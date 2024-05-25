export const SQL_PROPERTY = {
  VIEW: "SELECT p.property_id, p.title, p.description, p.price, p.address, p.city, p.state, p.property_type, p.name_img, p.img_base64, n.name as neignborhood_name, p.estrato_social as social_state \
	FROM properties p\
  JOIN neighborhoods n ON p.neighborhood_id = n.neighborhood_id\
  LIMIT $1 offset $2",
  VIEW_SIX: "SELECT p.property_id, p.title, p.description, p.price, p.address, p.city, p.state, p.property_type, p.name_img, p.img_base64, n.name as neignborhood_name, p.estrato_social as social_state \
	FROM properties p\
  JOIN neighborhoods n ON p.neighborhood_id = n.neighborhood_id\
  ORDER BY RANDOM()\
  LIMIT 6;",
  INSERT:
    "INSERT INTO properties (title, description, price, address, city, state, property_type,name_img,img_base64, neighborhood_id,estrato_social)\
     VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11)\
     RETURNING property_id;",
  UPDATE:
    "UPDATE properties SET title=$1, description=$2, price=$3, address=$4, city=$5, state=$6, property_type=$7,name_img=$8,img_base64=$9, estrato_social=$11 \
    WHERE property_id=$10 \
    RETURNING property_id;",
  DELETE: "DELETE FROM properties WHERE property_id=$1 RETURNING property_id;",
  SORT_PRICE:
    "SELECT p.property_id, p.title, p.description, p.price, p.address, p.city, p.state, p.property_type, p.name_img, p.img_base64, n.name as neignborhood_name, p.estrato_social as social_state\
  FROM properties p\
  JOIN neighborhoods n ON p.neighborhood_id = n.neighborhood_id\
  ${whereClause}",
  SORT_STRATUM:
    "SELECT p.property_id, p.title, p.description, p.price, p.address, p.city, p.state, p.property_type, p.name_img, p.img_base64, n.name as neignborhood_name\
  FROM properties p\
  JOIN neighborhoods n ON p.neighborhood_id = n.neighborhood_id\
  WHERE p.estrato_social = $1",
  SORT_PROPERTY_TYPE:
    "SELECT p.property_id, p.title, p.description, p.price, p.address, p.city, p.state, p.property_type, p.name_img, p.img_base64, n.name as neignborhood_name\
  FROM properties p\
  JOIN neighborhoods n ON p.neighborhood_id = n.neighborhood_id\
  WHERE p.property_type = $1",
  SORT_STATE:
  "SELECT p.property_id, p.title, p.description, p.price, p.address, p.city, p.state, p.property_type, p.name_img, p.img_base64, n.name as neignborhood_name\
  FROM properties p\
  JOIN neighborhoods n ON p.neighborhood_id = n.neighborhood_id\
  WHERE p.state = $1",
};
