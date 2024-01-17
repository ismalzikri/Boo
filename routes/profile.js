'use strict';

const express = require('express');
const router = express.Router();

const profiles = [
  {
    "id": 1,
    "name": "Elon Musk",
    "description": "Elon Reeve Musk FRS (/ˈiːlɒn/; born June 28, 1971) is a technology entrepreneur, investor, and engineer. He holds South African, Canadian, and U.S. citizenship and is the founder, CEO, and lead designer of SpaceX; co-founder, CEO, and product architect of Tesla, Inc.; co-founder and CEO of Neuralink; founder of The Boring Company; co-founder and co-chairman of OpenAI; and co-founder of PayPal. As of February 2021, Musk's net worth stands at $184 billion, making him the 2nd richest person in the world.",
    "mbti": "INTP",
    "enneagram": "5w6",
    "variant": "so/sp",
    "tritype": 513,
    "socionics": "ILE",
    "sloan": "RCOEI",
    "psyche": "FEVL",
    "image": "https://s.yimg.com/ny/api/res/1.2/G9Av99LYxf3ssnB6DjgFsg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTQzMw--/https://s.yimg.com/os/creatr-uploaded-images/2022-05/de7abfe0-cb88-11ec-a3eb-133c7f4f9017",
    "temperaments": "Phlegmatic[Dominant]"
  }
];

module.exports = function() {

  router.get('/*', function(req, res, next) {
    res.render('profile_template', {
      profile: profiles[0],
    });
  });

  return router;
}

