const connection = require('../db/db.js')

const getPrices = async (req, res, next) => {
  const { id } = req.params
  const sql =
    'SELECT s.name AS station_name,sc.distance,p.product,p.value AS station_price,p2.value AS competitor_price,(p.value - p2.value) AS price_difference FROM  stations_competitors sc JOIN stations s ON sc.cre_id = s.cre_id JOIN prices p ON sc.cre_id = p.cre_id JOIN prices p2 ON sc.cre_id_competitor = p2.cre_id AND p.product = p2.product WHERE s.cre_id = ?'

  const [result] = await connection.promise().query(sql, [id])
  console.log(result)

  return res.json(result)
}

module.exports = {
  getPrices,
}
