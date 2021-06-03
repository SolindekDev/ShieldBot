const axios = require('axios')

module.exports = {
    findPersonMoney: async function (playerId) {
        const url = "http://localhost/phpplusmysql/database.php?id=" + playerId;

        let moneyPlayer, response;
        response = await axios.get(url);
        moneyPlayer = response.data;

        return moneyPlayer.liczbakasy;
    }
}