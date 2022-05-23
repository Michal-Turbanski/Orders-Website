const axios = require('axios').default;
const port = Number(process.env.PORT) || 3000;

const edit = async (req, res) => {
    const { data } = await axios.get(`http://127.0.0.1:${port}/api/orders/${req.params.id}`);
    console.log(data);
    res.render('edit', { order: data });
}

module.exports = { edit }